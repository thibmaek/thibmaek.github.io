(() => {
  const isDarkMode = localStorage.getItem(`theme`) === `dark`;
  if (isDarkMode) {
    require(`prismjs/themes/prism-dark.css`);
  }
  require(`prismjs/themes/prism.css`);
})();
