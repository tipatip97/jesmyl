import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 11C2.50421 5.94668 6.78892 2 12 2C17.2111 2 21.4958 5.94668 22 11M19 19.1752C17.1904 20.9235 14.7215 22 12 22C9.27848 22 6.80962 20.9235 5 19.1752',
  d2: 'M12 18C13.8962 18 15.4889 16.7202 15.9362 14.9899C16.1443 14.1848 15.8422 14 15.0461 14H8.95386C8.15776 14 7.8557 14.1848 8.0638 14.9899C8.51109 16.7202 10.1038 18 12 18Z',
  d3: 'M7 9.5C7 8.67157 7.67157 8 8.5 8C9.32843 8 10 8.67157 10 9.5M14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5',
  d4: 'M6 12C4.44452 12.3985 1.54103 13.2338 2.06165 15.782C2.33013 17.0421 3.73652 17.275 4.5 16.708C6.33821 15.343 4.5 14 6 12Z',
  d5: 'M18 12C19.5555 12.3985 22.459 13.2338 21.9383 15.782C21.6699 17.0421 20.2635 17.275 19.5 16.708C17.6618 15.343 19.5 14 18 12Z',
  d6: 'M21.7628 14.175C21.9181 13.4748 22 12.7469 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 12.7469 2.08189 13.4748 2.23719 14.175C2.90574 12.8442 4.83255 12.2991 6 12C5.28204 12.9573 5.32885 13.764 5.37125 14.4947C5.41743 15.2907 5.45837 15.9963 4.5 16.708C4.17874 16.9466 3.74364 17.0435 3.32739 16.9819C5.05385 19.9809 8.29113 22 12 22C15.7089 22 18.9462 19.9809 20.6726 16.9819C20.2564 17.0435 19.8213 16.9466 19.5 16.708C18.5416 15.9963 18.5826 15.2907 18.6288 14.4947C18.6712 13.764 18.718 12.9573 18 12C19.1675 12.2991 21.0943 12.8442 21.7628 14.175ZM15.9362 14.9899C15.4889 16.7202 13.8962 18 12 18C10.1038 18 8.51109 16.7202 8.0638 14.9899C7.8557 14.1848 8.15776 14 8.95386 14H15.0461C15.8422 14 16.1443 14.1848 15.9362 14.9899Z',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 12.3629 1.25 12.5443 1.30166 12.6205C1.36828 12.7188 1.45854 12.7616 1.57681 12.751C1.66853 12.7428 1.8364 12.6056 2.17215 12.3313L2.17215 12.3313C2.29721 12.2291 2.42496 12.1351 2.55298 12.0487C3.61001 11.3353 4.92503 10.985 5.68971 10.7891C6.20357 10.6574 6.74457 10.8644 7.03928 11.3055C7.33398 11.7466 7.31821 12.3256 6.99994 12.75C6.55805 13.3391 6.58105 13.7466 6.62128 14.4595L6.62482 14.5223C6.64546 14.8916 6.67708 15.461 6.49148 16.0521C6.28982 16.6945 5.87862 17.2411 5.24517 17.7115C5.03526 17.8674 4.80571 17.9888 4.5654 18.0765C3.9566 18.2986 3.65221 18.4097 3.61429 18.5656C3.57637 18.7215 3.74659 18.9066 4.08703 19.2766C6.05168 21.412 8.86958 22.75 12 22.75C15.1304 22.75 17.9483 21.412 19.9129 19.2766C20.2534 18.9066 20.4236 18.7216 20.3857 18.5656C20.3478 18.4097 20.0434 18.2986 19.4345 18.0765C19.1942 17.9888 18.9646 17.8674 18.7547 17.7115C18.1213 17.2411 17.7101 16.6945 17.5084 16.0521C17.3228 15.461 17.3544 14.8916 17.3751 14.5223L17.3786 14.4595C17.4188 13.7466 17.4418 13.3391 16.9999 12.75C16.6817 12.3256 16.6659 11.7466 16.9606 11.3055C17.2553 10.8644 17.7963 10.6574 18.3102 10.7891C19.0748 10.985 20.3899 11.3353 21.4469 12.0487C21.5749 12.1351 21.7027 12.2291 21.8277 12.3313C22.1636 12.6057 22.3315 12.7429 22.4232 12.7511C22.5415 12.7617 22.6317 12.7189 22.6983 12.6207C22.75 12.5444 22.75 12.363 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12 18C13.8962 18 15.4889 16.7202 15.9362 14.9899C16.1443 14.1848 15.8422 14 15.0461 14H8.95386C8.15776 14 7.8557 14.1848 8.0638 14.9899C8.51109 16.7202 10.1038 18 12 18ZM7.75 9.5C7.75 9.08579 8.08579 8.75 8.5 8.75C8.91421 8.75 9.25 9.08579 9.25 9.5C9.25 9.91421 9.58579 10.25 10 10.25C10.4142 10.25 10.75 9.91421 10.75 9.5C10.75 8.25736 9.74264 7.25 8.5 7.25C7.25736 7.25 6.25 8.25736 6.25 9.5C6.25 9.91421 6.58579 10.25 7 10.25C7.41421 10.25 7.75 9.91421 7.75 9.5ZM14.75 9.5C14.75 9.08579 15.0858 8.75 15.5 8.75C15.9142 8.75 16.25 9.08579 16.25 9.5C16.25 9.91421 16.5858 10.25 17 10.25C17.4142 10.25 17.75 9.91421 17.75 9.5C17.75 8.25736 16.7426 7.25 15.5 7.25C14.2574 7.25 13.25 8.25736 13.25 9.5C13.25 9.91421 13.5858 10.25 14 10.25C14.4142 10.25 14.75 9.91421 14.75 9.5Z',
  d8: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 12.3629 1.25 12.5443 1.30166 12.6205C1.36828 12.7188 1.45854 12.7616 1.57681 12.751C1.66853 12.7428 1.8364 12.6056 2.17215 12.3313C2.29721 12.2291 2.42496 12.1351 2.55298 12.0487C3.61001 11.3353 4.92503 10.985 5.68971 10.7891C6.20357 10.6574 6.74457 10.8644 7.03928 11.3055C7.33398 11.7466 7.31821 12.3256 6.99994 12.75C6.55805 13.3391 6.58105 13.7466 6.62128 14.4595L6.62482 14.5223C6.64546 14.8916 6.67708 15.461 6.49148 16.0521C6.28982 16.6945 5.87862 17.2411 5.24517 17.7115C5.03526 17.8674 4.80571 17.9888 4.5654 18.0765C3.9566 18.2986 3.65221 18.4097 3.61429 18.5656C3.57637 18.7215 3.74659 18.9066 4.08703 19.2766C6.05168 21.412 8.86958 22.75 12 22.75C15.1304 22.75 17.9483 21.412 19.9129 19.2766C20.2534 18.9066 20.4236 18.7216 20.3857 18.5656C20.3478 18.4097 20.0434 18.2986 19.4345 18.0765C19.1942 17.9888 18.9646 17.8674 18.7547 17.7115C18.1213 17.2411 17.7101 16.6945 17.5084 16.0521C17.3228 15.461 17.3544 14.8916 17.3751 14.5223L17.3786 14.4595C17.4188 13.7466 17.4418 13.3391 16.9999 12.75C16.6817 12.3256 16.6659 11.7466 16.9606 11.3055C17.2553 10.8644 17.7963 10.6574 18.3102 10.7891C19.0748 10.985 20.3899 11.3353 21.4469 12.0487C21.5749 12.1351 21.7027 12.2291 21.8277 12.3313C22.1636 12.6057 22.3315 12.7429 22.4232 12.7511C22.5415 12.7617 22.6317 12.7189 22.6983 12.6207C22.75 12.5444 22.75 12.363 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z',
  d9: 'M8.5 8.75C8.08579 8.75 7.75 9.08579 7.75 9.5C7.75 9.91421 7.41421 10.25 7 10.25C6.58579 10.25 6.25 9.91421 6.25 9.5C6.25 8.25736 7.25736 7.25 8.5 7.25C9.74264 7.25 10.75 8.25736 10.75 9.5C10.75 9.91421 10.4142 10.25 10 10.25C9.58579 10.25 9.25 9.91421 9.25 9.5C9.25 9.08579 8.91421 8.75 8.5 8.75ZM15.5 8.75C15.0858 8.75 14.75 9.08579 14.75 9.5C14.75 9.91421 14.4142 10.25 14 10.25C13.5858 10.25 13.25 9.91421 13.25 9.5C13.25 8.25736 14.2574 7.25 15.5 7.25C16.7426 7.25 17.75 8.25736 17.75 9.5C17.75 9.91421 17.4142 10.25 17 10.25C16.5858 10.25 16.25 9.91421 16.25 9.5C16.25 9.08579 15.9142 8.75 15.5 8.75Z',
  d10: 'M12 18C14.2091 18 16 16.2091 16 14H8C8 16.2091 9.79086 18 12 18Z',
  d11: 'M1.24976 12C1.24976 6.06294 6.0627 1.25 11.9998 1.25C17.9368 1.25 22.7498 6.06294 22.7498 12C22.7498 12.1575 22.7464 12.3142 22.7397 12.47C22.5641 12.3127 22.3807 12.1729 22.1968 12.0488C21.1397 11.3355 19.8247 10.9851 19.06 10.7892C18.5462 10.6575 18.0052 10.8646 17.7105 11.3056C17.4158 11.7467 17.4315 12.3257 17.7498 12.7501C18.1917 13.3393 18.1687 13.7467 18.1285 14.4596L18.1249 14.5224C18.1043 14.8917 18.0727 15.4611 18.2583 16.0523C18.4599 16.6946 18.8711 17.2413 19.5046 17.7117C19.8797 17.9902 20.3176 18.1586 20.7675 18.2215C18.8193 20.9621 15.6183 22.75 11.9998 22.75C8.38119 22.75 5.1802 20.9621 3.23199 18.2215C3.68193 18.1586 4.11979 17.9902 4.49492 17.7117C5.12838 17.2413 5.53957 16.6946 5.74123 16.0523C5.92684 15.4611 5.89522 14.8917 5.87458 14.5224L5.87104 14.4596C5.83081 13.7467 5.80781 13.3393 6.24969 12.7501C6.56797 12.3257 6.58374 11.7467 6.28903 11.3056C5.99432 10.8646 5.45333 10.6575 4.93947 10.7892C4.17479 10.9851 2.85977 11.3355 1.80274 12.0488C1.61881 12.1729 1.43545 12.3127 1.25985 12.47C1.25314 12.3142 1.24976 12.1575 1.24976 12ZM11.9998 18C14.2089 18 15.9998 16.2091 15.9998 14L7.99976 14C7.99976 16.2091 9.79062 18 11.9998 18ZM7.74976 9.5C7.74976 9.08579 8.08554 8.75 8.49976 8.75C8.91397 8.75 9.24976 9.08579 9.24976 9.5H10.7498C10.7498 8.25736 9.7424 7.25 8.49976 7.25C7.25712 7.25 6.24976 8.25736 6.24976 9.5H7.74976ZM14.7498 9.5C14.7498 9.08579 15.0855 8.75 15.4998 8.75C15.914 8.75 16.2498 9.08579 16.2498 9.5H17.7498C17.7498 8.25736 16.7424 7.25 15.4998 7.25C14.2571 7.25 13.2498 8.25736 13.2498 9.5H14.7498Z',
  d12: 'M5.24976 12C3.69427 12.3985 0.790785 13.2338 1.31141 15.782C1.57989 17.0421 2.98627 17.275 3.74976 16.708C5.58797 15.343 3.74976 14 5.24976 12Z',
  d13: 'M18.7498 12C20.3052 12.3985 23.2087 13.2338 22.6881 15.782C22.4196 17.0421 21.0132 17.275 20.2498 16.708C18.4115 15.343 20.2498 14 18.7498 12Z',
};

export const IconLaughingStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laughing-stroke-rounded IconLaughingStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaughingDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laughing-duotone-rounded IconLaughingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaughingTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laughing-twotone-rounded IconLaughingTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaughingSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laughing-solid-rounded IconLaughingSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconLaughingBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laughing-bulk-rounded IconLaughingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconLaughingStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laughing-stroke-sharp IconLaughingStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaughingSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laughing-solid-sharp IconLaughingSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLaughing: TheIconSelfPack = {
  name: 'Laughing',
  StrokeRounded: IconLaughingStrokeRounded,
  DuotoneRounded: IconLaughingDuotoneRounded,
  TwotoneRounded: IconLaughingTwotoneRounded,
  SolidRounded: IconLaughingSolidRounded,
  BulkRounded: IconLaughingBulkRounded,
  StrokeSharp: IconLaughingStrokeSharp,
  SolidSharp: IconLaughingSolidSharp,
};