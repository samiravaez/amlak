<?php

namespace Tabtarh\Gatways\zarinpal;

use Illuminate\Support\Facades\Request;
use Tabtarh\Gatways\Enum;
use SoapClient;
use Tabtarh\Gatways\PortAbstract;
use Tabtarh\Gatways\PortInterface;

class mellat extends PortAbstract implements PortInterface{


    public function set($amount) {
        // TODO: Implement set() method.
    }

    public function ready() {
        // TODO: Implement ready() method.
    }

    public function setCallback($url) {
        // TODO: Implement setCallback() method.
    }

    public function getCallback() {
        // TODO: Implement getCallback() method.
    }

    public function redirect() {
        // TODO: Implement redirect() method.
    }
}
