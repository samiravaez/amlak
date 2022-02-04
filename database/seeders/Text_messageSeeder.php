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
                'trash' => 0
            ],
            [
                'body' => 'اطلاعات خود را تکمیل کنید.',
                'trash' => 0
            ],
        ]);
    }
}
