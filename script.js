function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (principal == "") { 
        alert("Amount can't by empty or alphabet character");
        document.getElementById("principal").focus();
        return false;
    }else{
        if (principal <= 0) { 
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return false;
        }
    }
    var date = new Date().getFullYear(); 
    let future= parseInt(date)+parseInt(years);
    let interest= principal * years * rate / 100;
    let result= "If you deposit <mark>" + principal + "</mark>,<br> at an interest rate of <mark>" + rate + "%</mark> <br> You will receive an amount of <mark>" + interest + ",</mark><br> in the year <mark>" + future + "</mark>";
    document.getElementById("result").innerHTML=result;
}


function showVal(newVal){ //Show range value in span
    document.getElementById("showRate").innerHTML=newVal + '%';
}
