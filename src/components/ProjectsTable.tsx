
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

const projects = [
  {
    company: "Chakra Soft UI Version",
    budget: "$14,000",
    status: "Working",
    completion: 60,
    statusColor: "text-blue-400",
    statusIcon: Clock,
  },
  {
    company: "Add Progress Track",
    budget: "$3,000",
    status: "Done",
    completion: 100,
    statusColor: "text-green-400",
    statusIcon: CheckCircle,
  },
  {
    company: "Fix Platform Errors",
    budget: "Not set",
    status: "Cancelled",
    completion: 30,
    statusColor: "text-red-400",
    statusIcon: AlertCircle,
  },
  {
    company: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    completion: 100,
    statusColor: "text-green-400",
    statusIcon: CheckCircle,
  },
];

export const ProjectsTable = () => {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
      <div className="mb-6">
        <h3 className="text-white text-xl font-bold mb-2">Projects</h3>
        <p className="text-gray-400 text-sm">30 done this month</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left pb-4">COMPANIES</th>
              <th className="text-left pb-4">BUDGET</th>
              <th className="text-left pb-4">STATUS</th>
              <th className="text-left pb-4">COMPLETION</th>
            </tr>
          </thead>
          <tbody className="space-y-4">
            {projects.map((project, index) => (
              <tr key={index} className="border-t border-white/10">
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                    <span className="text-white font-medium">{project.company}</span>
                  </div>
                </td>
                <td className="py-4 text-white font-medium">{project.budget}</td>
                <td className="py-4">
                  <div className="flex items-center space-x-2">
                    <project.statusIcon className={`w-4 h-4 ${project.statusColor}`} />
                    <span className={project.statusColor}>{project.status}</span>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                    <span className="text-white text-sm font-medium">{project.completion}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
