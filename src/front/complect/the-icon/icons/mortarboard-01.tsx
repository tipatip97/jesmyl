import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M1.99805 7.99928C1.99805 9.34126 10.0943 13 11.9857 13C13.8772 13 21.9734 9.34126 21.9734 7.99928C21.9734 6.6573 13.8772 2.99854 11.9857 2.99854C10.0943 2.99854 1.99805 6.6573 1.99805 7.99928Z',
  d2: 'M5.99219 11L7.24348 16.8002C7.32919 17.1975 7.52703 17.5687 7.85696 17.8054C10.0787 19.3998 13.8908 19.3998 16.1126 17.8054C16.4426 17.5687 16.6404 17.1975 16.7261 16.8002L17.9774 11',
  d3: 'M20.4774 9.49951V16.5006M20.4774 16.5006C19.6864 17.9471 19.3366 18.7221 18.9813 20.0011C18.9042 20.4562 18.9654 20.6855 19.2786 20.8891C19.4059 20.9718 19.5588 21.0012 19.7104 21.0012H21.229C21.3904 21.0012 21.5533 20.9675 21.6863 20.8757C21.9774 20.6747 22.0523 20.4541 21.9734 20.0011C21.662 18.8135 21.2653 18.0016 20.4774 16.5006Z',
  d4: 'M2.00195 8C2.00195 9.34178 10.1082 13 12.002 13C13.8958 13 22.002 9.34178 22.002 8C22.002 6.65822 13.8958 3 12.002 3C10.1082 3 2.00195 6.65822 2.00195 8Z',
  d5: 'M20.502 16.5078C20.1938 17.2882 19.4037 18.3736 19.0734 19.764C18.8354 20.7661 19.1889 21.0006 20.1866 21.0006H20.8174C21.8151 21.0006 22.1686 20.7661 21.9306 19.764C21.6003 18.3736 20.8102 17.2882 20.502 16.5078Z',
  d6: 'M6.00195 11L7.25479 16.7993C7.3406 17.1966 7.53869 17.5677 7.86902 17.8044C10.0936 19.3985 13.9104 19.3985 16.1349 17.8044C16.4653 17.5677 16.6634 17.1966 16.7492 16.7993L18.002 11',
  d7: 'M20.4793 9.49951V16.5006M20.4793 16.5006C19.6883 17.9471 19.3385 18.7221 18.9832 20.0011C18.9061 20.4562 18.9673 20.6855 19.2805 20.8891C19.4078 20.9718 19.5607 21.0012 19.7123 21.0012H21.2309C21.3923 21.0012 21.5552 20.9675 21.6882 20.8757C21.9793 20.6747 22.0542 20.4541 21.9753 20.0011C21.6639 18.8135 21.2672 18.0016 20.4793 16.5006Z',
  d8: 'M1.99805 7.99951C1.99805 9.34129 10.0956 12.9995 11.9874 12.9995C13.8792 12.9995 21.9767 9.34129 21.9767 7.99951C21.9767 6.65773 13.8792 2.99951 11.9874 2.99951C10.0956 2.99951 1.99805 6.65773 1.99805 7.99951Z',
  d9: 'M5.99414 10.9995L7.24565 16.7988C7.33136 17.1961 7.52924 17.5672 7.85922 17.8039C10.0814 19.398 13.8941 19.398 16.1162 17.8039C16.4463 17.5672 16.6442 17.1961 16.7299 16.7988L17.9814 10.9995',
  d10: 'M20.4777 9.49854V16.4996M20.4777 16.4996C19.6875 17.9461 19.3381 18.7211 18.9832 20.0001C18.9062 20.4552 18.9674 20.6845 19.2802 20.8881C19.4073 20.9709 19.5601 21.0003 19.7115 21.0003H21.2285C21.3898 21.0003 21.5525 20.9666 21.6853 20.8748C21.9761 20.6737 22.051 20.4531 21.9722 20.0001C21.661 18.8125 21.2648 18.0006 20.4777 16.4996Z',
  d11: 'M10.8414 2.43303C11.2599 2.32641 11.6671 2.25 12 2.25C12.3329 2.25 12.7401 2.32641 13.1586 2.43303C13.5904 2.54303 14.0852 2.69885 14.6121 2.88569C15.6665 3.25958 16.8817 3.76934 18.0337 4.32021C19.1824 4.86949 20.2909 5.47047 21.1227 6.03058C21.5359 6.30877 21.9063 6.59377 22.1819 6.87321C22.3198 7.01303 22.4517 7.16908 22.5529 7.33906C22.6512 7.50418 22.75 7.73169 22.75 8C22.75 8.26832 22.6512 8.49582 22.5529 8.66094C22.4517 8.83092 22.3198 8.98697 22.1819 9.12679C21.9063 9.40623 21.5359 9.69123 21.1227 9.96942C20.2909 10.5295 19.1824 11.1305 18.0337 11.6798C16.8817 12.2307 15.6665 12.7404 14.6121 13.1143C14.0852 13.3012 13.5904 13.457 13.1586 13.567C12.7401 13.6736 12.3329 13.75 12 13.75C11.6671 13.75 11.2599 13.6736 10.8414 13.567C10.4096 13.457 9.91478 13.3012 9.38788 13.1143C8.33348 12.7404 7.11825 12.2307 5.96626 11.6798C4.81761 11.1305 3.70909 10.5295 2.87728 9.96942C2.46413 9.69123 2.09374 9.40623 1.81808 9.12679C1.68016 8.98697 1.54826 8.83092 1.44706 8.66094C1.34876 8.49582 1.25 8.26832 1.25 8C1.25 7.73169 1.34876 7.50418 1.44706 7.33906C1.54826 7.16908 1.68016 7.01303 1.81808 6.87321C2.09374 6.59377 2.46413 6.30877 2.87728 6.03058C3.70909 5.47047 4.81761 4.86949 5.96626 4.32021C7.11825 3.76934 8.33348 3.25958 9.38788 2.88569C9.91478 2.69885 10.4096 2.54303 10.8414 2.43303Z',
  d12: 'M15.1131 14.5263C14.5586 14.7229 14.0181 14.8941 13.5286 15.0188C13.0783 15.1335 12.5244 15.2482 11.9996 15.2482C11.4749 15.2482 10.921 15.1335 10.4707 15.0188C9.98122 14.8941 9.44065 14.7229 8.8862 14.5263C8.17672 14.2747 7.40464 13.9672 6.62854 13.6292C6.24983 13.4643 5.83667 13.7957 5.92389 14.1994L6.51939 16.9559C6.63307 17.4822 6.90925 18.0392 7.42984 18.4123C8.69819 19.3212 10.372 19.7482 11.9996 19.7482C13.6272 19.7482 15.3011 19.3212 16.5694 18.4123C17.09 18.0392 17.3662 17.4822 17.4799 16.9559L18.0754 14.1994C18.1626 13.7957 17.7494 13.4643 17.3707 13.6292C16.5946 13.9672 15.8226 14.2747 15.1131 14.5263Z',
  d13: 'M20.4998 8.75C20.914 8.75 21.2498 9.08579 21.2498 9.5V16.3564C21.3339 16.5459 21.4435 16.7511 21.5771 17.0011L21.5771 17.0011C21.6656 17.1667 21.7646 17.3519 21.8736 17.5653C22.1616 18.1288 22.4726 18.8095 22.658 19.5901C22.7814 20.1094 22.8555 20.7964 22.3663 21.287C22.1372 21.5168 21.8547 21.6247 21.6059 21.6799C21.3579 21.7349 21.0858 21.75 20.8152 21.75H20.1843C19.9138 21.75 19.6416 21.7349 19.3936 21.6799C19.1449 21.6247 18.8624 21.5168 18.6332 21.287C18.1441 20.7964 18.2181 20.1094 18.3415 19.5901C18.5269 18.8095 18.8379 18.1288 19.1259 17.5653C19.2349 17.352 19.3339 17.1667 19.4224 17.0012L19.4224 17.0011L19.4224 17.001C19.556 16.7511 19.6657 16.5459 19.7498 16.3564V9.5C19.7498 9.08579 20.0856 8.75 20.4998 8.75Z',
  d14: 'M5.98438 10.0312L6.98079 17.063C9.6624 19.7419 14.2633 19.7419 16.945 17.063L17.9414 10.0312',
  d15: 'M19.9641 9.02451L11.9296 13.049L1.99574 8.03869C1.98839 8.03498 1.9884 8.02441 1.99575 8.02072L11.9296 3.02832L21.9866 8.0206C21.9941 8.02429 21.994 8.03501 21.9866 8.03865L19.9641 9.02451ZM19.9641 9.02451V17.0522M19.9641 17.0522L17.9754 21.0157C17.9721 21.0224 17.9769 21.0303 17.9843 21.0303H21.8769C21.8842 21.0303 21.889 21.0225 21.8858 21.0158L19.9641 17.0522Z',
  d16: 'M22.3354 7.41771C22.5895 7.54475 22.75 7.80445 22.75 8.08853C22.75 8.3726 22.5895 8.6323 22.3354 8.75935L12 13.9271L1.66459 8.75935C1.4105 8.6323 1.25 8.3726 1.25 8.08853C1.25 7.80445 1.4105 7.54475 1.66459 7.41771L12 2.25L22.3354 7.41771Z',
  d17: 'M19.25 16.8229V9H20.75V16.8229L22.6708 20.6646C22.7871 20.8971 22.7746 21.1732 22.638 21.3943C22.5013 21.6154 22.2599 21.75 22 21.75H18C17.7401 21.75 17.4987 21.6154 17.362 21.3943C17.2254 21.1732 17.2129 20.8971 17.3292 20.6646L19.25 16.8229Z',
  d18: 'M5.54297 12.0955L6.29438 17.3554L6.47332 17.5327C9.4569 20.489 14.5455 20.489 17.5291 17.5327L17.708 17.3554L18.4595 12.0952L12.0009 15.3245L5.54297 12.0955Z',
} as const;

export const IconMortarboard01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mortarboard-01-stroke-rounded IconMortarboard01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMortarboard01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mortarboard-01-duotone-rounded IconMortarboard01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconMortarboard01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mortarboard-01-twotone-rounded IconMortarboard01TwotoneRounded"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMortarboard01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mortarboard-01-solid-rounded IconMortarboard01SolidRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMortarboard01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mortarboard-01-bulk-rounded IconMortarboard01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMortarboard01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mortarboard-01-stroke-sharp IconMortarboard01StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMortarboard01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mortarboard-01-solid-sharp IconMortarboard01SolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMortarboard01: TheIconSelfPack = {
  name: 'Mortarboard01',
  StrokeRounded: IconMortarboard01StrokeRounded,
  DuotoneRounded: IconMortarboard01DuotoneRounded,
  TwotoneRounded: IconMortarboard01TwotoneRounded,
  SolidRounded: IconMortarboard01SolidRounded,
  BulkRounded: IconMortarboard01BulkRounded,
  StrokeSharp: IconMortarboard01StrokeSharp,
  SolidSharp: IconMortarboard01SolidSharp,
};