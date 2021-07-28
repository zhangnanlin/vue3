<template>
  <n-menu
    :options="menuOptions"
    :render-label="renderMenuLabel"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    @update:value="handleUpdateValue"
    v-model:value="activeKey"
  />
</template>
<script setup>
import { h, reactive, ref, defineProps } from "vue";
import { NMenu, NIcon } from "naive-ui";
import { RouterLink } from "vue-router";
import { BookOutline as BookIcon, LogInOutline } from "@vicons/ionicons5";
import { creatMenuOption } from "../../utils/index.js";
import { useRouter } from "vue-router";

import routes from "../../routes.js";

const router = useRouter();
const activeKey = ref(null)

const props = defineProps({
  collapsed: Boolean
});

const menuOptions = creatMenuOption(routes);
const handleUpdateValue = (key, name) => {
  router.push("/" + key);
};

const renderMenuLabel =  (option) =>  {
    return option.label;
}
</script>