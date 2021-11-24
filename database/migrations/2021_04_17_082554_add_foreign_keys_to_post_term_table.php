<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPostTermTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('post_term', function (Blueprint $table) {
            $table->foreign('post_postId', 'post_term_ibfk_1')->references('postId')->on('posts')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('term_term_id', 'post_term_ibfk_2')->references('term_id')->on('terms')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('post_term', function (Blueprint $table) {
            $table->dropForeign('post_term_ibfk_1');
            $table->dropForeign('post_term_ibfk_2');
        });
    }
}
