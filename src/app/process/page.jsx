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
import imageLaptop from '@/assets/images/laptop.jpg';
import imageMeeting from '@/assets/images/meeting.jpg';
import imageWhiteboard from '@/assets/images/whiteboard.jpg';
import imageDeliver from '@/assets/images/deliver.jpg';

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
          Piecing together the puzzle to uncover what the the client
          <strong className='font-semibold text-neutral-950'>
            {' '}
            needs{' '}
          </strong>{' '}
          both explicit and latent. Grasp complex requirements and asking
          insightful questions to translate conceptual ideas into precise
          objectives.
        </p>
      </div>
      <h3 className='mt-12 font-display text-base font-semibold text-neutral-950'>
        Included in this phase
      </h3>
      <TagList className='mt-4'>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>A lot of caffeine</TagListItem>
      </TagList>
    </Section>
  );
}

function Design() {
  return (
    <Section title='Design' image={{ src: imageLaptop, shape: 1 }}>
      <div className='space-y-6 text-base text-neutral-600'>
        <p>
          Whether it's designing a user interface that's a joy to use, mapping
          out systems for smooth sailing, or creating designs that catch the
          eye, I've got the artistic touch. I turn ideas into designs that not
          only
          <strong className='font-semibold text-neutral-950'>
            {' '}
            work well{' '}
          </strong>
          but also{' '}
          <strong className='font-semibold text-neutral-950'>
            {' '}
            look very good{' '}
          </strong>
          . Clients appreciate my talent for making their ideas visually
          appealing and user-friendly.
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

function Develop() {
  return (
    <Section title='Develop' image={{ src: imageMeeting, shape: 2 }}>
      <div className='space-y-6 text-base text-neutral-600'>
        <p>
          Translating design concepts into robust, efficient, and reliable code.
          Navigating coding challenges with precision, I ensure a seamless
          development process that aligns with project objectives. Clients
          entrust me to bring their{' '}
          <strong className='font-semibold text-neutral-950'>
            {' '}
            visions to life{' '}
          </strong>{' '}
          through the implementation of high-quality and technically sound
          solutions.
        </p>
      </div>
    </Section>
  );
}

function Deliver() {
  return (
    <Section title='Deliver' image={{ src: imageDeliver, shape: 3 }}>
      <div className='space-y-6 text-base text-neutral-600'>
        <p>
          A meticulous quality assurance practitioner, I excel in thorough
          testing procedures to guarantee a polished final product. Managing
          deployment processes seamlessly, I ensure the successful delivery of
          refined and flawless solutions that exceed client expectations.
          Clients commend my commitment to delivering not just functional
          products but refined, quality solutions.
        </p>
        <p>
          Throughout these stages, my effective communication style fosters
          transparency and understanding. I am dedicated to ensuring a
          professional and successful project journey, delivering results that
          meet and surpass client expectations.
        </p>
      </div>

      <h3 className='mt-12 font-display text-base font-semibold text-neutral-950'>
        Included in this phase
      </h3>
      <List className='mt-8'>
        <ListItem title='Testing'>
          Projects always have 100% of tests working. This is quite simple when
          you don't write any of them 😆.
        </ListItem>
        <ListItem title='Infrastructure'>
          You already know where to host your website? Very well, but if you
          don't, I'll help providing the best solution for your budget.
        </ListItem>
        <ListItem title='Support'>
          Because I hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from me 🧛🏻.
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
        title='Balancing reliability, creativity and innovation'
      >
        <p>
          Reliability is the cornerstone of my work, ensuring that every project
          is delivered with precision and meets or exceeds expectations.
          Creativity is my driving force, infusing unique and visually
          compelling solutions into every design and development endeavor. I
          embrace innovation as a mindset, constantly seeking new approaches and
          technologies to push the boundaries of what's possible.
        </p>
      </SectionIntro>

      <Container className='mt-24'>
        <GridList>
          <GridListItem title='Meticulousness'>
            Precision and attention to detail are at the core of my work in
            order to deliver exceptional results you can be proud of.
          </GridListItem>
          <GridListItem title='Efficienty'>
            I pride myself on meeting deadlines and adeptly organizing my work,
            ensuring seamless project execution and successful outcomes.
          </GridListItem>
          <GridListItem title='Adaptability'>
            Every business has unique needs and my greatest challenge is
            tailoring solutions that perfectly fit them.
          </GridListItem>
          <GridListItem title='Satisfaction'>
            Strive for long-term partnerships built on trust, reliability, and a
            reputation for delivering exceptional results.
          </GridListItem>
          <GridListItem title='Innovation'>
            The technological landscape is always evolving and so am I,
            constantly on the lookout for new things to explore.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

export const metadata = {
  title: 'The Process',
  description:
    'Understanding and prioritizing the unique needs of each client is my\n' +
    '          key to success',
};

export default function Process() {
  return (
    <>
      <PageIntro eyebrow='The process' title='How I work'>
        <p>
          Understanding and prioritizing the unique needs of each client is my
          key to success. I'm on a mission to turn your challenges into
          triumphs, because your satisfaction is my priority and I'm dedicated
          to delivering custom solutions that precisely fit your requirements.
        </p>
      </PageIntro>

      <div className='mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40'>
        <Discover />
        <Design />
        <Develop />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  );
}
