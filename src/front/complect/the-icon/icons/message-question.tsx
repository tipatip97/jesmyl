import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.1706 20.8905C18.3536 20.6125 21.6856 17.2332 21.9598 12.9909C22.0134 12.1607 22.0134 11.3009 21.9598 10.4707C21.6856 6.22838 18.3536 2.84913 14.1706 2.57107C12.7435 2.47621 11.2536 2.47641 9.8294 2.57107C5.64639 2.84913 2.31441 6.22838 2.04024 10.4707C1.98659 11.3009 1.98659 12.1607 2.04024 12.9909C2.1401 14.536 2.82343 15.9666 3.62791 17.1746C4.09501 18.0203 3.78674 19.0758 3.30021 19.9978C2.94941 20.6626 2.77401 20.995 2.91484 21.2351C3.05568 21.4752 3.37026 21.4829 3.99943 21.4982C5.24367 21.5285 6.08268 21.1757 6.74868 20.6846C7.1264 20.4061 7.31527 20.2668 7.44544 20.2508C7.5756 20.2348 7.83177 20.3403 8.34401 20.5513C8.8044 20.7409 9.33896 20.8579 9.8294 20.8905C11.2536 20.9852 12.7435 20.9854 14.1706 20.8905Z',
  d2: 'M10.5 9.53846C10.5 8.68879 11.1716 8 12 8C12.8284 8 13.5 8.68879 13.5 9.53846C13.5 9.84473 13.4127 10.1301 13.2623 10.3698C12.8141 11.0844 12 11.7657 12 12.6154V13',
  d3: 'M12 15H12.009',
  d4: 'M9.77965 1.82273C11.2369 1.72586 12.7601 1.72566 14.2204 1.82273C18.787 2.12629 22.4103 5.81258 22.7082 10.4224C22.7639 11.2848 22.7639 12.1768 22.7082 13.0392C22.4103 17.649 18.787 21.3353 14.2204 21.6389C12.7601 21.7359 11.2369 21.7357 9.77965 21.6389C9.21472 21.6013 8.59978 21.4677 8.05839 21.2448C7.8203 21.1467 7.65868 21.0804 7.54041 21.037C7.45909 21.0929 7.35108 21.1723 7.1938 21.2883C6.40136 21.8726 5.40092 22.2825 3.98117 22.248L3.93544 22.2469C3.66155 22.2403 3.36961 22.2334 3.13152 22.1873C2.84475 22.1318 2.48996 21.9931 2.26791 21.6145C2.02623 21.2025 2.12313 20.7858 2.21688 20.5234C2.30536 20.2757 2.45874 19.9852 2.61542 19.6885L2.6369 19.6478C3.10323 18.7641 3.23314 18.0419 2.98381 17.5604C2.15148 16.304 1.40272 14.7556 1.2918 13.0392C1.23607 12.1768 1.23607 11.2848 1.2918 10.4224C1.58972 5.81258 5.213 2.12629 9.77965 1.82273ZM11.0078 9.25824C11.0078 8.95663 11.3306 8.5 12.0078 8.5C12.685 8.5 13.0078 8.95663 13.0078 9.25824C13.0078 9.38027 12.9686 9.50211 12.884 9.61775C12.7701 9.77341 12.6234 9.93972 12.4381 10.1422L12.3492 10.239C12.1941 10.4076 12.0166 10.6007 11.8549 10.796C11.4839 11.2443 11.0078 11.9172 11.0078 12.7747V13.2143C11.0078 13.7666 11.4555 14.2143 12.0078 14.2143C12.5601 14.2143 13.0078 13.7666 13.0078 13.2143V12.7747C13.0078 12.6612 13.0744 12.4593 13.3956 12.0712C13.5209 11.9198 13.6562 11.7726 13.8105 11.6046L13.8106 11.6046L13.9134 11.4925C14.0998 11.2889 14.3129 11.0517 14.4979 10.799C14.8143 10.3667 15.0078 9.83626 15.0078 9.25824C15.0078 7.61775 13.5397 6.5 12.0078 6.5C10.4759 6.5 9.00781 7.61775 9.00781 9.25824C9.00781 9.81053 9.45553 10.2582 10.0078 10.2582C10.5601 10.2582 11.0078 9.81053 11.0078 9.25824ZM12.0078 15.5C11.4555 15.5 11.0078 15.9477 11.0078 16.5C11.0078 17.0523 11.4555 17.5 12.0078 17.5H12.0198C12.5721 17.5 13.0198 17.0523 13.0198 16.5C13.0198 15.9477 12.5721 15.5 12.0198 15.5H12.0078Z',
  d5: 'M14.2204 1.82273C12.7601 1.72566 11.2369 1.72586 9.77965 1.82273C5.213 2.12629 1.58972 5.81258 1.2918 10.4224C1.23607 11.2848 1.23607 12.1768 1.2918 13.0392C1.40272 14.7556 2.15148 16.304 2.98381 17.5604C3.23314 18.0419 3.10323 18.7641 2.6369 19.6478L2.61542 19.6885C2.45874 19.9852 2.30536 20.2757 2.21688 20.5234C2.12313 20.7858 2.02623 21.2025 2.26791 21.6145C2.48996 21.9931 2.84475 22.1318 3.13152 22.1873C3.36961 22.2334 3.66155 22.2403 3.93544 22.2469L3.98117 22.248C5.40092 22.2825 6.40136 21.8726 7.1938 21.2883C7.35108 21.1723 7.45909 21.0929 7.54041 21.037C7.65868 21.0804 7.8203 21.1467 8.05839 21.2448C8.59978 21.4677 9.21472 21.6013 9.77965 21.6389C11.2369 21.7357 12.7601 21.7359 14.2204 21.6389C18.787 21.3353 22.4103 17.649 22.7082 13.0392C22.7639 12.1768 22.7639 11.2848 22.7082 10.4224C22.4103 5.81258 18.787 2.12629 14.2204 1.82273Z',
  d6: 'M12.0078 8.5C11.3306 8.5 11.0078 8.95663 11.0078 9.25824C11.0078 9.81053 10.5601 10.2582 10.0078 10.2582C9.45553 10.2582 9.00781 9.81053 9.00781 9.25824C9.00781 7.61775 10.4759 6.5 12.0078 6.5C13.5397 6.5 15.0078 7.61775 15.0078 9.25824C15.0078 9.83625 14.8143 10.3667 14.4979 10.799C14.3129 11.0517 14.0998 11.2889 13.9134 11.4925C13.8782 11.531 13.8439 11.5683 13.8106 11.6046C13.6562 11.7726 13.5209 11.9198 13.3956 12.0712C13.0744 12.4593 13.0078 12.6612 13.0078 12.7747V13.2143C13.0078 13.7666 12.5601 14.2143 12.0078 14.2143C11.4555 14.2143 11.0078 13.7666 11.0078 13.2143V12.7747C11.0078 11.9172 11.4839 11.2443 11.8549 10.796C12.0166 10.6007 12.1941 10.4076 12.3492 10.239C12.3798 10.2057 12.4095 10.1734 12.4381 10.1422C12.6234 9.93972 12.7701 9.77341 12.884 9.61775C12.9686 9.50211 13.0078 9.38027 13.0078 9.25824C13.0078 8.95663 12.685 8.5 12.0078 8.5ZM11.0078 16.5C11.0078 15.9477 11.4555 15.5 12.0078 15.5H12.0198C12.5721 15.5 13.0198 15.9477 13.0198 16.5C13.0198 17.0523 12.5721 17.5 12.0198 17.5H12.0078C11.4555 17.5 11.0078 17.0523 11.0078 16.5Z',
  d7: 'M10.4114 9.55221C10.4114 8.70088 11.0761 8.01074 11.896 8.01074C12.7158 8.01074 13.3805 8.70088 13.3805 9.55221C13.3805 9.85908 13.2941 10.145 13.1453 10.3852C12.7017 11.1012 11.896 11.7838 11.896 12.6352V13.0205',
  d8: 'M11.896 15.0244H11.905',
  d9: 'M9.87242 2.51381C2.12759 3.42115 -0.0938029 12.1578 3.61371 17.4968L2.15696 21.2985C2.12674 21.3774 2.20186 21.4559 2.28198 21.4291L6.42853 20.0462C8.36193 21.3331 14.9887 21.6279 17.2968 20.0508C20.2408 18.5465 23.0881 14.719 21.3078 8.19318C20.8907 6.66444 18.7251 2.65049 13.3675 2.50151M9.87242 2.51381C10.0342 2.50464 10.1978 2.5 10.3631 2.5M9.87242 2.51381L13.3675 2.50151M13.3675 2.50151L13.7977 2.5M13.3675 2.50151C13.3474 2.50095 13.3272 2.50045 13.3071 2.5',
  d10: 'M14.1405 1.7722C13.8204 1.74999 13.4486 1.74999 12.7895 1.75H12.7895H11.2105H11.2105C10.5514 1.74999 10.1796 1.74999 9.85949 1.7722C5.25571 2.09176 1.59176 5.75571 1.2722 10.3595C1.24999 10.6796 1.24999 11.0514 1.25 11.7105V11.7105V11.7895V11.7895C1.24999 12.4486 1.24999 12.8204 1.2722 13.1405C1.38603 14.7804 1.92471 16.3022 2.77921 17.5954L1.47482 22.25L6.43709 20.8113C7.48219 21.3226 8.63831 21.643 9.85949 21.7278C10.1796 21.75 10.5514 21.75 11.2105 21.75H12.7895C13.4486 21.75 13.8204 21.75 14.1405 21.7278C18.7443 21.4082 22.4082 17.7443 22.7278 13.1405C22.75 12.8204 22.75 12.4486 22.75 11.7895V11.7105C22.75 11.0514 22.75 10.6796 22.7278 10.3595C22.4082 5.75571 18.7443 2.09176 14.1405 1.7722ZM11.5 9.53846C11.5 9.21706 11.7476 9 12 9C12.2524 9 12.5 9.21706 12.5 9.53846C12.5 9.65261 12.468 9.75438 12.4152 9.83839C12.3337 9.96841 12.2277 10.1089 12.0892 10.2854L12.0234 10.3691C11.9071 10.5165 11.7711 10.6891 11.6475 10.8633C11.3575 11.2721 11 11.8691 11 12.6154V13H13V12.6154C13 12.512 13.0496 12.3435 13.2787 12.0205C13.3704 11.8913 13.469 11.766 13.5846 11.6192L13.6628 11.5199C13.803 11.3412 13.9669 11.1285 14.1094 10.9013C14.3575 10.5058 14.5 10.0369 14.5 9.53846C14.5 8.16053 13.4044 7 12 7C10.5956 7 9.5 8.16053 9.5 9.53846H11.5ZM13.009 14H11V16H13.009V14Z',
};

export const IconMessageQuestionStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-question-stroke-rounded IconMessageQuestionStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageQuestionDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-question-duotone-rounded IconMessageQuestionDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageQuestionTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-question-twotone-rounded IconMessageQuestionTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageQuestionSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-question-solid-rounded IconMessageQuestionSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageQuestionBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-question-bulk-rounded IconMessageQuestionBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageQuestionStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-question-stroke-sharp IconMessageQuestionStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageQuestionSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-question-solid-sharp IconMessageQuestionSolidSharp"
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

export const iconPackOfMessageQuestion: TheIconSelfPack = {
  name: 'MessageQuestion',
  StrokeRounded: IconMessageQuestionStrokeRounded,
  DuotoneRounded: IconMessageQuestionDuotoneRounded,
  TwotoneRounded: IconMessageQuestionTwotoneRounded,
  SolidRounded: IconMessageQuestionSolidRounded,
  BulkRounded: IconMessageQuestionBulkRounded,
  StrokeSharp: IconMessageQuestionStrokeSharp,
  SolidSharp: IconMessageQuestionSolidSharp,
};