<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomerEntityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer_entity', function (Blueprint $table) {
            $table->unsignedBigInteger('customer_id');
            $table->unsignedBigInteger('entity_id');
            $table->integer('position')->nullable();
            $table->integer('experience_days')->nullable();
            $table->integer('trash')->default(0);
            $table->timestamps();


            $table->unique(['customer_id', 'entity_id']);

            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');;
            $table->foreign('entity_id')->references('id')->on('entities')->onDelete('cascade');;

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customer_entity');
    }
}
