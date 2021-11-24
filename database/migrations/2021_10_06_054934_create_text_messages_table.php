<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTextMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('text_messages', function (Blueprint $table) {
            $table->id();
            $table->text('body')->nullable();
            $table->timestamp('send_time')->nullable();
            $table->integer('message_side')->nullable(); //0=incoming, 1=outgoing
            $table->boolean('reminder')->default(0); //0 or 1
            $table->timestamp('reminder_time')->nullable();
            $table->integer('priority')->nullable(); //the range is 0-4, 0=low priority
            $table->integer('weight')->nullable();
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
        Schema::dropIfExists('text_messages');
    }
}
