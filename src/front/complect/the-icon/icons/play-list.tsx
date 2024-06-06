import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 7.5H21.5',
  d2: 'M17 2.5L14 7.5',
  d3: 'M10 2.5L7 7.5',
  d4: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d5: 'M14.9531 14.8948C14.8016 15.5215 14.0857 15.9644 12.6539 16.8502C11.2697 17.7064 10.5777 18.1346 10.0199 17.9625C9.78934 17.8913 9.57925 17.7562 9.40982 17.57C9 17.1198 9 16.2465 9 14.5C9 12.7535 9 11.8802 9.40982 11.4299C9.57925 11.2438 9.78934 11.1087 10.0199 11.0375C10.5777 10.8654 11.2697 11.2936 12.6539 12.1498C14.0857 13.0356 14.8016 13.4785 14.9531 14.1052C15.0156 14.3639 15.0156 14.6361 14.9531 14.8948Z',
  d6: 'M2.59794 7.5H21.3041L21.5 12.0001C21.5 16.4785 21.5 18.7176 20.1088 20.1089C18.7175 21.5001 16.4783 21.5001 12 21.5001C7.52166 21.5001 5.28249 21.5001 3.89124 20.1089C2.5 18.7176 2.5 16.4785 2.5 12.0001C2.5 10.151 2.5 8.68357 2.59794 7.5ZM12.6539 16.8502C14.0857 15.9644 14.8016 15.5215 14.9531 14.8948C15.0156 14.6361 15.0156 14.3639 14.9531 14.1052C14.8016 13.4785 14.0857 13.0356 12.6539 12.1498C11.2697 11.2936 10.5777 10.8654 10.0199 11.0375C9.78934 11.1087 9.57925 11.2438 9.40982 11.4299C9 11.8802 9 12.7535 9 14.5C9 16.2465 9 17.1198 9.40982 17.57C9.57925 17.7562 9.78934 17.8913 10.0199 17.9625C10.5777 18.1346 11.2697 17.7064 12.6539 16.8502Z',
  d7: 'M2.5 7.5H21.5M17 2.5L14 7.5M10 2.5L7 7.5',
  d8: 'M11.6525 1.81436C11.7667 1.74949 11.9052 1.7491 12.1823 1.74831L12.3881 1.74771C13.3696 1.74474 14.3524 1.74177 15.333 1.77893C15.7678 1.7954 15.9853 1.80364 16.0666 1.95457C16.148 2.1055 16.0338 2.29421 15.8055 2.67164L13.4793 6.51698L13.4793 6.51699C13.3368 6.75265 13.2655 6.87048 13.1512 6.93493C13.0368 6.99938 12.8991 6.99938 12.6237 6.99938H9.17267C8.85945 6.99938 8.70283 6.99938 8.64539 6.89792C8.58794 6.79646 8.66852 6.66217 8.82967 6.39359L11.325 2.2347C11.4672 1.99773 11.5383 1.87924 11.6525 1.81436ZM9.0907 1.87017C9.03003 1.76805 8.87165 1.77393 8.5549 1.7857C7.86371 1.81139 7.2436 1.85519 6.68802 1.92989C5.31137 2.11497 4.21911 2.50201 3.36091 3.36021C2.49797 4.22315 2.12446 5.37886 1.94949 6.5566C1.91938 6.75928 1.90433 6.86062 1.96417 6.93C2.024 6.99938 2.129 6.99938 2.33901 6.99938H5.59742C5.87539 6.99938 6.01438 6.99938 6.1294 6.93391C6.24441 6.86844 6.31537 6.74893 6.45728 6.5099L8.90681 2.38419C9.06985 2.10959 9.15137 1.97229 9.0907 1.87017ZM19.1711 2.39311C18.8653 2.26727 18.7124 2.20434 18.5375 2.2612C18.3627 2.31805 18.2656 2.47586 18.0714 2.79148L15.857 6.38975C15.691 6.65958 15.608 6.79451 15.6652 6.89694C15.7224 6.99938 15.8809 6.99938 16.1977 6.99938H21.661C21.871 6.99938 21.976 6.99938 22.0358 6.93C22.0957 6.86062 22.0806 6.75928 22.0505 6.55661C21.8756 5.37886 21.502 4.22314 20.6391 3.36021C20.2103 2.93141 19.7231 2.62024 19.1711 2.39311ZM22.1183 9.11482C22.2352 9.23025 22.2374 9.4131 22.2419 9.77879C22.25 10.4432 22.25 11.1628 22.25 11.9419V11.942V11.942V11.9421V12.0565C22.25 14.2472 22.25 15.9679 22.0694 17.3113C21.8843 18.6879 21.4973 19.7802 20.6391 20.6384C19.7809 21.4966 18.6886 21.8836 17.312 22.0687C15.9686 22.2493 14.2479 22.2493 12.0572 22.2493H11.9428C9.7521 22.2493 8.03144 22.2493 6.68802 22.0687C5.31137 21.8836 4.21911 21.4966 3.36091 20.6384C2.50272 19.7802 2.11568 18.6879 1.93059 17.3113C1.74998 15.9679 1.74999 14.2472 1.75 12.0565V11.9421V11.942C1.75 11.1629 1.74999 10.4432 1.75811 9.77879C1.76259 9.4131 1.76482 9.23025 1.88167 9.11482C1.99853 8.99938 2.18305 8.99938 2.5521 8.99938H21.4479C21.8169 8.99938 22.0015 8.99938 22.1183 9.11482ZM12.6539 16.8502C14.0857 15.9644 14.8016 15.5215 14.9531 14.8948C15.0156 14.6361 15.0156 14.3639 14.9531 14.1052C14.8016 13.4785 14.0857 13.0356 12.6539 12.1498C11.2697 11.2936 10.5777 10.8654 10.0199 11.0375C9.78934 11.1087 9.57925 11.2438 9.40982 11.4299C9 11.8802 9 12.7535 9 14.5C9 16.2465 9 17.1198 9.40982 17.57C9.57925 17.7562 9.78934 17.8913 10.0199 17.9625C10.5777 18.1346 11.2697 17.7064 12.6539 16.8502Z',
  d9: 'M22.2419 9.77941C22.2374 9.41371 22.2352 9.23087 22.1183 9.11543C22.0015 9 21.8169 9 21.4479 9H2.5521C2.18305 9 1.99853 9 1.88167 9.11543C1.76482 9.23087 1.76259 9.41371 1.75811 9.77941C1.74999 10.4438 1.75 11.1635 1.75 11.9427V12.0571C1.74999 14.2478 1.74998 15.9685 1.93059 17.3119C2.11568 18.6885 2.50272 19.7808 3.36091 20.639C4.21911 21.4972 5.31137 21.8842 6.68802 22.0693C8.03144 22.2499 9.7521 22.2499 11.9428 22.2499H12.0572C14.2479 22.2499 15.9686 22.2499 17.312 22.0693C18.6886 21.8842 19.7809 21.4972 20.6391 20.639C21.4973 19.7808 21.8843 18.6885 22.0694 17.3119C22.25 15.9685 22.25 14.2478 22.25 12.0571V11.9427C22.25 11.1636 22.25 10.4438 22.2419 9.77941Z',
  d10: 'M8.55563 1.7857C8.87238 1.77393 9.03075 1.76805 9.09142 1.87017C9.15209 1.97229 9.07058 2.10959 8.90754 2.38419L6.45801 6.5099C6.3161 6.74893 6.24514 6.86844 6.13013 6.93391C6.01511 6.99938 5.87612 6.99938 5.59814 6.99938H2.33974C2.12973 6.99938 2.02473 6.99938 1.96489 6.93C1.90506 6.86062 1.92011 6.75928 1.95022 6.5566C2.12518 5.37886 2.4987 4.22315 3.36164 3.36021C4.21984 2.50201 5.31209 2.11497 6.68875 1.92989C7.24433 1.85519 7.86444 1.81139 8.55563 1.7857Z',
  d11: 'M12.183 1.74831C11.906 1.7491 11.7674 1.74949 11.6532 1.81436C11.539 1.87924 11.4679 1.99773 11.3257 2.2347L8.8304 6.39359C8.66925 6.66217 8.58867 6.79646 8.64612 6.89792C8.70356 6.99938 8.86017 6.99938 9.17339 6.99938H12.6244C12.8999 6.99938 13.0376 6.99938 13.1519 6.93493C13.2662 6.87047 13.3375 6.75264 13.4801 6.51698L15.8063 2.67164C16.0346 2.29421 16.1487 2.1055 16.0674 1.95457C15.986 1.80364 15.7686 1.7954 15.3337 1.77893C14.2845 1.73918 13.2329 1.74535 12.183 1.74831Z',
  d12: 'M19.1719 2.39311C18.866 2.26727 18.7131 2.20434 18.5383 2.2612C18.3634 2.31805 18.2663 2.47586 18.0721 2.79148L15.8578 6.38975C15.6917 6.65958 15.6087 6.79451 15.6659 6.89694C15.7232 6.99938 15.8816 6.99938 16.1984 6.99938H21.6617C21.8717 6.99938 21.9767 6.99938 22.0366 6.93C22.0964 6.86062 22.0813 6.75928 22.0512 6.55661C21.8763 5.37886 21.5028 4.22314 20.6398 3.36021C20.211 2.93141 19.7238 2.62024 19.1719 2.39311Z',
  d13: 'M3 7H21',
  d14: 'M17 3L14 7',
  d15: 'M10 3L7 7',
  d16: 'M21 21V3H3V21H21Z',
  d17: 'M10.5 17.5V10.5L16 14L10.5 17.5Z',
  d18: 'M3 2.24976H8.7331L6.55309 6.24976H2.25V2.99976C2.25 2.58554 2.58579 2.24976 3 2.24976Z',
  d19: 'M13.5531 6.24976H8.26139L10.4414 2.24976H15.7331L13.5531 6.24976Z',
  d20: 'M17.4414 2.24976L15.2614 6.24976H21.75V2.99976C21.75 2.58554 21.4142 2.24976 21 2.24976H17.4414Z',
  d21: 'M21.75 7.74976H2.25V20.9998C2.25 21.414 2.58579 21.7498 3 21.7498H21C21.4142 21.7498 21.75 21.414 21.75 20.9998V7.74976ZM15.5 14.4998L10 10.9998V17.9998L15.5 14.4998Z',
};

export const IconPlayListStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-stroke-rounded IconPlayListStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-duotone-rounded IconPlayListDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-twotone-rounded IconPlayListTwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-solid-rounded IconPlayListSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-bulk-rounded IconPlayListBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-stroke-sharp IconPlayListStrokeSharp"
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
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-solid-sharp IconPlayListSolidSharp"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPlayList: TheIconSelfPack = {
  name: 'PlayList',
  StrokeRounded: IconPlayListStrokeRounded,
  DuotoneRounded: IconPlayListDuotoneRounded,
  TwotoneRounded: IconPlayListTwotoneRounded,
  SolidRounded: IconPlayListSolidRounded,
  BulkRounded: IconPlayListBulkRounded,
  StrokeSharp: IconPlayListStrokeSharp,
  SolidSharp: IconPlayListSolidSharp,
};