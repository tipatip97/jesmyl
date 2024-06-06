import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4ZM12 4C12 3.5 12.4 2.4 14 2',
  d2: 'M10 6C7.79149 6 5.9019 8.49273 7.24928 10.0811C5.6231 9.73961 4 10.9457 4 12.5341C4 15.4859 8.66165 15.9075 9.27999 13.0367C9.84382 15.6544 14.1562 15.6544 14.72 13.0367C15.3384 15.9075 20 15.4859 20 12.5341C20 10.9457 18.3769 9.73961 16.7507 10.0811C18.0981 8.49273 16.2085 6 14 6',
  d3: 'M6 15L7.17111 19.0989C7.57006 20.4952 7.76954 21.1934 8.30421 21.5967C8.83888 22 9.56499 22 11.0172 22H12.9828C14.435 22 15.1611 22 15.6958 21.5967C16.2305 21.1934 16.4299 20.4952 16.8289 19.0989L18 15',
  d4: 'M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6Z',
  d5: 'M14.7204 13.0391C14.1565 15.6568 9.84417 15.6568 9.28034 13.0391C8.93261 14.6535 7.30619 15.2267 5.94922 14.8942C5.98325 14.9662 6.01134 15.0408 6.0332 15.1173L7.17146 19.1012C7.57041 20.4976 7.76989 21.1957 8.30456 21.599C8.83923 22.0023 9.56534 22.0023 11.0176 22.0023H12.9831C14.4354 22.0023 15.1615 22.0023 15.6961 21.599C16.2308 21.1957 16.4303 20.4976 16.8292 19.1012L18.0003 15.0023L18.0321 14.8989C16.6791 15.2212 15.0664 14.6458 14.7204 13.0391Z',
  d6: 'M14.7274 1.81828C14.627 1.41643 14.2198 1.17211 13.8179 1.27257C12.3416 1.64166 11.6246 2.54371 11.3665 3.32346C10.153 3.60949 9.24982 4.69936 9.24982 6.00018C9.24982 7.51896 10.481 8.75018 11.9998 8.75018C13.5186 8.75018 14.7498 7.51896 14.7498 6.00018C14.7498 4.8286 14.0172 3.82814 12.9851 3.43194C13.1839 3.17054 13.5429 2.88748 14.1817 2.72778C14.5836 2.62732 14.8279 2.22012 14.7274 1.81828Z',
  d7: 'M7.83764 5.90754C7.90835 5.86185 7.99953 5.91643 7.99953 6.00062C7.99953 8.20976 9.79039 10.0006 11.9995 10.0006C14.2087 10.0006 15.9995 8.20976 15.9995 6.00062C15.9995 5.91618 16.091 5.86142 16.1619 5.90724C16.6256 6.20681 17.0225 6.58935 17.3215 7.01305C17.7297 7.59127 17.9894 8.30862 17.9487 9.03116C17.9394 9.19635 18.047 9.35053 18.2069 9.39285C19.6135 9.76493 20.75 10.9801 20.75 12.5347C20.75 14.5129 19.1634 15.5767 17.6613 15.7163C16.7269 15.8032 15.6896 15.5462 14.9411 14.8762C14.8095 14.7585 14.6054 14.7566 14.4723 14.8725C13.7846 15.4706 12.8604 15.7506 12 15.7506C11.1396 15.7506 10.2154 15.4706 9.52773 14.8725C9.39455 14.7566 9.19047 14.7585 9.05894 14.8762C8.31036 15.5462 7.27312 15.8032 6.33869 15.7163C4.83656 15.5767 3.25 14.5129 3.25 12.5347C3.25 10.9801 4.38654 9.76493 5.79308 9.39284C5.95303 9.35053 6.06061 9.19634 6.05131 9.03116C6.01063 8.30862 6.2703 7.59127 6.67845 7.01305C6.97743 6.5895 7.37417 6.20707 7.83764 5.90754Z',
  d8: 'M6.22374 16.9589C6.01075 16.9391 5.83144 17.1361 5.8902 17.3417L6.46255 19.3449C6.65192 20.0078 6.8117 20.5671 6.99528 21.0074C7.1903 21.4751 7.44069 21.8828 7.85332 22.1941C8.26595 22.5053 8.72673 22.6341 9.23003 22.6931C9.70383 22.7487 10.2855 22.7486 10.9749 22.7486H13.0266C13.716 22.7486 14.2977 22.7487 14.7715 22.6931C15.2748 22.6341 15.7356 22.5053 16.1482 22.1941C16.5608 21.8828 16.8112 21.4751 17.0062 21.0074C17.1898 20.5671 17.3496 20.0078 17.539 19.3449L18.1113 17.3417C18.1701 17.1361 17.9908 16.9391 17.7778 16.9589C16.8894 17.0415 15.9018 16.8906 15.0236 16.4356C14.8553 16.3484 14.7712 16.3048 14.6984 16.3047C14.6256 16.3046 14.5417 16.3476 14.3739 16.4338C13.6144 16.8237 12.777 16.9986 12.0007 16.9986C11.2245 16.9986 10.3871 16.8237 9.62758 16.4338C9.45982 16.3476 9.37594 16.3046 9.30313 16.3047C9.23033 16.3048 9.14618 16.3484 8.97789 16.4356C8.09969 16.8906 7.11212 17.0415 6.22374 16.9589Z',
  d9: 'M6 15L7.5 22H16.5L18 15',
  d10: 'M12.9853 3.41185C13.8071 3.72767 14.4391 4.42704 14.6625 5.29102C15.7693 5.48896 16.7341 6.16311 17.3215 6.99614C17.7857 7.65437 18.0578 8.49269 17.9146 9.31395C19.4526 9.58595 20.75 10.8608 20.75 12.5236C20.75 14.5037 19.1634 15.5686 17.6613 15.7084C16.6257 15.8048 15.4638 15.4783 14.7085 14.6349C14.0068 15.3914 12.9634 15.7428 12 15.7428C11.0366 15.7428 9.99321 15.3914 9.29149 14.6349C8.53621 15.4783 7.37432 15.8048 6.33869 15.7084C4.83656 15.5686 3.25 14.5037 3.25 12.5236C3.25 10.8608 4.54744 9.58595 6.0854 9.31394C5.94218 8.49269 6.21431 7.65436 6.67845 6.99614C7.26586 6.16311 8.23067 5.48896 9.33754 5.29102C9.59185 4.30735 10.3758 3.53706 11.3667 3.30326C11.6247 2.52271 12.3417 1.61972 13.8181 1.25024L14.1819 2.70697C13.5431 2.86683 13.1841 3.15018 12.9853 3.41185ZM12 4.73139C12.6904 4.73139 13.25 5.29161 13.25 5.98268C13.25 6.67375 12.6904 7.23398 12 7.23398C11.3096 7.23398 10.75 6.67375 10.75 5.98268C10.75 5.29161 11.3096 4.73139 12 4.73139Z',
  d11: 'M5.69141 17.1292L6.76757 22.1565C6.84167 22.5027 7.14727 22.75 7.50092 22.75H16.5009C16.8546 22.75 17.1602 22.5027 17.2343 22.1565L18.3104 17.1292C18.1387 17.1631 17.9684 17.1878 17.8011 17.2033C16.8065 17.2959 15.677 17.1082 14.6982 16.5371C13.8426 17.0293 12.8779 17.2441 12.0009 17.2441C11.1239 17.2441 10.1593 17.0293 9.30362 16.5371C8.32487 17.1082 7.19533 17.2959 6.20076 17.2033C6.03346 17.1878 5.86312 17.1631 5.69141 17.1292Z',
};

export const IconCupcake03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cupcake-03-stroke-rounded IconCupcake03StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCupcake03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cupcake-03-duotone-rounded IconCupcake03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCupcake03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cupcake-03-twotone-rounded IconCupcake03TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCupcake03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cupcake-03-solid-rounded IconCupcake03SolidRounded"
    >
      <path 
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

export const IconCupcake03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cupcake-03-bulk-rounded IconCupcake03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCupcake03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cupcake-03-stroke-sharp IconCupcake03StrokeSharp"
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCupcake03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cupcake-03-solid-sharp IconCupcake03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCupcake03: TheIconSelfPack = {
  name: 'Cupcake03',
  StrokeRounded: IconCupcake03StrokeRounded,
  DuotoneRounded: IconCupcake03DuotoneRounded,
  TwotoneRounded: IconCupcake03TwotoneRounded,
  SolidRounded: IconCupcake03SolidRounded,
  BulkRounded: IconCupcake03BulkRounded,
  StrokeSharp: IconCupcake03StrokeSharp,
  SolidSharp: IconCupcake03SolidSharp,
};