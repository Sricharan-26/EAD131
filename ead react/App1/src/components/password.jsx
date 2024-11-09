import { useState } from 'react';
import './password.css';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);

  // Function to check password strength
  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W]/.test(password)) strength++;
    return strength;
  };

  // Handle password input change
  const handleChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    const strengthLevel = checkPasswordStrength(inputPassword);
    setStrength(strengthLevel);
  };

  // Strength descriptions based on levels
  const strengthText = ['Very Weak', 'Weak', 'Medium', 'Strong'];

  return (
    <div className="password-container">
      <h1>Password Strength Checker</h1>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
      />
      <div className="strength-bar" data-strength={strength}></div>
      <p>{strength > 0 ? strengthText[strength - 1] : ''}</p>
    </div>
  );
};

export default PasswordStrengthChecker;
