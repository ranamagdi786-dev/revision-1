function validation(){
    let name=document.getElementById("name").value;
    let number=document.getElementById("number").value;
    let email=document.getElementById("email").value;
    let text=document.getElementById("text").value;
    let p1=document.getElementById("p1")
    let p2=document.getElementById("p2")
    let p3=document.getElementById("p3")
    let p4=document.getElementById("p4")
    if(name===""){
        p1.innerHTML="Please inter your name"
    }
    else if(name.length<3){
        p1.innerHTML="your name should be more than 2"
    }
    if(number===""){
        p2.innerHTML="please inter your number"
    }
    if(email === ""){
    p3.innerHTML = "Please enter your email";
}
else if(email.indexOf("@")=== -1 || email.indexOf(".")=== -1){
    p3.innerHTML = "Your email should contain @ and .";
}

}
