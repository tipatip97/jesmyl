import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 16V22M14.5 17.5L9.50013 20.5M9.5 17.5L14.4999 20.5',
  d2: 'M17.4776 11.045C17.485 11.045 17.4925 11.0449 17.5 11.0449C19.9853 11.0449 22 13.0747 22 15.5786C22 17.7363 20.504 19.5419 18.5 20M17.4776 11.045C17.4924 10.8791 17.5 10.711 17.5 10.5412C17.5 7.48088 15.0376 5 12 5C9.12324 5 6.76233 7.22516 6.52042 10.0603M17.4776 11.045C17.395 11.9686 16.9769 12.7631 16.5 13.5M6.52042 10.0603C3.98398 10.3035 2 12.4558 2 15.0749C2 17.3305 3.47145 19.2398 5.5 19.8817M6.52042 10.0603C6.67826 10.0452 6.83823 10.0374 7 10.0374C8.12582 10.0374 9.16474 10.4123 10.0005 11.0449',
  d3: 'M10 5.13829C9.91652 4.70849 9.76249 4.28506 9.53351 3.88456C8.98606 2.92704 8.11203 2.27864 7.13552 2C7.28642 3.22635 6.71543 4.48154 5.58897 5.13829C4.46251 5.79504 3.10057 5.66681 2.1243 4.92166C1.87501 5.91497 1.99406 7.00354 2.54151 7.96107C3.48512 9.61151 5.39904 10.3436 7.13552 9.84664',
  d4: 'M17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.7614 4.23858 20 7 20H17.5C19.9853 20 22 17.9853 22 15.5C22 13.0147 19.9853 11 17.5 11L17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5Z',
  d5: 'M12.1252 14.875C12.6774 14.875 13.1252 15.3227 13.1252 15.875V17.1088L14.1106 16.5175C14.5842 16.2334 15.1985 16.3869 15.4826 16.8605C15.7668 17.3341 15.6132 17.9483 15.1397 18.2325L14.0688 18.875L15.1395 19.5175C15.6131 19.8017 15.7667 20.4159 15.4825 20.8895C15.1984 21.3631 14.5841 21.5166 14.1105 21.2325L13.1252 20.6413V21.875C13.1252 22.4273 12.6774 22.875 12.1252 22.875C11.5729 22.875 11.1252 22.4273 11.1252 21.875V20.6413L10.1398 21.2325C9.66621 21.5166 9.05195 21.3631 8.76779 20.8895C8.48364 20.4159 8.6372 19.8017 9.11078 19.5175L10.1815 18.875L9.11065 18.2325C8.63707 17.9483 8.48351 17.3341 8.76766 16.8605C9.05182 16.3869 9.66608 16.2334 10.1397 16.5175L11.1252 17.1088V15.875C11.1252 15.3227 11.5729 14.875 12.1252 14.875Z',
  d6: 'M6.06431 9.09283C6.01491 9.28884 5.9902 9.38684 5.93372 9.4447C5.87724 9.50255 5.77924 9.52976 5.58325 9.58419C3.15606 10.2582 1.375 12.4833 1.375 15.125C1.375 18.3006 3.94936 20.875 7.125 20.875C7.151 20.875 7.17044 20.8511 7.16576 20.8256C7.06764 20.2895 7.14922 19.738 7.38899 19.2572C7.49251 19.0496 7.54427 18.9457 7.54427 18.8751C7.54427 18.8044 7.4925 18.7006 7.38895 18.493C7.02055 17.7543 7.02548 16.849 7.48166 16.0887C7.90848 15.3774 8.63322 14.9549 9.40059 14.885C9.6222 14.8648 9.733 14.8547 9.79182 14.8194C9.85064 14.7841 9.91173 14.691 10.0339 14.5049C10.4806 13.8244 11.2505 13.375 12.1254 13.375C13.0002 13.375 13.7701 13.8244 14.2169 14.5049C14.339 14.691 14.4001 14.7841 14.4589 14.8194C14.5177 14.8547 14.6286 14.8648 14.8502 14.885C15.6175 14.9549 16.3423 15.3774 16.7691 16.0887C17.2253 16.849 17.2302 17.7543 16.8618 18.493C16.7583 18.7006 16.7065 18.8044 16.7065 18.8751C16.7065 18.9457 16.7582 19.0496 16.8618 19.2572C17.0277 19.59 17.1179 19.9568 17.1252 20.3288C17.1292 20.5357 17.1312 20.6392 17.1542 20.6929C17.1899 20.7765 17.2332 20.819 17.3174 20.8531C17.3716 20.875 17.4561 20.875 17.625 20.875C20.5245 20.875 22.875 18.5245 22.875 15.625C22.875 13.1535 21.1672 11.0809 18.8673 10.5229C18.6239 10.4638 18.5022 10.4343 18.4397 10.3633C18.3772 10.2923 18.3635 10.1696 18.3362 9.92424C17.9878 6.80231 15.3399 4.375 12.125 4.375C9.20171 4.375 6.74772 6.38153 6.06431 9.09283Z',
  d7: 'M3.5346 7.58974C3.34879 7.26475 3.22813 6.91997 3.16869 6.5705C4.16672 6.81452 5.25676 6.68739 6.2176 6.1272C7.17738 5.56763 7.82838 4.68113 8.11629 3.69119C8.37869 3.91448 8.60811 4.18719 8.79034 4.50591C8.91299 4.72044 9.00694 4.94288 9.07374 5.16909C9.65058 4.84579 10.2839 4.61133 10.9553 4.48424C10.8484 4.15221 10.7058 3.82676 10.5266 3.51324C9.84536 2.32171 8.75418 1.51131 7.53487 1.1634C7.2124 1.07138 6.86527 1.14713 6.61044 1.36511C6.35561 1.5831 6.22701 1.91431 6.26797 2.24714C6.37223 3.09444 5.97606 3.95292 5.21026 4.39941C4.44652 4.84468 3.52218 4.76024 2.85599 4.25176C2.58862 4.04769 2.23658 3.9917 1.91909 4.10275C1.60161 4.21381 1.36122 4.47702 1.27934 4.80325C0.969854 6.0364 1.11737 7.39136 1.79834 8.58242C2.27307 9.41277 2.94576 10.0572 3.7222 10.4896C4.27537 10.0829 4.90401 9.77279 5.58325 9.58417C5.77924 9.52974 5.87724 9.50253 5.93372 9.44468C5.98722 9.38988 6.01221 9.29906 6.05668 9.12305C5.04887 9.0863 4.07904 8.54201 3.5346 7.58974Z',
  d8: 'M11 18.009V16.25H13V18.009L14.4961 17.1362L15.5039 18.8638L13.9846 19.75L15.5037 20.6362L14.4959 22.3638L13 21.4911V23.25H11V21.4911L9.50401 22.3638L8.49625 20.6362L10.0154 19.75L8.49609 18.8638L9.50386 17.1362L11 18.009Z',
  d9: 'M4.00113 10.5931C3.17654 10.139 2.46175 9.45844 1.95853 8.57974C1.242 7.32856 1.08672 5.9053 1.41243 4.60968C1.49072 4.29828 1.72056 4.04703 2.02412 3.94102C2.32768 3.83502 2.66429 3.88846 2.91993 4.08326C3.67359 4.65753 4.72017 4.75344 5.58504 4.25004C6.45189 3.74549 6.89893 2.77626 6.7812 1.82114C6.74204 1.50343 6.86501 1.18728 7.10866 0.9792C7.35231 0.771121 7.68421 0.698817 7.99255 0.78665C9.27509 1.152 10.4229 2.00293 11.1397 3.25455C11.4145 3.73438 11.6072 4.24066 11.7216 4.75609C11.8139 4.75204 11.9067 4.75 12 4.75C15.3858 4.75 18.1428 7.44224 18.2469 10.8027C20.7927 11.1653 22.75 13.3541 22.75 16C22.75 18.8995 20.3995 21.25 17.5 21.25H16.8829L17.5559 19.75L14.8626 14.75H9.10719L6.33467 19.75L7.11843 21.25H7C3.82436 21.25 1.25 18.6756 1.25 15.5C1.25 13.4231 2.35088 11.6037 4.00113 10.5931ZM3.61723 7.63198C3.37801 7.21426 3.23574 6.76712 3.18359 6.31656C4.27396 6.63062 5.48568 6.51672 6.54679 5.8991C7.60744 5.28175 8.30816 4.28336 8.58151 3.17871C8.93495 3.44672 9.24214 3.78981 9.47814 4.20191C9.64922 4.50063 9.77025 4.81334 9.8445 5.13089C7.9791 5.81574 6.531 7.36459 5.9847 9.29277C5.02585 9.12872 4.14343 8.55081 3.61723 7.63198Z',
} as const;

export const IconMoonCloudMidSnowStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-mid-snow-stroke-rounded IconMoonCloudMidSnowStrokeRounded"
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

export const IconMoonCloudMidSnowDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-mid-snow-duotone-rounded IconMoonCloudMidSnowDuotoneRounded"
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
        d={d.d3} 
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

export const IconMoonCloudMidSnowTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-mid-snow-twotone-rounded IconMoonCloudMidSnowTwotoneRounded"
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

export const IconMoonCloudMidSnowSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-mid-snow-solid-rounded IconMoonCloudMidSnowSolidRounded"
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

export const IconMoonCloudMidSnowBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-mid-snow-bulk-rounded IconMoonCloudMidSnowBulkRounded"
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

export const IconMoonCloudMidSnowStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-mid-snow-stroke-sharp IconMoonCloudMidSnowStrokeSharp"
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

export const IconMoonCloudMidSnowSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-mid-snow-solid-sharp IconMoonCloudMidSnowSolidSharp"
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

export const iconPackOfMoonCloudMidSnow: TheIconSelfPack = {
  name: 'MoonCloudMidSnow',
  StrokeRounded: IconMoonCloudMidSnowStrokeRounded,
  DuotoneRounded: IconMoonCloudMidSnowDuotoneRounded,
  TwotoneRounded: IconMoonCloudMidSnowTwotoneRounded,
  SolidRounded: IconMoonCloudMidSnowSolidRounded,
  BulkRounded: IconMoonCloudMidSnowBulkRounded,
  StrokeSharp: IconMoonCloudMidSnowStrokeSharp,
  SolidSharp: IconMoonCloudMidSnowSolidSharp,
};