import { Value } from "./Models/Value.js"
import { Vending } from "./Models/Vending.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Vending').Vending[]} */
  products = [
    new Vending(
      {
        name: 'Fresh',
        price: 800,
        img: 'https://th.bing.com/th/id/OIP.JlGAZmAmXn2zDvbom46W3gHaHa?pid=ImgDet&rs=1'
      }
    ),
    new Vending(
      {
        name: 'Orange Justice',
        price: 500,
        img: 'https://i0.wp.com/fortniteskins.net/wp-content/uploads/2018/05/orange-justice-emote-hd.png?fit=750%2C710&quality=90&strip=all&ssl=1&quality=100'
      }
    ),
    new Vending(
      {
        name: 'Pumpernickel',
        price: 500,
        img: 'https://th.bing.com/th/id/OIP.Qu1KiKdtZAv1SqrLHAAIcwHaHa?pid=ImgDet&rs=1'
      }
    ),
    new Vending(
      {
        name: 'Intensity',
        price: 800,
        img: 'https://i1.wp.com/fortniteskins.net/wp-content/uploads/2018/08/intensity-emote-hd.png?fit=750%2C710&quality=90&strip=all&ssl=1&resize=660%2C660&quality=100'
      }
    ),
    new Vending(
      {
        name: 'Deep Dab',
        price: 200,
        img: 'https://progameguides.com/wp-content/uploads/2019/06/fortnite-emote-deep-dab.jpg'
      }
    ),
    new Vending(
      {
      name: 'Wu-Tang',
      price: 300,
      img: 'https://progameguides.com/wp-content/uploads/2022/04/fortnite-emote-wu-tang-is-forever.jpg?w=768'
      }
    ),
    new Vending(
      {
        name: 'Frolic',
        price: 500,
        img: 'https://fortnite.gg/img/items/6134/bg.jpg?2'
      }
    ),
    new Vending(
      {
        name: 'Squat Kick',
        price: 800,
        img: 'https://th.bing.com/th/id/OIP.tafUvGtwATu87tYBpiyoywHaHa?pid=ImgDet&rs=1'
      }
    ),
  ]

  /** @type {Number} */
  money = 0
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
