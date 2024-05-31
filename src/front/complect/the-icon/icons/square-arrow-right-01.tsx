import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M10 7C10 7 14 10.6824 14 12C14 13.3176 10 17 10 17',
  d3: 'M1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428L1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.75212 22.25 11.9428 22.25L12.0572 22.25C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572L22.25 12.0572L22.25 11.9428L22.25 11.9428C22.25 9.7521 22.25 8.03143 22.0694 6.68802C21.8843 5.31136 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75L12.0572 1.75L11.9428 1.75L11.9428 1.75C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802ZM12.4598 11.9374C12.4712 11.9627 12.4798 11.9834 12.4861 11.9999C12.4798 12.0164 12.4712 12.0372 12.4598 12.0625C12.4077 12.1777 12.3215 12.3303 12.1976 12.5173C11.9503 12.8905 11.6065 13.3209 11.2432 13.7416C10.8834 14.1581 10.5212 14.5456 10.2477 14.8303L9.79932 15.2865C9.40536 15.6734 9.3995 16.3066 9.78643 16.7007C10.1734 17.0947 10.8065 17.1005 11.2006 16.7135L11.6897 16.2161C11.9786 15.9155 12.3665 15.5007 12.7567 15.049C13.1433 14.6014 13.5496 14.0977 13.8647 13.6221C14.0221 13.3846 14.1702 13.1341 14.2822 12.8865C14.3862 12.6564 14.4999 12.3416 14.4999 11.9999C14.4999 11.6583 14.3862 11.3435 14.2822 11.1134C14.1702 10.8658 14.0221 10.6152 13.8647 10.3778C13.5496 9.90221 13.1433 9.39853 12.7567 8.95094C12.3665 8.49922 11.9786 8.0844 11.6897 7.78376L11.2006 7.2864C10.8065 6.89944 10.1734 6.90519 9.78643 7.29924C9.3995 7.69327 9.40536 8.32647 9.79932 8.71344L10.2477 9.16959C10.5212 9.45425 10.8834 9.8418 11.2432 10.2583C11.6065 10.679 11.9503 11.1094 12.1976 11.4826C12.3215 11.6696 12.4077 11.8222 12.4598 11.9374Z',
  d4: 'M1.75 11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03143 1.74998 9.7521 1.74999 11.9428 1.75L11.9428 1.75L12.0572 1.75L12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31136 22.0694 6.68802C22.25 8.03143 22.25 9.7521 22.25 11.9428L22.25 11.9428L22.25 12.0572L22.25 12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25L11.9428 22.25C9.75212 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572L1.75 11.9428Z',
  d5: 'M12.4861 11.9999C12.4798 11.9834 12.4712 11.9627 12.4598 11.9374C12.4077 11.8222 12.3215 11.6696 12.1976 11.4826C11.9503 11.1094 11.6065 10.679 11.2432 10.2583C10.8834 9.8418 10.5212 9.45425 10.2477 9.16959L9.79932 8.71344C9.40536 8.32647 9.3995 7.69327 9.78643 7.29924C10.1734 6.90519 10.8065 6.89944 11.2006 7.2864L11.6897 7.78376C11.9786 8.0844 12.3665 8.49922 12.7567 8.95094C13.1433 9.39853 13.5496 9.90221 13.8647 10.3778C14.0221 10.6152 14.1702 10.8658 14.2822 11.1134C14.3862 11.3435 14.4999 11.6583 14.4999 11.9999C14.4999 12.3416 14.3862 12.6564 14.2822 12.8865C14.1702 13.1341 14.0221 13.3846 13.8647 13.6221C13.5496 14.0977 13.1433 14.6014 12.7567 15.049C12.3665 15.5007 11.9786 15.9155 11.6897 16.2161L11.2006 16.7135C10.8065 17.1005 10.1734 17.0947 9.78643 16.7007C9.3995 16.3066 9.40536 15.6734 9.79932 15.2865L10.2477 14.8303C10.5212 14.5456 10.8834 14.1581 11.2432 13.7416C11.6065 13.3209 11.9503 12.8905 12.1976 12.5173C12.3215 12.3303 12.4077 12.1777 12.4598 12.0625C12.4712 12.0372 12.4798 12.0164 12.4861 11.9999Z',
  d6: 'M20.999 3V21H2.99902V3H20.999Z',
  d7: 'M10 7L14 12L10 17',
  d8: 'M2.99902 2.25C2.58481 2.25 2.24902 2.58579 2.24902 3V21C2.24902 21.4142 2.58481 21.75 2.99902 21.75H20.999C21.4132 21.75 21.749 21.4142 21.749 21V3C21.749 2.58579 21.4132 2.25 20.999 2.25H2.99902ZM9.2178 7.62474L12.718 12.0001L9.21777 16.3754L10.7795 17.6248L15.2793 12.0001L10.7795 6.37537L9.2178 7.62474Z',
} as const;

export const IconSquareArrowRight01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-01-stroke-rounded IconSquareArrowRight01StrokeRounded"
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

export const IconSquareArrowRight01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-01-duotone-rounded IconSquareArrowRight01DuotoneRounded"
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

export const IconSquareArrowRight01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-01-twotone-rounded IconSquareArrowRight01TwotoneRounded"
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

export const IconSquareArrowRight01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-01-solid-rounded IconSquareArrowRight01SolidRounded"
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

export const IconSquareArrowRight01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-01-bulk-rounded IconSquareArrowRight01BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconSquareArrowRight01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-01-stroke-sharp IconSquareArrowRight01StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowRight01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-01-solid-sharp IconSquareArrowRight01SolidSharp"
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

export const iconPackOfSquareArrowRight01: TheIconSelfPack = {
  name: 'SquareArrowRight01',
  StrokeRounded: IconSquareArrowRight01StrokeRounded,
  DuotoneRounded: IconSquareArrowRight01DuotoneRounded,
  TwotoneRounded: IconSquareArrowRight01TwotoneRounded,
  SolidRounded: IconSquareArrowRight01SolidRounded,
  BulkRounded: IconSquareArrowRight01BulkRounded,
  StrokeSharp: IconSquareArrowRight01StrokeSharp,
  SolidSharp: IconSquareArrowRight01SolidSharp,
};