import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 2C5 2.82843 5.67157 3.5 6.5 3.5L9 3.5C10.8856 3.5 11.8284 3.5 12.4142 4.08579C12.8183 4.48987 12.9436 5.06385 12.9825 6',
  d2: 'M7.19248 18.0711C7.34438 19.9843 8.85933 21.6088 10.812 21.8495C11.5301 21.9379 12.2601 22 13 22C13.7398 22 14.4699 21.9379 15.1879 21.8495C17.1407 21.6088 18.6555 19.9843 18.8074 18.0711C18.9128 16.7453 19 15.3856 19 14C19 12.6144 18.9128 11.2547 18.8074 9.92895C18.6555 8.01572 17.1407 6.39115 15.1879 6.15056C14.4699 6.06209 13.7398 6 13 6C12.2601 6 11.5301 6.06209 10.812 6.15056C8.85933 6.39115 7.34438 8.01572 7.19248 9.92895C7.08722 11.2547 7 12.6144 7 14C7 15.3856 7.08722 16.7453 7.19248 18.0711Z',
  d3: 'M13 9V11',
  d4: 'M5 1.25C5.41421 1.25 5.75 1.58579 5.75 2C5.75 2.41421 6.08579 2.75 6.5 2.75L9.052 2.75C9.95048 2.74997 10.6997 2.74994 11.2945 2.82991C11.9223 2.91432 12.4891 3.09999 12.9445 3.55546C13.5693 4.18022 13.6926 5.02358 13.7319 5.96888C13.7491 6.38274 13.4275 6.73217 13.0136 6.74935C12.5998 6.76654 12.2504 6.44498 12.2332 6.03112C12.1947 5.10411 12.0673 4.79953 11.8839 4.61612C11.7536 4.4858 11.5561 4.37858 11.0946 4.31654C10.6116 4.25159 9.96401 4.25 9 4.25L6.5 4.25C5.25736 4.25 4.25 3.24264 4.25 2C4.25 1.58579 4.58579 1.25 5 1.25Z',
  d5: 'M13 5.25C12.2191 5.25 11.4563 5.31551 10.7203 5.40619C8.40919 5.69094 6.62454 7.6061 6.44484 9.86958C6.33909 11.2015 6.25 12.5845 6.25 14C6.25 15.4155 6.33909 16.7985 6.44484 18.1304C6.62454 20.3939 8.4093 22.309 10.7204 22.5938C11.4563 22.6844 12.2191 22.75 13 22.75C13.7809 22.75 14.5437 22.6844 15.2797 22.5938C17.5908 22.309 19.3753 20.3939 19.5551 18.1305C19.6609 16.7986 19.75 15.4155 19.75 14C19.75 12.5845 19.6609 11.2014 19.5551 9.86957C19.3753 7.60612 17.5908 5.69094 15.2796 5.40619C14.5436 5.31551 13.7809 5.25 13 5.25ZM14 9C14 8.44772 13.5523 8 13 8C12.4477 8 12 8.44772 12 9V11C12 11.5523 12.4477 12 13 12C13.5523 12 14 11.5523 14 11V9Z',
  d6: 'M10.7203 5.40619C11.4563 5.31551 12.2191 5.25 13 5.25C13.7809 5.25 14.5436 5.31551 15.2796 5.40619C17.5908 5.69094 19.3753 7.60612 19.5551 9.86957C19.6609 11.2014 19.75 12.5845 19.75 14C19.75 15.4155 19.6609 16.7986 19.5551 18.1305C19.3753 20.3939 17.5908 22.309 15.2797 22.5938C14.5437 22.6844 13.7809 22.75 13 22.75C12.2191 22.75 11.4563 22.6844 10.7204 22.5938C8.4093 22.309 6.62454 20.3939 6.44484 18.1304C6.33909 16.7985 6.25 15.4155 6.25 14C6.25 12.5845 6.33909 11.2015 6.44484 9.86958C6.62454 7.6061 8.40919 5.69094 10.7203 5.40619Z',
  d7: 'M13 8C13.5523 8 14 8.44772 14 9V11C14 11.5523 13.5523 12 13 12C12.4477 12 12 11.5523 12 11V9C12 8.44772 12.4477 8 13 8Z',
  d8: 'M13.0008 6L13 3.5H5L5.00076 2',
  d9: 'M13 8V11',
  d10: 'M5.75038 2.75016L5.75076 1.25076L4.25076 1.25L4.25 3.49978C4.2499 3.69876 4.32887 3.88962 4.46954 4.03036C4.6102 4.17109 4.80102 4.25016 5 4.25016H12.2502L12.2508 6.00039L13.7508 5.99993L13.75 3.49993C13.7499 3.08581 13.4141 2.75016 13 2.75016H5.75038Z',
  d11: 'M13 5.25C12.2191 5.25 11.4563 5.31551 10.7203 5.40619C8.40919 5.69094 6.62454 7.6061 6.44484 9.86958C6.33909 11.2015 6.25 12.5845 6.25 14C6.25 15.4155 6.33909 16.7985 6.44484 18.1304C6.62454 20.3939 8.4093 22.309 10.7204 22.5938C11.4563 22.6844 12.2191 22.75 13 22.75C13.7809 22.75 14.5437 22.6844 15.2797 22.5938C17.5908 22.309 19.3753 20.3939 19.5551 18.1305C19.6609 16.7986 19.75 15.4155 19.75 14C19.75 12.5845 19.6609 11.2014 19.5551 9.86957C19.3753 7.60612 17.5908 5.69094 15.2796 5.40619C14.5436 5.31551 13.7809 5.25 13 5.25ZM12.25 8V11H13.75V8H12.25Z',
} as const;

export const IconMouse07StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-07-stroke-rounded IconMouse07StrokeRounded"
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

export const IconMouse07DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-07-duotone-rounded IconMouse07DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
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

export const IconMouse07TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-07-twotone-rounded IconMouse07TwotoneRounded"
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

export const IconMouse07SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-07-solid-rounded IconMouse07SolidRounded"
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

export const IconMouse07BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-07-bulk-rounded IconMouse07BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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

export const IconMouse07StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-07-stroke-sharp IconMouse07StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse07SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-07-solid-sharp IconMouse07SolidSharp"
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

export const iconPackOfMouse07: TheIconSelfPack = {
  name: 'Mouse07',
  StrokeRounded: IconMouse07StrokeRounded,
  DuotoneRounded: IconMouse07DuotoneRounded,
  TwotoneRounded: IconMouse07TwotoneRounded,
  SolidRounded: IconMouse07SolidRounded,
  BulkRounded: IconMouse07BulkRounded,
  StrokeSharp: IconMouse07StrokeSharp,
  SolidSharp: IconMouse07SolidSharp,
};