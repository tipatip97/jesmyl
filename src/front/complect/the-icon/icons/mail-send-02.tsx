import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12.5001C22 12.0087 21.9947 11.0172 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C9.90159 20.4836 10.7011 20.4954 11.5 20.4989',
  d2: 'M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5',
  d3: 'M22 17.5L14 17.5M22 17.5C22 16.7998 20.0057 15.4915 19.5 15M22 17.5C22 18.2002 20.0057 19.5085 19.5 20',
  d4: 'M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z',
  d5: 'M8.95499 2.7868C10.908 2.73773 12.842 2.73773 14.795 2.7868L14.8532 2.78826C16.378 2.82655 17.605 2.85736 18.5883 3.02861C19.6178 3.2079 20.4545 3.55178 21.1614 4.26134C21.8653 4.96792 22.2074 5.79261 22.3832 6.80541C22.5507 7.76979 22.5762 8.96682 22.6078 10.4497L22.6091 10.5084C22.6233 11.1751 22.6188 12.2478 22.6078 13.1832C22.6017 13.7114 22.5986 13.9755 22.4307 14.0562C22.2628 14.1368 22.0526 13.9725 21.6324 13.6439C21.3512 13.4241 21.0945 13.2283 21.0039 13.1737L21.0005 13.1717L20.9912 13.166C20.8274 13.0661 19.7026 12.3802 18.3958 13.0141C17.5994 13.4004 17.2304 14.0362 17.0585 14.5171C16.9681 14.77 16.9228 14.8964 16.8451 14.9512C16.7674 15.0059 16.6528 15.0059 16.4235 15.0059H13.875C12.4943 15.0059 11.375 16.1252 11.375 17.5059C11.375 18.8866 12.4943 20.0059 13.875 20.0059L16.5396 20.0059C16.676 20.0059 16.7442 20.0059 16.7953 20.0252C16.8538 20.0472 16.8937 20.0774 16.9309 20.1277C16.9633 20.1716 16.9748 20.2122 16.9979 20.2935C17.1008 20.6568 17.1522 20.8385 17.135 20.9134C17.1138 21.0056 17.0791 21.0537 16.9982 21.1028C16.9325 21.1426 16.8113 21.1479 16.569 21.1585C16.0225 21.1824 15.4211 21.1975 14.7952 21.2132L14.795 21.2132C12.842 21.2623 10.908 21.2623 8.95499 21.2132L8.89677 21.2117C7.37197 21.1735 6.14501 21.1426 5.1617 20.9714C4.1322 20.7921 3.29548 20.4482 2.58862 19.7387C1.88472 19.0321 1.54264 18.2074 1.36676 17.1946C1.19929 16.2302 1.17379 15.0332 1.14219 13.5503L1.14094 13.4916C1.11969 12.4953 1.11969 11.5047 1.14093 10.5084L1.14219 10.4496C1.17378 8.9668 1.19929 7.76977 1.36676 6.8054C1.54264 5.79259 1.88471 4.9679 2.58862 4.26132C3.29548 3.55177 4.1322 3.20789 5.1617 3.0286C6.14502 2.85735 7.372 2.82654 8.89682 2.78826L8.95499 2.7868ZM7.25682 7.85439C6.90027 7.64358 6.44033 7.76174 6.22952 8.11829C6.01871 8.47485 6.13686 8.93479 6.49341 9.1456L9.43543 10.885C10.3063 11.3999 11.0577 11.75 11.8751 11.75C12.6925 11.75 13.444 11.3999 14.3148 10.885L17.2568 9.1456C17.6134 8.93479 17.7315 8.47485 17.5207 8.11829C17.3099 7.76174 16.85 7.64358 16.4934 7.85439L13.5514 9.59382C12.707 10.093 12.2581 10.25 11.8751 10.25C11.4921 10.25 11.0432 10.093 10.1988 9.59382L7.25682 7.85439Z',
  d6: 'M13.875 18.5059C13.3227 18.5059 12.875 18.0581 12.875 17.5059C12.875 16.9536 13.3227 16.5059 13.875 16.5059L18.375 16.5059L18.375 15.9116C18.3749 15.736 18.3747 15.5203 18.3968 15.3439L18.3972 15.3405C18.413 15.2141 18.4848 14.638 19.0504 14.3637C19.6173 14.0887 20.1174 14.3907 20.2256 14.456L20.2296 14.4584C20.3826 14.5506 20.5535 14.6848 20.6941 14.7951L20.7243 14.8188C21.1002 15.1135 21.5844 15.4954 21.9754 15.8759C22.1705 16.0657 22.3717 16.283 22.5306 16.5139C22.6718 16.7191 22.875 17.0693 22.875 17.5C22.875 17.9307 22.6718 18.2809 22.5306 18.4861C22.3717 18.717 22.1705 18.9343 21.9754 19.1241C21.5844 19.5046 21.1002 19.8865 20.7243 20.1812L20.6941 20.2049C20.5535 20.3152 20.3827 20.4494 20.2296 20.5416L20.2256 20.544C20.1174 20.6093 19.6172 20.9113 19.0504 20.6363C18.4848 20.362 18.413 19.7859 18.3972 19.6595L18.3968 19.6561C18.3747 19.4797 18.3749 19.264 18.375 19.0884L18.375 18.5059L13.875 18.5059Z',
  d7: 'M14.795 2.78681C12.842 2.73773 10.908 2.73773 8.95499 2.7868L8.89682 2.78826C7.372 2.82655 6.14502 2.85735 5.1617 3.0286C4.1322 3.20789 3.29548 3.55177 2.58862 4.26132C1.88471 4.9679 1.54264 5.7926 1.36676 6.8054C1.19929 7.76978 1.17378 8.9668 1.14219 10.4496L1.14093 10.5084C1.11969 11.5047 1.11969 12.4953 1.14094 13.4916L1.14219 13.5504C1.17379 15.0332 1.19929 16.2302 1.36676 17.1946C1.54264 18.2074 1.88472 19.0321 2.58862 19.7387C3.29548 20.4482 4.1322 20.7921 5.1617 20.9714C6.14501 21.1426 7.37197 21.1735 8.89677 21.2117L8.95499 21.2132C10.908 21.2623 12.842 21.2623 14.795 21.2132C15.421 21.1975 16.0224 21.1824 16.569 21.1585C16.8113 21.1479 16.9325 21.1426 16.9982 21.1028C17.0791 21.0537 17.1138 21.0056 17.135 20.9134C17.1522 20.8385 17.1008 20.6568 16.9979 20.2935C16.9748 20.2122 16.9633 20.1716 16.9309 20.1277C16.8937 20.0774 16.8538 20.0472 16.7953 20.0252C16.7442 20.0059 16.676 20.0059 16.5396 20.0059L13.875 20.0059C12.4943 20.0059 11.375 18.8866 11.375 17.5059C11.375 16.1252 12.4943 15.0059 13.875 15.0059H16.4235C16.6528 15.0059 16.7674 15.0059 16.8451 14.9512C16.9228 14.8964 16.9681 14.77 17.0585 14.5171C17.2304 14.0362 17.5994 13.4004 18.3958 13.0141C19.7026 12.3802 20.8274 13.0661 20.9912 13.166L21.0005 13.1717L21.0039 13.1737C21.0945 13.2283 21.3512 13.4241 21.6324 13.6439C22.0526 13.9725 22.2628 14.1368 22.4307 14.0562C22.5986 13.9755 22.6017 13.7114 22.6078 13.1832C22.6188 12.2478 22.6233 11.1751 22.6091 10.5084L22.6078 10.4497C22.5762 8.96683 22.5507 7.76979 22.3832 6.80542C22.2074 5.79261 21.8653 4.96792 21.1614 4.26134C20.4545 3.55179 19.6178 3.20791 18.5883 3.02862C17.605 2.85737 16.378 2.82656 14.8532 2.78827L14.795 2.78681Z',
  d8: 'M6.01435 7.99122C6.29543 7.51581 6.90869 7.35828 7.3841 7.63935L10.3261 9.37878C11.1664 9.87562 11.5648 10.0002 11.8752 10.0002C12.1855 10.0002 12.5839 9.87562 13.4242 9.37878L16.3662 7.63935C16.8416 7.35828 17.4549 7.51581 17.736 7.99122C18.017 8.46663 17.8595 9.07988 17.3841 9.36096L14.4421 11.1004C13.5666 11.618 12.7648 12.0002 11.8752 12.0002C10.9855 12.0002 10.1838 11.618 9.30823 11.1004L6.36622 9.36096C5.89081 9.07988 5.73328 8.46663 6.01435 7.99122Z',
  d9: 'M22 12.5V3.5H2V20.5H12',
  d10: 'M6 8L12 12L18 8',
  d11: 'M14 17.5L21.5998 17.5M19 20.5L22 17.5L19 14.5',
  d12: 'M1.25 3C1.25 2.58579 1.58579 2.25 2 2.25H22C22.4142 2.25 22.75 2.58579 22.75 3V16.275L19.043 12.5681L15.8611 15.75L15.904 15.7929H12.0859V20.75H2C1.58579 20.75 1.25 20.4142 1.25 20V3ZM6.41603 6.87598L5.58398 8.12405L12 12.4014L18.416 8.12405L17.584 6.87598L12 10.5986L6.41603 6.87598Z',
  d13: 'M18.9217 17.043L17.6288 15.7502L19.043 14.3359L22.7502 18.043L19.043 21.7502L17.6288 20.3359L18.9217 19.043H13.3359V17.043L18.9217 17.043Z',
};

export const IconMailSend02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-send-02-stroke-rounded IconMailSend02StrokeRounded"
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

export const IconMailSend02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-send-02-duotone-rounded IconMailSend02DuotoneRounded"
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

export const IconMailSend02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-send-02-twotone-rounded IconMailSend02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailSend02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-send-02-solid-rounded IconMailSend02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailSend02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-send-02-bulk-rounded IconMailSend02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailSend02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-send-02-stroke-sharp IconMailSend02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailSend02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-send-02-solid-sharp IconMailSend02SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfMailSend02: TheIconSelfPack = {
  name: 'MailSend02',
  StrokeRounded: IconMailSend02StrokeRounded,
  DuotoneRounded: IconMailSend02DuotoneRounded,
  TwotoneRounded: IconMailSend02TwotoneRounded,
  SolidRounded: IconMailSend02SolidRounded,
  BulkRounded: IconMailSend02BulkRounded,
  StrokeSharp: IconMailSend02StrokeSharp,
  SolidSharp: IconMailSend02SolidSharp,
};