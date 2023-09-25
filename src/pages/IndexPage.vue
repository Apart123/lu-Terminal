<template>
  <lu-terminal
    ref="terminalRef"
    :user="loginUser"
    full-screen
    :on-submit-command="onSubmitCommand"
  />
</template>

<script setup lang="ts">
import { doCommandExecute } from "../core/commandExecutor";
import { onMounted, ref } from "vue";
import { useUserStore } from "../core/commands/user/userStore";
import { storeToRefs } from "pinia";

const terminalRef = ref();

/**
 * 回车触发事件 --> 命令解析
 * @param inputText
 */
const onSubmitCommand = async (inputText: string) => {
  if (!inputText) {
    return;
  }
  // 获取终端对象
  const terminal = terminalRef.value.terminal;
  // 命令解析
  await doCommandExecute(inputText, terminal);
};

const userStore = useUserStore();
const { loginUser } = storeToRefs(userStore);

onMounted(() => {
  userStore.getAndSetLoginUser();
});
</script>

<style></style>
