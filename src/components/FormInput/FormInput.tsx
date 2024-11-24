import React from 'react';
import './FormInput.css';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, error, ...props }) => {
  return (
    <div className="form-input">
      <label className="form-label">{label}</label>
      <input className={`form-field ${error ? 'error' : ''}`} {...props} />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default FormInput;
