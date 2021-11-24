<?php

namespace App\Http\Middleware;

use App\Models\File;
use App\Models\Team;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::check()){
            return redirect()->route('react');
        }
//        $files=File::orderBy('created_at','desc')->get();
        $current_user=Auth::user();
        $current_usermetas=$current_user->usermetas()->get()->toArray();
        if (!empty($current_usermetas))
            $current_usermetas=array_column($current_usermetas,'meta_value','meta_key');
        if (isset($current_usermetas['user_photo']))
            $profile=File::firstWhere('file_id',$current_usermetas['user_photo']);
        else
            $profile=false;
//        \Illuminate\Support\Facades\View::share('files',$files);
        \Illuminate\Support\Facades\View::share('profile',$profile);
        \Illuminate\Support\Facades\View::share('user',$current_user);
        \Illuminate\Support\Facades\View::share('usermetas',$current_usermetas);

        return $next($request);
    }
}
