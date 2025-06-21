const wrapper = document.querySelector(".Blog-cards-wrapper");
  const thumb = document.querySelector(".scroll-thumb");

  wrapper.addEventListener("scroll", () => {
    const scrollLeft = wrapper.scrollLeft;
    const scrollWidth = wrapper.scrollWidth - wrapper.clientWidth;
    const percent = (scrollLeft / scrollWidth) * 100;

    // Set left position instead of width for fixed thumb width
    thumb.style.transform = `translateX(${percent}%)`;
  });

  function openSidebar() {
    document.getElementById("sidebar").style.right = "0";
  }

  function closeSidebar() {
    document.getElementById("sidebar").style.right = "-300px";
  }

