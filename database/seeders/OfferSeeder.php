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
            ],
            [
                'topic' => 'ملک مسکونی',
            ],
        ]);
    }
}
