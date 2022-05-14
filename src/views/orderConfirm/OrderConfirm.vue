<template>
  <div class="top">
    <div class="top__bgcolor"></div>
    <div class="top__header">
      <div class="iconfont top__header__back">&#xe679;</div>
      确认订单
    </div>
    <div class="top__receive">
      <div class="top__receive__title">收货地址</div>
      <div class="top__receive__address">北京理工大学</div>
      <div class="top__receive__info">
        <span class="name">瑶妹</span>
        <span class="phone">133333</span>
      </div>
      <div class="iconfont top__receive__icon">&#xe679;</div>
    </div>
  </div>
  <div class="products">
    <div class="products__title">{{shopName}}</div>
    <div class="products__list">
      <div class="products__item" v-for="item in pList" :key="item._id">
        <img :src="item.imgUrl" alt="" />
        <div class="des">
          <h4 class="oneprice">{{ item.name }}</h4>
          <div class="price">
            <span class="price__single"
              >&yen;{{ item.price }} x {{ item.count }}</span
            >
            <span class="price__all"
              >&yen;{{ (item.price * item.count).toFixed(2) }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="order">
    <div class="order__left">实付金额 <b>&yen; {{calculations.price}}</b></div>
    <div class="order__right">提交订单</div>
  </div>
</template>

<script>
import { useCartEffect } from "../../effects/useCartEffect";
import { useRoute } from "vue-router";
export default {
  name: "OrderConfirm",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { pList, shopName, calculations } = useCartEffect(shopId);
    return { pList, shopName, calculations };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
* {
  font-size: 0.14rem;
}
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 50%);
  background-repeat: no-repeat;
  &__header {
    position: relative;
    padding-top: 0.26rem;
    line-height: 0.24rem;
    font-size: 0.16rem;
    color: white;
    text-align: center;
    &__back {
      position: absolute;

      left: 0.18rem;
    }
  }
  &__receive {
    position: absolute;
    left: 0.18rem;
    right: 0.18rem;
    bottom: 0;
    height: 1.11rem;
    background: #fff;
    border-radius: 0.04rem;
    &__title {
      line-height: 0.22rem;
      padding: 0.16rem 0 0.14rem 0.16rem;
      font-size: 0.16rem;
      color: #333;
    }
    &__address {
      line-height: 0.2rem;
      padding: 0 0.4rem 0 0.16rem;
      font-size: 0.14rem;
      color: #333;
    }
    &__info {
      padding: 0.06rem 0 0 0.16rem;
      &__name {
        margin-right: 0.06rem;
        line-height: 0.18rem;
        font-size: 0.12rem;
        color: #666;
      }
    }
    &__icon {
      transform: rotate(180deg);
      position: absolute;
      right: 0.16rem;
      top: 0.5rem;
      color: #666;
      font-size: 0.2rem;
    }
  }
}
.products {
  margin: 0.16rem 0.18rem 0.55rem 0.18rem;
  background-color: #fff;
  &__title {
    padding: .16rem .16rem 0 0;
    font-size: .16rem;
    color: #333
  }
  &__item {
    display: flex;
    margin-bottom: 0.12rem;
    margin-top: 0.16rem;
    border-bottom: 1px solid #f1f1f1;
    position: relative;
    img {
      width: 0.46rem;
      height: 0.46rem;
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
        display: flex;
        margin-bottom: 0.06rem;
        &__single {
          flex:1;
          width: 2rem;
          color: $highlight-font;
        }
        &__all {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}
.order {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 0.49rem;
  line-height: 0.49rem;
  &__left {
    flex: 1;
    padding-left: .16rem;
    color:#333;
  }
  &__right {
    flex: 1;
    color: #fff;
    text-align: center;
    width: 0.98rem;
    background-color: #4fb0f9;
  }
}
</style>