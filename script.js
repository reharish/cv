function delayRedirect(){
    document.getElementById('delayMsg').innerHTML = 'Redirect in <span id="countDown">10</span> seconds..';
    var count = 10;
    setInterval(function(){
        count--;
        document.getElementById('countDown').innerHTML = count;
	console.log(count)
        if (count == 0) {
            window.location = 'https://www.google.com'; 
        }
    },1000);
}
/*
</script>
<body onload="delayRedirect()">
<div id="delayMsg">This is it</div>
<input type="button" onclick="delayRedirect()" value="Click to Redirect"/>
</body>

</html>
*/
