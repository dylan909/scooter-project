class Scooter{
  // scooter code here
  constructor(station, user){
    this.station = station
    this.user = user
    this.serial = Math.floor(Math.random() * 1000)
    this.charge = Math.floor(Math.random() * 100)
    this.isBroken = false
    this.docked = true
  }

  rent(){
    if (this.isBroken === false && this.charge > 20){
      console.log("Enjoy the ride!")
      this.docked = false
    }
    else if (this.isBroken === false && this.charge <= 20){
      throw "Scooter low on battery, please charge."
    }
    else{
      throw 'Scooter is broken, please send a repair request.'
    }
  }
  dock(stationNew){
    if (stationNew === undefined){
      throw  "Docking station required!"
    }

    this.station = stationNew

    this.docked === false

    this.user = ''
  }

  async reCharge() {
    console.log('Starting charge');
    
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100

    console.log('Charge complete');   
  }

  async requestRepair() {
      console.log('Starting repair');
      
      await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
      this.isBroken = false
  
      console.log('Repair has been completed!');   
  }
}
//let user1 = {username: 'dylan909', password: 'password', age:20}
//let newScooter = new Scooter('Kings Cross', user1)
//console.log(newScooter)

//newScooter.charge()

//console.log(newScooter)
module.exports = Scooter
