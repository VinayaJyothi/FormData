const scriptURL = 'https://script.google.com/macros/s/AKfycbw8EUd06Bxz4lHM8BUHWfyaDfhin1yShPhAdVf6L4ayT6PxZszgVNOJoiTalwpSsugk2Q/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => $("#form-alerts").html("<div class='alert alert-success'>Data Updated Successfully.</div>"))
    .catch(error => $("#form-alerts").html("<div class='alert alert-error'>Data not Updated.</div>"))

})