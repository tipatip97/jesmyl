import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M9 12H13.2M9 12V9.2963C9 8.82489 9 8.58919 9.14645 8.44274C9.29289 8.2963 9.5286 8.2963 10 8.2963H13.2C14.1941 8.2963 15 9.1254 15 10.1481C15 11.1709 14.1941 12 13.2 12M9 12V14.7037C9 15.1751 9 15.4108 9.14645 15.5573C9.29289 15.7037 9.5286 15.7037 10 15.7037H13.2C14.1941 15.7037 15 14.8746 15 13.8519C15 12.8291 14.1941 12 13.2 12M10.4938 8.2963V7M10.4938 17V15.7037M12.8982 8.2963V7M12.8982 17V15.7037',
  d3: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM9.14645 8.44332C9 8.58977 9 8.82547 9 9.29688V14.7043C9 15.1757 9 15.4114 9.14645 15.5578C9.29289 15.7043 9.5286 15.7043 10 15.7043H13.2C14.1941 15.7043 15 14.8752 15 13.8524C15 12.8297 14.1941 12.0006 13.2 12.0006C14.1941 12.0006 15 11.1715 15 10.1487C15 9.12598 14.1941 8.29688 13.2 8.29688H10C9.5286 8.29688 9.29289 8.29688 9.14645 8.44332Z',
  d4: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM11.2438 7C11.2438 6.58579 10.9081 6.25 10.4938 6.25C10.0796 6.25 9.74385 6.58579 9.74385 7V7.54732C9.60783 7.54931 9.47242 7.55503 9.35145 7.57129C9.13212 7.60078 8.85193 7.67661 8.61613 7.91241C8.38033 8.14821 8.3045 8.4284 8.27501 8.64772C8.24984 8.83494 8.24993 9.05674 8.25001 9.26185L8.25002 9.2963V14.7037L8.25001 14.7381C8.24993 14.9433 8.24984 15.1651 8.27501 15.3523C8.3045 15.5716 8.38033 15.8518 8.61613 16.0876C8.85193 16.3234 9.13212 16.3992 9.35145 16.4287C9.47242 16.445 9.60783 16.4507 9.74385 16.4527V17C9.74385 17.4142 10.0796 17.75 10.4938 17.75C10.9081 17.75 11.2438 17.4142 11.2438 17V16.4537H12.1482V17C12.1482 17.4142 12.484 17.75 12.8982 17.75C13.3124 17.75 13.6482 17.4142 13.6482 17V16.4139C14.8561 16.1967 15.75 15.1166 15.75 13.8519C15.75 13.1336 15.4617 12.4749 14.9914 12C15.4617 11.5251 15.75 10.8664 15.75 10.1481C15.75 8.88343 14.8561 7.8033 13.6482 7.58605V7C13.6482 6.58579 13.3124 6.25 12.8982 6.25C12.484 6.25 12.1482 6.58579 12.1482 7V7.5463H11.2438V7ZM9.75117 9.04745C9.82063 9.04633 9.90094 9.0463 10 9.0463H13.2C13.76 9.0463 14.25 9.51939 14.25 10.1481C14.25 10.7769 13.76 11.25 13.2 11.25H9.75002V9.2963C9.75002 9.19722 9.75005 9.1169 9.75117 9.04745ZM9.75002 12.75H13.2C13.76 12.75 14.25 13.2231 14.25 13.8519C14.25 14.4806 13.76 14.9537 13.2 14.9537H10C9.90094 14.9537 9.82063 14.9537 9.75117 14.9525C9.75005 14.8831 9.75002 14.8028 9.75002 14.7037V12.75Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d6: 'M10.4938 6.25C10.9081 6.25 11.2438 6.58579 11.2438 7V7.5463H12.1482V7C12.1482 6.58579 12.484 6.25 12.8982 6.25C13.3124 6.25 13.6482 6.58579 13.6482 7V7.58605C14.8561 7.8033 15.75 8.88343 15.75 10.1481C15.75 10.8664 15.4617 11.5251 14.9914 12C15.4617 12.4749 15.75 13.1336 15.75 13.8519C15.75 15.1166 14.8561 16.1967 13.6482 16.4139V17C13.6482 17.4142 13.3124 17.75 12.8982 17.75C12.484 17.75 12.1482 17.4142 12.1482 17V16.4537H11.2438V17C11.2438 17.4142 10.9081 17.75 10.4938 17.75C10.0796 17.75 9.74385 17.4142 9.74385 17V16.4527C9.60783 16.4507 9.47242 16.445 9.35145 16.4287C9.13212 16.3992 8.85193 16.3234 8.61613 16.0876C8.38033 15.8518 8.3045 15.5716 8.27501 15.3523C8.24984 15.1651 8.24993 14.9433 8.25001 14.7381C8.25001 14.7266 8.25002 14.7151 8.25002 14.7037V9.2963C8.25002 9.28487 8.25001 9.27339 8.25001 9.26185C8.24993 9.05674 8.24984 8.83494 8.27501 8.64772C8.3045 8.4284 8.38033 8.14821 8.61613 7.91241C8.85193 7.67661 9.13212 7.60078 9.35145 7.57129C9.47242 7.55503 9.60783 7.54931 9.74385 7.54732V7C9.74385 6.58579 10.0796 6.25 10.4938 6.25ZM10 9.0463C9.90094 9.0463 9.82063 9.04633 9.75117 9.04745C9.75005 9.1169 9.75002 9.19722 9.75002 9.2963V11.25H13.2C13.76 11.25 14.25 10.7769 14.25 10.1481C14.25 9.51939 13.76 9.0463 13.2 9.0463H10ZM13.2 12.75H9.75002V14.7037C9.75002 14.8028 9.75005 14.8831 9.75117 14.9525C9.82063 14.9537 9.90094 14.9537 10 14.9537H13.2C13.76 14.9537 14.25 14.4806 14.25 13.8519C14.25 13.2231 13.76 12.75 13.2 12.75Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M9 8.28613H13.1387C14.1642 8.28613 14.9956 9.11751 14.9956 10.1431C14.9956 11.1686 14.1642 12 13.1387 12H9V8.28613Z',
  d9: 'M9.0022 12H13.1409C14.1664 12 14.9978 12.8314 14.9978 13.8569C14.9978 14.8825 14.1664 15.7139 13.1409 15.7139H9.0022V12Z',
  d10: 'M10.5117 6.5V7.70277M10.5117 16.2694V17.5M12.8872 6.5L12.8987 7.62247M12.8872 16.2694L12.9102 17.5456',
  d11: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM8.25 7.5463H9.74383V6.5H11.2438V7.5463H12.1482V6.5H13.6482V7.58605C14.8561 7.8033 15.75 8.88343 15.75 10.1481C15.75 10.8664 15.4617 11.5251 14.9913 12C15.4617 12.4749 15.75 13.1336 15.75 13.8519C15.75 15.1166 14.8561 16.1967 13.6482 16.4139V17.5H12.1482V16.4537H11.2438V17.5H9.74383V16.4537H8.25V7.5463ZM14.25 10.1481C14.25 10.7769 13.76 11.25 13.2 11.25H9.75V9.0463H13.2C13.76 9.0463 14.25 9.51939 14.25 10.1481ZM13.2 12.75H9.75V14.9537H13.2C13.76 14.9537 14.25 14.4806 14.25 13.8519C14.25 13.2231 13.76 12.75 13.2 12.75Z',
};

export const IconBitcoinSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-square-stroke-rounded IconBitcoinSquareStrokeRounded"
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

export const IconBitcoinSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-square-duotone-rounded IconBitcoinSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBitcoinSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-square-twotone-rounded IconBitcoinSquareTwotoneRounded"
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

export const IconBitcoinSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-square-solid-rounded IconBitcoinSquareSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-square-bulk-rounded IconBitcoinSquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBitcoinSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-square-stroke-sharp IconBitcoinSquareStrokeSharp"
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
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-square-solid-sharp IconBitcoinSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoinSquare: TheIconSelfPack = {
  name: 'BitcoinSquare',
  StrokeRounded: IconBitcoinSquareStrokeRounded,
  DuotoneRounded: IconBitcoinSquareDuotoneRounded,
  TwotoneRounded: IconBitcoinSquareTwotoneRounded,
  SolidRounded: IconBitcoinSquareSolidRounded,
  BulkRounded: IconBitcoinSquareBulkRounded,
  StrokeSharp: IconBitcoinSquareStrokeSharp,
  SolidSharp: IconBitcoinSquareSolidSharp,
};