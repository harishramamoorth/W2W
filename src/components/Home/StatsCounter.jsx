import { useEffect, useState } from 'react';

const StatItem = ({ label, value, suffix = '+' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-green-700">
        {count}{suffix}
      </div>
      <p className="text-gray-600 mt-1 font-medium">{label}</p>
    </div>
  );
};

export default function StatsCounter() {
  const stats = [
    { label: 'Tons Recycled Yearly', value: 500 },
    { label: 'Industry Partners', value: 12 },
    { label: 'Cities Covered', value: 4 },
    { label: 'Years of Excellence', value: 8 },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(stat => (
            <StatItem key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
}