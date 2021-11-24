<?php

namespace Tabtarh\Gatways;

interface PortInterface
{
    public function set($amount);
    public function ready();
    public function refId();
    public function trackingCode();
    public function getPortName();
    public function transactionId();
    public function cardNumber();
    public function setCallback($url);
    public function getCallback();
    public function redirect();
    public function verify($transaction);
}
