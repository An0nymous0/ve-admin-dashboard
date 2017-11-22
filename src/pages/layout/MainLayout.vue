<template>
  <el-container class="main-container">
    <sidebar></sidebar>
    <el-container direction="vertical" style="background: #f0f2f5;"><!--style fixed:https://github.com/ElemeFE/element/issues/8298-->
      <navbar></navbar>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
  import Sidebar from '../layout/Sidebar'
  import Navbar from '../layout/Navbar'

  export default {
    name: 'MainLayout',
    components: {
      Sidebar,
      Navbar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-container{
    min-height: 100vh;
  }
</style>
