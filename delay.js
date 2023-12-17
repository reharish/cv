/* Delaying Loading screen to show Rick Roll */

function delayRedirect(){
    document.getElementById('delayMsg').innerHTML = '<h4>Loading Portfolio in <span id="countDown">9</span> seconds..</h4>';
    var count = 8;
    setInterval(function(){
        count--;
        document.getElementById('countDown').innerHTML = count;
	console.log(count)
        if (count == 0) {
            window.location = 'https://reharish.github.io/'; 
        }
    },1000);
}
