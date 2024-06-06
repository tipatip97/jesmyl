import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 19C12.2094 19 12.4041 18.9011 12.7934 18.7032L15.9228 17.1128C17.3076 16.4091 18 16.0572 18 15.5V8.5M12 19C11.7906 19 11.5959 18.9011 11.2066 18.7032L8.07717 17.1128C6.69239 16.4091 6 16.0572 6 15.5V8.5M12 19V12M18 8.5C18 7.94278 17.3076 7.59091 15.9228 6.88716L12.7934 5.29679C12.4041 5.09893 12.2094 5 12 5C11.7906 5 11.5959 5.09893 11.2066 5.29679L8.07717 6.88716C6.69239 7.59091 6 7.94278 6 8.5M18 8.5C18 9.05722 17.3076 9.40909 15.9228 10.1128L12.7934 11.7032C12.4041 11.9011 12.2094 12 12 12M6 8.5C6 9.05722 6.69239 9.40909 8.07717 10.1128L11.2066 11.7032C11.5959 11.9011 11.7906 12 12 12',
  d2: 'M13.1901 21.576L17.8842 19.3041C19.9614 18.2987 21 17.796 21 17V7C21 6.20397 19.9614 5.70129 17.8842 4.69594L13.1901 2.42399L13.1901 2.42398C12.6061 2.14133 12.3141 2 12 2C11.6859 2 11.3939 2.14133 10.8099 2.42399L6.11576 4.69594C4.03859 5.70129 3 6.20397 3 7V17C3 17.796 4.03858 18.2987 6.11572 19.304L6.11576 19.3041L10.8099 21.576C11.3939 21.8587 11.6859 22 12 22C12.3141 22 12.6061 21.8587 13.1901 21.576Z',
  d3: 'M12.7934 18.7032L15.9228 17.1128C17.3076 16.4091 18 16.0572 18 15.5V8.5C18 7.94278 17.3076 7.59091 15.9228 6.88716L12.7934 5.29679C12.4041 5.09893 12.2094 5 12 5C11.7906 5 11.5959 5.09893 11.2066 5.29679L8.07717 6.88716C6.69239 7.5909 6 7.94278 6 8.5C6 9.05722 6.69239 9.40909 8.07717 10.1128L11.2066 11.7032C11.5959 11.9011 11.7906 12 12 12V19C12.2094 19 12.4041 18.9011 12.7934 18.7032Z',
  d4: 'M6 7.75C6.41421 7.75 6.75 8.08579 6.75 8.5V15.4657C7.02734 15.7578 7.70171 16.0807 8.41696 16.4442L11.25 17.884V12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V17.884L15.583 16.4442C16.2983 16.0807 16.9599 15.6715 17.25 15.4657V8.5C17.25 8.08579 17.5858 7.75 18 7.75C18.4142 7.75 18.75 8.08579 18.75 8.5V15.5C18.75 16.1565 18.315 16.5792 17.9147 16.8632C17.5229 17.1411 16.9626 17.4258 16.3153 17.7547L13.1108 19.3832C12.9355 19.4723 12.7633 19.5599 12.6081 19.622C12.4326 19.6923 12.2331 19.75 12 19.75C11.7669 19.75 11.5674 19.6923 11.3919 19.622C11.2368 19.5599 11.0645 19.4723 10.8892 19.3832L7.68467 17.7547L7.68466 17.7547C7.03741 17.4258 6.47708 17.1411 6.08535 16.8632C5.685 16.5792 5.25 16.1565 5.25 15.5V8.5C5.25 8.08579 5.58579 7.75 6 7.75Z',
  d5: 'M11.3919 4.37796C11.5674 4.30767 11.7669 4.25 12 4.25C12.2331 4.25 12.4326 4.30767 12.6081 4.37796C12.7632 4.44011 12.9355 4.52769 13.1108 4.61679L16.3153 6.24533L16.3153 6.24533C16.9626 6.57421 17.5229 6.85892 17.9147 7.13681C18.315 7.42082 18.75 7.84354 18.75 8.5C18.75 9.15646 18.315 9.57918 17.9147 9.86319C17.5229 10.1411 16.9626 10.4258 16.3153 10.7547L16.3153 10.7547L13.1108 12.3832C12.9355 12.4723 12.7633 12.5599 12.6081 12.622C12.4326 12.6923 12.2331 12.75 12 12.75C11.7669 12.75 11.5674 12.6923 11.3919 12.622C11.2367 12.5599 11.0645 12.4723 10.8892 12.3832L7.73738 10.7815C7.09013 10.4526 6.47708 10.1411 6.08535 9.86319C5.685 9.57918 5.25 9.15646 5.25 8.5C5.25 7.84354 5.685 7.42082 6.08535 7.13681C6.47707 6.85893 7.03741 6.57421 7.68466 6.24534L7.68467 6.24533L10.8892 4.6168C11.0645 4.52769 11.2367 4.44011 11.3919 4.37796Z',
  d6: 'M12 2.75C11.8981 2.75 11.7856 2.78498 11.1366 3.09907L6.4425 5.37103C5.38118 5.88471 4.66237 6.23474 4.19881 6.54793C3.73657 6.86022 3.7491 6.99055 3.74996 6.99956C3.74996 6.99948 3.74999 6.99978 3.74996 6.99956L3.75 17C3.75 17.0001 3.75002 16.9998 3.75 17C3.74913 17.009 3.73657 17.1398 4.19881 17.4521C4.66237 17.7653 5.38118 18.1153 6.4425 18.629L11.1366 20.9009C11.7856 21.215 11.8981 21.25 12 21.25C12.1019 21.25 12.2144 21.215 12.8634 20.9009L17.5575 18.629C18.6188 18.1153 19.3376 17.7653 19.8012 17.4521C20.2634 17.1398 20.2509 17.0094 20.25 17.0004C20.25 17.0002 20.25 17.0005 20.25 17.0004L20.25 7C20.25 7.00022 20.25 6.99992 20.25 7C20.2509 6.991 20.2634 6.86022 19.8012 6.54793C19.3376 6.23474 18.6188 5.88471 17.5575 5.37103L12.8634 3.09907C12.2144 2.78498 12.1019 2.75 12 2.75ZM10.5863 1.69881C11.0653 1.46578 11.5088 1.25 12 1.25C12.4912 1.25 12.9347 1.46577 13.4137 1.69881C13.4479 1.71544 13.4823 1.73216 13.5169 1.7489L18.2676 4.04825C19.258 4.52758 20.0766 4.92375 20.6409 5.30501C21.2059 5.68673 21.75 6.20713 21.75 7V17C21.75 17.7929 21.2059 18.3133 20.6409 18.695C20.0766 19.0763 19.258 19.4724 18.2676 19.9518L13.5169 22.2511C13.4823 22.2678 13.4479 22.2846 13.4137 22.3012C12.9347 22.5342 12.4912 22.75 12 22.75C11.5088 22.75 11.0653 22.5342 10.5863 22.3012C10.5521 22.2846 10.5177 22.2678 10.4831 22.2511L5.73236 19.9517C4.74196 19.4724 3.92337 19.0762 3.35907 18.695C2.79407 18.3133 2.25 17.7929 2.25 17V7C2.25 6.20713 2.79407 5.68673 3.35907 5.30501C3.92338 4.92375 4.74197 4.52759 5.73239 4.04826C5.7512 4.03916 5.77008 4.03002 5.78901 4.02086L10.4831 1.7489C10.5177 1.73216 10.5521 1.71544 10.5863 1.69881Z',
  d7: 'M12 11.5L6.34382 8.67191M12 11.5L17.6562 8.67191M12 11.5V18.082M12 5.5L18 8.5V15.5L12 18.5L6 15.5V8.5L12 5.5Z',
  d8: 'M21 7L12 2L3 7V17L12 22L21 17V7Z',
  d9: 'M12.3354 4.82918C12.1243 4.72361 11.8757 4.72361 11.6646 4.82918L5.66459 7.82918C5.4105 7.95622 5.25 8.21592 5.25 8.5V15.5C5.25 15.7841 5.4105 16.0438 5.66459 16.1708L11.6646 19.1708C11.8757 19.2764 12.1243 19.2764 12.3354 19.1708L18.3354 16.1708C18.5895 16.0438 18.75 15.7841 18.75 15.5V8.5C18.75 8.21592 18.5895 7.95622 18.3354 7.82918L12.3354 4.82918ZM6.75 9.71387L11.25 11.9639V17.2868L6.75 15.0368V9.71387ZM17.25 15.0368L12.75 17.2868V11.9639L17.25 9.71387V15.0368Z',
  d10: 'M11.6358 1.34438C11.8623 1.21854 12.1377 1.21854 12.3642 1.34438L21.3642 6.34438C21.6023 6.47666 21.75 6.72762 21.75 7V17C21.75 17.2724 21.6023 17.5233 21.3642 17.6556L12.3642 22.6556C12.1377 22.7815 11.8623 22.7815 11.6358 22.6556L2.63577 17.6556C2.39767 17.5233 2.25 17.2724 2.25 17V7C2.25 6.72762 2.39767 6.47666 2.63577 6.34438L11.6358 1.34438ZM3.75 7.4413V16.5587L12 21.142L20.25 16.5587V7.4413L12 2.85797L3.75 7.4413Z',
};

export const IconBlockchain03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-03-stroke-rounded IconBlockchain03StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-03-duotone-rounded IconBlockchain03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-03-twotone-rounded IconBlockchain03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-03-solid-rounded IconBlockchain03SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconBlockchain03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-03-bulk-rounded IconBlockchain03BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-03-stroke-sharp IconBlockchain03StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-03-solid-sharp IconBlockchain03SolidSharp"
    >
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

export const iconPackOfBlockchain03: TheIconSelfPack = {
  name: 'Blockchain03',
  StrokeRounded: IconBlockchain03StrokeRounded,
  DuotoneRounded: IconBlockchain03DuotoneRounded,
  TwotoneRounded: IconBlockchain03TwotoneRounded,
  SolidRounded: IconBlockchain03SolidRounded,
  BulkRounded: IconBlockchain03BulkRounded,
  StrokeSharp: IconBlockchain03StrokeSharp,
  SolidSharp: IconBlockchain03SolidSharp,
};