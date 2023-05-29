import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Register({ setResponse }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      handleSubmit();
    }
  }, [formErrors]);

  const handleSubmit = async (e) => {
    try {
      await axios
        .post("/", user)
        .then((res) => {
          if (res.data === "exist") {
            alert("user already exists");
          } else if (res.data === "does not exist") {
            alert("Registration successful");
            setResponse(user);
            navigate("/home");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Please enter a valid password";
    }
    if (values.password !== values.passwordConfirm) {
      errors.passwordConfirm = "Passwords do not match";
    }
    if (!values.passwordConfirm) {
      errors.passwordConfirm = "Please confirm password";
    }
    return errors;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="flex items-center justify-center min-h screen bg-bg1 bg-no-repeat bg-cover">
      <div className="relative flex flex-col m-40 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold font-poppins">
            Create Account
          </span>
          <Form>
            <Form.Group>
              <Form.Label class="mb-2 text-md font-poppins">Name</Form.Label>
              <Form.Control
                name="name"
                value={user.name}
                placeholder="Name"
                onChange={handleChange}
              />
              <p>{formErrors.name}</p>
              <Form.Label class="mb-2 text-md font-poppins">Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={user.email}
                placeholder="Email"
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>
              <Form.Label class="mb-2 text-md font-poppins">
                Password
              </Form.Label>
              <br />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long and contain at least
                one letter, one number and one special character
              </Form.Text>
              <Form.Control
                name="password"
                type="password"
                value={user.password}
                placeholder="Password"
                onChange={handleChange}
              />
              <p>{formErrors.password}</p>

              <Form.Label class="mb-2 text-md font-poppins">
                {" "}
                Confirm Password
              </Form.Label>
              <Form.Control
                name="passwordConfirm"
                type="password"
                value={user.passwordConfirm}
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </Form.Group>
            <p>{formErrors.passwordConfirm}</p>
            <Button
              onClick={handleClick}
              variant="primary"
              className="w-full text-white p-2 rounded-2xl mb-6 font-poppins"
            >
              Register
            </Button>
            <div>
              <span className="text-center text-gray-400 font-poppins">
                Already have an account?{" "}
              </span>
              <Link to={"/"} className="text-black font-poppins">
                Login now!
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
