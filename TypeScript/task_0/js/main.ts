interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create 2 student objects :
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Store students in an array :
const studentsList: Student[] = [student1, student2];

// Function to render a table with student details
function renderTable(): void {
  // Create table and add it to the body
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");

  // Create table headers
  const th1 = document.createElement("th");
  th1.textContent = "First Name";
  const th2 = document.createElement("th");
  th2.textContent = "Location";
  headerRow.appendChild(th1);
  headerRow.appendChild(th2);
  table.appendChild(headerRow);

  // Loop through the studentsList and create rows
  studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  // Add table to the body
  document.body.appendChild(table);
}

// render table to check
renderTable();
