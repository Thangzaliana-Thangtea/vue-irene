export default {
  items: [
    {
      name: 'Dashboard',
      url: '/manager',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },{
      name: 'Appointments',
      url: '/manager/appointments',
      icon: 'icon-note',
    },{
      name: 'Attendances',
      url: '/manager/attendances',
      icon: 'icon-calendar',
    },
    {
      title: true,
      name: 'Main Menu'
    },
    {
      name: 'Categories',
      url: '/manager/categories',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'New Category',
          url: '/manager/categories/create',
          icon: 'icon-arrow-right'
        },
        {
          name: 'List of categories',
          url: '/manager/categories',
          icon: 'icon-arrow-right'
        },
      ]
    },{
      name: 'Product',
      url: '/manager/products',
      icon: 'icon-tag',
      children: [
        {
          name: 'New Product',
          url: '/manager/products/create',
          icon: 'icon-arrow-right'
        },
        {
          name: 'List of Products',
          url: '/manager/products',
          icon: 'icon-arrow-right'
        },
      ]
    },{
      name: 'Service',
      url: '/manager/services',
      icon: 'icon-event',
      children: [
        {
          name: 'New Service',
          url: '/manager/services/create',
          icon: 'icon-arrow-right'
        },
        {
          name: 'List of services',
          url: '/manager/services',
          icon: 'icon-arrow-right'
        },
      ]
    },{
      name: 'Employee',
      url: '/manager/employees',
      icon: 'icon-people',
      children: [
        {
          name: 'New Employee',
          url: '/manager/employees/create',
          icon: 'icon-arrow-right'
        },
        {
          name: 'List of employees',
          url: '/manager/employees',
          icon: 'icon-arrow-right'
        },
      ]
    },{
      name: 'Customer',
      url: '/manager/customers',
      icon: 'icon-user-following',
      children: [
        {
          name: 'New Customer',
          url: '/manager/customers/create',
          icon: 'icon-arrow-right'
        },
        {
          name: 'List of Customers',
          url: '/manager/customers',
          icon: 'icon-arrow-right'
        },
      ]
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Payroll Management'
    },
    {
      name:'Payroll',
      url:'/manager/payrolls',
      icon:'icon-wallet'
    },
    {
      name: 'Payscales',
      url: '/manager/payscales',
      icon: 'icon-chart',
      children: [
        {
          name: 'New Payscale',
          url: '/manager/payscales/create',
          icon: 'icon-arrow-right'
        },
        {
          name: 'List of Payscales',
          url: '/manager/payscales',
          icon: 'icon-arrow-right'
        },
      ]
    },{
      name: 'Allowances',
      url: '/manager/allowances',
      icon: 'icon-plus',
      children: [
        {
          name: 'New Allowance',
          url: '/manager/allowances/create',
          icon: 'icon-arrow-right'
        },
        {
          name: 'List of Payscales',
          url: '/manager/allowances',
          icon: 'icon-arrow-right'
        },
      ]
    },{
      name: 'Deductions',
      url: '/manager/deductions',
      icon: 'icon-minus',
      children: [
        {
          name: 'New Deduction',
          url: '/manager/deductions/create',
          icon: 'icon-arrow-right'
        },
        {
          name: 'List of Deduction',
          url: '/manager/deductions',
          icon: 'icon-arrow-right'
        },
      ]
    }
  ]
}
