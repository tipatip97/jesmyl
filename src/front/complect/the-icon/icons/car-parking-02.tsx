import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 21V9.61065C22 8.28771 22 7.62624 21.6561 7.11395C21.3123 6.60167 20.7034 6.35601 19.4856 5.86468L13.4856 3.44396C12.752 3.14799 12.3852 3 12 3C11.6148 3 11.248 3.14799 10.5144 3.44396L4.51444 5.86468C3.29663 6.35601 2.68773 6.60167 2.34387 7.11395C2 7.62624 2 8.28771 2 9.61065V21',
  d2: 'M16 19V21M8 19V21',
  d3: 'M7.5 14L7.74254 13.0299C8.10632 11.5747 8.28821 10.8472 8.83073 10.4236C9.37325 10 10.1232 10 11.6231 10H12.3769C13.8768 10 14.6267 10 15.1693 10.4236C15.7118 10.8472 15.8937 11.5747 16.2575 13.0299L16.5 14',
  d4: 'M17 14H7C6.44772 14 6 14.4477 6 15V18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18V15C18 14.4477 17.5523 14 17 14Z',
  d5: 'M8.5 16.49V16.5',
  d6: 'M15.5 16.49V16.5',
  d7: 'M8 17.75C8.55228 17.75 9 18.1977 9 18.75V20.75C9 21.3023 8.55228 21.75 8 21.75C7.44772 21.75 7 21.3023 7 20.75V18.75C7 18.1977 7.44772 17.75 8 17.75ZM16 17.75C16.5523 17.75 17 18.1977 17 18.75V20.75C17 21.3023 16.5523 21.75 16 21.75C15.4477 21.75 15 21.3023 15 20.75V18.75C15 18.1977 15.4477 17.75 16 17.75Z',
  d8: 'M12.4328 9C13.1351 8.99996 13.7485 8.99992 14.2511 9.06003C14.7936 9.12491 15.3167 9.2698 15.7849 9.63539C16.2532 10.001 16.5206 10.4733 16.7151 10.9839C16.8953 11.4569 17.044 12.052 17.2143 12.7333L17.2144 12.7333L17.4704 13.7575C17.6043 14.2933 17.2786 14.8362 16.7428 14.9701C16.207 15.1041 15.664 14.7783 15.5301 14.2425L15.2876 13.2724C15.0998 12.5212 14.9787 12.0439 14.8462 11.6959C14.7232 11.3731 14.6284 11.2698 14.5541 11.2118C14.4798 11.1538 14.3566 11.0869 14.0136 11.0459C13.6439 11.0017 13.1514 11 12.3771 11H11.6233C10.849 11 10.3566 11.0017 9.98687 11.0459C9.64384 11.0869 9.52067 11.1538 9.44638 11.2118C9.37209 11.2698 9.27731 11.3731 9.15432 11.6959C9.02176 12.0439 8.90071 12.5212 8.71291 13.2724L8.47038 14.2425C8.33643 14.7783 7.7935 15.1041 7.2577 14.9701C6.72191 14.8362 6.39615 14.2933 6.53009 13.7575L6.77263 12.7873L6.78613 12.7333C6.95643 12.052 7.10515 11.4569 7.28536 10.9839C7.47989 10.4733 7.74732 10.001 8.21555 9.63539C8.68379 9.2698 9.20685 9.12491 9.7494 9.06003C10.252 8.99992 10.8654 8.99996 11.5677 9H12.4328Z',
  d9: 'M5.25 15C5.25 14.0335 6.0335 13.25 7 13.25L17 13.25C17.9665 13.25 18.75 14.0335 18.75 15V18C18.75 18.9665 17.9665 19.75 17 19.75H7C6.0335 19.75 5.25 18.9665 5.25 18L5.25 15ZM8.5 15.5C9.05228 15.5 9.5 15.9448 9.5 16.4934V16.5066C9.5 17.0552 9.05228 17.5 8.5 17.5C7.94772 17.5 7.5 17.0552 7.5 16.5066V16.4934C7.5 15.9448 7.94772 15.5 8.5 15.5ZM16.5 16.4934C16.5 15.9448 16.0523 15.5 15.5 15.5C14.9477 15.5 14.5 15.9448 14.5 16.4934V16.5066C14.5 17.0552 14.9477 17.5 15.5 17.5C16.0523 17.5 16.5 17.0552 16.5 16.5066V16.4934Z',
  d10: 'M12 4.2C11.8574 4.2 11.7027 4.24451 10.9138 4.56204L5.05021 6.92225C4.43512 7.16983 4.04769 7.32726 3.76658 7.4781C3.50716 7.61731 3.42258 7.70841 3.37475 7.7795C3.32651 7.8512 3.27317 7.96587 3.24081 8.26238C3.20589 8.58239 3.20455 9.00417 3.20455 9.67038V20.775C3.20455 21.3135 2.76701 21.75 2.22728 21.75C1.68754 21.75 1.25 21.3135 1.25 20.775L1.25 9.62194V9.62188C1.24997 9.01841 1.24994 8.48941 1.29775 8.05131C1.3494 7.57803 1.46409 7.12049 1.7519 6.69271C2.04012 6.26433 2.4211 5.98593 2.84075 5.76074C3.22821 5.55283 3.71727 5.35601 4.27349 5.13216L4.27352 5.13215L10.3046 2.7044C10.8992 2.46401 11.4286 2.25 12 2.25C12.5714 2.25 13.1008 2.46401 13.6954 2.7044L19.7265 5.13215C20.2827 5.35601 20.7718 5.55283 21.1593 5.76074C21.5789 5.98593 21.9599 6.26433 22.2481 6.69271C22.5359 7.12049 22.6506 7.57803 22.7022 8.05131C22.7501 8.48943 22.75 9.01845 22.75 9.62194V20.775C22.75 21.3135 22.3125 21.75 21.7727 21.75C21.233 21.75 20.7955 21.3135 20.7955 20.775V9.67038C20.7955 9.00417 20.7941 8.58239 20.7592 8.26238C20.7268 7.96587 20.6735 7.8512 20.6253 7.7795C20.5774 7.70841 20.4928 7.6173 20.2334 7.4781C19.9523 7.32726 19.5649 7.16983 18.9498 6.92225L13.0862 4.56204C12.2973 4.24451 12.1426 4.2 12 4.2Z',
  d11: 'M2 21V7L12 3L22 7V21',
  d12: 'M7.5 14L9 10H15L16.5 14',
  d13: 'M18 14H6V19H18V14Z',
  d14: 'M9 17.75V21.75H7V17.75H9ZM17 17.75V21.75H15V17.75H17Z',
  d15: 'M8.30681 9H15.6928L17.4361 13.6489L15.5635 14.3511L14.3068 11H9.69281L8.43613 14.3511L6.56348 13.6489L8.30681 9Z',
  d16: 'M5.25 13.25L18.75 13.25V19.75L5.25 19.75L5.25 13.25ZM9.5 15.4902V17.5002H7.5L7.5 15.4902H9.5ZM16.5 17.5002V15.4902L14.5 15.4902L14.5 17.5002H16.5Z',
  d17: 'M12 2.25L22.75 6.52354V21.75H20.7955V7.83869L12 4.34216L3.20455 7.83869V21.75H1.25V6.52354L12 2.25Z',
} as const;

export const IconCarParking02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="car-parking-02-stroke-rounded IconCarParking02StrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCarParking02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="car-parking-02-duotone-rounded IconCarParking02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCarParking02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="car-parking-02-twotone-rounded IconCarParking02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCarParking02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="car-parking-02-solid-rounded IconCarParking02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCarParking02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="car-parking-02-bulk-rounded IconCarParking02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCarParking02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="car-parking-02-stroke-sharp IconCarParking02StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCarParking02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="car-parking-02-solid-sharp IconCarParking02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfCarParking02: TheIconSelfPack = {
  name: 'CarParking02',
  StrokeRounded: IconCarParking02StrokeRounded,
  DuotoneRounded: IconCarParking02DuotoneRounded,
  TwotoneRounded: IconCarParking02TwotoneRounded,
  SolidRounded: IconCarParking02SolidRounded,
  BulkRounded: IconCarParking02BulkRounded,
  StrokeSharp: IconCarParking02StrokeSharp,
  SolidSharp: IconCarParking02SolidSharp,
};