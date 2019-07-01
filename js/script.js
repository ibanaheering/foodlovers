$("#nav-category, #submenu").hover(function() {
    $("#submenu").show();
}, function() {
    $("#submenu").hide();
});

$("video").hover(function() {
    $(this)[0].play();
}, function() {
    $(this)[0].pause();
    $(this)[0].currentTime = 0;
});

$("#submenu .row > div:first-child .nav-item").hover(function() {
    const menu = $(this).data("menu");
    $(".subsubmenu").hide();
    $("#menu-" + menu).show();
    $("#submenu-img").css("background-image", "url(img/submenus/" + menu + ".jpg)");
})

$("#submenu, .subsubmenu").mouseleave(function() {
    $(".subsubmenu").hide();
    $("#submenu-img").css("background-image", "unset");
});

function updateIngredients(portions) {
    $(".ingredients").empty();
    ingredients.forEach(ingredient => {
        const amount = ingredient.amount * portions;
        let amountString = Math.floor(amount) || "";
        if (amount % 1 === 0.5) {
            amountString += " ½";
        }
        
        $(".ingredients").append("<tr><td>" + amountString + " " + ingredient.unit + "</td><td>" + ingredient.title + "</td></tr>");
    });
}

if (typeof ingredients !== 'undefined') {
    let portions = 1;
    updateIngredients(portions);
    
    $("#portions .btn-minus, #portions .btn-plus").click(function() {
        if ($(this).hasClass("btn-minus")) {
            if (portions-- <= 1) portions = 1;
        }
        else if ($(this).hasClass("btn-plus")) {
            portions++;
        }
        $("#portions-amount").text(portions);
        
        updateIngredients(portions);
    })
}
