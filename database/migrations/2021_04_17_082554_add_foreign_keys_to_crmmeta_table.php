<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToCrmmetaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('crmmeta', function (Blueprint $table) {
            $table->foreign('crm_id', 'crmmeta_ibfk_1')->references('id')->on('crm')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('crmmeta', function (Blueprint $table) {
            $table->dropForeign('crmmeta_ibfk_1');
        });
    }
}
