<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostTermTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_term', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('post_postId')->index('post_postId');
            $table->integer('term_term_id')->index('term_term_id');

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
        Schema::dropIfExists('post_term');
    }
}
