const val = document.getElementById('signUp')
function check(){
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    signUpButton.addEventListener('click', () =>container.classList.add('right-panel-active'));
    signInButton.addEventListener('click', () =>container.classList.remove('right-panel-active'));
}

function validateForm1() 
{
    var x1 = document.forms["signupForm"]["name"].value;
    var x2 = document.forms["signupForm"]["email"].value;
    var x3 = document.forms["signupForm"]["pass"].value;
    
    if (x1=="" || x2=="" || x3=="")
    {
        if (x1 ==="") 
        {
            alert("Name must be filled out");
            return false;
        }
        if (x2 == "" ) 
        {
            alert("Email must be filled out");
            return false;
        }
        if (x3 == "" ) 
        {
            alert("Password must be filled out");
            return false;
        }
    }
    else {
        alert("Your account is successfully created");
        window.location.assign("index.html");
        // window.location.href = "index.html"; // redirect to index.html
        return true;
    }
}


function validateForm2() 
{
    var y1 = document.forms["signinForm"]["email"].value;
    var y2 = document.forms["signinForm"]["pass"].value;

    if(y1 != "ajagroup@gmail.com" || y2 != "AJATHEBEST//" )
    {
        alert("Incorrect email or password");
        return false;
    }
    else {
        window.location.href = "index.html";
        return true;
    }
}