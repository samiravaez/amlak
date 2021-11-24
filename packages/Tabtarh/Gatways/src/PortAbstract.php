<?php

namespace Tabtarh\Gatways;

use Illuminate\Support\Facades\Request;
use Tabtarh\Gatways\Enum;
use Carbon\Carbon;

abstract class PortAbstract {
    protected $transactionId = null;
    protected $transaction = null;
    protected $cardNumber = '';
    protected $config;
    protected $portName;
    protected $uuid;
    protected $refId;
    protected $amount;
    protected $description;
    protected $customInvoiceNo;
    protected $callbackUrl;
    protected $trackingCode;

    function __construct() {
        $this->db = app('db');
    }

    function boot() {

    }

    function setConfig($config) {
        $this->config = $config;
    }

    function getTable() {
        return $this->db->table($this->config->get('gateway.table'));
    }

    function getLogTable() {
        return $this->db->table($this->config->get('gateway.table') . '_logs');
    }

    function getPortName() {
        return $this->portName;
    }

    function setPortName($name) {
        $this->portName = $name;
    }

    function getUserId() {
        return $this->uuid;
    }

    function setUserId($name) {
        $this->uuid = $name;
    }

    function setCustomDesc($description) {
        $this->description = $description;
    }

    function getCustomDesc() {
        return $this->description;
    }

    function setCustomInvoiceNo($invoiceNo) {
        $this->customInvoiceNo = $invoiceNo;
    }

    function getCustomInvoiceNo() {
        return $this->customInvoiceNo;
    }

    function cardNumber() {
        return $this->cardNumber;
    }

    function trackingCode() {
        return $this->trackingCode;
    }

    function transactionId() {
        return $this->transactionId;
    }

    function refId() {
        return $this->refId;
    }

    function price($price) {
        return $this->set($price);
    }

    function getPrice() {
        return $this->amount;
    }

    function verify($transaction) {
        $this->transaction = $transaction;
        $this->transactionId = $transaction->id;
        $this->amount = intval($transaction->price);
        $this->refId = $transaction->ref_id;
    }

    function getTimeId() {
        $genuid = function () {
            return substr(str_pad(str_replace('.', '', microtime(true)), 12, 0), 0, 12);
        };
        $uid = $genuid();
        while ($this->getTable()->whereId($uid)->first())
            $uid = $genuid();
        return $uid;
    }

    protected function newTransaction() {
        $uid = $this->getTimeId();
        $this->transactionId = $this->getTable()->insert([
            "id"=>$uid,
            "user_id" => $this->getUserId(),
            'port' => $this->getPortName(),
            'price' => $this->amount,
            'status' => Enum::TRANSACTION_INIT,
            'ip' => Request::getClientIp(),
            'description' => $this->description,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]) ? $uid : null;

        return $this->transactionId;
    }

    protected function transactionSucceed(array $fields = []) {
        $updateFields = [
            'status' => Enum::TRANSACTION_SUCCEED,
            'tracking_code' => $this->trackingCode,
            'card_number' => $this->cardNumber,
            'payment_date' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];

        if (!empty($fields)) {
            $updateFields = array_merge($updateFields, $fields);
        }

        return $this->getTable()->whereId($this->transactionId)->update($updateFields);
    }

    protected function transactionFailed() {
        return $this->getTable()->whereId($this->transactionId)->update([
            'status' => Enum::TRANSACTION_FAILED,
            'updated_at' => Carbon::now(),
        ]);
    }

    protected function transactionSetRefId() {
        return $this->getTable()->whereId($this->transactionId)->update([
            'ref_id' => $this->refId,
            'updated_at' => Carbon::now(),
        ]);

    }

    protected function makeCallback($url, array $query) {
        return $this->url_modify(array_merge($query, ['_token' => csrf_token()]), url($url));
    }

    protected function url_modify($changes, $url) {
        $url_array = parse_url($url);
        if (!empty($url_array['query'])) {
            parse_str($url_array['query'], $query_array);
            $query_array = array_merge($query_array, $changes);
        } else {
            $query_array = $changes;
        }

        return (!empty($url_array['scheme']) ? $url_array['scheme'] . '://' : null) .
            (!empty($url_array['host']) ? $url_array['host'] : null) .
            (!empty($url_array['port']) ? ':' . $url_array['port'] : null) .
            (!empty($url_array['path']) ? $url_array['path'] : null) .
            '?' . http_build_query($query_array);
    }
}
