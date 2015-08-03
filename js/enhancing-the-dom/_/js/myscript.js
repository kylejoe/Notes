(function() {

    //Checks if artists page to prevent console error
    if (window.location.href.indexOf('artists.html') > 1) {

        //Selecting our node
        var myNode = document.querySelector('#artlist .pixgrid ul');

        myNode.addEventListener('click', function(e){

            if (e.target.tagName === 'IMG') {
                
                var myOverlay = document.createElement('div');
                myOverlay.id = 'overlay';
                document.body.appendChild(myOverlay);

                //Set up overlay styles
                myOverlay.style.position = 'absolute';
                myOverlay.style.top = 0;
                myOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
                myOverlay.style.cursor = 'pointer';

                //Resize and position overlay
                myOverlay.style.width = window.innerWidth + 'px'; //because this is CSS there must be a measurement system 'px'
                myOverlay.style.height = window.innerHeight + 'px';
                myOverlay.style.top = window.pageYOffset + 'px';
                myOverlay.style.left = window.pageXOffset + 'px';

                //Create image element
                var imageSrc = e.target.src; //Set to source of event target
                var largeImage = document.createElement('img');
                largeImage.id = 'largeImage';
                largeImage.src = imageSrc.substr(0, imageSrc.length-7) + '.jpg';
                largeImage.style.display = 'block';
                largeImage.style.position = 'absolute';
                // myOverlay.appendChild(largeImage);

                //Wait until the image has loaded
                largeImage.addEventListener('load', function() {

                    //Resize is taller
                    if (this.height > window.innerHeight) {
                        this.ratio = window.innerHeight / this.height;
                        this.height = this.height * this.ratio;
                        this.width = this.width * this.ratio;
                    };

                    if (this.width > window.innerWidth) {
                        this.ratio = window.innerWidth / this.width;
                        this.height = this.height * this.ratio;
                        this.width = this.width * this.ratio;
                    };

                    //Center image before it gets appended
                    centerImage(this);
                    myOverlay.appendChild(largeImage);

                }); //Image has loaded

                largeImage.addEventListener('click', function(){
                    if (myOverlay) {
                        window.removeEventListener('resize', window, false);
                        window.removeEventListener('scroll', window, false);
                        //Remove child always works on the parent of the node you want to remove
                        myOverlay.parentNode.removeChild(myOverlay);
                    };
                }, false);

                window.addEventListener('scroll', function(){
                    if (myOverlay) {
                        myOverlay.style.top = window.pageYOffset + 'px';
                        myOverlay.style.top = window.pageXOffset + 'px';
                    };
                }, false);

                window.addEventListener('resize', function(){
                    if (myOverlay) {
                        myOverlay.style.width = window.innerWidth + 'px';
                        myOverlay.style.height = window.innerHeight + 'px';
                        myOverlay.style.top = window.pageYOffset + 'px';
                        myOverlay.style.left = window.pageXOffset + 'px';
                        //Recenter image
                        centerImage(largeImage);
                    };
                }, false);


            }; //Target is an image

        }, false); //Set to false so event bubbles properly just to tager list //Image is clicked

        function centerImage(theImage){
            var myDifX = (window.innerWidth - theImage.width)/2;
            var myDifY = (window.innerHeight - theImage.height)/2;

            theImage.style.top = myDifY + 'px';
            theImage.style.left = myDifX + 'px';

            return theImage;
        }

    } //Checks URL

})(); //Self executing function