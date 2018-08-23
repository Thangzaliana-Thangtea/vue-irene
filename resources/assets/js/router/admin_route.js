import Vue from 'vue'
import Router from 'vue-router'

// Containers
import AdminContainer from '@/containers/AdminContainer'
import Full from '@/containers/Full'

import new_branch from '@/views/admin/branches/new_branch';
import edit_branch from '@/views/admin/branches/edit_branch';
import branches from '@/views/admin/branches/branches';
//users
import new_user from '@/views/admin/users/new_user';
import edit_user from '@/views/admin/users/edit_user';
import users from '@/views/admin/users/users';
// Views
import Dashboard from '@/views/Dashboard'

import appointments from '@/views/admin/appointments/appointments'
//manager category
import categories from '@/views/admin/categories/categories';
import new_category from '@/views/admin/categories/new_category';
import edit_category from '@/views/admin/categories/edit_category';
// Views - Components
//products
import new_product from '@/views/admin/products/new_product';
import products from '@/views/admin/products/products';
import edit_product from '@/views/admin/products/edit_product';

//customer
import new_customer from '@/views/admin/customers/new_customer';
import customers from '@/views/admin/customers/customers';
import edit_customer from '@/views/admin/customers/edit_customer';

//service
import new_services from '@/views/admin/services/new_services';
import edit_services from '@/views/admin/services/edit_services';
import services from '@/views/admin/services/services';

//employee
import new_employee from '@/views/admin/employees/new_employee';
import edit_employee from '@/views/admin/employees/edit_employee';
import employees from '@/views/admin/employees/employees';

import change_password from '@/views/admin/users/change_password';
Vue.use(Router)


export default new Router({
  // mode: 'history', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/admin',
      redirect: '/dashboard',
      name: 'Home',
      component: AdminContainer,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
        },{
          path: '/admin/appointments',
          name: 'Appointments',
          component: appointments
        },{
          path: '/admin/change-password',
          name: 'change-password',
          component: change_password
        },
        {
          path: 'admin-category',
          redirect: '/admin/categories',
          name: 'Categories',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/admin/categories/create',
              name: 'New Category',
              component: new_category
            },
            {
              path: '/admin/categories/:id/edit',
              name: 'Edit Category',
              component: edit_category
            },{
              path: '/admin/categories',
              name: 'Categories',
              component: categories
            },
          ]
        },{
          path: 'admin-branch',
          redirect: '/admin/branches',
          name: 'Branches',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/admin/branches/create',
              name: 'New Branch',
              component: new_branch
            },
            {
              path: '/admin/branches/:id/edit',
              name: 'Edit Branch',
              component: edit_branch
            },{
              path: '/admin/branches',
              name: 'Branches',
              component: branches
            },
          ]
        },{
          path: 'admin-user',
          redirect: '/admin/users',
          name: 'Users',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/admin/users/create',
              name: 'New User',
              component: new_user
            },
            {
              path: '/admin/users/:id/edit',
              name: 'Edit User',
              component: edit_user
            },{
              path: '/admin/users',
              name: 'Users',
              component: users
            },
          ]
        },{
          path: 'admin-product',
          redirect: '/admin/products',
          name: 'Products',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/admin/products/create',
              name: 'New Product',
              component: new_product
            },
            {
              path: '/admin/products/:id/edit',
              name: 'Edit Product',
              component: edit_product
            },{
              path: '/admin/products',
              name: 'Products',
              component: products
            },
          ]
        },{
          path: 'admin-service',
          redirect: '/admin/services',
          name: 'Services',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/admin/services/create',
              name: 'New Services',
              component: new_services
            }, {
              path: '/admin/services/:id/edit',
              name: 'Edit Service',
              component: edit_services
            },{
              path: '/admin/services',
              name: 'Services',
              component: services
            },
          ]
        },{
          path: 'admin-employee',
          redirect: '/admin/employees',
          name: 'Employees',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/admin/employees/create',
              name: 'New Employee',
              component: new_employee
            },{
              path: '/admin/employees/:id/edit',
              name: 'Edit Employee',
              component: edit_employee
            },
            {
              path: '/admin/employees',
              name: 'Employees',
              component: employees
            },
          ]
        },{
          path: 'admin-customer',
          redirect: '/admin/customers',
          name: 'Customers',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/admin/customers/create',
              name: 'New Customer',
              component: new_customer
            }, {
              path: '/admin/customers/:id/edit',
              name: 'Edit Customer',
              component: edit_customer
            },
            {
              path: '/admin/customers',
              name: 'Customers',
              component: customers
            },
          ]
        },
      ]
    },

    {
      path: '/',
      redirect: '/login',
      name: 'Login',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'login',
          name: 'login',
          component: resolve => require(['../views/pages/Login'], resolve)
        },
        {
          path: 'register',
          name: 'register',
          component: resolve => require(['../views/pages/Register'], resolve),
        },{
          path: 'forgot-password',
          name: 'forgot-password',
          component: resolve => require(['../views/pages/forgot'], resolve),
        },{
          path: 'reset-password',
          name: 'reset-password',
          component: resolve => require(['../views/pages/reset-password'], resolve),
        },{
          path: '403',
          name: '403',
          component: resolve => require(['../views/pages/403'], resolve),
        },

      ]
    },
      //Manager Route begins
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
          path: '/manager/change-password',
          name: 'Change Password',
          component: resolve => require(['../views/manager/change-password.vue'], resolve),
        },{
          path: '/manager/appointments',
          name: 'Appointments',
          redirect:'/manager/appointments',
          component:{
            render(c){return c('router-view')}
          },
          children:[
            {
              path: '/manager/appointments/:id',
              name: 'Appointment',
              component: resolve => require(['../views/manager/appointments/new_appointment'], resolve),
            },{
              path:'/manager/appointments',
              name:'Appointments',
              component: resolve => require(['../views/manager/appointments/appointments'], resolve),
            }
          ],
        },{
          path: '/manager/attendances',
          name: 'Attendances',
          component: resolve => require(['../views/manager/attendances/parent_attendances'], resolve),
        },
        {
          path: 'manager-category',
          redirect: '/manager/categories',
          name: 'Categories',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/manager/categories/create',
              name: 'New Category',
              component: resolve => require(['../views/manager/categories/new_category'], resolve),
            },
            {
              path: '/manager/categories/:id/edit',
              name: 'Edit Category',
              component: resolve => require(['../views/manager/categories/edit_category'], resolve),
            },{
              path: '/manager/categories',
              name: 'Categories',
              component: resolve => require(['../views/manager/categories/categories'], resolve),
            },
          ]
        },{
          path: 'manager-product',
          redirect: '/manager/products',
          name: 'Products',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/manager/products/create',
              name: 'New Product',
              component: resolve => require(['../views/manager/products/new_product'], resolve),
            },
            {
              path: '/manager/products/:id/edit',
              name: 'Edit Product',
              component: resolve => require(['../views/manager/products/edit_product.vue'], resolve),
            },{
              path: '/manager/products',
              name: 'Products',
              component: resolve => require(['../views/manager/products/products.vue'], resolve),
            },
          ]
        },{
          path: 'manager-service',
          redirect: '/manager/services',
          name: 'Services',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/manager/services/create',
              name: 'New Services',
              component: resolve => require(['../views/manager/services/new_services.vue'], resolve),
            },{
              path: '/manager/services/:id/edit',
              name: 'Edit Services',
              component: resolve => require(['../views/manager/services/edit_services.vue'], resolve),
            },
            {
              path: '/manager/services',
              name: 'Services',
              component: resolve => require(['../views/manager/services/services.vue'], resolve),
            },
          ]
        },{
          path: 'manager-employee',
          redirect: '/manager/employees',
          name: 'Employees',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/manager/employees/create',
              name: 'New Employee',
              component: resolve => require(['../views/manager/employees/new_employee.vue'], resolve),
            },{
              path: '/manager/employees/:id/edit',
              name: 'Edit Employee',
              component: resolve => require(['../views/manager/employees/edit_employee.vue'], resolve),
            },
            {
              path: '/manager/employees',
              name: 'Employees',
              component: resolve => require(['../views/manager/employees/employees.vue'], resolve),
            },
            {
              path: '/manager/employees/:id/attendances',
              name: 'Attendances',
              component: resolve => require(['../views/manager/attendances/employee_attendance'], resolve),
            },{
              path: '/manager/employees/:id/appointments',
              name: 'Appointment',
              component: resolve => require(['../views/manager/employees/employee_appointments'], resolve),
            },
          ]
        },
        {
           name:'Payroll',
          path:'/manager/payrolls',
          component: resolve => require(['../views/manager/payrolls/payrolls'], resolve),
        },
        {
          path: 'manager-customer',
          redirect: '/manager/customers',
          name: 'Customers',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/manager/customers/create',
              name: 'New Customer',
              component: resolve => require(['../views/manager/customers/new_customer.vue'], resolve),
            },{
              path: '/manager/customers/:id/edit',
              name: 'Edit Customer',
              component: resolve => require(['../views/manager/customers/edit_customer.vue'], resolve),
            },
            {
              path: '/manager/customers',
              name: 'Customers',
              component: resolve => require(['../views/manager/customers/customers.vue'], resolve),
            },{
              path: '/manager/customers/:id/appointments',
              name: 'Appointment',
              component: resolve => require(['../views/manager/customers/customer_appointments.vue'], resolve),
            },
          ]
        },
        {
          path: 'manager-payscale',
          redirect: '/manager/payscales',
          name: 'Payscales',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/manager/payscales/create',
              name: 'New Payscale',
              component: resolve => require(['../views/manager/payscales/new_payscale.vue'], resolve),
            },{
              path: '/manager/payscales/:id/edit',
              name: 'Edit Payscale',
              component: resolve => require(['../views/manager/payscales/edit_payscale.vue'], resolve),
            },
            {
              path: '/manager/payscales',
              name: 'Payscales',
              component: resolve => require(['../views/manager/payscales/payscales.vue'], resolve),
            }
          ]
        },{
          path: 'manager-allowances',
          redirect: '/manager/allowances',
          name: 'Allowances',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/manager/allowances/create',
              name: 'New Allowances',
              component: resolve => require(['../views/manager/allowances/new_allowances.vue'], resolve),
            },{
              path: '/manager/allowances/:id/edit',
              name: 'Edit Allowances',
              component: resolve => require(['../views/manager/allowances/edit_allowances.vue'], resolve),
            },
            {
              path: '/manager/allowances',
              name: 'Allowances',
              component: resolve => require(['../views/manager/allowances/allowances.vue'], resolve),
            }
          ]
        },{
          path: 'manager-deductions',
          redirect: '/manager/deductions',
          name: 'Deductions',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/manager/deductions/create',
              name: 'New Deduction',
              component: resolve => require(['../views/manager/deductions/new_deduction.vue'], resolve),
            },{
              path: '/manager/deductions/:id/edit',
              name: 'Edit Deduction',
              component: resolve => require(['../views/manager/deductions/edit_deduction.vue'], resolve),
            },
            {
              path: '/manager/deductions',
              name: 'Deductions',
              component: resolve => require(['../views/manager/deductions/deductions.vue'], resolve),
            }
          ]
        },
      ]
    },

  ]
})
