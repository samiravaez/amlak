<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EntitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('entities')->insert([
            [
                'name' => 'تب طرح',
                'mobile_unique'=> '09334445560',
                'trash' => 0
            ],
            [
                'name' => 'تپسی',
                'mobile_unique'=> '09334445561',
                'trash' => 0
            ],
            [
                'name' => 'آواتک',
                'mobile_unique'=> '09334445562',
                'trash' => 0
            ],
            [
                'name' => 'آسیاتک',
                'mobile_unique'=> '09334445563',
                'trash' => 0
            ],
            [
                'name' => 'حسابرسان',
                'mobile_unique'=> '09334445564',
                'trash' => 0
            ],
        ]);
    }
}
