/**
 * @author chandraa01
 * 26-10-2023
 */
export interface PagingInfo {
  limit: number | 10 | 25 | 50 | 100; //rowPerPage
  limitOptions: number[] | [10, 25, 50, 100]; //rowPerPage options
  offset: number;
  activePage: number;
  sort: Sort;
  rowCount?: number;
}

interface Sort {
  field: string;
  order: 1 | -1;
}
