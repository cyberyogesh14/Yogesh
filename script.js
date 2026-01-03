const terminalLines = [
  "Initializing system...",
  "Loading cyber modules...",
  "Connecting to secure network...",
  "Access granted ✔",
  "User: Yogesh",
  "Role: Cyber Security Associate",
  "Skills loaded: HTML, CSS, JS, React, Linux, Kali",
  "Status: Ready for deployment 🛡️"
];

let lineIndex = 0;
let charIndex = 0;

function grantAccess() {
  document.getElementById("landing").style.display = "none";
  document.getElementById("access").classList.remove("hidden");

  typeTerminal();
}

function typeTerminal() {
  const terminal = document.getElementById("terminalText");

  if (lineIndex < terminalLines.length) {
    if (charIndex < terminalLines[lineIndex].length) {
      terminal.innerHTML += terminalLines[lineIndex][charIndex];
      charIndex++;
      setTimeout(typeTerminal, 40);
    } else {
      terminal.innerHTML += "\n";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeTerminal, 300);
    }
  } else {
    // AFTER TERMINAL DONE → OPEN PORTFOLIO
    setTimeout(() => {
      document.getElementById("access").style.display = "none";
      document.getElementById("portfolio").classList.remove("hidden");
    }, 1000);
  }
}
