<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Purchase_stageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('purchase_stages')->insert([
            [
                'name' => 'در حال مذاکره',
            ],
            [
                'name' => 'پایان معامله',
            ],
        ]);
    }
}
