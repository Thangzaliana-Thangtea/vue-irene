<template>
  <div class="app">
    <AppHeader :user="me"></AppHeader>
    <div class="app-body">
      <Sidebar :navItems="nav"/>
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import nav from '../admin_nav'
import { Header as AppHeader, Sidebar, Aside as AppAside, Footer as AppFooter, Breadcrumb } from '../components/'

export default {
  name: 'AdminContainer',

  components: {
    AppHeader,
    Sidebar,
    AppAside,
    AppFooter,
    Breadcrumb
  },
  data () {
    return {
      nav: nav.items,
      me:{}
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  },
  beforeRouteEnter:function (to,from,next) {
    const token=localStorage.getItem('access_token');
    axios.get(`/api/auth/me?token=${token}`)
            .then(res=>{
              const me=res.data
              if(me.role==0)
                next(vm=>{
                  vm.me=res.data
                })
              else
                next(false)
            })
            .catch(err=>{
              console.log('from admin container')
              console.log(err)
              next(false)
            })
  },
  created:function () {
    let token=localStorage.getItem('access_token');
    if(!token)
      this.$router.replace('403');
    axios.get('/api/auth/me'+'?token='+token)
            .then(res=>{
              this.currentUser=res.data;
              console.log("current user "+this.currentUser)
              if(this.currentUser.role==1){
                this.$router.replace('403')
              }
            })
            .catch(err=>{
               this.$router.replace("/login")
            })

  },


}
</script>
