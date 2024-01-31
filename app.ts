let mass = [
  {
    first_name: "5/11/2023",
    Money_in_the_day: 1834,
    temp: 33,
  },
  {
    first_name: "9/23/2023",
    Money_in_the_day: 243,
    temp: 18,
  },
  {
    first_name: "7/18/2023",
    Money_in_the_day: 1959,
    temp: 12,
  },
  {
    first_name: "4/2/2023",
    Money_in_the_day: 192,
    temp: 13,
  },
  {
    first_name: "2/14/2023",
    Money_in_the_day: 1182,
    temp: 21,
  },
  {
    first_name: "6/3/2023",
    Money_in_the_day: 1708,
    temp: 3,
  },
  {
    first_name: "3/13/2023",
    Money_in_the_day: 854,
    temp: 31,
  },
  {
    first_name: "2/1/2023",
    Money_in_the_day: 451,
    temp: 6,
  },
  {
    first_name: "3/9/2023",
    Money_in_the_day: 717,
    temp: 12,
  },
  {
    first_name: "8/20/2023",
    Money_in_the_day: 850,
    temp: 3,
  },
];
let answer = [];
for (let i = 0; i < mass.length; i++) {
  if (mass[i].Money_in_the_day >= 1000) {
    answer.push(mass[i]);
    break;
  }
}
console.log(answer);

//5
/*let mass = [
  {
    first_name: "Madella",
    gender: "Female",
    ip_address: "Nungwi",
    is_learn: false,
    is_director: false,
    age: 51,
  },
  {
    first_name: "Emeline",
    gender: "Female",
    ip_address: "San José",
    is_learn: true,
    is_director: false,
    age: 23,
  },
  {
    first_name: "Fonzie",
    gender: "Genderfluid",
    ip_address: "Guaíra",
    is_learn: false,
    is_director: false,
    age: 54,
  },
  {
    first_name: "Annadiane",
    gender: "Female",
    ip_address: "Masipi West",
    is_learn: true,
    is_director: true,
    age: 31,
  },
  {
    first_name: "Conchita",
    gender: "Female",
    ip_address: "Empedrado",
    is_learn: false,
    is_director: false,
    age: 34,
  },
  {
    first_name: "Marsiella",
    gender: "Female",
    ip_address: "Mawlamyinegyunn",
    is_learn: false,
    is_director: false,
    age: 55,
  },
  {
    first_name: "Maynard",
    gender: "Male",
    ip_address: "Rzhev",
    is_learn: true,
    is_director: false,
    age: 60,
  },
  {
    first_name: "Aloin",
    gender: "Male",
    ip_address: "Cochabamba",
    is_learn: true,
    is_director: false,
    age: 21,
  },
];
let result = [];
for (let i = 0; i < mass.length; i++) {
  if (mass[i].age > 30 && mass[i].is_learn && mass[i].is_director) {
    result.push(mass[i]);
  }
}
console.log(result);*/
//4
/*let mass = ["Яблоко", "Мандарин", "Груша", "Апельсин", "Абрикос"];
let answer = mass.some((mass) => mass === "Банан") ? "Yes" : "No";
console.log(answer);*/

// 3
/*let counter = 0;
let mass = [1, 10, -3, 12, -6, -8, 15, 9, -10, 12];
for (let i = 0; i < mass.length; i++) {
  if (mass[i] > 0) {
    counter += mass[i];
  }
}
console.log(counter);*/
//2
/*let mass = [];
for (let i = 0; i < 10; i++) {
  let nums = Math.floor(Math.random() * 30);
  mass.push(nums);
}
let answer = mass.some((mass) => mass === 10) ? "Yes" : "No";
console.log(answer);
*/

//1
/*interface Person {
  name: string;
  age: number;
  hasLicense: boolean;
}
const people: Person[] = [
  { name: "John", age: 23, hasLicense: true },
  { name: "Anna", age: 30, hasLicense: true },
  { name: "Garry", age: 41, hasLicense: false },
];
const filtred = people.filter((person) => {person.age > 18 && person.hasLicense})
console.log(filtred);*/
/*АЛГОРИТМИЧЕСКИЕ ЗАДАЧИ
В вашем распоряжении массив данных о финансовых транзакциях за год. Каждая транзакция представляет собой объект с информацией о сумме, категории и типе (приход или расход). Вам нужно рассчитать общую сумму расходов по каждой категории за год.
Вы анализируете библиотечный каталог с информацией о книгах. В каждой записи есть данные о названии, авторе, годе издания и жанре книги. Вам нужно создать новый каталог, исключив повторяющиеся книги и добавив информацию о количестве экземпляров каждой уникальной книги в наличии.
Вы анализируете ежедневные данные о продажах в магазине. Вам нужно определить, когда впервые произошел день с продажами более 1000 единиц товара, и найти температуру воздуха в этот день.
Вы работаете с системой мониторинга космического полета. У вас есть массив данных о каждом этапе полета ракеты. Вам нужно убедиться, что все фазы полета прошли успешно, прежде чем отправить ракету на следующую миссию.*/
