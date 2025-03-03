export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = ''; // Clear the block content

  const table = document.createElement('table');
  table.classList.add('social-links-table');

  rows.forEach((row) => {
    const cols = [...row.children];

    if (cols.length < 2) return; // Ensure both icon and link exist

    const iconText = cols[0].textContent.trim().toLowerCase();
    const linkElement = cols[1].querySelector('a');

    if (!linkElement) return;

    // Create table row
    const tr = document.createElement('tr');

    // Create icon cell
    const iconTd = document.createElement('td');
    iconTd.classList.add('icon-cell');
    const iconImg = document.createElement('img');

    if (iconText.includes('twitter')) {
      iconImg.src = '/icons/twitter.svg'; // Adjust path if necessary
      iconImg.alt = 'Twitter';
    } else if (iconText.includes('instagram')) {
      iconImg.src = '/icons/instagram.svg'; // Adjust path if necessary
      iconImg.alt = 'Instagram';
    }

    iconTd.appendChild(iconImg);
    tr.appendChild(iconTd);

    // Create link cell
    const linkTd = document.createElement('td');
    linkTd.classList.add('link-cell');
    linkTd.appendChild(linkElement);
    tr.appendChild(linkTd);

    table.appendChild(tr);
  });

  block.appendChild(table);
}
