// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Edit values here — components read from this file only.
// ---------------------------------------------------------------------------
import mePhoto from '../assets/profile/me.jpeg'

import voetbalSplash from '../assets/projects/voetbal-1-splash.png'
import voetbalDashboard from '../assets/projects/voetbal-2-dashboard.png'
import voetbalLive from '../assets/projects/voetbal-3-live-match.png'

import lokatsSplash from '../assets/projects/lokats-1-splash.png'
import lokatsOnboarding from '../assets/projects/lokats-2-onboarding.png'
import lokatsHome from '../assets/projects/lokats-3-home.png'

import slmSplash from '../assets/projects/slm-1-splash.png'
import slmOnboarding from '../assets/projects/slm-2-onboarding.png'
import slmMatchCard from '../assets/projects/slm-3-match-card.png'

import fasorideOnboarding from '../assets/projects/fasoride-1-onboarding.png'
import fasorideHome from '../assets/projects/fasoride-2-home.png'
import fasorideSelectRider from '../assets/projects/fasoride-3-select-rider.png'

export const profile = {
  name: 'Muhammad Farooq',
  role: 'Flutter & Android App Developer',
  email: 'uf11024@gmail.com',
  phone: '+92 304 1229249',
  location: 'Pakistan',
  company: 'Jeux Developers',
  companyLocation: 'Sahiwal',
  since: '15 August',
  education: {
    degree: 'BS Information Technology',
    school: 'BZU Multan',
  },
  photo: mePhoto,
  metaChips: ['Flutter', 'Android', 'Firebase'],
}

// ---------------------------------------------------------------------------
// Skills — grouped exactly per the verified technology list.
// ---------------------------------------------------------------------------
export const skillGroups = [
  {
    label: 'Mobile development',
    description: 'Building native-feel cross-platform app experiences.',
    items: ['Flutter', 'Dart', 'Kotlin', 'Java', 'Android app development'],
  },
  {
    label: 'Backend & services',
    description: 'Connecting apps to real data and cloud services.',
    items: ['Firebase', 'REST APIs'],
  },
  {
    label: 'Tools & workflow',
    description: 'Version control and day-to-day engineering workflow.',
    items: ['Git'],
  },
]

// ---------------------------------------------------------------------------
// Featured projects — the four with supplied screenshots.
// NOTE on "lokats": the three source screenshots for this entry carry an
// in-app splash/brand string that reads "Travellingo" rather than "Lokats".
// The project name from the verified list ("Lokats App") is kept as the
// case-study title, since it's the only unused location/trip-planning-shaped
// name left on the list, but the screenshots themselves are attributed
// conservatively — see the description wording. Please confirm this pairing
// is correct and swap the images or the name if it isn't.
// ---------------------------------------------------------------------------
export const featuredProjects = [
  {
    id: 'voetbal',
    case: '01',
    name: 'Voetbal Coach Assistant',
    category: 'Flutter mobile project — sports team management',
    description:
      'A digital toolset for soccer coaches to manage a team through a season: roster and calendar on the home screen, and a live match tracker for logging goals, cards, and substitutions as they happen.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    images: [
      { src: voetbalSplash, alt: 'Voetbal Coach Assistant splash screen with team logo' },
      { src: voetbalDashboard, alt: 'Voetbal Coach Assistant home dashboard showing team record and next match' },
      { src: voetbalLive, alt: 'Voetbal Coach Assistant live match tracking screen with goal and card events' },
    ],
  },
  {
    id: 'lokats',
    case: '02',
    name: 'Lokats App',
    category: 'Flutter mobile project — trip planning & itinerary',
    description:
      'A mobile trip-planning experience: search a destination, choose a planning mode, and browse saved itineraries with dates and pricing laid out card by card.',
    tech: ['Flutter', 'Dart', 'REST APIs'],
    images: [
      { src: lokatsSplash, alt: 'Lokats App splash screen' },
      { src: lokatsOnboarding, alt: 'Lokats App onboarding screen inviting the user to explore a destination' },
      { src: lokatsHome, alt: 'Lokats App home screen with trip planning modes and saved itineraries' },
    ],
  },
  {
    id: 'slm',
    case: '03',
    name: 'SLM — Stay Legacy Minded',
    category: 'Flutter mobile project — relationship-focused matching',
    description:
      'A matchmaking app interface built around intentional connection rather than casual browsing: a branded splash and onboarding flow, followed by a swipe-style profile card for reviewing potential matches.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    images: [
      { src: slmOnboarding, alt: 'SLM onboarding screen with the line find your person not just another profile' },
      { src: slmSplash, alt: 'SLM Stay Legacy Minded splash screen with crest logo' },
      { src: slmMatchCard, alt: 'SLM swipe-style match card showing a nearby profile' },
    ],
  },
  {
    id: 'fasoride',
    case: '04',
    name: 'Faso Ride',
    category: 'Flutter mobile project — ride-hailing & delivery',
    description:
      'A ride and delivery super-app screen set: an onboarding screen for booking rides and ordering from nearby stores, a home screen switching between ride, food, courier and shop modes with a live location map, and a rider-selection screen with fare and ETA per option.',
    tech: ['Flutter', 'Dart', 'REST APIs', 'Firebase'],
    images: [
      { src: fasorideOnboarding, alt: 'Faso Ride onboarding screen for booking a ride or ordering from nearby stores' },
      { src: fasorideHome, alt: 'Faso Ride home screen with ride, food, courier and shop options and a live location map' },
      { src: fasorideSelectRider, alt: 'Faso Ride select-rider screen showing two ride options with fare and ETA' },
    ],
  },
]

// ---------------------------------------------------------------------------
// Secondary archive — remaining named projects, no supplied screenshots.
// Kept visible and readable, described conservatively.
// ---------------------------------------------------------------------------
export const archiveProjects = [
  {
    id: 'guardian-go',
    name: 'Guardian Go',
    category: 'Flutter mobile project — safety & monitoring',
  },
  {
    id: 'kusine',
    name: 'Kusine',
    category: 'Flutter mobile project — food & recipe experience',
  },
  {
    id: 'less-stress',
    name: 'Less Stress',
    category: 'Flutter mobile project — wellbeing utility',
  },
  {
    id: 'potluck',
    name: 'Potluck',
    category: 'Flutter mobile project — food & restaurant discovery',
  },
  {
    id: 'florus-user',
    name: 'Florus User',
    category: 'Flutter mobile project — customer-facing app',
  },
  {
    id: 'florus-vendor',
    name: 'Florus Vendor',
    category: 'Flutter mobile project — vendor-facing app',
  },
  {
    id: 'florus-driver',
    name: 'Florus Driver',
    category: 'Flutter mobile project — driver-facing app',
  },
]

// ---------------------------------------------------------------------------
// Experience & education — single verified role, no fabricated history.
// ---------------------------------------------------------------------------
export const experience = [
  {
    id: 'jeux',
    range: '15 Aug — Present',
    title: 'Flutter & Android Developer',
    org: 'Jeux Developers, Sahiwal',
    detail: 'Current role. Focus: Flutter development and Android app development.',
  },
]

export const education = [
  {
    id: 'bzu',
    range: 'BS Information Technology',
    title: 'BZU Multan',
    org: 'Education',
    detail: 'Bachelor of Science in Information Technology.',
  },
]

// ---------------------------------------------------------------------------
// Capabilities — supported strengths only.
// ---------------------------------------------------------------------------
export const capabilities = [
  {
    id: 'flutter',
    title: 'Flutter app development',
    detail: 'Cross-platform apps from a single Dart codebase, built for iOS and Android.',
  },
  {
    id: 'android',
    title: 'Android app development',
    detail: 'Native Android implementation and platform-specific behaviour.',
  },
  {
    id: 'rest',
    title: 'REST API integration',
    detail: 'Connecting mobile UI to backend services and third-party APIs.',
  },
  {
    id: 'firebase',
    title: 'Firebase integration',
    detail: 'Auth, data, and cloud services wired into the app layer.',
  },
  {
    id: 'ui',
    title: 'Cross-platform mobile UI implementation',
    detail: 'Translating designs into responsive, consistent mobile interfaces.',
  },
  {
    id: 'maintenance',
    title: 'Mobile app maintenance & feature development',
    detail: 'Ongoing feature additions, fixes, and version-to-version upkeep.',
  },
]

// ---------------------------------------------------------------------------
// Proof points for About section — scope, not unverified metrics.
// ---------------------------------------------------------------------------
export const proofPoints = [
  { value: String(featuredProjects.length + archiveProjects.length).padStart(2, '0'), label: 'Projects in this portfolio' },
  { value: '03', label: 'Florus app roles — user, vendor & driver' },
  { value: String(skillGroups.reduce((n, g) => n + g.items.length, 0)).padStart(2, '0'), label: 'Core technologies listed' },
  { value: '01', label: 'Current role, Jeux Developers' },
]

export const sections = [
  { id: 'hero', index: '00', label: 'Intro', nav: false },
  { id: 'about', index: '01', label: 'About', nav: true },
  { id: 'stack', index: '02', label: 'Stack', nav: true },
  { id: 'projects', index: '03', label: 'Projects', nav: true },
  { id: 'experience', index: '04', label: 'Experience', nav: true },
  { id: 'services', index: '05', label: 'Services', nav: false },
  { id: 'contact', index: '06', label: 'Contact', nav: true },
]
