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

