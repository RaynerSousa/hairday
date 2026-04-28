import dayjs from "dayjs";
const form = document.querySelector("form");
const selectedDate = document.querySelector("#date");

// Data atual para o input
const inputDate = dayjs(new Date()).format("YYYY-MM-DD");   

// carrega a data atual 
selectedDate.value = inputDate;

// Define a data mínima para o campo de data como a data atual
selectedDate.min = inputDate;

form.onsubmit = (event) => {
    event.preventDefault();

    console.log('Formulário enviado!');
};