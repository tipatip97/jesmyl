import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.38086 2.46562C4.21503 0.490411 18.0114 5.32901 18 7.09558C17.9871 9.09884 12.6121 9.71513 11.1223 10.1331C10.2265 10.3844 9.98651 10.6421 9.77993 11.5815C8.84436 15.8362 8.37464 17.9524 7.3041 17.9997C5.59766 18.0751 0.590865 4.39327 2.38086 2.46562Z',
  d2: 'M20.7756 13H16.2244C15.5866 13 15.0271 13.4431 15.0015 14.0816C14.9694 14.885 15.5187 15.4184 16.0956 15.9192L16.0956 15.9192C16.8937 16.612 17.2928 16.9584 17.3346 17.3969C17.3412 17.4655 17.3412 17.5345 17.3346 17.6031C17.2928 18.0416 16.8937 18.388 16.0956 19.0808C15.5028 19.5954 14.9677 20.0738 15.0015 20.9184C15.0271 21.5569 15.5866 22 16.2244 22L20.7756 22C21.4134 22 21.9729 21.5569 21.9985 20.9184C22.0188 20.4101 21.8357 19.9039 21.4467 19.552C21.2693 19.3915 21.0851 19.2377 20.9044 19.0808L20.9044 19.0808C20.1063 18.388 19.7072 18.0416 19.6653 17.6031C19.6588 17.5345 19.6588 17.4655 19.6653 17.3969C19.7072 16.9584 20.1063 16.612 20.9044 15.9192C21.491 15.41 22.0319 14.9161 21.9985 14.0816C21.9729 13.4431 21.4134 13 20.7756 13Z',
  d3: 'M18.4425 6.27536C18.5886 6.46652 18.7522 6.75077 18.75 7.1004C18.7443 7.97857 18.1458 8.58792 17.54 8.98418C16.9196 9.38997 16.1174 9.69253 15.3293 9.92753C14.5313 10.1655 13.6933 10.3496 12.9758 10.4983C12.4741 10.6005 11.5838 10.7826 11.3249 10.8552C10.9012 10.9741 10.7913 11.0567 10.7425 11.1093C10.6902 11.1657 10.6114 11.2923 10.5124 11.7426L10.5104 11.7517C10.0481 13.8541 9.68698 15.4964 9.30157 16.613C9.10919 17.1705 8.88921 17.6642 8.60512 18.0329C8.30691 18.42 7.89112 18.7245 7.33719 18.7489C6.98111 18.7647 6.69083 18.6021 6.50071 18.4609C6.2991 18.3112 6.11291 18.113 5.94368 17.9016C5.60325 17.4763 5.24878 16.8921 4.89868 16.2231C4.19444 14.8772 3.45027 13.076 2.8212 11.2251C2.19243 9.3752 1.66737 7.44262 1.4141 5.83323C1.28785 5.03098 1.22444 4.28056 1.25964 3.64796C1.29271 3.05346 1.4196 2.39857 1.83126 1.95526C2.25571 1.49817 2.91058 1.33595 3.5071 1.27845C4.13915 1.21753 4.89107 1.25834 5.69427 1.36369C7.30601 1.57509 9.24899 2.06371 11.1123 2.66349C12.977 3.26372 14.7968 3.98654 16.1621 4.68051C16.841 5.02559 17.435 5.37727 17.8699 5.71803C18.0863 5.88759 18.2884 6.07373 18.4425 6.27536Z',
  d4: 'M14.2521 14.0516C14.2969 12.9333 15.2666 12.25 16.2244 12.25H20.7756C21.7334 12.25 22.7031 12.9333 22.7479 14.0516C22.7967 15.2706 21.9759 15.9826 21.4226 16.4626C21.0085 16.822 20.7254 17.0695 20.5593 17.2545C20.4815 17.3411 20.4444 17.3969 20.4267 17.4303C20.4095 17.4506 20.3854 17.5069 20.4267 17.5697C20.4444 17.6031 20.4815 17.6589 20.5593 17.7455C20.7254 17.9305 20.982 18.155 21.396 18.5144C21.396 18.5144 21.8226 18.8807 21.9498 18.9958C22.5227 19.514 22.776 20.2446 22.7479 20.9484C22.7031 22.0667 21.7334 22.75 20.7756 22.75L16.2244 22.75C15.2666 22.75 14.2969 22.0667 14.2521 20.9484C14.2033 19.7284 15.0067 19.032 15.5638 18.5492L15.5638 18.5492C15.9779 18.1898 16.2344 17.9653 16.4006 17.7803C16.4784 17.6937 16.5556 17.6031 16.5733 17.5697C16.6134 17.5148 16.59 17.4539 16.5733 17.4303C16.5556 17.3969 16.5185 17.3411 16.4407 17.2545C16.2746 17.0695 16.018 16.845 15.604 16.4856C15.054 16.0082 14.2039 15.2557 14.2521 14.0516Z',
  d5: 'M19 7.33333L3 2L8.33333 18L11 10L19 7.33333Z',
  d6: 'M18 17C19.6569 17 21 15.6569 21 14V12H15V14C15 15.6569 16.3431 17 18 17ZM18 17C19.6569 17 21 18.3431 21 20V22H15V20C15 18.3431 16.3431 17 18 17Z',
  d7: 'M2.46969 1.46969C2.67056 1.26882 2.96769 1.19867 3.23719 1.28851L19.2372 6.62184C19.5434 6.72393 19.75 7.01053 19.75 7.33335C19.75 7.65618 19.5434 7.94278 19.2372 8.04487L11.5929 10.5929L9.04487 18.2372C8.94278 18.5434 8.65618 18.75 8.33335 18.75C8.01053 18.75 7.72393 18.5434 7.62184 18.2372L2.28851 2.23719C2.19867 1.96769 2.26882 1.67056 2.46969 1.46969Z',
  d8: 'M21.75 15C21.75 16.2267 21.161 17.3158 20.2504 18C21.161 18.6842 21.75 19.7733 21.75 21V22.75H14.25V21C14.25 19.7733 14.839 18.6842 15.7496 18C14.839 17.3158 14.25 16.2267 14.25 15V13.25H21.75V15Z',
} as const;

export const IconCursorLoading02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-loading-02-stroke-rounded IconCursorLoading02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorLoading02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-loading-02-duotone-rounded IconCursorLoading02DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorLoading02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-loading-02-twotone-rounded IconCursorLoading02TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorLoading02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-loading-02-solid-rounded IconCursorLoading02SolidRounded"
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

export const IconCursorLoading02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-loading-02-bulk-rounded IconCursorLoading02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCursorLoading02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-loading-02-stroke-sharp IconCursorLoading02StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorLoading02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-loading-02-solid-sharp IconCursorLoading02SolidSharp"
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

export const iconPackOfCursorLoading02: TheIconSelfPack = {
  name: 'CursorLoading02',
  StrokeRounded: IconCursorLoading02StrokeRounded,
  DuotoneRounded: IconCursorLoading02DuotoneRounded,
  TwotoneRounded: IconCursorLoading02TwotoneRounded,
  SolidRounded: IconCursorLoading02SolidRounded,
  BulkRounded: IconCursorLoading02BulkRounded,
  StrokeSharp: IconCursorLoading02StrokeSharp,
  SolidSharp: IconCursorLoading02SolidSharp,
};