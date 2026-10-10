// Preview paths respect the existing Vite base (including GitHub Pages subpaths).
const rawBase = import.meta.env?.BASE_URL || './';
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
const image = name => `${base}showcase/${name}.jpg`;

// The owner confirmed these are self-initiated concepts, not measured client outcomes.
export const projects = [
  {
    id: 'lumina-ai', title: 'Lumina Engine — Autonomous Agent Orchestrator', displayTitle: 'Lumina Engine',
    context: 'SaaS interface study', category: 'saas', tag: 'AI SaaS Platform',
    summary: 'A visual direction for an AI workspace, with connected agent workflows and a focused, technical interface.',
    fullDescription: 'This concept explores how an autonomous-agent workspace could make complex workflows easier to understand. A dark canvas, connected nodes, and a clear command hierarchy give the interface its visual direction. The proposed build would prioritize legible status feedback and responsive workflow interactions.',
    highlights: [{ label: 'Category', value: 'SaaS' }, { label: 'Focus', value: 'Agents' }, { label: 'Direction', value: 'Technical' }],
    proposedStack: ['Vite', 'JavaScript Modules', 'Canvas', 'CSS Tokens'],
    designGoals: ['Connected workflow visualization', 'Clear agent and task status', 'Keyboard-accessible commands', 'Responsive workspace layout'],
    image: image('lumina'), accentColor: '#06B6D4'
  },
  {
    id: 'velour-atelier', title: 'Velour Fine Jewelry — Luxury D2C Digital Boutique', displayTitle: 'Velour Fine Jewelry',
    context: 'Jewelry storefront study', category: 'ecom', tag: 'Luxury Commerce',
    summary: 'An editorial jewelry storefront that gives product imagery, collection storytelling, and buying decisions room to breathe.',
    fullDescription: 'Velour is a concept for a jewelry boutique with the rhythm of a fashion editorial. Refined typography and generous product imagery lead the experience. A production build could connect collection browsing, product detail views, a concierge channel, and an appropriate checkout integration.',
    highlights: [{ label: 'Category', value: 'D2C' }, { label: 'Focus', value: 'Products' }, { label: 'Direction', value: 'Editorial' }],
    proposedStack: ['JavaScript Modules', 'CSS Grid', 'Responsive Images', 'Razorpay Integration'],
    designGoals: ['Image-led collection browsing', 'Detailed product views', 'Direct concierge contact', 'Accessible checkout journey'],
    image: image('velour'), accentColor: '#C5A059'
  },
  {
    id: 'apex-vault', title: 'Apex Terminal — FinTech Settlement & Capital Engine', displayTitle: 'Apex Terminal',
    context: 'Financial dashboard study', category: 'saas', tag: 'FinTech Terminal',
    summary: 'A dense financial dashboard concept, balancing data visibility with a clear hierarchy of balances, charts, and actions.',
    fullDescription: 'Apex explores a financial workspace where dense information remains readable. The concept brings account balances, market views, and activity into a consistent visual system. Any live financial implementation would define its data sources, permissions, and integration requirements as part of the project scope.',
    highlights: [{ label: 'Category', value: 'FinTech' }, { label: 'Focus', value: 'Data' }, { label: 'Direction', value: 'Precise' }],
    proposedStack: ['JavaScript Modules', 'Charting Library', 'CSS Grid', 'Data API Integration'],
    designGoals: ['Readable financial data tables', 'Clear balance and activity hierarchy', 'Responsive chart presentation', 'Defined account permissions'],
    image: image('apex'), accentColor: '#10B981'
  },
  {
    id: 'strata-collective', title: 'Strata Architects — Spatial Design Monograph', displayTitle: 'Strata Architects',
    context: 'Architecture portfolio study', category: 'web', tag: 'Architectural Monograph',
    summary: 'An architectural portfolio direction built around large images, quiet typography, and a considered sense of space.',
    fullDescription: 'Strata translates architectural materials and negative space into a portfolio concept. Photography and project composition take priority over interface decoration. The proposed experience would pair image galleries with concise project descriptions and a clear inquiry route.',
    highlights: [{ label: 'Category', value: 'Spaces' }, { label: 'Focus', value: 'Gallery' }, { label: 'Direction', value: 'Minimal' }],
    proposedStack: ['Responsive Images', 'CSS Variables', 'JavaScript Modules', 'IntersectionObserver'],
    designGoals: ['Image-led project galleries', 'Concise project narratives', 'Fluid typography and spacing', 'A clear project inquiry flow'],
    image: image('strata'), accentColor: '#D97706'
  },
  {
    id: 'kroma-labs', title: 'Kroma Labs — Generative AI Video Launchpad', displayTitle: 'Kroma Labs',
    context: 'AI product launch study', category: 'landing', tag: 'Product Launch',
    summary: 'A bold AI video product concept with a focused proposition, prompt-led preview, and an early-access signup direction.',
    fullDescription: 'Kroma explores the first impression of an AI video product. A focused message and a prompt-driven product preview introduce the experience before an early-access call to action. A live build could connect the preview and signup flow to the product and email systems selected for the launch.',
    highlights: [{ label: 'Category', value: 'AI Video' }, { label: 'Focus', value: 'Waitlist' }, { label: 'Direction', value: 'Bold' }],
    proposedStack: ['Vite', 'JavaScript', 'Responsive CSS', 'Signup API Integration'],
    designGoals: ['A clear product proposition', 'Prompt-led demonstration flow', 'Early-access signup', 'Shareable product metadata'],
    image: image('kroma'), accentColor: '#8B5CF6'
  },
  {
    id: 'carepulse-health', title: 'CarePulse — Diagnostic Booking & Patient Portal', displayTitle: 'CarePulse',
    context: 'Appointment booking study', category: 'web', tag: 'Healthcare Interface',
    summary: 'A welcoming healthcare interface direction for finding a clinician and understanding the steps of appointment booking.',
    fullDescription: 'CarePulse is a concept for a calm appointment-booking experience. Clear navigation, clinician discovery, and an understandable booking sequence are the design priorities. A live implementation would define scheduling, patient-data handling, and confirmation integrations before development.',
    highlights: [{ label: 'Category', value: 'Health' }, { label: 'Focus', value: 'Booking' }, { label: 'Direction', value: 'Clear' }],
    proposedStack: ['JavaScript Modules', 'Accessible Dialogs', 'CSS Grid', 'Scheduling API'],
    designGoals: ['Clear clinician discovery', 'Understandable date and time selection', 'Accessible booking forms', 'Defined appointment confirmations'],
    image: image('carepulse'), accentColor: '#059669'
  }
];
