import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.51311 12C4.1118 11.9416 3.79336 11.8443 3.51321 11.6826C3.05313 11.417 2.67109 11.0349 2.40546 10.5748C2 9.87256 2 8.92972 2 7.04403C2 5.15834 2 4.21549 2.40546 3.51321C2.67109 3.05313 3.05313 2.67109 3.51321 2.40546C4.21549 2 5.15834 2 7.04403 2C8.92972 2 9.87256 2 10.5748 2.40546C11.0349 2.67109 11.417 3.05313 11.6826 3.51321C11.8443 3.79336 11.9416 4.1118 12 4.51311',
  d2: 'M9.52169 17C9.11624 16.9417 8.7952 16.8443 8.51301 16.6813C8.053 16.4158 7.671 16.0338 7.40541 15.5737C7 14.8715 7 13.9288 7 12.0434C7 10.1579 7 9.2152 7.40541 8.51301C7.671 8.053 8.053 7.671 8.51301 7.40541C9.2152 7 10.1579 7 12.0434 7C13.9288 7 14.8715 7 15.5737 7.40541C16.0338 7.671 16.4158 8.053 16.6813 8.51301C16.8443 8.7952 16.9417 9.11624 17 9.52169',
  d3: 'M12 17C12 15.1308 12 14.1962 12.4019 13.5C12.6652 13.0439 13.0439 12.6652 13.5 12.4019C14.1962 12 15.1308 12 17 12C18.8692 12 19.8038 12 20.5 12.4019C20.9561 12.6652 21.3348 13.0439 21.5981 13.5C22 14.1962 22 15.1308 22 17C22 18.8692 22 19.8038 21.5981 20.5C21.3348 20.9561 20.9561 21.3348 20.5 21.5981C19.8038 22 18.8692 22 17 22C15.1308 22 14.1962 22 13.5 21.5981C13.0439 21.3348 12.6652 20.9561 12.4019 20.5C12 19.8038 12 18.8692 12 17Z',
  d4: 'M6.99793 1H7.09013C7.99378 0.999985 8.73891 0.999972 9.34348 1.05477C9.97205 1.11174 10.5461 1.23419 11.0748 1.53944C11.6869 1.89283 12.1952 2.40112 12.5486 3.01321C12.8248 3.4915 12.6609 4.10309 12.1826 4.37923C11.7043 4.65538 11.0927 4.4915 10.8166 4.01321C10.6387 3.70515 10.3829 3.44934 10.0748 3.27149C9.90127 3.17128 9.6528 3.091 9.16295 3.0466C8.65935 3.00096 8.00528 3 7.04403 3C6.08278 3 5.4287 3.00096 4.9251 3.0466C4.43525 3.091 4.18678 3.17128 4.01321 3.27149C3.70515 3.44934 3.44934 3.70515 3.27149 4.01321C3.17128 4.18678 3.091 4.43525 3.0466 4.9251C3.00096 5.4287 3 6.08278 3 7.04403C3 8.00528 3.00096 8.65935 3.0466 9.16295C3.091 9.6528 3.17128 9.90127 3.27149 10.0748C3.44934 10.3829 3.70515 10.6387 4.01321 10.8166C4.4915 11.0927 4.65538 11.7043 4.37923 12.1826C4.10309 12.6609 3.4915 12.8248 3.01321 12.5486C2.40112 12.1952 1.89283 11.6869 1.53944 11.0748C1.23419 10.5461 1.11174 9.97205 1.05477 9.34348C0.999972 8.73891 0.999985 7.99378 1 7.09013V6.99793C0.999985 6.09428 0.999972 5.34915 1.05477 4.74458C1.11173 4.11601 1.23419 3.54192 1.53944 3.01321C1.89283 2.40112 2.40112 1.89283 3.01321 1.53944C3.54192 1.23419 4.11601 1.11173 4.74458 1.05477C5.34915 0.999972 6.09428 0.999985 6.99793 1Z',
  d5: 'M11.9973 6H12.0895C12.993 5.99998 13.738 5.99997 14.3425 6.05476C14.971 6.11172 15.5451 6.23416 16.0737 6.53939C16.6858 6.89274 17.194 7.40098 17.5474 8.01301C17.8235 8.49131 17.6596 9.1029 17.1813 9.37904C16.7031 9.65518 16.0915 9.49131 15.8153 9.01301C15.6375 8.70502 15.3817 8.44926 15.0737 8.27144C14.9002 8.17125 14.6518 8.09099 14.162 8.0466C13.6585 8.00096 13.0045 8 12.0434 8C11.0823 8 10.4283 8.00096 9.92474 8.0466C9.43496 8.09099 9.18654 8.17125 9.01301 8.27144C8.70502 8.44926 8.44926 8.70502 8.27144 9.01301C8.17125 9.18654 8.09099 9.43496 8.0466 9.92474C8.00096 10.4283 8 11.0823 8 12.0434C8 13.0045 8.00096 13.6585 8.0466 14.162C8.09099 14.6518 8.17125 14.9002 8.27144 15.0737C8.44926 15.3817 8.70502 15.6375 9.01301 15.8153C9.49131 16.0915 9.65518 16.7031 9.37904 17.1813C9.1029 17.6596 8.49131 17.8235 8.01301 17.5474C7.40098 17.194 6.89274 16.6858 6.53939 16.0737C6.23416 15.5451 6.11172 14.971 6.05476 14.3425C5.99997 13.738 5.99998 12.993 6 12.0895V11.9973C5.99998 11.0938 5.99997 10.3487 6.05476 9.74421C6.11172 9.11572 6.23416 8.54168 6.53939 8.01301C6.89274 7.40098 7.40098 6.89274 8.01301 6.53939C8.54168 6.23416 9.11572 6.11172 9.74421 6.05476C10.3487 5.99997 11.0938 5.99998 11.9973 6Z',
  d6: 'M17.0461 11C17.9415 11 18.6805 11 19.2802 11.0543C19.9039 11.1109 20.4744 11.2324 21 11.5359C21.6081 11.887 22.113 12.3919 22.4641 13C22.7676 13.5256 22.8892 14.0961 22.9457 14.7198C23 15.3195 23 16.0585 23 16.9539V17.0461C23 17.9415 23 18.6805 22.9457 19.2802C22.8892 19.9039 22.7676 20.4744 22.4641 21C22.113 21.6081 21.6081 22.113 21 22.4641C20.4744 22.7676 19.9039 22.8892 19.2802 22.9457C18.6805 23 17.9415 23 17.0461 23H16.9539C16.0585 23 15.3195 23 14.7198 22.9457C14.0961 22.8892 13.5256 22.7676 13 22.4641C12.3919 22.113 11.887 21.6081 11.5359 21C11.2324 20.4744 11.1109 19.9039 11.0543 19.2802C11 18.6805 11 17.9415 11 17.0461V17.046V16.954V16.9539C11 16.0585 11 15.3195 11.0543 14.7198C11.1109 14.0961 11.2324 13.5256 11.5359 13C11.887 12.3919 12.3919 11.887 13 11.5359C13.5256 11.2324 14.0961 11.1109 14.7198 11.0543C15.3195 11 16.0585 11 16.9539 11H16.954H17.046H17.0461Z',
  d7: 'M22 12V22H12V12H22Z',
  d8: 'M17 9V7H7V17H9',
  d9: 'M12 4V2H2V12H4',
  d10: 'M11.25 11.25H22.75V22.75H11.25V11.25Z',
  d11: 'M6.25 6.25H17.75V9.125H15.8333V8.16667H8.16667V15.8333H9.125V17.75H6.25V6.25Z',
  d12: 'M1.25 1.25H12.75V4.125H10.8333V3.16667H3.16667V10.8333H4.125V12.75H1.25V1.25Z',
};

export const IconMotion01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motion-01-stroke-rounded IconMotion01StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMotion01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motion-01-duotone-rounded IconMotion01DuotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMotion01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motion-01-twotone-rounded IconMotion01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMotion01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motion-01-solid-rounded IconMotion01SolidRounded"
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
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMotion01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motion-01-bulk-rounded IconMotion01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMotion01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motion-01-stroke-sharp IconMotion01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMotion01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motion-01-solid-sharp IconMotion01SolidSharp"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const iconPackOfMotion01: TheIconSelfPack = {
  name: 'Motion01',
  StrokeRounded: IconMotion01StrokeRounded,
  DuotoneRounded: IconMotion01DuotoneRounded,
  TwotoneRounded: IconMotion01TwotoneRounded,
  SolidRounded: IconMotion01SolidRounded,
  BulkRounded: IconMotion01BulkRounded,
  StrokeSharp: IconMotion01StrokeSharp,
  SolidSharp: IconMotion01SolidSharp,
};