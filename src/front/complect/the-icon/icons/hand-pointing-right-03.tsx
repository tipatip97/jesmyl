import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 11.5004L16 12.5004C16 13.605 15.1046 14.5004 14 14.5004M14 14.5004L13 14.5004M14 14.5004C14.5523 14.5004 15 14.9481 15 15.5004C15 16.605 14.1046 17.5004 13 17.5004M13 17.5004L12 17.5004M13 17.5004C13.5235 17.5004 13.9217 17.9705 13.8356 18.4868L13.7785 18.8292C13.6178 19.7936 12.7834 20.5004 11.8057 20.5004L10.3332 20.5C8.15984 20.5 7.07313 20.5 6.20799 20.1689C5.70614 19.9769 5.06612 19.4703 4.60361 19.0652C4.20359 18.7148 3.69618 18.5 3.1644 18.5L1.99983 18.5M14 11.5002L20.5 11.5002C21.3284 11.5002 22 10.8286 22 10.0002C22 9.17178 21.3284 8.50021 20.5 8.50021L10.5376 8.5L12.163 6.8797C12.8761 6.16877 12.8111 4.99772 12.0235 4.36965C11.4209 3.88907 10.5685 3.8758 9.95109 4.33738L5.35288 7.93707C4.47312 8.62579 3.11711 9 1.99983 9',
  d2: 'M16 12.5004L16 11.5002L20.5 11.5002C21.3284 11.5002 22 10.8286 22 10.0002C22 9.17178 21.3284 8.50021 20.5 8.50021L10.5376 8.5L12.163 6.8797C12.8761 6.16877 12.8111 4.99772 12.0235 4.36965C11.4209 3.88907 10.5685 3.8758 9.95109 4.33738L5.35288 7.93707C4.47312 8.62579 3.11711 9 1.99983 9L1.99983 18.5L3.1644 18.5C3.69618 18.5 4.20359 18.7148 4.60361 19.0652C5.06612 19.4703 5.70614 19.9769 6.20799 20.1689C7.07313 20.5 8.15984 20.5 10.3332 20.5L11.8057 20.5004C12.7834 20.5004 13.6178 19.7936 13.7785 18.8292L13.8356 18.4868C13.9217 17.9705 13.5235 17.5004 13 17.5004C14.1046 17.5004 15 16.605 15 15.5004C15 14.9481 14.5523 14.5004 14 14.5004C15.1046 14.5004 16 13.605 16 12.5004Z',
  d3: 'M16 11.5004L16 12.5004C16 13.605 15.1046 14.5004 14 14.5004L13 14.5004M14 11.5002L20.5 11.5002C21.3284 11.5002 22 10.8286 22 10.0002C22 9.17178 21.3284 8.50021 20.5 8.50021L10.5376 8.5L12.163 6.8797C12.8761 6.16877 12.8111 4.99772 12.0235 4.36965C11.4209 3.88907 10.5685 3.8758 9.95109 4.33738L5.35288 7.93707C4.47312 8.62579 3.11711 9 1.99983 9',
  d4: 'M21.4644 8.14194H10.3666C10.1971 8.14194 10.0443 8.03738 9.97952 7.87707C9.91477 7.71677 9.95085 7.53233 10.0709 7.40987L11.8863 5.55815C12.5055 4.9265 12.4492 3.88646 11.7651 3.32817C11.5097 3.1198 11.2027 3.01015 10.8929 3C10.7464 3.00439 10.6002 3.02191 10.4561 3.05258C10.3462 3.08328 10.2391 3.12725 10.1369 3.18452L4.89077 7.09541C4.58105 7.33787 4.17608 7.54612 3.71972 7.70238L3.69045 7.7124C3.1854 7.88532 2.76611 8.02889 2.45197 8.16329C2.15825 8.28895 1.80125 8.46618 1.57621 8.7811C1.36815 9.07226 1.30439 9.40172 1.27672 9.69193C1.25 9.9723 1.25002 10.3204 1.25004 10.7149L1.25002 17.116C1.2499 17.2357 1.24978 17.3601 1.26464 17.4745C1.36701 18.262 1.9869 18.8819 2.77449 18.9843C2.88881 18.9992 3.04487 18.999 3.16461 18.9989C3.49237 18.9989 3.8287 19.1321 4.10966 19.3782C4.56415 19.7763 5.29662 20.372 5.94016 20.6183C6.47307 20.8222 7.04581 20.9124 7.73267 20.956C8.40794 20.9989 9.24269 20.9989 10.3074 20.9989L11.806 20.9993C13.1503 20.9993 14.2975 20.0274 14.5185 18.7014C14.5424 18.5582 14.432 18.4279 14.2868 18.4279H12C11.7686 18.4279 11.5811 18.236 11.5811 17.9993C11.5811 17.7626 11.7686 17.5707 12 17.5707H14.3304C14.4205 17.5707 14.4656 17.5707 14.5093 17.5571C14.5529 17.5435 14.5878 17.5194 14.6575 17.4712C15.2246 17.0788 15.6068 16.6518 15.7066 15.5993C15.7321 15.3302 15.7448 15.1956 15.6556 15.0975C15.5663 14.9994 15.4217 14.9994 15.1325 14.9994H13.1168C12.8855 14.9994 12.698 14.8075 12.698 14.5708C12.698 14.3341 12.8855 14.1423 13.1168 14.1423H15.7373C15.8681 14.1423 15.9335 14.1423 15.9956 14.1121C16.0577 14.0819 16.093 14.0371 16.1635 13.9473C16.531 13.4798 16.7502 12.8902 16.7502 12.2493C16.7446 12.1335 16.7057 11.9551 16.6244 11.7899C16.5822 11.7042 16.5611 11.6613 16.4883 11.616C16.4155 11.5707 16.3482 11.5707 16.2137 11.5707H14.2337C14.0024 11.5707 13.8149 11.3788 13.8149 11.1421C13.8149 10.9054 14.0024 10.7135 14.2337 10.7135L21.4644 10.7135C22.1745 10.7135 22.7502 10.1379 22.7502 9.42774C22.7502 8.71762 22.1745 8.14194 21.4644 8.14194Z',
  d5: 'M2 8.88221L4.00456 8.88219L9.87723 4.47935C9.91112 4.45535 9.94444 4.43031 9.97748 4.40476C10.3905 4.08545 10.888 3.82898 11.4066 3.88852C12.2065 3.98035 12.8654 4.57316 12.9773 5.34114C13.043 5.7915 12.9117 6.40303 12.5326 6.81559L10.4078 8.91318L12.1312 8.88219H20.4343C21.2985 8.88219 21.999 9.55663 21.999 10.3886C21.999 11.2205 21.2985 11.895 20.4343 11.895L12.0145 11.895M15.5114 12.4744L15.4646 13.5846C15.3397 14.412 14.7658 14.8219 14.0513 14.8609L11.4903 14.8804M14.4964 15.2317V16.3325C14.5276 17.1835 13.8015 17.9018 12.9582 17.8744H10.9827M12.9811 18.4806L12.9582 19.4758C12.9398 20.2766 12.2729 20.8539 11.4409 20.8539L9.0307 20.8763C8.34906 20.8443 7.22355 20.8668 6.41926 20.6253C6.24995 20.5745 6.09428 20.4885 5.94566 20.3928L5.63547 20.193L5.06417 19.756L3.99836 18.8806H2.00113',
  d6: 'M12.7242 18.64H10.8861V17.8455H13.1141C13.8216 17.8455 14.3951 17.2611 14.3951 16.5402V15.1782C13.9252 15.235 13.3353 15.235 12.6087 15.235H11.4431V14.4405H12.58C13.3787 14.4405 13.9385 14.4396 14.3615 14.3817C14.7733 14.3253 14.9966 14.2214 15.1568 14.0582C15.317 13.895 15.419 13.6675 15.4743 13.2479C15.5215 12.8906 15.5301 12.4377 15.5317 11.8298H12.0001V11.0353L21.4689 11.0353C22.1764 11.0353 22.75 10.4509 22.75 9.73C22.75 9.00913 22.1764 8.42475 21.4689 8.42475L9.40354 8.42501L12.3593 5.34039C12.9202 4.66421 12.8237 3.64914 12.1434 3.09522C11.5747 2.63213 10.7656 2.63525 10.2004 3.10271L10.1884 3.11262L3.21794 8.42499H1.25017L1.25 18.98H3.21794C3.48802 19.2012 4.90654 20.3791 5.15509 20.5609C5.41707 20.7524 5.60165 20.8671 5.68725 20.9005C6.11696 21.068 6.61647 21.1581 7.32382 21.2038C8.03433 21.2498 8.92779 21.25 10.1433 21.25C10.7606 21.25 11.1932 21.2495 11.5264 21.2137C11.8527 21.1786 12.0385 21.1134 12.178 21.0139C12.3003 20.9266 12.4068 20.8182 12.4924 20.6935C12.5901 20.5514 12.6541 20.3621 12.6885 20.0296C12.7233 19.6937 12.7242 19.2586 12.7242 18.64Z',
};

export const IconHandPointingRight03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-right-03-stroke-rounded IconHandPointingRight03StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingRight03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-right-03-duotone-rounded IconHandPointingRight03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingRight03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-right-03-twotone-rounded IconHandPointingRight03TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingRight03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-right-03-solid-rounded IconHandPointingRight03SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingRight03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-right-03-bulk-rounded IconHandPointingRight03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingRight03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-right-03-stroke-sharp IconHandPointingRight03StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingRight03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-right-03-solid-sharp IconHandPointingRight03SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHandPointingRight03: TheIconSelfPack = {
  name: 'HandPointingRight03',
  StrokeRounded: IconHandPointingRight03StrokeRounded,
  DuotoneRounded: IconHandPointingRight03DuotoneRounded,
  TwotoneRounded: IconHandPointingRight03TwotoneRounded,
  SolidRounded: IconHandPointingRight03SolidRounded,
  BulkRounded: IconHandPointingRight03BulkRounded,
  StrokeSharp: IconHandPointingRight03StrokeSharp,
  SolidSharp: IconHandPointingRight03SolidSharp,
};