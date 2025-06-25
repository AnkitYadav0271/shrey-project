import { useState } from "react";
import { FaRupeeSign, FaCheck, FaArrowRight, FaLock } from "react-icons/fa";
import "./ProceedPayment.css"

export const ProceedPayment = () => {
    const [showPaymentForm, setShowPaymentForm] = useState(false);

    return (
        <div className="fee-deposit-page">
            {/* Header section */}
            <div className="header-section">
                <div className="header-content">
                    <h2>Fee Deposit 2025</h2>
                    <p>
                        Make your payment for the 2025 academic year at  Government Polytechnic Mankikpur. Secure your seat by depositing the required fees.
                    </p>
                </div>
                <div className="header-image">
                    <img src="fee-deposit.jpg" alt="Payment illustration" />
                </div>
            </div>

            {/* Main content */}
            <div className="main-content">
                {/* Left column */}
                <div className="left-column">
                    <img src="clgbg.jpg" alt="College building" />
                    <div className="left-content">
                        <h3>Payment Instructions</h3>
                        <p>
                            Please review the fee structure below and follow the steps to complete your payment. For any queries, contact the accounts office.
                        </p>
                    </div>
                </div>

                {/* Right column */}
                <div className="right-column">
                    {/* Fee Structure */}
                    <div className="info-box">
                        <h3>
                            <FaRupeeSign /> Fee Structure 2025
                        </h3>
                        <table>
                            <thead>
                            <tr>
                                <th>Course</th>
                                <th>Amount (INR)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Mechanical Engineering</td>
                                <td>15,000</td>
                            </tr>
                            <tr>
                                <td>Electrical Engineering</td>
                                <td>15,000</td>
                            </tr>
                            <tr>
                                <td>Civil Engineering</td>
                                <td>15,000</td>
                            </tr>
                            <tr>
                                <td>Information Technology</td>
                                <td>15,000</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Payment Section */}
                    <div className="info-box">
                        <h3>Payment Options</h3>
                        <ul>
                            <li>
                                <FaCheck /> Online Payment (Net Banking, UPI, Card)
                            </li>
                            <li>
                                <FaCheck /> Bank Transfer (RTGS/NEFT)
                            </li>
                            <li>
                                <FaCheck /> Cash Deposit at College Accounts Office
                            </li>
                        </ul>
                        <div
                            className="explore-link"
                            onClick={() => setShowPaymentForm(true)}
                        >
                            <span>Proceed to Payment</span>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Form Section */}
            {showPaymentForm && (
                <div className="payment-form-container">
                    <div className="payment-form">
                        <button
                            className="close-btn"
                            onClick={() => setShowPaymentForm(false)}
                        >
                            ×
                        </button>
                        <h3><FaLock/> Secure Payment</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="rollno">Roll Number</label>
                                <input type="text" id="rollno" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="course">Course</label>
                                <select id="course" required>
                                    <option value="">Select Course</option>
                                    <option value="mechanical">Mechanical Engineering</option>
                                    <option value="electrical">Electrical Engineering</option>
                                    <option value="civil">Civil Engineering</option>
                                    <option value="it">Information Technology</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="amount">Amount (INR)</label>
                                <input type="number" id="amount" defaultValue="15000" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="method">Payment Method</label>
                                <select id="method" required>
                                    <option value="">Select Payment Method</option>
                                    <option value="card">Credit/Debit Card</option>
                                    <option value="netbanking">Net Banking</option>
                                    <option value="upi">UPI</option>
                                </select>
                            </div>
                            <button type="submit" className="submit-btn">
                                Pay Now
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
