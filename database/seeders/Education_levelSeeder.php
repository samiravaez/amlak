<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Education_levelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('education_levels')->insert([
            [
                'name' => 'سیکل',
                'trash' => 0
            ],
            [
                'name' => 'دیپلم',
                'trash' => 0
            ],
            [
                'name' => 'فوق دیپلم',
                'trash' => 0
            ],
            [
                'name' => 'لیسانس',
                'trash' => 0
            ],
            [
                'name' => 'فوق لیسانس',
                'trash' => 0
            ],
            [
                'name' => 'دکتری',
                'trash' => 0
            ],
            [
                'name' => 'فوق دکتری',
                'trash' => 0
            ],
        ]);
    }
}
