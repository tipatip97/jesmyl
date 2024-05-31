import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M11.0167 11.0167C11.5915 10.4419 11.4959 8 11.4959 8M11.0167 11.0167C10.4419 11.5915 8 11.4958 8 11.4958M11.0167 11.0167L7 7M12.9869 12.9868C13.5617 12.412 16.0036 12.5077 16.0036 12.5077M12.9869 12.9868C12.4121 13.5616 12.5078 16.0035 12.5078 16.0035M12.9869 12.9868L17 16.9999',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM11.8954 8.35734C11.9171 7.9437 11.5994 7.59076 11.1858 7.56904C10.965 7.55745 10.7615 7.64258 10.6164 7.78738L9.90901 8.49479L8.20711 6.79289C7.81658 6.40237 7.18342 6.40237 6.79289 6.79289C6.40237 7.18342 6.40237 7.81658 6.79289 8.20711L8.49479 9.90901L7.78768 10.6161C7.6427 10.7612 7.55745 10.9648 7.56905 11.1858C7.59077 11.5994 7.9437 11.9171 8.35735 11.8954C8.44011 11.8911 8.60001 11.8978 8.85915 11.9117L8.91581 11.9148L8.91588 11.9148C9.14273 11.9271 9.41321 11.9418 9.6814 11.9461C9.96866 11.9507 10.2854 11.9443 10.5709 11.9026C10.8124 11.8674 11.2148 11.7852 11.5 11.5C11.7852 11.2148 11.8674 10.8124 11.9026 10.5709C11.9443 10.2854 11.9507 9.96865 11.9461 9.68139C11.9418 9.41318 11.9271 9.14267 11.9148 8.91581L11.9117 8.85914C11.8978 8.6 11.8911 8.4401 11.8954 8.35734ZM12.1046 15.6427C12.0829 16.0563 12.4006 16.4092 12.8142 16.431C13.0352 16.4426 13.2388 16.3573 13.3839 16.2123L14.091 15.5052L15.7929 17.2071C16.1834 17.5977 16.8166 17.5977 17.2071 17.2071C17.5976 16.8166 17.5976 16.1834 17.2071 15.7929L15.5052 14.091L16.2126 13.3836C16.3574 13.2386 16.4425 13.035 16.4309 12.8142C16.4092 12.4006 16.0563 12.0829 15.6427 12.1046C15.5599 12.109 15.4 12.1023 15.1408 12.0883L15.0842 12.0852L15.0842 12.0852L15.0841 12.0852H15.0841C14.8572 12.0729 14.5868 12.0582 14.3186 12.0539C14.0313 12.0493 13.7146 12.0557 13.4291 12.0974C13.1876 12.1326 12.7852 12.2149 12.5 12.5C12.2148 12.7852 12.1326 13.1876 12.0974 13.4291C12.0557 13.7146 12.0493 14.0314 12.0539 14.3186C12.0582 14.5868 12.0729 14.8573 12.0852 15.0842L12.0883 15.1409C12.1022 15.4 12.1089 15.5599 12.1046 15.6427Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M12.8142 16.431C12.4006 16.4092 12.0829 16.0563 12.1046 15.6427C12.1089 15.5599 12.1022 15.4 12.0883 15.1409L12.0852 15.0842C12.0729 14.8573 12.0582 14.5868 12.0539 14.3186C12.0493 14.0314 12.0557 13.7146 12.0974 13.4291C12.1326 13.1876 12.2148 12.7852 12.5 12.5C12.7852 12.2149 13.1876 12.1326 13.4291 12.0974C13.7146 12.0557 14.0313 12.0493 14.3186 12.0539C14.5868 12.0582 14.8573 12.0729 15.0842 12.0852L15.1408 12.0883C15.4 12.1023 15.5599 12.109 15.6427 12.1046C16.0563 12.0829 16.4092 12.4006 16.4309 12.8142C16.4425 13.035 16.3574 13.2386 16.2126 13.3836L15.5052 14.091L17.2071 15.7929C17.5976 16.1834 17.5976 16.8166 17.2071 17.2071C16.8166 17.5977 16.1834 17.5977 15.7929 17.2071L14.091 15.5052L13.3839 16.2123C13.2388 16.3573 13.0352 16.4426 12.8142 16.431Z',
  d6: 'M11.1858 7.56904C11.5994 7.59076 11.9171 7.94369 11.8954 8.35734C11.8911 8.4401 11.8978 8.6 11.9117 8.85914L11.9148 8.91581C11.9271 9.14267 11.9418 9.41318 11.9461 9.68139C11.9507 9.96866 11.9443 10.2854 11.9026 10.5709C11.8674 10.8124 11.7852 11.2148 11.5 11.5C11.2148 11.7852 10.8124 11.8674 10.5709 11.9026C10.2854 11.9443 9.96866 11.9507 9.6814 11.9461C9.41318 11.9418 9.14268 11.9271 8.91581 11.9148L8.85915 11.9117C8.60001 11.8978 8.44011 11.8911 8.35735 11.8954C7.9437 11.9171 7.59077 11.5994 7.56905 11.1858C7.55745 10.9648 7.6427 10.7612 7.78768 10.6161L8.49479 9.90901L6.79289 8.20711C6.40237 7.81658 6.40237 7.18342 6.79289 6.79289C7.18342 6.40237 7.81658 6.40237 8.20711 6.79289L9.90901 8.49479L10.6164 7.78738C10.7615 7.64258 10.965 7.55745 11.1858 7.56904Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M11.0001 7V11H7M7 7L10.6846 10.6846M17 12.9999H13V16.9999M17 16.9999L13.3032 13.303',
  d9: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM6.46875 7.53034L9.18847 10.25H6.99908V11.75H11.7491V7H10.2491V9.18936L7.5294 6.46967L6.46875 7.53034ZM16.9991 12.2499H12.2491V16.9999H13.7491V14.8106L16.4687 17.5303L17.5294 16.4696L14.8097 13.7499H16.9991V12.2499Z',
} as const;

export const IconSquareArrowShrink01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-shrink-01-stroke-rounded IconSquareArrowShrink01StrokeRounded"
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

export const IconSquareArrowShrink01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-shrink-01-duotone-rounded IconSquareArrowShrink01DuotoneRounded"
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

export const IconSquareArrowShrink01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-shrink-01-twotone-rounded IconSquareArrowShrink01TwotoneRounded"
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

export const IconSquareArrowShrink01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-shrink-01-solid-rounded IconSquareArrowShrink01SolidRounded"
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

export const IconSquareArrowShrink01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-shrink-01-bulk-rounded IconSquareArrowShrink01BulkRounded"
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

export const IconSquareArrowShrink01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-shrink-01-stroke-sharp IconSquareArrowShrink01StrokeSharp"
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

export const IconSquareArrowShrink01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-shrink-01-solid-sharp IconSquareArrowShrink01SolidSharp"
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

export const iconPackOfSquareArrowShrink01: TheIconSelfPack = {
  name: 'SquareArrowShrink01',
  StrokeRounded: IconSquareArrowShrink01StrokeRounded,
  DuotoneRounded: IconSquareArrowShrink01DuotoneRounded,
  TwotoneRounded: IconSquareArrowShrink01TwotoneRounded,
  SolidRounded: IconSquareArrowShrink01SolidRounded,
  BulkRounded: IconSquareArrowShrink01BulkRounded,
  StrokeSharp: IconSquareArrowShrink01StrokeSharp,
  SolidSharp: IconSquareArrowShrink01SolidSharp,
};