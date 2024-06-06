import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 9.68065V8.90856C3 7.41174 3 6.66334 3.28359 6.03142C3.4585 5.64167 3.70911 5.28869 4.02157 4.99198C4.52818 4.51091 5.2461 4.24813 6.68195 3.72256L9.62992 2.64351C10.802 2.2145 11.388 2 12 2C12.612 2 13.198 2.2145 14.3701 2.64351L17.3181 3.72256C18.7539 4.24813 19.4718 4.51091 19.9784 4.99198C20.2909 5.28869 20.5415 5.64167 20.7164 6.03142C21 6.66334 21 7.41174 21 8.90856V9.68065C21 12.0844 21 13.2863 20.7032 14.3862C20.3367 15.7445 19.6418 16.9973 18.6769 18.0394C17.8955 18.8832 16.8645 19.5402 14.8023 20.8542C13.8792 21.4424 13.4176 21.7365 12.9269 21.8733C12.3211 22.0422 11.6789 22.0422 11.0731 21.8733C10.5824 21.7365 10.1208 21.4424 9.19766 20.8542C7.13553 19.5402 6.10447 18.8832 5.32311 18.0394C4.35815 16.9973 3.66328 15.7445 3.29677 14.3862C3 13.2863 3 12.0844 3 9.68065Z',
  d2: 'M8 9.47776C9.14883 8.54314 10.5209 8 11.9946 8C13.4729 8 14.849 8.54657 16 9.48661M14.1743 12C13.5182 11.5909 12.7779 11.3607 11.9946 11.3607C11.2152 11.3607 10.4784 11.5886 9.82477 11.9938',
  d3: 'M12 15H12.0064',
  d4: 'M12.0001 1.25C11.2533 1.25 10.5485 1.50823 9.49567 1.894L9.37222 1.93921L6.42425 3.01826L6.26414 3.07682C4.9837 3.54491 4.12632 3.85833 3.50523 4.44812C3.12258 4.81148 2.81469 5.24471 2.59944 5.72435C2.24903 6.50514 2.24944 7.40725 2.25005 8.7381L2.2501 8.90856V9.68065L2.2501 9.80767C2.24999 12.0905 2.24993 13.385 2.57277 14.5815C2.97122 16.0583 3.72624 17.4186 4.77291 18.5489C5.62039 19.4642 6.72735 20.1695 8.68861 21.4191L8.68867 21.4191L8.79473 21.4867L8.89544 21.5509C9.72131 22.0775 10.2719 22.4285 10.8718 22.5958C11.6094 22.8014 12.3908 22.8014 13.1284 22.5958C13.7283 22.4285 14.2789 22.0775 15.1048 21.5509L15.2055 21.4867L15.3115 21.4191C17.2728 20.1695 18.3798 19.4642 19.2273 18.5489C20.274 17.4186 21.029 16.0583 21.4274 14.5815C21.7503 13.385 21.7502 12.0905 21.7501 9.80768L21.7501 8.90856L21.7502 8.7381V8.73808C21.7508 7.40724 21.7512 6.50513 21.4008 5.72435C21.1855 5.24471 20.8776 4.81148 20.495 4.44812C19.8739 3.85833 19.0165 3.54491 17.7361 3.07682L17.5759 3.01826L14.628 1.93921L14.5045 1.894C13.4517 1.50823 12.747 1.25 12.0001 1.25ZM11.9946 7C10.2653 7 8.67508 7.63946 7.36896 8.70203C6.94054 9.05057 6.87578 9.68041 7.22431 10.1088C7.57284 10.5373 8.20269 10.602 8.63111 10.2535C9.62265 9.44682 10.7765 9 11.9946 9C13.2165 9 14.3738 9.44963 15.3675 10.2611C15.7952 10.6105 16.4252 10.5469 16.7746 10.1192C17.1239 9.6914 17.0603 9.06143 16.6326 8.71209C15.3241 7.64352 13.7294 7 11.9946 7ZM11.9946 10.3607C11.0147 10.3607 10.0971 10.6484 9.29784 11.144C8.82846 11.435 8.68388 12.0514 8.97491 12.5208C9.26595 12.9902 9.88239 13.1348 10.3518 12.8437C10.8597 12.5288 11.4157 12.3607 11.9946 12.3607C12.5764 12.3607 13.1351 12.5304 13.6452 12.8485C14.1138 13.1408 14.7306 12.9978 15.0228 12.5291C15.3151 12.0605 15.1721 11.4437 14.7034 11.1515C13.9013 10.6513 12.9795 10.3607 11.9946 10.3607ZM11 15C11 14.4477 11.4477 14 12 14H12.0064C12.5587 14 13.0064 14.4477 13.0064 15C13.0064 15.5523 12.5587 16 12.0064 16H12C11.4477 16 11 15.5523 11 15Z',
  d5: 'M9.49567 1.894C10.5485 1.50823 11.2533 1.25 12.0001 1.25C12.747 1.25 13.4517 1.50823 14.5045 1.894C14.5452 1.90888 14.5863 1.92395 14.628 1.93921L17.5759 3.01826C17.63 3.03806 17.6834 3.05757 17.7361 3.07682C19.0165 3.54491 19.8739 3.85833 20.495 4.44812C20.8776 4.81148 21.1855 5.24471 21.4008 5.72435C21.7512 6.50514 21.7508 7.40725 21.7502 8.7381C21.7501 8.79415 21.7501 8.85096 21.7501 8.90856L21.7501 9.80768C21.7502 12.0905 21.7503 13.385 21.4274 14.5815C21.029 16.0583 20.274 17.4186 19.2273 18.5489C18.3798 19.4642 17.2728 20.1695 15.3115 21.4191L15.2055 21.4867C15.1714 21.5084 15.1379 21.5298 15.1048 21.5509C14.2789 22.0775 13.7283 22.4285 13.1284 22.5958C12.3908 22.8014 11.6094 22.8014 10.8718 22.5958C10.2719 22.4285 9.72131 22.0775 8.89544 21.5509C8.86232 21.5298 8.82876 21.5084 8.79473 21.4867L8.68867 21.4191C6.72737 20.1695 5.6204 19.4642 4.77291 18.5489C3.72624 17.4186 2.97122 16.0583 2.57277 14.5815C2.24993 13.385 2.24999 12.0905 2.2501 9.80767C2.2501 9.76567 2.2501 9.72333 2.2501 9.68065V8.90856C2.2501 8.85097 2.25007 8.79415 2.25005 8.7381C2.24944 7.40725 2.24903 6.50514 2.59944 5.72435C2.81469 5.24471 3.12258 4.81148 3.50523 4.44812C4.12632 3.85833 4.9837 3.54491 6.26414 3.07682C6.31679 3.05757 6.37016 3.03806 6.42425 3.01826L9.37222 1.93921C9.4139 1.92395 9.45504 1.90888 9.49567 1.894Z',
  d6: 'M11.9946 7C10.2653 7 8.67508 7.63946 7.36896 8.70203C6.94054 9.05057 6.87578 9.68041 7.22431 10.1088C7.57284 10.5373 8.20269 10.602 8.63111 10.2535C9.62265 9.44682 10.7765 9 11.9946 9C13.2165 9 14.3738 9.44963 15.3675 10.2611C15.7952 10.6105 16.4252 10.5469 16.7746 10.1192C17.1239 9.6914 17.0603 9.06143 16.6326 8.71209C15.3241 7.64352 13.7294 7 11.9946 7Z',
  d7: 'M11.9946 10.3607C11.0147 10.3607 10.0971 10.6484 9.29784 11.144C8.82846 11.435 8.68388 12.0514 8.97491 12.5208C9.26595 12.9902 9.88239 13.1348 10.3518 12.8437C10.8598 12.5288 11.4157 12.3607 11.9946 12.3607C12.5764 12.3607 13.1351 12.5304 13.6452 12.8485C14.1138 13.1408 14.7306 12.9978 15.0228 12.5291C15.3151 12.0605 15.1721 11.4437 14.7034 11.1515C13.9013 10.6513 12.9795 10.3607 11.9946 10.3607Z',
  d8: 'M12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16H12.0064C12.5587 16 13.0064 15.5523 13.0064 15C13.0064 14.4477 12.5587 14 12.0064 14H12Z',
  d9: 'M3.01404 5V4.25H2.41981L2.28392 4.82849L3.01404 5ZM12 22.0001L11.8426 22.7334L12 22.7672L12.1573 22.7334L12 22.0001ZM20.986 5L21.7161 4.82849L21.5802 4.25H20.986V5ZM12 1.25C10.0331 1.25 8.49852 2.10185 7.14373 2.84177C5.75128 3.60226 4.53976 4.25 3.01404 4.25V5.75C4.97624 5.75 6.50867 4.89774 7.86271 4.15823C9.25441 3.39815 10.4689 2.75 12 2.75V1.25ZM12.1573 21.2668C5.67039 19.8748 1.82034 13.3613 3.74417 5.17151L2.28392 4.82849C0.214337 13.6387 4.34956 21.1255 11.8426 22.7334L12.1573 21.2668ZM12 2.75C13.5383 2.75 14.7542 3.39851 16.1437 4.15809C17.4961 4.89737 19.0254 5.75 20.986 5.75V4.25C19.4625 4.25 18.2548 3.60263 16.8632 2.84191C15.5088 2.10149 13.9737 1.25 12 1.25V2.75ZM12.1573 22.7334C19.6503 21.1255 23.7857 13.6387 21.7161 4.82849L20.2558 5.17151C22.1797 13.3613 18.3295 19.8748 11.8426 21.2668L12.1573 22.7334Z',
  d10: 'M7.99512 9.47776C9.14395 8.54314 10.516 8 11.9897 8C13.468 8 14.8441 8.54657 15.9951 9.48661M14.1694 12C13.5133 11.5909 12.773 11.3607 11.9897 11.3607C11.2103 11.3607 10.4735 11.5886 9.81989 11.9938',
  d11: 'M11.9951 15H12.0015',
  d12: 'M12.0008 1.25098C10.0583 1.25098 8.53761 2.08105 7.19524 2.81378L7.14449 2.84148C5.75204 3.60136 4.54052 4.24858 3.01481 4.24858H2.42057L2.28468 4.82661C0.215101 13.6298 4.35032 21.1106 11.8434 22.7172L12.0007 22.751L12.1581 22.7172C19.6511 21.1106 23.7864 13.6298 21.7168 4.82661L21.581 4.24858H20.9867C19.4633 4.24858 18.2556 3.60173 16.864 2.84161L16.8185 2.81679C15.4752 2.08289 13.9524 1.25098 12.0008 1.25098ZM11.9879 8.00098C10.2586 8.00098 8.66843 8.64044 7.3623 9.70301L8.62446 11.2545C9.616 10.4478 10.7699 10.001 11.9879 10.001C13.2098 10.001 14.3672 10.4506 15.3608 11.2621L16.6259 9.71306C15.3175 8.64449 13.7228 8.00098 11.9879 8.00098ZM11.9879 11.3617C11.0081 11.3617 10.0905 11.6493 9.29118 12.1449L10.3451 13.8447C10.8531 13.5297 11.409 13.3617 11.9879 13.3617C12.5697 13.3617 13.1284 13.5314 13.6385 13.8495L14.6968 12.1524C13.8947 11.6523 12.9728 11.3617 11.9879 11.3617ZM10.9951 16.001C10.9951 15.4487 11.4428 15.001 11.9951 15.001H12.0015C12.5538 15.001 13.0015 15.4487 13.0015 16.001C13.0015 16.5533 12.5538 17.001 12.0015 17.001H11.9951C11.4428 17.001 10.9951 16.5533 10.9951 16.001Z',
};

export const IconSecurityWifiStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-wifi-stroke-rounded IconSecurityWifiStrokeRounded"
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

export const IconSecurityWifiDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-wifi-duotone-rounded IconSecurityWifiDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconSecurityWifiTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-wifi-twotone-rounded IconSecurityWifiTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconSecurityWifiSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-wifi-solid-rounded IconSecurityWifiSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSecurityWifiBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-wifi-bulk-rounded IconSecurityWifiBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSecurityWifiStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-wifi-stroke-sharp IconSecurityWifiStrokeSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSecurityWifiSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-wifi-solid-sharp IconSecurityWifiSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSecurityWifi: TheIconSelfPack = {
  name: 'SecurityWifi',
  StrokeRounded: IconSecurityWifiStrokeRounded,
  DuotoneRounded: IconSecurityWifiDuotoneRounded,
  TwotoneRounded: IconSecurityWifiTwotoneRounded,
  SolidRounded: IconSecurityWifiSolidRounded,
  BulkRounded: IconSecurityWifiBulkRounded,
  StrokeSharp: IconSecurityWifiStrokeSharp,
  SolidSharp: IconSecurityWifiSolidSharp,
};