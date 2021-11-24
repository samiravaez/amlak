<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomerDealTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer_deal', function (Blueprint $table) {
            $table->unsignedBigInteger('customer_id');
            $table->unsignedBigInteger('deal_id');
            $table->integer('role')->nullable(); //0 = buyer or tenant, 1=seller or landlord
            $table->integer('trash')->default(0);
            $table->timestamps();

            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');;
            $table->foreign('deal_id')->references('id')->on('deals')->onDelete('cascade');;

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customer_deal');
    }
}
