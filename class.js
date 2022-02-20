class Support {
    designation = 'Support Web Dev'
    constructor(name, address) {
        this.name = name
        this.address = address
    }
    startSession() {
        console.log(this.name, ': Start a support session')
    }
}

const Amir = new Support('Amir Ahmed', 'Bd')
const Mamun = new Support('Abdullah Al Mamun', 'Canada')
console.log(Amir, Mamun)
Amir.startSession()
Mamun.startSession()
