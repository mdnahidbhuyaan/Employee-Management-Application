const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Sales Report",
        "description": "Compile and finalize the monthly sales report for review.",
        "date": "2025-09-10",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Meeting",
        "description": "Discuss project updates and gather requirements.",
        "date": "2025-09-12",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update CRM",
        "description": "Log new customer data into the CRM system.",
        "date": "2025-09-08",
        "category": "Data Entry",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Fix Bug #342",
        "description": "Resolve login issue reported by QA.",
        "date": "2025-09-06",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Write Unit Tests",
        "description": "Increase coverage for payment module.",
        "date": "2025-09-15",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Deploy Update",
        "description": "Push version 2.3 to staging environment.",
        "date": "2025-09-09",
        "category": "Deployment",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "API Documentation",
        "description": "Update docs for new authentication endpoints.",
        "date": "2025-09-14",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Inventory Check",
        "description": "Verify stock levels and reorder supplies.",
        "date": "2025-09-07",
        "category": "Logistics",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Warehouse Audit",
        "description": "Perform safety and compliance checks.",
        "date": "2025-09-18",
        "category": "Audit",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Vendor Call",
        "description": "Discuss delivery delays with supplier.",
        "date": "2025-09-11",
        "category": "Communication",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Landing Page",
        "description": "Create mockups for new product launch.",
        "date": "2025-09-13",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Review UX Feedback",
        "description": "Go through usability test reports.",
        "date": "2025-09-16",
        "category": "Research",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare Presentation",
        "description": "Slides for upcoming design sprint review.",
        "date": "2025-09-19",
        "category": "Presentation",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Update Brand Guidelines",
        "description": "Add new typography and colors.",
        "date": "2025-09-20",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Customer Support Tickets",
        "description": "Resolve pending tickets in the support queue.",
        "date": "2025-09-05",
        "category": "Support",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Follow-up Emails",
        "description": "Send follow-up emails to clients after onboarding.",
        "date": "2025-09-08",
        "category": "Communication",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Training Session",
        "description": "Attend online customer success training.",
        "date": "2025-09-09",
        "category": "Training",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];


export const  setLocalStorage =()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}
export const  getLocalStorage =()=>{
const employees = JSON.parse(localStorage.getItem("employees"))
const admin = JSON.parse(localStorage.getItem("admin"))
return {employees,admin}

}