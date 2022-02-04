<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDealsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deals', function (Blueprint $table) {
            $table->id();
            $table->string('topic')->nullable();
            $table->integer('type')->nullable(); //0=sell 1=mortgage 2=rent
            $table->string('contract_number')->nullable();
            $table->integer('prepayment')->nullable();
            $table->integer('price')->nullable();  //if type=1:rahn, if type=2:pish
            $table->integer('rent')->nullable();
            $table->integer('state')->nullable();
            $table->text('failure_reason')->nullable();
            $table->integer('price_method')->nullable(); //0=cash 1=cheque
            $table->integer('rent_method')->nullable(); //0=cash 1=cheque
            $table->integer('prepayment_method')->nullable(); //0=cash 1=cheque
            $table->timestamp('start_date')->nullable();
            $table->timestamp('end_date')->nullable(); //end_of_contract
            $table->text('description')->nullable();
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
        Schema::dropIfExists('deals');
    }
}
