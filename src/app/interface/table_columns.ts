/**
 * @author chandraa01
 * 26-10-2023
 */
export interface TableColumns {
  title: string;
  property: string | 'action';
  type?: 'data' | 'image' | 'info' | 'create' | 'edit' | 'delete';
  icon?: string; // button icon from mat-icon, fill if property === 'action'
  image?: TableImage;
  disabled?: boolean | any;
  sortable?: boolean;
}

export interface TableImage {
  onClick?: any; // function
  width: string;
  height: string;
}
