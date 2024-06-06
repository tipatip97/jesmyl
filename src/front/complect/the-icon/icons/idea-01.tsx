import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.08938 14.999C5.71097 14.1484 5.5 13.2021 5.5 12.2049C5.5 8.50135 8.41015 5.49902 12 5.49902C15.5899 5.49902 18.5 8.50135 18.5 12.2049C18.5 13.2021 18.289 14.1484 17.9106 14.999',
  d2: 'M12 1.99902V2.99902',
  d3: 'M22 11.999H21',
  d4: 'M3 11.999H2',
  d5: 'M19.0704 4.92773L18.3633 5.63484',
  d6: 'M5.6368 5.63582L4.92969 4.92871',
  d7: 'M14.517 19.3055C15.5274 18.9786 15.9326 18.0538 16.0466 17.1236C16.0806 16.8458 15.852 16.6152 15.572 16.6152L8.47685 16.6154C8.18725 16.6155 7.95467 16.8612 7.98925 17.1488C8.1009 18.0771 8.3827 18.7553 9.45345 19.3055M14.517 19.3055C14.517 19.3055 9.62971 19.3055 9.45345 19.3055M14.517 19.3055C14.3955 21.2505 13.8338 22.0207 12.0068 21.9991C10.0526 22.0352 9.60303 21.0831 9.45345 19.3055',
  d8: 'M14.4637 19.8949L14.5745 19.3164H9.43164L9.54248 19.8949C9.66368 20.5275 9.7243 20.8439 9.8601 21.0939C10.07 21.4804 10.4103 21.7715 10.8146 21.9106C11.076 22.0006 11.385 22.0006 12.003 22.0006C12.6211 22.0006 12.9302 22.0006 13.1916 21.9106C13.5959 21.7715 13.9361 21.4804 14.1461 21.0939C14.2819 20.8439 14.3425 20.5275 14.4637 19.8949Z',
  d9: 'M12.002 5.5C8.4121 5.5 5.50195 8.50233 5.50195 12.2059C5.50195 13.8177 6.50195 16 8.00195 18.0441L8.89297 17.1541H12.002H15.3347L16.002 18.0441C17.502 16 18.502 13.8523 18.502 12.2059C18.502 8.50233 15.5919 5.5 12.002 5.5Z',
  d10: 'M14.5194 19.3055C15.5298 18.9786 15.935 18.0538 16.049 17.1236C16.083 16.8458 15.8544 16.6152 15.5744 16.6152L8.4793 16.6154C8.1897 16.6155 7.95712 16.8612 7.9917 17.1488C8.10335 18.0771 8.38515 18.7553 9.4559 19.3055M14.5194 19.3055C14.5194 19.3055 9.63216 19.3055 9.4559 19.3055M14.5194 19.3055C14.3979 21.2505 13.8362 22.0207 12.0092 21.9991C10.055 22.0352 9.60548 21.0831 9.4559 19.3055',
  d11: 'M6.09133 15C5.71292 14.1494 5.50195 13.2031 5.50195 12.2059C5.50195 8.50233 8.4121 5.5 12.002 5.5C15.5919 5.5 18.502 8.50233 18.502 12.2059C18.502 13.2031 18.291 14.1494 17.9126 15',
  d12: 'M12.002 2V3',
  d13: 'M22.002 12H21.002',
  d14: 'M3.00195 12H2.00195',
  d15: 'M19.0723 4.92969L18.3652 5.63679',
  d16: 'M5.63875 5.6368L4.93164 4.92969',
  d17: 'M6.08938 14.995C5.71097 14.1447 5.5 13.1988 5.5 12.2021C5.5 8.50007 8.41015 5.49902 12 5.49902C15.5899 5.49902 18.5 8.50007 18.5 12.2021C18.5 13.1988 18.289 14.1447 17.9106 14.995',
  d18: 'M12 2.00049V2.99944',
  d19: 'M22 11.9961H21',
  d20: 'M3 11.9961H2',
  d21: 'M19.0704 4.92773L18.3633 5.63411',
  d22: 'M5.6368 5.63508L4.92969 4.92871',
  d23: 'M14.5053 19.3058C15.5156 18.9791 15.9208 18.0548 16.0348 17.1251C16.0689 16.8472 15.8402 16.6167 15.5603 16.6167L8.46514 16.6169C8.17554 16.6169 7.94295 16.8627 7.97756 17.1502C8.08923 18.0781 8.37108 18.7559 9.44173 19.3058M14.5053 19.3058C14.5053 19.3058 9.618 19.3058 9.44173 19.3058M14.5053 19.3058C14.3838 21.2499 13.8221 22.0199 11.9951 21.9983C10.0408 22.0344 9.59131 21.0827 9.44173 19.3058',
  d24: 'M15.2975 16.0039H15.2974H15.2973H8.70099H8.70091H8.70083C8.59097 16.0039 8.47711 16.0039 8.38011 16.0099C8.27651 16.0163 8.12848 16.032 7.97269 16.0952C7.49843 16.2878 7.20125 16.7416 7.17886 17.2308C7.17154 17.3908 7.20121 17.5311 7.22718 17.6322C7.25169 17.7276 7.2869 17.8382 7.32204 17.9486L7.32204 17.9486L7.32204 17.9486C7.44422 18.3335 7.57107 18.7331 7.73075 18.9966C7.97324 19.3967 8.31935 19.7194 8.72961 19.9277L8.81818 20.3719C8.90919 20.8314 8.99149 21.2469 9.18893 21.5958C9.49156 22.1305 9.98794 22.5433 10.5904 22.7423C10.9856 22.8728 11.5348 22.872 11.9977 22.8712C12.4607 22.872 13.0099 22.8728 13.405 22.7423C14.0075 22.5433 14.5039 22.1305 14.8065 21.5958C15.004 21.2469 15.0863 20.8314 15.1773 20.3719L15.1773 20.3719L15.2655 19.9293C15.6772 19.7211 16.0244 19.3977 16.2676 18.9966C16.4272 18.7331 16.5541 18.3335 16.6763 17.9486C16.7114 17.8382 16.7466 17.7276 16.7711 17.6322C16.7971 17.5311 16.8268 17.3908 16.8194 17.2308C16.7971 16.7416 16.4999 16.2878 16.0256 16.0952C15.8698 16.032 15.7218 16.0163 15.6182 16.0099C15.5212 16.0039 15.4073 16.0039 15.2975 16.0039ZM13.3201 20.1881H10.6753C10.7593 20.594 10.7885 20.6837 10.8225 20.7439C10.9103 20.8989 11.0464 21.0057 11.1954 21.0549C11.2554 21.0747 11.3516 21.0866 11.9977 21.0866C12.6438 21.0866 12.7401 21.0747 12.8 21.0549C12.9491 21.0057 13.0852 20.8989 13.1729 20.7439C13.207 20.6837 13.2362 20.594 13.3201 20.1881Z',
  d25: 'M12 6.625C8.9916 6.625 6.5 9.14999 6.5 12.3309C6.5 13.186 6.68072 13.994 7.00304 14.7185C7.22753 15.2231 7.00045 15.8142 6.49585 16.0387C5.99124 16.2632 5.4002 16.0361 5.17571 15.5315C4.74122 14.5548 4.5 13.4701 4.5 12.3309C4.5 8.10466 7.8287 4.625 12 4.625C16.1713 4.625 19.5 8.10466 19.5 12.3309C19.5 13.4701 19.2588 14.5548 18.8243 15.5315C18.5998 16.0361 18.0088 16.2632 17.5042 16.0387C16.9996 15.8142 16.7725 15.2231 16.997 14.7185C17.3193 13.994 17.5 13.186 17.5 12.3309C17.5 9.14999 15.0084 6.625 12 6.625Z',
  d26: 'M12 1.125C12.5523 1.125 13 1.57272 13 2.125V3.125C13 3.67728 12.5523 4.125 12 4.125C11.4477 4.125 11 3.67728 11 3.125V2.125C11 1.57272 11.4477 1.125 12 1.125ZM19.7774 4.34685C20.1679 4.73737 20.1679 5.37054 19.7774 5.76106L19.0703 6.46817C18.6798 6.85869 18.0466 6.85869 17.6561 6.46817C17.2656 6.07764 17.2656 5.44448 17.6561 5.05395L18.3632 4.34685C18.7537 3.95632 19.3869 3.95632 19.7774 4.34685ZM4.22251 4.34726C4.61303 3.95674 5.24619 3.95674 5.63672 4.34726L6.34383 5.05437C6.73435 5.44489 6.73435 6.07806 6.34383 6.46858C5.9533 6.85911 5.32014 6.85911 4.92961 6.46858L4.22251 5.76147C3.83198 5.37095 3.83198 4.73779 4.22251 4.34726ZM1 12.125C1 11.5727 1.44772 11.125 2 11.125H3C3.55228 11.125 4 11.5727 4 12.125C4 12.6773 3.55228 13.125 3 13.125H2C1.44772 13.125 1 12.6773 1 12.125ZM20 12.125C20 11.5727 20.4477 11.125 21 11.125H22C22.5523 11.125 23 11.5727 23 12.125C23 12.6773 22.5523 13.125 22 13.125H21C20.4477 13.125 20 12.6773 20 12.125Z',
  d27: 'M8.73047 19.9316L8.81904 20.3758L8.81904 20.3758C8.91005 20.8353 8.99235 21.2508 9.18979 21.5997C9.49242 22.1344 9.98879 22.5472 10.5913 22.7462C10.9865 22.8767 11.5357 22.8759 11.9986 22.8751C12.4615 22.8759 13.0107 22.8767 13.4059 22.7462C14.0084 22.5472 14.5048 22.1344 14.8074 21.5997C15.0048 21.2508 15.0871 20.8353 15.1781 20.3758L15.1781 20.3758L15.2664 19.9332C15.1146 20.01 14.9541 20.0711 14.7869 20.1148C14.488 20.1927 14.165 20.1924 13.7816 20.1921H13.7816L13.7041 20.192H13.321C13.237 20.5979 13.2078 20.6877 13.1738 20.7478C13.0861 20.9028 12.9499 21.0096 12.8009 21.0588C12.7409 21.0786 12.6447 21.0905 11.9986 21.0905C11.3525 21.0905 11.2563 21.0786 11.1963 21.0588C11.0472 21.0096 10.9111 20.9028 10.8234 20.7478C10.7894 20.6877 10.7602 20.5979 10.6762 20.192H10.2959L10.2184 20.1921H10.2184H10.2184C9.83503 20.1924 9.51197 20.1927 9.21313 20.1148C9.04471 20.0708 8.88315 20.0092 8.73047 19.9316Z',
  d28: 'M15.2974 16.0078C15.4073 16.0078 15.5212 16.0078 15.6182 16.0138C15.7218 16.0202 15.8698 16.0359 16.0256 16.0992C16.4999 16.2917 16.7971 16.7455 16.8194 17.2347C16.8268 17.3947 16.7971 17.535 16.7711 17.6361C16.7466 17.7315 16.7114 17.8421 16.6763 17.9525C16.5541 18.3374 16.4272 18.737 16.2676 19.0005C15.9348 19.5495 15.407 19.9528 14.786 20.1148C14.4872 20.1927 14.1641 20.1924 13.7808 20.1921H13.7808L13.7033 20.192H10.295L10.2175 20.1921H10.2175C9.83417 20.1924 9.51111 20.1927 9.21227 20.1148C8.59132 19.9528 8.06349 19.5495 7.73075 19.0005C7.57107 18.737 7.44422 18.3374 7.32204 17.9525L7.32204 17.9525C7.2869 17.8421 7.25169 17.7315 7.22718 17.6361C7.20121 17.535 7.17154 17.3947 7.17886 17.2347C7.20125 16.7455 7.49843 16.2917 7.97269 16.0992C8.12848 16.0359 8.27651 16.0202 8.38011 16.0138C8.47713 16.0078 8.59102 16.0078 8.70091 16.0078H8.70099H15.2973H15.2974Z',
  d29: 'M6.08938 15C5.71097 14.1494 5.5 13.2031 5.5 12.2059C5.5 8.50233 8.41015 5.5 12 5.5C15.5899 5.5 18.5 8.50233 18.5 12.2059C18.5 13.2031 18.289 14.1494 17.9106 15',
  d30: 'M16 16.5H8L8.5 19H15.5L16 16.5Z',
  d31: 'M14.5 19L14 22H10L9.5 19',
  d32: 'M12 2V3',
  d33: 'M22 12L21 12',
  d34: 'M3 12L2 12',
  d35: 'M19.0703 4.92871L18.3632 5.63582',
  d36: 'M5.63672 5.63672L4.92961 4.92961',
  d37: 'M12 6.25C8.84624 6.25 6.25 8.89432 6.25 12.2059C6.25 13.0965 6.43829 13.9391 6.77463 14.6952L5.40413 15.3048C4.98366 14.3597 4.75 13.3096 4.75 12.2059C4.75 8.11033 7.97406 4.75 12 4.75C16.0259 4.75 19.25 8.11033 19.25 12.2059C19.25 13.3096 19.0163 14.3597 18.5959 15.3048L17.2254 14.6952C17.5617 13.9391 17.75 13.0965 17.75 12.2059C17.75 8.89432 15.1538 6.25 12 6.25Z',
  d38: 'M12.75 1.25V3.75H11.25V1.25H12.75Z',
  d39: 'M22.75 12.75L20.25 12.75L20.25 11.25L22.75 11.25L22.75 12.75Z',
  d40: 'M3.75 12.75L1.25 12.75L1.25 11.25L3.75 11.25L3.75 12.75Z',
  d41: 'M20.131 4.92882L18.3632 6.69659L17.3025 5.63593L19.0703 3.86816L20.131 4.92882Z',
  d42: 'M5.63661 6.69738L3.86884 4.92961L4.9295 3.86895L6.69727 5.63672L5.63661 6.69738Z',
  d43: 'M8.00001 15.75H16C16.2247 15.75 16.4376 15.8507 16.58 16.0245C16.7225 16.1983 16.7795 16.4268 16.7354 16.6471L16.4149 18.25H7.58515L7.26457 16.6471C7.2205 16.4268 7.27755 16.1983 7.42 16.0245C7.56245 15.8507 7.77531 15.75 8.00001 15.75Z',
  d44: 'M8.86617 19.75L9.26172 22.1233C9.32199 22.4849 9.63489 22.75 10.0015 22.75H14.0015C14.3681 22.75 14.681 22.4849 14.7413 22.1233L15.1369 19.75H8.86617Z',
};

export const IconIdea01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="idea-01-stroke-rounded IconIdea01StrokeRounded"
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
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconIdea01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="idea-01-duotone-rounded IconIdea01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIdea01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="idea-01-twotone-rounded IconIdea01TwotoneRounded"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIdea01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="idea-01-solid-rounded IconIdea01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIdea01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="idea-01-bulk-rounded IconIdea01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="0.5" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIdea01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="idea-01-stroke-sharp IconIdea01StrokeSharp"
    >
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d30} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d31} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d32} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d33} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d34} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d35} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d36} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIdea01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="idea-01-solid-sharp IconIdea01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d37} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d38} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d39} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d40} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d41} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d42} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d43} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d44} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfIdea01: TheIconSelfPack = {
  name: 'Idea01',
  StrokeRounded: IconIdea01StrokeRounded,
  DuotoneRounded: IconIdea01DuotoneRounded,
  TwotoneRounded: IconIdea01TwotoneRounded,
  SolidRounded: IconIdea01SolidRounded,
  BulkRounded: IconIdea01BulkRounded,
  StrokeSharp: IconIdea01StrokeSharp,
  SolidSharp: IconIdea01SolidSharp,
};