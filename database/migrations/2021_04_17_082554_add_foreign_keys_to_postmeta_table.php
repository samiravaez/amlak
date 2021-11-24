<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPostmetaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('postmeta', function (Blueprint $table) {
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
        Schema::table('postmeta', function (Blueprint $table) {
            $table->dropForeign('postmeta_ibfk_1');
        });
    }
}
