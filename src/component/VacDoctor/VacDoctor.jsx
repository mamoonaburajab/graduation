import React, { useState } from 'react';
import VaccinationTable from '../VacTable/VacTable';
import Add_Vac from '../Add_Vac/Add_Vac';
import './VacDoctor.css'; // Import the CSS file here

const VacDoctor = () => {
    // State to toggle visibility of table and form
    const [showTable, setShowTable] = useState(false);
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="container">
            {/* Buttons to toggle the display */}
            <button 
                className="button"
                onClick={() => {
                    setShowTable(true);
                    setShowForm(false);
                }}
            >
                Display Table
            </button>
            <button 
                className="button"
                onClick={() => {
                    setShowForm(true);
                    setShowTable(false);
                }}
            >
                Display Form
            </button>

            {/* Conditional rendering of the table */}
            {showTable && (
                <VaccinationTable />
            )}

            {/* Conditional rendering of the form */}
            {showForm && (
                <Add_Vac />
            )}
        </div>
    );
};

export default VacDoctor;
