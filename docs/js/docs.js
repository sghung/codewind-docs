$(function() {
    $( "a[class*='cw-current-page']" ).each ( function() {
        $(this).parentsUntil( $( "ul" ), ".cw-sidebar-div" ).each( function () {
            $(this).prev("a[data-toggle='collapse']" ).each( function () {
                $(this).trigger("click");
            })
        });
    });
    
    var location = window.location;
    var pathname = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

    
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