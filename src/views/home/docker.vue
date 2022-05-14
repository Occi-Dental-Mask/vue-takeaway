<template>
  <div class="docker">
    <div class="docker_item" 
        v-for="item in dockerItems"
        :key="item.id"
    >
    <router-link :to='item.to'>
      <div class="iconfont" v-html="item.id"/>
      <div class="docker_title">{{item.title}}</div>
    </router-link>  
    </div>
  </div>
</template>

<script>
export default {
  name: "docker",
  setup() {
    const dockerItems = [
      {
        id: "&#xe7c6;",
        title: "首页",
        to: {name: 'Home'}
      },
      {
        id: "&#xe60a;",
        title: "购物车",
        to: {name: 'Cart'}
      },
      {
        id: "&#xe713;",
        title: "订单",
        to: {name: 'Home'}
      },
      {
        id: "&#xe78b;",
        title: "我的",
        to: {name: 'Home'}
      },
    ];
    return { dockerItems };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/variables.scss";
.docker {
  position: fixed;
  display: flex;
  padding: 0 0.18rem 0 0.18rem;
  box-sizing: border-box;
  left: 0;
  bottom: 0;
  height: 0.49rem;
  width: 100%;
  border-top: 2px solid #f1f1f1;
  background-color: #fff;
  &_item {
    flex: 1;
    text-align: center;
    a {
      color: $content-color;
      text-decoration: none;
    }
    .docker_item:hover {
      a {
        color: #1FA4FC;
      }
      
    }
    .iconfont {
      font-size: 20px;
      margin: 0.07rem 0 0.02rem 0;
    }
    .docker_title {
      font-size: 20px;
      transform: scale(0.5, 0.5);
      transform-origin: center top;
    }
  }
}

.docker_item:hover {
  color: #4a99f3;
}
</style>