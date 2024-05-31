import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 14.0466C9.7927 13.8404 7.53058 14.3187 5.57757 15.4816C4.1628 16.324 0.453365 18.0441 2.71266 20.1966C3.81631 21.248 5.04549 22 6.59087 22H13',
  d2: 'M15.5 6.5C15.5 8.98528 13.4853 11 11 11C8.51472 11 6.5 8.98528 6.5 6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5Z',
  d3: 'M17.9992 14C16.7328 14 15.9117 14.8076 14.9405 15.102C14.5456 15.2217 14.3482 15.2815 14.2683 15.3659C14.1884 15.4502 14.165 15.5735 14.1182 15.8201C13.6174 18.4584 14.712 20.8976 17.3222 21.847C17.6027 21.949 17.7429 22 18.0006 22C18.2583 22 18.3986 21.949 18.679 21.847C21.2891 20.8976 22.3826 18.4584 21.8817 15.8201C21.8349 15.5735 21.8114 15.4502 21.7315 15.3658C21.6516 15.2814 21.4542 15.2216 21.0593 15.102C20.0878 14.8077 19.2657 14 17.9992 14Z',
  d4: 'M5.09548 15.7585C5.27346 15.6578 5.43686 15.5654 5.57757 15.4816C8.55511 13.7086 12.2512 13.5269 15.376 14.9364C15.2329 15.0004 15.0885 15.0571 14.9405 15.102C14.5456 15.2217 14.3482 15.2815 14.2683 15.3659C14.1884 15.4502 14.165 15.5735 14.1182 15.8201C13.6388 18.3456 14.6213 20.6887 16.9959 21.7172C16.5034 21.8982 15.9777 22 15.4091 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.678069 18.2582 3.48398 16.6704 5.09548 15.7585Z',
  d5: 'M16.028 13.7677C16.5535 13.5091 17.1975 13.25 17.9993 13.25C18.8011 13.25 19.4453 13.5091 19.971 13.7676C20.1494 13.8554 20.3038 13.9363 20.4442 14.0099C20.7544 14.1725 20.996 14.2991 21.2769 14.3842C21.4566 14.4387 21.6443 14.4955 21.7752 14.5442C21.8874 14.586 22.106 14.6705 22.2761 14.85C22.426 15.0083 22.4969 15.1817 22.5373 15.3162C22.5707 15.4272 22.5988 15.5758 22.6186 15.6802C23.1761 18.6167 21.9481 21.456 18.9354 22.5518C18.6623 22.6513 18.3912 22.75 18.0007 22.75C17.6102 22.75 17.3391 22.6513 17.0659 22.5518C14.0533 21.4561 12.824 18.617 13.3814 15.6802C13.4012 15.5758 13.4293 15.4273 13.4626 15.3163C13.503 15.1818 13.5739 15.0084 13.7238 14.8501C13.8939 14.6706 14.1124 14.5861 14.2247 14.5443C14.3556 14.4956 14.5432 14.4387 14.723 14.3842C15.0037 14.2991 15.245 14.1726 15.555 14.01C15.6953 13.9364 15.8496 13.8555 16.028 13.7677Z',
  d6: 'M5.75035 6.5C5.75035 3.6005 8.10086 1.25 11.0004 1.25C13.8998 1.25 16.2504 3.6005 16.2504 6.5C16.2504 9.39949 13.8998 11.75 11.0004 11.75C8.10086 11.75 5.75035 9.39949 5.75035 6.5Z',
  d7: 'M13.1966 21.5303C13.6416 22.1221 13.8642 22.418 13.7813 22.584C13.6984 22.75 13.3575 22.75 12.6758 22.75H6.59104C4.77274 22.75 3.36695 21.8556 2.1955 20.7396C1.51649 20.0927 1.17802 19.3646 1.26283 18.5888C1.34257 17.8592 1.78123 17.2637 2.2429 16.8118C2.98106 16.0893 4.05857 15.4814 4.77139 15.0793C4.93401 14.9875 5.07775 14.9064 5.19404 14.8372C6.49889 14.0602 7.93096 13.5691 9.39543 13.3625C10.4593 13.2125 11.5411 13.2125 12.6049 13.3625C12.7809 13.3874 12.8337 13.6237 12.7062 13.7475C12.6825 13.7704 12.6591 13.7941 12.6359 13.8186C12.266 14.2092 12.105 14.6255 12.0272 14.8847C11.9702 15.0743 11.9294 15.2913 11.9118 15.3849L11.9087 15.4013C11.4936 17.5892 11.9102 19.8197 13.1966 21.5303Z',
  d8: 'M11 1.25C8.1005 1.25 5.75 3.6005 5.75 6.5C5.75 9.39949 8.1005 11.75 11 11.75C13.8995 11.75 16.25 9.39949 16.25 6.5C16.25 3.6005 13.8995 1.25 11 1.25Z',
  d9: 'M13.7813 22.584C13.8642 22.418 13.6416 22.1221 13.1966 21.5303C11.9102 19.8197 11.4936 17.5892 11.9087 15.4013L11.9118 15.3849C11.9294 15.2913 11.9702 15.0743 12.0272 14.8847C12.105 14.6255 12.266 14.2092 12.6359 13.8186C12.6591 13.7941 12.6825 13.7704 12.7062 13.7475C12.8337 13.6237 12.7809 13.3874 12.6049 13.3625C11.5411 13.2125 10.4593 13.2125 9.39543 13.3625C7.93096 13.5691 6.49889 14.0602 5.19404 14.8372C5.07778 14.9064 4.93408 14.9875 4.77151 15.0792C4.05869 15.4813 2.98106 16.0893 2.2429 16.8118C1.78123 17.2637 1.34257 17.8592 1.26283 18.5888C1.17802 19.3646 1.51649 20.0927 2.1955 20.7396C3.36695 21.8556 4.77274 22.75 6.59104 22.75H12.6758C13.3575 22.75 13.6984 22.75 13.7813 22.584Z',
  d10: 'M12 19.9956H2C2 16.1306 5.58172 12.9973 10 12.9973C10.6906 12.9973 11.3608 13.0739 12 13.2178M14 5.99902C14 8.20762 12.2091 9.99805 10 9.99805C7.79086 9.99805 6 8.20762 6 5.99902C6 3.79042 7.79086 2 10 2C12.2091 2 14 3.79042 14 5.99902Z',
  d11: 'M18.007 14.0049C16.5981 14.0049 15.6027 15.2289 14.2176 15.2253C13.4456 18.4257 14.796 20.8122 17.1917 21.7508C17.4715 21.8528 17.7512 22.0029 18.0084 22.0029C18.2655 22.0029 18.4054 21.9519 18.6853 21.85C21.6924 20.7542 22.4275 17.9018 21.786 15.2205C20.5052 15.2205 19.2707 14.0049 18.007 14.0049Z',
  d12: 'M15.8021 13.9119C16.3588 13.6233 17.0786 13.25 17.9999 13.25C18.9251 13.25 19.6456 13.6239 20.203 13.9132L20.2418 13.9333C20.8366 14.2417 21.2583 14.448 21.7835 14.448H22.3706L22.5115 15.0171C22.9716 16.8747 22.7532 18.6232 21.9624 20.01C21.1693 21.4011 19.8272 22.3781 18.1497 22.7195L17.9999 22.75L17.8501 22.7195C16.1725 22.3781 14.8305 21.4011 14.0374 20.01C13.2467 18.6232 13.0282 16.8747 13.4883 15.0171L13.6292 14.448H14.2163C14.7427 14.448 15.1662 14.2413 15.7611 13.9332L15.8021 13.9119Z',
  d13: 'M12.0323 14.6565L12.4554 12.948H13.6282C12.5156 12.4986 11.2843 12.25 10 12.25C5.26471 12.25 1.25 15.6289 1.25 20V20.75H12.7191C11.7383 18.9937 11.4981 16.813 12.0323 14.6565Z',
  d14: 'M5.25 6C5.25 3.37665 7.37665 1.25 10 1.25C12.6234 1.25 14.75 3.37665 14.75 6C14.75 8.62335 12.6234 10.75 10 10.75C7.37665 10.75 5.25 8.62335 5.25 6Z',
} as const;

export const IconUserShield01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-shield-01-stroke-rounded IconUserShield01StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserShield01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-shield-01-duotone-rounded IconUserShield01DuotoneRounded"
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

export const IconUserShield01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-shield-01-twotone-rounded IconUserShield01TwotoneRounded"
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

export const IconUserShield01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-shield-01-solid-rounded IconUserShield01SolidRounded"
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

export const IconUserShield01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-shield-01-bulk-rounded IconUserShield01BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconUserShield01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-shield-01-stroke-sharp IconUserShield01StrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconUserShield01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-shield-01-solid-sharp IconUserShield01SolidSharp"
    >
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

export const iconPackOfUserShield01: TheIconSelfPack = {
  name: 'UserShield01',
  StrokeRounded: IconUserShield01StrokeRounded,
  DuotoneRounded: IconUserShield01DuotoneRounded,
  TwotoneRounded: IconUserShield01TwotoneRounded,
  SolidRounded: IconUserShield01SolidRounded,
  BulkRounded: IconUserShield01BulkRounded,
  StrokeSharp: IconUserShield01StrokeSharp,
  SolidSharp: IconUserShield01SolidSharp,
};