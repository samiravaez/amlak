<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToTblMantagheTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tbl_mantaghe', function (Blueprint $table) {
            $table->foreign('PK_Shahrestan', 'tbl_mantaghe_ibfk_1')->references('ID')->on('tbl_shahrestan')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tbl_mantaghe', function (Blueprint $table) {
            $table->dropForeign('tbl_mantaghe_ibfk_1');
        });
    }
}
