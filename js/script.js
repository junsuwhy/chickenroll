(function(){
  jQuery(function($){
    $w = $(window);
    $w.resize(resizeWindow);
    resizeWindow();
    
    var re = /[\?&]text=([^\&]+)/;
    var text = location.search;
    var search = text.match(re);
    if(search){
      text = search[1];
      $('.text').text(decodeURI(text));
    }
    
    
    addItem('.chi1');
    setTimeout(function(){
      addItem('.chi2');
    },3333);
    setTimeout(function(){
      addItem('.chi3');
    },6666);
    
  });
  
  function debug(msg, label){
    if(label){
      var insertText = label + ' : ' + msg;
    }else{
      var insertText = msg;
    }
    
    $('.stat').append($('<div>').text(msg));
  }
  
  function addItem(name){
    var $item = $(name).clone();
    $item.appendTo('.canva').removeClass('item-template').addClass('item animation-action');
    setTimeout(function(){
      $item.find('.animation-peck').removeClass('animation-peck');
    },2500);
    setTimeout(function(){
      removeItem($item);
      addItem(name);
    },10000);
    $item.css('left','100%');
    return $item;
  }
  
  function removeItem(item){
    item.remove();
  }
  
  function resizeWindow(){
    $w = $(window);
    var h = $w.height();
    var canva_h = h-40;
//    $('.text span').css('width', $w.width());
//    debug($('.text span').css('width'));
    $('.canva').css('height',canva_h+'px');
  }
})();

