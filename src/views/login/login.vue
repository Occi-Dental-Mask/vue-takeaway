<template>
  <div class="wrapper">
    <img
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
      class="wrapper__img"
    />
    <div class="wrapper__p">
      <input
        type="text"
        class="ph"
        placeholder="请输入手机号"
        v-model="data.username"
      />
    </div>
    <div class="wrapper__p">
      <input
        type="password"
        class="pw"
        placeholder="请输入密码"
        v-model="data.password"
      />
    </div>
    <button class="wrapper__log" @click="handleLogin">登录</button>
    <div class="bottom">
      <span @click="handleRegister">立即注册</span> |
      <span>忘记密码</span>
    </div>
    <Toast :message="toastData.message" v-if="toastData.showToast" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive } from "@vue/reactivity";
import { post } from "../../utils/request";
import Toast, { useToast } from "../../components/toast.vue";

const useLoggingEffect = (showMessage) => {
  const router = useRouter()
  const data = reactive({
    username: "",
    password: "",
  })
  // 引入useToast返回的两个对象
  const handleLogin = async () => {
    try {
      const res = await post("/api/user/login", {
        username: data.username,
        password: data.password,
      })
      if (res?.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: "Home" })
      } else {
        showMessage("登录失败，请检查用户名和密码")
      }
    } catch (e) {
      showMessage("请求失败")
    }
  }
  return {handleLogin, data}
}

// 通过引入toast组件中useToast操作
export default {
  components: { Toast },
  name: "Login",
  setup() {
    const router = useRouter()

    const handleRegister = () => {
      router.push({ name: "Register" })
    }
    const { toastData, showMessage } = useToast()
    const { handleLogin, data } = useLoggingEffect(showMessage)
    return { handleLogin, handleRegister, data, toastData }
  },
}
</script>

<style lang='scss' scoped>
@import "../../style/variables.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  font-size: 0.16rem;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__p {
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    .ph {
      line-height: 0.47rem;
      border: none;
      outline: none;
      //默认状态下，width:100%子元素设置宽度的百分比是指子元素内容区域相对于父元素内容区域
      width: 100%;
      background: none;
    }
    .pw {
      line-height: 0.47rem;
      border: none;
      outline: none;
      //默认状态下，width:100%子元素设置宽度的百分比是指子元素内容区域相对于父元素内容区域
      width: 100%;
      background: none;
    }
  }
  &__log {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: $login-background;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: $white;
    font-size: 0.16rem;
    text-align: center;
    width: 300px;
    border: none;
  }
  .bottom {
    margin: 0 0.4rem 0 0.4rem;
    text-align: center;
    font-size: 0.14rem;
    color: $content-color;
  }
}
</style>