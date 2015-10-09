var panelWidth = 0;
var startPanel = 1;

$(document).ready(function(){

    // Once document is ready, reset panelWidth to the actual width of the overall container
    window.panelWidth = $('.sp').width();

    $('.panel_container .panel').each(function(index) {

        $(this).css({ 'width' : window.panelWidth + 'px', 'left' : (index*window.panelWidth)+'px'});

        $('.sp .panels').css('width', (index+1)*window.panelWidth+'px');
    });

    $('.sp .tabs span').each(function(index, el) {
        $(this).on('click', function(){
            changePanels( $(this).index() );
        });
    });

    // On page load, the first panel is loaded
    $('.sp .tabs span:nth-child('+window.startPanel+')').trigger('click');

});


function changePanels(newIndex){
    var newPanelPosition = (window.panelWidth*newIndex) * -1;
    var newPanelHeight = $('.sp .panel:nth-child('+(newIndex+1)+')').find('.panel_content').height() + 15;

    $('.sp .panels').animate({left: newPanelPosition}, 1000);
    $('.sp .panel_container').animate({height: newPanelHeight}, 1000);

    $('.sp .tabs span').removeClass('selected');
    $('.sp .tabs span:nth-child('+(newIndex+1)+')').addClass('selected');

}