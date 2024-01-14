const urlParams = new URLSearchParams(window.location.search);
const isCropPage = Boolean(urlParams.get('isCropPage'));

if (isCropPage) {
  const styleTag = document.createElement('style');

  styleTag.innerHTML = `
.navbar {
  display: none;
}

.footer {
  display: none;
}
`;

  document.head.appendChild(styleTag);
}
