import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 6C6.37274 6.02975 5.43781 6.1682 4.80546 6.81237C4 7.63289 4 8.9535 4 11.5947V16.3971C4 19.0384 4 20.359 4.80546 21.1795C5.61091 22 6.90728 22 9.5 22C12.0927 22 13.3891 22 14.1945 21.1795C15 20.359 15 19.0384 15 16.3971V13.4958',
  d2: 'M9.5 19H9.50898',
  d3: 'M10 3.8472C11.436 2.67893 13.1511 2 14.9932 2C16.8411 2 18.5612 2.68322 20 3.85827M17.7178 7C16.8977 6.48859 15.9724 6.20085 14.9932 6.20085C14.019 6.20085 13.098 6.4857 12.281 6.99231',
  d4: 'M15 10H15.0064',
  d5: 'M4 11.5947V16.3972C4 19.0384 4 20.359 4.80546 21.1795C5.61091 22 6.90728 22 9.5 22C12.0927 22 13.3891 22 14.1945 21.1795C15 20.359 15 19.0384 15 16.3972V12C15 9.17157 15 7.75736 14.1213 6.87868C13.2426 6 11.8284 6 9 6H8C6.37274 6.02975 5.43781 6.1682 4.80546 6.81237C4 7.63289 4 8.9535 4 11.5947Z',
  d6: 'M7.72886 5.26575C7.85842 5.26234 7.97901 5.32677 8.06078 5.42733C8.41234 5.85969 8.87839 6.14397 9.37966 6.27202C9.60977 6.3308 9.72482 6.36019 9.76724 6.41869C9.80965 6.47718 9.80182 6.59566 9.78616 6.8326C9.75293 7.3353 9.87074 7.85278 10.1563 8.3136C10.5815 8.99963 11.2844 9.40827 12.0294 9.4842C12.2691 9.50863 12.3889 9.52084 12.4386 9.56856C12.4474 9.57701 12.4501 9.58004 12.4576 9.58964C12.5001 9.64392 12.5001 9.76419 12.5001 10.0047C12.5001 11.3861 13.6194 12.506 15.0001 12.506H15.0064C15.0776 12.506 15.1481 12.503 15.2178 12.4971C15.4866 12.4746 15.621 12.4634 15.6856 12.5228C15.7502 12.5822 15.7502 12.7004 15.7502 12.9369V16.4617C15.7502 17.7365 15.7502 18.7681 15.6426 19.5804C15.5308 20.4245 15.2908 21.1436 14.726 21.7169C14.1597 22.2917 13.4469 22.5374 12.6102 22.6516C11.8079 22.7611 10.7898 22.7611 9.53566 22.7611H9.42559C8.17142 22.7611 7.1533 22.7611 6.35101 22.6516C5.51432 22.5374 4.8015 22.2917 4.23522 21.7169C3.51863 20.9895 3.32174 20.0232 3.25152 18.8541L3.25 18.8287L3.33072 8.34395L3.33892 8.29037C3.45879 7.50704 3.70295 6.83679 4.23522 6.2965C4.8015 5.72168 5.51432 5.476 6.35101 5.36181C6.75478 5.30671 7.21319 5.27934 7.72886 5.26575ZM8.5 19.0092C8.5 18.4566 8.94772 18.0087 9.5 18.0087H9.50898C10.0613 18.0087 10.509 18.4566 10.509 19.0092C10.509 19.5617 10.0613 20.0097 9.50898 20.0097H9.5C8.94772 20.0097 8.5 19.5617 8.5 19.0092Z',
  d7: 'M14.9932 1C12.8955 1 10.9623 1.77525 9.36896 3.07147C8.94054 3.42001 8.87578 4.04985 9.22431 4.47827C9.57284 4.90669 10.2027 4.97145 10.6311 4.62292C11.9099 3.58261 13.4067 3 14.9932 3C16.5847 3 18.0861 3.58627 19.3675 4.63279C19.7952 4.98214 20.4252 4.91857 20.7746 4.49081C21.1239 4.06305 21.0603 3.43308 20.6326 3.08374C19.0364 1.78016 17.0976 1 14.9932 1Z',
  d8: 'M14.9932 5.20085C13.8185 5.20085 12.7167 5.5455 11.754 6.14242C11.2846 6.43346 11.1401 7.04989 11.4311 7.51927C11.7221 7.98865 12.3386 8.13323 12.808 7.8422C13.4794 7.4259 14.2195 7.20085 14.9932 7.20085C15.7709 7.20085 16.5146 7.42816 17.1887 7.84854C17.6574 8.14077 18.2742 7.99777 18.5664 7.52913C18.8586 7.0605 18.7156 6.44369 18.247 6.15146C17.2809 5.54901 16.174 5.20085 14.9932 5.20085Z',
  d9: 'M15 9C14.4477 9 14 9.44771 14 10C14 10.5523 14.4477 11 15 11H15.0064C15.5587 11 16.0064 10.5523 16.0064 10C16.0064 9.44771 15.5587 9 15.0064 9H15Z',
  d10: 'M8 6H4V22H15V13.4958',
  d11: 'M3.99902 5.25H8.95219L12.6209 10.25C12.6209 11.6262 13.7343 12.75 15.1178 12.75H15.1241C15.3401 12.75 15.5494 12.7226 15.749 12.6712V22C15.749 22.4142 15.4132 22.75 14.999 22.75H3.99902C3.58481 22.75 3.24902 22.4142 3.24902 22V6C3.24902 5.58579 3.58481 5.25 3.99902 5.25ZM10.499 18H8.49902V20H10.499V18Z',
  d12: 'M15.1116 1.25C13.0139 1.25 11.0806 2.02525 9.4873 3.32147L10.7495 4.87292C12.0282 3.83261 13.5251 3.25 15.1116 3.25C16.7031 3.25 18.2044 3.83627 19.4858 4.88279L20.7509 3.33374C19.1547 2.03016 17.216 1.25 15.1116 1.25Z',
  d13: 'M15.1116 5.45085C13.9368 5.45085 12.8351 5.7955 11.8724 6.39242L12.9263 8.0922C13.5977 7.6759 14.3378 7.45085 15.1116 7.45085C15.8892 7.45085 16.6329 7.67816 17.3071 8.09854L18.3653 6.40146C17.3992 5.79901 16.2923 5.45085 15.1116 5.45085Z',
  d14: 'M15.117 9.25C14.5664 9.25 14.1201 9.69771 14.1201 10.25C14.1201 10.8023 14.5664 11.25 15.117 11.25H15.1233C15.6738 11.25 16.1201 10.8023 16.1201 10.25C16.1201 9.69771 15.6738 9.25 15.1233 9.25H15.117Z',
} as const;

export const IconSmartphoneWifiStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smartphone-wifi-stroke-rounded IconSmartphoneWifiStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartphoneWifiDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smartphone-wifi-duotone-rounded IconSmartphoneWifiDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartphoneWifiTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smartphone-wifi-twotone-rounded IconSmartphoneWifiTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartphoneWifiSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smartphone-wifi-solid-rounded IconSmartphoneWifiSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const IconSmartphoneWifiBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smartphone-wifi-bulk-rounded IconSmartphoneWifiBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const IconSmartphoneWifiStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smartphone-wifi-stroke-sharp IconSmartphoneWifiStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartphoneWifiSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smartphone-wifi-solid-sharp IconSmartphoneWifiSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSmartphoneWifi: TheIconSelfPack = {
  name: 'SmartphoneWifi',
  StrokeRounded: IconSmartphoneWifiStrokeRounded,
  DuotoneRounded: IconSmartphoneWifiDuotoneRounded,
  TwotoneRounded: IconSmartphoneWifiTwotoneRounded,
  SolidRounded: IconSmartphoneWifiSolidRounded,
  BulkRounded: IconSmartphoneWifiBulkRounded,
  StrokeSharp: IconSmartphoneWifiStrokeSharp,
  SolidSharp: IconSmartphoneWifiSolidSharp,
};