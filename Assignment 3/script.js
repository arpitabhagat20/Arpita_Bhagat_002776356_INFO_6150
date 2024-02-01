document.addEventListener('DOMContentLoaded', function () {
  const addStudentButton = document.getElementById('addStudentButton');
  const submitButton = document.getElementById('submitButton');
  let studentCount = 0;

  function addStudent() {
      studentCount++;
      const tableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
      const newRow = tableBody.insertRow();
      newRow.innerHTML = `
          <td class="checkbox-and-arrow">
              <input type="checkbox" class="select-checkbox" onchange="toggleRowSelect(this, ${studentCount})">
              <img src="down.png" class="expandable" alt="Expand" onclick="toggleDetails(${studentCount})">
          </td>
          <td>Student ${studentCount}</td>
          <td>Teacher ${studentCount}</td>
          <td>Approved</td>
          <td>Fall</td>
          <td>TA</td>
          <td>${12345 + studentCount}</td>
          <td>100%</td>
          <td><button class="delete-btn hidden" onclick="deleteRow(this, ${studentCount})">Delete</button></td>
          <td><button class="edit-btn hidden" onclick="editStudent(${studentCount})">Edit</button></td>
      `;
  }

  window.toggleRowSelect = function(checkbox, studentId) {
      const row = checkbox.closest('tr');
      if (checkbox.checked) {
          row.classList.add('selected');
          row.querySelector('.delete-btn').classList.remove('hidden');
          row.querySelector('.edit-btn').classList.remove('hidden');
          submitButton.classList.add('enabled');
          submitButton.disabled = false;
      } else {
          row.classList.remove('selected');
          row.querySelector('.delete-btn').classList.add('hidden');
          row.querySelector('.edit-btn').classList.add('hidden');
          if (document.querySelectorAll('.select-checkbox:checked').length === 0) {
              submitButton.classList.remove('enabled');
              submitButton.disabled = true;
          }
      }
  };

  window.deleteRow = function(button, studentId) {
      if (confirm(`Are you sure you want to delete Student ${studentId}?`)) {
          const row = button.closest('tr');
          row.remove();
          alert(`Student ${studentId} Record deleted successfully`);
          // Update the submit button state
          if (document.querySelectorAll('.select-checkbox:checked').length === 0) {
              submitButton.classList.remove('enabled');
              submitButton.disabled = true;
          }
      }
  };

  window.editStudent = function(studentId) {
      const studentData = document.querySelector(`tr:nth-child(${studentId + 1})`).innerText;
      const result = confirm(`Edit details of Student ${studentId}\n\n${studentData}\n\nPress OK to update or Cancel to dismiss.`);
      if (result) {
          alert(`Student ${studentId} data updated successfully`);
      }
  };

  window.toggleDetails = function(studentId) {
      const detailsRow = document.querySelector(`tr:nth-child(${studentId + 2})`);
      const img = document.querySelector(`tr:nth-child(${studentId + 1}) .expandable`);
      if (detailsRow && img) {
          if (detailsRow.classList.contains('hidden')) {
              detailsRow.classList.remove('hidden');
              img.src = 'up.png'; // Make sure you have an 'up.png' image available
          } else {
              detailsRow.classList.add('hidden');
              img.src = 'down.png';
          }
      }
  };

  addStudentButton.addEventListener('click', addStudent);
});
