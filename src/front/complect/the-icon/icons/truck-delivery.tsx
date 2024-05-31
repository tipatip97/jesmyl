import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 17.9724C3.90328 17.9178 3.2191 17.7546 2.73223 17.2678C2.24536 16.7809 2.08222 16.0967 2.02755 15M9 18H15M19 17.9724C20.0967 17.9178 20.7809 17.7546 21.2678 17.2678C22 16.5355 22 15.357 22 13V11H17.3C16.5555 11 16.1832 11 15.882 10.9021C15.2731 10.7043 14.7957 10.2269 14.5979 9.61803C14.5 9.31677 14.5 8.94451 14.5 8.2C14.5 7.08323 14.5 6.52485 14.3532 6.07295C14.0564 5.15964 13.3404 4.44358 12.4271 4.14683C11.9752 4 11.4168 4 10.3 4H2',
  d2: 'M2 8H8',
  d3: 'M2 11H6',
  d4: 'M14.5 6H16.3212C17.7766 6 18.5042 6 19.0964 6.35371C19.6886 6.70742 20.0336 7.34811 20.7236 8.6295L22 11',
  d5: 'M22 13V11H17.3C16.5555 11 16.1832 11 15.882 10.9021C15.2731 10.7043 14.7957 10.2269 14.5979 9.61803C14.5 9.31677 14.5 8.94451 14.5 8.2C14.5 7.08323 14.5 6.52485 14.3532 6.07295C14.0564 5.15964 13.3404 4.44358 12.4271 4.14683C11.9752 4 11.4168 4 10.3 4H2L2.02755 15C2.08222 16.0967 2.24536 16.7809 2.73223 17.2678C3.2191 17.7546 3.90328 17.9178 5 17.9724C5.01474 16.8806 5.90463 16 7 16C8.10457 16 9 16.8954 9 18H15C15 16.8954 15.8954 16 17 16C18.0954 16 18.9851 16.8806 18.9998 17.9725C20.0965 17.9178 20.7809 17.7546 21.2678 17.2678C22 16.5355 22 15.357 22 13Z',
  d6: 'M1 8C1 7.44772 1.44772 7 2 7H8C8.55228 7 9 7.44772 9 8C9 8.55228 8.55228 9 8 9H2C1.44772 9 1 8.55228 1 8ZM1 11C1 10.4477 1.44772 10 2 10H6C6.55228 10 7 10.4477 7 11C7 11.5523 6.55228 12 6 12H2C1.44772 12 1 11.5523 1 11Z',
  d7: 'M10.4482 3.25003C11.4314 3.24965 12.103 3.24938 12.6706 3.43372C13.5142 3.70769 14.2234 4.26737 14.6863 5.00109L16.134 5.00109C16.8222 5.00106 17.4116 5.00104 17.9006 5.05039C18.4232 5.10314 18.912 5.21811 19.3785 5.49659C19.845 5.77507 20.178 6.15069 20.4723 6.58564C20.7476 6.99257 21.027 7.51122 21.3532 8.11683L22.6535 10.5304C22.7327 10.6774 22.7714 10.8354 22.7733 10.9916L22.7734 11.0049V13.0599C22.7735 14.1934 22.7735 15.1197 22.6751 15.851C22.5723 16.6154 22.3497 17.2782 21.8204 17.8072C21.6205 18.007 21.401 18.1634 21.1634 18.2863C21.0702 18.3345 21.0236 18.3586 20.9789 18.3602C20.8998 18.3632 20.8239 18.317 20.7902 18.2455C20.7712 18.205 20.7712 18.1398 20.7712 18.0093C20.7712 15.9369 19.0903 14.257 17.0168 14.257C14.9434 14.257 13.2625 15.9369 13.2625 18.0093C13.2625 18.0955 13.2654 18.181 13.2711 18.2658C13.2873 18.5048 13.2953 18.6242 13.2357 18.6878C13.176 18.7513 13.0656 18.7508 12.8449 18.7498L11.1734 18.7421C10.9552 18.7411 10.8461 18.7406 10.7871 18.6773C10.728 18.614 10.7358 18.4959 10.7514 18.2596C10.7569 18.1769 10.7596 18.0934 10.7596 18.0093C10.7596 15.9369 9.07875 14.257 7.00529 14.257C4.93184 14.257 3.25097 15.9369 3.25097 18.0093C3.25097 18.1398 3.25097 18.205 3.23189 18.2455C3.19819 18.3171 3.12233 18.3632 3.04328 18.3603C2.99852 18.3586 2.95192 18.3345 2.85873 18.2863C2.6211 18.1635 2.40157 18.007 2.20164 17.8072C1.49997 17.1059 1.33294 16.1633 1.27715 15.0447C1.27656 15.0329 1.27625 15.0211 1.27622 15.0092L1.27354 13.9403C1.27295 13.7047 1.27266 13.5869 1.33693 13.5273C1.4012 13.4677 1.53518 13.4781 1.80315 13.4989C1.86795 13.5039 1.93344 13.5065 1.99953 13.5065H6.00414C7.38645 13.5065 8.50702 12.3865 8.50702 11.005C8.50702 10.7612 8.50702 10.6393 8.53496 10.5792C8.55271 10.541 8.5573 10.5341 8.58574 10.503C8.63051 10.4541 8.74348 10.407 8.96941 10.3128C9.87373 9.93572 10.5093 9.04359 10.5093 8.00309C10.5093 6.62152 9.38875 5.50154 8.00645 5.50154H1.99953C1.78739 5.50154 1.68132 5.50154 1.62782 5.46126C1.58985 5.43267 1.5652 5.39531 1.55386 5.34917C1.53787 5.28416 1.57122 5.20635 1.63791 5.05071C1.77065 4.74095 1.95294 4.45804 2.20504 4.20545C2.73465 3.67479 3.39891 3.45171 4.1652 3.34864C4.89835 3.25003 5.82721 3.25005 6.96399 3.25007L10.4482 3.25003ZM19.5602 10.2544C19.8595 10.2544 20.0091 10.2544 20.0674 10.1569C20.1257 10.0594 20.0547 9.92774 19.9128 9.66441L19.6127 9.10723C19.2578 8.44854 19.0256 8.02 18.8136 7.70665C18.6143 7.41202 18.4781 7.29014 18.3517 7.21469C18.2254 7.13924 18.0535 7.07724 17.6994 7.04151C17.3228 7.0035 16.8352 7.00233 16.0867 7.00233H15.6694C15.4745 7.00233 15.377 7.00233 15.3182 7.06185C15.2594 7.12136 15.2606 7.22048 15.2632 7.41872C15.2657 7.61756 15.2653 7.81646 15.265 8.01531L15.2648 8.20314C15.2648 9.00653 15.274 9.23024 15.326 9.39015C15.4498 9.77093 15.7485 10.0695 16.1295 10.1932C16.2895 10.2452 16.5133 10.2544 17.3171 10.2544H19.5602Z',
  d8: 'M10.4482 3.25003C11.4314 3.24965 12.103 3.24938 12.6706 3.43372C13.5142 3.70769 14.2234 4.26737 14.6863 5.00109L16.134 5.00109H16.134C16.8222 5.00106 17.4116 5.00104 17.9006 5.05039C18.4232 5.10314 18.912 5.21811 19.3785 5.49659C19.845 5.77507 20.178 6.15069 20.4723 6.58564C20.7476 6.99257 21.027 7.51122 21.3532 8.11683L22.6535 10.5304C22.7327 10.6774 22.7714 10.8354 22.7733 10.9916L22.7734 11.0049V13.0599C22.7735 14.1934 22.7735 15.1197 22.6751 15.851C22.5723 16.6154 22.3497 17.2782 21.8204 17.8072C21.6205 18.007 21.401 18.1634 21.1634 18.2863C21.0702 18.3345 21.0236 18.3586 20.9789 18.3602C20.8998 18.3632 20.8239 18.317 20.7902 18.2455C20.7712 18.205 20.7712 18.1398 20.7712 18.0093C20.7712 15.9369 19.0903 14.257 17.0168 14.257C14.9434 14.257 13.2625 15.9369 13.2625 18.0093C13.2625 18.0955 13.2654 18.181 13.2711 18.2658V18.2658C13.2873 18.5048 13.2953 18.6242 13.2357 18.6878C13.176 18.7513 13.0656 18.7508 12.8449 18.7498H12.8449L11.1734 18.7421C10.9552 18.7411 10.8461 18.7406 10.7871 18.6773C10.728 18.614 10.7358 18.4959 10.7514 18.2596C10.7569 18.1769 10.7596 18.0934 10.7596 18.0093C10.7596 15.9369 9.07875 14.257 7.00529 14.257C4.93184 14.257 3.25097 15.9369 3.25097 18.0093C3.25097 18.1398 3.25097 18.205 3.23189 18.2455C3.19819 18.3171 3.12233 18.3632 3.04328 18.3603C2.99852 18.3586 2.95192 18.3345 2.85873 18.2863C2.6211 18.1635 2.40157 18.007 2.20164 17.8072C1.49997 17.1059 1.33294 16.1633 1.27715 15.0447C1.27656 15.0329 1.27625 15.0211 1.27622 15.0092L1.27354 13.9403C1.27295 13.7047 1.27266 13.5869 1.33693 13.5273C1.4012 13.4677 1.53518 13.4781 1.80315 13.4989C1.86795 13.5039 1.93344 13.5065 1.99953 13.5065H6.00414C7.38645 13.5065 8.50702 12.3865 8.50702 11.005C8.50702 10.7612 8.50702 10.6393 8.53496 10.5792C8.55271 10.541 8.5573 10.5341 8.58574 10.503C8.63051 10.4541 8.74348 10.407 8.96941 10.3128C9.87373 9.93572 10.5093 9.04359 10.5093 8.00309C10.5093 6.62152 9.38875 5.50154 8.00645 5.50154H1.99953C1.78739 5.50154 1.68132 5.50154 1.62782 5.46126C1.58985 5.43267 1.5652 5.39531 1.55386 5.34917C1.53787 5.28416 1.57122 5.20635 1.63791 5.05071C1.77065 4.74095 1.95294 4.45804 2.20504 4.20545C2.73465 3.67479 3.39891 3.45171 4.1652 3.34864C4.89835 3.25003 5.82721 3.25005 6.96399 3.25007L10.4482 3.25003Z',
  d9: 'M19.5617 10.2521C19.8609 10.2521 20.0105 10.2521 20.0688 10.1546C20.1271 10.0571 20.0561 9.92541 19.9143 9.66208L19.6141 9.10491C19.2592 8.44621 19.027 8.01767 18.815 7.70432C18.6157 7.40969 18.4796 7.28781 18.3532 7.21236C18.2268 7.13691 18.0549 7.07491 17.7008 7.03918C17.3243 7.00118 16.8367 7 16.0881 7H15.6709C15.4759 7 15.3784 7 15.3196 7.05952C15.2608 7.11904 15.262 7.21816 15.2646 7.41639C15.2671 7.61523 15.2668 7.81413 15.2664 8.01298L15.2662 8.20081C15.2662 9.0042 15.2755 9.22791 15.3275 9.38782C15.4512 9.7686 15.7499 10.0671 16.1309 10.1909C16.2909 10.2428 16.5148 10.2521 17.3186 10.2521H19.5617Z',
  d10: 'M5 17.9724L2.00194 18L2.02755 14M9 18H15M2 4H14V11H22V18H19',
  d11: 'M14 6L19 6.00002L22 11',
  d12: 'M7 20.75C8.38071 20.75 9.5 19.6307 9.5 18.25C9.5 16.8693 8.38071 15.75 7 15.75C5.61929 15.75 4.5 16.8693 4.5 18.25C4.5 19.6307 5.61929 20.75 7 20.75Z',
  d13: 'M17 20.75C18.3807 20.75 19.5 19.6307 19.5 18.25C19.5 16.8693 18.3807 15.75 17 15.75C15.6193 15.75 14.5 16.8693 14.5 18.25C14.5 19.6307 15.6193 20.75 17 20.75Z',
  d14: 'M2.22727 3.25C1.96806 3.25 1.71947 3.35208 1.53619 3.53379C1.35291 3.71549 1.24996 3.96193 1.25 4.21888L1.25013 5.15527H8.5V9.65527H6.5V12.6553H1.25118L1.25189 17.7814C1.25193 18.0398 1.35615 18.2876 1.54136 18.4694C1.72658 18.6513 1.97744 18.7523 2.23815 18.75L3.28304 18.75C3.26125 18.5864 3.25 18.4195 3.25 18.25C3.25 16.1789 4.92893 14.5 7 14.5C9.07107 14.5 10.75 16.1789 10.75 18.25C10.75 18.4195 10.7388 18.5864 10.717 18.75L13.283 18.75C13.2612 18.5864 13.25 18.4195 13.25 18.25C13.25 16.1789 14.9289 14.5 17 14.5C19.0711 14.5 20.75 16.1789 20.75 18.25C20.75 18.4195 20.7388 18.5864 20.717 18.75L21.7727 18.75C22.3125 18.75 22.75 18.3163 22.75 17.7812V11C22.75 10.8244 22.7019 10.6521 22.6107 10.5016L19.6789 5.65785C19.5023 5.36606 19.1842 5.18752 18.8409 5.18752L14.9318 5.1875V4.21875C14.9318 3.68372 14.4943 3.25 13.9545 3.25H2.22727ZM14.9336 10.0312V7.125L18.2894 7.12501L20.0485 10.0312H14.9336Z',
  d15: 'M7.25 8.40527H1.25V6.40527H7.25V8.40527ZM5.25 11.4053H1.25V9.40527H5.25V11.4053Z',
} as const;

export const IconTruckDeliveryStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-delivery-stroke-rounded IconTruckDeliveryStrokeRounded"
    >
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTruckDeliveryDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-delivery-duotone-rounded IconTruckDeliveryDuotoneRounded"
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
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTruckDeliveryTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-delivery-twotone-rounded IconTruckDeliveryTwotoneRounded"
    >
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        opacity="var(--icon-opacity)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTruckDeliverySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-delivery-solid-rounded IconTruckDeliverySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="17" 
        cy="18" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
    </TheIconWrapper>
  );
};

export const IconTruckDeliveryBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-delivery-bulk-rounded IconTruckDeliveryBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="17" 
        cy="18" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
    </TheIconWrapper>
  );
};

export const IconTruckDeliveryStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-delivery-stroke-sharp IconTruckDeliveryStrokeSharp"
    >
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d10} 
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
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTruckDeliverySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-delivery-solid-sharp IconTruckDeliverySolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTruckDelivery: TheIconSelfPack = {
  name: 'TruckDelivery',
  StrokeRounded: IconTruckDeliveryStrokeRounded,
  DuotoneRounded: IconTruckDeliveryDuotoneRounded,
  TwotoneRounded: IconTruckDeliveryTwotoneRounded,
  SolidRounded: IconTruckDeliverySolidRounded,
  BulkRounded: IconTruckDeliveryBulkRounded,
  StrokeSharp: IconTruckDeliveryStrokeSharp,
  SolidSharp: IconTruckDeliverySolidSharp,
};