import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 3C16 2.5286 16 2.29289 15.8536 2.14645C15.7071 2 15.4714 2 15 2H14C13.5286 2 13.2929 2 13.1464 2.14645C13 2.29289 13 2.5286 13 3V4C13 4.4714 13 4.70711 13.1464 4.85355C13.2929 5 13.5286 5 14 5H15C15.4714 5 15.7071 5 15.8536 4.85355C16 4.70711 16 4.4714 16 4V3Z',
  d2: 'M5 3C5 2.5286 5 2.29289 4.85355 2.14645C4.70711 2 4.4714 2 4 2H3C2.5286 2 2.29289 2 2.14645 2.14645C2 2.29289 2 2.5286 2 3V4C2 4.4714 2 4.70711 2.14645 4.85355C2.29289 5 2.5286 5 3 5H4C4.4714 5 4.70711 5 4.85355 4.85355C5 4.70711 5 4.4714 5 4V3Z',
  d3: 'M5 14C5 13.5286 5 13.2929 4.85355 13.1464C4.70711 13 4.4714 13 4 13H3C2.5286 13 2.29289 13 2.14645 13.1464C2 13.2929 2 13.5286 2 14V15C2 15.4714 2 15.7071 2.14645 15.8536C2.29289 16 2.5286 16 3 16H4C4.4714 16 4.70711 16 4.85355 15.8536C5 15.7071 5 15.4714 5 15V14Z',
  d4: 'M11.5399 20.6835C9.23361 20.8429 6.94858 10.0873 8.51764 8.51798C10.0867 6.94869 20.8431 9.23214 20.6837 11.5384C20.5739 13.0488 18.0175 13.6462 18.0921 14.9885C18.114 15.3817 18.6106 15.74 19.6038 16.4566C20.294 16.9546 20.9978 17.4382 21.6762 17.9521C21.947 18.1572 22.0538 18.5021 21.9744 18.8272C21.5925 20.3888 20.3957 21.5909 18.8277 21.9743C18.5026 22.0539 18.1577 21.9469 17.9527 21.6761C17.4389 20.9976 16.9553 20.2938 16.4574 19.6035C15.7409 18.6101 15.3826 18.1134 14.9895 18.0915C13.6474 18.0169 13.05 20.5737 11.5399 20.6835Z',
  d5: 'M3.5 13V5M13 3.5H5',
  d6: 'M5 3.5H13M3.5 13V5M15 5H14C13.5286 5 13.2929 5 13.1464 4.85355C13 4.70711 13 4.4714 13 4V3C13 2.5286 13 2.29289 13.1464 2.14645C13.2929 2 13.5286 2 14 2H15C15.4714 2 15.7071 2 15.8536 2.14645C16 2.29289 16 2.5286 16 3V4C16 4.4714 16 4.70711 15.8536 4.85355C15.7071 5 15.4714 5 15 5ZM4 5H3C2.5286 5 2.29289 5 2.14645 4.85355C2 4.70711 2 4.4714 2 4V3C2 2.5286 2 2.29289 2.14645 2.14645C2.29289 2 2.5286 2 3 2H4C4.4714 2 4.70711 2 4.85355 2.14645C5 2.29289 5 2.5286 5 3V4C5 4.4714 5 4.70711 4.85355 4.85355C4.70711 5 4.4714 5 4 5ZM4 16H3C2.5286 16 2.29289 16 2.14645 15.8536C2 15.7071 2 15.4714 2 15V14C2 13.5286 2 13.2929 2.14645 13.1464C2.29289 13 2.5286 13 3 13H4C4.4714 13 4.70711 13 4.85355 13.1464C5 13.2929 5 13.5286 5 14V15C5 15.4714 5 15.7071 4.85355 15.8536C4.70711 16 4.4714 16 4 16Z',
  d7: 'M13.9656 1.25001H15.0345C15.2396 1.24993 15.4614 1.24984 15.6486 1.27501C15.8679 1.3045 16.1481 1.38033 16.3839 1.61613C16.6197 1.85193 16.6955 2.13212 16.725 2.35145C16.7502 2.53866 16.7501 2.76046 16.75 2.96557V4.03446C16.7501 4.23958 16.7502 4.46137 16.725 4.64859C16.6955 4.86791 16.6197 5.1481 16.3839 5.3839C16.1481 5.6197 15.8679 5.69554 15.6486 5.72502C15.4614 5.7502 15.2396 5.75011 15.0345 5.75003H13.9656C13.7605 5.75011 13.5387 5.7502 13.3514 5.72502C13.1321 5.69554 12.8519 5.6197 12.6161 5.3839C12.3803 5.1481 12.3045 4.86791 12.275 4.64859C12.2498 4.46137 12.2499 4.23958 12.25 4.03446V2.96557L12.25 2.96557C12.2499 2.76046 12.2498 2.53866 12.275 2.35145C12.3045 2.13212 12.3803 1.85193 12.6161 1.61613C12.8519 1.38033 13.1321 1.3045 13.3514 1.27501C13.5387 1.24984 13.7605 1.24993 13.9656 1.25001L13.9656 1.25001Z',
  d8: 'M2.96557 1.25001H4.03446C4.23958 1.24993 4.46137 1.24984 4.64859 1.27501C4.86791 1.3045 5.1481 1.38033 5.3839 1.61613C5.6197 1.85193 5.69554 2.13212 5.72502 2.35145C5.7502 2.53866 5.75011 2.76046 5.75003 2.96557V4.03446C5.75011 4.23958 5.7502 4.46137 5.72502 4.64859C5.69554 4.86791 5.6197 5.1481 5.3839 5.3839C5.1481 5.6197 4.86791 5.69554 4.64859 5.72502C4.46137 5.7502 4.23958 5.75011 4.03446 5.75003H2.96557C2.76046 5.75011 2.53866 5.7502 2.35145 5.72502C2.13212 5.69554 1.85193 5.6197 1.61613 5.3839C1.38033 5.1481 1.3045 4.86791 1.27501 4.64859C1.24984 4.46137 1.24993 4.23958 1.25001 4.03446V2.96557L1.25001 2.96557C1.24993 2.76046 1.24984 2.53866 1.27501 2.35145C1.3045 2.13212 1.38033 1.85193 1.61613 1.61613C1.85193 1.38033 2.13212 1.3045 2.35145 1.27501C2.53866 1.24984 2.76046 1.24993 2.96557 1.25001L2.96557 1.25001Z',
  d9: 'M2.96557 12.25H4.03446C4.23958 12.2499 4.46137 12.2498 4.64859 12.275C4.86791 12.3045 5.1481 12.3803 5.3839 12.6161C5.6197 12.8519 5.69554 13.1321 5.72502 13.3514C5.7502 13.5387 5.75011 13.7605 5.75003 13.9656V15.0345C5.75011 15.2396 5.7502 15.4614 5.72502 15.6486C5.69554 15.8679 5.6197 16.1481 5.3839 16.3839C5.1481 16.6197 4.86791 16.6955 4.64859 16.725C4.46137 16.7502 4.23958 16.7501 4.03446 16.75H2.96557C2.76046 16.7501 2.53866 16.7502 2.35145 16.725C2.13212 16.6955 1.85193 16.6197 1.61613 16.3839C1.38033 16.1481 1.3045 15.8679 1.27501 15.6486C1.24984 15.4614 1.24993 15.2396 1.25001 15.0345V13.9656L1.25001 13.9656C1.24993 13.7605 1.24984 13.5387 1.27501 13.3514C1.3045 13.1321 1.38033 12.8519 1.61613 12.6161C1.85193 12.3803 2.13212 12.3045 2.35145 12.275C2.53866 12.2498 2.76046 12.2499 2.96557 12.25L2.96557 12.25Z',
  d10: 'M20.7996 10.15C21.1519 10.5 21.4734 10.9891 21.4319 11.5901L21.4317 11.5927C21.3883 12.1906 21.102 12.6601 20.7857 13.0206C20.4837 13.3647 20.1074 13.6605 19.8003 13.9019L19.8003 13.902L19.7823 13.9161C19.4443 14.1819 19.1923 14.3828 19.0187 14.5847C18.8916 14.7324 18.8523 14.8288 18.843 14.8965C18.8643 14.9237 18.9073 14.9727 18.9883 15.0464C19.2003 15.2392 20.2032 15.959 20.7155 16.3286L20.7156 16.3287C21.1855 16.6623 21.667 17.0042 22.129 17.3542C22.6577 17.7547 22.8474 18.4143 22.7029 19.0054C22.2548 20.8379 20.8463 22.2527 19.0059 22.7029C18.4147 22.8475 17.7551 22.6575 17.3548 22.1289C17.0048 21.6667 16.6629 21.1851 16.3293 20.7152C15.9598 20.2029 15.24 19.1997 15.0472 18.9877C14.9736 18.9067 14.9247 18.8638 14.8975 18.8424C14.8298 18.8517 14.7335 18.8911 14.5859 19.0181C14.384 19.1918 14.1831 19.4437 13.9174 19.7818L13.9032 19.7998C13.6619 20.107 13.366 20.4834 13.022 20.7853C12.6616 21.1017 12.1921 21.388 11.5942 21.4315L11.5916 21.4317C10.9906 21.4732 10.5015 21.1518 10.1515 20.7995C9.79371 20.4395 9.47968 19.9494 9.20557 19.4106C8.654 18.3264 8.18423 16.8839 7.84484 15.4182C7.5046 13.9487 7.28494 12.4103 7.25382 11.1214C7.2383 10.4785 7.26899 9.87351 7.36525 9.3597C7.45651 8.87257 7.62762 8.34739 7.98728 7.98769C8.34694 7.62798 8.87209 7.4568 9.35922 7.36546C9.87303 7.26912 10.478 7.23835 11.1209 7.25378C12.4099 7.2847 13.9483 7.50413 15.4179 7.84416C16.8837 8.18333 18.3263 8.65289 19.4106 9.20429C19.9495 9.47832 20.4395 9.79228 20.7996 10.15Z',
  d11: 'M14 3.5C14 2.94772 13.5523 2.5 13 2.5H5C4.44771 2.5 4 2.94772 4 3.5C4 4.05228 4.44771 4.5 5 4.5H13C13.5523 4.5 14 4.05228 14 3.5ZM3.5 4C2.94771 4 2.5 4.44772 2.5 5V13C2.5 13.5523 2.94771 14 3.5 14C4.05229 14 4.5 13.5523 4.5 13V5C4.5 4.44772 4.05229 4 3.5 4Z',
  d12: 'M16 2H13V5H16V2Z',
  d13: 'M5 2H2V5H5V2Z',
  d14: 'M5 13H2V16H5V13Z',
  d15: 'M21.9998 10.7999L8 8L10.8 21.9995L15.0001 17.7997L19.2004 22L22 19.1997L17.7999 14.9996L21.9998 10.7999Z',
  d16: 'M12.25 1.25H16.75V5.75H12.25V1.25Z',
  d17: 'M1.25 1.25H5.75V5.75H1.25V1.25Z',
  d18: 'M1.25 12.25H5.75V16.75H1.25V12.25Z',
  d19: 'M7.46968 7.46968C7.647 7.29237 7.9012 7.2154 8.1471 7.26458L22.1469 10.0645C22.4182 10.1188 22.6375 10.3179 22.7177 10.5826C22.7978 10.8474 22.7257 11.1347 22.5302 11.3303L18.8606 14.9996L22.5303 18.6693C22.8232 18.9622 22.8232 19.437 22.5304 19.7299L19.7308 22.5303C19.5902 22.671 19.3994 22.75 19.2005 22.75C19.0016 22.75 18.8108 22.671 18.6701 22.5303L15.0001 18.8603L11.3303 22.5298C11.1347 22.7254 10.8474 22.7974 10.5827 22.7173C10.3179 22.6371 10.1188 22.4178 10.0646 22.1466L7.26458 8.1471C7.2154 7.90121 7.29236 7.647 7.46968 7.46968Z',
  d20: 'M13 2.5H5V4.5H13V2.5ZM2.5 5V13H4.5V5H2.5Z',
} as const;

export const IconCursorEdit01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-edit-01-stroke-rounded IconCursorEdit01StrokeRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCursorEdit01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-edit-01-duotone-rounded IconCursorEdit01DuotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCursorEdit01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-edit-01-twotone-rounded IconCursorEdit01TwotoneRounded"
    >
      <path 
        d={d.d4} 
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

export const IconCursorEdit01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-edit-01-solid-rounded IconCursorEdit01SolidRounded"
    >
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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

export const IconCursorEdit01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-edit-01-bulk-rounded IconCursorEdit01BulkRounded"
    >
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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
        opacity="var(--icon-opacity)" 
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

export const IconCursorEdit01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-edit-01-stroke-sharp IconCursorEdit01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
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

export const IconCursorEdit01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-edit-01-solid-sharp IconCursorEdit01SolidSharp"
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

export const iconPackOfCursorEdit01: TheIconSelfPack = {
  name: 'CursorEdit01',
  StrokeRounded: IconCursorEdit01StrokeRounded,
  DuotoneRounded: IconCursorEdit01DuotoneRounded,
  TwotoneRounded: IconCursorEdit01TwotoneRounded,
  SolidRounded: IconCursorEdit01SolidRounded,
  BulkRounded: IconCursorEdit01BulkRounded,
  StrokeSharp: IconCursorEdit01StrokeSharp,
  SolidSharp: IconCursorEdit01SolidSharp,
};