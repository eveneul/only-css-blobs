import GUI from "lil-gui";

const gui = new GUI();

const circles = document.querySelectorAll(".circle");
const wrapper = document.querySelector(".wrapper");

const filters = {
  blur: 0,
  contrast: 0,
};

gui
  .add(filters, "blur", 0, 50)
  .step(1)
  .name("blur")
  .onChange((value) => {
    circles.forEach((circle) => {
      circle.style.filter = `blur(${value}px)`;
    });
  });

gui
  .add(filters, "contrast", 0, 50)
  .step(1)
  .name("contrast")
  .onChange((value) => {
    wrapper.style.filter = `contrast(${value})`;
  });
