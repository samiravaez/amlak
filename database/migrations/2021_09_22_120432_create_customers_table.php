<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('username')->nullable();
            $table->string('mobile_unique')->unique();
            $table->integer('gender')->nullable(); //0=male 1=female 2=non-binary
            $table->string('email')->nullable()->unique();
            $table->string('id_number')->nullable();
            $table->integer('monthly_income')->nullable();
            $table->unsignedBigInteger('customer_state_id')->nullable();
            $table->unsignedBigInteger('purchase_stage_id')->nullable();
//            $table->integer('entity')->nullable(); //0=individual 1=entity
            $table->unsignedBigInteger('creator_id')->nullable();
            $table->unsignedBigInteger('customer_type_id')->nullable();
            $table->integer('mantaghe_id')->nullable();
            $table->integer('shahrestan_id')->nullable();
            $table->integer('bakhsh_id')->nullable();
            $table->string('mobile_number')->nullable();
            $table->string('phone')->nullable();
            $table->integer('marital_status')->nullable();
            $table->integer('fund_value')->nullable();
            $table->timestamp('birth_date')->nullable();
            $table->timestamp('spouse_birth_date')->nullable();
            $table->timestamp('marriage_date')->nullable();
            $table->integer('children_count')->nullable();
            $table->integer('financial_status')->nullable();
            $table->string('physical_status')->nullable();
            $table->string('furniture_status')->nullable(); //0=classic 1=modern
            $table->string('experience_company')->nullable();
            $table->unsignedBigInteger('education_level_id')->nullable();
            $table->unsignedBigInteger('eye_color_id')->nullable();
            $table->unsignedBigInteger('career_id')->nullable();
            $table->string('residence_change_reason')->nullable();
            $table->string('website')->nullable();
            $table->string('file')->nullable();
            $table->string('photo')->nullable();
            $table->string('description')->nullable();
            $table->unsignedBigInteger('attendant_id')->nullable(); //hozur ba
            $table->string('birth_certificate')->nullable(); //شناسنامه
            $table->string('id_card')->nullable();
            $table->integer('trash')->default(0);
            $table->timestamps();

            $table->foreign('creator_id')->references('id')->on('users');
            $table->foreign('education_level_id')->references('id')->on('education_levels');
            $table->foreign('eye_color_id')->references('id')->on('eye_colors');
            $table->foreign('career_id')->references('id')->on('careers');
            $table->foreign('customer_type_id')->references('id')->on('customer_types');
            $table->foreign('customer_state_id')->references('id')->on('customer_states');
            $table->foreign('purchase_stage_id')->references('id')->on('purchase_stages');
            $table->foreign('mantaghe_id')->references('ID')->on('tbl_mantaghe');
            $table->foreign('attendant_id')->references('id')->on('attendants');
            $table->foreign('shahrestan_id')->references('ID')->on('tbl_shahrestan');
            $table->foreign('bakhsh_id')->references('ID')->on('tbl_bakhsh');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
