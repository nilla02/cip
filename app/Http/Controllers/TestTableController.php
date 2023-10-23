<?php

namespace App\Http\Controllers;

use App\Models\TestTable;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use App\Models\User;
use App\Models\Country;
use App\Models\Region;
use App\Models\Gender;
use App\Models\Applicant_Type;
use App\Models\MaritualStatus;
use App\Models\Type_of_investment;
use Spatie\Activitylog\Models\Activity;
use GuzzleHttp\Exception\BadResponseException;
use Illuminate\Pagination\Paginator;

class TestTableController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $user = Auth::user();


        $roles = $user->getRoleNames()->toArray();

        $users = TestTable::query()
            ->latest()
            ->when(in_array('agents', $roles), function ($query) use ($user) {
                $query->where('agent_id', $user->id)->where('type_of_applicant', 'principle_applicant');
            })
            ->when(in_array('due_diligence_officer', $roles), function ($query) use ($user) {
                $query->where('ddo_id', $user->id)->where('status_id', 'pre-processing_accept')->orWhere('status_id', 'delayed_with_cause');
            })
            ->when(in_array('promoter', $roles), function ($query) use ($user) {
                $query->where('promoter_id', $user->id);
            })
            ->when(in_array('promoter', $roles), function ($query) use ($user) {
                $query->where('promoter_id', $user->id);
            })
            ->when(in_array('admin_compliance_officer', $roles), function ($query) use ($user) {
                $query->where('co_id', $user->id)->where('status_id', 'pre-processing_draft');
            })
            ->when(in_array('admin_due_diligence_officer', $roles), fn (Builder $query, $topic) => $query->where('status_id', 'pre-processing_accept'))


            ->when(
                in_array('ceo', $roles),
                fn ($query) => $query->where(function ($query) {
                    $query->where('status_id', 'pre-processing_draft')
                        ->orWhere('status_id', 'pending_review')
                        ->orWhere('status_id', 'pre_processing_accept')
                        ->orWhere('status_id', 'non_Compliant')
                        ->orWhere('status_id', 'decision_pending')
                        ->orWhere('status_id', 'delayed_with_cause');
                })
            )

            ->when(in_array('compliance_officer', $roles), fn (Builder $query, $topic) => $query->where('status_id', 'pre-processing_draft'))

            ->when(in_array('law_enforcement_officer', $roles), fn (Builder $query, $topic) => $query->where('status_id', 'pre-processing_accept'))

            ->when(in_array('website_admin', $roles), function ($query) {
                // Do nothing, no additional filtering needed for admin
            })

            ->get();



        return Inertia::render('Forms/Draft', ['users' => $users, 'roles' => $user]);
    }
    public function webadmindb(){

        $user = Auth::user();

        $users_roles = User::with('roles')->get();

        // Filter users with the "accountant" role
        $accountantUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('accountant');
        });

        $agentUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('agents');
        });
        $ddoUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('due_diligence_officer');
        });
    $ComplianceUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('compliance_officer');
        });
        $WebAdminUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('website_admin');
        });
        //new
        $riskUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('risk_assessment_officer');
        });
        $promoUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('promoter');
        });
        $csUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('corp_sec');
        });
        $boUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('bank_officials');
        });
        $saUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('super_administrators');
        });
        $ceoUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('ceo');
        });
        $mirfUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('market_&_investor_relations_officer');
        });
        $bdoUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('business_development_officer');
        });
        $pmoUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('pm_office');
        });
        $ddoadminUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('admin_due_diligence_officer');
        });

        // Count the number of users with the "accountant" role
        $accounts = $accountantUsers->count();
        $agents = $agentUsers->count();
        $ddo = $ddoUsers->count();
        //new
        $ddoadmin = $ddoadminUsers->count();
        $pmo = $pmoUsers->count();
        $bdo = $bdoUsers->count();
        $bo = $boUsers->count();
        $sa = $saUsers->count();
        $ceo = $ceoUsers->count();
        $cs = $csUsers->count();
        $mirf = $mirfUsers->count();
        $promo = $promoUsers->count();
        $risk = $riskUsers->count();

$totalApplications=Testtable::count();
            $usersall = User::paginate(6);
            $logs = Activity::orderBy('created_at', 'desc')->paginate(6);

$totalusers = User::count();
        $roles = $user->getRoleNames()->toArray();

        $users = TestTable::query()
        ->latest()
        ->when(in_array('agents', $roles), function ($query) use ($user) {
            $query->where('agent_id', $user->id);
        })
        ->get();
        $recentlyModified = TestTable::query()
        ->orderBy('updated_at', 'desc') // Order by the 'updated_at' column in descending order
        ->when(in_array('agents', $roles), function ($query) use ($user) {
            $query->where('agent_id', $user->id);
        })
        ->get();

        return inertia::render('WebAdminDb', ['users' => $users,'roles'=>$roles,'updated'=>$recentlyModified,'user_id'=>$user,'logs'=>$logs,'userall'=>$usersall,'accounts'=>$accounts,'risk'=>$risk,'agents'=>$agents,'ddo'=>$ddo,'ddoadmin'=>$ddoadmin,'pmo'=>$pmo,'bdo'=>$bdo,'bo'=>$bo,'sa'=>$sa,'ceo'=>$ceo,'cs'=>$cs,'mirf'=>$mirf,'promo'=>$promo,'totalusers'=>$totalusers,'totalapplicant'=>$totalApplications]);

    }
    public function accountsdb(){

        $user = Auth::user();


        $roles = $user->getRoleNames()->toArray();

            $users = TestTable::query()
            ->latest()
            ->when(in_array('agents', $roles), function ($query) use ($user) {
                $query->where('agent_id', $user->id);
            })
            ->get();
            $totalApplications = $users->count();
        $recentlyModified = TestTable::query()
        ->orderBy('updated_at', 'desc') // Order by the 'updated_at' column in descending order
        ->when(in_array('agents', $roles), function ($query) use ($user) {
            $query->where('agent_id', $user->id);
        })
        ->get();

        return inertia::render('AccountDb', ['users' => $users,'roles'=>$roles,'updated'=>$recentlyModified,'user_id'=>$user,'accountstotal'=>$totalApplications]);

    }

    public function Vcontroller(){

        $user = Auth::user();


        // 'accounts'=>$accounts,'risk'=>$risk,'agents'=>$agents,'ddo'=>$ddo,'ddoamdin'=>$ddoadmin,'pmo'=>$pmo,'bdo'=>$bdo,'bo'=>$bo,'sa'=>$sa,'ceo'=>$ceo,'cs'=>$cs,'mirf'=>$mirf,'promo'=>$promo,


        $roles = $user->getRoleNames()->toArray();

        $users = TestTable::query()
        ->latest()
        ->when(in_array('agents', $roles), function ($query) use ($user) {
            $query->where('agent_id', $user->id);
        })
        ->get();
        $recentlyModified = TestTable::query()
        ->orderBy('updated_at', 'desc') // Order by the 'updated_at' column in descending order
        ->when(in_array('admin_due_diligence_officer', $roles), fn (Builder $query, $topic) => $query->where('status_id', 'pre-processing_accept'))
        ->get();

        return inertia::render('Vcontroller', ['users' => $users,'roles'=>$roles,'updated'=>$recentlyModified,'user_id'=>$user,'userall'=>$userall,'accounts'=>$accounts,'risk'=>$risk,'agents'=>$agents,'ddo'=>$ddo,'ddoadmin'=>$ddoadmin,'pmo'=>$pmo,'bdo'=>$bdo,'bo'=>$bo,'sa'=>$sa,'ceo'=>$ceo,'cs'=>$cs,'mirf'=>$mirf,'promo'=>$promo,]);

    }
    public function Co(){

        $user = Auth::user();


        $roles = $user->getRoleNames()->toArray();

        $users = TestTable::all();

        return inertia::render('CoDashboard', ['users' => $users,'roles'=>$roles]);

    }


    public function index4()
    {
        $users = TestTable::all();
        return Inertia::render('Report', ['users' => $users]);
    }

    public function index2()
    {

        $user = Auth::user();
        $totalApplications = TestTable::count();

        $roles = $user->getRoleNames()->toArray();

        $users = TestTable::query()
        ->latest()
        ->when(in_array('agents', $roles), function ($query) use ($user) {
            $query->where('agent_id', $user->id);
        })
        ->take(6)
->get();
$userstable = TestTable::query()
->latest()
->when(in_array('agents', $roles), function ($query) use ($user) {
    $query->where('agent_id', $user->id);
})
->take(6)
->get();






        return Inertia::render('Dashboard', ['users' => $users,'roles'=>$roles,'testtable'=>$totalApplications]);
    }

    public function create()
    {
        $countries = Country::all();
        $regions = Region::all();
        $type_of_applicant = Applicant_Type::all();
        $gender = Gender::all();
        $mstatus = MaritualStatus::all();
        $toi = Type_of_investment::all();

        $users = User::whereHas('roles', function ($query) {
            $query->where('name', 'promoter');
        })->get();

        $signedInUser = Auth::user();
        $signedInUserGroup = $signedInUser->group;
        $principle_applicants = TestTable::where('agency', $signedInUser->group)
            ->where('type_of_applicant', '2')
            ->pluck('id');
        // Get an array of user_ids

        // Now you have an array of user_ids who meet the criteria.



        return Inertia::render('Application', ['users' => $users, 'countries' => $countries, 'principle_applicants' => $principle_applicants,'region'=>$regions,'toa'=>$type_of_applicant
    ,'gender'=>$gender,'mstatus'=>$mstatus,'toi'=>$toi,]);
        return response()->json(['message' => 'Role created successfully'], 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'First_Name' => 'required',
            'Last_Name' => 'required',
            'status_id' => 'nullable',
            'Region' => 'nullable',
            'country_id' => 'nullable',
            'type_of_applicant' => 'nullable',
            'type_of_investment' => 'nullable',
            'date_of_birth' => 'nullable',
            'Marriage_Status' => 'nullable',
            'promoter_id' => 'nullable',
            'Accompanying_dependents' => 'nullable',
            'Gender' => 'nullable',
            'principle_applicant_id' => 'nullable',
        ]);

       $newRecord=new TestTable();
        $tableId = $newRecord->id;
        $userId = Auth::id();
        $userGroup = Auth::user()->group;
        $applicantType = $request->input('type_of_applicant');


        $principalApplicantId = null;
        if ($applicantType === '1' || $applicantType === '3') {
            $principalApplicantId = $request->input('principal_applicant_id');
        }

        if ($principalApplicantId !== null) {
            $primary = TestTable::find($principalApplicantId);

            $userFolder = public_path('uploads/' . $userGroup . '/' . $primary->agent_id . '/' . $principalApplicantId);
        } else {

            $userFolder = public_path('uploads/' . $userGroup . '/' . $userId . '/' . $tableId);
        }

        if ($request->hasFile('File')) {
            $file = $request->file('File');
            if ($file->isValid()) {
                $document_checklist_path = uniqid() . '.' . $file->extension();
                $file->move($userFolder, $document_checklist_path);

                // Additional actions after successful upload (e.g., database update)
            } else {
                // Handle file upload error
            }
        } else {
            $document_checklist_path = null;
        }


        // Move the file to the appropriate folder
        // if ($request->hasFile('File')) {
        //     $file = $request->file('File');
        //     $document_checklist_path = time() . '.' . $file->extension();
        //     $file->move($userFolder, $document_checklist_path);
        // } else {
        //     $document_checklist_path = null;
        // }

        //     // Create a folder for the user using their ID as the folder name
        //     $userFolder = public_path('uploads/'.$userGroup. '/'. $userId .'/'.$tableId);
        //     if (!file_exists($userFolder)) {
        //         mkdir($userFolder, 0755, true);
        //     }

        //     if ($request->hasFile('File')) {
        //         $file = $request->file('File');
        //         $document_checklist_path = time() . '.' . $file->extension();
        //         $file->move($userFolder, $document_checklist_path);
        //     } else {
        //         $document_checklist_path = null; // Set the default value or handle it as per your requirement
        //     }

        $userGroup = Auth::user()->group;
        $agentId = Auth::id();
        $TestTable = TestTable::create([
            'first_name' => $validatedData['First_Name'],
            'last_name' => $validatedData['Last_Name'],
            'Region' => $validatedData['Region'],
            'country_id' => $validatedData['country_id'],
            'type_of_applicant' => $validatedData['type_of_applicant'],
            'type_of_investment' => $validatedData['type_of_investment'],
            'date_of_birth' => $validatedData['date_of_birth'],
            'promoter_id' => $validatedData['promoter_id'],
            'Marriage_Status' => $validatedData['Marriage_Status'],
            'Accompanying_dependents' => $validatedData['Accompanying_dependents'],
            'Gender' => $validatedData['Gender'],
            'agent_id' => $agentId,
            'agency' => $userGroup,
            'principle_applicant_id' => $validatedData['principle_applicant_id'],


        ]);
        $dueDiligenceUsers = User::whereHas('roles', function ($query) {
            $query->where('name', 'due_diligence_officer');
        })->get();

        // Count the number of applications and the number of users
        $totalApplications = TestTable::count();
        $totalUsers = $dueDiligenceUsers->count();

        // Retrieve all TestTable records
        $testTables = TestTable::all();

        // Initialize an index to keep track of the current DDO user
        $ddoIndex = 0;

        // Assign DDOs to each application sequentially
        foreach ($testTables as $TestTable) {
            // Check if the 'ddo_id' field is already populated
            if (empty($TestTable->ddo_id)) {
                // Get the current DDO user
                $ddoUser = $dueDiligenceUsers[$ddoIndex];

                // Assign the DDO's user ID to the application's ddo_id field
                $TestTable->ddo_id = $ddoUser->id;

            }

            // Increment the DDO index, looping back to the first user if necessary
            $ddoIndex = ($ddoIndex + 1) % $totalUsers;
            $TestTable->save();
        }
        $AccountsUsers = User::whereHas('roles', function ($query) {
            $query->where('name', 'accountant');
        })->get();

        // Count the number of applications and the number of users
        $totalApplications = TestTable::count();
        $totalUsers = $AccountsUsers ->count();

        // Retrieve all TestTable records
        $testTables = TestTable::all();

        // Initialize an index to keep track of the current DDO user
        $accIndex = 0;

        // Assign DDOs to each application sequentially
        foreach ($testTables as $TestTable) {
            // Check if the 'ddo_id' field is already populated
            if (empty($TestTable->acc_id)) {
                // Get the current DDO user
                $accUser = $AccountsUsers[$accIndex];

                // Assign the DDO's user ID to the application's ddo_id field
                $TestTable->acc_id = $accUser->id;

            }

            // Increment the DDO index, looping back to the first user if necessary
            $accIndex = ($accIndex + 1) % $totalUsers;
            $TestTable->save();
        }

        $ComplianceUsers = User::whereHas('roles', function ($query) {
            $query->where('name', 'compliance_officer');
        })->get();

        // Count the number of applications and the number of users
        $totalApplications = TestTable::count();
        $totalUsers = $ComplianceUsers ->count();

        // Retrieve all TestTable records
        $testTables = TestTable::all();

        // Initialize an index to keep track of the current DDO user
        $coIndex = 0;

        // Assign DDOs to each application sequentially
        foreach ($testTables as $TestTable) {
            // Check if the 'ddo_id' field is already populated
            if (empty($TestTable->co_id)) {
                // Get the current DDO user
                $coUser = $ComplianceUsers[$coIndex];

                // Assign the DDO's user ID to the application's ddo_id field
                $TestTable->co_id = $coUser->id;
                $TestTable->save();
            }

            // Increment the DDO index, looping back to the first user if necessary
            $coIndex = ($coIndex + 1) % $totalUsers;
        }

        $CoUsers = User::whereHas('roles', function ($query) {
            $query->where('name', 'ceo');
        })->get();

        // Count the number of applications and the number of users
        $totalApplications = TestTable::count();
        $totalUsers = $CoUsers ->count();

        // Retrieve all TestTable records
        $testTables = TestTable::all();

        // Initialize an index to keep track of the current DDO user
        $ceoIndex = 0;

        // Assign DDOs to each application sequentially
        foreach ($testTables as $TestTable) {
            // Check if the 'ddo_id' field is already populated
            if (empty($TestTable->ceo_id)) {
                // Get the current DDO user
                $ceoUser = $CoUsers[$ceoIndex];

                // Assign the DDO's user ID to the application's ddo_id field
                $TestTable->ceo_id = $ceoUser->id;
                $TestTable->save();
            }

            // Increment the DDO index, looping back to the first user if necessary
            $ceoIndex = ($ceoIndex + 1) % $totalUsers;
        }
        $RiskUsers = User::whereHas('roles', function ($query) {
            $query->where('name', 'risk_assessment_officer');
        })->get();

        // Count the number of applications and the number of users
        $totalApplications = TestTable::count();
        $totalUsers = $RiskUsers ->count();

        // Retrieve all TestTable records
        $testTables = TestTable::all();

        // Initialize an index to keep track of the current DDO user
        $riskIndex = 0;

        // Assign DDOs to each application sequentially
        foreach ($testTables as $TestTable) {
            // Check if the 'ddo_id' field is already populated
            if (empty($TestTable->risk_id)) {
                // Get the current DDO user
                $riskUser = $RiskUsers[$riskIndex];

                // Assign the DDO's user ID to the application's ddo_id field
                $TestTable->risk_id = $riskUser->id;

            }

            // Increment the DDO index, looping back to the first user if necessary
            $riskIndex = ($riskIndex + 1) % $totalUsers;
            $TestTable->save();
        }




        return redirect()->route('Draft');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {


        $submission = TestTable::findOrFail($id);
        $result = TestTable::where('principle_applicant_id', $id)->get();





        return Inertia::render('Submissions/EditSubmission', ['submission' => $submission,'result'=>$result]);
    }

    public function show2(string $id)
    {


        $submission = TestTable::findOrFail($id);
        return Inertia::render('Submissions/EditCommissions', ['submission' => $submission]);
    }
    public function show3(string $id)
    {

        $users = User::whereHas('roles', function ($query) {
            $query->where('name', 'due_diligence_officer');
        })->get();
        $submission = TestTable::findOrFail($id);
        return Inertia::render('EditDDO', ['submission' => $submission, 'users' => $users]);
    }
    public function show4(string $id)
    {

        $users = User::whereHas('roles', function ($query) {
            $query->where('name', 'compliance_officer');
        })->get();
        $submission = TestTable::findOrFail($id);
        return Inertia::render('EditCO', ['submission' => $submission, 'users' => $users]);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
    }
    public function update2(Request $request, string $id)
    {

        $submission = TestTable::findOrFail($id);
        $validated = $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'status' => ['required'],
            'Payment_Amount' => 'nullable',
            'Date_Of_Payment' => 'nullable',
            'document_checklist_path' => 'nullable',
            'ddo_notes' => 'nullable',
            'co_notes' => 'nullable',
            'Assigned_DDO' => 'nullable',
            'Assigned_Compliance' => 'nullable',
            'authorized_agent_form_path' => 'nullable',
            'proof_of_payment_path' => 'nullable',
            'confirmation_form_path' => 'nullable',
            'registration_application_path' => 'nullable',
            'birth_record_path' => 'nullable',
            'name_change_path' => 'nullable',
            'citizenship_certificate_path' => 'nullable',
            'residence_card_path' => 'nullable',
            'military_records_path' => 'nullable',
            'photograph_certificate_path' => 'nullable',
            'national_id_path' => 'nullable',
            'current_passport_pages_path' => 'nullable',
            'proof_of_residence_path' => 'nullable',
            'marriage_certificate_path' => 'nullable',
            'divorce_decree_path' => 'nullable',
            'curriculum_vitae_path' => 'nullable',
            'professional_reference_path' => 'nullable',
            'bank_reference_path' => 'nullable',
            'sworn_affidavit_financial_path' => 'nullable',
            'sworn_affidavit_spouse_path' => 'nullable',
            'academic_certificates_path' => 'nullable',
            'police_certificates_path' => 'nullable',
            'visas_path' => 'nullable',
            'medical_examiner_declaration_path' => 'nullable',
            'official_transcripts_path' => 'nullable',
            'custody_records_path' => 'nullable',
            'statutory_declaration_path' => 'nullable',
            'copy_of_parent_id_path' => 'nullable',
            'passport_sized_photos_path' => 'nullable',
            'ddo_assessment_path' => 'nullable',
            'ceo_assessment_path' => 'nullable',
            'co_assessment_path' => 'nullable',
            'proof_of_investment_transferred_path' => 'nullable',
            'proof_of_investment_path' => 'nullable',
            'certified_copy_professional_certificate_medical_examiner_path' => 'nullable',
            'net_worth_document_support_path' => 'nullable',
            'professional_certificate_translator_path' => 'nullable',
            'apostille_path' => 'nullable',
            'professional_certificate_notary_path' => 'nullable',
            'professional_certificate_attorney_path' => 'nullable',
            'professional_certificate_oaths_commissioner_path' => 'nullable',

        ]);
        $patharray = [
            'file_path',
            'proof_of_payment_path',
            'document_checklist_path',
            'authorized_agent_form_path',
            'alternative_citizenship_path',
            'confirmation_form_path',
            'registration_application_path',
            'birth_record_path',
            'name_change_path',
            'citizenship_certificate_path',
            'residence_card_path',
            'military_records_path',
            'photograph_certificate_path',
            'national_id_path',
            'current_passport_pages_path',
            'proof_of_residence_path',
            'marriage_certificate_path',
            'divorce_decree_path',
            'curriculum_vitae_path',
            'professional_reference_path',
            'bank_reference_path',
            'sworn_affidavit_financial_path',
            'sworn_affidavit_spouse_path',
            'academic_certificates_path',
            'police_certificates_path',
            'visas_path',
            'medical_examiner_declaration_path',
            'official_transcripts_path',
            'custody_records_path',
            'statutory_declaration_path',
            'copy_of_parent_id_path',
            'passport_sized_photos_path',
            'ddo_assessment_path',
            'ceo_assessment_path',
            'co_assessment_path',
            'proof_of_investment_transferred_path',
            'proof_of_investment_path',
            'certified_copy_professional_certificate_medical_examiner_path',
            'net_worth_document_support_path',
            'professional_certificate_translator_path',
            'apostille_path',
            'professional_certificate_notary_path',
            'professional_certificate_attorney_path',
            'professional_certificate_oaths_commissioner_path',
        ];
        $userId = Auth::id();
        $tableId = $submission->id;
        $userGroup = Auth::user()->group;
        foreach ($patharray as $value) {
            if ($request->hasFile($value)) {
                $file = $request->file($value);
                $validated[$value] = time() . '.' . $file->extension();
                $file->move(public_path('uploads/' . $userGroup . '/' . $userId . '/' . $tableId), $validated[$value]);
            } else {
                unset($validated[$value]);
            }
        }
        $submission->update($validated);
        return redirect()->route('Draft');
    }

    public function assignddo(Request $request, string $id)
    {

        $submission = TestTable::findOrFail($id);
        $validated = $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'Assigned_DDO' => 'nullable',

        ]);


        $submission->update($validated);
        return redirect()->route('Draft');
    }

    public function assignco(Request $request, string $id)
    {

        $submission = TestTable::findOrFail($id);
        $validated = $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'Assigned_Compliance' => 'nullable',

        ]);

        $submission->update($validated);
        return redirect()->route('Draft');
    }


    public function update(Request $request, string $id)
    {

        $submission = TestTable::findOrFail($id);
        $authUserName = Auth::user()->name;
        $tableId = $submission->id;
  $authUserid = Auth::user()->id;
  $authUserFirstLetter = strtoupper(substr($authUserName, 0, 1));
  $referenceNumber =$authUserid.$authUserFirstLetter.$submission->type_of_investment.$submission->Region.$tableId.$submission->type_of_applicant;
        $validated = $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'status_id' => ['required'],
            'document_checklist_path' => 'nullable',
            'ddo_notes' => 'nullable',
            'co_notes' => 'nullable',
            'Payment_Amount' => 'nullable',
            'Date_Of_Payment' => 'nullable',
            'Assigned_DDO' => 'nullable',
            'Assigned_Compliance' => 'nullable',
            'authorized_agent_form_path' => 'nullable',
            'proof_of_payment_path' => 'nullable',
            'confirmation_form_path' => 'nullable',
            'registration_application_path' => 'nullable',
            'birth_record_path' => 'nullable',
            'name_change_path' => 'nullable',
            'citizenship_certificate_path' => 'nullable',
            'residence_card_path' => 'nullable',
            'military_records_path' => 'nullable',
            'photograph_certificate_path' => 'nullable',
            'national_id_path' => 'nullable',
            'current_passport_pages_path' => 'nullable',
            'proof_of_residence_path' => 'nullable',
            'marriage_certificate_path' => 'nullable',
            'divorce_decree_path' => 'nullable',
            'curriculum_vitae_path' => 'nullable',
            'professional_reference_path' => 'nullable',
            'bank_reference_path' => 'nullable',
            'sworn_affidavit_financial_path' => 'nullable',
            'sworn_affidavit_spouse_path' => 'nullable',
            'academic_certificates_path' => 'nullable',
            'police_certificates_path' => 'nullable',
            'visas_path' => 'nullable',
            'medical_examiner_declaration_path' => 'nullable',
            'official_transcripts_path' => 'nullable',
            'custody_records_path' => 'nullable',
            'statutory_declaration_path' => 'nullable',
            'copy_of_parent_id_path' => 'nullable',
            'passport_sized_photos_path' => 'nullable',
            'ddo_assessment_path' => 'nullable',
            'ceo_assessment_path' => 'nullable',
            'co_assessment_path' => 'nullable',
            'proof_of_investment_transferred_path' => 'nullable',
            'proof_of_investment_path' => 'nullable',
            'certified_copy_professional_certificate_medical_examiner_path' => 'nullable',
            'net_worth_document_support_path' => 'nullable',
            'professional_certificate_translator_path' => 'nullable',
            'apostille_path' => 'nullable',
            'professional_certificate_notary_path' => 'nullable',
            'professional_certificate_attorney_path' => 'nullable',
            'professional_certificate_oaths_commissioner_path' => 'nullable',

        ]);
        $validated['ref_number'] = $referenceNumber;
        $patharray = [
            'file_path',
            'proof_of_payment_path',
            'document_checklist_path',
            'authorized_agent_form_path',
            'alternative_citizenship_path',
            'confirmation_form_path',
            'registration_application_path',
            'birth_record_path',
            'name_change_path',
            'citizenship_certificate_path',
            'residence_card_path',
            'military_records_path',
            'photograph_certificate_path',
            'national_id_path',
            'current_passport_pages_path',
            'proof_of_residence_path',
            'marriage_certificate_path',
            'divorce_decree_path',
            'curriculum_vitae_path',
            'professional_reference_path',
            'bank_reference_path',
            'sworn_affidavit_financial_path',
            'sworn_affidavit_spouse_path',
            'academic_certificates_path',
            'police_certificates_path',
            'visas_path',
            'medical_examiner_declaration_path',
            'official_transcripts_path',
            'custody_records_path',
            'statutory_declaration_path',
            'copy_of_parent_id_path',
            'passport_sized_photos_path',
            'ddo_assessment_path',
            'ceo_assessment_path',
            'co_assessment_path',
            'proof_of_investment_transferred_path',
            'proof_of_investment_path',
            'certified_copy_professional_certificate_medical_examiner_path',
            'net_worth_document_support_path',
            'professional_certificate_translator_path',
            'apostille_path',
            'professional_certificate_notary_path',
            'professional_certificate_attorney_path',
            'professional_certificate_oaths_commissioner_path',
        ];
        $userId = Auth::id();
        $tableId = $submission->id;
        $userGroup = Auth::user()->group;

        //reference number


//end
        $userFolder = public_path('uploads/' . $userGroup . '/' . $userId . '/' . $submission->id);


        if ($submission->principle_applicant_id) {
            $primary = TestTable::find($submission->principle_applicant_id);
            $userFolder = public_path('uploads/' . $userGroup . '/' . $primary->agent_id . '/' . $submission->principle_applicant_id . '/' . $submission->id);
        }
        foreach ($patharray as $value) {
            if ($request->hasFile($value)) {
                $file = $request->file($value);
                $validated[$value] = time() . '.' . $file->extension();
                $file->move($userFolder, $validated[$value]);
            } else {
                unset($validated[$value]);
            }
        }


        $submission->update($validated);


       TestTable::where('principle_applicant_id', $id)
                ->update(['status_id' => $validated['status_id']]);

        return redirect()->route('Draft');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
    }
}
