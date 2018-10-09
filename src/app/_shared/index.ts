import { SortDirective } from './directives/sort.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SearchByNamePipe } from './pipes/search-by-name.pipe';

export const directives: any = [
  SortDirective
];

export const pipes: any = [
  OrderByPipe,
  SearchByNamePipe
];
