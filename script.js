const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')

box1.addEventListener('click', () => {
    window.location.href = "Speech2Text/Speech2Text.html";
})

gsap.to("#box1", {
    scale:0.90,
    duration: 4,
    ease: "power4.out",
    force3D: true
});

box2.addEventListener('click', () => {
    window.location.href = "Text2Speech/Text2Speech.html";
})
gsap.to("#box2", {
    scale:0.90,
    duration: 4,
    ease: "power4.out",
    force3D: true
});

gsap.to(".word",{
    scale:0.80,
    duration: 2,
    ease: "power4.out",
    force3D: true
})