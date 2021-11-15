function getAge() {
    var today = new Date();
    var thisYear = today.getUTCFullYear(); 
    var dob = document.getElementById("dob").value;
    var birthDate = new Date(dob);
    
    var calculateAge = thisYear - birthDate.getUTCFullYear();
    if (today.getMonth() < birthDate.getMonth()) {   
        calculateAge --;
    }
    alert(calculateAge + " years old");
}