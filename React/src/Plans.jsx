import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Plans = () => {
    const [plans, setPlans] = useState([]);
    const [currentPlan, setCurrentPlan] = useState(null);
    const [form, setForm] = useState({
        duration: '',
        title: '',
        veg_price: '',
        nonveg_price: ''
    });
    const inputRefs = {
        duration: useRef(null),
        title: useRef(null),
        veg_price: useRef(null),
        nonveg_price: useRef(null)
    };

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchPlans = async () => {
        try {
            const response = await axios.get('http://localhost:3009/plans');
            setPlans(response.data);
        } catch (error) {
            console.error('Error fetching plans:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (currentPlan) {
                await axios.put(`http://localhost:3009/plans/${currentPlan.id}`, form);
            } else {
                await axios.post('http://localhost:3009/plans', form);
            }
            setForm({
                duration: '',
                title: '',
                veg_price: '',
                nonveg_price: ''
            });
            setCurrentPlan(null);
            fetchPlans();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleEdit = (plan) => {
        setCurrentPlan(plan);
        setForm({
            duration: plan.duration,
            title: plan.title,
            veg_price: plan.veg_price,
            nonveg_price: plan.nonveg_price
        });
        inputRefs.duration.current.focus();
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3009/plans/${id}`);
            fetchPlans();
        } catch (error) {
            console.error('Error deleting plan:', error);
        }
    };

    return (
        <div>
            <h1>Plans</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="duration"
                    placeholder="Duration"
                    value={form.duration}
                    onChange={handleInputChange}
                    ref={inputRefs.duration}
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleInputChange}
                    ref={inputRefs.title}
                />
                <input
                    type="number"
                    name="veg_price"
                    placeholder="Veg Price"
                    value={form.veg_price}
                    onChange={handleInputChange}
                    ref={inputRefs.veg_price}
                />
                <input
                    type="number"
                    name="nonveg_price"
                    placeholder="Non-Veg Price"
                    value={form.nonveg_price}
                    onChange={handleInputChange}
                    ref={inputRefs.nonveg_price}
                />
                <button type="submit">{currentPlan ? 'Update Plan' : 'Add Plan'}</button>
            </form>
            <ul>
                {plans.map(plan => (
                    <li key={plan.id}>
                        {plan.duration} - {plan.title} - ${plan.veg_price} (Veg) - ${plan.nonveg_price} (Non-Veg)
                        <button onClick={() => handleEdit(plan)}>Edit</button>
                        <button onClick={() => handleDelete(plan.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Plans;
