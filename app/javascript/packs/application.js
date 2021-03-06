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
    document.querySelectorAll('input').forEach(input => { input.addEventListener('change', handleClick) })

};



function handleClick(event) {
    const allQuantities = []
    event.target.value < 0 ? event.target.style.backgroundColor = "red" : event.target.style.backgroundColor = "white"
    console.log(event)


    // Get Parents Array of TD cells
    const allSizes = event.target.parentElement.parentElement.querySelectorAll('td input.size')
    allSizes.forEach(input => allQuantities.push(input.value))
    const total = allQuantities.reduce((cv, pv) => parseInt(cv) + parseInt(pv))

    event.target.parentElement.parentElement.querySelector('.total').value = total

    const grandTotal = document.querySelector('tr.grand-total')
    const totalsFromColumn = []
    document.querySelectorAll('input.total').forEach(input => totalsFromColumn.push(input.value))

    grandTotal.innerHTML = totalsFromColumn.reduce((pv, cv) => parseInt(pv) + parseInt(cv))
    console.log(grandTotal.innerHTML)
}