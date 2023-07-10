Seatle = {
  location: 'Seatle',
  minCos: 23,
  maxCos: 65,
  avgCookieSale: 6.3,
  simCookiesPurchased: [],
  randomFunction: function random() {
    return Math.floor(Math.random() * (this.maxCos - this.minCos) + this.minCos)
  },

  simulatedFunction: function () {
    for (let i = 6; i <= 19; i++) {
      let simValue = Math.floor(this.randomFunction() * this.avgCookieSale)
      this.simCookiesPurchased.push(simValue)


    }

  },



  displayFunction: function () {
    let ulList = document.createElement('ul')
    for (let i = 6; i <= 19; i++) {
      let hourList = document.createElement('li');
      for (let j = 0; j < this.simCookiesPurchased.length; j++) {
        let ulElment = document.createElement('ul');
        ulElment.innerHTML(this.simCookiesPurchased[j])

      }
      hourList.appendChild(ulElment)

    }
    ulList.appendChild(hourList)


  }







}
Seatle.displayFunction()
console.log(Seatle.simulatedFunction())
console.log(Seatle.simCookiesPurchased)