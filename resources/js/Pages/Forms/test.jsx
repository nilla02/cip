import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
import React, { useState, useEffect } from "react";
import Footer from '@/Components/Footer';
import { useState } from 'react';
import SB2 from '@/Components/AAComp/SB2';

export default function Dashboard({ auth, users,roles }) {
  const [editingProjectId, setEditingProjectId] = useState(null);

  console.log(roles)  
console.log(auth.user);



  const handleEditProject = (projectId) => {
    setEditingProjectId(projectId);
  };

  const columnsByRole = {
    'agents': ['First Name', 'Last Name', 'Status', 'Actions',],
    'super_administrators': ['First Name', 'Last Name', 'Status','Actions'],
    'compliance_officer':['First Name','Last Name','Status','FV' ,'co_notes'],
    'due_diligence_officer':['First Name','Last Name','Status','FV' ,'co_notes'],
    'law_enforcement_officer':['First Name','Last Name','Status','FV' ,'ddo_notes'],
    'website_admin':['First Name','Last Name','Status','FV' ,'ddo_notes'],
  };

  const isColumnVisible = (columnName) => {
    const userRole = auth.user.roles[0]?.name;
    console.log(auth.user.roles[0]?.name);
    return columnsByRole[userRole]?.includes(columnName);
    
  };
  



  return (
    <AuthenticatedLayoutAA user={auth.user}>
      <div className="flex flex-col min-h-screen">
 
        <div className="flex">
          <div className="hidden sm:block">
            {/* Sidebar */}
            <SB2 />
          </div>

          <div className="flex-1  mt-[20px] overflow-y-auto lg:ml-[180px] lg:p-[120px]">
           

            <div className="flex-grow">
            {/* Table */}
            <table className="w-full text-sm text-left text-black">
          <thead className="text-xs    uppercase bg-cyan-50 dark:bg-gray-700 text-white">
            <tr className=" bg-[#405160] text-white uppercase text-sm leading-normal">
              {isColumnVisible('First Name') && (
                <th scope="col" className="py-3 px-6 text-left">
                  First Name
                </th>
              )}
              {isColumnVisible('Last Name') && (
                <th scope="col" className="py-3 px-6">
                  Last Name
                </th>
              )}
              {isColumnVisible('Status') && (
                <th scope="col" className="py-3 px-6">
                  Status
                </th>
              )}
              {isColumnVisible('Actions') && (
                <th scope="col" className="py-3 px-6">
                  Actions
                </th>
              )}
              {isColumnVisible('FV') && (
                <th scope="col" className="py-3 px-6">
                 Edit Application
                </th>
              )}
                 {isColumnVisible('co_notes') && (
                <th scope="col" className="py-3 px-6">
                  Compliance Officer Notes
                </th>
              )}
               {isColumnVisible('ddo_notes') && (
                <th scope="col" className="py-3 px-6">
                  DDO Officer Notes
                </th>
              )}
            </tr>
          </thead>
          <tbody>
          
            {users.map((user) => {
            
            // const showRow =
            // auth.user.role_id === 1 &&  ['Draft','Query-Pending'].includes(user.status) && auth.user.id === user.user_id;

            return (
              // showRow &&
            
              <tr key={user.id} className="bg-white border-b dark:border-gray-700">
                {isColumnVisible('First Name') && (
                  <td className="px-6 py-4">{user.first_name}</td>
                )}
                {isColumnVisible('Last Name') && (
                  <td className="px-6 py-4">{user.last_name}</td>
                )}
                {isColumnVisible('Status') && (
                  <td className="px-6 py-4">
                    <span
    className={`${
      user.status === 'Draft'
        ? 'bg-purple-200 text-purple-600'
        : user.status === 'Non-Compliant'
        ? 'bg-yellow-200 text-yellow-600'
        : 'bg-red-200 text-red-600'
    } py-1 px-3 rounded-full text-xs`}
  >
    {user.status}
  </span>
                  </td>
                )}
                {isColumnVisible('Actions') && (
                  <td className="py-3 px-6">
                 
                                            <div class="flex item-center">
                                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </div>
                                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                <a
                 href={`submissions/${user.id}/edit`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                    </a>
                                                </div>

                                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </div>
                                            </div>
                       
                  </td>
                )}
                {isColumnVisible('FV') && (
                  <td className="px-6 py-4">
                                                                     <a href={`submissions/${user.id}/edit`}>
                                                   View Application
                                                    </a>
                                                      
                  </td>
                )}
                 {isColumnVisible('co_notes') && (
                  <td className="px-6 py-4">
                              {user.co_notes}                     
                                                      
                  </td>
                )}
                  {isColumnVisible('ddo_note') && (
                  <td className="px-6 py-4">
                              {user.ddo_note}                     
                                                      
                  </td>
                )}
              </tr>
            )
                  })}
          </tbody>
        </table>
            </div>
            <div className="mr-2">{/* Additional content */}</div>
          </div>
        </div>
      </div>
      <Footer className="mt-auto" />
      </AuthenticatedLayoutAA>
  );
}
