<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Eye_colorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('eye_colors')->insert([
            [
                'name' => 'قهوه ای',
            ],
            [
                'name' => 'مشکی',
            ],
            [
                'name' => 'طوسی',
            ],
            [
                'name' => 'سبز',
            ],
            [
                'name' => 'آبی',
            ],
        ]);
    }
}
