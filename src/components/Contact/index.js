import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Your ${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1 data-testid="contact">Contact me</h1>

            <form
                id="contact-form"
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <TextField
                    onBlur={handleChange}
                    variant="filled"
                    label="Name"
                    name='name'
                />

                <TextField
                    onBlur={handleChange}
                    variant="filled"
                    label="Email"
                    name='email'
                />

                <TextField
                    multiline
                    minRows={3}
                    onBlur={handleChange}
                    variant="filled"
                    label="Message"
                    name='message'
                />

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}



                <Button type="submit" variant="contained">Submit</Button>
            </form>
        </section>
    );
};