import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C22 14.9188 22 13.2792 22 10C22 6.72077 22 5.08116 21.1862 3.91891C20.8851 3.48891 20.5111 3.1149 20.0811 2.81382C18.9188 2 17.2792 2 14 2Z',
  d2: 'M16 8L17.2265 9.05719C17.7422 9.50163 18 9.72386 18 10C18 10.2761 17.7422 10.4984 17.2265 10.9428L16 12',
  d3: 'M8 8L6.77346 9.05719C6.25782 9.50163 6 9.72386 6 10C6 10.2761 6.25782 10.4984 6.77346 10.9428L8 12',
  d4: 'M13 7L11 13',
  d5: 'M14.6557 22L14.2369 21.5811C13.2926 20.6369 13.0585 19.1944 13.6557 18',
  d6: 'M9.00051 22L9.41937 21.5811C10.3636 20.6369 10.5977 19.1944 10.0005 18',
  d7: 'M7 22H17',
  d8: 'M9.94328 1H14.0567C15.6482 0.999985 16.9216 0.999973 17.9392 1.10724C18.9867 1.21765 19.8777 1.45065 20.6547 1.99466C21.1802 2.36266 21.6373 2.81978 22.0053 3.34533C22.5494 4.12227 22.7824 5.01328 22.8928 6.06076C23 7.07837 23 8.35178 23 9.94327V10.0567C23 11.6482 23 12.9216 22.8928 13.9392C22.7824 14.9867 22.5494 15.8777 22.0053 16.6547C21.6373 17.1802 21.1802 17.6373 20.6547 18.0053C19.8777 18.5494 18.9867 18.7824 17.9392 18.8928C16.9216 19 15.6482 19 14.0567 19H9.94327C8.35178 19 7.07837 19 6.06076 18.8928C5.01328 18.7824 4.12227 18.5494 3.34533 18.0053C2.81978 17.6373 2.36266 17.1802 1.99466 16.6547C1.45065 15.8777 1.21765 14.9867 1.10724 13.9392C0.999973 12.9216 0.999985 11.6482 1 10.0567V9.94328C0.999985 8.35179 0.999973 7.07838 1.10724 6.06076C1.21765 5.01328 1.45065 4.12227 1.99466 3.34533C2.36266 2.81978 2.81978 2.36266 3.34533 1.99466C4.12227 1.45065 5.01328 1.21765 6.06076 1.10724C7.07838 0.999973 8.35179 0.999985 9.94328 1ZM6.27041 3.09622C5.38772 3.18926 4.8778 3.36317 4.49248 3.63297C4.15804 3.86715 3.86715 4.15804 3.63297 4.49248C3.36317 4.8778 3.18926 5.38772 3.09622 6.27041C3.0013 7.17091 3 8.33876 3 10C3 11.6612 3.0013 12.8291 3.09622 13.7296C3.18926 14.6123 3.36317 15.1222 3.63297 15.5075C3.86715 15.842 4.15804 16.1329 4.49248 16.367C4.8778 16.6368 5.38772 16.8107 6.27041 16.9038C7.17091 16.9987 8.33876 17 10 17H14C15.6612 17 16.8291 16.9987 17.7296 16.9038C18.6123 16.8107 19.1222 16.6368 19.5075 16.367C19.842 16.1329 20.1329 15.842 20.367 15.5075C20.6368 15.1222 20.8107 14.6123 20.9038 13.7296C20.9987 12.8291 21 11.6612 21 10C21 8.33876 20.9987 7.17091 20.9038 6.27041C20.8107 5.38772 20.6368 4.8778 20.367 4.49248C20.1329 4.15804 19.842 3.86715 19.5075 3.63297C19.1222 3.36317 18.6123 3.18926 17.7296 3.09622C16.8291 3.0013 15.6612 3 14 3H10C8.33876 3 7.17091 3.0013 6.27041 3.09622Z',
  d9: 'M14.8306 17.25H9.16932L9.55133 18.2643C9.75942 18.8168 9.79852 19.4306 9.69509 19.9899C9.62759 20.3549 9.59384 20.5374 9.31586 20.7687C9.03788 21 8.76464 21 8.21814 21H7C6.44772 21 6 21.4477 6 22C6 22.5523 6.44772 23 7 23H17C17.5523 23 18 22.5523 18 22C18 21.4477 17.5523 21 17 21H15.7818C15.2353 21 14.9621 21 14.6841 20.7687C14.4061 20.5374 14.3724 20.3549 14.3049 19.9899C14.2014 19.4306 14.2405 18.8168 14.4486 18.2643L14.8306 17.25Z',
  d10: 'M15.2425 7.34714C14.882 7.76547 14.9288 8.3969 15.3471 8.75748L16.5737 9.81467L17.2265 9.05721L16.5737 9.81467C16.6552 9.88498 16.7256 9.94562 16.7876 10C16.7256 10.0544 16.6552 10.1151 16.5737 10.1854L15.3471 11.2426C14.9288 11.6031 14.882 12.2346 15.2425 12.6529C15.6031 13.0712 16.2345 13.1181 16.6529 12.7575L17.8794 11.7003C17.8917 11.6897 17.9041 11.679 17.9165 11.6684C18.1415 11.4746 18.3806 11.2686 18.5554 11.0711C18.7531 10.8478 19 10.4934 19 10C19 9.50662 18.7531 9.15222 18.5554 8.92891C18.3806 8.7314 18.1415 8.52548 17.9165 8.33166C17.9041 8.32098 17.8917 8.31034 17.8794 8.29975C17.8794 8.29975 17.8794 8.29975 17.8794 8.29974L16.6529 7.24255C16.2345 6.88198 15.6031 6.9288 15.2425 7.34714Z',
  d11: 'M8.75746 7.34714C9.11804 7.76547 9.07121 8.3969 8.65288 8.75748L7.42634 9.81467L6.77346 9.05721L7.42634 9.81467C7.34477 9.88498 7.27445 9.94562 7.21242 10C7.27445 10.0544 7.34477 10.1151 7.42634 10.1854L8.65288 11.2426C9.07121 11.6031 9.11804 12.2346 8.75746 12.6529C8.39689 13.0712 7.76546 13.1181 7.34712 12.7575L6.12058 11.7003C6.10828 11.6897 6.09593 11.679 6.08353 11.6684C5.8585 11.4746 5.61941 11.2686 5.44458 11.0711C5.24691 10.8478 5 10.4934 5 10C5 9.50662 5.24691 9.15222 5.44458 8.92891C5.61941 8.7314 5.85851 8.52548 6.08354 8.33166C6.09593 8.32098 6.10828 8.31034 6.12058 8.29975C6.12058 8.29975 6.12058 8.29975 6.12058 8.29974L7.34712 7.24255C7.76546 6.88198 8.39689 6.9288 8.75746 7.34714Z',
  d12: 'M13.3165 6.05159C13.8404 6.22624 14.1236 6.79256 13.949 7.3165L11.949 13.3165C11.7743 13.8404 11.208 14.1236 10.684 13.949C10.1601 13.7743 9.87694 13.208 10.0516 12.684L12.0516 6.68404C12.2262 6.1601 12.7926 5.87694 13.3165 6.05159Z',
  d13: 'M9.72791 19C9.76674 19.3334 9.75416 19.6705 9.69509 19.9899C9.62759 20.3549 9.59384 20.5374 9.31586 20.7687C9.03788 21 8.76464 21 8.21814 21H7C6.44772 21 6 21.4477 6 22C6 22.5523 6.44772 23 7 23H17C17.5523 23 18 22.5523 18 22C18 21.4477 17.5523 21 17 21H15.7818C15.2353 21 14.9621 21 14.6841 20.7687C14.4061 20.5374 14.3724 20.3549 14.3049 19.9899C14.2458 19.6705 14.2332 19.3334 14.272 19C14.2009 19 14.1292 19 14.0567 19H9.94327C9.87083 19 9.79904 19 9.72791 19Z',
  d14: 'M22 2.5H2V17.5H22V2.5Z',
  d15: 'M14 21.5V17.5M10 21.5V17.5',
  d16: 'M7 21.5H17',
  d17: 'M15.0039 6.99613L18.0077 9.99293L14.9973 13.002M12.9935 6.00586L10.9987 14.0024M9.00813 6.9946L6.00195 9.99407L9.00813 13.0005',
  d18: 'M1.25 2.72059C1.25 2.18455 1.68754 1.75 2.22727 1.75H21.7727C22.3125 1.75 22.75 2.18455 22.75 2.72059V17.2794C22.75 17.8155 22.3125 18.25 21.7727 18.25H2.22727C1.68754 18.25 1.25 17.8155 1.25 17.2794V2.72059ZM3.20455 3.69118V16.3088H20.7955V3.69118H3.20455Z',
  d19: 'M10.0299 13.7578L12.0299 5.75781L13.9702 6.24288L11.9702 14.2429L10.0299 13.7578ZM8.29292 6.29324L9.70714 7.70745L7.41424 10.0003L9.70714 12.2932L8.29292 13.7075L4.58582 10.0003L8.29292 6.29324ZM16.5858 10.0003L14.2929 7.70745L15.7071 6.29324L19.4142 10.0003L15.7071 13.7075L14.2929 12.2932L16.5858 10.0003Z',
  d20: 'M14.5 20.25H17V22.25H7V20.25H9.5V17.5H14.5V20.25Z',
};

export const IconComputerProgramming01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-programming-01-stroke-rounded IconComputerProgramming01StrokeRounded"
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

export const IconComputerProgramming01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-programming-01-duotone-rounded IconComputerProgramming01DuotoneRounded"
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

export const IconComputerProgramming01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-programming-01-twotone-rounded IconComputerProgramming01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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

export const IconComputerProgramming01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-programming-01-solid-rounded IconComputerProgramming01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconComputerProgramming01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-programming-01-bulk-rounded IconComputerProgramming01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerProgramming01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-programming-01-stroke-sharp IconComputerProgramming01StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconComputerProgramming01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-programming-01-solid-sharp IconComputerProgramming01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfComputerProgramming01: TheIconSelfPack = {
  name: 'ComputerProgramming01',
  StrokeRounded: IconComputerProgramming01StrokeRounded,
  DuotoneRounded: IconComputerProgramming01DuotoneRounded,
  TwotoneRounded: IconComputerProgramming01TwotoneRounded,
  SolidRounded: IconComputerProgramming01SolidRounded,
  BulkRounded: IconComputerProgramming01BulkRounded,
  StrokeSharp: IconComputerProgramming01StrokeSharp,
  SolidSharp: IconComputerProgramming01SolidSharp,
};