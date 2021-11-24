<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Redirect;
use Intervention\Image\Facades\Image;

class FilesController extends Controller
{
    //
    public static $success_delete_post='فایل مورد نظر با موفقیت حدف شد.';

    public function index(){
//        $files=File::select(['file_path','file_name'])->get();
//        foreach ($files as $file){
//            $path=$file->file_path.'/'.$file->file_name;
//            if (!file_exists(storage_path('app/public/thumbnails/'.$file->file_path))) {
//                mkdir(storage_path('app/public/thumbnails/'.$file->file_path), 0755, true);
//            }
//            Image::make(storage_path('app/public/'.$path))->resize(300,300)->save(storage_path('app/public/thumbnails/'.$path));
//        }
//        dd('...');
        $files=File::orderBy('created_at','desc')->limit(15)->get();
        $size=array(
            'all'=>File::count(),
            'day'=>File::whereDate('created_at', '>=', Carbon::now()->subDay()->toDateString())->count(),
            'week'=>File::whereDate('created_at', '>=', Carbon::now()->subWeek()->toDateString())->count(),
            'month'=>File::whereDate('created_at', '>=', Carbon::now()->subMonth()->toDateString())->count(),
        );
        return view('admin.list.file',compact('files','size'))->with(['page_title'=>'لیست فایل ها']);
    }

    public function add(){
        return view('admin.file_upload')->with(['page_title'=>'افزودن رسانه']);
    }

    public function fileUpload(Request $request)
    {
        $image = $request->file('file');

        $imageName = time() . '.' . $image->extension();

        $image->move(storage_path('images'), $imageName);

        return response()->json(['success' => $imageName]);
    }

    public function delete(Request $request,$file_id){
        if ($file_id && ctype_digit($file_id)) {
            $file_item = File::find($file_id);
            if ($file_item && $file_item instanceof File) {
                $file_item->delete();
                return Redirect::back()->with('success', static::$success_delete_post);
            }
        }
    }

    public function ajaxGetFiles(Request $request)
    {
        $sort_array=[
            'date'=>'created_at',
            'name'=>'file_name',
            'size'=>'file_size',
        ];
        $page=($request->has('page'))?$request->input('page'):'1';
        $sort=($request->has('sort') && in_array($request->input('sort'),array_keys($sort_array)))?$request->input('sort'):'date';
        $range=($request->has('range'))?$request->input('range'):'all';

        $files_per_page=15;
        $start=($page-1)*$files_per_page;
        $files_query=File::orderBy($sort_array[$sort],'desc')->offset($start)->limit($files_per_page);
        switch ($range){
            case 'day':
                $files_query->whereDate('created_at', '>=', Carbon::now()->subDay()->toDateString());
                break;
            case 'week':
                $files_query->whereDate('created_at', '>=', Carbon::now()->subWeek()->toDateString());
                break;
            case 'month':
                $files_query->whereDate('created_at', '>=', Carbon::now()->subMonth()->toDateString());
                break;
            default:
                break;
        }

        if($request->has('search')){
            $files_query->where('file_name','like','%'.$request->input('search').'%');
        }

        $files=$files_query->get();
        $results=view('admin.list.files_show_loop',compact('files'))->render();

        return response()->json(['res'=>$results,'count'=>count($files)]);
    }

    public function ajaxGetLibFiles(Request $request)
    {
        $page=($request->has('page'))?$request->input('page'):'1';

        $files_per_page=15;
        $start=($page-1)*$files_per_page;
        $files_query=File::orderBy('created_at','desc')->offset($start)->limit($files_per_page);

        $files=$files_query->get();
        $results=view('admin.lib_files',compact('files'))->render();

        return response()->json(['res'=>$results,'count'=>count($files)]);
    }

//    public function upload_images(Request $request) {
//        $files = $request->file('files');
//        dd($request);
//        $dir = storage_path('app/public/temporary');
//
//        if (!file_exists($dir)) {
//            mkdir($dir, 0755, true);
//        }
//        foreach ($files as $file){
//            $name = time() . '.' . $file->extension();;
//            $name = str_lreplace('.' . $file->extension(), '_' . time() . '.' . $file->extension(), $name);
//            $type = $file->getMimeType();
//            $size = $file->getSize();
//
//            if ($file->move($dir, $name)) {
////                $credentials = array(
////                    'file_name' => $name,
////                    'file_type' => $type,
////                    'file_size' => $size,
////                    'user_upload' => Auth::id(),
////                    'file_path' => $now,
////                );
////
////                $new_file = File::create($credentials);
////                if ($new_file) {
////                    static::updateMeta(Auth::user(), 'user_photo', $new_file->file_id);
////                    return response()->json(['success' => true]);
////                }
//            }
//        }
//    }


}
