import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 5L13.1039 3.45459C13.5149 2.87911 13.7205 2.59137 13.5907 2.32411C13.4609 2.05684 13.1311 2.04153 12.4714 2.01092C12.3152 2.00367 12.158 2 12 2C6.4772 2 2 6.47715 2 12C2 17.5228 6.4772 22 12 22C17.5229 22 22 17.5228 22 12C22 8.72836 20.4289 5.82368 18 3.99927',
  d2: 'M7.99219 11.0036C8.52019 10.5836 9.00019 9.891 9.30019 10.0196C9.60019 10.1481 9.50419 10.5716 9.50419 11.2316C9.50419 11.8916 9.50419 14.6843 9.50419 16.0076',
  d3: 'M16.0022 12.5999C16.0022 11.2199 16.0682 10.8479 15.8042 10.4039C15.5402 9.95986 14.8802 9.99826 14.2202 9.99826C13.5602 9.99826 13.0802 9.95986 12.7622 10.3199C12.3722 10.7399 12.5402 11.5199 12.4922 12.5999C12.6002 14.0399 12.3062 15.1799 12.7562 15.6599C13.0802 16.0559 13.6553 15.9959 14.3402 16.0079C15.0201 15.9996 15.4322 16.0319 15.7682 15.6479C16.1402 15.3119 15.9602 13.9799 16.0022 12.5999Z',
  d4: 'M12 5L13.1039 3.45459C13.5149 2.87911 13.7205 2.59137 13.5907 2.32411C13.4609 2.05684 13.1311 2.04153 12.4714 2.01092C12.3152 2.00367 12.158 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 8.72836 20.4289 5.82368 18 3.99927',
  d5: 'M12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927C8.64715 2.01092 10.8689 2.04153 11.5286 2.01092C11.6848 2.00367 11.842 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z',
  d6: 'M7.99121 10.9967C8.51921 10.5767 8.99921 9.88415 9.29921 10.0127C9.59921 10.1412 9.50321 10.5647 9.50321 11.2247C9.50321 11.8847 9.50321 14.6774 9.50321 16.0007',
  d7: 'M16.0012 12.5931C16.0012 11.2131 16.0672 10.8411 15.8032 10.3971C15.5392 9.95302 14.8792 9.99142 14.2192 9.99142C13.5592 9.99142 13.0792 9.95302 12.7612 10.3131C12.3712 10.7331 12.5392 11.5131 12.4912 12.5931C12.5992 14.0331 12.3052 15.1731 12.7552 15.6531C13.0792 16.0491 13.6543 15.9891 14.3392 16.0011C15.0191 15.9928 15.4312 16.0251 15.7672 15.6411C16.1392 15.3051 15.9592 13.9731 16.0012 12.5931Z',
  d8: 'M7.99121 10.9968C8.51921 10.5768 8.99921 9.88416 9.29921 10.0128C9.59921 10.1413 9.50321 10.5648 9.50321 11.2248C9.50321 11.8848 9.50321 14.6775 9.50321 16.0008M16.0012 12.5931C16.0012 11.2131 16.0672 10.8411 15.8032 10.3971C15.5392 9.95302 14.8792 9.99142 14.2192 9.99142C13.5592 9.99142 13.0792 9.95302 12.7612 10.3131C12.3712 10.7331 12.5392 11.5131 12.4912 12.5931C12.5992 14.0331 12.3052 15.1731 12.7552 15.6531C13.0792 16.0491 13.6543 15.9891 14.3392 16.0011C15.0191 15.9928 15.4312 16.0251 15.7672 15.6411C16.1392 15.3051 15.9592 13.9731 16.0012 12.5931Z',
  d9: 'M3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 9.12308 19.4152 6.56881 17.2767 4.9625C16.8452 4.63835 16.7581 4.02573 17.0822 3.59417C17.4064 3.16262 18.019 3.07556 18.4506 3.39971C21.0594 5.3593 22.75 8.48236 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.1696 1.25 12.3925 1.25642 12.5602 1.26421C12.833 1.27664 13.1537 1.29127 13.4179 1.35116C13.7547 1.42751 14.1919 1.61931 14.4336 2.1171C14.6848 2.63443 14.5396 3.11204 14.3931 3.41217C14.2717 3.66078 14.0781 3.93145 13.9062 4.17184L12.7952 5.72712C12.4977 6.14365 11.9334 6.25664 11.5013 5.9996C11.4797 5.98676 11.4689 5.98034 11.4443 5.96122C11.4197 5.94211 11.4043 5.92667 11.3734 5.89581L9.59391 4.11627C9.3756 3.89797 9.26645 3.78881 9.11648 3.75961C8.96651 3.73042 8.83463 3.7863 8.57088 3.89808C5.417 5.23461 3.20455 8.35893 3.20455 12Z',
  d10: 'M8.40044 9.27867C9.33292 8.54257 10.5001 9.32268 10.5001 10.3162L10.5001 15.9999C10.5001 16.5521 10.0523 16.9999 9.50005 16.9999C8.94777 16.9999 8.50005 16.5521 8.50005 15.9999L8.50005 11.8661C8.10306 12.0958 7.58628 12.0279 7.2633 11.6761C6.88984 11.2692 6.91692 10.6366 7.3238 10.2631L8.34384 9.32687C8.36211 9.3101 8.38099 9.29403 8.40044 9.27867ZM14.2098 8.99985C14.2232 8.99985 14.2366 8.99985 14.25 8.99985C14.2634 8.99985 14.2768 8.99985 14.2902 8.99985C14.6064 8.9998 14.9142 8.99976 15.1727 9.02605C15.4589 9.05516 15.7933 9.12456 16.1111 9.33691C16.3295 9.48283 16.517 9.67033 16.6629 9.88871C16.8753 10.2065 16.9447 10.541 16.9738 10.8271C17.0001 11.0856 17.0001 11.3934 17 11.7097C17 11.7231 17 11.7364 17 11.7499V14.2499C17 14.2633 17 14.2767 17 14.29C17.0001 14.6063 17.0001 14.9141 16.9738 15.1726C16.9447 15.4588 16.8753 15.7932 16.6629 16.111C16.517 16.3294 16.3295 16.5169 16.1111 16.6628C15.7933 16.8751 15.4589 16.9445 15.1727 16.9737C14.9142 16.9999 14.6064 16.9999 14.2902 16.9999C14.2768 16.9999 14.2634 16.9999 14.25 16.9999C14.2366 16.9999 14.2232 16.9999 14.2098 16.9999C13.8936 16.9999 13.5858 16.9999 13.3273 16.9737C13.0411 16.9445 12.7067 16.8751 12.3889 16.6628C12.1705 16.5169 11.983 16.3294 11.8371 16.111C11.6247 15.7932 11.5553 15.4588 11.5262 15.1726C11.4999 14.9141 11.5 14.6063 11.5 14.29C11.5 14.2766 11.5 14.2633 11.5 14.2499V11.7499C11.5 11.7365 11.5 11.7231 11.5 11.7097C11.5 11.3934 11.4999 11.0856 11.5262 10.8271C11.5553 10.541 11.6247 10.2065 11.8371 9.88871C11.983 9.67033 12.1705 9.48283 12.3889 9.33691C12.7067 9.12456 13.0411 9.05516 13.3273 9.02605C13.5858 8.99976 13.8936 8.9998 14.2098 8.99985ZM13.5173 11.0171C13.5168 11.0211 13.5164 11.0252 13.5159 11.0295C13.5012 11.1743 13.5 11.3779 13.5 11.7499V14.2499C13.5 14.6218 13.5012 14.8255 13.5159 14.9702C13.5164 14.9745 13.5168 14.9786 13.5173 14.9826C13.5212 14.983 13.5254 14.9835 13.5297 14.9839C13.6744 14.9986 13.8781 14.9999 14.25 14.9999C14.6219 14.9999 14.8256 14.9986 14.9703 14.9839C14.9747 14.9835 14.9788 14.983 14.9828 14.9826C14.9832 14.9786 14.9836 14.9745 14.9841 14.9702C14.9988 14.8255 15 14.6218 15 14.2499V11.7499C15 11.3779 14.9988 11.1743 14.9841 11.0295C14.9836 11.0252 14.9832 11.0211 14.9827 11.0171C14.9788 11.0167 14.9747 11.0162 14.9703 11.0158C14.8256 11.0011 14.6219 10.9999 14.25 10.9999C13.8781 10.9999 13.6744 11.0011 13.5297 11.0158C13.5254 11.0162 13.5212 11.0167 13.5173 11.0171Z',
  d11: 'M12 5L14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 8.72836 20.4289 5.82368 18 3.99927',
  d12: 'M9.00503 16.2626L9.00487 9.60116C9.00486 9.51719 8.90762 9.47061 8.84219 9.52325L6.99023 11.013M12.1207 15.516H15.3778C15.433 15.516 15.4778 15.4712 15.4778 15.416V9.6101C15.4778 9.55487 15.433 9.5101 15.3778 9.5101H12.1207C12.0655 9.5101 12.0207 9.55487 12.0207 9.6101V15.416C12.0207 15.4712 12.0655 15.516 12.1207 15.516Z',
  d13: 'M12.1937 3.20663C12.1293 3.20524 12.0647 3.20455 12 3.20455C7.1424 3.20455 3.20455 7.1424 3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 9.12308 19.4152 6.56881 17.2767 4.9625L18.4506 3.39971C21.0594 5.3593 22.75 8.48236 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.735 1.25 13.4538 1.32391 14.149 1.46502C14.4735 1.53089 14.7425 1.7566 14.8639 2.06469C14.9852 2.37278 14.9422 2.72135 14.7498 2.9908L12.7952 5.72712L11.2048 4.59106L12.1937 3.20663Z',
  d14: 'M9.44569 8.10558C9.78447 8.27497 9.99847 8.62124 9.99847 9.00001V17H7.99847V11L7.59842 11.3L6.39844 9.7L8.39848 8.2C8.7015 7.97274 9.10691 7.93619 9.44569 8.10558ZM12.9984 10V15H14.4984V10H12.9984ZM11.9984 8.00001L15.4984 8.00001C15.7636 8.00001 16.018 8.10536 16.2055 8.2929C16.3931 8.48044 16.4984 8.73479 16.4984 9.00001V16C16.4984 16.5523 16.0507 17 15.4984 17H11.9984C11.4461 17 10.9984 16.5523 10.9984 16V9.00001C10.9984 8.44772 11.4461 8.00001 11.9984 8.00001Z',
};

export const IconGoForward10SecStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-10-sec-stroke-rounded IconGoForward10SecStrokeRounded"
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

export const IconGoForward10SecDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-10-sec-duotone-rounded IconGoForward10SecDuotoneRounded"
    >
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

export const IconGoForward10SecTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-10-sec-twotone-rounded IconGoForward10SecTwotoneRounded"
    >
      <path 
        d={d.d4} 
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
      />
    </TheIconWrapper>
  );
};

export const IconGoForward10SecSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-10-sec-solid-rounded IconGoForward10SecSolidRounded"
    >
      <path 
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

export const IconGoForward10SecBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-10-sec-bulk-rounded IconGoForward10SecBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconGoForward10SecStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-10-sec-stroke-sharp IconGoForward10SecStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGoForward10SecSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-10-sec-solid-sharp IconGoForward10SecSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfGoForward10Sec: TheIconSelfPack = {
  name: 'GoForward10Sec',
  StrokeRounded: IconGoForward10SecStrokeRounded,
  DuotoneRounded: IconGoForward10SecDuotoneRounded,
  TwotoneRounded: IconGoForward10SecTwotoneRounded,
  SolidRounded: IconGoForward10SecSolidRounded,
  BulkRounded: IconGoForward10SecBulkRounded,
  StrokeSharp: IconGoForward10SecStrokeSharp,
  SolidSharp: IconGoForward10SecSolidSharp,
};