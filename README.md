<h1> 3 Feature's are:</h1>
<li>Course Details Page: Create a dedicated page where users can view detailed information about a selected course. This page can display not only the course title, description, price, and credit hours but also additional details .</li>
<li>User Friendly: User Can see every details on cart whele adding ,user cant't add same course twice and limits between 20 Credit otherwise its alart user so user can understand about this </li>
<li>Responsive Design: Ensure that Ir application is fully responsive and mobile-friendly. This will provide a seamless experience for users accessing Ir application from various devices, including smartphones and tablets.</li>

<h1> managed the state in my assignment project:</h1>
<ol>
  <li>Course Selection (Credits):I used the useState hook to manage the credits state, which is an array representing the selected courses. When a user selects a course, I update this state to include the selected course.</li>
  <li>Total Credit Hours:I used the useState hook to manage the totalCredit state, which tracks the total credit hours of the selected courses. Whenever a course is selected or removed, I calculate and update this state accordingly.</li>
  <li>Remaining Credit Hours:I used the useState hook to manage the remainingCredit state, which represents the remaining credit hours that a user can select. This state is calculated based on the maximum credit limit (20) minus the total credit hours of selected courses.</li>
  <li>Total Price:I used the useState hook to manage the totalPrice state, which keeps track of the total price of the selected courses. This state is updated whenever a course is added to the selection.</li>
  <li>Handling Course Selection:In Ir handleSelect function, I effectively manage the state by checking if a selected course already exists in the credits array. If it doesn't exist, I update the state by adding the selected course, updating the total credit hours, remaining credit hours, and total price accordingly.</li>
  <li>Alerts for Existing Selections:I use the alert function to notify users when they attempt to select a course that is already in their selection, which is a good way to provide feedback to users.</li>
</ol>
