let a = prompt("Enter first number:")

let b = prompt("Enter Second number:")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main() {
    let x = 1

    try {
        console.log("The sum is ", sum * x)
        return true
    } catch (error) {
        console.log("Error handled successfully")
        return false
    }

    // we use finally so that code in function should run after return
    finally {
        console.log("Files are being clsed");
    }
}

let c = main()