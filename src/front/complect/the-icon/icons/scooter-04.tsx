import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.51383 18H13.2887C14.0213 18 14.3876 18 14.6328 17.8445C14.878 17.689 15.0854 17.2491 15.5002 16.3693C15.735 15.8712 16.0361 15.411 16.3921 15M16.3921 15L4 16M16.3921 15C17.0623 14.2264 17.9273 13.6269 18.913 13.2759C19.4501 13.0846 19.7186 12.9889 19.8093 12.8143C19.8999 12.6397 19.8331 12.3991 19.6995 11.918L18.1691 6.4088C17.9184 5.50632 17.7931 5.05508 17.5225 4.72715C17.3256 4.4885 17.076 4.29879 16.7934 4.17293C16.405 4 15.9366 4 15 4',
  d2: 'M13.2887 18H6.51383L4 16L16.3921 15C16.0361 15.411 15.735 15.8712 15.5002 16.3693C15.0854 17.2491 14.878 17.689 14.6328 17.8445C14.3876 18 14.0213 18 13.2887 18Z',
  d3: 'M6.51562 18H13.2905C14.0231 18 14.3894 18 14.6346 17.8445C14.8798 17.689 15.0872 17.2491 15.502 16.3693C16.1788 14.9336 17.4054 13.8135 18.9148 13.2759C19.4518 13.0846 19.7204 12.9889 19.811 12.8143C19.9017 12.6397 19.8349 12.3991 19.7012 11.918L18.1709 6.4088C17.9202 5.50632 17.7949 5.05508 17.5243 4.72715C17.3274 4.4885 17.0778 4.29879 16.7951 4.17293C16.4068 4 15.9384 4 15.0018 4',
  d4: 'M16 15L4 16',
  d5: 'M15.0003 5.00238C15.4837 5.00238 15.7905 5.00305 16.0263 5.02108C16.4727 5.05521 16.7661 5.28867 16.9132 5.69522C16.9937 5.9176 17.0765 6.21303 17.2059 6.67882L18.7362 12.1881C18.7693 12.3072 18.6869 12.2973 18.5777 12.3362C17.4439 12.7401 16.4475 13.4253 15.6709 14.3083L3.61305 15.5024L3.5332 16.5894C3.5332 16.5894 4.61339 16.5024 5.11339 17.0024C5.62183 17.5109 6.04704 18.5894 6.04704 18.5894C6.17977 18.695 6.34437 18.7525 6.51398 18.7525L13.3201 18.7525C13.6596 18.7525 13.9635 18.7525 14.2116 18.73C14.7953 18.6769 15.2182 18.371 15.6144 17.9682C15.8635 17.715 16.1498 17.3394 16.405 16.7981C16.6006 16.3833 16.8514 15.9998 17.1482 15.6571C17.7071 15.012 18.4281 14.5126 19.2488 14.2203C19.4883 14.135 19.7307 14.0532 19.9604 13.9433C20.1538 13.8507 20.496 13.6647 20.6971 13.2774C20.8868 12.912 20.8618 12.5544 20.8269 12.3299C20.7956 12.1284 20.7313 11.8972 20.6736 11.6901L19.1237 6.1102C19.0063 5.68746 18.9035 5.31744 18.7939 5.01457C18.6767 4.69075 18.53 4.37896 18.2941 4.0931C17.9988 3.73512 17.6244 3.45056 17.2004 3.26178C16.5162 2.9571 15.7317 3.00238 15.0003 3.00238C14.448 3.00238 14.0003 3.45009 14.0003 4.00238C14.0003 4.55466 14.448 5.00238 15.0003 5.00238Z',
  d6: 'M19.75 17.3333C19.2437 17.3333 18.8333 17.7437 18.8333 18.25C18.8333 18.7563 19.2437 19.1667 19.75 19.1667C20.2563 19.1667 20.6667 18.7563 20.6667 18.25C20.6667 17.7437 20.2563 17.3333 19.75 17.3333ZM17 18.25C17 16.7312 18.2312 15.5 19.75 15.5C21.2688 15.5 22.5 16.7312 22.5 18.25C22.5 19.7688 21.2688 21 19.75 21C18.2312 21 17 19.7688 17 18.25Z',
  d7: 'M3.75 17.3333C3.24374 17.3333 2.83333 17.7437 2.83333 18.25C2.83333 18.7563 3.24374 19.1667 3.75 19.1667C4.25626 19.1667 4.66667 18.7563 4.66667 18.25C4.66667 17.7437 4.25626 17.3333 3.75 17.3333ZM1 18.25C1 16.7312 2.23122 15.5 3.75 15.5C5.26878 15.5 6.5 16.7312 6.5 18.25C6.5 19.7688 5.26878 21 3.75 21C2.23122 21 1 19.7688 1 18.25Z',
  d8: 'M6.51383 18.0002L15 18C15 15.2386 17.2386 13 20 13L17 4H14M16 15L4 16.0002',
  d9: 'M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18C5 17.4477 4.55228 17 4 17ZM1 18C1 16.3431 2.34315 15 4 15C5.65685 15 7 16.3431 7 18C7 19.6569 5.65685 21 4 21C2.34315 21 1 19.6569 1 18Z',
  d10: 'M20 17C19.4477 17 19 17.4477 19 18C19 18.5523 19.4477 19 20 19C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17ZM17 18C17 16.3431 18.3431 15 20 15C21.6569 15 23 16.3431 23 18C23 19.6569 21.6569 21 20 21C18.3431 21 17 19.6569 17 18Z',
  d11: 'M16.2803 5H14.001V3H17.001C17.4315 3 17.8136 3.27543 17.9497 3.68377L20.9497 12.6838C21.0514 12.9887 21.0002 13.3239 20.8123 13.5847C20.6243 13.8455 20.3225 14 20.001 14C17.7919 14 16.001 15.7909 16.001 18C16.001 18.5523 15.5533 19 15.0011 19L6.51489 19.0002L3.91797 15.0037L15.4944 14.0388C16.3125 13.1088 17.4138 12.4342 18.6635 12.1496L16.2803 5Z',
} as const;

export const IconScooter04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-04-stroke-rounded IconScooter04StrokeRounded"
    >
      <circle 
        cx="4" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconScooter04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-04-duotone-rounded IconScooter04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="4" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconScooter04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-04-twotone-rounded IconScooter04TwotoneRounded"
    >
      <circle 
        cx="4" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconScooter04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-04-solid-rounded IconScooter04SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconScooter04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-04-bulk-rounded IconScooter04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconScooter04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-04-stroke-sharp IconScooter04StrokeSharp"
    >
      <circle 
        cx="4" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconScooter04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-04-solid-sharp IconScooter04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfScooter04: TheIconSelfPack = {
  name: 'Scooter04',
  StrokeRounded: IconScooter04StrokeRounded,
  DuotoneRounded: IconScooter04DuotoneRounded,
  TwotoneRounded: IconScooter04TwotoneRounded,
  SolidRounded: IconScooter04SolidRounded,
  BulkRounded: IconScooter04BulkRounded,
  StrokeSharp: IconScooter04StrokeSharp,
  SolidSharp: IconScooter04SolidSharp,
};