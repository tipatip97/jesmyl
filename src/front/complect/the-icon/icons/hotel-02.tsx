import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 7V18C3 19.8856 3 20.8284 3.58579 21.4142C4.17157 22 5.11438 22 7 22H17C18.8856 22 19.8284 22 20.4142 21.4142C21 20.8284 21 19.8856 21 18V7',
  d2: 'M17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7',
  d3: 'M14 22.0001L14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18V22.0001',
  d4: 'M9 3H4.47214C4.16165 3 3.84734 3.08209 3.59811 3.32898C2.85619 4.06395 2.4281 5.28762 2 7H7M15 3H19.5279C19.8384 3 20.1527 3.08209 20.4019 3.32898C21.1438 4.06395 21.5719 5.28762 22 7H17',
  d5: 'M6 11H6.5M6 14.5H6.5',
  d6: 'M17.5 11H18M17.5 14.5H18',
  d7: 'M10.5 8V9.5M10.5 11V9.5M13.5 8V9.5M13.5 11V9.5M10.5 9.5H13.5',
  d8: 'M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7H21V20C21 21.1046 20.1046 22 19 22H14V18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18V22H5C3.89543 22 3 21.1046 3 20V7H7Z',
  d9: 'M3.10129 2.81701C3.5812 2.37107 4.16853 2.25 4.64323 2.25H9.06818C9.60792 2.25 10.0455 2.66041 10.0455 3.16667C10.0455 3.67293 9.60792 4.08333 9.06818 4.08333H4.64323C4.57574 4.08333 4.53472 4.09189 4.51318 4.09888C4.49606 4.10444 4.48708 4.10994 4.47684 4.11946C4.10798 4.4622 3.81049 5.01963 3.51126 5.91667H7.11364C7.65337 5.91667 8.09091 6.32707 8.09091 6.83333C8.09091 7.33959 7.65337 7.75 7.11364 7.75H2.22728C1.92634 7.75 1.64219 7.61995 1.45699 7.39746C1.27179 7.17497 1.2062 6.88486 1.27919 6.61101C1.69079 5.06669 2.15626 3.69513 3.10129 2.81701ZM13.9545 3.16667C13.9545 2.66041 14.3921 2.25 14.9318 2.25H19.3568C19.8315 2.25 20.4188 2.37108 20.8987 2.81701C21.8437 3.69513 22.3092 5.06669 22.7208 6.61101C22.7938 6.88486 22.7282 7.17497 22.543 7.39746C22.3578 7.61995 22.0737 7.75 21.7727 7.75H16.8864C16.3466 7.75 15.9091 7.33959 15.9091 6.83333C15.9091 6.32707 16.3466 5.91667 16.8864 5.91667H20.4887C20.1895 5.01963 19.892 4.4622 19.5232 4.11946C19.5129 4.10994 19.5039 4.10443 19.4868 4.09888C19.4653 4.09189 19.4243 4.08333 19.3568 4.08333H14.9318C14.3921 4.08333 13.9545 3.67293 13.9545 3.16667Z',
  d10: 'M6.12284 6.25C6.22331 6.25 6.30784 6.17515 6.32386 6.07597C6.76589 3.33963 9.13892 1.25 12 1.25C14.8611 1.25 17.2341 3.33963 17.6762 6.07597C17.6922 6.17515 17.7767 6.25 17.8772 6.25H21C21.4142 6.25 21.75 6.58579 21.75 7V18.052C21.75 18.9505 21.7501 19.6997 21.6701 20.2945C21.5857 20.9223 21.4 21.4891 20.9445 21.9445C20.4891 22.4 19.9223 22.5857 19.2945 22.6701C18.6997 22.7501 17.9505 22.75 17.052 22.75H15.2C15.0895 22.75 15 22.6605 15 22.55L15 18.75C15 17.0931 13.6569 15.75 12 15.75C10.3431 15.75 9 17.0931 9 18.75V22.55C9 22.6605 8.91046 22.75 8.8 22.75H6.94801C6.04953 22.75 5.30031 22.7501 4.70552 22.6701C4.07773 22.5857 3.51093 22.4 3.05546 21.9445C2.59999 21.4891 2.41432 20.9223 2.32992 20.2945C2.24995 19.6997 2.24997 18.9505 2.25 18.0521L2.25 7C2.25 6.58579 2.58579 6.25 3 6.25H6.12284ZM6 10.25C5.58579 10.25 5.25 10.5858 5.25 11C5.25 11.4142 5.58579 11.75 6 11.75H6.5C6.91422 11.75 7.25 11.4142 7.25 11C7.25 10.5858 6.91422 10.25 6.5 10.25H6ZM6 13.75C5.58579 13.75 5.25 14.0858 5.25 14.5C5.25 14.9142 5.58579 15.25 6 15.25H6.5C6.91422 15.25 7.25 14.9142 7.25 14.5C7.25 14.0858 6.91422 13.75 6.5 13.75H6ZM16.75 11C16.75 10.5858 17.0858 10.25 17.5 10.25H18C18.4142 10.25 18.75 10.5858 18.75 11C18.75 11.4142 18.4142 11.75 18 11.75H17.5C17.0858 11.75 16.75 11.4142 16.75 11ZM16.75 14.5C16.75 14.0858 17.0858 13.75 17.5 13.75H18C18.4142 13.75 18.75 14.0858 18.75 14.5C18.75 14.9142 18.4142 15.25 18 15.25H17.5C17.0858 15.25 16.75 14.9142 16.75 14.5ZM11.25 8C11.25 7.58579 10.9142 7.25 10.5 7.25C10.0858 7.25 9.75 7.58579 9.75 8V11C9.75 11.4142 10.0858 11.75 10.5 11.75C10.9142 11.75 11.25 11.4142 11.25 11V10.45C11.25 10.3395 11.3395 10.25 11.45 10.25H12.55C12.6605 10.25 12.75 10.3395 12.75 10.45V11C12.75 11.4142 13.0858 11.75 13.5 11.75C13.9142 11.75 14.25 11.4142 14.25 11V8C14.25 7.58579 13.9142 7.25 13.5 7.25C13.0858 7.25 12.75 7.58579 12.75 8V8.55C12.75 8.66046 12.6605 8.75 12.55 8.75H11.45C11.3395 8.75 11.25 8.66046 11.25 8.55V8Z',
  d11: 'M13 18.75V22.55C13 22.6605 12.9105 22.75 12.8 22.75H11.2C11.0895 22.75 11 22.6605 11 22.55V18.75C11 18.1977 11.4477 17.75 12 17.75C12.5523 17.75 13 18.1977 13 18.75Z',
  d12: 'M6.29859 6.25C6.6661 3.42873 9.07868 1.25 12.0001 1.25C14.9216 1.25 17.3341 3.42873 17.7017 6.25H21.0001C21.4143 6.25 21.7501 6.58579 21.7501 7V18.052C21.7502 18.9505 21.7502 19.6997 21.6702 20.2945C21.5858 20.9223 21.4001 21.4891 20.9447 21.9445C20.4892 22.4 19.9224 22.5857 19.2946 22.6701C18.6998 22.7501 17.9506 22.75 17.0521 22.75H6.94813C6.04965 22.75 5.30043 22.7501 4.70564 22.6701C4.07785 22.5857 3.51105 22.4 3.05558 21.9445C2.60011 21.4891 2.41444 20.9223 2.33004 20.2945C2.25007 19.6997 2.25009 18.9505 2.25012 18.052V18.052L2.25012 7C2.25012 6.58579 2.58591 6.25 3.00012 6.25H6.29859Z',
  d13: 'M12 17.75C11.4477 17.75 11 18.1977 11 18.75V22.7501H9V18.75C9 17.0931 10.3431 15.75 12 15.75C13.6569 15.75 15 17.0931 15 18.75L15 22.7501H13L13 18.75C13 18.1977 12.5523 17.75 12 17.75Z',
  d14: 'M5.25 11C5.25 10.5858 5.58579 10.25 6 10.25H6.5C6.91421 10.25 7.25 10.5858 7.25 11C7.25 11.4142 6.91421 11.75 6.5 11.75H6C5.58579 11.75 5.25 11.4142 5.25 11ZM5.25 14.5C5.25 14.0858 5.58579 13.75 6 13.75H6.5C6.91421 13.75 7.25 14.0858 7.25 14.5C7.25 14.9142 6.91421 15.25 6.5 15.25H6C5.58579 15.25 5.25 14.9142 5.25 14.5Z',
  d15: 'M16.75 11C16.75 10.5858 17.0858 10.25 17.5 10.25H18C18.4142 10.25 18.75 10.5858 18.75 11C18.75 11.4142 18.4142 11.75 18 11.75H17.5C17.0858 11.75 16.75 11.4142 16.75 11ZM16.75 14.5C16.75 14.0858 17.0858 13.75 17.5 13.75H18C18.4142 13.75 18.75 14.0858 18.75 14.5C18.75 14.9142 18.4142 15.25 18 15.25H17.5C17.0858 15.25 16.75 14.9142 16.75 14.5Z',
  d16: 'M10.5 7.25C10.9142 7.25 11.25 7.58579 11.25 8V8.75H12.75V8C12.75 7.58579 13.0858 7.25 13.5 7.25C13.9142 7.25 14.25 7.58579 14.25 8V11C14.25 11.4142 13.9142 11.75 13.5 11.75C13.0858 11.75 12.75 11.4142 12.75 11V10.25H11.25V11C11.25 11.4142 10.9142 11.75 10.5 11.75C10.0858 11.75 9.75 11.4142 9.75 11V8C9.75 7.58579 10.0858 7.25 10.5 7.25Z',
  d17: 'M2.22728 7.75H7.00049C7.4147 7.75 7.75049 7.41421 7.75049 7C7.75049 5.61657 8.41149 4.38753 9.43489 3.61146C10.1955 3.07012 11.0588 2.75 12.0005 2.75C12.9422 2.75 13.8054 3.07012 14.5661 3.61146C15.5895 4.38753 16.2505 5.61657 16.2505 7C16.2505 7.41421 16.5863 7.75 17.0005 7.75H21.7727C22.0737 7.75 22.3578 7.61995 22.543 7.39746C22.7282 7.17497 22.7938 6.88486 22.7208 6.61101C22.3092 5.06669 21.8437 3.69513 20.8987 2.81701C20.4188 2.37108 19.8315 2.25 19.3568 2.25H15.2418C14.319 1.61903 13.2028 1.25 12.0005 1.25C10.7982 1.25 9.68201 1.61903 8.75914 2.25H4.64323C4.16853 2.25 3.5812 2.37107 3.10129 2.81701C2.15626 3.69513 1.69079 5.06669 1.27919 6.61101C1.2062 6.88486 1.27179 7.17497 1.45699 7.39746C1.64219 7.61995 1.92634 7.75 2.22728 7.75ZM6.35239 5.91667C6.47779 5.25895 6.71522 4.64097 7.04408 4.08333H4.64323C4.5221 4.08333 4.49996 4.09797 4.47684 4.11946C4.10798 4.4622 3.81049 5.01963 3.51126 5.91667H6.35239ZM17.6486 5.91667H20.4887C20.1895 5.01963 19.892 4.4622 19.5232 4.11946C19.5 4.09797 19.4779 4.08333 19.3568 4.08333H16.9569C17.2858 4.64097 17.5232 5.25895 17.6486 5.91667Z',
  d18: 'M3.01978 6.97412V21.9998H21.0009V6.97412',
  d19: 'M14.0083 21.999V15.9888H10.0125V21.999',
  d20: 'M5.51685 10.981H7.51378M5.51685 14.4861H7.51378',
  d21: 'M16.5056 10.981H18.5025M16.5056 14.4861H18.5025',
  d22: 'M10.512 6.97412V9.4784M10.512 9.4784V11.9827M10.512 9.4784H13.5088M13.5088 6.97412V9.4784M13.5088 9.4784V11.9827',
  d23: 'M15.064 2.95081H20.0352C20.039 2.95081 20.0425 2.95299 20.0442 2.95642L21.9973 6.95987C22.0005 6.96653 21.9957 6.97429 21.9883 6.97429H17.0685C16.9528 5.0828 16.1593 3.75565 15.064 2.95081ZM15.064 2.95081H15.0024M15.064 2.95081C13.3 1.65463 10.7532 1.71314 8.99376 2.95081M8.99376 2.95081C7.81512 3.7799 6.9898 5.13813 6.9898 6.97274H2.01171C2.00427 6.97274 1.99944 6.96488 2.00279 6.95822L4.0113 2.95632C4.013 2.95294 4.01645 2.95081 4.02023 2.95081H8.99376Z',
  d24: 'M12 2.75C9.65279 2.75 7.75 4.65279 7.75 7V7.75H2C1.74007 7.75 1.49867 7.61541 1.36201 7.3943C1.22536 7.17319 1.21293 6.89708 1.32918 6.66459L3.32918 2.66459C3.45622 2.4105 3.71592 2.25 4 2.25H8.75865C9.68152 1.61903 10.7977 1.25 12 1.25C13.2023 1.25 14.3185 1.61903 15.2414 2.25H20C20.2841 2.25 20.5438 2.4105 20.6708 2.66459L22.6708 6.66459C22.7871 6.89708 22.7746 7.17319 22.638 7.3943C22.5013 7.61541 22.2599 7.75 22 7.75H16.25V7C16.25 4.65279 14.3472 2.75 12 2.75ZM16.7441 3.75C17.2449 4.47969 17.5818 5.33074 17.7015 6.25H20.7865L19.5365 3.75H16.7441ZM7.25593 3.75C6.75508 4.47969 6.41822 5.33074 6.29847 6.25H3.21353L4.46353 3.75H7.25593Z',
  d25: 'M6.29847 6.25C6.66597 3.42873 9.07855 1.25 12 1.25C14.9214 1.25 17.334 3.42873 17.7015 6.25H21C21.4142 6.25 21.75 6.58579 21.75 7V22.75H14.75V17C14.75 16.8011 14.671 16.6103 14.5303 16.4697C14.3897 16.329 14.1989 16.25 14 16.25L10 16.25C9.58579 16.25 9.25 16.5858 9.25 17V22.75H2.25V7C2.25 6.58579 2.58579 6.25 3 6.25H6.29847ZM13.25 17.75V22.75H10.75V17.75H13.25ZM5.5 11.75H7.5V10.25H5.5V11.75ZM5.5 15.25H7.5V13.75H5.5V15.25ZM18.5 11.75H16.5V10.25H18.5V11.75ZM18.5 15.25H16.5V13.75H18.5V15.25ZM11.25 7H9.75V12H11.25V10.25H12.75V12H14.25V7H12.75V8.75H11.25V7Z',
} as const;

export const IconHotel02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotel-02-stroke-rounded IconHotel02StrokeRounded"
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
        strokeLinejoin="round" 
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

export const IconHotel02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotel-02-duotone-rounded IconHotel02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
        strokeLinejoin="round" 
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

export const IconHotel02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotel-02-twotone-rounded IconHotel02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
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

export const IconHotel02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotel-02-solid-rounded IconHotel02SolidRounded"
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHotel02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotel-02-bulk-rounded IconHotel02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
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
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconHotel02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotel-02-stroke-sharp IconHotel02StrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
    </TheIconWrapper>
  );
};

export const IconHotel02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotel-02-solid-sharp IconHotel02SolidSharp"
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

export const iconPackOfHotel02: TheIconSelfPack = {
  name: 'Hotel02',
  StrokeRounded: IconHotel02StrokeRounded,
  DuotoneRounded: IconHotel02DuotoneRounded,
  TwotoneRounded: IconHotel02TwotoneRounded,
  SolidRounded: IconHotel02SolidRounded,
  BulkRounded: IconHotel02BulkRounded,
  StrokeSharp: IconHotel02StrokeSharp,
  SolidSharp: IconHotel02SolidSharp,
};