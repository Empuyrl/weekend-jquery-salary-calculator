$(function () {
    console.log("JQ and JS")
let monthlyCost = 0;
    $("#submitButton").on("click", addEmployee)
});
//readyNow function, on page load whatever is in here happens

function addEmployee() {
    const tableBody = $("tbody");
    const firstIn = $("firstIn");
    const LastIn = $("lastIn");
    const idIn = $("idIn");
    const titleIn = $("titleIn");
    const annualIn = $("annualIn");

    const employeeInfo = `<tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
            <td><button class="deleteButton">Delete</button></td>
      </tr>`
}