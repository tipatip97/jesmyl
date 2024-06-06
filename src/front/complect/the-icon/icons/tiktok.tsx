import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M10.5359 11.0075C9.71585 10.8916 7.84666 11.0834 6.93011 12.7782C6.01355 14.4729 6.9373 16.2368 7.51374 16.9069C8.08298 17.5338 9.89226 18.721 11.8114 17.5619C12.2871 17.2746 12.8797 17.0603 13.552 14.8153L13.4738 5.98145C13.3441 6.95419 14.4186 9.23575 17.478 9.5057',
  d3: 'M10.5014 11.0368C8.38003 10.6106 6.50098 12.2973 6.50098 14.484C6.50098 16.4259 8.06827 18 10.0016 18C11.935 18 13.5023 16.5099 13.5023 14.5681V6C13.5023 6.90308 14.3524 9.35298 17.4987 9.46067',
  d4: 'M11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75214 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.75211 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03143 1.74998 9.75214 1.74999 11.9428 1.75ZM14.3077 6.42857C14.3077 5.91574 13.8944 5.5 13.3846 5.5C12.8748 5.5 12.4615 5.91574 12.4615 6.42857V14.3214C12.4615 15.6035 11.4283 16.6429 10.1538 16.6429C8.87934 16.6429 7.84615 15.6035 7.84615 14.3214C7.84615 13.0393 8.87934 12 10.1538 12C10.2667 12 10.3771 12.0081 10.4847 12.0236C10.9893 12.0962 11.457 11.7435 11.5292 11.2358C11.6013 10.7282 11.2508 10.2577 10.7461 10.1851C10.5522 10.1572 10.3544 10.1429 10.1538 10.1429C7.85974 10.1429 6 12.0137 6 14.3214C6 16.6292 7.85974 18.5 10.1538 18.5C12.448 18.5 14.3077 16.6292 14.3077 14.3214V9.69915C15.1074 10.2617 16.0922 10.6071 17.0769 10.6071C17.5867 10.6071 18 10.1914 18 9.67857C18 9.16574 17.5867 8.75 17.0769 8.75C16.421 8.75 15.7034 8.47606 15.1534 8.01397C14.6041 7.55253 14.3077 6.98166 14.3077 6.42857Z',
  d5: 'M12.0572 1.75H11.9428C9.75214 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z',
  d6: 'M13.3846 5.5C13.8944 5.5 14.3077 5.91574 14.3077 6.42857C14.3077 6.98166 14.6041 7.55253 15.1534 8.01397C15.7034 8.47606 16.421 8.75 17.0769 8.75C17.5867 8.75 18 9.16574 18 9.67857C18 10.1914 17.5867 10.6071 17.0769 10.6071C16.0922 10.6071 15.1074 10.2617 14.3077 9.69915V14.3214C14.3077 16.6292 12.448 18.5 10.1538 18.5C7.85974 18.5 6 16.6292 6 14.3214C6 12.0137 7.85974 10.1429 10.1538 10.1429C10.3544 10.1429 10.5522 10.1572 10.7461 10.1851C11.2508 10.2577 11.6013 10.7282 11.5292 11.2358C11.457 11.7435 10.9893 12.0962 10.4847 12.0236C10.3771 12.0081 10.2667 12 10.1538 12C8.87934 12 7.84615 13.0393 7.84615 14.3214C7.84615 15.6035 8.87934 16.6429 10.1538 16.6429C11.4283 16.6429 12.4615 15.6035 12.4615 14.3214V6.42857C12.4615 5.91574 12.8748 5.5 13.3846 5.5Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M10.5022 11.0411C8.29061 10.6495 6.44824 12.5789 6.44824 14.5287C6.44824 16.3426 8.02689 18.0591 9.97424 18.0591C11.9216 18.0591 13.5002 16.4785 13.5002 14.5287C13.5002 13.7099 13.4649 6.61827 13.4649 5.99088C13.4649 5.92989 13.5258 5.94667 13.5337 5.99079C13.5337 7.35132 14.8714 9.48479 17.5061 9.48479',
  d9: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM14.5 6C14.5 5.44772 14.0523 5 13.5 5C12.9477 5 12.5 5.44772 12.5 6L12.5 14.5C12.5 15.8807 11.3807 17 10 17C8.61929 17 7.5 15.8807 7.5 14.5C7.5 13.1193 8.61929 12 10 12C10.1222 12 10.2419 12.0087 10.3584 12.0254L10.6416 10.0455C10.4315 10.0155 10.2173 10 10 10C7.51472 10 5.5 12.0147 5.5 14.5C5.5 16.9853 7.51472 19 10 19C12.4853 19 14.5 16.9853 14.5 14.5L14.5 9.52216C15.3664 10.128 16.4333 10.5 17.5 10.5V8.5C16.7894 8.5 16.012 8.20498 15.4161 7.70735C14.8211 7.21042 14.5 6.59563 14.5 6Z',
};

export const IconTiktokStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tiktok-stroke-rounded IconTiktokStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTiktokDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tiktok-duotone-rounded IconTiktokDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTiktokTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tiktok-twotone-rounded IconTiktokTwotoneRounded"
    >
      <path 
        d={d.d1} 
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

export const IconTiktokSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tiktok-solid-rounded IconTiktokSolidRounded"
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

export const IconTiktokBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tiktok-bulk-rounded IconTiktokBulkRounded"
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

export const IconTiktokStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tiktok-stroke-sharp IconTiktokStrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconTiktokSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tiktok-solid-sharp IconTiktokSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTiktok: TheIconSelfPack = {
  name: 'Tiktok',
  StrokeRounded: IconTiktokStrokeRounded,
  DuotoneRounded: IconTiktokDuotoneRounded,
  TwotoneRounded: IconTiktokTwotoneRounded,
  SolidRounded: IconTiktokSolidRounded,
  BulkRounded: IconTiktokBulkRounded,
  StrokeSharp: IconTiktokStrokeSharp,
  SolidSharp: IconTiktokSolidSharp,
};