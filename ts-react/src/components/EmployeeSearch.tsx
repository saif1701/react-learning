import { useState } from "react";
import type { Employees } from "../types/Employees";

interface EmpProps {
  emps: Employees[];
  onSearch: (Employees: Employees) => void;
}
const EmployeeSearch = ({ onSearch, emps }: EmpProps) => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearch(value);

    const filter = emps.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    onSearch(filter);
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-lg font-semibold text-slate-800">
          Search Employees
        </h2>

        <p className="text-sm text-slate-500">Find employees by name</p>
      </div>

      <div className="flex w-full items-center rounded-lg border border-slate-300 bg-white px-3 py-2 md:w-80">
        <span className="mr-2 text-slate-400">🔍</span>

        <input
          type="text"
          value={search}
          placeholder="Search employee..."
          onChange={handleSearch}
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
        />
      </div>
    </div>
  );
};
export default EmployeeSearch;
