<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChequesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cheques', function (Blueprint $table) {
            $table->id();
            $table->string('serial_number')->nullable();
            $table->timestamp('date')->nullable();
            $table->string('bank')->nullable();
            $table->integer('value')->nullable();
            $table->unsignedBigInteger('giver_owner')->nullable();
            $table->unsignedBigInteger('receiver_owner')->nullable();
            $table->string('in_charge')->nullable(); //dar vajhe
            $table->string('account_number')->nullable();
            $table->string('photo')->nullable();
            $table->integer('trash')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cheques');
    }
}
