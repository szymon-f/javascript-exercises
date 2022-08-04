const findTheOldest = function(people) {
    let oldestPeople = people.sort((a, b) => {
        if(!a.yearOfDeath){
            a.yearOfDeath = new Date().getFullYear()
        }
        if(!b.yearOfDeath){
            b.yearOfDeath = new Date().getFullYear()
        }
        let aLifespan = a.yearOfDeath - a.yearOfBirth;
        let bLifespan = b.yearOfDeath - b.yearOfBirth;
        return aLifespan > bLifespan ? 1 : -1;
    })
    return oldestPeople[oldestPeople.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
