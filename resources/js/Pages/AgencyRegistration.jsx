import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
import Footer from "@/Components/Footer";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import { useEffect } from "react";
import InputError from "@/Components/InputError";
import Authenticated from "@/Layouts/AuthenticatedSidebar";
import { useForm } from "@inertiajs/react";
import GroupUpload from "@/Components/GroupUpload";

export default function AgencyReg({ auth, users, groups }) {
    console.log(groups);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        group: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("users.store"));
    };

    return (
        <AuthenticatedLayoutAA user={auth.user}>
            <Authenticated user={auth.user} />
            {/* Header */}
            <header className="bg-cyan-600 text-white py-4">
                {/* ... (header content) */}
            </header>

            {/* Main Content */}
            <div className="py-12">
                <div className="lg:ml-[235px] sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg">
                        <GroupUpload />
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
