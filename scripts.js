// === Countdown Timer to 2027 Term Renewal ===
function startCountdown() {
  const endDate = new Date("2027-01-01T00:00:00Z");
  const timerEl = document.getElementById("renewal-timer");

  function updateTimer() {
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
      timerEl.textContent = "Renewal Time Reached!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    timerEl.textContent = `${days}d ${hrs}h ${mins}m ${secs}s`;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// === Server Status (Placeholder) ===
function checkServerStatus() {
  const statusEl = document.getElementById("server-status");

  // Static placeholder logic — can be replaced with real query later
  const isOnline = true; // Change manually if needed

  if (isOnline) {
    statusEl.textContent = "🟢 KVM4 Online – AE2 Modpack Ready";
    statusEl.style.borderLeftColor = "#00ff88";
  } else {
    statusEl.textContent = "🔴 Server Offline";
    statusEl.style.borderLeftColor = "#ff3366";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  startCountdown();
  checkServerStatus();
});
