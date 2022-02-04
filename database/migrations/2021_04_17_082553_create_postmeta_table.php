<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostmetaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('postmeta', function (Blueprint $table) {
            $table->integer('meta_id', true);
            $table->integer('post_id')->index('post_id');
            $table->string('meta_key');
            $table->text('meta_value')->nullable();

            $table->foreign('post_id', 'postmeta_ibfk_1')->references('postId')->on('posts')->onUpdate('RESTRICT')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('postmeta');
    }
}
