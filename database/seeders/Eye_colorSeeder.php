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
                'trash' => 0
            ],
            [
                'name' => 'مشکی',
                'trash' => 0
            ],
            [
                'name' => 'طوسی',
                'trash' => 0
            ],
            [
                'name' => 'سبز',
                'trash' => 0
            ],
            [
                'name' => 'آبی',
                'trash' => 0
            ],
        ]);
    }
}
