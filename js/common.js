$(document).ready(function() {

	$( ".js__draggable" ).draggable({ 
		grid: [ 10, 10 ],
		cursor: "move", 
		revert: "invalid" 
	});
	$( ".currencies__droppable" ).droppable({
	  activeClass: "ui-state-hover",
      hoverClass: "ui-state-active",
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

    $(".add-record-btn").click(function(){

      $(this).hide();
      $(".wrapper-popup").show();

    })


});