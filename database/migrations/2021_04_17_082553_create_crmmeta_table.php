<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCrmmetaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crmmeta', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('crm_id')->index('crm_id');
            $table->boolean('isJson');
            $table->string('meta_key', 256);
            $table->text('meta_value')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('crmmeta');
    }
}
