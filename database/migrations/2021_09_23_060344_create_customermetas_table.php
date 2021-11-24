<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomermetasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customermetas', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('value');
            $table->unsignedBigInteger('customer_id')->nullable();
            $table->integer('trash')->default(0);
            $table->timestamps();

            $table->foreign('customer_id')->references('id')->on('customers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customermetas');
    }
}
