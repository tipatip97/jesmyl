import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.0209 11.0209C17.6875 13.3544 14.2194 13.6697 12.2749 11.7251C10.3303 9.78056 10.6456 6.31254 12.9791 3.97907C15.3125 1.64561 18.7806 1.33034 20.7251 3.27489C22.6697 5.21944 22.3544 8.68746 20.0209 11.0209Z',
  d2: 'M17.9226 8.92264C15.5655 11.2797 13.0178 12.5536 12.2321 11.7679C11.4464 10.9822 12.7203 8.43447 15.0774 6.07736C17.4345 3.72026 19.9822 2.44638 20.7679 3.23208C21.5536 4.01778 20.2797 6.56553 17.9226 8.92264Z',
  d3: 'M7.54773 18.636L4.63604 21.5477C4.03301 22.1508 3.0553 22.1508 2.45227 21.5477C1.84924 20.9447 1.84924 19.967 2.45227 19.364L5.36396 16.4523C5.96699 15.8492 6.9447 15.8492 7.54773 16.4523C8.15076 17.0553 8.15076 18.033 7.54773 18.636Z',
  d4: 'M8 16L12 12',
  d5: 'M17.0542 3.25824C15.8479 3.30436 14.5321 3.84139 13.4348 4.9387C12.3375 6.03601 11.8005 7.35178 11.7543 8.55808C12.3354 7.61161 13.1474 6.59428 14.1189 5.62277C15.0904 4.65127 16.1077 3.83935 17.0542 3.25824ZM19.7414 4.25969C19.6853 4.2665 19.6135 4.27923 19.5239 4.30209C19.2434 4.37365 18.8782 4.52205 18.4443 4.76194C17.5789 5.24033 16.5473 6.02273 15.5331 7.03699C14.5188 8.05125 13.7364 9.08283 13.258 9.94819C13.0181 10.3821 12.8697 10.7473 12.7982 11.0278C12.7753 11.1174 12.7626 11.1892 12.7558 11.2453C12.8119 11.2385 12.8837 11.2258 12.9733 11.203C13.2539 11.1314 13.619 10.983 14.0529 10.7431C14.9183 10.2647 15.9499 9.48231 16.9641 8.46805C17.9784 7.45379 18.7608 6.42221 19.2392 5.55685C19.4791 5.1229 19.6275 4.75776 19.699 4.4772C19.7219 4.38761 19.7346 4.31579 19.7414 4.25969ZM15.4431 12.2468C16.3895 11.6657 17.4069 10.8538 18.3784 9.88227C19.3499 8.91076 20.1618 7.89343 20.7429 6.94696C20.6968 8.15326 20.1597 9.46903 19.0624 10.5663C17.9651 11.6636 16.6494 12.2007 15.4431 12.2468ZM12.0206 3.52449C14.5253 1.01981 18.4149 0.417392 20.8979 2.55759C20.9949 2.64119 21.0893 2.72877 21.1808 2.8203C21.2724 2.91184 21.3599 3.00619 21.4435 3.10319C23.5837 5.58621 22.9813 9.47588 20.4766 11.9806C17.972 14.4852 14.0823 15.0876 11.5993 12.9474C11.5023 12.8639 11.4079 12.7763 11.3164 12.6847C11.2249 12.5932 11.1373 12.4988 11.0537 12.4019C8.91349 9.91883 9.51591 6.02916 12.0206 3.52449Z',
  d6: 'M4.83363 15.9219C5.72955 15.026 7.18213 15.026 8.07806 15.9219C8.97398 16.8179 8.97398 18.2704 8.07806 19.1664L5.16637 22.0781C4.27045 22.974 2.81787 22.974 1.92194 22.0781C1.02602 21.1821 1.02602 19.7296 1.92194 18.8336L4.83363 15.9219Z',
  d7: 'M12.7071 11.2929C13.0976 11.6834 13.0976 12.3166 12.7071 12.7071L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L11.2929 11.2929C11.6834 10.9024 12.3166 10.9024 12.7071 11.2929Z',
  d8: 'M4.83168 15.9229C5.7276 15.027 7.18018 15.027 8.0761 15.9229C8.97203 16.8188 8.97203 18.2714 8.0761 19.1673L5.16442 22.079C4.26849 22.975 2.81591 22.975 1.91999 22.079C1.02407 21.1831 1.02407 19.7305 1.91999 18.8346L4.83168 15.9229Z',
  d9: 'M11.1229 11.4621C9.53754 9.08348 10.1991 5.67412 12.4381 3.43512C14.935 0.938181 18.8875 0.403093 21.2427 2.75827C23.5979 5.11345 23.0628 9.06593 20.5658 11.5629C18.3261 13.8026 14.9154 14.4638 12.5367 12.8766L7.70523 17.7081L6.29102 16.2939L11.1229 11.4621ZM13.7974 4.79442C14.9162 3.67558 16.2647 3.16371 17.4765 3.1762C16.5311 3.72057 15.498 4.53035 14.5197 5.51358C13.5323 6.50592 12.721 7.55396 12.1797 8.51053C12.1563 7.2892 12.6671 5.92466 13.7974 4.79442ZM18.4842 9.48441C19.4716 8.49207 20.2829 7.44403 20.8242 6.48745C20.8476 7.70879 20.3368 9.07333 19.2065 10.2036C18.0877 11.3224 16.7392 11.8343 15.5274 11.8218C16.4729 11.2774 17.5059 10.4676 18.4842 9.48441ZM15.8824 6.86948C16.9076 5.83916 17.9468 5.07509 18.7733 4.65977C19.1493 4.47085 19.4409 4.37458 19.6415 4.33978C19.6075 4.54334 19.5111 4.83976 19.321 5.22184C18.9073 6.05342 18.1466 7.09827 17.1215 8.12851C16.0964 9.15883 15.0571 9.9229 14.2306 10.3382C13.8546 10.5271 13.563 10.6234 13.3624 10.6582C13.3965 10.4547 13.4928 10.1582 13.6829 9.77616C14.0966 8.94457 14.8573 7.89972 15.8824 6.86948Z',
} as const;

export const IconWhiskStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whisk-stroke-rounded IconWhiskStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconWhiskDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whisk-duotone-rounded IconWhiskDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconWhiskTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whisk-twotone-rounded IconWhiskTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWhiskSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whisk-solid-rounded IconWhiskSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWhiskBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whisk-bulk-rounded IconWhiskBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWhiskStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whisk-stroke-sharp IconWhiskStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWhiskSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whisk-solid-sharp IconWhiskSolidSharp"
    >
      <path 
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

export const iconPackOfWhisk: TheIconSelfPack = {
  name: 'Whisk',
  StrokeRounded: IconWhiskStrokeRounded,
  DuotoneRounded: IconWhiskDuotoneRounded,
  TwotoneRounded: IconWhiskTwotoneRounded,
  SolidRounded: IconWhiskSolidRounded,
  BulkRounded: IconWhiskBulkRounded,
  StrokeSharp: IconWhiskStrokeSharp,
  SolidSharp: IconWhiskSolidSharp,
};