import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.5953 12V8.61228C11.5953 7.66908 11.5953 7.19748 11.8894 7.0428C12.1835 6.88812 12.559 7.16224 13.31 7.71046L14.1553 8.32755C14.7184 8.73866 15 8.94421 15 9.22937C15 9.51453 14.7184 9.72009 14.1553 10.1312L11.5953 12ZM11.5953 12V15.3877C11.5953 16.3309 11.5953 16.8025 11.8894 16.9572C12.1835 17.1119 12.559 16.8378 13.31 16.2895L14.1553 15.6725C14.7184 15.2613 15 15.0558 15 14.7706C15 14.4855 14.7184 14.2799 14.1553 13.8688L11.5953 12ZM11.5953 12L9 9.77778M11.5953 12L9 14.2222',
  d2: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11.5957 8.61228V12V15.3877C11.5957 16.3309 11.5957 16.8025 11.8898 16.9572C12.1839 17.1119 12.5594 16.8378 13.3104 16.2895L14.1557 15.6725C14.7188 15.2613 15.0004 15.0558 15.0004 14.7706C15.0004 14.4855 14.7188 14.2799 14.1557 13.8688L11.5957 12L14.1557 10.1312C14.7188 9.72009 15.0004 9.51453 15.0004 9.22937C15.0004 8.94421 14.7188 8.73866 14.1557 8.32755L13.3104 7.71046C12.5594 7.16224 12.1839 6.88812 11.8898 7.0428C11.5957 7.19748 11.5957 7.66908 11.5957 8.61228Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM13.7104 7.07485C13.3713 6.8272 13.0512 6.59346 12.7767 6.44949C12.4937 6.30114 12.0275 6.12344 11.5403 6.37968C11.06 6.63228 10.9351 7.11069 10.8898 7.42555C10.8452 7.73486 10.8453 8.13462 10.8453 8.56217V8.56219L10.8453 10.3711L9.48781 9.20875C9.17318 8.93935 8.69972 8.97601 8.43032 9.29065C8.16091 9.60528 8.19758 10.0787 8.51222 10.3481L10.4422 12.0007L8.51222 13.6532C8.19758 13.9226 8.16091 14.3961 8.43032 14.7107C8.69972 15.0253 9.17318 15.062 9.48781 14.7926L10.8453 13.6302L10.8453 15.4391V15.4392C10.8453 15.8667 10.8452 16.2665 10.8898 16.5758C10.9351 16.8906 11.06 17.3691 11.5403 17.6217C12.0275 17.8779 12.4937 17.7002 12.7767 17.5518C13.0512 17.4079 13.3713 17.1742 13.7104 16.9265L14.6333 16.2527C14.8835 16.0702 15.1338 15.8876 15.3147 15.7098C15.5179 15.51 15.75 15.2056 15.75 14.7713C15.75 14.337 15.5179 14.0326 15.3147 13.8328C15.1338 13.655 14.8835 13.4724 14.6334 13.2899L12.8673 12.0007L14.6334 10.7115C14.8835 10.5289 15.1338 10.3463 15.3147 10.1685C15.5179 9.96872 15.75 9.66432 15.75 9.23004C15.75 8.79576 15.5179 8.49136 15.3147 8.29155C15.1338 8.11373 14.8835 7.93115 14.6334 7.74862L13.7104 7.07485ZM12.3452 8.61292V10.1309C12.3452 10.303 12.3452 10.3891 12.3999 10.4169C12.4546 10.4447 12.5241 10.3939 12.6631 10.2925L13.713 9.52607C13.7843 9.47396 13.8494 9.42638 13.9083 9.38288C14.0006 9.31458 14.0468 9.28043 14.0468 9.23001C14.0468 9.17958 14.0006 9.14543 13.9083 9.07714C13.8494 9.03363 13.7843 8.98605 13.713 8.93395L12.8677 8.31686C12.7881 8.25881 12.7154 8.2058 12.6486 8.15745C12.52 8.06446 12.4558 8.01797 12.4014 8.0456C12.3469 8.07324 12.3465 8.15251 12.3458 8.31105C12.3453 8.40214 12.3452 8.50237 12.3452 8.61292ZM12.3452 15.3884V13.8704C12.3452 13.6982 12.3452 13.6122 12.3999 13.5844C12.4546 13.5566 12.5241 13.6073 12.6631 13.7088L13.713 14.4752C13.7843 14.5273 13.8494 14.5749 13.9083 14.6184C14.0006 14.6867 14.0468 14.7208 14.0468 14.7713C14.0468 14.8217 14.0006 14.8558 13.9083 14.9241C13.8494 14.9676 13.7843 15.0152 13.713 15.0673L12.8677 15.6844C12.7881 15.7425 12.7154 15.7955 12.6486 15.8438C12.52 15.9368 12.4558 15.9833 12.4014 15.9557C12.3469 15.928 12.3465 15.8488 12.3458 15.6902C12.3453 15.5991 12.3452 15.4989 12.3452 15.3884Z',
  d4: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z',
  d5: 'M12.7767 6.44949C13.0512 6.59346 13.3713 6.8272 13.7104 7.07485L14.6334 7.74862C14.8835 7.93115 15.1338 8.11373 15.3147 8.29155C15.5179 8.49136 15.75 8.79576 15.75 9.23004C15.75 9.66432 15.5179 9.96872 15.3147 10.1685C15.1338 10.3463 14.8835 10.5289 14.6334 10.7115L12.8673 12.0007L14.6334 13.2899C14.8835 13.4724 15.1338 13.655 15.3147 13.8328C15.5179 14.0326 15.75 14.337 15.75 14.7713C15.75 15.2056 15.5179 15.51 15.3147 15.7098C15.1338 15.8876 14.8835 16.0702 14.6333 16.2527L13.7104 16.9265C13.3713 17.1742 13.0512 17.4079 12.7767 17.5518C12.4937 17.7002 12.0275 17.8779 11.5403 17.6217C11.06 17.3691 10.9351 16.8906 10.8898 16.5758C10.8452 16.2665 10.8453 15.8667 10.8453 15.4391L10.8453 13.6302L9.48781 14.7926C9.17318 15.062 8.69972 15.0253 8.43032 14.7107C8.16091 14.3961 8.19758 13.9226 8.51222 13.6532L10.4422 12.0007L8.51222 10.3481C8.19758 10.0787 8.16091 9.60528 8.43032 9.29065C8.69972 8.97601 9.17318 8.93935 9.48781 9.20875L10.8453 10.3711L10.8453 8.56219C10.8453 8.13463 10.8452 7.73486 10.8898 7.42555C10.9351 7.11069 11.06 6.63228 11.5403 6.37968C12.0275 6.12344 12.4937 6.30114 12.7767 6.44949ZM12.3452 10.1309V8.61292C12.3452 8.50237 12.3453 8.40214 12.3458 8.31105C12.3465 8.15251 12.3469 8.07324 12.4014 8.0456C12.4558 8.01797 12.52 8.06446 12.6486 8.15745C12.7154 8.2058 12.7881 8.25881 12.8677 8.31686L13.713 8.93395C13.7843 8.98605 13.8494 9.03363 13.9083 9.07714C14.0006 9.14543 14.0468 9.17958 14.0468 9.23001C14.0468 9.28043 14.0006 9.31458 13.9083 9.38287C13.8494 9.42638 13.7843 9.47396 13.713 9.52607L12.6631 10.2925C12.5241 10.3939 12.4546 10.4447 12.3999 10.4169C12.3452 10.3891 12.3452 10.303 12.3452 10.1309ZM12.3452 13.8704V15.3884C12.3452 15.4989 12.3453 15.5991 12.3458 15.6902C12.3465 15.8488 12.3469 15.928 12.4014 15.9557C12.4558 15.9833 12.52 15.9368 12.6486 15.8438C12.7154 15.7955 12.7881 15.7425 12.8677 15.6844L13.713 15.0673C13.7843 15.0152 13.8494 14.9676 13.9083 14.9241C14.0006 14.8558 14.0468 14.8217 14.0468 14.7713C14.0468 14.7208 14.0006 14.6867 13.9083 14.6184C13.8494 14.5749 13.7843 14.5273 13.713 14.4752L12.6631 13.7088C12.5241 13.6073 12.4546 13.5566 12.3999 13.5844C12.3452 13.6122 12.3452 13.6982 12.3452 13.8704Z',
  d6: 'M8.5 14.9412L15.5 9.05881L12.0008 7V17L15.5 14.9412L8.5 9.05881',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12.3793 6.35359C12.1474 6.21715 11.8602 6.21538 11.6266 6.34894C11.3931 6.48251 11.2489 6.73095 11.2489 7V10.3908L8.98064 8.48462L8.01562 9.63299L10.8323 12L8.01562 14.367L8.98064 15.5154L11.2489 13.6092V17C11.2489 17.2691 11.3931 17.5175 11.6266 17.6511C11.8602 17.7846 12.1474 17.7829 12.3793 17.6464L15.8785 15.5876C16.0883 15.4641 16.2252 15.2464 16.2455 15.0037C16.2658 14.7611 16.1671 14.5237 15.9806 14.367L13.1639 12L15.9806 9.63299C16.1671 9.47633 16.2658 9.2389 16.2455 8.99624C16.2252 8.75358 16.0883 8.53588 15.8785 8.41239L12.3793 6.35359ZM14.2034 14.8328L12.7489 13.6106V15.6885L14.2034 14.8328ZM12.7489 8.31146V10.3894L14.2034 9.16719L12.7489 8.31146Z',
};

export const IconBluetoothCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-circle-stroke-rounded IconBluetoothCircleStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBluetoothCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-circle-duotone-rounded IconBluetoothCircleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBluetoothCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-circle-twotone-rounded IconBluetoothCircleTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBluetoothCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-circle-solid-rounded IconBluetoothCircleSolidRounded"
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

export const IconBluetoothCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-circle-bulk-rounded IconBluetoothCircleBulkRounded"
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

export const IconBluetoothCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-circle-stroke-sharp IconBluetoothCircleStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBluetoothCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-circle-solid-sharp IconBluetoothCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBluetoothCircle: TheIconSelfPack = {
  name: 'BluetoothCircle',
  StrokeRounded: IconBluetoothCircleStrokeRounded,
  DuotoneRounded: IconBluetoothCircleDuotoneRounded,
  TwotoneRounded: IconBluetoothCircleTwotoneRounded,
  SolidRounded: IconBluetoothCircleSolidRounded,
  BulkRounded: IconBluetoothCircleBulkRounded,
  StrokeSharp: IconBluetoothCircleStrokeSharp,
  SolidSharp: IconBluetoothCircleSolidSharp,
};