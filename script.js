const scriptURL = 'https://script.google.com/macros/s/AKfycbw8EUd06Bxz4lHM8BUHWfyaDfhin1yShPhAdVf6L4ayT6PxZszgVNOJoiTalwpSsugk2Q/exec'
const form = document.forms['google-sheet']

function validateForm() {
    let a = document.forms["google-sheet"]["Login"].value;
    let b = document.forms["google-sheet"]["Logout"].value;
    let x = document.forms["google-sheet"]["Lunch-start"].value;
    let y = document.forms["google-sheet"]["Lunch-end"].value;
    if (a >= b) {
        alert("Login Time should be earlier than Logout Time");
    }
    else if (x >= y) {
        alert("Lunch Start Time should be earlier than Lunch End Time");
    }
    else {
        alert('Successfully Updated');
        
    }
  }
  
  

form.addEventListener('submit', e => {
    
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
})
