const targetDate = new Date("2027-04-27T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  const days = Math.max(0, Math.ceil(diff / 86400000));
  document.getElementById("days").textContent = days;
}

updateCountdown();
setInterval(updateCountdown, 60000);
