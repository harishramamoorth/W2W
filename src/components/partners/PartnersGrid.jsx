import PartnerCard from './PartnerCard';

export default function PartnersGrid({ partners = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {partners.map(partner => (
        <PartnerCard key={partner.id} partner={partner} />
      ))}
    </div>
  );
}
