import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { generateEmployeesData, HARD_CODED_EMPLOYEES } from './generateEmployeesData';
import './EmployeesList.css';

/**
 * EmployeesList component: Generates and displays large employee dataset with pagination.
 */
const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(50);
  const [showSamples, setShowSamples] = useState(true);

  const totalPages = Math.ceil(employees.length / pageSize);

  const paginatedEmployees = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return employees.slice(start, start + pageSize);
  }, [employees, currentPage, pageSize]);

  const generateData = useCallback(() => {
    setLoading(true);
    // Simulate large data generation
    const largeData = generateEmployeesData(50000);
    console.log(`Generated ${largeData.length} employee records`);
    setEmployees(largeData);
    setLoading(false);
  }, []);

  useEffect(() => {
    // Load samples initially
    setEmployees(HARD_CODED_EMPLOYEES);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const performanceColor = (score) => {
    if (score >= 4) return 'bg-success';
    if (score >= 3) return 'bg-warning';
    return 'bg-danger';
  };

  return (
    <div className="employees-container">
      <h2 className="mb-4">Employee Management System</h2>
      <div className="d-flex gap-2 mb-3 flex-wrap">
        <button className="btn btn-primary" onClick={generateData} disabled={loading}>
          {loading ? 'Generating...' : 'Generate 50K Records'}
        </button>
        <button className="btn btn-secondary" onClick={() => {
          if (employees.length === 5) {
            generateData();
          } else {
            setEmployees(HARD_CODED_EMPLOYEES);
            setCurrentPage(1);
          }
        }}>
          {employees.length === 5 ? 'Load Large Data' : 'Show Samples (5)'}
        </button>
        <button className="btn btn-success" onClick={() => {
          const dataStr = `export const HARD_CODED_EMPLOYEES = ${JSON.stringify(employees, null, 2)};`;
          navigator.clipboard.writeText(dataStr).then(() => {
            alert('Copied all records to clipboard in export format!');
          }).catch(err => {
            console.error('Copy failed:', err);
            prompt('Copy manually:', dataStr);
          });
        }} disabled={employees.length === 0}>
          Copy All Records to Array Object
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Role</th>
              <th>Salary</th>
              <th>Performance</th>
              <th>Join Date</th>
            </tr>
          </thead>
          <tbody>
            {paginatedEmployees.map((emp, index) => (
              <tr key={`${emp.name}-${index}`}>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.role}</td>
                <td>${emp.salary.toLocaleString()}</td>
                <td>
                  <span className={`badge ${performanceColor(emp.performanceScore)}`}>
                    {emp.performanceScore}
                  </span>
                </td>
                <td>{emp.joinDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <nav>
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
            </li>
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              const page = currentPage <= 3 ? i + 1 : totalPages - 4 + i + 1;
              return (
                <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(page)}>{page}</button>
                </li>
              );
            })}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </li>
          </ul>
        </nav>
      )}

      <div className="mt-3">
        <small>Total records: {employees.length} | Page {currentPage} of {totalPages}</small>
      </div>
    </div>
  );
};

export default EmployeesList;
