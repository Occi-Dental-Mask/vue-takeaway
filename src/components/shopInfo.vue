<template>
  <div class="near-item">
    <img class="near-pic" :src="item.imgUrl" alt="" />
    <div class="near-desc">
      <div class="near-desc-name">{{ item.name }}</div>
      <div class="tags">
        <span class="tag">月销{{ item.sales }}+</span>
        <span class="tag">起送￥{{ item.expressLimit }}</span>
        <span class="tag">邮费￥{{ item.expressPrice }}</span>
      </div>
      <p class="highlight">{{ item.slogan }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
}
</script>
    
<style scoped lang="scss">
    @import "../style/variables.scss";
    .near-item {
    display: flex;
    font-size: 0.16rem;
    padding-top: 0.14rem;
    .near-pic {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
    .near-desc {
      flex: 1;
      .near-desc-name {
        line-height: 22px;
      }
      .tags {
        font-size: 0.13rem;
        margin-top: 0.08rem;
        .tag {
          margin-right: 0.16rem;
        }
      }
      .highlight {
        margin: 0.08rem 0 0 0;
        font-size: 0.13rem;
        color: $highlight-font;
      }
    }
  }
</style>