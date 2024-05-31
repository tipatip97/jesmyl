import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.59 13.7408C9.96125 14.162 8.31261 15.0221 9.31674 16.0983C9.80725 16.624 10.3536 17 11.0404 17H14.9596C15.6464 17 16.1928 16.624 16.6833 16.0983C17.6874 15.0221 16.0388 14.162 15.41 13.7408C13.9355 12.7531 12.0645 12.7531 10.59 13.7408Z',
  d2: 'M15 9C15 10.1046 14.1046 11 13 11C11.8954 11 11 10.1046 11 9C11 7.89543 11.8954 7 13 7C14.1046 7 15 7.89543 15 9Z',
  d3: 'M5 6L2.5 6M5 12L2.5 12M5 18H2.5',
  d4: 'M5.17157 3.17157C4 4.34315 4 6.22876 4 10V14C4 17.7712 4 19.6569 5.17157 20.8284C6.34315 22 8.22876 22 12 22H13.5C17.2712 22 19.1569 22 20.3284 20.8284C21.5 19.6569 21.5 17.7712 21.5 14V10C21.5 6.22876 21.5 4.34315 20.3284 3.17157C19.1569 2 17.2712 2 13.5 2H12C8.22876 2 6.34315 2 5.17157 3.17157ZM13 11C14.1046 11 15 10.1046 15 9C15 7.89543 14.1046 7 13 7C11.8954 7 11 7.89543 11 9C11 10.1046 11.8954 11 13 11ZM10.3758 13.8793C10.4549 13.8289 10.5275 13.7827 10.59 13.7408C12.0645 12.7531 13.9355 12.7531 15.41 13.7408C15.4725 13.7827 15.5451 13.8289 15.6242 13.8793C16.3405 14.3352 17.5875 15.1291 16.6833 16.0983C16.1928 16.624 15.6464 17 14.9596 17H11.0404C10.3536 17 9.80725 16.624 9.31674 16.0983C8.41247 15.1291 9.65956 14.3352 10.3758 13.8793Z',
  d5: 'M13.6814 1.25H13.6814H13.6814C15.5192 1.24999 16.9748 1.24997 18.114 1.40314C19.2864 1.56076 20.2354 1.89288 20.9838 2.64124C21.7321 3.38961 22.0642 4.33856 22.2219 5.51098C22.375 6.65018 22.375 8.10581 22.375 9.94354V9.94359V14.0564V14.0565C22.375 15.8942 22.375 17.3498 22.2219 18.489C22.0642 19.6614 21.7321 20.6104 20.9838 21.3588C20.2354 22.1071 19.2864 22.4392 18.114 22.5969C16.9748 22.75 15.5192 22.75 13.6815 22.75H13.6814H12.0686H12.0685C10.2308 22.75 8.77518 22.75 7.63598 22.5969C6.46356 22.4392 5.51461 22.1071 4.76624 21.3588C4.12977 20.7223 3.79438 19.9407 3.61135 19H2.625C2.07272 19 1.625 18.5523 1.625 18C1.625 17.4477 2.07272 17 2.625 17H3.40942C3.37498 16.1503 3.37499 15.174 3.375 14.0564V14.0564V14.0564V13H2.625C2.07272 13 1.625 12.5523 1.625 12C1.625 11.4477 2.07272 11 2.625 11H3.375V9.94358V9.94357V9.94356C3.37499 8.82599 3.37498 7.84972 3.40942 7H2.625C2.07272 7 1.625 6.55228 1.625 6C1.625 5.44772 2.07272 5 2.625 5H3.61135C3.79438 4.05927 4.12977 3.27771 4.76624 2.64124C5.51461 1.89288 6.46356 1.56076 7.63598 1.40314C8.77519 1.24997 10.2308 1.24999 12.0686 1.25H12.0686H12.0686H12.0686H13.6814H13.6814ZM13.125 6.25C11.6062 6.25 10.375 7.48122 10.375 9C10.375 10.5188 11.6062 11.75 13.125 11.75C14.6438 11.75 15.875 10.5188 15.875 9C15.875 7.48122 14.6438 6.25 13.125 6.25ZM15.9525 13.5388C14.2254 12.4871 12.0248 12.4871 10.2977 13.5388C9.98767 13.717 9.28167 14.124 8.91092 14.4952C8.67559 14.7308 8.42754 15.0652 8.38226 15.4887C8.33367 15.9434 8.53165 16.361 8.89346 16.7136C9.44058 17.2467 10.1722 17.75 11.1655 17.75H15.0847C16.078 17.75 16.8096 17.2467 17.3567 16.7136C17.7185 16.361 17.9165 15.9434 17.8679 15.4887C17.8227 15.0651 17.5746 14.7308 17.3393 14.4952C16.9685 14.124 16.2625 13.717 15.9525 13.5388Z',
  d6: 'M13.6814 1.25C15.5192 1.24998 16.9748 1.24997 18.114 1.40314C19.2864 1.56076 20.2354 1.89288 20.9838 2.64124C21.7321 3.38961 22.0642 4.33856 22.2219 5.51098C22.375 6.65018 22.375 8.1058 22.375 9.94354V9.94359V14.0564V14.0565C22.375 15.8942 22.375 17.3498 22.2219 18.489C22.0642 19.6614 21.7321 20.6104 20.9838 21.3588C20.2354 22.1071 19.2864 22.4392 18.114 22.5969C16.9748 22.75 15.5192 22.75 13.6815 22.75H13.6814H12.0686H12.0685C10.2308 22.75 8.77518 22.75 7.63598 22.5969C6.46356 22.4392 5.51461 22.1071 4.76624 21.3588C4.01788 20.6104 3.68576 19.6614 3.52814 18.489C3.37497 17.3498 3.37498 15.8942 3.375 14.0564V14.0564V9.94358V9.94357C3.37498 8.10582 3.37497 6.65019 3.52814 5.51098C3.68576 4.33856 4.01788 3.38961 4.76624 2.64124C5.51461 1.89288 6.46356 1.56076 7.63598 1.40314C8.77519 1.24997 10.2308 1.24998 12.0686 1.25H12.0686H13.6814H13.6814Z',
  d7: 'M13.125 6.25C11.6062 6.25 10.375 7.48122 10.375 9C10.375 10.5188 11.6062 11.75 13.125 11.75C14.6438 11.75 15.875 10.5188 15.875 9C15.875 7.48122 14.6438 6.25 13.125 6.25ZM15.9525 13.5388C14.2254 12.4871 12.0248 12.4871 10.2977 13.5388C9.98767 13.717 9.28167 14.124 8.91092 14.4952C8.67559 14.7308 8.42753 15.0652 8.38226 15.4887C8.33367 15.9434 8.53165 16.361 8.89346 16.7136C9.44058 17.2467 10.1722 17.75 11.1655 17.75H15.0847C16.078 17.75 16.8096 17.2467 17.3567 16.7136C17.7185 16.361 17.9165 15.9434 17.8679 15.4887C17.8227 15.0651 17.5746 14.7308 17.3393 14.4952C16.9685 14.124 16.2625 13.717 15.9525 13.5388Z',
  d8: 'M1.625 6C1.625 5.44772 2.07272 5 2.625 5L5.125 5C5.67729 5 6.125 5.44772 6.125 6C6.125 6.55229 5.67728 7 5.125 7L2.625 7C2.07272 7 1.625 6.55228 1.625 6ZM1.625 12C1.625 11.4477 2.07272 11 2.625 11L5.125 11C5.67729 11 6.125 11.4477 6.125 12C6.125 12.5523 5.67728 13 5.125 13H2.625C2.07272 13 1.625 12.5523 1.625 12ZM1.625 18C1.625 17.4477 2.07272 17 2.625 17H5.125C5.67728 17 6.125 17.4477 6.125 18C6.125 18.5523 5.67728 19 5.125 19H2.625C2.07272 19 1.625 18.5523 1.625 18Z',
  d9: 'M4 2H22V22H4V2Z',
  d10: 'M9 17H17C17 14.7909 15.2091 13 13 13C10.7909 13 9 14.7909 9 17Z',
  d11: 'M6 6L2 6M6 12L2 12M6 18H2',
  d12: 'M3.24988 2C3.24988 1.58579 3.58566 1.25 3.99988 1.25H21.4999C21.9141 1.25 22.2499 1.58579 22.2499 2V22C22.2499 22.4142 21.9141 22.75 21.4999 22.75H3.99988C3.58566 22.75 3.24988 22.4142 3.24988 22V19H1.74988V17H3.24988V13H1.74988V11H3.24988V7H1.74988V5H3.24988V2ZM12.7499 5.75C11.2311 5.75 9.99988 6.98122 9.99988 8.5C9.99988 10.0188 11.2311 11.25 12.7499 11.25C14.2687 11.25 15.4999 10.0188 15.4999 8.5C15.4999 6.98122 14.2687 5.75 12.7499 5.75ZM12.7499 12.75C10.1265 12.75 7.99988 14.8766 7.99988 17.5V18.25H17.4999V17.5C17.4999 14.8766 15.3732 12.75 12.7499 12.75Z',
} as const;

export const IconContact01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="contact-01-stroke-rounded IconContact01StrokeRounded"
    >
      <rect 
        x="4" 
        y="2" 
        width="17.5" 
        height="20" 
        rx="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
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
    </TheIconWrapper>
  );
};

export const IconContact01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="contact-01-duotone-rounded IconContact01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <rect 
        x="4" 
        y="2" 
        width="17.5" 
        height="20" 
        rx="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
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
    </TheIconWrapper>
  );
};

export const IconContact01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="contact-01-twotone-rounded IconContact01TwotoneRounded"
    >
      <rect 
        x="4" 
        y="2" 
        width="17.5" 
        height="20" 
        rx="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconContact01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="contact-01-solid-rounded IconContact01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconContact01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="contact-01-bulk-rounded IconContact01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconContact01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="contact-01-stroke-sharp IconContact01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconContact01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="contact-01-solid-sharp IconContact01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfContact01: TheIconSelfPack = {
  name: 'Contact01',
  StrokeRounded: IconContact01StrokeRounded,
  DuotoneRounded: IconContact01DuotoneRounded,
  TwotoneRounded: IconContact01TwotoneRounded,
  SolidRounded: IconContact01SolidRounded,
  BulkRounded: IconContact01BulkRounded,
  StrokeSharp: IconContact01StrokeSharp,
  SolidSharp: IconContact01SolidSharp,
};