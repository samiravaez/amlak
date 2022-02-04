<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('permissions')->insert([
            [
                'name' => 'users_management',
//                'guard_name' => 'web',
                'title' => 'مدیر کل',
                'trash' => 0
            ],
            [
                'name' => 'adds_management',
//                'guard_name' => 'web',
                'title' => 'کارشناس',
                'trash' => 0
            ],
            [
                'name' => 'categories_management',
//                'guard_name' => 'web',
                'title' => 'کاربر',
                'trash' => 0
            ],
            [
                'name' => 'defaults_management',
//                'guard_name' => 'web',
                'title' => 'کاربر',
                'trash' => 0
            ],

        ]);
    }
}
