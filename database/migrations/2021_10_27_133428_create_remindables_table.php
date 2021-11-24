<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRemindablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('remindables', function (Blueprint $table) {
            $table->unsignedBigInteger('remind_method_id');
            $table->unsignedBigInteger('remindable_id');
            $table->string('remindable_type');
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
        Schema::dropIfExists('remindables');
    }
}
