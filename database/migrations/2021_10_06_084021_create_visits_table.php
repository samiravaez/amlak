<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visits', function (Blueprint $table) {
            $table->id();
            $table->timestamp('start_time')->nullable();
            $table->string('location')->nullable(); //mahalle gharar
            $table->boolean('reminder')->default(0);
            $table->integer('post_id')->nullable();
            $table->timestamp('reminder_time')->nullable();
            $table->unsignedBigInteger('remind_method_id')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('customer_id')->nullable();
            $table->unsignedBigInteger('deal_id')->nullable();
            $table->integer('priority')->nullable(); //the range is 0-4, 0=low priority
            $table->integer('cost')->nullable();
            $table->integer('status')->nullable(); //the range is 0-4, 0=open 4=canceled
            $table->integer('duration')->nullable(); //minutes format
            $table->text('seller_report')->nullable();
            $table->text('buyer_report')->nullable();
            $table->string('file')->nullable();
            $table->integer('trash')->default(0);
            $table->timestamps();

            $table->foreign('post_id')->references('postId')->on('posts');
            $table->foreign('remind_method_id')->references('id')->on('remind_methods');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('customer_id')->references('id')->on('customers');
            $table->foreign('deal_id')->references('id')->on('deals');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('visits');
    }
}
