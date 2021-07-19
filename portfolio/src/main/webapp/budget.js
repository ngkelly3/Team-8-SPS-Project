function isNumber(evt){
    var iKeyCode = (evt.which) ? evt.which : evt.keycode
    if(iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;

    return true;
}

jQuery(document).ready(function ($){
    $("#vehicle").hide();
    $("#vehicle-type").hide();
    $("#flight").hide();
    $("#travel-method").change(function(){          
        if($(this).val() == "vehicle"){
            $("#vehicle").show();
            $("#flight").hide();
        }else if($(this).val() == "flight"){
            $("#flight").show();
            $("#vehicle").hide();
        }else{
            $("#vehicle").hide();
            $("#vehicle-type").hide();
            $("#flight").hide();
        }
    });
});

jQuery(document).ready(function ($){
    $("#vehicle").change(function(){          
        if($(this).val() == "rent"){
            $("#vehicle-type").show();
        }else{
            $("#vehicle-type").hide();
            $("#flight").hide();
        }
    });
});

function getDisplay(){
//Travel-method
    let rental;

        $("#non1").each(function(){
            if(this.selected)
            rental = 0;
        });

        $("#non2").each(function(){
            if(this.selected)
            rental = 0;
        });

        $("#non3").each(function(){
            if(this.selected)
            rental = 0;
        });

        $("#compact").each(function(){
            if(this.selected)
            rental = 30;
        });

        $("#suv").each(function(){
            if(this.selected)
            rental = 45;
        });

        $("#luxury").each(function(){
            if(this.selected)
            rental = 60;
        });

        $("#cab").each(function(){
            if(this.selected)
            rental = 20;
        });

    let flight = parseInt(document.getElementById("flight").value);
    //if it is not a number, default to 0
    if(isNaN(flight)){
        flight = 0;
    }

//Accommodation
    let accommodation = parseInt(document.getElementById("accommodation").value);
    if(isNaN(accommodation)){
        accommodation = 0;
    }

//Daily Meal
    var meal = parseInt(document.getElementById("meal").value);
    if(isNaN(meal)){
        meal = 0;
    }

//Destination
    let disney;
    if(disney = document.getElementById("disney").checked){
        disney = 415;
    }

    let universal;
    if(universal = document.getElementById("universal").checked){
        universal = 350;
    }

    let pier;
    if(pier = document.getElementById("pier").checked){
        pier = 50;
    }

    let neaq;
    if(neaq = document.getElementById("neaq").checked){
        neaq = 40;
    }

    let museum;
    if(museum = document.getElementById("museum").checked){
        museum = 30;
    }

    let travel = rental + flight;
    let places = disney + universal + pier + neaq + museum;
    let total = travel + accommodation + meal + places;

    document.getElementById("price-travel").innerHTML = "$" + travel;
    document.getElementById("price-accommodation").innerHTML = "$" + accommodation;
    document.getElementById("price-meal").innerHTML = "$" + meal;
    document.getElementById("price-destination").innerHTML = "$" + places;
    document.getElementById("total-price").innerHTML = "$" + total;
}

function Refresh(){
    $("#travel-method").prop("selectedIndex", 0);
    $("#vehicle").prop("selectedIndex", 0);
    $("#vehicle-type").prop("selectedIndex", 0);
    document.getElementById("flight").value = "";

    jQuery(document).ready(function ($){
        $("#vehicle").hide();
        $("#vehicle-type").hide();
        $("#flight").hide();
        $("#travel-method").change(function(){          
            if($(this).val() == "vehicle"){
                $("#vehicle").show();
                $("#flight").hide();
            }else if($(this).val() == "flight"){
                $("#flight").show();
                $("#vehicle").hide();
            }else{
                $("#vehicle").hide();
                $("#vehicle-type").hide();
                $("#flight").hide();
            }
        });
    });
}