import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 15H13',
  d2: 'M12 18V22',
  d3: 'M8 22H16',
  d4: 'M9 2.00098C6.37454 2.00933 4.9565 2.08726 3.91891 2.81379C3.48891 3.11488 3.1149 3.48888 2.81382 3.91888C2 5.08113 2 6.72074 2 9.99997C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C21.9127 15.0435 21.9906 13.6254 21.999 11',
  d5: 'M19.5 4.14631L19.563 4.10086C20.6208 3.3371 21.1498 2.95522 21.5749 3.13961C22 3.324 22 3.9353 22 5.15791V5.84209C22 7.0647 22 7.676 21.5749 7.86039C21.1498 8.04478 20.6208 7.6629 19.563 6.89914L19.5 6.85369M15.5 9H16C17.6499 9 18.4749 9 18.9874 8.55151C19.5 8.10301 19.5 7.38118 19.5 5.9375V5.0625C19.5 3.61882 19.5 2.89699 18.9874 2.44849C18.4749 2 17.6499 2 16 2H15.5C13.8501 2 13.0251 2 12.5126 2.44849C12 2.89699 12 3.61882 12 5.0625V5.9375C12 7.38118 12 8.10301 12.5126 8.55151C13.0251 9 13.8501 9 15.5 9Z',
  d6: 'M10 2H14C13.2 2 12.675 2.299 12.5126 2.44849C12 2.89699 12 3.61882 12 5.0625V5.9375C12 7.38118 12 8.10301 12.5126 8.55151C13.0251 9 13.8501 9 15.5 9H16C17.6499 9 18.4749 9 18.9874 8.55151L19.563 6.89914C20.6208 7.6629 21.1498 8.04478 21.5749 7.86039C21.815 7.75625 21.9195 7.51592 21.965 7.10618C22 7.90273 22 8.85066 22 10C22 13.2792 22 14.9188 21.1862 16.0811C20.8851 16.5111 20.5111 16.8851 20.0811 17.1862C18.9188 18 17.2792 18 14 18H10C6.72077 18 5.08116 18 3.91891 17.1862C3.48891 16.8851 3.1149 16.5111 2.81382 16.0811C2 14.9188 2 13.2792 2 10C2 6.72077 2 5.08116 2.81382 3.91891C3.1149 3.48891 3.48891 3.1149 3.91891 2.81382C5.08116 2 6.72077 2 10 2Z',
  d7: 'M9 2.00195C6.37454 2.01031 4.9565 2.08824 3.91891 2.81476C3.48891 3.11585 3.1149 3.48986 2.81382 3.91985C2 5.0821 2 6.72172 2 10.0009C2 13.2802 2 14.9198 2.81382 16.082C3.1149 16.512 3.48891 16.886 3.91891 17.1871C5.08116 18.0009 6.72077 18.0009 10 18.0009H14C17.2792 18.0009 18.9188 18.0009 20.0811 17.1871C20.5111 16.886 20.8851 16.512 21.1862 16.082C21.9127 15.0445 21.9906 13.6264 21.999 11.0009',
  d8: 'M10 14C10 13.4477 10.4477 13 11 13H13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H11C10.4477 15 10 14.5523 10 14Z',
  d9: 'M10 1.99682C10.0018 2.5491 9.55547 2.99824 9.00318 2.99999C7.68287 3.0042 6.73643 3.02687 5.99979 3.12783C5.28059 3.2264 4.83666 3.39097 4.49248 3.63196C4.15804 3.86614 3.86715 4.15703 3.63297 4.49148C3.36317 4.87679 3.18926 5.38671 3.09622 6.26941C3.0013 7.16991 3 8.33776 3 9.999C3 11.6602 3.0013 12.8281 3.09622 13.7286C3.18926 14.6113 3.36317 15.1212 3.63297 15.5065C3.86715 15.841 4.15804 16.1318 4.49248 16.366C4.8778 16.6358 5.38772 16.8097 6.27041 16.9028C7.17091 16.9977 8.33876 16.999 10 16.999H14C15.6612 16.999 16.8291 16.9977 17.7296 16.9028C18.6123 16.8097 19.1222 16.6358 19.5075 16.366C19.842 16.1318 20.1329 15.841 20.367 15.5065C20.608 15.1623 20.7726 14.7184 20.8712 13.9992C20.9721 13.2626 20.9948 12.3161 20.999 10.9958C21.0008 10.4435 21.4499 9.99724 22.0022 9.999C22.5545 10.0008 23.0007 10.4499 22.999 11.0022C22.9948 12.3073 22.9744 13.3826 22.8526 14.2708C22.7285 15.1764 22.4909 15.9602 22.0053 16.6537C21.6373 17.1792 21.1802 17.6363 20.6547 18.0043C19.8777 18.5483 18.9867 18.7813 17.9392 18.8918C16.9216 18.999 15.6482 18.999 14.0567 18.999H13.4C13.0229 18.999 13 19.0219 13 19.399V19.999C13 20.8263 13.1727 20.999 14 20.999H16C16.5523 20.999 17 21.4467 17 21.999C17 22.5513 16.5523 22.999 16 22.999H8C7.44772 22.999 7 22.5513 7 21.999C7 21.4467 7.44772 20.999 8 20.999H10C10.8273 20.999 11 20.8263 11 19.999V19.399C11 19.0219 10.9771 18.999 10.6 18.999H9.94335C8.35183 18.999 7.07839 18.999 6.06076 18.8918C5.01328 18.7813 4.12227 18.5483 3.34533 18.0043C2.81978 17.6363 2.36266 17.1792 1.99466 16.6537C1.45065 15.8767 1.21765 14.9857 1.10724 13.9382C0.999973 12.9206 0.999985 11.6472 1 10.0557V9.94227C0.999985 8.35078 0.999973 7.07737 1.10724 6.05976C1.21765 5.01227 1.45065 4.12126 1.99466 3.34433C2.36266 2.81877 2.81978 2.36166 3.34533 1.99366C4.03875 1.50812 4.82263 1.27047 5.72822 1.14635C6.61636 1.02463 7.69168 1.00416 8.99682 1.00001C9.5491 0.998247 9.99824 1.44453 10 1.99682Z',
  d10: 'M16.2957 1H15.7043C14.9183 0.99998 14.2627 0.999962 13.7422 1.0612C13.1991 1.12509 12.6894 1.26594 12.2687 1.63406C11.8336 2.0148 11.6527 2.49838 11.5728 3.0184C11.4999 3.49266 11.5 4.08285 11.5 4.75767V5.74233C11.5 6.41715 11.4999 7.00734 11.5728 7.4816C11.6527 8.00163 11.8336 8.48521 12.2687 8.86594C12.6894 9.23407 13.1991 9.37492 13.7422 9.43881C14.2627 9.50005 14.9183 9.50003 15.7043 9.5H16.2957C17.0817 9.50003 17.7373 9.50005 18.2579 9.43881C18.8009 9.37492 19.3106 9.23407 19.7313 8.86594C20.0399 8.59597 20.2206 8.27429 20.3281 7.92458C20.461 8.01012 20.587 8.08562 20.7058 8.14841C21.0766 8.34444 21.5857 8.5317 22.1234 8.29848C22.6917 8.05198 22.8703 7.52506 22.9373 7.11029C23.0002 6.72117 23.0002 6.21155 23.0001 5.65184V4.84823C23.0002 4.28852 23.0002 3.77889 22.9373 3.38976C22.8703 2.975 22.6917 2.44808 22.1234 2.20158C21.5857 1.96836 21.0766 2.15562 20.7058 2.35165C20.587 2.41444 20.461 2.48994 20.3281 2.57547C20.2206 2.22574 20.0399 1.90404 19.7313 1.63406C19.3106 1.26594 18.8009 1.12509 18.2579 1.0612C17.7373 0.999962 17.0817 0.99998 16.2957 1ZM20.499 4.28104C20.5 4.43462 20.5 4.59365 20.5 4.75768V5.74233C20.5 5.90638 20.5 6.06542 20.499 6.21902C20.9085 6.5131 21.1881 6.7067 21.4068 6.82229C21.426 6.83246 21.4437 6.84142 21.4599 6.84932C21.4978 6.59477 21.5001 6.21376 21.5001 5.59212V4.90794C21.5001 4.2863 21.4978 3.90528 21.4599 3.65074C21.4437 3.65863 21.426 3.6676 21.4068 3.67777C21.1881 3.79336 20.9085 3.98696 20.499 4.28104Z',
  d11: 'M10.5 15H13.5',
  d12: 'M22 11V18H2V3H9',
  d13: 'M19 7L22 8V3L19 4M12 2H19V9H12V2Z',
  d14: 'M12 18.001V21.9996M12 21.9996H8M12 21.9996H16',
  d15: 'M11.25 1.25H19.75V3.95943L22.75 2.28849V8.71151L19.75 7.04057V9.75H11.25V1.25Z',
  d16: 'M13.5 15.25H10.5V13.25H13.5V15.25Z',
  d17: 'M2.22727 1.25C1.68754 1.25 1.25 1.68528 1.25 2.22222V17.7778C1.25 18.3147 1.68754 18.75 2.22727 18.75H9.25V20.75H7V22.75H17V20.75H14.75V18.75H21.7727C22.3125 18.75 22.75 18.3147 22.75 17.7778V12L20.7955 12V16.8056H3.20455V3.19444H9L9 1.25H2.22727Z',
};

export const IconComputerVideoStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-video-stroke-rounded IconComputerVideoStrokeRounded"
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

export const IconComputerVideoDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-video-duotone-rounded IconComputerVideoDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerVideoTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-video-twotone-rounded IconComputerVideoTwotoneRounded"
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

export const IconComputerVideoSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-video-solid-rounded IconComputerVideoSolidRounded"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerVideoBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-video-bulk-rounded IconComputerVideoBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconComputerVideoStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-video-stroke-sharp IconComputerVideoStrokeSharp"
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
        strokeLinejoin="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconComputerVideoSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-video-solid-sharp IconComputerVideoSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfComputerVideo: TheIconSelfPack = {
  name: 'ComputerVideo',
  StrokeRounded: IconComputerVideoStrokeRounded,
  DuotoneRounded: IconComputerVideoDuotoneRounded,
  TwotoneRounded: IconComputerVideoTwotoneRounded,
  SolidRounded: IconComputerVideoSolidRounded,
  BulkRounded: IconComputerVideoBulkRounded,
  StrokeSharp: IconComputerVideoStrokeSharp,
  SolidSharp: IconComputerVideoSolidSharp,
};