import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.9349 13.9453L18.2646 10.2968C17.9751 8.72096 17.8303 7.93303 17.257 7.46651C16.6837 7 15.8602 7 14.2132 7H9.78685C8.1398 7 7.31628 7 6.74298 7.46651C6.16968 7.93303 6.02492 8.72096 5.73538 10.2968L5.06506 13.9453C4.46408 17.2162 4.16359 18.8517 5.08889 19.9259C6.01419 21 7.72355 21 11.1423 21H12.8577C16.2765 21 17.9858 21 18.9111 19.9259C19.8364 18.8517 19.5359 17.2162 18.9349 13.9453Z',
  d2: 'M12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z',
  d3: 'M12 17.492L12 17.501',
  d4: 'M21 11C21.1568 10.9209 21.2931 10.8212 21.4142 10.6955C22 10.0875 22 9.10893 22 7.15176C22 5.1946 22 4.21602 21.4142 3.60801C20.8284 3 19.8856 3 18 3L6 3C4.11438 3 3.17157 3 2.58579 3.60801C2 4.21602 2 5.1946 2 7.15176C2 9.10893 2 10.0875 2.58579 10.6955C2.70688 10.8212 2.84322 10.9209 3 11',
  d5: 'M18.2646 10.2968L18.9349 13.9453C19.5359 17.2162 19.8364 18.8517 18.9111 19.9259C17.9858 21 16.2765 21 12.8577 21H11.1423C7.72355 21 6.01419 21 5.08889 19.9259C4.16359 18.8517 4.46408 17.2162 5.06506 13.9453L5.73538 10.2968C6.02492 8.72096 6.16968 7.93303 6.74298 7.46651C7.31628 7 8.1398 7 9.78685 7H14.2132C15.8602 7 16.6837 7 17.257 7.46651C17.8303 7.93303 17.9751 8.72096 18.2646 10.2968ZM10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12Z',
  d6: 'M14.1978 6.25H14.1978C14.9586 6.24998 15.598 6.24996 16.1143 6.31403C16.6617 6.38197 17.1602 6.53059 17.5912 6.89146C18.0222 7.25232 18.2562 7.71697 18.4193 8.24389C18.5731 8.74084 18.6855 9.3703 18.8192 10.1193L18.8192 10.1193L18.8192 10.1193L18.8192 10.1193L19.4895 13.8726L19.4895 13.8727L19.4895 13.8727C19.7726 15.4579 19.9993 16.7275 20.0348 17.7329C20.0715 18.7716 19.9118 19.6676 19.2925 20.4073C18.6731 21.1471 17.8191 21.4618 16.7902 21.6082C15.7942 21.75 14.5044 21.75 12.8942 21.75H12.8942H11.1065H11.1065C9.49622 21.75 8.20645 21.75 7.21049 21.6082C6.18153 21.4618 5.32758 21.1471 4.70822 20.4073C4.08886 19.6676 3.92921 18.7716 3.96588 17.7329C4.00137 16.7275 4.22812 15.4578 4.51121 13.8727L4.51121 13.8727L4.51121 13.8727L5.18145 10.1193L5.18145 10.1193L5.18145 10.1193C5.31517 9.37033 5.42756 8.74085 5.58139 8.24389C5.74449 7.71697 5.97845 7.25232 6.40946 6.89146C6.84047 6.53059 7.339 6.38197 7.8864 6.31403C8.40264 6.24996 9.04206 6.24998 9.80289 6.25H9.80292H9.80295H14.1977H14.1978ZM12 14C10.6193 14 9.5 12.8807 9.5 11.5C9.5 10.1193 10.6193 9 12 9C13.3807 9 14.5 10.1193 14.5 11.5C14.5 12.8807 13.3807 14 12 14ZM13 16.9955C13 16.4457 12.5523 16 12 16C11.4477 16 11 16.4457 11 16.9955V17.0045C11 17.5543 11.4477 18 12 18C12.5523 18 13 17.5543 13 17.0045V16.9955Z',
  d7: 'M5.93712 2.25C5.95963 2.25 5.98221 2.25001 6.00488 2.25001L18.0628 2.25C18.9468 2.24995 19.7124 2.2499 20.3261 2.33562C20.9883 2.4281 21.6192 2.63711 22.1269 3.16449C22.6295 3.68654 22.8237 4.32619 22.9103 4.99561C22.9919 5.62545 22.9918 6.41383 22.9918 7.33739L22.9918 7.40177C22.9918 7.65439 22.994 7.89711 22.9961 8.12825C23.0016 8.73073 23.0063 9.25455 22.9695 9.67014C22.9123 10.3154 22.7444 10.9158 22.2364 11.4435C21.8534 11.8414 21.2203 11.8535 20.8225 11.4704C20.4246 11.0874 20.4125 10.4544 20.7956 10.0565C20.8729 9.97616 20.9429 9.88104 20.9773 9.4935C21.005 9.18046 21.0016 8.8066 20.9967 8.267C20.9944 8.01749 20.9918 7.73253 20.9918 7.40177C20.9918 6.39595 20.9898 5.73847 20.9269 5.25232C20.8672 4.79115 20.7688 4.63751 20.686 4.55155C20.6084 4.47092 20.4757 4.37592 20.0495 4.3164C19.5905 4.25229 18.9664 4.25001 17.9951 4.25001L6.00488 4.25001C5.0335 4.25001 4.40942 4.25229 3.95045 4.31639C3.52427 4.37592 3.39151 4.47092 3.31389 4.55154C3.23113 4.63751 3.13273 4.79115 3.07304 5.25232C3.01012 5.73847 3.00815 6.39595 3.00815 7.40177C3.00815 7.73426 3.0055 8.02045 3.00318 8.27087C2.99819 8.80852 2.99474 9.18135 3.02234 9.49383C3.05658 9.88147 3.12657 9.97636 3.2037 10.0565C3.58672 10.4544 3.57468 11.0874 3.17679 11.4704C2.77891 11.8535 2.14586 11.8414 1.76284 11.4435C1.25466 10.9156 1.08709 10.315 1.0301 9.66981C0.993469 9.25515 0.998266 8.73244 1.00378 8.13142C1.00591 7.89931 1.00815 7.65552 1.00815 7.40177C1.00815 7.38023 1.00815 7.35877 1.00815 7.33738C1.0081 6.41382 1.00807 5.62545 1.08959 4.99561C1.17623 4.32619 1.37047 3.68654 1.87303 3.16449C2.38072 2.63711 3.01162 2.4281 3.67381 2.33562C4.28757 2.2499 5.05309 2.24995 5.93712 2.25Z',
  d8: 'M14.1978 6.25C14.9586 6.24997 15.598 6.24995 16.1143 6.31403C16.6617 6.38197 17.1602 6.53059 17.5912 6.89146C18.0222 7.25232 18.2562 7.71696 18.4193 8.24389C18.5731 8.74084 18.6855 9.37032 18.8192 10.1193L18.8192 10.1193L19.4895 13.8726L19.4895 13.8727C19.7726 15.4579 19.9993 16.7275 20.0348 17.7329C20.0715 18.7716 19.9118 19.6676 19.2925 20.4073C18.6731 21.1471 17.8191 21.4618 16.7902 21.6082C15.7942 21.75 14.5044 21.75 12.8942 21.75H12.8942H11.1065H11.1065C9.49622 21.75 8.20645 21.75 7.21049 21.6082C6.18153 21.4618 5.32758 21.1471 4.70822 20.4073C4.08886 19.6676 3.92921 18.7716 3.96588 17.7329C4.00137 16.7275 4.22812 15.4578 4.51121 13.8727L4.51121 13.8727L5.18145 10.1193L5.18145 10.1193C5.31517 9.37033 5.42756 8.74084 5.58139 8.24389C5.74449 7.71696 5.97845 7.25232 6.40946 6.89146C6.84047 6.53059 7.339 6.38197 7.8864 6.31403C8.40265 6.24995 9.04207 6.24997 9.80292 6.25H9.80295H14.1977H14.1978Z',
  d9: 'M12 14C10.6193 14 9.5 12.8807 9.5 11.5C9.5 10.1193 10.6193 9 12 9C13.3807 9 14.5 10.1193 14.5 11.5C14.5 12.8807 13.3807 14 12 14Z',
  d10: 'M12 16C12.5523 16 13 16.4457 13 16.9955L13 17.0045C13 17.5543 12.5523 18 12 18C11.4477 18 11 17.5543 11 17.0045L11 16.9955C11 16.4457 11.4477 16 12 16Z',
  d11: 'M19 21L18 7H6L5 21H19Z',
  d12: 'M12.5 17.5L11.5 17.4922',
  d13: 'M20 11H22V3H2V11H4',
  d14: 'M5.25191 6.94656C5.27994 6.55409 5.60652 6.25 6 6.25H18C18.3935 6.25 18.7201 6.55409 18.7481 6.94656L19.7481 20.9466C19.7629 21.1542 19.6908 21.3587 19.5489 21.5111C19.407 21.6635 19.2082 21.75 19 21.75H5C4.79181 21.75 4.59298 21.6635 4.4511 21.5111C4.30923 21.3587 4.23707 21.1542 4.25191 20.9466L5.25191 6.94656ZM12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 10.4812 10.4812 9.25 12 9.25ZM13.2558 17.1309L10.7559 17.1113L10.7441 18.6113L13.2441 18.6308L13.2558 17.1309Z',
  d15: 'M1 3.25C1 2.69772 1.44772 2.25 2 2.25H22C22.5523 2.25 23 2.69772 23 3.25V11.25C23 11.8023 22.5523 12.25 22 12.25H20V10.25H21V4.25H3V10.25H4V12.25H2C1.44772 12.25 1 11.8023 1 11.25V3.25Z',
};

export const IconAtm01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="atm-01-stroke-rounded IconAtm01StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconAtm01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="atm-01-duotone-rounded IconAtm01DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconAtm01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="atm-01-twotone-rounded IconAtm01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAtm01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="atm-01-solid-rounded IconAtm01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAtm01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="atm-01-bulk-rounded IconAtm01BulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAtm01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="atm-01-stroke-sharp IconAtm01StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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

export const IconAtm01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="atm-01-solid-sharp IconAtm01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAtm01: TheIconSelfPack = {
  name: 'Atm01',
  StrokeRounded: IconAtm01StrokeRounded,
  DuotoneRounded: IconAtm01DuotoneRounded,
  TwotoneRounded: IconAtm01TwotoneRounded,
  SolidRounded: IconAtm01SolidRounded,
  BulkRounded: IconAtm01BulkRounded,
  StrokeSharp: IconAtm01StrokeSharp,
  SolidSharp: IconAtm01SolidSharp,
};