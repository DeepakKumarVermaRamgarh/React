// Complete the Form Component and export it
import { name, email} from './HomePage'
const Form = () => (
  <>
    <div>
      <form>{/* Create a h3, 2 inputs and 1 button here */}
        <h3>
          Login Page
        </h3>

        <input type='text' name='name' placeholder='YourName' value={name} />
        <br/>
        <br/>
        <input type='email' name='email' placeholder='xyz@pqr.com' value={email} />
        <br/>
        <br/>
        <button type="submit" onClick={e=>e.preventDefault()} >Login</button>

      </form>
    </div>
  </>
);

export default Form;