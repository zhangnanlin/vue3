<template>
  <n-layout position="absolute">
    <n-layout-header style="height: 64px;" bordered>
      <n-space justify="space-between" style="align-items: center">
        <n-h1>Vue3-Naive-Admin</n-h1>
        <n-space align="center">
          <n-dropdown @select="handleSelect" trigger="hover" placement="bottom" :options="options">
            <n-button>点击！</n-button>
          </n-dropdown>

          <n-popconfirm @positive-click="loginOut" @negative-click="loginOutCancel" positive-text="确认" negative-text="取消">
            <template #trigger>
              <n-button @click="loginOut">
                <template #icon>
                  <n-icon>
                    <log-out />
                  </n-icon>
                </template>
              </n-button>
            </template>
            是否要登出账号？
          </n-popconfirm>

        </n-space>
      </n-space>
    </n-layout-header>
    <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px;">
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <vna-sidebar :collapsed="collapsed" />
      </n-layout-sider>
      <n-layout content-style="padding: 24px;">
        <router-view />
      </n-layout>
    </n-layout>
    <n-layout-footer
      bordered
      position="absolute"
      style="height: 64px; padding: 24px; text-align: center;"
    >copyright zhangnanlin</n-layout-footer>
  </n-layout>
</template>
<script setup>
import { ref, reactive } from "vue";
import {
  BookOutline as BookIcon,
  LogInOutline as LogOut
} from "@vicons/ionicons5";
import {
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutFooter,
  NSpace,
  NDropdown,
  useMessage,
  useDialog,
  NButton,
  NPopconfirm,
  NH1,
  NIcon
} from "naive-ui";
import VnaSidebar from "./components/Sidebar.vue";
// const message = useMessage();
// const dialog = useDialog();
const handleSelect = key => {
  // message.info(key)
};
const collapsed = ref(false);
const options = reactive([
  {
    label: "滨海湾金沙，新加坡",
    key: "marina bay sands",
    disabled: true
  },
  {
    label: "布朗酒店，伦敦",
    key: "brown's hotel, london"
  },
  {
    label: "亚特兰蒂斯巴哈马，拿骚",
    key: "atlantis nahamas, nassau"
  },
  {
    label: "摩尔曼斯克，俄罗斯",
    key: "murmansk, russia"
  }
]);

const loginOut = () => {

}

const loginOutCancel = () => {

}

</script>

<style scoped>
.n-space {
  align-items: center;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  padding: 0 36px;
  justify-content: space-between;
  width: 100%;
}
</style>