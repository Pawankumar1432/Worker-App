document.querySelectorAll('.service-box').forEach(box => {
    box.addEventListener('click', () => {
      alert(`${box.innerText} service selected!`);
      // You can redirect to other pages or trigger modals here
      
    });
  });
  