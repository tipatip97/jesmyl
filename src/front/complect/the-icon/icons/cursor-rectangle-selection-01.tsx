import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 9.2L2 12.8M12.8 2L9.2 2M7.5 20H9M20 7.5V9M2.13343 4.69898C2.28806 3.97158 2.54837 3.42488 2.98663 2.98663C3.41266 2.56059 3.94119 2.3027 4.63858 2.14661M19.8666 4.69898C19.7119 3.97158 19.4516 3.42488 19.0134 2.98663C18.5963 2.5696 18.0811 2.31369 17.4054 2.15665M4.63858 19.8534C3.94119 19.6973 3.41266 19.4394 2.98663 19.0134C2.55627 18.583 2.2975 18.0481 2.14189 17.3402',
  d2: 'M13.7813 20.9656C11.9693 21.0908 10.1739 12.64 11.4067 11.407C12.6396 10.174 21.091 11.9681 20.9657 13.7802C20.8795 14.9669 18.8709 15.4363 18.9295 16.491C18.9467 16.7999 19.3369 17.0814 20.1173 17.6445C20.6596 18.0358 21.2126 18.4157 21.7456 18.8195C21.9583 18.9807 22.0423 19.2516 21.9798 19.5071C21.6798 20.7341 20.7394 21.6785 19.5075 21.9798C19.252 22.0423 18.9811 21.9583 18.8199 21.7455C18.4162 21.2124 18.0363 20.6594 17.6451 20.117C17.0821 19.3365 16.8006 18.9463 16.4918 18.9291C15.4372 18.8704 14.9679 20.8793 13.7813 20.9656Z',
  d3: 'M2 9.2V12.8L2.14189 17.3402C2.2975 18.0481 2.55627 18.583 2.98663 19.0134C3.41266 19.4394 3.94119 19.6973 4.63858 19.8534L7.5 20H9L12.6028 19.9413C11.3182 17.6748 10.4493 12.3645 11.4067 11.407C12.3725 10.4411 17.7677 11.3328 20 12.6355V7.5L19.8666 4.69898C19.7119 3.97158 19.4516 3.42488 19.0134 2.98663C18.5963 2.5696 18.0811 2.31369 17.4054 2.15665L12.8 2H9.2L4.63858 2.14661C3.94119 2.3027 3.41266 2.56059 2.98663 2.98663C2.54837 3.42488 2.28806 3.97158 2.13343 4.69898L2 9.2Z',
  d4: 'M8.27 2.225C8.27 1.68652 8.70652 1.25 9.245 1.25L12.755 1.25C13.2935 1.25 13.73 1.68652 13.73 2.225C13.73 2.76348 13.2935 3.2 12.755 3.2H9.245C8.70652 3.2 8.27 2.76348 8.27 2.225ZM5.74907 2.15498C5.86669 2.68045 5.53605 3.20178 5.01058 3.3194C4.46008 3.44262 4.12841 3.62437 3.87639 3.87639C3.61768 4.1351 3.43222 4.47857 3.30879 5.05923C3.19682 5.58594 2.67908 5.92216 2.15237 5.81019C1.62566 5.69823 1.28944 5.18049 1.40141 4.65378C1.57949 3.81601 1.90165 3.09342 2.49753 2.49753C3.07628 1.91878 3.77525 1.59765 4.58465 1.41649C5.11012 1.29887 5.63145 1.6295 5.74907 2.15498ZM16.2956 2.15701C16.4175 1.63251 16.9415 1.30615 17.466 1.42805C18.2547 1.61135 18.9364 1.93142 19.5025 2.49753C20.0984 3.09342 20.4205 3.81601 20.5986 4.65378C20.7106 5.18049 20.3743 5.69823 19.8476 5.81019C19.3209 5.92216 18.8032 5.58594 18.6912 5.05923C18.5678 4.47857 18.3823 4.1351 18.1236 3.87639C17.8765 3.6293 17.5535 3.45035 17.0246 3.32742C16.5001 3.20552 16.1737 2.68151 16.2956 2.15701ZM19.775 6.6125C20.3135 6.6125 20.75 7.04902 20.75 7.5875V9.05C20.75 9.58848 20.3135 10.025 19.775 10.025C19.2365 10.025 18.8 9.58848 18.8 9.05V7.5875C18.8 7.04902 19.2365 6.6125 19.775 6.6125ZM2.225 8.27C2.76348 8.27 3.2 8.70652 3.2 9.245V12.755C3.2 13.2935 2.76348 13.73 2.225 13.73C1.68652 13.73 1.25 13.2935 1.25 12.755L1.25 9.245C1.25 8.70652 1.68652 8.27 2.225 8.27ZM2.15404 16.2294C2.67996 16.1138 3.20002 16.4464 3.31562 16.9724C3.43893 17.5334 3.622 17.8692 3.87639 18.1236C4.12841 18.3756 4.46007 18.5574 5.01058 18.6806C5.53605 18.7982 5.86669 19.3195 5.74907 19.845C5.63145 20.3705 5.11012 20.7011 4.58465 20.5835C3.77525 20.4023 3.07628 20.0812 2.49753 19.5025C1.91272 18.9177 1.59118 18.2104 1.41108 17.391C1.29548 16.865 1.62811 16.345 2.15404 16.2294ZM6.6125 19.775C6.6125 19.2365 7.04902 18.8 7.5875 18.8H9.05C9.58848 18.8 10.025 19.2365 10.025 19.775C10.025 20.3135 9.58848 20.75 9.05 20.75H7.5875C7.04902 20.75 6.6125 20.3135 6.6125 19.775Z',
  d5: 'M21.1701 12.5753C21.462 12.8652 21.7512 13.2926 21.714 13.8319L21.7138 13.8345C21.6762 14.3515 21.4286 14.7523 21.1667 15.0507C20.9195 15.3324 20.6137 15.5728 20.3748 15.7606C20.1057 15.9721 19.9036 16.1341 19.7794 16.2785C19.7421 16.3218 19.6927 16.3729 19.7418 16.4176C19.9 16.5614 20.1503 16.7435 20.5561 17.0363C20.7262 17.159 20.9023 17.284 21.081 17.4109L21.0811 17.4109C21.4514 17.6739 21.8335 17.9452 22.1985 18.2217C22.6691 18.5782 22.8358 19.1639 22.7084 19.6852C22.3421 21.1832 21.1901 22.3404 19.6857 22.7084C19.1641 22.8359 18.5784 22.6689 18.222 22.1983C17.9456 21.8332 17.6744 21.4512 17.4114 21.0808C17.2845 20.902 17.1596 20.7259 17.0368 20.5558C16.7441 20.1499 16.562 19.8995 16.4182 19.7413C16.3832 19.7028 16.3226 19.7417 16.2795 19.7789C16.1351 19.9031 15.9732 20.1053 15.7616 20.3744C15.5739 20.6133 15.3335 20.9192 15.0519 21.1664C14.7535 21.4283 14.3527 21.676 13.8357 21.7136L13.833 21.7138C13.2938 21.7511 12.8664 21.4619 12.5765 21.1701C12.2787 20.8704 12.023 20.4689 11.804 20.0383C11.3626 19.1706 10.9898 18.0236 10.7215 16.8648C10.4524 15.7023 10.2778 14.4825 10.2531 13.4564C10.2407 12.9449 10.2649 12.4574 10.3433 12.0387C10.4167 11.6467 10.5587 11.1944 10.8764 10.8767C11.194 10.559 11.6464 10.417 12.0383 10.3435C12.457 10.265 12.9445 10.2407 13.456 10.253C14.4822 10.2776 15.702 10.452 16.8646 10.721C18.0234 10.9891 19.1705 11.3617 20.0383 11.803C20.4689 12.0219 20.8704 12.2776 21.1701 12.5753Z',
  d6: 'M2 9L2.00012 13M13 2L9 2.00003M9 20H11M20 9V11M2 6L2.00012 2.00003L6 2M20 6V2.00001L16 2M6.00013 20H2.0012L2.00059 16',
  d7: 'M21.9999 14L12 12L14 21.9996L17.0001 18.9998L20.0003 22L22 19.9998L18.9999 16.9997L21.9999 14Z',
  d8: 'M2.22511 1.25003L6.12499 1.25L6.12501 3.2L3.20009 3.20002L3.2 6.12503L1.25 6.12497L1.25012 2.225C1.25014 1.68653 1.68665 1.25003 2.22511 1.25003ZM9.04999 1.25003L12.95 1.25L12.95 3.2L9.05001 3.20003L9.04999 1.25003ZM18.8 3.20001L15.875 3.2L15.875 1.25L19.775 1.25001C20.3135 1.25002 20.75 1.68654 20.75 2.22501V6.125H18.8V3.20001ZM1.25012 12.95L1.25 9.05003L3.2 9.04997L3.20012 12.95L1.25012 12.95ZM18.8 11V9.05H20.75V11H18.8ZM1.25117 19.7751L1.25057 15.8751L3.20057 15.8749L3.20102 18.8H6.12513V20.75H2.22617C1.68775 20.75 1.25125 20.3136 1.25117 19.7751ZM11 20.75H9.05V18.8H11V20.75Z',
  d9: 'M11.4697 11.4697C11.647 11.2924 11.9012 11.2154 12.1471 11.2646L22.147 13.2645C22.4182 13.3188 22.6376 13.5179 22.7177 13.7826C22.7979 14.0474 22.7258 14.3347 22.5302 14.5303L20.0606 16.9997L22.5303 19.4694C22.8232 19.7623 22.8232 20.2371 22.5304 20.53L20.5307 22.5303C20.3901 22.671 20.1993 22.75 20.0004 22.75C19.8014 22.75 19.6106 22.671 19.47 22.5303L17.0001 20.0604L14.5303 22.53C14.3347 22.7255 14.0474 22.7976 13.7827 22.7174C13.5179 22.6373 13.3188 22.4179 13.2646 22.1467L11.2646 12.1471C11.2154 11.9012 11.2924 11.647 11.4697 11.4697Z',
};

export const IconCursorRectangleSelection01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-rectangle-selection-01-stroke-rounded IconCursorRectangleSelection01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorRectangleSelection01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-rectangle-selection-01-duotone-rounded IconCursorRectangleSelection01DuotoneRounded"
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
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorRectangleSelection01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-rectangle-selection-01-twotone-rounded IconCursorRectangleSelection01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorRectangleSelection01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-rectangle-selection-01-solid-rounded IconCursorRectangleSelection01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorRectangleSelection01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-rectangle-selection-01-bulk-rounded IconCursorRectangleSelection01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorRectangleSelection01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-rectangle-selection-01-stroke-sharp IconCursorRectangleSelection01StrokeSharp"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorRectangleSelection01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-rectangle-selection-01-solid-sharp IconCursorRectangleSelection01SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfCursorRectangleSelection01: TheIconSelfPack = {
  name: 'CursorRectangleSelection01',
  StrokeRounded: IconCursorRectangleSelection01StrokeRounded,
  DuotoneRounded: IconCursorRectangleSelection01DuotoneRounded,
  TwotoneRounded: IconCursorRectangleSelection01TwotoneRounded,
  SolidRounded: IconCursorRectangleSelection01SolidRounded,
  BulkRounded: IconCursorRectangleSelection01BulkRounded,
  StrokeSharp: IconCursorRectangleSelection01StrokeSharp,
  SolidSharp: IconCursorRectangleSelection01SolidSharp,
};