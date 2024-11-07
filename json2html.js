// json2html.js

export default function json2html(data) {
    // Start table with the custom data-user attribute
    let html = '<table data-user="sushanthi701@gmail.com">';
    
    // Add table headers
    html += '<thead><tr>';
    // Get the keys from the first object to dynamically create table headers
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += '</tr></thead>';
    
    // Add table body
    html += '<tbody>';
    data.forEach(item => {
      html += '<tr>';
      headers.forEach(header => {
        // If a property is missing in an object, we can handle it by checking if it's undefined
        html += `<td>${item[header] !== undefined ? item[header] : ''}</td>`;
      });
      html += '</tr>';
    });
    html += '</tbody>';
    
    // Close the table
    html += '</table>';
    
    // Return the HTML table as a string
    return html;
  }
  