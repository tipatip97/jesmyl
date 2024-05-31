import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5784 15L10.8043 17.6838C10.5668 18.0431 10.4481 18.2227 10.5217 18.3614C10.5952 18.5 10.8093 18.5 11.2375 18.5H12.7625C13.1907 18.5 13.4048 18.5 13.4783 18.6386C13.5519 18.7773 13.4332 18.9569 13.1957 19.3162L11.4216 22',
  d2: 'M17.4776 11.0001C17.485 11 17.4925 11 17.5 11C19.9853 11 22 13.0147 22 15.5C22 17.8251 20.2624 19.7631 18 20M17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227M17.4776 11.0001C17.3753 12.1345 16.9286 13.1696 16.2428 14M6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.419 3.71776 19.512 6 19.9753M6.52042 10.0227C6.67826 10.0077 6.83823 10 7 10C8.12582 10 9.16474 10.3721 10.0005 11',
  d3: 'M10 5.13829C9.91652 4.70849 9.76249 4.28506 9.53351 3.88456C8.98606 2.92704 8.11203 2.27864 7.13552 2C7.28642 3.22635 6.71543 4.48154 5.58897 5.13829C4.46251 5.79504 3.10057 5.66681 2.1243 4.92166C1.87501 5.91497 1.99406 7.00354 2.54151 7.96107C3.48512 9.61151 5.39904 10.3436 7.13552 9.84664',
  d4: 'M17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.7614 4.23858 20 7 20H17.5C19.9853 20 22 17.9853 22 15.5C22 13.0147 19.9853 11 17.5 11L17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5Z',
  d5: 'M13.2554 14.0409C13.7161 14.3454 13.8427 14.9658 13.5382 15.4266L12.2501 17.3751L12.9283 17.3751C13.104 17.3749 13.3338 17.3747 13.5264 17.4034C13.7373 17.4348 14.2218 17.5447 14.4873 18.045C14.751 18.542 14.5743 19.0029 14.4849 19.1939C14.4023 19.3701 14.2755 19.5616 14.1776 19.7093L12.3814 22.4266C12.0768 22.8873 11.4565 23.0139 10.9957 22.7093C10.535 22.4048 10.4084 21.7844 10.713 21.3237L12.001 19.3751L11.3229 19.3751C11.1471 19.3753 10.9173 19.3756 10.7247 19.3468C10.5138 19.3154 10.0294 19.2056 9.7639 18.7052C9.50017 18.2082 9.67687 17.7473 9.76631 17.5563C9.84881 17.3802 9.97568 17.1887 10.0735 17.0409L11.8698 14.3237C12.1743 13.8629 12.7947 13.7363 13.2554 14.0409Z',
  d6: 'M5.58325 9.58419C3.15606 10.2582 1.375 12.4833 1.375 15.125C1.375 18.2985 3.94586 20.8715 7.11851 20.875L7.12497 20.875L7.1302 20.8749C7.26376 20.8718 9.92275 20.8062 9.47424 20.4789C9.01419 20.1433 8.72032 19.9372 8.43978 19.4085C7.8326 18.2643 8.26519 17.2269 8.40876 16.9203C8.53961 16.6409 8.71998 16.3693 8.80973 16.2341L10.6193 13.4967C11.3807 12.3449 12.9317 12.0284 14.0835 12.7897C15.2353 13.5511 15.5518 15.1021 14.7904 16.2539C14.784 16.2635 14.7871 16.2764 14.7971 16.2822C15.1597 16.4923 15.5372 16.8222 15.8131 17.342C16.4203 18.4862 15.9877 19.5236 15.8441 19.8302C15.7133 20.1096 15.533 20.3812 15.4432 20.5164C15.3416 20.6701 15.4518 20.875 15.636 20.875H17.625C20.5245 20.875 22.875 18.5245 22.875 15.625C22.875 13.1535 21.1672 11.0809 18.8673 10.5229C18.6239 10.4638 18.5022 10.4343 18.4397 10.3633C18.3772 10.2923 18.3635 10.1696 18.3362 9.92426C17.9878 6.80234 15.3399 4.375 12.125 4.375C9.20171 4.375 6.74772 6.38153 6.06431 9.09283C6.01491 9.28884 5.9902 9.38684 5.93372 9.4447C5.87724 9.50255 5.77924 9.52976 5.58325 9.58419Z',
  d7: 'M3.5346 7.58974C3.34879 7.26475 3.22813 6.91997 3.16869 6.5705C4.16672 6.81452 5.25676 6.68739 6.2176 6.1272C7.17738 5.56763 7.82838 4.68113 8.11629 3.69119C8.37869 3.91448 8.60811 4.18719 8.79034 4.50591C8.91299 4.72044 9.00694 4.94288 9.07374 5.16909C9.65058 4.84579 10.2839 4.61133 10.9553 4.48424C10.8484 4.15221 10.7058 3.82676 10.5266 3.51324C9.84536 2.32171 8.75418 1.51131 7.53487 1.1634C7.2124 1.07138 6.86527 1.14713 6.61044 1.36511C6.35561 1.5831 6.22701 1.91431 6.26797 2.24714C6.37223 3.09444 5.97606 3.95292 5.21026 4.39941C4.44652 4.84468 3.52218 4.76024 2.85599 4.25176C2.58862 4.04769 2.23658 3.9917 1.91909 4.10275C1.60161 4.21381 1.36122 4.47702 1.27934 4.80325C0.969854 6.0364 1.11737 7.39136 1.79834 8.58242C2.27307 9.41277 2.94576 10.0572 3.7222 10.4896C4.27537 10.0829 4.90401 9.77279 5.58325 9.58417C5.77924 9.52974 5.87724 9.50253 5.93372 9.44468C5.98722 9.38988 6.01221 9.29906 6.05668 9.12305C5.04887 9.0863 4.07904 8.54201 3.5346 7.58974Z',
  d8: 'M12.5787 15L10.5 18.5H13.5003L11.4219 22',
  d9: 'M11.7182 15.2285L13.4377 16.2498L12.2562 18.2392H15.2564L12.281 23.2498L10.5613 22.2286L11.7427 20.2392H8.74219L11.7182 15.2285Z',
  d10: 'M1.95853 8.57974C2.46175 9.45844 3.17654 10.139 4.00113 10.5931C2.35088 11.6037 1.25 13.4231 1.25 15.5C1.25 18.4777 3.51338 20.9267 6.41354 21.2205L11.1932 13.1729L15.4922 15.7261L14.8905 16.7392H17.8905L15.2118 21.25H17.5C20.3995 21.25 22.75 18.8995 22.75 16C22.75 13.3541 20.7927 11.1653 18.2469 10.8027C18.1428 7.44224 15.3858 4.75 12 4.75C11.9067 4.75 11.8139 4.75204 11.7216 4.75609C11.6072 4.24066 11.4145 3.73438 11.1397 3.25455C10.4229 2.00293 9.27509 1.152 7.99255 0.78665C7.68421 0.698817 7.35231 0.771121 7.10866 0.9792C6.86501 1.18728 6.74204 1.50343 6.7812 1.82114C6.89893 2.77626 6.45189 3.74549 5.58504 4.25004C4.72017 4.75344 3.67359 4.65753 2.91993 4.08326C2.66429 3.88846 2.32768 3.83502 2.02412 3.94102C1.72056 4.04703 1.49072 4.29828 1.41243 4.60968C1.08672 5.9053 1.242 7.32856 1.95853 8.57974ZM3.185 6.31676C3.23715 6.76732 3.37942 7.21446 3.61864 7.63218C4.14484 8.551 5.02726 9.12892 5.98611 9.29297C6.53241 7.36479 7.98051 5.81594 9.84591 5.13109C9.77166 4.81354 9.65063 4.50083 9.47955 4.20211C9.24355 3.79001 8.93636 3.44692 8.58292 3.17891C8.30957 4.28356 7.60885 5.28195 6.5482 5.8993C5.48709 6.51692 4.27537 6.63082 3.185 6.31676Z',
} as const;

export const IconMoonCloudAngledZapStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-angled-zap-stroke-rounded IconMoonCloudAngledZapStrokeRounded"
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

export const IconMoonCloudAngledZapDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-angled-zap-duotone-rounded IconMoonCloudAngledZapDuotoneRounded"
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

export const IconMoonCloudAngledZapTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-angled-zap-twotone-rounded IconMoonCloudAngledZapTwotoneRounded"
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

export const IconMoonCloudAngledZapSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-angled-zap-solid-rounded IconMoonCloudAngledZapSolidRounded"
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

export const IconMoonCloudAngledZapBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-angled-zap-bulk-rounded IconMoonCloudAngledZapBulkRounded"
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

export const IconMoonCloudAngledZapStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-angled-zap-stroke-sharp IconMoonCloudAngledZapStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMoonCloudAngledZapSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-angled-zap-solid-sharp IconMoonCloudAngledZapSolidSharp"
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

export const iconPackOfMoonCloudAngledZap: TheIconSelfPack = {
  name: 'MoonCloudAngledZap',
  StrokeRounded: IconMoonCloudAngledZapStrokeRounded,
  DuotoneRounded: IconMoonCloudAngledZapDuotoneRounded,
  TwotoneRounded: IconMoonCloudAngledZapTwotoneRounded,
  SolidRounded: IconMoonCloudAngledZapSolidRounded,
  BulkRounded: IconMoonCloudAngledZapBulkRounded,
  StrokeSharp: IconMoonCloudAngledZapStrokeSharp,
  SolidSharp: IconMoonCloudAngledZapSolidSharp,
};