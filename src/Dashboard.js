import React from 'react';
import './dashboard.css';



const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="sidebar">
                    <button><a href="/">Home</a></button>
                    <button><a href="/dashboard">Dashboard</a></button>
            </div>
            <div className="main-content">
                <h2>Dashboard</h2>
                <table className="styled-table">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>
                            <a href="mailto:">JohnDoe@dal.ca</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>
                            <a href="mailto:">MaryMoe@dal.ca</a>
                        </td>
                    </tr>
                    <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>
                            <a href="mailto:">JulyDooley@dal.ca</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Anja</td>
                        <td>Ravendale</td>
                        <td>
                            <a href="mailto:">AnjaRavendale@dal.ca</a>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Dashboard;