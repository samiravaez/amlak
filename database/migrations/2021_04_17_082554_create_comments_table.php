<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->integer('comment_id', true);
            $table->text('comment_text');
            $table->unsignedBigInteger('comment_user')->index('comment_user');
            $table->integer('comment_post')->index('comment_post');
            $table->integer('comment_parent');
            $table->integer('comment_status')->default(0);
            $table->timestamp('created_at')->useCurrent();

            $table->foreign('comment_user', 'comments_ibfk_1')->references('id')->on('users')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('comment_post', 'comments_ibfk_2')->references('postId')->on('posts')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
