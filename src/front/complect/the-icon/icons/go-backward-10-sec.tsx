import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 5L10.8961 3.45459C10.4851 2.87911 10.2795 2.59137 10.4093 2.32411C10.5391 2.05684 10.8689 2.04153 11.5286 2.01092C11.6848 2.00367 11.842 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927',
  d2: 'M7.99219 11.0036C8.52019 10.5836 9.00019 9.891 9.30019 10.0196C9.60019 10.1481 9.50419 10.5716 9.50419 11.2316C9.50419 11.8916 9.50419 14.6843 9.50419 16.0076',
  d3: 'M16.0022 12.5999C16.0022 11.2199 16.0682 10.8479 15.8042 10.4039C15.5402 9.95986 14.8802 9.99826 14.2202 9.99826C13.5602 9.99826 13.0802 9.95986 12.7622 10.3199C12.3722 10.7399 12.5402 11.5199 12.4922 12.5999C12.6002 14.0399 12.3062 15.1799 12.7562 15.6599C13.0802 16.0559 13.6553 15.9959 14.3402 16.0079C15.0201 15.9996 15.4322 16.0319 15.7682 15.6479C16.1402 15.3119 15.9602 13.9799 16.0022 12.5999Z',
  d4: 'M12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927C8.64715 2.01092 10.8689 2.04153 11.5286 2.01092C11.6848 2.00367 11.842 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z',
  d5: 'M7.99121 10.9967C8.51921 10.5767 8.99921 9.88415 9.29921 10.0127C9.59921 10.1412 9.50321 10.5647 9.50321 11.2247C9.50321 11.8847 9.50321 14.6774 9.50321 16.0007',
  d6: 'M16.0012 12.5931C16.0012 11.2131 16.0672 10.8411 15.8032 10.3971C15.5392 9.95302 14.8792 9.99142 14.2192 9.99142C13.5592 9.99142 13.0792 9.95302 12.7612 10.3131C12.3712 10.7331 12.5392 11.5131 12.4912 12.5931C12.5992 14.0331 12.3052 15.1731 12.7552 15.6531C13.0792 16.0491 13.6543 15.9891 14.3392 16.0011C15.0191 15.9928 15.4312 16.0251 15.7672 15.6411C16.1392 15.3051 15.9592 13.9731 16.0012 12.5931Z',
  d7: 'M7.99121 10.9968C8.51921 10.5768 8.99921 9.88416 9.29921 10.0128C9.59921 10.1413 9.50321 10.5648 9.50321 11.2248C9.50321 11.8848 9.50321 14.6775 9.50321 16.0008M16.0012 12.5931C16.0012 11.2131 16.0672 10.8411 15.8032 10.3971C15.5392 9.95302 14.8792 9.99142 14.2192 9.99142C13.5592 9.99142 13.0792 9.95302 12.7612 10.3131C12.3712 10.7331 12.5392 11.5131 12.4912 12.5931C12.5992 14.0331 12.3052 15.1731 12.7552 15.6531C13.0792 16.0491 13.6543 15.9891 14.3392 16.0011C15.0191 15.9928 15.4312 16.0251 15.7672 15.6411C16.1392 15.3051 15.9592 13.9731 16.0012 12.5931Z',
  d8: 'M20.7955 12C20.7955 16.8576 16.8576 20.7955 12 20.7955C7.1424 20.7955 3.20454 16.8576 3.20454 12C3.20454 9.12308 4.58476 6.56881 6.72329 4.9625C7.15484 4.63835 7.24191 4.02573 6.91776 3.59417C6.59361 3.16262 5.98099 3.07556 5.54943 3.39971C2.94058 5.3593 1.25 8.48236 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C11.8304 1.25 11.6075 1.25642 11.4398 1.26421C11.167 1.27664 10.8463 1.29127 10.5821 1.35116C10.2453 1.42751 9.80812 1.61931 9.56638 2.1171C9.31515 2.63443 9.4604 3.11204 9.60692 3.41217C9.72828 3.66078 9.92187 3.93145 10.0938 4.17184L11.2048 5.72712C11.5023 6.14365 12.0666 6.25664 12.4987 5.9996C12.5203 5.98676 12.5311 5.98034 12.5557 5.96122C12.5803 5.94211 12.5957 5.92667 12.6266 5.89581L14.4061 4.11627C14.6244 3.89797 14.7335 3.78881 14.8835 3.75961C15.0335 3.73042 15.1654 3.7863 15.4291 3.89808C18.583 5.23461 20.7955 8.35893 20.7955 12Z',
  d9: 'M8.40044 9.27867C9.33292 8.54257 10.5001 9.32268 10.5001 10.3162L10.5001 15.9999C10.5001 16.5521 10.0523 16.9999 9.50005 16.9999C8.94777 16.9999 8.50005 16.5521 8.50005 15.9999L8.50005 11.8661C8.10306 12.0958 7.58628 12.0279 7.2633 11.6761C6.88984 11.2692 6.91692 10.6366 7.3238 10.2631L8.34384 9.32687C8.36211 9.3101 8.38099 9.29403 8.40044 9.27867ZM14.2098 8.99985C14.2232 8.99985 14.2366 8.99985 14.25 8.99985C14.2634 8.99985 14.2768 8.99985 14.2902 8.99985C14.6064 8.9998 14.9142 8.99976 15.1727 9.02605C15.4589 9.05516 15.7933 9.12456 16.1111 9.33691C16.3295 9.48283 16.517 9.67033 16.6629 9.88871C16.8753 10.2065 16.9447 10.541 16.9738 10.8271C17.0001 11.0856 17.0001 11.3934 17 11.7097C17 11.7231 17 11.7364 17 11.7499V14.2499C17 14.2633 17 14.2767 17 14.29C17.0001 14.6063 17.0001 14.9141 16.9738 15.1726C16.9447 15.4588 16.8753 15.7932 16.6629 16.111C16.517 16.3294 16.3295 16.5169 16.1111 16.6628C15.7933 16.8751 15.4589 16.9445 15.1727 16.9737C14.9142 16.9999 14.6064 16.9999 14.2902 16.9999C14.2768 16.9999 14.2634 16.9999 14.25 16.9999C14.2366 16.9999 14.2232 16.9999 14.2098 16.9999C13.8936 16.9999 13.5858 16.9999 13.3273 16.9737C13.0411 16.9445 12.7067 16.8751 12.3889 16.6628C12.1705 16.5169 11.983 16.3294 11.8371 16.111C11.6247 15.7932 11.5553 15.4588 11.5262 15.1726C11.4999 14.9141 11.5 14.6063 11.5 14.29C11.5 14.2766 11.5 14.2633 11.5 14.2499V11.7499C11.5 11.7365 11.5 11.7231 11.5 11.7097C11.5 11.3934 11.4999 11.0856 11.5262 10.8271C11.5553 10.541 11.6247 10.2065 11.8371 9.88871C11.983 9.67033 12.1705 9.48283 12.3889 9.33691C12.7067 9.12456 13.0411 9.05516 13.3273 9.02605C13.5858 8.99976 13.8936 8.9998 14.2098 8.99985ZM13.5173 11.0171C13.5168 11.0211 13.5164 11.0252 13.5159 11.0295C13.5012 11.1743 13.5 11.3779 13.5 11.7499V14.2499C13.5 14.6218 13.5012 14.8255 13.5159 14.9702C13.5164 14.9745 13.5168 14.9786 13.5173 14.9826C13.5212 14.983 13.5254 14.9835 13.5297 14.9839C13.6744 14.9986 13.8781 14.9999 14.25 14.9999C14.6219 14.9999 14.8256 14.9986 14.9703 14.9839C14.9747 14.9835 14.9788 14.983 14.9828 14.9826C14.9832 14.9786 14.9836 14.9745 14.9841 14.9702C14.9988 14.8255 15 14.6218 15 14.2499V11.7499C15 11.3779 14.9988 11.1743 14.9841 11.0295C14.9836 11.0252 14.9832 11.0211 14.9827 11.0171C14.9788 11.0167 14.9747 11.0162 14.9703 11.0158C14.8256 11.0011 14.6219 10.9999 14.25 10.9999C13.8781 10.9999 13.6744 11.0011 13.5297 11.0158C13.5254 11.0162 13.5212 11.0167 13.5173 11.0171Z',
  d10: 'M12 5L10 2.20004C10.6462 2.06886 11.3151 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927',
  d11: 'M9.00503 16.2626L9.00487 9.60116C9.00486 9.51719 8.90762 9.47061 8.84219 9.52325L6.99023 11.013M12.1207 15.516H15.3778C15.433 15.516 15.4778 15.4712 15.4778 15.416V9.6101C15.4778 9.55487 15.433 9.5101 15.3778 9.5101H12.1207C12.0655 9.5101 12.0207 9.55487 12.0207 9.6101V15.416C12.0207 15.4712 12.0655 15.516 12.1207 15.516Z',
  d12: 'M11.8063 3.20663C11.8707 3.20524 11.9353 3.20455 12 3.20455C16.8576 3.20455 20.7955 7.1424 20.7955 12C20.7955 16.8576 16.8576 20.7955 12 20.7955C7.1424 20.7955 3.20455 16.8576 3.20455 12C3.20455 9.12308 4.58477 6.56881 6.72329 4.9625L5.54944 3.39971C2.94058 5.3593 1.25 8.48236 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C11.265 1.25 10.5462 1.32391 9.85104 1.46502C9.52654 1.53089 9.25747 1.7566 9.13614 2.06469C9.01482 2.37278 9.05776 2.72135 9.25022 2.9908L11.2048 5.72712L12.7952 4.59106L11.8063 3.20663Z',
  d13: 'M9.44569 8.10558C9.78447 8.27497 9.99847 8.62124 9.99847 9.00001V17H7.99847V11L7.59842 11.3L6.39844 9.7L8.39848 8.2C8.7015 7.97274 9.10691 7.93619 9.44569 8.10558ZM12.9984 10V15H14.4984V10H12.9984ZM11.9984 8.00001L15.4984 8.00001C15.7636 8.00001 16.018 8.10536 16.2055 8.2929C16.3931 8.48044 16.4984 8.73479 16.4984 9.00001V16C16.4984 16.5523 16.0507 17 15.4984 17H11.9984C11.4461 17 10.9984 16.5523 10.9984 16V9.00001C10.9984 8.44772 11.4461 8.00001 11.9984 8.00001Z',
} as const;

export const IconGoBackward10SecStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-10-sec-stroke-rounded IconGoBackward10SecStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoBackward10SecDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-10-sec-duotone-rounded IconGoBackward10SecDuotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoBackward10SecTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-10-sec-twotone-rounded IconGoBackward10SecTwotoneRounded"
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoBackward10SecSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-10-sec-solid-rounded IconGoBackward10SecSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconGoBackward10SecBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-10-sec-bulk-rounded IconGoBackward10SecBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGoBackward10SecStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-10-sec-stroke-sharp IconGoBackward10SecStrokeSharp"
    >
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

export const IconGoBackward10SecSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-10-sec-solid-sharp IconGoBackward10SecSolidSharp"
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

export const iconPackOfGoBackward10Sec: TheIconSelfPack = {
  name: 'GoBackward10Sec',
  StrokeRounded: IconGoBackward10SecStrokeRounded,
  DuotoneRounded: IconGoBackward10SecDuotoneRounded,
  TwotoneRounded: IconGoBackward10SecTwotoneRounded,
  SolidRounded: IconGoBackward10SecSolidRounded,
  BulkRounded: IconGoBackward10SecBulkRounded,
  StrokeSharp: IconGoBackward10SecStrokeSharp,
  SolidSharp: IconGoBackward10SecSolidSharp,
};