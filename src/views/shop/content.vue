<template>
  <div class="mid">
    <div class="category">
      <div
        :class="{
          category__item: true,
        }"
        v-for="item in categories"
        :key="item.name"
        @click="() => handleTabClick(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>

    <div class="product">
      <div class="product__item" v-for="item in List" :key="item._id">
        <img :src="item.imgUrl" alt="" />
        <div class="des">
          <h4 class="oneprice">{{ item.name }}</h4>
          <div class="sold">月售{{ item.sales }}件</div>
          <div class="price">
            <span class="price__now">￥{{ item.price }}</span>
            <span class="price__prev">￥{{ item.oldPrice }}</span>
            <span
              class="price__subtract iconfont"
              @click="
                () => {
                  changeCartItem(shopId, item._id, item, -1, shopName);
                }
              "
              >&#xe808;</span
            >
            <span class="price__quantity">{{
              cartList?.[shopId]?.productList?.[item._id]?.count || 0
            }}</span>
            <span
              class="price__plus iconfont"
              @click="
                () => {
                  changeCartItem(shopId, item._id, item, 1, shopName);
                }
              "
              >&#xe777;</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, watchEffect, ref } from "vue";
import { get } from "../../utils/request";
import { useRoute } from "vue-router";
import {useStore} from 'vuex'
import { useCartEffect } from '../../effects/useCartEffect'
const categories = [
  {
    name: "全部商品",
    tab: "all",
  },
  {
    name: "秒杀",
    tab: "seckill",
  },
  {
    name: "新鲜水果",
    tab: "fruit",
  },
];
//处理tab相关的逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab);
  const handleTabClick = (tab) => {
    currentTab.value = tab;
  };
  return { currentTab, handleTabClick };
};
//处理content相关的逻辑
const useContentEffect = (currentTab, shopId) => {
  const content = reactive({ List: [] });
  const getContentData = async () => {
    const res = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value,
    });
    content.List = res.data;
  };
  watchEffect(() => {
    getContentData();
  });
  const { List } = toRefs(content);
  return { List };
};
//购物车相关逻辑
const useThisCartEffect = () => {
  const store = useStore()
  const { cartList, changeItemInCart } = useCartEffect();
    const changeShopName = (shopId, shopName) => {
        store.commit('changeShopName', {shopId, shopName})
      }
    const changeCartItem = (shopId, productId, item, num, shopName) => {
      changeItemInCart(shopId, productId, item, num)
      changeShopName(shopId, shopName)
    }
    return {cartList, changeCartItem}
}

export default {
  name: "Content",
  props: ['shopName'],
  setup() {
    const route = useRoute()
    
    const shopId = route.params.id
    const { currentTab, handleTabClick } = useTabEffect()
    const { List } = useContentEffect(currentTab, shopId)
    const {cartList, changeCartItem} = useThisCartEffect()
    return {
      categories,
      currentTab,
      List,
      handleTabClick,
      shopId,
      cartList,
      changeCartItem
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
.mid {
  font-size: 0.14rem;
  display: flex;
  position: absolute;
  top: 1.6rem;
  bottom: 0.5rem;
  left: 0;
  right: 0;
}
.category {
  width: 0.76rem;
  height: 100%;
  background-color: $item-background;
  &__item {
    overflow-y: scroll;
    font-size: 0.14rem;
    text-align: center;
    line-height: 0.4rem;
    color: $content-color;
  }
}

.category__item:hover {
  background-color: $white;
}
.product {
  flex: 1;
  margin-left: 0.16rem;
  margin-right: 0.1rem;
  overflow-y: scroll;
  &__item {
    display: flex;
    margin-bottom: 0.12rem;
    margin-top: 0.16rem;
    border-bottom: 1px solid #f1f1f1;
    position: relative;
  }
  img {
    width: 0.68rem;
    height: 0.68rem;
    margin-right: 0.16rem;
  }
  .des {
    .oneprice {
      height: 0.2rem;
      margin: 0;
      color: $content-color;
      width: 100%;
      margin-bottom: 0.06rem;
      @include ellipsis;
    }
    .sold {
      font-size: 0.12rem;
      margin-bottom: 0.06rem;
    }
    .price {
      margin-bottom: 0.06rem;
      &__now {
        width: 0.36em;
        line-height: 0.2rem;
        font-size: 14px;
        color: $highlight-font;
        margin-right: 0.06rem;
      }
      &__prev {
        font-size: 0.12rem;
        text-decoration: line-through;
        color: #999;
      }
      &__subtract {
        height: 0.2rem;
        width: 0.2rem;
        position: absolute;
        right: 0;
        color: blue;
      }
      &__plus {
        height: 0.2rem;
        width: 0.2rem;
        position: absolute;
        right: 0.4rem;
      }
      &__quantity {
        position: absolute;
        right: 0.29rem;
      }
    }
  }
}
</style>