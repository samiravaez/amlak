<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consults', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('customer_id')->nullable();
            $table->integer('initial_consult_type')->nullable(); //0=telephoni 1=hozuri
            $table->timestamp('initial_consult_time')->nullable();
            $table->text('initial_consult_description')->nullable();
            $table->string('initial_consult_file')->nullable();
            $table->integer('trust_consult_type')->nullable(); //0=telephoni 1=hozuri
            $table->timestamp('trust_consult_time')->nullable();
            $table->text('trust_consult_description')->nullable();
            $table->string('trust_consult_file')->nullable();
            $table->integer('offer_consult_type')->nullable(); //0=telephoni 1=hozuri
            $table->timestamp('offer_consult_time')->nullable();
            $table->text('offer_consult_description')->nullable();
            $table->string('offer_consult_file')->nullable();
            $table->integer('service_consult_type')->nullable(); //0=telephoni 1=hozuri
            $table->timestamp('service_consult_time')->nullable();
            $table->text('service_consult_description')->nullable();
            $table->string('service_consult_file')->nullable();
            $table->integer('choice_consult_type')->nullable(); //0=telephoni 1=hozuri
            $table->timestamp('choice_consult_time')->nullable();
            $table->text('choice_consult_description')->nullable();
            $table->string('choice_consult_file')->nullable();
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
        Schema::dropIfExists('consults');
    }
}
