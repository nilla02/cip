import { Head, useForm, Link, usePage } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import React, { useState, useEffect } from "react";
import InputLabel from "@/Components/InputLabel";
import Swal from "sweetalert2";

export default function FileUpload({
    users,
    roles,
    auth,
    countries,
    principle_applicants,
    region,
    toa,
    toi,
    gender,
    mstatus
}) {


    const { data, setData, errors, post } = useForm({
        First_Name: "",
        Last_Name: "",
        type_of_investment: "",
        type_of_applicant: "",
        country_id: "",
        date_of_birth: "",
        Region: "",
        Gender: "",
        Marriage_Status: "",
        Status_id: "",
        Accompanying_dependents: "",
        Assigned_Promoters: "",
        principle_applicant_id: "",
        promoter_id: "",
        File: null,
    });
    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        const currentDate = new Date();
        const minDate = new Date(
            currentDate.getFullYear() - 16  ,
            currentDate.getMonth(),
            currentDate.getDate()
        ); // Calculate 18 years ago from today

        if (selectedDate < minDate) {
            setData({ ...data, date_of_birth: e.target.value });
        } else {
            alert("You must be 18 years or older.");
        }
    };

    function handleSubmit(e) {
        e.preventDefault();

        console.log;
        if (!data.First_Name || !data.Last_Name) {
            // Display an error message for incomplete or invalid form
            Swal.fire({
                icon: "error",
                title: "Please fill out the form correctly",
                showConfirmButton: false,
                timer: 3000,
            });
        } else {
            const formData = new FormData();

            formData.append("First_Name", data.First_Name);
            formData.append("Last_Name", data.Last_Name);
            formData.append("Status_id", data.Status_id);
            formData.append("Gender", data.Gender);
            formData.append("Region", data.Region);
            formData.append("date_of_birth", data.date_of_birth);
            formData.append("type_of_applicant", data.type_of_applicant);
            formData.append("type_of_investment", data.type_of_investment);
            formData.append("country_id", data.country_id);
            formData.append("File", data.File);
            formData.append(
                "principle_applicant_id",
                data.principle_applicant_id
            );
            formData.append("Marriage_Status", data.Marriage_Status);
            formData.append(
                "Accompanying_dependents",
                data.Accompanying_dependents
            );
            formData.append("promoter_id", data.promoter_id);

            post(route("TestTable.store"), formData);

            setData({
                First_Name: "",
                Last_Name: "",
                status_id: "",
                type_of_investment: "",
                type_of_applicant: "",
                country_id: "",
                Region: "",
                date_of_birth: "",
                Gender: "",
                Marriage_Status: "",
                Accompanying_dependents: "",
                principle_applicant_id: "",
                File: null,
                promoter_id: "",
            });
            Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 3000,
            });
        }
    }

    return (
        <div className=" sm:px-6 ">
            <form name="createForm" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <div className="mb-2">
                        {" "}
                        To Create a new form enter The information below.
                    </div>
                    <div className="flex ">
                        <div className=" flex-1 mb-4 ">
                            <InputLabel
                                htmlFor="First Name"
                                value="First Name"
                            />
                            <TextInput
                                type="text"
                                className="mt-1 block w-full"
                                label="First Name"
                                name="First_Name"
                                value={data.First_Name}
                                onChange={(e) =>
                                    setData("First_Name", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.First_Name}
                            </span>
                        </div>
                        <div className="flex-1 lg:ml-2  mb-4">
                            <InputLabel htmlFor="Last Name" value="Last Name" />
                            <TextInput
                                type="text"
                                className="mt-1 block w-full"
                                value={data.Last_Name}
                                onChange={(e) =>
                                    setData("Last_Name", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.Last_Name}
                            </span>
                        </div>
                    </div>
                    <div className="flex">
                        {/* //Gender */}
                        <div className=" lg:flex-1 mb-4">
                            <InputLabel htmlFor="Gender" value="Gender" />
                            <select
                                className="w-full mt-1 rounded"
                                value={data.Gender}
                                onChange={(e) =>
                                    setData("Gender", e.target.value)
                                }
                            >
                                     <option value="">
                              -Select Gender-
                            </option>
                            {gender.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                            </select>
                            <span className="text-red-600">
                                {errors.Gender}
                            </span>
                        </div>
                        {/* //Date of Birth */}
                        <div className="mb-4 ml-2 flex-1">
                            <InputLabel
                                htmlFor="Date of Birth"
                                value="Date of Birth"
                            />
                            <div></div>

                            <input
                                type="date"
                                className=" rounded mt-1 block w-full"
                                value={data.date_of_birth}
                                onChange={handleDateChange}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        {/* Type of investment*/}
                        <div className="mb-4 lg: flex-1">
                            <InputLabel
                                htmlFor="Type of investment"
                                value="Type of investment"
                            />
                       <select
    className="w-full rounded"
    value={data.type_of_investment}
    onChange={(e) => setData("type_of_investment", e.target.value)}
>
    <option value="">-Type of Investments-</option>
    {toi.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))}
</select>

                            <span className="text-red-600">
                                {errors.type_of_investment}
                            </span>
                        </div>
                        <div className=" flex-1 mb-4 ml-2 ">
                            <InputLabel
                                htmlFor="First Name"
                                value="Total Investment Amount"
                            />
                            <TextInput
                                type="text"
                                className=" block w-full"
                                label="First Name"
                                name="First_Name"
                                value={data.First_Name}
                                onChange={(e) =>
                                    setData("First_Name", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.First_Name}
                            </span>
                        </div>
                        {/* Type of Applicant*/}
                        <div className="mb-4 ml-2 flex-1">
                            <InputLabel
                                htmlFor="Type of Applicant"
                                value="Type of Applicant"
                            />
                              <select
                            className="w-full rounded"
                            value={data.type_of_applicant}
                            onChange={(e) =>
                                setData("type_of_applicant", e.target.value)
                            }
                        >
                            <option value="">
                              -Type of Applicant-
                            </option>
                            {toa.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                            <span className="text-red-600">
                                {errors.type_of_applicant}
                            </span>
                        </div>
{/*
                        //Number of dependants
                        <div className="mb-4 ml-2  flex-1">
                            <InputLabel
                                htmlFor="Number of dependents"
                                value="Number of qualified dependents"
                            />
                            <select
                                className="w-full rounded"
                                value={data.Accompanying_dependents}
                                onChange={(e) =>
                                    setData(
                                        "Accompanying_dependents",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="">
                                    -Select Number Of Dependents-
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value=">10">More than 10</option>
                            </select>
                            <span className="text-red-600">
                                {errors.Accompanying_dependents}
                            </span>
                        </div> */}

                              {/* //Number of dependants */}
                              <div className="mb-4 ml-2  flex-1">
                            <InputLabel
                                htmlFor="Number of dependents"
                                value="Number of Spouses"
                            />
                            <select
                                className="w-full rounded"
                                value={data.Accompanying_dependents}
                                onChange={(e) =>
                                    setData(
                                        "Accompanying_dependents",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="">
                                    -Select Number Of Spouses-
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value=">10">More than 10</option>
                            </select>
                            <span className="text-red-600">
                                {errors.Accompanying_dependents}
                            </span>
                        </div>
                    </div>
                    {/* Country of residence*/}
<div className="flex">
                    <div className="flex-1 mb-4 ml-">
                        <InputLabel
                            htmlFor="Country of Residence"
                            value="Country of Residence"
                        />
                        <select
                            className="w-full rounded"
                            value={data.country_id}
                            onChange={(e) =>
                                setData("country_id", e.target.value)
                            }
                        >
                            <option value="">
                                -Select Country Of Residence-
                            </option>
                            {countries.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                        <span className="text-red-600">{errors.COR}</span>
                    </div>

                    {/*Marriage_Status */}
                    <div className="flex-1 mb-4 ml-2">
                        <InputLabel
                            htmlFor="Marital Status"
                            value="Marital Status"
                        />
                        <select
                            className="w-full rounded"
                            value={data.Marriage_Status}
                            onChange={(e) =>
                                setData("Marriage_Status", e.target.value)
                            }
                        > <option value="">
                        -Type of Applicant-
                      </option>
                      {mstatus.map((user) => (
                          <option key={user.id} value={user.id}>
                              {user.name}
                          </option>
                      ))}
                        </select>
                        <span className="text-red-600">
                            {errors.Marriage_Status}
                        </span>
                    </div>
                    </div>
                    <div className="mb-4">
                        <InputLabel
                            htmlFor="Assigned Promoters"
                            value="Assigned Promoters"
                        />
                        <select
                            className="w-full rounded"
                            value={data.Assigned_Promoters}
                            onChange={(e) =>
                                setData("Assigned_Promoters", e.target.value)
                            }
                        >
                            <option value="null">
                                -Select Assigned Promoter-
                            </option>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                        <span className="text-red-600">
                            {errors.Assigned_Promoters}
                        </span>
                    </div>
                    <div className="mb-4">
                        <InputLabel
                            htmlFor="principle_applicant_id"
                            value="Assign Principle Applicant"
                        />
                        <select
                            className="w-full rounded"
                            value={data.principle_applicant_id}
                            onChange={(e) =>
                                setData(
                                    "principle_applicant_id",
                                    e.target.value
                                )
                            }
                            disabled={
                                data.type_of_applicant === "2"
                            } // Disabling the dropdown when type_of_applicant is Principle_Applicant
                        >
                            <option value="null">
                                -Select Assigned Principle Applicant-
                            </option>
                            {principle_applicants.map((user) => (
                                <option key={user} value={user}>
                                    {user}
                                </option>
                            ))}
                        </select>
                        <span className="text-red-600">
                            {errors.principle_applicant_id}
                        </span>
                    </div>

                    {/* Region */}
                    <div className="mb-4">
                        <InputLabel
                            htmlFor="Region"
                            value="Region"
                        />
                             <select
                            className="w-full rounded"
                            value={data.country_id}
                            onChange={(e) =>
                                setData("country_id", e.target.value)
                            }
                        >
                            <option value="">
                                -Select Region-
                            </option>
                            {countries.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                        <span className="text-red-600">{errors.Status}</span>
                    </div>
                           {/*Country of Residense */}
                           <div className="mb-4">
                        <InputLabel
                            htmlFor="Region"
                            value="Country of Residence"
                        />
                        <select
                            className="w-full rounded"
                            value={data.Region}
                            onChange={(e) => setData("Region", e.target.value)}
                        >
                             <option value="">
                              -Country of Residence-
                            </option>
                            {countries.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                        <span className="text-red-600">{errors.Status}</span>
                    </div>
                                        {/*Country of Residense */}
                                        <div className="mb-4">
                        <InputLabel
                            htmlFor="Region"
                            value="Birth Country"
                        />
                        <select
                            className="w-full rounded"
                            value={data.Region}
                            onChange={(e) => setData("Region", e.target.value)}
                        >
                            <option value="">
                              -Country of Birth-
                            </option>
                            {countries.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                        <span className="text-red-600">{errors.Status}</span>
                    </div>
                </div>

                <div className="mt-4">
                    <PrimaryButton
                        type="submit"
                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                        onClick={handleSubmit}
                    >
                        Save
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}
