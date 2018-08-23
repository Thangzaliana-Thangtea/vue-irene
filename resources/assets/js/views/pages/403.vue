<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">403</h1>
            <h4 class="pt-3">Permission Denied</h4>
            <p class="text-muted">you don't have a permission to access this page</p>
          </div>
          <div class="input-prepend input-group">
            <span class="input-group-btn">
              <button class="btn btn-info" @click="doBack" type="button"><i class="fa fa-home"></i>Home</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page403',
  methods:{
    doBack:function () {
      this.$router.push('/login')
    }
  }
}
</script>
