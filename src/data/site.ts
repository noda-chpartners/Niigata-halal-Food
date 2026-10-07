export const siteOrigin = 'https://niigata-halal-food.pages.dev';

export const siteName = 'Niigata Halal Food And Restaurant';

export const siteTitle = '新潟市中央区のハラルレストラン | Niigata Halal Food';

export const siteDescription =
  '新潟市中央区米山2階のハラルレストラン。チキンカレー、マトンカレー、タンドーリ、ナンをランチ・ディナーで提供。定休日は火曜日。ご予約は070-2797-1885。';

const weekday = ['Monday', 'Wednesday', 'Thursday', 'Friday'];
const weekend = ['Saturday', 'Sunday'];

function openingHours(days: string[], opens: string, closes: string) {
  return {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: days.map((day) => `https://schema.org/${day}`),
    opens,
    closes,
  };
}

export const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: siteName,
  description: siteDescription,
  url: `${siteOrigin}/`,
  image: `${siteOrigin}/og.jpg`,
  telephone: '+817027971885',
  servesCuisine: ['Halal', 'Bangladeshi', 'Indian'],
  acceptsReservations: true,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '米山4-21-18 2F',
    addressLocality: '新潟市中央区',
    addressRegion: '新潟県',
    postalCode: '950-0916',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.9071378,
    longitude: 139.0575511,
  },
  hasMap: 'https://www.google.com/maps?q=37.9071378,139.0575511',
  openingHoursSpecification: [
    openingHours(weekday, '11:00', '15:00'),
    openingHours(weekday, '17:00', '22:00'),
    openingHours(weekend, '11:00', '15:00'),
    openingHours(weekend, '17:00', '22:30'),
  ],
  sameAs: [
    'https://www.facebook.com/share/1Be2r2skyr/?mibextid=wwXIf',
    'https://www.instagram.com/niigatahalalfood',
  ],
};
