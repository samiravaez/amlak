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
            ],
            [
                'name' => 'واتساپ',
            ],
            [
                'name' => 'پیام کوتاه',
            ],
            [
                'name' => 'یادآوری ها',
            ],
        ]);
    }
}
