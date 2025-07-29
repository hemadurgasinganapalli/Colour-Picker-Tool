const colorPicker = document.getElementById("colorPicker");
const hexCode = document.getElementById("hexCode");
const rgbCode = document.getElementById("rgbCode");
const copyBtn = document.getElementById("copyBtn");

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

colorPicker.addEventListener("input", () => {
  const hex = colorPicker.value;
  const rgb = hexToRgb(hex);

  document.body.style.backgroundColor = hex;
  hexCode.textContent = hex;
  rgbCode.textContent = rgb;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(hexCode.textContent)
    .then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy HEX"), 1500);
    });
});
