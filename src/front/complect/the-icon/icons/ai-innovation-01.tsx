import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 2C6.58172 2 3 5.54539 3 9.91886C3 11.4118 3.41735 12.8082 4.14286 14',
  d2: 'M17 5H15C14.0572 5 13.5858 5 13.2929 5.29289C13 5.58579 13 6.05719 13 7V9C13 9.94281 13 10.4142 13.2929 10.7071C13.5858 11 14.0572 11 15 11H17C17.9428 11 18.4142 11 18.7071 10.7071C19 10.4142 19 9.94281 19 9V7C19 6.05719 19 5.58579 18.7071 5.29289C18.4142 5 17.9428 5 17 5Z',
  d3: 'M14.5 11V13M17.5 11V13M14.5 3V5M17.5 3V5M13 6.5H11M13 9.5H11M21 6.5H19M21 9.5H19',
  d4: 'M6.38287 17.0982C6.291 16.8216 6.24507 16.6833 6.25042 16.5713C6.26174 16.3343 6.41114 16.1262 6.63157 16.0405C6.73579 16 6.88105 16 7.17157 16H14.8284C15.119 16 15.2642 16 15.3684 16.0405C15.5889 16.1262 15.7383 16.3343 15.7496 16.5713C15.7549 16.6833 15.709 16.8216 15.6171 17.0982C15.4473 17.6094 15.3624 17.8651 15.2315 18.072C14.9572 18.5056 14.5272 18.8167 14.0306 18.9408C13.7935 19 13.525 19 12.9881 19H9.01186C8.47495 19 8.2065 19 7.96944 18.9408C7.47283 18.8167 7.04281 18.5056 6.7685 18.072C6.63755 17.8651 6.55266 17.6094 6.38287 17.0982Z',
  d5: 'M14 19L13.8707 19.6466C13.7293 20.3537 13.6586 20.7072 13.5001 20.9866C13.2552 21.4185 12.8582 21.7439 12.3866 21.8994C12.0816 22 11.7211 22 11 22C10.2789 22 9.91842 22 9.61338 21.8994C9.14175 21.7439 8.74484 21.4185 8.49987 20.9866C8.34144 20.7072 8.27073 20.3537 8.12932 19.6466L8 19',
  d6: 'M9.61338 21.8994C9.91842 22 10.2789 22 11 22C11.7211 22 12.0816 22 12.3866 21.8994C12.8582 21.7439 13.2552 21.4185 13.5001 20.9866C13.6586 20.7072 13.7293 20.3537 13.8707 19.6466C13.8795 19.6025 13.8839 19.5805 13.8862 19.5627C13.9221 19.2782 13.7119 19.0218 13.4259 19.0013C13.408 19 13.3856 19 13.3406 19H8.65941C8.61444 19 8.59195 19 8.57405 19.0013C8.28807 19.0218 8.07792 19.2782 8.11384 19.5626C8.11609 19.5805 8.1205 19.6025 8.12932 19.6466C8.27073 20.3537 8.34144 20.7072 8.49987 20.9866C8.74484 21.4185 9.14175 21.7439 9.61338 21.8994Z',
  d7: 'M3 9.91886C3 5.54539 6.58172 2 11 2C13.5406 2 15.8047 3.17232 17.2701 5.0003C17.1846 5 17.0947 5 17 5H15C14.0572 5 13.5858 5 13.2929 5.29289C13 5.58579 13 6.05719 13 7V9C13 9.94281 13 10.4142 13.2929 10.7071C13.5858 11 14.0572 11 15 11H17C17.9428 11 18.4142 11 18.7071 10.7071C18.9248 10.4894 18.9807 10.173 18.9951 9.63766C18.9983 9.73099 19 9.82473 19 9.91886C19 11.4118 18.5827 12.8082 17.8571 14L16 16H6L4.14286 14C3.41735 12.8082 3 11.4118 3 9.91886Z',
  d8: 'M10.9876 2C6.57723 2 3.00195 5.54539 3.00195 9.91886C3.00195 11.4118 3.41855 12.8082 4.14276 14',
  d9: 'M6.37872 17.0982C6.28702 16.8216 6.24117 16.6833 6.24651 16.5713C6.25781 16.3343 6.40694 16.1262 6.62698 16.0405C6.73101 16 6.87601 16 7.166 16H14.8091C15.0991 16 15.2441 16 15.3481 16.0405C15.5682 16.1262 15.7173 16.3343 15.7286 16.5713C15.7339 16.6833 15.6881 16.8216 15.5963 17.0982C15.4268 17.6094 15.3421 17.8651 15.2114 18.072C14.9376 18.5056 14.5084 18.8167 14.0127 18.9408C13.776 19 13.508 19 12.9721 19H9.00298C8.46704 19 8.19907 19 7.96244 18.9408C7.46672 18.8167 7.03748 18.5056 6.76366 18.072C6.63295 17.8651 6.54821 17.6094 6.37872 17.0982Z',
  d10: 'M13.9824 19L13.8533 19.6466C13.7122 20.3537 13.6416 20.7072 13.4834 20.9866C13.2389 21.4185 12.8426 21.7439 12.3719 21.8994C12.0674 22 11.7076 22 10.9878 22C10.268 22 9.90813 22 9.60364 21.8994C9.13286 21.7439 8.73666 21.4185 8.49213 20.9866C8.33399 20.7072 8.26341 20.3537 8.12225 19.6466L7.99316 19',
  d11: 'M14.4342 3.00098V4.98M10.96 6.50136H13.0044M18.9536 6.50136H20.998M18.9536 9.47458H20.998M10.96 9.47458H13.0044M14.4342 11.0202V12.9992M17.4485 11.0202V12.9992M17.4378 3.00098V4.98M14.0007 10.9685H17.9572C18.5075 10.9685 18.9536 10.5208 18.9536 9.96854V5.98C18.9536 5.42771 18.5075 4.98 17.9572 4.98H14.0007C13.4505 4.98 13.0044 5.42771 13.0044 5.98V9.96854C13.0044 10.5208 13.4505 10.9685 14.0007 10.9685Z',
  d12: 'M10.8 3.17855C7.11815 3.17855 4.15 6.17481 4.15 9.85024C4.15 11.1075 4.49575 12.2813 5.09719 13.2842C5.37 13.7391 5.22785 14.3323 4.77969 14.6093C4.33152 14.8862 3.74705 14.7419 3.47424 14.287C2.69722 12.9913 2.25 11.4721 2.25 9.85024C2.25 5.09122 6.08712 1.25 10.8 1.25C11.3247 1.25 11.75 1.68172 11.75 2.21428C11.75 2.74683 11.3247 3.17855 10.8 3.17855Z',
  d13: 'M14.5 2.25C14.9142 2.25 15.25 2.58579 15.25 3V4.25H16.75V3C16.75 2.58579 17.0858 2.25 17.5 2.25C17.9142 2.25 18.25 2.58579 18.25 3V4.30087C18.5896 4.35268 18.9437 4.4688 19.2374 4.76256C19.5312 5.05633 19.6473 5.41037 19.6991 5.75H21C21.4142 5.75 21.75 6.08579 21.75 6.5C21.75 6.91421 21.4142 7.25 21 7.25H19.75V8.75H21C21.4142 8.75 21.75 9.08579 21.75 9.5C21.75 9.91421 21.4142 10.25 21 10.25H19.6991C19.6473 10.5896 19.5312 10.9437 19.2374 11.2374C18.9437 11.5312 18.5896 11.6473 18.25 11.6991V13C18.25 13.4142 17.9142 13.75 17.5 13.75C17.0858 13.75 16.75 13.4142 16.75 13V11.75H15.25V13C15.25 13.4142 14.9142 13.75 14.5 13.75C14.0858 13.75 13.75 13.4142 13.75 13V11.6991C13.4104 11.6473 13.0563 11.5312 12.7626 11.2374C12.4688 10.9437 12.3527 10.5896 12.3009 10.25H11C10.5858 10.25 10.25 9.91421 10.25 9.5C10.25 9.08579 10.5858 8.75 11 8.75H12.25V7.25H11C10.5858 7.25 10.25 6.91421 10.25 6.5C10.25 6.08579 10.5858 5.75 11 5.75H12.3009C12.3527 5.41037 12.4688 5.05633 12.7626 4.76256C13.0563 4.4688 13.4104 4.35268 13.75 4.30087V3C13.75 2.58579 14.0858 2.25 14.5 2.25Z',
  d14: 'M14.8432 15.998C14.9736 15.998 15.1022 15.998 15.2105 16.003C15.325 16.0083 15.4787 16.0209 15.6389 16.0692C16.1374 16.2198 16.4733 16.5843 16.4987 16.9979C16.5069 17.1307 16.4739 17.2477 16.4441 17.3337C16.1127 19.0156 15.4285 19.498 14.8431 19.498H7.1569C6.57151 19.498 5.8873 19.0156 5.55585 17.3337C5.52614 17.2477 5.49309 17.1307 5.50126 16.9979C5.5267 16.5843 5.8626 16.2198 6.3611 16.0692C6.52127 16.0209 6.67503 16.0083 6.78946 16.003C6.89781 15.998 7.02637 15.998 7.15678 15.998H7.15684H14.8432H14.8432Z',
  d15: 'M9.33207 22.6493C9.67741 22.7499 10.0856 22.7499 10.9019 22.7499C11.7182 22.7499 12.1264 22.7499 12.4717 22.6493C13.0057 22.4938 13.4551 22.1684 13.7324 21.7365C13.8356 21.5757 13.906 21.3903 13.9776 21.1271C14.0674 20.7972 14.1123 20.6322 14.0223 20.5143C13.9322 20.3965 13.7551 20.3965 13.4009 20.3965H8.40295C8.04873 20.3965 7.87162 20.3965 7.78156 20.5143C7.69151 20.6322 7.73641 20.7972 7.82623 21.1271C7.89786 21.3903 7.96819 21.5757 8.07142 21.7365C8.34876 22.1684 8.79812 22.4938 9.33207 22.6493Z',
  d16: 'M19 5H13V11H19V5Z',
  d17: 'M16 16H6L7 19L15 19L16 16Z',
  d18: 'M14 19L13 22H9L8 19',
  d19: 'M14 4.25V2.5H15.5V4.25H17V2.5H18.5V4.25H20V5.75H21.75V7.25H20V8.75H21.75V10.25H20V11.75H18.5V13.5H17V11.75H15.5V13.5H14V11.75H12.5V10.25H10.75V8.75H12.5V7.25H10.75V5.75H12.5V4.25H14Z',
  d20: 'M11 3.19379C7.23203 3.19379 4.19444 6.21373 4.19444 9.9182C4.19444 11.1854 4.54828 12.3685 5.16379 13.3793L3.50288 14.39C2.70768 13.0841 2.25 11.5529 2.25 9.9182C2.25 5.12157 6.17688 1.25 11 1.25V3.19379Z',
  d21: 'M6.00001 15.25H16C16.2411 15.25 16.4675 15.3401 16.6084 15.4923C16.7494 15.6444 16.7878 15.8399 16.7115 16.0178L15.7115 18.3511C15.6094 18.5893 15.3228 18.75 15 18.75L7.00001 18.75C6.67718 18.75 6.39058 18.5893 6.28849 18.3511L5.28849 16.0178C5.21226 15.8399 5.25061 15.6444 5.39157 15.4923C5.53254 15.3401 5.75892 15.25 6.00001 15.25Z',
  d22: 'M7.54277 20L8.2885 22.2372C8.39058 22.5434 8.67719 22.75 9.00001 22.75H13C13.3228 22.75 13.6094 22.5434 13.7115 22.2372L14.4572 20H7.54277Z',
};

export const IconAiInnovation01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-innovation-01-stroke-rounded IconAiInnovation01StrokeRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiInnovation01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-innovation-01-duotone-rounded IconAiInnovation01DuotoneRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiInnovation01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-innovation-01-twotone-rounded IconAiInnovation01TwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiInnovation01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-innovation-01-solid-rounded IconAiInnovation01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
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
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiInnovation01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-innovation-01-bulk-rounded IconAiInnovation01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiInnovation01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-innovation-01-stroke-sharp IconAiInnovation01StrokeSharp"
    >
      <path 
        d={d.d16} 
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
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiInnovation01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-innovation-01-solid-sharp IconAiInnovation01SolidSharp"
    >
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
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAiInnovation01: TheIconSelfPack = {
  name: 'AiInnovation01',
  StrokeRounded: IconAiInnovation01StrokeRounded,
  DuotoneRounded: IconAiInnovation01DuotoneRounded,
  TwotoneRounded: IconAiInnovation01TwotoneRounded,
  SolidRounded: IconAiInnovation01SolidRounded,
  BulkRounded: IconAiInnovation01BulkRounded,
  StrokeSharp: IconAiInnovation01StrokeSharp,
  SolidSharp: IconAiInnovation01SolidSharp,
};