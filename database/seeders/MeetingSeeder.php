<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MeetingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('meetings')->insert([
            [
                'progress_rate' => 30,
                'trash' => 0
            ],
            [
                'progress_rate' => 70,
                'trash' => 0
            ],

        ]);
    }
}
