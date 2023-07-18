
fetch('https://random-data-api.com/api/v2/users?size=15&is_xml=true', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
})
.then(response => response.json())
.then(data => {
  const userTableBody = document.getElementById('userTableBody');
  console.log(data);

  // Iterate over each user and create a table row
  data.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.first_name}</td>
      <td>${user.last_name}</td>
      <td>${user.email}</td>
      <td>${user.subscription.plan}</td>
    `;
    userTableBody.appendChild(row);
  });
})
.catch(error => {
  console.error('Error:', error);
});