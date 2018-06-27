var numItems = $('.editTools').length;
var width = $('.editToolsBox').css('width').replace('px', '');
var toolWidth = width/numItems + 'px';
$('.editTools').css('width', toolWidth);
