import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.671 7.87124L14.5 10.0051L4.75 10.0051C3.7835 10.0051 3 10.7886 3 11.7551C3 12.7216 3.7835 13.5051 4.75 13.5051H10L10.4776 16.493C10.7669 18.4216 10.9115 19.386 11.3184 20.0652C11.9906 21.1872 13 22 14.4736 22C15.5 22 16.1886 21.7463 18.0387 21.1296C19.2127 20.7383 19.7996 20.5426 20.2643 20.2236C21.0293 19.6983 21.5878 18.9233 21.8442 18.0315C22 17.4898 22 16.8711 22 15.6336V14.5847C22 12.9395 22 12.1169 21.6981 11.3846C21.644 11.2533 21.5829 11.1249 21.5151 11.0001C21.1371 10.304 20.4987 9.78533 19.2219 8.74791L15.0883 5.38941C14.4531 4.87331 13.5441 4.86987 12.905 5.38114C12.1369 5.99565 12.0308 7.12437 12.671 7.87124Z',
  d2: 'M2 4.5L8 4.5M2 4.5C2 3.79977 3.9943 2.49153 4.5 2M2 4.5C2 5.20023 3.9943 6.50847 4.5 7',
  d3: 'M4.75 9.25513C3.36929 9.25513 2.25 10.3744 2.25 11.7551C2.25 13.1358 3.36929 14.2551 4.75 14.2551H9.36036L9.73641 16.6078L9.73982 16.6306C9.88112 17.5726 9.9926 18.3158 10.121 18.9068C10.2515 19.5075 10.4108 20.0095 10.6751 20.4506C11.4404 21.7281 12.6633 22.75 14.4736 22.75C15.5606 22.75 16.3446 22.4875 17.8824 21.9726C18.9448 21.6188 20.1359 21.2216 20.6888 20.8418C21.5973 20.218 22.2605 19.2978 22.565 18.2388C22.7504 17.5941 22.7503 16.8759 22.75 15.7561L22.75 14.4266C22.7505 12.9341 22.7507 11.9702 22.3915 11.0988C22.3273 10.9429 22.2547 10.7904 22.1742 10.6422C21.7244 9.81393 20.9761 9.20629 19.8175 8.26549L15.5613 4.80732C14.6522 4.06869 13.3511 4.06376 12.4365 4.79549C11.3371 5.67497 11.1853 7.29041 12.1015 8.35934L12.8693 9.25514L4.75 9.25513Z',
  d4: 'M8.25004 5.50586C8.80232 5.50586 9.25004 5.05814 9.25004 4.50586C9.25004 3.95357 8.80232 3.50586 8.25004 3.50586L5.75 3.50586L5.75002 2.9116C5.75014 2.73596 5.7503 2.52031 5.72823 2.34387L5.72781 2.34053C5.71204 2.21408 5.64021 1.63804 5.07461 1.36368C4.50779 1.08872 4.00765 1.39065 3.89944 1.45597L3.43095 1.79511C3.05513 2.08975 2.54067 2.49545 2.14966 2.87588C1.95455 3.06571 1.75332 3.28297 1.59447 3.51388C1.45326 3.71914 1.25 4.06933 1.25 4.5C1.25 4.93067 1.45326 5.28086 1.59447 5.48612C1.75331 5.71703 1.95455 5.93429 2.14966 6.12412C2.54067 6.50455 3.05512 6.91025 3.43095 7.20488L3.89944 7.54403C4.00765 7.60935 4.50779 7.91128 5.07461 7.63632C5.64021 7.36196 5.71204 6.78592 5.72781 6.65947L5.72823 6.65613C5.7503 6.47969 5.75014 6.26403 5.75002 6.0884L5.75 5.50586L8.25004 5.50586Z',
  d5: 'M7.98224 4.07856H2.75381M4.47779 1.58105L1.97461 4.07856L4.47779 6.57606',
  d6: 'M14.4559 10.5964L12.6247 8.47042C12.4982 8.32359 12.3892 8.1607 12.3261 7.97764C12.0372 7.1404 12.2376 6.48465 12.9393 5.92595C13.5835 5.40532 14.3725 5.48414 15.1487 6.05159L21.7501 10.4379C21.9717 10.5463 21.9753 10.931 21.9717 11.2628V18.78C21.9059 19.6723 21.5498 20.3522 20.8639 20.9222C20.2502 21.4321 19.4276 21.5782 18.629 21.5782H13.7763C13.0737 21.5782 12.3466 21.4969 11.778 21.0852C11.0352 20.5475 10.522 19.7384 10.4416 18.7125L10.4416 14.1024H4.6037C3.67681 14.0917 2.89447 13.1705 2.96653 12.2606C2.97681 11.3039 3.80521 10.5865 4.73268 10.5964H14.4559Z',
  d7: 'M12.4365 5.29549C13.3411 4.57177 14.6238 4.56867 15.5313 5.28334L22.4162 9.87608C22.6247 10.0152 22.75 10.2493 22.75 10.5V18.5C22.75 20.5711 21.0711 22.25 19 22.25H13.4776C11.4065 22.25 9.72757 20.5711 9.72757 18.5L9.72757 14.7551H4.75C3.36929 14.7551 2.25 13.6358 2.25 12.2551C2.25 10.8744 3.36929 9.75513 4.75 9.75513L12.8693 9.75514L12.1015 8.85934C11.1853 7.79041 11.3371 6.17497 12.4365 5.29549Z',
  d8: 'M4.45598 1.75L1.24887 4.95711L4.45598 8.16421L5.87019 6.75L5.0773 5.95711L8.66309 5.95711L8.66309 3.95711L5.0773 3.95711L5.87019 3.16421L4.45598 1.75Z',
};

export const IconPointingLeft03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-03-stroke-rounded IconPointingLeft03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPointingLeft03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-03-duotone-rounded IconPointingLeft03DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconPointingLeft03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-03-twotone-rounded IconPointingLeft03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconPointingLeft03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-03-solid-rounded IconPointingLeft03SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingLeft03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-03-bulk-rounded IconPointingLeft03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingLeft03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-03-stroke-sharp IconPointingLeft03StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingLeft03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-03-solid-sharp IconPointingLeft03SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPointingLeft03: TheIconSelfPack = {
  name: 'PointingLeft03',
  StrokeRounded: IconPointingLeft03StrokeRounded,
  DuotoneRounded: IconPointingLeft03DuotoneRounded,
  TwotoneRounded: IconPointingLeft03TwotoneRounded,
  SolidRounded: IconPointingLeft03SolidRounded,
  BulkRounded: IconPointingLeft03BulkRounded,
  StrokeSharp: IconPointingLeft03StrokeSharp,
  SolidSharp: IconPointingLeft03SolidSharp,
};