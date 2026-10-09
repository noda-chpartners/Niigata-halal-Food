export const siteOrigin = 'https://niigata-halal-food.pages.dev';

export const siteName = 'Niigata Halal Food And Restaurant';

export const siteTitle = '新潟市中央区のハラルレストラン | Niigata Halal Food';

export const siteDescription =
  '新潟市中央区米山2階のハラルレストラン。カレー、タンドーリ、ナンを提供し、窓際のテーブル席と個室があります。定休日なし。予約は070-2797-1885。';

const weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
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
  hasMenu: `${siteOrigin}/#menu`,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: '個室', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'テーブル席', value: true },
    { '@type': 'LocationFeatureSpecification', name: '席数', value: '26' },
  ],
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
