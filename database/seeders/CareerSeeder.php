<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CareerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('careers')->insert([
            [
                'name' => 'نجار',
                'trash' => 0
            ],
            [
                'name' => 'جوشکار',
                'trash' => 0
            ],
            [
                'name' => 'راننده',
                'trash' => 0

            ],
            [
                'name' => 'عکاس',
                'trash' => 0
            ],
            [
                'name' => 'حسابدار',
                'trash' => 0
            ],
        ]);
    }
}
