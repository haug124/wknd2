export default function decorate(block) {
  console.log('Social Links block detected:', block);

  const rows = [...block.children];
  block.innerHTML = ''; // Clear block content

  const table = document.createElement('table');
  table.classList.add('social-links-table');

  rows.forEach((row, index) => {
    console.log(`Processing row ${index}:`, row.innerHTML);

    const cols = [...row.children];
    if (cols.length < 2) return; // Skip invalid rows

    let iconText = cols[0].textContent.trim().toLowerCase();
    const linkElement = cols[1].querySelector('a');

    if (!linkElement) return;

    const tr = document.createElement('tr');
    
    const iconTd = document.createElement('td');
    iconTd.classList.add('icon-cell');
    const iconSpan = document.createElement('span');

    // Use Franklin notation for icons
    if (iconText.includes('twitter')) {
      iconSpan.textContent = ':twitter:';
    } else if (iconText.includes('instagram')) {
      iconSpan.textContent = ':instagram:';
    }

    console.log(`Setting Franklin icon for ${iconText}:`, iconSpan.textContent);

    iconTd.appendChild(iconSpan);
    tr.appendChild(iconTd);

    const linkTd = document.createElement('td');
    linkTd.classList.add('link-cell');
    linkTd.appendChild(linkElement);
    tr.appendChild(linkTd);

    table.appendChild(tr);
  });

  block.appendChild(table);
  console.log('Social Links block successfully processed!');
}
