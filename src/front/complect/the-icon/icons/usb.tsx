import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.5 6V5.5C15.5 4.09554 15.5 3.39331 15.1629 2.88886C15.017 2.67048 14.8295 2.48298 14.6111 2.33706C14.1067 2 13.4045 2 12 2C10.5955 2 9.89331 2 9.38886 2.33706C9.17048 2.48298 8.98298 2.67048 8.83706 2.88886C8.5 3.39331 8.5 4.09554 8.5 5.5V6',
  d2: 'M6.00446 7.11331C5.93719 6.24273 6.63957 5.5 7.53014 5.5H16.4699C17.3604 5.5 18.0628 6.24273 17.9955 7.11331L17.8117 9.49197C17.6796 11.2019 17.1011 12.8498 16.132 14.2773L15.5312 15.1622C14.9638 15.9979 14.0077 16.5 12.9838 16.5H11.0162C9.99228 16.5 9.03617 15.9979 8.46881 15.1622L7.86803 14.2773C6.89885 12.8498 6.32041 11.2019 6.18827 9.49197L6.00446 7.11331Z',
  d3: 'M12 17V22',
  d4: 'M11 8.5H13',
  d5: 'M11.9517 1.25H12.0489H12.0489C12.7096 1.24998 13.2794 1.24995 13.7445 1.29727C14.2378 1.34745 14.723 1.45898 15.167 1.7556C15.4945 1.97447 15.7758 2.25572 15.9947 2.58329C16.2913 3.02721 16.4028 3.51248 16.453 4.00572C16.4584 4.05912 16.4632 4.1139 16.4675 4.17003C16.4872 4.43072 16.4971 4.56106 16.5581 4.63461C16.6191 4.70815 16.7686 4.74823 17.0677 4.82838C18.0879 5.10178 18.8295 6.05745 18.7434 7.1711L18.5596 9.54975C18.4173 11.3907 17.7946 13.1637 16.7526 14.6986L16.1518 15.5835C15.5579 16.4582 14.6268 17.0365 13.595 17.2015C13.294 17.2496 13.1435 17.2737 13.0717 17.3578C13 17.4419 13 17.5771 13 17.8475V21.75C13 22.3023 12.5523 22.75 12 22.75C11.4477 22.75 11 22.3023 11 21.75V17.8474C11 17.5771 11 17.4419 10.9283 17.3578C10.8565 17.2737 10.706 17.2496 10.4051 17.2015C9.37329 17.0364 8.44224 16.4582 7.84841 15.5835L7.24763 14.6986C6.20558 13.1637 5.58286 11.3907 5.4406 9.54975L5.25679 7.1711C5.17073 6.05737 5.91239 5.10164 6.9327 4.82832C7.23182 4.74819 7.38138 4.70813 7.44237 4.63458C7.50337 4.56103 7.51325 4.43067 7.53302 4.16996C7.53728 4.11385 7.54208 4.0591 7.54751 4.00572C7.59769 3.51248 7.70922 3.02722 8.00584 2.58329C8.22471 2.25572 8.50597 1.97447 8.83354 1.7556C9.27746 1.45898 9.76273 1.34745 10.256 1.29727C10.7211 1.24995 11.291 1.24998 11.9516 1.25H11.9517ZM12.0008 3.25C11.8198 3.25 11.6549 3.25008 11.5038 3.25075C11.374 3.25133 11.2545 3.25235 11.1438 3.25414C10.8679 3.2586 10.6467 3.26785 10.4584 3.287C10.1233 3.32109 10.0052 3.37809 9.94468 3.41854C9.83549 3.49149 9.74174 3.58524 9.66878 3.69443C9.62833 3.75496 9.57133 3.87303 9.53724 4.20813C9.51619 4.41506 9.50567 4.51852 9.55664 4.60385C9.5759 4.63609 9.60494 4.66823 9.63507 4.69066C9.7148 4.75 9.82657 4.75 10.0501 4.75H13.9504L13.991 4.74999C14.0328 4.74994 14.0704 4.74975 14.1044 4.74894C14.2306 4.74596 14.307 4.73453 14.366 4.69065C14.3961 4.66823 14.4251 4.63609 14.4444 4.60384C14.4954 4.51852 14.4848 4.41505 14.4638 4.20813C14.4297 3.87303 14.3727 3.75496 14.3322 3.69443C14.2593 3.58524 14.1655 3.49149 14.0563 3.41853C13.9958 3.37809 13.8778 3.32109 13.5427 3.287C13.1908 3.25121 12.7238 3.25 12.0008 3.25ZM10.9969 9C10.446 8.99832 10 8.55125 10 8C10 7.44772 10.4477 7 11 7H13C13.0001 7 13.0002 7 13.0002 7C13.0046 7 13.0089 7.00003 13.0132 7.00008C13.5595 7.007 14.0002 7.45203 14.0002 8C14.0002 8.55229 13.5525 9 13.0002 9H11.0002C10.9991 9 10.998 9 10.9969 9Z',
  d6: 'M12.0489 1.25H11.9517H11.9516C11.291 1.24998 10.7211 1.24995 10.256 1.29727C9.76273 1.34745 9.27746 1.45898 8.83354 1.7556C8.50597 1.97447 8.22471 2.25572 8.00584 2.58329C7.70922 3.02722 7.59769 3.51248 7.54751 4.00572C7.54208 4.0591 7.53728 4.11385 7.53302 4.16996C7.51325 4.43067 7.50337 4.56103 7.44237 4.63458C7.38138 4.70813 7.23182 4.74819 6.9327 4.82832C5.91239 5.10164 5.17073 6.05737 5.25679 7.1711L5.4406 9.54975C5.58286 11.3907 6.20558 13.1637 7.24763 14.6986L7.84841 15.5835C8.44224 16.4582 9.37329 17.0364 10.4051 17.2015C10.706 17.2496 10.8565 17.2737 10.9283 17.3578C11 17.4419 11 17.5771 11 17.8474V21.75C11 22.3023 11.4477 22.75 12 22.75C12.5523 22.75 13 22.3023 13 21.75V17.8475C13 17.5771 13 17.4419 13.0717 17.3578C13.1435 17.2737 13.294 17.2496 13.595 17.2015C14.6268 17.0365 15.5579 16.4582 16.1518 15.5835L16.7526 14.6986C17.7946 13.1637 18.4173 11.3907 18.5596 9.54975L18.7434 7.1711C18.8295 6.05745 18.0879 5.10178 17.0677 4.82838C16.7686 4.74823 16.6191 4.70815 16.5581 4.63461C16.4971 4.56106 16.4872 4.43072 16.4675 4.17003C16.4632 4.1139 16.4584 4.05912 16.453 4.00572C16.4028 3.51248 16.2913 3.02721 15.9947 2.58329C15.7758 2.25572 15.4945 1.97447 15.167 1.7556C14.723 1.45898 14.2378 1.34745 13.7445 1.29727C13.2794 1.24995 12.7096 1.24998 12.0489 1.25H12.0489ZM11.5038 3.25075C11.6549 3.25008 11.8198 3.25 12.0008 3.25C12.7238 3.25 13.1908 3.25121 13.5427 3.287C13.8778 3.32109 13.9958 3.37809 14.0563 3.41853C14.1655 3.49149 14.2593 3.58524 14.3322 3.69443C14.3727 3.75496 14.4297 3.87303 14.4638 4.20813C14.4848 4.41505 14.4954 4.51852 14.4444 4.60384C14.4251 4.63609 14.3961 4.66823 14.366 4.69065C14.307 4.73453 14.2306 4.74596 14.1044 4.74894C14.0704 4.74975 14.0328 4.74994 13.991 4.74999C13.9779 4.75 13.9644 4.75 13.9504 4.75H10.0501C9.82657 4.75 9.7148 4.75 9.63507 4.69066C9.60494 4.66823 9.5759 4.63609 9.55664 4.60385C9.50567 4.51852 9.51619 4.41506 9.53724 4.20813C9.57133 3.87303 9.62833 3.75496 9.66878 3.69443C9.74174 3.58524 9.83549 3.49149 9.94468 3.41854C10.0052 3.37809 10.1233 3.32109 10.4584 3.287C10.6467 3.26785 10.8679 3.2586 11.1438 3.25414C11.2545 3.25235 11.374 3.25133 11.5038 3.25075ZM10.0002 8C10.0002 7.44772 10.448 7 11.0002 7H13.0002C13.5525 7 14.0002 7.44772 14.0002 8C14.0002 8.55229 13.5525 9 13.0002 9H11.0002C10.448 9 10.0002 8.55229 10.0002 8Z',
  d7: 'M11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H11Z',
  d8: 'M15.5277 5.5V2H8.50684V5.5',
  d9: 'M12.0176 16.5V22',
  d10: 'M10.5137 8.5H13.5226',
  d11: 'M12.1952 5.50098H6.10518C6.04979 5.50098 6.00488 5.54575 6.00488 5.60098V11.4822L9.02365 16.5493H12.1952M11.8131 5.50098H17.9031C17.9585 5.50098 18.0034 5.54575 18.0034 5.60098V11.4822L14.9846 16.5493H11.8131',
  d12: 'M11 22.75V17.25H13V22.75H11Z',
  d13: 'M7.75 1.25H16.25V5.25H17.9994C18.4137 5.25 18.7494 5.58579 18.7494 6V12.2077L15.4247 17.75H8.57536L5.25 12.2077V6C5.25 5.58579 5.58579 5.25 6 5.25H7.75V1.25ZM14.3611 3.02778V5.25H9.63889V3.02778H14.3611ZM10.5 10H13.5V8H10.5V10Z',
} as const;

export const IconUsbStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-stroke-rounded IconUsbStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconUsbDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-duotone-rounded IconUsbDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconUsbTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-twotone-rounded IconUsbTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-solid-rounded IconUsbSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-bulk-rounded IconUsbBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-stroke-sharp IconUsbStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-solid-sharp IconUsbSolidSharp"
    >
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

export const iconPackOfUsb: TheIconSelfPack = {
  name: 'Usb',
  StrokeRounded: IconUsbStrokeRounded,
  DuotoneRounded: IconUsbDuotoneRounded,
  TwotoneRounded: IconUsbTwotoneRounded,
  SolidRounded: IconUsbSolidRounded,
  BulkRounded: IconUsbBulkRounded,
  StrokeSharp: IconUsbStrokeSharp,
  SolidSharp: IconUsbSolidSharp,
};