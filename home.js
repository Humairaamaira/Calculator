// var nama = "Humaira" //string
// var nama = 10 //number
// var nama = "10" //string
// var namas = ["humaira", "falah"] //array
// var data = { name: "humaira", age: "23" } //object

// var //dulu
// const, let //let

// const: global
// let: temporary

function buttonNumber(number) {
    console.log(number);
    let tempData = document.getElementById("ipt-2").innerHTML;
    if (tempData.length > 0) {
        if (tempData.includes(".")) {
            if (number === ".") {
                return;
            } else {
                document.getElementById("ipt-2").innerHTML = tempData + number;
            }
        } else if (tempData == 0) {
            if (number === ".") {
                document.getElementById("ipt-2").innerHTML = tempData + number;
            } else {
                document.getElementById("ipt-2").innerHTML = number;
            }
        } else {
            document.getElementById("ipt-2").innerHTML = tempData + number;
        }
    } else {
        if (number === ".") {
            document.getElementById("ipt-2").innerHTML = "0" + number;
        } else {
            document.getElementById("ipt-2").innerHTML = number;
        }
    }
}

function buttonOperation(operation) {
    if (operation === 'AC') {
        document.getElementById("ipt-2").innerHTML = "";
    }

}



// 8 == "8" true
// 8 == 8 true
// 8 === "8" false
// 8 === 8 true