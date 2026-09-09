import React, { useState, useEffect } from "react";
import type { Employees } from "../types/Employees";

interface EmployeeFormProps {
  onAddEmployee: (employee: Employees) => void;
  onUpdateEmployee: (employee: Employees) => void; //Give me a function that accepts an Employee and doesn't return anything.
  editEmp: Employees | null;
}

const EmployeeForm = ({
  onAddEmployee,
  editEmp,
  onUpdateEmployee,
}: EmployeeFormProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    if (editEmp) {
      setName(editEmp.name);
      setEmail(editEmp.email);
      setAge(editEmp.age);
      setRole(editEmp.role);
    }
  }, [editEmp]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  };
  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editEmp) {
      const updatedEmployee: Employees = {
        id: editEmp.id,
        name: name,
        email: email,
        age: age,
        role: role,
        isActive: editEmp.isActive,
      };
      onUpdateEmployee(updatedEmployee);
    } else {
      onAddEmployee({
        id: Date.now(),
        name,
        email,
        age,
        role,
        isActive: true,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-5 md:grid-cols-2"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Employee Name
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter employee name"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter employee email"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      {/* Age */}
      <div>
        <label
          htmlFor="age"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Age
        </label>

        <input
          id="age"
          type="number"
          value={age}
          onChange={handleAgeChange}
          placeholder="Enter age"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      {/* Role */}
      <div>
        <label
          htmlFor="role"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Role
        </label>

        <input
          id="role"
          type="text"
          value={role}
          onChange={handleRoleChange}
          placeholder="e.g. Frontend Developer"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      {/* Submit */}
      <div className="md:col-span-2">
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
        >
          {editEmp ? "Update Employee" : "Add Employee"}
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
