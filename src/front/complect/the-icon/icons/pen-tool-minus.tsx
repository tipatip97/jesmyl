import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.5995 18.9737L7.63427 20.2672C6.2983 20.5153 5.63031 20.6393 5.24549 20.2545C4.86067 19.8697 4.98471 19.2016 5.2328 17.8656L6.52621 10.9001C6.73362 9.78311 6.83732 9.22463 7.20549 8.88719C7.57365 8.54975 8.24697 8.48389 9.59359 8.35218C10.8915 8.22524 12.1197 7.78032 13.4 6.5L19 12.1005C17.7197 13.3808 17.2746 14.6083 17.1474 15.9062C17.0155 17.253 16.9495 17.9264 16.6121 18.2945C16.2747 18.6626 15.7163 18.7663 14.5995 18.9737Z',
  d2: 'M13 14.7105C12.4405 14.6197 11.9289 14.3763 11.5263 13.9737M11.5263 13.9737C11.1237 13.5711 10.8803 13.0595 10.7895 12.5M11.5263 13.9737L6 19.5',
  d3: 'M13.5 6.5C14.1332 5.56586 15.4907 3.66107 16.7613 3.50976C17.6287 3.40648 18.3472 4.12499 19.7842 5.56202L19.938 5.7158C21.375 7.15283 22.0935 7.87135 21.9902 8.73867C21.8389 10.0092 19.9341 11.3668 19 12',
  d4: 'M2 3.5H8',
  d5: 'M2.125 2.625H8.125C8.67729 2.625 9.125 3.07272 9.125 3.625C9.125 4.17728 8.67729 4.625 8.125 4.625H2.125C1.57272 4.625 1.125 4.17728 1.125 3.625C1.125 3.07272 1.57272 2.625 2.125 2.625Z',
  d6: 'M20.5937 5.31058L20.44 5.15681C19.7569 4.47374 19.1436 3.86039 18.6309 3.48067C18.0878 3.07845 17.5002 2.80652 16.7981 2.89014C16.3182 2.94728 15.8807 3.16165 15.5089 3.41408C15.1328 3.66943 14.7826 3.99207 14.4716 4.32171C14.2294 4.57832 14.0018 4.84917 13.7952 5.11214C13.6462 5.30175 13.5718 5.39656 13.5786 5.51024C13.5853 5.62392 13.6729 5.7115 13.8481 5.88666L19.8635 11.9027C20.0387 12.0778 20.1263 12.1654 20.2399 12.1722C20.3536 12.179 20.4485 12.1046 20.6381 11.9556C20.9011 11.7489 21.1721 11.5212 21.4288 11.279C21.7585 10.9679 22.0811 10.6177 22.3365 10.2416C22.5889 9.86986 22.8033 9.43232 22.8604 8.95247C22.944 8.25031 22.6721 7.66276 22.2699 7.11963C21.8901 6.6069 21.2768 5.9936 20.5937 5.31058Z',
  d7: 'M18.8318 13.7474L18.8318 13.7474C18.3093 14.5328 18.0977 15.2992 18.0188 16.1045L18.0151 16.1424L18.0151 16.1425C17.9523 16.7836 17.8999 17.3186 17.8178 17.737C17.7341 18.1632 17.5995 18.5887 17.29 18.9264C16.9945 19.2488 16.6279 19.4193 16.2415 19.537C15.8795 19.6472 15.4255 19.7315 14.9008 19.8289L7.84171 21.1398C7.22049 21.2553 6.67353 21.3569 6.23548 21.3728C6.00032 21.3814 5.75217 21.3676 5.51163 21.2999L11.7129 15.0984C12.109 15.3445 12.5487 15.5018 13.0052 15.5759C13.4141 15.6423 13.7994 15.3647 13.8657 14.9558C13.9321 14.547 13.6545 14.1617 13.2456 14.0953C12.8261 14.0272 12.4629 13.8492 12.1821 13.5685C11.9013 13.2877 11.7233 12.9244 11.6552 12.5049C11.5888 12.0961 11.2036 11.8184 10.7947 11.8848C10.3859 11.9512 10.1082 12.3364 10.1746 12.7453C10.2487 13.2018 10.406 13.6415 10.6522 14.0377L4.45057 20.2396C4.38254 19.9987 4.3687 19.7501 4.37728 19.5146C4.39323 19.0765 4.49485 18.5295 4.61027 17.9082L5.92112 10.8488C6.01853 10.3241 6.10281 9.87004 6.21306 9.50798C6.33071 9.12162 6.50125 8.75497 6.8237 8.45943C7.1614 8.14991 7.58699 8.01536 8.01314 7.93172C8.43159 7.84959 8.96664 7.79727 9.60772 7.73459L9.64555 7.73089C10.4509 7.65212 11.2176 7.44068 12.0032 6.91825C12.2285 6.76841 12.3411 6.69349 12.4478 6.70412C12.5544 6.71474 12.6428 6.80316 12.8196 6.98L18.7701 12.931C18.9469 13.1078 19.0353 13.1963 19.0459 13.3029C19.0566 13.4095 18.9816 13.5222 18.8318 13.7474Z',
  d8: 'M18.8318 13.7474C18.9816 13.5222 19.0566 13.4095 19.0459 13.3029C19.0353 13.1963 18.9469 13.1078 18.7701 12.931L12.8196 6.98C12.6428 6.80316 12.5544 6.71474 12.4478 6.70412C12.3411 6.69349 12.2285 6.76841 12.0032 6.91825C11.2176 7.44068 10.4509 7.65212 9.64555 7.73089L9.60772 7.73459C8.96664 7.79727 8.43159 7.84959 8.01314 7.93172C7.58699 8.01536 7.1614 8.14991 6.8237 8.45943C6.50125 8.75497 6.33071 9.12162 6.21306 9.50798C6.10281 9.87004 6.01853 10.3241 5.92112 10.8488L4.61027 17.9082C4.49485 18.5295 4.39323 19.0765 4.37728 19.5146C4.36024 19.9823 4.43164 20.5015 4.84012 20.91C5.24861 21.3185 5.76772 21.3899 6.23548 21.3728C6.67353 21.3569 7.22049 21.2553 7.84171 21.1398L14.9008 19.8289C15.4255 19.7315 15.8795 19.6472 16.2415 19.537C16.6279 19.4193 16.9945 19.2488 17.29 18.9264C17.5995 18.5887 17.7341 18.1632 17.8178 17.737C17.8999 17.3186 17.9523 16.7835 18.0151 16.1424L18.0188 16.1045C18.0977 15.2992 18.3093 14.5328 18.8318 13.7474Z',
  d9: 'M5.51126 21.2999L11.7125 15.0984C12.1087 15.3445 12.5484 15.5018 13.0049 15.5759C13.4137 15.6423 13.799 15.3647 13.8654 14.9558C13.9317 14.547 13.6541 14.1617 13.2452 14.0953C12.8257 14.0272 12.4625 13.8492 12.1817 13.5685C11.9009 13.2877 11.7229 12.9244 11.6548 12.5049C11.5885 12.0961 11.2032 11.8184 10.7944 11.8848C10.3855 11.9512 10.1079 12.3364 10.1742 12.7453C10.2483 13.2018 10.4056 13.6415 10.6518 14.0377L4.4502 20.2396C4.51726 20.4771 4.63697 20.7072 4.83975 20.91C5.04287 21.1131 5.27335 21.2329 5.51126 21.2999Z',
  d10: 'M12.5 7L15 3L22 10L18 12.5',
  d11: 'M4.0011 21L3.25739 20.9031C3.2273 21.134 3.30615 21.3657 3.4708 21.5304C3.63545 21.695 3.86723 21.7738 4.09811 21.7437L4.0011 21ZM14.7333 19.6L14.8303 20.3437L15.2414 20.2901L15.4147 19.9135L14.7333 19.6ZM5.4 10.2667L5.08652 9.58533L4.70987 9.75862L4.65629 10.1697L5.4 10.2667ZM12.5 7L13.0303 6.46967C12.8084 6.24771 12.4717 6.18746 12.1865 6.31866L12.5 7ZM18 12.5L18.6813 12.8135C18.8125 12.5283 18.7523 12.1916 18.5303 11.9697L18 12.5ZM4.09811 21.7437L14.8303 20.3437L14.6363 18.8563L3.90409 20.2563L4.09811 21.7437ZM4.74481 21.0969L6.14371 10.3636L4.65629 10.1697L3.25739 20.9031L4.74481 21.0969ZM5.71348 10.948L12.8135 7.68134L12.1865 6.31866L5.08652 9.58533L5.71348 10.948ZM15.4147 19.9135L18.6813 12.8135L17.3187 12.1865L14.052 19.2865L15.4147 19.9135ZM18.5303 11.9697L13.0303 6.46967L11.9697 7.53033L17.4697 13.0303L18.5303 11.9697ZM12.4591 15.4225L11.0175 13.9808L9.9568 15.0414L11.3984 16.4831L12.4591 15.4225ZM11.0175 13.9808L9.57593 12.539L8.51521 13.5996L9.9568 15.0414L11.0175 13.9808ZM9.9568 13.9808L3.46964 20.4686L4.53036 21.5292L11.0175 15.0414L9.9568 13.9808Z',
  d12: 'M2 4H8',
  d13: 'M7.5 5H1.5V3H7.5V5Z',
  d14: 'M10.932 6.7786L4.42212 9.77368L3 20.6848L9.14789 14.5357L8.23466 13.6224L9.29753 12.5597L12.1866 15.4489L11.1237 16.5117L10.2107 15.5985L4.0604 21.75L14.9751 20.3263L17.9703 13.8166L10.932 6.7786Z',
  d15: 'M18.3047 12.0254C18.2938 12.013 18.2825 12.0009 18.2707 11.9892L12.7595 6.47814C12.7478 6.46636 12.7357 6.45505 12.7233 6.44419L18.3047 12.0254Z',
  d16: 'M15.2656 2.47012C15.1037 2.30818 14.8767 2.22892 14.6492 2.25483C14.4216 2.28075 14.2183 2.40901 14.0969 2.60321L12.0925 5.81015L18.9397 12.6571L22.1468 10.6528C22.341 10.5314 22.4693 10.3281 22.4952 10.1006C22.5211 9.87303 22.4418 9.64608 22.2799 9.48414L15.2656 2.47012Z',
};

export const IconPenToolMinusStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-minus-stroke-rounded IconPenToolMinusStrokeRounded"
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

export const IconPenToolMinusDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-minus-duotone-rounded IconPenToolMinusDuotoneRounded"
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

export const IconPenToolMinusTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-minus-twotone-rounded IconPenToolMinusTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPenToolMinusSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-minus-solid-rounded IconPenToolMinusSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconPenToolMinusBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-minus-bulk-rounded IconPenToolMinusBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPenToolMinusStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-minus-stroke-sharp IconPenToolMinusStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPenToolMinusSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-minus-solid-sharp IconPenToolMinusSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const iconPackOfPenToolMinus: TheIconSelfPack = {
  name: 'PenToolMinus',
  StrokeRounded: IconPenToolMinusStrokeRounded,
  DuotoneRounded: IconPenToolMinusDuotoneRounded,
  TwotoneRounded: IconPenToolMinusTwotoneRounded,
  SolidRounded: IconPenToolMinusSolidRounded,
  BulkRounded: IconPenToolMinusBulkRounded,
  StrokeSharp: IconPenToolMinusStrokeSharp,
  SolidSharp: IconPenToolMinusSolidSharp,
};