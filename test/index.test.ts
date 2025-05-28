import { FilterKata } from '../src/index';

let filter: FilterKata;

beforeEach(() => {
  filter = new FilterKata();
  filter.tambah(['kontol', 'ngaceng', 'bangsat']);
});

test('should detect bad word', () => {
  expect(filter.cek("kontol kamu ngaceng")).toBe(true);
});

test('should censor bad word', () => {
  expect(filter.sensor("Dasar bangsat")).toBe("Dasar *******");
});
