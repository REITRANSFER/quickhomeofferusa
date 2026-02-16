import citiesData from "@/data/cities.json";

export interface CityData {
  city: string;
  state: string;
  stateFull: string;
  slug: string;
  population: number;
  medianHomeValue: number;
  region: string;
  nearbyCities: string[];
}

export interface StateData {
  name: string;
  abbr: string;
  slug: string;
  cities: CityData[];
}

// State hub data — maps state slugs to their cities
const STATE_SLUGS: Record<string, { name: string; abbr: string }> = {
  florida: { name: "Florida", abbr: "FL" },
  virginia: { name: "Virginia", abbr: "VA" },
  maryland: { name: "Maryland", abbr: "MD" },
  "new-york": { name: "New York", abbr: "NY" },
  "north-carolina": { name: "North Carolina", abbr: "NC" },
  georgia: { name: "Georgia", abbr: "GA" },
};

export function getAllStates(): StateData[] {
  return Object.entries(STATE_SLUGS).map(([slug, info]) => ({
    ...info,
    slug,
    cities: (citiesData as CityData[]).filter(
      (c) => c.stateFull === info.name || c.state === info.abbr
    ),
  }));
}

export function getStateBySlug(slug: string): StateData | undefined {
  const info = STATE_SLUGS[slug];
  if (!info) return undefined;
  return {
    ...info,
    slug,
    cities: (citiesData as CityData[]).filter(
      (c) => c.stateFull === info.name || c.state === info.abbr
    ),
  };
}

export function isStateSlug(slug: string): boolean {
  return slug in STATE_SLUGS;
}

export function getAllCities(): CityData[] {
  return citiesData as CityData[];
}

export function getCityBySlug(slug: string): CityData | undefined {
  return (citiesData as CityData[]).find((c) => c.slug === slug);
}

export function getCitiesByRegion(region: string): CityData[] {
  return (citiesData as CityData[]).filter((c) => c.region === region);
}

export function getNearbyCities(city: CityData): CityData[] {
  return city.nearbyCities
    .map((slug) => getCityBySlug(slug))
    .filter((c): c is CityData => c !== undefined);
}

export function formatPopulation(pop: number): string {
  if (pop >= 1_000_000) return `${(pop / 1_000_000).toFixed(1)}M`;
  if (pop >= 1_000) return `${(pop / 1_000).toFixed(0)}K`;
  return pop.toString();
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

// Generate unique intro paragraph per city
export function getCityIntro(city: CityData): string {
  const intros: Record<string, string> = {
    "tampa-fl": `Tampa is one of the fastest-growing cities in Florida, with a population of ${formatPopulation(city.population)} and a median home value of ${formatCurrency(city.medianHomeValue)}. The Tampa Bay housing market moves fast, but not every homeowner has the time or resources to list traditionally. Whether you own a home in Seminole Heights, Ybor City, South Tampa, or New Tampa, ${company} can make you a fair cash offer and close in as little as 7 days.`,
    "st-petersburg-fl": `St. Petersburg has transformed from a sleepy retirement town into one of Florida's hottest real estate markets. With a median home value of ${formatCurrency(city.medianHomeValue)} and growing demand, homeowners who need to sell fast often find themselves caught between rising property values and the slow pace of traditional real estate. ${company} buys houses in all St. Pete neighborhoods — from the Historic Old Northeast to Kenwood to the South Side.`,
    "clearwater-fl": `Clearwater, known for its stunning beaches and growing economy, has a median home value of ${formatCurrency(city.medianHomeValue)}. Many homeowners in Clearwater find themselves needing to sell quickly due to job changes, family situations, or the high cost of maintaining older Gulf Coast properties. ${company} provides a fast, fair alternative to the traditional listing process.`,
    "brandon-fl": `Brandon is one of Tampa Bay's most popular suburbs with a population of ${formatPopulation(city.population)} and a median home value of ${formatCurrency(city.medianHomeValue)}. As a census-designated place in Hillsborough County, Brandon offers affordable housing compared to Tampa proper — but when life requires a fast sale, the traditional 60-90 day timeline doesn't always work. ${company} buys homes in Brandon as-is for cash.`,
    "lakeland-fl": `Lakeland sits between Tampa and Orlando, making it a strategic location for families and commuters. With a median home value of ${formatCurrency(city.medianHomeValue)} — one of the most affordable in the Tampa Bay area — Lakeland attracts both first-time buyers and investors. If you need to sell your Lakeland home fast, ${company} can close in as little as 7 days with a fair cash offer.`,
    "washington-dc": `Washington, DC has one of the most competitive real estate markets in the country with a median home value of ${formatCurrency(city.medianHomeValue)}. Government relocations, military PCS moves, and the high cost of living mean many DC homeowners need to sell fast. ${company} buys homes across all DC neighborhoods — from Capitol Hill to Anacostia, Petworth to Brookland — and can close in as little as 7 days.`,
    "arlington-va": `Arlington, Virginia is one of the most desirable communities in the DMV area with a median home value of ${formatCurrency(city.medianHomeValue)}. Its proximity to DC and the Pentagon means frequent relocations. When military families and government workers need to sell fast, the traditional 60-90 day timeline creates costly overlap. ${company} eliminates that risk with cash offers and 7-14 day closings.`,
    "alexandria-va": `Historic Alexandria, Virginia combines small-town charm with big-city proximity. With a median home value of ${formatCurrency(city.medianHomeValue)}, Alexandria homes are valuable — but the traditional selling process can be slow and expensive. Whether you own a historic townhouse in Old Town or a single-family home in West End, ${company} can buy it for cash in as little as 7 days.`,
    "bethesda-md": `Bethesda is one of the most affluent communities in Maryland with a median home value of ${formatCurrency(city.medianHomeValue)}. Even in high-value markets, homeowners face situations where they need to sell quickly — divorce, relocation, inherited properties, or homes needing significant updates. ${company} purchases homes at all price points and in any condition throughout the Bethesda area.`,
    "silver-spring-md": `Silver Spring is a diverse, vibrant community in Montgomery County with a median home value of ${formatCurrency(city.medianHomeValue)}. Its excellent transit connections to DC make it popular with commuters, but when homeowners need to sell fast, the traditional process can be frustrating. ${company} offers cash purchases with flexible closing timelines for Silver Spring homeowners.`,
    "fairfax-va": `Fairfax, Virginia sits at the heart of Northern Virginia's technology corridor. With a median home value of ${formatCurrency(city.medianHomeValue)}, Fairfax properties hold strong value — but the traditional selling process takes time many homeowners don't have. ${company} buys Fairfax homes for cash and can close in as little as 7 days, regardless of condition.`,
    "rockville-md": `Rockville is one of Montgomery County's largest cities with a median home value of ${formatCurrency(city.medianHomeValue)}. As a major employment hub near DC, Rockville sees frequent relocations and life changes that require fast home sales. ${company} provides Rockville homeowners with fair cash offers and closings in as little as 7 days.`,
    "queens-ny": `Queens is one of New York City's most diverse boroughs with over ${formatPopulation(city.population)} residents and a median home value of ${formatCurrency(city.medianHomeValue)}. From Astoria to Jamaica, Flushing to Far Rockaway, Queens homeowners face unique challenges — high property taxes, older housing stock, and a complex selling process. ${company} simplifies everything with a fast cash offer and 7-14 day closing.`,
    "nassau-county-ny": `Nassau County on Long Island has a population of ${formatPopulation(city.population)} and a median home value of ${formatCurrency(city.medianHomeValue)}. Many Nassau County homeowners have owned their homes for decades and face the prospect of expensive repairs, property tax increases, or life changes that require a quick sale. ${company} buys homes throughout Nassau County — from Hempstead to Great Neck, Garden City to Long Beach.`,
    "suffolk-county-ny": `Suffolk County is Long Island's largest county with ${formatPopulation(city.population)} residents and a median home value of ${formatCurrency(city.medianHomeValue)}. From Huntington to Babylon, Smithtown to Brookhaven, Suffolk County homeowners looking to sell fast often face long commutes to manage showings and the slow traditional process. ${company} makes it simple with a cash offer in 24 hours.`,
    "long-island-ny": `Long Island is home to nearly 3 million people with a median home value of ${formatCurrency(city.medianHomeValue)}. The high cost of living, property taxes that can exceed $15,000/year, and aging housing stock mean many Long Island homeowners need faster alternatives to the traditional listing process. ${company} buys Long Island homes for cash in any condition.`,
    "raleigh-nc": `Raleigh is one of the fastest-growing cities in the Southeast with a population of ${formatPopulation(city.population)} and a median home value of ${formatCurrency(city.medianHomeValue)}. The Research Triangle's booming economy brings constant relocations, and Raleigh homeowners who need to sell fast find that ${company} offers a simpler path — cash offer in 24 hours, close in 7-14 days.`,
    "durham-nc": `Durham has experienced a renaissance driven by the Research Triangle, Duke University, and a thriving food and arts scene. With a median home value of ${formatCurrency(city.medianHomeValue)}, Durham's market is competitive. ${company} helps Durham homeowners skip the traditional process entirely — no repairs, no showings, no waiting.`,
    "cary-nc": `Cary is consistently rated one of the best places to live in North Carolina with a median home value of ${formatCurrency(city.medianHomeValue)}. Even in desirable markets like Cary, homeowners sometimes need to sell fast due to job relocations, family changes, or inherited properties. ${company} provides Cary homeowners with fair cash offers and fast closings.`,
    "chapel-hill-nc": `Chapel Hill, home to UNC, is a charming college town with a median home value of ${formatCurrency(city.medianHomeValue)}. Whether you're a faculty member relocating, a family downsizing, or an heir who inherited a property, ${company} can buy your Chapel Hill home for cash in as little as 7 days.`,
    "atlanta-ga": `Atlanta is the economic capital of the Southeast with a population of ${formatPopulation(city.population)} and a median home value of ${formatCurrency(city.medianHomeValue)}. From Midtown to Buckhead, East Atlanta to West End, the metro area's rapid growth creates both opportunity and pressure. ${company} helps Atlanta homeowners who need to sell fast skip the traditional listing process entirely.`,
    "marietta-ga": `Marietta is one of metro Atlanta's most established suburbs with a median home value of ${formatCurrency(city.medianHomeValue)}. The Marietta Square area and surrounding neighborhoods feature homes ranging from historic to modern. When Marietta homeowners need to sell fast, ${company} offers a straightforward cash purchase in as little as 7 days.`,
    "decatur-ga": `Decatur is one of metro Atlanta's most walkable and desirable communities with a median home value of ${formatCurrency(city.medianHomeValue)}. Despite high demand, some homeowners need to sell quickly due to life changes. ${company} buys Decatur homes for cash — no repairs, no showings, no commissions.`,
    "sandy-springs-ga": `Sandy Springs is one of Georgia's largest cities with a population of ${formatPopulation(city.population)} and a median home value of ${formatCurrency(city.medianHomeValue)}. Located just north of Atlanta, Sandy Springs offers suburban living with urban amenities. ${company} provides Sandy Springs homeowners with fair cash offers and closings in as little as 7 days.`,
    "roswell-ga": `Roswell combines historic charm with modern suburban living, featuring a median home value of ${formatCurrency(city.medianHomeValue)}. Whether you own a home in historic Roswell, the East Roswell area, or one of the many neighborhoods in between, ${company} can purchase your home for cash and close on your timeline.`,
  };

  return intros[city.slug] || `${city.city}, ${city.stateFull} has a population of ${formatPopulation(city.population)} and a median home value of ${formatCurrency(city.medianHomeValue)}. ${company} buys homes for cash in ${city.city} and can close in as little as 7 days — no fees, no commissions, no repairs needed.`;
}

const company = "Quick Home Offer USA";

// Generate city-specific FAQs
export function getCityFAQs(city: CityData) {
  return [
    {
      question: `How fast can you buy my house in ${city.city}, ${city.state}?`,
      answer: `We can close on your ${city.city} property in as little as 7 days. Most sales in the ${city.region} area close in 10-14 days. We use our own cash — no bank financing delays.`,
    },
    {
      question: `What types of houses do you buy in ${city.city}?`,
      answer: `We buy all types of residential properties in ${city.city} — single-family homes, condos, townhomes, duplexes, and multi-family properties. Any condition, any situation. The median home value in ${city.city} is ${formatCurrency(city.medianHomeValue)}, and we purchase homes at all price points.`,
    },
    {
      question: `Do I need to make repairs before selling my ${city.city} house?`,
      answer: `No. We buy houses in ${city.city} as-is — meaning you don't need to spend a dollar on repairs, cleaning, or upgrades. Whether your home needs a new roof, has mold, or is completely outdated, we'll buy it.`,
    },
    {
      question: `Are there any fees when selling my house to you in ${city.city}?`,
      answer: `Zero fees. We pay all closing costs, and there are no agent commissions (saving you 5-6% compared to listing with a ${city.city} real estate agent). The cash offer we make is the amount you receive at closing.`,
    },
    {
      question: `How do you determine your cash offer for ${city.city} homes?`,
      answer: `We analyze comparable sales in your ${city.city} neighborhood, the current condition of the property, and local market trends. The median home value in ${city.city} is ${formatCurrency(city.medianHomeValue)}, but we evaluate each property individually to ensure a fair offer.`,
    },
  ];
}
