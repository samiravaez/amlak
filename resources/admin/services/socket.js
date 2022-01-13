import Echo from 'laravel-echo';
import http from "./businessHttpServices"
import config from "./config.json";


window.Pusher = require('pusher-js');


let webSocketUrl = 'ws.azunja.ir';

let MIX_PUSHER_APP_KEY = '4836f046adedcec4b218';

window.Pusher.logToConsole = false;
window.Echo = new Echo({
  broadcaster: 'pusher',
  key: MIX_PUSHER_APP_KEY,
  wsHost: webSocketUrl,
  wsPort: 80,
  disableStats: true,
  forceTLS: true,
  authorizer: (channel, options) => {
    return {
      authorize: (socketId, callback) => {
        http.post(`${config.mainApi}/broadcasting/auth`, {
          socket_id: socketId,
          channel_name: channel.name
        })
          .then(response => {
            callback(false, response.data);
          })
          .catch(error => {
            callback(true, error);
          });
      }
    };
  },
});
