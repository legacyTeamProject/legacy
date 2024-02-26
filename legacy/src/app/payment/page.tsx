// components/PaymentForm.tsx
'use client'
import React, { useState } from 'react';
// import './PaymentForm.css';
import '../../app/paymentform.css'


interface PaymentFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
  amount: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    amount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <label>
        Card Number:
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Expiry Date:
        <input
          type="text"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
        />
      </label>
      <label>
        CVV:
        <input
          type="text"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
        />
      </label>
      <label>
        Cardholder Name:
        <input
          type="text"
          name="cardholderName"
          value={formData.cardholderName}
          onChange={handleChange}
        />
      </label>
      <label>
        Amount:
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
      </label>

      <div className="card-icons">
        <img src="/icons/visa.svg" alt="Visa" className="card-icon" />
        <img src="/icons/mastercard.svg" alt="MasterCard" className="card-icon" />
      </div>

      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentForm;