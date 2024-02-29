let person: string = "khalid";

let score: number = 55;

let isManager: boolean = true;

// without using type aliasing
// let student: {
//   name: "ali";
//   id: 12345;
// } = {
//   name: "ali",
//   id: 12345,
// };

// object
let studnet: Student = {
  name: "ali",
  id: 12345,
};

type Student = {
  name: string;
  id: number;
};
