import React from 'react';
import { ContactSectionContainer, Form, Label, Input, Button } from './contact-section.styles';

const ContactSection = () => {
    return (
        <ContactSectionContainer id="contact-section">
            <h1>Contact</h1>
            <Form action="submit">
                <Label htmlFor="">Name</Label>
                <Input type="text" placeholder="Name" required />
                <Label htmlFor="">Email</Label>
                <Input type="email" placeholder="example@email.com" required />
                <Label htmlFor="">Phone Number</Label>
                <Input type="tel" placeholder="Telefone" required />
                <Button type="submit">Enviar</Button>
            </Form>
        </ContactSectionContainer>
    )
}

export default ContactSection;
