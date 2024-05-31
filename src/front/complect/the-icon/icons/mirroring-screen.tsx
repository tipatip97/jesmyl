import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 21C4 19.8954 3.10457 19 2 19M8 21C8 17.6863 5.31371 15 2 15M12 21C12 15.4772 7.52285 11 2 11',
  d2: 'M3 8.00027C3.0779 6.12787 3.32904 4.97985 4.1387 4.17164C5.31244 3 7.20153 3 10.9797 3H13.9853C17.7634 3 19.6525 3 20.8263 4.17164C22 5.34327 22 7.229 22 11.0004V12.0005C22 15.7719 22 17.6577 20.8263 18.8293C19.7612 19.8924 18.1071 19.9909 14.9871 20',
  d3: 'M9.65 20C6.51516 20 4.94774 20 3.97387 18.7552C3 17.5104 3 15.5069 3 11.5C3 7.49306 3 5.48959 3.97387 4.2448C4.94774 3 6.51516 3 9.65 3L15.35 3C18.4848 3 20.0523 3 21.0261 4.2448C22 5.48959 22 7.49306 22 11.5C22 15.5069 22 17.5104 21.0261 18.7552C20.0523 20 18.4848 20 15.35 20L9.65 20Z',
  d4: 'M2 12C6.97056 12 11 16.0294 11 21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21C13 14.9249 8.07513 10 2 10C1.44771 10 1 10.4477 1 11C1 11.5523 1.44771 12 2 12ZM2 16C4.76142 16 7 18.2386 7 21C7 21.5523 7.44772 22 8 22C8.55228 22 9 21.5523 9 21C9 17.134 5.86599 14 2 14C1.44771 14 1 14.4477 1 15C1 15.5523 1.44771 16 2 16ZM2 20C2.55228 20 3 20.4477 3 21C3 21.5523 3.44771 22 4 22C4.55228 22 5 21.5523 5 21C5 19.3431 3.65685 18 2 18C1.44771 18 1 18.4477 1 19C1 19.5523 1.44771 20 2 20Z',
  d5: 'M10.9067 2H14.0583C15.8854 1.99997 17.3576 1.99995 18.5155 2.15534C19.7173 2.31663 20.7291 2.66163 21.5328 3.4639C22.3367 4.26642 22.6827 5.2771 22.8444 6.47763C23.0001 7.63377 23 9.10371 23 10.9272V12.0737C23 13.8972 23.0001 15.3672 22.8444 16.5233C22.6827 17.7238 22.3367 18.7345 21.5328 19.537C20.8048 20.2637 19.9047 20.6163 18.8443 20.7959C17.8128 20.9706 16.5367 20.9955 14.99 21C14.4377 21.0016 13.9887 20.5552 13.9871 20.0029C13.9855 19.4506 14.4319 19.0016 14.9842 19C16.5576 18.9954 17.6685 18.9665 18.5103 18.824C19.3232 18.6863 19.7827 18.458 20.1198 18.1216C20.4896 17.7524 20.7305 17.2344 20.8622 16.2563C20.9979 15.2493 21 13.9145 21 12.0005V11.0004C21 9.0864 20.9979 7.75164 20.8622 6.74459C20.7305 5.76649 20.4896 5.2485 20.1198 4.87938C19.7498 4.51001 19.2301 4.26919 18.2494 4.13757C17.2401 4.00212 15.9026 4 13.9853 4H10.9797C9.06242 4 7.72486 4.00212 6.71557 4.13757C5.73487 4.26919 5.21522 4.51001 4.8452 4.87938C4.33029 5.39336 4.07653 6.18188 3.99915 8.04184C3.97619 8.59365 3.51026 9.02237 2.95845 8.99941C2.40664 8.97645 1.97792 8.51051 2.00088 7.95871C2.0793 6.07386 2.32782 4.56635 3.43225 3.4639C4.23595 2.66163 5.24772 2.31663 6.44954 2.15534C7.60739 1.99995 9.07965 1.99997 10.9067 2Z',
  d6: 'M15 20H22V3H3V8',
  d7: 'M2 12C6.97056 12 11 16.0294 11 21H13C13 14.9249 8.07513 10 2 10V12ZM2 16C4.76142 16 7 18.2386 7 21H9C9 17.134 5.86599 14 2 14V16ZM2 20C2.55228 20 3 20.4477 3 21H5C5 19.3431 3.65685 18 2 18V20Z',
  d8: 'M2 3C2 2.44772 2.44772 2 3 2H22C22.5523 2 23 2.44772 23 3V20C23 20.5523 22.5523 21 22 21H15V19H21V4H4V8H2V3Z',
} as const;

export const IconMirroringScreenStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mirroring-screen-stroke-rounded IconMirroringScreenStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMirroringScreenDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mirroring-screen-duotone-rounded IconMirroringScreenDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconMirroringScreenTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mirroring-screen-twotone-rounded IconMirroringScreenTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconMirroringScreenSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mirroring-screen-solid-rounded IconMirroringScreenSolidRounded"
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

export const IconMirroringScreenBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mirroring-screen-bulk-rounded IconMirroringScreenBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMirroringScreenStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mirroring-screen-stroke-sharp IconMirroringScreenStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMirroringScreenSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mirroring-screen-solid-sharp IconMirroringScreenSolidSharp"
    >
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

export const iconPackOfMirroringScreen: TheIconSelfPack = {
  name: 'MirroringScreen',
  StrokeRounded: IconMirroringScreenStrokeRounded,
  DuotoneRounded: IconMirroringScreenDuotoneRounded,
  TwotoneRounded: IconMirroringScreenTwotoneRounded,
  SolidRounded: IconMirroringScreenSolidRounded,
  BulkRounded: IconMirroringScreenBulkRounded,
  StrokeSharp: IconMirroringScreenStrokeSharp,
  SolidSharp: IconMirroringScreenSolidSharp,
};