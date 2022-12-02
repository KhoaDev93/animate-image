const imgElm = document.querySelector("img");
const frame = document.querySelector(".frame");

// input
const Xcount = 6;
const Ycount = 4;

frame.style.width = imgElm.width / Xcount + "px";
frame.style.height = imgElm.height / Ycount + "px";

const sleep = (ms) => new Promise((res) => setTimeout(() => res(), ms));

async function animate() {
  for (let y = 0; y < Ycount; y++) {
    for (let x = 0; x < Xcount; x++) {
      const percentY = 100 * (y / 4);
      const percentX = 100 * (x / 5);
      console.log({ percentY, percentX });
      imgElm.style.transform = `translate(
    -${percentX}%,
    -${percentY}%
    )`;
      await sleep(50);
    }
  }
  setTimeout(animate);
}
animate();
