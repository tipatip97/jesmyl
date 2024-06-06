import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 22V12.3981C7 11.3299 7 10.7958 7.24458 10.3478C7.48915 9.89983 7.93842 9.61101 8.83697 9.03338L10.9185 7.69526C11.4437 7.35763 11.7063 7.18881 12 7.18881C12.2937 7.18881 12.5563 7.35763 13.0815 7.69526L15.163 9.03338C16.0616 9.61101 16.5108 9.89983 16.7554 10.3478C17 10.7958 17 11.3299 17 12.3981V22',
  d2: 'M12 13H12.009',
  d3: 'M21 22V16.1623C21 13.8707 19.7408 13.6852 17 13',
  d4: 'M3 22V16.1623C3 13.8707 4.25916 13.6852 7 13',
  d5: 'M2 22H22',
  d6: 'M12 22V18',
  d7: 'M12 7V4.98221M12 4.98221V2.97035C12 2.49615 12 2.25905 12.1464 2.11173C12.6061 1.64939 14.5 2.74303 15.2203 3.18653C15.8285 3.56105 16 4.30914 16 4.98221H12Z',
  d8: 'M7 12.3981V22H17V12.3981C17 11.3299 17 10.7958 16.7554 10.3478C16.5108 9.89983 16.0616 9.61101 15.163 9.03338L13.0815 7.69526C12.5563 7.35763 12.2937 7.18881 12 7.18881C11.7063 7.18881 11.4437 7.35763 10.9185 7.69526L8.83697 9.03338L8.83697 9.03338C7.93842 9.61101 7.48915 9.89983 7.24458 10.3478C7 10.7958 7 11.3299 7 12.3981Z',
  d9: 'M15.7801 12.7577C15.914 12.2219 16.457 11.8961 16.9928 12.0301C17.1283 12.064 17.2624 12.0972 17.3944 12.1298C17.9094 12.2572 18.3935 12.377 18.8163 12.5026C19.3484 12.6606 19.8684 12.8511 20.315 13.1354C20.7841 13.434 21.168 13.8332 21.4194 14.3807C21.6615 14.9078 21.7502 15.5064 21.7502 16.1625V21.0002C21.7502 21.5525 21.3025 22.0002 20.7502 22.0002C20.198 22.0002 19.7502 21.5525 19.7502 21.0002V16.1625C19.7502 15.6728 19.6816 15.3889 19.6019 15.2153C19.5316 15.0621 19.4294 14.9424 19.2411 14.8226C19.0303 14.6884 18.7216 14.5608 18.2468 14.4198C17.8726 14.3086 17.4481 14.2035 16.9404 14.0779C16.8025 14.0437 16.6585 14.0081 16.5077 13.9704C15.9719 13.8364 15.6461 13.2935 15.7801 12.7577Z',
  d10: 'M8.22014 12.7577C8.35409 13.2935 8.02833 13.8364 7.49254 13.9704C7.34173 14.0081 7.19772 14.0437 7.05983 14.0779C6.55214 14.2035 6.1276 14.3086 5.75345 14.4198C5.27864 14.5608 4.96995 14.6884 4.75918 14.8226C4.57085 14.9424 4.46866 15.0621 4.39834 15.2153C4.31863 15.3889 4.25 15.6728 4.25 16.1625V21.0002C4.25 21.5525 3.80228 22.0002 3.25 22.0002C2.69772 22.0002 2.25 21.5525 2.25 21.0002V16.1625C2.25 15.5064 2.33877 14.9078 2.58079 14.3807C2.83222 13.8332 3.21613 13.434 3.6852 13.1354C4.13182 12.8511 4.65183 12.6606 5.18397 12.5026C5.60676 12.377 6.09085 12.2572 6.60581 12.1298C6.73784 12.0972 6.87189 12.064 7.00746 12.0301C7.54326 11.8961 8.08619 12.2219 8.22014 12.7577Z',
  d11: 'M1 21.75C1 21.1977 1.44772 20.75 2 20.75H22C22.5523 20.75 23 21.1977 23 21.75C23 22.3023 22.5523 22.75 22 22.75H2C1.44772 22.75 1 22.3023 1 21.75Z',
  d12: 'M11.2094 6.64393C11.4371 6.52952 11.6948 6.4375 12 6.4375C12.3052 6.4375 12.5629 6.52952 12.7906 6.64393C12.9947 6.74645 13.2208 6.89183 13.46 7.04566L13.46 7.04567L15.5966 8.41917C16.022 8.69265 16.3844 8.92556 16.6677 9.14804C16.9696 9.38512 17.2258 9.64301 17.4137 9.98711C17.6016 10.3312 17.6799 10.6862 17.7161 11.0684C17.75 11.427 17.75 11.8578 17.75 12.3635V21.9987C17.75 22.4129 17.4142 22.7487 17 22.7487H14.5V17.9988C14.5 16.6181 13.3807 15.4988 12 15.4988C10.6193 15.4988 9.5 16.6181 9.5 17.9988V22.7487H7C6.58579 22.7487 6.25 22.4129 6.25 21.9987V12.3635V12.3634C6.24999 11.8577 6.24997 11.427 6.28391 11.0684C6.32008 10.6862 6.39843 10.3312 6.58629 9.98711C6.77416 9.64301 7.03042 9.38512 7.33233 9.14804C7.61565 8.92556 7.97798 8.69265 8.40342 8.41918L10.54 7.04566C10.7792 6.89183 11.0053 6.74646 11.2094 6.64393ZM12 11.5C11.4477 11.5 11 11.9477 11 12.5C11 13.0523 11.4477 13.5 12 13.5H12.009C12.5613 13.5 13.009 13.0523 13.009 12.5C13.009 11.9477 12.5613 11.5 12.009 11.5H12Z',
  d13: 'M12 17C12.5523 17 13 17.4477 13 18V21.5698C13 22.1221 12.5523 22.5698 12 22.5698C11.4477 22.5698 11 22.1221 11 21.5698V18C11 17.4477 11.4477 17 12 17Z',
  d14: 'M16 5.73209H12.75V6.99988C12.75 7.41409 12.4142 7.74988 12 7.74988C11.5858 7.74988 11.25 7.41409 11.25 6.99988V2.97023L11.25 2.93579C11.2499 2.72925 11.2498 2.5067 11.2749 2.31898C11.3042 2.09966 11.3796 1.81926 11.6146 1.58285C12.0147 1.18033 12.572 1.23484 12.8489 1.2834C13.1892 1.34307 13.5552 1.47768 13.8857 1.62195C14.5559 1.9145 15.2453 2.32103 15.6135 2.54777C16.5707 3.13718 16.75 4.24513 16.75 4.98209C16.75 5.3963 16.4142 5.73209 16 5.73209Z',
  d15: 'M12 6.4375C11.6948 6.4375 11.4371 6.52952 11.2094 6.64393C11.0053 6.74646 10.7792 6.89183 10.54 7.04566L8.40342 8.41918C7.97798 8.69265 7.61565 8.92556 7.33233 9.14804C7.03042 9.38512 6.77416 9.64301 6.58629 9.98711C6.39843 10.3312 6.32008 10.6862 6.28391 11.0684C6.24997 11.427 6.24999 11.8577 6.25 12.3635V21.9987C6.25 22.4129 6.58579 22.7487 7 22.7487H9.5V17.9988C9.5 16.6181 10.6193 15.4988 12 15.4988C13.3807 15.4988 14.5 16.6181 14.5 17.9988V22.7487H17C17.4142 22.7487 17.75 22.4129 17.75 21.9987V12.3635C17.75 11.8578 17.75 11.427 17.7161 11.0684C17.6799 10.6862 17.6016 10.3312 17.4137 9.98711C17.2258 9.64301 16.9696 9.38512 16.6677 9.14804C16.3844 8.92556 16.022 8.69265 15.5966 8.41917L13.46 7.04567C13.2208 6.89184 12.9947 6.74646 12.7906 6.64393C12.5629 6.52952 12.3052 6.4375 12 6.4375Z',
  d16: 'M16 5.73209H12.75V6.62394C12.5323 6.51899 12.2872 6.4375 12 6.4375C11.7128 6.4375 11.4677 6.51898 11.25 6.62392V2.97023L11.25 2.93579C11.2499 2.72925 11.2498 2.5067 11.2749 2.31898C11.3042 2.09966 11.3796 1.81926 11.6146 1.58285C12.0147 1.18033 12.572 1.23484 12.8489 1.2834C13.1892 1.34307 13.5552 1.47768 13.8857 1.62195C14.5559 1.9145 15.2453 2.32103 15.6135 2.54777C16.5707 3.13718 16.75 4.24513 16.75 4.98209C16.75 5.3963 16.4142 5.73209 16 5.73209ZM6.25003 12.2181C5.86782 12.3135 5.5079 12.4063 5.18397 12.5026C4.65183 12.6606 4.13182 12.8511 3.6852 13.1354C3.21613 13.434 2.83222 13.8331 2.58079 14.3807C2.33877 14.9078 2.25 15.5064 2.25 16.1625V21.0002C2.25 21.5525 2.69772 22.0002 3.25 22.0002C3.80228 22.0002 4.25 21.5525 4.25 21.0002V16.1625C4.25 15.6728 4.31863 15.3889 4.39834 15.2153C4.46866 15.0621 4.57085 14.9424 4.75918 14.8226C4.96995 14.6884 5.27864 14.5608 5.75345 14.4198C5.90942 14.3734 6.07415 14.3282 6.25 14.282V12.3635V12.3635C6.25 12.3143 6.25 12.2658 6.25003 12.2181ZM17.75 14.2819C17.9259 14.3281 18.0907 14.3734 18.2468 14.4198C18.7216 14.5608 19.0303 14.6884 19.2411 14.8226C19.4294 14.9424 19.5316 15.0621 19.6019 15.2153C19.6816 15.3889 19.7502 15.6728 19.7502 16.1625V21.0002C19.7502 21.5525 20.198 22.0002 20.7502 22.0002C21.3025 22.0002 21.7502 21.5525 21.7502 21.0002V16.1625C21.7502 15.5064 21.6615 14.9078 21.4194 14.3807C21.168 13.8332 20.7841 13.434 20.315 13.1354C19.8684 12.8511 19.3484 12.6606 18.8163 12.5026C18.4923 12.4063 18.1323 12.3135 17.75 12.218C17.75 12.2658 17.75 12.3143 17.75 12.3635V14.2819Z',
  d17: 'M11 12.5C11 11.9477 11.4477 11.5 12 11.5H12.009C12.5613 11.5 13.009 11.9477 13.009 12.5C13.009 13.0523 12.5613 13.5 12.009 13.5H12C11.4477 13.5 11 13.0523 11 12.5Z',
  d18: 'M7 22V11L12 7L17 11V22',
  d19: 'M21 22V15L17 13',
  d20: 'M3 22V15L7 13',
  d21: 'M12.0391 7.52634V5.01741M12.0391 5.01741V2.01439C12.0391 2.00886 12.0434 2.00439 12.0489 2.00439C13.6056 2.00696 15.8388 2.61666 15.9643 5.0176L12.0391 5.01741Z',
  d22: 'M11.5315 6.41435C11.8054 6.19522 12.1946 6.19522 12.4685 6.41435L17.4685 10.4143C17.6464 10.5567 17.75 10.7722 17.75 11V22H12.75V18H11.25V22H6.25V11C6.25 10.7722 6.35357 10.5567 6.53148 10.4143L11.5315 6.41435ZM13.009 12H11V14H13.009V12Z',
  d23: 'M17.3349 12.3291L21.7495 14.5364V21.9999H20.2495V15.4634L16.6641 13.6707L17.3349 12.3291Z',
  d24: 'M3.75 15.4634L7.33541 13.6707L6.66459 12.3291L2.25 14.5364V21.9999H3.75V15.4634Z',
  d25: 'M1.25 21.25H22.75V22.75H1.25V21.25Z',
  d26: 'M11.25 2C11.25 1.58579 11.5858 1.25 12 1.25C14.2166 1.25 15.466 2.09382 16.1229 3.07336C16.4368 3.54143 16.592 4.00628 16.6694 4.35261C16.7084 4.52671 16.75 4.73763 16.75 4.9822V5.7322H12.75V6.99999C12.75 7.4142 12.4142 7.74999 12 7.74999C11.5858 7.74999 11.25 7.4142 11.25 6.99999V2Z',
};

export const IconSchoolStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="school-stroke-rounded IconSchoolStrokeRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSchoolDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="school-duotone-rounded IconSchoolDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSchoolTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="school-twotone-rounded IconSchoolTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconSchoolSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="school-solid-rounded IconSchoolSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSchoolBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="school-bulk-rounded IconSchoolBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
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

export const IconSchoolStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="school-stroke-sharp IconSchoolStrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSchoolSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="school-solid-sharp IconSchoolSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSchool: TheIconSelfPack = {
  name: 'School',
  StrokeRounded: IconSchoolStrokeRounded,
  DuotoneRounded: IconSchoolDuotoneRounded,
  TwotoneRounded: IconSchoolTwotoneRounded,
  SolidRounded: IconSchoolSolidRounded,
  BulkRounded: IconSchoolBulkRounded,
  StrokeSharp: IconSchoolStrokeSharp,
  SolidSharp: IconSchoolSolidSharp,
};