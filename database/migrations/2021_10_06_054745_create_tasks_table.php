<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->timestamp('start_time')->nullable();
            $table->timestamp('end_time')->nullable();
            $table->integer('progress_rate')->nullable(); //unit = percent
            $table->boolean('reminder')->default(0); //0 or 1
            $table->timestamp('reminder_time')->nullable();
            $table->integer('priority')->nullable(); //the range is 0-4, 0=low priority
            $table->integer('cost')->nullable();
            $table->integer('status')->nullable(); //the range is 0-4, 0=open 4=canceled
            $table->integer('type')->nullable();
            $table->integer('weight')->nullable();
            $table->integer('duration')->nullable(); //minutes format
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
        Schema::dropIfExists('tasks');
    }
}
