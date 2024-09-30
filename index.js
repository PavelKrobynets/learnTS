// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "Alex";
function processing(data) {
    return data;
}
var newFunc = processing;
var num = 5;
var user = {
    login: "str",
    age: 25,
    parents: { mother: "Anna", father: "No data", married: true, smth: 16 }
};
var depositMoney = function (amount) {
    console.log("req to server with amount: ".concat(amount));
    return amount;
};
depositMoney(500);
depositMoney("500");
