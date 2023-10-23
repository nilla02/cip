import AuthenticatedLayoutAA from '@/Layouts/AuthenticatedLayoutAA';


import Footer from '@/Components/Footer';

import Authenticated from '@/Layouts/AuthenticatedSidebar';
import PieChart from '@/Components/Charts/PieChart';
import LineChart from '@/Components/Charts/LineChart';




export default function report({ auth, mustVerifyEmail, status,users }) {
    const draftUsers = users.filter((user) => user.status === 'Draft');
    const draftUserCount = draftUsers.length;
    const PPU = users.filter((user) => user.status === 'Pre-Processing');
    const PPC = PPU.length;
    const NNC = users.filter((user) => user.status === 'Non-Compliant');
    const NNCC = NNC.length;
     const QP = users.filter((user) => user.status === 'Query-Pending');
    const QPC = QP.length;
    const PR = users.filter((user) => user.status === 'Pending_Review');
    const PRC = PR.length;
    const BCU = users.filter((user) => user.status === 'Background-check-Underway');
    const BCUC = BCU.length;
    const IP = users.filter((user) => user.status === 'Investment-Pending');
    const IPC = IP.length;
    const IR = users.filter((user) => user.status === 'Investment-Received');
    const IRC = IR.length;
    const DWC = users.filter((user) => user.status === 'Delayed-With-Cause');
    const DWCC = DWC.length;
    const AP = users.filter((user) => user.status === 'Approved');
    const APC = AP.length;
    const DC = users.filter((user) => user.status === 'Denied');
    const DCC = DC.length;
    const CL = users.filter((user) => user.status === 'Closed');
    const CLC = CL.length;

  const currentYear = new Date().getFullYear();
    return (
        <AuthenticatedLayoutAA user={auth.user}>
         <Authenticated user={auth.user}/>
            {/* Header */}
            <header className="bg-gray-900 text-white py-4">
                {/* ... (header content) */}
            </header>

            {/* Main Content */}
            <main className="container mx-auto m-20 py-8 lg:w-3/4 xl:w-2/3">
                <section className="mb-8">
                   
                        <div className="flex ]min-h-screen ">
                            <div class="m-5  w-full  rounded-lg ">
                                <div className=" mx-auto sm:px-6 lg:px-8 space-y-6">
                                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                        <LineChart />
                                    </div>
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="flex items-center justify-center rounded bg-white shadow sm:rounded-lg h-30 ">
                                            <div className="h-64 w-full"></div>
                                        </div>
                                        <div class="flex items-center justify-center rounded bg-white shadow sm:rounded-lg">
                                            <LineChart />
                                        </div>
                                        <div class="flex items-center justify-center rounded bg-white shadow sm:rounded-lg">
                                            <LineChart />
                                        </div>
                                    </div>
                                    <div className=" item-center bg-white shadow sm:rounded-lg">
                                        <PieChart users={users} />
                                    </div>

                                    <div class="grid grid-cols-2 gap-4">
                                        <div class=" items-center   grid-rows-2  h-[500px] justify-center rounded bg-white shadow sm:rounded-lg ">
                                            <div className=" bg-white shadow sm:rounded-lg m-10">
                                                {" "}
                                                <LineChart />{" "}
                                            </div>
                                            <div className=" bg-white shadow sm:rounded-lg m-10">
                                                {" "}
                                                <LineChart />{" "}
                                            </div>
                                        </div>
                                        <div class="flex items-center h-[1000px] justify-center rounded bg-white shadow sm:rounded-lg">
                                            <div className="h-[1000px] w-full">
                                                <LineChart />
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-center rounded bg-white shadow sm:rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
               
                </section>

                <section className="mb-8"></section>

                <section className="mb-8"></section>
            </main>

            {/* Footer */}
            <footer className="">
                <Footer />
            </footer>
        </AuthenticatedLayoutAA>
    );
}
