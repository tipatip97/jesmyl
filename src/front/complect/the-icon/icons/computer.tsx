import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C22 14.9188 22 13.2792 22 10C22 6.72077 22 5.08116 21.1862 3.91891C20.8851 3.48891 20.5111 3.1149 20.0811 2.81382C18.9188 2 17.2792 2 14 2Z',
  d2: 'M11 15H13',
  d3: 'M14.5 22L14.1845 21.5811C13.4733 20.6369 13.2969 19.1944 13.7468 18M9.5 22L9.8155 21.5811C10.5267 20.6369 10.7031 19.1944 10.2532 18',
  d4: 'M7 22H17',
  d5: 'M10 15C10 14.4477 10.4477 14 11 14H13C13.5523 14 14 14.4477 14 15C14 15.5523 13.5523 16 13 16H11C10.4477 16 10 15.5523 10 15Z',
  d6: 'M14.0567 1H9.94328C8.35179 0.999985 7.07838 0.999973 6.06076 1.10724C5.01328 1.21765 4.12227 1.45065 3.34533 1.99466C2.81978 2.36266 2.36266 2.81978 1.99466 3.34533C1.45065 4.12227 1.21765 5.01328 1.10724 6.06076C0.999973 7.07838 0.999985 8.35179 1 9.94328V10.0567C0.999985 11.6482 0.999973 12.9216 1.10724 13.9392C1.21765 14.9867 1.45065 15.8777 1.99466 16.6547C2.36266 17.1802 2.81978 17.6373 3.34533 18.0053C4.12227 18.5494 5.01328 18.7824 6.06076 18.8928C7.03205 18.9951 8.23639 18.9998 9.72791 19C9.76674 19.3334 9.75416 19.6705 9.69509 19.9899C9.62759 20.3549 9.59384 20.5374 9.31586 20.7687C9.03788 21 8.76464 21 8.21814 21H7C6.44772 21 6 21.4477 6 22C6 22.5523 6.44772 23 7 23H17C17.5523 23 18 22.5523 18 22C18 21.4477 17.5523 21 17 21H15.7818C15.2353 21 14.9621 21 14.6841 20.7687C14.4061 20.5374 14.3724 20.3549 14.3049 19.9899C14.2458 19.6705 14.2332 19.3334 14.272 19C15.7636 18.9998 16.9679 18.9951 17.9392 18.8928C18.9867 18.7824 19.8777 18.5494 20.6547 18.0053C21.1802 17.6373 21.6373 17.1802 22.0053 16.6547C22.5494 15.8777 22.7824 14.9867 22.8928 13.9392C23 12.9216 23 11.6482 23 10.0567V9.94327C23 8.35178 23 7.07837 22.8928 6.06076C22.7824 5.01328 22.5494 4.12227 22.0053 3.34533C21.6373 2.81978 21.1802 2.36266 20.6547 1.99466C19.8777 1.45065 18.9867 1.21765 17.9392 1.10724C16.9216 0.999973 15.6482 0.999985 14.0567 1ZM4.49248 3.63297C4.8778 3.36317 5.38772 3.18926 6.27041 3.09622C7.17091 3.0013 8.33876 3 10 3H14C15.6612 3 16.8291 3.0013 17.7296 3.09622C18.6123 3.18926 19.1222 3.36317 19.5075 3.63297C19.842 3.86715 20.1329 4.15804 20.367 4.49248C20.6368 4.8778 20.8107 5.38772 20.9038 6.27041C20.9987 7.17091 21 8.33876 21 10C21 11.6612 20.9987 12.8291 20.9038 13.7296C20.8107 14.6123 20.6368 15.1222 20.367 15.5075C20.1329 15.842 19.842 16.1329 19.5075 16.367C19.1222 16.6368 18.6123 16.8107 17.7296 16.9038C16.8291 16.9987 15.6612 17 14 17H10C8.33876 17 7.17091 16.9987 6.27041 16.9038C5.38772 16.8107 4.8778 16.6368 4.49248 16.367C4.15804 16.1329 3.86715 15.842 3.63297 15.5075C3.36317 15.1222 3.18926 14.6123 3.09622 13.7296C3.0013 12.8291 3 11.6612 3 10C3 8.33876 3.0013 7.17091 3.09622 6.27041C3.18926 5.38772 3.36317 4.8778 3.63297 4.49248C3.86715 4.15804 4.15804 3.86715 4.49248 3.63297Z',
  d7: 'M14.8306 17.25H9.16932L9.55133 18.2643C9.75942 18.8168 9.79852 19.4306 9.69509 19.9899C9.62759 20.3549 9.59384 20.5374 9.31586 20.7687C9.03788 21 8.76464 21 8.21814 21H7C6.44772 21 6 21.4477 6 22C6 22.5523 6.44772 23 7 23H17C17.5523 23 18 22.5523 18 22C18 21.4477 17.5523 21 17 21H15.7818C15.2353 21 14.9621 21 14.6841 20.7687C14.4061 20.5374 14.3724 20.3549 14.3049 19.9899C14.2014 19.4306 14.2405 18.8168 14.4486 18.2643L14.8306 17.25Z',
  d8: 'M9.94328 1H14.0567C15.6482 0.999985 16.9216 0.999973 17.9392 1.10724C18.9867 1.21765 19.8777 1.45065 20.6547 1.99466C21.1802 2.36266 21.6373 2.81978 22.0053 3.34533C22.5494 4.12227 22.7824 5.01328 22.8928 6.06076C23 7.07837 23 8.35178 23 9.94327V10.0567C23 11.6482 23 12.9216 22.8928 13.9392C22.7824 14.9867 22.5494 15.8777 22.0053 16.6547C21.6373 17.1802 21.1802 17.6373 20.6547 18.0053C19.8777 18.5494 18.9867 18.7824 17.9392 18.8928C16.9216 19 15.6482 19 14.0567 19H9.94327C8.35178 19 7.07837 19 6.06076 18.8928C5.01328 18.7824 4.12227 18.5494 3.34533 18.0053C2.81978 17.6373 2.36266 17.1802 1.99466 16.6547C1.45065 15.8777 1.21765 14.9867 1.10724 13.9392C0.999973 12.9216 0.999985 11.6482 1 10.0567V9.94328C0.999985 8.35179 0.999973 7.07838 1.10724 6.06076C1.21765 5.01328 1.45065 4.12227 1.99466 3.34533C2.36266 2.81978 2.81978 2.36266 3.34533 1.99466C4.12227 1.45065 5.01328 1.21765 6.06076 1.10724C7.07838 0.999973 8.35179 0.999985 9.94328 1ZM6.27041 3.09622C5.38772 3.18926 4.8778 3.36317 4.49248 3.63297C4.15804 3.86715 3.86715 4.15804 3.63297 4.49248C3.36317 4.8778 3.18926 5.38772 3.09622 6.27041C3.0013 7.17091 3 8.33876 3 10C3 11.6612 3.0013 12.8291 3.09622 13.7296C3.18926 14.6123 3.36317 15.1222 3.63297 15.5075C3.86715 15.842 4.15804 16.1329 4.49248 16.367C4.8778 16.6368 5.38772 16.8107 6.27041 16.9038C7.17091 16.9987 8.33876 17 10 17H14C15.6612 17 16.8291 16.9987 17.7296 16.9038C18.6123 16.8107 19.1222 16.6368 19.5075 16.367C19.842 16.1329 20.1329 15.842 20.367 15.5075C20.6368 15.1222 20.8107 14.6123 20.9038 13.7296C20.9987 12.8291 21 11.6612 21 10C21 8.33876 20.9987 7.17091 20.9038 6.27041C20.8107 5.38772 20.6368 4.8778 20.367 4.49248C20.1329 4.15804 19.842 3.86715 19.5075 3.63297C19.1222 3.36317 18.6123 3.18926 17.7296 3.09622C16.8291 3.0013 15.6612 3 14 3H10C8.33876 3 7.17091 3.0013 6.27041 3.09622Z',
  d9: 'M22 2.5H2V17.5H22V2.5Z',
  d10: 'M10.5 14.5H13.5',
  d11: 'M14 21.5V17.5M10 21.5V17.5',
  d12: 'M7 21.5H17',
  d13: 'M13.5 15.25H10.5V13.25H13.5V15.25Z',
  d14: 'M2.22727 1.25C1.68754 1.25 1.25 1.68528 1.25 2.22222V17.7778C1.25 18.3147 1.68754 18.75 2.22727 18.75H9.25V20.75H7V22.75H17V20.75H14.75V18.75H21.7727C22.3125 18.75 22.75 18.3147 22.75 17.7778V2.22222C22.75 1.68528 22.3125 1.25 21.7727 1.25H2.22727ZM3.20455 16.8056V3.19444H20.7955V16.8056H3.20455Z',
};

export const IconComputerStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-stroke-rounded IconComputerStrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-duotone-rounded IconComputerDuotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-twotone-rounded IconComputerTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-solid-rounded IconComputerSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconComputerBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-bulk-rounded IconComputerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconComputerStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-stroke-sharp IconComputerStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-solid-sharp IconComputerSolidSharp"
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

export const iconPackOfComputer: TheIconSelfPack = {
  name: 'Computer',
  StrokeRounded: IconComputerStrokeRounded,
  DuotoneRounded: IconComputerDuotoneRounded,
  TwotoneRounded: IconComputerTwotoneRounded,
  SolidRounded: IconComputerSolidRounded,
  BulkRounded: IconComputerBulkRounded,
  StrokeSharp: IconComputerStrokeSharp,
  SolidSharp: IconComputerSolidSharp,
};