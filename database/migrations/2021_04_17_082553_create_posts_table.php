<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->integer('postId', true);
            $table->string('name');
            $table->string('slug');
            $table->text('description')->nullable();
            $table->integer('author')->nullable()->default(0);
            $table->string('image', 511)->nullable();
            $table->smallInteger('status')->default(0);
            $table->integer('trash')->default(0);
            $table->string('post_type');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
