import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.5004 16.0002H12.5004C13.605 16.0002 14.5004 15.1048 14.5004 14.0002M14.5004 14.0002V13.0002M14.5004 14.0002C14.5004 14.5525 14.9481 15.0002 15.5004 15.0002C16.605 15.0002 17.5004 14.1048 17.5004 13.0002M17.5004 13.0002V12.0002M17.5004 13.0002C17.5004 13.5237 17.9705 13.9219 18.4868 13.8358L18.8292 13.7788C19.7936 13.618 20.5004 12.7837 20.5004 11.806L20.5 10.3334C20.5 8.16008 20.5 7.07338 20.1689 6.20824C19.9769 5.70638 19.4703 5.06636 19.0652 4.60386C18.7148 4.20383 18.5 3.69642 18.5 3.16465V2.00008M11.5002 14.0002V20.5002C11.5002 21.3287 10.8286 22.0002 10.0002 22.0002C9.17178 22.0002 8.50021 21.3287 8.50021 20.5002L8.5 10.5378L6.8797 12.1632C6.16877 12.8764 4.99772 12.8113 4.36965 12.0237C3.88907 11.4211 3.8758 10.5687 4.33738 9.95133L7.93707 5.35312C8.62579 4.47336 9 3.11736 9 2.00008',
  d2: 'M12.5004 16.0002L11.5002 16.0002V20.5002C11.5002 21.3287 10.8286 22.0002 10.0002 22.0002C9.17178 22.0002 8.50021 21.3287 8.50021 20.5002L8.5 10.5378L6.8797 12.1632C6.16877 12.8764 4.99772 12.8113 4.36965 12.0237C3.88907 11.4211 3.8758 10.5687 4.33738 9.95133L7.93707 5.35312C8.62579 4.47336 9 3.11736 9 2.00008H18.5V3.16465C18.5 3.69642 18.7148 4.20383 19.0652 4.60386C19.4703 5.06636 19.9769 5.70638 20.1689 6.20824C20.5 7.07338 20.5 8.16008 20.5 10.3334L20.5004 11.806C20.5004 12.7837 19.7936 13.618 18.8292 13.7788L18.4868 13.8358C17.9705 13.9219 17.5004 13.5237 17.5004 13.0002C17.5004 14.1048 16.605 15.0002 15.5004 15.0002C14.9481 15.0002 14.5004 14.5525 14.5004 14.0002C14.5004 15.1048 13.605 16.0002 12.5004 16.0002Z',
  d3: 'M11.5004 16H12.5004C13.605 16 14.5004 15.1046 14.5004 14V13M11.5002 14V20.5C11.5002 21.3284 10.8286 22 10.0002 22C9.17178 22 8.50021 21.3284 8.50021 20.5L8.5 10.5376L6.8797 12.163C6.16877 12.8761 4.99772 12.8111 4.36965 12.0235C3.88907 11.4209 3.8758 10.5685 4.33738 9.95109L7.93707 5.35288C8.62579 4.47312 9 3.11711 9 1.99983',
  d4: 'M8.14194 21.4644L8.14194 10.3666C8.14194 10.1971 8.03738 10.0443 7.87707 9.97952C7.71677 9.91477 7.53233 9.95085 7.40987 10.0709L5.55815 11.8863C4.9265 12.5055 3.88646 12.4492 3.32817 11.7651C3.1198 11.5097 3.01015 11.2027 3 10.8929C3.00439 10.7464 3.02191 10.6002 3.05258 10.4561C3.08328 10.3462 3.12725 10.2391 3.18452 10.1369L7.09541 4.89077C7.33787 4.58105 7.54612 4.17608 7.70238 3.71972L7.7124 3.69045C7.88532 3.1854 8.02889 2.76611 8.16328 2.45197C8.28895 2.15825 8.46618 1.80125 8.7811 1.57621C9.07226 1.36815 9.40172 1.30439 9.69193 1.27672C9.9723 1.25 10.3204 1.25002 10.7148 1.25004L17.116 1.25002C17.2357 1.2499 17.3601 1.24978 17.4745 1.26464C18.262 1.36701 18.8819 1.98691 18.9843 2.77449C18.9992 2.88881 18.999 3.04487 18.9989 3.16461C18.9989 3.49237 19.1321 3.82869 19.3782 4.10966C19.7763 4.56415 20.372 5.29662 20.6183 5.94016C20.8222 6.47307 20.9124 7.04581 20.956 7.73267C20.9989 8.40794 20.9989 9.24269 20.9989 10.3074L20.9993 11.806C20.9993 13.1503 20.0274 14.2975 18.7014 14.5185C18.5582 14.5424 18.4279 14.432 18.4279 14.2868V12C18.4279 11.7686 18.236 11.5811 17.9993 11.5811C17.7626 11.5811 17.5707 11.7686 17.5707 12V14.3304C17.5707 14.4205 17.5707 14.4656 17.5571 14.5093C17.5435 14.5529 17.5194 14.5878 17.4712 14.6575C17.0788 15.2246 16.6518 15.6068 15.5993 15.7066C15.3302 15.7321 15.1956 15.7448 15.0975 15.6556C14.9994 15.5663 14.9994 15.4217 14.9994 15.1325V13.1168C14.9994 12.8855 14.8075 12.698 14.5708 12.698C14.3341 12.698 14.1423 12.8855 14.1423 13.1168V15.7373C14.1423 15.8681 14.1423 15.9335 14.1121 15.9956C14.0819 16.0577 14.0371 16.093 13.9473 16.1635C13.4798 16.531 12.8902 16.7502 12.2493 16.7502C12.1335 16.7446 11.9551 16.7057 11.7899 16.6244C11.7042 16.5822 11.6613 16.5611 11.616 16.4883C11.5707 16.4155 11.5707 16.3482 11.5707 16.2137V14.2337C11.5707 14.0024 11.3788 13.8149 11.1421 13.8149C10.9054 13.8149 10.7135 14.0024 10.7135 14.2337L10.7135 21.4644C10.7135 22.1745 10.1379 22.7502 9.42774 22.7502C8.71762 22.7502 8.14194 22.1745 8.14194 21.4644Z',
  d5: 'M8.01404 1.71191L8.01403 3.71648L3.61118 9.58914C3.58719 9.62303 3.56215 9.65636 3.5366 9.6894C3.21728 10.1024 2.96081 10.5999 3.02036 11.1185C3.11219 11.9184 3.70499 12.5773 4.47297 12.6893C4.92333 12.7549 5.53487 12.6236 5.94743 12.2446L8.04502 10.1198L8.01403 11.8431V20.1462C8.01403 21.0104 8.68846 21.7109 9.52042 21.7109C10.3524 21.7109 11.0268 21.0104 11.0268 20.1462V11.7264M11.6062 15.2234L12.7165 15.1765C13.5438 15.0516 13.9537 14.4777 13.9927 13.7632L14.0122 11.2022M14.3635 14.2083H15.4644C16.3153 14.2395 17.0336 13.5134 17.0063 12.6701V10.6946M17.6124 12.693L18.6076 12.6701C19.4085 12.6517 19.9857 11.9848 19.9857 11.1528L20.0081 8.74262C19.9762 8.06098 19.9987 6.93546 19.7572 6.13117C19.7063 5.96186 19.6204 5.80619 19.5246 5.65758L19.3249 5.34738L18.8878 4.77609L18.0124 3.71028V1.71304',
  d6: 'M18.64 12.7242V10.8861H17.8455V13.1141C17.8455 13.8216 17.2611 14.3951 16.5402 14.3951H15.1782C15.235 13.9252 15.235 13.3353 15.235 12.6087V11.4431H14.4405V12.58C14.4405 13.3787 14.4396 13.9385 14.3817 14.3615C14.3253 14.7733 14.2214 14.9966 14.0582 15.1568C13.895 15.317 13.6675 15.419 13.2479 15.4743C12.8906 15.5215 12.4377 15.5301 11.8298 15.5317V12.0001H11.0353L11.0353 21.4689C11.0353 22.1764 10.4509 22.75 9.73 22.75C9.00913 22.75 8.42476 22.1764 8.42476 21.4689L8.42501 9.40354L5.34039 12.3593C4.66421 12.9202 3.64914 12.8237 3.09522 12.1434C2.63213 11.5747 2.63525 10.7656 3.10271 10.2004L3.11262 10.1884L8.42499 3.21794V1.25017L18.98 1.25V3.21794C19.2012 3.48802 20.3791 4.90654 20.5609 5.15509C20.7524 5.41707 20.8671 5.60165 20.9005 5.68725C21.068 6.11696 21.1581 6.61647 21.2038 7.32382C21.2498 8.03433 21.25 8.92779 21.25 10.1433C21.25 10.7606 21.2495 11.1932 21.2137 11.5264C21.1786 11.8527 21.1134 12.0385 21.0139 12.178C20.9266 12.3003 20.8182 12.4068 20.6935 12.4924C20.5514 12.5901 20.3621 12.6541 20.0296 12.6885C19.6937 12.7233 19.2586 12.7242 18.64 12.7242Z',
};

export const IconHandPointingDown03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-03-stroke-rounded IconHandPointingDown03StrokeRounded"
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

export const IconHandPointingDown03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-03-duotone-rounded IconHandPointingDown03DuotoneRounded"
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

export const IconHandPointingDown03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-03-twotone-rounded IconHandPointingDown03TwotoneRounded"
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

export const IconHandPointingDown03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-03-solid-rounded IconHandPointingDown03SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-03-bulk-rounded IconHandPointingDown03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-03-stroke-sharp IconHandPointingDown03StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-03-solid-sharp IconHandPointingDown03SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHandPointingDown03: TheIconSelfPack = {
  name: 'HandPointingDown03',
  StrokeRounded: IconHandPointingDown03StrokeRounded,
  DuotoneRounded: IconHandPointingDown03DuotoneRounded,
  TwotoneRounded: IconHandPointingDown03TwotoneRounded,
  SolidRounded: IconHandPointingDown03SolidRounded,
  BulkRounded: IconHandPointingDown03BulkRounded,
  StrokeSharp: IconHandPointingDown03StrokeSharp,
  SolidSharp: IconHandPointingDown03SolidSharp,
};