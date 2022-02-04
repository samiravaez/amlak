<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCrmTermTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crm_term', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('crm_id')->index('crm_id');
            $table->integer('term_term_id')->index('term_term_id');

            $table->foreign('crm_id', 'crm_term_ibfk_1')->references('id')->on('crm')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('term_term_id', 'crm_term_ibfk_2')->references('term_id')->on('terms')->onUpdate('RESTRICT')->onDelete('RESTRICT');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('crm_term');
    }
}
