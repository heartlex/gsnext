'use client';

import emailjs from '@emailjs/browser';
import { FadeIn } from '@/components/FadeIn';
import { Button } from '@/components/Button';
import { useEffect, useId } from 'react';
import { useForm } from 'react-hook-form';

function TextInput({ register, name, options, label, ...props }) {
  let id = useId();
  return (
    <div className='group relative z-0 transition-all focus-within:z-10'>
      <input
        {...register(name, options)}
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

function RadioInput({ register, name, label, ...props }) {
  return (
    <label className='flex gap-x-3'>
      <input
        {...register(name)}
        type='radio'
        {...props}
        className='h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2'
      />
      <span className='text-base/6 text-neutral-950'>{label}</span>
    </label>
  );
}

export default function Form() {
  const {
    register,
    reset,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: '',
      mail: '',
      message: '',
      company: '',
      phone: '',
      how: '',
    },
  });

  useEffect(() => emailjs.init('Se1t0pXrCU-Tv37ZO'), []);
  const sendEmail = (formData) => {
    emailjs
      .send(
        'service_38jawt5',
        'template_6vtan1p',
        formData,
        'Se1t0pXrCU-Tv37ZO'
      )
      .then(
        (result) => {
          // submit.current.style.animation = 'slideUp 0.7s ease forwards'
          reset();
        },
        (error) => {}
      );
  };
  return (
    <FadeIn className='lg:order-last'>
      <form onSubmit={handleSubmit(sendEmail)}>
        <h2 className='font-display text-base font-semibold text-neutral-950'>
          Work inquiries
        </h2>
        <div className='isolate mt-6 -space-y-px rounded-2xl bg-white/50'>
          <TextInput
            autoComplete='name'
            label='Name*'
            name='name'
            register={register}
            options={{ required: true }}
          />
          <TextInput
            label='Email*'
            type='email'
            name='mail'
            register={register}
            options={{ required: true }}
            autoComplete='email'
          />
          <TextInput
            label='Company'
            name='company'
            register={register}
            autoComplete='organization'
          />
          <TextInput
            label='Phone'
            type='tel'
            name='phone'
            register={register}
            autoComplete='tel'
          />
          <TextInput
            label='Message*'
            name='message'
            register={register}
            options={{ required: true }}
          />
          <div className='border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl'>
            <fieldset>
              <legend className='text-base/6 text-neutral-500'>
                How did you know about me?
              </legend>
              <div className='mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2'>
                <RadioInput
                  label='Word of mouth'
                  name='how'
                  register={register}
                  value='wom'
                />
                <RadioInput
                  register={register}
                  label='Through social media'
                  name='how'
                  value='social'
                />
                <RadioInput
                  register={register}
                  label='By chance'
                  name='how'
                  value='chance'
                />
                <RadioInput
                  register={register}
                  label='Other'
                  name='how'
                  value='other'
                />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type='submit' className='mt-10' disabled={!isValid}>
          <div className='opacity-0'>Let’s work together</div>
          <div className='primary text flex justify-center'>
            Let’s work together
          </div>
          <div className='secondary text flex justify-center'>Message sent</div>
        </Button>
      </form>
    </FadeIn>
  );
}
