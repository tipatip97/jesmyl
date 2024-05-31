import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.5 5.5V2M13.5 12V9',
  d2: 'M13.5 22C19.5 22 21 17.49 21 12C21 6.50998 19.5 2 13.5 2C7.49993 2 6 6.50996 6 12C6 17.49 7.49993 22 13.5 22Z',
  d3: 'M15 7C15 6.53406 15 6.30109 14.9239 6.11732C14.8224 5.87229 14.6277 5.67761 14.3827 5.57612C14.1989 5.5 13.9659 5.5 13.5 5.5C13.0341 5.5 12.8011 5.5 12.6173 5.57612C12.3723 5.67761 12.1776 5.87229 12.0761 6.11732C12 6.30109 12 6.53406 12 7V7.5C12 7.96594 12 8.19891 12.0761 8.38268C12.1776 8.62771 12.3723 8.82239 12.6173 8.92388C12.8011 9 13.0341 9 13.5 9C13.9659 9 14.1989 9 14.3827 8.92388C14.6277 8.82239 14.8224 8.62771 14.9239 8.38268C15 8.19891 15 7.96594 15 7.5V7Z',
  d4: 'M6 12L21 12',
  d5: 'M5 3.16746L4.61888 2M4.02867 5.56746L3 6',
  d6: 'M21 12C21 17.49 19.5 22 13.5 22C7.49993 22 6 17.49 6 12H21Z',
  d7: 'M13.6468 4.875H13.625H13.6032H13.6032C13.3889 4.87499 13.1921 4.87498 13.0268 4.88626C12.8491 4.89838 12.6538 4.92599 12.4553 5.00821C12.0265 5.18583 11.6858 5.52651 11.5082 5.95531C11.426 6.15381 11.3984 6.34915 11.3863 6.52679C11.375 6.69212 11.375 6.88896 11.375 7.10324V7.64676C11.375 7.86104 11.375 8.05789 11.3863 8.22321C11.3984 8.40085 11.426 8.59619 11.5082 8.7947C11.6858 9.2235 12.0265 9.56418 12.4553 9.74179C12.6538 9.82401 12.8491 9.85163 13.0268 9.86375C13.1921 9.87503 13.389 9.87502 13.6032 9.875H13.6468C13.861 9.87502 14.0579 9.87503 14.2232 9.86375C14.4009 9.85163 14.5962 9.82401 14.7947 9.74179C15.2235 9.56418 15.5642 9.2235 15.7418 8.7947C15.824 8.59619 15.8516 8.40085 15.8637 8.22321C15.875 8.0579 15.875 7.86106 15.875 7.6468V7.64676V7.625V7.125V7.10325V7.1032C15.875 6.88894 15.875 6.69211 15.8637 6.52679C15.8516 6.34915 15.824 6.15381 15.7418 5.95531C15.5642 5.52651 15.2235 5.18583 14.7947 5.00821C14.5962 4.92599 14.4009 4.89838 14.2232 4.88626C14.0579 4.87498 13.8611 4.87499 13.6468 4.875H13.6468Z',
  d8: 'M13.625 1.375C10.4244 1.375 8.26901 2.61358 6.97663 4.71154C5.73876 6.72103 5.375 9.39061 5.375 12.125C5.375 14.8594 5.73876 17.529 6.97663 19.5385C8.26901 21.6364 10.4244 22.875 13.625 22.875C16.8255 22.875 18.9809 21.6364 20.2733 19.5385C21.5112 17.529 21.875 14.8594 21.875 12.125C21.875 9.39061 21.5112 6.72103 20.2733 4.71155C18.9809 2.61359 16.8255 1.375 13.625 1.375ZM7.35179 10.7582C7.33597 11.0443 7.32806 11.1874 7.41682 11.2812C7.50559 11.375 7.65154 11.375 7.94344 11.375H12.0246C12.3075 11.375 12.4489 11.375 12.5368 11.2871C12.6246 11.1993 12.6246 11.0579 12.6246 10.775V9.12501C12.6246 8.57272 13.0723 8.12501 13.6246 8.12501C14.1769 8.12501 14.6246 8.57272 14.6246 9.12501V10.775C14.6246 11.0579 14.6246 11.1993 14.7125 11.2871C14.8004 11.375 14.9418 11.375 15.2246 11.375H19.3058C19.5977 11.375 19.7437 11.375 19.8324 11.2812C19.9212 11.1874 19.9133 11.0443 19.8974 10.7582C19.785 8.72498 19.4005 7.00346 18.6233 5.7418C17.9404 4.63325 16.9096 3.80752 15.2855 3.48184C14.9914 3.42286 14.8443 3.39337 14.7345 3.48339C14.6246 3.57341 14.6246 3.73205 14.6246 4.04934V5.62501C14.6246 6.17729 14.1769 6.62501 13.6246 6.62501C13.0723 6.62501 12.6246 6.17729 12.6246 5.62501V4.04933C12.6246 3.73204 12.6246 3.5734 12.5148 3.48338C12.4049 3.39336 12.2578 3.42285 11.9637 3.48182C10.3396 3.80749 9.30876 4.63323 8.62587 5.74179C7.84868 7.00344 7.46422 8.72496 7.35179 10.7582Z',
  d9: 'M4.4338 1.17464C4.95881 1.00325 5.52337 1.28992 5.69476 1.81493L6.07589 2.98239C6.24728 3.5074 5.96061 4.07196 5.4356 4.24335C4.91058 4.41475 4.34603 4.12808 4.17463 3.60307L3.79351 2.43561C3.62211 1.91059 3.90878 1.34604 4.4338 1.17464ZM5.07576 5.30511C5.28983 5.81422 5.05066 6.40048 4.54155 6.61455L3.51287 7.04709C3.00376 7.26117 2.41751 7.02199 2.20344 6.51288C1.98936 6.00378 2.22854 5.41752 2.73765 5.20345L3.76632 4.7709C4.27543 4.55683 4.86168 4.79601 5.07576 5.30511Z',
  d10: 'M5.5 3.5L4.61888 2M5 5.5L3 6',
  d11: 'M15 5.5H12V9H15V5.5Z',
  d12: 'M6 12H21',
  d13: 'M4.97268 1.25L5.8538 2.75L4.12932 3.76299L3.24819 2.26299L4.97268 1.25ZM2.24902 4.78635L4.24902 4.28635L4.73409 6.22664L2.73409 6.72664L2.24902 4.78635Z',
  d14: 'M6.85163 4.58654C8.14401 2.48858 10.2994 1.25 13.5 1.25C16.7005 1.25 18.8559 2.48859 20.1483 4.58655C21.3862 6.59603 21.75 9.26561 21.75 12C21.75 14.7344 21.3862 17.404 20.1483 19.4135C18.8559 21.5114 16.7005 22.75 13.5 22.75C10.2994 22.75 8.14401 21.5114 6.85163 19.4135C5.61376 17.404 5.25 14.7344 5.25 12C5.25 9.26561 5.61376 6.59603 6.85163 4.58654ZM8.50029 5.61667C7.67678 6.95351 7.29421 8.80667 7.20898 10.9999H12.499V9.49989H11.999C11.5848 9.49989 11.249 9.1641 11.249 8.74989V5.74989C11.249 5.33567 11.5848 4.99989 11.999 4.99989H12.499V3.25586C10.4866 3.47338 9.27156 4.36464 8.50029 5.61667ZM19.7891 10.9999C19.7039 8.80669 19.3213 6.95353 18.4978 5.61668C17.7265 4.36466 16.5114 3.4734 14.499 3.25587V4.99989H14.999C15.4133 4.99989 15.749 5.33567 15.749 5.74989V8.74989C15.749 9.1641 15.4133 9.49989 14.999 9.49989H14.499V10.9999H19.7891Z',
} as const;

export const IconMouseLeftClick06StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-06-stroke-rounded IconMouseLeftClick06StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick06DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-06-duotone-rounded IconMouseLeftClick06DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick06TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-06-twotone-rounded IconMouseLeftClick06TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick06SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-06-solid-rounded IconMouseLeftClick06SolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick06BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-06-bulk-rounded IconMouseLeftClick06BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick06StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-06-stroke-sharp IconMouseLeftClick06StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick06SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-06-solid-sharp IconMouseLeftClick06SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMouseLeftClick06: TheIconSelfPack = {
  name: 'MouseLeftClick06',
  StrokeRounded: IconMouseLeftClick06StrokeRounded,
  DuotoneRounded: IconMouseLeftClick06DuotoneRounded,
  TwotoneRounded: IconMouseLeftClick06TwotoneRounded,
  SolidRounded: IconMouseLeftClick06SolidRounded,
  BulkRounded: IconMouseLeftClick06BulkRounded,
  StrokeSharp: IconMouseLeftClick06StrokeSharp,
  SolidSharp: IconMouseLeftClick06SolidSharp,
};