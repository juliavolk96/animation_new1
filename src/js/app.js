// TODO: write code here

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.collapsible-button');
  const container = document.querySelector('.collapsible-container');

  let isCollapsed = true;

  button.addEventListener('click', () => {
    if (isCollapsed) {
      container.style.maxHeight = `${container.scrollHeight}px`;
    } else {
      container.style.maxHeight = '0';
    }
    isCollapsed = !isCollapsed;
  });
});
