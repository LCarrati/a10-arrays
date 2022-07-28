const randNum = [33, 44, 13, 7, 5]
const strings = ["Lorem", "Ipsum", "Dolor", "Sit"]
const mixed = [13, "sorte", true]

const randNumCopia = randNum
const stringsCopia = strings
const mixedCopia = mixed

randNumCopia.push(2)
console.log("O original é: ", randNum, "\n A cópia é: ",randNumCopia );

stringsCopia.pop()
console.log("O original é: ", strings, "\n A cópia é: ",stringsCopia);

mixed.splice(1,1)
console.log("O original é: ", mixed, "\n A cópia é: ",mixedCopia);