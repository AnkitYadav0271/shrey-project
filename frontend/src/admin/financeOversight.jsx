import React from "react";
import "./financeOversight.css";

const FinancialOversight = () => {
  // Example data for demo
  const feeStatus = {
    paid: 320,
    due: 80,
    overdue: 25,
  };
  const financialSummary = {
    totalFees: 120000,
    totalExpenses: 85000,
    netBalance: 35000,
  };

  // Placeholder for expense breakdown (for a real app, use a chart library)
  const expenseBreakdown = [
    { category: "Salaries", amount: 50000 },
    { category: "Supplies", amount: 20000 },
    { category: "Maintenance", amount: 15000 },
  ];

  return (
    <section className="financial-section">
      <h2>Financial Oversight</h2>
      <div className="financial-grid">
        {/* Fee Management */}
        <div className="financial-card">
          <img
            src="https://img.icons8.com/ios-filled/50/4CAF50/money-bag.png"
            alt="Fees"
          />
          <h3>Fee Management</h3>
          <div className="action-buttons">
            <button className="action-btn">View Payment Status</button>
            <button className="action-btn">Generate Invoices</button>
            <button className="action-btn">Send Reminders</button>
          </div>
          <div className="status-summary">
            <span>Paid: {feeStatus.paid}</span>
            <span>Due: {feeStatus.due}</span>
            <span>Overdue: {feeStatus.overdue}</span>
          </div>
        </div>

        {/* Expense Tracking */}
        <div className="financial-card">
          <img
            src="https://img.icons8.com/?size=64&id=ME7QdnqvaS3b&format=png&color=40C057"
            alt="Expenses"
          />
          <h3>Expense Tracking</h3>
          <div className="action-buttons">
            <button className="action-btn">Add Expense</button>
            <button className="action-btn">View Summary</button>
          </div>
          <div className="expense-chart">
            <p>Expense Breakdown</p>
            <ul>
              {expenseBreakdown.map((item, index) => (
                <li key={index}>
                  {item.category}: ₹{item.amount.toLocaleString()}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Financial Reports */}
        <div className="financial-card">
          <img
            src="https://img.icons8.com/?size=50&id=123750&format=png&color=40C057"
            alt="Reports"
          />
          <h3>Financial Reports</h3>
          <div className="action-buttons">
            <button className="action-btn">Generate Report</button>
            <button className="action-btn">Export Data</button>
          </div>
          <div className="report-summary">
            <span>Total Fees: ₹{financialSummary.totalFees.toLocaleString()}</span>
            <span>Total Expenses: ₹{financialSummary.totalExpenses.toLocaleString()}</span>
            <span>Net Balance: ₹{financialSummary.netBalance.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialOversight;
