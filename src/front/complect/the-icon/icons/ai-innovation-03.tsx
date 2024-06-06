import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14',
  d2: 'M7.38287 17.0982C7.291 16.8216 7.24507 16.6833 7.25042 16.5713C7.26174 16.3343 7.41114 16.1262 7.63157 16.0405C7.73579 16 7.88105 16 8.17157 16H15.8284C16.119 16 16.2642 16 16.3684 16.0405C16.5889 16.1262 16.7383 16.3343 16.7496 16.5713C16.7549 16.6833 16.709 16.8216 16.6171 17.0982C16.4473 17.6094 16.3624 17.8651 16.2315 18.072C15.9572 18.5056 15.5272 18.8167 15.0306 18.9408C14.7935 19 14.525 19 13.9881 19H10.0119C9.47495 19 9.2065 19 8.96944 18.9408C8.47283 18.8167 8.04281 18.5056 7.7685 18.072C7.63755 17.8651 7.55266 17.6094 7.38287 17.0982Z',
  d3: 'M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19',
  d4: 'M8.25 9.75L10.5 12L10.5 16M8.25 10.5C8.66421 10.5 9 10.1642 9 9.75C9 9.33579 8.66421 9 8.25 9C7.83579 9 7.5 9.33579 7.5 9.75C7.5 10.1642 7.83579 10.5 8.25 10.5Z',
  d5: 'M15.75 9.75L13.5 12L13.5 16M15.75 10.5C15.3358 10.5 15 10.1642 15 9.75C15 9.33579 15.3358 9 15.75 9C16.1642 9 16.5 9.33579 16.5 9.75C16.5 10.1642 16.1642 10.5 15.75 10.5Z',
  d6: 'M12 2C7.58172 2 4 5.54539 4 9.91886C4 11.4118 4.41735 12.8082 5.14286 14L7 16H17L18.8571 14C19.5827 12.8082 20 11.4118 20 9.91886C20 5.54539 16.4183 2 12 2Z',
  d7: 'M10.6134 21.8994C10.9184 22 11.2789 22 12 22C12.7211 22 13.0816 22 13.3866 21.8994C13.8582 21.7439 14.2552 21.4185 14.5001 20.9866C14.6586 20.7072 14.7293 20.3537 14.8707 19.6466C14.8795 19.6025 14.8839 19.5805 14.8862 19.5627C14.9221 19.2782 14.7119 19.0218 14.4259 19.0013C14.408 19 14.3856 19 14.3406 19H9.65941C9.61444 19 9.59195 19 9.57405 19.0013C9.28807 19.0218 9.07792 19.2782 9.11384 19.5626C9.11609 19.5805 9.1205 19.6025 9.12932 19.6466C9.27073 20.3537 9.34144 20.7072 9.49987 20.9866C9.74484 21.4185 10.1418 21.7439 10.6134 21.8994Z',
  d8: 'M12 3.17855C8.23203 3.17855 5.19444 6.17481 5.19444 9.85024C5.19444 11.1075 5.54828 12.2813 6.16379 13.2842C6.44299 13.7391 6.29751 14.3323 5.83886 14.6093C5.38021 14.8862 4.78207 14.7419 4.50288 14.287C3.70768 12.9913 3.25 11.4721 3.25 9.85024C3.25 5.09122 7.17688 1.25 12 1.25C16.8231 1.25 20.75 5.09122 20.75 9.85024C20.75 11.4721 20.2923 12.9913 19.4971 14.287C19.2179 14.7419 18.6198 14.8862 18.1611 14.6093C17.7025 14.3323 17.557 13.7391 17.8362 13.2842C18.4517 12.2813 18.8056 11.1075 18.8056 9.85024C18.8056 6.17481 15.768 3.17855 12 3.17855Z',
  d9: 'M15.8432 15.998C15.9736 15.998 16.1022 15.998 16.2105 16.003C16.325 16.0083 16.4787 16.0209 16.6389 16.0692C17.1374 16.2198 17.4733 16.5843 17.4987 16.9979C17.5069 17.1307 17.4739 17.2477 17.4441 17.3337C17.1127 19.0156 16.4285 19.498 15.8431 19.498H8.1569C7.57151 19.498 6.8873 19.0156 6.55585 17.3337C6.52614 17.2477 6.49309 17.1307 6.50126 16.9979C6.5267 16.5843 6.8626 16.2198 7.3611 16.0692C7.52127 16.0209 7.67503 16.0083 7.78946 16.003C7.89781 15.998 8.02637 15.998 8.15678 15.998H8.15684H15.8432H15.8432Z',
  d10: 'M10.3321 22.6493C10.6774 22.7499 11.0856 22.7499 11.9019 22.7499C12.7182 22.7499 13.1264 22.7499 13.4717 22.6493C14.0057 22.4938 14.4551 22.1684 14.7324 21.7365C14.8356 21.5757 14.906 21.3903 14.9776 21.1271C15.0674 20.7972 15.1123 20.6322 15.0223 20.5143C14.9322 20.3965 14.7551 20.3965 14.4009 20.3965H9.40295C9.04873 20.3965 8.87162 20.3965 8.78156 20.5143C8.69151 20.6322 8.73641 20.7972 8.82623 21.1271C8.89786 21.3903 8.96819 21.5757 9.07142 21.7365C9.34876 22.1684 9.79812 22.4938 10.3321 22.6493Z',
  d11: 'M8.25 11.25C7.42157 11.25 6.75 10.5784 6.75 9.75C6.75 8.92157 7.42157 8.25 8.25 8.25C9.07843 8.25 9.75 8.92157 9.75 9.75C9.75 9.88437 9.73233 10.0146 9.69919 10.1385L11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12L11.25 17C11.25 17.4142 10.9142 17.75 10.5 17.75C10.0858 17.75 9.75 17.4142 9.75 17L9.75 12.3107L8.63853 11.1992C8.51461 11.2323 8.38437 11.25 8.25 11.25Z',
  d12: 'M13.5 17.75C13.0858 17.75 12.75 17.4142 12.75 17L12.75 12C12.75 11.8011 12.829 11.6103 12.9697 11.4697L14.3008 10.1385C14.2677 10.0146 14.25 9.88437 14.25 9.75C14.25 8.92157 14.9216 8.25 15.75 8.25C16.5784 8.25 17.25 8.92157 17.25 9.75C17.25 10.5784 16.5784 11.25 15.75 11.25C15.6156 11.25 15.4854 11.2323 15.3615 11.1992L14.25 12.3107L14.25 17C14.25 17.4142 13.9142 17.75 13.5 17.75Z',
  d13: 'M8.25 11.25C7.42157 11.25 6.75 10.5784 6.75 9.75C6.75 8.92157 7.42157 8.25 8.25 8.25C9.07843 8.25 9.75 8.92157 9.75 9.75C9.75 9.88437 9.73233 10.0146 9.69919 10.1385L11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V15.998H9.75L9.75 12.3107L8.63853 11.1992C8.51461 11.2323 8.38437 11.25 8.25 11.25Z',
  d14: 'M14.249 15.998V12.3107L15.3605 11.1992C15.4844 11.2323 15.6147 11.25 15.749 11.25C16.5775 11.25 17.249 10.5784 17.249 9.75C17.249 8.92157 16.5775 8.25 15.749 8.25C14.9206 8.25 14.249 8.92157 14.249 9.75C14.249 9.88437 14.2667 10.0146 14.2998 10.1385L12.9687 11.4697C12.828 11.6103 12.749 11.8011 12.749 12V15.998H14.249Z',
  d15: 'M17 16H7L8 19L16 19L17 16Z',
  d16: 'M15 19L14 22H10L9 19',
  d17: 'M12 3.19379C8.23203 3.19379 5.19444 6.21373 5.19444 9.9182C5.19444 11.1854 5.54828 12.3685 6.16379 13.3793L4.50288 14.39C3.70768 13.0841 3.25 11.5529 3.25 9.9182C3.25 5.12157 7.17688 1.25 12 1.25C16.8231 1.25 20.75 5.12157 20.75 9.9182C20.75 11.5529 20.2923 13.0841 19.4971 14.39L17.8362 13.3793C18.4517 12.3685 18.8056 11.1854 18.8056 9.9182C18.8056 6.21373 15.768 3.19379 12 3.19379Z',
  d18: 'M7.00001 15.25H17C17.2411 15.25 17.4675 15.3401 17.6084 15.4923C17.7494 15.6444 17.7878 15.8399 17.7115 16.0178L16.7115 18.3511C16.6094 18.5893 16.3228 18.75 16 18.75L8.00001 18.75C7.67718 18.75 7.39058 18.5893 7.28849 18.3511L6.28849 16.0178C6.21226 15.8399 6.25061 15.6444 6.39157 15.4923C6.53254 15.3401 6.75892 15.25 7.00001 15.25Z',
  d19: 'M8.54277 20L9.2885 22.2372C9.39058 22.5434 9.67719 22.75 10 22.75H14C14.3228 22.75 14.6094 22.5434 14.7115 22.2372L15.4572 20H8.54277Z',
  d20: 'M8.25 11.25C7.42157 11.25 6.75 10.5784 6.75 9.75C6.75 8.92157 7.42157 8.25 8.25 8.25C9.07843 8.25 9.75 8.92157 9.75 9.75C9.75 9.88437 9.73233 10.0146 9.69919 10.1385L11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12L11.25 16L9.75 16L9.75 12.3107L8.63853 11.1992C8.51461 11.2323 8.38437 11.25 8.25 11.25Z',
  d21: 'M12.75 16L12.75 12C12.75 11.8011 12.829 11.6103 12.9697 11.4697L14.3008 10.1385C14.2677 10.0146 14.25 9.88437 14.25 9.75C14.25 8.92157 14.9216 8.25 15.75 8.25C16.5784 8.25 17.25 8.92157 17.25 9.75C17.25 10.5784 16.5784 11.25 15.75 11.25C15.6156 11.25 15.4854 11.2323 15.3615 11.1992L14.25 12.3107L14.25 16L12.75 16Z',
};

export const IconAiInnovation03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-innovation-03-stroke-rounded IconAiInnovation03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAiInnovation03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-innovation-03-duotone-rounded IconAiInnovation03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconAiInnovation03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-innovation-03-twotone-rounded IconAiInnovation03TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiInnovation03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-innovation-03-solid-rounded IconAiInnovation03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiInnovation03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-innovation-03-bulk-rounded IconAiInnovation03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiInnovation03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-innovation-03-stroke-sharp IconAiInnovation03StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
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

export const IconAiInnovation03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-innovation-03-solid-sharp IconAiInnovation03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAiInnovation03: TheIconSelfPack = {
  name: 'AiInnovation03',
  StrokeRounded: IconAiInnovation03StrokeRounded,
  DuotoneRounded: IconAiInnovation03DuotoneRounded,
  TwotoneRounded: IconAiInnovation03TwotoneRounded,
  SolidRounded: IconAiInnovation03SolidRounded,
  BulkRounded: IconAiInnovation03BulkRounded,
  StrokeSharp: IconAiInnovation03StrokeSharp,
  SolidSharp: IconAiInnovation03SolidSharp,
};