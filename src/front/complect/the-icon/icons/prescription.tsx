import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19 21L10 12',
  d2: 'M5 19V5C5 3.34533 5.34533 3 7 3H9.5C11.9853 3 14 5.01472 14 7.5C14 9.98528 11.9853 12 9.5 12H5',
  d3: 'M19 15L13 21',
  d4: 'M9.5 3H7C5.34533 3 5 3.34533 5 5V12H9.5C11.9853 12 14 9.98528 14 7.5C14 5.01472 11.9853 3 9.5 3Z',
  d5: 'M13 15L19 21',
  d6: 'M5.05859 19V5C5.05859 3.34533 5.40392 3 7.05859 3H9.55859C12.0439 3 14.0586 5.01472 14.0586 7.5C14.0586 9.98528 12.0439 12 9.55859 12H5.05859M19.0004 21L10.0004 12',
  d7: 'M9.29289 11.2929C9.68342 10.9024 10.3166 10.9024 10.7071 11.2929L19.7071 20.2929C20.0976 20.6834 20.0976 21.3166 19.7071 21.7071C19.3166 22.0976 18.6834 22.0976 18.2929 21.7071L9.29289 12.7071C8.90237 12.3166 8.90237 11.6834 9.29289 11.2929Z',
  d8: 'M6.05652 4.204C6.02177 4.36219 6 4.60798 6 5V11H9.5C11.433 11 13 9.433 13 7.5C13 5.567 11.433 4 9.5 4H7C6.60798 4 6.36219 4.02177 6.204 4.05652C6.14488 4.06951 6.10937 4.08188 6.09003 4.09003C6.08188 4.10937 6.06951 4.14488 6.05652 4.204ZM6 13H9.5C12.5376 13 15 10.5376 15 7.5C15 4.46243 12.5376 2 9.5 2H7C6.56469 2 6.14681 2.02139 5.77487 2.1031C5.39161 2.1873 4.99621 2.34857 4.67239 2.67239C4.34857 2.99621 4.1873 3.39161 4.1031 3.77487C4.02139 4.14681 4 4.56469 4 5V19C4 19.5523 4.44772 20 5 20C5.55228 20 6 19.5523 6 19V13Z',
  d9: 'M19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071L13.7071 21.7071C13.3166 22.0976 12.6834 22.0976 12.2929 21.7071C11.9024 21.3166 11.9024 20.6834 12.2929 20.2929L18.2929 14.2929C18.6834 13.9024 19.3166 13.9024 19.7071 14.2929Z',
  d10: 'M19.7071 15.7064C20.0976 15.3159 20.0976 14.6827 19.7071 14.2922C19.3166 13.9016 18.6834 13.9016 18.2929 14.2922L16.0004 16.5846L11.8767 12.4609C11.1816 12.7944 10.4055 12.9861 9.58594 12.9986L14.5862 17.9988L12.2929 20.2922C11.9024 20.6827 11.9024 21.3159 12.2929 21.7064C12.6834 22.0969 13.3166 22.0969 13.7071 21.7064L16.0004 19.413L18.2937 21.7063C18.6842 22.0968 19.3174 22.0968 19.7079 21.7063C20.0984 21.3158 20.0984 20.6826 19.7079 20.2921L17.4146 17.9988L19.7071 15.7064Z',
  d11: 'M5 19V3H9.5C11.9853 3 14 5.01472 14 7.5C14 9.98528 11.9853 12 9.5 12H5',
  d12: 'M10.7072 11.293L20 20.5858L18.5858 22L9.29297 12.7072L10.7072 11.293Z',
  d13: 'M4 2H9.5C12.5376 2 15 4.46243 15 7.5C15 10.5376 12.5376 13 9.5 13H6V19H4V2ZM6 11H9.5C11.433 11 13 9.433 13 7.5C13 5.567 11.433 4 9.5 4H6V11Z',
  d14: 'M12.0002 20.5858L18.5859 14L20.0002 15.4142L13.4144 22L12.0002 20.5858Z',
};

export const IconPrescriptionStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prescription-stroke-rounded IconPrescriptionStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrescriptionDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prescription-duotone-rounded IconPrescriptionDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrescriptionTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prescription-twotone-rounded IconPrescriptionTwotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrescriptionSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prescription-solid-rounded IconPrescriptionSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPrescriptionBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prescription-bulk-rounded IconPrescriptionBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPrescriptionStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prescription-stroke-sharp IconPrescriptionStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPrescriptionSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prescription-solid-sharp IconPrescriptionSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPrescription: TheIconSelfPack = {
  name: 'Prescription',
  StrokeRounded: IconPrescriptionStrokeRounded,
  DuotoneRounded: IconPrescriptionDuotoneRounded,
  TwotoneRounded: IconPrescriptionTwotoneRounded,
  SolidRounded: IconPrescriptionSolidRounded,
  BulkRounded: IconPrescriptionBulkRounded,
  StrokeSharp: IconPrescriptionStrokeSharp,
  SolidSharp: IconPrescriptionSolidSharp,
};