import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.002 11V10C20.002 6.22876 20.002 4.34315 18.7615 3.17157C17.521 2 15.5245 2 11.5314 2H10.4726C6.47947 2 4.48293 2 3.24244 3.17157C2.00195 4.34315 2.00195 6.22876 2.00195 10V14C2.00195 17.7712 2.00195 19.6569 3.24244 20.8284C4.48293 22 6.47946 22 10.4726 22H11.002',
  d2: 'M7.00195 7H15.002',
  d3: 'M7.00195 12H15.002',
  d4: 'M20.8624 14.4393L21.5567 15.1317C22.1441 15.7175 22.1441 16.6672 21.5567 17.253L17.9192 20.9487C17.6331 21.234 17.2671 21.4264 16.8693 21.5005L14.6149 21.9885C14.259 22.0656 13.942 21.7504 14.0183 21.3952L14.4981 19.1599C14.5724 18.7632 14.7653 18.3982 15.0515 18.1129L18.7352 14.4393C19.3226 13.8536 20.275 13.8536 20.8624 14.4393Z',
  d5: 'M18.774 3.17157C17.5323 2 15.5338 2 11.5368 2H10.477C6.47997 2 4.48147 2 3.23976 3.17157C1.99805 4.34315 1.99805 6.22876 1.99805 10V14C1.99805 17.7712 1.99805 19.6569 3.23976 20.8284C4.48147 22 6.47996 22 10.477 22H11.5368C12.5874 22 13.5 22 14.297 21.9787C14.2302 21.9602 14.1747 21.9289 14.1279 21.8821C13.9328 21.6872 14.0066 21.3422 14.1543 20.6523C14.1935 20.4689 14.2258 20.2805 14.2582 20.0912C14.3817 19.3698 14.5075 18.6352 15.0315 18.1117L18.3426 14.8039C18.6763 14.4705 18.8431 14.3039 19.0167 14.2037C19.3235 14.0268 19.6766 13.9651 20.0157 14.0187C20.0157 14.0125 20.0157 14.0062 20.0157 14V10C20.0157 6.22876 20.0157 4.34315 18.774 3.17157Z',
  d6: 'M20.0157 11V10C20.0157 6.22876 20.0157 4.34315 18.774 3.17157C17.5323 2 15.5338 2 11.5368 2H10.477C6.47997 2 4.48147 2 3.23976 3.17157C1.99805 4.34315 1.99805 6.22876 1.99805 10V14C1.99805 17.7712 1.99805 19.6569 3.23976 20.8284C4.48147 22 6.47996 22 10.477 22H11.0069',
  d7: 'M7.00293 7H15.0108',
  d8: 'M7.00293 12H15.0108',
  d9: 'M20.8687 14.4393L21.5617 15.1317C22.1481 15.7175 22.1481 16.6672 21.5617 17.253L17.9307 20.9487C17.6452 21.234 17.2798 21.4264 16.8827 21.5005L14.6324 21.9885C14.2771 22.0656 13.9606 21.7504 14.0368 21.3953L14.5158 19.1599C14.59 18.7632 14.7825 18.3982 15.0681 18.1129L18.7453 14.4393C19.3316 13.8536 20.2824 13.8536 20.8687 14.4393Z',
  d10: 'M11.5833 1.25H11.5833H10.4167H10.4167C8.46584 1.24999 6.9294 1.24998 5.72885 1.40242C4.49987 1.55847 3.50965 1.88575 2.72552 2.62631C1.93534 3.37259 1.5806 4.32468 1.41255 5.50521C1.24997 6.64729 1.24998 8.1054 1.25 9.94066V9.94067V14.0593V14.0593C1.24998 15.8946 1.24997 17.3527 1.41255 18.4948C1.5806 19.6753 1.93534 20.6274 2.72552 21.3737C3.50965 22.1142 4.49987 22.4415 5.72885 22.5976C6.92941 22.75 8.46586 22.75 10.4167 22.75L11.0646 22.75C11.46 22.75 11.6577 22.75 11.747 22.6513C11.8363 22.5527 11.8126 22.3146 11.7653 21.8385C11.7443 21.6273 11.7484 21.4445 11.757 21.31C11.7719 21.0765 11.8274 20.7703 11.8595 20.6C11.9161 20.2997 12.1781 18.9267 12.2251 18.7423C12.3859 18.1125 12.6944 17.2558 13.4295 16.5207L16.841 13.1089C17.0767 12.8718 17.4379 12.5085 17.8767 12.2552C18.5243 11.8813 19.2552 11.715 19.977 11.7561C20.367 11.7784 20.562 11.7895 20.656 11.7007C20.75 11.6119 20.75 11.4403 20.75 11.0971V9.94074V9.94072V9.94071C20.75 8.10544 20.75 6.64729 20.5875 5.50521C20.4194 4.32468 20.0647 3.37259 19.2745 2.62631C18.4904 1.88575 17.5001 1.55847 16.2712 1.40242C15.0706 1.24998 13.5342 1.24999 11.5833 1.25ZM6 7C6 6.44772 6.44772 6 7 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H7C6.44772 8 6 7.55228 6 7ZM7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H7Z',
  d11: 'M18.6269 13.5542C19.3294 13.1486 20.195 13.1486 20.8976 13.5542C21.1592 13.7053 21.4533 13.9999 21.7264 14.2735C22.0001 14.5467 22.2947 14.8407 22.4457 15.1023C22.8513 15.8049 22.8513 16.6705 22.4457 17.3731C22.2947 17.6347 22.0599 17.869 21.7862 18.1421L18.4185 21.5097C17.9532 21.975 17.3913 22.1924 16.8865 22.3213C16.6345 22.3856 15.4601 22.5986 15.4601 22.5986C15.4601 22.5986 14.848 22.7297 14.5947 22.7458C14.3157 22.7636 13.9113 22.7362 13.5875 22.4124C13.2637 22.0887 13.2364 21.6842 13.2541 21.4052C13.2702 21.152 13.4013 20.5398 13.4013 20.5398C13.4013 20.5398 13.6143 19.3654 13.6786 19.1134C13.8075 18.6086 14.025 18.0467 14.4903 17.5814L17.8579 14.2137C18.131 13.94 18.3653 13.7053 18.6269 13.5542Z',
  d12: 'M16.2712 1.40242C15.0706 1.24998 13.5342 1.24999 11.5833 1.25H10.4167C8.46585 1.24999 6.92941 1.24998 5.72885 1.40242C4.49987 1.55847 3.50965 1.88575 2.72552 2.62631C1.93534 3.37259 1.5806 4.32468 1.41255 5.50521C1.24997 6.64729 1.24998 8.1054 1.25 9.94067V14.0593C1.24998 15.8946 1.24997 17.3527 1.41255 18.4948C1.5806 19.6753 1.93534 20.6274 2.72552 21.3737C3.50965 22.1142 4.49987 22.4415 5.72885 22.5976C6.92941 22.75 8.46586 22.75 10.4167 22.75L11.0646 22.75C11.46 22.75 11.6577 22.75 11.747 22.6513C11.8363 22.5527 11.8126 22.3146 11.7653 21.8385C11.7443 21.6273 11.7484 21.4445 11.757 21.31C11.7719 21.0765 11.8274 20.7703 11.8595 20.6C11.9161 20.2997 12.1781 18.9267 12.2251 18.7423C12.3859 18.1125 12.6944 17.2558 13.4295 16.5207L16.841 13.1089C17.0767 12.8718 17.4379 12.5085 17.8767 12.2552C18.5243 11.8813 19.2552 11.715 19.977 11.7561C20.367 11.7784 20.562 11.7895 20.656 11.7007C20.75 11.6119 20.75 11.4403 20.75 11.0971V9.94074C20.75 8.10546 20.75 6.6473 20.5875 5.50521C20.4194 4.32468 20.0647 3.37259 19.2745 2.62631C18.4904 1.88575 17.5001 1.55847 16.2712 1.40242Z',
  d13: 'M6 7C6 6.44772 6.44772 6 7 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H7C6.44772 8 6 7.55228 6 7Z',
  d14: 'M6 12C6 11.4477 6.44772 11 7 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H7C6.44772 13 6 12.5523 6 12Z',
  d15: 'M10.9777 22H1.95898L1.95915 2H19.9964V11',
  d16: 'M6.96875 7H14.9854M6.96875 12H14.9854',
  d17: 'M21.9321 16.4331L19.5423 14.0815C19.5031 14.0429 19.4399 14.0432 19.401 14.0822L13.9873 19.5078V21.996H16.4964L21.9325 16.5751C21.9719 16.5358 21.9717 16.4721 21.9321 16.4331Z',
  d18: 'M1.25017 1.99999C1.25018 1.58578 1.58596 1.25 2.00017 1.25H20C20.4142 1.25 20.75 1.58579 20.75 2V13.1287L20.25 12.6287L13.25 19.6287V22.75H2C1.80109 22.75 1.61032 22.671 1.46967 22.5303C1.32902 22.3897 1.25 22.1989 1.25 22L1.25017 1.99999ZM7 8H15V6H7V8ZM7 13H15V11H7V13Z',
  d19: 'M14.75 20.25V22.75H17.25L22.75 17.25L20.25 14.75L14.75 20.25Z',
};

export const IconLicenseDraftStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-draft-stroke-rounded IconLicenseDraftStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconLicenseDraftDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-draft-duotone-rounded IconLicenseDraftDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseDraftTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-draft-twotone-rounded IconLicenseDraftTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseDraftSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-draft-solid-rounded IconLicenseDraftSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseDraftBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-draft-bulk-rounded IconLicenseDraftBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseDraftStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-draft-stroke-sharp IconLicenseDraftStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseDraftSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-draft-solid-sharp IconLicenseDraftSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLicenseDraft: TheIconSelfPack = {
  name: 'LicenseDraft',
  StrokeRounded: IconLicenseDraftStrokeRounded,
  DuotoneRounded: IconLicenseDraftDuotoneRounded,
  TwotoneRounded: IconLicenseDraftTwotoneRounded,
  SolidRounded: IconLicenseDraftSolidRounded,
  BulkRounded: IconLicenseDraftBulkRounded,
  StrokeSharp: IconLicenseDraftStrokeSharp,
  SolidSharp: IconLicenseDraftSolidSharp,
};