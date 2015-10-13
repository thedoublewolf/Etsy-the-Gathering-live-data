(function () {

  $('#gideon').mouseover( function (){
    $('#gideon').removeClass('gideon').addClass('gideonHidden');
  });

  $('#message').mouseover( function (){
    $('#message').removeClass('message').addClass('messageHidden');
  });


// RENDER ITEMS ON PAGE

  var templateString = $('#itemListing').html();
  var renderTemplate = _.template(templateString);

  var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=Magic+the+Gathering&includes=Images,Shop';

  $.ajax({
  	url: etsyURL,
  	dataType: 'jsonp',
  	method: 'get'
  	}).then (function (response){
  		_.each(response.results, function (item){
  	 		var itemHTML = renderTemplate(item);
  			$('.magicStuff').append(itemHTML);
		})
  });


  $('.magicStuff').on('mouseenter', '#magicItem', function (event){
  	console.log(event);
  	$(this).find('#heart').removeClass('heartHidden').addClass('heartShown');
  	$(this).find('#hamburger').removeClass('hamburgerHidden').addClass('hamburgerShown');
  });

  $('.magicStuff').on('mouseleave', '#magicItem', function (event){
  	console.log(event);
  	$(this).find('#heart').addClass('heartHidden').removeClass('heartShown');
  	$(this).find('#hamburger').addClass('hamburgerHidden').removeClass('hamburgerShown');
  });

}());