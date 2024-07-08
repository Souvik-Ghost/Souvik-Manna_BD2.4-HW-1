let express = require('express');
const { title } = require('process');
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`The server is listening at http://localhost:${port}`);
});

//1
let heights1 = [160, 175, 180, 165, 170];
function sortHeightsAscending(height1, height2) {
  return height1 - height2;
}
app.get('/heights/sort-ascending', (req, res) => {
  let heightsCopy = heights1.slice();
  heightsCopy.sort(sortHeightsAscending);
  res.json(heightsCopy);
});
//heights/sort-ascending

//2
let heights2 = [160, 175, 180, 165, 170];
function sortHeightsDescending(height1, height2) {
  return height2 - height1;
}
app.get('/heights/sort-descending', (req, res) => {
  let heightsCopy = heights2.slice();
  heightsCopy.sort(sortHeightsDescending);
  res.json(heightsCopy);
});
//heights/sort-descending

//3
let employees = [
  {name: 'Rahul', employeeId: 101, salary: 50000},
  {name: 'Sita', employeeId: 102, salary: 60000},
  {name: 'Amit', employeeId: 103, salary: 45000},
];
function sortEmployeesBySalaryDescending(employee1, employee2) {
  return employee2.salary - employee1.salary;
}
app.get('/employees/sort-by-salary-descending', (req, res) => {
  let employeesCopy = employees.slice();
  employeesCopy.sort(sortEmployeesBySalaryDescending);
  res.json(employeesCopy)
});
//employees/sort-by-salary-descending

//4
let books = [
  {title: 'The God Of Small Things', author: 'Arundhuti Roy', year: 340},
  {title: 'The Palace Of Illusions', author: 'Chitra Banerjee', year: 360},
  {title: 'The White Tiger', author: 'Arvind Adiga', year: 321}
];
function sortBooksByPagesAscending(book1, book2) {
  return book1.year - book2.year;
}
app.get('/books/sort-by-pages-ascending', (req, res) => {
  let booksCopy = books.slice();
  booksCopy.sort(sortBooksByPagesAscending);
  res.json(booksCopy);
});
//books/sort-by-pages-ascending