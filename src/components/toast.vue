<template>
  <div class="middle">{{message}}</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export const useToast = () => {
  const toastData = reactive({message: "", showToast: false})
  const showMessage = (message) => {
      toastData.message = message
      toastData.showToast = true
      setTimeout(() => {
        toastData.showToast = false
      }, 1000)
    }
  return {toastData, showMessage}
}
export default {
    name: 'toast',
    props:['message']
}
</script>

<style lang="scss" scoped>
    .middle {
        position: fixed;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        background-color: rgba(92, 90, 90, 0.35);
        color: white
    }
</style>