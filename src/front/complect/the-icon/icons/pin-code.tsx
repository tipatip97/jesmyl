import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.07407 7.92857C5.23724 6.24613 5.81883 5.40491 6.65298 4.95245C7.48714 4.5 8.45645 4.5 10.3951 4.5H15.0864C17.8607 4.5 19.2478 4.5 20.2442 5.22227C20.6756 5.53495 21.046 5.93674 21.3342 6.4047C22 7.48566 22 8.99044 22 12C22 15.0096 22 16.5143 21.3342 17.5953C21.046 18.0633 20.6756 18.465 20.2442 18.7777C19.2478 19.5 17.8607 19.5 15.0864 19.5H10.3951C8.45645 19.5 7.48714 19.5 6.65298 19.0475C5.81883 18.5951 5.23724 17.7539 4.07407 16.0714L3.92593 15.8571C2.64198 14 2 13.0714 2 12C2 10.9286 2.64198 10 3.92593 8.14286L4.07407 7.92857Z',
  d2: 'M8.99981 12H9.00879',
  d3: 'M12.9998 12H13.0088',
  d4: 'M16.9998 12H17.0088',
  d5: 'M18.4143 3.84481C17.555 3.74998 16.4803 3.74999 15.1311 3.75H10.3586H10.3586C9.42022 3.74999 8.66303 3.74998 8.03815 3.80999C7.38839 3.87239 6.8301 4.00316 6.29539 4.29319C5.76324 4.58183 5.33815 4.98288 4.90921 5.50097C4.49332 6.0033 3.8494 6.93469 3.28414 7.75231L3.28414 7.75231C2.66327 8.65034 2.16166 9.37585 1.82061 10.0115C1.46558 10.6731 1.25 11.2975 1.25 12C1.25 12.7025 1.46558 13.3269 1.82061 13.9885C2.16166 14.6241 2.66326 15.3496 3.28412 16.2477L3.28413 16.2477C3.84938 17.0653 4.49332 17.9967 4.90921 18.499C5.33815 19.0171 5.76324 19.4182 6.29539 19.7068C6.8301 19.9968 7.38839 20.1276 8.03815 20.19C8.66303 20.25 9.42022 20.25 10.3586 20.25H15.1311H15.1311H15.1311H15.1311H15.1311C16.4803 20.25 17.555 20.25 18.4143 20.1552C19.2989 20.0576 20.0395 19.8525 20.6844 19.385C21.1978 19.0128 21.6347 18.5375 21.9728 17.9886C22.3918 17.3083 22.5753 16.5313 22.6635 15.5909C22.75 14.6683 22.75 13.4331 22.75 11.9612C22.75 10.4893 22.75 9.33169 22.6635 8.4091C22.5753 7.4687 22.3918 6.69171 21.9728 6.01137C21.6347 5.4625 21.1978 4.98716 20.6844 4.61502C20.0395 4.14753 19.2989 3.94244 18.4143 3.84481ZM8.99553 10.75C8.30764 10.75 7.75 11.3096 7.75 12C7.75 12.6904 8.30764 13.25 8.99553 13.25H9.00447C9.69236 13.25 10.25 12.6904 10.25 12C10.25 11.3096 9.69236 10.75 9.00447 10.75H8.99553ZM11.75 12C11.75 11.3096 12.3076 10.75 12.9955 10.75H13.0045C13.6924 10.75 14.25 11.3096 14.25 12C14.25 12.6904 13.6924 13.25 13.0045 13.25H12.9955C12.3076 13.25 11.75 12.6904 11.75 12ZM16.9955 10.75C16.3076 10.75 15.75 11.3096 15.75 12C15.75 12.6904 16.3076 13.25 16.9955 13.25H17.0045C17.6924 13.25 18.25 12.6904 18.25 12C18.25 11.3096 17.6924 10.75 17.0045 10.75H16.9955Z',
  d6: 'M15.1311 3.75C16.4803 3.74999 17.555 3.74998 18.4143 3.84481C19.2989 3.94244 20.0395 4.14753 20.6844 4.61502C21.1978 4.98716 21.6347 5.4625 21.9728 6.01137C22.3918 6.69171 22.5753 7.4687 22.6635 8.4091C22.75 9.33169 22.75 10.4893 22.75 11.9612C22.75 13.4331 22.75 14.6683 22.6635 15.5909C22.5753 16.5313 22.3918 17.3083 21.9728 17.9886C21.6347 18.5375 21.1978 19.0128 20.6844 19.385C20.0395 19.8525 19.2989 20.0576 18.4143 20.1552C17.555 20.25 16.4803 20.25 15.1311 20.25H15.1311H10.3586C9.42022 20.25 8.66303 20.25 8.03815 20.19C7.38839 20.1276 6.8301 19.9968 6.29539 19.7068C5.76324 19.4182 5.33815 19.0171 4.90921 18.499C4.49332 17.9967 3.84938 17.0653 3.28413 16.2477L3.28412 16.2477C2.66326 15.3496 2.16166 14.6241 1.82061 13.9885C1.46558 13.3269 1.25 12.7025 1.25 12C1.25 11.2975 1.46558 10.6731 1.82061 10.0115C2.16166 9.37585 2.66327 8.65034 3.28414 7.75231L3.28414 7.75231C3.8494 6.93469 4.49332 6.0033 4.90921 5.50097C5.33815 4.98288 5.76324 4.58183 6.29539 4.29319C6.8301 4.00316 7.38839 3.87239 8.03815 3.80999C8.66303 3.74998 9.42022 3.74999 10.3586 3.75H10.3586H15.1311Z',
  d7: 'M7.75 12C7.75 11.3096 8.30764 10.75 8.99553 10.75H9.00447C9.69236 10.75 10.25 11.3096 10.25 12C10.25 12.6904 9.69236 13.25 9.00447 13.25H8.99553C8.30764 13.25 7.75 12.6904 7.75 12Z',
  d8: 'M11.75 12C11.75 11.3096 12.3076 10.75 12.9955 10.75H13.0045C13.6924 10.75 14.25 11.3096 14.25 12C14.25 12.6904 13.6924 13.25 13.0045 13.25H12.9955C12.3076 13.25 11.75 12.6904 11.75 12Z',
  d9: 'M15.75 12C15.75 11.3096 16.3076 10.75 16.9955 10.75H17.0045C17.6924 10.75 18.25 11.3096 18.25 12C18.25 12.6904 17.6924 13.25 17.0045 13.25H16.9955C16.3076 13.25 15.75 12.6904 15.75 12Z',
  d10: 'M8.98389 12H8.99287',
  d11: 'M12.9878 12H12.9968',
  d12: 'M16.9927 12H17.0017',
  d13: 'M21.8975 4.49805H7.47888L2.02181 11.9406C1.99599 11.9758 1.99599 12.0237 2.02181 12.0589L7.47888 19.502H21.8975C21.9527 19.502 21.9976 19.4571 21.9976 19.4019V4.59813C21.9976 4.54285 21.9527 4.49805 21.8975 4.49805Z',
  d14: 'M22.75 4.5C22.75 4.08579 22.4142 3.75 22 3.75H7.11995L1.3952 11.5565C1.2016 11.8205 1.2016 12.1795 1.3952 12.4435L7.11995 20.25H22C22.4142 20.25 22.75 19.9142 22.75 19.5V4.5ZM10.009 11H8V13H10.009V11ZM12 11H14.009V13H12V11ZM18.009 11H16V13H18.009V11Z',
} as const;

export const IconPinCodeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-code-stroke-rounded IconPinCodeStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPinCodeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-code-duotone-rounded IconPinCodeDuotoneRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPinCodeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-code-twotone-rounded IconPinCodeTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPinCodeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-code-solid-rounded IconPinCodeSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPinCodeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-code-bulk-rounded IconPinCodeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconPinCodeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-code-stroke-sharp IconPinCodeStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPinCodeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-code-solid-sharp IconPinCodeSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPinCode: TheIconSelfPack = {
  name: 'PinCode',
  StrokeRounded: IconPinCodeStrokeRounded,
  DuotoneRounded: IconPinCodeDuotoneRounded,
  TwotoneRounded: IconPinCodeTwotoneRounded,
  SolidRounded: IconPinCodeSolidRounded,
  BulkRounded: IconPinCodeBulkRounded,
  StrokeSharp: IconPinCodeStrokeSharp,
  SolidSharp: IconPinCodeSolidSharp,
};