import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.5039 16L11.5039 18M17.0039 16L16.0039 18M13.5039 20L12.5039 22M8.00391 16L7.00391 18M9.00391 20L8.00391 22',
  d2: 'M17.4776 10.9757C17.485 10.9756 17.4925 10.9756 17.5 10.9756C19.9853 10.9756 22 12.9821 22 15.4573C22 17.0195 21.2092 18.1905 20 19M17.4776 10.9757C17.4924 10.8116 17.5 10.6455 17.5 10.4777C17.5 7.45243 15.0376 5 12 5C9.12324 5 6.76233 7.19964 6.52042 10.0023M17.4776 10.9757C17.4131 11.6877 17.2119 12.3603 16.9003 12.9675M6.52042 10.0023C3.98398 10.2427 2 12.3703 2 14.9594C2 16.5885 2.78555 18.0693 4 19M6.52042 10.0023C6.67826 9.98733 6.83823 9.97968 7 9.97968C8.12582 9.97968 9.16474 10.3503 10.0005 10.9756',
  d3: 'M10 5.13829C9.91652 4.70849 9.76249 4.28506 9.53351 3.88456C8.98606 2.92704 8.11203 2.27864 7.13552 2C7.28642 3.22635 6.71543 4.48154 5.58897 5.13829C4.46251 5.79504 3.10057 5.66681 2.1243 4.92166C1.87501 5.91497 1.99406 7.00354 2.54151 7.96107C3.48512 9.61151 5.39904 10.3436 7.13552 9.84664',
  d4: 'M17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.7614 4.23858 20 7 20H17.5C19.9853 20 22 17.9853 22 15.5C22 13.0147 19.9853 11 17.5 11L17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5Z',
  d5: 'M8.57048 14.9808C9.06446 15.2278 9.26468 15.8285 9.01769 16.3224L8.01769 18.3224C7.7707 18.8164 7.17003 19.0166 6.67605 18.7696C6.18207 18.5227 5.98185 17.922 6.22884 17.428L7.22884 15.428C7.47583 14.934 8.0765 14.7338 8.57048 14.9808ZM13.0705 14.9808C13.5645 15.2278 13.7647 15.8285 13.5177 16.3224L12.5177 18.3224C12.2707 18.8164 11.67 19.0166 11.1761 18.7696C10.6821 18.5227 10.4818 17.922 10.7288 17.428L11.7288 15.428C11.9758 14.934 12.5765 14.7338 13.0705 14.9808ZM17.5705 14.9808C18.0645 15.2278 18.2647 15.8285 18.0177 16.3224L17.0177 18.3224C16.7707 18.8164 16.17 19.0166 15.6761 18.7696C15.1821 18.5227 14.9818 17.922 15.2288 17.428L16.2288 15.428C16.4758 14.934 17.0765 14.7338 17.5705 14.9808ZM9.57048 18.9808C10.0645 19.2278 10.2647 19.8285 10.0177 20.3224L9.01769 22.3224C8.7707 22.8164 8.17003 23.0166 7.67605 22.7696C7.18207 22.5227 6.98185 21.922 7.22884 21.428L8.22884 19.428C8.47583 18.934 9.0765 18.7338 9.57048 18.9808ZM14.0705 18.9808C14.5645 19.2278 14.7647 19.8285 14.5177 20.3224L13.5177 22.3224C13.2707 22.8164 12.67 23.0166 12.1761 22.7696C11.6821 22.5227 11.4818 21.922 11.7288 21.428L12.7288 19.428C12.9758 18.934 13.5765 18.7338 14.0705 18.9808Z',
  d6: 'M5.58521 9.58419C3.15802 10.2582 1.37695 12.4833 1.37695 15.125C1.37695 17.3134 2.59949 19.2163 4.39886 20.1879C4.91248 20.4652 5.16928 20.6039 5.22169 20.5566C5.27409 20.5093 5.14168 20.19 4.87686 19.5513C4.50918 18.6646 4.49934 17.5332 4.88753 16.7568L5.88753 14.7568C6.505 13.5218 8.00668 13.0213 9.24163 13.6387C9.74504 13.8905 10.1264 14.2891 10.3598 14.7567C10.3655 14.7681 10.3818 14.7682 10.3875 14.7568C11.005 13.5218 12.5067 13.0213 13.7416 13.6387C14.245 13.8905 14.6264 14.2891 14.8598 14.7567C14.8655 14.7681 14.8818 14.7682 14.8875 14.7568C15.505 13.5218 17.0067 13.0213 18.2416 13.6387C19.4766 14.2562 19.9771 15.7579 19.3597 16.9928L18.0039 20.0305C17.8305 20.4188 17.7439 20.6131 17.8549 20.7552C17.9659 20.8974 18.1598 20.8631 18.5475 20.7946C21.008 20.3594 22.877 18.2105 22.877 15.625C22.877 13.1535 21.1692 11.0809 18.8693 10.5229C18.6259 10.4638 18.5042 10.4343 18.4417 10.3633C18.3792 10.2923 18.3655 10.1696 18.3381 9.92424C17.9898 6.80231 15.3418 4.375 12.127 4.375C9.20367 4.375 6.74967 6.38153 6.06626 9.09283C6.01686 9.28884 5.99216 9.38684 5.93567 9.4447C5.87919 9.50255 5.7812 9.52976 5.58521 9.58419Z',
  d7: 'M3.5346 7.58974C3.34879 7.26475 3.22813 6.91997 3.16869 6.5705C4.16672 6.81452 5.25676 6.68739 6.2176 6.1272C7.17738 5.56763 7.82838 4.68113 8.11629 3.69119C8.37869 3.91448 8.60811 4.18719 8.79034 4.50591C8.91316 4.72074 9.0072 4.9435 9.07402 5.17003C9.65078 4.84654 10.2841 4.61188 10.9554 4.48459C10.8485 4.15244 10.7059 3.82687 10.5266 3.51324C9.84536 2.32171 8.75418 1.51131 7.53487 1.1634C7.2124 1.07138 6.86527 1.14713 6.61044 1.36511C6.35561 1.5831 6.22701 1.91431 6.26797 2.24714C6.37223 3.09444 5.97606 3.95292 5.21026 4.39941C4.44652 4.84468 3.52218 4.76024 2.85599 4.25176C2.58862 4.04769 2.23658 3.9917 1.91909 4.10275C1.60161 4.21381 1.36122 4.47702 1.27934 4.80325C0.969854 6.0364 1.11737 7.39136 1.79834 8.58242C2.2733 9.41317 2.9464 10.0579 3.72331 10.4902C4.27668 10.0832 4.90562 9.77289 5.58521 9.58417C5.7812 9.52974 5.87919 9.50253 5.93567 9.44468C5.98917 9.38989 6.01415 9.29909 6.05862 9.12312C5.05012 9.087 4.07939 8.54262 3.5346 7.58974Z',
  d8: 'M6.10938 18.3555L7.10938 16.3555L8.89823 17.2499L7.89823 19.2499L6.10938 18.3555ZM10.6094 18.3555L11.6094 16.3555L13.3982 17.2499L12.3982 19.2499L10.6094 18.3555ZM15.1094 18.3555L16.1094 16.3555L17.8982 17.2499L16.8982 19.2499L15.1094 18.3555ZM7.10938 22.3555L8.10938 20.3555L9.89823 21.2499L8.89823 23.2499L7.10938 22.3555ZM11.6094 22.3555L12.6094 20.3555L14.3982 21.2499L13.3982 23.2499L11.6094 22.3555Z',
  d9: 'M1.95853 8.57974C2.46175 9.45844 3.17654 10.139 4.00113 10.5931C2.35088 11.6037 1.25 13.4231 1.25 15.5C1.25 17.4038 2.17527 19.0916 3.60066 20.138L6.43799 14.3428L10.038 16.1428L10.938 14.3428L14.538 16.1428L15.438 14.3428L19.9101 16.5788L17.7304 21.245C20.523 21.1244 22.75 18.8223 22.75 16C22.75 13.3541 20.7927 11.1653 18.2469 10.8027C18.1428 7.44224 15.3858 4.75 12 4.75C11.9067 4.75 11.8139 4.75204 11.7216 4.75609C11.6072 4.24066 11.4145 3.73438 11.1397 3.25455C10.4229 2.00293 9.27509 1.152 7.99255 0.78665C7.68421 0.698817 7.35231 0.771121 7.10866 0.9792C6.86501 1.18728 6.74204 1.50343 6.7812 1.82114C6.89893 2.77626 6.45189 3.74549 5.58504 4.25004C4.72017 4.75344 3.67359 4.65753 2.91993 4.08326C2.66429 3.88846 2.32768 3.83502 2.02412 3.94102C1.72056 4.04703 1.49072 4.29828 1.41243 4.60968C1.08672 5.9053 1.242 7.32856 1.95853 8.57974ZM3.185 6.31676C3.23715 6.76732 3.37942 7.21446 3.61864 7.63218C4.14484 8.551 5.02726 9.12892 5.98611 9.29297C6.53241 7.36479 7.98051 5.81594 9.84591 5.13109C9.77166 4.81354 9.65063 4.50083 9.47955 4.20211C9.24355 3.79001 8.93636 3.44692 8.58292 3.17891C8.30957 4.28356 7.60885 5.28195 6.5482 5.8993C5.48709 6.51692 4.27537 6.63082 3.185 6.31676Z',
};

export const IconMoonCloudAngledRainStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-angled-rain-stroke-rounded IconMoonCloudAngledRainStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudAngledRainDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-angled-rain-duotone-rounded IconMoonCloudAngledRainDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudAngledRainTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-angled-rain-twotone-rounded IconMoonCloudAngledRainTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudAngledRainSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-angled-rain-solid-rounded IconMoonCloudAngledRainSolidRounded"
    >
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudAngledRainBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-angled-rain-bulk-rounded IconMoonCloudAngledRainBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconMoonCloudAngledRainStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-angled-rain-stroke-sharp IconMoonCloudAngledRainStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudAngledRainSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-angled-rain-solid-sharp IconMoonCloudAngledRainSolidSharp"
    >
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

export const iconPackOfMoonCloudAngledRain: TheIconSelfPack = {
  name: 'MoonCloudAngledRain',
  StrokeRounded: IconMoonCloudAngledRainStrokeRounded,
  DuotoneRounded: IconMoonCloudAngledRainDuotoneRounded,
  TwotoneRounded: IconMoonCloudAngledRainTwotoneRounded,
  SolidRounded: IconMoonCloudAngledRainSolidRounded,
  BulkRounded: IconMoonCloudAngledRainBulkRounded,
  StrokeSharp: IconMoonCloudAngledRainStrokeSharp,
  SolidSharp: IconMoonCloudAngledRainSolidSharp,
};