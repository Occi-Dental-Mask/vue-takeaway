<template>
  <div
    class="mask"
    v-if="showCart && calculations.price > 0"
    @click="handleCartShowChange"
  ></div>
  <div class="cart">
    <div class="product" v-if="showCart && calculations.price > 0">
      <div class="product__header">
        <div
          class="product__header__all iconfont"
          v-html="calculations.allChecked ? '&#xe652;' : '&#xe6f7;'"
          @click="() => setCartItemsChecked(shopId)"
        ></div>
        <span class="product__header__text">全选</span>
        <div class="product__header__clear">
          <span
            class="product__header__clear__text"
            @click="() => cleanCartProducts(shopId)"
            >清空购物车
          </span>
        </div>
      </div>
      <div class="product__item" v-for="item in pList" :key="item._id">
        <div
          class="product__item__checked iconfont"
          v-if="item.count > 0"
          @click="() => changeCartItemChecked(item._id)"
          v-html="item.check ? '&#xe652;' : '&#xe6f7;'"
        ></div>
        <img :src="item.imgUrl" alt="" v-if="item.count" />
        <div class="des" v-if="item.count">
          <h4 class="oneprice">{{ item.name }}</h4>
          <div class="price">
            <span class="price__now">￥{{ item.price }}</span>
            <span class="price__prev">￥{{ item.oldPrice }}</span>
            <span
              class="price__subtract iconfont"
              @click="
                () => {
                  changeItemInCart(shopId, item._id, item, -1);
                }
              "
              >&#xe808;</span
            >
            <span class="price__quantity">{{ item.count || 0 }}</span>
            <span
              class="price__plus iconfont"
              @click="
                () => {
                  changeItemInCart(shopId, item._id, item, 1);
                }
              "
              >&#xe777;</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="pic">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          alt=""
          @click="handleCartShowChange"
        />
      </div>
      <div class="sum">
        <span class="text">总计：</span>
        <span class="price">￥{{ calculations.price }}</span>
      </div>
      <div class="btn">
        <router-link :to="{ path: `/orderConfirm/${shopId}` }"
          >去结算</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useCartEffect } from "../../effects/useCartEffect";
const usePriceEffect = (shopId) => {
  const store = useStore();
  const { pList, calculations, changeItemInCart } = useCartEffect(shopId);

  const changeCartItemChecked = (productId) => {
    store.commit("changeCartItemCheked", { shopId, productId });
  };
  //清空购物车
  const cleanCartProducts = (shopId) => {
    store.commit("cleanCartProducts", { shopId });
  };
  //是否选择某产品
  const setCartItemsChecked = (shopId) => {
    store.commit("setCartItemsChecked", { shopId });
  };

  console.log("calculations", calculations);
  return {
    changeCartItemChecked,
    calculations,
    setCartItemsChecked,
    cleanCartProducts,
    pList,
    changeItemInCart,
  };
};
//处理购物车显示的逻辑
const toggleCartEffect = () => {
  const showCart = ref(false);
  const handleCartShowChange = () => {
    showCart.value = !showCart.value;
  };
  return { handleCartShowChange, showCart };
};

export default {
  name: "Cart",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const {
      calculations,
      changeItemInCart,
      changeCartItemChecked,
      cleanCartProducts,
      setCartItemsChecked,
      pList,
    } = usePriceEffect(shopId);
    const { showCart, handleCartShowChange } = toggleCartEffect();
    return {
      calculations,
      pList,
      shopId,
      changeItemInCart,
      changeCartItemChecked,
      setCartItemsChecked,
      cleanCartProducts,
      handleCartShowChange,
      showCart,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
.mask {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
}
.bottom {
  display: flex;
  font-size: 0.14rem;
  line-height: 0.49rem;
}
.pic {
  position: relative;
  width: 0.76rem;
}
.pic img {
  flex: 1;
  width: 26px;
  height: 0.28rem;
  margin-left: 0.26rem;
  margin-top: 0.1rem;
}
.sum {
  flex: 1;
  line-height: 0.49rem;
  .price {
    font-size: 0.18rem;
    color: $highlight-font;
  }
}
.btn {
  flex: 1;
  position: absolute;
  right: 0;
  background-color: $login-background;
  line-height: 0.57rem;
  width: 0.98rem;
  text-align: center;
  font-size: 0.14rem;
  a {
    text-decoration: none;
    color: white;
  }
}
.cart {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: #fff;
}
.product {
  flex: 1;
  overflow-y: scroll;
  background-color: #fff;
  font-size: 0.14rem;
  &__header {
    display: flex;
    line-height: 0.52rem;
    border-bottom: 1px solid #f1f1f1;
    &__all {
      text-align: left;
      color: #0091ff;
      font-size: 0.2rem;
      width: 0.3rem;
      margin-left: 0.29rem;
      margin-right: 0.18rem;
    }
    &__text {
      text-align: left;
    }
    &__clear {
      flex: 1;
      text-align: right;
      margin-right: 0.16rem;
      &__text {
        display: inline-block;
      }
    }
  }
  &__item {
    //position: relative;
    background-color: #fff;
    display: flex;
    margin-bottom: 0.15rem;
    border-bottom: 1px solid #f1f1f1;
    position: relative;
    &__checked {
      line-height: 0.5rem;
      color: #0091ff;
      font-size: 0.2rem;
      margin-right: 0.27rem;
      margin-left: 0.28rem;
    }
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