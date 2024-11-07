// json2html.js
export default function json2html(data) {
    // Extract column headers from data
    const headers = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));
  
    // Start building the HTML table string
    let html = '<table data-user="rohith28chowki@gmail.com">';
  
    // Build the table header
    html += '<thead><tr>';
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += '</tr></thead>';
  
    // Build the table body
    html += '<tbody>';
    data.forEach(row => {
      html += '<tr>';
      headers.forEach(header => {
        html += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
      });
      html += '</tr>';
    });
    html += '</tbody></table>';
  
    // Return the complete HTML table as a string
    return html;
  }
  