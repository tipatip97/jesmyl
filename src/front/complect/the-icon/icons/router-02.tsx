import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 22H6C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18C2 16.1144 2 15.1716 2.58579 14.5858C3.17157 14 4.11438 14 6 14H18C19.8856 14 20.8284 14 21.4142 14.5858C22 15.1716 22 16.1144 22 18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22Z',
  d2: 'M9 14L9 6',
  d3: 'M13.991 18H14M9.99551 18H10.0045M6 18H6.00897',
  d4: 'M3.47776 10C2.54314 8.85117 2 7.47913 2 6.00543C2 4.52709 2.54657 3.15104 3.48661 2M6 3.82574C5.59087 4.48184 5.36068 5.22209 5.36068 6.00543C5.36068 6.78484 5.58856 7.52159 5.99385 8.17523',
  d5: 'M8.99609 5.99707H9.00245',
  d6: 'M8.99609 5.99609H9.00245',
  d7: 'M7.49609 5.99609C7.49609 5.16767 8.16767 4.49609 8.99609 4.49609H9.00244C9.83087 4.49609 10.5024 5.16767 10.5024 5.99609C10.5024 6.44152 10.3083 6.8416 10 7.11633L10 13.25H18.052H18.052H18.0521C18.9505 13.25 19.6997 13.25 20.2945 13.3299C20.9223 13.4143 21.4891 13.6 21.9445 14.0555C22.4 14.5109 22.5857 15.0777 22.6701 15.7055C22.7501 16.3003 22.75 17.0495 22.75 17.948V18.052C22.75 18.9505 22.7501 19.6997 22.6701 20.2945C22.5857 20.9223 22.4 21.4891 21.9445 21.9445C21.4891 22.4 20.9223 22.5857 20.2945 22.6701C19.6997 22.7501 18.9505 22.75 18.052 22.75H18.052H5.94801H5.94798C5.04951 22.75 4.3003 22.7501 3.70552 22.6701C3.07773 22.5857 2.51093 22.4 2.05546 21.9445C1.59999 21.4891 1.41432 20.9223 1.32991 20.2945C1.24995 19.6997 1.24997 18.9505 1.25 18.052V18.052V17.948V17.948C1.24997 17.0495 1.24995 16.3003 1.32991 15.7055C1.41432 15.0777 1.59999 14.5109 2.05546 14.0555C2.51093 13.6 3.07773 13.4143 3.70552 13.3299C4.30029 13.25 5.04949 13.25 5.94794 13.25H5.94797H5.948H8L8 7.11763C7.69086 6.84287 7.49609 6.44223 7.49609 5.99609ZM5 18C5 17.4477 5.44772 17 6 17H6.00897C6.56126 17 7.00897 17.4477 7.00897 18C7.00897 18.5523 6.56126 19 6.00897 19H6C5.44772 19 5 18.5523 5 18ZM8.99551 18C8.99551 17.4477 9.44323 17 9.99551 17H10.0045C10.5568 17 11.0045 17.4477 11.0045 18C11.0045 18.5523 10.5568 19 10.0045 19H9.99551C9.44323 19 8.99551 18.5523 8.99551 18ZM12.991 18C12.991 17.4477 13.4387 17 13.991 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H13.991C13.4387 19 12.991 18.5523 12.991 18Z',
  d8: 'M4.11916 1.22551C4.54691 1.57485 4.61048 2.20481 4.26114 2.63257C3.44963 3.62624 3 4.78359 3 6.00546C3 7.22354 3.44682 8.37741 4.25348 9.36896C4.60201 9.79737 4.53725 10.4272 4.10883 10.7758C3.68041 11.1243 3.05057 11.0595 2.70203 10.6311C1.63946 9.32498 1 7.73478 1 6.00546C1 4.27065 1.64352 2.67591 2.71209 1.36749C3.06143 0.939729 3.6914 0.876161 4.11916 1.22551ZM6.52913 2.97723C6.99777 3.26946 7.14077 3.88627 6.84854 4.3549C6.53045 4.86501 6.36068 5.42367 6.36068 6.00546C6.36068 6.58438 6.52876 7.14031 6.84373 7.6483C7.13477 8.11768 6.99019 8.73411 6.52081 9.02515C6.05143 9.31618 5.43499 9.17161 5.14396 8.70223C4.64836 7.90293 4.36068 6.98536 4.36068 6.00546C4.36068 5.02058 4.65129 4.09873 5.15146 3.29664C5.44369 2.828 6.0605 2.685 6.52913 2.97723Z',
  d9: 'M22 22H2V14H22V22Z',
  d10: 'M2 13.25C1.58579 13.25 1.25 13.5858 1.25 14V22C1.25 22.4142 1.58579 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22V14C22.75 13.5858 22.4142 13.25 22 13.25H2ZM7.00897 17H5V19H7.00897V17ZM11.0045 17H8.99551V19H11.0045V17ZM15 17H12.991V19H15V17Z',
  d11: 'M2.95203 10.5136C1.88946 9.2075 1.25 7.61729 1.25 5.88798C1.25 4.15316 1.89352 2.55843 2.96209 1.25L4.51114 2.51509C3.69963 3.50875 3.25 4.6661 3.25 5.88798C3.25 7.10606 3.69682 8.25992 4.50348 9.25147L2.95203 10.5136Z',
  d12: 'M5.39396 8.58474C4.89836 7.78544 4.61068 6.86787 4.61068 5.88798C4.61068 4.90309 4.90129 3.98124 5.40146 3.17915L7.09854 4.23742C6.78045 4.74752 6.61068 5.30618 6.61068 5.88798C6.61068 6.46689 6.77876 7.02282 7.09373 7.53081L5.39396 8.58474Z',
  d13: 'M10.25 6.99909V13.8828H8.25L8.25 7.00039C7.94086 6.72563 7.74609 6.32499 7.74609 5.87885C7.74609 5.05043 8.41767 4.37885 9.24609 4.37885H9.25245C10.0809 4.37885 10.7524 5.05043 10.7524 5.87885C10.7524 6.32428 10.5583 6.72436 10.25 6.99909Z',
} as const;

export const IconRouter02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="router-02-stroke-rounded IconRouter02StrokeRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRouter02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="router-02-duotone-rounded IconRouter02DuotoneRounded"
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRouter02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="router-02-twotone-rounded IconRouter02TwotoneRounded"
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRouter02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="router-02-solid-rounded IconRouter02SolidRounded"
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

export const IconRouter02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="router-02-bulk-rounded IconRouter02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRouter02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="router-02-stroke-sharp IconRouter02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRouter02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="router-02-solid-sharp IconRouter02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRouter02: TheIconSelfPack = {
  name: 'Router02',
  StrokeRounded: IconRouter02StrokeRounded,
  DuotoneRounded: IconRouter02DuotoneRounded,
  TwotoneRounded: IconRouter02TwotoneRounded,
  SolidRounded: IconRouter02SolidRounded,
  BulkRounded: IconRouter02BulkRounded,
  StrokeSharp: IconRouter02StrokeSharp,
  SolidSharp: IconRouter02SolidSharp,
};