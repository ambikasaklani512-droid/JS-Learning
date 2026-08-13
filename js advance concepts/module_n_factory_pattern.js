// iife (immediately invoked function)
//module pattern for more security and private the data
let Bank = (function () {
    //always safe
    let bankBalance = 12000;

    function withdraw(val) {
        if (val <= bankBalance) {
            bankBalance -= val;
            console.log(bankBalance);
        }
    }

    function deposit(val) {
        bankBalance += val;
        console.log(bankBalance);
    }

    function checkBalance() {
        console.log(bankBalance);
    }

    // revealing module pattern - when we name our object functions
    return {
        nikalo: withdraw,
        bhejo: deposit,
        balancedekho: checkBalance
    }

})();

Bank.nikalo(1000);


//factory function pattern
// hum apne output ko function k through return krwa skte h 
function createProduct(name, price){
    let stock = 10;
    return{
        name,
        price,
        checkStock(){
            console.log(stock);
        },
        buy(qty){
            if(qty <= stock){
                stock -= qty;
                console.log(`booked - ${stock} pieces left`);
            }
            else{
                console.error(`We only have ${stock} pieces in our stock`);
            }
        },
        refill(qty){
            stock += qty;
            console.log(`refilled - ${stock} pieces in stock now.`);
        }
    }
}

// INDIVIDUAL OBJECTS DATA REMAINS OBJECT
let iphone = createProduct("iphone", 56000);
iphone.buy(20);