<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserAddsTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_adds_types', function (Blueprint $table) {
            $table->integer('id', true);
            $table->unsignedBigInteger('user_id')->index('user_id');
            $table->integer('transaction_id');
            $table->integer('land_type_id');

            $table->foreign('user_id', 'user_adds_types_ibfk_1')->references('id')->on('users')->onUpdate('RESTRICT')->onDelete('RESTRICT');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_adds_types');
    }
}
