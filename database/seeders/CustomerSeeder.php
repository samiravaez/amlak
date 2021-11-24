<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('customers')->insert([
            [
                'first_name' => 'سارا',
                'last_name' => 'احمدی',
                'customer_type_id' => 1,
                'mobile_number'=> '09334445566',
                'mobile_unique'=> '09334445566',
            ],
            [
                'first_name' => 'امیر',
                'last_name' => 'امیری',
                'customer_type_id' => 2,
                'mobile_number'=> '09334445577',
                'mobile_unique'=> '09334445577',
            ],
        ]);
    }
}
