import { Blockquote } from '@/components/Blockquote';
import { ContactSection } from '@/components/ContactSection';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { GridList, GridListItem } from '@/components/GridList';
import { GridPattern } from '@/components/GridPattern';
import { List, ListItem } from '@/components/List';
import { PageIntro } from '@/components/PageIntro';
import { SectionIntro } from '@/components/SectionIntro';
import { StylizedImage } from '@/components/StylizedImage';
import { TagList, TagListItem } from '@/components/TagList';
import imageLaptop from '@/images/laptop.jpg';
import imageMeeting from '@/images/meeting.jpg';
import imageWhiteboard from '@/images/whiteboard.jpg';

function Section({ title, image, children }) {
  return (
    <Container className='group/section [counter-increment:section]'>
      <div className='lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20'>
        <div className='flex justify-center'>
          <FadeIn className='w-[33.75rem] flex-none lg:w-[45rem]'>
            <StylizedImage
              {...image}
              sizes='(min-width: 1024px) 41rem, 31rem'
              className='justify-center lg:justify-end lg:group-even/section:justify-start'
            />
          </FadeIn>
        </div>
        <div className='mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first'>
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden='true'
            />
            <h2 className='mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl'>
              {title}
            </h2>
            <div className='mt-6'>{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}

function Discover() {
  return (
    <Section title='Discover' image={{ src: imageWhiteboard }}>
      <div className='space-y-6 text-base text-neutral-600'>
        <p>
          I work closely with my clients to understand their
          <strong className='font-semibold text-neutral-950'>
            {' '}
            needs{' '}
          </strong>{' '}
          and goals, embedding myself in their every day operations to
          understand what makes their business tick.
        </p>
        <p>
          My personal private investigator shadow the company director’s for
          several weeks while i perform social engineering hacks to gain access
          to his
          <strong className='font-semibold text-neutral-950'> business </strong>
          accounts — to know the client better than their partner
        </p>
        <p>
          Once the full audit is complete, i report back with a comprehensive
          <strong className='font-semibold text-neutral-950'>
            {' '}
            plan{' '}
          </strong>{' '}
          and, more importantly, a budget.
        </p>
      </div>

      <h3 className='mt-12 font-display text-base font-semibold text-neutral-950'>
        Included in this phase
      </h3>
      <TagList className='mt-4'>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>A lot of caffeine</TagListItem>
      </TagList>
    </Section>
  );
}

function Build() {
  return (
    <Section title='Design & Build' image={{ src: imageLaptop, shape: 1 }}>
      <div className='space-y-6 text-base text-neutral-600'>
        <p>
          Based off of the discovery phase, i let my brain pulls out great ideas
          while the fingers go wild and do all the dirty work for me.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Mila', role: 'Owner @ Mila Intimo' }}
        className='mt-12'
      >
        Gianluca gained my trust from the first moment, always proving to be
        punctual, reliable and concrete.
      </Blockquote>
    </Section>
  );
}

function Deliver() {
  return (
    <Section title='Deliver' image={{ src: imageMeeting, shape: 2 }}>
      <div className='space-y-6 text-base text-neutral-600'>
        <p>
          No time to lose here, because time is money and i know you don't want
          to waste it.
        </p>
        <p>
          I ensure that the main pages of the site are{' '}
          <strong className='font-semibold text-neutral-950'>
            fully functional
          </strong>{' '}
          at launch — the auxiliary pages will, of course, be lorem ipusm shells
          which get updated as part of our exorbitant{' '}
          <strong className='font-semibold text-neutral-950'>
            maintenance
          </strong>{' '}
          retainer.
        </p>
      </div>

      <h3 className='mt-12 font-display text-base font-semibold text-neutral-950'>
        Included in this phase
      </h3>
      <List className='mt-8'>
        <ListItem title='Testing'>
          Projects always have 100% of tests working. This is quite simple when
          you don't write any of them.
        </ListItem>
        <ListItem title='Infrastructure'>
          You already know where to host your website? Very well, but if you
          don't, i'll help providing the best solution for your budget.
        </ListItem>
        <ListItem title='Support'>
          Because i hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from me.
        </ListItem>
      </List>
    </Section>
  );
}

function Values() {
  return (
    <div className='relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40'>
      <div className='absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50'>
        <GridPattern
          className='absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]'
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow='Values'
        title='Balancing reliability and innovation'
      >
        <p>
          I strive to stay at the forefront of emerging trends and technologies,
          while completely ignoring them and forking that old Rails project i
          feel comfortable using. I stand by our core values to justify that
          decision.
        </p>
      </SectionIntro>

      <Container className='mt-24'>
        <GridList>
          <GridListItem title='Meticulous'>
            The first part of any partnership is to put your logo in the right
            template. The second step is to do the colors.
          </GridListItem>
          <GridListItem title='Efficient'>
            I pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title='Adaptable'>
            Every business has unique needs and my greatest challenge is
            shoe-horning those needs into something you can be proud of.
          </GridListItem>
          <GridListItem title='Loyal'>
            I foster long-term relationships with my clients that go beyond just
            delivering a product, allowing me to invoice them for decades.
          </GridListItem>
          <GridListItem title='Innovative'>
            The technological landscape is always evolving and so am i,
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

export const metadata = {
  title: 'The Process',
  description:
    'I believe in efficiency and maximizing my resources to provide the best value to my clients',
};

export default function Process() {
  return (
    <>
      <PageIntro eyebrow='The process' title='How i work'>
        <p>
          I believe in efficiency and maximizing my resources to provide the
          best value to my clients. The primary way i do that is by re-using the
          same five projects i’ve been developing for the past decade.
        </p>
      </PageIntro>

      <div className='mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40'>
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  );
}
