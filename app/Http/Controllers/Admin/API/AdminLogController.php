<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Admin_log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class AdminLogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $logs = Admin_log::paginate(15);
        return Response::json(['logs'=>$logs],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Admin_log  $admin_log
     * @return \Illuminate\Http\Response
     */
    public function show(Admin_log $admin_log)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin_log  $admin_log
     * @return \Illuminate\Http\Response
     */
    public function edit(Admin_log $admin_log)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Admin_log  $admin_log
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Admin_log $admin_log)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin_log  $admin_log
     * @return \Illuminate\Http\Response
     */
    public function destroy(Admin_log $admin_log)
    {
        //
    }
}
