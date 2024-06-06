import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.5212 3H11.5192C10.9563 3.00836 10.3958 3.03083 9.84518 3.06737C5.65374 3.34548 2.31504 6.72539 2.04032 10.9686C1.98656 11.7989 1.98656 12.6588 2.04032 13.4892C2.14038 15.0346 2.82509 16.4655 3.63119 17.6738C4.09923 18.5196 3.79035 19.5754 3.30283 20.4975C2.95132 21.1624 2.77557 21.4949 2.91669 21.735C3.0578 21.9752 3.37302 21.9829 4.00346 21.9982C5.25021 22.0285 6.09091 21.6757 6.75825 21.1845C7.13674 20.9059 7.32598 20.7666 7.45641 20.7506C7.58684 20.7346 7.84352 20.8401 8.3568 21.0511C8.81812 21.2408 9.35376 21.3578 9.84518 21.3904C11.2722 21.4851 12.7652 21.4853 14.1951 21.3904C18.2169 21.1236 21.5019 18.0009 22 14',
  d2: 'M15.59 8.64819C14.9612 9.01675 13.3126 9.7693 14.3167 10.711C14.8072 11.171 15.3536 11.5 16.0404 11.5H19.9596C20.6464 11.5 21.1928 11.171 21.6833 10.711C22.6874 9.7693 21.0388 9.01675 20.41 8.64819C18.9355 7.78394 17.0645 7.78394 15.59 8.64819Z',
  d3: 'M20 4C20 5.10457 19.1046 6 18 6C16.8954 6 16 5.10457 16 4C16 2.89543 16.8954 2 18 2C19.1046 2 20 2.89543 20 4Z',
  d4: 'M11.9953 12.5H12.0042M7.99976 12.5H8.00873',
  d5: 'M16.0833 3.42704C15.4728 3.23667 14.8324 3.11506 14.1706 3.07107C12.7435 2.97621 11.2536 2.97641 9.8294 3.07107C5.64639 3.34913 2.31441 6.72838 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05567 21.9752 3.37025 21.9829 3.99941 21.9982C5.24365 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83174 20.8403 8.34392 21.0512C8.80432 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C22.0134 12.6607 22.0134 11.8009 21.9598 10.9707C21.9481 10.7904 21.9309 10.6117 21.9084 10.4347C21.8574 10.5248 21.7836 10.6169 21.6833 10.711C21.1928 11.171 20.6465 11.5 19.9596 11.5H16.0404C15.3536 11.5 14.8072 11.171 14.3167 10.711C13.4125 9.86296 14.6595 9.16831 15.3758 8.76936C15.4548 8.72533 15.5275 8.68483 15.59 8.64819C17.0645 7.78394 18.9355 7.78394 20.41 8.64819C20.4725 8.68485 20.5451 8.7253 20.6242 8.76936C20.9779 8.96639 21.4611 9.23553 21.7507 9.55965C21.3739 7.9515 20.5472 6.52248 19.4122 5.4162C19.0505 5.77696 18.5513 6 18 6C16.8954 6 16 5.10457 16 4C16 3.80088 16.0291 3.60855 16.0833 3.42704Z',
  d6: 'M15.25 4C15.25 2.48122 16.4812 1.25 18 1.25C19.5187 1.25 20.75 2.48122 20.75 4C20.75 5.51878 19.5187 6.75 18 6.75C16.4812 6.75 15.25 5.51878 15.25 4Z',
  d7: 'M15.2107 8.00115C16.9194 6.99962 19.0805 6.99962 20.7892 8.00115C21.0987 8.17229 21.8054 8.56435 22.1793 8.92458C22.4122 9.14895 22.6901 9.49583 22.7417 9.96046C22.7987 10.4733 22.5616 10.9155 22.1963 11.2581C21.6367 11.7828 20.9151 12.25 19.9596 12.25H16.0403C15.0848 12.25 14.3632 11.7828 13.8036 11.2581C13.4384 10.9155 13.2012 10.4733 13.2582 9.96046C13.3098 9.49583 13.5877 9.14895 13.8206 8.92458C14.1945 8.56435 14.9012 8.17229 15.2107 8.00115Z',
  d8: 'M13.8823 2.40257C13.7963 2.2928 13.6125 2.28608 13.2447 2.27265C12.0902 2.23046 10.9147 2.24725 9.77921 2.32273C5.21256 2.62629 1.58928 6.31258 1.29136 10.9224C1.23563 11.7848 1.23563 12.6768 1.29136 13.5392C1.40228 15.2556 2.15104 16.804 2.98336 18.0604C3.2327 18.5419 3.10279 19.2641 2.63646 20.1478L2.61498 20.1885C2.45829 20.4852 2.30492 20.7757 2.21644 21.0234C2.12269 21.2858 2.02579 21.7025 2.26747 22.1145C2.48952 22.4931 2.84431 22.6318 3.13108 22.6873C3.36917 22.7334 3.66111 22.7403 3.935 22.7469L3.98073 22.748C5.40048 22.7825 6.40092 22.3726 7.19336 21.7883L7.28863 21.7181C7.40815 21.6302 7.46791 21.5862 7.5456 21.5766C7.62329 21.567 7.69159 21.5948 7.82817 21.6505C7.89582 21.678 7.97189 21.7093 8.05795 21.7448C8.59934 21.9677 9.21428 22.1013 9.77921 22.1389C11.2365 22.2357 12.7597 22.2359 14.2199 22.1389C18.7866 21.8353 22.4098 18.149 22.7078 13.5392C22.7167 13.4013 22.7211 13.3324 22.7138 13.2945C22.679 13.1152 22.5216 13.0156 22.3447 13.061C22.3073 13.0706 22.2359 13.1102 22.0931 13.1896C21.5106 13.5132 20.8022 13.75 19.9598 13.75H16.0406C14.5468 13.75 13.4744 13.0055 12.7778 12.3522C12.1885 11.7996 11.6426 10.9205 11.7676 9.79492C11.8761 8.8178 12.4475 8.16478 12.78 7.8444C13.0999 7.53626 13.6131 7.2012 14.0309 6.95028C14.3039 6.78632 14.4404 6.70434 14.4722 6.58841C14.504 6.47248 14.4216 6.31975 14.2569 6.01429C13.9336 5.41481 13.7502 4.72883 13.7502 4C13.7502 3.70086 13.7811 3.40894 13.8399 3.12725C13.9254 2.71731 13.9682 2.51234 13.8823 2.40257ZM7.99976 11.5C7.44747 11.5 6.99976 11.9477 6.99976 12.5C6.99976 13.0523 7.44747 13.5 7.99976 13.5H8.00873C8.56101 13.5 9.00873 13.0523 9.00873 12.5C9.00873 11.9477 8.56101 11.5 8.00873 11.5H7.99976Z',
  d9: 'M13.2447 2.27265C13.6124 2.28608 13.7963 2.2928 13.8822 2.40257C13.9682 2.51233 13.9254 2.71731 13.8398 3.12725C13.781 3.40894 13.7501 3.70086 13.7501 4C13.7501 4.72883 13.9336 5.41481 14.2568 6.01428C14.4216 6.31974 14.5039 6.47247 14.4721 6.58841C14.4403 6.70434 14.3038 6.78632 14.0308 6.95027C13.613 7.2012 13.0998 7.53626 12.78 7.8444C12.4475 8.16478 11.876 8.8178 11.7675 9.79491C11.6425 10.9205 12.1884 11.7995 12.7777 12.3522C13.4744 13.0055 14.5467 13.75 16.0405 13.75H19.9597C20.8022 13.75 21.5105 13.5132 22.0931 13.1896C22.2359 13.1102 22.3073 13.0706 22.3447 13.061C22.5216 13.0156 22.679 13.1152 22.7137 13.2945C22.7211 13.3324 22.7166 13.4013 22.7077 13.5392C22.4098 18.149 18.7865 21.8353 14.2199 22.1389C12.7596 22.2359 11.2364 22.2357 9.77916 22.1389C9.21423 22.1013 8.59929 21.9677 8.0579 21.7448C7.97184 21.7093 7.89577 21.678 7.82812 21.6505C7.69154 21.5948 7.62325 21.567 7.54556 21.5766C7.46787 21.5862 7.4081 21.6302 7.28858 21.7181C7.25897 21.7399 7.22729 21.7632 7.19331 21.7883C6.40088 22.3726 5.40043 22.7825 3.98068 22.748L3.93495 22.7469C3.66106 22.7403 3.36912 22.7334 3.13103 22.6873C2.84426 22.6318 2.48947 22.4931 2.26742 22.1145C2.02574 21.7025 2.12264 21.2858 2.21639 21.0234C2.30487 20.7757 2.45825 20.4852 2.61494 20.1885L2.63641 20.1478C3.10275 19.2641 3.23265 18.5419 2.98332 18.0604C2.15099 16.804 1.40224 15.2556 1.29131 13.5392C1.23558 12.6768 1.23558 11.7848 1.29131 10.9224C1.58923 6.31258 5.21251 2.62629 9.77916 2.32273C10.9146 2.24725 12.0901 2.23046 13.2447 2.27265Z',
  d10: 'M6.99976 12.5C6.99976 11.9477 7.44747 11.5 7.99976 11.5H8.00873C8.56101 11.5 9.00873 11.9477 9.00873 12.5C9.00873 13.0523 8.56101 13.5 8.00873 13.5H7.99976C7.44747 13.5 6.99976 13.0523 6.99976 12.5Z',
  d11: 'M21.9067 11H14.9392C14.9392 9.067 16.4989 7.5 18.423 7.5C20.347 7.5 21.9067 9.067 21.9067 11Z',
  d12: 'M20.1649 3.75C20.1649 4.7165 19.385 5.5 18.423 5.5C17.461 5.5 16.6812 4.7165 16.6812 3.75C16.6812 2.7835 17.461 2 18.423 2C19.385 2 20.1649 2.7835 20.1649 3.75Z',
  d13: 'M11.9484 12.5H11.9573M7.97144 12.5H7.98036',
  d14: 'M21.8982 13.6114C21.6893 17.8258 18.5552 20.0057 16.8913 20.7444C14.6935 21.9341 8.6548 21.9222 6.47079 20.515L2.05705 21.9913C1.983 22.0203 1.9919 21.9974 2.02109 21.9222L3.60898 18.0055C0.42659 13.4206 1.37671 4.45134 9.24645 3.10737L12.8849 2.99512',
  d15: 'M16 3.75C16 2.36929 17.1193 1.25 18.5 1.25C19.8807 1.25 21 2.36929 21 3.75C21 5.13071 19.8807 6.25 18.5 6.25C17.1193 6.25 16 5.13071 16 3.75Z',
  d16: 'M14.25 11C14.25 8.65277 16.1528 6.74998 18.5 6.74998C20.8472 6.74998 22.75 8.65277 22.75 11H14.25Z',
  d17: 'M14.75 3.75C14.75 3.26413 14.8424 2.79984 15.0106 2.37375C14.7248 2.32668 14.4346 2.29262 14.1405 2.2722C13.8204 2.24999 13.4486 2.24999 12.7895 2.25H12.7895H11.2105H11.2105C10.5514 2.24999 10.1796 2.24999 9.85949 2.2722C5.25571 2.59176 1.59176 6.25571 1.2722 10.8595C1.24999 11.1795 1.24999 11.5514 1.25 12.2105V12.2105V12.2895V12.2896C1.24999 12.9486 1.24999 13.3205 1.2722 13.6405C1.38603 15.2804 1.92471 16.8022 2.77921 18.0954L1.47483 22.75L6.43709 21.3113C7.48219 21.8226 8.63831 22.143 9.85949 22.2278C10.1796 22.25 10.5514 22.25 11.2105 22.25H12.7895C13.4486 22.25 13.8204 22.25 14.1405 22.2278C18.7443 21.9082 22.4082 18.2443 22.7278 13.6405C22.75 13.3204 22.75 12.9486 22.75 12.2895V12.25H13V11C13 8.97992 14.089 7.21422 15.712 6.25796C15.114 5.59357 14.75 4.71429 14.75 3.75ZM9.00897 11.5H7V13.5H9.00897V11.5Z',
};

export const IconMessageUser02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-user-02-stroke-rounded IconMessageUser02StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMessageUser02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-user-02-duotone-rounded IconMessageUser02DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMessageUser02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-user-02-twotone-rounded IconMessageUser02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      </g>
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

export const IconMessageUser02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-user-02-solid-rounded IconMessageUser02SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageUser02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-user-02-bulk-rounded IconMessageUser02BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMessageUser02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-user-02-stroke-sharp IconMessageUser02StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageUser02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-user-02-solid-sharp IconMessageUser02SolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMessageUser02: TheIconSelfPack = {
  name: 'MessageUser02',
  StrokeRounded: IconMessageUser02StrokeRounded,
  DuotoneRounded: IconMessageUser02DuotoneRounded,
  TwotoneRounded: IconMessageUser02TwotoneRounded,
  SolidRounded: IconMessageUser02SolidRounded,
  BulkRounded: IconMessageUser02BulkRounded,
  StrokeSharp: IconMessageUser02StrokeSharp,
  SolidSharp: IconMessageUser02SolidSharp,
};