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
            ],
            [
                'name' => 'دیپلم',
            ],
            [
                'name' => 'فوق دیپلم',
            ],
            [
                'name' => 'لیسانس',
            ],
            [
                'name' => 'فوق لیسانس',
            ],
            [
                'name' => 'دکتری',
            ],
            [
                'name' => 'فوق دکتری',
            ],
        ]);
    }
}
