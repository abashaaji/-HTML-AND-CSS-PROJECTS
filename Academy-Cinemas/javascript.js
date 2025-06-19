// intiallize popover

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
popoverTriggerList.forEach(function (element){
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img src = '" + imgSrc +"'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

// intialize toast

const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))

// function to display toast with selected option 

function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById("timeSelect").options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value ;

    var message = "Purchase confirmed for : " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    // dispaly toast 
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show()

}
function buyTickets(){
    displaySelectedMovieOptions();
}