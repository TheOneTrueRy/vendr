import { appState } from "../AppState.js"
import { Vending } from "../Models/Vending.js"

class VendingService{
  addMoney() {
    appState.money += 500
  }

  buyItem(name){
    let product = appState.products.find(p => p.name == name)
    if(appState.money >= product.price){
      appState.money -= product.price
    }
  }

}

export const vendingService = new VendingService()