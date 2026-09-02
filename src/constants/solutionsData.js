import vermiGoldImg from '../assets/vermi.png';
import wastePaperImg from '../assets/waste_paper.jpg';
import leatherWasteImg from '../assets/leather_waste.jpg';
import cartonBoxImg from '../assets/carton_box.jpg';
import recycleCottonImg from '../assets/recycle_cotton.jpg';
import compostImg from '../assets/image.png';

export const solutionsData = [
  {
    id: 'vermi-gold',
    name: 'Vermi Gold',
    solutionName: 'Vermi Gold',
    image: vermiGoldImg,
    badgeColor: '#047857',
    badgeBg: '#ecfdf5',
    problem: 'Organic and agricultural waste dumped openly causes pollution, greenhouse gas emissions, and soil degradation.',
    process: 'Organic bio-waste is systematically collected, inoculated, and digested by specialized earthworms (Eisenia fetida) to produce premium vermicompost.',
    location: 'Delta Area, Tamil Nadu',
    output: 'Vermi Gold — 100% Organic Microbial Bio-Fertilizer',
    description: 'Organic bio-waste converted into premium nutrient-rich vermicompost fertilizer.',
    details: 'Vermi Gold converts agricultural and organic bio-waste into top-tier vermicompost. Ideal for organic farming, horticulture, and commercial agriculture, it restores soil fertility without synthetic chemicals.',
    workflow: [
      { step: '01', title: 'Bio-Waste Collection', desc: 'Sourcing agricultural residue & farm organic waste from regional hubs.' },
      { step: '02', title: 'Earthworm Digestion', desc: 'Controlled vermicomposting breakdown using microbial earthworm beds.' },
      { step: '03', title: 'Refining & Packaging', desc: 'Screening, nutrient stabilization, and eco-bagging for agricultural distribution.' }
    ],
    useCases: [
      'Commercial Organic Agriculture & Crop Farming',
      'Horticulture & Greenhouse Soil Preparation',
      'Terrace Gardening & Landscaping Soil Enrichment',
      'Soil Regeneration for Depleted Farmlands'
    ],
    envImpact: [
      '🌿 100% Chemical-Free & Non-Toxic Soil Restoration',
      '📉 80% Reduction in Methane Emissions from Organic Waste',
      '💧 Enhances Soil Water Retention by up to 40%'
    ]
  },
  {
    id: 'organic-compost',
    name: 'Organic Compost',
    solutionName: 'Organic Compost',
    image: compostImg,
    badgeColor: '#15803d',
    badgeBg: '#f0fdf4',
    problem: 'Agricultural residues and green waste are often burnt or discarded, losing valuable soil nutrients and polluting the air.',
    process: 'Green waste and crop residues are methodically decomposed using advanced aerobic composting techniques to create nutrient-dense organic fertilizer.',
    location: 'Tamil Nadu Agri-Hubs',
    output: 'Premium Eco-Friendly Organic Compost',
    description: 'High-quality organic compost produced from agricultural and green waste.',
    details: 'Our Organic Compost transforms agricultural waste into a premium soil amendment that enriches soil structure, promotes beneficial microbes, and enhances crop yield sustainably.',
    workflow: [
      { step: '01', title: 'Green Waste Sourcing', desc: 'Collecting agricultural residues, leaves, and organic matter from local farms.' },
      { step: '02', title: 'Aerobic Decomposition', desc: 'Controlled turning and moisture management to optimize the composting process.' },
      { step: '03', title: 'Curing & Screening', desc: 'Maturing the compost and screening it for a fine, uniform texture.' }
    ],
    useCases: [
      'Sustainable Farming & Agriculture',
      'Urban Gardening & Landscaping',
      'Soil Remediation & Restoration',
      'Nursery & Greenhouse Plant Cultivation'
    ],
    envImpact: [
      '🌱 Restores Essential Nutrients to Depleted Soils',
      '🚫 Prevents Open Burning of Agricultural Waste',
      '💧 Improves Soil Water Retention Capacity'
    ]
  },
  {
    id: 'delta-export-paper',
    name: 'Delta Export — Recycle Paper',
    solutionName: 'Delta Export',
    image: wastePaperImg,
    badgeColor: '#1d4ed8',
    badgeBg: '#eff6ff',
    problem: 'Paper & cardboard waste piles up across commercial hubs in Chennai, leading to massive landfill dumping.',
    process: 'Post-consumer and industrial paper waste is collected from Chennai commercial corridors, automatedly sorted, grade-classified, and hydraulically baled for export.',
    location: 'Chennai Hub',
    output: 'Export-Grade High-Density Recycled Paper Pulp & Bales',
    description: 'Export-ready high-grade recycled paper pulp and industrial paper bales.',
    details: 'Collected from commercial & industrial hubs in Chennai, waste paper is processed into high-density pulp and exported to packaging manufacturers globally.',
    workflow: [
      { step: '01', title: 'Urban & Industrial Collection', desc: 'Bulk paper waste gathering from IT parks, printing mills, and corporate offices.' },
      { step: '02', title: 'Grade Sorting & Baling', desc: 'Segregating corrugated, kraft, and white paper, compressed into high-density bales.' },
      { step: '03', title: 'Global Export Supply', desc: 'Shipping export-ready recycled pulp stock to global paper manufacturing mills.' }
    ],
    useCases: [
      'International Paper Mill Supply Chains',
      'Kraft Paper & Containerboard Production',
      'Eco-Friendly Corrugated Packaging Manufacturing',
      'Substitutes Virgin Tree Pulp in Paper Production'
    ],
    envImpact: [
      '🌲 Saves ~17 Mature Trees per Ton of Paper Recycled',
      '⚡ 40% Lower Energy Consumption compared to virgin paper manufacturing',
      '💧 Saves 26,000 Liters of Fresh Water per Ton processed'
    ]
  },
  {
    id: 'leather-waste',
    name: 'Recycle Leather',
    solutionName: 'Recycle Leather',
    image: leatherWasteImg,
    badgeColor: '#ca8a04',
    badgeBg: '#fefce8',
    problem: 'Tannery leather cut-offs and trimmings in Vaniyambadi go unused, posing severe industrial disposal challenges.',
    process: 'Tannery scraps are collected, chrome-cleansed, shredded into micro-fibers, and re-bonded with natural binders to craft secondary eco-leather products.',
    location: 'Vaniyambadi Tanneries Belt',
    output: 'Reclaimed Leather Sheets, Fiber Cords & Upcycled Leather Goods',
    description: 'Sustainable processing of post-industrial tannery scraps from Vaniyambadi.',
    details: 'Processes leather scraps into recycled leather sheets, fiber cords, and secondary materials for fashion, automotive, and industrial supply chains.',
    workflow: [
      { step: '01', title: 'Tannery Scrap Recovery', desc: 'Direct collection of raw leather trimmings from Vaniyambadi tannery clusters.' },
      { step: '02', title: 'Fiber Shredding & Binding', desc: 'Micro-milling leather cut-offs and re-bonding into uniform secondary sheets.' },
      { step: '03', title: 'Secondary Crafting', desc: 'Manufacturing recycled leather boards, fashion trims, and industrial gaskets.' }
    ],
    useCases: [
      'Footwear Insoles & Structural Shoe Components',
      'Automotive Interior Padding & Eco Upholstery',
      'Belts, Bookbindings & Fashion Accessories',
      'Industrial Insulation & Gasket Materials'
    ],
    envImpact: [
      '🏭 Diverts Tons of Hazardous Tannery Waste from Dumping Grounds',
      '♻️ Promotes Zero-Waste Circular Economy for Tannery Clusters',
      '🛡️ Reduces Chemical Effluents from Raw Leather Tanning'
    ]
  },
  {
    id: 'carton-box',
    name: 'Recycle Carton Box',
    solutionName: 'Recycle Carton Box',
    image: cartonBoxImg,
    badgeColor: '#c2410c',
    badgeBg: '#fff7ed',
    problem: 'Discarded packaging boxes and corrugated waste from logistics hubs end up overflowing landfills in Virudhunagar.',
    process: 'Used corrugated cartons are collected, hydrapulped, de-inked, and re-molded into heavy-duty 100% recycled packaging boxes.',
    location: 'Virudhunagar Logistics Center',
    output: 'Heavy-Duty 100% Recycled Corrugated Shipping Boxes',
    description: 'Corrugated carton box recycling & heavy-duty packaging repurposing.',
    details: 'Transforms post-consumer & industrial corrugated boxes into heavy-duty recycled packaging materials, reducing deforestation and packaging costs.',
    workflow: [
      { step: '01', title: 'Logistics Scrap Gathering', desc: 'Collecting damaged cartons & box trimmings from Virudhunagar warehouses.' },
      { step: '02', title: 'Hydrapulping & Fluting', desc: 'Repulping paper fibers and crafting fluted inner layers for strength.' },
      { step: '03', title: 'Corrugated Box Assembly', desc: 'Die-cutting and gluing new sturdy boxes tailored for industrial shipping.' }
    ],
    useCases: [
      'E-Commerce & Retail Shipping Packaging',
      'Agricultural Produce Export Crates & Boxes',
      'Industrial Heavy Equipment Transit Packaging',
      'Custom Outer Cartons for Consumer Goods'
    ],
    envImpact: [
      '📦 100% Biodegradable & Fully Recyclable Packaging',
      '📉 Reduces Deforestation Pressure on Virgin Timber',
      '♻️ Circular Loop: Cartons Recycled Up to 7 Times'
    ]
  },
  {
    id: 'recycle-cotton',
    name: 'Recycle Cotton',
    solutionName: 'Recycle Cotton',
    image: recycleCottonImg,
    badgeColor: '#be185d',
    badgeBg: '#fdf2f8',
    problem: 'Excess fabric clips, yarn ends, and garment cut-offs from Tirupur textile factories are incinerated or dumped.',
    process: 'Post-industrial cotton scraps are sorted by shade (eliminating re-dyeing), garnet-shredded into virgin-quality fibers, and spun into open-end recycled yarn.',
    location: 'Tirupur Textile Hub',
    output: 'Color-Sorted Recycled Cotton Yarn & Non-Woven Textile Fiber',
    description: 'Textile cotton cutting scrap and yarn recycling from Tirupur hubs.',
    details: 'Recycles post-industrial cotton cutting waste into high-quality open-end yarn, non-woven fabrics, and raw cotton fibers for circular fashion.',
    workflow: [
      { step: '01', title: 'Garment Cut-Off Collection', desc: 'Sourcing clean knit & woven cotton clips directly from Tirupur apparel factories.' },
      { step: '02', title: 'Shredding & De-threading', desc: 'Mechanical garnet processing into soft, fluffy cotton fiber without water waste.' },
      { step: '03', title: 'Open-End Yarn Spinning', desc: 'Blending and spinning recycled fibers into high-tenacity textile yarn.' }
    ],
    useCases: [
      'Eco-Apparel & Sustainable Fashion Garments',
      'Home Textiles (Towels, Bedding, Upholstery)',
      'Non-Woven Industrial Wipes & Insulation Mats',
      'Sustainable Tote Bags & Canvas Fabrics'
    ],
    envImpact: [
      '💧 Zero Water Dyeing: Color sorting saves thousands of liters of dye water',
      '🌱 Reduces Synthetic Pesticide Demand from New Cotton Cultivation',
      '📉 Eliminates Textile Waste Incineration Smoke & Ash'
    ]
  }
];

export const solutionsList = solutionsData;
