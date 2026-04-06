export const HARD_CODED_EMPLOYEES = [
  {
    name: 'Amit Sharma',
    department: 'Engineering',
    role: 'Senior Software Engineer',
    salary: 120000,
    performanceScore: 4,
    joinDate: '2018-03-12',
  },
  {
    name: 'Priya Verma',
    department: 'HR',
    role: 'HR Manager',
    salary: 65000,
    performanceScore: 3,
    joinDate: '2019-07-21',
  },
  {
    name: 'Rahul Singh',
    department: 'Sales',
    role: 'Sales Executive',
    salary: 85000,
    performanceScore: 5,
    joinDate: '2017-11-02',
  },
  {
    name: 'Neha Patel',
    department: 'Marketing',
    role: 'Marketing Specialist',
    salary: 72000,
    performanceScore: 4,
    joinDate: '2020-01-15',
  },
  {
    name: 'Arjun Gupta',
    department: 'Finance',
    role: 'Financial Analyst',
    salary: 95000,
    performanceScore: 3,
    joinDate: '2016-06-18',
  },
];

/**
 * Generates large synthetic employee dataset.
 * @param {number} count - Number of records to generate (default 50000).
 * @returns {Array} Array of employee objects.
 */
export function generateEmployeesData(count = 50000) {
  const firstNames = ['Amit', 'Priya', 'Rahul', 'Neha', 'Arjun', 'Sita', 'Raj', 'Meera', 'Vikram', 'Lata', 'Kiran', 'Rohit', 'Anita', 'Suresh', 'Pooja'];
  const lastNames = ['Sharma', 'Verma', 'Singh', 'Patel', 'Gupta', 'Kumar', 'Yadav', 'Reddy', 'Nair', 'Iyer', 'Das', 'Chauhan', 'Mehta', 'Joshi', 'Rao'];
  const departments = ['Engineering', 'HR', 'Sales', 'Marketing', 'Finance', 'Operations', 'IT', 'Design'];
  const roles = {
    Engineering: ['Software Engineer', 'Senior Software Engineer', 'DevOps Engineer', 'QA Engineer'],
    HR: ['HR Manager', 'Recruiter', 'HR Executive'],
    Sales: ['Sales Executive', 'Sales Manager', 'Account Manager'],
    Marketing: ['Marketing Specialist', 'Content Marketer', 'Digital Marketer'],
    Finance: ['Financial Analyst', 'Accountant', 'Finance Manager'],
    Operations: ['Operations Manager', 'Logistics Coordinator'],
    IT: ['System Admin', 'Network Engineer'],
    Design: ['UI/UX Designer', 'Graphic Designer']
  };

  const employees = [];
  for (let i = 0; i < count; i++) {
    const dept = departments[Math.floor(Math.random() * departments.length)];
    const roleList = roles[dept] || ['Manager'];
    const name = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
    const role = roleList[Math.floor(Math.random() * roleList.length)];
    const salaryBase = {Engineering: 100000, HR: 60000, Sales: 80000, Marketing: 70000, Finance: 90000, Operations: 75000, IT: 85000, Design: 75000}[dept] || 70000;
    const salary = Math.floor(salaryBase + (Math.random() - 0.5) * 50000);
    const performanceScore = Math.floor(Math.random() * 5) + 1;
    const joinYear = 2015 + Math.floor(Math.random() * 10);
    const joinMonth = Math.floor(Math.random() * 12) + 1;
    const joinDay = Math.floor(Math.random() * 28) + 1;
    const joinDate = `${joinYear}-${String(joinMonth).padStart(2, '0')}-${String(joinDay).padStart(2, '0')}`;

    employees.push({
      name,
      department: dept,
      role,
      salary,
      performanceScore,
      joinDate
    });
  }
  return employees;
}
