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

interface PlayerData<Game, Hours> {
  game: Game;
  hours: Hours;
  server: string;
}

const player1: PlayerData<string, number> = {
  game: "CS GO",
  hours: 300,
  server: "basic",
};
const player2: PlayerData<number, string> = {
  game: 2048,
  hours: "300 h.",
  server: "arcade",
};
const player3: PlayerData<string, object> = {
  game: "Chess",
  hours: {
    total: 500,
    inMenu: 50,
  },
  server: "chess",
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
}
type FigureName = "rect" | "triangle" | "line" | "circle";

interface Figure {
  name: string,
}

function calculateAmountOfFigures<T extends Figure>(figure: T[]): AmountOfFigures {
  const result: AmountOfFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0,
  };
  figure.forEach((item) => {
    switch (item.name) {
      case "rect":
        result.squares++;
        break;
      case "triangle":
        result.triangles++;
        break;
      case "line":
        result.others++;
        break;
      case "circle":
        result.circles++;
        break;
			default:
				break;
    }
  });
	return result;
}

const data = [
  {
    name: "rect",
    data: { a: 5, b: 10 },
  },
  {
    name: "rect",
    data: { a: 6, b: 11 },
  },
  {
    name: "triangle",
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: "line",
    data: { l: 15 },
  },
  {
    name: "circle",
    data: { r: 10 },
  },
  {
    name: "circle",
    data: { r: 5 },
  },
  {
    name: "rect",
    data: { a: 15, b: 7 },
  },
  {
    name: "triangle",
  },
];

console.log(calculateAmountOfFigures(data));