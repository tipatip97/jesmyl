import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.5 9H8.5',
  d2: 'M17.5 8V4C17.5 2.89543 18.3954 2 19.5 2',
  d3: 'M12.5 18L12.5 22',
  d4: 'M17.5 5.15889C16.5351 5 15.2591 5 13.375 5H10.625C7.70671 5 6.24757 5 5.14302 5.59039C4.27088 6.05656 3.55656 6.77088 3.09039 7.64302C2.5 8.74757 2.5 10.2067 2.5 13.125C2.5 14.876 2.5 15.7515 2.85424 16.4142C3.13394 16.9375 3.56253 17.3661 4.08581 17.6458C4.74854 18 5.62403 18 7.375 18H16.625C18.376 18 19.2515 18 19.9142 17.6458C20.4375 17.3661 20.8661 16.9375 21.1458 16.4142C21.5 15.7515 21.5 14.876 21.5 13.125C21.5 10.2067 21.5 8.74757 20.9096 7.64302C20.7356 7.31755 20.5271 7.01406 20.2887 6.73725',
  d5: 'M12.5006 18V11C12.5006 10.071 12.5006 9.60649 12.439 9.21782C12.1002 7.07836 10.4222 5.40041 8.28276 5.06155C8.2009 5.04859 8.11566 5.03835 8.02344 5.03027',
  d6: 'M12.5001 18H16.6251C18.3761 18 19.2516 18 19.9143 17.6458C20.4376 17.3661 20.8662 16.9375 21.1459 16.4142C21.5001 15.7515 21.5001 14.876 21.5001 13.125C21.5001 10.2067 21.5001 8.74757 20.9097 7.64302C20.7358 7.31755 20.5272 7.01406 20.2888 6.73725C19.3198 5.72705 18.0259 5.26409 17.5001 5.15889C16.5352 5 15.2593 5 13.3751 5H10.6251C10.1719 5 9.7539 5 9.36694 5.00221C11.8133 6.60002 12.5001 8.35638 12.5001 12.9973V18Z',
  d7: 'M12.5006 18.001V11.001C12.5006 10.072 12.5006 9.60746 12.439 9.2188C12.1002 7.07934 10.4222 5.40139 8.28276 5.06253C8.2009 5.04956 8.11566 5.03933 8.02344 5.03125',
  d8: 'M8.00995 4.27734H8.02368C10.7821 4.27734 12.8011 6.70985 13.18 9.1025C13.2509 9.55018 13.2509 10.0692 13.2508 10.9212L13.2512 22.001C13.2512 22.5533 12.8035 23.001 12.2512 23.001C11.6989 23.0009 11.2512 22.5532 11.2512 22.0009L11.2514 18.751H7.34177C6.49469 18.751 5.81148 18.751 5.25899 18.704C4.68993 18.6556 4.19104 18.5533 3.73251 18.3082C3.0784 17.9586 2.54267 17.4229 2.19304 16.7688C1.94795 16.3102 1.84563 15.8113 1.79722 15.2423C1.75023 14.6898 1.75024 14.0066 1.75024 13.1595V13.1595V13.1595V13.091V13.091V13.091C1.75024 11.6615 1.75024 10.5408 1.82674 9.64131C1.90467 8.7252 2.06603 7.96993 2.4292 7.29049C2.96529 6.28753 3.78676 5.46607 4.78971 4.92998C5.66273 4.46334 6.67087 4.3264 7.99622 4.27785L8.00995 4.27734ZM6.50024 8C5.94796 8 5.50024 8.44772 5.50024 9C5.50024 9.55228 5.94796 10 6.50024 10H8.50024C9.05253 10 9.50024 9.55228 9.50024 9C9.50024 8.44772 9.05253 8 8.50024 8H6.50024Z',
  d9: 'M18.5002 4C18.5002 3.44772 18.948 3 19.5002 3C20.0525 3 20.5002 2.55228 20.5002 2C20.5002 1.44772 20.0525 1 19.5002 1C17.8434 1 16.5002 2.34315 16.5002 4V4.30055C15.6658 4.24999 14.655 4.25 13.4098 4.25H13.4098H11.6292C13.1565 5.40277 14.1444 7.20256 14.4142 8.90598C14.5008 9.45238 14.5006 10.0608 14.5004 10.83V10.83L14.5007 18.75H16.6583H16.6584C17.5054 18.75 18.1886 18.75 18.7411 18.703C19.3101 18.6546 19.809 18.5523 20.2676 18.3072C20.9217 17.9576 21.4574 17.4218 21.807 16.7677C22.0521 16.3092 22.1544 15.8103 22.2028 15.2413C22.2498 14.6888 22.2498 14.0056 22.2498 13.1586V13.09C22.2498 11.6605 22.2498 10.5398 22.1733 9.64029C22.0954 8.72417 21.934 7.96891 21.5709 7.28947C21.0348 6.28651 20.2133 5.46505 19.2104 4.92895C18.9832 4.80753 18.7475 4.70866 18.5002 4.62794V4Z',
  d10: 'M19.5002 3C18.948 3 18.5002 3.44772 18.5002 4V8C18.5002 8.55228 18.0525 9 17.5002 9C16.948 9 16.5002 8.55228 16.5002 8V4C16.5002 2.34315 17.8434 1 19.5002 1C20.0525 1 20.5002 1.44772 20.5002 2C20.5002 2.55228 20.0525 3 19.5002 3Z',
  d11: 'M14.5007 18.75H16.6583C17.5054 18.75 18.1886 18.75 18.7411 18.703C19.3101 18.6546 19.809 18.5523 20.2676 18.3072C20.9217 17.9576 21.4574 17.4218 21.807 16.7677C22.0521 16.3092 22.1544 15.8103 22.2028 15.2413C22.2498 14.6888 22.2498 14.0056 22.2498 13.1586V13.09C22.2498 11.6605 22.2498 10.5398 22.1733 9.64029C22.0954 8.72417 21.934 7.96891 21.5709 7.28947C21.0348 6.28651 20.2133 5.46505 19.2104 4.92895C18.5309 4.56578 17.7756 4.40442 16.8595 4.3265C15.9601 4.24999 14.8393 4.25 13.4098 4.25H11.6292C13.1565 5.40277 14.1444 7.20256 14.4142 8.90598C14.5008 9.45239 14.5006 10.0608 14.5004 10.83L14.5007 18.75Z',
  d12: 'M6 9.01123H9',
  d13: 'M17.5 9.01137V2H21',
  d14: 'M12.5 18.026H21.5V10.013C21.5 7.24709 19.2614 5.00488 16.5 5.00488H7.5',
  d15: 'M12.4944 22.0048V18.0014M12.4944 18.0014V9.72206C12.1892 3.85139 3.06159 3.09638 2.50293 9.84142V17.9914C2.50293 17.9969 2.50741 18.0014 2.51293 18.0014H12.4944Z',
  d16: 'M1.75 10.5C1.75 7.32436 4.32436 4.75 7.5 4.75C10.6756 4.75 13.25 7.32436 13.25 10.5V22.25H11.25V19.25H2.5C2.08579 19.25 1.75 18.9142 1.75 18.5V10.5ZM6 8.75V10.25H9V8.75H6Z',
  d17: 'M16.5 2.75C16.5 2.19772 16.9477 1.75 17.5 1.75H21V3.75H18.5V9.75002H16.5V2.75Z',
  d18: 'M14.4999 10.5C14.4999 8.11831 13.3104 6.01444 11.4932 4.75H16.4999C19.6755 4.75 22.2499 7.32436 22.2499 10.5V18.5C22.2499 18.9142 21.9141 19.25 21.4999 19.25H14.4999V10.5Z',
};

export const IconMailbox01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mailbox-01-stroke-rounded IconMailbox01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailbox01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mailbox-01-duotone-rounded IconMailbox01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailbox01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mailbox-01-twotone-rounded IconMailbox01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailbox01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mailbox-01-solid-rounded IconMailbox01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailbox01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mailbox-01-bulk-rounded IconMailbox01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailbox01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mailbox-01-stroke-sharp IconMailbox01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailbox01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mailbox-01-solid-sharp IconMailbox01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMailbox01: TheIconSelfPack = {
  name: 'Mailbox01',
  StrokeRounded: IconMailbox01StrokeRounded,
  DuotoneRounded: IconMailbox01DuotoneRounded,
  TwotoneRounded: IconMailbox01TwotoneRounded,
  SolidRounded: IconMailbox01SolidRounded,
  BulkRounded: IconMailbox01BulkRounded,
  StrokeSharp: IconMailbox01StrokeSharp,
  SolidSharp: IconMailbox01SolidSharp,
};