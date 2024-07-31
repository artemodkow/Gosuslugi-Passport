import React from 'react';
import { useLocation } from 'react-router-dom';

const DisplayPage = () => {
    const { state } = useLocation();
    const { formData } = state || {};

    if (!formData) {
        return <div>No data to display</div>;
    }

    return (
        <div>
            <h1>Pasport Data</h1>
            <p>ФИО: {formData.fullName}</p>
            <p>Пол: {formData.gender}</p>
            <p>Дата рождения: {formData.birthDate}</p>
            <p>Место рождения: {formData.placeOfBirth}</p>
            <p>Серия и номер: {formData.passportNumber}</p>
            <p>Дата выдачи: {formData.issueDate}</p>
            <p>Код подразделения: {formData.departmentCode}</p>
            <p>Кем выдан: {formData.issuedBy}</p>
        </div>
    );
};

export default DisplayPage;
