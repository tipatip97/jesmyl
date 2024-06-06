import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.9458 6L9.58384 17.0855C9.39588 17.9677 9.49933 18.298 10.1472 18.9315L12.7673 21.4934C13.1127 21.8311 13.2854 22 13.5 22C13.7146 22 13.8873 21.8311 14.2327 21.4934L16.8528 18.9315C17.5007 18.298 17.6041 17.9677 17.4162 17.0855L15.0542 6',
  d2: 'M10.5568 3.12403C10.4894 2.60014 10.4557 2.3382 10.6093 2.1691C10.763 2 11.0347 2 11.5781 2H15.4219C15.9653 2 16.237 2 16.3907 2.1691C16.5443 2.3382 16.5106 2.60014 16.4432 3.12403L16.3924 3.51931C16.2498 4.62718 16.1786 5.18111 15.8224 5.54049C15.7645 5.59888 15.7018 5.65262 15.635 5.70117C15.2238 6 14.6492 6 13.5 6C12.3508 6 11.7762 6 11.365 5.70117C11.2982 5.65262 11.2355 5.59888 11.1776 5.54049C10.8214 5.18111 10.7502 4.62718 10.6076 3.5193L10.5568 3.12403Z',
  d3: 'M10 15C9.39225 15.6925 8.87761 16 8.5 16C8.01562 16 7.1436 14.7794 6.75659 13.8954C6.575 13.4806 6.4842 13.2732 6.50226 13.0108C6.52032 12.7484 6.63925 12.5565 6.8771 12.1727C8.22214 10.0024 10.5145 8.02113 12 6',
  d4: 'M9.58384 17.0855L11.9458 6H15.0542L17.4162 17.0855C17.6041 17.9677 17.5007 18.298 16.8528 18.9315L14.2327 21.4934C13.8873 21.8311 13.7146 22 13.5 22C13.2854 22 13.1127 21.8311 12.7673 21.4934L10.1472 18.9315C9.49933 18.298 9.39588 17.9677 9.58384 17.0855Z',
  d5: 'M11.5406 1.25001L11.5781 1.25002H15.4219L15.4594 1.25001C15.698 1.24994 15.947 1.24986 16.1537 1.27548C16.3899 1.30474 16.6995 1.38068 16.9457 1.62704C17.1955 1.87694 17.246 2.16745 17.2497 2.38811C17.253 2.57665 17.2214 2.79871 17.192 3.00625L17.1871 3.04068L17.131 3.43692C17.0642 3.90892 17.0061 4.32015 16.9152 4.65166C16.8176 5.00827 16.6642 5.34685 16.355 5.63042C16.2686 5.70969 16.1752 5.78247 16.0759 5.84808C15.7231 6.08113 15.3315 6.17132 14.9264 6.21193C14.5463 6.25004 14.0803 6.25002 13.5395 6.25H13.4605C12.9196 6.25002 12.4536 6.25004 12.0735 6.21193C11.6685 6.17132 11.2769 6.08113 10.9241 5.84808C10.8248 5.78247 10.7314 5.7097 10.645 5.63042C10.3358 5.34685 10.1824 5.00827 10.0847 4.65166C9.99391 4.32015 9.93574 3.90893 9.86897 3.43694L9.86375 3.40002L9.81289 3.04068L9.80801 3.00624C9.77854 2.7987 9.74702 2.57665 9.75023 2.38811C9.75398 2.16745 9.80445 1.87694 10.0542 1.62704C10.3005 1.38068 10.6101 1.30474 10.8462 1.27548C11.0529 1.24986 11.302 1.24994 11.5406 1.25001Z',
  d6: 'M10.327 9.11292L10.3275 9.11236L10.3275 9.11235C10.4093 9.02285 10.4914 8.93309 10.5735 8.84307L9.34532 14.6076C9.11088 14.8625 8.91231 15.0298 8.7552 15.1318C8.6736 15.1848 8.61235 15.2142 8.57025 15.2306L8.55391 15.2175C8.45493 15.1361 8.32602 15.001 8.18109 14.8168C7.89195 14.4492 7.61052 13.9775 7.44345 13.5958C7.34677 13.375 7.29788 13.2609 7.2695 13.1711C7.24801 13.1031 7.24909 13.0811 7.2503 13.0635C7.25145 13.0467 7.25311 13.0258 7.28337 12.9627C7.32367 12.8787 7.38768 12.7735 7.51442 12.569C8.14653 11.549 9.01251 10.5567 9.94057 9.53623C10.0682 9.39586 10.1973 9.25473 10.327 9.11292ZM8.89986 16.6983C8.76982 16.7321 8.63611 16.7512 8.49981 16.7512C8.10243 16.7512 7.78168 16.5245 7.60105 16.3759C7.38819 16.2009 7.18409 15.9755 7.00209 15.7441C6.63737 15.2804 6.28929 14.6998 6.06935 14.1974L6.03752 14.125C5.88571 13.7809 5.7228 13.4116 5.75384 12.9605C5.78502 12.5075 5.99926 12.164 6.19771 11.8458L6.23941 11.7788C6.95233 10.6285 7.90507 9.54501 8.83084 8.52703C8.96428 8.3803 9.09701 8.23507 9.22857 8.09112C9.39156 7.91278 9.55277 7.7364 9.71134 7.56151C9.96483 7.28195 10.0916 7.14216 10.2331 7.10391C10.359 7.06986 10.5533 7.12318 10.9158 7.23689L10.9163 7.23438C10.9416 7.24357 10.9668 7.2524 10.992 7.2609C11.0133 7.26762 11.0351 7.27452 11.0575 7.28159C11.3223 7.36532 11.5791 7.41278 11.8144 7.44191C11.8142 7.44212 11.814 7.44233 11.8138 7.44254C11.8596 7.44821 11.9046 7.45319 11.9486 7.45761C12.1429 7.47238 12.7085 7.50192 13.4162 7.50192H13.5833C14.0885 7.50198 14.6078 7.50204 15.0509 7.45761C15.5644 7.40612 15.8212 7.38038 15.9596 7.45887C15.9984 7.48093 16.0189 7.49587 16.0518 7.52617C16.1687 7.63399 16.2139 7.84609 16.3043 8.27029L18.1496 16.9312C18.2493 17.3988 18.3069 17.8602 18.1649 18.3234C18.0236 18.7849 17.7182 19.1362 17.377 19.4697L14.7321 22.0559C14.5814 22.2033 14.42 22.3613 14.2657 22.4764C14.0849 22.6113 13.832 22.7519 13.4999 22.7519C13.1679 22.7519 12.915 22.6113 12.7342 22.4764C12.5799 22.3613 12.4184 22.2033 12.2677 22.0559L12.2677 22.0559L9.62283 19.4697C9.28169 19.1362 8.97632 18.7849 8.83493 18.3234C8.693 17.8602 8.75062 17.3988 8.85024 16.9312L8.89986 16.6983Z',
  d7: 'M10.327 9.11292L10.3275 9.11236L10.3275 9.11235C10.4093 9.02285 10.4914 8.93309 10.5735 8.84307L10.9158 7.23689C10.5533 7.12318 10.359 7.06986 10.2331 7.10391C10.0916 7.14216 9.96483 7.28195 9.71134 7.56152C9.55277 7.7364 9.39156 7.91278 9.22857 8.09112C9.09701 8.23507 8.96428 8.3803 8.83084 8.52703C7.90507 9.54501 6.95233 10.6285 6.23941 11.7788L6.19771 11.8458C5.99926 12.164 5.78502 12.5075 5.75384 12.9605C5.7228 13.4116 5.88571 13.7809 6.03752 14.125L6.06935 14.1974C6.28929 14.6998 6.63737 15.2804 7.00209 15.7441C7.18409 15.9755 7.38819 16.2009 7.60105 16.3759C7.78168 16.5245 8.10243 16.7512 8.49981 16.7512C8.63611 16.7512 8.76982 16.7321 8.89986 16.6983L9.34532 14.6076C9.11088 14.8625 8.91231 15.0298 8.7552 15.1318C8.6736 15.1848 8.61235 15.2142 8.57025 15.2306L8.55391 15.2175C8.45493 15.1361 8.32602 15.001 8.18109 14.8168C7.89195 14.4492 7.61052 13.9775 7.44345 13.5958C7.34677 13.375 7.29788 13.2609 7.2695 13.1711C7.24801 13.1031 7.24909 13.0811 7.2503 13.0635C7.25145 13.0467 7.25311 13.0258 7.28337 12.9627C7.32367 12.8787 7.38768 12.7735 7.51442 12.569C8.14653 11.549 9.01251 10.5567 9.94057 9.53624C10.0682 9.39586 10.1973 9.25473 10.327 9.11292ZM11.8138 7.44254C11.814 7.44233 11.8142 7.44212 11.8144 7.44191C11.5791 7.41278 11.3223 7.36532 11.0575 7.28159C11.0351 7.27452 11.0133 7.26762 10.992 7.2609C11.2798 7.35803 11.5594 7.41101 11.8138 7.44254Z',
  d8: 'M18.1496 16.9312C18.2493 17.3988 18.3069 17.8602 18.1649 18.3234C18.0236 18.7849 17.7182 19.1362 17.377 19.4697L14.7321 22.0559C14.5814 22.2033 14.42 22.3613 14.2657 22.4764C14.0849 22.6113 13.832 22.7519 13.4999 22.7519C13.1679 22.7519 12.915 22.6113 12.7342 22.4764C12.5799 22.3613 12.4184 22.2033 12.2677 22.0559L9.62283 19.4697C9.28169 19.1362 8.97632 18.7849 8.83493 18.3234C8.693 17.8602 8.75062 17.3988 8.85024 16.9312L10.9163 7.23438C11.2827 7.36749 11.6383 7.4265 11.9486 7.45761C12.1429 7.47238 12.7085 7.50192 13.4162 7.50192H13.5833C14.0885 7.50198 14.6078 7.50204 15.0509 7.45761C15.5644 7.40612 15.8212 7.38038 15.9596 7.45887C15.9984 7.48093 16.0189 7.49587 16.0518 7.52617C16.1687 7.63399 16.2139 7.84609 16.3043 8.27029L18.1496 16.9312Z',
  d9: 'M16.5366 2H10.5137L11.5175 6.00978H15.5328L16.5366 2Z',
  d10: 'M9.5134 15.5311L6 12.0233L11.5211 6.00977',
  d11: 'M11.4265 6.55463L9.00391 17.9898L13.5117 22.0014C13.5156 22.0048 13.5213 22.0047 13.5251 22.0013L18.0003 17.9898L15.5454 6.12012',
  d12: 'M10.0831 6.75L5.25 12.0225L8.69067 15.4631L8.10547 18.2721L12.9301 22.5606C13.2143 22.8131 13.6425 22.8131 13.9267 22.5606L18.7512 18.2721L16.3506 6.75H10.0831ZM10.0318 9.02583L7.32621 11.9774L9.05641 13.7076L10.0318 9.02583Z',
  d13: 'M10.4258 1.25C10.1948 1.25 9.97676 1.3564 9.83463 1.53844C9.6925 1.72048 9.64217 1.95785 9.69818 2.1819L10.4652 5.25H16.3864L17.1534 2.1819C17.2094 1.95785 17.1591 1.72048 17.0169 1.53844C16.8748 1.3564 16.6567 1.25 16.4258 1.25H10.4258Z',
};

export const IconSchoolTieStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="school-tie-stroke-rounded IconSchoolTieStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSchoolTieDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="school-tie-duotone-rounded IconSchoolTieDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconSchoolTieTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="school-tie-twotone-rounded IconSchoolTieTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSchoolTieSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="school-tie-solid-rounded IconSchoolTieSolidRounded"
    >
      <path 
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

export const IconSchoolTieBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="school-tie-bulk-rounded IconSchoolTieBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSchoolTieStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="school-tie-stroke-sharp IconSchoolTieStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSchoolTieSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="school-tie-solid-sharp IconSchoolTieSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfSchoolTie: TheIconSelfPack = {
  name: 'SchoolTie',
  StrokeRounded: IconSchoolTieStrokeRounded,
  DuotoneRounded: IconSchoolTieDuotoneRounded,
  TwotoneRounded: IconSchoolTieTwotoneRounded,
  SolidRounded: IconSchoolTieSolidRounded,
  BulkRounded: IconSchoolTieBulkRounded,
  StrokeSharp: IconSchoolTieStrokeSharp,
  SolidSharp: IconSchoolTieSolidSharp,
};