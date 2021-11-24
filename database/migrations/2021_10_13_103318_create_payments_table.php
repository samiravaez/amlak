<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('issue')->nullable(); //0=prepayment, 1=price, 2=rent
            $table->unsignedBigInteger('payed_value')->nullable();
            $table->integer('receiver')->nullable();
            $table->unsignedBigInteger('payer')->nullable();
            $table->string('receipt_photo')->nullable();
            $table->integer('trash')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
