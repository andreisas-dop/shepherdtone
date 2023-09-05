
var full;

// triggered by user so the fs element will be null
var fullscreen = (function(id) {
    if (document.fullscreenElement == null) {
        full = document.querySelector('#' + id + ' iframe');
        full.classList.remove('hide');
        full.loading = 'auto';
        
        video_id = id.split('video_')[1];
        full.src = full.src + video_id;
    
        var requestFullScreen = full.requestFullScreen || full.mozRequestFullScreen || full.webkitRequestFullScreen;
        if (requestFullScreen) {
            requestFullScreen.bind(full)();
        }
    }
});

// when closing, function is triggered after fulscreen is closed, so the fs element will be null 
var exitscreen = (function() {
    if (document.fullscreenElement == null) {
        full.classList.add('hide');
        // just to be safe, make all iframes hidden
        document.querySelectorAll('iframe').forEach(e => e.classList.add('hide'))
    }
});

document.addEventListener("fullscreenchange",       exitscreen, false);
document.addEventListener('mozfullscreenchange',    exitscreen, false);
document.addEventListener('webkitfullscreenchange', exitscreen, false);

