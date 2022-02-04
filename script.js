/* Used for delay Redirect and also show timer on screen */

function delayRedirect(){
    document.getElementById('delayMsg').innerHTML = '<h4>Redirect in <span id="countDown">10</span> seconds..</h4>';
    var count = 10;
    setInterval(function(){
        count--;
        document.getElementById('countDown').innerHTML = count;
	console.log(count)
        if (count == 0) {
            window.location = 'https://reharish.github.io/'; 
        }
    },1000);
}
