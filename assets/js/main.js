let a=document.querySelectorAll("a");
$( ".change" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        $( ".change" ).text( "OFF" );
        a.forEach(x=>{
            x.style.color="black";
        })
    } else {
        $( "body" ).addClass( "dark" );
        $( ".change" ).text( "ON" );
        a.forEach(x=>{
            x.style.color="white";
        })
    }
});