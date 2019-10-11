import config from '../config'

const BasketService = {
  addItemToBasket(item) {
    let basketArray = BasketService.getBasket()
    basketArray.push(item)
    let basketString = basketArray.join(',')
    window.localStorage.setItem(config.REACT_APP_BASKET_KEY, basketString)
  },
  removeItemFromBasket(itemToRemove) {
    let updatedBasket = BasketService.getBasket().filter(toolId => {
      return toolId.toString() !== itemToRemove.toString()
    })
    if(updatedBasket.length === 0) {
      BasketService.clearBasket()
    } else {
      let basketString = updatedBasket.join(',')
      window.localStorage.setItem(config.REACT_APP_BASKET_KEY, basketString)
    }
  },
  getBasket() {
    let basketString = window.localStorage.getItem(config.REACT_APP_BASKET_KEY)
    let basketArray = basketString ? basketString.split(',') : []
    return basketArray
  },
  clearBasket() {
    window.localStorage.removeItem(config.REACT_APP_BASKET_KEY)
  },
  hasItems() {
    return !!BasketService.getBasket()
  }
}

export default BasketService
