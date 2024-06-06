import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M6.99609 12H17.0041',
  d3: 'M17.0039 9.00009H8.99994C8.01346 9.00009 7.14269 9.01047 7.01994 8.67609C6.92417 8.41511 7.52394 7.59609 8.00394 6.99609',
  d4: 'M7.00973 14.9999L15.0137 14.9999C16.0002 14.9999 16.871 14.9895 16.9937 15.3239C17.0895 15.5849 16.4897 16.4039 16.0097 17.0039',
  d5: 'M7.00977 15H15.0137C16.0002 15 16.871 14.9896 16.9937 15.324C17.0895 15.585 16.4897 16.404 16.0097 17.004',
  d6: 'M6.99609 12H17.0041M17.0039 9.00009H8.99994C8.01346 9.00009 7.14269 9.01047 7.01994 8.67609C6.92417 8.41511 7.52394 7.59609 8.00394 6.99609M7.00973 14.9999H15.0137C16.0002 14.9999 16.871 14.9895 16.9937 15.3239C17.0895 15.5849 16.4897 16.4039 16.0097 17.0039',
  d7: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM8.76998 7.63822L8.48718 7.99956L17 8.00015C17.5523 8.00014 18 8.44785 18 9.00013C18 9.55242 17.5523 10.0001 17 10.0001L8.81259 10.0003C8.29944 10.0004 7.81473 10.0005 7.44419 9.95016C7.10948 9.90471 6.41068 9.76565 6.10976 9.06802C5.95978 8.72034 6.02585 8.39673 6.05846 8.26522C6.09947 8.09977 6.16492 7.94869 6.22242 7.83156C6.33947 7.5931 6.49824 7.34674 6.63845 7.14404C6.78075 6.93832 7.10935 6.51686 7.22428 6.36945L7.23012 6.36195C7.58259 5.93676 8.213 5.87781 8.63819 6.23027C9.06329 6.58266 9.12218 7.21303 8.76998 7.63822ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM7.00002 16.0003L15.5127 16.0008C15.4801 16.0443 15.3724 16.1811 15.298 16.2755L15.2976 16.2761L15.2975 16.2762L15.2302 16.3619C14.8777 16.787 14.9366 17.4175 15.3618 17.7699C15.7869 18.1224 16.4174 18.0635 16.7698 17.6383L16.7757 17.6308L16.7757 17.6308C16.8907 17.4833 17.2192 17.062 17.3615 16.8563C17.5017 16.6536 17.6605 16.4073 17.7776 16.1688C17.8351 16.0517 17.9005 15.9006 17.9415 15.7352C17.9741 15.6037 18.0402 15.2801 17.8902 14.9324C17.5893 14.2348 16.8905 14.0957 16.5558 14.0502C16.1853 13.9999 15.7006 14 15.1875 14.0001H15.1874L6.99998 14.0003C6.4477 14.0003 5.99999 14.448 6 15.0003C6.00001 15.5526 6.44773 16.0003 7.00002 16.0003Z',
  d8: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d9: 'M8.76998 7.6381L8.48718 7.99944L17 8.00003C17.5523 8.00002 18 8.44772 18 9.00001C18 9.55229 17.5523 10 17 10L8.81259 10.0002C8.29944 10.0003 7.81473 10.0004 7.44419 9.95004C7.10948 9.90459 6.41068 9.76553 6.10976 9.0679C5.95978 8.72022 6.02585 8.39661 6.05846 8.2651C6.09947 8.09965 6.16492 7.94857 6.22242 7.83144C6.33947 7.59298 6.49824 7.34662 6.63845 7.14391C6.78075 6.9382 7.10935 6.51673 7.22428 6.36933L7.23012 6.36183C7.58259 5.93664 8.213 5.87769 8.63819 6.23015C9.06329 6.58254 9.12218 7.21291 8.76998 7.6381Z',
  d10: 'M6 11.9999C6 11.4476 6.44772 10.9999 7 10.9999H17C17.5523 10.9999 18 11.4476 18 11.9999C18 12.5522 17.5523 12.9999 17 12.9999H7C6.44772 12.9999 6 12.5522 6 11.9999Z',
  d11: 'M15.5127 16.0007L7.00002 16.0001C6.44773 16.0001 6.00001 15.5524 6 15.0001C5.99999 14.4479 6.4477 14.0001 6.99998 14.0001L15.1874 14H15.1875C15.7006 13.9999 16.1853 13.9998 16.5558 14.0501C16.8905 14.0956 17.5893 14.2346 17.8902 14.9323C18.0402 15.2799 17.9741 15.6035 17.9415 15.7351C17.9005 15.9005 17.8351 16.0516 17.7776 16.1687C17.6605 16.4072 17.5017 16.6535 17.3615 16.8562C17.2192 17.0619 16.8906 17.4833 16.7757 17.6307L16.7698 17.6382C16.4174 18.0634 15.7869 18.1223 15.3618 17.7698C14.9366 17.4173 14.8777 16.7869 15.2302 16.3617C15.2695 16.3113 15.4665 16.0624 15.5127 16.0007Z',
  d12: 'M3 21H21V3.00046L3 3V21Z',
  d13: 'M7.00183 11.989H17.0053M16.9957 8.98071H7.00183L8.98387 7.00488M6.99512 14.9918H16.9907L14.9846 16.9946',
  d14: 'M3.00002 2.25C2.8011 2.24999 2.61033 2.32901 2.46968 2.46966C2.32902 2.61032 2.25 2.80108 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3.00046C21.75 2.58626 21.4142 2.25047 21 2.25046L3.00002 2.25ZM8.29395 5.29297L6.29305 7.29312C6.00698 7.57909 5.92135 8.00924 6.07612 8.38296C6.23088 8.75668 6.59555 9.00036 7.00004 9.00035L17.0009 9.00021L17.0009 7.00021L9.41491 7.00032L9.7079 6.70745L8.29395 5.29297ZM7.00092 13H17.0009V11H7.00092V13ZM17.0009 15.0002L7.00091 15.0003L7.00094 17.0003L14.5859 17.0002L14.2931 17.293L15.707 18.7075L17.7079 16.7074C17.994 16.4215 18.0796 15.9913 17.9248 15.6176C17.7701 15.2438 17.4054 15.0002 17.0009 15.0002Z',
};

export const IconMoreOrLessSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-or-less-square-stroke-rounded IconMoreOrLessSquareStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoreOrLessSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-or-less-square-duotone-rounded IconMoreOrLessSquareDuotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoreOrLessSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-or-less-square-twotone-rounded IconMoreOrLessSquareTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoreOrLessSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-or-less-square-solid-rounded IconMoreOrLessSquareSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoreOrLessSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-or-less-square-bulk-rounded IconMoreOrLessSquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const IconMoreOrLessSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-or-less-square-stroke-sharp IconMoreOrLessSquareStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoreOrLessSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-or-less-square-solid-sharp IconMoreOrLessSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoreOrLessSquare: TheIconSelfPack = {
  name: 'MoreOrLessSquare',
  StrokeRounded: IconMoreOrLessSquareStrokeRounded,
  DuotoneRounded: IconMoreOrLessSquareDuotoneRounded,
  TwotoneRounded: IconMoreOrLessSquareTwotoneRounded,
  SolidRounded: IconMoreOrLessSquareSolidRounded,
  BulkRounded: IconMoreOrLessSquareBulkRounded,
  StrokeSharp: IconMoreOrLessSquareStrokeSharp,
  SolidSharp: IconMoreOrLessSquareSolidSharp,
};