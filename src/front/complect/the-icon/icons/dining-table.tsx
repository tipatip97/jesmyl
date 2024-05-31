import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 4L20.496 4.96113C19.8115 6.2666 18.8831 7 17.9151 7H7.0849C6.11686 7 5.18847 6.2666 4.50396 4.96113L4 4',
  d2: 'M2 4H22',
  d3: 'M5 20H5.86863C6.16649 20 6.31542 20 6.4578 19.9794C6.78821 19.9316 7.10141 19.8019 7.36884 19.602C7.48407 19.5159 7.58938 19.4106 7.8 19.2C8.11593 18.8841 8.2739 18.7261 8.44674 18.5969C8.84788 18.2971 9.31768 18.1025 9.81331 18.0309C10.0269 18 10.2503 18 10.6971 18H13.3029C13.7497 18 13.9731 18 14.1867 18.0309C14.6823 18.1025 15.1521 18.2971 15.5533 18.5969C15.7261 18.7261 15.8841 18.8841 16.2 19.2C16.4106 19.4106 16.5159 19.5159 16.6312 19.602C16.8986 19.8019 17.2118 19.9316 17.5422 19.9794C17.6846 20 17.8335 20 18.1314 20H19',
  d4: 'M10 18L10.2058 16.9709C10.333 16.3348 10.3967 16.0167 10.5999 15.8059C10.6541 15.7497 10.7147 15.7001 10.7804 15.658C11.027 15.5 11.3513 15.5 12 15.5C12.6487 15.5 12.973 15.5 13.2196 15.658C13.2853 15.7001 13.3459 15.7497 13.4001 15.8059C13.6033 16.0167 13.667 16.3348 13.7942 16.9709L14 18',
  d5: 'M10 7L10.2058 8.02913C10.333 8.66523 10.3967 8.98327 10.5999 9.19409C10.6541 9.25028 10.7147 9.29993 10.7804 9.34203C11.027 9.5 11.3513 9.5 12 9.5C12.6487 9.5 12.973 9.5 13.2196 9.34203C13.2853 9.29993 13.3459 9.25028 13.4001 9.19409C13.6033 8.98327 13.667 8.66523 13.7942 8.02913L14 7',
  d6: 'M12 15.5L12 9.5',
  d7: 'M10.2058 16.9709L10 18H14L13.7942 16.9709C13.667 16.3348 13.6033 16.0167 13.4001 15.8059C13.3459 15.7497 13.2853 15.7001 13.2196 15.658C12.973 15.5 12.6487 15.5 12 15.5C11.3513 15.5 11.027 15.5 10.7804 15.658C10.7147 15.7001 10.6541 15.7497 10.5999 15.8059C10.3967 16.0167 10.333 16.3348 10.2058 16.9709Z',
  d8: 'M10.2058 8.02913L10 7H14L13.7942 8.02913V8.02913C13.667 8.66523 13.6033 8.98327 13.4001 9.19409C13.3459 9.25028 13.2853 9.29993 13.2196 9.34203C12.973 9.5 12.6487 9.5 12 9.5C11.3513 9.5 11.027 9.5 10.7804 9.34203C10.7147 9.29993 10.6541 9.25028 10.5999 9.19409C10.3967 8.98327 10.333 8.66523 10.2058 8.02913Z',
  d9: 'M20.496 4.96113L21 4L4 4L4.50396 4.96113C5.18847 6.2666 6.11686 7 7.0849 7H17.9151C18.8831 7 19.8115 6.2666 20.496 4.96113Z',
  d10: 'M21.6048 5L21.3817 5.4255C20.6238 6.87098 19.4287 8 17.9151 8H7.0849C5.57127 8 4.37625 6.87099 3.61832 5.42551L3.39521 5H2C1.44772 5 1 4.55228 1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H21.6048Z',
  d11: 'M10.635 17L10.6971 17H13.3029L13.365 17C13.7518 16.9999 14.0436 16.9998 14.3298 17.0412C14.9906 17.1368 15.617 17.3962 16.1519 17.7959C16.3835 17.969 16.5898 18.1754 16.8632 18.449L16.8632 18.449L16.9071 18.4929C17.138 18.7238 17.1856 18.768 17.2298 18.801C17.3635 18.901 17.5201 18.9658 17.6853 18.9897C17.7399 18.9976 17.8048 19 18.1314 19H19C19.5523 19 20 19.4477 20 20C20 20.5523 19.5523 21 19 21H18.1314L18.0806 21C17.8327 21.0002 17.6146 21.0003 17.3991 20.9691C16.9035 20.8975 16.4337 20.7029 16.0325 20.4031C15.8581 20.2727 15.704 20.1184 15.5288 19.943L15.4929 19.9071C15.1567 19.5709 15.0564 19.4741 14.9546 19.398C14.6872 19.1981 14.374 19.0684 14.0436 19.0206C13.9178 19.0024 13.7785 19 13.3029 19H10.6971C10.2215 19 10.0822 19.0024 9.95642 19.0206C9.626 19.0684 9.3128 19.1981 9.04537 19.398C8.94355 19.4741 8.84335 19.5709 8.50711 19.9071L8.47122 19.943C8.29602 20.1184 8.14191 20.2727 7.96747 20.4031C7.56634 20.7029 7.09653 20.8975 6.60091 20.9691C6.38539 21.0003 6.16732 21.0002 5.91941 21H5.9194L5.86863 21H5C4.44772 21 4 20.5523 4 20C4 19.4477 4.44772 19 5 19H5.86863C6.19521 19 6.26006 18.9976 6.31468 18.9897C6.47989 18.9658 6.63649 18.901 6.77021 18.801C6.81442 18.768 6.86196 18.7238 7.09289 18.4929L7.13678 18.449L7.13678 18.449C7.41023 18.1754 7.61648 17.969 7.84811 17.7959C8.38296 17.3962 9.00936 17.1368 9.6702 17.0412C9.95639 16.9998 10.2482 16.9999 10.635 17Z',
  d12: 'M11.968 14.75L12 14.75L12.032 14.75C12.3288 14.75 12.6053 14.7499 12.8369 14.7736C13.092 14.7997 13.3642 14.8599 13.6242 15.0265C13.7392 15.1001 13.8452 15.187 13.94 15.2853C14.1544 15.5077 14.2667 15.7628 14.3423 16.0077C14.411 16.2302 14.4652 16.5014 14.5233 16.7924L14.5233 16.7924L14.5296 16.8238L14.7354 17.8529C14.7795 18.0732 14.7225 18.3017 14.58 18.4755C14.4376 18.6493 14.2247 18.75 14 18.75H10C9.77531 18.75 9.56245 18.6493 9.42 18.4755C9.27755 18.3017 9.2205 18.0732 9.26457 17.8529L9.4704 16.8238L9.47668 16.7924C9.53484 16.5014 9.58904 16.2303 9.65772 16.0077C9.73331 15.7628 9.84565 15.5077 10.06 15.2853C10.1548 15.187 10.2608 15.1001 10.3758 15.0265C10.6359 14.8599 10.9081 14.7997 11.1631 14.7736C11.3947 14.7499 11.6712 14.75 11.968 14.75Z',
  d13: 'M9.42 6.52451C9.56245 6.35074 9.77531 6.25 10 6.25H14C14.2247 6.25 14.4376 6.35074 14.58 6.52451C14.7225 6.69827 14.7795 6.92676 14.7354 7.14709L14.5296 8.17622L14.5233 8.20762L14.5233 8.20763C14.4652 8.49862 14.411 8.76976 14.3423 8.99227C14.2667 9.23721 14.1544 9.49233 13.94 9.71466C13.8452 9.81298 13.7392 9.89988 13.6242 9.97355C13.3642 10.1401 13.092 10.2003 12.8369 10.2264C12.6053 10.2501 12.3288 10.25 12.0321 10.25H12.032L12 10.25L11.968 10.25H11.968C11.6712 10.25 11.3947 10.2501 11.1631 10.2264C10.9081 10.2003 10.6359 10.1401 10.3758 9.97355C10.2608 9.89988 10.1548 9.81298 10.06 9.71466C9.84565 9.49233 9.73331 9.23721 9.65772 8.99227C9.58904 8.76975 9.53484 8.49862 9.47668 8.20762L9.4704 8.17622L9.26457 7.14709C9.2205 6.92676 9.27755 6.69827 9.42 6.52451Z',
  d14: 'M12 8.5C12.5523 8.5 13 8.94772 13 9.5L13 15.5C13 16.0523 12.5523 16.5 12 16.5C11.4477 16.5 11 16.0523 11 15.5L11 9.5C11 8.94772 11.4477 8.5 12 8.5Z',
  d15: 'M11.968 14.7501H11.968H12.032H12.032C12.3288 14.7501 12.6053 14.75 12.8369 14.7737C12.8906 14.7792 12.9451 14.7862 13 14.7954L13 10.2052C13.2067 10.1708 13.4205 10.1057 13.6266 9.97364C13.7416 9.89996 13.8475 9.81307 13.9424 9.71474C14.1567 9.49242 14.269 9.23729 14.3446 8.99235C14.4133 8.76985 14.4675 8.49869 14.5257 8.20771L14.5672 8.00009H9.4375L9.47902 8.20771C9.53719 8.4987 9.59139 8.76984 9.66006 8.99235C9.73566 9.23729 9.848 9.49242 10.0624 9.71474C10.1572 9.81307 10.2631 9.89996 10.3782 9.97364C10.5827 10.1047 10.7947 10.1698 11 10.2044V14.7954C11.0549 14.7862 11.1094 14.7792 11.1631 14.7737C11.3947 14.75 11.6712 14.7501 11.968 14.7501Z',
  d16: 'M20 4L18.5 7H5.5L4 4',
  d17: 'M4 20H6.5L8.5 18H15.5L17.5 20H20',
  d18: 'M10 7L10.5 9.5H13.5L14 7',
  d19: 'M10 18L10.5 15.5H13.5L14 18',
  d20: 'M9.58422 7.74996L9.76367 8.6472C9.83379 8.99777 10.1416 9.25011 10.4991 9.25011H13.4991C13.8566 9.25011 14.1644 8.99777 14.2345 8.6472L14.414 7.74996H18.9644L20.3394 5H22V3H2V5H3.66239L5.03737 7.74996H9.58422Z',
  d21: 'M8.5 17C8.23478 17 7.98043 17.1054 7.79289 17.2929L6.08579 19H4V21H6.5C6.76522 21 7.01957 20.8946 7.20711 20.7071L8.91421 19H15.0858L16.7929 20.7071C16.9804 20.8946 17.2348 21 17.5 21H20V19H17.9142L16.2071 17.2929C16.0196 17.1054 15.7652 17 15.5 17H14.4502L14.2345 16.3529C14.1644 16.0023 13.8566 15.75 13.4991 15.75H10.4991C10.1416 15.75 9.83379 16.0023 9.76367 16.3529L9.54798 17H8.5Z',
  d22: 'M13 8.5L13 16.5L11 16.5L11 8.5L13 8.5Z',
} as const;

export const IconDiningTableStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dining-table-stroke-rounded IconDiningTableStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconDiningTableDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dining-table-duotone-rounded IconDiningTableDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiningTableTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dining-table-twotone-rounded IconDiningTableTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiningTableSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dining-table-solid-rounded IconDiningTableSolidRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiningTableBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dining-table-bulk-rounded IconDiningTableBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiningTableStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dining-table-stroke-sharp IconDiningTableStrokeSharp"
    >
      <path 
        d={d.d16} 
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
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiningTableSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dining-table-solid-sharp IconDiningTableSolidSharp"
    >
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfDiningTable: TheIconSelfPack = {
  name: 'DiningTable',
  StrokeRounded: IconDiningTableStrokeRounded,
  DuotoneRounded: IconDiningTableDuotoneRounded,
  TwotoneRounded: IconDiningTableTwotoneRounded,
  SolidRounded: IconDiningTableSolidRounded,
  BulkRounded: IconDiningTableBulkRounded,
  StrokeSharp: IconDiningTableStrokeSharp,
  SolidSharp: IconDiningTableSolidSharp,
};