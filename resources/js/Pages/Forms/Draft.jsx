import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
import Authenticated from "@/Layouts/AuthenticatedSidebar";
import Footer from "@/Components/Footer";
import { useState, useEffect } from "react";

export default function Edit({ auth, users, roles }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    console.log(roles);
    console.log(auth.user);

    const handleEditProject = (projectId) => {
        setEditingProjectId(projectId);
    };
    useEffect(() => {
        const filtered = users
            .filter(
                (user) =>
                    user.first_name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    user.last_name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                        ||
                        user.status_id
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                // Add more filters for other columns if needed
            )
            .slice(0, 50); // Limit to latest 5 inputs
        setFilteredUsers(filtered);
    }, [users, searchQuery]);

    const columnsByRole = {
        agents: ["id","First Name", "Last Name", "Status", "Actions"],
        super_administrators: ["First Name", "Last Name", "Status", "Actions"],
        compliance_officer: [
            "First Name",
            "Last Name",
            "Status",
            "Actions",
            "co_notes",
        ],
        admin_compliance_officer: [
            "First Name",
            "Last Name",
            "Status",
            "Actions",
            "co_notes",
            "Assigned_Compliance",
            "ACO",
        ],
        due_diligence_officer: [
            "First Name",
            "Last Name",
            "Status",
            "Actions",
            "co_notes",
        ],
        admin_due_diligence_officer: [
            "First Name",
            "Last Name",
            "Status",
            "Actions",
            "co_notes",
            "Assigned_DDO",
            "ADDO",
        ],

        law_enforcement_officer: [
            "First Name",
            "Last Name",
            "Status",
            "FV",
            "ddo_notes",
        ],
        website_admin: [
            "First Name",
            "Last Name",
            "Status",
            "Actions",
            "ACO",
            "ADDO",
        ],
        ceo: [
            "First Name",
            "Last Name",
            "Status",
            "Actions",
            "ddo_notes",
            "co_notes",
            "ceo_notes",
        ],
    };

    const isColumnVisible = (columnName) => {
        const userRole = auth.user.roles[0]?.name;
        return columnsByRole[userRole]?.includes(columnName);
    };

    return (
        <AuthenticatedLayoutAA user={auth.user}>
            <Authenticated user={auth.user} />
            {/* Header */}
            <header className="bg-gray-900 text-white py-4">
                {/* ... (header content) */}
            </header>

            {/* Main Content */}

            <div className="py-12">
                <div className="lg:ml-[235px] sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg">

                            <section className="">
                                <div className=" flex bg-cyan-700  to-[#405160] p-3 rounded">
                                    <div className="flex-1 pt-2">
                                        <h1 className="text-bold text-white">Application Table</h1>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={(e) =>
                                            handleSearch(e.target.value)
                                        }
                                        className=" px-4 py-2 border rounded-lg"
                                    />
                                </div>
                                <table className="w-full text-sm text-left text-black">
                                    <thead className="text-xs  uppercase bg-white  border-2 text-cyan-600">
                                        <tr>
                                        {isColumnVisible("id") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6 text-left"
                                                >
                                                   Id
                                                </th>
                                            )}
                                            {isColumnVisible("First Name") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6 text-left"
                                                >
                                                    First Name
                                                </th>
                                            )}
                                            {isColumnVisible("Last Name") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                    Last Name
                                                </th>
                                            )}
                                            {isColumnVisible("Status") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                    Status
                                                </th>
                                            )}
                                            {isColumnVisible("Actions") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                    Actions
                                                </th>
                                            )}
                                            {isColumnVisible("FV") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                    Edit Application
                                                </th>
                                            )}
                                            {isColumnVisible(
                                                "Assigned_Compliance"
                                            ) && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6 text-left"
                                                >
                                                    Compliance Officer
                                                </th>
                                            )}
                                            {isColumnVisible("co_notes") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                    Compliance Officer Notes
                                                </th>
                                            )}
                                            {isColumnVisible(
                                                "Assigned_DDO"
                                            ) && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6 text-left"
                                                >
                                                    Due Diligence Officer
                                                </th>
                                            )}
                                            {isColumnVisible("ddo_notes") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                    DDO Officer Notes
                                                </th>
                                            )}
                                            {isColumnVisible("ceo_notes") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                    CEO Officer Notes
                                                </th>
                                            )}
                                             {isColumnVisible("ADDO") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                  Assigned Due Diligence Officer
                                                </th>
                                            )}
                                                {isColumnVisible("ACO") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                  Assigned Compliance Officer
                                                </th>
                                            )}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {filteredUsers.map((user) => (
                                            // const showRow =
                                            // auth.user.role_id === 1 &&  ['Draft','Query-Pending'].includes(user.status) && auth.user.id === user.user_id;

                                            // showRow &&

                                            <tr
                                                key={user.id}
                                                className="bg-white border-b dark:border-gray-700"
                                            >
                                                    {isColumnVisible(
                                                    "id"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {user.id}
                                                    </td>
                                                )}
                                                {isColumnVisible(
                                                    "First Name"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {user.first_name}
                                                    </td>
                                                )}
                                                {isColumnVisible(
                                                    "Last Name"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {user.last_name}
                                                    </td>
                                                )}
                                                {isColumnVisible("Status") && (
                                                    <td className="px-6 py-4">
                                                        <span
                                                            className={`${
                                                                user.status_id ===
                                                                "Draft"
                                                                    ? "bg-purple-200 text-purple-600"
                                                                    : user.status_id ===
                                                                      "Non-Compliant"
                                                                    ? "bg-yellow-200 text-yellow-600"
                                                                    : user.status_id === "Granted"
                                                                   ? "bg-green-200 text-green-600"
                                                                   : user.status_id === "Closed"
                                                                   ? "bg-yellow-200 text-yellow-600"
                                                                   : user.status_id === "Pending-Review"
                                                                   ? "bg-blue-200 text-blue-600"
                                                                   : user.status_id === "Pending_Decision"
                                                                   ? "bg-cyan-200 text-cyan-600"
                                                                   : user.status_id === "pre-processing_draft"
                                                                   ? "bg-slate-200 text-slate-600"
                                                                    :"bg-red-200 text-red-600"

                                                            } py-1 px-3 rounded-full text-xs`}
                                                        >
                                                            {user.status_id}
                                                        </span>
                                                    </td>
                                                )}
                                                {isColumnVisible("Actions") && (
                                                    <td className="py-3 px-6">
                                                        <div class="flex item-center">


                                                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                <a
                                                                    href={`Commission/submissions/${user.id}/edit`}
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke-width="1.5"
                                                                        stroke="currentColor"
                                                                        class="w-6 h-6"
                                                                    ><title className="">Proof of payment submission</title>'
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                        />
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 ">
                                                                <a
                                                                    href={`submissions/${user.id}/edit`}
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke-width="1.5"
                                                                        stroke="currentColor"
                                                                        class="w-6 h-6"

                                                                    > <title className="">Edit</title>
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                                        />
                                                                    </svg>

                                                                </a>
                                                            </div>
                                                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">

                                                            </div>
                                                        </div>
                                                    </td>
                                                )}
                                                {isColumnVisible("FV") && (
                                                    <td className="px-6 py-4">
                                                        <a
                                                            href={`submissions/${user.id}/edit`}
                                                        >
                                                            View Application
                                                        </a>
                                                    </td>
                                                )}
                                                {isColumnVisible(
                                                    "co_notes"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {user.co_notes}
                                                    </td>
                                                )}
                                                {isColumnVisible(
                                                    "ddo_notes"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {user.ddo_notes}
                                                    </td>
                                                )}
                                                {isColumnVisible(
                                                    "ceo_notes"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {user.ceo_notes}
                                                    </td>
                                                )}
                                                {isColumnVisible(
                                                    "Assigned_DDO"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {user.Assigned_DDO}
                                                    </td>
                                                )}
                                                {isColumnVisible(
                                                    "Assigned_Compliance"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {
                                                            user.Assigned_Compliance
                                                        }
                                                    </td>
                                                )}
                                                {isColumnVisible("ACO") && (
                                                    <td className="px-6 py-4">
                                                        <a
                                                            href={`co/assign/submissions/${user.id}/edit`}
                                                        >
                                                            Select
                                                            Officer
                                                        </a>
                                                    </td>
                                                )}
                                                {isColumnVisible("ADDO") && (
                                                    <td className="px-6 py-4">
                                                        <a
                                                            href={`ddo/assign/submissions/${user.id}/edit`}
                                                        >
                                                            Select
                                                            Officer
                                                        </a>
                                                    </td>
                                                )}
                                                {isColumnVisible("AOF") && (
                                                    <td className="px-6 py-4">
                                                    {user.i}
                                                    </td>
                                                )}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </section>
                        </div>
                        </div>
                        </div>


            {/* Footer */}
            {/* <footer className="">
                <Footer />
            </footer> */}
        </AuthenticatedLayoutAA>
    );
}
