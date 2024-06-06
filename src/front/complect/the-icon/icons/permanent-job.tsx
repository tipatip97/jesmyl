import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.5 9H5.5M10.5 9H9.5M6.5 6H5.5M10.5 6H9.5',
  d2: 'M18.5 15H17.5M18.5 11H17.5',
  d3: 'M14 8V22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V12C22 10.1144 22 9.17157 21.4142 8.58579C20.8284 8 19.8856 8 18 8H14ZM14 8C14 5.17157 14 3.75736 13.1213 2.87868C12.2426 2 10.8284 2 8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V10',
  d4: 'M8.02485 13.9545C8.02485 15.0583 7.12945 15.953 6.02491 15.953C4.92038 15.953 4.02497 15.0583 4.02497 13.9545C4.02497 12.8508 4.92038 11.9561 6.02491 11.9561C7.12945 11.9561 8.02485 12.8508 8.02485 13.9545Z',
  d5: 'M2.06982 20.2101C3.12817 18.582 4.80886 17.9718 6.02491 17.973C7.24097 17.9743 8.8724 18.582 9.93075 20.2101C9.99917 20.3154 10.018 20.445 9.95628 20.5544C9.70877 20.993 8.94028 21.8633 8.38522 21.9223C7.74746 21.9901 6.07914 21.9996 6.0262 21.9999C5.97322 21.9996 4.2534 21.9901 3.61535 21.9223C3.06029 21.8633 2.2918 20.993 2.04429 20.5544C1.98254 20.445 2.00139 20.3154 2.06982 20.2101Z',
  d6: 'M14 8V22H8C7.9867 22 7.97344 22 7.9602 22C8.64676 21.9998 9.19289 21.6239 9.68326 21.0983C10.5875 20.1291 9.34046 19.3352 8.62423 18.8793C8.54513 18.8289 8.47251 18.7827 8.40997 18.7408C6.93547 17.7531 5.06453 17.7531 3.59003 18.7408C3.5275 18.7827 3.45487 18.8289 3.37577 18.8793C3.00498 19.1153 2.49191 19.4419 2.20873 19.8366C2 18.961 2 17.7517 2 16V8C2 5.17157 2 3.75736 2.87868 2.87868C3.75736 2 5.17157 2 8 2C10.8284 2 12.2426 2 13.1213 2.87868C14 3.75736 14 5.17157 14 8ZM6 16C7.10457 16 8 15.1046 8 14C8 12.8954 7.10457 12 6 12C4.89543 12 4 12.8954 4 14C4 15.1046 4.89543 16 6 16Z',
  d7: 'M8.02332 13.9545C8.02332 15.0583 7.12792 15.953 6.02338 15.953C4.91885 15.953 4.02344 15.0583 4.02344 13.9545C4.02344 12.8508 4.91885 11.9561 6.02338 11.9561C7.12792 11.9561 8.02332 12.8508 8.02332 13.9545Z',
  d8: 'M2.06786 20.2098C3.12621 18.5817 4.8069 17.9715 6.02295 17.9727C7.23901 17.974 8.87044 18.5817 9.92879 20.2098C9.99721 20.3151 10.016 20.4447 9.95432 20.5541C9.70681 20.9927 8.93832 21.863 8.38326 21.922C7.7455 21.9898 6.07718 21.9993 6.02424 21.9996C5.97126 21.9993 4.25145 21.9898 3.6134 21.922C3.05834 21.863 2.28985 20.9927 2.04234 20.5541C1.98059 20.4447 1.99943 20.3151 2.06786 20.2098Z',
  d9: 'M6.5 8.985H5.5M10.5 8.985H9.5M6.5 5.9917H5.5M10.5 5.9917H9.5',
  d10: 'M18.5 14.9715H17.5M18.5 10.9805H17.5',
  d11: 'M14 7.9871V21.9559H18C19.8856 21.9559 20.8284 21.9559 21.4142 21.3714C22 20.7869 22 19.8462 22 17.9648V11.9782C22 10.0968 22 9.15605 21.4142 8.57158C20.8284 7.9871 19.8856 7.9871 18 7.9871H14ZM14 7.9871C14 5.16498 14 3.75393 13.1213 2.87721C12.2426 2.00049 10.8284 2.00049 8 2.00049C5.17157 2.00049 3.75736 2.00049 2.87868 2.87721C2 3.75393 2 5.16498 2 7.9871V9.98263',
  d12: 'M8.01801 13.9721C8.01801 15.0733 7.12261 15.9661 6.01807 15.9661C4.91354 15.9661 4.01814 15.0733 4.01814 13.9721C4.01814 12.8708 4.91354 11.978 6.01807 11.978C7.12261 11.978 8.01801 12.8708 8.01801 13.9721Z',
  d13: 'M2.06298 20.2137C3.12133 18.5891 4.80202 17.9803 6.01807 17.9816C7.23413 17.9828 8.86556 18.5891 9.92391 20.2137C9.99234 20.3187 10.0112 20.448 9.94944 20.5572C9.70193 20.9948 8.93344 21.8631 8.37838 21.922C7.74062 21.9897 6.0723 21.9992 6.01936 21.9994C5.96638 21.9992 4.24656 21.9897 3.60851 21.922C3.05345 21.8631 2.28496 20.9948 2.03745 20.5572C1.9757 20.448 1.99456 20.3187 2.06298 20.2137Z',
  d14: 'M4.50012 6C4.50012 5.44772 4.94784 5 5.50012 5H6.50012C7.05241 5 7.50012 5.44772 7.50012 6C7.50012 6.55228 7.05241 7 6.50012 7H5.50012C4.94784 7 4.50012 6.55228 4.50012 6ZM8.50012 6C8.50012 5.44772 8.94784 5 9.50012 5H10.5001C11.0524 5 11.5001 5.44772 11.5001 6C11.5001 6.55228 11.0524 7 10.5001 7H9.50012C8.94784 7 8.50012 6.55228 8.50012 6ZM4.50012 9C4.50012 8.44772 4.94784 8 5.50012 8H6.50012C7.05241 8 7.50012 8.44772 7.50012 9C7.50012 9.55228 7.05241 10 6.50012 10H5.50012C4.94784 10 4.50012 9.55228 4.50012 9ZM8.50012 9C8.50012 8.44772 8.94784 8 9.50012 8H10.5001C11.0524 8 11.5001 8.44772 11.5001 9C11.5001 9.55228 11.0524 10 10.5001 10H9.50012C8.94784 10 8.50012 9.55228 8.50012 9Z',
  d15: 'M11.4383 1.36606C10.5746 1.24994 9.48336 1.24997 8.16004 1.25H8.16H8.02207H8.02203C6.6987 1.24997 5.60748 1.24994 4.74381 1.36606C3.83707 1.48797 3.03627 1.75375 2.39507 2.39495C1.75387 3.03615 1.48809 3.83695 1.36618 4.74369C1.25006 5.60735 1.25009 6.69858 1.25012 8.0219V8.02194L1.25013 11.0227C1.25013 11.5625 1.68767 12 2.2274 12C2.76713 12 3.20467 11.5625 3.20467 11.0227V8.09091C3.20467 6.68121 3.20675 5.72225 3.30329 5.00413C3.39606 4.31412 3.55963 3.99453 3.77714 3.77702C3.99466 3.55951 4.31424 3.39594 5.00425 3.30317C5.72237 3.20662 6.68133 3.20455 8.09103 3.20455C9.50073 3.20455 10.4597 3.20662 11.1778 3.30317C11.8678 3.39594 12.1874 3.55951 12.4049 3.77702C12.6224 3.99453 12.786 4.31412 12.8788 5.00413C12.9753 5.72225 12.9774 6.68121 12.9774 8.09091V21.7727C12.9774 22.3125 13.4149 22.75 13.9547 22.75L17.9281 22.75H17.9281H17.9281C18.7944 22.75 19.5409 22.7501 20.1386 22.6697C20.7793 22.5836 21.3933 22.3894 21.8914 21.8913C22.3895 21.3932 22.5837 20.7791 22.6698 20.1385C22.7502 19.5408 22.7502 18.7943 22.7501 17.928V17.928V17.9279V11.9357V11.9357V11.9356C22.7502 11.0693 22.7502 10.3229 22.6698 9.72511C22.5837 9.0845 22.3895 8.47043 21.8914 7.97235C21.3933 7.47427 20.7793 7.28004 20.1386 7.19391C19.5409 7.11354 18.7944 7.11359 17.9281 7.11363L14.9304 7.11364C14.9254 6.19045 14.9043 5.40114 14.8159 4.74369C14.694 3.83695 14.4282 3.03615 13.787 2.39495C13.1458 1.75375 12.345 1.48797 11.4383 1.36606ZM17.5001 10.25C17.0859 10.25 16.7501 10.5858 16.7501 11C16.7501 11.4142 17.0859 11.75 17.5001 11.75H18.5001C18.9143 11.75 19.2501 11.4142 19.2501 11C19.2501 10.5858 18.9143 10.25 18.5001 10.25H17.5001ZM17.5001 14.25C17.0859 14.25 16.7501 14.5858 16.7501 15C16.7501 15.4142 17.0859 15.75 17.5001 15.75H18.5001C18.9143 15.75 19.2501 15.4142 19.2501 15C19.2501 14.5858 18.9143 14.25 18.5001 14.25H17.5001Z',
  d16: 'M3.24998 14C3.24998 12.4812 4.48119 11.25 5.99998 11.25C7.51876 11.25 8.74998 12.4812 8.74998 14C8.74998 15.5188 7.51876 16.75 5.99998 16.75C4.48119 16.75 3.24998 15.5188 3.24998 14Z',
  d17: 'M3.1726 18.1177C4.89965 16.9608 7.1003 16.9608 8.82735 18.1177C9.13741 18.3137 9.84341 18.7614 10.2142 19.1697C10.4495 19.4288 10.6975 19.7967 10.7428 20.2626C10.7914 20.7627 10.5934 21.2221 10.2316 21.6099C9.6845 22.1963 8.95289 22.75 7.95959 22.75H4.04036C3.04706 22.75 2.31546 22.1963 1.76834 21.6099C1.40653 21.2221 1.20855 20.7627 1.25714 20.2626C1.30241 19.7967 1.55046 19.4288 1.7858 19.1697C2.15655 18.7614 2.86254 18.3137 3.1726 18.1177Z',
  d18: 'M8.16004 1.25C9.48336 1.24997 10.5746 1.24994 11.4383 1.36606C12.345 1.48796 13.1458 1.75375 13.787 2.39495C14.4282 3.03615 14.694 3.83695 14.8159 4.74369C14.9043 5.40114 14.9254 6.19045 14.9304 7.11364L17.9281 7.11363C18.7944 7.11359 19.5409 7.11354 20.1386 7.19391C20.7793 7.28004 21.3933 7.47427 21.8914 7.97235C22.3895 8.47042 22.5837 9.08449 22.6698 9.72511C22.7502 10.3229 22.7502 11.0693 22.7501 11.9357V11.9357V17.9279V17.928C22.7502 18.7943 22.7502 19.5408 22.6698 20.1385C22.5837 20.7791 22.3895 21.3932 21.8914 21.8913C21.3933 22.3894 20.7793 22.5836 20.1386 22.6697C19.5409 22.7501 18.7944 22.75 17.9281 22.75H17.9281L13.9547 22.75C13.4149 22.75 12.9774 22.3125 12.9774 21.7727V8.09091C12.9774 6.68121 12.9753 5.72225 12.8788 5.00413C12.786 4.31412 12.6224 3.99453 12.4049 3.77702C12.1874 3.55951 11.8678 3.39594 11.1778 3.30317C10.4597 3.20662 9.50073 3.20455 8.09103 3.20455C6.68133 3.20455 5.72237 3.20662 5.00425 3.30317C4.31424 3.39594 3.99465 3.55951 3.77714 3.77702C3.55963 3.99453 3.39606 4.31412 3.30329 5.00413C3.20674 5.72225 3.20467 6.68121 3.20467 8.09091V11.0227C3.20467 11.5625 2.76713 12 2.2274 12C1.68766 12 1.25012 11.5625 1.25012 11.0227L1.25012 8.02194V8.0219C1.25009 6.69858 1.25006 5.60735 1.36618 4.74369C1.48809 3.83695 1.75387 3.03615 2.39507 2.39495C3.03627 1.75375 3.83707 1.48796 4.74381 1.36606C5.60747 1.24994 6.6987 1.24997 8.02203 1.25H8.02206H8.16H8.16004Z',
  d19: 'M16.7501 11C16.7501 10.5858 17.0859 10.25 17.5001 10.25H18.5001C18.9143 10.25 19.2501 10.5858 19.2501 11C19.2501 11.4142 18.9143 11.75 18.5001 11.75H17.5001C17.0859 11.75 16.7501 11.4142 16.7501 11ZM16.7501 15C16.7501 14.5858 17.0859 14.25 17.5001 14.25H18.5001C18.9143 14.25 19.2501 14.5858 19.2501 15C19.2501 15.4142 18.9143 15.75 18.5001 15.75H17.5001C17.0859 15.75 16.7501 15.4142 16.7501 15Z',
  d20: 'M7 9H5M11 9H9M7 6H5M11 6H9',
  d21: 'M19 15H17M19 11H17',
  d22: 'M14 7.99997V22L22 22V7.99997H14ZM14 7.99997V2H2V9.99997',
  d23: 'M8 14C8 15.1046 7.10457 16 6 16C4.89543 16 4 15.1046 4 14C4 12.8954 4.89543 12 6 12C7.10457 12 8 12.8954 8 14Z',
  d24: 'M10 22H2C2 20.0363 3.79086 18 6 18C8.20914 18 10 20.0363 10 22Z',
  d25: 'M5 5H7V7H5V5ZM9 5H11V7H9V5ZM5 8H7V10H5V8ZM9 8H11V10H9V8Z',
  d26: 'M2.22727 1.25C1.68754 1.25 1.25 1.68754 1.25 2.22727V11.0227H3.20455V3.20455H12.9773V21.7727C12.9773 22.3124 13.4148 22.75 13.9545 22.75L21.7727 22.75C22.0319 22.75 22.2805 22.647 22.4638 22.4638C22.647 22.2805 22.75 22.0319 22.75 21.7727V8.09088C22.75 7.55115 22.3125 7.11361 21.7727 7.11361H14.9318V2.22727C14.9318 1.68754 14.4943 1.25 13.9545 1.25H2.22727ZM19 10.25H17V11.75H19V10.25ZM19 14.25H17V15.75H19V14.25Z',
  d27: 'M3.25 14C3.25 12.4812 4.48122 11.25 6 11.25C7.51878 11.25 8.75 12.4812 8.75 14C8.75 15.5188 7.51878 16.75 6 16.75C4.48122 16.75 3.25 15.5188 3.25 14Z',
  d28: 'M2.63035 18.7444C3.47183 17.8673 4.65909 17.25 6 17.25C7.34091 17.25 8.52817 17.8673 9.36965 18.7444C10.207 19.6172 10.75 20.7969 10.75 22C10.75 22.4142 10.4142 22.75 10 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22C1.25 20.7969 1.79304 19.6172 2.63035 18.7444Z',
};

export const IconPermanentJobStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="permanent-job-stroke-rounded IconPermanentJobStrokeRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPermanentJobDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="permanent-job-duotone-rounded IconPermanentJobDuotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPermanentJobTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="permanent-job-twotone-rounded IconPermanentJobTwotoneRounded"
    >
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPermanentJobSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="permanent-job-solid-rounded IconPermanentJobSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPermanentJobBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="permanent-job-bulk-rounded IconPermanentJobBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPermanentJobStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="permanent-job-stroke-sharp IconPermanentJobStrokeSharp"
    >
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPermanentJobSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="permanent-job-solid-sharp IconPermanentJobSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPermanentJob: TheIconSelfPack = {
  name: 'PermanentJob',
  StrokeRounded: IconPermanentJobStrokeRounded,
  DuotoneRounded: IconPermanentJobDuotoneRounded,
  TwotoneRounded: IconPermanentJobTwotoneRounded,
  SolidRounded: IconPermanentJobSolidRounded,
  BulkRounded: IconPermanentJobBulkRounded,
  StrokeSharp: IconPermanentJobStrokeSharp,
  SolidSharp: IconPermanentJobSolidSharp,
};