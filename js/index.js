$( ".size-selector" ).click(function() {
    $( ".size-selector" ).removeClass( 'size-selected' );
    $( this ).addClass("size-selected");
    var size = $( this ).html();
    $( ".selected-size" ).text(size);
});