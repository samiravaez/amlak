<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToTblBakhshTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tbl_bakhsh', function (Blueprint $table) {
            $table->foreign('PK_Mantaghe', 'tbl_bakhsh_ibfk_1')->references('ID')->on('tbl_mantaghe')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tbl_bakhsh', function (Blueprint $table) {
            $table->dropForeign('tbl_bakhsh_ibfk_1');
        });
    }
}
