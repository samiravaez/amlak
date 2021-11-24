<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblBakhshTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_bakhsh', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('PK_Mantaghe')->index('PK_Mantaghe');
            $table->string('Title');
            $table->integer('trash')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_bakhsh');
    }
}
