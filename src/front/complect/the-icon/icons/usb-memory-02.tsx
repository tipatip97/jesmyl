import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 11.5C7 9.61438 7 8.67157 7.58579 8.08579C8.17157 7.5 9.11438 7.5 11 7.5H13C14.8856 7.5 15.8284 7.5 16.4142 8.08579C17 8.67157 17 9.61438 17 11.5V17C17 17.9293 17 18.394 16.9231 18.7804C16.6075 20.3671 15.3671 21.6075 13.7804 21.9231C13.394 22 12.9293 22 12 22C11.0707 22 10.606 22 10.2196 21.9231C8.63288 21.6075 7.39249 20.3671 7.07686 18.7804C7 18.394 7 17.9293 7 17V11.5Z',
  d2: 'M15.5 7.5V5.5C15.5 4.09554 15.5 3.39331 15.1629 2.88886C15.017 2.67048 14.8295 2.48298 14.6111 2.33706C14.1067 2 13.4045 2 12 2C10.5955 2 9.89331 2 9.38886 2.33706C9.17048 2.48298 8.98298 2.67048 8.83706 2.88886C8.5 3.39331 8.5 4.09554 8.5 5.5V7.5',
  d3: 'M11.5 4.5H12.5',
  d4: 'M10.9762 22.7497C10.6277 22.7407 10.3234 22.7198 10.0265 22.6607C8.04278 22.2659 6.4925 20.7146 6.09805 18.7307C6.00163 18.2457 6.00177 17.6883 6.00197 16.8702L6.00199 11.1861C6.00194 10.2991 6.0019 9.53501 6.08412 8.92313C6.17224 8.26744 6.37092 7.63895 6.8805 7.12913C7.03863 6.97093 7.2082 6.84266 7.38646 6.73836C7.57711 6.6268 7.67244 6.57102 7.7122 6.50169C7.75195 6.43237 7.75195 6.33952 7.75195 6.15384L7.75195 5.46166C7.75194 4.79208 7.75192 4.23336 7.79794 3.78103C7.8461 3.30755 7.95082 2.86818 8.21541 2.47219C8.41605 2.17192 8.67386 1.9141 8.97414 1.71347C9.37013 1.44887 9.8095 1.34416 10.283 1.29599C10.7353 1.24998 11.3664 1.24999 12.0359 1.25H12.0359C12.7055 1.24999 13.2642 1.24997 13.7165 1.29599C14.19 1.34415 14.6294 1.44887 15.0254 1.71346C15.3256 1.9141 15.5835 2.17191 15.7841 2.47219C16.0487 2.86818 16.1534 3.30755 16.2016 3.78102C16.2476 4.23334 16.2476 4.79211 16.2476 5.46166V6.15383C16.2476 6.33952 16.2476 6.43236 16.2873 6.50169C16.3271 6.57102 16.4224 6.6268 16.6131 6.73835C16.7913 6.84266 16.9609 6.97092 17.119 7.12913C17.6286 7.63895 17.8273 8.26744 17.9154 8.92313C17.9976 9.53501 17.9976 10.2991 17.9975 11.1861L17.9975 16.8702C17.9977 17.6883 17.9979 18.2457 17.9015 18.7307C17.507 20.7146 15.9567 22.2659 13.9731 22.6607C13.6761 22.7198 13.3718 22.7407 13.0233 22.7497L10.9762 22.7497ZM11.002 8.25C10.0309 8.25 9.40319 8.25213 8.94072 8.31434C8.50706 8.37267 8.37116 8.46683 8.29501 8.54301C8.2188 8.61925 8.1246 8.75541 8.06627 9.18949C8.00408 9.65229 8.00195 10.2804 8.00195 11.2519V16.7545C8.00195 17.7321 8.00679 18.075 8.05961 18.3407C8.29642 19.5317 9.22692 20.4624 10.4168 20.6992C10.5481 20.7253 10.7202 20.7424 11.0278 20.7503L12.9717 20.7503C13.2792 20.7424 13.4513 20.7253 13.5827 20.6991C14.7725 20.4624 15.703 19.5317 15.9398 18.3407C15.9926 18.075 15.9975 17.7321 15.9975 16.7545V11.2519C15.9975 10.2804 15.9954 9.65229 15.9332 9.18949C15.8748 8.75541 15.7806 8.61925 15.7044 8.543C15.6283 8.46682 15.4924 8.37266 15.0587 8.31433C14.5962 8.25213 13.9686 8.25 12.9975 8.25L11.002 8.25ZM10.25 4.04688C10.25 3.63266 10.5858 3.29688 11 3.29688H13C13.4142 3.29688 13.75 3.63266 13.75 4.04688C13.75 4.46109 13.4142 4.79688 13 4.79688H11C10.5858 4.79688 10.25 4.46109 10.25 4.04688Z',
  d5: 'M10.0265 22.6607C10.3234 22.7198 10.6277 22.7407 10.9762 22.7497L13.0233 22.7497C13.3718 22.7407 13.6761 22.7198 13.9731 22.6607C15.9567 22.2659 17.507 20.7146 17.9015 18.7307C17.9979 18.2457 17.9977 17.6883 17.9975 16.8702L17.9975 11.1861C17.9976 10.2991 17.9976 9.53501 17.9154 8.92313C17.8273 8.26744 17.6286 7.63895 17.119 7.12913C16.9609 6.97092 16.7913 6.84266 16.6131 6.73835C16.4224 6.6268 16.3271 6.57102 16.2873 6.50169C16.2476 6.43236 16.2476 6.33952 16.2476 6.15383V5.46166C16.2476 4.79211 16.2476 4.23334 16.2016 3.78102C16.1534 3.30755 16.0487 2.86818 15.7841 2.47219C15.5835 2.17191 15.3256 1.9141 15.0254 1.71346C14.6294 1.44887 14.19 1.34415 13.7165 1.29599C13.2642 1.24997 12.7055 1.24999 12.0359 1.25C11.3664 1.24999 10.7353 1.24998 10.283 1.29599C9.8095 1.34416 9.37013 1.44887 8.97414 1.71347C8.67386 1.9141 8.41605 2.17192 8.21541 2.47219C7.95082 2.86818 7.8461 3.30755 7.79794 3.78103C7.75192 4.23336 7.75194 4.79208 7.75195 5.46166L7.75195 6.15384C7.75195 6.33952 7.75195 6.43237 7.7122 6.50169C7.67244 6.57102 7.57711 6.6268 7.38646 6.73836C7.2082 6.84266 7.03863 6.97093 6.8805 7.12913C6.37092 7.63895 6.17224 8.26744 6.08412 8.92313C6.0019 9.53501 6.00194 10.2991 6.00199 11.1861L6.00197 16.8702C6.00177 17.6883 6.00163 18.2457 6.09805 18.7307C6.4925 20.7146 8.04278 22.2659 10.0265 22.6607ZM8.94072 8.31434C9.40319 8.25213 10.0309 8.25 11.002 8.25L12.9975 8.25C13.9686 8.25 14.5962 8.25213 15.0587 8.31433C15.4924 8.37266 15.6283 8.46682 15.7044 8.543C15.7806 8.61925 15.8748 8.75541 15.9332 9.18949C15.9954 9.65229 15.9975 10.2804 15.9975 11.2519V16.7545C15.9975 17.7321 15.9926 18.075 15.9398 18.3407C15.703 19.5317 14.7725 20.4624 13.5827 20.6991C13.4513 20.7253 13.2792 20.7424 12.9717 20.7503L11.0278 20.7503C10.7202 20.7424 10.5481 20.7253 10.4168 20.6992C9.22692 20.4624 8.29642 19.5317 8.05961 18.3407C8.00679 18.075 8.00195 17.7321 8.00195 16.7545V11.2519C8.00195 10.2804 8.00408 9.65229 8.06627 9.18949C8.1246 8.75541 8.2188 8.61925 8.29501 8.54301C8.37116 8.46683 8.50706 8.37267 8.94072 8.31434Z',
  d6: 'M11 3.29688C10.5858 3.29688 10.25 3.63266 10.25 4.04688C10.25 4.46109 10.5858 4.79688 11 4.79688H13C13.4142 4.79688 13.75 4.46109 13.75 4.04688C13.75 3.63266 13.4142 3.29688 13 3.29688H11Z',
  d7: 'M17 7.5H7V17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17V7.5Z',
  d8: 'M15.5 7.5V2H8.5V7.5',
  d9: 'M11 4.5H13',
  d10: 'M7.75 2C7.75 1.58579 8.08579 1.25 8.5 1.25H15.5C15.9142 1.25 16.25 1.58579 16.25 2V6.75H17.75V16.9318C17.75 20.1451 15.1756 22.75 12 22.75C8.82436 22.75 6.25 20.1451 6.25 16.9318V6.75H7.75V2ZM8.16667 8.68939V16.9318C8.16667 19.074 9.88291 20.8106 12 20.8106C14.1171 20.8106 15.8333 19.074 15.8333 16.9318V8.68939H8.16667ZM10.5 5.25H13.5V3.75H10.5V5.25Z',
} as const;

export const IconUsbMemory02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-memory-02-stroke-rounded IconUsbMemory02StrokeRounded"
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

export const IconUsbMemory02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-memory-02-duotone-rounded IconUsbMemory02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconUsbMemory02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-memory-02-twotone-rounded IconUsbMemory02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconUsbMemory02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-memory-02-solid-rounded IconUsbMemory02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbMemory02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-memory-02-bulk-rounded IconUsbMemory02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconUsbMemory02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-memory-02-stroke-sharp IconUsbMemory02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbMemory02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-memory-02-solid-sharp IconUsbMemory02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUsbMemory02: TheIconSelfPack = {
  name: 'UsbMemory02',
  StrokeRounded: IconUsbMemory02StrokeRounded,
  DuotoneRounded: IconUsbMemory02DuotoneRounded,
  TwotoneRounded: IconUsbMemory02TwotoneRounded,
  SolidRounded: IconUsbMemory02SolidRounded,
  BulkRounded: IconUsbMemory02BulkRounded,
  StrokeSharp: IconUsbMemory02StrokeSharp,
  SolidSharp: IconUsbMemory02SolidSharp,
};