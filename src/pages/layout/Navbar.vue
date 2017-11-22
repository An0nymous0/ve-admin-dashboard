<template>
  <el-header>

    <svg @click="editSidebarCollapse" class="icon sidebar-collapse" aria-hidden="true">
      <use :xlink:href="sidebarCollapse?'#icon-menuright':'#icon-menuleft'"></use>
    </svg>

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="(item,index)  in breadcrumbList">
        <el-breadcrumb-item v-if="index==0" :key="item.path" :to="item.path">{{item.name}}
        </el-breadcrumb-item>
        <el-breadcrumb-item v-else :key="item.path">{{item.name}}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>

    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>账号设置</el-dropdown-item>
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item>安全退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <span>王小虎</span>
  </el-header>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'Navbar',
    components: {},
    created() {
      this.getBreadcrumb()
    },
    data() {
      return {
        breadcrumbList: null
      }
    },
    computed: {
      ...mapState({
        sidebarCollapse: 'sidebarCollapse'
      })
    },
    methods: {
      ...mapActions([
        'editSidebarCollapse',
      ]),
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name);
        const first = matched[0];
        if (first && (first.name !== '首页' || first.path !== '')) {
          matched = [{name: '首页', path: '/'}].concat(matched)
        }
        this.breadcrumbList = matched;
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header {
    background: #fff;
    color: #333;
    line-height: 60px;
    text-align: right;
    font-size: 12px;
    -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    z-index:1
  }
  .el-breadcrumb{
    float:left;
    margin: 22px 0px 0px 10px;
  }
  .sidebar-collapse {
    -webkit-transition:all .3s;
    -o-transition:all .3s;
    transition:all .3s;
    float:left;
    margin-left: 10px;
    margin-top: 20px;
    font-size:20px;
  }
</style>
