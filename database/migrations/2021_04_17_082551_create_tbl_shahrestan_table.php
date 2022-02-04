<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblShahrestanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_shahrestan', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('PK_Ostan')->nullable()->index('PK_Ostan');
            $table->string('Title')->nullable();
            $table->integer('trash')->default(0);

            $table->foreign('PK_Ostan', 'tbl_shahrestan_ibfk_1')->references('ID')->on('tbl_ostan')->onUpdate('RESTRICT')->onDelete('RESTRICT');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_shahrestan');
    }
}
