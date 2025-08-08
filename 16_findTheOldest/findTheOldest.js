const findTheOldest = function(people) {
    oldest = 0;
    ages = people.map(person => {if(person.yearOfDeath!= undefined) return person.yearOfDeath -person.yearOfBirth; else return 2025-person.yearOfBirth})
    
    for (let i = 0; i < ages.length; i++) {
        if(ages[i]>oldest) oldest = ages[i];
        
    }
    return people[ages.indexOf(oldest)].name;
};

// Do not edit below this line
module.exports = findTheOldest;
