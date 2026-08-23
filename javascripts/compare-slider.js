(() => {
  const sliders = document.querySelectorAll(".image-compare-slider");
  sliders.forEach((slider) => {
    const range = slider.querySelector(".image-compare-slider__range");
    const handle = slider.querySelector(".image-compare-slider__handle");
    const divider = slider.querySelector(".image-compare-slider__divider");

    const setPosition = (value) => {
      const clamped = Math.min(100, Math.max(0, Number(value)));
      const pos = `${clamped}%`;
      slider.style.setProperty("--pos", pos);
      if (handle) handle.style.setProperty("--pos", pos);
      if (divider) divider.style.setProperty("--pos", pos);
    };

    if (range) {
      setPosition(range.value || 50);
      range.addEventListener("input", (ev) => setPosition(ev.target.value));
    } else {
      setPosition(50);
    }
  });
})();
