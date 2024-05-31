import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.0809 13.152L8 7L13.4196 11.2796C14.1901 11.888 14.1941 13.0472 13.4277 13.6607C12.6614 14.2743 11.5189 14.0266 11.0809 13.152Z',
  d2: 'M5 4.81986C3.14864 6.63888 2 9.17371 2 11.9774C2 17.5127 6.47715 22 12 22C17.5228 22 22 17.5127 22 11.9774C22 7.12406 18.5581 3.07642 13.9872 2.15274C13.1512 1.9838 12.7332 1.89933 12.3666 2.20008C12 2.50083 12 2.987 12 3.95935V4.96161',
  d3: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8 7L11.0809 13.152C11.5189 14.0266 12.6614 14.2743 13.4277 13.6607C14.1941 13.0472 14.1901 11.888 13.4196 11.2796L8 7Z',
  d4: 'M14.0775 1.40684C14.0969 1.41079 14.1163 1.41472 14.1356 1.41862C19.051 2.41192 22.75 6.76215 22.75 11.9779C22.75 17.9251 17.9391 22.75 12 22.75C6.06086 22.75 1.25 17.9251 1.25 11.9779C1.25 8.96549 2.48533 6.24004 4.47417 4.28594C4.85917 3.90767 5.47792 3.91312 5.85619 4.29811C6.23446 4.68311 6.22901 5.30186 5.84401 5.68013C4.21429 7.28139 3.20455 9.51038 3.20455 11.9779C3.20455 16.8498 7.14448 20.7955 12 20.7955C16.8555 20.7955 20.7955 16.8498 20.7955 11.9779C20.7955 7.70758 17.7671 4.14651 13.7485 3.33444C13.5394 3.29218 13.3788 3.25985 13.2402 3.23685C13.1358 3.2195 13.0614 3.21058 13.0072 3.2068C12.9802 3.3841 12.9773 3.64588 12.9773 4.14209V5.12157C12.9773 5.6613 12.5397 6.09884 12 6.09884C11.4603 6.09884 11.0227 5.6613 11.0227 5.12157V4.14209C11.0227 4.12198 11.0227 4.10186 11.0227 4.08172C11.0226 3.6595 11.0225 3.23306 11.0803 2.87884C11.1491 2.45725 11.317 2.01299 11.7385 1.66723C12.1355 1.34153 12.5698 1.24266 12.996 1.25042C13.336 1.25661 13.7205 1.33452 14.0775 1.40684Z',
  d5: 'M7.5265 6.4184C7.79901 6.19652 8.18905 6.19361 8.46484 6.41139L13.8845 10.691C15.0336 11.5984 15.0395 13.3311 13.8965 14.2462C12.7603 15.1559 11.0637 14.7925 10.4104 13.4879L7.32944 7.33584C7.17208 7.02162 7.25399 6.64028 7.5265 6.4184Z',
  d6: 'M5 4.85857C3.14864 6.67349 2 9.20261 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V5',
  d7: 'M10.5944 13.0309L7 6L13.3229 10.891C14.2218 11.5863 14.2264 12.9111 13.3323 13.6123C12.4383 14.3135 11.1054 14.0304 10.5944 13.0309Z',
  d8: 'M11.0227 1.25H12C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 8.99301 2.4859 6.27291 4.47496 4.323L5.84323 5.71874C4.21371 7.31619 3.20455 9.53936 3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 7.47273 17.375 3.74436 12.9773 3.25823V5.15909H11.0227V1.25Z',
} as const;

export const IconTimer01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="timer-01-stroke-rounded IconTimer01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTimer01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="timer-01-duotone-rounded IconTimer01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconTimer01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="timer-01-twotone-rounded IconTimer01TwotoneRounded"
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

export const IconTimer01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="timer-01-solid-rounded IconTimer01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTimer01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="timer-01-bulk-rounded IconTimer01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTimer01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="timer-01-stroke-sharp IconTimer01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTimer01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="timer-01-solid-sharp IconTimer01SolidSharp"
    >
      <path 
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

export const iconPackOfTimer01: TheIconSelfPack = {
  name: 'Timer01',
  StrokeRounded: IconTimer01StrokeRounded,
  DuotoneRounded: IconTimer01DuotoneRounded,
  TwotoneRounded: IconTimer01TwotoneRounded,
  SolidRounded: IconTimer01SolidRounded,
  BulkRounded: IconTimer01BulkRounded,
  StrokeSharp: IconTimer01StrokeSharp,
  SolidSharp: IconTimer01SolidSharp,
};