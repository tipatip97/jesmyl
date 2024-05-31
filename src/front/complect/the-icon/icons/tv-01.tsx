import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z',
  d2: 'M9 3L12 6L16 2',
  d3: 'M14.0564 5.75C15.8942 5.74998 17.3498 5.74997 18.489 5.89876C19.6614 6.05188 20.6104 6.37451 21.3588 7.10149C22.1071 7.82847 22.4392 8.75031 22.5969 9.88924C22.75 10.9959 22.75 12.4099 22.75 14.1952V14.1952V14.3048V14.3048C22.75 16.0901 22.75 17.5041 22.5969 18.6108C22.4392 19.7497 22.1071 20.6715 21.3588 21.3985C20.6104 22.1255 19.6614 22.4481 18.489 22.6012C17.3498 22.75 15.8942 22.75 14.0565 22.75H14.0564H9.94359H9.94354C8.1058 22.75 6.65018 22.75 5.51098 22.6012C4.33855 22.4481 3.38961 22.1255 2.64124 21.3985C1.89288 20.6715 1.56076 19.7497 1.40313 18.6108C1.24997 17.5041 1.24998 16.0901 1.25 14.3048V14.1952C1.24998 12.4099 1.24997 10.9959 1.40313 9.88924C1.56076 8.75031 1.89288 7.82847 2.64124 7.10149C3.38961 6.37451 4.33856 6.05188 5.51098 5.89876C6.65019 5.74997 8.10582 5.74998 9.94357 5.75H9.94358H14.0564H14.0564Z',
  d4: 'M15.2929 1.54289C15.6834 1.15237 16.3166 1.15237 16.7071 1.54289C17.0976 1.93342 17.0976 2.56658 16.7071 2.95711L12.7071 6.95711C12.3166 7.34763 11.6834 7.34763 11.2929 6.95711L8.29289 3.95711C7.90237 3.56658 7.90237 2.93342 8.29289 2.54289C8.68342 2.15237 9.31658 2.15237 9.70711 2.54289L12 4.83579L15.2929 1.54289Z',
  d5: 'M16.7071 1.54289C16.3166 1.15237 15.6834 1.15237 15.2929 1.54289L12 4.83579L9.70711 2.54289C9.31658 2.15237 8.68342 2.15237 8.29289 2.54289C7.90237 2.93342 7.90237 3.56658 8.29289 3.95711L10.0858 5.75H13.9142L16.7071 2.95711C17.0976 2.56658 17.0976 1.93342 16.7071 1.54289Z',
  d6: 'M22 6H2V22H22V6Z',
  d7: 'M1.25 6C1.25 5.58579 1.58579 5.25 2 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6V22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V6Z',
  d8: 'M16.7072 2.66421L12.7072 6.66421C12.3167 7.05474 11.6835 7.05474 11.293 6.66421L8.29297 3.66421L9.70718 2.25L12.0001 4.54289L15.293 1.25L16.7072 2.66421Z',
} as const;

export const IconTv01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-01-stroke-rounded IconTv01StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTv01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-01-duotone-rounded IconTv01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTv01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-01-twotone-rounded IconTv01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTv01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-01-solid-rounded IconTv01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTv01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-01-bulk-rounded IconTv01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconTv01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-01-stroke-sharp IconTv01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTv01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-01-solid-sharp IconTv01SolidSharp"
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

export const iconPackOfTv01: TheIconSelfPack = {
  name: 'Tv01',
  StrokeRounded: IconTv01StrokeRounded,
  DuotoneRounded: IconTv01DuotoneRounded,
  TwotoneRounded: IconTv01TwotoneRounded,
  SolidRounded: IconTv01SolidRounded,
  BulkRounded: IconTv01BulkRounded,
  StrokeSharp: IconTv01StrokeSharp,
  SolidSharp: IconTv01SolidSharp,
};