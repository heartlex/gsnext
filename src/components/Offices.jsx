import clsx from 'clsx';

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role='list' {...props}>
      <li>
        <Office name='Dozza' invert={invert}>
          Via Pertini 3/D
          <br />
          40060, Dozza, Italy
        </Office>
      </li>
      <li>
        <Office name='Remote' invert={invert}>
          Available for any timezone
          <br />
          REMOTELY
        </Office>
      </li>
    </ul>
  );
}
