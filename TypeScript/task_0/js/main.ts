// Define student interface :
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create 2 students :
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 22,
  location: "New York"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 25,
  location: "Los Angeles"
};

// Store students in an array :
const studentsList: Student[] = [student1, student2];

// Create table and add it to the body :
const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

// Add table headers
const thead: HTMLTableSectionElement = document.createElement("thead");
const headerRow: HTMLTableRowElement = document.createElement("tr");
const header1: HTMLTableCellElement = document.createElement("th");
const header2: HTMLTableCellElement = document.createElement("th");
header1.textContent = "First Name";
header2.textContent = "Location";
headerRow.appendChild(header1);
headerRow.appendChild(header2);
thead.appendChild(headerRow);
table.appendChild(thead);

// Add student rows to table :
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");
  const cell1: HTMLTableCellElement = document.createElement("td");
  const cell2: HTMLTableCellElement = document.createElement("td");

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;

  row.appendChild(cell1);
  row.appendChild(cell2);
  tbody.appendChild(row);
});

// Add tbody to table and add the table to the document body
table.appendChild(tbody);
document.body.appendChild(table);
