"use strict"

let arr_Name = [1, 2, 3];
let arr_Number = [5, 3];
let arr_Company_Name = [6, 1488];

export {arr_Name, arr_Company_Name, arr_Number};

let form_btn = document.getElementById("form_btn");
let form = document.getElementById("form");
let close_btn = document.getElementById("form_close_btn");
let submit_btn = document.getElementById("submit");
let Feedback = document.getElementById("Feedback");
let form_submitted = document.getElementById("form_submitted");
let form_submitted_close_btn = document.getElementById("form_submitted_close_btn");
let Free_cons = document.getElementById("Free_cons")
let Free_cons2 = document.getElementById("Free_cons2")

let Name_value = document.getElementById("Name_inp");
let Contact_value = document.getElementById("Contact_inp");
let Company_value = document.getElementById("Company_inp"); 

const buttons = document.querySelectorAll('a[href*="#"]')

form_btn.addEventListener("click", function(){
    form_btn.classList.add("on_btn");
    form.classList.remove("form_off");
    Feedback.classList.remove("Feedback_off");
})

close_btn.addEventListener("click", function(){
    form_btn.classList.remove("on_btn");
    form.classList.add("form_off");
    Feedback.classList.add("Feedback_off");
})

submit_btn.addEventListener("click", function() {
    form_submitted.classList.remove("form_submitted_off");
    arr_Name.push(Name_value.value);
    arr_Number.push(Contact_value.value);
    arr_Company_Name.push(Company_value.value);
    console.log(arr_Name);
    console.log(arr_Number);
    console.log(arr_Company_Name);
})

form_submitted_close_btn.addEventListener("click", function() {
    form_submitted.classList.add("form_submitted_off");
})

Free_cons.addEventListener("click", function() {
    form_btn.classList.add("on_btn");
    form.classList.remove("form_off");
    Feedback.classList.remove("Feedback_off");
})

Free_cons2.addEventListener("click", function() {
    form_btn.classList.add("on_btn");
    form.classList.remove("form_off");
    Feedback.classList.remove("Feedback_off");
})

for (let slider of buttons) {
    slider.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = slider.getAttribute('href')
        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth"
        })
    })
}