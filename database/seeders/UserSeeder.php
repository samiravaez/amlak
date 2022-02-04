<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use phpseclib3\Crypt\Hash;
use Maklad\Permission\Models\Role;
use Maklad\Permission\Models\Permission;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => '  سمیرا واعظ',
            'email' => 'samiravaez@ymail.com',
            'password' => '123456789',
        ]);

//        $roles = Role::get();
//        $role_id = $roles->first()->_id;
//        $role = Role::find($role_id);
//
//        $permissions = Permission::pluck('_id','_id')->all();
//
//        $role->syncPermissions($permissions);
//
//        $user->assignRole([$role->_id]);
    }
}
