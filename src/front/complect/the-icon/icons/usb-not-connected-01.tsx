import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 6V5.5C14 4.09554 14 3.39331 13.6629 2.88886C13.517 2.67048 13.3295 2.48298 13.1111 2.33706C12.6067 2 11.9045 2 10.5 2C9.09554 2 8.39331 2 7.88886 2.33706C7.67048 2.48298 7.48298 2.67048 7.33706 2.88886C7 3.39331 7 4.09554 7 5.5V6',
  d2: 'M11 16.5H9.51625C8.49228 16.5 7.53617 15.9979 6.96881 15.1622L6.36803 14.2773C5.39885 12.8498 4.82041 11.2019 4.68827 9.49197L4.50446 7.11331C4.43719 6.24273 5.13957 5.5 6.03014 5.5H14.9699C15.8604 5.5 16.5628 6.24273 16.4955 7.11331L16.3884 8.5',
  d3: 'M10.5 17V22',
  d4: 'M9.5 8.5H11.5',
  d5: 'M19.5 11L13.5 17M19.5 17L13.5 11',
  d6: 'M4.50446 7.11331C4.43719 6.24273 5.13957 5.5 6.03014 5.5H14.9699C15.8604 5.5 16.5628 6.24273 16.4955 7.11331L16.3117 9.49197C16.1796 11.2019 15.6011 12.8498 14.632 14.2773L14.0312 15.1622C13.4638 15.9979 12.5077 16.5 11.4838 16.5H9.51625C8.49228 16.5 7.53617 15.9979 6.96881 15.1622L6.36803 14.2773C5.39885 12.8498 4.82041 11.2019 4.68827 9.49197L4.50446 7.11331Z',
  d7: 'M12.5429 12.5429C12.9334 12.1524 13.5666 12.1524 13.9571 12.5429L16.25 14.8358L18.5429 12.5429C18.9334 12.1524 19.5666 12.1524 19.9571 12.5429C20.3476 12.9334 20.3476 13.5666 19.9571 13.9571L17.6642 16.25L19.9571 18.5429C20.3476 18.9334 20.3476 19.5666 19.9571 19.9571C19.5666 20.3476 18.9334 20.3476 18.5429 19.9571L16.25 17.6642L13.9571 19.9571C13.5666 20.3476 12.9334 20.3476 12.5429 19.9571C12.1524 19.5666 12.1524 18.9334 12.5429 18.5429L14.8358 16.25L12.5429 13.9571C12.1524 13.5666 12.1524 12.9334 12.5429 12.5429Z',
  d8: 'M10.5489 1.25H10.4517H10.4516C9.79098 1.24998 9.2211 1.24996 8.75597 1.29727C8.26273 1.34745 7.77746 1.45898 7.33354 1.7556C7.00597 1.97447 6.72471 2.25573 6.50584 2.5833C6.20922 3.02722 6.09769 3.51249 6.04751 4.00573C6.04208 4.0591 6.03728 4.11385 6.03302 4.16996C6.01325 4.43067 6.00337 4.56103 5.94237 4.63458C5.88138 4.70813 5.73182 4.74819 5.4327 4.82832C4.41239 5.10165 3.67073 6.05738 3.75679 7.1711L3.9406 9.54975C4.08286 11.3907 4.70558 13.1637 5.74763 14.6986L6.34841 15.5835C6.94224 16.4582 7.87329 17.0364 8.90506 17.2015C9.20605 17.2496 9.35654 17.2737 9.42827 17.3578C9.5 17.4419 9.5 17.5771 9.5 17.8474V21.75C9.5 22.3023 9.94772 22.75 10.5 22.75C11.0523 22.75 11.5 22.3023 11.5 21.75V17.8475C11.5 17.5771 11.5 17.4419 11.5717 17.3578L12.2769 16.6742L12.2769 16.6742C12.4829 16.4745 12.5859 16.3746 12.5869 16.249C12.5878 16.1234 12.4864 16.022 12.2836 15.8191L11.4822 15.0178C10.5059 14.0415 10.5059 12.4585 11.4822 11.4822C12.4585 10.5059 14.0415 10.5059 15.0178 11.4822L15.658 12.1233C15.9493 12.4149 16.0949 12.5608 16.2591 12.5207C16.4232 12.4805 16.4827 12.2917 16.6017 11.914L16.6017 11.914C16.843 11.1484 16.9973 10.3556 17.0596 9.54975L17.2434 7.1711C17.3295 6.05745 16.5879 5.10178 15.5677 4.82838C15.2686 4.74823 15.1191 4.70816 15.0581 4.63461C14.9971 4.56106 14.9872 4.43072 14.9675 4.17004C14.9632 4.1139 14.9584 4.05912 14.953 4.00573C14.9028 3.51249 14.7913 3.02722 14.4947 2.5833C14.2758 2.25573 13.9945 1.97447 13.667 1.7556C13.223 1.45898 12.7378 1.34745 12.2445 1.29727C11.7794 1.24996 11.2096 1.24998 10.5489 1.25H10.5489ZM12.9632 4.20813C12.9291 3.87303 12.8721 3.75496 12.8317 3.69443C12.7587 3.58524 12.665 3.49149 12.5558 3.41853C12.4952 3.37809 12.3772 3.32109 12.0421 3.287C11.8662 3.2691 11.6614 3.25986 11.4103 3.25508C11.1592 3.2503 10.8617 3.25 10.5002 3.25C10.5001 3.25 10.5 3.25 10.4999 3.25C10.4548 3.25 10.4107 3.25001 10.3676 3.25002C10.1627 3.25011 9.97947 3.25048 9.8143 3.25201C9.45674 3.25532 9.18372 3.26404 8.95808 3.287C8.62297 3.32109 8.5049 3.37809 8.44438 3.41853C8.33519 3.49149 8.24144 3.58524 8.16848 3.69443C8.12804 3.75496 8.07103 3.87303 8.03695 4.20813C8.0159 4.41505 8.00537 4.51852 8.05634 4.60384C8.0756 4.63609 8.10464 4.66823 8.13477 4.69065C8.19958 4.7389 8.28557 4.74792 8.43557 4.74961C8.47009 4.75 8.50799 4.75 8.54981 4.75C8.54989 4.75 8.54997 4.75 8.55005 4.75H12.4503C12.5089 4.75 12.5599 4.75 12.6045 4.74893C12.7303 4.74592 12.8065 4.73444 12.8654 4.69066C12.8955 4.66823 12.9245 4.63609 12.9438 4.60384C12.9948 4.51852 12.9842 4.41505 12.9632 4.20813ZM8.5 8C8.5 8.55228 8.94771 9 9.5 9H11.5L11.5131 8.99991C11.5221 8.9998 11.531 8.99957 11.5399 8.99922C12.0738 8.97837 12.5002 8.53898 12.5002 8C12.5002 7.44771 12.0525 7 11.5002 7H9.50019L9.4775 7.00025C8.93561 7.01221 8.5 7.45523 8.5 8Z',
  d9: 'M10.4517 1.25H10.5489H10.5489C11.2096 1.24998 11.7794 1.24996 12.2445 1.29727C12.7378 1.34745 13.223 1.45898 13.667 1.7556C13.9945 1.97447 14.2758 2.25573 14.4947 2.5833C14.7913 3.02722 14.9028 3.51249 14.953 4.00573C14.9584 4.05912 14.9632 4.1139 14.9675 4.17004C14.9872 4.43072 14.9971 4.56106 15.0581 4.63461C15.1191 4.70816 15.2686 4.74823 15.5677 4.82838C16.5879 5.10178 17.3295 6.05745 17.2434 7.1711L17.0596 9.54975C16.9973 10.3556 16.843 11.1484 16.6017 11.914L16.6017 11.914C16.4827 12.2917 16.4232 12.4805 16.2591 12.5207C16.0949 12.5608 15.9493 12.4149 15.658 12.1233L15.0178 11.4822C14.0415 10.5059 12.4585 10.5059 11.4822 11.4822C10.5059 12.4585 10.5059 14.0415 11.4822 15.0178L12.2836 15.8191C12.4864 16.022 12.5878 16.1234 12.5869 16.249C12.5859 16.3746 12.4829 16.4745 12.2769 16.6742L12.2769 16.6742L11.5717 17.3578C11.5 17.4419 11.5 17.5771 11.5 17.8475V21.75C11.5 22.3023 11.0523 22.75 10.5 22.75C9.94772 22.75 9.5 22.3023 9.5 21.75V17.8474C9.5 17.5771 9.5 17.4419 9.42827 17.3578C9.35654 17.2737 9.20605 17.2496 8.90506 17.2015C7.87329 17.0364 6.94224 16.4582 6.34841 15.5835L5.74763 14.6986C4.70558 13.1637 4.08286 11.3907 3.9406 9.54975L3.75679 7.1711C3.67073 6.05738 4.41239 5.10165 5.4327 4.82832C5.73182 4.74819 5.88138 4.70813 5.94237 4.63458C6.00337 4.56103 6.01325 4.43067 6.03302 4.16996C6.03728 4.11385 6.04208 4.0591 6.04751 4.00573C6.09769 3.51249 6.20922 3.02722 6.50584 2.5833C6.72471 2.25573 7.00597 1.97447 7.33354 1.7556C7.77746 1.45898 8.26273 1.34745 8.75597 1.29727C9.2211 1.24996 9.79098 1.24998 10.4516 1.25H10.4517ZM12.8317 3.69443C12.8721 3.75496 12.9291 3.87303 12.9632 4.20813C12.9842 4.41505 12.9948 4.51852 12.9438 4.60384C12.9245 4.63609 12.8955 4.66823 12.8654 4.69066C12.8056 4.73516 12.7278 4.74629 12.5983 4.74907C12.5551 4.75 12.5062 4.75 12.4503 4.75H8.55005C8.53608 4.75 8.52254 4.75 8.50943 4.74998C8.47226 4.74994 8.43844 4.74979 8.40752 4.74918C8.27464 4.7466 8.19543 4.73581 8.13477 4.69065C8.10464 4.66823 8.0756 4.63609 8.05634 4.60384C8.00537 4.51852 8.0159 4.41505 8.03695 4.20813C8.07103 3.87303 8.12804 3.75496 8.16848 3.69443C8.24144 3.58524 8.33519 3.49149 8.44438 3.41853C8.5049 3.37809 8.62297 3.32109 8.95808 3.287C9.22199 3.26015 9.55072 3.25277 10.0037 3.25075C10.1546 3.25008 10.3193 3.25 10.4999 3.25M12.8317 3.69443C12.7587 3.58524 12.665 3.49149 12.5558 3.41853L12.8317 3.69443ZM12.5558 3.41853C12.4952 3.37809 12.3772 3.32109 12.0421 3.287L12.5558 3.41853ZM12.0421 3.287C11.8685 3.26934 11.6668 3.2601 11.4202 3.25527L12.0421 3.287ZM11.4202 3.25527C11.167 3.25031 10.8664 3.25 10.5002 3.25L11.4202 3.25527ZM9.50019 7C8.9479 7 8.50019 7.44771 8.50019 8C8.50019 8.55228 8.9479 9 9.50019 9H11.5002C12.0525 9 12.5002 8.55228 12.5002 8C12.5002 7.44771 12.0525 7 11.5002 7H9.50019Z',
  d10: 'M8.5 8C8.5 7.44772 8.94771 7 9.5 7H11.5C12.0523 7 12.5 7.44772 12.5 8C12.5 8.55228 12.0523 9 11.5 9H9.5C8.94771 9 8.5 8.55228 8.5 8Z',
  d11: 'M13.5 5.5V2H6.5V5.5',
  d12: 'M10 16.5V22',
  d13: 'M8.5 8.5H11.5',
  d14: 'M20 11L14 17M20 17L14 11',
  d15: 'M15.9995 9.00747V5.59957C15.9995 5.54458 15.9546 5.5 15.8992 5.5H4.10127C4.04588 5.5 4.00098 5.54458 4.00098 5.59957V11.4907L7.01974 16.5004H12.0068',
  d16: 'M9 22.75V17.25H11V22.75H9Z',
  d17: 'M14.25 1.25H5.75V5.25H4C3.58579 5.25 3.25 5.58579 3.25 6V12.2077L6.57536 17.75H12.0235L11.5664 17.2929L13.8593 15L11.5664 12.7071L14.7484 9.52515L16.7494 11.5262V6C16.7494 5.58579 16.4137 5.25 15.9994 5.25H14.25V1.25ZM12.3611 5.25V3.02778H7.63889V5.25H12.3611ZM8.5 10H11.5V8H8.5V10Z',
  d18: 'M18.4573 15.0001L20.7502 17.293L19.3359 18.7072L17.043 16.4143L14.7502 18.7072L13.3359 17.293L15.6288 15.0001L13.3359 12.7072L14.7502 11.293L17.043 13.5859L19.3359 11.293L20.7502 12.7072L18.4573 15.0001Z',
} as const;

export const IconUsbNotConnected01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-not-connected-01-stroke-rounded IconUsbNotConnected01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconUsbNotConnected01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-not-connected-01-duotone-rounded IconUsbNotConnected01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconUsbNotConnected01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-not-connected-01-twotone-rounded IconUsbNotConnected01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbNotConnected01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-not-connected-01-solid-rounded IconUsbNotConnected01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbNotConnected01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-not-connected-01-bulk-rounded IconUsbNotConnected01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconUsbNotConnected01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-not-connected-01-stroke-sharp IconUsbNotConnected01StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbNotConnected01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-not-connected-01-solid-sharp IconUsbNotConnected01SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUsbNotConnected01: TheIconSelfPack = {
  name: 'UsbNotConnected01',
  StrokeRounded: IconUsbNotConnected01StrokeRounded,
  DuotoneRounded: IconUsbNotConnected01DuotoneRounded,
  TwotoneRounded: IconUsbNotConnected01TwotoneRounded,
  SolidRounded: IconUsbNotConnected01SolidRounded,
  BulkRounded: IconUsbNotConnected01BulkRounded,
  StrokeSharp: IconUsbNotConnected01StrokeSharp,
  SolidSharp: IconUsbNotConnected01SolidSharp,
};