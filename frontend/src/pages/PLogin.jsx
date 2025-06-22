import { useReducer } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import "./PLogin.css";

export const PLogin = () => {
  const initialState = {
    email: "",
    password: "",
    error: "",
    isLoading: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "SET_VALUE":
        return { ...state, [action.field]: action.value };
      case "RESET":
        return initialState;
      case "SET_ERROR":
        return { ...state, error: action.message, isLoading: false };
      case "SET_LOADING":
        return { ...state, isLoading: action.isLoading };
      default:
        throw new Error("Unknown action type");
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", isLoading: true });
    dispatch({ type: "SET_ERROR", message: "" });

    try {
      const response = await fetch("https://shrey-project-backend.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: state.email,
          password: state.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Success: Store the token and update auth state
      login(data.token);
      // Redirect to the intended page or dashboard
      const from = location.state?.from?.pathname || "/admin/dashboard";
      navigate(from, { replace: true });
    } catch (error) {
      dispatch({ type: "SET_ERROR", message: error.message });
    } finally {
      dispatch({ type: "SET_LOADING", isLoading: false });
    }
  };

  const handleChange = (e) => {
    dispatch({
      type: "SET_VALUE",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div className="plogin-container">
      <div className="plogin-content">
        <div className="plogin-header">
          <h1>Principal Login</h1>
        </div>
        <div className="plogin-form">
          <p className="plogin-instruction">
            Fill all the fields correctly, then click the Login button.
          </p>
          {state.error && <p className="plogin-error">{state.error}</p>}
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Address"
              value={state.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="plogin-submit"
              disabled={state.isLoading}
            >
              {state.isLoading ? "Logging in..." : "Login"}
            </button>
            <a href="/change-password" className="plogin-forgot">
              Forgot password?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};
