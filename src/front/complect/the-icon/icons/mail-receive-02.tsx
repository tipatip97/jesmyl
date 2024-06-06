import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12.5001C22 12.0087 21.9947 11.0172 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C9.90159 20.4836 10.7011 20.4954 11.5 20.4989',
  d2: 'M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5',
  d3: 'M14 17.5L22 17.5M14 17.5C14 16.7998 15.9943 15.4915 16.5 15M14 17.5C14 18.2002 15.9943 19.5085 16.5 20',
  d4: 'M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z',
  d5: 'M8.95499 2.7868C10.908 2.73773 12.842 2.73773 14.795 2.7868L14.8532 2.78826C16.378 2.82655 17.605 2.85736 18.5883 3.02861C19.6178 3.20791 20.4545 3.55178 21.1614 4.26134C21.8653 4.96792 22.2074 5.79261 22.3832 6.80542C22.5507 7.76979 22.5762 8.96682 22.6078 10.4497L22.6091 10.5084C22.6303 11.5047 22.6303 12.4953 22.6091 13.4916C22.6091 13.4917 22.5978 14.0219 22.5849 14.5101C22.5775 14.7883 22.5738 14.9274 22.4837 15.0129C22.3936 15.0984 22.2538 15.0948 21.9741 15.0875L19.3132 15.0187C19.0894 15.0129 18.9775 15.01 18.9021 14.9551C18.8266 14.9002 18.783 14.7766 18.6959 14.5293C18.5258 14.0471 18.1574 13.4037 17.3542 13.0141C16.0474 12.3802 14.9226 13.0661 14.7588 13.166L14.7492 13.1719L14.7461 13.1737C14.5114 13.3151 14.2771 13.4994 14.1501 13.5993L14.1002 13.6384C13.7332 13.9261 13.1861 14.3557 12.7286 14.8008C12.5005 15.0227 12.2216 15.3178 11.9836 15.6638C11.789 15.9467 11.375 16.6082 11.375 17.5C11.375 18.3918 11.789 19.0534 11.9836 19.3363C12.2216 19.6823 12.5005 19.9774 12.7286 20.1993C13.1762 20.6348 13.4 20.8525 13.3565 21.0211C13.3497 21.0475 13.3405 21.0701 13.3271 21.0938C13.2414 21.2454 12.9431 21.2466 12.3465 21.249C11.2174 21.2536 10.0894 21.2417 8.95499 21.2132L8.89677 21.2117C7.37197 21.1735 6.14501 21.1426 5.1617 20.9714C4.1322 20.7921 3.29548 20.4482 2.58862 19.7387C1.88472 19.0321 1.54264 18.2074 1.36676 17.1946C1.19929 16.2302 1.17379 15.0332 1.14219 13.5503L1.14094 13.4916C1.11969 12.4953 1.11969 11.5047 1.14093 10.5084L1.14219 10.4496C1.17378 8.9668 1.19929 7.76977 1.36676 6.8054C1.54264 5.79259 1.88471 4.9679 2.58862 4.26132C3.29548 3.55177 4.1322 3.20789 5.1617 3.0286C6.14502 2.85735 7.372 2.82654 8.89682 2.78826L8.95499 2.7868ZM7.25682 7.85439C6.90027 7.64358 6.44033 7.76174 6.22952 8.11829C6.01871 8.47485 6.13686 8.93479 6.49341 9.1456L9.43543 10.885C10.3063 11.3999 11.0577 11.75 11.8751 11.75C12.6925 11.75 13.444 11.3999 14.3148 10.885L17.2568 9.1456C17.6134 8.93479 17.7315 8.47485 17.5207 8.11829C17.3099 7.76174 16.85 7.64358 16.4934 7.85439L13.5514 9.59382C12.707 10.093 12.2581 10.25 11.8751 10.25C11.4921 10.25 11.0432 10.093 10.1988 9.59382L7.25682 7.85439Z',
  d6: 'M21.875 18.5059C22.4273 18.5059 22.875 18.0581 22.875 17.5059C22.875 16.9536 22.4273 16.5059 21.875 16.5059L17.375 16.5059L17.375 15.9116C17.3751 15.736 17.3753 15.5203 17.3532 15.3439L17.3528 15.3405C17.337 15.2141 17.2652 14.638 16.6996 14.3637C16.1327 14.0887 15.6326 14.3907 15.5244 14.456L15.5204 14.4584C15.3674 14.5506 15.1965 14.6848 15.0559 14.7951L15.0257 14.8188C14.6498 15.1135 14.1656 15.4954 13.7746 15.8759C13.5795 16.0657 13.3783 16.283 13.2194 16.5139C13.0782 16.7191 12.875 17.0693 12.875 17.5C12.875 17.9307 13.0782 18.2809 13.2194 18.4861C13.3783 18.717 13.5795 18.9343 13.7746 19.1241C14.1656 19.5046 14.6498 19.8865 15.0257 20.1812L15.0559 20.2049C15.1965 20.3152 15.3673 20.4494 15.5204 20.5416L15.5244 20.544C15.6326 20.6093 16.1328 20.9113 16.6996 20.6363C17.2652 20.362 17.337 19.7859 17.3528 19.6595L17.3532 19.6561C17.3753 19.4797 17.3751 19.264 17.375 19.0884L17.375 18.5059L21.875 18.5059Z',
  d7: 'M14.795 2.78681C12.842 2.73773 10.908 2.73773 8.95499 2.7868L8.89682 2.78826C7.372 2.82655 6.14502 2.85735 5.1617 3.0286C4.1322 3.20789 3.29548 3.55177 2.58862 4.26132C1.88471 4.9679 1.54264 5.7926 1.36676 6.8054C1.19929 7.76978 1.17378 8.9668 1.14219 10.4496L1.14093 10.5084C1.11969 11.5047 1.11969 12.4953 1.14094 13.4916L1.14219 13.5504C1.17379 15.0332 1.19929 16.2302 1.36676 17.1946C1.54264 18.2074 1.88472 19.0321 2.58862 19.7387C3.29548 20.4482 4.1322 20.7921 5.1617 20.9714C6.14501 21.1426 7.37197 21.1735 8.89677 21.2117L8.95499 21.2132C10.0894 21.2417 11.2174 21.2537 12.3465 21.249C12.9431 21.2466 13.2414 21.2454 13.3271 21.0938C13.3405 21.0701 13.3497 21.0475 13.3565 21.0211C13.4 20.8525 13.1762 20.6348 12.7286 20.1993C12.5005 19.9774 12.2216 19.6823 11.9836 19.3363C11.789 19.0534 11.375 18.3918 11.375 17.5C11.375 16.6082 11.789 15.9467 11.9836 15.6638C12.2216 15.3178 12.5005 15.0227 12.7286 14.8008C13.1861 14.3557 13.7332 13.9261 14.1002 13.6384L14.1501 13.5993C14.2771 13.4994 14.5114 13.3152 14.7461 13.1737L14.7492 13.1719L14.7588 13.166C14.9226 13.0661 16.0474 12.3802 17.3542 13.0141C18.1574 13.4037 18.5258 14.0471 18.6959 14.5293C18.783 14.7766 18.8266 14.9002 18.9021 14.9551C18.9775 15.01 19.0894 15.0129 19.3132 15.0187L21.9741 15.0876C22.2538 15.0948 22.3936 15.0984 22.4837 15.0129C22.5738 14.9274 22.5775 14.7883 22.5849 14.5101C22.5978 14.0219 22.6091 13.4917 22.6091 13.4916C22.6303 12.4953 22.6303 11.5047 22.6091 10.5084L22.6078 10.4497C22.5762 8.96683 22.5507 7.76979 22.3832 6.80542C22.2074 5.79261 21.8653 4.96792 21.1614 4.26134C20.4545 3.55179 19.6178 3.20791 18.5883 3.02862C17.605 2.85737 16.378 2.82656 14.8532 2.78827L14.795 2.78681Z',
  d8: 'M6.01435 7.99122C6.29543 7.51581 6.90869 7.35828 7.3841 7.63935L10.3261 9.37878C11.1664 9.87562 11.5648 10.0002 11.8752 10.0002C12.1855 10.0002 12.5839 9.87562 13.4242 9.37878L16.3662 7.63935C16.8416 7.35828 17.4549 7.51581 17.736 7.99122C18.017 8.46663 17.8595 9.07988 17.3841 9.36096L14.4421 11.1004C13.5666 11.618 12.7648 12.0002 11.8752 12.0002C10.9855 12.0002 10.1838 11.618 9.30823 11.1004L6.36622 9.36096C5.89081 9.07988 5.73328 8.46663 6.01435 7.99122Z',
  d9: 'M22 13.5V3.5H2V20.5H12',
  d10: 'M6 8L12 12L18 8',
  d11: 'M22 17.5L14.4245 17.5M17 20.5L14 17.5L17 14.5',
  d12: 'M1.25 3C1.25 2.58579 1.58579 2.25 2 2.25H22C22.4142 2.25 22.75 2.58579 22.75 3V15.7929H20.1823L17.0432 12.5681L11.5684 18.0429L14.2754 20.75H2C1.58579 20.75 1.25 20.4142 1.25 20V3ZM6.41603 6.87598L5.58398 8.12405L12 12.4014L18.416 8.12405L17.584 6.87598L12 10.5986L6.41603 6.87598Z',
  d13: 'M17.043 14.3359L18.4573 15.7502L17.1644 17.043L22.7502 17.043V19.043L17.1644 19.043L18.4573 20.3359L17.043 21.7502L13.3359 18.043L17.043 14.3359Z',
};

export const IconMailReceive02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-receive-02-stroke-rounded IconMailReceive02StrokeRounded"
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

export const IconMailReceive02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-receive-02-duotone-rounded IconMailReceive02DuotoneRounded"
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

export const IconMailReceive02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-receive-02-twotone-rounded IconMailReceive02TwotoneRounded"
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

export const IconMailReceive02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-receive-02-solid-rounded IconMailReceive02SolidRounded"
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

export const IconMailReceive02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-receive-02-bulk-rounded IconMailReceive02BulkRounded"
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

export const IconMailReceive02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-receive-02-stroke-sharp IconMailReceive02StrokeSharp"
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

export const IconMailReceive02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-receive-02-solid-sharp IconMailReceive02SolidSharp"
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

export const iconPackOfMailReceive02: TheIconSelfPack = {
  name: 'MailReceive02',
  StrokeRounded: IconMailReceive02StrokeRounded,
  DuotoneRounded: IconMailReceive02DuotoneRounded,
  TwotoneRounded: IconMailReceive02TwotoneRounded,
  SolidRounded: IconMailReceive02SolidRounded,
  BulkRounded: IconMailReceive02BulkRounded,
  StrokeSharp: IconMailReceive02StrokeSharp,
  SolidSharp: IconMailReceive02SolidSharp,
};