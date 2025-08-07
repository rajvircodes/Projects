const btnEL = document.getElementById("btn");
const birthdayEL = document.getElementById("birthday");
const resultEL = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEL.value;
  if (birthdayValue == "") {
    alert("please Enter your birth date");
  } else {
    const age = getAge(birthdayValue);
    resultEL.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const curretDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = curretDate.getFullYear() - birthdayDate.getFullYear();
  const month = curretDate.getMonth() - birthdayDate.getMonth();


if (
    month < 0 || 
    (month === 0 && curretDate.getDate() < birthdayDate.getDate()) 
) {
    age--;
}
return age;

}

btnEL.addEventListener("click",calculateAge);
