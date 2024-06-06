import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 4.65468C8.30552 3.65451 7.15088 3 5.84388 3C3.72096 3 2 4.72674 2 6.85679C2 8.15354 2.63783 9.30081 3.61588 10',
  d2: 'M7 18.5C4.23858 18.5 2 16.336 2 13.6667C2 11.1537 3.98398 9.0886 6.52042 8.85528M17.5 18.5C19.9853 18.5 22 16.5524 22 14.15C22 11.7476 19.9853 9.8 17.5 9.8C17.4925 9.8 17.485 9.80002 17.4776 9.80005M17.4776 9.80005C17.4924 9.64084 17.5 9.47961 17.5 9.31667C17.5 6.38035 15.0376 4 12 4C9.12324 4 6.76233 6.135 6.52042 8.85528M17.4776 9.80005C17.3753 10.8967 16.9286 11.8973 16.2428 12.7M6.52042 8.85528C6.67826 8.84076 6.83823 8.83333 7 8.83333C8.12582 8.83333 9.16474 9.19302 10.0005 9.8',
  d3: 'M12.5784 14L10.8043 16.6838C10.5668 17.0431 10.4481 17.2227 10.5217 17.3614C10.5952 17.5 10.8093 17.5 11.2375 17.5H12.7625C13.1907 17.5 13.4048 17.5 13.4783 17.6386C13.5519 17.7773 13.4332 17.9569 13.1957 18.3162L11.4216 21',
  d4: 'M17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227C3.98398 9.26407 2 11.4003 2 14C2 16.7614 4.23858 19 7 19H17.5C19.9853 19 22 16.9853 22 14.5C22 12.0147 19.9853 10 17.5 10L17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5Z',
  d5: 'M13.2554 13.0409C13.7161 13.3454 13.8427 13.9658 13.5382 14.4266L12.2501 16.3751L12.9283 16.3751C13.104 16.3749 13.3338 16.3747 13.5264 16.4034C13.7373 16.4348 14.2218 16.5447 14.4873 17.045C14.751 17.542 14.5743 18.0029 14.4849 18.1939C14.4023 18.3701 14.2755 18.5616 14.1776 18.7093L14.1555 18.7428L12.3814 21.4266C12.0768 21.8873 11.4565 22.0139 10.9957 21.7093C10.535 21.4048 10.4084 20.7844 10.713 20.3237L12.001 18.3751L11.3229 18.3751C11.1471 18.3753 10.9173 18.3756 10.7247 18.3468C10.5138 18.3154 10.0294 18.2056 9.7639 17.7052C9.50017 17.2082 9.67687 16.7473 9.76631 16.5563C9.84881 16.3802 9.97568 16.1887 10.0735 16.0409L11.8698 13.3237C12.1743 12.8629 12.7947 12.7363 13.2554 13.0409Z',
  d6: 'M6.06431 8.09283C6.01491 8.28884 5.9902 8.38684 5.93372 8.4447C5.87724 8.50255 5.77924 8.52976 5.58325 8.58419C3.15606 9.2582 1.375 11.4833 1.375 14.125C1.375 17.3006 3.94936 19.875 7.125 19.875H9.08693C9.19148 19.875 9.28774 19.8181 9.33812 19.7265C9.41361 19.5892 9.36378 19.418 9.23647 19.3267C8.94563 19.1181 8.66025 18.824 8.43978 18.4085C7.8326 17.2643 8.26519 16.2269 8.40876 15.9203C8.53961 15.6409 8.71998 15.3693 8.80973 15.2341L10.6193 12.4967C11.3807 11.3449 12.9317 11.0284 14.0835 11.7897C15.2353 12.5511 15.5518 14.1021 14.7904 15.2539C14.784 15.2635 14.7871 15.2764 14.7971 15.2822C15.1597 15.4923 15.5372 15.8222 15.8131 16.342C16.4203 17.4862 15.9877 18.5236 15.8441 18.8302C15.7133 19.1096 15.533 19.3812 15.4432 19.5164C15.3416 19.6701 15.4518 19.875 15.636 19.875H17.625C20.5245 19.875 22.875 17.5245 22.875 14.625C22.875 12.1535 21.1672 10.0809 18.8673 9.52286C18.6239 9.4638 18.5022 9.43427 18.4397 9.36328C18.3772 9.2923 18.3635 9.16961 18.3362 8.92424C17.9878 5.80231 15.3399 3.375 12.125 3.375C9.20171 3.375 6.74772 5.38153 6.06431 8.09283Z',
  d7: 'M3.125 6.98179C3.125 5.40086 4.40141 4.125 5.96888 4.125C6.74917 4.125 7.45702 4.44017 7.97224 4.95404C8.47713 4.5048 9.05535 4.1362 9.68671 3.86845C8.79982 2.80488 7.46405 2.125 5.96888 2.125C3.29052 2.125 1.125 4.30262 1.125 6.98179C1.125 8.37511 1.71096 9.63195 2.64756 10.517C3.07158 9.99154 3.58625 9.54223 4.16783 9.19283C3.53021 8.66805 3.125 7.8729 3.125 6.98179Z',
  d8: 'M12.5787 14L10.5 17.5H13.5003L11.4219 21',
  d9: 'M11.7182 14.2285L13.4377 15.2498L12.2562 17.2392H15.2564L12.281 22.2498L10.5613 21.2286L11.7427 19.2392H8.74219L11.7182 14.2285Z',
  d10: 'M2.68308 9.70164C1.80115 8.86245 1.25 7.67454 1.25 6.35826C1.25 3.81619 3.30471 1.75 5.84601 1.75C7.23857 1.75 8.48541 2.37157 9.32672 3.3489C10.1372 2.96484 11.0435 2.75 12 2.75C15.3858 2.75 18.1428 5.44224 18.2469 8.80273C20.7927 9.16534 22.75 11.3541 22.75 14C22.75 16.8995 20.3995 19.25 17.5 19.25H15.8056L17.8905 15.7392H14.8905L15.4922 14.7261L11.1932 12.1729L6.98993 19.25C3.81892 19.2446 1.25 16.6723 1.25 13.5C1.25 12.044 1.79103 10.7146 2.68308 9.70164ZM3.14766 6.35826C3.14766 4.85823 4.35875 3.64766 5.84601 3.64766C6.58272 3.64766 7.25136 3.94376 7.7396 4.42707C6.77854 5.32293 6.1002 6.51824 5.853 7.86454C5.25587 7.98547 4.69233 8.19886 4.17797 8.48912C3.54949 7.99188 3.14766 7.22264 3.14766 6.35826Z',
};

export const IconSunCloudAngledZap01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-zap-01-stroke-rounded IconSunCloudAngledZap01StrokeRounded"
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

export const IconSunCloudAngledZap01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-zap-01-duotone-rounded IconSunCloudAngledZap01DuotoneRounded"
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

export const IconSunCloudAngledZap01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-zap-01-twotone-rounded IconSunCloudAngledZap01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSunCloudAngledZap01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-zap-01-solid-rounded IconSunCloudAngledZap01SolidRounded"
    >
      <path 
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

export const IconSunCloudAngledZap01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-zap-01-bulk-rounded IconSunCloudAngledZap01BulkRounded"
    >
      <path 
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

export const IconSunCloudAngledZap01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-zap-01-stroke-sharp IconSunCloudAngledZap01StrokeSharp"
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledZap01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-zap-01-solid-sharp IconSunCloudAngledZap01SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfSunCloudAngledZap01: TheIconSelfPack = {
  name: 'SunCloudAngledZap01',
  StrokeRounded: IconSunCloudAngledZap01StrokeRounded,
  DuotoneRounded: IconSunCloudAngledZap01DuotoneRounded,
  TwotoneRounded: IconSunCloudAngledZap01TwotoneRounded,
  SolidRounded: IconSunCloudAngledZap01SolidRounded,
  BulkRounded: IconSunCloudAngledZap01BulkRounded,
  StrokeSharp: IconSunCloudAngledZap01StrokeSharp,
  SolidSharp: IconSunCloudAngledZap01SolidSharp,
};