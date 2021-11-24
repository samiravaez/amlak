<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCrmTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crm', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('expert_id');
            $table->unsignedBigInteger('customer_id')->index('customer_id');
            $table->tinyInteger('customer_type')->nullable();
            $table->tinyInteger('pay_method')->nullable();
            $table->tinyInteger('talking')->nullable();
            $table->tinyInteger('purchase_stage')->nullable();
            $table->text('description')->nullable();
            $table->timestamp('created_at')->nullable()->useCurrent();
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
        Schema::dropIfExists('crm');
    }
}
