const data = {
    locations: [],
    get location() {
        return this._location
    },
    set location(value) {
        value = value.trim()
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

data.location = '   Madrid'
data.location = 'New York '
data.location = 'Coulsdon n York '
console.log(data)