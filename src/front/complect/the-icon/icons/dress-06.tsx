import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.17736 9.03223C8.90312 12.6691 3.12493 17.3688 5.6574 20.563C7.05911 22.331 16.7295 22.6215 18.3615 20.563C20.8927 17.3705 15.1293 12.6763 18.8416 9.03223',
  d2: 'M6.35531 13C4.08976 12.791 2.24317 11.3282 2.01008 9.23853C1.97692 8.9413 2.02708 8.64273 2.13808 8.36431C2.85289 6.57132 4.85232 3.53054 7.91642 2.04751C8.12532 1.9464 8.37469 2.01201 8.51635 2.19362C9.27591 3.1674 10.5845 4.6846 12 4.6846C13.4155 4.6846 14.7241 3.1674 15.4836 2.19362C15.6253 2.01201 15.8747 1.9464 16.0836 2.04751C19.1477 3.53054 21.1471 6.57132 21.8619 8.36431C21.9729 8.64273 22.0231 8.9413 21.9899 9.23853C21.7568 11.3282 19.9297 12.7881 17.6641 12.9972',
  d3: 'M2.67865 7.6525C4.47832 4.33014 6.60648 2.70147 7.87394 2.1107C8.31641 1.90446 8.5191 1.9867 8.83203 2.35489C9.6968 3.37239 10.764 4.6807 12.0946 4.6807C13.4252 4.6807 14.4924 3.37239 15.3572 2.35489C15.6701 1.9867 15.8728 1.90446 16.3153 2.1107C17.5827 2.70147 19.7109 4.33014 21.5106 7.6525C21.8337 8.24898 21.9952 8.54721 21.9987 9.09665C22.0116 11.1062 19.8963 13 18.0371 13C17.5419 15 19.5228 17 19.0275 20C17.0467 21.3333 11.5004 23.2 5.16168 20C4.66647 17.5 6.15209 15.4 6.15209 13C4.29288 13 2.17765 11.1062 2.19049 9.09665C2.19399 8.54721 2.35555 8.24898 2.67865 7.6525Z',
  d4: 'M6.31456 13C4.07072 12.791 2.24182 11.3282 2.01096 9.23853C1.97812 8.9413 2.0278 8.64273 2.13774 8.36431C2.8457 6.57132 4.82597 3.53054 7.86071 2.04751C8.06761 1.9464 8.31459 2.01201 8.45489 2.19362C9.20717 3.1674 10.5032 4.6846 11.9052 4.6846C13.3071 4.6846 14.6032 3.1674 15.3554 2.19362C15.4957 2.01201 15.7427 1.9464 15.9496 2.04751C18.9844 3.53054 20.9646 6.57132 21.6726 8.36431C21.7825 8.64273 21.8322 8.9413 21.7993 9.23853C21.5685 11.3282 19.7589 12.7881 17.515 12.9972',
  d5: 'M5.34552 9C9.02604 12.6459 3.318 17.3573 5.81973 20.5594C7.20442 22.3318 16.7574 22.623 18.3696 20.5594C20.87 17.359 15.1766 12.6531 18.8439 9',
  d6: 'M5.16956 9.03223C8.88569 12.6693 3.12243 17.3694 5.64836 20.5638C7.04645 22.3319 16.6919 22.6224 18.3197 20.5638C20.8443 17.3711 15.0958 12.6765 18.7985 9.03223',
  d7: 'M6.18452 13.062C3.91897 12.8535 2.24317 11.3052 2.01008 9.2206C1.97692 8.92408 2.02708 8.62623 2.13808 8.34848C2.85289 6.55981 4.85232 3.52636 7.91642 2.04691C8.12532 1.94604 8.37469 2.01149 8.51635 2.19267C9.27591 3.16409 10.5845 4.67764 12 4.67764C13.4155 4.67764 14.7241 3.16409 15.4836 2.19267C15.6253 2.01149 15.8747 1.94604 16.0836 2.04691C19.1477 3.52636 21.1471 6.55981 21.8619 8.34848C21.9729 8.62623 22.0231 8.92408 21.9899 9.2206C21.7568 11.3052 20.0319 12.8535 17.7664 13.062',
  d8: 'M15.5275 1.29501C15.9312 1.18258 16.2963 1.30085 16.5759 1.42988C18.0189 2.09605 20.2805 3.84698 22.1651 7.29275L22.191 7.34008C22.5008 7.90599 22.7452 8.35234 22.7499 9.09194C22.7581 10.3617 22.0948 11.5242 21.2239 12.3472C20.4888 13.0417 19.5323 13.5647 18.5438 13.7098C18.6306 14.036 18.7341 14.3717 18.8464 14.7185C18.8949 14.8681 18.9454 15.0207 18.9967 15.1756L18.9969 15.1761C19.278 16.0253 19.5816 16.9425 19.698 17.8181C19.841 18.894 19.7203 20.0148 18.9242 21.0241C18.6138 21.4175 18.1607 21.7007 17.6833 21.9111C17.1966 22.1255 16.6255 22.29 16.015 22.4143C14.7933 22.6631 13.3353 22.7667 11.9037 22.748C10.4715 22.7293 9.03221 22.5878 7.84581 22.3304C7.25337 22.2019 6.70504 22.0405 6.24502 21.8413C5.80071 21.6489 5.36333 21.3894 5.07514 21.0241C4.27839 20.014 4.15865 18.8922 4.30275 17.8157C4.41994 16.9403 4.72429 16.0233 5.00602 15.1745C5.05774 15.0187 5.10869 14.8651 5.15759 14.7146C5.26972 14.3693 5.37297 14.035 5.45973 13.7103C4.46998 13.566 3.51208 13.0425 2.77613 12.3472C1.90516 11.5242 1.24188 10.3617 1.25008 9.09194C1.25485 8.35235 1.49921 7.90599 1.80902 7.34009L1.83493 7.29275C3.71951 3.84698 5.9811 2.09605 7.42415 1.42988C7.70367 1.30085 8.06878 1.18258 8.47247 1.29501C8.85019 1.40022 9.10513 1.66862 9.27502 1.86661L9.34655 1.95002L9.34656 1.95003C9.77246 2.44683 10.1944 2.93906 10.656 3.32274C11.1417 3.72653 11.5801 3.93083 12 3.93083C12.4199 3.93083 12.8583 3.72653 13.344 3.32274C13.8056 2.93906 14.2275 2.44682 14.6534 1.95003L14.6535 1.95001L14.725 1.86661C14.8949 1.66862 15.1498 1.40022 15.5275 1.29501Z',
  d9: 'M18.7738 9.02765C16.5645 11.2379 17.1671 13.3476 17.6893 14.935C18.2115 16.5223 18.9747 18.4513 18.9747 19.9984C15.3996 22.2287 10.0898 23.0666 4.97559 20.0185C5.09611 17.5873 6.3844 15.1378 6.60437 13.7479L6.60883 13.7198C6.82756 12.3384 7.05723 10.8879 5.17906 9.00977',
  d10: 'M6.6227 12.9354C3.52848 12.8594 2.09132 9.84146 2 8.88706C2.66619 5.99808 6.0239 3.09619 8.48709 2.0219L11.9853 4.49366L15.505 1.99902C20.5706 4.62017 21.6832 7.8266 22 8.91605C21.6321 9.87437 20.9168 12.6182 17.3811 12.9914',
  d11: 'M8.17867 1.31906C8.4238 1.20613 8.7108 1.2331 8.93051 1.3897L12.001 3.57833L15.0714 1.3897C15.2911 1.2331 15.5781 1.20613 15.8233 1.31906C16.5151 1.63775 17.9577 2.42438 19.366 3.65787C20.7706 4.88815 22.1988 6.61398 22.751 8.8181C22.751 8.8181 22.3923 10.4226 21.7017 11.4249C21.0111 12.4273 19.871 13.5012 18.1367 13.7127C18.171 13.8608 18.2103 14.0115 18.254 14.165C18.4044 14.6933 18.5834 15.1889 18.7739 15.7163L18.774 15.7163L18.774 15.7163C18.9053 16.0799 19.0421 16.4585 19.1787 16.8734C19.495 17.8338 19.7672 18.8819 19.7672 20V20.4268L19.3995 20.6448C17.6779 21.6656 15.1175 22.75 12.001 22.75C8.88447 22.75 6.32401 21.6656 4.60246 20.6448L4.23493 20.4269L4.2348 20.0003C4.23446 18.8817 4.50745 17.8329 4.82468 16.8718C4.96182 16.4564 5.09913 16.0773 5.23097 15.7133L5.23098 15.7133L5.23099 15.7132C5.42201 15.1859 5.60153 14.6902 5.75232 14.1618C5.79578 14.0096 5.83492 13.8601 5.86914 13.7132C4.13256 13.5029 2.99128 12.428 2.3002 11.4249C1.60913 10.4218 1.25098 8.8181 1.25098 8.8181C1.80316 6.61398 3.23136 4.88815 4.63599 3.65787C6.04428 2.42438 7.48688 1.63775 8.17867 1.31906Z',
};

export const IconDress06StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-06-stroke-rounded IconDress06StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconDress06DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-06-duotone-rounded IconDress06DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconDress06TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-06-twotone-rounded IconDress06TwotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDress06SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-06-solid-rounded IconDress06SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDress06BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-06-bulk-rounded IconDress06BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDress06StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-06-stroke-sharp IconDress06StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDress06SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-06-solid-sharp IconDress06SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDress06: TheIconSelfPack = {
  name: 'Dress06',
  StrokeRounded: IconDress06StrokeRounded,
  DuotoneRounded: IconDress06DuotoneRounded,
  TwotoneRounded: IconDress06TwotoneRounded,
  SolidRounded: IconDress06SolidRounded,
  BulkRounded: IconDress06BulkRounded,
  StrokeSharp: IconDress06StrokeSharp,
  SolidSharp: IconDress06SolidSharp,
};