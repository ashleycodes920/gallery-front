var splide = new Splide( '#splide' );

splide.on( 'autoplay:playing', function ( rate ) {
	console.log( rate ); // 0-1
} );

splide.mount();

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});

