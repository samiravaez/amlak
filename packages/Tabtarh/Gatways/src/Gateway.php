<?php

namespace Tabtarh\Gatways;

use Illuminate\Support\Facades\Facade;

class Gateway extends Facade {
    protected static function getFacadeAccessor() {
        return 'gateway';
    }
}
