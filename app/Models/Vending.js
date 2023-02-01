
export class Vending{

  constructor(data){
    this.name = data.name
    this.price = data.price
    this.img = data.img
  }

  get CardTemplate(){
    return`
    <div class="col-4 mt-3">
          <div class="card">
            <img src="${this.img}" alt="" class="myCardImg">
            <div class="card-body pb-1 bg-black text-light myCard">
              <div class="row">
                <div class="col-8 d-flex flex-column">
                  <span class="">${this.name}</span>
                  <p class="mt-3">${this.price} V-Bucks</p>
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