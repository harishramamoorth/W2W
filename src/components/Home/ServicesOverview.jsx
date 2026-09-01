import { services } from '../../constants';

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 sm:text-4xl">Our Recycling Services</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming industrial waste into high-value raw materials across Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-green-50/60 rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
              <div className="mt-6">
                <a
                  href="/solutions"
                  className="text-green-700 font-semibold text-sm hover:text-green-900 inline-flex items-center gap-1"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
