import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 5C5.23858 5 3 8.0139 3 11.0278C3 14.544 3.5 17.0556 5.5 20.0695C7.02044 22.1062 9.05026 22.6168 11.2139 21.1903C11.6757 20.8859 12.3243 20.8859 12.7861 21.1903C14.9497 22.6168 16.9796 22.1062 18.5 20.0695C20.5 17.0556 21 14.544 21 11.0278C21 8.0139 18.7614 5 16 5C14.5746 5 13.2885 5.7849 12.3777 6.63254C12.166 6.82949 11.834 6.82949 11.6223 6.63254C10.7115 5.7849 9.42542 5 8 5Z',
  d2: 'M6 12C6 10.3665 6.82273 8.73298 8 8',
  d3: 'M12 6C12 4.66667 12.6 2 15 2',
  d4: 'M8 4.37488C6.33325 4.37488 4.88521 5.28296 3.87898 6.53984C2.87194 7.79773 2.25 9.46862 2.25 11.1527C2.25 14.7732 2.77251 17.4406 4.87508 20.6091C4.88274 20.6206 4.89072 20.632 4.899 20.6431C5.73397 21.7615 6.76542 22.5354 7.96114 22.7874C9.1669 23.0414 10.4172 22.7388 11.6268 21.9414C11.8381 21.8021 12.1619 21.8021 12.3732 21.9414C13.5828 22.7388 14.8331 23.0414 16.0389 22.7874C17.2346 22.5354 18.266 21.7615 19.101 20.6431C19.1063 20.6359 19.1115 20.6287 19.1165 20.6214C19.1194 20.6173 19.1222 20.6132 19.1249 20.6091C21.2275 17.4406 21.75 14.7732 21.75 11.1527C21.75 9.46862 21.1281 7.79773 20.121 6.53984C19.1148 5.28296 17.6667 4.37488 16 4.37488C14.3808 4.37488 12.9747 5.21825 12 6.087C11.0253 5.21825 9.61924 4.37488 8 4.37488ZM8.52854 8.9738C8.99738 8.6819 9.14081 8.06519 8.84891 7.59635C8.557 7.12751 7.9403 6.98408 7.47146 7.27598C5.94812 8.22443 5 10.2132 5 12.1249C5 12.6772 5.44772 13.1249 6 13.1249C6.55228 13.1249 7 12.6772 7 12.1249C7 10.7696 7.69734 9.49131 8.52854 8.9738Z',
  d5: 'M13.4799 4.10003C13.1308 4.74645 13 5.57034 13 6.12488C13 6.67716 12.5523 7.12488 12 7.12488C11.4477 7.12488 11 6.67716 11 6.12488C11 5.34609 11.1692 4.16997 11.7201 3.14973C12.2944 2.08615 13.3376 1.12488 15 1.12488C15.5523 1.12488 16 1.57259 16 2.12488C16 2.67716 15.5523 3.12488 15 3.12488C14.2624 3.12488 13.8056 3.49693 13.4799 4.10003Z',
  d6: 'M3.87898 6.53984C4.88521 5.28296 6.33325 4.37488 8 4.37488C9.61924 4.37488 11.0253 5.21825 12 6.087C12.9747 5.21825 14.3808 4.37488 16 4.37488C17.6667 4.37488 19.1148 5.28296 20.121 6.53984C21.1281 7.79773 21.75 9.46862 21.75 11.1527C21.75 14.7732 21.2275 17.4406 19.1249 20.6091C19.1173 20.6206 19.1093 20.632 19.101 20.6431C18.266 21.7615 17.2346 22.5354 16.0389 22.7874C14.8331 23.0414 13.5828 22.7388 12.3732 21.9414C12.1619 21.8021 11.8381 21.8021 11.6268 21.9414C10.4172 22.7388 9.1669 23.0414 7.96114 22.7874C6.76542 22.5354 5.73397 21.7615 4.899 20.6431C4.89072 20.632 4.88274 20.6206 4.87508 20.6091C2.77251 17.4406 2.25 14.7732 2.25 11.1527C2.25 9.46862 2.87194 7.79773 3.87898 6.53984Z',
  d7: 'M8.84891 7.59635C9.14081 8.06519 8.99738 8.6819 8.52854 8.9738C7.69734 9.49131 7 10.7696 7 12.1249C7 12.6772 6.55228 13.1249 6 13.1249C5.44772 13.1249 5 12.6772 5 12.1249C5 10.2132 5.94812 8.22443 7.47146 7.27598C7.9403 6.98408 8.55701 7.12751 8.84891 7.59635Z',
  d8: 'M13.0832 5.27357C13.1572 4.87901 13.2842 4.46174 13.4795 4.10003C13.8052 3.49693 14.262 3.12488 14.9996 3.12488C15.5519 3.12488 15.9996 2.67716 15.9996 2.12488C15.9996 1.57259 15.5519 1.12488 14.9996 1.12488C13.3372 1.12488 12.294 2.08615 11.7197 3.14973C11.3291 3.87298 11.1304 4.67455 11.0479 5.35739C11.3978 5.58515 11.7169 5.83501 11.9996 6.087C12.3175 5.8037 12.6812 5.5231 13.0832 5.27357Z',
  d9: 'M8 5C5.23858 5 3 8.0139 3 11.0278C3 14.544 3.5 17.0556 5.5 20.0695C7.02044 22.1062 9.05026 22.6168 11.2139 21.1903L12 20.7171L12.7861 21.1903C14.9497 22.6168 16.9796 22.1062 18.5 20.0695C20.5 17.0556 21 14.544 21 11.0278C21 8.0139 18.7614 5 16 5C14.5746 5 12.9108 5.93261 12 6.78025C11.0892 5.93261 9.42542 5 8 5Z',
  d10: 'M8 4.24988C6.33325 4.24988 4.88521 5.15796 3.87898 6.41484C2.87194 7.67273 2.25 9.34362 2.25 11.0277C2.25 14.6482 2.77251 17.3156 4.87508 20.4841L4.88657 20.5014L4.899 20.5181C5.73397 21.6365 6.76542 22.4104 7.96114 22.6624C9.16274 22.9155 10.4086 22.6159 11.6142 21.8246L12 21.5913L12.3858 21.8246C13.5914 22.6159 14.8373 22.9155 16.0389 22.6624C17.2346 22.4104 18.266 21.6365 19.101 20.5181L19.1134 20.5014L19.1249 20.4841C21.2275 17.3156 21.75 14.6482 21.75 11.0277C21.75 9.34362 21.1281 7.67273 20.121 6.41484C19.1148 5.15796 17.6667 4.24988 16 4.24988C14.3808 4.24988 12.9747 5.09325 12 5.962C11.0253 5.09325 9.61924 4.24988 8 4.24988ZM6.75 11.9998C6.75 10.575 7.47869 9.2079 8.3964 8.63652L7.6036 7.36316C6.16677 8.25774 5.25 10.1577 5.25 11.9998H6.75Z',
  d11: 'M13.2599 3.85624C12.8856 4.54939 12.75 5.4173 12.75 5.99988H11.25C11.25 5.24912 11.4144 4.11703 11.9401 3.14352C12.4833 2.1375 13.4532 1.24988 15 1.24988V2.74988C14.1468 2.74988 13.6167 3.19559 13.2599 3.85624Z',
} as const;

export const IconApple01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-01-stroke-rounded IconApple01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconApple01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-01-duotone-rounded IconApple01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconApple01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-01-twotone-rounded IconApple01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconApple01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-01-solid-rounded IconApple01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconApple01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-01-bulk-rounded IconApple01BulkRounded"
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

export const IconApple01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-01-stroke-sharp IconApple01StrokeSharp"
    >
      <path 
        d={d.d9} 
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
      />
    </TheIconWrapper>
  );
};

export const IconApple01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-01-solid-sharp IconApple01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfApple01: TheIconSelfPack = {
  name: 'Apple01',
  StrokeRounded: IconApple01StrokeRounded,
  DuotoneRounded: IconApple01DuotoneRounded,
  TwotoneRounded: IconApple01TwotoneRounded,
  SolidRounded: IconApple01SolidRounded,
  BulkRounded: IconApple01BulkRounded,
  StrokeSharp: IconApple01StrokeSharp,
  SolidSharp: IconApple01SolidSharp,
};