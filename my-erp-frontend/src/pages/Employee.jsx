import {PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/16/solid";
import {useState} from "react";
import EmployeeModel from "../components/EmployeeModel.jsx";

const employees = [
  { name: "Sarah Jenkins", email: "s.jenkins@corperp.com", role: "Senior Frontend Engineer", department: "Engineering", status: "Active", initials: "SJ", color: "bg-amber-100 text-amber-800" },
  { name: "Marcus Rodriguez", email: "m.rodriguez@corperp.com", role: "Product Manager", department: "Product", status: "Active", initials: "MR", color: "bg-indigo-600 text-white" },
  { name: "David Kim", email: "d.kim@corperp.com", role: "Lead Designer", department: "Design", status: "On Leave", initials: "DK", color: "bg-sky-100 text-sky-800" },
  { name: "Amanda Lee", email: "a.lee@corperp.com", role: "Backend Engineer", department: "Engineering", status: "Active", initials: "AL", color: "bg-amber-700 text-white" },
];


function Employee() {

  const [openModel , setOpenModel ] = useState(false)

  return (
    <div className="mx-4 mt-5 w-auto md:mx-6 ">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm " style={{color:"var(--secondary-text-color)"}}>Manage all employee profiles</p>
        <button onClick={()=> setOpenModel(true)} className="flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
          <PlusIcon className="size-5" />
          Add Employee
        </button>
      </div>
      {openModel && (
          <EmployeeModel
              onClose={() => setOpenModel(false)}
          />
      )}

      <div className="overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm">
        <table className= "w-full table-fixed text-left text-[2px] text-slate-700">
          <thead className="bg-indigo-50 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
            <tr>
              <th className="w-[30%] px-3 py-3 text-left align-middle">Name</th>
              <th className="w-[26%] px-3 py-3">Role</th>
              <th className="w-[15%] px-3 py-3">Department</th>
              <th className="w-[17%] px-3 py-3">Status</th>
              <th className="w-[12%] pr-15 py-3 text-right align-middle whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {employees.map((employee) => (
              <tr key={employee.email} className="hover:bg-slate-50">
                <td className="px-3 py-3">
                  <div className="flex items-center gap-3">
                    <div className={`flex size-7 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${employee.color}`}>
                      {employee.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-800">{employee.name}</p>
                      <p className="truncate text-[11px] text-slate-500">{employee.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3">{employee.role}</td>
                <td className="px-3 py-3">{employee.department}</td>
                <td className="px-3 py-3">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-medium ${employee.status === "Active" ? "bg-teal-50 text-teal-700" : "bg-indigo-50 text-indigo-700"}`}>
                    <span className="size-1 rounded-full bg-current" />
                    {employee.status}
                  </span>
                </td>
                <td className="px-3 py-3 text-right align-middle">
                  <button type="button" aria-label={`Actions for ${employee.name}`} className="rounded p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-800">
                   <PencilIcon className="m-2 text-slate-800 size-5 hover:scale-110 transition-all duration-200 ease-linear"/>
                    
                  </button>
                   <button type="button" aria-label={`Actions for ${employee.name}`} className="rounded p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-800">
                   <TrashIcon  className="m-2 text-red-800 size-5 hover:scale-110  transition-all duration-200 ease-linear"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  );
}

export default Employee;
