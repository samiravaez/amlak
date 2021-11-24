<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDealUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deal_user', function (Blueprint $table) {
            $table->unsignedBigInteger('deal_id');
            $table->unsignedBigInteger('user_id');
            $table->integer('trash')->default(0);
            $table->integer('profit_type')->nullable(); //0=fixed value, 1=percent
            $table->integer('profit_value')->nullable();
            $table->timestamp('payment_date')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');;
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
        Schema::dropIfExists('deal_user');
    }
}
