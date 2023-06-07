function show_testimonial() {
  const $container = document.querySelector(".container");
  const $buttons = document.querySelectorAll(".wrapperButtons__button");
  $buttons.forEach((bnt, index) => {
    bnt.addEventListener("click", () => {
      let position = index;
      let move_image = position * -50;
      $container.style.transform = `translateX(${move_image}%)`;
    });
  });
}
show_testimonial();
