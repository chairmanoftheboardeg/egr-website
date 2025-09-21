// --- hero slideshow (crossfade) ---
const slides = [
  "/assets/hq.jpg",
  "/assets/a359-1.jpg",
  "/assets/a359-2.jpg",
  "/assets/a359-3.jpg",
  "/assets/a359-4.jpg"
];
const hero = document.querySelector(".hero");
if (hero){
  // build slide divs
  slides.forEach((src, i) => {
    const d = document.createElement("div");
    d.className = "slide" + (i===0 ? " active" : "");
    d.style.backgroundImage = `url('${src}')`;
    hero.prepend(d); // put behind overlay/text
  });
  let i = 0;
  setInterval(()=>{
    const nodes = Array.from(document.querySelectorAll(".slide"));
    nodes[i].classList.remove("active");
    i = (i+1) % nodes.length;
    nodes[i].classList.add("active");
  }, 5000);
}

// --- reveal on scroll (subtle like Celestria) ---
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add("show"); io.unobserve(e.target); }
  });
},{threshold:0.15});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
