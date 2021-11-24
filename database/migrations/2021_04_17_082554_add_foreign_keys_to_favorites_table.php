<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToFavoritesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('favorites', function (Blueprint $table) {
            $table->foreign('post_id', 'favorites_ibfk_1')->references('postId')->on('posts')->onUpdate('RESTRICT')->onDelete('CASCADE');
            $table->foreign('user_id', 'favorites_ibfk_2')->references('id')->on('users')->onUpdate('RESTRICT')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('favorites', function (Blueprint $table) {
            $table->dropForeign('favorites_ibfk_1');
            $table->dropForeign('favorites_ibfk_2');
        });
    }
}
