// Need to make buttons to Submit, space, to enter Name, and Email Address
// The code for doing this is in App.css which calls for those functions to take place, in the Contacts field.
function Contact() {

    return (

        <>
        <h1>Contact</h1>
        <label htmlFor="name">Name:</label><br></br>
        <textarea id="name"></textarea>
        <label htmlFor="email">Email address:</label>
        <textarea id="email"></textarea>
        </>

    )
  }
  
export default Contact