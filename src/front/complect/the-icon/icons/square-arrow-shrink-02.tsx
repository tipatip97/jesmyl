import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M12.9833 11.0167C12.4085 10.4419 12.5041 8 12.5041 8M12.9833 11.0167C13.5581 11.5915 16 11.4958 16 11.4958M12.9833 11.0167L17 7M11.0131 12.9868C10.4383 12.412 7.99641 12.5077 7.99641 12.5077M11.0131 12.9868C11.5879 13.5616 11.4922 16.0035 11.4922 16.0035M11.0131 12.9868L7 16.9999',
  d3: 'M6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.7521 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059ZM12.1046 8.35734C12.0829 7.9437 12.4006 7.59076 12.8142 7.56904C13.035 7.55745 13.2385 7.64258 13.3836 7.78738L14.091 8.49479L15.7929 6.79289C16.1834 6.40237 16.8166 6.40237 17.2071 6.79289C17.5976 7.18342 17.5976 7.81658 17.2071 8.20711L15.5052 9.90901L16.2123 10.6161C16.3573 10.7612 16.4425 10.9648 16.4309 11.1858C16.4092 11.5994 16.0563 11.9171 15.6427 11.8954C15.5599 11.8911 15.4 11.8978 15.1408 11.9117L15.0842 11.9148L15.0841 11.9148C14.8573 11.9271 14.5868 11.9418 14.3186 11.9461C14.0313 11.9507 13.7146 11.9443 13.4291 11.9026C13.1876 11.8674 12.7852 11.7852 12.5 11.5C12.2148 11.2148 12.1326 10.8124 12.0974 10.5709C12.0557 10.2854 12.0493 9.96865 12.0539 9.68139C12.0582 9.41318 12.0729 9.14267 12.0852 8.91581L12.0883 8.85914C12.1022 8.6 12.1089 8.4401 12.1046 8.35734ZM11.8954 15.6427C11.9171 16.0563 11.5994 16.4092 11.1858 16.431C10.9648 16.4426 10.7612 16.3573 10.6161 16.2123L9.90901 15.5052L8.20711 17.2071C7.81658 17.5977 7.18342 17.5977 6.79289 17.2071C6.40237 16.8166 6.40237 16.1834 6.79289 15.7929L8.4948 14.091L7.78739 13.3836C7.64258 13.2386 7.55746 13.035 7.56905 12.8142C7.59077 12.4006 7.9437 12.0829 8.35735 12.1046C8.44011 12.109 8.60001 12.1023 8.85915 12.0883L8.91579 12.0852L8.91585 12.0852L8.91589 12.0852H8.91591C9.14276 12.0729 9.41322 12.0582 9.6814 12.0539C9.96866 12.0493 10.2854 12.0557 10.5709 12.0974C10.8124 12.1326 11.2148 12.2149 11.5 12.5C11.7852 12.7852 11.8674 13.1876 11.9026 13.4291C11.9443 13.7146 11.9507 14.0314 11.9461 14.3186C11.9418 14.5868 11.9271 14.8573 11.9148 15.0842L11.9117 15.1409C11.8978 15.4 11.8911 15.5599 11.8954 15.6427Z',
  d4: 'M11.9428 1.75C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.7521 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428Z',
  d5: 'M11.1858 16.431C11.5994 16.4092 11.9171 16.0563 11.8954 15.6427C11.8911 15.5599 11.8978 15.4 11.9117 15.1409L11.9148 15.0842C11.9271 14.8573 11.9418 14.5868 11.9461 14.3186C11.9507 14.0314 11.9443 13.7146 11.9026 13.4291C11.8674 13.1876 11.7852 12.7852 11.5 12.5C11.2148 12.2149 10.8124 12.1326 10.5709 12.0974C10.2854 12.0557 9.96866 12.0493 9.6814 12.0539C9.41317 12.0582 9.14266 12.0729 8.91579 12.0852L8.85915 12.0883C8.60001 12.1023 8.44011 12.109 8.35735 12.1046C7.9437 12.0829 7.59077 12.4006 7.56905 12.8142C7.55746 13.035 7.64258 13.2386 7.78739 13.3836L8.4948 14.091L6.79289 15.7929C6.40237 16.1834 6.40237 16.8166 6.79289 17.2071C7.18342 17.5977 7.81658 17.5977 8.20711 17.2071L9.90901 15.5052L10.6161 16.2123C10.7612 16.3573 10.9648 16.4426 11.1858 16.431Z',
  d6: 'M12.8142 7.56904C12.4006 7.59076 12.0829 7.94369 12.1046 8.35734C12.1089 8.4401 12.1022 8.6 12.0883 8.85914L12.0852 8.91581C12.0729 9.14267 12.0582 9.41318 12.0539 9.68139C12.0493 9.96866 12.0557 10.2854 12.0974 10.5709C12.1326 10.8124 12.2148 11.2148 12.5 11.5C12.7852 11.7852 13.1876 11.8674 13.4291 11.9026C13.7146 11.9443 14.0313 11.9507 14.3186 11.9461C14.5868 11.9418 14.8573 11.9271 15.0842 11.9148L15.1408 11.9117C15.4 11.8978 15.5599 11.8911 15.6427 11.8954C16.0563 11.9171 16.4092 11.5994 16.4309 11.1858C16.4425 10.9648 16.3573 10.7612 16.2123 10.6161L15.5052 9.90901L17.2071 8.20711C17.5976 7.81658 17.5976 7.18342 17.2071 6.79289C16.8166 6.40237 16.1834 6.40237 15.7929 6.79289L14.091 8.49479L13.3836 7.78738C13.2385 7.64258 13.035 7.55745 12.8142 7.56904Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M17 7L13.3279 10.672M7 16.9999L10.7605 13.2394M12.9999 7V11H17M7 12.9999H11V16.9999',
  d9: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM16.4688 6.46967L13.749 9.18936V7H12.249V11.75H16.9991V10.25H14.8097L17.5294 7.53034L16.4688 6.46967ZM6.99908 13.7499H9.18845L6.46875 16.4696L7.52942 17.5303L10.2491 14.8106V16.9999H11.7491V12.2499H6.99908V13.7499Z',
};

export const IconSquareArrowShrink02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-shrink-02-stroke-rounded IconSquareArrowShrink02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowShrink02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-shrink-02-duotone-rounded IconSquareArrowShrink02DuotoneRounded"
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

export const IconSquareArrowShrink02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-shrink-02-twotone-rounded IconSquareArrowShrink02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowShrink02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-shrink-02-solid-rounded IconSquareArrowShrink02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowShrink02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-shrink-02-bulk-rounded IconSquareArrowShrink02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowShrink02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-shrink-02-stroke-sharp IconSquareArrowShrink02StrokeSharp"
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

export const IconSquareArrowShrink02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-shrink-02-solid-sharp IconSquareArrowShrink02SolidSharp"
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

export const iconPackOfSquareArrowShrink02: TheIconSelfPack = {
  name: 'SquareArrowShrink02',
  StrokeRounded: IconSquareArrowShrink02StrokeRounded,
  DuotoneRounded: IconSquareArrowShrink02DuotoneRounded,
  TwotoneRounded: IconSquareArrowShrink02TwotoneRounded,
  SolidRounded: IconSquareArrowShrink02SolidRounded,
  BulkRounded: IconSquareArrowShrink02BulkRounded,
  StrokeSharp: IconSquareArrowShrink02StrokeSharp,
  SolidSharp: IconSquareArrowShrink02SolidSharp,
};