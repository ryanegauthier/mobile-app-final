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
        });
        displayCart();

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
    var mapElement = document.getElementById('directionMap');

    var map_str = '<iframe width="360" height="360" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?daddr=2234+E+Sprague+Ave,+Spokane,+WA+99207&amp;saddr=' + position.coords.latitude + ',' + position.coords.longitude + '&amp;ie=UTF8&amp;t=h&amp;z=12&amp;output=embed"></iframe>';

    mapElement.innerHTML = map_str;
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}


});
