import type { Employees } from "../types/Employees";
interface EmpsProps {
  emps: Employees;
  onEdit: (Employees: Employees) => void;
  onDelete: (Employees: Employees) => void;
}
const EmployeeCard = ({ emps, onEdit, onDelete }: EmpProps) => {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Top */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-600">
          {emps.name.charAt(0).toUpperCase()}
        </div>

        {/* Name */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold text-slate-800">{emps.name}</h3>

          <p className="truncate text-sm text-slate-500">{emps.role}</p>
        </div>

        {/* Status */}
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            emps.isActive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {emps.isActive ? "Active" : "Inactive"}
        </span>
      </div>

      {/* Details */}
      <div className="my-5 border-t border-slate-100 pt-4">
        <p className="mb-2 text-sm text-slate-500">✉️ {emps.email}</p>

        <p className="text-sm text-slate-500">👤 {emps.age} years</p>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={() => onEdit(emps)}
          className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(emps)}
          className="flex-1 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default EmployeeCard;
