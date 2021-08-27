let _grid = document.getElementsByClassName("grid-container");

            _grid.addEventListener("mouseenter", function( event ) {
            // highlight the mouseenter target
            event.target.style.color = "purple";

            // reset the color after a short delay
            setTimeout(function() {
                event.target.style.color = "";
            }, 500);
            }, false);

            // This handler will be executed every time the cursor
            // is moved over a different list item
            _grid.addEventListener("mouseover", function( event ) {
            // highlight the mouseover target
            event.target.style.color = "orange";

            // reset the color after a short delay
            setTimeout(function() {
                event.target.style.color = "";
            }, 500);
            }, false);
            