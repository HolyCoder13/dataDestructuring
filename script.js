myArray = [1, 2, 3, 4, 5];
const [z, x, c] = myArray;
console.log(z, c);
console.log(x);


const secondArray = [10, 20, 40, 50, 75, 80];
const [numA, numB, numC, , numE] = secondArray;
console.log(`First- ${numA}, third: ${numC}, fifth:${numE}`);


function sayHi(firstArg, ...restOfArg) {
    console.log(`Hi, ${firstArg}`);
    console.log(restOfArg);
}
sayHi("Chris", 31, "23Al Street");

function sayHello(firstArg, ...otherArgs) {
    console.log(`Hello ${firstArg} `);
    console.log(otherArgs);
}
sayHello("Osas", "MwebeVillage", 34, 1);


const yetAnotherArr = ["dogs", "cats", "snails", "snakes", "hedgehogs"];
const [dogstring, catstring, ...otherAnimals] = yetAnotherArr;

console.log(dogstring);
console.log(catstring);
console.log(...otherAnimals);
console.log(otherAnimals);



const myObj = { firstName: "Chris", secondName: "Jones", adres: "alstreet" };
const { firstName, secondName, adres } = myObj;
console.log(firstName, secondName, adres);

let myVar1, myVar2;
const myObj2 = { myVar1: "a", myVar2: "b" };
({ myVar1, myVar2 } = myObj2);
console.log(myVar1, myVar2);


const myObj5 = { a1: 10, b2: 20 };
const { a1, b2, c3 = 33 } = myObj5;
console.log(c3);


const myObj4 = { uuid: 1345643559, username: "es6rulez", logged: new Date() };
const { uuid: userId, username: name, logged: lastLogin, e2 = 50 } = myObj4; //re-asigning names
console.log(name);
console.log(lastLogin);
console.log(e2);

function stateUser(obj1) {
    const { user, memberType } = obj1;              //obj can be empty only must be Quequed here 
    if (!user) {
        console.log("No user entered");
    } else {
        console.log(`Username: ${user}, membership type:${memberType}`);
    }

}
const member1 = { user: "Adr", memberType: "premium" };
stateUser(member1);
const member2 = { memberType: "Standard non pr" };
stateUser(member2);


const myObj8 = {
    title: "Diary Book",
    entries: [
        {
            name: "Osas",
            phone: "555-5555",
            address: "321 street",

        },

    ],
    myPhone: "12343-2131",
}
const { title, entries: [{ address }] } = myObj8;
console.log(address);


const myObj9 = {
    my1: "uwuwuwu",
    myProp2: [1, 2],
    
}
const{my1,myProp2:[xx,yy]}=myObj9;
console.log(xx,yy);


