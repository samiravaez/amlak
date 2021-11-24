<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEntitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('mobile_unique')->unique();
            $table->string('phone')->nullable();
            $table->string('id_number')->nullable();
            $table->bigInteger('creator_id')->unsigned()->nullable();
            $table->string('launch_date')->nullable();
            $table->integer('staff_count')->nullable();
            $table->integer('start_working_time')->nullable();
            $table->integer('finish_working_time')->nullable();
            $table->string('economic_code')->nullable();
            $table->string('registration_number')->nullable();
            $table->unsignedBigInteger('industry_id')->nullable();
            $table->string('business_class')->nullable(); //senf
            $table->string('company_type')->nullable(); //sahaami aam or limited responsibility
            $table->boolean('representative')->default(0)->nullable(); //1=namayandegi 0=not namayandegi
            $table->string('fax')->nullable();
            $table->integer('weekly_customers_count')->nullable();
            $table->string('business_card')->nullable();
            $table->integer('trash')->default(0);
            $table->timestamps();

            $table->foreign('industry_id')->references('id')->on('industries');
            $table->foreign('creator_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('entities');
    }
}
