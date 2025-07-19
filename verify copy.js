function verifyUser() {
  const input = document.getElementById("discordUsername").value.trim();
  const status = document.getElementById("status");

  if (input === "") {
    status.textContent = "Please enter a username.";
    status.style.color = "orange";
    return;
  }

  if (whitelist.includes(input)) {
    status.textContent = "Access granted!";
    status.style.color = "lime";
    
    // ✅ Give access or redirect
    setTimeout(() => {
      window.location.href = "/members-area.html"; // Replace with real path
    }, 1500);
  } else {
    status.textContent = "Access denied. You're not whitelisted.";
    status.style.color = "red";
  }
}
