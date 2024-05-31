import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 18C13 18 14 18 15 20C15 20 18.1765 15 21 14',
  d2: 'M16 12C14.9041 9.63505 12.5526 8 9.82857 8C6.05725 8 3 11.134 3 15C3 18.866 6.05725 22 9.82857 22C10.1598 22 10.4855 21.9758 10.8041 21.9291',
  d3: 'M14.5 9.5V6.5C14.5 4.01472 12.4853 2 10 2C7.51472 2 5.5 4.01472 5.5 6.5V9.5',
  d4: 'M3 15C3 11.134 6.13401 8 10 8C13.866 8 17 11.134 17 15C17 18.866 13.866 22 10 22C6.13401 22 3 18.866 3 15Z',
  d5: 'M4.37488 6.75C4.37488 3.71243 6.83731 1.25 9.87488 1.25C12.9124 1.25 15.3749 3.71243 15.3749 6.75V9.75C15.3749 10.3023 14.9272 10.75 14.3749 10.75C13.8226 10.75 13.3749 10.3023 13.3749 9.75V6.75C13.3749 4.817 11.8079 3.25 9.87488 3.25C7.94188 3.25 6.37488 4.817 6.37488 6.75V9.75C6.37488 10.3023 5.92716 10.75 5.37488 10.75C4.82259 10.75 4.37488 10.3023 4.37488 9.75V6.75Z',
  d6: 'M21.8175 13.6664C22.0019 14.187 21.7293 14.7585 21.2087 14.9429C20.6751 15.1319 20.0586 15.5388 19.4056 16.1115C18.7628 16.6751 18.1377 17.3521 17.5839 18.0159C17.0321 18.6774 16.5633 19.3111 16.2323 19.7801C16.0671 20.0141 15.7189 20.5365 15.7189 20.5365C15.5257 20.8406 15.1836 21.0174 14.8237 20.999C14.4638 20.9805 14.1416 20.7698 13.9805 20.4475C13.5398 19.5661 12.9853 19.0149 12.7813 18.9959C12.2729 18.9487 11.8749 18.521 11.8749 18.0003C11.8749 17.448 12.3226 17.0003 12.8749 17.0003C13.4272 17.0003 13.7802 17.2353 14.0546 17.4182C14.3289 17.6011 14.6165 17.8538 14.9053 18.1997C15.2205 17.7689 15.6089 17.2613 16.0482 16.7347C16.6415 16.0235 17.3399 15.2629 18.0869 14.6078C18.8235 13.9618 19.6629 13.3686 20.541 13.0576C21.0616 12.8733 21.6331 13.1458 21.8175 13.6664Z',
  d7: 'M9.87476 7.25C5.59455 7.25 2.12476 10.7198 2.12476 15C2.12476 19.2802 5.59455 22.75 9.87476 22.75C10.7752 22.75 11.6398 22.5964 12.4437 22.3141C12.7904 22.1923 12.9637 22.1314 13.0129 21.9999C13.062 21.8684 12.9423 21.6584 12.703 21.2384C12.6805 21.1991 12.6591 21.159 12.6387 21.1182C12.5203 20.8814 12.3959 20.6866 12.2872 20.5405C12.2426 20.4805 12.2203 20.4505 12.1854 20.4244C12.1506 20.3983 12.1026 20.3805 12.0065 20.3449C11.0534 19.9919 10.3748 19.0759 10.3748 18.0001C10.3748 16.6194 11.494 15.5001 12.8748 15.5001C13.5179 15.5001 14.0236 15.6822 14.3859 15.8677C14.4623 15.9068 14.5004 15.9264 14.5278 15.9344C14.6299 15.9641 14.7195 15.9458 14.8017 15.8785C14.8238 15.8604 14.848 15.8315 14.8962 15.7737C15.5192 15.0269 16.2725 14.2036 17.0977 13.4799C17.1091 13.4699 17.1206 13.4599 17.1321 13.4498C17.2737 13.3264 17.3445 13.2647 17.3692 13.1808C17.3939 13.0969 17.3699 13.0137 17.3219 12.8473C16.389 9.61439 13.408 7.25 9.87476 7.25Z',
  d8: 'M9.87476 1.25C6.83719 1.25 4.37476 3.71243 4.37476 6.75V9.53992C4.95644 8.95401 5.63109 8.46054 6.37476 8.08347V6.75C6.37476 4.817 7.94176 3.25 9.87476 3.25C11.8078 3.25 13.3748 4.817 13.3748 6.75V8.08347C14.1184 8.46054 14.7931 8.95401 15.3748 9.53992V6.75C15.3748 3.71243 12.9123 1.25 9.87476 1.25Z',
  d9: 'M13 18L15 20L21 14',
  d10: 'M21.7501 14.7072L15.043 21.4143L12.3359 18.7072L13.7501 17.293L15.043 18.5859L20.3359 13.293L21.7501 14.7072Z',
  d11: 'M4.49992 6.75C4.49992 3.71243 6.96236 1.25 9.99992 1.25C13.0375 1.25 15.4999 3.71243 15.4999 6.75V9.75H13.4999V6.75C13.4999 4.817 11.9329 3.25 9.99992 3.25C8.06693 3.25 6.49992 4.817 6.49992 6.75V9.75H4.49992V6.75Z',
  d12: 'M9.99985 7.25C5.71964 7.25 2.24985 10.7198 2.24985 15C2.24985 19.2802 5.71964 22.75 9.99985 22.75C11.2391 22.75 12.4104 22.4591 13.4492 21.942L10.2147 18.7074L13.7502 15.1719L15.0431 16.4648L17.6642 13.8437C17.1059 10.1119 13.8871 7.25 9.99985 7.25Z',
} as const;

export const IconCircleLockCheck01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-check-01-stroke-rounded IconCircleLockCheck01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCircleLockCheck01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-check-01-duotone-rounded IconCircleLockCheck01DuotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleLockCheck01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-check-01-twotone-rounded IconCircleLockCheck01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCircleLockCheck01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-check-01-solid-rounded IconCircleLockCheck01SolidRounded"
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleLockCheck01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-check-01-bulk-rounded IconCircleLockCheck01BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCircleLockCheck01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-check-01-stroke-sharp IconCircleLockCheck01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleLockCheck01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-check-01-solid-sharp IconCircleLockCheck01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCircleLockCheck01: TheIconSelfPack = {
  name: 'CircleLockCheck01',
  StrokeRounded: IconCircleLockCheck01StrokeRounded,
  DuotoneRounded: IconCircleLockCheck01DuotoneRounded,
  TwotoneRounded: IconCircleLockCheck01TwotoneRounded,
  SolidRounded: IconCircleLockCheck01SolidRounded,
  BulkRounded: IconCircleLockCheck01BulkRounded,
  StrokeSharp: IconCircleLockCheck01StrokeSharp,
  SolidSharp: IconCircleLockCheck01SolidSharp,
};