<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OfferSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('offers')->insert([
            [
                'topic' => ' ملک تجاری',
                'trash' => 0
            ],
            [
                'topic' => 'ملک مسکونی',
                'trash' => 0

            ],
        ]);
    }
}
