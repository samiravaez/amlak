<?php

namespace Database\Seeders;

use App\Http\Controllers\Admin\API\MeetingController;
use App\Http\Requests\Remind_methodRequest;
use App\Models\Activity;
use App\Models\Eye_color;
use App\Models\Text_message;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(Purchase_stageSeeder::class);
        $this->call(Remind_methodSeeder::class);
        $this->call(Text_messageSeeder::class);
        $this->call(TaskSeeder::class);
        $this->call(MeetingSeeder::class);
        $this->call(CareerSeeder::class);
        $this->call(Education_levelSeeder::class);
        $this->call(Eye_colorSeeder::class);
        $this->call(Customer_typeSeeder::class);
        $this->call(IndustrySeeder::class);
        $this->call(EntitySeeder::class);
        $this->call(CustomerSeeder::class);
        $this->call(CustomerEntitySeeder::class);
        $this->call(AddressSeeder::class);
        $this->call(VisitSeeder::class);
        $this->call(OfferSeeder::class);
        $this->call(ActivitySeeder::class);
    }
}
