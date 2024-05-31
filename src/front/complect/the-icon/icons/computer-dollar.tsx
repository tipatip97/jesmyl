import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.5 22L14.1845 21.5811C13.4733 20.6369 13.2969 19.1944 13.7468 18',
  d2: 'M9.5 22L9.8155 21.5811C10.5267 20.6369 10.7031 19.1944 10.2532 18',
  d3: 'M7 22H17',
  d4: 'M12 7C10.8954 7 10 7.67157 10 8.5C10 9.32843 10.8954 10 12 10C13.1046 10 14 10.6716 14 11.5C14 12.3284 13.1046 13 12 13M12 7C12.8708 7 13.6116 7.4174 13.8862 8M12 7V6M12 13C11.1292 13 10.3884 12.5826 10.1138 12M12 13V14',
  d5: 'M14 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C22 14.9188 22 13.2792 22 10C22 6.72077 22 5.08116 21.1862 3.91891C20.8851 3.48891 20.5111 3.1149 20.0811 2.81382C18.9188 2 17.2792 2 14 2Z',
  d6: 'M14.0567 1H9.94328C8.35179 0.999985 7.07838 0.999973 6.06076 1.10724C5.01328 1.21765 4.12227 1.45065 3.34533 1.99466C2.81978 2.36266 2.36266 2.81978 1.99466 3.34533C1.45065 4.12227 1.21765 5.01328 1.10724 6.06076C0.999973 7.07838 0.999985 8.35179 1 9.94328V10.0567C0.999985 11.6482 0.999973 12.9216 1.10724 13.9392C1.21765 14.9867 1.45065 15.8777 1.99466 16.6547C2.36266 17.1802 2.81978 17.6373 3.34533 18.0053C4.12227 18.5494 5.01328 18.7824 6.06076 18.8928C7.03205 18.9951 8.23639 18.9998 9.72791 19C9.76674 19.3334 9.75416 19.6705 9.69509 19.9899C9.62759 20.3549 9.59384 20.5374 9.31586 20.7687C9.03788 21 8.76464 21 8.21814 21H7C6.44772 21 6 21.4477 6 22C6 22.5523 6.44772 23 7 23H17C17.5523 23 18 22.5523 18 22C18 21.4477 17.5523 21 17 21H15.7818C15.2353 21 14.9621 21 14.6841 20.7687C14.4061 20.5374 14.3724 20.3549 14.3049 19.9899C14.2458 19.6705 14.2332 19.3334 14.272 19C15.7636 18.9998 16.9679 18.9951 17.9392 18.8928C18.9867 18.7824 19.8777 18.5494 20.6547 18.0053C21.1802 17.6373 21.6373 17.1802 22.0053 16.6547C22.5494 15.8777 22.7824 14.9867 22.8928 13.9392C23 12.9216 23 11.6482 23 10.0567V9.94327C23 8.35178 23 7.07837 22.8928 6.06076C22.7824 5.01328 22.5494 4.12227 22.0053 3.34533C21.6373 2.81978 21.1802 2.36266 20.6547 1.99466C19.8777 1.45065 18.9867 1.21765 17.9392 1.10724C16.9216 0.999973 15.6482 0.999985 14.0567 1ZM4.49248 3.63297C4.8778 3.36317 5.38772 3.18926 6.27041 3.09622C7.17091 3.0013 8.33876 3 10 3H14C15.6612 3 16.8291 3.0013 17.7296 3.09622C18.6123 3.18926 19.1222 3.36317 19.5075 3.63297C19.842 3.86715 20.1329 4.15804 20.367 4.49248C20.6368 4.8778 20.8107 5.38772 20.9038 6.27041C20.9987 7.17091 21 8.33876 21 10C21 11.6612 20.9987 12.8291 20.9038 13.7296C20.8107 14.6123 20.6368 15.1222 20.367 15.5075C20.1329 15.842 19.842 16.1329 19.5075 16.367C19.1222 16.6368 18.6123 16.8107 17.7296 16.9038C16.8291 16.9987 15.6612 17 14 17H10C8.33876 17 7.17091 16.9987 6.27041 16.9038C5.38772 16.8107 4.8778 16.6368 4.49248 16.367C4.15804 16.1329 3.86715 15.842 3.63297 15.5075C3.36317 15.1222 3.18926 14.6123 3.09622 13.7296C3.0013 12.8291 3 11.6612 3 10C3 8.33876 3.0013 7.17091 3.09622 6.27041C3.18926 5.38772 3.36317 4.8778 3.63297 4.49248C3.86715 4.15804 4.15804 3.86715 4.49248 3.63297Z',
  d7: 'M12 4.5C12.5523 4.5 13 4.94772 13 5.5V5.77827C13.8024 6.03113 14.4829 6.58617 14.8085 7.36363C15.0219 7.87302 14.782 8.45896 14.2726 8.67234C13.7632 8.88573 13.1772 8.64577 12.9639 8.13637C12.8699 7.91204 12.5363 7.625 12 7.625C11.2818 7.625 11 8.0853 11 8.3125C11 8.5397 11.2818 9 12 9C13.4909 9 15 10.0507 15 11.6875C15 12.9528 14.0981 13.8679 13 14.2181V14.5C13 15.0523 12.5523 15.5 12 15.5C11.4477 15.5 11 15.0523 11 14.5V14.2217C10.1976 13.9689 9.51714 13.4138 9.19146 12.6364C8.97807 12.127 9.21804 11.541 9.72743 11.3277C10.2368 11.1143 10.8228 11.3542 11.0361 11.8636C11.1301 12.088 11.4637 12.375 12 12.375C12.7182 12.375 13 11.9147 13 11.6875C13 11.4603 12.7182 11 12 11C10.5091 11 9 9.94926 9 8.3125C9 7.04719 9.90187 6.1321 11 5.78192V5.5C11 4.94772 11.4477 4.5 12 4.5Z',
  d8: 'M9.94328 1H14.0567C15.6482 0.999985 16.9216 0.999973 17.9392 1.10724C18.9867 1.21765 19.8777 1.45065 20.6547 1.99466C21.1802 2.36266 21.6373 2.81978 22.0053 3.34533C22.5494 4.12227 22.7824 5.01328 22.8928 6.06076C23 7.07837 23 8.35178 23 9.94327V10.0567C23 11.6482 23 12.9216 22.8928 13.9392C22.7824 14.9867 22.5494 15.8777 22.0053 16.6547C21.6373 17.1802 21.1802 17.6373 20.6547 18.0053C19.8777 18.5494 18.9867 18.7824 17.9392 18.8928C16.9216 19 15.6482 19 14.0567 19H9.94327C8.35178 19 7.07837 19 6.06076 18.8928C5.01328 18.7824 4.12227 18.5494 3.34533 18.0053C2.81978 17.6373 2.36266 17.1802 1.99466 16.6547C1.45065 15.8777 1.21765 14.9867 1.10724 13.9392C0.999973 12.9216 0.999985 11.6482 1 10.0567V9.94328C0.999985 8.35179 0.999973 7.07838 1.10724 6.06076C1.21765 5.01328 1.45065 4.12227 1.99466 3.34533C2.36266 2.81978 2.81978 2.36266 3.34533 1.99466C4.12227 1.45065 5.01328 1.21765 6.06076 1.10724C7.07838 0.999973 8.35179 0.999985 9.94328 1ZM6.27041 3.09622C5.38772 3.18926 4.8778 3.36317 4.49248 3.63297C4.15804 3.86715 3.86715 4.15804 3.63297 4.49248C3.36317 4.8778 3.18926 5.38772 3.09622 6.27041C3.0013 7.17091 3 8.33876 3 10C3 11.6612 3.0013 12.8291 3.09622 13.7296C3.18926 14.6123 3.36317 15.1222 3.63297 15.5075C3.86715 15.842 4.15804 16.1329 4.49248 16.367C4.8778 16.6368 5.38772 16.8107 6.27041 16.9038C7.17091 16.9987 8.33876 17 10 17H14C15.6612 17 16.8291 16.9987 17.7296 16.9038C18.6123 16.8107 19.1222 16.6368 19.5075 16.367C19.842 16.1329 20.1329 15.842 20.367 15.5075C20.6368 15.1222 20.8107 14.6123 20.9038 13.7296C20.9987 12.8291 21 11.6612 21 10C21 8.33876 20.9987 7.17091 20.9038 6.27041C20.8107 5.38772 20.6368 4.8778 20.367 4.49248C20.1329 4.15804 19.842 3.86715 19.5075 3.63297C19.1222 3.36317 18.6123 3.18926 17.7296 3.09622C16.8291 3.0013 15.6612 3 14 3H10C8.33876 3 7.17091 3.0013 6.27041 3.09622Z',
  d9: 'M14.8306 17.25H9.16932L9.55133 18.2643C9.75942 18.8168 9.79852 19.4306 9.69509 19.9899C9.62759 20.3549 9.59384 20.5374 9.31586 20.7687C9.03788 21 8.76464 21 8.21814 21H7C6.44772 21 6 21.4477 6 22C6 22.5523 6.44772 23 7 23H17C17.5523 23 18 22.5523 18 22C18 21.4477 17.5523 21 17 21H15.7818C15.2353 21 14.9621 21 14.6841 20.7687C14.4061 20.5374 14.3724 20.3549 14.3049 19.9899C14.2014 19.4306 14.2405 18.8168 14.4486 18.2643L14.8306 17.25Z',
  d10: 'M14 22V18M10 18V22',
  d11: 'M12 7C10.8954 7 10 7.67157 10 8.5C10 9.32843 10.8954 10 12 10C13.1046 10 14 10.6716 14 11.5C14 12.3284 13.1046 13 12 13M12 7C12.8708 7 13.6116 7.4174 13.8862 8M12 7V5.5M12 13C11.1292 13 10.3884 12.5826 10.1138 12M12 13V14.5',
  d12: 'M22 2H2V18H22V2Z',
  d13: 'M14.75 18H9.25V20.75H7V22.75H17V20.75H14.75V18Z',
  d14: 'M9.98579 6.63934C10.283 6.41646 10.6279 6.24804 11 6.14015V5H13V6.14149C13.7704 6.36492 14.4496 6.84981 14.7908 7.5737L12.9816 8.4263C12.9168 8.28883 12.6009 8 12 8C11.6432 8 11.3586 8.10973 11.1858 8.23934C11.0133 8.36872 11 8.47111 11 8.5C11 8.52889 11.0133 8.63128 11.1858 8.76066C11.3586 8.89027 11.6432 9 12 9C12.7477 9 13.4632 9.22605 14.0142 9.63934C14.5656 10.0529 15 10.7005 15 11.5C15 12.2995 14.5656 12.9471 14.0142 13.3607C13.717 13.5835 13.3721 13.752 13 13.8598V15H11V13.8585C10.2296 13.6351 9.55037 13.1502 9.20922 12.4263L11.0184 11.5737C11.0832 11.7112 11.3991 12 12 12C12.3568 12 12.6414 11.8903 12.8142 11.7607C12.9867 11.6313 13 11.5289 13 11.5C13 11.4711 12.9867 11.3687 12.8142 11.2393C12.6414 11.1097 12.3568 11 12 11C11.2523 11 10.5368 10.7739 9.98579 10.3607C9.43443 9.94714 9 9.29954 9 8.5C9 7.70046 9.43443 7.05286 9.98579 6.63934Z',
  d15: 'M1.25 2.22222C1.25 1.68528 1.68754 1.25 2.22727 1.25H21.7727C22.3125 1.25 22.75 1.68528 22.75 2.22222V17.7778C22.75 18.3147 22.3125 18.75 21.7727 18.75H2.22727C1.68754 18.75 1.25 18.3147 1.25 17.7778V2.22222ZM3.20455 3.19444V16.8056H20.7955V3.19444H3.20455Z',
} as const;

export const IconComputerDollarStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-dollar-stroke-rounded IconComputerDollarStrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerDollarDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-dollar-duotone-rounded IconComputerDollarDuotoneRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerDollarTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-dollar-twotone-rounded IconComputerDollarTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerDollarSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-dollar-solid-rounded IconComputerDollarSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconComputerDollarBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-dollar-bulk-rounded IconComputerDollarBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerDollarStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-dollar-stroke-sharp IconComputerDollarStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerDollarSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-dollar-solid-sharp IconComputerDollarSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfComputerDollar: TheIconSelfPack = {
  name: 'ComputerDollar',
  StrokeRounded: IconComputerDollarStrokeRounded,
  DuotoneRounded: IconComputerDollarDuotoneRounded,
  TwotoneRounded: IconComputerDollarTwotoneRounded,
  SolidRounded: IconComputerDollarSolidRounded,
  BulkRounded: IconComputerDollarBulkRounded,
  StrokeSharp: IconComputerDollarStrokeSharp,
  SolidSharp: IconComputerDollarSolidSharp,
};