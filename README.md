<<<<<<< HEAD
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/r9S7wyqT)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15290727&assignment_repo_type=AssignmentRepo)
# Project Week 2: To-do list application (Cont.)

## Introduction
As of now, you have completed Project Week 1 and should now have a React Application that can navigate to an **About me** page and a **Home** page currently hosting the To-do List Application that we will continue to build upon for Project Week 2. For Project Week 2, Look to implement more Material UI components to the front-end of your to-do list web application to give it a sleek and modern appearance. Aside from styling, A typical user wants to be able to use a to-do list to organize tasks. Keeping user stories in mind when designing applications helps determine important features. We encourage you to take a unique approach to this lab, as there is no one right answer. 

- [**Material Design**](https://material.io/design/introduction) is a design system that can guide you on what UI decisions to make if you would like to explore best practices, but functionality is the key focus of the lab.
- No back-end is required for this lab. All data (tasks) should live in the front-end.

## Requirements
Feature requirements (Week 2 task is complete when you):
+ Provide the date and time of item addition
+ Allow users to mark items as complete
+ Remove completed items from the list
+ Validate there are no duplicated items

Implementation requirements:
+ Use [**Material UI components**](https://material-ui.com/) at least once throughout the app
+ Use Javascript's list.map function at least once to manipulate list items
+ Implement at least one **functional component**

Hints (Useful Resources):
+ Click [**here**](https://react.dev/learn/rendering-lists) for an example on utilizing the list.map function

## Instructions

### To-do list application
1. In this step, we will be adding the feature to display the date and time an item was added along with its task to the user. Also, we will be implementing a new component to display each item in the Todo list.
      + Navigate to `src/component/AddTodo.js`
        1. In the Constructor method, add a new key w/ the name `date` set to an empty string to represent the current date 
        2. In the handleChange function, place the newly created `date` key and update the value using `Date().toLocaleString('en-US')` method
        3. In the handleSubmit function, make sure to set the newly created `date` key back to an empty string after passing the user values to the addTodo function
      + Navigate to `src/component/todos.js`
        1. If not present, import ListItemButton and ListItemText components from the material UI library
        2. Within the Card component, substitute the CardContent component with a ListItemButton Component
            + **Before:**
               ```
                  <CardContent>
                    <span style={{ padding: "50px" }}>{todo.content}</span>
                  </CardContent>
               ```
            + **After:**
               ```
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary={todo.content}/>
                  </ListItemButton>
                ```
        3. Within the ListItemText component, add the `secondary` property next to the `primary` property to display the date for each task
        4. (optional) Add `style={{marginTop:10}}` to the Card component to give space between each item in the Todo list and avoid item cards from overlapping each other

2. In this step, we will be adding the checkbox feature to correspond to a task being completed
      + Navigate to `src/component/todos.js`
        1. If not present, import Checkbox from the material UI library
        2. Within the ListItemButton component, Add a Checkbox component before the ListItemText component with a `style` property set to `paddingLeft:0` and a `color` property set to `primary`. **Hint:** `color` is a property of its own and not a property of `style`.
3. In this step, we will be adding the delete feature which will remove an item from the Todo list once it is complete (user clicks on checkbox button)
      + Navigate to `src/pages/Home.js`
        1. Implement the code snippet below for the deleteTodo() function before or after the addTodo() function\
        **Note:** Click [**here**](https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples) to learn more about the **filter** function and how it is being used w/in the deleteTodo function to remove an item from our Todo list
        ```
        deleteTodo = (id) => {
            const todos = this.state.todos.filter((todo) => {
              return todo.id !== id;
            });
            this.setState({
              todos: todos,
            });
        };
        ```
        2. Within the Todos component in the render() function, pass in an additional property\
           `deleteTodo={make your change}` to correspond to the deleteTodo function. **Hint:** replace `make your change` with deleteTodo() function
      + Navigate to `src/component/todos.js`
        1. Add `deleteTodo` as a new property to the Todos component to correspond to the new deleteTodo() function
        2. Within the Checkbox component, add an onClick event handler to call the deleteTodo() function and pass the todo item's `id` as a parameter. **Hint:** Use an Arrow Function. Click [**here**](https://reactjs.org/docs/faq-functions.html) to learn about passing functions to components.
4. In this final step, We will be adding a validation feature to avoid having duplicate tasks w/in the Todo list.
      + Navigate to `src/pages/Home.js`
        1. In the addTodo() function, implement a code to determine if a task already exists before performing the action to add an item to the Todo list. There are plenty of ways to implement this feature.\
        A psudeo code example can be seen below:
        ```
        if (item exists in todo list) {
            do nothing and just return
            to break out the function
        } else {
            perform the action to add
            the item to the Todo list }
        ```
      + **Note:** Look into utilizing the [**find**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) function to check if current item already exists w/in the Todo list. 
      ```
      array = [1,2,3,4,5,6]
      const exists = array.find(t => t === '4')
      console.log(exists)
      
      Output: true
      ```

### To-do list application stretch assignment (optional challenge)

Tasks can have pre-conditions and acceptance criteria. For this stretch assignment, create two new text fields for them, and when the user clicks submit, these fields should be displayed in the card as well.

Hint: Add two new variables to the state and take a look at [**this tutorial**](https://www.tutorialspoint.com/how-to-use-the-handlechange-function-in-react-component#:~:text=In%20the%20handleChange()%20function%2C%20we%20can%20get%20the%20name,()%20function%20handles%20all%20inputs.)


## Testing
Upon completion of the Week 2 Lab Project, all the necessary components and functions should be implemented in order to successfully complete the test cases mentioned below:
+ Add Button Component adds the task to the list (on click)
+ Add Button Component doesn't add blank tasks to the list (on click)
+ Add Button Component doesn't add duplicate tasks to the list (on click)
+ Checkbox Button component removes the task from the list (on click)

**Note:** Material UI components (and other libraries) render as HTML components under the hood, so using Material UI's TextField would still render in the DOM as an Input element and pass the tests for this lab.


## Pre-session Material
[**Here**](https://ibm.box.com/s/ir3pw5dzwluftvvh96ywbfx46senjlbb) are the pre-session materials that were provided to you earlier.
=======
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/XXiOzV4T)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15324313&assignment_repo_type=AssignmentRepo)
# Project Week 3 To-do list application (Cont.)
## Introduction
As of now, you have completed Project Week 2 and should now have a React Todo List Application that can add and delete unique tasks. For Project Week 3, we will finish up the front end and make our own unit tests to make sure our App is working properly. We encourage you to take a unique approach to this lab, as there is no one right answer. 
- [Material Design](https://material.io/design/introduction) is a design system that can guide you on what UI decisions to make if you would like to explore best practices, but functionality is the key focus of the lab.
- No back-end is required for this lab, and all data (tasks) should live on the front end.


## Requirements
Feature requirements (Week 3 task is complete when you):
+ Provide the due date for the task
+ Change the color of overdue tasks
+ Make test cases to test your application

Implementation requirements:
+ Use [**DesktopDatePicker**](https://mui.com/x/react-date-pickers/date-picker/)  to store the date that the task should be finished by.
+ Use [**React Testing Library**](https://testing-library.com/docs/react-testing-library/cheatsheet) to create unit tests to test your code.

Instructions:
1. To start this project we need to add a component that allows us to select a due date for our tasks.
    + To add the Date Picker add these imports to `src/component/AddTodo.js` 
 ```
 import { DesktopDatePicker , LocalizationProvider} from '@mui/x-date-pickers';
 import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
 ``` 
    + Next, inside the constructor, when initializing `this.state` add a new variable to store the due date and set it to null (i.e. `due : null,`)
    + Then you need to add this between the TextField and the Button in the render function.
 ```   
 <LocalizationProvider dateAdapter={AdapterDateFns}>         
 <DesktopDatePicker
 id="new-item-date"
 label="Due Date"
 value={/*value*/}
 onChange={/*onChange*/}
 renderInput={(params) => <TextField {...params} />}
 />
 </LocalizationProvider>
 ```
    + Replace `\*value*\` with the new state variable.
    + Create a new handleChange function for the datepicker to set the value of your due date. You are free to name this function. 
        1. (Hint: use handleChange as a template. Don't forget to remove the content and date values. You won't need that here.) 
        2. Note that the value from the date picker will give more than just the date in mm/dd/yyyy. To format the date, we need to set the due date variable to `new Date(event).toLocaleDateString()`
    + Change `\*OnChange*\` to the new handle function that you created.
    + Finally, reset the value of the due date to null in the `onSubmit` function

2. Right now the button works however we are able submit a task with an empty due date. We need to change this so that only task with both a task name and due date create a task. 

    + We need to go to `src/pages/Home.js` and go to the `addTodo` function where we made sure no duplicate tasks were added. (Hint: The date picker will give us three values: A valid date in string form, `"Invalid Date"` or `null`.) Create a check for `"Invalid Date"` or `null` so no task is made.
        1. Recall the psudeo code from week 2
 ```
 if (null or "Invalid Date" in todo list) {
 do nothing and just return
 to break out the function
 } else {
 perform the action to add
 the item to the Todo list }
 ```    

3. At this point, we have a working button that properly creates tasks with due dates; however, the due date value isn't currently being used.

    + We want to display these due dates and highlight any overdue items. We can do this in `src/component/todos.js`
    + Inside the map function above the return function, make a variable called `color` and set it to `"#ffffffff"` or `"white"` (#ffffffff is white's hex color value)
    + Then check if todays date to the due date of the task. If the due date is in the past change then set `color` to a different color. 
        1. (You do not have to keep the original card white, however you MUST make overdue cards a different color. Play around and find colors that you like.) 
        2. Note that your due date value is a string. You will have to use `new Date(/*due date variable*/)` to compare it to the current date 
        3. (Hint: you can get the current date with `new Date()`)  
    + Next, inside the card that you used to display the tasks, set the `background` to `color`. 
        1. (Hint: This is in  `<Card style={{\*Code*\}}>` from last week. If you did not add a style in the card, add it now)
    + Add `data-testid={/*task-name*/}` inside the card as well. Where `task-name` is the variable that holds the task name. 
        1. (Hint: Look in `ListItemText primary={}` for this value)
    + Finally in ListItemText change the value of `secondary={/*Somevalue*/}` with your due date value.


## Running Your Application
Run the below commands to render the application and open it on the browser:
* `npm install` - This command is used to install all the dependencies listed in a project's `package.json` file.
* `NODE_OPTIONS=--openssl-legacy-provider npm start` - Compiles and starts your application. It runs the script defined in the start property of the scripts section in package.json.


## Testing
This week we will be writing some test cases. Below is an example of a unit test that adds a History Test task due 05/30/2023.
```
test('test that App component renders Task', () => {
 render(<App />);
 const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
 const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
 const element = screen.getByRole('button', {name: /Add/i});
 const dueDate = "05/30/2023";
 fireEvent.change(inputTask, { target: { value: "History Test"}});
 fireEvent.change(inputDate, { target: { value: dueDate}});
 fireEvent.click(element);
 const check = screen.getByText(/History Test/i);
 const checkDate = screen.getByText(new RegExp(dueDate, "i"));
 expect(check).toBeInTheDocument();
 expect(checkDate).toBeInTheDocument();
 });

```
+ `render(<App />);` mocks the compentent so that we can do the testing
+ `screen.getByRole('textbox', {name: /Add New Item/i})` Looks for a textbox compentent with the words "Add New Item"
+ `fireEvent.change(inputTask, { target: { value: "History Test"}})` Types the value "History Test" into the text box.
+ `fireEvent.click()` clicks the selected element.
+ `screen.getByText(/History Test/i)` searches for "History Test" on the screen ignoring case using regex. (Note: getBy only looks for one value. If more than one value or no value is present then an error will occur.  If you want to get more then use `getAllBy`). 
+ `expect(check).toBeInTheDocument();` the element should be on the page if it is the test case is passed. Otherwise, the test fails. 
+ If you want to check if a value is equal to something, you can use `expect(value).toBe(value_I_want)`.
+ Note: The elements returned by `getByRole` or `getByText` may not have CSS or styling. If you want to have those values, put a `data-testid` in that component and use `getByTestId` to grab those IDs.
+ If we want to check if a value is 
1. Complete the Following Test Cases in `src/AddTodo.test.js`
    + No duplicate task
    + Submit Task with No Due Date
    + Submit Task with No Task Name
    + Late Tasks have Different Colors
        1. Hint if we wanted to grab the color of the card for "History Test" we can use `const historyCheck = screen.getByTestId(/History Test/i).style.background`
    + Delete Task
        1. Hint: Earlier, we used `screen.getByRole` for getting a Button and a Text Box. How would we get a Checkbox? 
 
 To run these tests run `npm run test`
 ## Pre-session Material
Here is a [**link**](https://ibm.box.com/s/c7caqj7u5fft4bmaugwdive16jfw1s0r) to the pre-session material that was provided to you earlier.
>>>>>>> week3/main
