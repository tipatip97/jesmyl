import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21.3006 6.05187C21.1484 5.22701 20.7411 4.45623 20.1372 3.85008C19.5309 3.24641 18.7599 2.83927 17.9348 2.68704C13.7379 1.98816 9.32857 3.26088 6.29895 6.28553C3.27 9.30951 1.9905 13.7155 2.68454 17.9122C2.83679 18.7371 3.24405 19.5079 3.84791 20.114C4.45425 20.7177 5.22527 21.1248 6.0504 21.2771C10.2213 22.0738 14.6996 20.7027 17.6917 17.6794C20.7496 14.6729 22.0291 10.2497 21.3006 6.05187Z',
  d2: 'M4 20L20 4',
  d3: 'M9 12L12 15M12 9L15 12',
  d4: 'M21.3006 6.05187C21.1484 5.22701 20.7411 4.45623 20.1373 3.85008C19.5309 3.24641 18.7599 2.83927 17.9348 2.68704C13.7379 1.98816 9.32857 3.26088 6.29895 6.28553C3.27 9.30951 1.9905 13.7155 2.68454 17.9122C2.83679 18.7371 3.24405 19.5079 3.84791 20.114C4.45425 20.7177 5.22527 21.1248 6.0504 21.2771C10.2213 22.0738 14.6996 20.7027 17.6917 17.6794C20.7496 14.6729 22.0292 10.2497 21.3006 6.05187Z',
  d5: 'M21.3004 6.05187C21.1481 5.22701 20.7409 4.45623 20.137 3.85008C19.5307 3.24641 18.7596 2.83927 17.9345 2.68704C13.7377 1.98816 9.32832 3.26088 6.29871 6.28553C3.26975 9.30951 1.99026 13.7155 2.68429 17.9122C2.83655 18.7371 3.24381 19.5079 3.84767 20.114C4.45401 20.7177 5.22503 21.1248 6.05015 21.2771C10.221 22.0738 14.6994 20.7027 17.6915 17.6794C20.7493 14.6729 22.0289 10.2497 21.3004 6.05187Z',
  d6: 'M3.99976 20L19.9998 4',
  d7: 'M8.99976 12L11.9998 15M11.9998 9L14.9998 12',
  d8: 'M19.3771 3.20879C19.6221 2.96383 19.7445 2.84136 19.7176 2.68773C19.6907 2.5341 19.5461 2.4663 19.2569 2.33071C18.8801 2.15404 18.4815 2.02509 18.0706 1.94928L18.0577 1.94713C13.6392 1.21132 8.98147 2.5473 5.76883 5.75466C2.55686 8.96136 1.21347 13.6158 1.94423 18.0345L1.94677 18.0483C2.02387 18.466 2.15592 18.8709 2.3372 19.2532C2.47358 19.5408 2.54177 19.6846 2.69504 19.7111C2.84832 19.7376 2.97037 19.6155 3.21446 19.3714L8.66152 13.9244C8.86152 13.7244 8.96152 13.6244 8.96152 13.5001C8.96152 13.3759 8.86152 13.2759 8.66152 13.0759L8.29278 12.7071C7.90226 12.3166 7.90226 11.6834 8.29278 11.2929C8.6833 10.9024 9.31647 10.9024 9.70699 11.2929L10.0757 11.6616C10.2757 11.8616 10.3757 11.9616 10.5 11.9616C10.6243 11.9616 10.7243 11.8616 10.9243 11.6616L11.6615 10.9244C11.8615 10.7244 11.9615 10.6244 11.9615 10.5001C11.9615 10.3759 11.8615 10.2759 11.6615 10.0759L11.2928 9.70711C10.9023 9.31658 10.9023 8.68342 11.2928 8.29289C11.6833 7.90237 12.3165 7.90237 12.707 8.29289L13.0757 8.66164C13.2757 8.86164 13.3757 8.96164 13.5 8.96164C13.6243 8.96164 13.7243 8.86164 13.9243 8.66164L19.3771 3.20879Z',
  d9: 'M21.6657 4.74948C21.5309 4.45877 21.4635 4.31342 21.3095 4.2861C21.1556 4.25878 21.0327 4.38166 20.7869 4.62743L15.3385 10.0759C15.1385 10.2759 15.0385 10.3759 15.0385 10.5001C15.0385 10.6244 15.1385 10.7244 15.3385 10.9244L15.707 11.2929C16.0975 11.6834 16.0975 12.3166 15.707 12.7071C15.3165 13.0976 14.6833 13.0976 14.2928 12.7071L13.9243 12.3386C13.7243 12.1386 13.6243 12.0386 13.5 12.0386C13.3757 12.0386 13.2757 12.1386 13.0757 12.3386L12.3385 13.0759C12.1385 13.2759 12.0385 13.3759 12.0385 13.5001C12.0385 13.6244 12.1385 13.7244 12.3385 13.9244L12.707 14.2929C13.0975 14.6834 13.0975 15.3166 12.707 15.7071C12.3165 16.0976 11.6833 16.0976 11.2928 15.7071L10.9243 15.3386C10.7243 15.1386 10.6243 15.0386 10.5 15.0386C10.3757 15.0386 10.2757 15.1386 10.0757 15.3386L4.64274 20.7716C4.39609 21.0182 4.27277 21.1416 4.30051 21.2959C4.32825 21.4502 4.47442 21.5172 4.76677 21.6512C5.13133 21.8182 5.51578 21.9408 5.91171 22.0141C10.3235 22.8561 15.0522 21.4099 18.2209 18.2106C21.4639 15.0195 22.8067 10.3449 22.0394 5.92352L22.0379 5.91563C21.9634 5.51202 21.8376 5.12034 21.6657 4.74948Z',
  d10: 'M5.76884 5.75466C8.98147 2.5473 13.6392 1.21132 18.0577 1.94713L18.0706 1.94928C19.0477 2.12953 19.9549 2.61029 20.6662 3.31848L20.6684 3.32065C21.3768 4.03177 21.8576 4.93875 22.0379 5.91563L22.0394 5.92352C22.8067 10.3449 21.4639 15.0195 18.2209 18.2106C15.0522 21.4099 10.3235 22.8561 5.91172 22.0141C4.93558 21.8335 4.02928 21.353 3.31853 20.6454L3.31636 20.6432C2.60794 19.9321 2.1271 19.0252 1.94678 18.0483L1.94424 18.0345C1.21348 13.6158 2.55687 8.96136 5.76884 5.75466Z',
  d11: 'M4.1199 21.2944C3.83289 21.1072 3.56404 20.8899 3.31852 20.6454L3.31634 20.6432C3.08499 20.411 2.8779 20.1579 2.69763 19.8883L9.0848 13.5011L8.29179 12.7081C7.90127 12.3176 7.90127 11.6844 8.29179 11.2939C8.68232 10.9033 9.31548 10.9033 9.70601 11.2939L10.499 12.0869L12.0848 10.5011L11.2918 9.70808C10.9013 9.31756 10.9013 8.68439 11.2918 8.29387C11.6823 7.90334 12.3155 7.90334 12.706 8.29387L13.499 9.08688L19.8959 2.68994C20.1713 2.87249 20.4296 3.0829 20.6662 3.31848L20.6684 3.32065C20.9086 3.56177 21.1226 3.82542 21.3076 4.10667L14.9132 10.5011L15.706 11.2939C16.0965 11.6844 16.0965 12.3176 15.706 12.7081C15.3155 13.0986 14.6823 13.0986 14.2918 12.7081L13.499 11.9153L11.9132 13.5011L12.706 14.2939C13.0965 14.6844 13.0965 15.3176 12.706 15.7081C12.3155 16.0986 11.6823 16.0986 11.2918 15.7081L10.499 14.9153L4.1199 21.2944Z',
  d12: 'M21.3006 6.05187C21.1484 5.22701 20.7411 4.45623 20.1372 3.85008C19.5309 3.24641 18.7599 2.83927 17.9348 2.68704C13.7379 1.98816 9.32857 3.26088 6.29895 6.28553C3.27 9.30951 1.9905 13.7155 2.68453 17.9122C2.83679 18.7371 3.24405 19.5079 3.84791 20.114C4.45425 20.7177 5.22527 21.1248 6.0504 21.2771C10.2213 22.0738 14.6996 20.7027 17.6917 17.6794C20.7496 14.6729 22.0291 10.2497 21.3006 6.05187Z',
  d13: 'M8.00024 12L12.0002 16M12.0002 8L16.0002 12',
  d14: 'M3.91029 21.15L10.0002 15.0602L11.4701 16.5301L12.5308 15.4694L11.0609 13.9995L14.0002 11.0602L15.4701 12.5301L16.5308 11.4694L15.0609 9.99954L21.1626 3.89793C21.6015 4.49669 21.9034 5.1867 22.0379 5.91563L22.0394 5.92352C22.8067 10.3449 21.4639 15.0195 18.221 18.2105C15.0522 21.4099 10.3235 22.8561 5.91172 22.0141C5.18935 21.8804 4.50522 21.5826 3.91029 21.15Z',
  d15: 'M2.84371 20.0952C2.39311 19.4897 2.08352 18.7891 1.94677 18.0483L1.94423 18.0345C1.21347 13.6158 2.55686 8.96136 5.76883 5.75466C8.98147 2.5473 13.6392 1.21132 18.0577 1.94713L18.0706 1.94928C18.8058 2.08491 19.5014 2.39067 20.1038 2.83543L14.0002 8.93888L12.5308 7.46942L11.4701 8.53008L12.9396 9.99953L10.0002 12.9389L8.53078 11.4694L7.47012 12.5301L8.93954 13.9995L2.84371 20.0952Z',
} as const;

export const IconAmericanFootballStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="american-football-stroke-rounded IconAmericanFootballStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAmericanFootballDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="american-football-duotone-rounded IconAmericanFootballDuotoneRounded"
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

export const IconAmericanFootballTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="american-football-twotone-rounded IconAmericanFootballTwotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconAmericanFootballSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="american-football-solid-rounded IconAmericanFootballSolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAmericanFootballBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="american-football-bulk-rounded IconAmericanFootballBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
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

export const IconAmericanFootballStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="american-football-stroke-sharp IconAmericanFootballStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAmericanFootballSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="american-football-solid-sharp IconAmericanFootballSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAmericanFootball: TheIconSelfPack = {
  name: 'AmericanFootball',
  StrokeRounded: IconAmericanFootballStrokeRounded,
  DuotoneRounded: IconAmericanFootballDuotoneRounded,
  TwotoneRounded: IconAmericanFootballTwotoneRounded,
  SolidRounded: IconAmericanFootballSolidRounded,
  BulkRounded: IconAmericanFootballBulkRounded,
  StrokeSharp: IconAmericanFootballStrokeSharp,
  SolidSharp: IconAmericanFootballSolidSharp,
};