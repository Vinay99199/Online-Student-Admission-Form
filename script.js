// Basic Example Script - You can expand this
document.querySelector("form").addEventListener("submit", function(e){
    const name = document.querySelector('input[name="name"]').value;
    if(name.length < 3){
        alert("Name must be at least 3 characters long.");
        e.preventDefault();
    }
});
