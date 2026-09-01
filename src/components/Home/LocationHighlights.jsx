import { locations } from '../../constants';

export default function LocationHighlights() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">Our Operational Hubs</h2>
          <p className="text-gray-600 mt-2">Strong presence across Tamil Nadu</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {locations.map(loc => (
            <div key={loc.name} className="bg-green-50 p-6 rounded-xl text-center border border-green-200 hover:shadow-lg hover:border-green-400 transition-all duration-300">
              <div className="text-4xl mb-3">{loc.icon}</div>
              <h3 className="font-bold text-green-900 text-lg">{loc.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{loc.region}</p>
              <p className="text-xs text-gray-600 mt-2">{loc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}