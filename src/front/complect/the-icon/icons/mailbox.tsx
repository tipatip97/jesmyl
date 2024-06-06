import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.5 19V8.5C5.5 4.91015 8.41015 2 12 2C15.5899 2 18.5 4.91015 18.5 8.5V19',
  d2: 'M18.8688 22H5.13104C4.51972 22 4.21406 22 4.06951 21.7924C3.92497 21.5848 4.02157 21.2845 4.21477 20.684C4.561 19.6077 4.9089 19 6.14897 19H17.8508C19.0907 19 19.4386 19.6077 19.785 20.6838C19.9784 21.2844 20.0751 21.5847 19.9305 21.7924C19.786 22 19.4803 22 18.8688 22Z',
  d3: 'M10.5 11H13.5',
  d4: 'M4.5 8H19.5',
  d5: 'M5.5 8V19H18.5V8H5.5Z',
  d6: 'M11.9999 2.88235C9.06356 2.88235 6.68321 5.19994 6.68321 8.05882C6.68321 8.57862 6.25042 9 5.71654 9C5.18267 9 4.74988 8.57862 4.74988 8.05882C4.74988 4.16034 7.99581 1 11.9999 1C16.0039 1 19.2499 4.16034 19.2499 8.05882C19.2499 8.57862 18.8171 9 18.2832 9C17.7493 9 17.3165 8.57862 17.3165 8.05882C17.3165 5.19994 14.9362 2.88235 11.9999 2.88235Z',
  d7: 'M5.55509 19.894C5.45623 19.9933 5.34018 20.2005 5.16655 20.7402C5.16549 20.7435 5.16444 20.7468 5.1634 20.75H18.8361C18.8351 20.7468 18.834 20.7435 18.833 20.7402C18.6592 20.2006 18.5432 19.9933 18.4443 19.894C18.4028 19.8524 18.2964 19.75 17.8506 19.75H6.1488C5.70287 19.75 5.59654 19.8524 5.55509 19.894ZM4.13792 18.4828C4.667 17.9515 5.35466 17.75 6.1488 17.75H17.8506C18.6448 17.75 19.3323 17.9515 19.8614 18.4827C20.333 18.9563 20.5641 19.591 20.7367 20.1273C20.7417 20.1427 20.7467 20.1581 20.7517 20.1737C20.8351 20.4324 20.9273 20.7182 20.9699 20.966C21.0185 21.2489 21.0432 21.694 20.7511 22.1137C20.4527 22.5423 20.0175 22.6682 19.7247 22.7127C19.4768 22.7504 19.179 22.7502 18.918 22.75C18.9014 22.75 18.8849 22.75 18.8686 22.75H5.13086C5.11456 22.75 5.09809 22.75 5.08147 22.75C4.82051 22.7502 4.5228 22.7504 4.27493 22.7127C3.98214 22.6683 3.54704 22.5423 3.24866 22.1138C2.95656 21.6942 2.98118 21.2492 3.02974 20.9663C3.07228 20.7185 3.16436 20.4327 3.24773 20.174C3.25273 20.1585 3.25771 20.1431 3.26264 20.1277C3.43524 19.5912 3.66626 18.9564 4.13792 18.4828Z',
  d8: 'M5.49988 7C5.08566 7 4.74988 7.33579 4.74988 7.75V18.75C4.74988 19.1642 5.08566 19.5 5.49988 19.5H18.4999C18.9141 19.5 19.2499 19.1642 19.2499 18.75V7.75C19.2499 7.33579 18.9141 7 18.4999 7H5.49988ZM10.4999 9.75C9.94759 9.75 9.49988 10.1977 9.49988 10.75C9.49988 11.3023 9.94759 11.75 10.4999 11.75H13.4999C14.0522 11.75 14.4999 11.3023 14.4999 10.75C14.4999 10.1977 14.0522 9.75 13.4999 9.75H10.4999Z',
  d9: 'M3.49988 7.75C3.49988 7.19772 3.94759 6.75 4.49988 6.75H19.4999C20.0522 6.75 20.4999 7.19772 20.4999 7.75C20.4999 8.30228 20.0522 8.75 19.4999 8.75H4.49988C3.94759 8.75 3.49988 8.30228 3.49988 7.75Z',
  d10: 'M11.9999 2.88235C9.06356 2.88235 6.68321 5.19994 6.68321 8.05882H4.74988C4.74988 4.16034 7.99581 1 11.9999 1C16.0039 1 19.2499 4.16034 19.2499 8.05882H17.3165C17.3165 5.19994 14.9362 2.88235 11.9999 2.88235Z',
  d11: 'M18.8687 21.75H5.13091C4.51959 21.75 4.21393 21.75 4.06939 21.5424C3.92485 21.3348 4.02145 21.0345 4.21464 20.434C4.56087 19.3577 4.90878 18.75 6.14885 18.75H17.8507C19.0906 18.75 19.4385 19.3577 19.7849 20.4338C19.9783 21.0344 20.0749 21.3347 19.9304 21.5424C19.7859 21.75 19.4801 21.75 18.8687 21.75Z',
  d12: 'M4.74988 7.75C4.74988 7.33579 5.08566 7 5.49988 7H18.4999C18.9141 7 19.2499 7.33579 19.2499 7.75V18.75C19.2499 19.1642 18.9141 19.5 18.4999 19.5H5.49988C5.08566 19.5 4.74988 19.1642 4.74988 18.75V7.75Z',
  d13: 'M9.49988 10.75C9.49988 10.1977 9.94759 9.75 10.4999 9.75H13.4999C14.0522 9.75 14.4999 10.1977 14.4999 10.75C14.4999 11.3023 14.0522 11.75 13.4999 11.75H10.4999C9.94759 11.75 9.49988 11.3023 9.49988 10.75Z',
  d14: 'M20.4999 19H3.49988V22H20.4999V19Z',
  d15: 'M3.5 8H20.5',
  d16: 'M2.5 17.75H21.5V22.75H2.5V17.75ZM4.5 19.75V20.75H19.5V19.75H4.5Z',
  d17: 'M4.5 8.75V19.25H19.5V8.75H21.5V6.75H19.2304C18.3551 3.57881 15.4495 1.25 12 1.25C8.55047 1.25 5.64486 3.57881 4.76962 6.75H2.5V8.75H4.5ZM17.1248 6.75H6.87466C7.67473 4.70132 9.66773 3.25 11.9997 3.25C14.3317 3.25 16.3247 4.70132 17.1248 6.75ZM10.5 11.75V9.75H13.5V11.75H10.5Z',
};

export const IconMailboxStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mailbox-stroke-rounded IconMailboxStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailboxDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mailbox-duotone-rounded IconMailboxDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailboxTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mailbox-twotone-rounded IconMailboxTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailboxSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mailbox-solid-rounded IconMailboxSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const IconMailboxBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mailbox-bulk-rounded IconMailboxBulkRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
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

export const IconMailboxStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mailbox-stroke-sharp IconMailboxStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailboxSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mailbox-solid-sharp IconMailboxSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfMailbox: TheIconSelfPack = {
  name: 'Mailbox',
  StrokeRounded: IconMailboxStrokeRounded,
  DuotoneRounded: IconMailboxDuotoneRounded,
  TwotoneRounded: IconMailboxTwotoneRounded,
  SolidRounded: IconMailboxSolidRounded,
  BulkRounded: IconMailboxBulkRounded,
  StrokeSharp: IconMailboxStrokeSharp,
  SolidSharp: IconMailboxSolidSharp,
};