import Vuex from 'vuex'
//处理localStorage的内容
const setLocalCartlist = (state) => {
    const {cartList} = state
    localStorage.cartList = JSON.stringify(cartList)
}

const getLocalCartList = () => {
    return JSON.parse(localStorage.cartList) || {}
}
export default Vuex.createStore({
    // 1(shopId) : {
        //2(productId): {
        //}
    //}
    state: {
        cartList: getLocalCartList()
    },
    mutations: {
        //改变购物车添加减少
        changeItemInCart(state, payload) {
            const { shopId, productId, item, num } = payload
            let shop = state.cartList[shopId] || {shopName:'', productList:{}}
            let product = shop.productList[productId]
            if (!product) {
                product = item
                product.count = 0
            }
            if (product.count === 0 && num === -1) return
            product.count += num
            if (num > 0) {
                product.check = true
            } 
            if (product.count < 0) product.count = 0
            shop.productList[productId] = product//更新shop下productId属性的值
            state.cartList[shopId] = shop
            setLocalCartlist(state)
        },
        changeShopName(state, payload) {
            const { shopId, shopName} = payload
            const shopInfo = state.cartList[shopId] || {
                shopName: '', productList: {}
            } 
            shopInfo.shopName = shopName
            state.cartList[shopId] = shopInfo
            setLocalCartlist(state)
        },
        //是否选中
        changeCartItemCheked(state, payload) {
            const {shopId, productId} = payload
            const item = state.cartList[shopId].productList[productId]
            item.check = !item.check
            setLocalCartlist(state)
        }
        ,
        //清空购物车触发的函数
        cleanCartProducts(state, payload) {
            const {shopId} = payload
            state.cartList[shopId].productList = {}
            setLocalCartlist(state)
        },
        //全选按钮触发的函数
        setCartItemsChecked(state, payload) {
            const {shopId} = payload
            const products = state.cartList[shopId].productList
            if (products) {
                for (let key in products) {
                    const product = products[key]
                    product.check = true
                }
            }
            setLocalCartlist(state)
        }

    }
})