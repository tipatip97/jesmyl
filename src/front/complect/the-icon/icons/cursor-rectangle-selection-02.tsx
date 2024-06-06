import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.30945 9.37832C10.7997 7.77346 22.0092 11.7048 22 13.1402C21.9895 14.7678 17.6224 15.2685 16.4119 15.6081C15.684 15.8124 15.489 16.0217 15.3212 16.785C14.561 20.2419 14.1794 21.9613 13.3096 21.9997C11.9231 22.061 7.85508 10.9445 9.30945 9.37832Z',
  d2: 'M2 9.2L2 12.8M12.8 2L9.2 2M7.5 20H8.5M20 7.5V8.5M2.13343 4.69898C2.28806 3.97158 2.54837 3.42488 2.98663 2.98663C3.41266 2.56059 3.94119 2.3027 4.63858 2.14661M19.8666 4.69898C19.7119 3.97158 19.4516 3.42488 19.0134 2.98663C18.5963 2.5696 18.0811 2.31369 17.4054 2.15665M4.63858 19.8534C3.94119 19.6973 3.41266 19.4394 2.98663 19.0134C2.55627 18.583 2.2975 18.0481 2.14189 17.3402',
  d3: 'M2 9.2V12.8L2.14189 17.3402C2.2975 18.0481 2.55627 18.583 2.98663 19.0134C3.41266 19.4394 3.94119 19.6973 4.63858 19.8534L7.5 20H9L11.733 19.9555C10.1071 16.6818 8.25395 10.515 9.30945 9.37832C10.3597 8.24734 16.2368 9.86583 19.6128 11.4226L20 11V7.5L19.8666 4.69898C19.7119 3.97158 19.4516 3.42488 19.0134 2.98663C18.5963 2.5696 18.0811 2.31369 17.4054 2.15665L12.8 2H9.2L4.63858 2.14661C3.94119 2.3027 3.41266 2.56059 2.98663 2.98663C2.54837 3.42488 2.28806 3.97158 2.13343 4.69898L2 9.2Z',
  d4: 'M22.4713 12.3883C22.5984 12.5548 22.7521 12.8161 22.75 13.145C22.7449 13.9292 22.2098 14.461 21.7032 14.7923C21.182 15.1332 20.5147 15.3837 19.8703 15.5759C19.2158 15.771 18.5301 15.9216 17.9464 16.0425C17.5407 16.1252 16.8195 16.2727 16.6145 16.3302C16.2747 16.4256 16.2181 16.4843 16.2064 16.4969C16.1912 16.5133 16.1333 16.5838 16.0537 16.9461L16.0497 16.9641L16.0497 16.9642C15.676 18.6634 15.3813 20.004 15.0655 20.919C14.9076 21.3764 14.7229 21.7948 14.4781 22.1126C14.2191 22.4487 13.8464 22.7267 13.3427 22.749C13.0066 22.7639 12.7387 22.6105 12.573 22.4874C12.3957 22.3557 12.2359 22.1846 12.0945 22.0079C11.8097 21.6522 11.5168 21.1684 11.2306 20.6214C10.6541 19.5197 10.0468 18.0491 9.53408 16.5407C9.02168 15.0331 8.5925 13.4546 8.38504 12.1364C8.28169 11.4797 8.22867 10.859 8.25804 10.3312C8.2853 9.84136 8.39015 9.26609 8.75985 8.86796C9.14131 8.45716 9.71815 8.32127 10.211 8.27376C10.7394 8.22283 11.3621 8.25729 12.0199 8.34357C13.3408 8.51682 14.9282 8.9164 16.4468 9.40522C17.9668 9.89449 19.4527 10.4844 20.5704 11.0526C21.1255 11.3347 21.6173 11.6252 21.981 11.9102C22.1618 12.0519 22.3361 12.2115 22.4713 12.3883Z',
  d5: 'M8.27 2.225C8.27 1.68652 8.70652 1.25 9.245 1.25L12.755 1.25C13.2935 1.25 13.73 1.68652 13.73 2.225C13.73 2.76348 13.2935 3.2 12.755 3.2H9.245C8.70652 3.2 8.27 2.76348 8.27 2.225ZM5.74907 2.15498C5.86669 2.68045 5.53605 3.20178 5.01058 3.3194C4.46008 3.44262 4.12841 3.62437 3.87639 3.87639C3.61768 4.1351 3.43222 4.47857 3.30879 5.05923C3.19682 5.58594 2.67908 5.92216 2.15237 5.81019C1.62566 5.69823 1.28944 5.18049 1.40141 4.65378C1.57949 3.81601 1.90165 3.09342 2.49753 2.49753C3.07628 1.91878 3.77525 1.59765 4.58465 1.41649C5.11012 1.29887 5.63145 1.6295 5.74907 2.15498ZM16.2956 2.15701C16.4175 1.63251 16.9415 1.30615 17.466 1.42805C18.2547 1.61135 18.9364 1.93142 19.5025 2.49753C20.0984 3.09342 20.4205 3.81601 20.5986 4.65378C20.7106 5.18049 20.3743 5.69823 19.8476 5.81019C19.3209 5.92216 18.8032 5.58594 18.6912 5.05923C18.5678 4.47857 18.3823 4.1351 18.1236 3.87639C17.8765 3.6293 17.5535 3.45035 17.0246 3.32742C16.5001 3.20552 16.1737 2.68151 16.2956 2.15701ZM19.775 6.6125C20.3135 6.6125 20.75 7.04902 20.75 7.5875V8.5625C20.75 9.10098 20.3135 9.5375 19.775 9.5375C19.2365 9.5375 18.8 9.10098 18.8 8.5625V7.5875C18.8 7.04902 19.2365 6.6125 19.775 6.6125ZM2.225 8.27C2.76348 8.27 3.2 8.70652 3.2 9.245V12.755C3.2 13.2935 2.76348 13.73 2.225 13.73C1.68652 13.73 1.25 13.2935 1.25 12.755L1.25 9.245C1.25 8.70652 1.68652 8.27 2.225 8.27ZM2.15404 16.2294C2.67996 16.1138 3.20002 16.4464 3.31562 16.9724C3.43893 17.5334 3.622 17.8692 3.87639 18.1236C4.12841 18.3756 4.46007 18.5574 5.01058 18.6806C5.53605 18.7982 5.86669 19.3195 5.74907 19.845C5.63145 20.3705 5.11012 20.7011 4.58465 20.5835C3.77525 20.4023 3.07628 20.0812 2.49753 19.5025C1.91272 18.9177 1.59118 18.2104 1.41108 17.391C1.29548 16.865 1.62811 16.345 2.15404 16.2294ZM6.6125 19.775C6.6125 19.2365 7.04902 18.8 7.5875 18.8H8.5625C9.10098 18.8 9.5375 19.2365 9.5375 19.775C9.5375 20.3135 9.10098 20.75 8.5625 20.75H7.5875C7.04902 20.75 6.6125 20.3135 6.6125 19.775Z',
  d6: 'M22 14L10 10L14 22L16 16L22 14Z',
  d7: 'M2 9L2.00012 13M13 2L9 2.00003M9 20H11M20 9V11M2 6L2.00012 2.00003L6 2M20 6V2.00001L16 2M6.00013 20H2.0012L2.00059 16',
  d8: 'M9.46969 9.46969C9.67056 9.26882 9.96769 9.19867 10.2372 9.28851L22.2372 13.2885C22.5434 13.3906 22.75 13.6772 22.75 14C22.75 14.3228 22.5434 14.6094 22.2372 14.7115L16.5929 16.5929L14.7115 22.2372C14.6094 22.5434 14.3228 22.75 14 22.75C13.6772 22.75 13.3906 22.5434 13.2885 22.2372L9.28851 10.2372C9.19867 9.96769 9.26882 9.67056 9.46969 9.46969Z',
  d9: 'M2.22511 1.25003L6.12499 1.25L6.12501 3.2L3.20009 3.20002L3.2 6.12503L1.25 6.12497L1.25012 2.225C1.25014 1.68653 1.68665 1.25003 2.22511 1.25003ZM9.04999 1.25003L12.95 1.25L12.95 3.2L9.05001 3.20003L9.04999 1.25003ZM18.8 3.20001L15.875 3.2L15.875 1.25L19.775 1.25001C20.3135 1.25002 20.75 1.68654 20.75 2.22501V6.125H18.8V3.20001ZM1.25012 12.95L1.25 9.05003L3.2 9.04997L3.20012 12.95L1.25012 12.95ZM18.8 11V9.05H20.75V11H18.8ZM1.25117 19.7751L1.25057 15.8751L3.20057 15.8749L3.20102 18.8H6.12513V20.75H2.22617C1.68775 20.75 1.25125 20.3136 1.25117 19.7751ZM11 20.75H9.05V18.8H11V20.75Z',
};

export const IconCursorRectangleSelection02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-rectangle-selection-02-stroke-rounded IconCursorRectangleSelection02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCursorRectangleSelection02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-rectangle-selection-02-duotone-rounded IconCursorRectangleSelection02DuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorRectangleSelection02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-rectangle-selection-02-twotone-rounded IconCursorRectangleSelection02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorRectangleSelection02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-rectangle-selection-02-solid-rounded IconCursorRectangleSelection02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorRectangleSelection02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-rectangle-selection-02-bulk-rounded IconCursorRectangleSelection02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorRectangleSelection02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-rectangle-selection-02-stroke-sharp IconCursorRectangleSelection02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorRectangleSelection02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-rectangle-selection-02-solid-sharp IconCursorRectangleSelection02SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCursorRectangleSelection02: TheIconSelfPack = {
  name: 'CursorRectangleSelection02',
  StrokeRounded: IconCursorRectangleSelection02StrokeRounded,
  DuotoneRounded: IconCursorRectangleSelection02DuotoneRounded,
  TwotoneRounded: IconCursorRectangleSelection02TwotoneRounded,
  SolidRounded: IconCursorRectangleSelection02SolidRounded,
  BulkRounded: IconCursorRectangleSelection02BulkRounded,
  StrokeSharp: IconCursorRectangleSelection02StrokeSharp,
  SolidSharp: IconCursorRectangleSelection02SolidSharp,
};