<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use App\Models\Admin_log;
use App\Models\Remind_method;
use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use App\Http\Requests\TaskRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Morilog\Jalali\Jalalian;
use Spatie\Permission\Models\Role;

class TaskController extends Controller
{
    public function index()
    {
        if (Auth::user()->hasRole('super-admin')) {
            $trash = 0 or 1;
        } else {
            $trash = 0;
        }
        $tasks = Task::where('trash', $trash)
            ->whereHas('activity', function (Builder $q) use ($trash) {
                $q->where('trash', $trash);
            })
            ->paginate(15);
        $result = ['tasks' => $tasks, 'page_title' => 'لیست وظایف'];
        return Response::json($result, 200);
    }

    public function create()
    {
        $result = ['page_title' => 'افزودن وظیفه'];
        return Response::json($result, 200);
    }

    public function store(TaskRequest $request)
    {
        DB::beginTransaction();
        try {
            $task = Task::create($request->only('progress_rate', 'reminder', 'priority', 'cost',
                'status', 'type', 'weight'));
            $task->duration = $request->minutes + (($request->days * 24) * 60);
            $task->save();

            $activity = $task->activity()->create($request->only('topic', 'description', 'creator_id'));
            if ($request->reminder) {
                $task->reminder_time = $request->reminder_time;
                $task->save();
                $activity->remind_methods()->sync($request->remind_methods);
            }
            Admin_log::createAdminLog(Auth::id(), 0, 'Task', $task->id, null,
                $task, 'the task is created successfully!');
            DB::commit();
            $result = ['status' => true, 'message' => 'وظیفه جدید با موفقیت ایجاد شد.'];
        } catch (\Exception $exception) {
            DB::rollBack();
            $result = ['status' => false, 'message' => 'عملیات ایجاد وظیفه جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function show($task_id)
    {
        $task = Task::where('id', $task_id)->with('activity')->first();
        $result = ['task' => $task];

        return Response::json($result, 200);
    }

    public function edit($task_id)
    {
        $task = Task::where('id', $task_id)->with('activity')->first();
        $result = ['task' => $task, 'page_title' => 'ویرایش وظیفه'];

        return Response::json($result, 200);
    }

    public function update(TaskRequest $request, $task_id)
    {
        $task = Task::findOrFail($task_id);
        DB::beginTransaction();
        try {
            $old_value = $task;
            $task->update($request->only('progress_rate', 'reminder', 'priority', 'cost',
                'status', 'type', 'weight'));
            $task->duration = $request->minutes + (($request->days * 24) * 60);
            $task->save();

            $activity = tap($task->activity())->update($request->only('topic', 'description', 'creator_id'))->first();
            if ($request->reminder) {
                $task->reminder_time = $request->reminder_time;
                $task->save();
                $activity->remind_methods()->sync($request->remind_methods);
            }
            Admin_log::createAdminLog(Auth::id(), 2, 'Task', $task->id, $old_value,
                $task, 'the task is updated successfully!');

            DB::commit();
            $result = ['status' => true, 'message' => 'وظیفه موردنظر با موفقیت به روز رسانی شد.'];
        } catch (\Exception $exception) {
            DB::rollback();
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی وظیفه موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function destroy($task_id)
    {
        $task = Task::findOrFail($task_id);
        if (Auth::user()->hasRole('super-admin')) {
            $task->trash = 2;
        } else {
            $task->trash = 1;
        }
        $task->save();

        if ($task) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Task', $task->id, $task,
                null, 'the task is deleted successfully!');
            $result = ['status' => true, 'message' => 'وظیفه موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف وظیفه موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
