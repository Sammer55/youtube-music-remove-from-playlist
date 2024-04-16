const textToFind = "Remover da playlist";
const dots = document.body.querySelectorAll(
  ".dropdown-trigger.ytmusic-menu-renderer"
);

for (var i = 0; i < dots.length; i++) {
  dots[i].click();
  await new Promise((r) => setTimeout(r, 100));
  const elements = document.querySelectorAll(
    "yt-formatted-string.text.style-scope.ytmusic-menu-service-item-renderer"
  );

  for (const element of elements) {
    if (element.textContent.trim() === textToFind) {
      element.click();
      await new Promise((r) => setTimeout(r, 500));
      break;
    }
  }
  await new Promise((r) => setTimeout(r, 500));
}
