const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "Alex";

const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: "Alex",
  messages: {
    error: "Error",
  },
};

const userDataTuple: [boolean, number, ...string[]] = [
  true,
  40,
  "John",
  "Alex",
  "Liza",
];

const [birthday, age, nameData] = userDataTuple;

const createError = (message: string) => {
  throw new Error(message);
};

const logBrtMsg = ({
  isBirthdayData,
  ageData,
  userNameData,
  messages: { error },
}: {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
  messages: { error: string };
}): string => {
  if (isBirthdayData) {
    return `Congrats ${userNameData}, age ${ageData + 1}`;
  } else {
    return createError(error);
  }
};

logBrtMsg(userData);

interface IConfig {
  protocol: "https" | "http";
  port: 3001 | 3000;
  log: (msg: string) => void;
}

interface IConfig {
	date: Date
}

// type Role = { role: string };
// type ConfigWithRole = Config & Role

interface IRole {
  role: string;
}

interface IConfigWithRole extends IConfig, IRole {}

const serverNewConfig: IBasicConfig = {
  protocol: "https",
  port: 3001
};

const backupConfig: IBasicConfig = {
  protocol: "http",
  port: 3000,
};

interface IBasicConfig{
	protocol: "https" | "http",
	port: 3000 | 3001
}

const startNewServer = (config: IBasicConfig): "Server started" => {
  if (config.port) {
    console.log(`Server started ${config.protocol}://server/${config.port}`);
  } else {
    console.log("Invalid port");
  }
  return "Server started";
};

startNewServer(serverNewConfig);
startNewServer(backupConfig);


type StandardType = "empty" | number;

// структура данных склада с одеждой

interface ClothesWarehouse {
  jackets: StandardType;
  hats: StandardType;
  socks: StandardType;
  pants: StandardType;
}

// структура данных склада с канцтоварами

interface StationeryWarehouse {
  scissors: StandardType;
  paper: "empty" | boolean;
}

// структура данных склада с бытовой техникой

interface AppliancesWarehouse {
  dishwashers: StandardType;
  cookers: StandardType;
  mixers: StandardType;
}

// общая структура данных, наследует все данные из трех выше
// + добавляет свои

interface TotalWarehouse
  extends ClothesWarehouse,
    StationeryWarehouse,
    AppliancesWarehouse {
  deficit: boolean;
  date: Date;
}

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: TotalWarehouse = {
  jackets: 5,
  hats: "empty",
  socks: "empty",
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: "empty",
  mixers: 14,
  date: new Date(1996, 8, 19),
  deficit: false,
};

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

const printReport = (data: TotalWarehouse): string => {
  const emptyItems = Object.keys(data).filter(
    (key) => data[key as keyof typeof data] === "empty"
  );
  if (emptyItems) {
    return `We need this items: ${emptyItems.join(", ")}`;
  } else {
    return "Everything fine";
  }
};

console.log(printReport(totalData));

