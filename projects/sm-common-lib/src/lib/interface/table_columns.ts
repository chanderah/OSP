export interface TableColumns {
  title: string;
  property: string | 'action';
  type?: 'data' | 'image' | 'info' | 'create' | 'edit' | 'delete';
  icon?: string; // from mat-icon, if property === 'action'
  image?: TableImage;
  disabled?: boolean | any;
  sortable?: boolean;
}

export interface TableImage {
  onClick?: any; // function
  width: string;
  height: string;
}
