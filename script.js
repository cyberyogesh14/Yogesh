// Sections
const landing = document.getElementById("landing");
const access = document.getElementById("access");
const portfolio = document.getElementById("portfolio");

// Button
const accessBtn = document.getElementById("accessBtn");

// Fingerprint
const fpBox = document.getElementById("fingerprintBox");
const fpStatus = document.getElementById("fpStatus");
const accessGranted = document.getElementById("accessGranted");
const terminalText = document.getElementById("terminalText");

// Terminal lines
const terminalLines = [
  "Initializing secure system...",
  "Simulating biometric scan...",
  "Decrypting credentials...",
  "Verifying access level...",
  "Access level: ADMIN",
  "Welcome Yogesh."
];

// STEP 1 → STEP 2
accessBtn.addEventListener("click", () => {
  landing.classList.add("hidden");
  access.classList.remove("hidden");
});

// Fake fingerprint scan (NO POPUP)
fpBox.addEventListener("click", () => {
  fpBox.classList.add("scanning");
  fpStatus.innerText = "Scanning fingerprint...";

  setTimeout(() => {
    // Success
    fpBox.style.display = "none";
    fpStatus.style.display = "none";
    accessGranted.classList.remove("hidden");

    startTerminal();

    // STEP 2 → STEP 3
    setTimeout(() => {
      access.classList.add("hidden");
      portfolio.classList.remove("hidden");
    }, 4500);

  }, 2500); // scan duration
});

// Terminal typing
function startTerminal() {
  let line = 0;
  let char = 0;
  terminalText.innerHTML = "";

  function type() {
    if (line < terminalLines.length) {
      if (char < terminalLines[line].length) {
        terminalText.innerHTML += terminalLines[line][char];
        char++;
        setTimeout(type, 35);
      } else {
        terminalText.innerHTML += "\n";
        line++;
        char = 0;
        setTimeout(type, 400);
      }
    }
  }
  type();
}
