import { useRef, useState } from 'react';
import InputMask from 'react-input-mask';
import emailjs from '@emailjs/browser';
import s from './Form.module.css';

export const Form = () => {
  const [clientName, setClientName] = useState('');
  const [clientNumber, setClientNumber] = useState('');
  const form = useRef();

  const handleChangeForm = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setClientName(value);
        break;
      case 'number':
        setClientNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();

    emailjs
      .send(
        'service_so7sg4f',
        'template_ueiuwxo',
        {
          from_name: 'EKSBS',
          to_name: 'Петро',
          client_name: clientName,
          client_nubmer: clientNumber,
        },
        '99AIsumeXmVsSZSc0'
      )
      .then(
        result => {
          console.log('~ result', result);
        },
        error => {
          console.log('~ error', error);
        }
      );
    console.log('~ form.current', form.current);
    handleResetForm();
  };
  const handleResetForm = () => {
    setClientName('');
    setClientNumber('');
  };

  return (
    <form onSubmit={handleSubmitForm} ref={form} className={s.form}>
      <div>
        <InputMask
          className={s.inputName}
          placeholder="ім'я"
          autoComplete="off"
          type="text"
          name="name"
          value={clientName}
          onChange={handleChangeForm}
        />
        <InputMask
          mask="+38 (099) 999-99-99"
          className={s.inputNumber}
          placeholder="номер телефона"
          autoComplete="off"
          type="tel"
          name="number"
          value={clientNumber}
          onChange={handleChangeForm}
        />
      </div>
      {/* <div className={s.btnContainer}> */}
      <button
        disabled={
          !clientName.trim() ||
          clientNumber.replace(/[^0-9,]/g, '').length !== 12
        }
        className={s.btn}
      >
        Передзвоніть мені
      </button>
      {/* </div> */}
    </form>
  );
};
