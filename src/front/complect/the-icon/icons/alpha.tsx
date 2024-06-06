import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.3943 4C17.5941 5.85 17.3444 10 16.1706 13.275C14.7721 17.5 12.6743 19.35 11.0011 19.8C7.75452 20.6731 5.03241 18.45 3.88362 15.975C2.40994 12.8 2.80975 9.125 4.8576 6.475C6.90545 3.825 10.7763 2.675 13.6483 6.25C14.7471 7.925 15.2216 9.725 15.4464 11.175C15.8959 12.775 16.1206 16.775 17.2944 18.725C18.2184 20.175 19.6419 20.1 20.1664 19.875C20.516 19.7 21 19.32 21 18.22',
  d2: 'M3 12C3 16.4183 5.96906 20 9.63158 20C12.6376 20 14.7004 17.2942 15.9501 13.9267C15.2328 9.61565 14.5637 4.50575 9.63158 4C5.96906 4 3 7.58172 3 12Z',
  d3: 'M17.4141 4C17.6128 5.85 17.3645 10 16.1971 13.275M21 18.22C21 19.32 20.5187 19.7 20.171 19.875C19.6494 20.1 18.2337 20.175 17.3148 18.725C16.1474 16.775 15.924 12.775 15.4769 11.175C15.2534 9.725 14.7815 7.925 13.6887 6.25C12.3675 4.59632 10.8338 3.95365 9.36523 4.00278',
  d4: 'M17.3152 4C17.5139 5.85 17.2656 10 16.0982 13.275C14.7074 17.5 12.6211 19.35 10.9571 19.8C7.7284 20.6731 5.02124 18.45 3.87877 15.975C2.41318 12.8 2.8108 9.125 4.84739 6.475C6.88399 3.825 10.7336 2.675 13.5898 6.25C14.6826 7.925 15.1544 9.725 15.378 11.175C15.825 12.775 16.0485 16.775 17.2159 18.725C18.1348 20.175 19.5505 20.1 20.0721 19.875C20.4198 19.7 20.9011 19.32 20.9011 18.22',
  d5: 'M17.3159 3.0036C17.8663 2.95716 18.35 3.36565 18.3965 3.91598C18.6263 6.64045 18.1928 10.6171 16.9802 14.02C17.1916 15.2757 17.4009 16.3842 17.728 17.2832C17.9619 17.9261 18.2223 18.3555 18.5038 18.6192C18.7568 18.8562 19.0679 19.0001 19.5376 19.0001C19.6612 19.0001 19.7246 18.9753 19.754 18.96C19.7836 18.9446 19.8145 18.9202 19.8479 18.8724C19.9257 18.7608 20 18.5396 20 18.2223C20 17.67 20.4477 17.2223 21 17.2223C21.5523 17.2223 22 17.67 22 18.2223C22 18.7939 21.8754 19.4615 21.4882 20.0166C21.0675 20.6198 20.3947 21.0001 19.5376 21.0001C18.573 21.0001 17.7695 20.6717 17.1366 20.0789C16.5321 19.5126 16.135 18.7546 15.8485 17.9669C15.7448 17.6819 15.6512 17.379 15.5654 17.0629C14.2204 19.2894 12.2905 21.0001 9.63158 21.0001C5.24938 21.0001 2 16.7868 2 12.0001C2 7.21327 5.24938 3.00006 9.63158 3.00006C9.66565 3.00006 9.6997 3.0018 9.73359 3.00527C12.2658 3.26494 13.8734 4.59795 14.8964 6.37645C15.4318 7.30735 15.8094 8.36307 16.0967 9.44478C16.4334 7.46836 16.5273 5.55076 16.4035 4.08413C16.3571 3.5338 16.7656 3.05003 17.3159 3.0036ZM14.919 13.8254C14.9061 13.7472 14.8933 13.6691 14.8804 13.5911C14.8202 13.225 14.7604 12.8611 14.6984 12.5046C14.36 10.5568 13.9519 8.7456 13.1627 7.37366C12.4193 6.08133 11.3522 5.1967 9.58117 5.00035C6.6581 5.0338 4 7.97342 4 12.0001C4 16.0498 6.68874 19.0001 9.63158 19.0001C11.8838 19.0001 13.6859 17.0083 14.919 13.8254Z',
  d6: 'M16.9799 14.0199C17.1914 15.2756 17.4007 16.3841 17.7277 17.2831C17.9616 17.926 18.222 18.3555 18.5035 18.6191C18.7565 18.8561 19.0676 19 19.5373 19C19.6609 19 19.7243 18.9752 19.7537 18.96C19.7833 18.9446 19.8142 18.9202 19.8476 18.8723C19.9254 18.7608 19.9997 18.5395 19.9997 18.2222C19.9997 17.6699 20.4474 17.2222 20.9997 17.2222C21.552 17.2222 21.9997 17.6699 21.9997 18.2222C21.9997 18.7938 21.8752 19.4615 21.4879 20.0166C21.0672 20.6198 20.3944 21 19.5373 21C18.5727 21 17.7693 20.6717 17.1363 20.0788C16.5318 19.5126 16.1348 18.7546 15.8482 17.9669C15.7445 17.6818 15.6509 17.3789 15.5651 17.0628C15.3386 16.3396 15.0141 14.4467 14.8801 13.5908C14.8199 13.2248 14.7601 12.861 14.6981 12.5045C14.3597 10.5567 13.9516 8.74555 13.1624 7.3736C12.4191 6.08127 11.352 5.19664 9.5809 5.00029C6.9054 5.03091 4.45187 7.49629 4.05548 11.0014C3.99342 11.5502 3.55202 12 2.99973 12C2.44745 12 1.99479 11.5509 2.04709 11.0011C2.46177 6.64216 5.5569 3 9.63131 3C9.66538 3 9.69943 3.00174 9.73332 3.00522C12.2656 3.26488 13.8731 4.5979 14.8961 6.3764C15.4316 7.30729 15.8091 8.36301 16.0965 9.44472C16.2718 10.3412 16.6941 12.5113 16.9799 14.0199Z',
  d7: 'M17.4395 4.00879C17.6445 6.58206 17.236 10.6043 15.9804 13.9709M15.9804 13.9709C14.7661 17.2268 12.7593 19.8694 9.74878 19.9946C5.94813 19.9946 2.88438 16.175 3.05151 11.9555C2.88441 8.5835 5.1731 4.13052 9.50585 4.00879C13.6332 4.19675 15.1144 7.96797 15.8721 13.2609C15.9066 13.5014 15.9427 13.7383 15.9804 13.9709ZM15.9804 13.9709C16.2532 15.652 16.6124 17.1125 17.0572 18.1456C18.1003 20.5682 21.0428 20.662 21.0428 18.2295',
  d8: 'M9.58117 5.00029C6.6581 5.03375 4 7.97336 4 12C4 16.0498 6.68874 19 9.63158 19C11.8838 19 13.6859 17.0082 14.919 13.8254C14.9061 13.7472 14.8933 13.669 14.8804 13.591C14.8202 13.2249 14.7604 12.8611 14.6984 12.5045C14.36 10.5567 13.9519 8.74555 13.1627 7.3736C12.4193 6.08127 11.3522 5.19664 9.58117 5.00029ZM16.0967 9.44472C15.8094 8.36301 15.4318 7.30729 14.8964 6.3764C13.8734 4.5979 12.2658 3.26488 9.73359 3.00522C9.6997 3.00174 9.66565 3 9.63158 3C5.24938 3 2 7.21322 2 12C2 16.7868 5.24938 21 9.63158 21C12.2905 21 14.2204 19.2893 15.5654 17.0628C15.6512 17.3789 15.7448 17.6818 15.8485 17.9669C16.135 18.7546 16.5321 19.5126 17.1366 20.0788C17.7695 20.6717 18.573 21 19.5376 21C20.3947 21 21.0675 20.6198 21.4882 20.0166C21.8754 19.4615 22 18.7938 22 18.2222H20C20 18.5395 19.9257 18.7608 19.8479 18.8723C19.8145 18.9202 19.7836 18.9446 19.754 18.96C19.7246 18.9752 19.6612 19 19.5376 19C19.0679 19 18.7568 18.8561 18.5038 18.6191C18.2223 18.3555 17.9619 17.926 17.728 17.2831C17.4009 16.3841 17.1916 15.2756 16.9802 14.0199C18.1928 10.6171 18.6263 6.64039 18.3965 3.91592L16.4035 4.08408C16.5273 5.5507 16.4334 7.46831 16.0967 9.44472Z',
};

export const IconAlphaStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alpha-stroke-rounded IconAlphaStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphaDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alpha-duotone-rounded IconAlphaDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphaTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alpha-twotone-rounded IconAlphaTwotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphaSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alpha-solid-rounded IconAlphaSolidRounded"
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

export const IconAlphaBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alpha-bulk-rounded IconAlphaBulkRounded"
    >
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

export const IconAlphaStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alpha-stroke-sharp IconAlphaStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphaSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alpha-solid-sharp IconAlphaSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAlpha: TheIconSelfPack = {
  name: 'Alpha',
  StrokeRounded: IconAlphaStrokeRounded,
  DuotoneRounded: IconAlphaDuotoneRounded,
  TwotoneRounded: IconAlphaTwotoneRounded,
  SolidRounded: IconAlphaSolidRounded,
  BulkRounded: IconAlphaBulkRounded,
  StrokeSharp: IconAlphaStrokeSharp,
  SolidSharp: IconAlphaSolidSharp,
};