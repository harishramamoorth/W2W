import Button from '../common/Button';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Turning <span className="text-yellow-300">Waste</span> into <span className="text-yellow-300">Wealth</span>
        </h1>
        <p className="text-lg md:text-xl mt-6 text-green-100 max-w-2xl mx-auto">
          Sustainable recycling solutions for Waste Paper, Leather, Carton, and Cotton 
          across Chennai, Vaniyambadi, Virthunagar, and Tirupur.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button variant="gold" as="a" href="/solutions">
            Explore Solutions →
          </Button>
          <Button variant="outline" as="a" href="/partners" className="border-white text-white hover:bg-white hover:text-green-800">
            Meet Partners
          </Button>
        </div>
      </div>
    </section>
  );
}