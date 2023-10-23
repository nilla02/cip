import AuthenticatedLayoutAA from '@/Layouts/AuthenticatedLayoutAA';


import Footer from '@/Components/Footer';
import SB2 from '@/Components/AAComp/SB2';
import LineChart from './Report';


export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayoutAA
            user={auth.user}

        >
           <div className="bg-[#405160] overflow-hidden shadow-sm sm:">
          <div className="p-6  text-white">
            {auth.user.name} You have successfully logged in!!
          </div>
        </div>
              <body className="flex bg-[#fafafa] flex-col min-h-screen">
        <div className="flex">
          <div className="hidden sm:block">
            <SB2/>
          </div>

          <div className="flex-grow bg-[#fafafa] ml-[20px] p-[15px]">

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">

             <LineChart/>
            </div>


          </div>
        </div>




      </body>
      <Footer className="mt-auto"/>


        </AuthenticatedLayoutAA>
    );
}
<div className="lg:ml-[235px] sm:px-6 lg:px-8">
<div className=" overflow-hidden shadow-sm sm:rounded-lg">

    <div class="grid grid-cols-4 gap-4  mt-4 h-20">
        <div class=" ">

<div className="flex flex-wrap">
<div className="lg:w-[390px] bg-white rounded shadow-sm overflow-hidden flex flex-col">
<div className="p-5 flex items-center space-x-4">
<div>
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-cyan-600">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
<path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clip-rule="evenodd" />
<path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
</svg>

</div>
</div>
<div className="flex-grow">
<div className="text-gray-400 t">Draft</div>
<div className="text-2xl font-bold font text-gray-900">
{draft}
</div>
</div>
</div>
<a
                href="#"

            >
<div className="text-white text-[21px] p-1 bg-cyan-600 font-bold leading-tight text-center">
View More
</div>
</a>
</div>
</div>

            <div></div>
        </div>
        <div class="">
        <div className="flex flex-wrap">
<div className="lg:w-[390px]  bg-white rounded shadow-sm overflow-hidden flex flex-col">
<div className="p-5 flex items-center space-x-4">
<div>
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-cyan-600">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
<path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clip-rule="evenodd" />
</svg>

</div>
</div>
<div className="flex-grow">
<div className="text-gray-400">Pre-processing</div>
<div className="text-2xl font-bold font text-gray-900">
 {pre_processing}
</div>
</div>
</div>
<a
                href="#"

            >
<div className="text-white text-[21px] p-1 bg-cyan-600 font-bold leading-tight text-center">
View More
</div>
</a>
</div>
</div>
        </div>
        <div class="">
        <div className="flex flex-wrap">
<div className="lg:w-[390px] bg-white rounded shadow-sm overflow-hidden flex flex-col">
<div className="p-5 flex items-center space-x-4">
<div>
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-cyan-600">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
<path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
</svg>

</div>
</div>
<div className="flex-grow">
<div className="text-gray-400">Approved</div>
<div className="text-2xl font-bold font text-gray-900">
 {approved}
</div>
</div>
</div>
<a
                href="#"

            >
<div className="text-white text-[21px] p-1 bg-cyan-600 font-bold leading-tight text-center">
View More
</div>
</a>
</div>
</div>
        </div>
        <div class="">
        <div className="flex flex-wrap">
<div className="lg:w-[390px] bg-white rounded shadow-sm overflow-hidden flex flex-col">
<div className="p-5 flex items-center space-x-4">
<div>
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-cyan-600">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>

</div>
</div>
<div className="flex-grow">
<div className="text-gray-400">Denied</div>
<div className="text-2xl font-bold font text-gray-900">
 {denied}
</div>
</div>
</div>
<a
                href="#"

            >
<div className="text-white text-[21px] p-1 bg-gradient-to-b from-cyan-600  to-[#405160] font-bold leading-tight text-center">
View More
</div>
</a>
</div>
</div>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4 lg:mt-[65px]  h-64">
        <div class="flex items-center justify-center rounded bg-opacity-100 bg-white shadow sm:rounded-lg ">
            <PieChart users={users} />
        </div>
        <div class="flex-1 items-center justify-center rounded bg-opacity-100 bg-white shadow sm:rounded-lg">
            <BarGraph users={users} />
        </div>
        <div class="flex items-center justify-center rounded bg-opacity-100 bg-white shadow sm:rounded-lg">
            <DoughnutChart users={users} />
        </div>
    </div>

    <div class="grid grid-cols-2 gap-4  lg:mt-[65px] h-[350px]">
        <div class="flex   shadow sm:rounded-lg ">
            <table className="w-full  text-sm text-left  text-black  ">
                <thead className="text-xs    uppercase  bg-gradient-to-b from-cyan-600  to-[#405160] text-white">
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
        <div class="flex rounded  bg-white shadow sm:rounded-lg">
            <table className="w-full text-sm text-left  text-black rounded-lg ">
                <thead className="text-xs    uppercase bg-cyan-600  text-white">
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
                    {updated.map((user) => (
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
