<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTermmetaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('termmeta', function (Blueprint $table) {
            $table->integer('meta_id', true);
            $table->integer('term_id')->index('term_id');
            $table->string('meta_key');
            $table->text('meta_value')->nullable();

            $table->foreign('term_id', 'termmeta_ibfk_1')->references('term_id')->on('terms')->onUpdate('RESTRICT')->onDelete('RESTRICT');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('termmeta');
    }
}
