<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('activities')->insert([
            [
                'topic' => 'اطلاعیه ی فروش',
                'description' => 'در حال انجام',
                'actionable_id' => 1,
                'actionable_type' => 'App\Models\Task',
            ],
            [
                'topic' => 'جلسه با صاحبان ملک',
                'description' => 'در حال انجام',
                'actionable_id' => 1,
                'actionable_type' => 'App\Models\Meeting',
            ],
        ]);
    }
}
