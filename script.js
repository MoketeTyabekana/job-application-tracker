// Accessing the form
document.addEventListener("DOMContentLoaded", () => {
    const jobForm = document.getElementById('jobForm');
    const applicationsTable = document.getElementById('applicationsTable').getElementsByTagName('tbody')[0];
  
    jobForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addJobApplication();
      jobForm.reset();
    });
  
    function addJobApplication() {
      const company = document.getElementById('company').value;
      const title = document.getElementById('title').value;
      const date = document.getElementById('dateApplied').value; 
      const status = document.getElementById('status').value;
  
      const row = applicationsTable.insertRow();
  
      const companyCell = row.insertCell(0);
      const titleCell = row.insertCell(1);
      const dateCell = row.insertCell(2);
      const statusCell = row.insertCell(3);
      const actionCell = row.insertCell(4);
  
      companyCell.textContent = company;
      titleCell.textContent = title;
      dateCell.textContent = date;
      statusCell.textContent = status;
      statusCell.className = `status-${status.toLowerCase().replace(" ", "-")}`; 
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => row.remove());
      actionCell.appendChild(deleteBtn);
    }
  });
  