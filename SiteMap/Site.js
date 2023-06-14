// Define the URLs to include in the site map
const urls = [
  'https://example.com/page1',
  'https://example.com/page2',
  'https://example.com/page3'
];

// Create an XML document object
const xmlDoc = document.implementation.createDocument(null, 'urlset');

// Add a namespace attribute to the root element
const rootEl = xmlDoc.documentElement;
rootEl.setAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

// Loop through the URLs and add them to the XML document
for (let i = 0; i < urls.length; i++) {
  const url = urls[i];

  // Create a new <url> element
  const urlEl = xmlDoc.createElement('url');

  // Add the <loc> element with the URL value
  const locEl = xmlDoc.createElement('loc');
  const locText = xmlDoc.createTextNode(url);
  locEl.appendChild(locText);
  urlEl.appendChild(locEl);

  // Add the <lastmod> element with the current date
  const lastmodEl = xmlDoc.createElement('lastmod');
  const lastmodText = xmlDoc.createTextNode(new Date().toISOString());
  lastmodEl.appendChild(lastmodText);
  urlEl.appendChild(lastmodEl);

  // Add the <changefreq> element with the default value of 'monthly'
  const changefreqEl = xmlDoc.createElement('changefreq');
  const changefreqText = xmlDoc.createTextNode('monthly');
  changefreqEl.appendChild(changefreqText);
  urlEl.appendChild(changefreqEl);

  // Add the <priority> element with the default value of '0.5'
  const priorityEl = xmlDoc.createElement('priority');
  const priorityText = xmlDoc.createTextNode('0.5');
  priorityEl.appendChild(priorityText);
  urlEl.appendChild(priorityEl);

  // Add the <url> element to the root element
  rootEl.appendChild(urlEl);
}

// Convert the XML document to a string
const serializer = new XMLSerializer();
const xmlString = serializer.serializeToString(xmlDoc);

// Create a new file on the server with the XML content
// This code assumes you have a server-side script that can create files
// and write content to them. You may need to modify this code to fit your
// specific server environment.
const xhr = new XMLHttpRequest();
xhr.open('POST', 'create_sitemap.php');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send('xml=' + encodeURIComponent(xmlString));
