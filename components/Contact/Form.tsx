import React from 'react';

import { AiOutlineSend } from 'react-icons/ai';

const Form = (props: {}): JSX.Element => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
      className="space-y-5"
    >
      <div className="flex flex-col md:flex-row gap-5">
        <input
          className="block w-full p-7 rounded-3xl bg-lightest dark:bg-dark shadow-md shadow-light/10 dark:shadow-none placeholder:text-light dark:placeholder-light text-lightest text-lg border-2 border-light focus:outline-none focus:border-secondary-dark dark:focus:border-secondary transition-all duration-[400ms]"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="block w-full p-7 rounded-3xl bg-lightest dark:bg-dark shadow-md shadow-light/10 dark:shadow-none placeholder:text-light dark:placeholder-light text-lightest text-lg border-2 border-light focus:outline-none focus:border-secondary-dark dark:focus:border-secondary transition-all duration-[400ms]"
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>

      <div className="relative">
        <textarea
          name="message"
          placeholder="Message"
          className="block w-full p-7 rounded-3xl bg-lightest dark:bg-dark shadow-md shadow-light/10 dark:shadow-none placeholder:text-light dark:placeholder-light text-lightest text-lg border-2 border-light focus:outline-none focus:border-secondary-dark dark:focus:border-secondary transition-all duration-[400ms] col-span-2 h-72"
        ></textarea>

        <div className="absolute bottom-0 right-0 bg-lighter dark:bg-darkest border-t-2 border-l-2 border-light rounded-tl-3xl p-3 md:p-4 shadow-lg shadow-lighter dark:shadow-none">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-primary-light hover:bg-primary transition-all rounded-3xl py-2 md:py-[0.7rem] px-6 md:px-7 duration-300 text-lg text-lightest"
          >
            Send
            <AiOutlineSend className="text-xl" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
