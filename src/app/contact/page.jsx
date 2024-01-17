import Link from 'next/link';

import { Border } from '@/components/Border';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { Offices } from '@/components/Offices';
import { PageIntro } from '@/components/PageIntro';
import { SocialMedia } from '@/components/SocialMedia';
import Form from '@/components/Form';

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className='font-display text-base font-semibold text-neutral-950'>
        Devcave
      </h2>
      <p className='mt-6 text-base text-neutral-600'>
        Wanna meet the hero behind the code and all that nerdy stuff?
        <br />
        Have a coffee with me!
      </p>

      <Offices className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2' />

      <Border className='mt-16 pt-16'>
        <h2 className='font-display text-base font-semibold text-neutral-950'>
          Text me
        </h2>
        <dl className='mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2'>
          {[
            ['Mail', 'gianlucaxstrada@gmail.com'],
            ['Mobile', '+393311683624'],
          ].map(([label, value]) => (
            <div key={value}>
              <dt className='font-semibold text-neutral-950'>{label}</dt>
              <dd>
                <Link
                  href={label === 'Mail' ? `mailto:${value}` : `tel:${value}`}
                  className='text-neutral-600 hover:text-neutral-950'
                >
                  {value}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className='mt-16 pt-16'>
        <h2 className='font-display text-base font-semibold text-neutral-950'>
          Follow me
        </h2>
        <SocialMedia className='mt-6' />
      </Border>
    </FadeIn>
  );
}

export const metadata = {
  title: 'Contact Me',
  description: 'Let’s work together. Can’t wait to hear from you!',
};

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow='Contact me' title='Let’s work together'>
        <p>Can’t wait to hear from you!</p>
      </PageIntro>

      <Container className='mt-24 sm:mt-32 lg:mt-40'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2'>
          <Form />
          <ContactDetails />
        </div>
      </Container>
    </>
  );
}
