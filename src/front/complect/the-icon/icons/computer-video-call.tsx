import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C22 14.9188 22 13.2792 22 10C22 6.72077 22 5.08116 21.1862 3.91891C20.8851 3.48891 20.5111 3.1149 20.0811 2.81382C18.9188 2 17.2792 2 14 2Z',
  d2: 'M14.5 22L14.1845 21.5811C13.4733 20.6369 13.2969 19.1944 13.7468 18M9.5 22L9.8155 21.5811C10.5267 20.6369 10.7031 19.1944 10.2532 18',
  d3: 'M7 22H17',
  d4: 'M8 14C9.83846 11.4046 14.1188 11.263 16 14M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z',
  d5: 'M10 2H14C17.2792 2 18.9188 2 20.0811 2.81382C20.5111 3.1149 20.8851 3.48891 21.1862 3.91891C22 5.08116 22 6.72077 22 10C22 13.2792 22 14.9188 21.1862 16.0811C20.8851 16.5111 20.5111 16.8851 20.0811 17.1862C18.9188 18 17.2792 18 14 18H10C6.72077 18 5.08116 18 3.91891 17.1862C3.48891 16.8851 3.1149 16.5111 2.81382 16.0811C2 14.9188 2 13.2792 2 10C2 6.72077 2 5.08116 2.81382 3.91891C3.1149 3.48891 3.48891 3.1149 3.91891 2.81382C5.08116 2 6.72077 2 10 2ZM12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z',
  d6: 'M14.0567 1H9.94328C8.35179 0.999985 7.07838 0.999973 6.06076 1.10724C5.01328 1.21765 4.12227 1.45065 3.34533 1.99466C2.81978 2.36266 2.36266 2.81978 1.99466 3.34533C1.45065 4.12227 1.21765 5.01328 1.10724 6.06076C0.999973 7.07838 0.999985 8.35179 1 9.94328V10.0567C0.999985 11.6482 0.999973 12.9216 1.10724 13.9392C1.21765 14.9867 1.45065 15.8777 1.99466 16.6547C2.36266 17.1802 2.81978 17.6373 3.34533 18.0053C4.12227 18.5494 5.01328 18.7824 6.06076 18.8928C7.03205 18.9951 8.23639 18.9998 9.72791 19C9.76674 19.3334 9.75416 19.6705 9.69509 19.9899C9.62759 20.3549 9.59384 20.5374 9.31586 20.7687C9.03788 21 8.76464 21 8.21814 21H7C6.44772 21 6 21.4477 6 22C6 22.5523 6.44772 23 7 23H17C17.5523 23 18 22.5523 18 22C18 21.4477 17.5523 21 17 21H15.7818C15.2353 21 14.9621 21 14.6841 20.7687C14.4061 20.5374 14.3724 20.3549 14.3049 19.9899C14.2458 19.6705 14.2332 19.3334 14.272 19C15.7636 18.9998 16.9679 18.9951 17.9392 18.8928C18.9867 18.7824 19.8777 18.5494 20.6547 18.0053C21.1802 17.6373 21.6373 17.1802 22.0053 16.6547C22.5494 15.8777 22.7824 14.9867 22.8928 13.9392C23 12.9216 23 11.6482 23 10.0567V9.94327C23 8.35178 23 7.07837 22.8928 6.06076C22.7824 5.01328 22.5494 4.12227 22.0053 3.34533C21.6373 2.81978 21.1802 2.36266 20.6547 1.99466C19.8777 1.45065 18.9867 1.21765 17.9392 1.10724C16.9216 0.999973 15.6482 0.999985 14.0567 1ZM4.49248 3.63297C4.8778 3.36317 5.38772 3.18926 6.27041 3.09622C7.17091 3.0013 8.33876 3 10 3H14C15.6612 3 16.8291 3.0013 17.7296 3.09622C18.6123 3.18926 19.1222 3.36317 19.5075 3.63297C19.842 3.86715 20.1329 4.15804 20.367 4.49248C20.6368 4.8778 20.8107 5.38772 20.9038 6.27041C20.9987 7.17091 21 8.33876 21 10C21 11.6612 20.9987 12.8291 20.9038 13.7296C20.8107 14.6123 20.6368 15.1222 20.367 15.5075C20.1329 15.842 19.842 16.1329 19.5075 16.367C19.1222 16.6368 18.6123 16.8107 17.7296 16.9038C16.8291 16.9987 15.6612 17 14 17H10C8.33876 17 7.17091 16.9987 6.27041 16.9038C5.38772 16.8107 4.8778 16.6368 4.49248 16.367C4.15804 16.1329 3.86715 15.842 3.63297 15.5075C3.36317 15.1222 3.18926 14.6123 3.09622 13.7296C3.0013 12.8291 3 11.6612 3 10C3 8.33876 3.0013 7.17091 3.09622 6.27041C3.18926 5.38772 3.36317 4.8778 3.63297 4.49248C3.86715 4.15804 4.15804 3.86715 4.49248 3.63297Z',
  d7: 'M14.25 7.22222C14.25 8.44952 13.2426 9.44444 12 9.44444C10.7574 9.44444 9.75 8.44952 9.75 7.22222C9.75 5.99492 10.7574 5 12 5C13.2426 5 14.25 5.99492 14.25 7.22222Z',
  d8: 'M9.28879 11.3787C8.5814 11.8467 6.72668 12.8023 7.85633 13.9981C8.40815 14.5822 9.02275 15 9.79543 15H14.2046C14.9773 15 15.5918 14.5822 16.1437 13.9981C17.2733 12.8023 15.4186 11.8467 14.7112 11.3787C13.0524 10.2812 10.9476 10.2812 9.28879 11.3787Z',
  d9: 'M9.94328 1H14.0567C15.6482 0.999985 16.9216 0.999973 17.9392 1.10724C18.9867 1.21765 19.8777 1.45065 20.6547 1.99466C21.1802 2.36266 21.6373 2.81978 22.0053 3.34533C22.5494 4.12227 22.7824 5.01328 22.8928 6.06076C23 7.07837 23 8.35178 23 9.94327V10.0567C23 11.6482 23 12.9216 22.8928 13.9392C22.7824 14.9867 22.5494 15.8777 22.0053 16.6547C21.6373 17.1802 21.1802 17.6373 20.6547 18.0053C19.8777 18.5494 18.9867 18.7824 17.9392 18.8928C16.9216 19 15.6482 19 14.0567 19H9.94327C8.35178 19 7.07837 19 6.06076 18.8928C5.01328 18.7824 4.12227 18.5494 3.34533 18.0053C2.81978 17.6373 2.36266 17.1802 1.99466 16.6547C1.45065 15.8777 1.21765 14.9867 1.10724 13.9392C0.999973 12.9216 0.999985 11.6482 1 10.0567V9.94328C0.999985 8.35179 0.999973 7.07838 1.10724 6.06076C1.21765 5.01328 1.45065 4.12227 1.99466 3.34533C2.36266 2.81978 2.81978 2.36266 3.34533 1.99466C4.12227 1.45065 5.01328 1.21765 6.06076 1.10724C7.07838 0.999973 8.35179 0.999985 9.94328 1ZM6.27041 3.09622C5.38772 3.18926 4.8778 3.36317 4.49248 3.63297C4.15804 3.86715 3.86715 4.15804 3.63297 4.49248C3.36317 4.8778 3.18926 5.38772 3.09622 6.27041C3.0013 7.17091 3 8.33876 3 10C3 11.6612 3.0013 12.8291 3.09622 13.7296C3.18926 14.6123 3.36317 15.1222 3.63297 15.5075C3.86715 15.842 4.15804 16.1329 4.49248 16.367C4.8778 16.6368 5.38772 16.8107 6.27041 16.9038C7.17091 16.9987 8.33876 17 10 17H14C15.6612 17 16.8291 16.9987 17.7296 16.9038C18.6123 16.8107 19.1222 16.6368 19.5075 16.367C19.842 16.1329 20.1329 15.842 20.367 15.5075C20.6368 15.1222 20.8107 14.6123 20.9038 13.7296C20.9987 12.8291 21 11.6612 21 10C21 8.33876 20.9987 7.17091 20.9038 6.27041C20.8107 5.38772 20.6368 4.8778 20.367 4.49248C20.1329 4.15804 19.842 3.86715 19.5075 3.63297C19.1222 3.36317 18.6123 3.18926 17.7296 3.09622C16.8291 3.0013 15.6612 3 14 3H10C8.33876 3 7.17091 3.0013 6.27041 3.09622Z',
  d10: 'M14.8306 17.25H9.16932L9.55133 18.2643C9.75942 18.8168 9.79852 19.4306 9.69509 19.9899C9.62759 20.3549 9.59384 20.5374 9.31586 20.7687C9.03788 21 8.76464 21 8.21814 21H7C6.44772 21 6 21.4477 6 22C6 22.5523 6.44772 23 7 23H17C17.5523 23 18 22.5523 18 22C18 21.4477 17.5523 21 17 21H15.7818C15.2353 21 14.9621 21 14.6841 20.7687C14.4061 20.5374 14.3724 20.3549 14.3049 19.9899C14.2014 19.4306 14.2405 18.8168 14.4486 18.2643L14.8306 17.25Z',
  d11: 'M22 2.5H2V17.5H22V2.5Z',
  d12: 'M14 21.5V17.5M10 21.5V17.5',
  d13: 'M7 21.5H17',
  d14: 'M1.25 2.72059C1.25 2.18455 1.68754 1.75 2.22727 1.75H21.7727C22.3125 1.75 22.75 2.18455 22.75 2.72059V17.2794C22.75 17.8155 22.3125 18.25 21.7727 18.25H2.22727C1.68754 18.25 1.25 17.8155 1.25 17.2794V2.72059ZM3.20455 3.69118V16.3088H20.7955V3.69118H3.20455Z',
  d15: 'M10 20.25H7V22.25H17V20.25H14V17.5H10V20.25Z',
  d16: 'M9.25 8C9.25 6.48122 10.4812 5.25 12 5.25C13.5188 5.25 14.75 6.48122 14.75 8C14.75 9.51878 13.5188 10.75 12 10.75C10.4812 10.75 9.25 9.51878 9.25 8Z',
  d17: 'M7.38799 13.5665C9.50904 10.5722 14.4231 10.3817 16.6181 13.5752C16.7758 13.8047 16.7934 14.1027 16.6637 14.3492C16.5341 14.5957 16.2785 14.75 16 14.75H8C7.71959 14.75 7.4626 14.5936 7.3338 14.3445C7.205 14.0954 7.22591 13.7953 7.38799 13.5665Z',
} as const;

export const IconComputerVideoCallStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-video-call-stroke-rounded IconComputerVideoCallStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconComputerVideoCallDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-video-call-duotone-rounded IconComputerVideoCallDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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

export const IconComputerVideoCallTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-video-call-twotone-rounded IconComputerVideoCallTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
      />
      <path 
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
      />
    </TheIconWrapper>
  );
};

export const IconComputerVideoCallSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-video-call-solid-rounded IconComputerVideoCallSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerVideoCallBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-video-call-bulk-rounded IconComputerVideoCallBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconComputerVideoCallStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-video-call-stroke-sharp IconComputerVideoCallStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerVideoCallSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-video-call-solid-sharp IconComputerVideoCallSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfComputerVideoCall: TheIconSelfPack = {
  name: 'ComputerVideoCall',
  StrokeRounded: IconComputerVideoCallStrokeRounded,
  DuotoneRounded: IconComputerVideoCallDuotoneRounded,
  TwotoneRounded: IconComputerVideoCallTwotoneRounded,
  SolidRounded: IconComputerVideoCallSolidRounded,
  BulkRounded: IconComputerVideoCallBulkRounded,
  StrokeSharp: IconComputerVideoCallStrokeSharp,
  SolidSharp: IconComputerVideoCallSolidSharp,
};