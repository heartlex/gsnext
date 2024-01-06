import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { List, ListItem } from '@/components/List';
import { SectionIntro } from '@/components/SectionIntro';
import { StylizedImage } from '@/components/StylizedImage';
import logoBrightPath from '@/assets/images/clients/bright-path/logo-light.svg';
import logoFamilyFund from '@/assets/images/clients/family-fund/logo-light.svg';
import logoGreenLife from '@/assets/images/clients/green-life/logo-light.svg';
import logoHomeWork from '@/assets/images/clients/home-work/logo-light.svg';
import logoMailSmirk from '@/assets/images/clients/mail-smirk/logo-light.svg';
import logoNorthAdventures from '@/assets/images/clients/north-adventures/logo-light.svg';
import logoPhobiaLight from '@/assets/images/clients/phobia/logo-light.svg';
import logoUnseal from '@/assets/images/clients/unseal/logo-light.svg';
import imageLaptop from '@/assets/images/laptop.jpg';
import { loadMDXMetadata } from '@/lib/loadMDXMetadata';
import { ContactSection } from '@/components/ContactSection';

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
];

function Clients() {
  return (
    <div className='mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56'>
      <Container>
        <FadeIn className='flex items-center gap-x-8'>
          <h2 className='text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left'>
            I’ve worked with tens of amazing people
          </h2>
          <div className='h-px flex-auto bg-neutral-800' />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role='list'
            className='mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4'
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title='Harnessing technology for a brighter future'
        className='mt-24 sm:mt-32 lg:mt-40'
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className='mt-16'>
        <FadeInStagger className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className='flex'>
              <article className='relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8'>
                <h3>
                  <Link href={caseStudy.href}>
                    <span className='absolute inset-0 rounded-3xl' />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className='h-16 w-16'
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className='mt-6 flex gap-x-2 text-sm text-neutral-950'>
                  <time dateTime={caseStudy.year} className='font-semibold'>
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className='text-neutral-300' aria-hidden='true'>
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className='mt-6 font-display text-2xl font-semibold text-neutral-950'>
                  {caseStudy.title}
                </p>
                <p className='mt-4 text-base text-neutral-600'>
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  );
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow='Services'
        title='Supercharging your business, expand your reach and guide you through untapped possibilities'
        className='mt-24 sm:mt-32 lg:mt-40'
      >
        <p>
          My mission? Illuminate your brand with ambition, freshness, and iconic
          vibes. Let's make your business shine like never before!
        </p>
      </SectionIntro>
      <Container className='mt-16'>
        <div className='lg:flex lg:items-center lg:justify-end'>
          <div className='flex justify-center lg:w-1/2 lg:justify-end lg:pr-12'>
            <FadeIn className='w-[33.75rem] flex-none lg:w-[45rem]'>
              <StylizedImage
                src={imageLaptop}
                sizes='(min-width: 1024px) 41rem, 31rem'
                className='justify-center lg:justify-end'
              />
            </FadeIn>
          </div>
          <List className='mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4'>
            <ListItem title='Web development'>
              Specialized in crafting beautiful and high quality web apps,
              tailored to your needs.
            </ListItem>
            <ListItem title='Branding'>
              Your brand's perception is everything, and I'm here to give it a
              dazzling glow that steals the spotlight.
            </ListItem>
            <ListItem title='E-commerce'>
              Unlock the full potential of your products by reaching the widest
              audience possible through an E-commerce store.
            </ListItem>
            <ListItem title='Graphic design'>
              When you have something you would say out loud, but need
              assistance finding the right words, let me help you reach your
              communication goals.
            </ListItem>
            <ListItem title='Photography'>
              The importance of the right pic in your business is crucial to
              appear professional and eye-catching. Guess what? I really love
              shoot high quality pics.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
}

export const metadata = {
  description:
    "I'm a creative developer with a flair for design, photography, and technology.",
};

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3);

  return (
    <>
      <Container className='mt-24 sm:mt-32 md:mt-56'>
        <FadeIn className='max-w-3xl'>
          <h1 className='font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl'>
            Hello, i'm Gianluca Strada.
          </h1>
          <p className='mt-6 text-xl text-neutral-600'>
            I'm a creative developer with a flair for design, photography, and
            technology. Ready to sprinkle some coding magic on your projects and
            help you create something beautiful 🚀✨!
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      {/*<Testimonial*/}
      {/*  className='mt-24 sm:mt-32 lg:mt-40'*/}
      {/*  client={{ name: 'Phobia', logo: logoPhobiaDark }}*/}
      {/*>*/}
      {/*  The team at Studio went above and beyond with our onboarding, even*/}
      {/*  finding a way to access the user’s microphone without triggering one of*/}
      {/*  those annoying permission dialogs.*/}
      {/*</Testimonial>*/}

      <Services />

      <ContactSection />
    </>
  );
}
