/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Region = 'All' | 'Europe' | 'Asia' | 'Americas' | 'Oceania' | 'Africa';

export type Cluster = 'west' | 'east' | 'both';

export interface LocationHighlight {
  name: string;
  cluster: 'west' | 'east';
  elevation?: string;
  tag: string;
}

export interface HikeFact {
  name: string;
  base: string;
  time: string;
  difficulty: 'Easy' | 'Easy to moderate' | 'Moderate';
  cluster: 'west' | 'east';
  distance?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  cluster: 'west' | 'east' | 'both';
  location: string;
  description: string;
  highlights: string[];
}

export interface ItineraryPlan {
  id: '3-day' | '5-day' | '7-day';
  title: string;
  subtitle: string;
  base: string;
  suitableFor: string;
  days: ItineraryDay[];
}
