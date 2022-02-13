export const Music = ({ playing }) => {
  return (
    <>
      {playing ? (
        <svg width='18' height='20' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4 0H6H18V2V4V14V20H12V14H16V4H6V12V13V18H0V12H4V0Z'
            fill='white'
          />
        </svg>
      ) : (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M8 2H6V14H2V18H4V20H8V16H6V14H8V12V6H14H16V4H18V6V16H14V22H20V16V6V4H18V2H8ZM6 16V18H4V16H6Z'
            fill='white'
          />
          <rect x='20' y='2' width='2' height='2' fill='white' />
          <rect x='22' width='2' height='2' fill='white' />
          <rect x='18' y='4' width='2' height='2' fill='white' />
          <rect x='16' y='6' width='2' height='2' fill='white' />
          <rect x='14' y='8' width='2' height='2' fill='white' />
          <rect x='12' y='10' width='2' height='2' fill='white' />
          <rect x='10' y='12' width='2' height='2' fill='white' />
          <rect x='8' y='14' width='2' height='2' fill='white' />
          <rect x='6' y='16' width='2' height='2' fill='white' />
          <rect x='4' y='18' width='2' height='2' fill='white' />
          <rect x='2' y='20' width='2' height='2' fill='white' />
          <rect y='22' width='2' height='2' fill='white' />
        </svg>
      )}
    </>
  );
};
