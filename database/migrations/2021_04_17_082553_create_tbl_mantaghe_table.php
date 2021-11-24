<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblMantagheTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_mantaghe', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('PK_Shahrestan')->index('PK_Shahrestan');
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
        Schema::dropIfExists('tbl_mantaghe');
    }
}
