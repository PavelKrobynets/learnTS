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

const departments: string[] = ["dev", "design", "marketing"];
const test: {}[] = [{}, {}, {}];
const test2L: number[][][] = [
  [[41, 18], [], []],
  [[], [13, 54], []],
];
const report = departments
								.filter((d: string) => d != "dev")
								.map((d: string) => `${d} - done`)

const [first] = report;
const [second] = report;
console.log(first);
console.log(second);