import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C22 14.9188 22 13.2792 22 10',
  d2: 'M18.8295 2.75418C19.1276 2.43123 19.2766 2.26976 19.435 2.17557C19.8171 1.9483 20.2876 1.94124 20.6761 2.15693C20.8372 2.24632 20.9908 2.40325 21.298 2.7171C21.6053 3.03096 21.7589 3.18789 21.8464 3.35237C22.0575 3.74925 22.0506 4.22992 21.8281 4.62028C21.7359 4.78206 21.5779 4.93431 21.2617 5.2388L17.5003 8.86172C16.9012 9.43875 16.6016 9.72727 16.2272 9.87349C15.8528 10.0197 15.4413 10.009 14.6181 9.98743L14.5062 9.9845C14.2556 9.97795 14.1303 9.97467 14.0574 9.89202C13.9846 9.80936 13.9945 9.68173 14.0144 9.42647L14.0252 9.28786C14.0812 8.56942 14.1092 8.2102 14.2495 7.88729C14.3898 7.56438 14.6318 7.30219 15.1158 6.7778L18.8295 2.75418Z',
  d3: 'M14.6557 22L14.2369 21.5811C13.2926 20.6369 13.0585 19.1944 13.6557 18',
  d4: 'M9.00051 22L9.41937 21.5811C10.3636 20.6369 10.5977 19.1944 10.0005 18',
  d5: 'M7 22H17',
  d6: 'M8 10H15',
  d7: 'M10 2H14C16.5268 2 18.08 2 19.1916 2.37231C19.0958 2.46566 18.9822 2.58873 18.8295 2.75418L15.1158 6.7778C14.6318 7.30219 14.3898 7.56438 14.2495 7.88729C14.1092 8.2102 14.0812 8.56942 14.0252 9.28786L14.0144 9.42647C13.9945 9.68173 13.9846 9.80936 14.0574 9.89202C14.1303 9.97467 14.2556 9.97795 14.5062 9.9845L14.6181 9.98743C15.4413 10.009 15.8528 10.0197 16.2272 9.87349C16.6016 9.72727 16.9011 9.43875 17.5002 8.86172L21.2617 5.2388C21.429 5.07771 21.552 4.95923 21.6444 4.85941C22 5.96738 22 7.51162 22 10C22 13.2792 22 14.9188 21.1862 16.0811C20.8851 16.5111 20.5111 16.8851 20.0811 17.1862C18.9188 18 17.2792 18 14 18H10C6.72077 18 5.08116 18 3.91891 17.1862C3.48891 16.8851 3.1149 16.5111 2.81382 16.0811C2 14.9188 2 13.2792 2 10C2 6.72077 2 5.08116 2.81382 3.91891C3.1149 3.48891 3.48891 3.1149 3.91891 2.81382C5.08116 2 6.72077 2 10 2Z',
  d8: 'M9.00098 22L9.41984 21.5811C10.3641 20.6369 10.5982 19.1944 10.001 18',
  d9: 'M8 10H15M18.8295 2.75418C19.1276 2.43123 19.2766 2.26976 19.435 2.17557C19.8171 1.9483 20.2876 1.94124 20.6761 2.15693C20.8372 2.24632 20.9908 2.40325 21.298 2.7171C21.6053 3.03096 21.7589 3.18789 21.8464 3.35237C22.0575 3.74925 22.0506 4.22992 21.8281 4.62028C21.7359 4.78206 21.5779 4.93431 21.2617 5.2388L17.5003 8.86172C16.9012 9.43875 16.6016 9.72727 16.2272 9.87349C15.8528 10.0197 15.4413 10.009 14.6181 9.98743L14.5062 9.9845C14.2556 9.97795 14.1303 9.97467 14.0574 9.89202C13.9846 9.80936 13.9945 9.68173 14.0144 9.42647L14.0252 9.28786C14.0812 8.56942 14.1092 8.2102 14.2495 7.88729C14.3898 7.56438 14.6318 7.30219 15.1158 6.7778L18.8295 2.75418Z',
  d10: 'M14.8306 17.25H9.16932L9.55133 18.2643C9.75942 18.8168 9.79852 19.4306 9.69509 19.9899C9.62759 20.3549 9.59384 20.5374 9.31586 20.7687C9.03788 21 8.76464 21 8.21814 21H7C6.44772 21 6 21.4477 6 22C6 22.5523 6.44772 23 7 23H17C17.5523 23 18 22.5523 18 22C18 21.4477 17.5523 21 17 21H15.7818C15.2353 21 14.9621 21 14.6841 20.7687C14.4061 20.5374 14.3724 20.3549 14.3049 19.9899C14.2014 19.4306 14.2405 18.8168 14.4486 18.2643L14.8306 17.25Z',
  d11: 'M20.9896 8.95393C20.9991 9.53049 21 9.23732 21 10C21 11.6612 20.9987 12.8291 20.9038 13.7296C20.8107 14.6123 20.6368 15.1222 20.367 15.5075C20.1329 15.842 19.842 16.1329 19.5075 16.367C19.1222 16.6368 18.6123 16.8107 17.7296 16.9038C16.8291 16.9987 15.6612 17 14 17H10C8.33876 17 7.17091 16.9987 6.27041 16.9038C5.38772 16.8107 4.8778 16.6368 4.49248 16.367C4.15804 16.1329 3.86715 15.842 3.63297 15.5075C3.36317 15.1222 3.18926 14.6123 3.09622 13.7296C3.0013 12.8291 3 11.6612 3 10C3 8.33876 3.0013 7.17091 3.09622 6.27041C3.18926 5.38772 3.36317 4.8778 3.63297 4.49248C3.86715 4.15804 4.15804 3.86715 4.49248 3.63297C4.8778 3.36317 5.38772 3.18926 6.27041 3.09622C7.17091 3.0013 8.33876 3 10 3H14C14.4206 3 14.8096 3.00008 15.1707 3.00175C15.1927 3.00185 15.2037 3.0019 15.2129 3.00178C15.4826 2.99807 15.7349 2.88829 15.9214 2.69343C15.9278 2.6868 15.9347 2.67934 15.9484 2.66441C15.9505 2.66221 15.9515 2.66111 15.9678 2.64147C16.4758 2.03125 16.0482 1.04796 15.2555 1.00329C15.23 1.00185 15.2609 1.00201 15.2485 1.00195C14.8726 0.999993 14.4758 0.999996 14.0569 1H14.0567H9.94328H9.94326C8.35178 0.999986 7.07837 0.999974 6.06076 1.10724C5.01328 1.21765 4.12227 1.45065 3.34533 1.99466C2.81978 2.36266 2.36266 2.81978 1.99466 3.34533C1.45065 4.12227 1.21765 5.01328 1.10724 6.06076C0.999974 7.07837 0.999986 8.35178 1 9.94326V9.94328V10.0567V10.0567C0.999986 11.6482 0.999974 12.9216 1.10724 13.9392C1.21765 14.9867 1.45065 15.8777 1.99466 16.6547C2.36266 17.1802 2.81978 17.6373 3.34533 18.0053C4.12227 18.5494 5.01328 18.7824 6.06076 18.8928C7.07837 19 8.35178 19 9.94327 19H14.0567C15.6482 19 16.9216 19 17.9392 18.8928C18.9867 18.7824 19.8777 18.5494 20.6547 18.0053C21.1802 17.6373 21.6373 17.1802 22.0053 16.6547C22.5494 15.8777 22.7824 14.9867 22.8928 13.9392C23 12.9216 23 11.6482 23 10.0567V9.94327C23 9.23763 22.9913 9.54791 22.9731 8.88909C22.9103 8.10411 21.9128 7.69761 21.3192 8.21511C21.1304 8.40486 20.9902 8.68626 20.9896 8.95393Z',
  d12: 'M19.0522 1.78096C19.6636 1.41734 20.4188 1.40587 21.0408 1.75121C21.3008 1.89553 21.6473 2.25026 21.8934 2.50238C22.1411 2.75475 22.3692 2.987 22.5091 3.25011C22.841 3.8739 22.8303 4.62769 22.4804 5.24164C22.3328 5.50061 22.098 5.72605 21.8431 5.97082L17.9326 9.73731C17.4212 10.2308 17.0178 10.6201 16.5007 10.8221C15.9821 11.0247 15.4242 11.0095 14.721 10.9904H14.721C14.6186 10.9879 14.2179 10.9775 14.0924 10.9566C13.9335 10.9301 13.6912 10.8601 13.4954 10.6379C13.3018 10.4182 13.2617 10.1719 13.253 10.0157C13.2459 9.88945 13.2771 9.4813 13.2854 9.37643C13.333 8.75871 13.3708 8.27908 13.5622 7.83843C13.7542 7.39656 14.0792 7.04496 14.4957 6.5944L18.3366 2.43297C18.5753 2.17352 18.7967 1.93293 19.0522 1.78096Z',
  d13: 'M7 10C7 9.44772 7.44772 9 8 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H8C7.44772 11 7 10.5523 7 10Z',
  d14: 'M9.72791 19C9.79904 19 9.87083 19 9.94327 19H14.0567C14.1292 19 14.2009 19 14.272 19C14.2332 19.3334 14.2458 19.6705 14.3049 19.9899C14.3724 20.3549 14.4061 20.5374 14.6841 20.7687C14.9621 21 15.2353 21 15.7818 21H17C17.5523 21 18 21.4477 18 22C18 22.5523 17.5523 23 17 23H7C6.44772 23 6 22.5523 6 22C6 21.4477 6.44772 21 7 21H8.21814C8.76464 21 9.03788 21 9.31586 20.7687C9.59384 20.5374 9.62759 20.3549 9.69509 19.9899C9.75416 19.6705 9.76674 19.3334 9.72791 19Z',
  d15: 'M14 2.96875H2V17.9952H22V8.97931',
  d16: 'M14 22.0022V17.9951M10 22.0022V17.9951',
  d17: 'M7 22.002H17',
  d18: 'M8 9.98096L15.0108 9.98806M19.4415 2.02729L14.02 7.44396V9.98096L16.5069 9.99879L21.9404 4.53764C21.9793 4.49855 21.9793 4.43529 21.9404 4.3962L19.5829 2.02749C19.5439 1.98831 19.4806 1.98822 19.4415 2.02729Z',
  d19: 'M1.25 3.22059C1.25 2.68455 1.68754 2.25 2.22727 2.25H12L12 4.19118H3.20455V16.8088H20.7955V10.5H22.75V17.7794C22.75 18.3155 22.3125 18.75 21.7727 18.75H2.22727C1.68754 18.75 1.25 18.3155 1.25 17.7794V3.22059Z',
  d20: 'M14.5 20.75H17V22.75H7V20.75H9.5V18H14.5V20.75Z',
  d21: 'M19.5 1.25C19.6989 1.25 19.8897 1.32902 20.0303 1.46967L22.5303 3.96967C22.8232 4.26256 22.8232 4.73744 22.5303 5.03033L16.8107 10.75H13.25V7.18934L18.9697 1.46967C19.1103 1.32902 19.3011 1.25 19.5 1.25Z',
  d22: 'M14 10.75H7V8.75H14V10.75Z',
};

export const IconComputerProgramming02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-programming-02-stroke-rounded IconComputerProgramming02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerProgramming02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-programming-02-duotone-rounded IconComputerProgramming02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerProgramming02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-programming-02-twotone-rounded IconComputerProgramming02TwotoneRounded"
    >
      <path 
        d={d.d1} 
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
        d={d.d8} 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerProgramming02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-programming-02-solid-rounded IconComputerProgramming02SolidRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconComputerProgramming02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-programming-02-bulk-rounded IconComputerProgramming02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerProgramming02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-programming-02-stroke-sharp IconComputerProgramming02StrokeSharp"
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
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconComputerProgramming02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-programming-02-solid-sharp IconComputerProgramming02SolidSharp"
    >
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfComputerProgramming02: TheIconSelfPack = {
  name: 'ComputerProgramming02',
  StrokeRounded: IconComputerProgramming02StrokeRounded,
  DuotoneRounded: IconComputerProgramming02DuotoneRounded,
  TwotoneRounded: IconComputerProgramming02TwotoneRounded,
  SolidRounded: IconComputerProgramming02SolidRounded,
  BulkRounded: IconComputerProgramming02BulkRounded,
  StrokeSharp: IconComputerProgramming02StrokeSharp,
  SolidSharp: IconComputerProgramming02SolidSharp,
};