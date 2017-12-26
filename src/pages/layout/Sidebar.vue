<template>
  <el-aside :style="collapseStyle">
    <el-menu background-color="#001529" :style="collapseStyle" text-color="#88929b" :collapse="sidebarCollapse"
             :unique-opened="true" router>
      <template v-for="item in this.$router.options.routes"
                v-if="item.path!='*'&&(!item.MenuSettings||(item.MenuSettings!=null&&!item.MenuSettings.hidden))">
        <el-submenu v-if="item.children.length>1" :index="item.path">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <el-menu-item v-for="itemC in item.children" :index="item.path+'/'+itemC.path"
                        :key="generateMenuKey(itemC)">{{itemC.name}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.path+'/'+item.children[0].path">
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.children[0].name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
  import { mapGetters } from 'vuex'
  import md5 from 'crypto-js/md5';

  export default {
    name: 'Sidebar',
    components: {},
    data() {
      return {
      }
    },
    mounted() {
    },
    computed: {
      ...mapGetters([
        'sidebarCollapse'
        // ...
      ]),
      collapseStyle: function () {
        return {
          width: this.sidebarCollapse ? '64px' : '200px'
        }
      }
    },
    methods: {
      generateMenuKey(obj) {
        return md5(JSON.stringify(obj)).toString()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-aside {
    background: #001529;
    overflow: visible;
  }
</style>
