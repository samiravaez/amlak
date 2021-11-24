<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOffersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offers', function (Blueprint $table) {
            $table->id();
            $table->string('topic')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('customer_id')->nullable();
            $table->integer('post_id')->nullable();
            $table->text('description')->nullable();
            $table->string('file')->nullable();
            $table->integer('state')->default(0); // 0=new, 1=old(seen)
            $table->integer('rejected')->default(0); // 1= rejected
            $table->text('reject_reason')->nullable();
            $table->integer('trash')->default(0);
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('customer_id')->references('id')->on('customers');
            $table->foreign('post_id')->references('postId')->on('posts');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offers');
    }
}
