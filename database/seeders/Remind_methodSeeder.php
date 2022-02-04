<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class remind_methodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('remind_methods')->insert([
            [
                'name' => 'تلگرام',
                'trash' => 0
            ],
            [
                'name' => 'واتساپ',
                'trash' => 0
            ],
            [
                'name' => 'پیام کوتاه',
                'trash' => 0
            ],
            [
                'name' => 'یادآوری ها',
                'trash' => 0
            ],
        ]);
    }
}
