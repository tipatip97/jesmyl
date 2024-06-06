import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.925 2.5H9.15C9.15 2.5 8.2 7.7 8.2 10.1C8.2 13.1 10.1 15.5 12 15.5C13.9 15.5 15.8 13.1 15.8 10.1C15.8 7.7 14.85 2.5 14.85 2.5H20.075C20.075 2.5 21.5 7.13842 21.5 11.5C21.5 17 17.7 21.5 12 21.5C6.3 21.5 2.5 17 2.5 11.5C2.5 7.13842 3.925 2.5 3.925 2.5Z',
  d2: 'M2.97266 7.25H8.19766M15.7977 7.25L21.0227 7.25',
  d3: 'M12 21.5C6.3 21.5 2.5 17 2.5 11.5C2.5 9.96264 2.67704 8.3909 2.90632 7H8.4542C8.30953 8.14737 8.2 9.28509 8.2 10.1C8.2 13.1 10.1 15.5 12 15.5C13.9 15.5 15.8 13.1 15.8 10.1C15.8 9.28509 15.6905 8.14737 15.5458 7H21.0937C21.323 8.3909 21.5 9.96264 21.5 11.5C21.5 17 17.7 21.5 12 21.5Z',
  d4: 'M3.92494 1.75C3.59556 1.75 3.30473 1.9649 3.20801 2.27975L3.20607 2.28664C3.13984 2.52179 2.948 3.20293 2.84607 3.60938C2.64036 4.42969 2.38097 5.57539 2.16624 6.87802C2.13042 7.09531 2.19192 7.31737 2.33442 7.48529C2.47692 7.6532 2.68602 7.75 2.90626 7.75H8.45414C8.83207 7.75 9.15097 7.46879 9.19825 7.09383C9.33736 5.99059 9.50972 4.87556 9.64768 4.03449C9.71658 3.61443 9.84486 2.88016 9.88773 2.63478C9.92771 2.4159 9.86845 2.19057 9.72595 2.01968C9.58346 1.8488 9.37244 1.75 9.14994 1.75H3.92494ZM4.525 6.25C4.18912 6.25 4.02118 6.25 3.93111 6.13808C3.84105 6.02616 3.87646 5.86444 3.94729 5.54099C4.08338 4.9195 4.2525 4.21482 4.37801 3.70394C4.43142 3.48653 4.45813 3.37783 4.53965 3.31392C4.62116 3.25 4.73369 3.25 4.95875 3.25H7.55134C7.87917 3.25 8.04308 3.25 8.13291 3.35534C8.22274 3.46068 8.1968 3.62283 8.14493 3.94712C8.05768 4.49256 7.95385 5.15633 7.86974 5.73159C7.83345 5.97981 7.8153 6.10392 7.7308 6.17696C7.64631 6.25 7.52168 6.25 7.27243 6.25H4.525Z',
  d5: 'M14.8499 1.75C14.6274 1.75 14.4164 1.8488 14.2739 2.01968C14.1314 2.19057 14.0722 2.41617 14.1122 2.63505C14.1551 2.88043 14.2833 3.61443 14.3522 4.03449C14.4902 4.87556 14.6625 5.99059 14.8016 7.09383C14.8489 7.46879 15.1678 7.75 15.5457 7.75H21.0936C21.3139 7.75 21.523 7.6532 21.6655 7.48529C21.808 7.31737 21.8695 7.09531 21.8336 6.87802C21.6189 5.57539 21.3595 4.42969 21.1538 3.60938C21.0519 3.20283 20.86 2.52148 20.7938 2.28649L20.7919 2.27975C20.6951 1.9649 20.4043 1.75 20.0749 1.75H14.8499ZM16.7275 6.25C16.4782 6.25 16.3536 6.25 16.2691 6.17696C16.1846 6.10392 16.1665 5.97981 16.1302 5.73159C16.0461 5.15633 15.9422 4.49256 15.855 3.94712C15.8031 3.62283 15.7772 3.46068 15.867 3.35534C15.9568 3.25 16.1208 3.25 16.4486 3.25H19.0412C19.2662 3.25 19.3788 3.25 19.4603 3.31392C19.5418 3.37783 19.5685 3.48653 19.6219 3.70394C19.7474 4.21482 19.9165 4.9195 20.0526 5.54099C20.1235 5.86444 20.1589 6.02616 20.0688 6.13808C19.9787 6.25 19.8108 6.25 19.4749 6.25H16.7275Z',
  d6: 'M2.16631 6.87802C2.22602 6.51577 2.53919 6.25 2.90632 6.25H8.4542C8.66947 6.25 8.87435 6.3425 9.01673 6.50395C9.1591 6.66541 9.22524 6.88025 9.19831 7.09383C9.05416 8.23699 8.95 9.33522 8.95 10.1C8.95 11.4459 9.37731 12.6399 9.99304 13.4825C10.62 14.3405 11.3703 14.75 12 14.75C12.6297 14.75 13.38 14.3405 14.007 13.4825C14.6227 12.6399 15.05 11.4459 15.05 10.1C15.05 9.33522 14.9458 8.23699 14.8017 7.09383C14.7748 6.88025 14.8409 6.66541 14.9833 6.50395C15.1256 6.3425 15.3305 6.25 15.5458 6.25H21.0937C21.4608 6.25 21.774 6.51577 21.8337 6.87802C22.0671 8.29408 22.25 9.90885 22.25 11.5C22.25 17.3519 18.1739 22.25 12 22.25C5.82611 22.25 1.75 17.3519 1.75 11.5C1.75 9.90885 1.93288 8.29408 2.16631 6.87802Z',
  d7: 'M9.19831 7.09375C9.05416 8.23692 8.95 9.33515 8.95 10.0999C8.95 11.4458 9.37731 12.6398 9.99304 13.4824C10.62 14.3404 11.3703 14.7499 12 14.7499C12.6297 14.7499 13.38 14.3404 14.007 13.4824C14.6227 12.6398 15.05 11.4458 15.05 10.0999C15.05 9.33515 14.9458 8.23692 14.8017 7.09375H21.8686C22.0851 8.45687 22.25 9.98905 22.25 11.4999C22.25 17.3518 18.1739 22.2499 12 22.2499C5.82611 22.2499 1.75 17.3518 1.75 11.4999C1.75 9.98905 1.91489 8.45687 2.13138 7.09375H9.19831Z',
  d8: 'M3.20801 2.27975C3.30473 1.9649 3.59556 1.75 3.92494 1.75H9.14994C9.37244 1.75 9.58346 1.8488 9.72595 2.01968C9.86845 2.19057 9.92771 2.4159 9.88773 2.63478C9.84486 2.88016 9.71658 3.61443 9.64768 4.03449C9.50972 4.87554 9.33736 5.99054 9.19826 7.09375H2.16213C2.15319 7.02275 2.15436 6.95012 2.16624 6.87802C2.38097 5.57539 2.64036 4.42969 2.84607 3.60938C2.948 3.20293 3.13984 2.52179 3.20607 2.28664L3.20801 2.27975Z',
  d9: 'M21.8377 7.09375C21.8467 7.02275 21.8455 6.95012 21.8336 6.87802C21.6189 5.57539 21.3595 4.42969 21.1538 3.60938C21.0519 3.20283 20.86 2.52148 20.7938 2.28649L20.7919 2.27975C20.6951 1.9649 20.4043 1.75 20.0749 1.75H14.8499C14.6274 1.75 14.4164 1.8488 14.2739 2.01968C14.1314 2.19057 14.0722 2.41617 14.1122 2.63505C14.1551 2.88043 14.2833 3.61443 14.3522 4.03449C14.4902 4.87556 14.6625 5.99059 14.8016 7.09383L21.8377 7.09375Z',
  d10: 'M9.98336 2.1179C10.0167 1.93288 10.042 1.79213 10.0494 1.75H3.37082L2.97747 3.10038C2.84108 3.61393 2.65969 4.34325 2.47836 5.21099C2.11701 6.94018 1.75 9.24652 1.75 11.5C1.75 17.3519 5.82611 22.25 12 22.25C18.1739 22.25 22.25 17.3519 22.25 11.5C22.25 9.24652 21.883 6.94018 21.5216 5.21099C21.3403 4.34324 21.1589 3.61393 21.0225 3.10038C20.9729 2.9136 20.8088 2.35851 20.7074 2.01566C20.6694 1.88697 20.6402 1.78819 20.6292 1.75H13.9506C13.958 1.79213 13.9833 1.93288 14.0166 2.11789C14.0982 2.57125 14.2276 3.29038 14.259 3.47544C14.3475 3.99683 14.4653 4.71654 14.5831 5.51012C14.8213 7.11494 15.05 8.96302 15.05 10.1C15.05 11.4459 14.6227 12.6399 14.007 13.4825C13.38 14.3405 12.6297 14.75 12 14.75C11.3703 14.75 10.62 14.3405 9.99304 13.4825C9.37731 12.6399 8.95 11.4459 8.95 10.1C8.95 8.96302 9.17866 7.11494 9.41687 5.51012C9.53467 4.71654 9.65255 3.99683 9.741 3.47544C9.77239 3.29038 9.90179 2.57126 9.98336 2.1179ZM4.42675 3.48542C4.4493 3.40052 4.47053 3.32192 4.49021 3.25H8.25735C8.16818 3.77648 8.05046 4.49632 7.93267 5.28988C7.87517 5.67721 7.81711 6.08557 7.76216 6.5H3.75391C3.81637 6.15755 3.88118 5.82889 3.94618 5.51782C4.1211 4.68077 4.29596 3.97788 4.42675 3.48542ZM20.2452 6.5H16.2369C16.182 6.08557 16.1239 5.67721 16.0664 5.28988C15.9486 4.49632 15.8309 3.77648 15.7417 3.25H19.5089C19.5285 3.32192 19.5498 3.40052 19.5723 3.48542C19.7031 3.97788 19.878 4.68077 20.0529 5.51782C20.1179 5.82889 20.1827 6.15755 20.2452 6.5Z',
};

export const IconMagnetStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="magnet-stroke-rounded IconMagnetStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMagnetDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="magnet-duotone-rounded IconMagnetDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconMagnetTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="magnet-twotone-rounded IconMagnetTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconMagnetSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="magnet-solid-rounded IconMagnetSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMagnetBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="magnet-bulk-rounded IconMagnetBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMagnetStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="magnet-stroke-sharp IconMagnetStrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMagnetSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="magnet-solid-sharp IconMagnetSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMagnet: TheIconSelfPack = {
  name: 'Magnet',
  StrokeRounded: IconMagnetStrokeRounded,
  DuotoneRounded: IconMagnetDuotoneRounded,
  TwotoneRounded: IconMagnetTwotoneRounded,
  SolidRounded: IconMagnetSolidRounded,
  BulkRounded: IconMagnetBulkRounded,
  StrokeSharp: IconMagnetStrokeSharp,
  SolidSharp: IconMagnetSolidSharp,
};