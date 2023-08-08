'use client'

import React, { useState } from 'react';

import { AiOutlineSend } from 'react-icons/ai';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
import { BsSendCheck } from 'react-icons/bs';

const Form = (props: {}): JSX.Element => {
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
  const [messageStatus, setMessageStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const [messageBoxActive, setMessageBoxActive] = useState<boolean>(false);

  const inputCommonClasses = 'block w-full p-7 rounded-3xl bg-lightest dark:bg-dark placeholder-text-light dark:placeholder-light text-dark dark:text-lightest text-lg border-2 border-light !outline-none focus:border-secondary-dark dark:focus:border-primary-light transition-border duration-300';

  const sendMessage = async () => {
    setMessageStatus('sending');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactData)
    });

    setMessageStatus(res.ok ? 'success' : 'error');

    res.ok && setContactData({ name: '', email: '', message: '' });
  };

  const renderButtonContent = () => {
    switch (messageStatus) {
      case 'success':
        return <>Sent <BsSendCheck className="text-xl" /></>

      case 'sending':
        return <>Sending <CgSpinnerTwoAlt className="text-xl animate-spin" /> </>

      default:
        return <>Send <AiOutlineSend className="text-xl" /> </>
    }
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        sendMessage()
      }}
      className="space-y-5"
    >
      <div className="flex flex-col md:flex-row gap-5">
        <input
          className={inputCommonClasses}
          type="text"
          name="name"
          required
          placeholder="Name"
          value={contactData.name}
          onChange={e => setContactData({ ...contactData, name: e.target.value })}
        />

        <input
          className={inputCommonClasses}
          type="email"
          name="email"
          required
          placeholder="Email"
          value={contactData.email}
          onChange={e => setContactData({ ...contactData, email: e.target.value })}
        />
      </div>

      <div className="relative">
        <textarea
          onFocus={() => setMessageBoxActive(true)}
          onBlur={() => setMessageBoxActive(false)}
          name="message"
          required
          placeholder="Message"
          className={`${inputCommonClasses} col-span-2 h-72`}
          value={contactData.message}
          onChange={e => setContactData({ ...contactData, message: e.target.value })}
        ></textarea>

        <div className={`absolute bottom-0 right-0 transition-all duration-300 bg-lighter dark:bg-darkest border-t-2 border-l-2 rounded-tl-3xl p-3 md:p-4 ${messageBoxActive ? 'border-secondary-dark dark:border-primary-light' : 'border-light'}`}>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-primary-light hover:bg-primary transition-all rounded-3xl py-2 md:py-[0.7rem] px-6 md:px-7 duration-300 text-lg text-lightest"
            disabled={messageStatus === 'success' || messageStatus === 'sending'}>
            {renderButtonContent()}

          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
