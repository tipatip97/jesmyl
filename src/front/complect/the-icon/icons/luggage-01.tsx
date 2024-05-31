import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15 6.5H9C6.17157 6.5 4.75736 6.5 3.87868 7.37868C3 8.25736 3 9.67157 3 12.5V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V12.5C21 9.67157 21 8.25736 20.1213 7.37868C19.2426 6.5 17.8284 6.5 15 6.5Z',
  d2: 'M9 6.5V6C9 4.58579 9 3.87868 9.43934 3.43934C9.87868 3 10.5858 3 12 3C13.4142 3 14.1213 3 14.5607 3.43934C15 3.87868 15 4.58579 15 6V6.5',
  d3: 'M7 6.5V21',
  d4: 'M17 6.5V21',
  d5: 'M15 6.5H9.00001C8.2359 6.5 7.57501 6.5 7 6.51732V20.9827C7.57501 21 8.2359 21 9.00001 21H15C15.7641 21 16.425 21 17 20.9827V6.51732C16.425 6.5 15.7641 6.5 15 6.5Z',
  d6: 'M11.9506 2.25C12.6155 2.24996 13.2871 2.24993 13.7458 2.31161C14.2375 2.37771 14.7087 2.52677 15.091 2.90901C15.4732 3.29126 15.6223 3.76252 15.6884 4.25416C15.7501 4.71291 15.75 5.28577 15.75 5.95064L15.75 6.5C15.75 6.91422 15.4142 7.25 15 7.25C14.5858 7.25 14.25 6.91422 14.25 6.5V6C14.25 5.27169 14.2484 4.80091 14.2018 4.45403C14.158 4.12873 14.0874 4.02677 14.0303 3.96967C13.9732 3.91258 13.8713 3.84197 13.546 3.79823C13.1991 3.7516 12.7283 3.75 12 3.75C11.2717 3.75 10.8009 3.7516 10.454 3.79823C10.1287 3.84197 10.0268 3.91258 9.96967 3.96967C9.91258 4.02677 9.84197 4.12873 9.79823 4.45403C9.7516 4.80091 9.75 5.27169 9.75 6V6.5C9.75 6.91422 9.41422 7.25 9 7.25C8.58579 7.25 8.25 6.91422 8.25 6.5V6L8.25 5.95063V5.95058C8.24996 5.28574 8.24993 4.71289 8.31161 4.25416C8.37771 3.76252 8.52677 3.29126 8.90901 2.90901C9.29126 2.52677 9.76252 2.37771 10.2542 2.31161C10.7129 2.24993 11.2857 2.24996 11.9506 2.25H11.9506Z',
  d7: 'M6.25 5.80277C6.02317 5.81872 5.80938 5.83948 5.60825 5.86653C4.70814 5.98754 3.95027 6.24644 3.34835 6.84835C2.74644 7.45027 2.48754 8.20814 2.36653 9.10825C2.24997 9.97521 2.24998 11.0775 2.25 12.4451V12.4451V12.4451V15.0549V15.0549V15.0549C2.24998 16.4225 2.24997 17.5248 2.36653 18.3918C2.48754 19.2919 2.74644 20.0497 3.34835 20.6517C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C5.80938 21.6605 6.02317 21.6813 6.25 21.6972V5.80277ZM7.75 21.7466C8.12353 21.75 8.52161 21.75 8.94513 21.75H15.0549C15.4784 21.75 15.8765 21.75 16.25 21.7466V5.75345C15.8765 5.74999 15.4784 5.74999 15.0549 5.75H15.0549H15.0549H8.94513H8.94511H8.9451C8.52159 5.74999 8.12352 5.74999 7.75 5.75345V21.7466ZM17.75 5.80277V21.6972C17.9768 21.6813 18.1906 21.6605 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6517C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V12.4451C21.75 11.0775 21.75 9.97522 21.6335 9.10825C21.5125 8.20814 21.2536 7.45027 20.6517 6.84835C20.0497 6.24644 19.2919 5.98754 18.3918 5.86653C18.1906 5.83948 17.9768 5.81872 17.75 5.80277Z',
  d8: 'M15.0549 5.75C16.4225 5.74998 17.5248 5.74996 18.3918 5.86652C19.2919 5.98754 20.0497 6.24643 20.6517 6.84835C21.2536 7.45027 21.5125 8.20814 21.6335 9.10825C21.75 9.97522 21.75 11.0775 21.75 12.4451V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6517C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549V15.0549V12.4451V12.4451C2.24998 11.0775 2.24996 9.97521 2.36652 9.10825C2.48754 8.20814 2.74643 7.45027 3.34835 6.84835C3.95027 6.24643 4.70814 5.98754 5.60825 5.86652C6.47521 5.74996 7.57753 5.74998 8.94511 5.75H8.94513H15.0549H15.0549Z',
  d9: 'M13.7459 2.31161C13.2871 2.24994 12.6155 2.24997 11.9506 2.25C11.2858 2.24997 10.7129 2.24994 10.2542 2.31161C9.76253 2.37771 9.29127 2.52677 8.90902 2.90902C8.52677 3.29126 8.37771 3.76253 8.31162 4.25416C8.25621 4.66624 8.2506 5.17041 8.25006 5.75062C8.4737 5.75 8.70533 5.75 8.94511 5.75H9.75015C9.75103 5.16108 9.75717 4.75951 9.79824 4.45404C9.84198 4.12873 9.91259 4.02677 9.96968 3.96968C10.0268 3.91258 10.1287 3.84197 10.454 3.79824C10.8009 3.7516 11.2717 3.75001 12 3.75001C12.7283 3.75001 13.1991 3.7516 13.546 3.79824C13.8713 3.84197 13.9732 3.91258 14.0303 3.96968C14.0874 4.02677 14.158 4.12873 14.2018 4.45403C14.2429 4.75951 14.249 5.16108 14.2499 5.75H15.0549C15.2947 5.75 15.5263 5.75 15.75 5.75062C15.7494 5.17041 15.7438 4.66624 15.6884 4.25416C15.6223 3.76253 15.4732 3.29126 15.091 2.90902C14.7088 2.52677 14.2375 2.37771 13.7459 2.31161Z',
  d10: 'M6.25 21.6977V5.80323C6.69814 5.77172 7.19718 5.75902 7.75 5.75391V21.747C7.19718 21.7419 6.69814 21.7292 6.25 21.6977Z',
  d11: 'M17.75 21.6977C17.3019 21.7292 16.8028 21.7419 16.25 21.747V5.75391C16.8028 5.75902 17.3019 5.77172 17.75 5.80323V21.6977Z',
  d12: 'M21 6.5H3V21H21V6.5Z',
  d13: 'M15 6.5V3H9V6.5',
  d14: 'M8.25 3C8.25 2.58579 8.58579 2.25 9 2.25H15C15.4142 2.25 15.75 2.58579 15.75 3V7.25H14.25V3.75H9.75V7.25H8.25V3Z',
  d15: 'M16.25 5.75H7.75V21.75H16.25V5.75ZM17.75 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V6.5C21.75 6.08579 21.4142 5.75 21 5.75H17.75V21.75ZM3 5.75H6.25V21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V6.5C2.25 6.08579 2.58579 5.75 3 5.75Z',
} as const;

export const IconLuggage01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="luggage-01-stroke-rounded IconLuggage01StrokeRounded"
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

export const IconLuggage01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="luggage-01-duotone-rounded IconLuggage01DuotoneRounded"
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

export const IconLuggage01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="luggage-01-twotone-rounded IconLuggage01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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

export const IconLuggage01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="luggage-01-solid-rounded IconLuggage01SolidRounded"
    >
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

export const IconLuggage01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="luggage-01-bulk-rounded IconLuggage01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLuggage01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="luggage-01-stroke-sharp IconLuggage01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLuggage01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="luggage-01-solid-sharp IconLuggage01SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfLuggage01: TheIconSelfPack = {
  name: 'Luggage01',
  StrokeRounded: IconLuggage01StrokeRounded,
  DuotoneRounded: IconLuggage01DuotoneRounded,
  TwotoneRounded: IconLuggage01TwotoneRounded,
  SolidRounded: IconLuggage01SolidRounded,
  BulkRounded: IconLuggage01BulkRounded,
  StrokeSharp: IconLuggage01StrokeSharp,
  SolidSharp: IconLuggage01SolidSharp,
};