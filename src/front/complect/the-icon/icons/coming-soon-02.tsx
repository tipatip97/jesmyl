import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.5 13.5C20.5 18.1944 16.6944 22 12 22C7.30558 22 3.5 18.1944 3.5 13.5C3.5 8.80558 7.30558 5 12 5C16.6944 5 20.5 8.80558 20.5 13.5Z',
  d2: 'M12 19C8.96243 19 6.5 16.5376 6.5 13.5C6.5 10.4624 8.96243 8 12 8',
  d3: 'M13.5 3.5C13.5 2.67157 12.8284 2 12 2C11.1716 2 10.5 2.67157 10.5 3.5C10.5 4.32843 11.1716 5 12 5C12.8284 5 13.5 4.32843 13.5 3.5Z',
  d4: 'M12 13.5L15 9',
  d5: 'M12 4.25C11.5858 4.25 11.25 3.91421 11.25 3.5C11.25 3.08579 11.5858 2.75 12 2.75C12.4142 2.75 12.75 3.08579 12.75 3.5C12.75 3.91421 12.4142 4.25 12 4.25ZM9.75 3.5C9.75 4.74264 10.7574 5.75 12 5.75C13.2426 5.75 14.25 4.74264 14.25 3.5C14.25 2.25736 13.2426 1.25 12 1.25C10.7574 1.25 9.75 2.25736 9.75 3.5Z',
  d6: 'M2.75 13.5C2.75 8.39137 6.89137 4.25 12 4.25C17.1086 4.25 21.25 8.39137 21.25 13.5C21.25 18.6086 17.1086 22.75 12 22.75C6.89137 22.75 2.75 18.6086 2.75 13.5ZM15.4161 8.37604C15.7608 8.60581 15.8539 9.07146 15.6241 9.4161L12.6241 13.9161C12.3944 14.2608 11.9287 14.3539 11.5841 14.1241C11.2394 13.8944 11.1463 13.4287 11.376 13.0841L14.376 8.58405C14.6058 8.23941 15.0715 8.14628 15.4161 8.37604ZM13.3361 7.89081C13.4397 7.73537 13.5614 7.59911 13.6964 7.48296C13.1569 7.33119 12.588 7.25 12 7.25C8.54822 7.25 5.75 10.0482 5.75 13.5C5.75 16.9518 8.54822 19.75 12 19.75V15.5004C11.6183 15.5007 11.2323 15.392 10.8908 15.1643C9.97176 14.5516 9.72341 13.3099 10.3361 12.3908L13.3361 7.89081Z',
  d7: 'M2.75 13.5C2.75 8.39137 6.89137 4.25 12 4.25C17.1086 4.25 21.25 8.39137 21.25 13.5C21.25 18.6086 17.1086 22.75 12 22.75C6.89137 22.75 2.75 18.6086 2.75 13.5Z',
  d8: 'M15.4161 8.37604C15.7608 8.60581 15.8539 9.07146 15.6241 9.4161L12.6241 13.9161C12.3944 14.2608 11.9287 14.3539 11.5841 14.1241C11.2394 13.8944 11.1463 13.4287 11.376 13.0841L14.376 8.58405C14.6058 8.23941 15.0715 8.14628 15.4161 8.37604Z',
  d9: 'M13.6964 7.48296C13.5614 7.59911 13.4397 7.73537 13.3361 7.89081L10.3361 12.3908C9.72341 13.3099 9.97176 14.5516 10.8908 15.1643C11.2323 15.392 11.6183 15.5007 12 15.5004V19.75C8.54822 19.75 5.75 16.9518 5.75 13.5C5.75 10.0482 8.54822 7.25 12 7.25C12.588 7.25 13.1569 7.33119 13.6964 7.48296Z',
  d10: 'M11.25 3.5C11.25 3.91421 11.5858 4.25 12 4.25C11.3029 4.25 10.6238 4.32711 9.97082 4.47327C9.82929 4.17873 9.75 3.84862 9.75 3.5C9.75 2.25736 10.7574 1.25 12 1.25C13.2426 1.25 14.25 2.25736 14.25 3.5C14.25 3.84862 14.1707 4.17873 14.0292 4.47327C13.3762 4.32711 12.6971 4.25 12 4.25C12.4142 4.25 12.75 3.91421 12.75 3.5C12.75 3.08579 12.4142 2.75 12 2.75C11.5858 2.75 11.25 3.08579 11.25 3.5Z',
  d11: 'M2.75 13.5C2.75 8.39137 6.89137 4.25 12 4.25C17.1086 4.25 21.25 8.39137 21.25 13.5C21.25 18.6086 17.1086 22.75 12 22.75C6.89137 22.75 2.75 18.6086 2.75 13.5ZM15.6241 9.41603L12.6241 13.916L11.376 13.084L14.376 8.58398L15.6241 9.41603ZM12 7.25C12.5608 7.25 13.1044 7.32386 13.6215 7.46239L9.64258 13.4307L12 15.0023V19.75C8.54822 19.75 5.75 16.9518 5.75 13.5C5.75 10.0482 8.54822 7.25 12 7.25Z',
} as const;

export const IconComingSoon02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coming-soon-02-stroke-rounded IconComingSoon02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComingSoon02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coming-soon-02-duotone-rounded IconComingSoon02DuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComingSoon02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coming-soon-02-twotone-rounded IconComingSoon02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComingSoon02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coming-soon-02-solid-rounded IconComingSoon02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComingSoon02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coming-soon-02-bulk-rounded IconComingSoon02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconComingSoon02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coming-soon-02-stroke-sharp IconComingSoon02StrokeSharp"
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

export const IconComingSoon02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coming-soon-02-solid-sharp IconComingSoon02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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

export const iconPackOfComingSoon02: TheIconSelfPack = {
  name: 'ComingSoon02',
  StrokeRounded: IconComingSoon02StrokeRounded,
  DuotoneRounded: IconComingSoon02DuotoneRounded,
  TwotoneRounded: IconComingSoon02TwotoneRounded,
  SolidRounded: IconComingSoon02SolidRounded,
  BulkRounded: IconComingSoon02BulkRounded,
  StrokeSharp: IconComingSoon02StrokeSharp,
  SolidSharp: IconComingSoon02SolidSharp,
};