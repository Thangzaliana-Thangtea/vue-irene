import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Charts from '@/views/Charts'
import Widgets from '@/views/Widgets'

import appointments from '@/views/manager/appointments/appointments'
//manager category
import categories from '@/views/manager/categories/categories';
import new_category from '@/views/manager/categories/new_category';
import edit_category from '@/views/manager/categories/edit_category';
// Views - Components
//products
import new_product from '@/views/manager/products/new_product';
import products from '@/views/manager/products/products';
import edit_product from '@/views/manager/products/edit_product';

//customer
import new_customer from '@/views/manager/customers/new_customer';
import customers from '@/views/manager/customers/customers';
import edit_customer from '@/views/manager/customers/edit_customer';

//service
import new_services from '@/views/manager/services/new_services';
import edit_services from '@/views/manager/services/edit_services';
import services from '@/views/manager/services/services';

//employee
import new_employee from '@/views/manager/employees/new_employee';
import edit_employee from '@/views/manager/employees/edit_employee';
import employees from '@/views/manager/employees/employees';



import Buttons from '@/views/components/Buttons'
import SocialButtons from '@/views/components/SocialButtons'
import Cards from '@/views/components/Cards'
import Forms from '@/views/components/Forms'
import Modals from '@/views/components/Modals'
import Switches from '@/views/components/Switches'
import Tables from '@/views/components/Tables'

// Views - Icons
import FontAwesome from '@/views/icons/FontAwesome'
import SimpleLineIcons from '@/views/icons/SimpleLineIcons'

// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/pages/Login'
import Register from '@/views/pages/Register'

Vue.use(Router)

export default new Router({
  mode: 'history', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/manager',
      redirect: '/manager-dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: '/manager-dashboard',
          name: 'Dashboard',
          component: resolve => require(['../views/manager/index.vue'], resolve),
        },{
          path: 'manager/appointments',
          name: 'Appointments',
          component: resolve => require(['../views/manager/appointments/appointments'], resolve),
        },
        {
          path: 'manager',
          redirect: 'manager/categories',
          name: 'Categories',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'categories/create',
              name: 'New Category',
              component: resolve => require(['../views/manager/categories/new_category'], resolve),
            },
            {
              path: 'categories/:id/edit',
              name: 'Edit Category',
              component: resolve => require(['../views/manager/categories/edit_category'], resolve),
            },{
              path: 'categories',
              name: 'Categories',
              component: resolve => require(['../views/manager/categories/categories'], resolve),
            },
          ]
        },{
          path: 'manager/product',
          redirect: 'manager/products',
          name: 'Products',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'products/create',
              name: 'New Product',
              component: resolve => require(['../views/manager/products/new_product'], resolve),
            },
            {
              path: 'products/:id/edit',
              name: 'Edit Product',
              component: resolve => require(['../views/manager/products/edit_product.vue'], resolve),
            },{
              path: 'products',
              name: 'Products',
              component: resolve => require(['../views/manager/products/products.vue'], resolve),
            },
          ]
        },{
          path: 'manager',
          redirect: 'manager/services',
          name: 'Services',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'services/create',
              name: 'New Services',
              component: resolve => require(['../views/manager/services/new_services.vue'], resolve),
            },{
              path: 'services/:id/edit',
              name: 'Edit Services',
              component: resolve => require(['../views/manager/services/edit_services.vue'], resolve),
            },
            {
              path: 'services',
              name: 'Services',
              component: resolve => require(['../views/manager/services/services.vue'], resolve),
            },
          ]
        },{
          path: 'manager',
          redirect: '/manager/employees',
          name: 'Employees',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'employees/create',
              name: 'New Employee',
              component: resolve => require(['../views/manager/employees/new_employee.vue'], resolve),
            },{
              path: 'employees/:id/edit',
              name: 'Edit Employee',
              component: resolve => require(['../views/manager/employees/edit_employee.vue'], resolve),
            },
            {
              path: 'employees',
              name: 'Employees',
              component: resolve => require(['../views/manager/employees/employees.vue'], resolve),
            },
          ]
        },{
          path: 'manager',
          redirect: 'manager/customers',
          name: 'Customers',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'customers/create',
              name: 'New Customer',
              component: resolve => require(['../views/manager/customers/new_customer.vue'], resolve),
            },{
              path: 'customers/:id/edit',
              name: 'New Customer',
              component: resolve => require(['../views/manager/customers/edit_customer.vue'], resolve),
            },
            {
              path: 'customers',
              name: 'Customers',
              component: resolve => require(['../views/manager/customers/customers.vue'], resolve),
            },
          ]
        },
      ]
    },
  ]
})
