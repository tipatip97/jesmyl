import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 17.0001C16.5207 15.2115 15.1308 13.9103 13.4627 13.4616M17 17.0001C18.3097 15.6905 18.7415 13.8354 18.2955 12.166M17 17.0001C18.789 17.4795 20.6114 16.9259 21.8341 15.705M17 17.0001C17.4792 18.7886 18.8692 20.0898 20.5372 20.5386M17 17.0001C15.6904 18.3097 15.2585 20.1647 15.7045 21.8339M17 17.0001C15.2109 16.5208 13.3886 17.0744 12.166 18.2955M13.4627 13.4616C12.2102 14.7137 11.7099 16.589 12.166 18.2955M13.4627 13.4616C14.7149 12.2098 16.5896 11.71 18.2955 12.166M18.2955 12.166C20.0177 12.6264 21.3739 13.9827 21.8341 15.705M21.8341 15.705C22.29 17.4114 21.7897 19.2866 20.5372 20.5386M20.5372 20.5386C19.285 21.7902 17.4103 22.29 15.7045 21.8339M15.7045 21.8339C13.9824 21.3736 12.6264 20.0175 12.166 18.2955',
  d2: 'M2.38086 2.46562C4.21503 0.490411 18.0114 5.32901 18 7.09558C17.9871 9.09884 12.6121 9.71513 11.1223 10.1331C10.2265 10.3844 9.98651 10.6421 9.77993 11.5815C8.84436 15.8362 8.37464 17.9524 7.3041 17.9997C5.59766 18.0751 0.590865 4.39327 2.38086 2.46562Z',
  d3: 'M15.5564 13.4519C16.186 13.8708 16.7354 14.4142 17.1631 15.0586C17.4056 14.4632 17.4925 13.8189 17.423 13.1877C16.7894 13.1208 16.1448 13.2147 15.5564 13.4519ZM19.3514 13.9683C19.3044 14.7256 19.1083 15.4757 18.7629 16.1706C19.4005 16.0828 20.0025 15.8354 20.5147 15.459C20.256 14.8701 19.8533 14.3583 19.3514 13.9683ZM20.7947 17.5239C20.1171 17.8598 19.3718 18.0639 18.5998 18.1121C18.994 18.6196 19.5083 19.0168 20.0893 19.2722C20.4648 18.7567 20.7058 18.1515 20.7947 17.5239ZM18.4435 20.5481C17.8139 20.1293 17.2646 19.586 16.8369 18.9416C16.5944 19.537 16.5076 20.1812 16.577 20.8123C17.2105 20.8792 17.8551 20.7853 18.4435 20.5481ZM14.6486 20.0317C14.6956 19.2745 14.8917 18.5245 15.2371 17.8297C14.5995 17.9175 13.9976 18.1649 13.4854 18.5413C13.7441 19.1301 14.1468 19.6418 14.6486 20.0317ZM13.2052 16.4765C13.8828 16.1405 14.6281 15.9364 15.4002 15.8882C15.006 15.3806 14.4917 14.9833 13.9106 14.7279C13.5351 15.2435 13.2941 15.8488 13.2052 16.4765ZM12.9326 12.9312C14.375 11.4893 16.5244 10.9165 18.489 11.4416C20.4706 11.9714 22.029 13.5298 22.5585 15.5116C23.0836 17.4767 22.5101 19.6266 21.0673 21.0689C19.6249 22.5108 17.4755 23.0835 15.511 22.5583C13.5295 22.0286 11.9713 20.4704 11.4416 18.489C10.9163 16.5237 11.4897 14.3737 12.9326 12.9312Z',
  d4: 'M18.4425 6.27536C18.5886 6.46652 18.7522 6.75077 18.75 7.1004C18.7443 7.97857 18.1458 8.58792 17.54 8.98418C16.9196 9.38997 16.1174 9.69253 15.3293 9.92753C14.5313 10.1655 13.6933 10.3496 12.9758 10.4983C12.4741 10.6005 11.5838 10.7826 11.3249 10.8552C10.9012 10.9741 10.7913 11.0567 10.7425 11.1093C10.6902 11.1657 10.6114 11.2923 10.5124 11.7426L10.5104 11.7517C10.0481 13.8541 9.68698 15.4964 9.30157 16.613C9.10919 17.1705 8.88921 17.6642 8.60512 18.0329C8.30691 18.42 7.89112 18.7245 7.33719 18.7489C6.98111 18.7647 6.69083 18.6021 6.50071 18.4609C6.2991 18.3112 6.11291 18.113 5.94368 17.9016C5.60325 17.4763 5.24878 16.8921 4.89868 16.2231C4.19444 14.8772 3.45027 13.076 2.8212 11.2251C2.19243 9.3752 1.66737 7.44262 1.4141 5.83323C1.28785 5.03098 1.22444 4.28056 1.25964 3.64796C1.29271 3.05346 1.4196 2.39857 1.83126 1.95526C2.25571 1.49817 2.91058 1.33595 3.5071 1.27845C4.13915 1.21753 4.89107 1.25834 5.69427 1.36369C7.30601 1.57509 9.24899 2.06371 11.1123 2.66349C12.977 3.26372 14.7968 3.98654 16.1621 4.68051C16.841 5.02559 17.435 5.37727 17.8699 5.71803C18.0863 5.88759 18.2884 6.07373 18.4425 6.27536Z',
  d5: 'M18 7.33333L2 2L7.33333 18L10 10L18 7.33333Z',
  d6: 'M14.9669 13.269C15.888 13.7823 16.6687 14.5471 17.1971 15.4995C17.6517 14.6671 17.8076 13.7145 17.6638 12.7988C16.7406 12.6568 15.785 12.8282 14.9669 13.269ZM19.2146 13.3679C19.2318 14.4242 18.9598 15.4849 18.3982 16.4205C19.3468 16.398 20.25 16.0563 20.9713 15.4734C20.6327 14.5933 20.0094 13.8537 19.2146 13.3679ZM21.2481 17.1047C20.343 17.6459 19.2902 17.9397 18.201 17.9212C18.6944 18.7307 19.4411 19.3418 20.3056 19.6752C20.8916 18.946 21.2204 18.0326 21.2481 17.1047ZM19.033 20.7311C18.112 20.2179 17.3313 19.4531 16.8029 18.5008C16.3483 19.3331 16.1925 20.2856 16.3362 21.2013C17.2594 21.3432 18.2149 21.1718 19.033 20.7311ZM14.7854 20.6321C14.7683 19.5759 15.0402 18.5153 15.6018 17.5798C14.6532 17.6023 13.7501 17.944 13.0288 18.527C13.3675 19.4069 13.9907 20.1464 14.7854 20.6321ZM12.7519 16.8957C13.657 16.3544 14.7098 16.0606 15.799 16.0791C15.3056 15.2695 14.5589 14.6583 13.6943 14.325C13.1083 15.0542 12.7796 15.9677 12.7519 16.8957ZM12.9325 12.9311C14.3744 11.4897 16.5252 10.9165 18.4892 11.4415C20.4706 11.9712 22.0292 13.5299 22.5587 15.5114C23.0836 17.476 22.5097 19.6273 21.0674 21.069C19.6255 22.5103 17.4747 23.0835 15.5108 22.5585C13.5296 22.0289 11.9711 20.4704 11.4415 18.4892C10.9163 16.5245 11.4901 14.373 12.9325 12.9311Z',
  d7: 'M1.46969 1.46969C1.67056 1.26882 1.96769 1.19867 2.23719 1.28851L18.2372 6.62184C18.5434 6.72393 18.75 7.01053 18.75 7.33335C18.75 7.65618 18.5434 7.94278 18.2372 8.04487L10.5929 10.5929L8.04487 18.2372C7.94278 18.5434 7.65618 18.75 7.33335 18.75C7.01053 18.75 6.72393 18.5434 6.62184 18.2372L1.28851 2.23719C1.19867 1.96769 1.26882 1.67056 1.46969 1.46969Z',
} as const;

export const IconCursorProgress04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-04-stroke-rounded IconCursorProgress04StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCursorProgress04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-04-duotone-rounded IconCursorProgress04DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorProgress04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-04-twotone-rounded IconCursorProgress04TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconCursorProgress04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-04-solid-rounded IconCursorProgress04SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconCursorProgress04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-04-bulk-rounded IconCursorProgress04BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconCursorProgress04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-04-stroke-sharp IconCursorProgress04StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconCursorProgress04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-progress-04-solid-sharp IconCursorProgress04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfCursorProgress04: TheIconSelfPack = {
  name: 'CursorProgress04',
  StrokeRounded: IconCursorProgress04StrokeRounded,
  DuotoneRounded: IconCursorProgress04DuotoneRounded,
  TwotoneRounded: IconCursorProgress04TwotoneRounded,
  SolidRounded: IconCursorProgress04SolidRounded,
  BulkRounded: IconCursorProgress04BulkRounded,
  StrokeSharp: IconCursorProgress04StrokeSharp,
  SolidSharp: IconCursorProgress04SolidSharp,
};