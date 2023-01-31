

export class Vending{

  constructor(name, price, img){
    this.name = name
    this.price = price
    this.img = img
  }

  get CardTemplate(){
    return`
    <div class="col-4 mt-3">
          <div class="card">
            <img src="${this.img}" alt="" class="myCardImg">
            <div class="card-body pb-1 bg-black text-light myCard">
              <div class="row">
                <div class="col-8 d-flex flex-column">
                  <span>${this.name}</span>
                  <p>$${this.price}</p>
                </div>
                <div class="col-4 d-flex align-items-center">
                  <button class="bg-black text-light" onclick="app.vendingController.buyItem('${this.name}')">BUY</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    `
  }
}