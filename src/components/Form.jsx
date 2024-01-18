'use client';

import emailjs from '@emailjs/browser';
import { FadeIn } from '@/components/FadeIn';
import { Button } from '@/components/Button';
import { useEffect, useId, useRef } from 'react';

function TextInput({ label, ...props }) {
  let id = useId();

  return (
    <div className='group relative z-0 transition-all focus-within:z-10'>
      <input
        type='text'
        id={id}
        {...props}
        placeholder=' '
        className='peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl'
      />
      <label
        htmlFor={id}
        className='pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950'
      >
        {label}
      </label>
    </div>
  );
}

function RadioInput({ label, ...props }) {
  return (
    <label className='flex gap-x-3'>
      <input
        type='radio'
        {...props}
        className='h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2'
      />
      <span className='text-base/6 text-neutral-950'>{label}</span>
    </label>
  );
}

export default function Form() {
  const ref = useRef(null);

  useEffect(() => emailjs.init('Se1t0pXrCU-Tv37ZO'), []);
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        'service_38jawt5',
        'template_6vtan1p',
        ref.current,
        'Se1t0pXrCU-Tv37ZO'
      )
      .then(
        (result) => {},
        (error) => {}
      );
  };
  return (
    <FadeIn className='lg:order-last'>
      <form ref={ref}>
        <h2 className='font-display text-base font-semibold text-neutral-950'>
          Work inquiries
        </h2>
        <div className='isolate mt-6 -space-y-px rounded-2xl bg-white/50'>
          <TextInput label='Name' name='name' id='name' autoComplete='name' />
          <TextInput
            label='Email'
            type='email'
            name='mail'
            id='mail'
            autoComplete='email'
          />
          <TextInput
            label='Company'
            name='company'
            id='company'
            autoComplete='organization'
          />
          <TextInput
            label='Phone'
            type='tel'
            name='phone'
            id='phone'
            autoComplete='tel'
          />
          <TextInput label='Message' name='message' id='message' />
          <div className='border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl'>
            <fieldset>
              <legend className='text-base/6 text-neutral-500'>
                How did you know about me?
              </legend>
              <div className='mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2'>
                <RadioInput label='Word of mouth' name='how' value='wom' />
                <RadioInput
                  label='Through social media'
                  name='how'
                  value='social'
                />
                <RadioInput label='By chance' name='how' value='chance' />
                <RadioInput label='Other' name='how' value='other' />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type='submit' className='mt-10' onClick={sendEmail}>
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  );
}
