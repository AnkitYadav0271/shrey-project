import { useState } from 'react';
import './Register.css';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    father_name: '',
    mother_name: '',
    Email: '',
    Phone: '',
    Course: '',
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.father_name.trim()) {
      newErrors.father_name = "Father's name is required";
    }
    if (!formData.mother_name.trim()) {
      newErrors.mother_name = "Mother's name is required";
    }
    if (!formData.Email.trim()) {
      newErrors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      newErrors.Email = 'Email is invalid';
    }
    if (!formData.Phone.trim()) {
      newErrors.Phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.Phone)) {
      newErrors.Phone = 'Phone number must be 10 digits';
    }
    if (!formData.Course) {
      newErrors.Course = 'Please select a course';
    }

    return newErrors;
  };

  
  const isFormValid = () => {
    const validationErrors = validate();
    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

   
    setErrors(validate());
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log('Validation errors:', newErrors);
    } else {
      setErrors({});
      console.log('Form submitted successfully:', formData);
      setFormData({
         name: '',
    father_name: '',
    mother_name: '',
    Email: '',
    Phone: '',
    Course: '',
      })
      
      
    }
  };

  return (
    <div className="register-container-main">
      <div className="header-register register-container">
        <h1>Register</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="text"
            name="father_name"
            id="f-name"
            placeholder="Father's Name"
            value={formData.father_name}
            onChange={handleChange}
          />
          {errors.father_name && <p className="error">{errors.father_name}</p>}

          <input
            type="text"
            name="mother_name"
            id="m-name"
            placeholder="Mother's Name"
            value={formData.mother_name}
            onChange={handleChange}
          />
          {errors.mother_name && <p className="error">{errors.mother_name}</p>}

          <input
            type="email"
            name="Email"
            id="email"
            placeholder="Email"
            value={formData.Email}
            onChange={handleChange}
          />
          {errors.Email && <p className="error">{errors.Email}</p>}

          <input
            type="number"
            id="phone_number"
            name="Phone"
            placeholder="Phone Number"
            value={formData.Phone}
            onChange={handleChange}
          />
          {errors.Phone && <p className="error">{errors.Phone}</p>}

          <label htmlFor="courses">Choose courses</label>
          <select
            name="Course"
            id="courses"
            value={formData.Course}
            onChange={handleChange}
          >
            <option value="">-- Select a course --</option>
            <option value="mechanical">Mechanical Engineering</option>
            <option value="electrical">Electrical Engineering</option>
            <option value="information-technology">
              Information Technology
            </option>
            <option value="civil">Civil Engineering</option>
          </select>
          {errors.Course && <p className="error">{errors.Course}</p>}

          <button type="submit" disabled={!isFormValid()}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
