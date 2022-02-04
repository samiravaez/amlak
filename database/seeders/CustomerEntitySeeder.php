<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomerEntitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('customer_entity')->insert([
            [
                'customer_id' => 1,
                'entity_id' => 1,
                'position' => 0,
                'trash' => 0
            ],
            [
                'customer_id' => 1,
                'entity_id' => 2,
                'position' => 1,
                'trash' => 0
            ],

        ]);
    }
}
