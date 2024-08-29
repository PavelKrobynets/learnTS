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
