import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
import Footer from "@/Components/Footer";
import Cardbox from "@/Components/Cardbox";
import React from "react";
import Authenticated from "@/Layouts/AuthenticatedSidebar";
import DoughnutChart from "@/Components/Charts/DoughnutChart";
import BarGraph from "@/Components/Charts/BarGraph";
import PieChart from "@/Components/Charts/PieChart";

export default function AccDashboard({ auth, users, updated,user_id }) {



    return (
        <AuthenticatedLayoutAA user={auth.user}>
        <Authenticated user={auth.user} />
        <header className="bg-gray-900 text-white py-4">
            {/* ... (header content) */}
        </header>

        <div className="py-12">
            <div className="lg:ml-[235px]">
                <div class="lg:grid  lg:grid-cols-4  lg:gap-4 sm:grid  sm:grid-cols-1  sm:gap-4">
                    {/* cardbox1 */}
                    <div class=" ">
                        <div className="flex flex-wrap">
                            <div className="lg:w-[400px] shadow-xl bg-opacity-30 bg-white overflow-hidden flex flex-col">
                                <div className="p-5 flex items-center space-x-4">
                                    <div>
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                class="w-6 h-6"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                                                    clip-rule="evenodd"
                                                />
                                                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-gray-400 t">
                                        Total Applications
                                        </div>
                                        <div className="text-2xl font-bold font text-gray-900">
{}
                                        </div>
                                    </div>
                                </div>
                                <a href="#"></a>
                            </div>
                        </div>

                        <div></div>
                    </div>
                    {/* cardbox2 */}

                    <div class=" ">
                        <div className="flex flex-wrap">
                            <div className="lg:w-[400px] shadow-xl sm bg-opacity-30 bg-white overflow-hidden flex flex-col">
                                <div class="p-5 flex items-center space-x-4">
                                    <div>
                                        <a href="/your-route-here">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    class="w-6 h-6"
                                                ></svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-gray-400 t">
                               Draft
                                        </div>
                                        <div className="text-2xl font-bold font text-gray-900">
{}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    {/* cardbox3 */}
                    <div class=" ">
                        <div className="flex flex-wrap">
                            <div className="lg:w-[400px] shadow-xl bg-opacity-30 bg-white overflow-hidden flex flex-col">
                                <div className="p-5 flex items-center space-x-4">
                                    <div>
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
</svg>

                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-gray-400 ">
                                  Denied
                                        </div>
                                        <div className="text-2xl font-bold font text-gray-900">
{0}
                                        </div>
                                    </div>
                                </div>
                                <a href="#"></a>
                            </div>
                        </div>

                        <div></div>
                    </div>
                    {/* cardbox 4 */}
                    <div className="flex flex-wrap">
                        <div className="lg:w-[400px] bg-opacity-30 bg-white shadow-xl overflow-hidden flex flex-col">
                            <div class="p-5 flex items-center space-x-4">
                                <div>
                                    <a href="/your-route-here">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>

                                        </div>
                                    </a>
                                </div>
                                <div className="flex-grow">
                                    <div className="text-gray-400 t">
                                  Approved
                                    </div>
                                    <div className="text-2xl font-bold font text-gray-900">
{}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4 pt-4">


                        <div class="flex  justify-center rounded bg-opacity-30 bg-white shadow-xl sm:rounded-lg  ">
<div className="w-full h-full">
<BarGraph users={users} />
                        </div>
                        </div>

                    {/* piecehart */}
                    <div class="flex  justify-center rounded bg-opacity-30 bg-white shadow-xl sm:rounded-lg ">

                    <DoughnutChart users={users} />
                </div>
                </div>
                <div class="grid grid-cols-1 mt-4">
                    <div class="flex-1 items-center justify-center rounded bg-opacity-30 bg-white shadow-xl  sm:rounded-lg">
                    <table className="w-full text-sm text-left text-black   ">
                                    <thead className="text-xs   bg-opacity-30 text-black">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                id
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Ref#
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Status
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr
                                                className="bg-white border-b  dark:border-gray-700"
                                                key={user.id}
                                            >
                                                <td className="px-6 py-4">
                                                    {user.id}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.ref_number}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.first_name}{" "}
                                                    {user.last_name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.status_id}
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                    </div>
                </div>
            </div>
        </div>


        {/* Footer */}
        <footer className=""></footer>
    </AuthenticatedLayoutAA>
    );
}
