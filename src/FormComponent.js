import React, {useState} from 'react';
import './App.css';
const  FormComponent = ({onSubmit}) => {

    const [formData, setFormData] = useState({
        first: '',
        last: '',
        email: '',
        password: '',
        season: 'Spring'
    });
    const [formErrors, setformErrors] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const validate = (event) => {
        event.preventDefault();
        console.log('validating');
        let errors = [];
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (!formData.first) {
            errors.push('First name is required');
        }
        if (!formData.last) {
            errors.push('Last name is required');
        }
        if (!formData.email) {
            errors.push('Email is required');
        }
        if (!formData.password) {
            errors.push('Password is required');
        }
        if (!formData.season) {
            errors.push('Season is required');
        }
        if (formData.email && !regexEmail.test(formData.email)) {
            errors.push('Invalid email');
        }
        if (formData.password && !regexPassword.test(formData.password)) {
            errors.push('Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character');
        }

        setformErrors(errors);
        if (errors.length === 0) {
            onSubmit({isValid: true, data: formData});
        }
    }
    return (
        <div className="App">
            <div className="container sign-container">
                <h1 className="title">Sign Up page</h1>
                <div className="error">
                    {formErrors.map((error, index) => (
                        <p key={index} className="text-red">{error} </p>
                    ))}
                </div>
                <form onSubmit={validate} className="bg-light p-5 rounded">
                    <div className="form-group">
                        <label htmlFor='first'>First name: </label>
                        <input type='text' id='first' name='first' value={formData.first} onChange={handleChange}
                               className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='last'>Last name: </label>
                        <input type='text' id='last' name='last' value={formData.last} onChange={handleChange}
                               className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='email'>Email: </label>
                        <input type='email' id='email' name='email' value={formData.email} onChange={handleChange}
                               className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='password'>Password: </label>
                        <input type='password' id='password' name='password' value={formData.password}
                               onChange={handleChange} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='season'>Season: </label>
                        <select id='season' name='season' value={formData.season} onChange={handleChange}
                                className="form-control">
                            <option value='spring'>Spring</option>
                            <option value='summer'>Summer</option>
                            <option value='fall'>Fall</option>
                            <option value='winter'>Winter</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type='submit' className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default FormComponent;