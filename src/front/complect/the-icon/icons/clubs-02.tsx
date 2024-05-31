import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 2C9.79086 2 8 3.8529 8 6.13856C8 6.89237 8.19479 7.59911 8.53513 8.20784C5.9581 7.52158 3 9.51116 3 12.3464C3 15.5508 6.13941 17.0241 8.81012 16.3268C9.67373 16.1013 10.1055 15.9886 10.2279 16.1211C10.696 16.6279 9.34611 19.1578 9.10267 19.6578C8.64426 20.5995 8.41506 21.0703 8.59267 21.3642C9.01463 22.0625 14.8121 22.3493 15.4073 21.3642C15.5849 21.0703 15.3557 20.5995 14.8973 19.6578C14.6539 19.1578 13.304 16.6279 13.7721 16.1211C13.8945 15.9886 14.3263 16.1013 15.1899 16.3268C17.8488 17.021 21 15.5187 21 12.3464C21 9.53108 18.0333 7.52389 15.4649 8.20784C15.8052 7.59911 16 6.89237 16 6.13856C16 3.8529 14.2091 2 12 2Z',
  d2: 'M12 2C9.79086 2 8 3.8529 8 6.13856C8 6.89237 8.19479 7.59911 8.53513 8.20784C5.9581 7.52158 3 9.51116 3 12.3464C3 15.5508 6.13941 17.0241 8.81012 16.3268C9.67373 16.1013 10.1055 15.9886 10.2279 16.1211C10.696 16.6279 9.34611 19.1578 9.10267 19.6578C8.64426 20.5995 8.41506 21.0703 8.59267 21.3642C8.80655 21.7182 10.4015 21.9664 12 21.9968',
  d3: 'M7.25 6.13856C7.25 3.46296 9.35278 1.25 12 1.25C14.6472 1.25 16.75 3.46296 16.75 6.13856C16.75 6.54739 16.7011 6.94516 16.6088 7.32571C19.215 7.38356 21.75 9.48273 21.75 12.3464C21.75 14.2144 20.8081 15.6159 19.4835 16.4263C18.181 17.2231 16.5175 17.4486 15.0004 17.0525C14.8127 17.0035 14.6534 16.962 14.5175 16.9279C14.5768 17.1287 15.4911 19.1239 15.5924 19.3723C15.8038 19.8063 15.9932 20.1953 16.101 20.5128C16.2054 20.8203 16.3219 21.3009 16.0492 21.7521C15.8441 22.0916 15.4951 22.2715 15.2354 22.3737C14.949 22.4863 14.6133 22.5639 14.2685 22.6187C13.5749 22.7289 12.7327 22.7638 11.918 22.7453C11.1014 22.7267 10.2787 22.6537 9.61948 22.5356C9.2924 22.477 8.98247 22.4032 8.72594 22.31C8.59792 22.2634 8.46386 22.2051 8.34101 22.13C8.22745 22.0606 8.06568 21.9423 7.95077 21.7521C7.67807 21.3009 7.79459 20.8203 7.89898 20.5128C8.00678 20.1953 8.19619 19.8063 8.40753 19.3723C8.50886 19.1239 9.42316 17.1287 9.48253 16.9279C9.34664 16.962 9.18731 17.0035 8.99958 17.0525C7.48042 17.4491 5.8168 17.2345 4.51326 16.4402C3.18606 15.6314 2.25 14.2272 2.25 12.3464C2.25 9.46383 4.78093 7.37582 7.39075 7.32389C7.29874 6.94388 7.25 6.54674 7.25 6.13856Z',
  d4: 'M7.25 6.13856C7.25 3.46296 9.35278 1.25 12 1.25L11.918 22.7453C11.1014 22.7267 10.2787 22.6537 9.61948 22.5356C9.2924 22.477 8.98247 22.4032 8.72594 22.31C8.59792 22.2634 8.46386 22.2051 8.34101 22.13C8.22745 22.0606 8.06568 21.9423 7.95077 21.7521C7.67807 21.3009 7.79459 20.8203 7.89898 20.5128C8.00678 20.1953 8.19619 19.8063 8.40753 19.3723C8.50886 19.1239 9.42316 17.1287 9.48253 16.9279C9.34664 16.962 9.18731 17.0035 8.99958 17.0525C7.48042 17.4491 5.8168 17.2345 4.51326 16.4402C3.18606 15.6314 2.25 14.2272 2.25 12.3464C2.25 9.46383 4.78093 7.37582 7.39075 7.32389C7.29874 6.94388 7.25 6.54674 7.25 6.13856Z',
  d5: 'M12 2C9.79086 2 8 3.8529 8 6.13856C8 6.89237 8.19479 7.59911 8.53513 8.20784C5.9581 7.52158 3 9.51116 3 12.3464C3 15.5508 6.13941 17.0241 8.81012 16.3268L10 16L8.5 22H15.5L14 16L15.1899 16.3268C17.8488 17.021 21 15.5187 21 12.3464C21 9.53108 18.0333 7.52389 15.4649 8.20784C15.8052 7.59911 16 6.89237 16 6.13856C16 3.8529 14.2091 2 12 2Z',
  d6: 'M7.25 6.13856C7.25 3.46296 9.35278 1.25 12 1.25C14.6472 1.25 16.75 3.46296 16.75 6.13856C16.75 6.54739 16.7011 6.94516 16.6088 7.32571C19.215 7.38356 21.75 9.48273 21.75 12.3464C21.75 14.2144 20.8081 15.6159 19.4835 16.4263C18.192 17.2165 16.5454 17.4447 15.0387 17.0623L16.4606 22.75H7.53942L8.96133 17.0623C7.45255 17.4455 5.80587 17.2279 4.51326 16.4402C3.18606 15.6314 2.25 14.2272 2.25 12.3464C2.25 9.46383 4.78093 7.37582 7.39075 7.32389C7.29874 6.94388 7.25 6.54674 7.25 6.13856Z',
} as const;

export const IconClubs02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clubs-02-stroke-rounded IconClubs02StrokeRounded"
    >
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

export const IconClubs02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clubs-02-duotone-rounded IconClubs02DuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconClubs02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clubs-02-twotone-rounded IconClubs02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconClubs02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clubs-02-solid-rounded IconClubs02SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconClubs02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clubs-02-bulk-rounded IconClubs02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconClubs02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clubs-02-stroke-sharp IconClubs02StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconClubs02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clubs-02-solid-sharp IconClubs02SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfClubs02: TheIconSelfPack = {
  name: 'Clubs02',
  StrokeRounded: IconClubs02StrokeRounded,
  DuotoneRounded: IconClubs02DuotoneRounded,
  TwotoneRounded: IconClubs02TwotoneRounded,
  SolidRounded: IconClubs02SolidRounded,
  BulkRounded: IconClubs02BulkRounded,
  StrokeSharp: IconClubs02StrokeSharp,
  SolidSharp: IconClubs02SolidSharp,
};