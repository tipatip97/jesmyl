import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 3C16 2.5286 16 2.29289 15.8536 2.14645C15.7071 2 15.4714 2 15 2H14C13.5286 2 13.2929 2 13.1464 2.14645C13 2.29289 13 2.5286 13 3V4C13 4.4714 13 4.70711 13.1464 4.85355C13.2929 5 13.5286 5 14 5H15C15.4714 5 15.7071 5 15.8536 4.85355C16 4.70711 16 4.4714 16 4V3Z',
  d2: 'M8.33325 8.40742C9.93815 6.67911 22.01 10.9129 22 12.4586C21.9887 14.2115 17.2856 14.7507 15.982 15.1165C15.1981 15.3364 14.9882 15.5618 14.8074 16.3838C13.9888 20.1067 13.5778 21.9583 12.6411 21.9997C11.148 22.0657 6.76701 10.0941 8.33325 8.40742Z',
  d3: 'M5 3C5 2.5286 5 2.29289 4.85355 2.14645C4.70711 2 4.4714 2 4 2H3C2.5286 2 2.29289 2 2.14645 2.14645C2 2.29289 2 2.5286 2 3V4C2 4.4714 2 4.70711 2.14645 4.85355C2.29289 5 2.5286 5 3 5H4C4.4714 5 4.70711 5 4.85355 4.85355C5 4.70711 5 4.4714 5 4V3Z',
  d4: 'M5 14C5 13.5286 5 13.2929 4.85355 13.1464C4.70711 13 4.4714 13 4 13H3C2.5286 13 2.29289 13 2.14645 13.1464C2 13.2929 2 13.5286 2 14V15C2 15.4714 2 15.7071 2.14645 15.8536C2.29289 16 2.5286 16 3 16H4C4.4714 16 4.70711 16 4.85355 15.8536C5 15.7071 5 15.4714 5 15V14Z',
  d5: 'M3.5 13V5M13 3.5H5',
  d6: 'M5 3.5H13M3.5 13V5M15 5H14C13.5286 5 13.2929 5 13.1464 4.85355C13 4.70711 13 4.4714 13 4V3C13 2.5286 13 2.29289 13.1464 2.14645C13.2929 2 13.5286 2 14 2H15C15.4714 2 15.7071 2 15.8536 2.14645C16 2.29289 16 2.5286 16 3V4C16 4.4714 16 4.70711 15.8536 4.85355C15.7071 5 15.4714 5 15 5ZM4 5H3C2.5286 5 2.29289 5 2.14645 4.85355C2 4.70711 2 4.4714 2 4V3C2 2.5286 2 2.29289 2.14645 2.14645C2.29289 2 2.5286 2 3 2H4C4.4714 2 4.70711 2 4.85355 2.14645C5 2.29289 5 2.5286 5 3V4C5 4.4714 5 4.70711 4.85355 4.85355C4.70711 5 4.4714 5 4 5ZM4 16H3C2.5286 16 2.29289 16 2.14645 15.8536C2 15.7071 2 15.4714 2 15V14C2 13.5286 2 13.2929 2.14645 13.1464C2.29289 13 2.5286 13 3 13H4C4.4714 13 4.70711 13 4.85355 13.1464C5 13.2929 5 13.5286 5 14V15C5 15.4714 5 15.7071 4.85355 15.8536C4.70711 16 4.4714 16 4 16Z',
  d7: 'M13.9656 1.25001H15.0345C15.2396 1.24993 15.4614 1.24984 15.6486 1.27501C15.8679 1.3045 16.1481 1.38033 16.3839 1.61613C16.6197 1.85193 16.6955 2.13212 16.725 2.35145C16.7502 2.53866 16.7501 2.76046 16.75 2.96557V4.03446C16.7501 4.23958 16.7502 4.46137 16.725 4.64859C16.6955 4.86791 16.6197 5.1481 16.3839 5.3839C16.1481 5.6197 15.8679 5.69554 15.6486 5.72502C15.4614 5.7502 15.2396 5.75011 15.0345 5.75003H13.9656C13.7605 5.75011 13.5387 5.7502 13.3514 5.72502C13.1321 5.69554 12.8519 5.6197 12.6161 5.3839C12.3803 5.1481 12.3045 4.86791 12.275 4.64859C12.2498 4.46137 12.2499 4.23958 12.25 4.03446V2.96557L12.25 2.96557C12.2499 2.76046 12.2498 2.53866 12.275 2.35145C12.3045 2.13212 12.3803 1.85193 12.6161 1.61613C12.8519 1.38033 13.1321 1.3045 13.3514 1.27501C13.5387 1.24984 13.7605 1.24993 13.9656 1.25001L13.9656 1.25001Z',
  d8: 'M22.4617 11.684C22.5952 11.8587 22.7521 12.1276 22.75 12.4635C22.7447 13.279 22.1884 13.8366 21.6488 14.1896C21.0945 14.5521 20.3823 14.82 19.6899 15.0264C18.9876 15.2359 18.2511 15.3976 17.6229 15.5278C17.1851 15.617 16.4076 15.776 16.1846 15.8386C15.8169 15.9417 15.7425 16.0084 15.7184 16.0344C15.6908 16.0641 15.626 16.1533 15.5399 16.5449L15.5366 16.56L15.5366 16.5601C15.1334 18.3937 14.8165 19.8348 14.4775 20.817C14.3081 21.3077 14.1117 21.7512 13.8537 22.086C13.5817 22.4391 13.1947 22.726 12.6742 22.749C12.3314 22.7641 12.0561 22.6077 11.8822 22.4786C11.6969 22.3409 11.5282 22.1607 11.3775 21.9725C11.0742 21.5936 10.7608 21.0763 10.4533 20.4887C9.83421 19.3056 9.18128 17.7248 8.62979 16.1022C8.0786 14.4805 7.61746 12.784 7.39473 11.3686C7.28374 10.6634 7.22726 9.99955 7.25857 9.43676C7.28777 8.91206 7.39996 8.31025 7.78365 7.89706C8.17945 7.47083 8.78229 7.32616 9.30972 7.27533C9.87267 7.22107 10.5384 7.25764 11.2447 7.35027C12.6625 7.53625 14.3685 7.9655 16.002 8.49131C17.6369 9.01757 19.234 9.6518 20.4343 10.2619C21.0307 10.565 21.5565 10.8759 21.944 11.1795C22.1367 11.3304 22.3202 11.4989 22.4617 11.684Z',
  d9: 'M2.96557 1.25001L3.00002 1.25002H4.00002L4.03446 1.25001C4.23958 1.24993 4.46137 1.24984 4.64859 1.27501C4.86791 1.3045 5.1481 1.38033 5.3839 1.61613C5.6197 1.85193 5.69554 2.13212 5.72502 2.35145C5.7502 2.53866 5.75011 2.76046 5.75003 2.96557V4.03446C5.75011 4.23958 5.7502 4.46137 5.72502 4.64859C5.69554 4.86791 5.6197 5.1481 5.3839 5.3839C5.1481 5.6197 4.86791 5.69554 4.64859 5.72502C4.46137 5.7502 4.23958 5.75011 4.03446 5.75003L4.00002 5.75002H3.00002L2.96557 5.75003C2.76046 5.75011 2.53866 5.7502 2.35145 5.72502C2.13212 5.69554 1.85193 5.6197 1.61613 5.3839C1.38033 5.1481 1.3045 4.86791 1.27501 4.64859C1.24984 4.46137 1.24993 4.23958 1.25001 4.03446V2.96557L1.25001 2.96557C1.24993 2.76046 1.24984 2.53866 1.27501 2.35145C1.3045 2.13212 1.38033 1.85193 1.61613 1.61613C1.85193 1.38033 2.13212 1.3045 2.35145 1.27501C2.53866 1.24984 2.76046 1.24993 2.96557 1.25001L2.96557 1.25001Z',
  d10: 'M2.96557 12.25L3.00002 12.25H4.00002L4.03446 12.25C4.23958 12.2499 4.46137 12.2498 4.64859 12.275C4.86791 12.3045 5.1481 12.3803 5.3839 12.6161C5.6197 12.8519 5.69554 13.1321 5.72502 13.3514C5.7502 13.5387 5.75011 13.7605 5.75003 13.9656V15.0345C5.75011 15.2396 5.7502 15.4614 5.72502 15.6486C5.69554 15.8679 5.6197 16.1481 5.3839 16.3839C5.1481 16.6197 4.86791 16.6955 4.64859 16.725C4.46137 16.7502 4.23958 16.7501 4.03446 16.75L4.00002 16.75H3.00002L2.96557 16.75C2.76046 16.7501 2.53866 16.7502 2.35145 16.725C2.13212 16.6955 1.85193 16.6197 1.61613 16.3839C1.38033 16.1481 1.3045 15.8679 1.27501 15.6486C1.24984 15.4614 1.24993 15.2396 1.25001 15.0345V13.9656L1.25001 13.9656C1.24993 13.7605 1.24984 13.5387 1.27501 13.3514C1.3045 13.1321 1.38033 12.8519 1.61613 12.6161C1.85193 12.3803 2.13212 12.3045 2.35145 12.275C2.53866 12.2498 2.76046 12.2499 2.96557 12.25L2.96557 12.25Z',
  d11: 'M14 3.5C14 2.94772 13.5523 2.5 13 2.5H5C4.44771 2.5 4 2.94772 4 3.5C4 4.05228 4.44771 4.5 5 4.5H13C13.5523 4.5 14 4.05228 14 3.5ZM3.5 4C2.94771 4 2.5 4.44772 2.5 5V13C2.5 13.5523 2.94771 14 3.5 14C4.05229 14 4.5 13.5523 4.5 13V5C4.5 4.44772 4.05229 4 3.5 4Z',
  d12: 'M22 12.6667L8 8L12.6667 22L15 15L22 12.6667Z',
  d13: 'M16 2H13V5H16V2Z',
  d14: 'M5 2H2V5H5V2Z',
  d15: 'M5 13H2V16H5V13Z',
  d16: 'M7.46969 7.46969C7.67056 7.26882 7.96769 7.19867 8.23719 7.28851L22.2372 11.9552C22.5434 12.0573 22.75 12.3439 22.75 12.6667C22.75 12.9895 22.5434 13.2761 22.2372 13.3782L15.5929 15.5929L13.3782 22.2372C13.2761 22.5434 12.9895 22.75 12.6667 22.75C12.3439 22.75 12.0573 22.5434 11.9552 22.2372L7.28851 8.23719C7.19867 7.96769 7.26882 7.67056 7.46969 7.46969Z',
  d17: 'M12.25 1.25H16.75V5.75H12.25V1.25Z',
  d18: 'M1.25 1.25H5.75V5.75H1.25V1.25Z',
  d19: 'M1.25 12.25H5.75V16.75H1.25V12.25Z',
  d20: 'M13 2.5H5V4.5H13V2.5ZM2.5 5V13H4.5V5H2.5Z',
} as const;

export const IconCursorEdit02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-edit-02-stroke-rounded IconCursorEdit02StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorEdit02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-edit-02-duotone-rounded IconCursorEdit02DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorEdit02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-edit-02-twotone-rounded IconCursorEdit02TwotoneRounded"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorEdit02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-edit-02-solid-rounded IconCursorEdit02SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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

export const IconCursorEdit02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-edit-02-bulk-rounded IconCursorEdit02BulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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

export const IconCursorEdit02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-edit-02-stroke-sharp IconCursorEdit02StrokeSharp"
    >
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorEdit02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-edit-02-solid-sharp IconCursorEdit02SolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCursorEdit02: TheIconSelfPack = {
  name: 'CursorEdit02',
  StrokeRounded: IconCursorEdit02StrokeRounded,
  DuotoneRounded: IconCursorEdit02DuotoneRounded,
  TwotoneRounded: IconCursorEdit02TwotoneRounded,
  SolidRounded: IconCursorEdit02SolidRounded,
  BulkRounded: IconCursorEdit02BulkRounded,
  StrokeSharp: IconCursorEdit02StrokeSharp,
  SolidSharp: IconCursorEdit02SolidSharp,
};