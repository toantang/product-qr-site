// script.js
document.getElementById("year").textContent = new Date().getFullYear();

// --- Utility functions ---
function getParam(key) {
  const url = new URL(window.location.href);
  const value = url.searchParams.get(key);
  return value ? decodeURIComponent(value) : null;
}

function safeHTML(str) {
  if (!str) return "";
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// --- Main logic ---
(function () {
  const id = getParam("id");
  const name = getParam("name");
  const desc = getParam("desc");

  const container = document.getElementById("product-card");

  if (!id && !name && !desc) {
    container.innerHTML = `
      <p class="empty">No product data found.</p>
      <p class="hint">Scan a QR code to see product details here.</p>
    `;
    return;
  }

  container.innerHTML = `
    <div class="product-info">
      <h2>${safeHTML(name || "Unnamed Product")}</h2>
      ${id ? `<p><strong>ID:</strong> ${safeHTML(id)}</p>` : ""}
      ${desc ? `<p>${safeHTML(desc)}</p>` : ""}
    </div>
  `;
})();
