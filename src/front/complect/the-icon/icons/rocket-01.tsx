import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.8013 6.48949L13.2869 5.00392C14.9596 3.3312 17.1495 2.63737 19.4671 2.52399C20.3686 2.47989 20.8193 2.45784 21.1807 2.81928C21.5422 3.18071 21.5201 3.63143 21.476 4.53289C21.3626 6.8505 20.6688 9.04042 18.9961 10.7131L17.5105 12.1987C16.2871 13.4221 15.9393 13.77 16.1961 15.097C16.4496 16.1107 16.6949 17.0923 15.9578 17.8294C15.0637 18.7235 14.2481 18.7235 13.354 17.8294L6.17058 10.646C5.27649 9.75188 5.27646 8.9363 6.17058 8.04219C6.90767 7.30509 7.88929 7.55044 8.90297 7.80389C10.23 8.06073 10.5779 7.71289 11.8013 6.48949Z',
  d2: 'M16.9959 7H17.0049',
  d3: 'M2.5 21.5L7.5 16.5',
  d4: 'M8.5 21.5L10.5 19.5',
  d5: 'M2.5 15.5L4.5 13.5',
  d6: 'M21.7111 2.28786C21.3886 1.9654 21.0188 1.82469 20.6204 1.77438C20.2836 1.73186 19.8373 1.7538 19.4305 1.7738C16.9895 1.89321 14.5994 2.62958 12.7565 4.4725L11.271 5.95808C10.6226 6.6064 10.3246 6.89207 10.0492 7.03313C9.85811 7.13096 9.63647 7.17883 9.06475 7.07016C8.58833 6.95093 7.99153 6.80156 7.43448 6.8005C6.82087 6.79934 6.18163 6.96939 5.64025 7.51077C5.1237 8.02731 4.74999 8.63466 4.75 9.34301C4.75001 10.0513 5.12372 10.6587 5.64025 11.1752L12.8237 18.3587C13.3402 18.8752 13.9476 19.2489 14.6559 19.2489C15.3643 19.2489 15.9716 18.8752 16.4881 18.3587C17.0295 17.8173 17.1996 17.178 17.1984 16.5644C17.1974 16.0074 17.048 15.4106 16.9288 14.9342C16.8201 14.3624 16.868 14.1408 16.9658 13.9497C17.1068 13.6743 17.3925 13.3763 18.0408 12.728L19.5264 11.2424C21.3693 9.39947 22.1057 7.00938 22.2251 4.56845C22.2451 4.16164 22.2671 3.71535 22.2245 3.37855C22.1742 2.98009 22.0335 2.61032 21.7111 2.28786ZM16.9961 6C16.4438 6 15.9961 6.44772 15.9961 7C15.9961 7.55228 16.4438 8 16.9961 8H17.0051C17.5574 8 18.0051 7.55228 18.0051 7C18.0051 6.44772 17.5574 6 17.0051 6H16.9961Z',
  d7: 'M5.27175 13.0263C5.64275 13.3973 5.64275 13.9988 5.27175 14.3698L3.37175 16.2698C3.00075 16.6408 2.39925 16.6408 2.02825 16.2698C1.65725 15.8988 1.65725 15.2973 2.02825 14.9263L3.92825 13.0263C4.29925 12.6553 4.90075 12.6553 5.27175 13.0263ZM6.77825 15.8763C7.14925 15.5053 7.75075 15.5053 8.12175 15.8763C8.49275 16.2473 8.49275 16.8488 8.12175 17.2198L3.37175 21.9698C3.00075 22.3408 2.39925 22.3408 2.02825 21.9698C1.65725 21.5988 1.65725 20.9973 2.02825 20.6263L6.77825 15.8763ZM10.9718 18.7263C11.3427 19.0973 11.3427 19.6988 10.9718 20.0698L9.07175 21.9698C8.70075 22.3408 8.09925 22.3408 7.72825 21.9698C7.35725 21.5988 7.35725 20.9973 7.72825 20.6263L9.62825 18.7263C9.99925 18.3553 10.6008 18.3553 10.9718 18.7263Z',
  d8: 'M20.6204 1.77438C21.0188 1.82469 21.3886 1.9654 21.7111 2.28786C22.0335 2.61032 22.1742 2.98009 22.2245 3.37855C22.2671 3.71535 22.2451 4.16164 22.2251 4.56845C22.1057 7.00938 21.3693 9.39947 19.5264 11.2424L18.0408 12.728C17.3925 13.3763 17.1068 13.6743 16.9658 13.9497C16.868 14.1408 16.8201 14.3624 16.9288 14.9342C17.048 15.4106 17.1974 16.0074 17.1984 16.5644C17.1996 17.178 17.0295 17.8173 16.4881 18.3587C15.9716 18.8752 15.3643 19.2489 14.6559 19.2489C13.9476 19.2489 13.3402 18.8752 12.8237 18.3587L5.64025 11.1752C5.12372 10.6587 4.75001 10.0513 4.75 9.34301C4.74999 8.63466 5.1237 8.02731 5.64025 7.51077C6.18163 6.96939 6.82087 6.79934 7.43448 6.8005C7.99153 6.80156 8.58833 6.95093 9.06475 7.07016C9.63647 7.17883 9.85811 7.13096 10.0492 7.03313C10.3246 6.89207 10.6226 6.6064 11.271 5.95808L12.7565 4.4725C14.5994 2.62958 16.9895 1.89321 19.4305 1.7738C19.8373 1.7538 20.2836 1.73186 20.6204 1.77438Z',
  d9: 'M15.9961 7C15.9961 6.44772 16.4438 6 16.9961 6H17.0051C17.5574 6 18.0051 6.44772 18.0051 7C18.0051 7.55228 17.5574 8 17.0051 8H16.9961C16.4438 8 15.9961 7.55228 15.9961 7Z',
  d10: 'M10.4993 7.54278L13.7862 4.50451C15.4589 2.83179 19.0233 1.97655 21.9993 2.00049C21.9993 5.50049 21.1681 8.54101 19.4954 10.2137L16.4572 13.5005L17.4993 16.5005L15.4993 18.5005L5.5 8.50049L7.5 6.50049L10.4993 7.54278Z',
  d11: 'M17.4941 6.49414L17.5005 6.50049',
  d12: 'M2 22L8.5 15.5M8 22L11.5 18.5M2 16L5.5 12.5',
  d13: 'M22.0054 1.25051C20.4493 1.238 18.7427 1.45452 17.1983 1.89502C15.6742 2.32974 14.2313 3.00448 13.2667 3.96337L10.3206 6.68667L7.74619 5.79205C7.47461 5.69767 7.17297 5.76686 6.96967 5.97016L4.96967 7.97016C4.67678 8.26304 4.67678 8.73791 4.96965 9.0308L14.969 19.0308C15.1096 19.1715 15.3004 19.2505 15.4993 19.2505C15.6983 19.2505 15.889 19.1715 16.0297 19.0308L18.0297 17.0308C18.233 16.8275 18.3022 16.5259 18.2078 16.2544L17.3132 13.6793L20.0365 10.7333C21.9121 8.84835 22.7493 5.56531 22.7493 2.00049C22.7493 1.58863 22.4172 1.25383 22.0054 1.25051ZM18.9149 6.50064L17.4943 5.08008L16.0801 6.49429L17.5006 7.91486L18.9149 6.50064Z',
  d14: 'M6.20718 13.293L2.66421 16.75L1.25 15.3358L4.79297 11.8788L6.20718 13.293ZM9.20718 16.293L2.66421 22.75L1.25 21.3358L7.79297 14.8788L9.20718 16.293ZM12.2072 19.293L8.66421 22.75L7.25 21.3358L10.793 17.8788L12.2072 19.293Z',
};

export const IconRocket01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rocket-01-stroke-rounded IconRocket01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRocket01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rocket-01-duotone-rounded IconRocket01DuotoneRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRocket01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rocket-01-twotone-rounded IconRocket01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRocket01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rocket-01-solid-rounded IconRocket01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRocket01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rocket-01-bulk-rounded IconRocket01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRocket01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rocket-01-stroke-sharp IconRocket01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconRocket01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rocket-01-solid-sharp IconRocket01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRocket01: TheIconSelfPack = {
  name: 'Rocket01',
  StrokeRounded: IconRocket01StrokeRounded,
  DuotoneRounded: IconRocket01DuotoneRounded,
  TwotoneRounded: IconRocket01TwotoneRounded,
  SolidRounded: IconRocket01SolidRounded,
  BulkRounded: IconRocket01BulkRounded,
  StrokeSharp: IconRocket01StrokeSharp,
  SolidSharp: IconRocket01SolidSharp,
};