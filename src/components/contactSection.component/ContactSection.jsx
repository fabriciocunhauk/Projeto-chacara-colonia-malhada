import React from 'react';
import { ContactSectionContainer, Form, Label, Input, Button } from './contact-section.styles';

const ContactSection = () => {
    return (
        <ContactSectionContainer id="contact-section">
            <h1>Contato</h1>
            <Form action="submit">
                <Label htmlFor="nome">Nome</Label>
                <Input type="text" placeholder="Nome" id="nome" required />
                <Label htmlFor="email">Email</Label>
                <Input type="email" placeholder="example@email.com" id="email" required />
                <Label htmlFor="telefone">Telefone</Label>
                <Input type="tel" placeholder="Telefone" id="telefone" required />
                <Button type="submit">Enviar</Button>
            </Form>
        </ContactSectionContainer>
    )
}

export default ContactSection;
