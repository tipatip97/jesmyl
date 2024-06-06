import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.38086 2.46562C4.21503 0.490411 18.0114 5.32901 18 7.09558C17.9871 9.09884 12.6121 9.71513 11.1223 10.1331C10.2265 10.3844 9.98651 10.6421 9.77993 11.5815C8.84436 15.8362 8.37464 17.9524 7.3041 17.9997C5.59766 18.0751 0.590865 4.39327 2.38086 2.46562Z',
  d2: 'M16.5673 13.0425C16.9912 12.9858 17.4213 12.9858 17.8453 13.0425M20.1107 13.9793C20.4482 14.237 20.7628 14.5516 21.0205 14.8891M21.9576 17.1559C22.0141 17.5791 22.0141 18.0083 21.9576 18.4315M14.4367 14.1863C12.5005 16.0205 12.5727 18.8841 14.3437 20.6546C16.1343 22.4449 19.0474 22.5032 20.875 20.4993',
  d3: 'M18.4425 6.27536C18.5886 6.46652 18.7522 6.75077 18.75 7.1004C18.7443 7.97857 18.1458 8.58792 17.54 8.98418C16.9196 9.38997 16.1174 9.69253 15.3293 9.92753C14.5313 10.1655 13.6933 10.3496 12.9758 10.4983C12.4741 10.6005 11.5838 10.7826 11.3249 10.8552C10.9012 10.9741 10.7913 11.0567 10.7425 11.1093C10.6902 11.1657 10.6114 11.2923 10.5124 11.7426L10.5104 11.7517C10.0481 13.8541 9.68698 15.4964 9.30157 16.613C9.10919 17.1705 8.88921 17.6642 8.60512 18.0329C8.30691 18.42 7.89112 18.7245 7.33719 18.7489C6.98111 18.7647 6.69083 18.6021 6.50071 18.4609C6.2991 18.3112 6.11291 18.113 5.94368 17.9016C5.60325 17.4763 5.24878 16.8921 4.89868 16.2231C4.19444 14.8772 3.45027 13.076 2.8212 11.2251C2.19243 9.3752 1.66737 7.44262 1.4141 5.83323C1.28785 5.03098 1.22444 4.28056 1.25964 3.64796C1.29271 3.05346 1.4196 2.39857 1.83126 1.95526C2.25571 1.49817 2.91058 1.33595 3.5071 1.27845C4.13915 1.21753 4.89107 1.25834 5.69427 1.36369C7.30601 1.57509 9.24899 2.06371 11.1123 2.66349C12.977 3.26372 14.7968 3.98654 16.1621 4.68051C16.841 5.02559 17.435 5.37727 17.8699 5.71803C18.0863 5.88759 18.2884 6.07373 18.4425 6.27536Z',
  d4: 'M17.7031 14.1913C17.3824 14.1484 17.0569 14.1484 16.7362 14.1913C16.2137 14.2611 15.7335 13.8942 15.6636 13.3717C15.5937 12.8491 15.9606 12.3689 16.4832 12.299C16.9718 12.2337 17.4675 12.2337 17.9561 12.299C18.4787 12.3689 18.8456 12.8491 18.7757 13.3717C18.7058 13.8942 18.2256 14.2611 17.7031 14.1913ZM19.2333 13.5601C19.5532 13.1411 20.1522 13.0607 20.5713 13.3806C20.961 13.6781 21.3217 14.0388 21.6192 14.4285C21.9391 14.8475 21.8588 15.4465 21.4398 15.7664C21.0208 16.0864 20.4217 16.006 20.1018 15.587C19.9074 15.3324 19.6674 15.0925 19.4128 14.8981C18.9938 14.5782 18.9134 13.9792 19.2333 13.5601ZM15.2689 13.6804C15.6315 14.0632 15.6152 14.6673 15.2324 15.0299C13.7891 16.3972 13.837 18.5115 15.162 19.8362C16.5031 21.177 18.6544 21.2131 20.0163 19.7198C20.3716 19.3303 20.9753 19.3025 21.3648 19.6578C21.7544 20.013 21.7821 20.6168 21.4269 21.0063C19.2998 23.3386 15.8897 23.2633 13.8122 21.1863C11.7564 19.1309 11.6664 15.7784 13.9195 13.6439C14.3022 13.2814 14.9064 13.2977 15.2689 13.6804ZM21.6287 16.2254C22.1513 16.1556 22.6314 16.5227 22.7012 17.0453C22.7663 17.533 22.7663 18.0277 22.7012 18.5155C22.6314 19.038 22.1513 19.4051 21.6287 19.3353C21.1062 19.2656 20.7391 18.7854 20.8089 18.2629C20.8516 17.9428 20.8516 17.618 20.8089 17.2979C20.7391 16.7753 21.1062 16.2952 21.6287 16.2254Z',
  d5: 'M18 7.33333L2 2L7.33333 18L10 10L18 7.33333Z',
  d6: 'M15.9637 12.0472C16.4347 11.9843 16.9126 11.9843 17.3836 12.0472M19.9008 13.0881C20.2758 13.3744 20.6254 13.724 20.9117 14.099M21.9529 16.6177C22.0157 17.0878 22.0157 17.5648 21.9529 18.035M13.5964 13.3181C11.445 15.3561 11.5253 18.5379 13.4929 20.5051C15.4826 22.4943 18.7194 22.5591 20.75 20.3326',
  d7: 'M1.46969 1.46969C1.67056 1.26882 1.96769 1.19867 2.23719 1.28851L18.2372 6.62184C18.5434 6.72393 18.75 7.01053 18.75 7.33335C18.75 7.65618 18.5434 7.94278 18.2372 8.04487L10.5929 10.5929L8.04487 18.2372C7.94278 18.5434 7.65618 18.75 7.33335 18.75C7.01053 18.75 6.72393 18.5434 6.62184 18.2372L1.28851 2.23719C1.19867 1.96769 1.26882 1.67056 1.46969 1.46969Z',
  d8: 'M17.2842 12.7906C16.8791 12.7365 16.4681 12.7365 16.0631 12.7906L15.3197 12.8901L15.1209 11.4033L15.8642 11.3039C16.4013 11.232 16.946 11.232 17.4831 11.3039L18.2264 11.4033L18.0276 12.8901L17.2842 12.7906ZM19.7597 12.0369L20.3559 12.492C20.7839 12.8188 21.1809 13.2158 21.5078 13.6438L21.9629 14.2399L20.7707 15.1502L20.3155 14.5541C20.0698 14.2322 19.7676 13.93 19.4457 13.6843L18.8495 13.2292L19.7597 12.0369ZM14.6566 13.3468L14.1122 13.8626C12.2789 15.5992 12.3427 18.2946 14.0232 19.9747C15.7235 21.6747 18.4658 21.7241 20.1958 19.8272L20.7012 19.2731L21.8095 20.2838L21.3041 20.838C18.9729 23.3941 15.2416 23.3139 12.9627 21.0355C10.7079 18.7812 10.6111 15.113 13.0806 12.7736L13.625 12.2578L14.6566 13.3468ZM22.5971 15.775L22.6963 16.5184C22.7679 17.0545 22.7679 17.5982 22.6963 18.1342L22.5971 18.8776L21.1103 18.6791L21.2095 17.9357C21.2635 17.5314 21.2635 17.1212 21.2095 16.7169L21.1103 15.9735L22.5971 15.775Z',
};

export const IconCursorProgress03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-03-stroke-rounded IconCursorProgress03StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCursorProgress03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-03-duotone-rounded IconCursorProgress03DuotoneRounded"
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

export const IconCursorProgress03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-03-twotone-rounded IconCursorProgress03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCursorProgress03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-03-solid-rounded IconCursorProgress03SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorProgress03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-03-bulk-rounded IconCursorProgress03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorProgress03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-03-stroke-sharp IconCursorProgress03StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorProgress03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-03-solid-sharp IconCursorProgress03SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCursorProgress03: TheIconSelfPack = {
  name: 'CursorProgress03',
  StrokeRounded: IconCursorProgress03StrokeRounded,
  DuotoneRounded: IconCursorProgress03DuotoneRounded,
  TwotoneRounded: IconCursorProgress03TwotoneRounded,
  SolidRounded: IconCursorProgress03SolidRounded,
  BulkRounded: IconCursorProgress03BulkRounded,
  StrokeSharp: IconCursorProgress03StrokeSharp,
  SolidSharp: IconCursorProgress03SolidSharp,
};