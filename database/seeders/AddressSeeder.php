<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('addresses')->insert([
            [
                'address' => 'شهناز',
                'addressable_id' => 1,
                'addressable_type' => 'App\Models\Entity',
                'trash' => 0
            ],
            [
                'address' => 'مرزداران',
                'addressable_id' => 1,
                'addressable_type' => 'App\Models\Customer',
                'trash' => 0
            ],
        ]);
    }
}
