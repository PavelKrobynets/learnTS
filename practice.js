// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "Alex";
var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};
var email = document.querySelector("#email"), checkbox = document.querySelector("#checkbox"), title = document.querySelector("#title"), text = document.querySelector("#text");
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function onSubmitForm(email, title, text, checkbox) {
    formData.email = email;
    formData.title = title;
    formData.text = text;
    formData.checkbox = checkbox;
    validateFormData(formData);
}
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    if (Object.values(data).every(Boolean)) {
        checkFormData(formData);
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    var email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    // Если email совпадает хотя бы с одним из массива
    if (emails.includes(email)) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
onSubmitForm(email.value, title.value, text.value, checkbox.checked);
