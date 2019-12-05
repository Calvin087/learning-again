let restaurant = {
    name: `KFC`,
    guestCapacity: 10,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    addParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

//SeatParty
//RemoveParty

restaurant.addParty(7)
console.log(restaurant.checkAvailability(8))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(10))