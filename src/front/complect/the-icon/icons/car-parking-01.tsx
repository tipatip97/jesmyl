import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 6H2C2 5.06812 2 4.60218 2.15224 4.23463C2.35523 3.74458 2.74458 3.35523 3.23463 3.15224C3.60218 3 4.06812 3 5 3H19C19.9319 3 20.3978 3 20.7654 3.15224C21.2554 3.35523 21.6448 3.74458 21.8478 4.23463C22 4.60218 22 5.06812 22 6Z',
  d2: 'M22 6V21M2 6V21',
  d3: 'M16 19V21M8 19V21',
  d4: 'M7.5 14L7.74254 13.0299C8.10632 11.5747 8.28821 10.8472 8.83073 10.4236C9.37325 10 10.1232 10 11.6231 10H12.3769C13.8768 10 14.6267 10 15.1693 10.4236C15.7118 10.8472 15.8937 11.5747 16.2575 13.0299L16.5 14',
  d5: 'M17 14H7C6.44772 14 6 14.4477 6 15V18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18V15C18 14.4477 17.5523 14 17 14Z',
  d6: 'M8.5 16.49V16.5',
  d7: 'M15.5 16.49V16.5',
  d8: 'M2 6H22',
  d9: 'M8.5 16.4902V16.5002',
  d10: 'M15.5 16.4902V16.5002',
  d11: 'M22 21V6C22 5.06812 22 4.60218 21.8478 4.23463C21.6448 3.74458 21.2554 3.35523 20.7654 3.15224C20.3978 3 19.9319 3 19 3H5C4.06812 3 3.60218 3 3.23463 3.15224C2.74458 3.35523 2.35523 3.74458 2.15224 4.23463C2 4.60218 2 5.06812 2 6V21',
  d12: 'M18.8722 2.25C19.3009 2.24999 19.6707 2.24998 19.9769 2.27082C20.2992 2.29276 20.6216 2.34102 20.9401 2.47265C21.6585 2.76952 22.2293 3.33894 22.5268 4.05565C22.6588 4.37343 22.7071 4.6951 22.7291 5.01668C22.75 5.3221 22.75 5.69113 22.75 6.11881V20.775C22.75 21.3135 22.3125 21.75 21.7727 21.75C21.233 21.75 20.7955 21.3135 20.7955 20.775V7.125H3.20455V20.775C3.20455 21.3135 2.76701 21.75 2.22727 21.75C1.68754 21.75 1.25 21.3135 1.25 20.775V6.11882V6.11877C1.24999 5.69111 1.24998 5.32209 1.27087 5.01668C1.29286 4.69509 1.34124 4.37343 1.47317 4.05565C1.77073 3.33894 2.34148 2.76952 3.05986 2.47265C3.37838 2.34102 3.70079 2.29276 4.02313 2.27082C4.32926 2.24998 4.69913 2.24999 5.12779 2.25H5.12784H18.8722H18.8722Z',
  d13: 'M8 17.75C8.55228 17.75 9 18.1977 9 18.75V20.75C9 21.3023 8.55228 21.75 8 21.75C7.44772 21.75 7 21.3023 7 20.75V18.75C7 18.1977 7.44772 17.75 8 17.75ZM16 17.75C16.5523 17.75 17 18.1977 17 18.75V20.75C17 21.3023 16.5523 21.75 16 21.75C15.4477 21.75 15 21.3023 15 20.75V18.75C15 18.1977 15.4477 17.75 16 17.75Z',
  d14: 'M12.4328 9C13.1351 8.99996 13.7485 8.99992 14.2511 9.06003C14.7936 9.12491 15.3167 9.2698 15.7849 9.63539C16.2532 10.001 16.5206 10.4733 16.7151 10.9839C16.8953 11.4569 17.044 12.052 17.2143 12.7333L17.2144 12.7333L17.4704 13.7575C17.6043 14.2933 17.2786 14.8362 16.7428 14.9701C16.207 15.1041 15.664 14.7783 15.5301 14.2425L15.2876 13.2724C15.0998 12.5212 14.9787 12.0439 14.8462 11.6959C14.7232 11.3731 14.6284 11.2698 14.5541 11.2118C14.4798 11.1538 14.3566 11.0869 14.0136 11.0459C13.6439 11.0017 13.1514 11 12.3771 11H11.6233C10.849 11 10.3566 11.0017 9.98687 11.0459C9.64384 11.0869 9.52067 11.1538 9.44638 11.2118C9.37209 11.2698 9.27731 11.3731 9.15432 11.6959C9.02176 12.0439 8.90071 12.5212 8.71291 13.2724L8.47038 14.2425C8.33643 14.7783 7.7935 15.1041 7.2577 14.9701C6.72191 14.8362 6.39615 14.2933 6.53009 13.7575L6.77263 12.7873L6.78613 12.7333C6.95643 12.052 7.10515 11.4569 7.28536 10.9839C7.47989 10.4733 7.74732 10.001 8.21555 9.63539C8.68379 9.2698 9.20685 9.12491 9.7494 9.06003C10.252 8.99992 10.8654 8.99996 11.5677 9H12.4328Z',
  d15: 'M5.25 15C5.25 14.0335 6.0335 13.25 7 13.25L17 13.25C17.9665 13.25 18.75 14.0335 18.75 15V18C18.75 18.9665 17.9665 19.75 17 19.75H7C6.0335 19.75 5.25 18.9665 5.25 18L5.25 15ZM8.5 15.5C9.05228 15.5 9.5 15.9448 9.5 16.4934V16.5066C9.5 17.0552 9.05228 17.5 8.5 17.5C7.94772 17.5 7.5 17.0552 7.5 16.5066V16.4934C7.5 15.9448 7.94772 15.5 8.5 15.5ZM16.5 16.4934C16.5 15.9448 16.0523 15.5 15.5 15.5C14.9477 15.5 14.5 15.9448 14.5 16.4934V16.5066C14.5 17.0552 14.9477 17.5 15.5 17.5C16.0523 17.5 16.5 17.0552 16.5 16.5066V16.4934Z',
  d16: 'M22.75 20.775C22.75 21.3135 22.3125 21.75 21.7727 21.75C21.233 21.75 20.7955 21.3135 20.7955 20.775V7.125H3.20455V20.775C3.20455 21.3135 2.76701 21.75 2.22727 21.75C1.68754 21.75 1.25 21.3135 1.25 20.775V7.125H3.20455H20.7955H22.75V20.775Z',
  d17: 'M18.8722 2.25C19.3009 2.24999 19.6707 2.24998 19.9769 2.27082C20.2992 2.29276 20.6216 2.34102 20.9401 2.47265C21.6585 2.76952 22.2293 3.33894 22.5268 4.05565C22.6588 4.37343 22.7071 4.6951 22.7291 5.01668C22.75 5.3221 22.75 5.69113 22.75 6.11881V7.125H1.25V6.11882V6.11877C1.24999 5.69111 1.24998 5.3221 1.27087 5.01668C1.29286 4.69509 1.34124 4.37343 1.47317 4.05565C1.77073 3.33894 2.34148 2.76952 3.05986 2.47265C3.37838 2.34102 3.70079 2.29276 4.02313 2.27082C4.32926 2.24998 4.69913 2.24999 5.12779 2.25H5.12783H18.8722H18.8722Z',
  d18: 'M22 6H2V3H22V6Z',
  d19: 'M7.5 14L9 10H15L16.5 14',
  d20: 'M18 14H6V19H18V14Z',
  d21: 'M22.75 21.75H20.7955V7.125H3.20455V21.75H1.25V2.25H22.75V21.75Z',
  d22: 'M9 17.75V21.75H7V17.75H9ZM17 17.75V21.75H15V17.75H17Z',
  d23: 'M8.30681 9H15.6928L17.4361 13.6489L15.5635 14.3511L14.3068 11H9.69281L8.43613 14.3511L6.56348 13.6489L8.30681 9Z',
  d24: 'M5.25 13.25L18.75 13.25V19.75L5.25 19.75L5.25 13.25ZM9.5 15.4902V17.5002H7.5L7.5 15.4902H9.5ZM16.5 17.5002V15.4902L14.5 15.4902L14.5 17.5002H16.5Z',
};

export const IconCarParking01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="car-parking-01-stroke-rounded IconCarParking01StrokeRounded"
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCarParking01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="car-parking-01-duotone-rounded IconCarParking01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCarParking01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="car-parking-01-twotone-rounded IconCarParking01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCarParking01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="car-parking-01-solid-rounded IconCarParking01SolidRounded"
    >
      <path 
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
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCarParking01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="car-parking-01-bulk-rounded IconCarParking01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCarParking01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="car-parking-01-stroke-sharp IconCarParking01StrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCarParking01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="car-parking-01-solid-sharp IconCarParking01SolidSharp"
    >
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCarParking01: TheIconSelfPack = {
  name: 'CarParking01',
  StrokeRounded: IconCarParking01StrokeRounded,
  DuotoneRounded: IconCarParking01DuotoneRounded,
  TwotoneRounded: IconCarParking01TwotoneRounded,
  SolidRounded: IconCarParking01SolidRounded,
  BulkRounded: IconCarParking01BulkRounded,
  StrokeSharp: IconCarParking01StrokeSharp,
  SolidSharp: IconCarParking01SolidSharp,
};