import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

function Login({ setResponse }) {
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    navigate("/home");
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "111125658868-knmboh60fbk6curqfhdlqivkg9tm0dol.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  }, []);

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      handleSubmit();
    }
  }, [formErrors]);

  const handleSubmit = async (e) => {
    console.log(e);
    try {
      await axios
        .post("/", user)
        .then((res) => {
          if (res.data.pass === "pass ok") {
            console.log(res);
            setResponse(res.data.user);
            navigate("/home");
          } else if (res.data === "pass not ok") {
            alert("Wrong password");
            setUser({
              email: "",
              password: "",
            });
          } else if (res.data === "does not exist") {
            alert("Please sign up first Bro");
            navigate("/register");
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
            Welcome to I-BROOOO!
          </span>
          <span className="font-light text-gray-500 mb-8 font-poppins">
            Start working like a horse today!
          </span>
          <Form>
            <Form.Group>
              <Form.Label class="mb-2 text-md font-poppins">Email</Form.Label>
              <Form.Control
                name="email"
                value={user.email}
                placeholder="Email"
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>
              <Form.Label class="mb-2 text-md font-poppins">
                Password
              </Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={user.password}
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>
            <p>{formErrors.password}</p>
            <Button
              onClick={handleClick}
              variant="primary"
              className="w-full text-white p-2 rounded-2xl mb-6 font-poppins"
            >
              Login
            </Button>
            <div id="signInDiv" className="justify-center"></div>
            <div>
              <span className="text-center text-gray-400 font-poppins">
                {" "}
                Don't have an account yet?{" "}
              </span>
              <Link to={"/register"} className="text-black font-poppins">
                Sign up for free!{" "}
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
