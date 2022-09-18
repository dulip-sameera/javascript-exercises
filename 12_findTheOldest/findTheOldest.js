const findTheOldest = function (people) {
  return people.reduce(
    function (oldestPerson, person) {
      if (!("yearOfDeath" in person)) {
        person.yearOfDeath = new Date().getFullYear();
      }

      if (
        person.yearOfDeath - person.yearOfBirth >
        oldestPerson.yearOfDeath - oldestPerson.yearOfBirth
      ) {
        oldestPerson.name = person.name;
        oldestPerson.yearOfBirth = person.yearOfBirth;
        oldestPerson.yearOfDeath = person.yearOfDeath;
      }

      return oldestPerson;
    },
    {
      name: "",
      yearOfBirth: 0,
      yearOfDeath: 0,
    }
  );
};

// Do not edit below this line
module.exports = findTheOldest;
