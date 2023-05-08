$(document).ready(function () {
    console.log("JQ and JS")
    let totalMonthlyCost = 0;
  //onReady function, controls what runs when the page loads
    // When the form is submitted
    //event for something happening, in this case the click of the submit button.
    //prevent allows for an event to be cancelled if an event is cancelable, in this case the submittion of a form.
    $('#employeeForm').on('submit', function (event) {
      event.preventDefault();
  
      console.log('Form submitted');
  
      // Retrieve the values from the input fields
      //constant variables as each data part is unique to each employee
      //.val gets the first variable, which in this case is the employee info 
      //parseFloat is used for salary in order to have the value returned as a number instead of a string
      //value is a string because of the form format
      //reminder of basic jquery form $('');
      const firstName = $('#firstInput').val();
      const lastName = $('#lastInput').val();
      const idNumber = $('#idInput').val();
      const title = $('#titleInput').val();
      const annualSalary = parseFloat($('#annualInput').val());
  
      console.log('Employee details:', firstName, lastName, idNumber, title, annualSalary);
    
    // Calculate the monthly salary and add it to the total
    //the 12 is in order to get the monthly, since annual would be yearly
      const monthlySalary = annualSalary / 12;
      totalMonthlyCost += monthlySalary;
  
      console.log('New total monthly cost:', totalMonthlyCost);
  
      // Update the total monthly cost on the DOM
      //$ is so the total cost is formatted correctly on the Dom
      //toFixed chooses how many decimal points are kept,helpful for things like math and finances
      //.text gets or sets the content of the element selected
      $('#totalMonthlyCost').text('$' + totalMonthlyCost.toFixed(2));
  
      // If the total monthly cost exceeds $20,000, add a red background color
      //also calling to a css class in order to apply a change in color
      //adding a class using jquery
      if (totalMonthlyCost > 20000) {
        $('#totalMonthlyCost').addClass('red-background');
      }
  
      // Append the employee details to the table
      //all of the information to be added to the form when submit is clicked
      //also creates a delete button to be used in the form
      //grabbing all of the rows of the table body,not the table itself
      //delete button can be called action in html as well
      $('#employeeTable').append(
        `<tr>
          <td>${firstName}</td>
          <td>${lastName}</td>
          <td>${idNumber}</td>
          <td>${title}</td>
          <td>${annualSalary.toFixed(2)}</td>
          <td><button class="deleteBtn">Delete</button></td>
        </tr>`
      );
  
      console.log('Employee added to the table');
  
      // Clear the input fields
      //values are returned in strings, thus ''
      //id because the .val was used earlier in tge code as well
      $('#firstInput').val('');
      $('#lastInput').val('');
      $('#idInput').val('');
      $('#titleInput').val('');
      $('#annualInput').val('');
  
      console.log('Input fields cleared');
    });
  
    // When a delete button is clicked
    //targeting the body of the table again
    //don't forget commas when using this method
    $('#employeeTable').on('click', '.deleteBtn', function () {
      console.log('Delete button clicked');
  
      // Remove the corresponding table row
      //closet deletes only the one row when asked
      //this refers to the element within the event
      $(this).closest('tr').remove();
  
      console.log('Employee removed from the table');
    });
  });

//   if (firstInput.val() === '' || lastInput.val() === '' || idInput.val() === '' || titleInput.val() === '' || annualInput.val() === '') {
    //         }
    //     console.log(`The data is coming in: First, ${firstInput}, Last, ${lastInput}, Id, ${idInput}, Title, ${titleInput}, Annual, ${annualInput} `);
    //not sure why this statement/log doesn;t work, think I'm close. Check more if time allows.  
    