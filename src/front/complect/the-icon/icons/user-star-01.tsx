import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.5 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C7.827 14.1422 10.4865 13.7109 13 14.1878',
  d2: 'M15.5 6.5C15.5 8.98528 13.4853 11 11 11C8.51472 11 6.5 8.98528 6.5 6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5Z',
  d3: 'M18.6911 14.5777L19.395 15.9972C19.491 16.1947 19.7469 16.3843 19.9629 16.4206L21.2388 16.6343C22.0547 16.7714 22.2467 17.3682 21.6587 17.957L20.6668 18.9571C20.4989 19.1265 20.4069 19.4531 20.4589 19.687L20.7428 20.925C20.9668 21.9049 20.4509 22.284 19.591 21.7718L18.3951 21.0581C18.1791 20.929 17.8232 20.929 17.6032 21.0581L16.4073 21.7718C15.5514 22.284 15.0315 21.9009 15.2554 20.925L15.5394 19.687C15.5914 19.4531 15.4994 19.1265 15.3314 18.9571L14.3395 17.957C13.7556 17.3682 13.9436 16.7714 14.7595 16.6343L16.0353 16.4206C16.2473 16.3843 16.5033 16.1947 16.5993 15.9972L17.3032 14.5777C17.6872 13.8074 18.3111 13.8074 18.6911 14.5777Z',
  d4: 'M5.09548 15.7585C5.27346 15.6578 5.43687 15.5654 5.57757 15.4816C8.89519 13.5061 13.1048 13.5061 16.4224 15.4816C16.5237 15.5419 16.6368 15.6067 16.7586 15.6759L16.5993 15.9972C16.5033 16.1947 16.2473 16.3843 16.0353 16.4206L14.7595 16.6343C13.9436 16.7714 13.7556 17.3682 14.3395 17.957L15.3314 18.9571C15.4994 19.1265 15.5914 19.4531 15.5394 19.687L15.2554 20.925C15.1096 21.5603 15.2791 21.9443 15.6512 21.9938L6.59087 22C5.04549 22 3.81631 21.248 2.71266 20.1966C0.678069 18.2582 3.48398 16.6704 5.09548 15.7585Z',
  d5: 'M17.9982 13.25C18.67 13.25 19.12 13.7533 19.3627 14.245L19.3632 14.2459L20.0587 15.6484L20.0645 15.654C20.0693 15.6583 20.0749 15.663 20.0811 15.6676C20.0874 15.6722 20.0935 15.6763 20.0992 15.6798L20.1075 15.6844L21.3626 15.8947C21.9028 15.9855 22.4905 16.275 22.6893 16.8985C22.8877 17.521 22.5775 18.0974 22.1899 18.486L22.1889 18.487L21.2132 19.4708C21.2098 19.4778 21.2053 19.4888 21.2014 19.5027C21.197 19.5181 21.1949 19.5314 21.1942 19.5401L21.4735 20.7579C21.5995 21.3093 21.6116 22.0753 21.0171 22.5123C20.4194 22.9516 19.6913 22.7048 19.2061 22.4159L18.0294 21.7135C18.0283 21.702 18.0142 21.6859 17.9668 21.7142L16.7916 22.4156C16.3047 22.7069 15.5783 22.9496 14.9815 22.5106C14.3883 22.0742 14.397 21.3106 14.524 20.7572L14.8031 19.5401C14.8024 19.5314 14.8003 19.5181 14.7959 19.5027C14.792 19.4888 14.7875 19.4778 14.7841 19.4708L13.8065 18.4851C13.4213 18.0967 13.1123 17.5211 13.3091 16.8998C13.5068 16.2757 14.0941 15.9855 14.6351 15.8946L15.8859 15.6851L15.893 15.681C15.8987 15.6775 15.9049 15.6734 15.9113 15.6687C15.9176 15.6639 15.9233 15.6592 15.9282 15.6547L15.9345 15.6487L16.6315 14.2431C16.8762 13.7522 17.3273 13.25 17.9982 13.25Z',
  d6: 'M5.74938 6.5C5.74938 3.6005 8.09988 1.25 10.9994 1.25C13.8989 1.25 16.2494 3.6005 16.2494 6.5C16.2494 9.39949 13.8989 11.75 10.9994 11.75C8.09988 11.75 5.74938 9.39949 5.74938 6.5Z',
  d7: 'M14.4392 14.3825C14.4892 14.3525 14.5141 14.3375 14.5303 14.3244C14.7022 14.1856 14.6658 13.9073 14.4641 13.8172C14.4451 13.8087 14.4184 13.801 14.365 13.7855C13.8204 13.628 13.0835 13.4302 12.6039 13.3625C11.5401 13.2125 10.4583 13.2125 9.39446 13.3625C7.92998 13.5691 6.49791 14.0602 5.19306 14.8372C5.07678 14.9064 4.93314 14.9874 4.77052 15.0792C4.05771 15.4813 2.98009 16.0893 2.24192 16.8118C1.78025 17.2637 1.3416 17.8592 1.26185 18.5888C1.17705 19.3646 1.51551 20.0927 2.19453 20.7396C3.36597 21.8556 4.77176 22.75 6.59007 22.75H12.2937C12.7005 22.75 12.9039 22.75 12.9935 22.6475C13.0832 22.545 13.0509 22.3047 12.9862 21.8241C12.9096 21.2541 12.9887 20.7329 13.0601 20.4219L13.09 20.2912C13.1262 20.1337 13.1442 20.055 13.1231 19.9808C13.1019 19.9066 13.045 19.8493 12.9312 19.7346L12.7397 19.5414C12.178 18.9751 11.436 17.84 11.8772 16.4469C12.3099 15.081 13.5275 14.5747 14.3222 14.4264C14.3314 14.4247 14.336 14.4238 14.3391 14.4232C14.3715 14.4164 14.3982 14.4063 14.4269 14.3899C14.4297 14.3883 14.4329 14.3864 14.4392 14.3825Z',
  d8: 'M10.999 1.25C8.09953 1.25 5.74902 3.6005 5.74902 6.5C5.74902 9.39949 8.09953 11.75 10.999 11.75C13.8985 11.75 16.249 9.39949 16.249 6.5C16.249 3.6005 13.8985 1.25 10.999 1.25Z',
  d9: 'M14.5303 14.3244C14.5141 14.3375 14.4892 14.3525 14.4392 14.3825L14.4269 14.3899C14.3982 14.4063 14.3715 14.4164 14.3391 14.4232L14.3222 14.4264C13.5275 14.5747 12.3099 15.081 11.8772 16.4469C11.436 17.84 12.178 18.9751 12.7397 19.5414L12.9312 19.7346C13.045 19.8493 13.1019 19.9066 13.1231 19.9808C13.1442 20.055 13.1262 20.1337 13.09 20.2912L13.0601 20.4219C12.9887 20.7329 12.9096 21.2541 12.9862 21.8241C13.0509 22.3047 13.0832 22.545 12.9935 22.6475C12.9039 22.75 12.7005 22.75 12.2937 22.75H6.59007C4.77176 22.75 3.36597 21.8556 2.19453 20.7396C1.51551 20.0927 1.17705 19.3646 1.26185 18.5888C1.3416 17.8592 1.78025 17.2637 2.24192 16.8118C2.98009 16.0893 4.05771 15.4813 4.77052 15.0792C4.93309 14.9875 5.0768 14.9064 5.19306 14.8372C6.49791 14.0602 7.92998 13.5691 9.39446 13.3625C10.4583 13.2125 11.5401 13.2125 12.6039 13.3625C13.0835 13.4302 13.8204 13.628 14.365 13.7855C14.4184 13.801 14.4451 13.8087 14.4641 13.8172C14.6658 13.9073 14.7022 14.1856 14.5303 14.3244Z',
  d10: 'M12 20H2C2 16.134 5.58172 13 10 13C11.0609 13 12.0736 13.1807 13 13.5088M14 6C14 8.20914 12.2091 10 10 10C7.79086 10 6 8.20914 6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6Z',
  d11: 'M17.9747 14.0197C18.0146 13.9583 17.9884 13.9583 18.0283 14.0195L19.4192 16.4235L21.909 17.0387C21.9744 17.0578 22.0257 17.0609 21.996 17.0878C21.9917 17.0917 21.9872 17.0954 21.9832 17.0997L20.1891 19.0005L20.8703 21.9557C20.8715 21.9612 20.8725 21.9669 20.8723 21.9725C20.8704 22.0352 20.7968 21.9672 20.7315 21.9417L18.0128 20.805L15.2697 21.9417C15.1288 21.9957 15.1196 22.0167 15.1224 21.9507C15.1226 21.9447 15.1235 21.9388 15.1248 21.933L15.8004 18.9967L14.0478 17.1219C14.0431 17.1168 14.0378 17.1123 14.0324 17.1079C14.0126 17.0913 13.9688 17.0472 14.0407 17.0283L16.5861 16.4024L17.9747 14.0197Z',
  d12: 'M18 13.25C18.2668 13.25 18.5134 13.3917 18.6478 13.6221L19.889 15.7498L22.1834 16.3285C22.4402 16.3932 22.6437 16.5886 22.719 16.8424C22.7943 17.0962 22.7302 17.371 22.5504 17.5652L21.018 19.2204L21.604 21.836C21.6653 22.1096 21.5689 22.3946 21.354 22.5747C21.1391 22.7549 20.8417 22.8001 20.583 22.692L18 21.6128L15.417 22.692C15.1583 22.8001 14.8609 22.7549 14.646 22.5747C14.4312 22.3946 14.3347 22.1096 14.396 21.836L14.982 19.2204L13.4497 17.5652C13.2698 17.371 13.2057 17.0962 13.281 16.8424C13.3563 16.5886 13.5599 16.3932 13.8166 16.3285L16.111 15.7498L17.3522 13.6221C17.4866 13.3917 17.7333 13.25 18 13.25Z',
  d13: 'M5.25 6C5.25 3.37665 7.37665 1.25 10 1.25C12.6234 1.25 14.75 3.37665 14.75 6C14.75 8.62335 12.6234 10.75 10 10.75C7.37665 10.75 5.25 8.62335 5.25 6Z',
  d14: 'M1.25 20C1.25 15.6289 5.26471 12.25 10 12.25C12.0319 12.25 13.931 12.8721 15.4373 13.9278L15.1329 14.4495L13.4498 14.874C12.6796 15.0683 12.0689 15.6542 11.843 16.4157C11.617 17.1772 11.8093 18.0014 12.3489 18.5843L13.3461 19.6613L13.1022 20.75H1.25V20Z',
};

export const IconUserStar01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-star-01-stroke-rounded IconUserStar01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconUserStar01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-star-01-duotone-rounded IconUserStar01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconUserStar01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-star-01-twotone-rounded IconUserStar01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconUserStar01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-star-01-solid-rounded IconUserStar01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserStar01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-star-01-bulk-rounded IconUserStar01BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconUserStar01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-star-01-stroke-sharp IconUserStar01StrokeSharp"
    >
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

export const IconUserStar01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-star-01-solid-sharp IconUserStar01SolidSharp"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const iconPackOfUserStar01: TheIconSelfPack = {
  name: 'UserStar01',
  StrokeRounded: IconUserStar01StrokeRounded,
  DuotoneRounded: IconUserStar01DuotoneRounded,
  TwotoneRounded: IconUserStar01TwotoneRounded,
  SolidRounded: IconUserStar01SolidRounded,
  BulkRounded: IconUserStar01BulkRounded,
  StrokeSharp: IconUserStar01StrokeSharp,
  SolidSharp: IconUserStar01SolidSharp,
};