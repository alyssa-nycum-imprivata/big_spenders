import businesses from './businesses.js';

// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => {

    for (let i = 0; i < business.orders.length; i++) {
        if (business.orders[i] > 9000) {
            return businesses
        }
    }
})

console.log(bigSpenders)

