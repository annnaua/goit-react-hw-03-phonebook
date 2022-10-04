import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
  ContactFormList,
  ContactFormLable,
  ContactFormInput,
  ContactFormButton,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
});

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={onAddContact}
      validatorSchema={schema}
    >
      <ContactFormList autoComplete="off">
        <ContactFormLable htmlFor="inputName">Name</ContactFormLable>

        <ContactFormInput
          type="text"
          name="name"
          id="inputName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <ContactFormLable htmlFor="inputNumber">Number</ContactFormLable>

        <ContactFormInput
          type="tel"
          name="number"
          id="inputNumber"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <ContactFormButton type="submit">Add contact</ContactFormButton>
      </ContactFormList>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
