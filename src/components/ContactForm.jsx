const ContactForm = () => {
  return (
    <form>
      <label htmlFor="fname">First Name: </label>
      <input type="text" id="fname" />
      <label htmlFor="lname">Last Name: </label>
      <input type="text" id="lname" />
      <button>Submit</button>
    </form>
  );
};
export default ContactForm;
