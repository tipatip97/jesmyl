import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.0003 18.5L18.2777 17.1138C18.4244 16.3806 18.8164 15.7048 18.9562 14.9703C18.9852 14.818 19.0003 14.6608 19.0003 14.5C19.0003 13.1193 17.881 12 16.5003 12C15.1196 12 14.0003 13.1193 14.0003 14.5C14.0003 14.6608 14.0155 14.818 14.0445 14.9703C14.1843 15.7048 14.5763 16.3806 14.723 17.1138L15.0003 18.5M18.0003 18.5H15.0003M18.0003 18.5L20.4966 19.1659C21.375 19.3611 22 20.1402 22 21.0401C22 21.5702 21.5702 22 21.0401 22H20.4966H12.5H11.9599C11.4298 22 11 21.5702 11 21.0401C11 20.1402 11.625 19.3611 12.5034 19.1659L15.0003 18.5',
  d2: 'M17 9V8C17 5.17157 17 3.75736 16.1213 2.87868C15.2426 2 13.8284 2 11 2H8C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22',
  d3: 'M7 8.66667C7 8.66667 7.625 8.66667 8.25 10C8.25 10 10.2353 6.66667 12 6',
  d4: 'M6 14H10',
  d5: 'M6 17H10',
  d6: 'M14.0003 14.5C14.0003 13.1193 15.1196 12 16.5003 12C17.881 12 19.0003 13.1193 19.0003 14.5C19.0003 14.6608 18.9852 14.818 18.9562 14.9703C18.8164 15.7048 18.4244 16.3806 18.2777 17.1138L18.0003 18.5L20.4966 19.1659C21.375 19.3611 22 20.1402 22 21.0401C22 21.5702 21.5702 22 21.0401 22H20.4966H12.5H11.9599C11.4298 22 11 21.5702 11 21.0401C11 20.1402 11.625 19.3611 12.5034 19.1659L15.0003 18.5L14.723 17.1138C14.5763 16.3806 14.1843 15.7048 14.0445 14.9703C14.0155 14.818 14.0003 14.6608 14.0003 14.5Z',
  d7: 'M13.4355 5.64687C13.6307 6.16352 13.37 6.74057 12.8534 6.93574C12.5903 7.03515 12.2477 7.26728 11.8527 7.6368C11.4692 7.99557 11.0908 8.43174 10.7509 8.86632C10.413 9.29839 10.1253 9.71327 9.92171 10.0209L9.60938 10.5116C9.41996 10.8295 9.07017 11.0173 8.7006 10.9991C8.33095 10.9808 8.00163 10.7598 7.84454 10.4247C7.58669 9.87461 7.37347 9.69325 7.31218 9.64933C6.84968 9.56143 6.5 9.15502 6.5 8.66694C6.5 8.11465 6.94772 7.66694 7.5 7.66694C7.58261 7.67042 7.77806 7.68814 7.89895 7.73121C8.07094 7.78362 8.26575 7.8733 8.47015 8.01865C8.55641 8.07999 8.64276 8.15004 8.72874 8.22971C8.8651 8.04055 9.01492 7.83958 9.17553 7.63422C9.55256 7.15213 10.0014 6.62998 10.4864 6.17624C10.96 5.73326 11.5274 5.29872 12.1466 5.0648C12.6632 4.86962 13.2403 5.13022 13.4355 5.64687Z',
  d8: 'M5.5 14C5.5 13.4477 5.94772 13 6.5 13H10.5C11.0523 13 11.5 13.4477 11.5 14C11.5 14.5523 11.0523 15 10.5 15H6.5C5.94772 15 5.5 14.5523 5.5 14Z',
  d9: 'M5.5 17C5.5 16.4477 5.94772 16 6.5 16H10.5C11.0523 16 11.5 16.4477 11.5 17C11.5 17.5523 11.0523 18 10.5 18H6.5C5.94772 18 5.5 17.5523 5.5 17Z',
  d10: 'M17.0003 13C15.6196 13 14.5003 14.1193 14.5003 15.5C14.5003 15.6608 14.5155 15.818 14.5445 15.9703C14.6843 16.7048 15.0763 17.3806 15.223 18.1138C15.2678 18.3379 15.4647 18.4993 15.6932 18.4993H18.3074C18.536 18.4993 18.7328 18.3379 18.7777 18.1138C18.9244 17.3806 19.3164 16.7048 19.4562 15.9703C19.4852 15.818 19.5003 15.6608 19.5003 15.5C19.5003 14.1193 18.381 13 17.0003 13Z',
  d11: 'M15.6314 19.5H18.3692C18.4347 19.5 18.4674 19.5 18.4998 19.5042C18.5321 19.5085 18.5638 19.5169 18.627 19.5338L20.9966 20.1659C21.875 20.3611 22.5 21.1402 22.5 22.0401C22.5 22.5702 22.0702 23 21.5401 23H12.4599C11.9298 23 11.5 22.5702 11.5 22.0401C11.5 21.1402 12.125 20.3611 13.0034 20.1659L15.3737 19.5338C15.4369 19.5169 15.4685 19.5085 15.5009 19.5042C15.5332 19.5 15.566 19.5 15.6314 19.5Z',
  d12: 'M8.42943 1H11.5706C12.9247 0.999966 14.0413 0.999936 14.9251 1.11875C15.8529 1.2435 16.6723 1.51547 17.3284 2.17158C17.9845 2.82768 18.2565 3.64711 18.3813 4.57494C18.5001 5.4587 18.5 6.57533 18.5 7.92946V10C18.5 10.5523 18.0523 11 17.5 11C16.9477 11 16.5 10.5523 16.5 10V8C16.5 6.55752 16.4979 5.57625 16.3991 4.84143C16.3042 4.13538 16.1368 3.80836 15.9142 3.58579C15.6916 3.36322 15.3646 3.19585 14.6586 3.10092C13.9238 3.00213 12.9425 3 11.5 3H8.5C7.05752 3 6.07625 3.00213 5.34143 3.10092C4.63538 3.19585 4.30836 3.36322 4.08579 3.58579C3.86322 3.80836 3.69585 4.13538 3.60092 4.84143C3.50213 5.57625 3.5 6.55752 3.5 8V16C3.5 17.4425 3.50213 18.4237 3.60092 19.1586C3.69585 19.8646 3.86322 20.1916 4.08579 20.4142C4.30836 20.6368 4.63538 20.8042 5.34143 20.8991C6.07625 20.9979 7.05752 21 8.5 21C9.05229 21 9.5 21.4477 9.5 22C9.5 22.5523 9.05229 23 8.5 23H8.42946C7.07533 23 5.9587 23.0001 5.07494 22.8813C4.14711 22.7565 3.32768 22.4845 2.67158 21.8284C2.01547 21.1723 1.7435 20.3529 1.61875 19.4251C1.49994 18.5413 1.49997 17.4247 1.5 16.0706V7.92943C1.49997 6.57531 1.49994 5.4587 1.61875 4.57494C1.7435 3.64711 2.01547 2.82768 2.67158 2.17158C3.32768 1.51547 4.14711 1.2435 5.07494 1.11875C5.9587 0.999936 7.07531 0.999966 8.42943 1Z',
  d13: 'M16.999 9V2H1.99902V22H7.99902',
  d14: 'M6.49902 8L8.24902 10L11.999 6',
  d15: 'M4.99902 14H9.99902M4.99902 17H9.99902',
  d16: 'M18.0022 18.4993H14.9908L10.9999 20.011L10.9995 21.9451C10.9997 21.9726 11.022 21.9949 11.0496 21.9949L21.9513 21.9949C21.9789 21.9949 22.0014 21.9724 22.0014 21.9448L22.0014 20.0023L18.0022 18.4993ZM18.0022 18.4993L18.2649 17.1442C18.3924 16.4689 18.7605 15.8466 18.9306 15.1407C19.0807 14.518 19.0077 14.0002 18.7676 13.4299C18.2048 12.3645 17.2744 12.0489 16.7342 12.0036C15.1359 11.921 14.3128 12.9755 14.0557 13.9479C13.9372 14.6444 13.9923 15.0507 14.311 15.8768C14.8054 17.0055 14.7989 17.4964 15.0542 18.6694',
  d17: 'M1.25 2.22727C1.25 1.68754 1.68455 1.25 2.22059 1.25H16.7794C17.3155 1.25 17.75 1.68754 17.75 2.22727V9.06818H15.8088V3.20455H3.19118V20.7955H8.04412V22.75H2.22059C1.68455 22.75 1.25 22.3125 1.25 21.7727V2.22727Z',
  d18: 'M14.737 17.7977C14.8212 17.7662 14.9104 17.75 15.0003 17.75H18.0003C18.0903 17.75 18.1795 17.7662 18.2637 17.7978L22.75 19.4803V22C22.75 22.4142 22.4142 22.75 22 22.75H11C10.5858 22.75 10.25 22.4142 10.25 22V19.4802L14.737 17.7977Z',
  d19: 'M12.7292 6.6838L8.22409 11.4892L5.74707 8.65836L7.25222 7.34135L8.27521 8.51048L11.2701 5.31592L12.7292 6.6838Z',
  d20: 'M11 15H6V13H11V15ZM10 18H6V16H10V18Z',
  d21: 'M14 14.5C14 13.1193 15.1193 12 16.5 12C17.8807 12 19 13.1193 19 14.5C19 14.6608 18.9848 14.818 18.9558 14.9703C18.885 15.3426 18.7493 15.6997 18.6137 16.057C18.5219 16.2987 18.4301 16.5405 18.3583 16.787C18.2408 16.7625 18.1209 16.75 18.0003 16.75H15.0003C14.8796 16.75 14.7594 16.7625 14.6417 16.7871C14.57 16.5406 14.4781 16.2988 14.3863 16.057C14.2507 15.6997 14.115 15.3426 14.0442 14.9703C14.0152 14.818 14 14.6608 14 14.5Z',
};

export const IconValidationApprovalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="validation-approval-stroke-rounded IconValidationApprovalStrokeRounded"
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
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconValidationApprovalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="validation-approval-duotone-rounded IconValidationApprovalDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconValidationApprovalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="validation-approval-twotone-rounded IconValidationApprovalTwotoneRounded"
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
        strokeLinecap="round" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconValidationApprovalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="validation-approval-solid-rounded IconValidationApprovalSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconValidationApprovalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="validation-approval-bulk-rounded IconValidationApprovalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconValidationApprovalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="validation-approval-stroke-sharp IconValidationApprovalStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconValidationApprovalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="validation-approval-solid-sharp IconValidationApprovalSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfValidationApproval: TheIconSelfPack = {
  name: 'ValidationApproval',
  StrokeRounded: IconValidationApprovalStrokeRounded,
  DuotoneRounded: IconValidationApprovalDuotoneRounded,
  TwotoneRounded: IconValidationApprovalTwotoneRounded,
  SolidRounded: IconValidationApprovalSolidRounded,
  BulkRounded: IconValidationApprovalBulkRounded,
  StrokeSharp: IconValidationApprovalStrokeSharp,
  SolidSharp: IconValidationApprovalSolidSharp,
};