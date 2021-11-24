<?php
namespace Tabtarh\Gatways;

use Illuminate\Support\ServiceProvider;
class GatwaysServiceProvider extends ServiceProvider{
    public function boot(){
        $config = __DIR__ . '/../config/gateway.php';
        $migrations = __DIR__ . '/../migrations/';
        $this->publishes([
            $config => config_path('gateway.php'),
            $migrations => base_path('database/migrations')
        ], 'gatway-publish')
        ;
    }
    public function register() {
        $this->app->singleton('gateway', function () {
            return new GatewayResolver();
        });
    }
}
