'use client';
import Spline from '@splinetool/react-spline';

export default function Hello() {
  return (
    <section className='absolute h-screen w-full overflow-hidden top-0 left-0 hidden lg:block'>
      <Spline
        scene='https://prod.spline.design/4sLV8MWZBDOHw7d5/scene.splinecode'
        className='absolute inset-0 h-full w-full object-cover'
      />
    </section>
  );
}
