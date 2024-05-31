import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.9994 12V6.66586C11.9994 4.80386 11.9994 3.87286 12.5847 3.578C13.17 3.28313 13.9092 3.84173 15.3877 4.95893L16.0935 5.49234C17.1288 6.27468 17.6465 6.66586 17.6465 7.19927C17.6465 7.73268 17.1288 8.12386 16.0935 8.9062L11.9994 12ZM11.9994 12V17.3341C11.9994 19.1961 11.9994 20.1271 12.5847 20.422C13.17 20.7169 13.9092 20.1583 15.3877 19.0411L16.0935 18.5077C17.1288 17.7253 17.6465 17.3341 17.6465 16.8007C17.6465 16.2673 17.1288 15.8761 16.0935 15.0938L11.9994 12ZM11.9994 12L5.64648 7.19927M11.9994 12L5.64648 16.8007',
  d2: 'M18.9998 12H19.0088',
  d3: 'M4.99981 12H5.00879',
  d4: 'M12.002 12V6.66586C12.002 4.80386 12.002 3.87286 12.5873 3.578C13.1726 3.28313 13.9118 3.84173 15.3902 4.95893L16.0961 5.49234C17.1314 6.27468 17.649 6.66586 17.649 7.19927C17.649 7.73268 17.1314 8.12386 16.0961 8.9062L12.002 12L16.0961 15.0938C17.1314 15.8761 17.649 16.2673 17.649 16.8007C17.649 17.3341 17.1314 17.7253 16.0961 18.5077L15.3902 19.0411C13.9118 20.1583 13.1726 20.7169 12.5873 20.422C12.002 20.1271 12.002 19.1961 12.002 17.3341V12Z',
  d5: 'M15.9293 4.11572C15.9496 4.13112 15.9701 4.14658 15.9906 4.16209L16.6965 4.6955C16.7141 4.70877 16.7316 4.72201 16.749 4.73521C17.2213 5.09194 17.6594 5.42294 17.9701 5.73771C18.3103 6.08248 18.6465 6.55322 18.6465 7.20025C18.6465 7.84728 18.3103 8.31802 17.9701 8.66279C17.6594 8.97756 17.2213 9.30856 16.749 9.6653C16.7316 9.6785 16.714 9.69173 16.6965 9.705L13.6582 12.001L16.6965 14.297C16.7141 14.3102 16.7316 14.3235 16.7491 14.3367C17.2213 14.6934 17.6594 15.0244 17.9701 15.3392C18.3103 15.6839 18.6465 16.1547 18.6465 16.8017C18.6465 17.4487 18.3103 17.9195 17.9701 18.2643C17.6594 18.579 17.2213 18.91 16.749 19.2668C16.7316 19.28 16.7141 19.2932 16.6965 19.3065L15.9293 19.8862C15.2428 20.4051 14.6394 20.8611 14.1316 21.1392C13.6155 21.4218 12.8877 21.6953 12.1349 21.3161C11.3853 20.9385 11.1679 20.1935 11.0831 19.6108C10.9993 19.0359 10.9994 18.2769 10.9995 17.4114L10.9995 14.0101L6.24943 17.5995C5.80881 17.9325 5.18168 17.8452 4.84872 17.4046C4.51575 16.964 4.60302 16.3369 5.04365 16.0039L10.3408 12.001L5.04365 7.99807C4.60302 7.66511 4.51575 7.03798 4.84872 6.59736C5.18168 6.15673 5.80881 6.06946 6.24943 6.40243L10.9995 9.9919V6.66684C10.9995 6.64132 10.9995 6.61589 10.9995 6.59056C10.9994 5.72503 10.9993 4.9661 11.0831 4.39111C11.1679 3.80851 11.3853 3.0635 12.1349 2.68591C12.8877 2.30667 13.6155 2.5802 14.1316 2.8628C14.6394 3.14087 15.2428 3.59687 15.9293 4.11572ZM12.9995 14.4119C12.9995 14.1019 13.0727 14.0654 13.3201 14.2523L15.4907 15.8926C15.8188 16.1405 16.1818 16.3798 16.4783 16.6728C16.5958 16.789 16.5958 16.8144 16.4783 16.9306C16.1818 17.2236 15.8188 17.4629 15.4907 17.7108L14.7848 18.2442C14.3239 18.5925 13.804 19.0352 13.2814 19.3468C13.0621 19.4776 12.9993 19.4318 12.9993 19.18C12.9994 18.706 12.9995 17.8226 12.9995 17.3351V14.4119ZM13.3201 9.74965C13.0727 9.93655 12.9995 9.9001 12.9995 9.59008V6.66684C12.9995 6.19821 12.9994 5.36382 12.9993 4.87889C12.9993 4.58526 13.0691 4.54815 13.3111 4.71467C13.7156 4.99295 14.4132 5.47688 14.7848 5.75773L15.4907 6.29115C15.8188 6.53905 16.1818 6.77834 16.4783 7.07135C16.5958 7.18753 16.5958 7.21297 16.4783 7.32915C16.1818 7.62216 15.8188 7.86146 15.4907 8.10935L13.3201 9.74965Z',
  d6: 'M18 12C18 11.4477 18.4457 11 18.9955 11H19.0045C19.5543 11 20 11.4477 20 12C20 12.5523 19.5543 13 19.0045 13H18.9955C18.4457 13 18 12.5523 18 12Z',
  d7: 'M4 12C4 11.4477 4.44571 11 4.99553 11H5.00447C5.55429 11 6 11.4477 6 12C6 12.5523 5.55429 13 5.00447 13H4.99553C4.44571 13 4 12.5523 4 12Z',
  d8: 'M5.99805 17L17.9981 6.99997L11.9995 3.5V20.5L17.9981 17L5.99805 6.99997',
  d9: 'M18.9922 12H19.0012',
  d10: 'M11.5029 2.63283C11.8135 2.4545 12.1956 2.45581 12.5049 2.63627L18.5035 6.13624C18.7852 6.30056 18.969 6.59186 18.9961 6.91678C19.0232 7.24171 18.8903 7.55946 18.6398 7.76819L13.5616 12L18.6398 16.2318C18.8903 16.4405 19.0232 16.7583 18.9961 17.0832C18.969 17.4081 18.7852 17.6994 18.5035 17.8637L12.5049 21.3637C12.1956 21.5442 11.8135 21.5455 11.503 21.3672C11.1924 21.1888 11.001 20.8581 11.001 20.5V14.1339L6.63974 17.7682L5.35938 16.2318L10.4375 12L5.35938 7.76819L6.63974 6.23175L11.001 9.8661V3.5C11.001 3.14192 11.1924 2.81117 11.5029 2.63283ZM13.001 14.1362L16.2636 16.8551L13.001 18.7588V14.1362ZM13.001 9.86378V5.24123L16.2636 7.14488L13.001 9.86378Z',
  d11: 'M17.9922 11H20.0012V13H17.9922V11Z',
  d12: 'M4 11H6.00898V13H4V11Z',
} as const;

export const IconBluetoothStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-stroke-rounded IconBluetoothStrokeRounded"
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

export const IconBluetoothDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-duotone-rounded IconBluetoothDuotoneRounded"
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

export const IconBluetoothTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-twotone-rounded IconBluetoothTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBluetoothSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-solid-rounded IconBluetoothSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconBluetoothBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-bulk-rounded IconBluetoothBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBluetoothStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-stroke-sharp IconBluetoothStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBluetoothSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-solid-sharp IconBluetoothSolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBluetooth: TheIconSelfPack = {
  name: 'Bluetooth',
  StrokeRounded: IconBluetoothStrokeRounded,
  DuotoneRounded: IconBluetoothDuotoneRounded,
  TwotoneRounded: IconBluetoothTwotoneRounded,
  SolidRounded: IconBluetoothSolidRounded,
  BulkRounded: IconBluetoothBulkRounded,
  StrokeSharp: IconBluetoothStrokeSharp,
  SolidSharp: IconBluetoothSolidSharp,
};