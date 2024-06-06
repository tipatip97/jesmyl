import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.06165 4.82633L3.23911 9.92134C2.7398 10.3583 3.07458 11.1343 3.76238 11.1343C4.18259 11.1343 4.52324 11.4489 4.52324 11.8371V15.0806C4.52324 17.871 4.52324 19.2662 5.46176 20.1331C6.40029 21 7.91082 21 10.9319 21H13.0681C16.0892 21 17.5997 21 18.5382 20.1331C19.4768 19.2662 19.4768 17.871 19.4768 15.0806V11.8371C19.4768 11.4489 19.8174 11.1343 20.2376 11.1343C20.9254 11.1343 21.2602 10.3583 20.7609 9.92134L14.9383 4.82633C13.5469 3.60878 12.8512 3 12 3C11.1488 3 10.4531 3.60878 9.06165 4.82633Z',
  d2: 'M12 16H12.009',
  d3: 'M21.6328 10.9887C21.8611 10.4595 21.7639 9.80273 21.2545 9.35692L15.395 4.2296C15.2791 4.12821 15.1612 4.02205 15.0409 3.91379C14.1767 3.1359 13.1924 2.25 11.9997 2.25C10.807 2.25 9.82272 3.13589 8.95847 3.91378C8.8382 4.02204 8.72025 4.1282 8.60439 4.22959L2.74491 9.35692C2.23543 9.80273 2.13831 10.4595 2.36662 10.9887C2.54339 11.3985 2.90593 11.718 3.36751 11.8355C3.57479 11.8883 3.67843 11.9147 3.72051 11.9686C3.76258 12.0225 3.76289 12.1089 3.76351 12.2818C3.76646 13.1014 3.77292 14.9211 3.77292 15.1392C3.7729 16.4846 3.77288 17.5762 3.89806 18.4362C4.02915 19.3368 4.31065 20.0912 4.95257 20.6841C5.58601 21.2691 6.37767 21.5185 7.32313 21.6359C8.24198 21.75 9.41323 21.75 10.88 21.75H13.1193C14.5861 21.75 15.7574 21.75 16.6762 21.6359C17.6217 21.5185 18.4134 21.2691 19.0468 20.6841C19.6887 20.0912 19.9702 19.3368 20.1013 18.4362C20.2265 17.5762 20.2265 16.4846 20.2265 15.1392C20.2265 14.9211 20.2329 13.1014 20.2359 12.2818C20.2365 12.1089 20.2368 12.0225 20.2789 11.9686C20.3209 11.9146 20.4246 11.8883 20.6319 11.8355C21.0934 11.718 21.456 11.3985 21.6328 10.9887ZM12 14.75C11.3096 14.75 10.75 15.3096 10.75 16C10.75 16.6904 11.3096 17.25 12 17.25H12.009C12.6993 17.25 13.259 16.6904 13.259 16C13.259 15.3096 12.6993 14.75 12.009 14.75H12Z',
  d4: 'M21.2545 9.35692C21.7639 9.80273 21.8611 10.4595 21.6328 10.9887C21.456 11.3985 21.0934 11.718 20.6319 11.8355C20.4246 11.8883 20.3209 11.9146 20.2789 11.9686C20.2368 12.0225 20.2365 12.1089 20.2359 12.2818C20.2329 13.1014 20.2265 14.9211 20.2265 15.1392C20.2265 16.4846 20.2265 17.5762 20.1013 18.4362C19.9702 19.3368 19.6887 20.0912 19.0468 20.6841C18.4134 21.2691 17.6217 21.5185 16.6762 21.6359C15.7574 21.75 14.5861 21.75 13.1193 21.75H10.88C9.41323 21.75 8.24198 21.75 7.32313 21.6359C6.37767 21.5185 5.58601 21.2691 4.95257 20.6841C4.31065 20.0912 4.02915 19.3368 3.89806 18.4362C3.77288 17.5762 3.7729 16.4846 3.77292 15.1392C3.77292 14.9211 3.76646 13.1014 3.76351 12.2818C3.76289 12.1089 3.76258 12.0225 3.72051 11.9686C3.67843 11.9147 3.57479 11.8883 3.36751 11.8355C2.90593 11.718 2.54339 11.3985 2.36662 10.9887C2.13831 10.4595 2.23543 9.80273 2.74491 9.35692L8.60439 4.22959C9.55282 3.39961 10.641 2.25 11.9997 2.25C13.3584 2.25 14.4466 3.39962 15.395 4.2296L21.2545 9.35692Z',
  d5: 'M10.75 16C10.75 15.3096 11.3096 14.75 12 14.75H12.009C12.6993 14.75 13.259 15.3096 13.259 16C13.259 16.6904 12.6993 17.25 12.009 17.25H12C11.3096 17.25 10.75 16.6904 10.75 16Z',
  d6: 'M19.5 10V21H4.5V10',
  d7: 'M19.5 11H21L12 3L3 11H4.5',
  d8: 'M12 2.12341L23 11.8769H20.2706V21.8768H3.72944V11.8769H1L12 2.12341ZM13 17.0004V15.0004H11V17.0004H13Z',
};

export const IconHome06StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="home-06-stroke-rounded IconHome06StrokeRounded"
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

export const IconHome06DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="home-06-duotone-rounded IconHome06DuotoneRounded"
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

export const IconHome06TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="home-06-twotone-rounded IconHome06TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconHome06SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="home-06-solid-rounded IconHome06SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHome06BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="home-06-bulk-rounded IconHome06BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconHome06StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="home-06-stroke-sharp IconHome06StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHome06SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="home-06-solid-sharp IconHome06SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHome06: TheIconSelfPack = {
  name: 'Home06',
  StrokeRounded: IconHome06StrokeRounded,
  DuotoneRounded: IconHome06DuotoneRounded,
  TwotoneRounded: IconHome06TwotoneRounded,
  SolidRounded: IconHome06SolidRounded,
  BulkRounded: IconHome06BulkRounded,
  StrokeSharp: IconHome06StrokeSharp,
  SolidSharp: IconHome06SolidSharp,
};