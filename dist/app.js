const getNewDate = () => {
  const clock = document.getElementById("clock");
  let time = new Date();
  let hours = time.getHours().toString().padStart(2, "0");
  let minutes = time.getMinutes().toString().padStart(2, "0");
  let seconds = time.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
};
setInterval(getNewDate, 1000);
