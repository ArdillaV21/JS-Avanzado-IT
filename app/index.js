import { getData } from "./async";

const showResult = async() =>{
    const results = await getData("https://jsonplaceholder.typicode.com/users")
    console.log(results)
}
console.log(showResult())