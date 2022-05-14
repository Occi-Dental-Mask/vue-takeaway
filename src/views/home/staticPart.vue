<template>
  <div class="address">
    <span class="iconfont address__iconl">&#xe6db;</span>
    浙江大学紫金港校区白沙菜鸟驿站
    <span class="iconfont address__iconr">&#xe887;</span>
  </div>
  <div class="search">
    <div class="iconfont">&#xe600;</div>
    山姆会员店优惠商品
  </div>
  <div class="pic">
    <img
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
    />
  </div>
  <div class="icons">
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
      />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
      />
      <p class="icons__item__desc">菜市场</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/水果店.png"
      />
      <p class="icons__item__desc">水果店</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/蛋糕.png"
      />
      <p class="icons__item__desc">烘焙蛋糕</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
      />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
      />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/鲜花.png"
      />
      <p class="icons__item__desc">鲜花绿植</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/大牌免运.png"
      />
      <p class="icons__item__desc">大牌免运</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
      />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/near.png"
      />
      <p class="icons__item__desc">附近店铺</p>
    </div>
  </div>
  <div class="tab"></div>
</template>

<script>
export default {
  name: "staticPart",
};
</script>

<style scoped lang='scss'>
@import "../../style/mixins.scss";
@import "../../style/variables.scss";
.address {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0rem;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .address__iconl {
    position: relative;
    top: 0.03rem;
    font-size: 0.3rem;
    margin-right: 0.08rem;
  }
  .address__iconr {
    position: absolute;
    right: 0;
    font-size: 20px;
    top: 0.18rem;
    margin-left: 0.22rem;
  }
}
.search {
  line-height: 30px;
  font-size: 16px;
  border: 1px solid rgb(168, 163, 163);
  border-radius: 8px;
  color: lightgray;
  .iconfont {
    display: inline-block;
    padding-left: 8px;
  }
}
.pic {
  overflow: hidden;
  height: 0;
  padding-bottom: 25.4%;
  padding-top: 8px;
  .banner__img {
    width: 100%;
  }
}

.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      margin: 0 auto;
      width: 0.4rem;
      height: 0.4rem;
    }
    &__desc {
      font-size: 16px;
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
    }
  }
}
.tab {
  height: 0.2rem;
  background-color: $backgroud-color;
  margin: 0 -0.18rem 0 -0.18rem;
}
</style>