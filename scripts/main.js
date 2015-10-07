var whiskTitle, whiskImage, whiskSeller, whiskPrice, whiskPost, whiskFavorite;


javItems.results.forEach( function(item){

    	whiskTitle = '<p class="title"><a class="titles" href="' + item.url + '">' + item.title + '</a></p>';
    	whiskImage = '<a href="' + item.url + '"><img class="picZo" src="' + item.Images[0].url_170x135 + '"></a>';
    	whiskFavorite= '<a href="#" class="pop-up">' + '<div class="heart"><img class="hearts" src="images/heart.png"></div>' +
                      '<div class="hamburger"><img class="burger" src="images/hamburger.png"></div>' + '</a>';
      whiskSeller ='<p class="seller"><a href="' + item.Shop.url + '">' + item.Shop.shop_name + '</a></p>';
      whiskPrice ='<p class="prices">' + '$' + item.price + ' ' + 'USD' + '</p>';
      whiskPost = '<li class="imgList">' + whiskImage + whiskFavorite + whiskTitle + whiskSeller + whiskPrice + '</li>';

    $('.imgCard').append(whiskPost);
  });















