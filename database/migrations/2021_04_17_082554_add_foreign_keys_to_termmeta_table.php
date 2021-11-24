<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToTermmetaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('termmeta', function (Blueprint $table) {
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
        Schema::table('termmeta', function (Blueprint $table) {
            $table->dropForeign('termmeta_ibfk_1');
        });
    }
}
