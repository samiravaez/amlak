<?php

namespace Tabtarh\Gatways\Exceptions;

class InvalidRequestException extends GatewayException {

	protected $code=-104;
	protected $message='اطلاعات بازگشتی از بانک صحیح نمی باشد. ';
}
