import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15 10.0001C14.9611 9.06391 14.8355 8.48991 14.4307 8.08581C13.8439 7.5 12.8994 7.5 11.0105 7.5H9.00701C7.11808 7.5 6.17362 7.5 5.58681 8.08581C5 8.67162 5 9.61447 5 11.5002V17.0004C5 17.9297 5 18.3944 5.07699 18.7808C5.39317 20.3677 6.63574 21.6081 8.22528 21.9237C8.53577 21.9854 8.89671 21.9976 9.50788 22',
  d2: 'M13.5 7.5V5.5C13.5 4.09554 13.5 3.39331 13.1629 2.88886C13.017 2.67048 12.8295 2.48298 12.6111 2.33706C12.1067 2 11.4045 2 10 2C8.59554 2 7.89331 2 7.38886 2.33706C7.17048 2.48298 6.98298 2.67048 6.83706 2.88886C6.5 3.39331 6.5 4.09554 6.5 5.5V7.5',
  d3: 'M13.5 16.5V15C13.5 13.8954 14.3954 13 15.5 13C16.6046 13 17.5 13.8954 17.5 15V16.5M14.75 22H16.25C17.4228 22 18.0092 22 18.4131 21.69C18.5171 21.6102 18.6102 21.5171 18.69 21.4131C19 21.0092 19 20.4228 19 19.25C19 18.0772 19 17.4908 18.69 17.0869C18.6102 16.9829 18.5171 16.8898 18.4131 16.81C18.0092 16.5 17.4228 16.5 16.25 16.5H14.75C13.5772 16.5 12.9908 16.5 12.5869 16.81C12.4829 16.8898 12.3898 16.9829 12.31 17.0869C12 17.4908 12 18.0772 12 19.25C12 20.4228 12 21.0092 12.31 21.4131C12.3898 21.5171 12.4829 21.6102 12.5869 21.69C12.9908 22 13.5772 22 14.75 22Z',
  d4: 'M9.5 4.5H10.5',
  d5: 'M9 7.5H11C12.8856 7.5 13.8284 7.5 14.4142 8.08579C15 8.67157 15 9.61438 15 11.5V13.063C14.1374 13.285 13.5 14.0681 13.5 15V16.5271C13.0928 16.561 12.8116 16.6375 12.5869 16.81C12.4829 16.8898 12.3898 16.9829 12.31 17.0869C12 17.4908 12 18.0772 12 19.25C12 20.4228 12 21.0092 12.31 21.4131C12.3859 21.5121 12.4739 21.6012 12.5719 21.6784C12.3205 21.7858 12.0556 21.8684 11.7804 21.9231C11.394 22 10.9293 22 10 22C9.07069 22 8.60603 22 8.21964 21.9231C6.63288 21.6075 5.39249 20.3671 5.07686 18.7804C5 18.394 5 17.9293 5 17V11.5C5 9.61438 5 8.67157 5.58579 8.08579C6.17157 7.5 7.11438 7.5 9 7.5Z',
  d6: 'M8.75 4.5C8.75 4.08579 9.08579 3.75 9.5 3.75H10.5C10.9142 3.75 11.25 4.08579 11.25 4.5C11.25 4.91421 10.9142 5.25 10.5 5.25H9.5C9.08579 5.25 8.75 4.91421 8.75 4.5Z',
  d7: 'M18.25 15.9011V15C18.25 13.4812 17.0188 12.25 15.5 12.25C13.9812 12.25 12.75 13.4812 12.75 15V15.9011C12.5335 15.9672 12.3248 16.0657 12.1303 16.215C11.9743 16.3347 11.8347 16.4743 11.715 16.6303C11.4431 16.9846 11.3398 17.3855 11.2935 17.7961C11.25 18.1821 11.25 18.739 11.25 19.2907C11.25 19.8423 11.25 20.3179 11.2935 20.7039C11.3398 21.1145 11.4431 21.5154 11.715 21.8697C11.8347 22.0257 11.9743 22.1653 12.1303 22.285C12.4846 22.5569 12.8855 22.6602 13.2961 22.7065C13.6821 22.75 14.1577 22.75 14.7093 22.75H16.2907C16.8423 22.75 17.3179 22.75 17.7039 22.7065C18.1145 22.6602 18.5154 22.5569 18.8697 22.285C19.0257 22.1653 19.1653 22.0257 19.285 21.8697C19.5569 21.5154 19.6602 21.1145 19.7065 20.7039C19.7501 20.3179 19.75 19.8423 19.75 19.2907C19.75 18.739 19.7501 18.1821 19.7065 17.7961C19.6602 17.3855 19.5569 16.9846 19.285 16.6303C19.1653 16.4743 19.0257 16.3347 18.8697 16.215C18.6752 16.0657 18.4666 15.9672 18.25 15.9011ZM14.25 15C14.25 14.3096 14.8096 13.75 15.5 13.75C16.1904 13.75 16.75 14.3096 16.75 15V15.751H14.25V15Z',
  d8: 'M11.719 1.29599C11.2667 1.24997 10.6312 1.24998 9.96166 1.25H9.96163C9.29206 1.24998 8.73335 1.24997 8.28102 1.29599C7.80755 1.34415 7.36818 1.44886 6.97218 1.71346C6.67191 1.9141 6.4141 2.17191 6.21346 2.47218C5.94886 2.86818 5.84415 3.30755 5.79598 3.78102C5.74997 4.23335 5.74998 4.79206 5.75 5.46163V5.46166V7.08169C5.49819 7.19344 5.26505 7.34589 5.05547 7.55546C4.6 8.01093 4.41433 8.57773 4.32993 9.20553C4.24996 9.80031 4.24999 10.5495 4.25002 11.448L4.25001 17.0953C4.24988 17.9333 4.24981 18.4668 4.34129 18.9267C4.71609 20.811 6.18906 22.2839 8.07334 22.6587C8.53326 22.7502 9.16194 22.7501 10 22.75C10.2977 22.75 10.569 22.7501 10.8157 22.746C10.7841 22.7082 10.7533 22.6698 10.7233 22.6307C10.2566 22.0224 10.1102 21.3659 10.0514 20.8439C9.99985 20.3871 9.99993 19.8515 10 19.3392C9.99992 18.827 9.99982 18.1131 10.0514 17.6561C10.1102 17.1341 10.2566 16.4776 10.7233 15.8693C10.9095 15.6267 11.2574 15.3145 11.5 15.1283C11.5 12.5 13.2909 11 15.5 11C15.5839 11 15.6671 11.0026 15.7497 11.0077C15.7478 10.3021 15.7366 9.70035 15.6701 9.20552C15.5857 8.57773 15.4 8.01093 14.9446 7.55546C14.735 7.34588 14.5018 7.19342 14.25 7.08167L14.25 5.46166V5.46163C14.25 4.79206 14.25 4.23335 14.204 3.78102C14.1559 3.30755 14.0511 2.86818 13.7865 2.47218C13.5859 2.17191 13.3281 1.9141 13.0278 1.71346C12.6318 1.44886 12.1925 1.34415 11.719 1.29599ZM12.75 6.77928V5.5C12.75 4.78216 12.7491 4.30023 12.7117 3.93283C12.6756 3.57796 12.6118 3.41399 12.5393 3.30554C12.4481 3.16905 12.331 3.05186 12.1945 2.96066C12.086 2.8882 11.922 2.82438 11.5672 2.78828C11.1998 2.75091 10.7178 2.75 10 2.75C9.28216 2.75 8.80023 2.75091 8.43283 2.78828C8.07796 2.82438 7.91399 2.8882 7.80554 2.96066C7.66905 3.05186 7.55186 3.16905 7.46066 3.30554C7.3882 3.41399 7.32438 3.57796 7.28828 3.93283C7.25091 4.30023 7.25 4.78216 7.25 5.5V6.77928C7.73827 6.74996 8.30492 6.74998 8.94801 6.75H8.94802H11.0521H11.0521C11.6951 6.74998 12.2617 6.74996 12.75 6.77928Z',
  d9: 'M13.5 7.5V2H6.5V7.5',
  d10: 'M15 10V7.5H5V18C5 20.2091 6.79086 22 9 22',
  d11: 'M19 16.5H12V22H19V16.5Z',
  d12: 'M17.5 16.5V15C17.5 13.8954 16.6046 13 15.5 13C14.3954 13 13.5 13.8954 13.5 15V16.5',
  d13: 'M15.5 12.25C13.9812 12.25 12.75 13.4812 12.75 15V15.75H11.25V22.75H19.75V15.75H18.25V15C18.25 13.4812 17.0188 12.25 15.5 12.25ZM16.75 15.75V15C16.75 14.3096 16.1904 13.75 15.5 13.75C14.8096 13.75 14.25 14.3096 14.25 15V15.75H16.75Z',
  d14: 'M8.75 3.75H11.25V5.25H8.75V3.75Z',
  d15: 'M14.25 1.25H5.75V6.75H4.25V18C4.25 20.6234 6.37665 22.75 9 22.75H10V14.5H11.5309C11.777 12.5268 13.4602 11 15.5 11C15.584 11 15.6673 11.0026 15.75 11.0077V6.75H14.25V1.25ZM12.75 6.75V2.75H7.25V6.75H12.75Z',
} as const;

export const IconSecurityKeyUsbStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-key-usb-stroke-rounded IconSecurityKeyUsbStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSecurityKeyUsbDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-key-usb-duotone-rounded IconSecurityKeyUsbDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconSecurityKeyUsbTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-key-usb-twotone-rounded IconSecurityKeyUsbTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSecurityKeyUsbSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-key-usb-solid-rounded IconSecurityKeyUsbSolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSecurityKeyUsbBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-key-usb-bulk-rounded IconSecurityKeyUsbBulkRounded"
    >
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSecurityKeyUsbStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-key-usb-stroke-sharp IconSecurityKeyUsbStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconSecurityKeyUsbSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-key-usb-solid-sharp IconSecurityKeyUsbSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfSecurityKeyUsb: TheIconSelfPack = {
  name: 'SecurityKeyUsb',
  StrokeRounded: IconSecurityKeyUsbStrokeRounded,
  DuotoneRounded: IconSecurityKeyUsbDuotoneRounded,
  TwotoneRounded: IconSecurityKeyUsbTwotoneRounded,
  SolidRounded: IconSecurityKeyUsbSolidRounded,
  BulkRounded: IconSecurityKeyUsbBulkRounded,
  StrokeSharp: IconSecurityKeyUsbStrokeSharp,
  SolidSharp: IconSecurityKeyUsbSolidSharp,
};