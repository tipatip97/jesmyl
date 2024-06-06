import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 3.00098H21.5',
  d2: 'M4.5 3.00098V14C4.5 16.3288 4.93059 17.0893 6.92752 18.2875L9.94202 20.0962C10.9447 20.6978 11.446 20.9986 12 20.9986C12.554 20.9986 13.0553 20.6978 14.058 20.0962L17.0725 18.2875C19.0694 17.0893 19.5 16.3288 19.5 14V3.00098',
  d3: 'M14.5 13.001H9.5M14.5 8.00098H9.5',
  d4: 'M2.5 3H21.5',
  d5: 'M4.5 3V13.999C4.5 16.3278 4.93059 17.0883 6.92752 18.2865L9.94202 20.0952C10.9447 20.6968 11.446 20.9976 12 20.9976C12.554 20.9976 13.0553 20.6968 14.058 20.0952L17.0725 18.2865C19.0694 17.0883 19.5 16.3278 19.5 13.999V3',
  d6: 'M4.5 13.999V3H19.5V13.999C19.5 16.3278 19.0694 17.0883 17.0725 18.2865L14.058 20.0952L14.058 20.0952C13.0553 20.6968 12.554 20.9976 12 20.9976C11.446 20.9976 10.9447 20.6968 9.94204 20.0952L9.94202 20.0952L6.92752 18.2865C4.93059 17.0883 4.5 16.3278 4.5 13.999Z',
  d7: 'M14.5 13H9.5M14.5 8H9.5',
  d8: 'M1.5 3C1.5 2.44772 1.94772 2 2.5 2H21.5C22.0523 2 22.5 2.44772 22.5 3C22.5 3.55228 22.0523 4 21.5 4H2.5C1.94772 4 1.5 3.55228 1.5 3Z',
  d9: 'M3.75 3C3.75 2.58579 4.08579 2.25 4.5 2.25L19.5 2.25C19.9142 2.25 20.25 2.58579 20.25 3L20.25 13.999C20.25 15.1871 20.146 16.1268 19.6877 16.9363C19.2294 17.7457 18.4771 18.3184 17.4584 18.9296L14.4129 20.7569C13.9379 21.0419 13.5343 21.2841 13.1798 21.4507C12.8023 21.6282 12.426 21.7476 12 21.7476C11.574 21.7476 11.1977 21.6282 10.8202 21.4507C10.4657 21.2841 10.062 21.0419 9.58697 20.7568L9.55777 20.7393L9.55615 20.7383L6.54165 18.9296C5.52287 18.3184 4.77057 17.7457 4.31226 16.9363C3.85395 16.1268 3.75 15.1871 3.75 13.999L3.75 3ZM9.5 7C8.94772 7 8.5 7.44772 8.5 8C8.5 8.55228 8.94772 9 9.5 9L14.5 9C15.0523 9 15.5 8.55228 15.5 8C15.5 7.44772 15.0523 7 14.5 7L9.5 7ZM9.5 12C8.94772 12 8.5 12.4477 8.5 13C8.5 13.5523 8.94772 14 9.5 14H14.5C15.0523 14 15.5 13.5523 15.5 13C15.5 12.4477 15.0523 12 14.5 12H9.5Z',
  d10: 'M4.5 2.25C4.08579 2.25 3.75 2.58579 3.75 3V13.999C3.75 15.1871 3.85395 16.1268 4.31226 16.9363C4.77057 17.7457 5.52287 18.3184 6.54165 18.9296L9.55615 20.7383L9.55777 20.7393L9.58697 20.7568C10.062 21.0419 10.4657 21.2841 10.8202 21.4507C11.1977 21.6282 11.574 21.7476 12 21.7476C12.426 21.7476 12.8023 21.6282 13.1798 21.4507C13.5343 21.2841 13.9379 21.0419 14.4129 20.7569L17.4584 18.9296C18.4771 18.3184 19.2294 17.7457 19.6877 16.9363C20.146 16.1268 20.25 15.1871 20.25 13.999V3C20.25 2.58579 19.9142 2.25 19.5 2.25H4.5Z',
  d11: 'M8.5 8C8.5 7.44772 8.94772 7 9.5 7H14.5C15.0523 7 15.5 7.44772 15.5 8C15.5 8.55228 15.0523 9 14.5 9H9.5C8.94772 9 8.5 8.55228 8.5 8ZM8.5 13C8.5 12.4477 8.94772 12 9.5 12H14.5C15.0523 12 15.5 12.4477 15.5 13C15.5 13.5523 15.0523 14 14.5 14H9.5C8.94772 14 8.5 13.5523 8.5 13Z',
  d12: 'M2.5 3.00195H21.5',
  d13: 'M4.5 3L4.5 15.9809L11.9363 20.983C11.97 21.0057 12.0141 21.0057 12.0478 20.983L19.5 15.9809V3',
  d14: 'M14.5 13.002H9.5M14.5 8.00195H9.5',
  d15: 'M22 4.00098H2V2.00098H22V4.00098Z',
  d16: 'M20.5012 3.00099L3.50116 3.00098L3.50098 16.5363L11.4467 21.8308C11.7825 22.0545 12.2199 22.0545 12.5557 21.8308L20.5012 16.5363V3.00099ZM14.501 8.00098H9.50098V10.001H14.501V8.00098ZM14.501 13.001H9.50098V15.001H14.501V13.001Z',
};

export const IconHonorStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="honor-stroke-rounded IconHonorStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconHonorDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="honor-duotone-rounded IconHonorDuotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHonorTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="honor-twotone-rounded IconHonorTwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHonorSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="honor-solid-rounded IconHonorSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHonorBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="honor-bulk-rounded IconHonorBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
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

export const IconHonorStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="honor-stroke-sharp IconHonorStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHonorSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="honor-solid-sharp IconHonorSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHonor: TheIconSelfPack = {
  name: 'Honor',
  StrokeRounded: IconHonorStrokeRounded,
  DuotoneRounded: IconHonorDuotoneRounded,
  TwotoneRounded: IconHonorTwotoneRounded,
  SolidRounded: IconHonorSolidRounded,
  BulkRounded: IconHonorBulkRounded,
  StrokeSharp: IconHonorStrokeSharp,
  SolidSharp: IconHonorSolidSharp,
};