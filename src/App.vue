<template>
  <!-- el-container 子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal -->
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="activeIndex"
          router
          class="el-menu-demo"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <template v-for="menu in menuData" :index="menu.path">
            <!-- 有子菜单的时候，就用 el-submenu，再绑个序号 index -->
            <el-submenu
              v-if="menu.subMenus && menu.subMenus.length"
              :index="menu.index"
              :key="menu.index"
            >
              <template slot="title">
                <!-- 绑个父菜单的 icon -->
                <!-- <i :class="menu.icon"></i> -->
                <span slot="title">{{ menu.text }}</span>
              </template>
              <el-menu-item-group>
                <!-- 子菜单也要遍历，同时绑上子菜单名称 text，也要绑个序号 index -->
                <el-menu-item
                  v-for="subMenu in menu.subMenus"
                  :key="subMenu.index"
                  :index="subMenu.index"
                >
                  {{ subMenu.text }}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 没子菜单的时候，就用 el-menu-item，也要绑个序号 index -->
            <el-menu-item v-else :index="menu.index" :key="menu.index">
              <!-- 绑个父菜单的 icon -->
              <!-- <i :class="menu.icon"></i> -->
              <!-- 再绑个父菜单的名称 text -->
              <span slot="title">{{ menu.text }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import utils from '@/utils'
const views = require.context('./views', true, /\.vue$/)


export default {
  created() {
    this.menuData = utils.genMenuList(views.keys())
  },
  data() {
    return {
      activeIndex: '/home',
      menuData: []
    }
  },
  methods: {
    handleSelect(params) {
      console.log(params)
    }
  }
};
</script>


<style lang="scss" >
* {
  margin: 0;
  padding: 0;
  .el-header,
  .el-footer {
    background-color: rgb(84, 92, 100);
    color: white;
    text-align: center;
    line-height: 60px;
  }
}
</style>
