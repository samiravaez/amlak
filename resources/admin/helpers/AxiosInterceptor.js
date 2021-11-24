import React from 'react'
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

const AxiosInterceptor = ({children, currentUser}) => {
  const history = useHistory();
  React.useEffect(() => {
    const reqInterceptor = axios.interceptors.request.use(
      (requestConfig) => {
        return requestConfig;
      });
    const resInterceptor = axios.interceptors.response.use(
      (response) => (response),
      (error) => {
        switch (error.response.status) {
          case 403:
            history.push("/tbt-panel/error", {status: error.response.status});
            break;
        }
        return Promise.reject(error);
      });

    return () => {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    }
  }, [currentUser, ]);

  return children;
}

const mapStateToProps = ({authUser: {currentUser}}) => {
  return {currentUser}
}


export default connect(mapStateToProps)(AxiosInterceptor);
