//size selection when click the size button
$( ".size-selector" ).click(function() {
    if ($( ".size-selector" ).hasClass( "size-selected" )) {
        $( ".size-selector" ).removeClass( 'size-selected' );
        $( ".selected-size" ).text("");
    } else {
        $( ".size-selector" ).removeClass( 'size-selected' );
        $( this ).addClass("size-selected");
        var size = $( this ).html();
        $( ".selected-size" ).text(size);
    }
});

//show and hide may cart when click the my cart button
$( ".my-cart" ).click(function() {
    if ($( ".minicart" ).hasClass( "show" )) {
        $( ".minicart" ).removeClass( 'show' );
    } else {
        $( ".minicart" ).addClass( 'show' );
    }
});