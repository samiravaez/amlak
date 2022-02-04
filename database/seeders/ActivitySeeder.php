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
                'poly_relation_name'=>'Task',
                'trash' => 0
            ],
            [
                'topic' => 'جلسه با صاحبان ملک',
                'description' => 'در حال انجام',
                'actionable_id' => 1,
                'actionable_type' => 'App\Models\Meeting',
                'poly_relation_name'=>'Meeting',
                'trash' => 0
            ],
        ]);
    }
}
