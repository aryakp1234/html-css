// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputs = form.querySelectorAll('input');
    let valid = true;
  
    inputs.forEach(input => {
      if (!input.value) {
        input.style.borderColor = 'red';
        valid = false;
      } else {
        input.style.borderColor = 'green';
      }
    });
  
    if (valid) {
      alert('Appointment booked successfully!');
      form.reset(); // Clears the form after successful booking
    } else {
      alert('Please fill all fields');
    }
  });
  
  // Carousel functionality for doctors' section
  let currentDoctor = 0;
  const doctors = document.querySelectorAll('.doctors__card');
  const nextBtn = document.querySelector('.ri-arrow-right-line');
  const prevBtn = document.querySelector('.ri-arrow-left-line');
  
//   function showDoctor(index) {
//     doctors.forEach((doctor, i) => {
//       doctor.style.display = i === index ? 'block' : 'none';
//     });
//   }
  
//   nextBtn.addEventListener('click', () => {
//     currentDoctor = (currentDoctor + 1) % doctors.length;
//     showDoctor(currentDoctor);
//   });
  
//   prevBtn.addEventListener('click', () => {
//     currentDoctor = (currentDoctor - 1 + doctors.length) % doctors.length;
//     showDoctor(currentDoctor);
//   });
  
  // Initialize carousel
  showDoctor(currentDoctor);
  