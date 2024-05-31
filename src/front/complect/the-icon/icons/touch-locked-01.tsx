import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.5 14L7.95675 14.5171C8.16822 14.7393 8.49365 14.8103 8.77844 14.6964C9.06324 14.5825 9.25 14.3067 9.25 14H8.5ZM6.28341 11.6713L6.82666 11.1542C6.81182 11.1386 6.79632 11.1236 6.7802 11.1094L6.28341 11.6713ZM3.8775 14.0886L4.47551 13.636C4.4726 13.6322 4.46966 13.6283 4.46668 13.6246L3.8775 14.0886ZM7.15864 18.4236L6.56062 18.8763H6.56062L7.15864 18.4236ZM3.86948 11.9053L3.27682 11.4457L3.27682 11.4457L3.86948 11.9053ZM7.60181 22C7.60181 22.4142 7.93759 22.75 8.35181 22.75C8.76602 22.75 9.10181 22.4142 9.10181 22H7.60181ZM8.21263 20.1155L8.92876 19.8927L8.21263 20.1155ZM8.1732 19.9973L8.87968 19.7456L8.87967 19.7455L8.1732 19.9973ZM12 9.5H11.25C11.25 9.70469 11.3337 9.90049 11.4816 10.042C11.6295 10.1835 11.8288 10.2584 12.0333 10.2493L12 9.5ZM18.0002 12.0592C18.309 12.3352 18.7831 12.3086 19.0592 11.9998C19.3352 11.691 19.3086 11.2169 18.9998 10.9408L18.0002 12.0592ZM9.04325 13.4829L6.82666 11.1542L5.74016 12.1883L7.95675 14.5171L9.04325 13.4829ZM3.27948 14.5413L6.56062 18.8763L7.75665 17.971L4.47551 13.636L3.27948 14.5413ZM3.27682 11.4457C2.57019 12.3568 2.57482 13.6468 3.28831 14.5527L4.46668 13.6246C4.17956 13.26 4.17752 12.7319 4.46214 12.3649L3.27682 11.4457ZM6.7802 11.1094C5.72827 10.1793 4.13524 10.3388 3.27682 11.4457L4.46214 12.3649C4.79514 11.9355 5.39049 11.8829 5.78661 12.2331L6.7802 11.1094ZM9.10181 22C9.10181 21.0874 9.10964 20.4739 8.92876 19.8927L7.49651 20.3384C7.59397 20.6516 7.60181 20.9963 7.60181 22H9.10181ZM6.56062 18.8763C7.1596 19.6676 7.35727 19.942 7.46672 20.2491L8.87967 19.7455C8.6749 19.1709 8.30091 18.69 7.75665 17.971L6.56062 18.8763ZM8.92876 19.8927C8.9134 19.8433 8.89703 19.7943 8.87968 19.7456L7.46672 20.2491C7.47724 20.2786 7.48717 20.3084 7.49651 20.3384L8.92876 19.8927ZM7.75 3.75V14H9.25V3.75H7.75ZM11.25 3.75V9.5H12.75V3.75H11.25ZM9.25 3.75C9.25 3.19772 9.69772 2.75 10.25 2.75V1.25C8.86929 1.25 7.75 2.36929 7.75 3.75H9.25ZM10.25 2.75C10.8023 2.75 11.25 3.19772 11.25 3.75H12.75C12.75 2.36929 11.6307 1.25 10.25 1.25V2.75ZM12.0333 10.2493C13.5963 10.1798 16.1216 10.38 18.0002 12.0592L18.9998 10.9408C16.676 8.86365 13.6518 8.67581 11.9667 8.75074L12.0333 10.2493Z',
  d2: 'M14.5 19.5C14.5 18.5654 14.5 18.0981 14.701 17.75C14.8326 17.522 15.022 17.3326 15.25 17.201C15.5981 17 16.0654 17 17 17H18C18.9346 17 19.4019 17 19.75 17.201C19.978 17.3326 20.1674 17.522 20.299 17.75C20.5 18.0981 20.5 18.5654 20.5 19.5C20.5 20.4346 20.5 20.9019 20.299 21.25C20.1674 21.478 19.978 21.6674 19.75 21.799C19.4019 22 18.9346 22 18 22H17C16.0654 22 15.5981 22 15.25 21.799C15.022 21.6674 14.8326 21.478 14.701 21.25C14.5 20.9019 14.5 20.4346 14.5 19.5Z',
  d3: 'M16 15.5C16 14.6716 16.6716 14 17.5 14C18.3284 14 19 14.6716 19 15.5V17H16V15.5Z',
  d4: 'M17 21.991C16.0654 21.991 15.5981 21.991 15.25 21.7901C15.022 21.6586 14.8326 21.4693 14.701 21.2414C14.5 20.8934 14.5 20.4264 14.5 19.4922C14.5 18.5581 14.5 18.091 14.701 17.7431C14.8326 17.5152 15.022 17.3259 15.25 17.1944C15.5981 16.9935 16.0654 16.9935 17 16.9935H18C18.3146 16.9935 18.5762 16.9935 18.7982 17.0012C19.4278 15.4411 19.9873 13.1309 18.8211 11.9578C16.6895 9.81374 13.7082 9.42131 12 9.49723V3.7501C12 2.78409 11.2165 2.00098 10.25 2.00098C9.2835 2.00098 8.5 2.78409 8.5 3.7501V13.995L6.28341 11.6674C5.55938 11.0276 4.46519 11.1336 3.86948 11.9013C3.37385 12.5401 3.37719 13.4487 3.8775 14.0835L7.15864 18.4164C7.73025 19.1712 8.01608 19.5487 8.1732 19.9893C8.18714 20.0284 8.20028 20.0678 8.21263 20.1074C8.35181 20.5545 8.35181 21.0333 8.35181 21.991H17Z',
  d5: 'M14.5 19.4919C14.5 18.5578 14.5 18.0907 14.701 17.7428C14.8326 17.5149 15.022 17.3256 15.25 17.1941C15.5981 16.9932 16.0654 16.9932 17 16.9932H18C18.9346 16.9932 19.4019 16.9932 19.75 17.1941C19.978 17.3256 20.1674 17.5149 20.299 17.7428C20.5 18.0907 20.5 18.5578 20.5 19.4919C20.5 20.426 20.5 20.8931 20.299 21.241C20.1674 21.4689 19.978 21.6582 19.75 21.7898C19.4019 21.9907 18.9346 21.9907 18 21.9907H17C16.0654 21.9907 15.5981 21.9907 15.25 21.7898C15.022 21.6582 14.8326 21.4689 14.701 21.241C14.5 20.8931 14.5 20.426 14.5 19.4919Z',
  d6: 'M16 15.4944C16 14.6664 16.6716 13.9951 17.5 13.9951C18.3284 13.9951 19 14.6664 19 15.4944V16.9936H16V15.4944Z',
  d7: 'M18.5003 11.4735C16.9585 10.1708 15.0962 9.49999 11.9754 9.49999V6.60699V3.6164C11.9754 2.9809 11.3447 2 10.3564 2C9.36816 2 8.50825 2.64465 8.50825 3.66041V13.985L6.32512 11.7299C5.75747 11.097 4.81179 11.1534 4.15424 11.6324C3.94965 11.7814 3.77175 11.9854 3.66634 12.2297C3.36718 12.9227 3.49999 13.5866 3.97126 14.2289L5.1665 15.7404M5.1665 15.7404C5.45201 16.1215 6.04892 16.9216 6.41216 17.4284M5.1665 15.7404L6.41216 17.4284M8.35872 22C8.49607 19.8607 7.94723 19.3731 6.41216 17.4284',
  d8: 'M14.5117 19.5C14.5117 18.5654 14.5117 18.0981 14.7129 17.75C14.8447 17.522 15.0343 17.3326 15.2625 17.201C15.611 17 16.0787 17 17.0143 17H18.0153C18.9509 17 19.4187 17 19.7672 17.201C19.9954 17.3326 20.185 17.522 20.3167 17.75C20.5179 18.0981 20.5179 18.5654 20.5179 19.5C20.5179 20.4346 20.5179 20.9019 20.3167 21.25C20.185 21.478 19.9954 21.6674 19.7672 21.799C19.4187 22 18.9509 22 18.0153 22H17.0143C16.0787 22 15.611 22 15.2625 21.799C15.0343 21.6674 14.8447 21.478 14.7129 21.25C14.5117 20.9019 14.5117 20.4346 14.5117 19.5Z',
  d9: 'M16.0137 15.5C16.0137 14.6716 16.686 14 17.5152 14C18.3445 14 19.0168 14.6716 19.0168 15.5V17H16.0137V15.5Z',
  d10: 'M5.15911 15.7218L3.86543 14.0089C3.32645 13.2952 3.42357 12.2885 4.08906 11.6907C4.79133 11.0599 5.8203 11.1302 6.46059 11.8237L8.52289 14.0031V3.74357C8.52289 2.78062 9.30463 2 10.2689 2C11.2332 2 12.015 2.78062 12.015 3.74357V9.49478C13.4276 9.37245 16.2758 9.93752 17.7859 11.0533C18.1328 11.3096 18.4577 11.5497 18.7311 11.8237M5.15911 15.7218C5.4377 16.0831 5.74955 16.4924 6.10398 16.9729M5.15911 15.7218L6.10398 16.9729M5.15911 15.7218C4.58715 14.9801 4.15538 14.441 3.78316 13.9055M8.39339 22L8.37384 20.9496C8.41683 19.7183 7.51991 18.9149 6.35012 17.3087C6.26584 17.193 6.18383 17.0811 6.10398 16.9729M6.10398 16.9729L7.27461 18.5229',
  d11: 'M17.5 13.25C16.2574 13.25 15.25 14.2574 15.25 15.5V16.3877C15.1227 16.4278 14.9974 16.4808 14.875 16.5514C14.533 16.7489 14.2489 17.033 14.0514 17.375C13.8741 17.6822 13.808 18.0082 13.7782 18.3374C13.75 18.6486 13.75 19.0924 13.75 19.5322C13.75 19.972 13.75 20.3514 13.7782 20.6626C13.808 20.9918 13.8741 21.3178 14.0514 21.625C14.2489 21.967 14.533 22.2511 14.875 22.4486C15.1822 22.6259 15.5082 22.692 15.8374 22.7218C16.1487 22.75 16.528 22.75 16.9678 22.75H18.0322C18.472 22.75 18.8514 22.75 19.1627 22.7218C19.4918 22.692 19.8178 22.6259 20.125 22.4486C20.467 22.2511 20.7511 21.967 20.9486 21.625C21.1259 21.3178 21.192 20.9918 21.2218 20.6627C21.25 20.3514 21.25 19.972 21.25 19.5322C21.25 19.0924 21.25 18.6486 21.2218 18.3373C21.192 18.0082 21.1259 17.6822 20.9486 17.375C20.7511 17.033 20.467 16.7489 20.125 16.5514C20.0026 16.4808 19.8773 16.4278 19.75 16.3877V15.5C19.75 14.2574 18.7426 13.25 17.5 13.25ZM18.25 16.25H16.75V15.5C16.75 15.0858 17.0858 14.75 17.5 14.75C17.9142 14.75 18.25 15.0858 18.25 15.5V16.25Z',
  d12: 'M10.25 1.25C8.86929 1.25 7.75 2.36929 7.75 3.75V12.1242L6.7802 11.1094C5.72827 10.1793 4.13524 10.3388 3.27682 11.4457C2.57179 12.3548 2.5748 13.641 3.28347 14.5465L6.56062 18.8763C7.1596 19.6676 7.39549 20.0584 7.50494 20.3655C7.64927 20.8293 7.76927 21.2149 7.8824 21.5062C7.98834 21.7789 8.1375 22.1107 8.4075 22.3382C8.66962 22.6003 9.13272 22.7012 9.38933 22.7266C9.62519 22.7501 9.90868 22.75 10.2164 22.75H11.9608C12.417 22.75 12.6451 22.75 12.7345 22.6204C12.824 22.4908 12.7376 22.263 12.5647 21.8074C12.4157 21.4145 12.3055 21.0319 12.2843 20.798C12.2499 20.4181 12.2499 19.9803 12.25 19.5759C12.2499 19.1718 12.2499 18.5822 12.2843 18.202C12.3236 17.7684 12.4214 17.1984 12.7524 16.625C13.0064 16.1852 13.3462 15.8029 13.75 15.5C13.75 13.4289 15.4289 11.75 17.5 11.75C18.0073 11.75 18.4911 11.8507 18.9325 12.0333C19.5024 12.2691 19.7874 12.387 19.8798 12.2577C19.9722 12.1285 19.8045 11.9381 19.4692 11.5572C19.4321 11.5151 19.3934 11.4737 19.3531 11.4332C17.319 9.38616 14.6139 8.81064 12.75 8.74751V3.75C12.75 2.36929 11.6307 1.25 10.25 1.25Z',
  d13: 'M19 17V15.5C19 14.6716 18.3284 14 17.5 14C16.6716 14 16 14.6716 16 15.5V17',
  d14: 'M20.5 17H14.5V22H20.5V17Z',
  d15: 'M8.19175 21.9951L8.19164 19.9667C8.19164 19.9667 5.84927 16.7062 4.24084 14.7492C2.6324 12.7922 4.14408 11.6134 4.14408 11.6134C4.14408 11.6134 5.36607 10.5918 6.60386 12.0388C7.2142 12.8551 8.36133 14.2627 8.36133 14.2627V3.67383C8.36133 2.7494 9.11073 2 10.0352 2C10.9596 2 11.709 2.7494 11.709 3.67383L11.7216 9.53147C13.0526 9.4706 13.4403 9.54678 14.4308 9.71114C14.5933 9.7381 14.7545 9.76994 14.9126 9.81696C15.4846 9.9871 16.9703 10.5011 18.036 11.5114',
  d16: 'M17.5 13.25C16.2574 13.25 15.25 14.2574 15.25 15.5V16.25H13.75V22.75H21.25V16.25H19.75V15.5C19.75 14.2574 18.7426 13.25 17.5 13.25ZM18.25 15.5V16.25H16.75V15.5C16.75 15.0858 17.0858 14.75 17.5 14.75C17.9142 14.75 18.25 15.0858 18.25 15.5Z',
  d17: 'M10.25 1.25C8.86929 1.25 7.75 2.36929 7.75 3.75V12.1242L6.80439 11.1308L6.7802 11.1094C5.72827 10.1793 4.13524 10.3388 3.27682 11.4457C2.57177 12.3548 2.5748 13.6411 3.28352 14.5466L7.60181 20.2492V22.75H12.25V14.75H13.825C14.1725 13.0383 15.6858 11.75 17.5 11.75C18.5189 11.75 19.443 12.1564 20.1188 12.8159C19.9888 12.3108 19.7502 11.8328 19.3531 11.4332C17.319 9.38616 14.6139 8.81064 12.75 8.74751V3.75C12.75 2.36929 11.6307 1.25 10.25 1.25Z',
} as const;

export const IconTouchLocked01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-01-stroke-rounded IconTouchLocked01StrokeRounded"
    >
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
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
    </TheIconWrapper>
  );
};

export const IconTouchLocked01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-01-duotone-rounded IconTouchLocked01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchLocked01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-01-twotone-rounded IconTouchLocked01TwotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      </g>
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchLocked01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-01-solid-rounded IconTouchLocked01SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconTouchLocked01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-01-bulk-rounded IconTouchLocked01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchLocked01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-01-stroke-sharp IconTouchLocked01StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchLocked01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-locked-01-solid-sharp IconTouchLocked01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTouchLocked01: TheIconSelfPack = {
  name: 'TouchLocked01',
  StrokeRounded: IconTouchLocked01StrokeRounded,
  DuotoneRounded: IconTouchLocked01DuotoneRounded,
  TwotoneRounded: IconTouchLocked01TwotoneRounded,
  SolidRounded: IconTouchLocked01SolidRounded,
  BulkRounded: IconTouchLocked01BulkRounded,
  StrokeSharp: IconTouchLocked01StrokeSharp,
  SolidSharp: IconTouchLocked01SolidSharp,
};