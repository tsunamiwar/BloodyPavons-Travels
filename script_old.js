// Accessibility & interactions
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Toggle recipe details
for (const btn of document.querySelectorAll('.btn-toggle')) {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('aria-controls');
    const details = document.getElementById(id);
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    if (details) {
      details.hidden = expanded;
    }
  });
}

// Share functionality (Web Share API + fallback)
const shareBtn = document.getElementById('shareBtn');
const copyBtn = document.getElementById('copyLinkBtn');
const copyStatus = document.getElementById('copyStatus');

async function copyLink() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    if (copyStatus) {
      copyStatus.textContent = 'Link copied!';
      setTimeout(() => copyStatus.textContent = '', 2500);
    }
  } catch (e) {
    if (copyStatus) {
      copyStatus.textContent = 'Copy not available on this browser.';
    }
  }
}

if (copyBtn) copyBtn.addEventListener('click', copyLink);

if (shareBtn) {
  shareBtn.addEventListener('click', async () => {
    const shareData = {
      title: 'Taste Portugal — Traditional Recipes & Culture',
      text: 'Discover authentic Portuguese recipes and cultural stories.',
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // user cancelled
      }
    } else {
      copyLink();
    }
  });
}
