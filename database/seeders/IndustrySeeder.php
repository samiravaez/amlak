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
            ],
            [
                'name' => 'پوشاک',
            ],
            [
                'name' => 'بانکداری',
            ],
            [
                'name' => 'بیوتکنولوژی',
            ],
            [
                'name' => 'شیمی',
            ],
            [
                'name' => 'ارتباطات',
            ],
            [
                'name' => 'ساخت و ساز',
            ],
            [
                'name' => 'مشاوره',
            ],
            [
                'name' => 'آموزش',
            ],
            [
                'name' => 'الکترونیک',
            ],
            [
                'name' => 'انرژی',
            ],
            [
                'name' => 'مهندسی',
            ],
            [
                'name' => 'محیط زیست',
            ],
            [
                'name' => 'مالی',
            ],
            [
                'name' => 'کترینگ',
            ],
            [
                'name' => 'مراکز دولتی',
            ],
            [
                'name' => 'بهداشت',
            ],
            [
                'name' => 'خدمات پذیرایی',
            ],
            [
                'name' => 'بیمه',
            ],
            [
                'name' => 'ماشین آلات',
            ],

        ]);
    }
}
