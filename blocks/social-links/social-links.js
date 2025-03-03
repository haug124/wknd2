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

    const iconTd = document.createElement('td');
    iconTd.classList.add('icon-cell');

    // Preserve the existing CMS-generated icon formatting
    iconTd.innerHTML = cols[0].innerHTML;

    const linkElement = cols[1].querySelector('a');
    if (!linkElement) return;

    const tr = document.createElement('tr');
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
