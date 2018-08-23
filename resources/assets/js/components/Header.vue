<template>
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <b-link class="navbar-brand" to="#"></b-link>
    <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" @click="sidebarMinimize">&#9776;</button>
   
    <b-nav is-nav-bar class="ml-auto">
      <b-nav-item class="d-md-down-none">
        <i class="icon-bell"></i><span class="badge badge-pill badge-danger">5</span>
      </b-nav-item>

      <b-nav-item>
        <p class="pull-right">Welcome {{user.name}}</p>
      </b-nav-item>

      <b-nav-item-dropdown right>
        <template slot="button-content">
          <img src="static/img/avatars/6.jpg" class="img-avatar" alt="admin">
          <span class="d-md-down-none"></span>
        </template>
        <b-dropdown-header tag="div" class="text-center"><strong>Account</strong></b-dropdown-header>
        <b-dropdown-item @click="changePassword"><i class="fa fa-tasks"></i> Change password</b-dropdown-item>
        <b-dropdown-header tag="div" class="text-center"><strong>Settings</strong></b-dropdown-header>
        <b-dropdown-item><i class="fa fa-user"></i> Preference</b-dropdown-item>
        <b-dropdown-item><i class="fa fa-file"></i> Credential<span class="badge badge-primary">42</span></b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item @click="doLogout"><i class="fa fa-lock"></i> Logout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
    <button class="navbar-toggler aside-menu-toggler d-md-down-none" type="button" @click="asideToggle">&#9776;</button>
  </header>
</template>
<script>
export default {
  name: 'header',

  props:{
    user:{
      type:Object,
      required:true,
      default:()=>{}
    }
  },
  computed:{

  },
  methods: {
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    },
    doLogout:function () {
      let token=localStorage.getItem('access_token');
      axios.post('/api/auth/logout'+'?token='+token)
              .then(res=>{
                this.$router.replace('/login')
              })
              .catch(err=>{
                console.log(err)
              })
    },
    changePassword:function () {
      if(this.user.role==0)
        this.$router.push('/admin/change-password')
      if(this.user.role==1)
        this.$router.push('/manager/change-password')

    }
  },
  mounted:function () {
    console.log('user at header '+this.user.email)
    console.log('user at header '+this.user.name)
    console.log('user at header '+this.user.role)
  }
}
</script>
