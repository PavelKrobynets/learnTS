// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "Alex";
// function logBrtMsg (isBirthday: boolean, userName: string, age: number): void {
// 	if(isBirthday){
// 		console.log(`Congrats ${userName}, age ${age + 1}`);
// 	}
// }
// const userData =
//   "{'isBirthdayData': true, ''ageData': 40, 'userNameData': 'John'}";
// 	const userDataJson: {
// 		isBirthdayData: boolean;
// 		ageData: number;
// 		userNameData: string;
// 	} = JSON.parse(userData);
// const logBrtMsg = (
//   isBirthday: boolean,
//   userName: string,
//   age: number
// ): void => {
//   if (isBirthday) {
//     console.log(`Congrats ${userName}, age ${age + 1}`);
//   }
// };
// logBrtMsg(isBirthdayData, userNameData, ageData);
// const currRate: string = "1.05";
// const fetchCurr = (response: string): number => {
//   const data: number = JSON.parse(response);
//   return data;
// };
// function transferEurToUsd(
//   available: boolean,
//   amount: number,
//   commission: number
// ): void {
//   if (available) {
//     let res: number = fetchCurr(currRate) * amount * commission;
//     console.log(res);
//     // Или запись в элемент на странице вместо консоли
//   } else {
//     console.log("Сейчас обмен недоступен");
//   }
// }
// transferEurToUsd(true, 500, 1.05);
// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "Alex";
// const createError = (message: string) => {
// 	throw new Error(message);
// }
// Type never will throw back in never ending func or recursive never ending func
// const neverEndingFunc = (message: string) => {
// while(true){
// }
// }
// const logBrtMsg = (
//   isBirthday: boolean,
//   userName: string,
//   age: number
// ): string => {
//   if (isBirthday == true) {
//     return `Congrats ${userName}, age ${age + 1}`
//   } else {
// 		return createError("Error");
// 	}
// };
// const test: null = null;
// const test2: any = null;
// Errors
// const test3: number = null/undefined;
// const test4: string = null/undefined;
// const test5: boolean = null/undefined;
// function getRndData() {
// 	if(Math.random() < 0.5){
// 		return null;
// 	} else {
// 		return "   Some string     ";
// 	}
// }
// const data = getRndData();
// const trimmerData = data?.trim();
// let id: symbol = Symbol("id")
// const data = {
// 	[id]: 1
// }
// console.log(data[id]);
// const num1: bigint = 1n;
// const departments: string[] = ["dev", "design", "marketing"];
// const test: {}[] = [{}, {}, {}];
// const test2L: number[][][] = [
//   [[41, 18], [], []],
//   [[], [13, 54], []],
// ];
// const report = departments
//   .filter((d: string) => d != "dev")
//   .map((d: string) => `${d} - done`);
// const [first] = report;
// const [second] = report;
// console.log(first);
// console.log(second);
var electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
};
var waterUserData = {
    readings: 3,
    units: "m3",
};
var elRate = 0.45;
var wRate = 2;
var monthPayments = [0, 0]; // [electricity, water]
var calculatePayments = function (elData, wData, elRate, wRate) {
    if (elData.mode === "double" && elData.readings < 50) {
        monthPayments[0] = elData.readings * elRate * 0.7;
    }
    else {
        monthPayments[0] = elData.readings * elRate;
    }
    monthPayments[1] = wData.readings * wRate;
};
calculatePayments(electricityUserData, waterUserData, elRate, wRate);
var sendInvoice = function (_a, electricityUserData, waterUserData) {
    var el = _a[0], water = _a[1];
    var text = "    Hello!\n    This month you used ".concat(electricityUserData.readings, " ").concat(electricityUserData.units, " of electricity\n    It will cost: ").concat(el, "\u20AC\n    \n    This month you used ").concat(waterUserData.readings, " ").concat(waterUserData.units, " of water\n    It will cost: ").concat(water, "\u20AC");
    return text.trim();
};
var message = 5;
var messages = ["a", "b"];
// function printMessage (msg: string | number): void{
// 	if(typeof(msg) == "string" || typeof(msg) == "boolean"){
// 		console.log(msg.toLocaleLowerCase())
// 	} else {
// 		console.log(msg.toExponential());
// 	}
// }
function printMessage(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(function (m) { return console.log(m); });
    }
    else if (typeof msg == "number") {
        console.log(msg.toFixed());
    }
    else {
        console.log(msg);
    }
}
printMessage(4);
var printReadings = function (a, b) {
    if (a == b) {
        console.log(a);
    }
};
var printReadings2 = function (a) {
    console.log(a.slice(0, 3));
};
function checkReadings(readings) {
    if ("system" in readings) {
        console.log(readings.system);
    }
    else {
        console.log(readings.user);
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.getDate());
    }
    else {
        console.log(x.length);
    }
}
var port3000 = 3000;
var port3001 = 3001;
function startServer(protocol, port) {
    if (port == port3000 || port == port3001) {
        console.log("Server started ".concat(protocol, "://server/").concat(port));
    }
    else {
        console.log("Invalid port");
    }
    return "Server started";
}
startServer("https", 3000);
function createAnimation(id, animationName, timingFunc, duration, iterationCount) {
    if (timingFunc === void 0) { timingFunc = "ease"; }
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    // if (elem) {
    //   elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterationCount}`;
    console.log("".concat(animationName, " ").concat(timingFunc, " ").concat(duration, " ").concat(iterationCount));
    // }
}
createAnimation(13, "animate", "ease-out", 1000, 5);
