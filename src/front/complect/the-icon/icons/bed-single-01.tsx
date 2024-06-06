import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 17.5H2',
  d2: 'M22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V21',
  d3: 'M16 12V10.6178C16 10.1103 15.9085 9.94054 15.4396 9.7405C14.4631 9.32389 13.2778 9 12 9C10.7222 9 9.53688 9.32389 8.5604 9.7405C8.09154 9.94054 8 10.1103 8 10.6178L8 12',
  d4: 'M20 12V7.36057C20 6.66893 20 6.32311 19.8292 5.99653C19.6584 5.66995 19.4151 5.50091 18.9284 5.16283C16.9661 3.79978 14.5772 3 12 3C9.42282 3 7.03391 3.79978 5.07163 5.16283C4.58492 5.50091 4.34157 5.66995 4.17079 5.99653C4 6.32311 4 6.66893 4 7.36057V12',
  d5: 'M2 17.5H22V17.4688V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V17.5Z',
  d6: 'M12 3C9.42282 3 7.03391 3.79978 5.07163 5.16283C4.58492 5.50091 4.34157 5.66995 4.17079 5.99653C4 6.32311 4 6.66893 4 7.36057V12H20V7.36057C20 6.66893 20 6.32311 19.8292 5.99653C19.6584 5.66995 19.4151 5.50091 18.9284 5.16283C16.9661 3.79978 14.5772 3 12 3Z',
  d7: 'M5.07163 5.16283C7.03391 3.79978 9.42282 3 12 3C14.5772 3 16.9661 3.79978 18.9284 5.16283C19.4151 5.50091 19.6584 5.66995 19.8292 5.99653C20 6.32311 20 6.66893 20 7.36057V12H16V10.6178C16 10.1103 15.9085 9.94054 15.4396 9.7405C14.4631 9.32389 13.2778 9 12 9C10.7222 9 9.53688 9.32389 8.5604 9.7405C8.09154 9.94054 8 10.1103 8 10.6178V12H4V7.36057C4 6.66893 4 6.32311 4.17079 5.99653C4.34157 5.66995 4.58492 5.50091 5.07163 5.16283Z',
  d8: 'M2 21V17.5312M22 21V17.4688M22 17.4688V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V17.5312M22 17.4688V17.5H2V17.5312',
  d9: 'M12 9C10.7222 9 9.53688 9.32389 8.5604 9.7405C8.09154 9.94054 8 10.1103 8 10.6178V12H16V10.6178C16 10.1103 15.9085 9.94054 15.4396 9.7405C14.4631 9.32389 13.2778 9 12 9Z',
  d10: 'M1.25 17.2168C1.25 17.2175 1.25 17.2181 1.25 17.2188L1.25 20.75C1.25 21.3023 1.69772 21.75 2.25 21.75C2.80228 21.75 3.25 21.3023 3.25 20.75L3.25 18.25L20.75 18.25V20.75C20.75 21.3023 21.1977 21.75 21.75 21.75C22.3023 21.75 22.75 21.3023 22.75 20.75V17.5017C22.75 17.5011 22.75 17.5006 22.75 17.5L22.75 17.2188L22.75 15.948C22.75 15.0495 22.7501 14.3003 22.6701 13.7055C22.5857 13.0777 22.4 12.5109 21.9445 12.0555C21.4891 11.6 20.9223 11.4143 20.2945 11.3299C19.6997 11.2499 18.9505 11.25 18.052 11.25H18.052L5.948 11.25H5.94797C5.04951 11.25 4.3003 11.2499 3.70552 11.3299C3.07773 11.4143 2.51093 11.6 2.05546 12.0555C1.59999 12.5109 1.41432 13.0777 1.32991 13.7055C1.24995 14.3003 1.24997 15.0495 1.25 15.948V15.948L1.25 17.2168Z',
  d11: 'M12 4.15909C9.69861 4.15909 7.56873 4.8597 5.81906 6.05303C5.56645 6.22532 5.44085 6.31261 5.35212 6.38896C5.28747 6.4446 5.26852 6.47271 5.25014 6.50721C5.24037 6.52557 5.22302 6.5594 5.21074 6.68008C5.1959 6.826 5.1948 7.01879 5.1948 7.36691V11.7955C5.1948 12.3226 4.75954 12.75 4.22263 12.75C3.68571 12.75 3.25046 12.3226 3.25046 11.7955V7.36691L3.25023 7.24762C3.24868 6.70772 3.24708 6.14841 3.52718 5.62252C3.80645 5.09818 4.22987 4.81086 4.63244 4.53769L4.70982 4.4851C6.77548 3.07624 9.29047 2.25 12 2.25C14.7095 2.25 17.2245 3.07624 19.2902 4.4851L19.3676 4.53769C19.7701 4.81086 20.1936 5.09818 20.4728 5.62252C20.7529 6.14841 20.7513 6.70771 20.7498 7.24762L20.7495 7.36691V11.7955C20.7495 12.3226 20.3143 12.75 19.7774 12.75C19.2405 12.75 18.8052 12.3226 18.8052 11.7955V7.36691C18.8052 7.01879 18.8041 6.826 18.7893 6.68008C18.777 6.5594 18.7596 6.52557 18.7499 6.50721C18.7315 6.47271 18.7125 6.4446 18.6479 6.38896C18.5591 6.31261 18.4336 6.22532 18.1809 6.05303C16.4313 4.8597 14.3014 4.15909 12 4.15909Z',
  d12: 'M8.26608 9.05066C9.31115 8.60479 10.5974 8.25 12 8.25C13.4026 8.25 14.6888 8.60479 15.7339 9.05066C15.9989 9.16371 16.3231 9.33148 16.5323 9.66743C16.7346 9.9924 16.75 10.3519 16.75 10.6178V12.75H7.25V10.6178C7.25 10.3519 7.26537 9.9924 7.4677 9.66743C7.67688 9.33148 8.00111 9.16371 8.26608 9.05066Z',
  d13: 'M18.052 11.25C18.9505 11.25 19.6997 11.2499 20.2945 11.3299C20.9223 11.4143 21.4891 11.6 21.9445 12.0555C22.4 12.5109 22.5857 13.0777 22.6701 13.7055C22.7501 14.3003 22.75 15.0495 22.75 15.948V17.5C22.75 17.9142 22.4142 18.25 22 18.25H2C1.58579 18.25 1.25 17.9142 1.25 17.5L1.25 15.948V15.948C1.24997 15.0495 1.24995 14.3003 1.32991 13.7055C1.41432 13.0777 1.59999 12.5109 2.05546 12.0555C2.51093 11.6 3.07773 11.4143 3.70552 11.3299C4.3003 11.2499 5.04951 11.25 5.94797 11.25H5.948H18.052H18.052Z',
  d14: 'M3.25046 11.414V7.36691L3.25023 7.24762C3.24868 6.70772 3.24708 6.14841 3.52718 5.62252C3.80645 5.09818 4.22987 4.81086 4.63244 4.53769L4.70982 4.4851C6.77548 3.07624 9.29047 2.25 12 2.25C14.7095 2.25 17.2245 3.07624 19.2902 4.4851L19.3676 4.53769C19.7701 4.81086 20.1936 5.09818 20.4728 5.62252C20.7529 6.14841 20.7513 6.70771 20.7498 7.24762L20.7495 7.36691V11.414C20.6021 11.378 20.4502 11.3508 20.2945 11.3299C19.8745 11.2734 19.3774 11.2569 18.8052 11.252V7.36691C18.8052 7.01879 18.8041 6.826 18.7893 6.68008C18.777 6.5594 18.7596 6.52557 18.7499 6.50721C18.7315 6.47271 18.7125 6.4446 18.6479 6.38896C18.5591 6.31261 18.4336 6.22532 18.1809 6.05303C16.4313 4.8597 14.3014 4.15909 12 4.15909C9.69861 4.15909 7.56873 4.8597 5.81906 6.05303C5.56645 6.22532 5.44085 6.31261 5.35212 6.38896C5.28747 6.4446 5.26852 6.47271 5.25014 6.50721C5.24037 6.52557 5.22302 6.5594 5.21074 6.68008C5.1959 6.826 5.1948 7.01879 5.1948 7.36691V11.252C4.62258 11.2569 4.12554 11.2734 3.70552 11.3299C3.54983 11.3508 3.39788 11.378 3.25046 11.414Z',
  d15: 'M7.25 11.25V10.6178C7.25 10.3519 7.26537 9.9924 7.4677 9.66743C7.67688 9.33148 8.00111 9.16371 8.26608 9.05066C9.31115 8.60478 10.5974 8.25 12 8.25C13.4026 8.25 14.6888 8.60479 15.7339 9.05066C15.9989 9.16371 16.3231 9.33148 16.5323 9.66743C16.7346 9.9924 16.75 10.3519 16.75 10.6178V11.25H7.25Z',
  d16: 'M1.25 17.2188L1.25 17.5C1.25 17.9142 1.58579 18.25 2 18.25H3.25V20.75C3.25 21.3023 2.80228 21.75 2.25 21.75C1.69772 21.75 1.25 21.3023 1.25 20.75V17.2188Z',
  d17: 'M20.75 18.25V20.75C20.75 21.3023 21.1977 21.75 21.75 21.75C22.3023 21.75 22.75 21.3023 22.75 20.75V17.5017C22.7491 17.9151 22.4136 18.25 22 18.25H20.75Z',
  d18: 'M22 17H2',
  d19: 'M22 21V12H2V21',
  d20: 'M15 12V9H9V12',
  d21: 'M20 12V6C17.7342 4.10935 14.9758 3 12 3C9.0242 3 6.26579 4.10935 4 6V12',
  d22: 'M1.25 12.4998C1.25 11.9475 1.68754 11.4998 2.22727 11.4998H8.25V9.49976C8.25 9.08554 8.58579 8.74976 9 8.74976H15C15.4142 8.74976 15.75 9.08554 15.75 9.49976V11.4998H21.7727C22.3125 11.4998 22.75 11.9475 22.75 12.4998V21.4998H20.7955V18.2498H3.20455V21.4998H1.25V12.4998Z',
  d23: 'M5.19444 6.97836V12.4999H3.25V6.0319L3.59934 5.73207C5.95837 3.70737 8.85609 2.49988 12 2.49988C15.1439 2.49988 18.0416 3.70737 20.4007 5.73207L20.75 6.0319V12.4999H18.8056V6.97836C16.8302 5.40052 14.4937 4.49988 12 4.49988C9.50627 4.49988 7.16976 5.40052 5.19444 6.97836Z',
};

export const IconBedSingle01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bed-single-01-stroke-rounded IconBedSingle01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconBedSingle01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bed-single-01-duotone-rounded IconBedSingle01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBedSingle01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bed-single-01-twotone-rounded IconBedSingle01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBedSingle01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bed-single-01-solid-rounded IconBedSingle01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBedSingle01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bed-single-01-bulk-rounded IconBedSingle01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBedSingle01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bed-single-01-stroke-sharp IconBedSingle01StrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBedSingle01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bed-single-01-solid-sharp IconBedSingle01SolidSharp"
    >
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBedSingle01: TheIconSelfPack = {
  name: 'BedSingle01',
  StrokeRounded: IconBedSingle01StrokeRounded,
  DuotoneRounded: IconBedSingle01DuotoneRounded,
  TwotoneRounded: IconBedSingle01TwotoneRounded,
  SolidRounded: IconBedSingle01SolidRounded,
  BulkRounded: IconBedSingle01BulkRounded,
  StrokeSharp: IconBedSingle01StrokeSharp,
  SolidSharp: IconBedSingle01SolidSharp,
};