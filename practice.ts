// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "Alex";

// const userData = {
//   isBirthdayData: true,
//   ageData: 40,
//   userNameData: "Alex",
//   messages: {
//     error: "Error",
//   },
// };

// const userDataTuple: [boolean, number, ...string[]] = [
//   true,
//   40,
//   "John",
//   "Alex",
//   "Liza",
// ];

// const [birthday, age, nameData] = userDataTuple;

// const createError = (message: string) => {
//   throw new Error(message);
// };

// const logBrtMsg = ({
//   isBirthdayData,
//   ageData,
//   userNameData,
//   messages: { error },
// }: {
//   isBirthdayData: boolean;
//   ageData: number;
//   userNameData: string;
//   messages: { error: string };
// }): string => {
//   if (isBirthdayData) {
//     return `Congrats ${userNameData}, age ${ageData + 1}`;
//   } else {
//     return createError(error);
//   }
// };

// logBrtMsg(userData);

// interface IConfig {
//   protocol: "https" | "http";
//   port: 3001 | 3000;
//   log: (msg: string) => void;
// }

// interface IConfig {
// 	date: Date
// }

// // type Role = { role: string };
// // type ConfigWithRole = Config & Role

// interface IRole {
//   role: string;
// }

// interface IConfigWithRole extends IConfig, IRole {}

// const serverNewConfig: IBasicConfig = {
//   protocol: "https",
//   port: 3001
// };

// const backupConfig: IBasicConfig = {
//   protocol: "http",
//   port: 3000,
// };

// interface IBasicConfig{
// 	protocol: "https" | "http",
// 	port: 3000 | 3001
// }

// const startNewServer = (config: IBasicConfig): "Server started" => {
//   if (config.port) {
//     console.log(`Server started ${config.protocol}://server/${config.port}`);
//   } else {
//     console.log("Invalid port");
//   }
//   return "Server started";
// };

// startNewServer(serverNewConfig);
// startNewServer(backupConfig);

// type StandardType = "empty" | number;

// // структура данных склада с одеждой

// interface ClothesWarehouse {
//   jackets: StandardType;
//   hats: StandardType;
//   socks: StandardType;
//   pants: StandardType;
// }

// // структура данных склада с канцтоварами

// interface StationeryWarehouse {
//   scissors: StandardType;
//   paper: "empty" | boolean;
// }

// // структура данных склада с бытовой техникой

// interface AppliancesWarehouse {
//   dishwashers: StandardType;
//   cookers: StandardType;
//   mixers: StandardType;
// }

// // общая структура данных, наследует все данные из трех выше
// // + добавляет свои

// interface TotalWarehouse
//   extends ClothesWarehouse,
//     StationeryWarehouse,
//     AppliancesWarehouse {
//   deficit: boolean;
//   date: Date;
// }

// // главный объект со всеми данными, должен подходить под формат TotalWarehouse

// const totalData: TotalWarehouse = {
//   jackets: 5,
//   hats: "empty",
//   socks: "empty",
//   pants: 15,
//   scissors: 15,
//   paper: true,
//   dishwashers: 3,
//   cookers: "empty",
//   mixers: 14,
//   date: new Date(1996, 8, 19),
//   deficit: false,
// };

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

// type Tdata = (
// 	jackets: "empty" | number,
// 	hats: "empty" | number,
// 	socks: "empty" | number,
// 	pants: "empty" | number,
// 	scissors: "empty" | number,
// 	paper: "empty" | boolean,
// 	dishwashers: "empty" | number,
// 	cookers: "empty" | number,
// 	mixers: "empty" | number,
// 	deficit: boolean,
// 	date: Date,
// ) => string;

// function printReport(data: TotalWarehouse): string {
// 	const result: string = Object.entries(data)
// 		.filter((item) => item[1] === "empty")
// 		.reduce((res, item) => `${res} ${item[0]},`, "");

// 	if (result.trim().length) {
// 		return `We need this items:${result.slice(0, -1)}`;
// 	} else {
// 		return "Everything fine";
// 	}
// }

// const printReport = (data: TotalWarehouse): string => {
//   const emptyItems = Object.keys(data).filter(
//     (key) => data[key as keyof typeof data] === "empty"
//   );
//   if (emptyItems) {
//     return `We need this items: ${emptyItems.join(", ")}`;
//   } else {
//     return "Everything fine";
//   }
// };

// console.log(printReport(totalData));

//---------------------------------------------------------------------------------------------------------------

// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
// enum TypesOfMedia {
//   VIDEO = "video",
//   AUDIO = "audio",
// }

// // Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM

// enum FormatsOfMedia {
//   MP4 = ".mp4",
//   MOV = ".mov",
//   MKV = ".mkv",
//   FLV = ".flv",
//   WEBM = ".webM",
// }

// // Описание интерфейса, в котором:
// // name - строка
// // type - один из перечисления выше
// // format = один из перечисления выше
// // subtitles - необязательное поле типа строка
// // marks - необязательное поле неизвестного типа

// interface Media {
//   name: string;
//   type: TypesOfMedia;
//   format: FormatsOfMedia;
//   subtitles?: string;
//   marks?: unknown;
// }

// function playMedia(
//   { name, type, format, subtitles, marks }: Media = {
//     name: "example",
//     type: TypesOfMedia.VIDEO,
//     format: FormatsOfMedia.MP4,
//   }
// ): string {
//   let marksLog: string;

//   // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
//   // Если это строка, то просто поместить её в marksLog
//   // Если что-то другое - то marksLog = "Unsupported type of marks"
//   // Не допускайте any!

//   if (Array.isArray(marks)) {
//     marksLog = marks.join(" ");
//   } else if (typeof marks == "string") {
//     marksLog = marks;
//   } else {
//     marksLog = "Unsupported type of marks";
//   }

//   console.log(`Media ${name}${format} is ${type}
//     Marks: ${marksLog}
//     Subtitles: ${subtitles ?? "none"}`);
//   // помните что это за оператор ??

//   return "Media started";
// }
// playMedia({
//   name: "WoW",
//   format: FormatsOfMedia.MP4,
//   type: TypesOfMedia.VIDEO,
//   subtitles: "hmhmhm hmhmhm doh",
//   marks: ["4:30", "5:40"],
// });

//-----------------------------------------------------------------------

// type Animal = "cat" | "dog" | "bird";

// enum Status {
//   Available = "available",
//   NotAvailable = "not available",
// }

// interface Request {
//   animal: Animal;
//   breed: string;
//   sterilized?: string;
// }

// interface AnimalAvailableData extends Request {
//   location: string;
//   age?: number;
// }

// interface AnimaNotAvailableData {
//   message: string;
//   nextUpdateIn: Date;
// }

// interface AnimalAvailableResponse {
// 	status: Status.Available,
// 	data: AnimalAvailableData;
// }

// interface AnimalNotAvailableResponse {
// 	status: Status.NotAvailable,
// 	data: AnimaNotAvailableData;
// }

// type AnimalResponse = AnimalAvailableResponse | AnimalNotAvailableResponse;

// function isAvailable(res: AnimalResponse): res is AnimalAvailableResponse {
// 	if (res.status === "available") {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// function checkAnimalData(animal: AnimalResponse): AnimalAvailableData | string {
//   if (isAvailable(animal)) {
//     return animal.data
//   } else {
//     return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
//   }
// }

//-----------------------------------------------------------------------------

// interface IFormData {
//   email: string;
//   title: string;
//   text: string;
//   checkbox: boolean;
// }

// const formData: IFormData = {
//   email: "",
//   title: "",
//   text: "",
//   checkbox: false,
// };

// const email = document.querySelector("#email") as HTMLInputElement,
//   checkbox = document.querySelector("#checkbox") as HTMLInputElement,
//   title = document.querySelector("#title") as HTMLInputElement,
//   text = document.querySelector("#text") as HTMLTextAreaElement;

// // Последовательность действий:
// // 1) Происходит submit любой из форм
// // 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// // 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// // 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

// function onSubmitForm(
//   email: string,
//   title: string,
//   text: string,
//   checkbox: boolean
// ): void {
// 	formData.email = email;
// 	formData.title = title;
// 	formData.text = text;
// 	formData.checkbox = checkbox;

// 	validateFormData(formData);
// }

// function validateFormData(data: IFormData): boolean {
//   // Если каждое из свойств объекта data правдиво...
//   if (Object.values(data).every(Boolean)) {
// 		checkFormData(formData)
//     return true;
//   } else {
//     console.log("Please, complete all fields");
//     return false;
//   }
// }

// function checkFormData(data: IFormData) {
//   const { email } = data;
//   const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

//   // Если email совпадает хотя бы с одним из массива
//   if (emails.includes(email)) {
//     console.log("This email is already exist");
//   } else {
//     console.log("Posting data...");
//   }
// }

// onSubmitForm(email.value,  title.value, text.value, checkbox.checked);

// interface PlayerData<Game, Hours> {
//   game: Game;
//   hours: Hours;
//   server: string;
// }

// const player1: PlayerData<string, number> = {
//   game: "CS GO",
//   hours: 300,
//   server: "basic",
// };
// const player2: PlayerData<number, string> = {
//   game: 2048,
//   hours: "300 h.",
//   server: "arcade",
// };
// const player3: PlayerData<string, object> = {
//   game: "Chess",
//   hours: {
//     total: 500,
//     inMenu: 50,
//   },
//   server: "chess",
// };

// // Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// // Каждый объект может еще содержать дополнительные свойства в случайном виде
// // Свойство name может иметь только 4 варианта
// // Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// // Возвращает она объект-экземпляр AmountOfFigures
// // Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// // С текущими данными в консоль должно попадать:
// // { squares: 3, circles: 2, triangles: 2, others: 1 }

// interface AmountOfFigures {
//   squares: number;
//   circles: number;
//   triangles: number;
//   others: number;
// }
// type FigureName = "rect" | "triangle" | "line" | "circle";

// interface Figure {
//   name: string,
// }

// function calculateAmountOfFigures<T extends Figure>(figure: T[]): AmountOfFigures {
//   const result: AmountOfFigures = {
//     squares: 0,
//     circles: 0,
//     triangles: 0,
//     others: 0,
//   };
//   figure.forEach((item) => {
//     switch (item.name) {
//       case "rect":
//         result.squares++;
//         break;
//       case "triangle":
//         result.triangles++;
//         break;
//       case "line":
//         result.others++;
//         break;
//       case "circle":
//         result.circles++;
//         break;
// 			default:
// 				break;
//     }
//   });
// 	return result;
// }

// const data = [
//   {
//     name: "rect",
//     data: { a: 5, b: 10 },
//   },
//   {
//     name: "rect",
//     data: { a: 6, b: 11 },
//   },
//   {
//     name: "triangle",
//     data: { a: 5, b: 10, c: 14 },
//   },
//   {
//     name: "line",
//     data: { l: 15 },
//   },
//   {
//     name: "circle",
//     data: { r: 10 },
//   },
//   {
//     name: "circle",
//     data: { r: 5 },
//   },
//   {
//     name: "rect",
//     data: { a: 15, b: 7 },
//   },
//   {
//     name: "triangle",
//   },
// ];

// console.log(calculateAmountOfFigures(data));

// interface IPhone {
//   company: string;
//   number: number;
// }

// // IMobilePhone должен наследоваться от IPhone,
// // тип свойства companyPartner зависит от свойства company

// interface IMobilePhone extends IPhone {
//   size: string;
//   companyPartner: IPhone["company"];
//   manufactured: Date;
// }

// // Типизировать объект phones

// const phones: IMobilePhone[] = [
//   {
//     company: "Nokia",
//     number: 1285637,
//     size: "5.5",
//     companyPartner: "MobileNokia",
//     manufactured: new Date("2022-09-01"),
//   },
//   {
//     company: "Samsung",
//     number: 4356637,
//     size: "5.0",
//     companyPartner: "SamMobile",
//     manufactured: new Date("2021-11-05"),
//   },
//   {
//     company: "Apple",
//     number: 4552833,
//     size: "5.7",
//     companyPartner: "no data",
//     manufactured: new Date("2022-05-24T12:00:00"),
//   },
// ];

// interface IPhonesManufacturedAfterDate extends IMobilePhone {
//   initialDate: string;
// }

// Функция должна отфильтровать массив данных и вернуть новый массив
// с телефонами, выпущенными после даты в третьем аргументе

// function filterPhonesByDate<T extends IMobilePhone, K extends keyof T>(
// 	phones: T[],
// 	key: K,
// 	initial: string
// ):  IPhonesManufacturedAfterDate[] {
// 	const date : Date = new Date(initial);
// 	return phones.filter((phone) => {
// 		const manufactured = phone[key];
// 		if (manufactured instanceof Date && manufactured > date) {
// 			return phone;
// 		}
// 	})
// 	.map(phone => {
// 		const newObj = {
// 			...phone,
// 			initialDate: initial
// 		}
// 		return newObj as IPhonesManufacturedAfterDate
// 	})
// }

// function filterPhonesByDate<T extends IMobilePhone, K extends keyof T>(
//   phones: T[],
//   key: K,
//   initial: string
// ): IPhonesManufacturedAfterDate[] {
//   const date: Date = new Date(initial);
//   return phones
//     .filter((phone) => phone[key] > date)
//     .map((phone) => {
//       const newObj = {
//         ...phone,
//         initialDate: initial,
//       };
//       return newObj as IPhonesManufacturedAfterDate;
//     });
// }

// // Второй аргумент при вызове функции должен быть связан с первым,
// // а значит мы получим подсказки - свойства этого объекта

// console.log(filterPhonesByDate(phones, "manufactured", "2022-01-01"));

// Необходимо типизировать этот большой объект
// Свойство futureClasses должно быть в зависимости от classes по типу
// Свойства exClients и futureClients тоже должны быть в зависимости от currClients
// ИЛИ все три зависят от общего родителя

// Простыми словами: при добавлении свойства в целевой объект они должны быть
// автоматически добавлены в зависимые (сразу подсказка от TS)

interface IFitnessCenter {
  clubName: string;
  location: string;
  classes: IClasses[];
  futureClasses: IFutureClasses[];
  currClients: IClients[];
  exClients: IExClients[];
  futureClients: IFutureClients[];
}

interface IClasses {
  name: string;
  startsAt: string;
  duration: number;
}

interface IFutureClasses extends Omit<IClasses, "startsAt"> {
  willStartsAt: string;
}

interface IClients {
  name: string;
  age: number | string;
  gender: "male" | "female";
  timeLeft: string;
}

interface IExClients extends Omit<IClients, "timeLeft"> {
  makeCallFor: Date;
}

interface IFutureClients extends Pick<IExClients, "name" | "makeCallFor"> {}

const fitnessClubCenter: IFitnessCenter = {
  clubName: "Fitness club Center",
  location: "central ave. 45, 5th floor",
  classes: [
    {
      name: "yoga",
      startsAt: "8:00 AM",
      duration: 60,
    },
    {
      name: "trx",
      startsAt: "11:00 AM",
      duration: 45,
    },
    {
      name: "swimming",
      startsAt: "3:00 PM",
      duration: 70,
    },
  ],
  futureClasses: [
    {
      name: "boxing",
      willStartsAt: "6:00 PM",
      duration: 40,
    },
    {
      name: "breath training",
      willStartsAt: "8:00 PM",
      duration: 30,
    },
  ],
  currClients: [
    {
      name: "John Smith",
      age: "-",
      gender: "male",
      timeLeft: "1 month",
    },
    {
      name: "Alise Smith",
      age: 35,
      gender: "female",
      timeLeft: "3 month",
    },
    {
      name: "Ann Sonne",
      age: 24,
      gender: "female",
      timeLeft: "5 month",
    },
  ],
  exClients: [
    {
      name: "Tom Smooth",
      age: 50,
      gender: "male",
      makeCallFor: new Date("2023-08-12"),
    },
  ],
  futureClients: [
    {
      name: "Maria",
      makeCallFor: new Date("2023-07-10"),
    },
  ],
};

//---------------------------------------------------------

interface ISlider {
  container?: string;
  numberOfSlides?: number;
  speed?: 300 | 500 | 700;
  direction?: "horizontal" | "vertical";
  dots?: boolean;
  arrows?: boolean;
  animationName?: string;
}

function createSlider({
  container = "",
  numberOfSlides = 1,
  speed = 300,
  direction = "horizontal",
  dots = true,
  arrows = true,
}: ISlider = {}): void {
  console.log(container, numberOfSlides, speed, direction, dots, arrows);
}

createSlider();

// Необходимо типизировать объект настроек, который будет зависим
// от интерфейса ISlider
// Все поля в нем обязательны для заполнения

interface ICustomSliderOptions extends Required<ISlider> {}

const customSliderOptions: ICustomSliderOptions = {
  container: "id",
  numberOfSlides: 4,
  speed: 500,
  direction: "horizontal",
  dots: true,
  arrows: true,
  animationName: "fade",
};

function createCustomSlider(options: any): void {
  if ("container" in options) {
    console.log(options);
  }
}

//------------------------------------------------------------------------

interface IForm {
  login: ILogin;
  password: IPassword;
}

interface ILogin {
  isValid: boolean;
  errorMsg: string;
}

interface IPassword {
  isValid: boolean;
}
// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

const validationData: IForm = {
  login: { isValid: false, errorMsg: "At least 3 characters" },
  password: { isValid: true },
};
