<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('emails', function (Blueprint $table) {
            $table->id();
            $table->string('body')->nullable();
            $table->timestamp('send_time')->nullable();
            $table->boolean('reminder')->default(0); //0 or 1
            $table->timestamp('reminder_time')->nullable();
            $table->integer('priority')->nullable(); //the range is 0-4, 0=low priority
            $table->integer('status')->nullable(); //the range is 0-4, 0=not sent, 1=sent
            $table->integer('weight')->nullable();
            $table->string('file')->nullable();
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
        Schema::dropIfExists('emails');
    }
}
