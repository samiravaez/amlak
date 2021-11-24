<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Text_messageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('text_messages')->insert([
            [
                'body' => 'ساعت ۵ تشریف بیاوردید',
            ],
            [
                'body' => 'اطلاعات خود را تکمیل کنید.',
            ],
        ]);
    }
}
