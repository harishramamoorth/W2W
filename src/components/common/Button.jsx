export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-green-700 text-white hover:bg-green-800',
    gold: 'bg-yellow-500 text-green-900 hover:bg-yellow-400',
    outline: 'border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white'
  };
  
  return (
    <button className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}