import { useState } from "react";
import "./App.css";
import type { Employees } from "./types/Employees";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeSearch from "./components/EmployeeSearch";

function App() {
  const [emp, setEmp] = useState<Employees[]>([
    {
      id: 1,
      name: "Saif",
      email: "saif@test.com",
      age: 33,
      role: "Frontend Developer",
      isActive: true,
    },
    {
      id: 2,
      name: "John",
      email: "john@test.com",
      age: 30,
      role: "Backend Developer",
      isActive: false,
    },
  ]);
  const [empEdit, setEmpEdit] = useState<Employees | null>(null);
  const [filteredEmp, setFilteredEmp] = useState<Employees[]>(emp);

  const handleAddEmp = (emp: Employees) => {
    console.log(emp);
    setEmp((prev) => [...prev, emp]);
  };

  const handleEditEmp = (emp: Employees) => {
    console.log(emp);
    setEmp((prev) => prev.map((item) => (item.id === emp.id ? emp : item)));
    setFilteredEmp((prev) =>
      prev.map((item) => (item.id === emp.id ? emp : item)),
    );
  };

  const handleEdit = (emp: Employees) => {
    console.log("edit", emp);
    setEmpEdit(emp);
  };

  const handleDelete = (emp: Employees) => {
    console.log(emp);
    setEmp((prev) => prev.filter((item) => item.id !== emp.id));
  };

  const handleSearch = (filteredEmployees: Employees[]) => {
    setFilteredEmp(filteredEmployees);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <h1 className="text-2xl font-bold text-slate-800">
            Employee Management
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your team members
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Statistics */}
        <section className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Employees</p>
            <p className="mt-2 text-3xl font-bold text-slate-800">
              {emp.length}
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Active Employees</p>
            <p className="mt-2 text-3xl font-bold text-green-600">
              {emp.filter((item) => item.isActive).length}
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Inactive Employees</p>
            <p className="mt-2 text-3xl font-bold text-red-600">
              {emp.filter((item) => !item.isActive).length}
            </p>
          </div>
        </section>

        {/* Employee Form */}
        <section className="mb-6 rounded-xl border bg-white p-6 shadow-sm">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-slate-800">
              Add Employee
            </h2>

            <p className="text-sm text-slate-500">
              Add a new member to your team
            </p>
          </div>

          <EmployeeForm
            onAddEmployee={handleAddEmp}
            editEmp={empEdit}
            onUpdateEmployee={handleEditEmp}
          />
        </section>

        {/* Search */}
        <section className="mb-6 rounded-xl border bg-white p-6 shadow-sm">
          <EmployeeSearch emps={emp} onSearch={handleSearch} />
        </section>

        {/* Employee List */}
        <section>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-slate-800">Employees</h2>

            <p className="text-sm text-slate-500">
              {filteredEmp.length} employees found
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {filteredEmp.map((item) => (
              <EmployeeCard
                key={item.id}
                emps={item}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
