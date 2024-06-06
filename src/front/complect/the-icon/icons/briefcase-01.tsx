import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 13.3333C10 13.0233 10 12.8683 10.0341 12.7412C10.1265 12.3961 10.3961 12.1265 10.7412 12.0341C10.8683 12 11.0233 12 11.3333 12H12.6667C12.9767 12 13.1317 12 13.2588 12.0341C13.6039 12.1265 13.8735 12.3961 13.9659 12.7412C14 12.8683 14 13.0233 14 13.3333V14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14V13.3333Z',
  d2: 'M13.9 13.5H15.0826C16.3668 13.5 17.0089 13.5 17.5556 13.3842C19.138 13.049 20.429 12.0207 20.9939 10.6455C21.1891 10.1704 21.2687 9.59552 21.428 8.4457C21.4878 8.01405 21.5177 7.79823 21.489 7.62169C21.4052 7.10754 20.9932 6.68638 20.4381 6.54764C20.2475 6.5 20.0065 6.5 19.5244 6.5H4.47562C3.99351 6.5 3.75245 6.5 3.56187 6.54764C3.00682 6.68638 2.59477 7.10754 2.51104 7.62169C2.48229 7.79823 2.51219 8.01405 2.57198 8.4457C2.73128 9.59552 2.81092 10.1704 3.00609 10.6455C3.571 12.0207 4.86198 13.049 6.44436 13.3842C6.99105 13.5 7.63318 13.5 8.91743 13.5H10.1',
  d3: 'M3.5 11.5V13.5C3.5 17.2712 3.5 19.1569 4.60649 20.3284C5.71297 21.5 7.49383 21.5 11.0556 21.5H12.9444C16.5062 21.5 18.287 21.5 19.3935 20.3284C20.5 19.1569 20.5 17.2712 20.5 13.5V11.5',
  d4: 'M15.5 6.5L15.4227 6.14679C15.0377 4.38673 14.8452 3.50671 14.3869 3.00335C13.9286 2.5 13.3199 2.5 12.1023 2.5H11.8977C10.6801 2.5 10.0714 2.5 9.61309 3.00335C9.15478 3.50671 8.96228 4.38673 8.57727 6.14679L8.5 6.5',
  d5: 'M6.44436 13.3844C5.22242 13.1255 4.17424 12.4534 3.5 11.5273V13.5002C3.5 17.2714 3.5 19.157 4.60649 20.3286C5.71297 21.5002 7.49383 21.5002 11.0556 21.5002H12.9444C16.5062 21.5002 18.287 21.5002 19.3935 20.3286C20.5 19.157 20.5 17.2714 20.5 13.5002V11.5273C19.8258 12.4534 18.7776 13.1255 17.5556 13.3844C17.0089 13.5002 16.3668 13.5002 15.0826 13.5002H14V14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14V13.5002H8.91743C7.63318 13.5002 6.99105 13.5002 6.44436 13.3844Z',
  d6: 'M3.37905 5.82013C3.66201 5.7494 3.99249 5.74969 4.38863 5.75005H19.6095C20.0056 5.74969 20.3361 5.7494 20.6191 5.82013C21.4281 6.02236 22.0906 6.6558 22.2283 7.50124C22.2759 7.79361 22.2301 8.11991 22.182 8.46275C22.0676 9.28584 22.0053 10.1551 21.6867 10.9306C21.0182 12.558 19.5099 13.7367 17.7101 14.118C17.1857 14.2291 16.5974 14.2468 15.7209 14.2496C15.5209 14.2502 15.4209 14.2506 15.3621 14.1919C15.3033 14.1332 15.3034 14.0286 15.3036 13.8194C15.3038 13.6345 15.2991 13.4494 15.2991 13.2654C15.3001 13.0376 15.3016 12.7073 15.2206 12.4049C15.0079 11.6112 14.3879 10.9912 13.5942 10.7785C13.2914 10.6974 12.9766 10.6992 12.6656 10.7002H11.3323C11.0213 10.6992 10.7064 10.6974 10.4036 10.7785C9.60994 10.9912 8.98998 11.6112 8.7773 12.4049C8.69626 12.7073 8.69772 13.0376 8.69873 13.2654C8.69878 13.4494 8.69405 13.6345 8.69425 13.8194C8.69448 14.0286 8.69459 14.1332 8.63577 14.1919C8.57696 14.2506 8.47695 14.2502 8.27694 14.2496C7.4006 14.2468 6.81237 14.2291 6.28799 14.118C4.48818 13.7367 2.97991 12.558 2.31141 10.9306C1.99284 10.1551 1.93051 9.28583 1.81613 8.46274C1.76802 8.11991 1.72224 7.7936 1.76985 7.50124C1.90753 6.6558 2.56997 6.02236 3.37905 5.82013Z',
  d7: 'M11.8286 1.50001C11.9418 1.50004 12.0552 1.50004 12.1681 1.50001C12.7184 1.49988 13.2509 1.49976 13.6991 1.57774C14.2274 1.66965 14.714 1.87907 15.1247 2.33013C15.5028 2.74536 15.7186 3.25975 15.8871 3.81184C16.0526 4.35377 16.2041 5.04679 16.3888 5.89118L16.4753 6.28632L14.5215 6.71372L14.4442 6.3605C14.2481 5.46386 14.1132 4.85081 13.9743 4.39582C13.8357 3.94205 13.7261 3.76475 13.6459 3.67662C13.5983 3.62432 13.5514 3.58207 13.3563 3.54814C13.0995 3.50347 12.7441 3.50002 12.1007 3.50002H11.896C11.2527 3.50002 10.8972 3.50347 10.6404 3.54814C10.4454 3.58207 10.3985 3.62432 10.3509 3.67662C10.2706 3.76475 10.161 3.94205 10.0225 4.39582C9.88359 4.85081 9.74869 5.46386 9.55255 6.3605L9.47528 6.71372L7.52148 6.28632L7.60792 5.89119C7.79262 5.0468 7.94421 4.35378 8.10965 3.81184C8.2782 3.25975 8.49399 2.74536 8.87205 2.33013C9.28274 1.87907 9.76936 1.66965 10.2977 1.57774C10.7459 1.49976 11.2783 1.49988 11.8286 1.50001Z',
  d8: 'M8.97912 15.7477C9.08464 15.7477 9.1374 15.7477 9.18025 15.7696C9.22309 15.7915 9.25684 15.8381 9.32433 15.9313C9.92388 16.7594 10.8986 17.2982 11.9992 17.2982C13.0997 17.2982 14.0744 16.7594 14.674 15.9313C14.7415 15.8381 14.7752 15.7915 14.8181 15.7696C14.8609 15.7477 14.9137 15.7477 15.0192 15.7477L15.3217 15.7477C16.3811 15.7481 17.2402 15.7484 18.0209 15.583C19.0762 15.3595 20.0667 14.9114 20.9105 14.276C21.0625 14.1615 21.1386 14.1042 21.194 14.1319C21.2494 14.1596 21.2492 14.2526 21.2488 14.4386C21.2454 15.8667 21.2254 17.0341 21.1051 17.9814C20.9572 19.1463 20.6462 20.0916 19.9382 20.8412C19.2244 21.597 18.3148 21.9345 17.1948 22.0939C16.1132 22.2479 14.7336 22.2479 13.0029 22.2478H10.9959C9.26519 22.2479 7.88559 22.2479 6.80402 22.0939C5.684 21.9345 4.77437 21.597 4.06064 20.8412C3.35262 20.0916 3.04161 19.1463 2.8937 17.9814C2.77343 17.0343 2.7534 15.8671 2.75007 14.4393C2.74964 14.2533 2.74942 14.1604 2.80482 14.1326C2.86022 14.1049 2.93626 14.1622 3.08833 14.2766C3.93187 14.9117 4.92203 15.3596 5.97703 15.583C6.75776 15.7484 7.61668 15.7481 8.6761 15.7477L8.97912 15.7477Z',
  d9: 'M3.5 10.5C3.08579 10.5 2.75 10.8358 2.75 11.25L2.75 13.5536C2.74999 15.3938 2.74998 16.8471 2.89429 17.9836C3.0422 19.1485 3.35321 20.0937 4.06123 20.8434C4.77496 21.5991 5.68459 21.9366 6.80461 22.0961C7.88619 22.25 9.26578 22.25 10.9965 22.25H13.0034C14.7342 22.25 16.1138 22.25 17.1954 22.0961C18.3154 21.9366 19.225 21.5991 19.9388 20.8434C20.6468 20.0937 20.9578 19.1485 21.1057 17.9836C21.25 16.8471 21.25 15.3938 21.25 13.5536V11.25C21.25 10.8358 20.9142 10.5 20.5 10.5H3.5Z',
  d10: 'M13.9744 12H9.98779V14C9.98779 15.1046 10.8802 16 11.9811 16C13.082 16 13.9744 15.1046 13.9744 14V12Z',
  d11: 'M3.50977 12V21.5H20.4531V12',
  d12: 'M15.5016 6V2.5H8.5249V6',
  d13: 'M10.0244 14.0106H6.01862L2.49805 10.989V6.06273C2.49805 6.05721 2.50251 6.05273 2.50801 6.05273H21.492C21.4975 6.05273 21.502 6.05721 21.502 6.06273V10.94L17.9312 14.0106H13.9506',
  d14: 'M14 13H10V15C10 16.1046 10.8954 17 12 17C13.1046 17 14 16.1046 14 15V13Z',
  d15: 'M8.5 11.5H15.5V14.75H18.2774L22.25 11.345V6C22.25 5.58579 21.9142 5.25 21.5 5.25H2.5C2.08579 5.25 1.75 5.58579 1.75 6V11.345L5.72256 14.75H8.5V11.5Z',
  d16: 'M21.25 21.5C21.25 21.9142 20.9142 22.25 20.5 22.25H3.5C3.08579 22.25 2.75 21.9142 2.75 21.5V14.1777L5.16767 16.25H8.72981C9.23303 17.5657 10.5074 18.5 12 18.5C13.4926 18.5 14.767 17.5657 15.2702 16.25H18.8323L21.25 14.1777V21.5Z',
  d17: 'M7.5 2.75C7.5 2.19772 7.94772 1.75 8.5 1.75H15.5C16.0523 1.75 16.5 2.19772 16.5 2.75V6.25H14.5V3.75H9.5V6.25H7.5V2.75Z',
};

export const IconBriefcase01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-01-stroke-rounded IconBriefcase01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBriefcase01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-01-duotone-rounded IconBriefcase01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconBriefcase01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-01-twotone-rounded IconBriefcase01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-01-solid-rounded IconBriefcase01SolidRounded"
    >
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-01-bulk-rounded IconBriefcase01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-01-stroke-sharp IconBriefcase01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-01-solid-sharp IconBriefcase01SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBriefcase01: TheIconSelfPack = {
  name: 'Briefcase01',
  StrokeRounded: IconBriefcase01StrokeRounded,
  DuotoneRounded: IconBriefcase01DuotoneRounded,
  TwotoneRounded: IconBriefcase01TwotoneRounded,
  SolidRounded: IconBriefcase01SolidRounded,
  BulkRounded: IconBriefcase01BulkRounded,
  StrokeSharp: IconBriefcase01StrokeSharp,
  SolidSharp: IconBriefcase01SolidSharp,
};