import { useStore } from "vuex";
import { computed} from "vue"
export const useCartEffect = (shopId) => {
  const store = useStore();
  //const { cartList } = toRefs(store.state);为什么这个不对？？？
  const cartList = store.state.cartList;
  const changeItemInCart = (shopId, productId, item, num) => {
    store.commit("changeItemInCart", { shopId, productId, item, num });
  }; 
  const pList = computed(() => {
    return cartList[shopId]?.productList || []
  });
  const shopName = computed(() => {
    return cartList[shopId]?.shopName || ''
  })
  const calculations = computed(() => {
    const productList = cartList[shopId]?.productList
    const result = { total: 0, price: 0, allChecked: true}
    if(productList) {
       for(let i in productList) {
         const product = productList[i]
         result.total += product.count
         if(product.check) {
           result.price += (product.count * product.price)
         }
         if(product.count > 0 && !product.check) {
           result.allChecked = false
         }
      }
    }
    result.price = result.price.toFixed(2)
    return result
  })

  return { cartList, changeItemInCart, pList, shopName, calculations};
};