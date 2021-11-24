<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->string('address')->nullable();
            $table->integer('shahrestan_id')->nullable();
            $table->integer('mantaghe_id')->nullable();
            $table->integer('bakhsh_id')->nullable();
            $table->unsignedBigInteger('addressable_id')->nullable();
            $table->string('addressable_type')->nullable();
            $table->integer('trash')->default(0);
            $table->timestamps();

            $table->foreign('mantaghe_id')->references('ID')->on('tbl_mantaghe');
            $table->foreign('shahrestan_id')->references('ID')->on('tbl_shahrestan');
            $table->foreign('bakhsh_id')->references('ID')->on('tbl_bakhsh');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
}
