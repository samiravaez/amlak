<?php

namespace Tabtarh\Gatways;
use Tabtarh\Gatways\zarinpal\zarinpal;
use Tabtarh\Gatways\Exceptions\RetryException;
use Tabtarh\Gatways\Exceptions\PortNotFoundException;
use Tabtarh\Gatways\Exceptions\InvalidRequestException;
use Tabtarh\Gatways\Exceptions\NotFoundTransactionException;
use Illuminate\Support\Facades\DB;
class GatewayResolver {
    public $config;
    protected $port;

    public function __construct() {
        $this->config = app('config');
        $this->request = app('request');
        //dd($this->config);
    }

    public function getSupportedPorts() {
        return (array)Enum::getIPGs();
    }

    function getTable() {
        return DB::table($this->config->get('gateway.table'));
    }

    function make($port, $uuid) {
        if ($port InstanceOf Zarinpal) {
            $name = Enum::ZARINPAL;
        } elseif (in_array(strtoupper($port), $this->getSupportedPorts())) {
            $port = ucfirst(strtolower($port));
            $name = strtoupper($port);
            $class = __NAMESPACE__ . '\\' . $port . '\\' . $port;
            $port = new $class;
        } else
            throw new PortNotFoundException;

        $this->port = $port;
        $this->port->setConfig($this->config);
        $this->port->setUserId($uuid);
        $this->port->setPortName($name);
        $this->port->boot();

        return $this->port;
    }

    public function verify() {
        if (!$this->request->has('transaction_id') && !$this->request->has('iN'))
            throw new InvalidRequestException;
        if ($this->request->has('transaction_id')) {
            $id = $this->request->get('transaction_id');
        } else {
            $id = $this->request->get('iN');
        }

        $transaction = $this->getTable()->whereId($id)->first();

        if (!$transaction)
            throw new NotFoundTransactionException;

        if (in_array($transaction->status, [Enum::TRANSACTION_SUCCEED, Enum::TRANSACTION_FAILED]))
            throw new RetryException;

        $this->make($transaction->port,$transaction->user_id);

        return $this->port->verify($transaction);
    }
}
