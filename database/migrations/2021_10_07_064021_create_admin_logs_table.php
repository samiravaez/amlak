<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_logs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('admin_id')->unsigned();
            $table->string('type')->nullable() ; //tha range is 0-3 for CRUD
            $table->string('model_name')->nullable();
            $table->integer('record_id')->nullable();
            $table->text('old_value')->nullable();
            $table->text('new_value')->nullable();
            $table->string('message') ;
            $table->text('user_agent') ;
            $table->string('ip',39) ;
            $table->text('details')->default(null)->nullable();
            $table->timestamps();

            $table->foreign('admin_id')->references('id')->on('users') ;

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admin_logs');
    }
}
