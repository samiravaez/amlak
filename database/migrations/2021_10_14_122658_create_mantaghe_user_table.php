<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMantagheUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mantaghe_user', function (Blueprint $table) {
            $table->integer('mantaghe_id');
            $table->unsignedBigInteger('user_id');
            $table->integer('not_anymore')->default(0);
            $table->integer('trash')->default(0);
            $table->timestamps();

            $table->foreign('mantaghe_id')->references('ID')->on('tbl_mantaghe');
            $table->foreign('user_id')->references('id')->on('users');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mantaghe_user');
    }
}
