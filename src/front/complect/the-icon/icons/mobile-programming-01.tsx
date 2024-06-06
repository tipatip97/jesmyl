import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 8C5.0104 5.35561 5.10801 3.94101 6.02389 3.02513C7.04901 2 8.69893 2 11.9988 2C15.2986 2 16.9485 2 17.9736 3.02513C18.8895 3.94101 18.9871 5.35561 18.9975 8M5 16C5.0104 18.6444 5.10801 20.059 6.02389 20.9749C7.04901 22 8.69893 22 11.9988 22C15.2986 22 16.9485 22 17.9736 20.9749C18.8895 20.059 18.9871 18.6444 18.9975 16',
  d2: 'M11 19H13',
  d3: 'M16 10L17.2265 11.0572C17.7422 11.5016 18 11.7239 18 12C18 12.2761 17.7422 12.4984 17.2265 12.9428L16 14',
  d4: 'M8 10L6.77346 11.0572C6.25782 11.5016 6 11.7239 6 12C6 12.2761 6.25782 12.4984 6.77346 12.9428L8 14',
  d5: 'M13 9L11 15',
  d6: 'M6.02389 20.9749C7.04901 22 8.69893 22 11.9988 22C15.2986 22 16.9485 22 17.9736 20.9749C18.8895 20.059 18.9871 18.6444 18.9975 16V8C18.9871 5.35561 18.8895 3.94101 17.9736 3.02513C16.9485 2 15.2986 2 11.9988 2C8.69893 2 7.04901 2 6.02389 3.02513C5.10801 3.94101 5.0104 5.35561 5 8V16C5.0104 18.6444 5.10801 20.059 6.02389 20.9749Z',
  d7: 'M11.9287 1H12.0727C13.6614 0.99997 14.9546 0.999945 15.9744 1.13706C17.0384 1.28011 17.9534 1.58869 18.6827 2.31802C19.3327 2.96806 19.6498 3.76721 19.812 4.69149C19.9692 5.58686 19.9943 6.68497 19.9995 7.99607C20.0016 8.54835 19.5557 8.99782 19.0034 8.99999C18.4511 9.00217 18.0017 8.55622 17.9995 8.00394C17.9942 6.67064 17.9654 5.73925 17.8421 5.03725C17.724 4.36417 17.5343 3.99807 17.2685 3.73223C16.9727 3.43644 16.5501 3.23246 15.7079 3.11923C14.8369 3.00213 13.6789 3 12.0007 3C10.3225 3 9.16449 3.00213 8.29351 3.11923C7.4513 3.23246 7.02874 3.43644 6.73295 3.73223C6.46711 3.99807 6.27743 4.36417 6.15928 5.03725C6.03607 5.73925 6.00719 6.67064 6.00195 8.00394C5.99977 8.55622 5.5503 9.00217 4.99802 8.99999C4.44574 8.99782 3.99979 8.54835 4.00196 7.99607C4.00712 6.68497 4.03224 5.58686 4.1894 4.69149C4.35163 3.76721 4.66869 2.96806 5.31873 2.31802C6.04806 1.58869 6.96303 1.28011 8.02701 1.13706C9.04686 0.999945 10.34 0.99997 11.9287 1ZM4.99802 15C5.5503 14.9978 5.99977 15.4438 6.00195 15.9961C6.00719 17.3294 6.03607 18.2608 6.15928 18.9628C6.27743 19.6358 6.46711 20.0019 6.73295 20.2678C7.02874 20.5636 7.4513 20.7675 8.29351 20.8808C9.16449 20.9979 10.3225 21 12.0007 21C13.6789 21 14.8369 20.9979 15.7079 20.8808C16.5501 20.7675 16.9727 20.5636 17.2685 20.2678C17.5343 20.0019 17.724 19.6358 17.8421 18.9628C17.9654 18.2608 17.9942 17.3294 17.9995 15.9961C18.0017 15.4438 18.4511 14.9978 19.0034 15C19.5557 15.0022 20.0016 15.4517 19.9995 16.0039C19.9943 17.315 19.9692 18.4131 19.812 19.3085C19.6498 20.2328 19.3327 21.0319 18.6827 21.682C17.9534 22.4113 17.0384 22.7199 15.9744 22.8629C14.9546 23.0001 13.6614 23 12.0728 23H11.9286C10.34 23 9.04686 23.0001 8.02701 22.8629C6.96303 22.7199 6.04806 22.4113 5.31873 21.682C4.66869 21.0319 4.35163 20.2328 4.1894 19.3085C4.03224 18.4131 4.00712 17.315 4.00196 16.0039C3.99979 15.4517 4.44574 15.0022 4.99802 15Z',
  d8: 'M10.002 19C10.002 18.4477 10.4497 18 11.002 18H13.002C13.5542 18 14.002 18.4477 14.002 19C14.002 19.5523 13.5542 20 13.002 20H11.002C10.4497 20 10.002 19.5523 10.002 19Z',
  d9: 'M15.2445 9.34714C14.8839 9.76547 14.9307 10.3969 15.3491 10.7575L16.5756 11.8147L17.2285 11.0572L16.5756 11.8147C16.6572 11.885 16.7275 11.9456 16.7895 12C16.7275 12.0544 16.6572 12.1151 16.5756 12.1854L15.3491 13.2426C14.9307 13.6031 14.8839 14.2346 15.2445 14.6529C15.6051 15.0712 16.2365 15.1181 16.6548 14.7575L17.8814 13.7003C17.8937 13.6897 17.906 13.679 17.9184 13.6684C18.1434 13.4746 18.3825 13.2686 18.5574 13.0711C18.755 12.8478 19.002 12.4934 19.002 12C19.002 11.5066 18.755 11.1522 18.5574 10.9289C18.3825 10.7314 18.1434 10.5255 17.9184 10.3317C17.906 10.321 17.8937 10.3103 17.8814 10.2997C17.8814 10.2997 17.8814 10.2997 17.8814 10.2997L16.6548 9.24255C16.2365 8.88198 15.6051 8.9288 15.2445 9.34714Z',
  d10: 'M8.75942 9.34714C9.11999 9.76547 9.07317 10.3969 8.65483 10.7575L7.42829 11.8147L6.77541 11.0572L7.42829 11.8147C7.34672 11.885 7.2764 11.9456 7.21437 12C7.2764 12.0544 7.34672 12.1151 7.42829 12.1854L8.65483 13.2426C9.07317 13.6031 9.11999 14.2346 8.75942 14.6529C8.39884 15.0712 7.76741 15.1181 7.34907 14.7575L6.12253 13.7003C6.11024 13.6897 6.09788 13.679 6.08549 13.6684C5.86046 13.4746 5.62137 13.2686 5.44654 13.0711C5.24886 12.8478 5.00195 12.4934 5.00195 12C5.00195 11.5066 5.24886 11.1522 5.44654 10.9289C5.62137 10.7314 5.86046 10.5255 6.08549 10.3317C6.09789 10.321 6.11024 10.3103 6.12253 10.2997C6.12253 10.2997 6.12253 10.2997 6.12253 10.2997L7.34907 9.24255C7.76741 8.88198 8.39884 8.9288 8.75942 9.34714Z',
  d11: 'M13.3185 8.05159C13.8424 8.22624 14.1256 8.79256 13.9509 9.3165L11.9509 15.3165C11.7763 15.8404 11.2099 16.1236 10.686 15.949C10.1621 15.7743 9.87889 15.208 10.0535 14.684L12.0535 8.68404C12.2282 8.1601 12.7945 7.87694 13.3185 8.05159Z',
  d12: 'M4.99998 8L5.0001 2.00021L18.999 2L18.9975 8M4.99998 16L4.99902 22H19L18.9975 16',
  d13: 'M10.5 19H13.5',
  d14: 'M16.499 9.5L18.999 12L16.499 14.5',
  d15: 'M7.49902 9.5L4.99902 12L7.49902 14.5',
  d16: 'M5.21886 1.2502L18.7795 1.25C19.0365 1.25 19.2829 1.35299 19.4646 1.53632C19.6462 1.71965 19.7483 1.96829 19.7482 2.22752L19.7467 8.09116L17.8094 8.09066L17.8106 3.20456L6.18755 3.20473L6.18746 8.09093L4.25008 8.09089L4.25019 2.22746C4.2502 1.68774 4.68388 1.25021 5.21886 1.2502ZM17.8114 20.7955L17.8094 15.9095L19.7467 15.9087L19.7491 21.7723C19.7493 22.0316 19.6472 22.2803 19.4656 22.4636C19.2839 22.647 19.0374 22.75 18.7805 22.75H5.21784C4.9609 22.75 4.71448 22.647 4.53281 22.4637C4.35114 22.2804 4.2491 22.0318 4.24915 21.7726L4.25008 15.9089L6.18746 15.9092L6.18668 20.7955H17.8114Z',
  d17: 'M13.5 19H10.5V17H13.5V19Z',
  d18: 'M10.0505 14.6836L12.0505 8.68359L13.9478 9.31605L11.9478 15.316L10.0505 14.6836ZM7.20711 8.79271L8.62132 10.2069L6.82843 11.9998L8.62132 13.7927L7.20711 15.2069L4 11.9998L7.20711 8.79271ZM17.1716 11.9998L15.3787 10.2069L16.7929 8.79271L20 11.9998L16.7929 15.2069L15.3787 13.7927L17.1716 11.9998Z',
};

export const IconMobileProgramming01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-programming-01-stroke-rounded IconMobileProgramming01StrokeRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileProgramming01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-programming-01-duotone-rounded IconMobileProgramming01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileProgramming01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-programming-01-twotone-rounded IconMobileProgramming01TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileProgramming01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-programming-01-solid-rounded IconMobileProgramming01SolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMobileProgramming01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-programming-01-bulk-rounded IconMobileProgramming01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMobileProgramming01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-programming-01-stroke-sharp IconMobileProgramming01StrokeSharp"
    >
      <path 
        d={d.d12} 
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
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileProgramming01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-programming-01-solid-sharp IconMobileProgramming01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMobileProgramming01: TheIconSelfPack = {
  name: 'MobileProgramming01',
  StrokeRounded: IconMobileProgramming01StrokeRounded,
  DuotoneRounded: IconMobileProgramming01DuotoneRounded,
  TwotoneRounded: IconMobileProgramming01TwotoneRounded,
  SolidRounded: IconMobileProgramming01SolidRounded,
  BulkRounded: IconMobileProgramming01BulkRounded,
  StrokeSharp: IconMobileProgramming01StrokeSharp,
  SolidSharp: IconMobileProgramming01SolidSharp,
};