var movieUrl = prompt('URL? :');

if (movieUrl) {
    var bodylayout = document.querySelector('.body-layout');
    
    
    var player = document.createElement('iframe');
    player.src = movieUrl;
    player.style.width = '100%';
    player.style.position = 'fixed';
    player.style.bottom = 0;
    player.style.left = 0;
    
    document.body.appendChild(player);
    
    SyncHeight();
    window.onresize = SyncHeight;
    
    function SyncHeight() {
        let width = document.body.getBoundingClientRect().width;
    
        let height = (width / 16) * 9;
        height += 'px';
    
        bodylayout.style.paddingBottom = height;
        player.style.height = height;
    }
}
