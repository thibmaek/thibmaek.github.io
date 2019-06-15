(() => {
  if (typeof window !== `undefined`) {
    const isDarkMode = window.localStorage.getItem(`theme`) === `dark`;
    if (isDarkMode) {
      require(`prismjs/themes/prism-dark.css`);
    }
    require(`prismjs/themes/prism.css`);
  }
})();
