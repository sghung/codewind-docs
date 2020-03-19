$(function() {
	
	/*
    $( "a[class*='cw-current-page']" ).each ( function() {
        $(this).parentsUntil( $( "ul" ), ".cw-sidebar-div" ).each( function () {
            $(this).prev("a[data-toggle='collapse']" ).each( function () {
                $(this).trigger("click");
            })
        });
    });*/
    
    var location = window.location;
	var pathname = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
	
	console.log(pathname);


	$('a').each(function( i ) {
		/*if($(this).attr('data-link') === cleanUrl) {
			$(this).addClass('active');
		}*/
		//if($(this).attr('data-link')){
		if ($(this)[0].hasAttribute("data-url")){			
			//console.log("href = " + $(this).attr('href'));
			console.log("data-url = " + $(this).attr('data-url'));

			if($(this).attr('data-url') === pathname){
				console.log("Found it");

				$(this).addClass("cw-current-page");
				console.log("parent = " + $(this).attr('data-parent'));
				//$($(this).attr('data-parent')).toggle();
				$($(this).attr('data-parent')).collapse();
				//console.log("parent's parent = " + $(this).attr('data-parent').attr('data-parent'));
				var parent = $(this).attr('data-parent');
				var temp = "[id=\"" + parent + "\"]";
				console.log("Grandparent = " + $(temp).attr('data-parent'));
				var temp2 =  $(temp).attr('data-parent');
				//$(temp2).toggle();
				$(temp2).collapse();

				
				return false;
			}
		}
		//}
	});

    /*
    var clicked = false;
    $(':not(a[data-url=""])').each ( function() {
        
        if ($(this).data('url') == pathname) {
        		clicked = true;
            $(this).trigger("click");
        }
        
    });
    
    $(':not(a[data-url=""])').on("click", function(e) {

		if ($(this).data("url") && !clicked) {
			window.location.replace($(this).data("url"));
		}
	});
	
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var target = $(e.target).attr("href") // activated tab
		alert(target);
	  });*/

	/*$('.nav-link cw-tab-link a.active').click(function(e) {
		console.log("Hello world");
	});*/

	
	/*
	$('a[href^="#"]').not('.list-group-item').on("click", function(e) {
	    	
			e.preventDefault();

console.log(e.target.hash);

			var id = $($(this).attr('href'));
	   
	    if (id.length === 0) {
	        return;
	    }
	    
	    var pos = id.offset().top - 131;
	
	    // animated top scrolling
	    $('body, html').animate({scrollTop: pos});
	}); */
	
	/*
	$('#content-container a').click(function(e){
		if (e.target != null){


			if (e.target.hash != null){
				console.log(e.target.hash);
			}
		}
		//console.log("a clicked in container");
	});*/
	
	activeOSInstruction();
   
});

function detectOS() {
	var os="windows";
	if (navigator.appVersion.indexOf("Mac")!=-1) os="mac";
	if (navigator.appVersion.indexOf("X11")!=-1) os="linux";
	if (navigator.appVersion.indexOf("Linux")!=-1) os="linux";
	return os;
}

function activeOSInstruction() {
	var os = detectOS();
	$(".cw-tab-link").removeClass("active");
	$(".cw-tab-pane").removeClass("active");
	$('.cw-tab-link[data-os="'+os+'"]').addClass('active');
	$('.cw-tab-pane[data-os="'+os+'"]').addClass('active');
}