// $(function () {
//     console.log("JQ and JS")
// let totalMonthlyCost = 0;
//     $("#submitButton").on("click", addEmployee)
// });
// //readyNow function, on page load whatever is in here happens

// // function addEmployee() {
// //     const tableBody = $("tbody");
// //     const firstIn = $("firstInput");
// //     const lastIn = $("lastInput");
// //     const idIn = $("idInput");
// //     const titleIn = $("titleInput");
// //     const annualIn = $("annualInput");

// //     if (firstIn.val() === '' || lastIn.val() === '' || idIn.val() === '' || titleIn.val() === '' || annualIn.val() === '') {
// //         alert("Please fill out all of the infomation");
// //         return;
// //     }

// //     console.log(`The data is coming in: First, ${firstIn}, Last, ${lastIn}, Id, ${idIn}, Title, ${titleIn}, Annual, ${annualIn} `);

// //     const employeeInfo = `<tr>
// //         <td>${firstIn}</td>
// //         <td>${lastIn}</td>
// //         <td>${idIn}</td>
// //         <td>${titleIn}</td>
// //         <td>${annualIn}</td>
// //             <td><button class="deleteButton">Delete</button></td>
// //       </tr>`

// //       tableBody.apprend(employeeInfo);

// //       firstIn.val("");
// //       lastIn.val("");
// //       idIn.val("");
// //       titleIn.val("");
// //       annualIn.val("");

// }

$(document).ready(function () {
    let totalMonthlyCost = 0;
  
    // When the form is submitted
    $('#employeeForm').on('submit', function (event) {
      event.preventDefault();
  
      console.log('Form submitted');
  
      // Retrieve the values from the input fields
      const firstName = $('#firstName').val();
      const lastName = $('#lastName').val();
      const idNumber = $('#idNumber').val();
      const jobTitle = $('#jobTitle').val();
      const annualSalary = parseFloat($('#annualSalary').val());
  
      console.log('Employee details:', firstName, lastName, idNumber, jobTitle, annualSalary);
  
      // Calculate the monthly salary and add it to the total
      const monthlySalary = annualSalary / 12;
      totalMonthlyCost += monthlySalary;
  
      console.log('New total monthly cost:', totalMonthlyCost);
  
      // Update the total monthly cost on the DOM
      $('#totalMonthlyCost').text('$' + totalMonthlyCost.toFixed(2));
  
      // If the total monthly cost exceeds $20,000, add a red background color
      if (totalMonthlyCost > 20000) {
        $('#totalMonthlyCost').addClass('red-background');
      }
  
      // Append the employee details to the table
      $('#employeeTable').append(
        `<tr>
          <td>${firstName}</td>
          <td>${lastName}</td>
          <td>${idNumber}</td>
          <td>${jobTitle}</td>
          <td>${annualSalary.toFixed(2)}</td>
          <td><button class="deleteBtn">Delete</button></td>
        </tr>`
      );
  
      console.log('Employee added to the table');
  
      // Clear the input fields
      $('#firstName').val('');
      $('#lastName').val('');
      $('#idNumber').val('');
      $('#jobTitle').val('');
      $('#annualSalary').val('');
  
      console.log('Input fields cleared');
    });
  
    // When a delete button is clicked
    $('#employeeTable').on('click', '.deleteBtn', function () {
      console.log('Delete button clicked');
  
      // Remove the corresponding table row
      $(this).closest('tr').remove();
  
      console.log('Employee removed from the table');
    });
  });