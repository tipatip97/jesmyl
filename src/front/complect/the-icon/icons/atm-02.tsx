import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 11C21.1568 10.9209 21.2931 10.8212 21.4142 10.6955C22 10.0875 22 9.10893 22 7.15176C22 5.1946 22 4.21602 21.4142 3.60801C20.8284 3 19.8856 3 18 3L6 3C4.11438 3 3.17157 3 2.58579 3.60801C2 4.21602 2 5.1946 2 7.15176C2 9.10893 2 10.0875 2.58579 10.6955C2.70688 10.8212 2.84322 10.9209 3 11',
  d2: 'M18.9349 13.9453L18.2646 10.2968C17.9751 8.72096 17.8303 7.93303 17.257 7.46651C16.6837 7 15.8602 7 14.2132 7H9.78685C8.1398 7 7.31628 7 6.74298 7.46651C6.16968 7.93303 6.02492 8.72096 5.73538 10.2968L5.06506 13.9453C4.46408 17.2162 4.16359 18.8517 5.08889 19.9259C6.01419 21 7.72355 21 11.1423 21H12.8577C16.2765 21 17.9858 21 18.9111 19.9259C19.8364 18.8517 19.5359 17.2162 18.9349 13.9453Z',
  d3: 'M11 7L9.5 21',
  d4: 'M15 16L15 17',
  d5: 'M18.2646 10.2968L18.9349 13.9453C19.5359 17.2162 19.8364 18.8517 18.9111 19.9259C17.9858 21 16.2765 21 12.8577 21H11.1423C10.5442 21 9.99841 21 9.5 20.9942L11 7H14.2132C15.8602 7 16.6837 7 17.257 7.46651C17.8303 7.93303 17.9751 8.72096 18.2646 10.2968Z',
  d6: 'M5.93712 2.25C5.95963 2.25 5.98221 2.25001 6.00488 2.25001L18.0628 2.25C18.9468 2.24995 19.7124 2.2499 20.3261 2.33562C20.9883 2.4281 21.6192 2.63711 22.1269 3.16449C22.6295 3.68654 22.8237 4.32619 22.9103 4.99561C22.9919 5.62545 22.9918 6.41383 22.9918 7.33739L22.9918 7.40177C22.9918 7.65439 22.994 7.89711 22.9961 8.12825C23.0016 8.73073 23.0063 9.25455 22.9695 9.67014C22.9123 10.3154 22.7444 10.9158 22.2364 11.4435C21.8534 11.8414 21.2203 11.8535 20.8225 11.4704C20.4246 11.0874 20.4125 10.4544 20.7956 10.0565C20.8729 9.97616 20.9429 9.88104 20.9773 9.4935C21.005 9.18046 21.0016 8.8066 20.9967 8.267C20.9944 8.01749 20.9918 7.73253 20.9918 7.40177C20.9918 6.39595 20.9898 5.73847 20.9269 5.25232C20.8672 4.79115 20.7688 4.63751 20.686 4.55155C20.6084 4.47092 20.4757 4.37592 20.0495 4.3164C19.5905 4.25229 18.9664 4.25001 17.9951 4.25001L6.00488 4.25001C5.0335 4.25001 4.40942 4.25229 3.95045 4.31639C3.52427 4.37592 3.39151 4.47092 3.31389 4.55154C3.23113 4.63751 3.13273 4.79115 3.07304 5.25232C3.01012 5.73847 3.00815 6.39595 3.00815 7.40177C3.00815 7.73426 3.0055 8.02045 3.00318 8.27087C2.99819 8.80852 2.99474 9.18135 3.02234 9.49383C3.05658 9.88147 3.12657 9.97636 3.2037 10.0565C3.58672 10.4544 3.57468 11.0874 3.17679 11.4704C2.77891 11.8535 2.14586 11.8414 1.76284 11.4435C1.25466 10.9156 1.08709 10.315 1.0301 9.66981C0.993469 9.25515 0.998266 8.73244 1.00378 8.13142C1.00591 7.89931 1.00815 7.65552 1.00815 7.40177C1.00815 7.38023 1.00815 7.35877 1.00815 7.33738C1.0081 6.41382 1.00807 5.62545 1.08959 4.99561C1.17623 4.32619 1.37047 3.68654 1.87303 3.16449C2.38072 2.63711 3.01162 2.4281 3.67381 2.33562C4.28757 2.2499 5.05309 2.24995 5.93712 2.25Z',
  d7: 'M9.80295 6.25C9.90516 6.25 9.95626 6.25 9.99728 6.26192C10.1023 6.29244 10.1824 6.37769 10.2063 6.48441C10.2156 6.52609 10.2124 6.57709 10.2061 6.6791L9.30057 21.167C9.28356 21.4393 9.27505 21.5755 9.18473 21.6573C9.09441 21.7392 8.95993 21.7344 8.69098 21.7249C8.13959 21.7053 7.64684 21.6704 7.21049 21.6082C6.18153 21.4618 5.32758 21.1471 4.70822 20.4073C4.08886 19.6676 3.92921 18.7716 3.96588 17.7329C4.00137 16.7275 4.22812 15.4578 4.51121 13.8727L4.51121 13.8727L4.51121 13.8727L5.18145 10.1193L5.18145 10.1193L5.18145 10.1193C5.31517 9.37033 5.42756 8.74085 5.58139 8.24389C5.74449 7.71697 5.97845 7.25232 6.40946 6.89146C6.84047 6.53059 7.339 6.38197 7.8864 6.31403C8.40264 6.24996 9.04206 6.24998 9.80289 6.25H9.80292H9.80295ZM11.1065 21.75C11.0879 21.75 11.0786 21.75 11.0709 21.7496C10.9102 21.7413 10.7846 21.6076 10.7864 21.4467C10.7865 21.439 10.7871 21.4297 10.7882 21.4112L11.7007 6.81257C11.7173 6.54599 11.7256 6.4127 11.8122 6.33135C11.8988 6.25 12.0324 6.25 12.2995 6.25H14.1977H14.1978H14.1978C14.9586 6.24998 15.598 6.24996 16.1143 6.31403C16.6617 6.38197 17.1602 6.53059 17.5912 6.89146C18.0222 7.25232 18.2562 7.71697 18.4193 8.24389C18.5731 8.74084 18.6855 9.3703 18.8192 10.1193L18.8192 10.1193L18.8192 10.1193L18.8192 10.1193L19.4895 13.8726L19.4895 13.8727L19.4895 13.8727C19.7726 15.4579 19.9993 16.7275 20.0348 17.7329C20.0715 18.7716 19.9118 19.6676 19.2925 20.4073C18.6731 21.1471 17.8191 21.4618 16.7902 21.6082C15.7942 21.75 14.5044 21.75 12.8942 21.75H12.8942H11.1065H11.1065ZM16.75 16C16.75 15.5858 16.4142 15.25 16 15.25C15.5858 15.25 15.25 15.5858 15.25 16V17C15.25 17.4142 15.5858 17.75 16 17.75C16.4142 17.75 16.75 17.4142 16.75 17V16Z',
  d8: 'M10.7889 21.4117C10.7878 21.4298 10.7872 21.4388 10.7871 21.4464C10.7852 21.6075 10.911 21.7415 11.072 21.7496C11.0795 21.75 11.0886 21.75 11.1067 21.75H12.8944C14.5047 21.75 15.7944 21.75 16.7904 21.6082C17.8194 21.4618 18.6733 21.1471 19.2927 20.4073C19.912 19.6676 20.0717 18.7716 20.035 17.7329C19.9995 16.7275 19.7728 15.4579 19.4897 13.8727L18.8194 10.1193C18.6857 9.37034 18.5733 8.74084 18.4195 8.24389C18.2564 7.71697 18.0225 7.25232 17.5914 6.89146C17.1604 6.5306 16.6619 6.38197 16.1145 6.31403C15.5983 6.24996 14.9588 6.24998 14.198 6.25H12.3002C12.0331 6.25 11.8995 6.25 11.813 6.33135C11.7264 6.4127 11.718 6.54599 11.7014 6.81257L10.7889 21.4117Z',
  d9: 'M10.2065 6.67959C10.2129 6.57713 10.2161 6.5259 10.2067 6.48405C10.1827 6.37762 10.1028 6.2926 9.99812 6.26203C9.95694 6.25 9.90561 6.25 9.80295 6.25C9.04212 6.24998 8.40264 6.24996 7.8864 6.31403C7.339 6.38197 6.84047 6.5306 6.40946 6.89146C5.97845 7.25232 5.74449 7.71697 5.58139 8.24389C5.42756 8.74085 5.31517 9.37033 5.18145 10.1193L4.51121 13.8727C4.22812 15.4578 4.00137 16.7275 3.96588 17.7329C3.92921 18.7716 4.08886 19.6676 4.70822 20.4073C5.32758 21.1471 6.18153 21.4618 7.21049 21.6082C7.64697 21.6704 8.13989 21.7053 8.69147 21.7249C8.96042 21.7345 9.0949 21.7392 9.18521 21.6574C9.27553 21.5755 9.28404 21.4393 9.30106 21.167L10.2065 6.67959Z',
  d10: 'M16 15.25C16.4142 15.25 16.75 15.5858 16.75 16L16.75 17C16.75 17.4142 16.4142 17.75 16 17.75C15.5858 17.75 15.25 17.4142 15.25 17L15.25 16C15.25 15.5858 15.5858 15.25 16 15.25Z',
  d11: 'M19 21L18 7H6L5 21H19Z',
  d12: 'M20 11H22V3H2V11H4',
  d13: 'M10.5 7L9.5 21',
  d14: 'M1 3.25C1 2.69772 1.44772 2.25 2 2.25H22C22.5523 2.25 23 2.69772 23 3.25V11.25C23 11.8023 22.5523 12.25 22 12.25H20V10.25H21V4.25H3V10.25H4V12.25H2C1.44772 12.25 1 11.8023 1 11.25V3.25Z',
  d15: 'M6 6.25H9.73341L8.76466 21.75H5C4.79181 21.75 4.59298 21.6635 4.4511 21.5111C4.30923 21.3587 4.23707 21.1542 4.25191 20.9466L5.25191 6.94656C5.27994 6.55409 5.60652 6.25 6 6.25ZM19 21.75H10.2676L11.2363 6.25H18C18.3935 6.25 18.7201 6.55409 18.7481 6.94656L19.7481 20.9466C19.7629 21.1542 19.6908 21.3587 19.5489 21.5111C19.407 21.6635 19.2082 21.75 19 21.75ZM14 15V18H16V15H14Z',
} as const;

export const IconAtm02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atm-02-stroke-rounded IconAtm02StrokeRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAtm02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atm-02-duotone-rounded IconAtm02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAtm02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atm-02-twotone-rounded IconAtm02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAtm02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atm-02-solid-rounded IconAtm02SolidRounded"
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

export const IconAtm02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atm-02-bulk-rounded IconAtm02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconAtm02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atm-02-stroke-sharp IconAtm02StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAtm02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="atm-02-solid-sharp IconAtm02SolidSharp"
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

export const iconPackOfAtm02: TheIconSelfPack = {
  name: 'Atm02',
  StrokeRounded: IconAtm02StrokeRounded,
  DuotoneRounded: IconAtm02DuotoneRounded,
  TwotoneRounded: IconAtm02TwotoneRounded,
  SolidRounded: IconAtm02SolidRounded,
  BulkRounded: IconAtm02BulkRounded,
  StrokeSharp: IconAtm02StrokeSharp,
  SolidSharp: IconAtm02SolidSharp,
};