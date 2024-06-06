import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.9364 2H19.6547C20.4117 2 20.7903 2 20.9433 2.23713C21.0963 2.47427 20.927 2.79859 20.5884 3.44721L15.0896 13.9817C14.8301 14.479 14.7003 14.7276 14.7151 14.9919C14.73 15.2562 14.8869 15.49 15.2008 15.9577L18.2219 20.4592C18.6782 21.1392 18.9064 21.4792 18.758 21.7396C18.6096 22 18.1876 22 17.3437 22H15.2478C14.6566 22 14.361 22 14.1179 21.8649C13.8749 21.7298 13.7283 21.484 13.4349 20.9923L10.4147 15.9293C10.1433 15.4744 10.0076 15.2469 10.0003 14.9963C9.99304 14.7456 10.1154 14.5113 10.36 14.0426L16.0689 3.10557C16.3497 2.56766 16.4901 2.2987 16.7424 2.14935C16.9946 2 17.3086 2 17.9364 2Z',
  d2: 'M4.27747 6H5.41341C6.00959 6 6.30768 6 6.54724 6.14935C6.78679 6.2987 6.9201 6.56766 7.18672 7.10557L8.67368 10.1056C8.89123 10.5445 9 10.7639 9 11C9 11.2361 8.89123 11.4555 8.67368 11.8944L7.18672 14.8944C6.9201 15.4323 6.78679 15.7013 6.54724 15.8507C6.30768 16 6.00959 16 5.41341 16H4.27747C3.55858 16 3.19914 16 3.05386 15.7629C2.90857 15.5257 3.06932 15.2014 3.39082 14.5528L4.70845 11.8944C4.92599 11.4555 5.03476 11.2361 5.03476 11C5.03476 10.7639 4.92599 10.5445 4.70844 10.1056L3.39082 7.44721C3.06932 6.79858 2.90857 6.47427 3.05386 6.23713C3.19914 6 3.55858 6 4.27747 6Z',
  d3: 'M20.6311 1.28713C20.9096 1.32673 21.3178 1.43429 21.5735 1.83053C21.8363 2.23779 21.7526 2.65912 21.6599 2.93032C21.5755 3.17736 21.4253 3.46492 21.2752 3.75226L21.2752 3.75227L21.2533 3.79428L15.7545 14.3288C15.6178 14.5906 15.5415 14.7387 15.4957 14.8531C15.4729 14.9099 15.4661 14.9387 15.4643 14.9498C15.4673 14.9608 15.4774 14.9891 15.507 15.0444C15.5656 15.1539 15.6584 15.2936 15.8235 15.5397L18.8446 20.0413L18.8724 20.0827C19.0764 20.3864 19.2749 20.6821 19.395 20.9368C19.5217 21.2053 19.6702 21.6538 19.4096 22.111C19.1564 22.5552 18.707 22.6689 18.417 22.71C18.134 22.7502 17.772 22.7501 17.3919 22.75H17.3918L17.3437 22.75H15.2187C14.9481 22.75 14.6956 22.7501 14.4815 22.7298C14.2447 22.7073 13.9978 22.6562 13.7536 22.5205C13.5076 22.3837 13.3348 22.2005 13.1929 22.0092C13.0664 21.8386 12.9396 21.6259 12.8061 21.4022L12.8061 21.4021L9.7561 16.2894L9.7561 16.2894C9.63285 16.0828 9.51503 15.8854 9.4307 15.7074C9.33637 15.5084 9.25831 15.2836 9.25062 15.018C9.24292 14.7523 9.30789 14.5234 9.39071 14.3192C9.46468 14.1369 9.57097 13.9333 9.68203 13.7207L15.404 2.75854L15.4186 2.73056C15.5464 2.48571 15.6677 2.25337 15.7916 2.06678C15.9307 1.85744 16.1042 1.65559 16.3603 1.50398C16.6145 1.3535 16.8749 1.29707 17.1246 1.27233C17.3506 1.24996 17.6182 1.24998 17.9058 1.25001L19.6547 1.25001L19.7004 1.25001C20.039 1.24993 20.3691 1.24986 20.6311 1.28713Z',
  d4: 'M4.23125 5.25001L4.27746 5.25002H5.4134L5.44464 5.25001C5.71577 5.24998 5.97342 5.24995 6.19185 5.27273C6.43626 5.29822 6.69373 5.35688 6.94402 5.51293C7.1939 5.66872 7.36014 5.87391 7.49117 6.08164C7.60864 6.26788 7.72351 6.49972 7.8449 6.74468L7.85869 6.77252L9.34566 9.77252L9.38849 9.85846C9.56249 10.2066 9.74999 10.5817 9.74999 11C9.74999 11.4183 9.56249 11.7935 9.3885 12.1416L9.34565 12.2275L7.8449 15.2553C7.72352 15.5003 7.60864 15.7321 7.49117 15.9184C7.36014 16.1261 7.1939 16.3313 6.94402 16.4871C6.69372 16.6432 6.43626 16.7018 6.19185 16.7273C5.97343 16.7501 5.71579 16.7501 5.44467 16.75H5.44465L4.27746 16.75L4.23124 16.75C3.91239 16.7501 3.59382 16.7502 3.33945 16.7121C3.06052 16.6703 2.65992 16.5555 2.41433 16.1547C2.17006 15.756 2.24721 15.3479 2.33388 15.0807C2.41345 14.8354 2.55549 14.5491 2.69843 14.2609L2.71882 14.2197L4.03645 11.5614C4.15094 11.3304 4.21494 11.1998 4.25458 11.0983C4.2723 11.0529 4.2795 11.027 4.28254 11.0135C4.28397 11.0071 4.2846 11.0022 4.2846 11.0022L4.28475 11L4.2846 10.9978C4.2846 10.9978 4.28397 10.9929 4.28254 10.9865C4.2795 10.973 4.2723 10.9471 4.25458 10.9017C4.21494 10.8003 4.15094 10.6696 4.03645 10.4387L2.71882 7.7803L2.69843 7.73918C2.55549 7.45098 2.41345 7.1646 2.33388 6.91929C2.24721 6.65211 2.17006 6.24404 2.41433 5.84534C2.65992 5.44449 3.06052 5.32972 3.33945 5.28793C3.59382 5.24983 3.91239 5.24992 4.23125 5.25001Z',
  d5: 'M7.00835 6.02459C7.00683 6.0208 7.00315 6.01831 6.99907 6.01831L3.02176 6.01807C3.01467 6.01807 3.00983 6.02525 3.01249 6.03182L5.02833 11.0101L3.00588 15.9985C3.00322 16.005 3.00806 16.0122 3.01515 16.0122H7.00631C7.0104 16.0122 7.01408 16.0097 7.0156 16.0059L9.00854 11.0101L7.00835 6.02459Z',
  d6: 'M20.9896 1.99855L16.0214 1.99854C16.0175 1.99854 16.014 2.00081 16.0124 2.00435L10.0057 15.0351L14.006 21.9964C14.0078 21.9996 14.0111 22.0015 14.0148 22.0015L19.0118 21.9601C19.0195 21.96 19.0243 21.9517 19.0204 21.9451L14.993 15.0351L20.9987 2.0127C21.0018 2.00609 20.9969 1.99855 20.9896 1.99855Z',
  d7: 'M16 2H21L15 14.9963L19 22H14L10 14.9963L16 2Z',
  d8: 'M3 6H7L9 11L7 16H3L5.03476 11L3 6Z',
};

export const IconXingStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="xing-stroke-rounded IconXingStrokeRounded"
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

export const IconXingDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="xing-duotone-rounded IconXingDuotoneRounded"
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

export const IconXingTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="xing-twotone-rounded IconXingTwotoneRounded"
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

export const IconXingSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="xing-solid-rounded IconXingSolidRounded"
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

export const IconXingBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="xing-bulk-rounded IconXingBulkRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconXingStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="xing-stroke-sharp IconXingStrokeSharp"
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

export const IconXingSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="xing-solid-sharp IconXingSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfXing: TheIconSelfPack = {
  name: 'Xing',
  StrokeRounded: IconXingStrokeRounded,
  DuotoneRounded: IconXingDuotoneRounded,
  TwotoneRounded: IconXingTwotoneRounded,
  SolidRounded: IconXingSolidRounded,
  BulkRounded: IconXingBulkRounded,
  StrokeSharp: IconXingStrokeSharp,
  SolidSharp: IconXingSolidSharp,
};