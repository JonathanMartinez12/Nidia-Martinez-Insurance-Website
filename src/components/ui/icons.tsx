import {
  Activity,
  BadgeCheck,
  CalendarCheck,
  Glasses,
  HeartHandshake,
  HeartPulse,
  Hospital,
  Pill,
  ShieldPlus,
  Stethoscope,
  Umbrella,
  type LucideIcon,
} from 'lucide-react';
import type { ProductKey } from '@/config/products';

export const productIcons: Record<ProductKey, LucideIcon> = {
  'medicare-advantage': ShieldPlus,
  'medicare-supplement': BadgeCheck,
  'part-d-prescription-drug-plans': Pill,
  'special-needs-plans': HeartPulse,
  'dental-vision-insurance': Glasses,
  'final-expense-insurance': HeartHandshake,
  'life-insurance': Umbrella,
  'hospital-indemnity-insurance': Hospital,
  'health-insurance': Stethoscope,
};

export { Activity, CalendarCheck };
