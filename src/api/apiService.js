import axios from 'axios';

const api = axios.create({ baseURL: 'api' });
const RESOURCE = '/transaction';

const CURRENT_YEAR = new Date().getFullYear();
const GLOBAL_YEARS = [CURRENT_YEAR - 1, CURRENT_YEAR, CURRENT_YEAR + 1];
const GLOBAL_MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const MONTH_DESCRIPTIONS = [
  '',
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

let allPeriods = [];

function _processPeriods() {
  allPeriods = [];
  let index = 0;

  GLOBAL_YEARS.forEach((x) => {
    GLOBAL_MONTHS.forEach((y) => {
      const id = `${x}-${y.toString().padStart(2, '0')}`;
      const monthDescription = `${MONTH_DESCRIPTIONS[y]}/${x}}`;

      allPeriods.push({ id, description: monthDescription, index: index++ });
    });
  });
}
