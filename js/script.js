(function(){
  jQuery(function($){
    $w = $(window);
    $w.resize(resizeWindow);
    resizeWindow();
    
    interval_time = 1000;
    
    var re = /[\?&]text=([^\&]+)/;
    var text = location.search;
    var search = text.match(re);
    if(search){
      text = decodeURI(search[1]);
      $('.text').text(text);
    }else{
      text = '祝您丁酉年雞會滾滾來';
    }
    
    kill_time = (text.length + 3)*interval_time;
    
    for(var i = 0; i <= text.length; i++){
      (function(i){
        setTimeout(function(){
          addItem('.item-template.word',text[i]);
        },interval_time * (i + 3) );
      })(i);
    }
    
    
    addItem('.chi1');
    setTimeout(function(){
      addItem('.chi2');
    },interval_time * 1);
    setTimeout(function(){
      addItem('.chi3');
    },interval_time * 2);
    
  });
  
  function debug(msg, label){
    if(label){
      var insertText = label + ' : ' + msg;
    }else{
      var insertText = msg;
    }
    
    $('.stat').append($('<div>').text(msg));
  }
  
  function addItem(name, word){
    var $item = $(name).clone();
    if(word){
      $item.find('div').text(word);
    }
    $item.appendTo('.canva').removeClass('item-template').addClass('item animation-action');
    setTimeout(function(){
      $item.find('.animation-peck').removeClass('animation-peck');
    },1500);
    setTimeout(function(){
      addItem(name,word);
    },kill_time);
    setTimeout(function(){
      removeItem($item);
    },6000);
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

