'use client'

import { useState } from 'react';
import PatientForm from './form';
import PatientList from './list';

export default function PatientPage() {
  const [refreshList, setRefreshList] = useState(0); // State to trigger list refresh

  // Function to refresh the patient list
  const handleRefreshList = () => {
    setRefreshList((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Gestion des Patients</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <PatientList refreshList={refreshList} onManualRefresh={handleRefreshList} /> 
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <PatientForm onPatientCreated={handleRefreshList} /> 
          </div>
        </div>
      </div>
    </div>
  );
}