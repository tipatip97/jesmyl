import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.0004 7.5C10.0004 6.65611 9.91699 5.68211 10.7504 5.20096C11.0984 5 11.5657 5 12.5004 5H13.5004C14.435 5 14.9023 5 15.2504 5.20096C16.0837 5.68211 16.0004 6.65611 16.0004 7.5C16.0004 8.34389 16.0837 9.31789 15.2504 9.79904C14.9023 10 14.435 10 13.5004 10H12.5004C11.5657 10 11.0984 10 10.7504 9.79904C9.91699 9.31789 10.0004 8.34389 10.0004 7.5Z',
  d2: 'M4.00036 16.5C4.00036 15.6561 3.91699 14.6821 4.75036 14.201C5.09844 14 5.56575 14 6.50036 14H13.5004C14.435 14 14.9023 14 15.2504 14.201C16.0837 14.6821 16.0004 15.6561 16.0004 16.5C16.0004 17.3439 16.0837 18.3179 15.2504 18.799C14.9023 19 14.435 19 13.5004 19H6.50036C5.56575 19 5.09844 19 4.75036 18.799C3.91699 18.3179 4.00036 17.3439 4.00036 16.5Z',
  d3: 'M20 2V22',
  d4: 'M16.7503 7.5C16.7538 7.14393 16.7597 6.49173 16.6727 6.06477C16.5601 5.51157 16.2796 4.92918 15.6253 4.55144C15.3181 4.37407 14.9921 4.30801 14.663 4.27818C14.3517 4.24997 13.9723 4.24998 13.5325 4.25L12.4681 4.25C12.0283 4.24998 11.6489 4.24997 11.3377 4.27818C11.0085 4.30802 10.6825 4.37407 10.3753 4.55144C9.72104 4.92918 9.44055 5.51157 9.32788 6.06477C9.24092 6.49173 9.24679 7.14393 9.25031 7.5C9.24679 7.85607 9.24092 8.50827 9.32788 8.93523C9.44055 9.48842 9.72104 10.0708 10.3753 10.4486C10.6825 10.6259 11.0085 10.692 11.3377 10.7218C11.6489 10.75 12.0283 10.75 12.468 10.75L12.4681 10.75L13.5325 10.75L13.5326 10.75C13.9723 10.75 14.3517 10.75 14.663 10.7218C14.9921 10.692 15.3181 10.6259 15.6253 10.4486C16.2796 10.0708 16.5601 9.48842 16.6727 8.93523C16.7597 8.50827 16.7538 7.85607 16.7503 7.5Z',
  d5: 'M16.7503 16.5C16.7538 16.1439 16.7597 15.4917 16.6727 15.0648C16.5601 14.5116 16.2796 13.9292 15.6253 13.5514C15.3181 13.3741 14.9921 13.308 14.663 13.2782C14.3517 13.25 13.9723 13.25 13.5325 13.25L6.46808 13.25C6.02829 13.25 5.64895 13.25 5.33766 13.2782C5.00847 13.308 4.68252 13.3741 4.37531 13.5514C3.72104 13.9292 3.44055 14.5116 3.32788 15.0648C3.24092 15.4917 3.24679 16.1439 3.25031 16.5C3.24679 16.8561 3.24092 17.5083 3.32788 17.9352C3.44055 18.4884 3.72104 19.0708 4.37531 19.4486C4.68252 19.6259 5.00847 19.692 5.33766 19.7218C5.64894 19.75 6.02827 19.75 6.46805 19.75L6.46808 19.75L13.5325 19.75L13.5326 19.75C13.9723 19.75 14.3517 19.75 14.663 19.7218C14.9921 19.692 15.3181 19.6259 15.6253 19.4486C16.2796 19.0708 16.5601 18.4884 16.6727 17.9352C16.7597 17.5083 16.7538 16.8561 16.7503 16.5Z',
  d6: 'M19.75 1C20.3023 1 20.75 1.44772 20.75 2L20.75 22C20.75 22.5523 20.3023 23 19.75 23C19.1977 23 18.75 22.5523 18.75 22L18.75 2C18.75 1.44772 19.1977 1 19.75 1Z',
  d7: 'M10.002 10H16.002L15.998 5H10.002V10Z',
  d8: 'M3.99805 19H15.998V14H3.99805V19Z',
  d9: 'M9.25391 5C9.25391 4.58579 9.58969 4.25 10.0039 4.25H16C16.414 4.25 16.7497 4.58543 16.75 4.99941L16.7539 9.99941C16.7541 10.1984 16.6751 10.3893 16.5344 10.5301C16.3938 10.6709 16.2029 10.75 16.0039 10.75H10.0039C9.80499 10.75 9.61423 10.671 9.47358 10.5303C9.33292 10.3897 9.25391 10.1989 9.25391 10V5Z',
  d10: 'M3.25 14C3.25 13.5858 3.58579 13.25 4 13.25H16C16.4142 13.25 16.75 13.5858 16.75 14V19C16.75 19.4142 16.4142 19.75 16 19.75H4C3.80109 19.75 3.61032 19.671 3.46967 19.5303C3.32902 19.3897 3.25 19.1989 3.25 19V14Z',
  d11: 'M18.75 22V2H20.75V22H18.75Z',
} as const;

export const IconAlignRightStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-right-stroke-rounded IconAlignRightStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAlignRightDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-right-duotone-rounded IconAlignRightDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconAlignRightTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-right-twotone-rounded IconAlignRightTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignRightSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-right-solid-rounded IconAlignRightSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconAlignRightBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-right-bulk-rounded IconAlignRightBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconAlignRightStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-right-stroke-sharp IconAlignRightStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
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

export const IconAlignRightSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-right-solid-sharp IconAlignRightSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfAlignRight: TheIconSelfPack = {
  name: 'AlignRight',
  StrokeRounded: IconAlignRightStrokeRounded,
  DuotoneRounded: IconAlignRightDuotoneRounded,
  TwotoneRounded: IconAlignRightTwotoneRounded,
  SolidRounded: IconAlignRightSolidRounded,
  BulkRounded: IconAlignRightBulkRounded,
  StrokeSharp: IconAlignRightStrokeSharp,
  SolidSharp: IconAlignRightSolidSharp,
};