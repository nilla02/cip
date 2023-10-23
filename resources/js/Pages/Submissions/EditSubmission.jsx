import { useEffect, useRef } from "react";
import { BsCloudUpload } from "react-icons/bs";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
import Authenticated from "@/Layouts/AuthenticatedSidebar";
import Swal from "sweetalert2";

const fields = {
    first_name: {
        roles: [
            "agents",
            ,
            "website_admin",
            "admin_due_diligence_officer",
            "admin_compliance_officer",
            "ceo",
            "promoter",
        ],
        label: "First Name",
        field: "input",
        type: "text",
    },
    last_name: {
        roles: [
            "agents",
            "website_admin",
            "admin_due_diligence_officer",
            "admin_compliance_officer",
            "ceo",
            "promoter",
        ],
        label: "Last Name",
        field: "input",
        type: "text",
    },

    status_id: {
        roles: [
            "agents",
            "compliance_officer",
            "due_diligence_officer",
            "website_admin",
            "admin_due_diligence_officer",
            "admin_compliance_officer",
            "ceo",
            "promoter",
        ],
        label: "status",
        field: "select",
        options: [
            { value: "Draft", label: "Draft" },//compliance ddo only
            { value: "Non-Compliant", label: "Non Compliant" },

            { value: "return_draft", label: "Return To Draft" },///back to draft
            { value: "pre-processing", label: "Pre-processing" },//compliance
            { value: "compliance_approved", label: "Application Review Approved." },//send to next stage ddo

            { value: "return_compliance", label: "Return to compliance officer for review" },// send back to compliance
            { value: "Query-Pending", label: "Query Pending" }, //doo
            { value: "Pending-Review", label: "Pending Review" },//ddo
            { value: "ddo_approved", label: "Application meets due diligence requirements" },//change from ddo to ceo
            {
                value: "Pending_Background_check",
                label: "Pending Background check",
            },//back ground chekc underway

            { value: "Granted", label: "Granted" },
            { value: "Query_Application", label: "Query Application" },
            { value: "Pending_Decision", label: "Pending Decision" },
            { value: "Investment-Pending", label: "Investment Pending" },
            { value: "Investment-Received", label: "Investment Received" },
            { value: "Delayed-With-Cause", label: "Delayed With Cause" },
            { value: "Approved", label: "Approved" },
            { value: "Denied", label: "Denied" },
            { value: "Closed", label: "Closed" },
            {
                value: "Declaration-of-Allegiance-Pending",
                label: "Declaration of Allegiance Pending",
            },
        ],
    },

    COR: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Country of Residence",
        field: "input",
        type: "text",
    },
    ddo_notes: {
        roles: ["due_diligence_officer", "website_admin", "ceo", "promoter"],
        label: "DDO Notes",
        field: "input",
        type: "text",
    },
    co_notes: {
        roles: ["compliance_officer", "website_admin", "ceo", "promoter"],
        label: "Co Notes",
        field: "input",
        type: "text",
    },
    Region: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Region",
        label: "Region",
        field: "input",
        type: "text",
    },
    TOA: {
        roles: ["agents", "compliance_officer", "website_admin", "ceo"],
        label: "Type of Applicant",
        field: "input",
        type: "text",
    },
    TOI: {
        roles: ["agents", "compliance_officer", "website_admin", "ceo"],
        label: "TOI",
        field: "input",
        type: "text",
    },

    document_checklist_path: {
        roles: [
            "agents",
            "compliance_officer",
            "due_diligence_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Document Checklist (SL1)",
        field: "file",
        type: "text",
    },
    authorized_agent_form_path: {
        roles: [
            "agents",
            "due_diligence_officer",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Use of Authorized Agent Form (SL2)",
        field: "file",
        type: "text",
    },

    alternative_citizenship_path: {
        roles: [
            "agents",
            "due_diligence_officer",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Statement of Alternative Citizenship (SL3)",
        field: "file",
        type: "text",
    },

    confirmation_form_path: {
        roles: [
            "agents",
            "compliance_officer",
            "due_diligence_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Investment Confirmation Form (SL4)",
        field: "file",
        type: "text",
    },

    Registration_application_path: {
        roles: [
            "agents",
            "compliance_officer",
            "due_diligence_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Application for Registration as a Citizen of Saint Lucia (SL5)",
        field: "file",
        type: "text",
    },

    photograph_certificate_path: {
        roles: [
            "agents",
            "compliance_officer",
            "due_diligence_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Photograph and Signature Certificate (SL6)",
        field: "file",
        type: "text",
    },

    sworn_affidavit_spouse_path: {
        roles: [
            "agents",
            "compliance_officer",
            "due_diligence_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Sworn Affidavit of Support (SL7)",
        field: "file",
        type: "text",
    },

    medical_examiner_declaration_path: {
        roles: [
            "agents",
            "compliance_officer",
            "due_diligence_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Medical Examiner Details and Declaration (SL8)",
        field: "file",
        type: "text",
    },

    birth_record_path: {
        roles: [
            "agents",
            "compliance_officer",
            "due_diligence_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Birth Record",
        field: "file",
        type: "text",
    },

    citizenship_certificate_path: {
        roles: [
            "agents",
            "compliance_officer",
            "due_diligence_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Certificate(s) of Citizenship ",
        field: "file",
        type: "text",
    },

    residence_card_path: {
        roles: [
            "agents",
            "compliance_officer",
            "due_diligence_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Permanent Residence Card or Certificate",
        field: "file",
        type: "text",
    },
    national_id_path: {
        roles: [
            "agents",
            "compliance_officer",
            "due_diligence_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "National Identity Card",
        field: "file",
        type: "text",
    },
    current_passport_pages_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Passport Pages",
        field: "file",
        type: "text",
    },

    visas_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Visas",
        field: "file",
        type: "text",
    },

    apostille_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Copy of Apostille",
        field: "file",
        type: "text",
    },

    passport_sized_photos_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Passport-sized Photos",
        field: "file",
        type: "text",
    },

    proof_of_residence_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Proof of Residential Address Document",
        field: "file",
        type: "text",
    },

    marriage_certificate_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Marriage Record or Certificate",
        field: "file",
        type: "text",
    },

    divorce_decree_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Divorce Decree Document",
        field: "file",
        type: "text",
    },

    police_certificates_path: {
        roles: [
            "agents",
            "compliance_officer",
            "law_enforcement_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Police Certificate",
        field: "file",
        type: "text",
    },

    custody_records_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Custody or Legal guardianship Records",
        field: "file",
        type: "text",
    },

    statutory_declaration_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Statutory Declaration of Non-Accompying Parent",
        field: "file",
        type: "text",
    },

    copy_of_parent_id_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Photo ID of a Non-accompaying Parent",
        field: "file",
        type: "text",
    },

    copy_of_parent_id_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Military Record",
        field: "file",
        type: "text",
    },

    copy_of_parent_id_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Curriculum Vitae",
        field: "file",
        type: "text",
    },

    copy_of_parent_id_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Professional Reference Document",
        field: "file",
        type: "text",
    },

    copy_of_parent_id_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Professional and Academic Certificates",
        field: "file",
        type: "text",
    },

    copy_of_parent_id_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Official Transcripts from Educational Institution",
        field: "file",
        type: "text",
    },
};

export default function EditSubmissions({
    className = "",
    submission,
    auth,
    users,
    result,
}) {
    const {
        data,
        setData,
        errors,
        put,
        reset,
        post,
        processing,
        recentlySuccessful,
    } = useForm({
        ...submission,
    });
    console.log(auth);
    function handleFileChange(key, e) {
        setData(key, e.target.files[0]);
    }

    const updatePassword = (e) => {
        e.preventDefault();

        data._method = "put";
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        post(route("submission.update", submission.id), {
            preserveScroll: true,
            // onSuccess: () => reset(),
            onError: (errors) => {
                console.log(errors);
            },
        });
    };
    const handleClick = () => {
        Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
        });
    };
    const handleFileDelete = (key) => {
        setData(key, null);
    };
    const genField = (key) => {
        const field = fields[key];
        const userRole = auth.user.role_names[0] || "0";

        // console.log("Processing field:", key);

        // console.log("Field type:", field?.field);

        // console.log(auth.user);

        if (field.roles && !field.roles.includes(userRole)) {
            return <div key={key}></div>;
        }

        if (field.field === "input") {
            return (
                <div key={key}>
                    <InputLabel htmlFor={key} value={field.label} />

                    <TextInput
                        id={key}
                        value={data[key]}
                        onChange={(e) => setData(key, e.target.value)}
                        type={field.type}
                        className="mt-1 block w-full"
                        name={key}
                    />

                    <InputError message={errors[key]} className="mt-2" />
                </div>
            );
        }
        if (field.field === "select" && field.options) {
            let filteredOptions = field.options;

            // If the user role is "agents", filter the options
            if (userRole === "agents") {
                const allowedStatuses = ["Draft", "pre-processing"];
                filteredOptions = field.options.filter((option) =>
                    allowedStatuses.includes(option.value)
                );
            }
            // If the user role is "compliance_officer", filter the options
            if (userRole === "compliance_officer") {
                const allowedStatuses = [
                    "pre-processing_draft",
                    "pre-processing_accept",
                ];
                filteredOptions = field.options.filter((option) =>
                    allowedStatuses.includes(option.value)
                );
            }
            // If the user role is "compliance_officer", filter the options
            if (userRole === "due_diligence_officer") {
                const allowedStatuses = [
                    "Pending_Background_check",
                    "Pending_Decision",
                    "Granted",
                    "Query_Application",
                    "Background_check_Underway",
                ];
                filteredOptions = field.options.filter((option) =>
                    allowedStatuses.includes(option.value)
                );
            }
            return (
                <div key={key}>
                    <InputLabel htmlFor={key} value={field.label} />

                    <select
                        id={key}
                        onChange={(e) => setData(key, e.target.value)}
                        className="mt-1 block w-full"
                        name={key}
                    >
                        {filteredOptions.map((option) => (
                            <option
                                selected={data[key] === option.value}
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <InputError message={errors[key]} className="mt-2" />
                </div>
            );
        }
        if (field.field === "file") {
            const val = data[key];

            if (!val || val instanceof File) {
                const handleDrop = (e) => {
                    e.preventDefault();
                    const droppedFile = e.dataTransfer.files[0];
                    handleFileChange(key, { target: { files: [droppedFile] } });
                };

                return (
                    <div key={key}>
                        <div className="mb-0">
                            <InputLabel htmlFor={key} value={field.label} />
                            <div
                                className="relative"
                                onDrop={handleDrop}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {val && val.type === "application/pdf" ? (
                                    <embed
                                        src={URL.createObjectURL(val)}
                                        type="application/pdf"
                                        width="100%"
                                        height="500px"
                                    />
                                ) : (
                                    <div
                                        className="border-dashed border-2 border-gray-400 p-4 mt-4 text-center cursor-pointer"
                                        onClick={() =>
                                            document
                                                .querySelector(
                                                    `input[name="${key}"]`
                                                )
                                                .click()
                                        }
                                        onDragOver={(e) => e.preventDefault()}
                                        onDrop={handleDrop}
                                    >
                                        <BsCloudUpload className="text-3xl mb-2 mx-auto text-gray-400" />
                                        <p className="text-gray-500">
                                            {val
                                                ? "File type not supported."
                                                : "Drag and drop a file here or click to select a file."}
                                        </p>
                                        <input
                                            type="file"
                                            className="hidden"
                                            name={key}
                                            onChange={(e) =>
                                                handleFileChange(key, e)
                                            }
                                        />
                                    </div>
                                )}
                            </div>
                            <span className="text-red-600">{errors.File}</span>
                        </div>
                    </div>
                );
            }

            return (
                <div>
                    <InputLabel htmlFor={key} value={field.label} />
                    <a href={val} target="_blank">
                        {val}
                    </a>{" "}
                    <button
                        type="button"
                        onClick={() => handleFileDelete(key)}
                        className="text-red-500 hover:text-red-700"
                    >
                        Delete
                    </button>
                </div>
            );
        }
    };
    return (
        <AuthenticatedLayoutAA user={auth.user}>
            <Authenticated user={auth.user} />
            <body className="flex flex-col min-h-screen">
                <div className="flex">
                    <div className="hidden sm:block"></div>

                    <div className="flex-grow bg-white shadow-lg  ml-[20px] p-[15px]">
                        <div className="flex-1 overflow-y-auto lg:ml-[180px] lg:p-[120px]">
                            <section className={className}>
                                <header>
                                    <h2 className="text-lg font-medium text-gray-900">
                                        Application form
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Enter Sign application form and edit
                                        details of forms below.
                                    </p>
                                </header>
<header>
    Princiciple applicant or spouses
</header>
<table className="w-full text-sm text-left text-black">
                        <thead className="text-xs    uppercase bg-gradient-to-b from-cyan-600  to-[#405160] dark:bg-gray-700 text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Profile
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {result.map((user) => (
                                <tr
                                    className="bg-white border-b  dark:border-gray-700"
                                    key={user.id}
                                >
                                    <td className="px-6 py-4">{user.id}</td>
                                    <td className="px-6 py-4">
                                        {user.first_name}  {user.last_name}
                                    </td>
                                    <td className="px-6 py-4">
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <a
                                                        href={`/dashboard/submissions/${user.id}/edit`}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                    </td>


                                </tr>
                            ))}
                        </tbody>
                    </table>

                                <form
                                    onSubmit={updatePassword}
                                    enctype="multipart/form-data"
                                    className="mt-6 space-y-6"
                                >
                                    {Object.keys(fields).map((key) => {
                                        return genField(key);
                                    })}

                                    <div className="flex items-center gap-4">
                                        <PrimaryButton
                                            type="submit"
                                            disabled={processing}
                                            onClick={handleClick}
                                        >
                                            Save
                                        </PrimaryButton>

                                        <Transition
                                            show={recentlySuccessful}
                                            enterFrom="opacity-0"
                                            leaveTo="opacity-0"
                                            className="transition ease-in-out"
                                        >
                                            <p className="text-sm text-gray-600">
                                                Saved.
                                            </p>
                                        </Transition>
                                    </div>
                                </form>
                            </section>
                        </div>

                        <div className="flex-grow"></div>
                    </div>
                </div>
            </body>
        </AuthenticatedLayoutAA>
    );
}
