export default {
  items: [
    {
      name: 'Dashboard',
      url: '/admin',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },{
      name: 'Appointments',
      url: '/admin/appointments',
      icon: 'icon-calendar',
    },
    {
      title: true,
      name: 'Management'
    },
    {
      name: 'Branches',
      url: '/admin/branches',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'New Branch',
          url: '/admin/branches/create',
          icon: 'icon-arrow-right'
        },
        {
          name: 'List Of Branches',
          url: '/admin/branches',
          icon: 'icon-arrow-right'
        },
      ]
    }, {
      name: 'Users',
      url: '/admin/users',
      icon: 'icon-user',
      children: [
        {
          name: 'New User',
          url: '/admin/users/create',
          icon: 'icon-arrow-right'
        },
        {
          name: 'List Of Users',
          url: '/admin/users',
          icon: 'icon-arrow-right'
        },
      ]
    },
    {
      divider: true
    },{
      name: 'Categories',
      url: '/admin/categories',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'New Category',
          url: '/admin/categories/create',
          icon: 'icon-arrow-right'
        },
        {
          name: 'List Of Categories',
          url: '/admin/categories',
          icon: 'icon-arrow-right'
        },
      ]
    },{
      name: 'Product',
      url: '/admin/products',
      icon: 'icon-tag',
      children: [
        {
          name: 'New Product',
          url: '/admin/products/create',
          icon: 'icon-arrow-right'
        },
        {
          name: 'List Of Products',
          url: '/admin/products',
          icon: 'icon-arrow-right'
        },
      ]
    },{
      name: 'Service',
      url: '/admin/services',
      icon: 'icon-event',
      children: [
        {
          name: 'New Service',
          url: '/admin/services/create',
          icon: 'icon-arrow-right'
        },
        {
          name: 'List Of Services',
          url: '/admin/services',
          icon: 'icon-arrow-right'
        },
      ]
    },{
      name: 'Employee',
      url: '/admin/employees',
      icon: 'icon-people',
      children: [
        {
          name: 'New Employee',
          url: '/admin/employees/create',
          icon: 'icon-arrow-right'
        },
        {
          name: 'List Of Employees',
          url: '/admin/employees',
          icon: 'icon-arrow-right'
        },
      ]
    },{
      name: 'Customer',
      url: '/admin/customers',
      icon: 'icon-user-following',
      children: [
        {
          name: 'New Customer',
          url: '/admin/customers/create',
          icon: 'icon-arrow-right'
        },
        {
          name: 'List of Customers',
          url: '/admin/customers',
          icon: 'icon-arrow-right'
        },
      ]
    },
    {
      divider: true
    }
  ]
}
