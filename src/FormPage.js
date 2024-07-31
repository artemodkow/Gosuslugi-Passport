import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        birthDate: '',
        placeOfBirth: '',
        passportNumber: '',
        issueDate: '',
        departmentCode: '',
        issuedBy: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/display', { state: { formData } });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="fullName" placeholder="ФИО" onChange={handleChange} />
            <input type="text" name="gender" placeholder="Пол" onChange={handleChange} />
            <input type="date" name="birthDate" placeholder="Дата рождения" onChange={handleChange} />
            <input type="text" name="placeOfBirth" placeholder="Место рождения" onChange={handleChange} />
            <input type="text" name="passportNumber" placeholder="Серия и номер" onChange={handleChange} />
            <input type="date" name="issueDate" placeholder="Дата выдачи" onChange={handleChange} />
            <input type="text" name="departmentCode" placeholder="Код подразделения" onChange={handleChange} />
            <input type="text" name="issuedBy" placeholder="Кем выдан" onChange={handleChange} />
            <button type="submit">Продолжить</button>
        </form>
    );
};

export default FormPage;
