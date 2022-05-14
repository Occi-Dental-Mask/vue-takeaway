<template>
  <div class="wrapper">
    <div class="head">
      <div class="left iconfont" @click="goBack">&#xe679;</div>
      <div class="search">
        <span class="search__icon iconfont">&#xe699;</span>
        <input
          class="search__kuang"
          type="text"
          placeholder="请输入商品名称搜索"
        />
      </div>
    </div>
    <ShopInfo :item="item" />
    <Content :shopName="item.name"/>
    <Cart/>
  </div>
</template>

<script>
import ShopInfo from "../../components/shopInfo.vue"
import {useRouter,useRoute} from 'vue-router'
import {get} from '../../utils/request'
import { reactive, toRefs } from '@vue/reactivity'
import Content from './content.vue'
import Cart from './cart.vue'
const useInfoEffect = () => {
    const data = reactive({
      item:{}
    })
    const getInfo = async() => {
      const route = useRoute()
      const id = route.params.id
      const res = await get(`/api/shop/${id}`)
      if (res?.errno === 0 && res.data) {
        data.item = res.data
      }
    }
    const {item} = toRefs(data)
    return {item, getInfo}
}
export default {
  name: "Shop",
  components: { ShopInfo, Content, Cart },
  setup() {
    const {item, getInfo} = useInfoEffect()
    getInfo()
    const router = useRouter()
    
    const goBack = () => {
      router.back()
    }
    return { item, goBack }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 .18rem;
}
.head {
  font-size: 14px;
  display: flex;
  padding-top: .14rem;
  padding-bottom: .14rem;

  .left {
    width: .3rem;
    padding: .06rem 0;
    text-align: center;
    color: #B6B6B6;
  }
  .search {
    width: 310px;
    height: 32px;
    display: flex;
    background: #F5F5F5;
    border-radius: .16rem;
    .search__icon {
      width: .44rem;
      text-align: center;
      padding: .06rem 0;
      color: #b7b7b7;
      
    }
    input {
      display: block;
      flex: 1;
      outline: none;
      border: none;
      border-radius: 0 .16rem .16rem 0;
      line-height: 32px;
      font-size: 14px;
      background-color: #F5F5F5;
      width: 100%
    }
  }
}
.wrapper {
  padding: 0 0.18rem;
}
</style>