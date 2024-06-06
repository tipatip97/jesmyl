import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H13C14.9628 4 15.9443 4 16.7889 4.42229C17.6334 4.84458 18.2223 5.62972 19.4 7.2C21.1333 9.51111 22 10.6667 22 12C22 13.3333 21.1333 14.4889 19.4 16.8C18.2223 18.3703 17.6334 19.1554 16.7889 19.5777C15.9443 20 14.9628 20 13 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z',
  d2: 'M12 4H13C14.9628 4 15.9443 4 16.7889 4.42229C17.6334 4.84458 18.2223 5.62972 19.4 7.2C21.1333 9.51111 22 10.6667 22 12C22 13.3333 21.1333 14.4889 19.4 16.8C18.2223 18.3703 17.6334 19.1554 16.7889 19.5777C15.9443 20 14.9628 20 13 20H12',
  d3: 'M12 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H12',
  d4: 'M13.189 3.25004C14.9682 3.24944 16.1193 3.24905 17.1243 3.75155C18.1293 4.25405 18.8196 5.1751 19.8866 6.59886L20 6.75008L20.0281 6.78759L20.0282 6.78763C20.871 7.91135 21.5428 8.80709 21.9982 9.58945C22.4686 10.3976 22.75 11.1523 22.75 12.0001C22.75 12.8479 22.4686 13.6026 21.9982 14.4107C21.5428 15.1931 20.871 16.0888 20.0282 17.2125L20.0281 17.2126L20 17.2501L19.8866 17.4013C18.8196 18.8251 18.1293 19.7461 17.1243 20.2486C16.1193 20.7511 14.9682 20.7507 13.189 20.7501L13 20.7501H9.94359H9.94354C8.1058 20.7501 6.65018 20.7501 5.51098 20.5969C4.33856 20.4393 3.38961 20.1072 2.64124 19.3588C1.89288 18.6105 1.56076 17.6615 1.40314 16.4891C1.24997 15.3499 1.24998 13.8943 1.25 12.0565V12.0565V11.9437V11.9437C1.24998 10.1059 1.24997 8.65027 1.40314 7.51106C1.56076 6.33864 1.89288 5.38969 2.64124 4.64133C3.38961 3.89296 4.33856 3.56085 5.51098 3.40322C6.65019 3.25005 8.10582 3.25007 9.94358 3.25008L13 3.25008L13.189 3.25004Z',
  d5: 'M16.5001 4H2.00007L2 20.0002H16.5001L22.0001 12L16.5001 4Z',
  d6: 'M1.25007 4C1.25008 3.58578 1.58586 3.25 2.00007 3.25H16.5001C16.747 3.25 16.9782 3.37159 17.1181 3.5751L22.6181 11.5751C22.7941 11.831 22.7941 12.169 22.6181 12.4249L17.1181 20.4251C16.9782 20.6286 16.747 20.7502 16.5001 20.7502H2C1.80109 20.7502 1.61032 20.6712 1.46967 20.5305C1.32902 20.3899 1.25 20.1991 1.25 20.0002L1.25007 4Z',
};

export const IconLabelStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="label-stroke-rounded IconLabelStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLabelDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="label-duotone-rounded IconLabelDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLabelTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="label-twotone-rounded IconLabelTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconLabelSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="label-solid-rounded IconLabelSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLabelBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="label-bulk-rounded IconLabelBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLabelStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="label-stroke-sharp IconLabelStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLabelSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="label-solid-sharp IconLabelSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLabel: TheIconSelfPack = {
  name: 'Label',
  StrokeRounded: IconLabelStrokeRounded,
  DuotoneRounded: IconLabelDuotoneRounded,
  TwotoneRounded: IconLabelTwotoneRounded,
  SolidRounded: IconLabelSolidRounded,
  BulkRounded: IconLabelBulkRounded,
  StrokeSharp: IconLabelStrokeSharp,
  SolidSharp: IconLabelSolidSharp,
};