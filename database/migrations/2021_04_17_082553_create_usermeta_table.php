<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsermetaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usermeta', function (Blueprint $table) {
            $table->bigIncrements('meta_id');
            $table->unsignedBigInteger('user_id')->index('user_id');
            $table->string('meta_key', 256);
            $table->text('meta_value')->nullable();

            $table->foreign('user_id', 'usermeta_ibfk_1')->references('id')->on('users')->onUpdate('RESTRICT')->onDelete('RESTRICT');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usermeta');
    }
}
