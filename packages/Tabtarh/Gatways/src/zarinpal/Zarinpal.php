<?php

namespace Tabtarh\Gatways\zarinpal;

use DateTime;
use Illuminate\Support\Facades\Request;
use Tabtarh\Gatways\Enum;
use SoapClient;
use Tabtarh\Gatways\PortAbstract;
use Tabtarh\Gatways\PortInterface;

class Zarinpal extends PortAbstract implements PortInterface {
    protected $germanyServer = 'https://de.zarinpal.com/pg/services/WebGate/wsdl';
    protected $iranServer = 'https://ir.zarinpal.com/pg/services/WebGate/wsdl';
    protected $sandboxServer = 'https://sandbox.zarinpal.com/pg/services/WebGate/wsdl';
    protected $serverUrl;
    protected $description;
    protected $email;
    protected $mobileNumber;
    protected $gateUrl = 'https://www.zarinpal.com/pg/StartPay/';
    protected $sandboxGateUrl = 'https://sandbox.zarinpal.com/pg/StartPay/';
    protected $zarinGateUrl = 'https://www.zarinpal.com/pg/StartPay/$Authority/ZarinGate';

    public function boot() {
        $this->setServer();
    }

    public function set($amount) {
        $this->amount = ($amount / 10);
        return $this;
    }

    protected function sendPayRequest() {
        $this->newTransaction();

        $fields = array(
            'MerchantID' => $this->config->get('gateway.zarinpal.merchant-id'),
            'Amount' => $this->amount,
            'CallbackURL' => $this->getCallback(),
            'Description' => $this->description ? $this->description : $this->config->get('gateway.zarinpal.description', ''),
            'Email' => $this->email ? $this->email : $this->config->get('gateway.zarinpal.email', ''),
            'Mobile' => $this->mobileNumber ? $this->mobileNumber : $this->config->get('gateway.zarinpal.mobile', ''),
        );

        try {
            $soap = new SoapClient($this->serverUrl, ['encoding' => 'UTF-8']);
            $response = $soap->PaymentRequest($fields);

        } catch (\SoapFault $e) {
            $this->transactionFailed();
            throw $e;
        }
        if ($response->Status != 100) {
            $this->transactionFailed();
            throw new ZarinpalException($response->Status);
        }

        $this->refId = $response->Authority;
        $this->transactionSetRefId();
    }

    public function ready() {
        $this->sendPayRequest();

        return $this;
    }
    public function redirect() {
        switch ($this->config->get('gateway.zarinpal.type')) {
            case 'zarin-gate':
                return \Redirect::to(str_replace('$Authority', $this->refId, $this->zarinGateUrl));
                break;

            case 'normal':
            default:
                return \Redirect::to($this->gateUrl . $this->refId);
                break;
        }
    }
    public function verify($transaction) {
        parent::verify($transaction);

        $this->userPayment();
        $this->verifyPayment();

        return $this;
    }
    function setCallback($url) {
        $this->callbackUrl = $url;
        return $this;
    }

    /**
     * Gets callback url
     * @return string
     */
    function getCallback() {
        if (!$this->callbackUrl)
            $this->callbackUrl = $this->config->get('gateway.zarinpal.callback-url');

        return $this->makeCallback($this->callbackUrl, ['transaction_id' => $this->transactionId()]);
    }
    protected function userPayment() {
        $this->authority = Request::input('Authority');
        $status = Request::input('Status');

        if ($status == 'OK') {
            return true;
        }

        $this->transactionFailed();
        throw new ZarinpalException(-22);
    }
    protected function verifyPayment() {

        $fields = array(
            'MerchantID' => $this->config->get('gateway.zarinpal.merchant-id'),
            'Authority' => $this->refId,
            'Amount' => $this->amount,
        );

        try {
            $soap = new SoapClient($this->serverUrl, ['encoding' => 'UTF-8']);
            $response = $soap->PaymentVerification($fields);

        } catch (\SoapFault $e) {
            $this->transactionFailed();
            throw $e;
        }

        if ($response->Status != 100 && $response->Status != 101) {
            $this->transactionFailed();
            throw new ZarinpalException($response->Status);
        }

        $this->trackingCode = $response->RefID;
        $this->transactionSucceed();
        return true;
    }
    protected function setServer() {
        $server = $this->config->get('gateway.zarinpal.server', 'iran');
        switch ($server) {
            case 'iran':
                $this->serverUrl = $this->iranServer;
                break;

            case 'test':
                $this->serverUrl = $this->sandboxServer;
                $this->gateUrl = $this->sandboxGateUrl;
                break;

            case 'germany':
            default:
                $this->serverUrl = $this->germanyServer;
                break;
        }
    }
    public function setDescription($description) {
        $this->description = $description;
    }
    public function setEmail($email) {
        $this->email = $email;
    }
    public function setMobileNumber($number) {
        $this->mobileNumber = $number;
    }
}
