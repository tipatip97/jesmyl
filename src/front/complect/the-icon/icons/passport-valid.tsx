import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 3.5C7.28595 3.5 4.92893 3.5 3.46447 4.81802C2 6.13604 2 8.25736 2 12.5C2 16.7426 2 18.864 3.46447 20.182C4.92893 21.5 7.28595 21.5 12 21.5C16.714 21.5 19.0711 21.5 20.5355 20.182C22 18.864 22 16.7426 22 12.5C22 11.3538 22 8.5 22 8.5',
  d2: 'M5 17C6.20831 14.4189 10.7122 14.2491 12 17M10.5 10C10.5 11.1046 9.60457 12 8.5 12C7.39543 12 6.5 11.1046 6.5 10C6.5 8.89543 7.39543 8 8.5 8C9.60457 8 10.5 8.89543 10.5 10Z',
  d3: 'M14 6.5C14 6.5 15 6.5 16 8.5C16 8.5 19.1765 3.5 22 2.5',
  d4: 'M3.46447 4.81802C2 6.13604 2 8.25736 2 12.5C2 16.7426 2 18.864 3.46447 20.182C4.92893 21.5 7.28596 21.5 12 21.5C16.714 21.5 19.0711 21.5 20.5355 20.182C22 18.864 22 16.7426 22 12.5C22 8.25736 22 6.13604 20.5355 4.81802C19.0711 3.5 16.714 3.5 12 3.5C7.28596 3.5 4.92893 3.5 3.46447 4.81802ZM10.5 10C10.5 11.1046 9.60457 12 8.5 12C7.39543 12 6.5 11.1046 6.5 10C6.5 8.89543 7.39543 8 8.5 8C9.60457 8 10.5 8.89543 10.5 10ZM5 17C6.20831 14.4189 10.7122 14.2491 12 17H5Z',
  d5: 'M12.0522 2.75C14.1995 2.74999 15.9089 2.74999 17.2682 2.88619C16.7179 3.42861 16.2121 3.99507 15.7715 4.52323C15.6972 4.61226 15.6244 4.70071 15.553 4.78834C15.2223 4.59269 14.9028 4.46118 14.6087 4.37715L14.5974 4.37391C14.4617 4.33504 14.1638 4.24971 13.75 4.24971C12.3693 4.24971 11.25 5.36899 11.25 6.74971C11.25 7.8912 12.0142 8.85288 13.0595 9.15284C13.1515 9.25524 13.3145 9.46887 13.5139 9.86774C13.9169 10.6736 14.7223 11.2004 15.6222 11.2464C16.5219 11.2925 17.3764 10.8508 17.8595 10.0914L17.8603 10.0901L17.8635 10.085L17.8827 10.0555L17.8836 10.0541C17.9027 10.0247 17.9326 9.97894 17.9727 9.91886C18.054 9.79669 18.1764 9.61622 18.3329 9.39454C18.6476 8.94863 19.0916 8.34868 19.6109 7.72618C20.135 7.09789 20.7052 6.4837 21.2697 5.98867C21.5268 5.7632 21.7571 5.58528 21.9579 5.44821C22.2627 6.03212 22.4461 6.69731 22.5587 7.45147C22.75 8.73221 22.75 10.4943 22.75 12.5625C22.75 14.6308 22.75 16.2678 22.5587 17.5485C22.3609 18.8725 21.9452 19.9223 21.0373 20.7395C20.1406 21.5464 19.0078 21.9066 17.5765 22.0798C16.1699 22.25 14.365 22.25 12.0522 22.25C9.73935 22.25 7.83014 22.25 6.42355 22.0798C4.99222 21.9066 3.85936 21.5464 2.96274 20.7395C2.05481 19.9223 1.63908 18.8725 1.44129 17.5485C1.24997 16.2678 1.24998 14.6308 1.25 12.5625V12.5625C1.24998 10.4942 1.24997 8.73221 1.44129 7.45147C1.63908 6.12747 2.05481 5.07769 2.96274 4.26055C3.85936 3.45359 4.99222 3.09338 6.42355 2.92018C7.83014 2.74998 9.73934 2.74999 12.0522 2.75ZM8.50018 7.25C6.9814 7.25 5.75018 8.48122 5.75018 10C5.75018 11.5188 6.9814 12.75 8.50018 12.75C10.019 12.75 11.2502 11.5188 11.2502 10C11.2502 8.48122 10.019 7.25 8.50018 7.25ZM5.67943 17.318C6.12793 16.3599 7.24064 15.7687 8.48144 15.7504C9.7131 15.7322 10.8358 16.2818 11.3209 17.318C11.4965 17.6931 11.943 17.8549 12.3182 17.6793C12.6933 17.5036 12.855 17.0572 12.6794 16.682C11.8767 14.9673 10.1036 14.2263 8.45929 14.2506C6.82412 14.2747 5.08074 15.059 4.32093 16.682C4.14531 17.0572 4.30705 17.5036 4.68219 17.6793C5.05733 17.8549 5.50381 17.6931 5.67943 17.318Z',
  d6: 'M22.6926 2.41643C22.877 2.93702 22.6044 3.50852 22.0838 3.6929C21.5502 3.8819 20.9337 4.28876 20.2807 4.86148C19.638 5.42513 19.0128 6.10205 18.4591 6.76586C17.9072 7.42736 17.4385 8.06109 17.1074 8.53008C16.9422 8.76407 16.8122 8.95579 16.7243 9.08786C16.6803 9.15386 16.6469 9.20488 16.6249 9.23874L16.6006 9.27634L16.5951 9.28496L16.5941 9.28651C16.4008 9.59059 16.0587 9.76739 15.6989 9.74896C15.3389 9.73053 15.0168 9.51985 14.8556 9.19749C14.4149 8.31612 14.0196 7.96517 13.8203 7.83232C13.736 7.77611 13.679 7.75359 13.6564 7.74595C13.148 7.69874 12.75 7.27099 12.75 6.75027C12.75 6.19799 13.1977 5.75027 13.75 5.75027C13.9528 5.75027 14.0877 5.78887 14.1902 5.81816L14.1966 5.82C14.4045 5.87939 14.6553 5.98529 14.9297 6.16822C15.204 6.35107 15.4916 6.60384 15.7804 6.9497C16.0956 6.51895 16.484 6.01128 16.9233 5.48468C17.5166 4.77349 18.215 4.01292 18.962 3.35781C19.6986 2.71179 20.538 2.11865 21.4162 1.80765C21.9368 1.62327 22.5082 1.89583 22.6926 2.41643Z',
  d7: 'M17.2682 2.88619C15.9089 2.74999 14.1995 2.74999 12.0522 2.75C9.73934 2.74999 7.83014 2.74998 6.42355 2.92018C4.99222 3.09338 3.85936 3.45359 2.96274 4.26055C2.05481 5.07769 1.63908 6.12747 1.44129 7.45147C1.24997 8.73221 1.24998 10.4942 1.25 12.5625C1.24998 14.6308 1.24997 16.2678 1.44129 17.5485C1.63908 18.8725 2.05481 19.9223 2.96274 20.7395C3.85936 21.5464 4.99222 21.9066 6.42355 22.0798C7.83014 22.25 9.73935 22.25 12.0522 22.25C14.365 22.25 16.1699 22.25 17.5765 22.0798C19.0078 21.9066 20.1406 21.5464 21.0373 20.7395C21.9452 19.9223 22.3609 18.8725 22.5587 17.5485C22.75 16.2678 22.75 14.6308 22.75 12.5625C22.75 10.4943 22.75 8.73221 22.5587 7.45147C22.4461 6.69731 22.2627 6.03212 21.9579 5.44821C21.7571 5.58528 21.5268 5.7632 21.2697 5.98867C20.7052 6.4837 20.135 7.09789 19.6109 7.72618C19.0916 8.34868 18.6476 8.94863 18.3329 9.39454C18.1764 9.61622 18.054 9.79669 17.9727 9.91886C17.9326 9.97894 17.9027 10.0247 17.8836 10.0541L17.8827 10.0555L17.8635 10.085L17.8603 10.0901L17.8595 10.0914C17.3764 10.8508 16.5219 11.2925 15.6222 11.2464C14.7223 11.2004 13.9169 10.6736 13.5139 9.86774C13.3145 9.46887 13.1515 9.25524 13.0595 9.15284C12.0142 8.85288 11.25 7.8912 11.25 6.74971C11.25 5.36899 12.3693 4.24971 13.75 4.24971C14.1638 4.24971 14.4617 4.33504 14.5974 4.37391L14.6087 4.37715C14.9028 4.46118 15.2223 4.59269 15.553 4.78834C15.6244 4.70071 15.6972 4.61226 15.7715 4.52323C16.2121 3.99507 16.7179 3.42861 17.2682 2.88619Z',
  d8: 'M5.75018 10C5.75018 8.48122 6.9814 7.25 8.50018 7.25C10.019 7.25 11.2502 8.48122 11.2502 10C11.2502 11.5188 10.019 12.75 8.50018 12.75C6.9814 12.75 5.75018 11.5188 5.75018 10Z',
  d9: 'M8.48143 15.7504C7.24064 15.7687 6.12793 16.3599 5.67943 17.318C5.50381 17.6931 5.05733 17.8549 4.68219 17.6793C4.30705 17.5036 4.14531 17.0572 4.32093 16.682C5.08074 15.059 6.82412 14.2747 8.45929 14.2506C10.1036 14.2263 11.8767 14.9673 12.6794 16.682C12.855 17.0572 12.6933 17.5036 12.3182 17.6793C11.943 17.8549 11.4965 17.6931 11.3209 17.318C10.8358 16.2818 9.7131 15.7322 8.48143 15.7504Z',
  d10: 'M12 3.50001L2.00092 3.5L2 21.5H22V8.50001',
  d11: 'M14 6.5L16 8.5L22 2.5',
  d12: 'M2 2.75H14.6293L11.2148 6.16444L16.0433 10.9929L22.75 4.28614V21.5C22.75 21.9142 22.4142 22.25 22 22.25H2C1.58579 22.25 1.25 21.9142 1.25 21.5V3.5C1.25 3.08579 1.58579 2.75 2 2.75ZM8.49957 7.25C6.98078 7.25 5.74957 8.48122 5.74957 10C5.74957 11.5188 6.98078 12.75 8.49957 12.75C10.0183 12.75 11.2496 11.5188 11.2496 10C11.2496 8.48122 10.0183 7.25 8.49957 7.25ZM5.67882 17.318C6.12732 16.3599 7.24003 15.7687 8.48082 15.7504C9.71249 15.7322 10.8352 16.2818 11.3203 17.318L12.6788 16.682C11.8761 14.9673 10.103 14.2263 8.45868 14.2506C6.8235 14.2747 5.08012 15.059 4.32031 16.682L5.67882 17.318Z',
  d13: 'M22.7502 2.16421L16.043 8.87132L13.3359 6.16421L14.7502 4.75L16.043 6.04289L21.3359 0.75L22.7502 2.16421Z',
};

export const IconPassportValidStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="passport-valid-stroke-rounded IconPassportValidStrokeRounded"
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

export const IconPassportValidDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="passport-valid-duotone-rounded IconPassportValidDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconPassportValidTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="passport-valid-twotone-rounded IconPassportValidTwotoneRounded"
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

export const IconPassportValidSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="passport-valid-solid-rounded IconPassportValidSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconPassportValidBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="passport-valid-bulk-rounded IconPassportValidBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPassportValidStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="passport-valid-stroke-sharp IconPassportValidStrokeSharp"
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
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPassportValidSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="passport-valid-solid-sharp IconPassportValidSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPassportValid: TheIconSelfPack = {
  name: 'PassportValid',
  StrokeRounded: IconPassportValidStrokeRounded,
  DuotoneRounded: IconPassportValidDuotoneRounded,
  TwotoneRounded: IconPassportValidTwotoneRounded,
  SolidRounded: IconPassportValidSolidRounded,
  BulkRounded: IconPassportValidBulkRounded,
  StrokeSharp: IconPassportValidStrokeSharp,
  SolidSharp: IconPassportValidSolidSharp,
};