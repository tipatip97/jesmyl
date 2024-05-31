import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.99396 2C6.19709 2.06395 4.56347 2.33111 3.44729 3.44729C2.33111 4.56347 2.06395 6.19709 2 8.99396M15.006 2C17.8029 2.06395 19.4365 2.33111 20.5527 3.44729C21.6689 4.56347 21.9361 6.19709 22 8.99396M15.006 22C17.8029 21.9361 19.4365 21.6689 20.5527 20.5527C21.6689 19.4365 21.9361 17.8029 22 15.006M8.99396 22C6.19709 21.9361 4.56347 21.6689 3.44729 20.5527C2.33111 19.4365 2.06395 17.8029 2 15.006',
  d2: 'M16.9998 7H17.0088',
  d3: 'M13 6V9C13 10.8856 13 11.8284 12.4142 12.4142C11.8284 13 10.8856 13 9 13H6',
  d4: 'M6.29289 6.29289C6 6.58579 6 7.05719 6 8C6 8.94281 6 9.41421 6.29289 9.70711M6.29289 6.29289C6.58579 6 7.05719 6 8 6C8.94281 6 9.41421 6 9.70711 6.29289M6.29289 6.29289C6.29289 6.29289 6.29289 6.29289 6.29289 6.29289ZM6.29289 9.70711C6.58579 10 7.05719 10 8 10C8.94281 10 9.41421 10 9.70711 9.70711M6.29289 9.70711C6.29289 9.70711 6.29289 9.70711 6.29289 9.70711ZM9.70711 9.70711C10 9.41421 10 8.94281 10 8C10 7.05719 10 6.58579 9.70711 6.29289M9.70711 9.70711C9.70711 9.70711 9.70711 9.70711 9.70711 9.70711ZM9.70711 6.29289C9.70711 6.29289 9.70711 6.29289 9.70711 6.29289Z',
  d5: 'M17 15C17.4714 15 17.7071 15 17.8536 15.1464C18 15.2929 18 15.5286 18 16V17C18 17.4714 18 17.7071 17.8536 17.8536C17.7071 18 17.4714 18 17 18H15C14.5286 18 14.2929 18 14.1464 17.8536C14 17.7071 14 17.4714 14 17L14 16C14 15.5286 14 15.2929 14.1464 15.1464C14.2929 15 14.5286 15 15 15L17 15Z',
  d6: 'M6 18H11',
  d7: 'M17 10L17 12',
  d8: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28248 21.5 7.52165 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52169 21.5 5.28248 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12ZM17 15C17.4714 15 17.7071 15 17.8536 15.1464C18 15.2929 18 15.5286 18 16V17C18 17.4714 18 17.7071 17.8536 17.8536C17.7071 18 17.4714 18 17 18H15C14.5286 18 14.2929 18 14.1464 17.8536C14 17.7071 14 17.4714 14 17V16C14 15.5286 14 15.2929 14.1464 15.1464C14.2929 15 14.5286 15 15 15H17ZM9.70711 6.29289C9.41421 6 8.94281 6 8 6C7.05719 6 6.58579 6 6.29289 6.29289C6 6.58579 6 7.05719 6 8C6 8.94281 6 9.41421 6.29289 9.70711C6.58579 10 7.05719 10 8 10C8.94281 10 9.41421 10 9.70711 9.70711C10 9.41421 10 8.94281 10 8C10 7.05719 10 6.58579 9.70711 6.29289Z',
  d9: 'M9.99371 1.97715C10.0063 2.52929 9.56897 2.98712 9.01683 2.99974C6.1831 3.06453 4.95346 3.35534 4.1544 4.1544C3.35534 4.95346 3.06453 6.1831 2.99974 9.01683C2.98712 9.56897 2.52929 10.0063 1.97715 9.99371C1.42501 9.98108 0.987642 9.52325 1.00027 8.97111C1.06337 6.21109 1.3069 4.17348 2.74019 2.74019C4.17348 1.3069 6.21109 1.06337 8.97111 1.00027C9.52325 0.987642 9.98108 1.42501 9.99371 1.97715ZM14.0063 1.97715C14.0189 1.42501 14.4768 0.987642 15.0289 1.00027C17.7889 1.06337 19.8265 1.3069 21.2598 2.74019C22.6931 4.17348 22.9366 6.21109 22.9997 8.97111C23.0124 9.52325 22.575 9.98108 22.0229 9.99371C21.4707 10.0063 21.0129 9.56897 21.0003 9.01683C20.9355 6.1831 20.6447 4.95346 19.8456 4.1544C19.0465 3.35534 17.8169 3.06453 14.9832 2.99974C14.431 2.98712 13.9937 2.52929 14.0063 1.97715ZM22.0229 14.0063C22.575 14.0189 23.0124 14.4767 22.9997 15.0289C22.9366 17.7889 22.6931 19.8265 21.2598 21.2598C19.8265 22.6931 17.7889 22.9366 15.0289 22.9997C14.4768 23.0124 14.0189 22.575 14.0063 22.0229C13.9937 21.4707 14.431 21.0129 14.9832 21.0003C17.8169 20.9355 19.0465 20.6447 19.8456 19.8456C20.6447 19.0465 20.9355 17.8169 21.0003 14.9832C21.0129 14.431 21.4707 13.9937 22.0229 14.0063ZM1.97715 14.0063C2.52929 13.9937 2.98712 14.431 2.99974 14.9832C3.06453 17.8169 3.35534 19.0465 4.1544 19.8456C4.95346 20.6447 6.1831 20.9355 9.01683 21.0003C9.56897 21.0129 10.0063 21.4707 9.99371 22.0229C9.98108 22.575 9.52325 23.0124 8.97111 22.9997C6.21109 22.9366 4.17348 22.6931 2.74019 21.2598C1.3069 19.8265 1.06337 17.7889 1.00027 15.0289C0.987642 14.4768 1.42501 14.0189 1.97715 14.0063Z',
  d10: 'M15.4998 7C15.4998 6.17157 16.1713 5.5 16.9998 5.5H17.0087C17.8372 5.5 18.5087 6.17157 18.5087 7C18.5087 7.82843 17.8372 8.5 17.0087 8.5H16.9998C16.1713 8.5 15.4998 7.82843 15.4998 7Z',
  d11: 'M13 5C13.5523 5 14 5.44772 14 6L14 9.06583C14.0001 9.95232 14.0001 10.7161 13.9179 11.3278C13.8297 11.9833 13.631 12.6117 13.1213 13.1213C12.6117 13.631 11.9833 13.8297 11.3278 13.9179C10.7161 14.0001 9.95232 14.0001 9.06583 14L6 14C5.44772 14 5 13.5523 5 13C5 12.4477 5.44772 12 6 12H9C9.97108 12 10.5988 11.9979 11.0613 11.9357C11.495 11.8774 11.631 11.7832 11.7071 11.7071C11.7832 11.631 11.8774 11.495 11.9357 11.0613C11.9979 10.5988 12 9.97108 12 9V6C12 5.44772 12.4477 5 13 5Z',
  d12: 'M11 7.94561L11 8.00001L11 8.05442C11.0001 8.47849 11.0002 8.89062 10.9545 9.23053C10.9029 9.61374 10.7774 10.051 10.4142 10.4142C10.051 10.7774 9.61371 10.903 9.2305 10.9545C8.89059 11.0002 8.47847 11.0001 8.05441 11L8.0544 11L7.99999 11L7.94558 11L7.94556 11C7.5215 11.0001 7.10938 11.0002 6.76947 10.9545C6.38626 10.903 5.94899 10.7774 5.58577 10.4142C5.22256 10.051 5.09703 9.61374 5.04551 9.23053C4.99981 8.89062 4.9999 8.47849 4.99998 8.05441L4.99999 8.00001L4.99998 7.94561C4.9999 7.52154 4.99981 7.10941 5.04551 6.76949C5.09703 6.38629 5.22256 5.94902 5.58577 5.5858C5.94899 5.22259 6.38626 5.09706 6.76947 5.04554C7.10938 4.99984 7.52151 4.99992 7.94558 5.00001L7.99999 5.00001L8.05439 5.00001C8.47846 4.99992 8.89059 4.99984 9.23051 5.04554C9.61371 5.09706 10.051 5.22259 10.4142 5.5858C10.7774 5.94902 10.9029 6.38629 10.9545 6.76949C11.0002 7.10941 11.0001 7.52154 11 7.94561Z',
  d13: 'M14.9607 14L15 14L17 14L17.0394 14C17.2393 13.9999 17.4773 13.9997 17.6819 14.0273C17.929 14.0605 18.2707 14.1494 18.5607 14.4394C18.8507 14.7294 18.9396 15.0711 18.9728 15.3182C19.0003 15.5228 19.0002 15.7608 19.0001 15.9607L19 16L19 17L19.0001 17.0394C19.0002 17.2393 19.0003 17.4773 18.9728 17.6819C18.9396 17.929 18.8507 18.2707 18.5607 18.5607C18.2707 18.8507 17.929 18.9396 17.6819 18.9728C17.4773 19.0003 17.2393 19.0002 17.0394 19.0001L17 19H15L14.9606 19.0001C14.7608 19.0002 14.5228 19.0003 14.3182 18.9728C14.0711 18.9396 13.7294 18.8507 13.4394 18.5607C13.1494 18.2707 13.0605 17.929 13.0273 17.6819C12.9997 17.4773 12.9999 17.2393 13 17.0394L13 17L13 16L13 15.9607C12.9999 15.7608 12.9997 15.5228 13.0273 15.3182C13.0605 15.0711 13.1494 14.7294 13.4394 14.4394C13.7294 14.1494 14.0711 14.0605 14.3182 14.0273C14.5228 13.9997 14.7608 13.9999 14.9607 14Z',
  d14: 'M5 18C5 17.4477 5.44772 17 6 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H6C5.44772 19 5 18.5523 5 18Z',
  d15: 'M17 9C17.5523 9 18 9.44772 18 10L18 12C18 12.5523 17.5523 13 17 13C16.4477 13 16 12.5523 16 12L16 10C16 9.44772 16.4477 9 17 9Z',
  d16: 'M18 15L18 18H14L14 15L18 15Z',
  d17: 'M8.99396 2H2V8.99396M15.006 2H22V8.99396M15.006 22H22V15.006M8.99396 22H2V15.006',
  d18: 'M13 6V13H6',
  d19: 'M10 6L10 10H6L6 6L10 6Z',
  d20: 'M17 6L17 8',
  d21: 'M1.5 1.5H9.1306V3.40909H3.40909V9.1306H1.5V1.5ZM20.5909 3.40909H14.8694V1.5H22.5V9.1306H20.5909V3.40909ZM22.5 14.8694V22.5H14.8694V20.5909H20.5909V14.8694H22.5ZM1.5 14.8694H3.40909V20.5909H9.1306V22.5H1.5V14.8694Z',
  d22: 'M12 12V6H14V13C14 13.5523 13.5523 14 13 14H6V12H12Z',
  d23: 'M11 18H6V16H11V18Z',
  d24: 'M16 12L16 10L18 10L18 12L16 12Z',
  d25: 'M16 8L16 6L18 6L18 8L16 8Z',
} as const;

export const IconQrCode01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="qr-code-01-stroke-rounded IconQrCode01StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconQrCode01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="qr-code-01-duotone-rounded IconQrCode01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      />
      <rect 
        x="10" 
        y="6" 
        width="4" 
        height="4" 
        rx="1" 
        transform="rotate(90 10 6)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconQrCode01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="qr-code-01-twotone-rounded IconQrCode01TwotoneRounded"
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
      />
      <rect 
        opacity="var(--icon-opacity)" 
        x="10" 
        y="6" 
        width="4" 
        height="4" 
        rx="1" 
        transform="rotate(90 10 6)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconQrCode01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="qr-code-01-solid-rounded IconQrCode01SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconQrCode01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="qr-code-01-bulk-rounded IconQrCode01BulkRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconQrCode01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="qr-code-01-stroke-sharp IconQrCode01StrokeSharp"
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
      <path 
        d={d.d7} 
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
    </TheIconWrapper>
  );
};

export const IconQrCode01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="qr-code-01-solid-sharp IconQrCode01SolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d19} 
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
    </TheIconWrapper>
  );
};

export const iconPackOfQrCode01: TheIconSelfPack = {
  name: 'QrCode01',
  StrokeRounded: IconQrCode01StrokeRounded,
  DuotoneRounded: IconQrCode01DuotoneRounded,
  TwotoneRounded: IconQrCode01TwotoneRounded,
  SolidRounded: IconQrCode01SolidRounded,
  BulkRounded: IconQrCode01BulkRounded,
  StrokeSharp: IconQrCode01StrokeSharp,
  SolidSharp: IconQrCode01SolidSharp,
};