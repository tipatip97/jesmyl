import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 6C6.37274 6.02975 5.43781 6.1682 4.80546 6.81237C4 7.63289 4 8.9535 4 11.5947V16.3971C4 19.0384 4 20.359 4.80546 21.1795C5.61091 22 6.90728 22 9.5 22C12.0927 22 13.3891 22 14.1945 21.1795C15 20.359 15 19.0384 15 16.3971V13.4958',
  d2: 'M9.5 19H9.50898',
  d3: 'M20.4733 3.2654C20.7946 3.5268 20.8432 3.99919 20.5818 4.3205C20.3204 4.64182 19.848 4.69039 19.5267 4.42899L20.4733 3.2654ZM10.4744 4.43916C10.1536 4.70117 9.68111 4.65349 9.41911 4.33267C9.1571 4.01185 9.20477 3.53938 9.52559 3.27737L10.4744 4.43916ZM12.679 7.6364C12.3275 7.85558 11.8649 7.74833 11.6458 7.39685C11.4266 7.04537 11.5338 6.58277 11.8853 6.3636L12.679 7.6364ZM14.5509 2.76548C14.1377 2.79361 13.7799 2.48141 13.7517 2.06815C13.7236 1.6549 14.0358 1.29708 14.4491 1.26894L14.5509 2.76548ZM11.2701 2.14359C11.6407 1.95844 12.0911 2.10873 12.2763 2.47926C12.4614 2.84979 12.3111 3.30026 11.9406 3.4854L11.2701 2.14359ZM15.0068 1.25C17.0406 1.25 18.9193 2.00117 20.4733 3.2654L19.5267 4.42899C18.2086 3.35669 16.6572 2.75 15.0068 2.75V1.25ZM11.8853 6.3636C12.8149 5.7839 13.8765 5.45085 15.0068 5.45085V6.95085C14.1788 6.95085 13.3897 7.19327 12.679 7.6364L11.8853 6.3636ZM14.4491 1.26894C14.6338 1.25637 14.8197 1.25 15.0068 1.25V2.75C14.8538 2.75 14.7018 2.75521 14.5509 2.76548L14.4491 1.26894ZM9.52559 3.27737C10.0692 2.83339 10.6529 2.45199 11.2701 2.14359L11.9406 3.4854C11.4276 3.74176 10.9366 4.06166 10.4744 4.43916L9.52559 3.27737Z',
  d4: 'M11 2L18 9',
  d5: 'M15 10H15.0064',
  d6: 'M4 11.5947V16.3972C4 19.0384 4 20.359 4.80546 21.1795C5.61091 22 6.90728 22 9.5 22C12.0927 22 13.3891 22 14.1945 21.1795C15 20.359 15 19.0384 15 16.3972V12C15 9.17157 15 7.75736 14.1213 6.87868C13.2426 6 11.8284 6 9 6H8C6.37274 6.02975 5.43781 6.1682 4.80546 6.81237C4 7.63289 4 8.9535 4 11.5947Z',
  d7: 'M19.5267 4.42899C19.848 4.69039 20.3204 4.64182 20.5818 4.3205C20.8432 3.99919 20.7946 3.5268 20.4733 3.2654L19.5267 4.42899ZM11.8853 6.3636C11.5338 6.58277 11.4266 7.04537 11.6458 7.39685C11.8649 7.74833 12.3275 7.85558 12.679 7.6364L11.8853 6.3636ZM14.4491 1.26894C14.0358 1.29708 13.7236 1.6549 13.7517 2.06815C13.7799 2.48141 14.1377 2.79361 14.5509 2.76548L14.4491 1.26894ZM9.52559 3.27737C9.20477 3.53938 9.1571 4.01185 9.41911 4.33267C9.68111 4.65349 10.1536 4.70117 10.4744 4.43916L9.52559 3.27737ZM11.9406 3.4854C12.3111 3.30026 12.4614 2.84979 12.2763 2.47926C12.0911 2.10873 11.6407 1.95844 11.2701 2.14359L11.9406 3.4854ZM11.5303 1.46967C11.2374 1.17678 10.7626 1.17678 10.4697 1.46967C10.1768 1.76256 10.1768 2.23744 10.4697 2.53033L11.5303 1.46967ZM17.4697 9.53033C17.7626 9.82322 18.2374 9.82322 18.5303 9.53033C18.8232 9.23744 18.8232 8.76256 18.5303 8.46967L17.4697 9.53033ZM15.0068 2.75C16.6572 2.75 18.2086 3.35669 19.5267 4.42899L20.4733 3.2654C18.9193 2.00117 17.0406 1.25 15.0068 1.25V2.75ZM12.679 7.6364C13.3897 7.19327 14.1788 6.95085 15.0068 6.95085V5.45085C13.8765 5.45085 12.8149 5.7839 11.8853 6.3636L12.679 7.6364ZM14.5509 2.76548C14.7018 2.75521 14.8538 2.75 15.0068 2.75V1.25C14.8197 1.25 14.6338 1.25637 14.4491 1.26894L14.5509 2.76548ZM10.4744 4.43916C10.9366 4.06166 11.4276 3.74176 11.9406 3.4854L11.2701 2.14359C10.6529 2.45199 10.0692 2.83339 9.52559 3.27737L10.4744 4.43916ZM10.4697 2.53033L17.4697 9.53033L18.5303 8.46967L11.5303 1.46967L10.4697 2.53033Z',
  d8: 'M7.72886 5.26575C7.85842 5.26234 7.97901 5.32677 8.06078 5.42733C8.41234 5.85969 8.87839 6.14397 9.37966 6.27202C9.60977 6.3308 9.72482 6.36019 9.76724 6.41869C9.80965 6.47718 9.80182 6.59566 9.78616 6.8326C9.75293 7.3353 9.87074 7.85278 10.1563 8.3136C10.5815 8.99963 11.2844 9.40827 12.0294 9.4842C12.2691 9.50863 12.3889 9.52084 12.4386 9.56856C12.4474 9.57701 12.4501 9.58004 12.4576 9.58964C12.5001 9.64392 12.5001 9.76419 12.5001 10.0047C12.5001 11.3861 13.6194 12.506 15.0001 12.506H15.0064C15.0776 12.506 15.1481 12.503 15.2178 12.4971C15.4866 12.4746 15.621 12.4634 15.6856 12.5228C15.7502 12.5822 15.7502 12.7004 15.7502 12.9369V16.4617C15.7502 17.7365 15.7502 18.7681 15.6426 19.5804C15.5308 20.4245 15.2908 21.1436 14.726 21.7169C14.1597 22.2917 13.4469 22.5374 12.6102 22.6516C11.8079 22.7611 10.7898 22.7611 9.53566 22.7611H9.42559C8.17142 22.7611 7.1533 22.7611 6.35101 22.6516C5.51432 22.5374 4.8015 22.2917 4.23522 21.7169C3.51863 20.9895 3.32174 20.0232 3.25152 18.8541L3.25 18.8287L3.33072 8.34395L3.33892 8.29037C3.45879 7.50704 3.70295 6.83679 4.23522 6.2965C4.8015 5.72168 5.51432 5.476 6.35101 5.36181C6.75478 5.30671 7.21319 5.27934 7.72886 5.26575ZM8.5 19.0092C8.5 18.4566 8.94772 18.0087 9.5 18.0087H9.50898C10.0613 18.0087 10.509 18.4566 10.509 19.0092C10.509 19.5617 10.0613 20.0097 9.50898 20.0097H9.5C8.94772 20.0097 8.5 19.5617 8.5 19.0092Z',
  d9: 'M20.6311 3.07147C19.0378 1.77525 17.1046 1 15.0068 1C14.8141 1 14.6224 1.00656 14.4321 1.01952C13.8811 1.05703 13.4648 1.53413 13.5023 2.08513C13.5399 2.63614 14.0169 3.05241 14.568 3.0149C14.7131 3.00501 14.8595 3 15.0068 3C16.5933 3 18.0902 3.58261 19.369 4.62292C19.7974 4.97145 20.4272 4.90669 20.7758 4.47827C21.1243 4.04985 21.0595 3.42001 20.6311 3.07147Z',
  d10: 'M10.2929 1.29289C9.96241 1.62341 9.91162 2.12772 10.1406 2.51165C9.87485 2.68897 9.61696 2.88 9.36749 3.08374C8.93973 3.43308 8.87616 4.06305 9.2255 4.49081C9.57485 4.91857 10.2048 4.98214 10.6326 4.63279C10.9316 4.38862 11.2424 4.16966 11.5633 3.97744L13.0994 5.51359C12.6273 5.67205 12.1767 5.88732 11.7531 6.15146C11.2844 6.44369 11.1414 7.0605 11.4337 7.52913C11.7259 7.99777 12.3427 8.14077 12.8113 7.84854C13.4233 7.46695 14.0925 7.24444 14.7924 7.20663L17.2929 9.70711C17.6834 10.0976 18.3166 10.0976 18.7071 9.70711C19.0977 9.31658 19.0977 8.68342 18.7071 8.29289L11.7071 1.29289C11.3166 0.902369 10.6834 0.902369 10.2929 1.29289Z',
  d11: 'M15 9C14.4477 9 14 9.44771 14 10C14 10.5523 14.4477 11 15 11C15.5474 11 16.0064 10.55 16.0064 10C16.0064 9.44998 15.5474 9 15 9Z',
  d12: 'M8 6H4V22H15V13.4958',
  d13: 'M20 3.8472C18.564 2.67893 16.8489 2 15.0068 2C14.8367 2 14.6678 2.00579 14.5 2.01721M10 3.85827C10.4716 3.47313 10.9734 3.14083 11.5 2.8681M12.2822 7C13.03 6.5337 13.8652 6.25335 14.749 6.20752',
  d14: 'M3.99805 5.25049H8.40146L12.62 10.9997C12.62 12.376 13.7334 13.4997 15.1168 13.4997H15.1231C15.3391 13.4997 15.5485 13.4723 15.748 13.4209V22.0005C15.748 22.4147 15.4123 22.7505 14.998 22.7505H3.99805C3.58383 22.7505 3.24805 22.4147 3.24805 22.0005V6.00049C3.24805 5.58627 3.58383 5.25049 3.99805 5.25049ZM10.498 17.9995H8.49805V19.9995H10.498V17.9995Z',
  d15: 'M13.9014 4.11454L18.8297 9.04278L17.4155 10.457L15.1591 8.20062C15.1439 8.20045 15.1287 8.20036 15.1135 8.20036C14.3398 8.20036 13.5997 8.42541 12.9283 8.84171L11.8743 7.14193C12.3537 6.8447 12.8675 6.61002 13.4077 6.44929L11.8377 4.87932C11.4613 5.09168 11.0983 5.34021 10.7514 5.62243L9.48926 4.07099C9.77603 3.83769 10.0738 3.62127 10.3816 3.42321L9.62207 2.66373L11.0363 1.24951L12.2761 2.4893C13.1732 2.17164 14.1251 1.99951 15.1135 1.99951C17.2179 1.99951 19.1567 2.77967 20.7529 4.08325L19.4878 5.6323C18.2064 4.58578 16.705 3.99951 15.1135 3.99951C14.7027 3.99951 14.2979 4.03858 13.9014 4.11454Z',
  d16: 'M14.1221 10.9995C14.1221 10.4472 14.5684 9.99951 15.1189 9.99951H15.1252C15.6758 9.99951 16.1221 10.4472 16.1221 10.9995C16.1221 11.5518 15.6758 11.9995 15.1252 11.9995H15.1189C14.5684 11.9995 14.1221 11.5518 14.1221 10.9995Z',
};

export const IconSmartphoneLostWifiStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smartphone-lost-wifi-stroke-rounded IconSmartphoneLostWifiStrokeRounded"
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
        fill="var(--icon-fill)" 
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

export const IconSmartphoneLostWifiDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smartphone-lost-wifi-duotone-rounded IconSmartphoneLostWifiDuotoneRounded"
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
        fill="var(--icon-fill)" 
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

export const IconSmartphoneLostWifiTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smartphone-lost-wifi-twotone-rounded IconSmartphoneLostWifiTwotoneRounded"
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
        d={d.d7} 
        fill="var(--icon-fill)" 
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

export const IconSmartphoneLostWifiSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smartphone-lost-wifi-solid-rounded IconSmartphoneLostWifiSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartphoneLostWifiBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smartphone-lost-wifi-bulk-rounded IconSmartphoneLostWifiBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartphoneLostWifiStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smartphone-lost-wifi-stroke-sharp IconSmartphoneLostWifiStrokeSharp"
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSmartphoneLostWifiSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smartphone-lost-wifi-solid-sharp IconSmartphoneLostWifiSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSmartphoneLostWifi: TheIconSelfPack = {
  name: 'SmartphoneLostWifi',
  StrokeRounded: IconSmartphoneLostWifiStrokeRounded,
  DuotoneRounded: IconSmartphoneLostWifiDuotoneRounded,
  TwotoneRounded: IconSmartphoneLostWifiTwotoneRounded,
  SolidRounded: IconSmartphoneLostWifiSolidRounded,
  BulkRounded: IconSmartphoneLostWifiBulkRounded,
  StrokeSharp: IconSmartphoneLostWifiStrokeSharp,
  SolidSharp: IconSmartphoneLostWifiSolidSharp,
};