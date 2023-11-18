const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for(let person of data) {
    if(person.profession == "developer") {
      console.log(person);
    }
  }
}

// 2. Add Data
function addData() {
  let nameValue = prompt("Enter Name");
  let ageValue = Number(prompt("Enter Age"));
  let professionValue = prompt("Enter Profession");

  data.push({
    name:nameValue,
    age: ageValue,
    profession: professionValue
  });

}

// 3. Remove Admins
function removeAdmin() {

  // iterate over the indices of the array,
  // check the object at every index, and use splice method for profession: "admin"

  let index = 0;
  while(index < data.length) {
    let person = data[index];
    if(person.profession == "admin") {
      data.splice(index, 1);
      continue;
    }
    index++;
  }

}

// 4. Concatenate Array
function concatenateArray() {

  const dummy = [
    {dummyName: 'dummyJohn', dummyAge: "xx", dummyProfession: "dummyDeveloper"},
    {dummyName: 'dummyJane', dummyAge: "xx", dummyProfession: "dummyAdmin"},
    {dummyName: 'dummyPerson1', dummyAge: "xx", dummyProfession: "dummyAdmin"},
  ];

  const concat = data.concat(dummy);
  console.log(concat);
}

// 5. Average Age
function averageAge() {
  let sum = 0;
  let n = data.length;

  for(let person of data) {
    sum += person.age;
  }
  console.log(sum/n);
}

// 6. Age Check
function checkAgeAbove25() {
  let index = data.findIndex((element)=>{
    if(element.age > 25) return true;
    return false;
  })

  if(index != -1) {
    console.log(true);;
  }
  console.log(false);
}

// 7. Unique Professions
function uniqueProfessions() {
  let uniqueArray = [];
  for(let person of data) {
    let personProfession = person.profession;
    if(!uniqueArray.includes(personProfession)){
      uniqueArray.push(personProfession);
    }
  }
  uniqueArray.forEach((element)=>{
    console.log(element);
  })
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b)=>{
    return (a.age-b.age);
  })
}

// 9. Update Profession
function updateJohnsProfession() {
  // yay promotion
  let johnObj = data.find((element)=>{
    if(element.name == 'john' && element.profession == 'developer'){
      return true;
    }
    return false;
  })

  johnObj.profession = 'manager'
}

// 10. Profession Count
function getTotalProfessions() {
  let professionCategories = {
    developer: 0,
    admin: 0,
    other: 0
  };

  data.forEach((element) => {
      
      if(element.profession.localeCompare("developer") == 0){
        professionCategories.developer++;
      }
      else if(element.profession.localeCompare("admin") == 0){
        professionCategories.admin++;
      }
      else{
        professionCategories.other++;
      }
    }
  )
  let totalProfessions = professionCategories.developer + professionCategories.admin + professionCategories.other;
  let devCount = professionCategories.developer;
  let adminCount = professionCategories.admin;

  console.log(`total professions: ${totalProfessions} || developers : ${devCount} || admins : ${adminCount}`);
}

