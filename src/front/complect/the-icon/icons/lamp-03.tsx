import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.5936 10H9.40637C7.51043 10 6.56247 10 6.16052 9.45157C5.75858 8.90313 6.14759 8.14046 6.92562 6.61512L8.31723 3.88683C8.78446 2.97081 9.01808 2.5128 9.46755 2.2564C9.91703 2 10.4863 2 11.6249 2H12.3751C13.5137 2 14.083 2 14.5324 2.2564C14.9819 2.5128 15.2155 2.97081 15.6828 3.88683L17.0744 6.61512C17.8524 8.14046 18.2414 8.90313 17.8395 9.45157C17.4375 10 16.4896 10 14.5936 10Z',
  d2: 'M12 10V19',
  d3: 'M8 22H16',
  d4: 'M9 22L9.36754 20.8974C9.64721 20.0584 9.78704 19.6389 10.094 19.3706C10.1647 19.3088 10.2409 19.2539 10.3218 19.2064C10.6734 19 11.1156 19 12 19C12.8844 19 13.3266 19 13.6782 19.2064C13.7591 19.2539 13.8353 19.3088 13.906 19.3706C14.213 19.6389 14.3528 20.0584 14.6325 20.8974L15 22',
  d5: 'M15.5 10V13',
  d6: 'M14.5936 10H9.40637C7.51043 10 6.56247 10 6.16052 9.45157C5.75858 8.90313 6.14759 8.14046 6.92562 6.61512L8.31723 3.88683C8.78446 2.97081 9.01808 2.5128 9.46755 2.2564C9.91703 2 10.4863 2 11.6249 2H12.3751C13.5137 2 14.083 2 14.5324 2.2564C14.9819 2.5128 15.2155 2.97081 15.6828 3.88683L17.0744 6.61513C17.8524 8.14046 18.2414 8.90313 17.8395 9.45157C17.4375 10 16.4896 10 14.5936 10Z',
  d7: 'M9.36754 20.8974L9 22H15L14.6325 20.8974L14.6325 20.8974C14.3528 20.0584 14.213 19.6389 13.906 19.3706C13.8353 19.3088 13.7591 19.2539 13.6782 19.2064C13.3266 19 12.8844 19 12 19C11.1156 19 10.6734 19 10.3218 19.2064C10.2409 19.2539 10.1647 19.3088 10.094 19.3706C9.78704 19.6389 9.64721 20.0584 9.36754 20.8974Z',
  d8: 'M12.4089 1.25C12.9492 1.24999 13.4061 1.24997 13.7822 1.28535C14.1799 1.32274 14.5515 1.40395 14.9039 1.60494C15.2619 1.80918 15.5116 2.08651 15.7259 2.40997C15.9228 2.70695 16.1146 3.08309 16.3334 3.51207L16.3334 3.5121L17.7715 6.33156C18.1355 7.04515 18.4504 7.66235 18.6134 8.17067C18.7871 8.71234 18.8549 9.33462 18.4442 9.89492C18.0564 10.4241 17.4552 10.5991 16.8739 10.6751C16.3008 10.7501 15.5494 10.75 14.6476 10.75H9.35205C8.45021 10.75 7.69883 10.7501 7.12576 10.6751C6.54443 10.5991 5.94323 10.4241 5.5554 9.89492C5.14477 9.33462 5.21252 8.71234 5.38621 8.17067C5.54921 7.66235 5.86408 7.04516 6.22813 6.33157L6.25732 6.27434L7.64893 3.54605L7.66626 3.51207L7.66627 3.51206C7.88504 3.08308 8.07687 2.70695 8.27367 2.40996C8.48801 2.08651 8.7377 1.80918 9.09574 1.60494C9.44808 1.40395 9.81975 1.32274 10.2174 1.28535C10.5936 1.24997 11.0504 1.24999 11.5907 1.25H11.5907H12.4089H12.4089Z',
  d9: 'M12 9C12.5523 9 13 9.44772 13 10V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V10C11 9.44772 11.4477 9 12 9Z',
  d10: 'M12.0332 18.25C12.447 18.25 12.8098 18.25 13.1115 18.2793C13.4362 18.3109 13.7535 18.3809 14.0578 18.5596C14.1792 18.6308 14.2936 18.7133 14.3995 18.8059C14.6652 19.0381 14.832 19.317 14.9647 19.615C15.0879 19.8919 15.2026 20.2361 15.3335 20.6287L15.3335 20.6287L15.344 20.6602L15.5406 21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H8.45943L8.65603 20.6602L8.66652 20.6287C8.79736 20.2361 8.91209 19.8919 9.03535 19.615C9.16799 19.317 9.33476 19.0381 9.60046 18.8059C9.70641 18.7133 9.82082 18.6308 9.94217 18.5596C10.2465 18.3809 10.5638 18.3109 10.8885 18.2793C11.1902 18.25 11.553 18.25 11.9668 18.25H11.9668H12.0332H12.0332Z',
  d11: 'M15.5 9C16.0523 9 16.5 9.44772 16.5 10V13C16.5 13.5523 16.0523 14 15.5 14C14.9477 14 14.5 13.5523 14.5 13V10C14.5 9.44772 14.9477 9 15.5 9Z',
  d12: 'M12.0347 18.25C12.4485 18.25 12.8114 18.25 13.113 18.2793C13.4377 18.3109 13.755 18.3809 14.0593 18.5596C14.1807 18.6308 14.2951 18.7133 14.401 18.8059C14.6667 19.0381 14.8335 19.317 14.9662 19.615C15.0894 19.8919 15.2041 20.2361 15.335 20.6287L15.335 20.6287L15.3455 20.6602L15.5421 21.25H8.46094L8.65754 20.6602L8.66802 20.6287C8.79887 20.2361 8.91359 19.8919 9.03686 19.615C9.1695 19.317 9.33627 19.0381 9.60197 18.8059C9.70792 18.7133 9.82232 18.6308 9.94368 18.5596C10.248 18.3809 10.5653 18.3109 10.89 18.2793C11.1917 18.25 11.5545 18.25 11.9683 18.25H11.9683H12.0347H12.0347Z',
  d13: 'M8 21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22C7.25 21.5858 7.58579 21.25 8 21.25Z',
  d14: 'M14.5 10.7486H14.6476C15.3649 10.7486 15.9871 10.7486 16.5 10.7109V12.9986C16.5 13.5509 16.0523 13.9986 15.5 13.9986C14.9477 13.9986 14.5 13.5509 14.5 12.9986V10.7486Z',
  d15: 'M13 18.27C12.7217 18.25 12.397 18.25 12.0328 18.25H11.9664C11.6026 18.25 11.2781 18.25 11 18.2699V10.75H13V18.27Z',
  d16: 'M11.9697 9.99036V18.9962',
  d17: 'M6.99023 21.9855H16.9902',
  d18: 'M8.97949 21.9988L9.97599 18.9962H13.962L14.9585 21.9988',
  d19: 'M15.457 9.99036V12.9929',
  d20: 'M16.8914 9.98984L7.08315 9.99066C7.01613 9.99066 5.98188 10.0629 6.00024 9.98984L8.98253 2.0011H14.9551L17.9993 9.99037C18.0177 10.0635 16.9585 9.98984 16.8914 9.98984Z',
  d21: 'M18.7023 9.73666C18.7886 9.96698 18.7566 10.225 18.6164 10.4272C18.4763 10.6294 18.246 10.75 18 10.75H6C5.75402 10.75 5.52367 10.6294 5.38356 10.4272C5.24345 10.225 5.21139 9.96698 5.29776 9.73666L8.48025 1.25H15.5198L18.7023 9.73666Z',
  d22: 'M11 19V10H13V19H11Z',
  d23: 'M7 22.75H17V20.75H15.3739L14.7115 18.7628C14.6094 18.4566 14.3228 18.25 14 18.25H10C9.67718 18.25 9.39058 18.4566 9.28849 18.7628L8.6261 20.75H7V22.75Z',
  d24: 'M14.5 13V10H16.5V13H14.5Z',
} as const;

export const IconLamp03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-03-stroke-rounded IconLamp03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLamp03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-03-duotone-rounded IconLamp03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLamp03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-03-twotone-rounded IconLamp03TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconLamp03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-03-solid-rounded IconLamp03SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLamp03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-03-bulk-rounded IconLamp03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLamp03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-03-stroke-sharp IconLamp03StrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconLamp03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-03-solid-sharp IconLamp03SolidSharp"
    >
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLamp03: TheIconSelfPack = {
  name: 'Lamp03',
  StrokeRounded: IconLamp03StrokeRounded,
  DuotoneRounded: IconLamp03DuotoneRounded,
  TwotoneRounded: IconLamp03TwotoneRounded,
  SolidRounded: IconLamp03SolidRounded,
  BulkRounded: IconLamp03BulkRounded,
  StrokeSharp: IconLamp03StrokeSharp,
  SolidSharp: IconLamp03SolidSharp,
};