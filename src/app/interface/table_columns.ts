export interface TableColumns {
  title: string;
  property: string | 'action';
  type?: 'data' | 'image' | 'info' | 'create' | 'edit' | 'delete';
  icon?: string; // from mat-icon, if property === 'action'
  image?: TableImage;
  disabled?: any;
  sortable?: boolean;
}

export interface TableImage {
  // url: string;
  width: string;
  height: string;
}
