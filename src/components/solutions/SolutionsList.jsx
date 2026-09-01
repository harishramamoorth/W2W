import SolutionDetail from './SolutionDetail';

export default function SolutionsList({ solutions = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {solutions.map(solution => (
        <SolutionDetail key={solution.id} solution={solution} />
      ))}
    </div>
  );
}
