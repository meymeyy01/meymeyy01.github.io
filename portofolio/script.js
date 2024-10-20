const images = document.querySelectorAll('img');

     
        images.forEach(image => {
            image.addEventListener('click', function() {
                
                images.forEach(img => img.classList.remove('fullscreen'));

               
                image.classList.toggle('fullscreen');
            });
        });