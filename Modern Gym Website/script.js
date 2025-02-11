      // Smooth scroll for navigation
      $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 60
        }, 500);
    });

    // Price calculator
    function calculatePrice() {
        const membershipType = $('#membership-type').val();
        const duration = parseInt($('#duration').val());
        
        let basePrice;
        switch(membershipType) {
            case 'basic':
                basePrice = 40;
                break;
            case 'premium':
                basePrice = 60;
                break;
            case 'elite':
                basePrice = 80;
                break;
        }
        
        // Apply discount for longer durations
        let discount = 1;
        if(duration >= 12) discount = 0.8;
        else if(duration >= 6) discount = 0.85;
        else if(duration >= 3) discount = 0.9;
        
        const totalPrice = basePrice * duration * discount;
        
        $('#price-display').html(`
            <strong>Total Price: $${totalPrice.toFixed(2)}</strong><br>
            ${discount < 1 ? `Includes ${((1-discount)*100).toFixed(0)}% discount!` : ''}
        `);
    }

    // Scroll to top button
    $(window).scroll(function() {
        if($(this).scrollTop() > 300) {
            $('#scroll-top').css('opacity', '1');
        } else {
            $('#scroll-top').css('opacity', '0');
        }
    });

    $('#scroll-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 500);
    });

    // Animate elements on scroll
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateOnScroll() {
        $('.class-card, .trainer-card').each(function() {
            if(isElementInViewport(this)) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    }

    // Set initial state for animation
    $('.class-card, .trainer-card').css({
        opacity: '0',
        transform: 'translateY(20px)',
        transition: 'all 0.5s'
    });

    // Bind animation to scroll
    $(window).on('scroll resize', animateOnScroll);
    animateOnScroll(); // Initial check

    $(window).scroll(function() {
        if($(this).scrollTop() > 300) {  // If page is scrolled more than 300px
            $('#scroll-top').css('opacity', '1');  // Show the button
        } else {
            $('#scroll-top').css('opacity', '0');  // Hide the button
        }
    });
    
    // Scroll to top when clicked
    $('#scroll-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 500);  // Smooth scroll to top in 500ms
    });

     // Modal functionality
     const modal = document.getElementById('joinModal');
     const joinButtons = document.querySelectorAll('#joinNow, #heroJoin, .cta-button');
     const closeModal = document.querySelector('.close-modal');

     joinButtons.forEach(button => {
         button.addEventListener('click', () => {
             modal.style.display = 'flex';
         });
     });

     closeModal.addEventListener('click', () => {
         modal.style.display = 'none';
     });

     window.addEventListener('click', (e) => {
         if (e.target === modal) {
             modal.style.display = 'none';
         }
     });
      // Form submission
      document.querySelector('.join-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const successMessage = document.querySelector('.success-message');
        successMessage.textContent = 'Thanks for joining! We\'ll contact you soon.';
        successMessage.style.display = 'block';
        modal.style.display = 'none';
        
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);

        e.target.reset();
    });