<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTermsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('terms', function (Blueprint $table) {
            $table->integer('term_id', true);
            $table->integer('term_type')->index('term_type');
            $table->integer('parent')->default(0);
            $table->string('term_name');
            $table->string('term_slug');
            $table->string('term_description')->nullable();
            $table->integer('term_order')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('terms');
    }
}
