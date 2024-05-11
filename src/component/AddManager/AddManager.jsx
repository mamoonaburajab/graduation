import React, { useEffect, useState } from 'react';
import './Addmanager.css';

const AddManager = () => {
    const [managers, setManagers] = useState([]); // State to store managers
    const [view, setView] = useState('form'); // State to control the displayed view

    useEffect(() => {
        // Fetch existing managers when the component mounts
        fetch("http://localhost:4061/administrative_manager/getManagers")
            .then((response) => response.json())
            .then((data) => setManagers(data))
            .catch((error) => console.error("Error fetching managers:", error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const managerData = {
            first_name: formData.get("first_name"),
            last_name: formData.get("last_name"),
            ID: formData.get("ID"),
            email: formData.get("email"),
            phone_No: formData.get("phone_No"),
        };

        fetch("http://localhost:4061/administrative_manager/AddManager", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(managerData),
        })
            .then((response) => response.json())
            .then(() => {
                alert("Manager added successfully");
                // Re-fetch managers to update the list after adding a new one
                fetch("http://localhost:4061/administrative_manager/getManagers")
                    .then((response) => response.json())
                    .then((data) => setManagers(data))
                    .catch((error) => console.error("Error fetching managers:", error));
            })
            .catch((error) => console.error("Error:", error));
    };

    return (
        <div className="add-manager-container">
            <h2>إدارة المدراء</h2>
            <div className="buttons-container">
                <button onClick={() => setView('form')}>اضافة مدير اداري</button>
                <button onClick={() => setView('list')}>قائمة المدراء</button>
            </div>
            {view === 'form' && (
                <form onSubmit={handleSubmit}>
                    <input name="first_name" className="form-input" type="text" placeholder="الاسم الأول" required />
                    <input name="last_name" className="form-input" type="text" placeholder="الاسم الأخير" required />
                    <input name="ID" className="form-input" type="text" placeholder="رقم الهوية" required />
                    <input name="email" className="form-input" type="email" placeholder="البريد الإلكتروني" required />
                    <input name="phone_No" className="form-input" type="text" placeholder="رقم الهاتف" required />
                    <button className="submit-button" type="submit">إضافة</button>
                </form>
            )}
            {view === 'list' && (
                <div className="managers-list">
                    <h3>قائمة المدراء</h3>
                    {managers.map((manager, index) => (
                        <div key={index}>
                            <p>{manager.first_name} {manager.last_name} - {manager.email}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AddManager;
