import { appState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";
import { setHTML, setText } from "../Utils/Writer.js";
import { Pop } from "../Utils/Pop.js";

function _drawMoney(){
  let money = appState.money
  setText('total', money)
}

function _drawProducts(){
  let products = appState.products
  let template = ''
  products.forEach(product => {
    template += product.CardTemplate
  })
  setHTML('shop', template)
}

export class VendingController{
  constructor(){
    _drawMoney()
    appState.on('money', _drawMoney)
    _drawProducts()
  }

  addMoney(){
  vendingService.addMoney()
  }

  buyItem(name){
    vendingService.buyItem(name)
  }
}