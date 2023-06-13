function ageInDays(person, logResult) {
    
    const fullName = person.firstName + " " + person.lastName
    const calculateAgeInDays = person.age * 356;
    return logResult(fullName, calculateAgeInDays);
}
function logResult(fullName, calculateAgeInDays) {
    console.log(`The person's full name is  ${fullName}, and their age in day is ${calculateAgeInDays}`);
}

person = {
    firstName: "Ankut",
    lastName: "Swami",
    age: 22
}

ageInDays(person, logResult)