<?php

use App\Models\File;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Intervention\Image\Facades\Image;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command("image:resize", function () {
    ini_set('memory_limit', '-1');
    $files = File::select(['file_path', 'file_name'])->get();
    foreach ($files as $file) {
        $path = $file->file_path . '/' . $file->file_name;
        if (!file_exists(storage_path('app/public/thumbnails/' . $file->file_path))) {
            mkdir(storage_path('app/public/thumbnails/' . $file->file_path), 0755, true);
        }
        Image::make(storage_path('app/public/' . $path))->resize(300, 300, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        })->save(storage_path('app/public/thumbnails/' . $path));
        $this->comment("Image resized name:" . $path);
    }
})->purpose("resize image");

Artisan::command('update_crm', function () {
    $crm_datas=\App\Models\Crmmeta::whereIn('meta_key',['doc-status','orientation'])->get();
    DB::transaction(function () use($crm_datas) {
        foreach ($crm_datas as $data) {
            $data->meta_value = json_encode([$data->meta_value]);
            $data->isJson = 1;
            $data->save();
            $this->comment($data->crm_id.'|'.$data->meta_key);
        }
    });
})->purpose('update crm type');


