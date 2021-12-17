// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


console.log("hi")
window.onload = function () {
    document.querySelectorAll('input').forEach(input => { input.addEventListener('change', handleNegative) })
    document.querySelectorAll('input').forEach(input => { input.addEventListener('click', handleClick) })

    // document.querySelectorAll('input.total').forEach(input => { input.addEventListener('change', handleNegative) })

    console.log()
};

function handleNegative(event) {
    console.log(event.target.value < 1)
    event.target.value < 0 ? event.target.style.backgroundColor = "red" : ""

}

function handleClick(event) {
    console.log(event)
}