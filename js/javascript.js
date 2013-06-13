// Put your custom code here
var cart = [];
function displayCart(num_items) {
    var cartDiv = $('.cartDiv');
    var textStr = $('#textStr');
    var emailStr = $('#emailStr');
    var receipt_str = '';
    var text_str = '';
    var email_str = '';
    cartDiv.html(" ");

    for (var item in cart) {
        receipt_str += cart[item].name + ' ';
        text_str += cart[item].name + '%20';
        email_str += cart[item].name + '%20';
    }
    cartDiv.append('<p>' + receipt_str + ' Pizza</p>');
    textStr.attr('href', 'sms://555-555-5555?body=' + text_str + 'Pizza');
    emailStr.attr('href', 'mailto:ryan.eugene.gauthier@gmail.com?subject=Pizza%20order&body=' + email_str + 'Pizza');
}
$(document).ready(function () {
    // Add a buy button to each of my products

//    $('div[data-product]').each(function () {
//        $(this).append('<button class="btnCart">Add Topping</button>');
//    });

//    $('.btnCart').on("click", function(event) {
//        var pid = $(this).parent().parent().data("product");
//        console.log(pid);
//        if (cart[pid]) {
////                cart[pid].qty += 1;
//        } else {
//            cart[pid] = new Object();
//            cart[pid].qty = 1;
//            cart[pid].pid = pid;
//            cart[pid].name = $(this).parent().siblings("span").data("name");
////                cart[pid].price = $(this).parent().siblings("span").next().data("price");
//        }
//        displayCart();
//    });

    $('.toggleswitch').on("slidestop", function(event) {
        var pid = $(this).parent().data("product");
        if($(this).children(':selected').data('name')=="on"){
            console.log('selected');
            cart[pid] = new Object();
            cart[pid].qty = 1;
            cart[pid].pid = pid;
            cart[pid].name = $(this).parent().data("name");
        }
        else {
            cart[pid] = new Object();
            cart[pid].name = '';
        }
        displayCart();

    });


    $('#buy').on("click", function (event) {
        var buyUrl = "";
        for (var item in cart) {
            buyUrl += "&pid[]=" + item + "&qty[]=" + cart[item].qty;
        }
        $.getJSON('buy.php?' + buyUrl, function (data) {
            $('<ul/>', {
                'class': 'myu-new-list',
                html: data
            }).appendTo('.cartDiv');
            //$("#cartDiv").append(data);
        });
        //console.log( "http://cis217-4.gauthierdevelopment.net/buy.php?" + buyUrl);
        //$("#buy").parent().hide();
    });

    $('#saveOrder').on("click", function (event) {
        var cartStr = "[";
        for (var item in cart) {
            cartStr += JSON.stringify(cart[item]) + ",";
        }
        cartStr = cartStr.slice(0, -1);
        cartStr += "]";
        console.log(cartStr);
        localStorage['cart'] = cartStr;
    });


    $('#loadOrder').on("click", function () {
        cart = [];
        var obj = JSON.parse(localStorage['cart']);
        for (item in obj) {
            pid = obj[item].pid;
            cart[ pid ] = obj[item];
        }
        displayCart();
    });

//navigator.geolocation.getCurrentPosition(function (pos) {
//    var lat = pos.coords.latitude;
//    var lng = pos.coords.longitude;
//    console.log(lat + " : " + lng);
//    $("#lat").text(lat);
//    $("#lng").text(lng);
//    // var url = '<a href="http://maps.google.com/maps?q=' + lat + ',' + lng + '">Your Location</a>';
//    // saddr=???&daddr=????
//
//    var url = '<a href="http://maps.google.com/maps?daddr=2234+E+Sprague+Ave,+Spokane,+WA+99207&saddr=' + lat + ',' + lng + '">Your Location</a>';
//    $("#url").html(url);
//
//    var map = '<iframe width="360" height="360" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?daddr=2234+E+Sprague+Ave,+Spokane,+WA+99207&amp;saddr=' + lat + ',' + lng + '&amp;ie=UTF8&amp;t=h&amp;geocode=FRw31wIdgTgA-Q%3BFfOq1wIduLEA-SGSF4-H7rV7wSl16BgaKBmeVDGSF4-H7rV7wQ&amp;ll=47.67371,-117.410545&amp;spn=0.020806,0.030813&amp;z=14&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?daddr=2234+E+Sprague+Ave,+Spokane,+WA+99207&amp;saddr=47.65878000000001,-117.426047&amp;ie=UTF8&amp;t=h&amp;geocode=FRw31wIdgTgA-Q%3BFfOq1wIduLEA-SGSF4-H7rV7wSl16BgaKBmeVDGSF4-H7rV7wQ&amp;ll=47.67371,-117.410545&amp;spn=0.020806,0.030813&amp;z=14&amp;source=embed" style="color:#0000FF;text-align:left">View Larger Map</a></small>';
//    $("#directionMap").html(map);
//});

// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
//
function onSuccess(position) {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
        'Longitude: '          + position.coords.longitude             + '<br />' +
        'Altitude: '           + position.coords.altitude              + '<br />' +
        'Accuracy: '           + position.coords.accuracy              + '<br />' +
        'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
        'Heading: '            + position.coords.heading               + '<br />' +
        'Speed: '              + position.coords.speed                 + '<br />' +
        'Timestamp: '          +                                   position.timestamp          + '<br />';
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}


});
