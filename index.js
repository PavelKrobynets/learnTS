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
// const electricityUserData = {
//   readings: 95,
//   units: "kWt",
//   mode: "double",
// };
// const waterUserData = {
//   readings: 3,
//   units: "m3",
// };
// const elRate: number = 0.45;
// const wRate: number = 2;
// const monthPayments: number[] = [0, 0]; // [electricity, water]
// const calculatePayments = (
//   elData: { readings: number; mode: string },
//   wData: { readings: number; units: string },
//   elRate: number,
//   wRate: number
// ) => {
//   if (elData.mode === "double" && elData.readings < 50) {
//     monthPayments[0] = elData.readings * elRate * 0.7;
//   } else {
//     monthPayments[0] = elData.readings * elRate;
//   }
//   monthPayments[1] = wData.readings * wRate;
// };
// calculatePayments(electricityUserData, waterUserData, elRate, wRate);
// const sendInvoice = (
//   [el, water]: number[],
//   electricityUserData: { readings: number; units: string; mode: string },
//   waterUserData: { readings: number; units: string }
// ): string => {
//   const text = `    Hello!
//     This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
//     It will cost: ${el}€
//     This month you used ${waterUserData.readings} ${waterUserData.units} of water
//     It will cost: ${water}€`;
//   return text.trim();
// };
// const message: string | number = 5;
// const messages: string[] | number[] = ["a", "b"];
// // function printMessage (msg: string | number): void{
// // 	if(typeof(msg) == "string" || typeof(msg) == "boolean"){
// // 		console.log(msg.toLocaleLowerCase())
// // 	} else {
// // 		console.log(msg.toExponential());
// // 	}
// // }
// function printMessage(msg: string[] | number | boolean): void {
//   if (Array.isArray(msg)) {
//     msg.forEach((m) => console.log(m));
//   } else if (typeof msg == "number") {
//     console.log(msg.toFixed());
//   } else {
//     console.log(msg);
//   }
// }
// printMessage(4);
// const printReadings = (a: number | string, b: number | boolean) => {
//   if (a == b) {
//     console.log(a);
//   }
// };
// const printReadings2 = (a: number[] | string) => {
//   console.log(a.slice(0, 3));
// };
// function checkReadings(readings: { system: number } | { user: number }): void {
//   if ("system" in readings) {
//     console.log(readings.system);
//   } else {
//     console.log(readings.user);
//   }
// }
// function logValue(x: string | Date) {
//   if (x instanceof Date) {
//     console.log(x.getDate());
//   } else {
//     console.log(x.length);
//   }
// }
// const port3000: number = 3000;
// const port3001: number = 3001;
// type AnimationTimingFunc = "ease" | "ease-out" | "ease-in";
// type AnimationId = string | number;
// function createAnimation(
//   id: AnimationId,
//   animationName: string,
//   timingFunc: AnimationTimingFunc = "ease",
//   duration: number,
//   iterationCount: "infinite" | number
// ): void {
//   // const elem = document.querySelector(`#${id}`) as HTMLElement;
//   // if (elem) {
//   //   elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterationCount}`;
//   console.log(`${animationName} ${timingFunc} ${duration} ${iterationCount}`);
//   // }
// }
// const count: "infinite" = "infinite";
// createAnimation(13, "animate", "ease-out", 1000, count);
// let salary;
// salary = "dev";
// console.log(typeof salary);
// console.log(parseInt(salary));
// type Config = { protocol: "https" | "http"; port: 3001 | 3000 };
// interface IConfig {
//   protocol: "https" | "http";
//   port: 3001 | 3000;
//   log: (msg: string) => void;
// }
// // type Role = { role: string };
// // type ConfigWithRole = Config & Role
// interface IRole {
//   role: string;
// }
// interface IConfigWithRole extends IConfig, IRole {}
// const serverConfig: IConfigWithRole = {
//   protocol: "https",
//   port: 3001,
//   role: "admin",
//   log: (msg: string): void => console.log(msg),
// };
// // const backupConfig: ConfigWithRole = {
// //   protocol: "http",
// //   port: 3000,
// // 	role: "sysadmin"
// // };
// type StartFunc = (
//   protocol: "http" | "https",
//   port: 3000 | 3001,
//   log: (msg: string) => void
// ) => string;
// const startServer: StartFunc = (protocol, port, log): "Server started" => {
//   if (port) {
//     log(`Server started ${protocol}://server/${port}`);
//   } else {
//     console.log("Invalid port");
//   }
//   return "Server started";
// };
// startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);
// interface Styles {
// 	[key: string]: string;
// }
// const styles: Styles = {
// 	color: "red",
// 	position: "absolute",
// 	top: "20px",
// 	left: "20px",
// }
// interface UserData2 {
// 	isBirthdayData: boolean,
// 	ageData: number,
// 	userNameData: string
// }
// const userData2 =
//   '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';
// 	const userObj:UserData2 = JSON.parse(userData2)
// 	console.log(userObj);
// 	let isOkay = true,
// 	movement: string | boolean = false;
// 	if (isOkay) {
// 		movement = "moving"
// 	}
// interface User {
// 	readonly login: string;
// 	password: string;
// 	age: number;
// 	addr?: string;
// 	parents?: {
// 		father?: string;
// 		mother?: string;
// 	}
// }
// const user: User = {
// 	login: "Alex",
// 	password: "123",
// 	age: 25,
// }
// const userFreeze: Readonly<User> = {
// 	login: "Alex",
// 	password: "123",
// 	age: 25,
// }
// const dbName = "12345"
// function sendUserData(obj: User, bd?: string): void{
// console.log(bd?.toLocaleLowerCase());
// console.log(obj.parents?.father?.toLocaleLowerCase());
// }
// // class Animal {
// // 	readonly name : string = "name"
// // }
// // const basicPorts: readonly number[] = [3000, 3001, 3002];
// const basicPorts: readonly [number, ...string[]] = [3000, "3001", "3002"];
// const basicPortss: ReadonlyArray<number> = [3000, 3001, 3002];
// enum Directions {
//   TOP,
//   RIGHT,
//   LEFT,
//   BOTTOM,
// }
// enum TimingFunction {
//   EASE,
//   EASE_IN,
//   LINEAR,
// }
// function frame(elem: string, dir: Directions, tFunc: TimingFunction): void {
//   if (dir === Directions.RIGHT) {
//     console.log("right");
//   }
//   console.log("end");
// }
// frame("id", Directions.RIGHT, TimingFunction.EASE_IN);
// let smth: unknown;
// smth = "str";
// let data: string[] = smth;
// data.push("smth2")
// const someValue: unknown = 10;
// // someValue.method();
// function fetchData(data: unknown): void {
//   if (typeof data == "string") {
//     console.log(data.toLowerCase());
//   }
// }
// const userData: string =
//   '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';
// function saveParse(s: string): unknown {
//   return JSON.parse(s);
// }
// const data = saveParse(userData);
// function transferData(d: unknown): void{
// 	if (typeof d == "string") {
// 		console.log(d.toUpperCase());
// 	} else if(typeof d == "object" && d){
// 		console.log(d);
// 	} else {
// 		console.log("no data");
// 	}
// }
// transferData(data);
// try {
// 	if (1) {
// 		throw new Error("Error")
// 	}
// }catch(e){
// 	if (e instanceof Error) {
// 		console.log(e.message);
// 	} else if (e == 'string'){
// 		console.log(e);
// 	}
// }
// type T0 = any | unknown;
// type T1 = number | unknown;
// type T2 = string & unknown;
// const dataFromControl = {
// 	water: 200,
// 	el: 350
// }
// function checkReadings(data: typeof dataFromControl): boolean {
// 	const dataFromUser = {
// 		water: 200,
// 		el: 350
// 	}
// 	if (data.el == dataFromUser.el && data.water == dataFromUser.water) {
// 		return true
// 	} else {
// 		return false
// 	}
// }
// const PI = 3.14;
// let PIClone: typeof PI;
var fetchData = function (url, method) {
    console.log("fetched");
};
var requestOptions = {
    url: "https//someurl.com",
    method: "GET",
};
var str = "str";
var method = "GET";
// fetchData(requestOptions.url, requestOptions.method as "GET")
fetchData(requestOptions.url, requestOptions.method);
var box = document.querySelector(".box");
var input = document.querySelector("input");
var someNumber = +input.value;
console.log(someNumber);
