export interface Project {
  id: string
  num: string
  name: string
  type: string
  year: string
  swatchClass: string
}

export interface Service {
  id: string
  label: string
  color: string
  symbol: string
  posClass: string
}

export interface ClientGroup {
  category: string
  clients: string[]
}

export const projects: Project[] = [
  { id: 'opryland',    num: '01', name: 'Opryland Nashville', type: 'Brand Environment',      year: '2024', swatchClass: 'swatch-dark-metal' },
  { id: 'slim-husky',  num: '02', name: "Slim & Husky's",     type: 'Art Curation',            year: '2024', swatchClass: 'swatch-warm-gold'  },
  { id: 'zuzu',        num: '03', name: 'Experience ZUZU',    type: 'Build-To-Experience',     year: '2023', swatchClass: 'swatch-deep-teal'  },
  { id: 'silver-tom',  num: '04', name: 'Silver Tomato',      type: 'Custom Sculpture',        year: '2023', swatchClass: 'swatch-rust-brick' },
  { id: 'exhibition',  num: '05', name: 'Space / Exhibition', type: 'Exhibition Curation',     year: '2022', swatchClass: 'swatch-sage'       },
  { id: 'nash-tenn',   num: '06', name: 'Nashville / TENN',   type: 'Architectural Identity',  year: '2022', swatchClass: 'swatch-dark-metal' },
]

export interface BuildStep {
  num: string
  title: string
  body: string
}

export const buildSteps: BuildStep[] = [
  {
    num: '01',
    title: 'Concept & Strategy',
    body: 'Every project begins with vision and intent. We define creative direction, functional requirements, budget parameters, and project goals through concept development and feasibility analysis.',
  },
  {
    num: '02',
    title: 'Design Development',
    body: 'We translate concepts into executable plans — detailed designs, technical drawings, material studies, and fabrication strategies aligned with real-world constraints and schedules.',
  },
  {
    num: '03',
    title: 'Fabrication & Production',
    body: 'We manage fabrication, prototyping, finishes, and quality control — coordinating artists, fabricators, and vendors to ensure every element is produced to spec, on time and on budget.',
  },
  {
    num: '04',
    title: 'Installation & PM',
    body: 'Our team oversees logistics, site coordination, installation, and final detailing — managing timelines and stakeholders for seamless execution from first delivery to final walkthrough.',
  },
]

export const clientGroups: ClientGroup[] = [
  {
    category: 'Hospitality & Dining',
    clients: ["Slim & Husky's Pizza", 'Experience ZUZU', 'Opryland Nashville', 'Hotels & Resorts'],
  },
  {
    category: 'Real Estate & Development',
    clients: ['Commercial Developers', 'Mixed-Use Properties', 'Corporate Campuses', 'Retail Brands'],
  },
  {
    category: 'Galleries & Culture',
    clients: ['Art Galleries', 'Museums', 'Cultural Institutions', 'Public Art Commissions'],
  },
]

export const marqueeItems = [
  'Art Curation',
  'Build-To-Experience',
  'Custom Artwork & Sculpture',
  'Project Management',
  'Long-Term Art Strategy',
  'Commercial Interiors',
  'Concept & Strategy',
  'Installation',
]
