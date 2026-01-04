// Sections
const landing = document.getElementById("landing");
const access = document.getElementById("access");
const portfolio = document.getElementById("portfolio");

// Button
const accessBtn = document.getElementById("accessBtn");

// Fingerprint elements
const fpBox = document.getElementById("fingerprintBox");
const fpStatus = document.getElementById("fpStatus");
const accessGranted = document.getElementById("accessGranted");
const terminalText = document.getElementById("terminalText");

// Terminal content
const terminalLines = [
  "Initializing secure system...",
  "Checking biometric credentials...",
  "Decrypting user profile...",
  "Access level verified...",
  "Welcome Yogesh."
];

// STEP 1 → STEP 2
accessBtn.addEventListener("click", () => {
  landing.classList.add("hidden");
  access.classList.remove("hidden");
});

// Fingerprint click
fpBox.addEventListener("click", async () => {
  fpBox.classList.add("scanning");
  fpStatus.innerText = "Scanning fingerprint...";

  if (!window.PublicKeyCredential) {
    fpStatus.innerText = "Biometric not supported";
    fpBox.classList.remove("scanning");
    return;
  }

  try {
    await navigator.credentials.get({
      publicKey: {
        challenge: new Uint8Array(32),
        timeout: 60000,
        userVerification: "required"
      }
    });

    // SUCCESS
    fpBox.style.display = "none";
    fpStatus.style.display = "none";
    accessGranted.classList.remove("hidden");

    startTerminal();

    // STEP 2 → STEP 3
    setTimeout(() => {
      access.classList.add("hidden");
      portfolio.classList.remove("hidden");
    }, 5000);

  } catch {
    fpStatus.innerText = "Authentication failed ❌";
    fpBox.classList.remove("scanning");
  }
});

// Terminal typing effect
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
