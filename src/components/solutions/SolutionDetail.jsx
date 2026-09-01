export default function SolutionDetail({ solution }) {
  if (!solution) return null;
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
      <div className="text-4xl mb-2">{solution.icon}</div>
      <h3 className="text-xl font-bold text-green-800">{solution.title}</h3>
      <p className="text-gray-600 mt-2">{solution.detail}</p>
    </div>
  );
}
