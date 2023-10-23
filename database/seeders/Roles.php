<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Carbon\Carbon;

class Roles extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::create(['name' => 'create-users']);
        Permission::create(['name' => 'edit-users']);
        Permission::create(['name' => 'delete-users']);

        Permission::create(['name' => 'create-application']);
        Permission::create(['name' => 'edit-application']);
        Permission::create(['name' => 'delete-delete-application']);

    

       $roles = [
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'unverified_user'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'accountant'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'agents'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'clerks'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'admin_compliance_officer'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'compliance_officer'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'admin_due_diligence_officer'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'due_diligence_officer'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'market_&_investor_relations_officer'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'super_administrators'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'website_admin'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'business_development_officer'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'ceo'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'law_enforcement_officer'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'promoter'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'corp_sec'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'pm_office'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'risk_assessment_officer'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'bank'],
       ];
       Role::insert($roles);

       
    }
}
