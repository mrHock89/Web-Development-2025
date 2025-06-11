const person = {
    firstName: "Anirban",
    lastName: "Roy",
    rollNo: 23,
    age: 25,
    get roll(){
        return this.rollNo;
    }
};
console.log(person.roll);

const person2 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};
person2.lang = "en";
console.log(person2.language);

person2.firstName = "manoj"
console.log(person2.firstName);

