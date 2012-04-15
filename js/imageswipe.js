function swipeThis(e, w, h, i1, i2){
	var wrapper = document.getElementById(e);
	    wrapper.style.position = 'relative';
	    wrapper.style.display = 'block';
	    wrapper.style.width = w + 'px';
	    wrapper.style.height = h + 'px';

	var theWrapper = document.createElement('div');
	    theWrapper.id = 'theRealWrapper';
	    theWrapper.style.position = 'relative';
	    theWrapper.style.display = 'block';
	    theWrapper.style.width = w + 'px';
	    theWrapper.style.height = h + 'px';
	    $(wrapper).append(theWrapper);

	var image1 = new Image();
	    image1.src = i1;

	var image2 = new Image();
	    image2.src = i2;

	var span1 = document.createElement('span');
	    span1.id = 'IS_imageOne';
	    span1.style.position = 'absolute';
	    span1.style.width = w + 'px';
	    span1.style.height = h + 'px';
	    span1.style.top = '0';
	    span1.style.left = '0';
	    span1.style.overflow = 'hidden';
	    span1.style.zIndex = '1';
   $(theWrapper).append(span1);
	$('#IS_imageOne').append(image1);

	var span2 = document.createElement('span');
	    span2.id = 'IS_imageTwo';
	    span2.style.position = 'absolute';
	    span2.style.borderRight = '2px solid #FFF';
	    span2.style.width = w/2 + 'px';
	    span2.style.height = h + 'px';
	    span2.style.top = '0';
	    span2.style.left = '0';
	    span2.style.overflow = 'hidden';
	    span2.style.zIndex = '2';
   $(theWrapper).append(span2);
	$('#IS_imageTwo').append(image2);

	var control = document.createElement('div');
	    control.className = 'IS_control';
	    control.style.position = 'relative';
	    control.style.width = w + 'px';
	    control.style.height = '10px';
	    control.style.margin = '10px 0';
	    control.style.border = '1px solid #CCC';

	var button = document.createElement('div');
	    button.className = 'IS_button';
	    button.style.position = 'absolute';
	    button.style.left = w/2-10 + 'px'; // w/2 pra dar metade, -10px por ser metade do width do elemento (20px)
	    button.style.zIndex = '3';
	    button.style.width = '20px';
	    button.style.height = '20px';
	    button.style.marginTop = '-6px';

	$(wrapper).append(control);
	$('.IS_control').append(button);

	// drag & drop
	$('.IS_button').draggable({ 
		axis: 'x',
		containment: [0, 0, w, 0],
		handle: '.IS_control'
	}).addTouch();

	$('.IS_button').draggable({
		drag: function(){
			var buttonPosition = $(this).position();
			$('#IS_imageTwo').css('width', buttonPosition.left+10);
		}
	});
}
