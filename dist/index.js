"use strict";

class User {
    name: string;
    age: number;
    student: boolean;
    grades?: { subject: string; score: number }[];

constructor(name: string, age: number, student: boolean, grades?: { subject: string; score: number }[]) {
    this.name = name;
    this.age = age;
    this.student = student;
    this.grades = grades;
}

introduce() {
    console.log(`Ім'я: ${this.name}`);
    console.log(`Вік: ${this.age}`);
    console.log(`Студент: ${this.student ? "Так" : "Ні"}`);

    if (this.student && this.grades?.length) {
        console.log("Оцінки:");
        this.grades.forEach(g => console.log(` - ${g.subject}: ${g.score}`));
    }
    console.log("===============");
}
}

// Приклади користувачів
const user1 = new User("Dmytro", 21, true, [
    { subject: "Math", score: 98 },
    { subject: "Physics", score: 92 },
]);

const user2 = new User("Oksana", 28, false);

user1.introduce();
user2.introduce();
