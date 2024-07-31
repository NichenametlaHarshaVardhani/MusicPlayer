
    document.onreadystatechange = function () {
        var state = document.readyState;
        if (state == 'interactive') {
            // Set the loading page visible when the page starts loading
            document.getElementById('content').style.visibility = "hidden";
        } else if (state == 'complete') {
            // Hide the loading page once the page is fully loaded
            document.getElementById('load').style.display = "none";
            document.getElementById('content').style.visibility = "visible";
        }
    }



