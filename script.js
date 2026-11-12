const eggSwitch = document.querySelector("#eggSwitch");
const switchState = document.querySelector("#switchState");

eggSwitch.addEventListener("click", () => {
  const isOn = eggSwitch.getAttribute("aria-checked") === "true";
  eggSwitch.setAttribute("aria-checked", String(!isOn));
  switchState.textContent = isOn ? "OFF" : "ON";
});

// Keyboard activation is provided natively by the button element.
