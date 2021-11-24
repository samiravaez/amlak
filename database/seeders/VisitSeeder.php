<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VisitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('visits')->insert([
            [
                'seller_report' => 'بسیار عالی',
            ],
            [
                'seller_report' => 'مشتری سختگیر بود',
            ],
        ]);
    }
}
