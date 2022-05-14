<template>
  <div class="near">
    <h3 class="nearby-title">附近店铺</h3>
    <router-link 
      v-for="item in NearbyList" 
      :to="`/shop/${item._id}`"
      :key="item._id" >
      <ShopInfo :item="item"/>
    </router-link>
    
  </div>
</template>

<script>
import { get } from "../../utils/request";
import { ref } from "vue";
import ShopInfo from '../../components/shopInfo.vue'
const useNearbyList = () => {
  const NearbyList = ref([]);
  const getNearby = async () => {
    const result = await get("/api/shop/hot-list");
    // 经过ref包裹的对象，本身其实是ref对象的value属性
    NearbyList.value = result.data;
  }
  return { NearbyList, getNearby }
}
export default {
  name: "nearby",
  components: {ShopInfo},
  setup() {
    const { NearbyList, getNearby } = useNearbyList();
    getNearby()
    return { NearbyList, getNearby }
  },
};
</script>

<style lang="scss">
@import "../../style/mixins.scss";
@import "../../style/variables.scss";
.near {
  .nearby-title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    color: $content-color;
  }
  a {
    text-decoration: none;
  }
  
}
</style>