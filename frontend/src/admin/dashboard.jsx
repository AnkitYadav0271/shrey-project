import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { FaSchool } from "react-icons/fa";

const Dashboard = () => {
  // Example data for demo purposes
  const [studentsEnrolled, setStudentsEnrolled] = useState(0);
  const [attendanceRate, setAttendanceRate] = useState(0);
  const [recentActivity, setRecentActivity] = useState([]);
  const [disciplineIncidents, setDisciplineIncidents] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [classroomStatus, setClassroomStatus] = useState([]);
  const [supportTickets, setSupportTickets] = useState([]);

  const time = new Date();
  
  const logTime = time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  // Simulate data fetch on component mount
  useEffect(() => {
    // Simulated data for demo
    setStudentsEnrolled(425);
    setAttendanceRate(92.5);
    setRecentActivity([
      { id: 1, action: "Login", user: "Principal", time:`${logTime}` },
      { id: 2, action: "Password Change", user: "Faculty", time: `10:30 AM` },
    ]);
    setDisciplineIncidents([
      { id: 1, student: "John Doe", type: "Late", date: "2025-06-21" },
      { id: 2, student: "Jane Smith", type: "Disruption", date: "2025-06-20" },
    ]);
    setNotifications([
      { id: 1, message: "High absenteeism in class 10B", level: "warning" },
      { id: 2, message: "New support ticket created", level: "info" },
    ]);
    setClassroomStatus([
      { id: 1, room: "Room 101", status: "Available" },
      { id: 2, room: "Room 202", status: "Maintenance" },
    ]);
    setSupportTickets([
      { id: 1, issue: "Projector not working", status: "Open" },
      { id: 2, issue: "AC needs repair", status: "In Progress" },
    ]);
  }, []);

  return (
    <div className="principal-dashboard">
      <div className="dashboard-header">
        <div className="header-content">
          <div className="logo">
            <img
              src="https://img.icons8.com/?size=80&id=111497&format=png"
              alt="School Logo"
            />
            <h1>Principal Dashboard</h1>
          </div>
          <div className="user-info">
            <img
              src="https://img.icons8.com/ios-filled/50/4CAF50/user-male-circle.png"
              alt="Principal"
            />
            <span>Welcome, Principal</span>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Key Performance Indicators (KPIs) */}
        <section className="kpi-section">
          <h2>Key Performance Indicators</h2>
          <div className="kpi-grid">
            <div className="kpi-card">
              <img
                src="https://img.icons8.com/ios-filled/50/4CAF50/student-registration.png"
                alt="Students"
              />
              <h3>Students Enrolled</h3>
              <p>{studentsEnrolled}</p>
            </div>
            <div className="kpi-card">
              <img
                src="https://img.icons8.com/?size=48&id=ffBzd521wUpv&format=png"
                alt="Attendance" className="attendance"
              />
              <h3>Attendance Rate</h3>
              <p>{attendanceRate}%</p>
            </div>
            <div className="kpi-card">
              <img
                src="https://img.icons8.com/ios-filled/50/4CAF50/graduation-cap.png"
                alt="Graduation"
              />
              <h3>Graduation Rate</h3>
              <p>95%</p>
            </div>
            <div className="kpi-card">
              <img
                src="https://img.icons8.com/ios-filled/50/4CAF50/low-priority.png"
                alt="Discipline"
              />
              <h3>Discipline Incidents</h3>
              <p>{disciplineIncidents.length}</p>
            </div>
          </div>
        </section>

        {/* Student Performance Analytics */}
        <section className="analytics-section">
          <h2>Student Performance Analytics</h2>
          <div className="analytics-grid">
            <div className="analytics-card">
              <img
                src="https://img.icons8.com/ios-filled/50/4CAF50/bar-chart.png"
                alt="Grades"
              />
              <h3>Grade Distribution</h3>
              <p>Charts coming soon</p>
            </div>
            <div className="analytics-card">
              <img
                src="https://img.icons8.com/ios-filled/50/4CAF50/line-chart.png"
                alt="Progress"
              />
              <h3>Progress Tracking</h3>
              <p>Visualizations coming soon</p>
            </div>
            <div className="analytics-card">
              <img
                src="https://img.icons8.com/ios-filled/50/4CAF50/student-male.png"
                alt="At-Risk"
              />
              <h3>At-Risk Students</h3>
              <p>Identification coming soon</p>
            </div>
          </div>
        </section>

        {/* Attendance and Absenteeism */}
        <section className="attendance-section">
          <h2>Attendance and Absenteeism</h2>
          <div className="attendance-grid">
            <div className="attendance-card">
              <img
                src="https://img.icons8.com/ios-filled/50/4CAF50/calendar.png"
                alt="Attendance"
              />
              <h3>Daily Attendance</h3>
              <p>Graphs coming soon</p>
            </div>
            <div className="attendance-card">
              <img
                src="https://img.icons8.com/?size=24&id=1k17rOJ0I6JM&format=png&color=40C057"
                alt="Absenteeism"
              />
              <h3>Absenteeism Breakdown</h3>
              <p>Reasons coming soon</p>
            </div>
          </div>
        </section>

        {/* Discipline and Behavior */}
        <section className="discipline-section">
          <h2>Discipline and Behavior</h2>
          <ul className="incident-list">
            {disciplineIncidents.map((incident) => (
              <li key={incident.id}>
                <img
                  src="https://img.icons8.com/ios-filled/50/4CAF50/warning-shield.png"
                  alt="Incident"
                />
                <span>
                  {incident.student} - {incident.type} ({incident.date})
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Program and Department Monitoring */}
        <section className="programs-section">
          <h2>Program and Department Monitoring</h2>
          <div className="programs-card">
            <img
              src="https://img.icons8.com/ios-filled/50/4CAF50/classroom.png"
              alt="Programs"
            />
            <p>Departmental stats and special programs coming soon</p>
          </div>
        </section>

        {/* Data Lookup and Filtering */}
        <section className="lookup-section">
          <h2>Data Lookup and Filtering</h2>
          <div className="lookup-card">
            <img
              src="https://img.icons8.com/ios-filled/50/4CAF50/search.png"
              alt="Search"
            />
            <input
              type="text"
              placeholder="Search student by name or ID"
              className="search-input"
            />
            <button className="filter-btn">
              <img
                src="https://img.icons8.com/ios-filled/50/4CAF50/filter.png"
                alt="Filter"
              />
              Filter by Class/Grade/Program
            </button>
          </div>
        </section>

        {/* Real-Time Updates and Alerts */}
        <section className="updates-section">
          <h2>Real-Time Updates and Alerts</h2>
          <div className="updates-grid">
            <div className="notifications-card">
              <img
                src="https://img.icons8.com/?size=78&id=v6SDnIZw3Kk4&format=png&color=40C057"
                alt="Alerts"
              />
              <h3>Notifications</h3>
              <ul className="notification-list">
                {notifications.map((notification) => (
                  <li key={notification.id} className={notification.level}>
                    {notification.message}
                  </li>
                ))}
              </ul>
            </div>
            <div className="activity-card">
              <img
                src="https://img.icons8.com/ios-filled/50/4CAF50/activity-history.png"
                alt="Activity"
              />
              <h3>Recent Activity</h3>
              <ul className="activity-list">
                {recentActivity.map((activity) => (
                  <li key={activity.id}>
                    {activity.action} by {activity.user} at {activity.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Resource Management */}
        <section className="resources-section">
          <h2>Resource Management</h2>
          <div className="resource-grid">
            <div className="resource-card">
              <img
                src="https://img.icons8.com/ios-filled/50/4CAF50/door.png"
                alt="Classroom"
              />
              <h3>Classroom Status</h3>
              <ul>
                {classroomStatus.map((room) => (
                  <li key={room.id}>
                    {room.room} - {room.status}
                  </li>
                ))}
              </ul>
            </div>
            <div className="resource-card">
              <img
                src="https://img.icons8.com/ios-filled/50/4CAF50/support.png"
                alt="Support"
              />
              <h3>Support Tickets</h3>
              <ul>
                {supportTickets.map((ticket) => (
                  <li key={ticket.id}>
                    {ticket.issue} - {ticket.status}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
