export interface Menu {
  id?: number;
  parent?: number;

  icon?: string;
  class?: string;
  label?: string;

  routerLink?: string[];
  routerLinkActiveOptions?: object;
  queryParams?: object;

  items?: Menu[];
}

// {
//     label: 'Order',
//     // icon: 'pi pi-fw pi-briefcase',
//     items: [
//       {
//         icon: 'pi pi-fw pi-check-square',
//         label: 'Menu',
//         routerLink: ['/'],
//         items: [
//           {
//             label: 'All',
//             routerLink: ['/']
//           },
//           {
//             label: 'Foods',
//             routerLink: ['/'],
//             queryParams: { menu: 'food' }
//           },
//           {
//             label: 'Drinks',
//             routerLink: ['/'],
//             queryParams: { menu: 'drink' }
//           },
//           {
//             label: 'Desserts',
//             routerLink: ['/'],
//             routerLinkActiveOptions: { exact: true },
//             queryParams: { menu: 'dessert' }
//           },
//           {
//             label: 'Snacks',
//             routerLink: ['/'],
//             queryParams: { menu: 'snack' }
//           }
//         ]
//       },
//       {
//         label: 'Cart',
//         icon: 'pi pi-fw pi-shopping-cart',
//         routerLink: ['/cart']
//       }
//     ]
//   }
