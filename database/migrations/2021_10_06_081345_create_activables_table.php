<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
   //pivot table for MTM morph relation between User/Customer and Activity
    public function up()
    {
        Schema::create('activables', function (Blueprint $table) {
            $table->unsignedBigInteger('activity_id');
            $table->unsignedBigInteger('activable_id');
            $table->string('activable_type');
            $table->integer('role')->default(0); //0=participant,1=receiver, 2=cc, 3=bcc
            $table->integer('trash')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activables');
    }
}
