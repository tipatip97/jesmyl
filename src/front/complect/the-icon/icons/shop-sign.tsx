import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.07007 2.5H15.7559C16.9383 2.5 17.5295 2.5 17.9484 2.8352C18.3673 3.1704 18.4891 3.74092 18.7327 4.88197L21.7654 19.088C22.0033 20.2028 22.1223 20.7602 21.818 21.1301C21.5136 21.5 20.936 21.5 19.7808 21.5H13.2369C12.4673 21.5 12.0825 21.5 11.806 21.2844C11.5296 21.0687 11.4409 20.6995 11.2635 19.9609L7.07007 2.5ZM7.07007 2.5L2 21.5',
  d2: 'M4 16H10',
  d3: 'M15.7562 2.5H7.07031L11.2638 19.9609C11.4411 20.6995 11.5298 21.0687 11.8063 21.2844C12.0828 21.5 12.4676 21.5 13.2372 21.5H19.7811C20.9363 21.5 21.5139 21.5 21.8182 21.1301C22.1226 20.7602 22.0036 20.2028 21.7656 19.088L18.733 4.88197C18.4894 3.74092 18.3676 3.1704 17.9487 2.8352C17.5298 2.5 16.9386 2.5 15.7562 2.5Z',
  d4: 'M2 21.5L7.07007 2.5L11.2635 19.9609C11.4409 20.6995 11.5296 21.0687 11.806 21.2844',
  d5: 'M10.3408 20.0429C10.4182 20.3653 10.4954 20.6864 10.5936 20.9496C10.706 21.2505 10.88 21.5759 11.2097 21.8328C11.5382 22.0887 11.8959 22.1789 12.214 22.2166C12.4943 22.2499 12.8272 22.2498 13.1644 22.2498H13.1644H13.1645L13.2091 22.2498H19.6042L19.6645 22.2498C20.1767 22.2498 20.6596 22.2499 21.0483 22.195C21.4767 22.1345 21.9774 21.9847 22.3497 21.5327C22.7244 21.0778 22.7718 20.5567 22.7432 20.1241C22.7175 19.7352 22.6174 19.2672 22.5121 18.775L22.4994 18.7152L19.5247 4.79634L19.5247 4.7963C19.4152 4.28352 19.3151 3.81504 19.1844 3.43806C19.0403 3.02223 18.8258 2.61234 18.4241 2.2912C18.0237 1.97116 17.5763 1.85054 17.1388 1.79791C16.7397 1.74991 16.2558 1.74995 15.7226 1.75L7.18243 1.75001C6.73974 1.75001 6.35234 2.04725 6.23821 2.4745L1.2834 21.0219C1.14425 21.5428 1.45419 22.0778 1.97567 22.2168C2.49715 22.3558 3.0327 22.0462 3.17185 21.5253L4.38075 17H9.60921L10.3408 20.0429ZM9.12835 15L7.13257 6.69905L4.91503 15H9.12835Z',
  d6: 'M10.5935 20.9496C10.4953 20.6864 10.4181 20.3653 10.3407 20.0429L7.13245 6.69905L3.17173 21.5253C3.03258 22.0462 2.49703 22.3558 1.97554 22.2168C1.45406 22.0778 1.14413 21.5428 1.28328 21.0219L6.23808 2.4745C6.35222 2.04725 6.73962 1.75001 7.18231 1.75001L15.7225 1.75C16.2557 1.74995 16.7396 1.74991 17.1387 1.79791C17.5762 1.85054 18.0235 1.97116 18.4239 2.2912C18.8257 2.61234 19.0402 3.02223 19.1843 3.43806C19.315 3.81504 19.415 4.28352 19.5246 4.7963L19.5246 4.79634L22.4992 18.7152L22.512 18.775C22.6173 19.2672 22.7174 19.7352 22.7431 20.1241C22.7717 20.5567 22.7243 21.0778 22.3496 21.5327C21.9773 21.9847 21.4766 22.1345 21.0482 22.195C20.6595 22.2499 20.1766 22.2498 19.6644 22.2498L19.6041 22.2498H13.209L13.1643 22.2498H13.1643C12.8271 22.2498 12.4942 22.2499 12.2138 22.2166C11.8958 22.1789 11.5381 22.0887 11.2096 21.8328C10.8798 21.5759 10.7058 21.2505 10.5935 20.9496Z',
  d7: 'M4.38086 17H9.60932L9.12846 15H4.91514L4.38086 17Z',
  d8: 'M3.75586 15.4575H10.7559',
  d9: 'M1.99805 21.9995L7.18348 2.00049M7.18348 2.00049H18.0223C18.0269 2.00049 18.0309 2.00385 18.0319 2.00856L22.0027 21.2904C22.004 21.2968 21.9993 21.3028 21.9931 21.3028H12.1311L7.18348 2.00049Z',
  d10: 'M18.8591 2.51699C18.7649 2.06998 18.3699 1.75 17.9123 1.75H6.52369L1.25 21.7583L3.12134 22.25L4.571 16.75H9.96808L11.3613 22.036H21.7825C22.074 22.036 22.3501 21.9047 22.5338 21.6786C22.7175 21.4526 22.7893 21.1558 22.7292 20.871L18.8591 2.51699ZM9.44093 14.75L7.26954 6.51177L5.09815 14.75H9.44093Z',
} as const;

export const IconShopSignStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shop-sign-stroke-rounded IconShopSignStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconShopSignDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shop-sign-duotone-rounded IconShopSignDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShopSignTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shop-sign-twotone-rounded IconShopSignTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShopSignSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shop-sign-solid-rounded IconShopSignSolidRounded"
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

export const IconShopSignBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shop-sign-bulk-rounded IconShopSignBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShopSignStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shop-sign-stroke-sharp IconShopSignStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShopSignSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shop-sign-solid-sharp IconShopSignSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShopSign: TheIconSelfPack = {
  name: 'ShopSign',
  StrokeRounded: IconShopSignStrokeRounded,
  DuotoneRounded: IconShopSignDuotoneRounded,
  TwotoneRounded: IconShopSignTwotoneRounded,
  SolidRounded: IconShopSignSolidRounded,
  BulkRounded: IconShopSignBulkRounded,
  StrokeSharp: IconShopSignStrokeSharp,
  SolidSharp: IconShopSignSolidSharp,
};