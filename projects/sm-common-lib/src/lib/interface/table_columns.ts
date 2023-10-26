export interface TableColumns {
  title: string;
  property: string | 'action';
  type?: 'data' | 'image' | 'info' | 'create' | 'edit' | 'delete';
  icon?: string; // from mat-icon, if property === 'action'
  image?: TableImage;
  disabled?: boolean | string;
  sortable?: boolean;
}

export interface TableImage {
  // url: string;
  width: string;
  height: string;
}
