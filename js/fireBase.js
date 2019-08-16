$(document).ready(function() {
    if ($('#uploadform').length > 0 ) {
        contactScript('forcontact');
    }
});
//firebase
function contactScript(value) {
    var config = {
        apiKey: "AIzaSyDP2nPmiUWaVl2Nn3zwWHUhwYsUNRm-WtI",
        authDomain: "bumbleb-182122.firebaseapp.com",
        databaseURL: "https://bumbleb-182122-19ead.firebaseio.com",
        projectId: "bumbleb-182122",
        storageBucket: "bumbleb-182122.appspot.com",
        messagingSenderId: "1074760668629"
    };
    firebase.initializeApp(config);
    var a = firebase.database().ref("messages");
        $("#uploadform").submit(function(config) { $(this), console.log("Submit to Firebase");
        var b = $("#fname").val(),
            c = $("#lname").val(),
            d = $("#email").val(),
            z = $("#company").val(),
            f = $("#address1").val(),
            g = $("#address2").val(),
            h = $("#city").val(),
            i = $("#state").val(),
            j = $("#zip").val(),
            k = $("#timeframe").val(),
            l = $("#uploadfile").val(),
            m = { firstName: b, lastName: c, email: d, company: z, address1: f,address2: g, city: h, state: i, zip: j, timeframe: k, file: l};
            console.log(m);
            return a.push(m).then(function(config) {  
            $(".sucess-none").css("display", "none") }), !1 })   
}