function greet(person: string, date?: Date): string;
function greet(person: string, date: Date): string {
  console.log(`Hello, ${person}, today is ${date.toDateString()}`);
  return `Hello, ${person}, today is ${date.toDateString()}`;
}

greet("Brendan");
greet("Brendan", new Date());