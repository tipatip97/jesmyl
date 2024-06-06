import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.8453 2.47782C11.4088 2.15927 11.6906 2 12 2C12.3094 2 12.5912 2.15927 13.1547 2.47782L19.8453 6.25983C20.4088 6.57838 20.6906 6.73766 20.8453 7C21 7.26234 21 7.58089 21 8.21799V15.782C21 16.4191 21 16.7377 20.8453 17C20.6906 17.2623 20.4088 17.4216 19.8453 17.7402L13.1547 21.5222C12.5912 21.8407 12.3094 22 12 22C11.6906 22 11.4088 21.8407 10.8453 21.5222L4.1547 17.7402C3.59117 17.4216 3.3094 17.2623 3.1547 17C3 16.7377 3 16.4191 3 15.782V8.21799C3 7.58089 3 7.26234 3.1547 7C3.3094 6.73766 3.59117 6.57838 4.1547 6.25983L10.8453 2.47782Z',
  d2: 'M15.5 4.27051L13.134 5.55062C12.5803 5.85019 12.3035 5.99998 12 5.99998C11.6965 5.99998 11.4197 5.85019 10.866 5.55062L8.5 4.27051',
  d3: 'M12 11.6154V22M12 11.6154L20.5 7M12 11.6154L3.5 7',
  d4: 'M3 12L5.89443 13.5585C6.43234 13.8482 6.7013 13.993 6.85065 14.2532C7 14.5135 7 14.8373 7 15.485V19',
  d5: 'M21 12L18.1056 13.5585C17.5677 13.8482 17.2987 13.993 17.1493 14.2532C17 14.5135 17 14.8373 17 15.485V19',
  d6: 'M17 15.7639V15.485C17 14.8373 17 14.5135 17.1493 14.2532C17.2987 13.993 17.5677 13.8482 18.1056 13.5585L18.1056 13.5585C19.3711 12.8771 20.0039 12.5364 20.4801 12.797C20.5021 12.8091 20.5237 12.8219 20.5447 12.8356C21 13.1313 21 13.85 21 15.2874V17L19.8944 17.5528C18.5972 18.2014 17.9485 18.5257 17.4743 18.2326C17 17.9395 17 17.2143 17 15.7639Z',
  d7: 'M6.85065 14.2532C6.7013 13.993 6.43234 13.8482 5.89443 13.5585C4.62889 12.8771 3.99612 12.5364 3.5199 12.797C3.49787 12.8091 3.47631 12.8219 3.45525 12.8356C3 13.1313 3 13.85 3 15.2874V16.5L4.01928 17.1371C5.29878 17.9367 5.93852 18.3366 6.4358 18.0958C6.46891 18.0798 6.50112 18.0619 6.53226 18.0423C7 17.7483 7 16.9938 7 15.485C7 14.8373 7 14.5135 6.85065 14.2532Z',
  d8: 'M12 6.00291C11.6965 6.00291 11.4197 5.85312 10.866 5.55355L8.5 4.27344L12 2L15.5 4.27344L13.134 5.55355C12.5803 5.85312 12.3035 6.00291 12 6.00291Z',
  d9: 'M15.5 4.27344L13.134 5.55355C12.5803 5.85312 12.3035 6.00291 12 6.00291C11.6965 6.00291 11.4197 5.85312 10.866 5.55355L8.5 4.27344',
  d10: 'M15.5 4.26953L13.134 5.54964C12.5803 5.84922 12.3035 5.999 12 5.999C11.6965 5.999 11.4197 5.84922 10.866 5.54964L8.5 4.26953',
  d11: 'M21.5854 12.7014C21.7755 12.6064 22 12.7434 22 12.9546V15.9274C22 16.2266 22 16.5051 21.9763 16.7409C21.9176 17.3235 21.6402 17.7932 21.1584 18.1311C20.9629 18.2682 20.7178 18.4066 20.4522 18.5566L17.8977 19.9998V15.5912C17.8977 15.2446 17.8985 15.0386 17.9133 14.8844C17.9267 14.7444 17.9424 14.6968 18.0573 14.618C18.1727 14.5391 18.3369 14.4495 18.627 14.2934L21.5854 12.7014Z',
  d12: 'M2.41532 12.7014C2.22499 12.6063 2.00036 12.7435 2.00036 12.9548V15.9274C2.00031 16.4704 1.97931 17.0493 2.26565 17.5346C2.55197 18.0198 3.07189 18.2876 3.54797 18.5566L6.10302 20V15.5912C6.10302 15.2446 6.1022 15.0386 6.08739 14.8844C6.07395 14.7445 6.05837 14.6968 5.94334 14.618C5.82803 14.5391 5.66375 14.4495 5.37365 14.2934L2.41532 12.7014Z',
  d13: 'M12.0002 1C11.4351 1 10.9393 1.30567 10.4645 1.57398L8.60423 2.62491C8.3137 2.78905 8.16843 2.87111 8.17114 2.99232C8.17384 3.11353 8.32262 3.18915 8.62018 3.34039L11.2033 4.73209C11.4998 4.8924 11.676 4.98679 11.8157 5.04608C11.9624 5.10835 12.0383 5.10835 12.185 5.04608C12.3247 4.98679 12.5009 4.8924 12.7974 4.73209L15.3803 3.34048C15.6779 3.18924 15.8267 3.11362 15.8294 2.99241C15.8321 2.8712 15.6868 2.78913 15.3963 2.625L13.5359 1.574C13.0611 1.30569 12.5653 1 12.0002 1Z',
  d14: 'M3.75954 5.66484C3.52033 5.80109 3.40073 5.86922 3.39781 5.982C3.3978 5.98247 3.39779 5.98299 3.39778 5.98347C3.3957 6.09626 3.51387 6.17071 3.75022 6.31959L3.87864 6.40049L11.0404 10.3199C11.5101 10.5769 11.7449 10.7054 12.0006 10.7054C12.2563 10.7054 12.4911 10.5769 12.9608 10.3199L20.1286 6.3972L20.2485 6.32465C20.4918 6.17755 20.6134 6.104 20.6119 5.9895C20.6104 5.875 20.4874 5.80494 20.2414 5.66482L17.9916 4.38302C17.7617 4.25206 17.6468 4.18659 17.5203 4.18377C17.3938 4.18096 17.2761 4.24126 17.0407 4.36187L15.8491 4.97222L13.4658 6.27188C13.0101 6.52043 12.5361 6.80176 12.0007 6.80176C11.4653 6.80176 10.9913 6.52043 10.5356 6.27188L8.15225 4.97222L6.9605 4.36178C6.72505 4.24118 6.60732 4.18087 6.48084 4.18369C6.35437 4.1865 6.23944 4.25198 6.00958 4.38294L3.75954 5.66484Z',
  d15: 'M21.7485 7.78253C21.7423 7.54014 21.7392 7.41895 21.6382 7.36368C21.5372 7.30841 21.4261 7.3756 21.2039 7.50997L20.8865 7.70194L20.8751 7.70871L20.8585 7.71805L13.7904 11.5861C13.2835 11.8635 13.0301 12.0022 12.8903 12.238C12.7506 12.4738 12.7506 12.7627 12.7506 13.3406V22.1456C12.7506 22.4207 12.7506 22.5582 12.8497 22.6161C12.9488 22.674 13.0644 22.6089 13.2954 22.4786C13.3631 22.4405 13.4304 22.4019 13.4978 22.3635L15.7457 21.0828C15.9921 20.9424 16.1153 20.8722 16.183 20.7557C16.2507 20.6392 16.2507 20.4975 16.2507 20.2139L16.2507 15.5751C16.2506 15.2749 16.2506 14.9987 16.2728 14.7662C16.327 14.197 16.5857 13.7281 17.0585 13.4016C17.2452 13.2726 17.4778 13.1464 17.7226 13.0136L20.6451 11.4276C20.6488 11.4256 20.6524 11.4236 20.6562 11.4217C20.8363 11.3278 21.0178 11.2363 21.1996 11.1455C21.4673 11.0117 21.6011 10.9448 21.6758 10.8239C21.7505 10.7031 21.7505 10.5535 21.7505 10.2543V8.25009C21.7505 8.0951 21.7524 7.93867 21.7485 7.78253Z',
  d16: 'M10.2069 11.5932C10.7121 11.8615 10.9647 11.9956 11.1076 12.2334C11.2506 12.4712 11.2506 12.761 11.2506 13.3406V22.1457C11.2506 22.4208 11.2506 22.5583 11.1515 22.6162C11.0524 22.6741 10.9368 22.609 10.7058 22.4787C10.638 22.4405 10.5706 22.4019 10.5031 22.3634L8.25564 21.083C8.00926 20.9426 7.88608 20.8724 7.81837 20.7559C7.75066 20.6394 7.75066 20.4976 7.75066 20.2141L7.75067 15.5751C7.75069 15.2749 7.75071 14.9987 7.72856 14.7662C7.67434 14.197 7.41566 13.7281 6.94286 13.4016C6.7561 13.2726 6.52351 13.1464 6.27868 13.0136L3.35624 11.4276C3.17412 11.3287 2.98866 11.2352 2.80249 11.1431C2.53479 11.0106 2.40093 10.9444 2.32572 10.8232C2.2505 10.7021 2.2505 10.5528 2.2505 10.2541V8.25011C2.25049 8.09103 2.24842 7.93033 2.2528 7.76998C2.25946 7.52606 2.26279 7.4041 2.36529 7.34934C2.4678 7.29457 2.57859 7.36436 2.80017 7.50394L3.1031 7.69476C5.37221 9.12403 7.82653 10.329 10.2069 11.5932Z',
  d17: 'M21 6.5L12 2L3 6.5V17L12 22L21 17V6.5Z',
  d18: 'M16 4L12 5.99998L8 4',
  d19: 'M3 12L7 14V19',
  d20: 'M21 12L17 14V19',
  d21: 'M20.917 5.83042L11.999 10.9141L3.08187 5.83097L6.32276 4.22519L11.9995 7.03783L17.6767 4.22493L20.917 5.83042Z',
  d22: 'M21.75 7.07041L12.749 12.2014V22.5L16.25 20.5726V13.7368L21.75 10.1034V7.07041Z',
  d23: 'M21.75 11.8898V17.1074C21.75 17.3773 21.6023 17.626 21.3642 17.7571L17.75 19.7468V14.5323L21.75 11.8898Z',
  d24: 'M11.249 22.4989L7.74906 20.5721V13.7033L2.25 10.5895V7.07157L11.249 12.2014V22.4989Z',
  d25: 'M2.63577 17.7571L6.24906 19.7463V14.5659L2.25 12.3014V17.1074C2.25 17.3773 2.39767 17.626 2.63577 17.7571Z',
  d26: 'M11.6646 1.57846C11.8757 1.47385 12.1243 1.47385 12.3354 1.57846L15.9997 3.394L11.9995 5.37597L7.99982 3.39426L11.6646 1.57846Z',
};

export const IconCodesandboxStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="codesandbox-stroke-rounded IconCodesandboxStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCodesandboxDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="codesandbox-duotone-rounded IconCodesandboxDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
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
    </TheIconWrapper>
  );
};

export const IconCodesandboxTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="codesandbox-twotone-rounded IconCodesandboxTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
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
    </TheIconWrapper>
  );
};

export const IconCodesandboxSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="codesandbox-solid-rounded IconCodesandboxSolidRounded"
    >
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
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCodesandboxBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="codesandbox-bulk-rounded IconCodesandboxBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCodesandboxStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="codesandbox-stroke-sharp IconCodesandboxStrokeSharp"
    >
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCodesandboxSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="codesandbox-solid-sharp IconCodesandboxSolidSharp"
    >
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCodesandbox: TheIconSelfPack = {
  name: 'Codesandbox',
  StrokeRounded: IconCodesandboxStrokeRounded,
  DuotoneRounded: IconCodesandboxDuotoneRounded,
  TwotoneRounded: IconCodesandboxTwotoneRounded,
  SolidRounded: IconCodesandboxSolidRounded,
  BulkRounded: IconCodesandboxBulkRounded,
  StrokeSharp: IconCodesandboxStrokeSharp,
  SolidSharp: IconCodesandboxSolidSharp,
};