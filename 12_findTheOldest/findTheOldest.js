const findTheOldest = function(people) {
    let oldest = people[0];
    for (let i = 1; i < people.length; i++) {
        let yearOfDeath = people[i].yearOfDeath || new Date().getFullYear();
        let yearOfBirth = people[i].yearOfBirth;
        let oldestYearOfDeath = oldest.yearOfDeath || new Date().getFullYear();
        let oldestYearOfBirth = oldest.yearOfBirth;
        if (yearOfDeath - yearOfBirth > oldestYearOfDeath - oldestYearOfBirth) {
            oldest = people[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
