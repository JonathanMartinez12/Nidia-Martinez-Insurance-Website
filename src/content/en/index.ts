import type { SiteContent } from '../types';
import services from './services';
import cities from './cities';
import { about, aep, agents, contact, faq, home, scam, serviceArea } from './pages';
import { accessibility, privacy, terms } from './legal';
import { guides, guidesHub } from './guides';

const en: SiteContent = {
  services,
  cities,
  aep,
  scam,
  guides,
  guidesHub,
  about,
  agents,
  serviceArea,
  faq,
  home,
  contact,
  privacy,
  terms,
  accessibility,
};

export default en;
