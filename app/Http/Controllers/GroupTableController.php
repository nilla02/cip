<?php

namespace App\Http\Controllers;

use App\Models\GroupModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GroupTableController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users=GroupModel::all();
     return Inertia::render('GroupTB',['group_models'=>$users]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $users=GroupModel::all();
     return Inertia::render('AgencyRegistration',['group_models'=>$users]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'First_Name' => 'required',
            'Last_Name' => 'required',
            'Group_Name' => 'required',
            'Licensee' => 'required',
        ]);

        GroupModel::create([
            'first_name' => $validatedData['First_Name'],
            'last_name' => $validatedData['Last_Name'],
            'Group_name' => $validatedData['Group_Name'], 
            'Licensee' => $validatedData['Licensee'],
        ]);

        return redirect()->route('GroupTB'); 
    }


    /**
     * Display the specified resource.
     */
    public function show(GroupModel $groupModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GroupModel $groupModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, GroupModel $groupModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(GroupModel $groupModel)
    {
        //
    }
}
