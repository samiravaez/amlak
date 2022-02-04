<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IndustrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('industries')->insert([
            [
                'name' => 'کشاورزی',
                'trash' => 0
            ],
            [
                'name' => 'پوشاک',
                'trash' => 0
            ],
            [
                'name' => 'بانکداری',
                'trash' => 0
            ],
            [
                'name' => 'بیوتکنولوژی',
                'trash' => 0
            ],
            [
                'name' => 'شیمی',
                'trash' => 0
            ],
            [
                'name' => 'ارتباطات',
                'trash' => 0
            ],
            [
                'name' => 'ساخت و ساز',
                'trash' => 0
            ],
            [
                'name' => 'مشاوره',
                'trash' => 0
            ],
            [
                'name' => 'آموزش',
                'trash' => 0
            ],
            [
                'name' => 'الکترونیک',
                'trash' => 0
            ],
            [
                'name' => 'انرژی',
                'trash' => 0
            ],
            [
                'name' => 'مهندسی',
                'trash' => 0
            ],
            [
                'name' => 'محیط زیست',
                'trash' => 0
            ],
            [
                'name' => 'مالی',
                'trash' => 0
            ],
            [
                'name' => 'کترینگ',
                'trash' => 0
            ],
            [
                'name' => 'مراکز دولتی',
                'trash' => 0
            ],
            [
                'name' => 'بهداشت',
                'trash' => 0
            ],
            [
                'name' => 'خدمات پذیرایی',
                'trash' => 0
            ],
            [
                'name' => 'بیمه',
                'trash' => 0
            ],
            [
                'name' => 'ماشین آلات',
                'trash' => 0
            ],

        ]);
    }
}
