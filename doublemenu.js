"use strict";

{
  const menuItems = document.querySelectorAll('.menu li a');
  const details = document.querySelectorAll('.details');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      details.forEach(detail => {
        detail.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}
