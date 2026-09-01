export default function PartnerCard({ partner }) {
  if (!partner) return null;
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center border border-green-100">
      <div className="text-5xl mb-3">{partner.logo}</div>
      <h3 className="text-lg font-bold text-green-800">{partner.name}</h3>
      <p className="text-sm text-gray-600 mt-2">{partner.description}</p>
    </div>
  );
}
