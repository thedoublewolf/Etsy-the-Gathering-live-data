(function () {

  $('#gideon').mouseover( function (){
    $('#gideon').removeClass('gideon').addClass('gideonHidden');
  });

  $('#message').mouseover( function (){
    $('#message').removeClass('message').addClass('messageHidden');
  });


// RENDER ITEMS ON PAGE
  var template = $('#itemListing').html();
  var render = _.template(template);

  var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=Magic+the+Gathering&includes=Images,Shop';

  $.ajax({
  	url: etsyURL,
  	dataType: 'jsonp',
  	method: 'get'
  	}).then (function (response){
  	  var templateString = $('#itemListing').text();
  		var renderTemplate = _.template(templateString);
  		_.each(response.results, function (item){
  	 		var itemHTML = renderTemplate(item);
  			$('.magicStuff').append(itemHTML);
		});
  });


  $('#magicItem').mouseover( '.heartHam', function (event){
  	console.log(event);
  	$(this).find('#heart').removeClass('heartHidden').addClass('heartShown');
  	$(this).find('#hamburger').removeClass('hamburgerHidden').addClass('hamburgerShown');
  });

  $('#magicItem').mouseout( '.heartHam', function (event){
  	console.log(event);
  	$(this).find('#heart').addClass('heartHidden').removeClass('heartShown');
  	$(this).find('#hamburger').addClass('hamburgerHidden').removeClass('hamburgerShown');
  });

}());