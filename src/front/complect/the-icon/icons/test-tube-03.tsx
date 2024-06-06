import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.01562 2.00195H15.9751',
  d2: 'M5.5332 11.1501C5.5332 11.1501 8.5332 10.2242 11.0332 13.0017M18.5332 11.613C18.5332 11.613 17.9216 12.5922 17.0332 13.0019',
  d3: 'M10.0332 18.0039L10.0419 18.0015',
  d4: 'M14.0332 14.0039L14.0419 14.0015',
  d5: 'M9.52693 2.21484V6.25745C9.52693 6.91941 9.17519 7.49018 8.59404 7.80163C5.60885 9.40144 2.80495 13.934 5.74609 18.5793C6.4044 19.7188 8.57684 21.9979 12.0001 21.9979C15.4233 21.9979 17.5957 19.7188 18.2541 18.5793C21.1952 13.934 18.3913 9.40144 15.4061 7.80163C14.825 7.49018 14.4725 6.91941 14.4725 6.25745V2.26362',
  d6: 'M12 21.9998C16.1421 21.9998 19.5 18.642 19.5 14.4998C19.5 13.3188 19.2566 12.2626 18.7703 11.2688C13.5 18.5 10 9.50243 5.28179 11.1621C4.77363 12.1735 4.5 13.2908 4.5 14.4998C4.5 18.642 7.85786 21.9998 12 21.9998Z',
  d7: 'M15.4718 7.8502L15.8194 7.18565V7.18565L15.4718 7.8502ZM15.25 2C15.25 1.58579 14.9142 1.25 14.5 1.25C14.0858 1.25 13.75 1.58579 13.75 2H15.25ZM8.52824 7.8502L8.18057 7.18565H8.18057L8.52824 7.8502ZM10.25 2C10.25 1.58579 9.91421 1.25 9.5 1.25C9.08579 1.25 8.75 1.58579 8.75 2H10.25ZM18.75 14.5C18.75 18.2279 15.7279 21.25 12 21.25V22.75C16.5563 22.75 20.25 19.0563 20.25 14.5H18.75ZM12 21.25C8.27208 21.25 5.25 18.2279 5.25 14.5H3.75C3.75 19.0563 7.44365 22.75 12 22.75V21.25ZM15.1241 8.51475C17.2809 9.64307 18.75 11.9006 18.75 14.5H20.25C20.25 11.3206 18.4513 8.56251 15.8194 7.18565L15.1241 8.51475ZM13.75 2V6.366H15.25V2H13.75ZM5.25 14.5C5.25 11.9006 6.71914 9.64307 8.8759 8.51475L8.18057 7.18565C5.54873 8.56251 3.75 11.3206 3.75 14.5H5.25ZM10.25 6.366V2H8.75V6.366H10.25ZM8.8759 8.51475C9.63161 8.1194 10.25 7.33783 10.25 6.366H8.75C8.75 6.66562 8.55146 6.99161 8.18057 7.18565L8.8759 8.51475ZM15.8194 7.18565C15.4485 6.99162 15.25 6.66562 15.25 6.366H13.75C13.75 7.33783 14.3684 8.1194 15.1241 8.51475L15.8194 7.18565Z',
  d8: 'M8 2H16',
  d9: 'M5.5 11.1482C5.5 11.1482 8.5 10.2223 11 12.9998M18.5 11.6111C18.5 11.6111 17.8884 12.5903 17 13',
  d10: 'M10 18.002L10.0087 17.9996',
  d11: 'M14 14.002L14.0087 13.9996',
  d12: 'M8.00781 1.99854H15.9443',
  d13: 'M5.52734 11.1085C5.52734 11.1085 8.50353 10.1864 10.9837 12.9523M18.4241 11.5694C18.4241 11.5694 17.8174 12.5446 16.9361 12.9525',
  d14: 'M10.0352 18.0004L10.0439 17.998',
  d15: 'M13.959 13.9506L13.9677 13.9482',
  d16: 'M9.52147 2.10693V6.13266C9.52147 6.79186 9.17252 7.36024 8.59598 7.67039C5.6345 9.26352 2.84745 13.8763 5.67297 18.403C6.32606 19.5378 8.47011 22.0016 12.1598 22.0016C15.2343 22.0016 17.635 19.5378 18.288 18.403C21.2058 13.7771 18.3155 9.26352 15.354 7.67039C14.7774 7.36024 14.4278 6.79185 14.4278 6.13266V2.15551',
  d17: 'M7.25 2C7.25 1.44772 7.69772 1 8.25 1H16.25C16.8023 1 17.25 1.44772 17.25 2C17.25 2.55228 16.8023 3 16.25 3H8.25C7.69772 3 7.25 2.55228 7.25 2Z',
  d18: 'M9.82353 1C10.3596 1 10.7941 1.43754 10.7941 1.97727V6.24405C10.7941 7.30327 10.126 8.14128 9.33027 8.56044C8.71911 8.88237 8.1671 9.3019 7.69452 9.79839C8.73736 9.93756 10.0512 10.4179 11.25 11.7498C12.2562 12.8676 14.6038 13.6126 17.25 11.75C17.4832 11.5859 17.6853 11.4283 17.8589 11.2821C17.2631 10.1203 16.3214 9.16711 15.1697 8.56044C14.374 8.14128 13.7059 7.30327 13.7059 6.24404V1.97727C13.7059 1.43754 14.1404 1 14.6765 1C15.2125 1 15.6471 1.43754 15.6471 1.97727V6.24404C15.6471 6.42737 15.7718 6.67175 16.0696 6.82858C18.7009 8.21464 20.5 10.9916 20.5 14.1932C20.5 18.7809 16.8063 22.5 12.25 22.5C7.69365 22.5 4 18.7809 4 14.1932C4 10.9916 5.79914 8.21464 8.43043 6.82858C8.72815 6.67175 8.85294 6.42737 8.85294 6.24405V1.97727C8.85294 1.43754 9.28749 1 9.82353 1ZM9.28417 18.0114C9.14188 17.4779 9.45701 16.9296 9.98804 16.7866L9.99668 16.7843C10.5277 16.6414 11.0735 16.958 11.2158 17.4914C11.3581 18.0249 11.043 18.5732 10.512 18.7162L10.5033 18.7185C9.97229 18.8614 9.42646 18.5449 9.28417 18.0114ZM14.988 14.7866C14.457 14.9296 14.1419 15.4779 14.2842 16.0114C14.4265 16.5449 14.9723 16.8614 15.5033 16.7185L15.512 16.7162C16.043 16.5732 16.3581 16.0249 16.2158 15.4914C16.0735 14.958 15.5277 14.6414 14.9967 14.7843L14.988 14.7866Z',
  d19: 'M17.0002 11.9987C14.3541 13.8613 12.0064 13.1163 11.0002 11.9985C9.83967 10.7091 8.49094 10.1894 7.45989 10.0312C6.36428 11.1744 5.69141 12.7294 5.69141 14.4419C5.69141 17.9502 8.51596 20.7942 12.0002 20.7942C15.4845 20.7942 18.3091 17.9502 18.3091 14.4419C18.3091 13.3981 18.0591 12.4129 17.6158 11.5437L17.0002 11.9987ZM9.03417 18.2614C8.89188 17.7279 9.20701 17.1796 9.73804 17.0366L9.74668 17.0343C10.2777 16.8914 10.8235 17.208 10.9658 17.7414C11.1081 18.2749 10.793 18.8232 10.262 18.9662L10.2533 18.9685C9.72229 19.1114 9.17646 18.7949 9.03417 18.2614ZM14.738 15.0366C14.207 15.1796 13.8919 15.7279 14.0342 16.2614C14.1765 16.7949 14.7223 17.1114 15.2533 16.9685L15.262 16.9662C15.793 16.8232 16.1081 16.2749 15.9658 15.7414C15.8235 15.208 15.2777 14.8914 14.7467 15.0343L14.738 15.0366Z',
  d20: 'M7 2.25C7 1.69772 7.44772 1.25 8 1.25H16C16.5523 1.25 17 1.69772 17 2.25C17 2.80228 16.5523 3.25 16 3.25H8C7.44772 3.25 7 2.80228 7 2.25Z',
  d21: 'M9.57353 1.25C10.1096 1.25 10.5441 1.68754 10.5441 2.22727V6.49405C10.5441 7.55327 9.876 8.39128 9.08027 8.81044C7.06379 9.87264 5.69118 11.9973 5.69118 14.4432C5.69118 17.9514 8.51573 20.7955 12 20.7955C15.4843 20.7955 18.3088 17.9514 18.3088 14.4432C18.3088 11.9973 16.9362 9.87264 14.9197 8.81044C14.124 8.39128 13.4559 7.55327 13.4559 6.49404V2.22727C13.4559 1.68754 13.8904 1.25 14.4265 1.25C14.9625 1.25 15.3971 1.68754 15.3971 2.22727V6.49404C15.3971 6.67737 15.5218 6.92175 15.8196 7.07858C18.4509 8.46464 20.25 11.2416 20.25 14.4432C20.25 19.0309 16.5563 22.75 12 22.75C7.44365 22.75 3.75 19.0309 3.75 14.4432C3.75 11.2416 5.54914 8.46464 8.18043 7.07858C8.47815 6.92175 8.60294 6.67737 8.60294 6.49405V2.22727C8.60294 1.68754 9.03749 1.25 9.57353 1.25Z',
  d22: 'M14.498 2V7.42676C17.411 8.45636 19.498 11.2345 19.498 14.5C19.498 18.6421 16.1402 22 11.998 22C7.85591 22 4.49805 18.6421 4.49805 14.5C4.49805 11.2345 6.58507 8.45636 9.49805 7.42676V2',
  d23: 'M7 2H17',
  d24: 'M17 2.75H15.25V6.91505C18.1896 8.17623 20.25 11.0966 20.25 14.5C20.25 19.0563 16.5563 22.75 12 22.75C7.44365 22.75 3.75 19.0563 3.75 14.5C3.75 11.0966 5.81045 8.17623 8.75 6.91505V2.75H7V1.25H17V2.75ZM11.49 12.4334C9.73912 10.9153 8.22478 10.3787 7.09179 10.2551C6.98004 10.2429 6.87256 10.2348 6.76953 10.2301C7.54395 9.28288 8.57076 8.54988 9.74767 8.13389L10.2477 7.95715V2.75H13.7477V7.95715L14.2478 8.13389C16.2378 8.83727 17.7987 10.447 18.4359 12.4661C17.6772 13.3755 16.8301 13.7983 16.0084 13.9384C16.0369 14.8455 15.4411 15.6863 14.5266 15.9314L14.5179 15.9337C13.451 16.2196 12.3543 15.5864 12.0684 14.5195C11.9263 13.9892 12.0112 13.4516 12.2636 13.0098C11.984 12.8309 11.724 12.6363 11.49 12.4334ZM9.74327 17.0361C9.2098 17.179 8.89322 17.7274 9.03616 18.2608C9.1791 18.7943 9.72744 19.1109 10.2609 18.968L10.2696 18.9656C10.803 18.8227 11.1196 18.2744 10.9767 17.7409C10.8337 17.2074 10.2854 16.8908 9.75195 17.0338L9.74327 17.0361Z',
  d25: 'M13.0363 14.2609C12.8933 13.7274 13.2099 13.1791 13.7434 13.0362L13.7521 13.0338C14.2855 12.8909 14.8339 13.2075 14.9768 13.7409C15.1197 14.2744 14.8032 14.8227 14.2697 14.9657L14.261 14.968C13.7276 15.111 13.1792 14.7944 13.0363 14.2609Z',
};

export const IconTestTube03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-03-stroke-rounded IconTestTube03StrokeRounded"
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

export const IconTestTube03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-03-duotone-rounded IconTestTube03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconTestTube03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-03-twotone-rounded IconTestTube03TwotoneRounded"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTestTube03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-03-solid-rounded IconTestTube03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTestTube03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-03-bulk-rounded IconTestTube03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTestTube03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-03-stroke-sharp IconTestTube03StrokeSharp"
    >
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconTestTube03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-03-solid-sharp IconTestTube03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTestTube03: TheIconSelfPack = {
  name: 'TestTube03',
  StrokeRounded: IconTestTube03StrokeRounded,
  DuotoneRounded: IconTestTube03DuotoneRounded,
  TwotoneRounded: IconTestTube03TwotoneRounded,
  SolidRounded: IconTestTube03SolidRounded,
  BulkRounded: IconTestTube03BulkRounded,
  StrokeSharp: IconTestTube03StrokeSharp,
  SolidSharp: IconTestTube03SolidSharp,
};