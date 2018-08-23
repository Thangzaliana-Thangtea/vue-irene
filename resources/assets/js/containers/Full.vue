<template>
  <div class="app">
    <AppHeader :user="me"/>
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
import nav from '../_nav'
import { Header as AppHeader, Sidebar, Aside as AppAside, Footer as AppFooter, Breadcrumb } from '../components/'

export default {
  name: 'full',
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
  beforeRouteEnter:function (to,from,next) {
    const token=localStorage.getItem('access_token');
    axios.get(`api/auth/me?token=${token}`)
            .then(res=>{
               const me=res.data;
              console.log('me '+JSON.stringify(me))
              if(me.role==1)
                next(vm=>{
                  vm.me=me
                })
              else
                next(false)
            })
            .catch(err=>{
                console.log(err.response)
              next(false)
            })
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  }
}
</script>
