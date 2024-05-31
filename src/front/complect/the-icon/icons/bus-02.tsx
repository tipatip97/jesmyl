import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.5 19V22',
  d2: 'M6.5 19V22',
  d3: 'M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V13C20 15.8284 20 17.2426 19.1213 18.1213C18.2426 19 16.8284 19 14 19H10C7.17157 19 5.75736 19 4.87868 18.1213C4 17.2426 4 15.8284 4 13V10Z',
  d4: 'M4 12C5.85698 12.5752 8.80918 13 12 13C15.1908 13 18.143 12.5752 20 12',
  d5: 'M22 11H21.4721C21.1616 11 20.8554 11.0723 20.5777 11.2111L20 11.5',
  d6: 'M4 11.5L3.42229 11.2111C3.14458 11.0723 2.83835 11 2.52786 11H2',
  d7: 'M4.5 16H6',
  d8: 'M18 16H19.5',
  d9: 'M10 16H14',
  d10: 'M18.8284 3.17157C17.6569 2 15.7712 2 12 2C8.22876 2 6.34315 2 5.17157 3.17157C4 4.34315 4 6.22876 4 10C4 11.6569 5.34315 13 7 13H17C18.6569 13 20 11.6569 20 10C20 6.22876 20 4.34315 18.8284 3.17157Z',
  d11: 'M6.5 17.875C7.05228 17.875 7.5 18.3227 7.5 18.875V21.875C7.5 22.4273 7.05228 22.875 6.5 22.875C5.94772 22.875 5.5 22.4273 5.5 21.875V18.875C5.5 18.3227 5.94772 17.875 6.5 17.875ZM17.5 17.875C18.0523 17.875 18.5 18.3227 18.5 18.875V21.875C18.5 22.4273 18.0523 22.875 17.5 22.875C16.9477 22.875 16.5 22.4273 16.5 21.875V18.875C16.5 18.3227 16.9477 17.875 17.5 17.875Z',
  d12: 'M12.0711 1.125H11.9289H11.9289H11.9288H11.9288C10.1561 1.12498 8.72711 1.12496 7.60329 1.27628C6.43648 1.43339 5.45405 1.7695 4.67379 2.55093C3.89353 3.33237 3.55793 4.31627 3.40105 5.48484C3.24996 6.61034 3.24998 8.04138 3.25 9.81678V9.81682V9.81685V9.81688V12.8779V12.878V12.878V12.878C3.24997 14.1964 3.24995 15.2837 3.36546 16.1441C3.48674 17.0476 3.75115 17.8454 4.38903 18.4843C5.02692 19.1231 5.82358 19.3879 6.72564 19.5094C7.58484 19.6251 8.67042 19.625 9.9869 19.625H14.013C15.3295 19.625 16.4152 19.6251 17.2744 19.5094C18.1764 19.3879 18.9731 19.1231 19.611 18.4843C20.2489 17.8454 20.5133 17.0476 20.6346 16.1441C20.7501 15.2836 20.75 14.1964 20.75 12.8779V11.8999C20.7505 11.8837 20.7505 11.8673 20.75 11.851V9.81695C20.75 8.04147 20.7501 6.61038 20.599 5.48484C20.4421 4.31628 20.1065 3.33237 19.3262 2.55093C18.546 1.7695 17.5635 1.43339 16.3967 1.27628C15.2729 1.12496 13.844 1.12498 12.0712 1.125H12.0712H12.0712H12.0711ZM18.8064 11.0263V9.89001C18.8064 8.02649 18.8044 6.7268 18.6727 5.74617C18.5448 4.79354 18.3109 4.28908 17.9522 3.92978C17.5934 3.57047 17.0897 3.33621 16.1385 3.20813C15.1593 3.07629 13.8616 3.07422 12.0009 3.07422C10.1401 3.07422 8.8424 3.07629 7.86325 3.20813C6.91206 3.33621 6.40835 3.57047 6.04959 3.92978C5.69082 4.28908 5.45691 4.79354 5.32902 5.74616C5.19738 6.7268 5.19531 8.02649 5.19531 9.89001V11.0262C5.19531 11.2583 5.35455 11.4604 5.58152 11.5088C7.30264 11.876 9.57267 12.1271 12.0011 12.1271C14.4293 12.1271 16.6991 11.876 18.4202 11.5089C18.6472 11.4605 18.8064 11.2584 18.8064 11.0263ZM5.25 15.125C4.83579 15.125 4.5 15.4608 4.5 15.875C4.5 16.2892 4.83579 16.625 5.25 16.625H5.75C6.16421 16.625 6.5 16.2892 6.5 15.875C6.5 15.4608 6.16421 15.125 5.75 15.125H5.25ZM10 15.125C9.58579 15.125 9.25 15.4608 9.25 15.875C9.25 16.2892 9.58579 16.625 10 16.625H14C14.4142 16.625 14.75 16.2892 14.75 15.875C14.75 15.4608 14.4142 15.125 14 15.125H10ZM18.25 15.125C17.8358 15.125 17.5 15.4608 17.5 15.875C17.5 16.2892 17.8358 16.625 18.25 16.625H18.75C19.1642 16.625 19.5 16.2892 19.5 15.875C19.5 15.4608 19.1642 15.125 18.75 15.125H18.25Z',
  d13: 'M1 10.875C1 10.3227 1.44772 9.875 2 9.875H2.52786C2.9936 9.875 3.45294 9.98344 3.8695 10.1917C4.36348 10.4387 4.56371 11.0394 4.31672 11.5334C4.06973 12.0273 3.46906 12.2276 2.97508 11.9806C2.83622 11.9111 2.68311 11.875 2.52786 11.875H2C1.44772 11.875 1 11.4273 1 10.875ZM21.4721 11.875C21.3169 11.875 21.1638 11.9111 21.0249 11.9806C20.5309 12.2276 19.9303 12.0273 19.6833 11.5334C19.4363 11.0394 19.6365 10.4387 20.1305 10.1917C20.5471 9.98344 21.0064 9.875 21.4721 9.875H22C22.5523 9.875 23 10.3227 23 10.875C23 11.4273 22.5523 11.875 22 11.875H21.4721Z',
  d14: 'M20.75 12.0715V11.8999C20.7505 11.8837 20.7505 11.8673 20.75 11.851V9.96321C20.9855 9.90482 21.2279 9.875 21.4721 9.875H22C22.5523 9.875 23 10.3227 23 10.875C23 11.4273 22.5523 11.875 22 11.875H21.4721C21.3169 11.875 21.1638 11.9111 21.0249 11.9806C20.9359 12.0251 20.8433 12.0551 20.75 12.0715ZM16.5 19.5818C16.7759 19.565 17.034 19.5417 17.2744 19.5094C17.7094 19.4508 18.12 19.3589 18.5 19.2077V21.875C18.5 22.4273 18.0523 22.875 17.5 22.875C16.9477 22.875 16.5 22.4273 16.5 21.875V19.5818ZM5.5 19.2077C5.88004 19.3589 6.29058 19.4508 6.72564 19.5094C6.96601 19.5417 7.22409 19.565 7.5 19.5818V21.875C7.5 22.4273 7.05228 22.875 6.5 22.875C5.94772 22.875 5.5 22.4273 5.5 21.875V19.2077ZM3.25 9.96321V12.0715C3.15669 12.0551 3.06415 12.0251 2.97508 11.9806C2.83622 11.9111 2.68311 11.875 2.52786 11.875H2C1.44772 11.875 1 11.4273 1 10.875C1 10.3227 1.44772 9.875 2 9.875H2.52786C2.77208 9.875 3.01454 9.90482 3.25 9.96321Z',
  d15: 'M12.0711 1.125H11.9289H11.9289C10.1561 1.12498 8.72712 1.12496 7.60329 1.27628C6.43648 1.43339 5.45405 1.76949 4.67379 2.55093C3.89353 3.33237 3.55792 4.31627 3.40105 5.48483C3.24996 6.61035 3.24998 8.04141 3.25 9.81684V9.81687V12.8779V12.878C3.24997 14.1964 3.24994 15.2837 3.36546 16.1441C3.48674 17.0476 3.75115 17.8454 4.38903 18.4843C5.02692 19.1231 5.82358 19.3879 6.72564 19.5094C7.58483 19.6251 8.67041 19.625 9.9869 19.625H14.013C15.3295 19.625 16.4152 19.6251 17.2744 19.5094C18.1764 19.3879 18.9731 19.1231 19.611 18.4843C20.2489 17.8454 20.5133 17.0476 20.6345 16.1441C20.7501 15.2836 20.75 14.1964 20.75 12.8779V11.8999C20.7505 11.8837 20.7505 11.8673 20.75 11.851V9.81695C20.75 8.04147 20.75 6.61038 20.599 5.48483C20.4421 4.31627 20.1065 3.33237 19.3262 2.55093C18.546 1.76949 17.5635 1.43339 16.3967 1.27628C15.2729 1.12496 13.8439 1.12498 12.0712 1.125H12.0711Z',
  d16: 'M18.4202 11.5089C18.6472 11.4605 18.8064 11.2584 18.8064 11.0263V9.89001C18.8064 8.02649 18.8044 6.72679 18.6727 5.74616C18.5448 4.79354 18.3109 4.28908 17.9522 3.92978C17.5934 3.57047 17.0897 3.33621 16.1385 3.20813C15.1593 3.07629 13.8616 3.07422 12.0009 3.07422C10.1401 3.07422 8.8424 3.07629 7.86325 3.20813C6.91206 3.33621 6.40835 3.57047 6.04958 3.92978C5.69082 4.28908 5.45691 4.79354 5.32902 5.74616C5.19738 6.72679 5.19531 8.02649 5.19531 9.89001V11.0262C5.19531 11.2583 5.35455 11.4604 5.58152 11.5088C7.30264 11.876 9.57267 12.1271 12.0011 12.1271C14.4293 12.1271 16.6991 11.876 18.4202 11.5089Z',
  d17: 'M4.5 15.875C4.5 15.4608 4.83579 15.125 5.25 15.125H5.75C6.16421 15.125 6.5 15.4608 6.5 15.875C6.5 16.2892 6.16421 16.625 5.75 16.625H5.25C4.83579 16.625 4.5 16.2892 4.5 15.875ZM9.25 15.875C9.25 15.4608 9.58579 15.125 10 15.125H14C14.4142 15.125 14.75 15.4608 14.75 15.875C14.75 16.2892 14.4142 16.625 14 16.625H10C9.58579 16.625 9.25 16.2892 9.25 15.875ZM17.5 15.875C17.5 15.4608 17.8358 15.125 18.25 15.125H18.75C19.1642 15.125 19.5 15.4608 19.5 15.875C19.5 16.2892 19.1642 16.625 18.75 16.625H18.25C17.8358 16.625 17.5 16.2892 17.5 15.875Z',
  d18: 'M17.5 18.5V21.5',
  d19: 'M6.5 18.5V21.5',
  d20: 'M19.5 18.5V2.5H4.5V18.5H19.5Z',
  d21: 'M19.5 11.5H4.5',
  d22: 'M22 9.5L19.5 11.5',
  d23: 'M2 9.5L4.5 11.5',
  d24: 'M4.5 15.75H6V14.25H4.5V15.75ZM18 15.75H19.5V14.25H18V15.75ZM10 15.75H14V14.25H10V15.75Z',
  d25: 'M5.99902 18.75V21.75H7.99902V18.75H5.99902Z',
  d26: 'M15.999 18.75V21.75H17.999V18.75H15.999Z',
  d27: 'M4.71961 2.25C4.18357 2.25 3.74902 2.68777 3.74902 3.22778L3.75031 18.7722C3.75031 19.3122 4.18486 19.75 4.7209 19.75H19.2797C19.8158 19.75 20.2503 19.3122 20.2503 18.7722L20.249 3.22778C20.249 2.68777 19.8145 2.25 19.2784 2.25H4.71961ZM5.69043 12.2495V4.20508H18.3081V12.2495H5.69043ZM7.49902 16.751H5.49902V15.251H7.49902V16.751ZM16.499 16.751H18.499V15.251H16.499V16.751ZM13.999 16.751H9.99902V15.251H13.999V16.751Z',
  d28: 'M22.75 10.7805L20.25 12.7805L19.0006 11.2188L21.5006 9.21875L22.75 10.7805Z',
  d29: 'M3.75 12.7805L1.25 10.7805L2.49939 9.21875L4.99939 11.2188L3.75 12.7805Z',
} as const;

export const IconBus02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bus-02-stroke-rounded IconBus02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBus02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bus-02-duotone-rounded IconBus02DuotoneRounded"
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
    </TheIconWrapper>
  );
};

export const IconBus02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bus-02-twotone-rounded IconBus02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBus02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bus-02-solid-rounded IconBus02SolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconBus02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bus-02-bulk-rounded IconBus02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBus02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bus-02-stroke-sharp IconBus02StrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBus02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bus-02-solid-sharp IconBus02SolidSharp"
    >
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBus02: TheIconSelfPack = {
  name: 'Bus02',
  StrokeRounded: IconBus02StrokeRounded,
  DuotoneRounded: IconBus02DuotoneRounded,
  TwotoneRounded: IconBus02TwotoneRounded,
  SolidRounded: IconBus02SolidRounded,
  BulkRounded: IconBus02BulkRounded,
  StrokeSharp: IconBus02StrokeSharp,
  SolidSharp: IconBus02SolidSharp,
};