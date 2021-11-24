<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activities', function (Blueprint $table) {

            $table->id();
            $table->string('topic')->nullable();
            $table->string('description')->nullable();
            $table->bigInteger('creator_id')->unsigned()->nullable();
            $table->unsignedBigInteger('actionable_id')->default(null);
            $table->string('actionable_type')->default(null);
            $table->integer('trash')->default(0);
            $table->timestamps();

            $table->foreign('creator_id')->references('id')->on('users');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activities');
    }
}
