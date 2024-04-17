const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const inputMessage = document.querySelector("#mensagem");
const btnSend = document.querySelector(".formcontato__botao");

const er =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Eventos

events();
function events() {
    document.addEventListener("DOMContentLoaded", initialApp);
    inputName.addEventListener("blur", (e) =>
        validateEmpyField(e, "Porfavor, ingrese un nombre")
    );
    inputEmail.addEventListener("blur", (e) =>
        validateEmpyField(e, "Porfavor, ingrese un correo")
    );
    inputMessage.addEventListener("blur", (e) =>
        validateEmpyField(e, "Porfavor, complete el campo")
    );
}

function initialApp() {
    btnSend.disabled = true;
    btnSend.classList.add("active");
}

// Validar campos ---------------------------------------
function validateEmpyField(e, errorMessage) {
    const fielDiv = e.target;
    const fieldDivValue = e.target.value.trim();
    console.log(fieldDivValue);

    //Validamos todos los campos
    if (fieldDivValue === "") {
        setError(fielDiv, errorMessage);
        return;
    } else {
        setSucces(fielDiv);
    }

    //Nombre
    if (fielDiv.type === "text") {
        if (fieldDivValue.length <= 50) {
            setSucces(fielDiv);
        } else {
            setError(fielDiv, "Máximo 50 carácteres");
        }
    }

    //Email
    if (fielDiv.type === "email") {
        if (er.test(fieldDivValue)) {
            setSucces(fielDiv);
        } else {
            setError(fielDiv, "Ingrese un correo válido");
        }
    }

    //TextArea
    if (fielDiv.type === "textarea") {
        if (fieldDivValue.length <= 300) {
            console.log("correcto");
            setSucces(fielDiv);
            // fieldCompleto();
        } else {
            setError(fielDiv, "Máximo 300 carácteres");
        }
    }
}

//Funciones error y exito-------------------------------
function setError(inputDiv, errorMessage) {
    const group = inputDiv.parentElement;
    group.classList.add("activeError");
    const text = group.querySelector("p");
    text.textContent = errorMessage;

    if (group.classList.contains("activeSucces")) {
        group.classList.remove("activeSucces");
    }
}

function setSucces(inputDiv) {
    const group = inputDiv.parentElement;
    group.classList.add("activeSucces");

    if (group.classList.contains("activeError")) {
        group.classList.remove("activeError");
    }
}

function fieldCompleto() {
    btnSend.disabled = false;
    btnSend.classList.remove("active");
}
