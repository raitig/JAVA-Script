function processForm(){
    event.preventDefault();
    // Access form elements
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value ;
    let age = document.getElementById("age").value;
    let gender = document.queryselector('input[name="gender"]:checked').value;
    let country = document.getElementById("country").value;
    let subscribe = document.getElementById("subscribe").checked;
    let comments = document.getElementById("comments").value;

    // validation checks
    if(name.length < 3 || name.length > 20) {
        alert("Name must be between 3 and 20 character long.");
        return false;
    }

    if (age < 18 || age > 100) {
        alert("Age must be between 18 and 100.");
        return false;
    }

    // Email validation 
    const emailpattern = /^[a-zA-z0-9._%+-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isvalid = email.match(emailpattern);
    if(!isvalid){
        alert("Email is not valid");
    }
    
    // Dynamically update the webpage content 
    let outputdiv = docmunt.getElementById("output");
    outputdiv.innerhtml ='
    <h2> Submitted Information :</h2>
        <p><strong> Name : </strong> ${name}</p>
        <p><strong> Email : </strong> ${email}</p>
        <p><strong> Age : </strong> ${age}</p>
        <p><strong> Gender : </strong> ${gender}</p>
        <p><strong> Country : </strong> <b> ${country} </b></p>
        <p><strong> Comments : </strong> ${comments}</p>
';
if (subscribe) {
    outputdiv.innerHTNL += '<p><strong> Newsletter subscription : </strong> You have subscribe to our newsletter! </p>';  
} else {
    outputdiv.innerHTNL += '<p><strong> Newsletter subscription : </strong> You chose not to subscribe to our newsletter. </p>';  
}

}
