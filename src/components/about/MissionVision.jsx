export default function MissionVision() {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8">
      <div className="bg-green-50 p-6 rounded-xl border border-green-200">
        <h3 className="text-xl font-bold text-green-800 mb-2">Our Mission</h3>
        <p className="text-gray-600">To revolutionize industrial waste recycling by turning waste into valuable secondary raw materials.</p>
      </div>
      <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-800 mb-2">Our Vision</h3>
        <p className="text-gray-600">To create a zero-waste industrial ecosystem for future generations in Tamil Nadu.</p>
      </div>
    </div>
  );
}
