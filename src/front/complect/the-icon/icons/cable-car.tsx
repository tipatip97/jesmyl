import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.41268 11.6239C4.14236 12.8529 4 14.1289 4 15.4375C4 16.3375 4.06733 17.2219 4.1973 18.0863C4.44397 19.7269 4.56731 20.5471 5.41113 21.2736C6.25496 22 7.27731 22 9.322 22H14.678C16.7227 22 17.745 22 18.5889 21.2736C19.4327 20.5471 19.556 19.7269 19.8027 18.0863C19.9327 17.2219 20 16.3375 20 15.4375C20 14.1289 19.8576 12.8529 19.5873 11.6239C19.2501 10.0905 19.0814 9.32383 18.2581 8.66191C17.4348 8 16.4673 8 14.5325 8H9.46753C7.53265 8 6.56522 8 5.7419 8.66191C4.91858 9.32383 4.74994 10.0905 4.41268 11.6239Z',
  d2: 'M4 2H14M20 2H14M14 2L12 5.5M9 5.5H15',
  d3: 'M4.5 16H19.5',
  d4: 'M12 9V16',
  d5: 'M14.678 21.9996H9.32197C7.27727 21.9996 6.25493 21.9996 5.4111 21.2732C4.56727 20.5467 4.24667 17.6405 4 16H20C19.7533 17.6405 19.4327 20.5467 18.5888 21.2732C17.745 21.9996 16.7227 21.9996 14.678 21.9996Z',
  d6: 'M4.5 16H19.5M12 9V16',
  d7: 'M9.47557 7.34766C8.58818 7.34761 7.82432 7.34757 7.18577 7.43763C6.49007 7.53575 5.87664 7.74738 5.30657 8.2057C4.23628 9.06616 4.003 10.1316 3.70877 11.4753L3.67391 11.6343C3.39612 12.8973 3.25 14.2078 3.25 15.5508C3.25 16.4743 3.3191 17.3825 3.45262 18.2706L3.47819 18.4414C3.6925 19.8764 3.86287 21.0172 4.95986 21.9615C5.54377 22.4642 6.18445 22.6969 6.91582 22.8046C7.58646 22.9033 8.39284 22.9033 9.33077 22.9032H14.6692C15.6071 22.9033 16.4135 22.9033 17.0842 22.8046C17.8156 22.6969 18.4562 22.4642 19.0401 21.9615C20.1371 21.0172 20.3075 19.8764 20.5218 18.4414L20.5474 18.2706C20.6809 17.3825 20.75 16.4743 20.75 15.5508C20.75 14.2078 20.6039 12.8973 20.3261 11.6343L20.2912 11.4753C19.997 10.1316 19.7637 9.06616 18.6934 8.2057C18.1234 7.74738 17.5099 7.53575 16.8142 7.43763C16.1757 7.34757 15.4118 7.34761 14.5244 7.34766H9.47557ZM6.52452 9.72101C6.75489 9.5358 7.01197 9.42566 7.45695 9.36291C7.94418 9.29419 8.57036 9.29199 9.5375 9.29199H10.4C10.6828 9.29199 10.8243 9.29199 10.9121 9.37986C11 9.46773 11 9.60915 11 9.89199V14.7475C11 15.0304 11 15.1718 10.9121 15.2597C10.8243 15.3475 10.6828 15.3475 10.4 15.3475H5.80272C5.51464 15.3475 5.3706 15.3475 5.28192 15.2544C5.19325 15.1612 5.20015 15.021 5.21396 14.7404C5.25916 13.822 5.3808 12.9238 5.57258 12.0519C5.91626 10.4893 6.03578 10.1139 6.52452 9.72101ZM13 14.7475C13 15.0304 13 15.1718 13.0879 15.2597C13.1757 15.3475 13.3172 15.3475 13.6 15.3475H18.1965C18.4846 15.3475 18.6286 15.3475 18.7173 15.2544C18.806 15.1612 18.7991 15.021 18.7853 14.7404C18.7401 13.822 18.6184 12.9238 18.4267 12.0519C18.083 10.4893 17.9635 10.1139 17.4747 9.72101C17.2443 9.5358 16.9873 9.42566 16.5423 9.36291C16.0551 9.29419 15.4289 9.29199 14.4617 9.29199H13.6C13.3172 9.29199 13.1757 9.29199 13.0879 9.37986C13 9.46773 13 9.60915 13 9.89199V14.7475Z',
  d8: 'M3 2.09766C3 1.54537 3.44772 1.09766 4 1.09766H20C20.5523 1.09766 21 1.54537 21 2.09766C21 2.64994 20.5523 3.09766 20 3.09766H14.5803L13.7232 4.59766H15C15.5523 4.59766 16 5.04537 16 5.59766C16 6.14994 15.5523 6.59766 15 6.59766H12.0176C12.0052 6.59788 11.9929 6.59788 11.9806 6.59766H9C8.44772 6.59766 8 6.14994 8 5.59766C8 5.04537 8.44772 4.59766 9 4.59766H11.4197L12.2768 3.09766H4C3.44772 3.09766 3 2.64994 3 2.09766Z',
  d9: 'M9.47557 7.34766C8.58818 7.34761 7.82432 7.34757 7.18577 7.43763C6.49007 7.53575 5.87664 7.74738 5.30657 8.2057C4.23723 9.0654 3.95623 10.3468 3.67691 11.6206L3.67391 11.6343C3.39612 12.8973 3.25 14.2078 3.25 15.5508C3.25 16.4743 3.3191 17.3825 3.45262 18.2706L3.45683 18.2987C3.65921 19.651 3.86377 21.0179 4.95986 21.9615C5.54377 22.4642 6.18445 22.6969 6.91582 22.8046C7.58646 22.9033 8.39284 22.9033 9.33077 22.9032H14.6692C15.6071 22.9033 16.4135 22.9033 17.0842 22.8046C17.8156 22.6969 18.4562 22.4642 19.0401 21.9615C20.1362 21.0179 20.3408 19.651 20.5432 18.2987L20.5474 18.2706C20.6809 17.3825 20.75 16.4743 20.75 15.5508C20.75 14.2078 20.6039 12.8973 20.3261 11.6343L20.3231 11.6206C20.0438 10.3468 19.7628 9.0654 18.6934 8.2057C18.1234 7.74738 17.5099 7.53575 16.8142 7.43763C16.1757 7.34757 15.4118 7.34761 14.5244 7.34766H9.47557Z',
  d10: 'M6.52387 9.72199C6.75424 9.53678 7.01132 9.42664 7.4563 9.36388C7.94353 9.29516 8.56971 9.29297 9.53685 9.29297H10.3993C10.6822 9.29297 10.8236 9.29297 10.9115 9.38084C10.9993 9.4687 10.9993 9.61013 10.9993 9.89297V14.7485C10.9993 15.0314 10.9993 15.1728 10.9115 15.2607C10.8236 15.3485 10.6822 15.3485 10.3993 15.3485H5.80207C5.51399 15.3485 5.36995 15.3485 5.28127 15.2554C5.1926 15.1622 5.1995 15.022 5.21331 14.7414C5.25851 13.8229 5.38015 12.9248 5.57193 12.0529C5.91561 10.4903 6.03513 10.1149 6.52387 9.72199ZM12.9993 14.7485C12.9993 15.0314 12.9993 15.1728 13.0872 15.2607C13.1751 15.3485 13.3165 15.3485 13.5993 15.3485H18.1959C18.484 15.3485 18.628 15.3485 18.7167 15.2554C18.8053 15.1622 18.7984 15.022 18.7846 14.7414C18.7394 13.8229 18.6178 12.9248 18.426 12.0529C18.0823 10.4903 17.9628 10.1149 17.4741 9.72199C17.2437 9.53678 16.9866 9.42664 16.5416 9.36388C16.0544 9.29516 15.4282 9.29297 14.4611 9.29297H13.5993C13.3165 9.29297 13.1751 9.29297 13.0872 9.38084C12.9993 9.4687 12.9993 9.61013 12.9993 9.89297V14.7485Z',
  d11: 'M14.5806 3.09766L13.7234 4.59766H11.4199L12.2771 3.09766H14.5806Z',
  d12: 'M3 2.09766C3 1.54537 3.44772 1.09766 4 1.09766H20C20.5523 1.09766 21 1.54537 21 2.09766C21 2.64994 20.5523 3.09766 20 3.09766H4C3.44772 3.09766 3 2.64994 3 2.09766Z',
  d13: 'M15 4.59766C15.5523 4.59766 16 5.04537 16 5.59766C16 6.14994 15.5523 6.59766 15 6.59766H9C8.44772 6.59766 8 6.14994 8 5.59766C8 5.04537 8.44772 4.59766 9 4.59766H15Z',
  d14: 'M6 8H18L20 16L19 22H5L4 16L6 8Z',
  d15: 'M12 8V16',
  d16: 'M12.2768 3H4V1H20V3H14.5803L13.7232 4.5H15V6.5H9V4.5H11.4197L12.2768 3Z',
  d17: 'M5.22347 8.23379C5.33167 7.80254 5.72055 7.5 6.16667 7.5H17.8333C18.2795 7.5 18.6683 7.80254 18.7765 8.23379L20.721 15.9838C20.7533 16.1127 20.7587 16.2469 20.7368 16.378L19.7646 22.1905C19.6864 22.6576 19.2808 23 18.8056 23H5.19444C4.71918 23 4.31358 22.6576 4.23545 22.1905L3.26323 16.378C3.2413 16.2469 3.24668 16.1127 3.27903 15.9838L5.22347 8.23379ZM6.92708 9.4375L5.46875 15.25H11.0013V9.4375H6.92708ZM17.0756 9.4375L18.5339 15.25H13.0013V9.4375H17.0756Z',
} as const;

export const IconCableCarStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cable-car-stroke-rounded IconCableCarStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCableCarDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cable-car-duotone-rounded IconCableCarDuotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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

export const IconCableCarTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cable-car-twotone-rounded IconCableCarTwotoneRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCableCarSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cable-car-solid-rounded IconCableCarSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconCableCarBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cable-car-bulk-rounded IconCableCarBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCableCarStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cable-car-stroke-sharp IconCableCarStrokeSharp"
    >
      <path 
        d={d.d14} 
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
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCableCarSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cable-car-solid-sharp IconCableCarSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfCableCar: TheIconSelfPack = {
  name: 'CableCar',
  StrokeRounded: IconCableCarStrokeRounded,
  DuotoneRounded: IconCableCarDuotoneRounded,
  TwotoneRounded: IconCableCarTwotoneRounded,
  SolidRounded: IconCableCarSolidRounded,
  BulkRounded: IconCableCarBulkRounded,
  StrokeSharp: IconCableCarStrokeSharp,
  SolidSharp: IconCableCarSolidSharp,
};