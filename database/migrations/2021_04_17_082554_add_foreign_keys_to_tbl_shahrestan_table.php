<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToTblShahrestanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tbl_shahrestan', function (Blueprint $table) {
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
        Schema::table('tbl_shahrestan', function (Blueprint $table) {
            $table->dropForeign('tbl_shahrestan_ibfk_1');
        });
    }
}
