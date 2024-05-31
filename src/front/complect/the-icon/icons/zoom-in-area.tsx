import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.4 19.4L22 22M20.7 14.85C20.7 11.6191 18.0809 9 14.85 9C11.6191 9 9 11.6191 9 14.85C9 18.0809 11.6191 20.7 14.85 20.7C18.0809 20.7 20.7 18.0809 20.7 14.85Z',
  d2: 'M19.075 19.075L22 22M12.9 14.85H14.85M14.85 14.85H16.8M14.85 14.85V12.9M14.85 14.85V16.8M20.7 14.85C20.7 11.6191 18.0809 9 14.85 9C11.6191 9 9 11.6191 9 14.85C9 18.0809 11.6191 20.7 14.85 20.7C18.0809 20.7 20.7 18.0809 20.7 14.85Z',
  d3: 'M2 6C2.1305 4.6645 2.4262 3.7663 3.09625 3.09625C3.7663 2.4262 4.6645 2.1305 6 2M6 22C4.6645 21.8695 3.7663 21.5738 3.09625 20.9037C2.4262 20.2337 2.1305 19.3355 2 18M22 6C21.8695 4.6645 21.5738 3.7663 20.9037 3.09625C20.2337 2.4262 19.3355 2.1305 18 2M2 10L2 14M14 2L10 2',
  d4: 'M8.9835 2C6.17689 2.06395 4.53758 2.33111 3.41752 3.44729C2.43723 4.42418 2.10954 5.79744 2 8V16C2.10954 18.2026 2.43723 19.5758 3.41752 20.5527C4.53758 21.6689 6.17689 21.9361 8.9835 22H15.0165C17.8231 21.9361 19.4624 21.6689 20.5825 20.5527C21.5628 19.5758 21.8905 18.2026 22 16V8C21.8905 5.79744 21.5628 4.42418 20.5825 3.44729C19.4624 2.33111 17.8231 2.06395 15.0165 2H8.9835ZM14.85 9C18.0809 9 20.7 11.6191 20.7 14.85C20.7 18.0809 18.0809 20.7 14.85 20.7C11.6191 20.7 9 18.0809 9 14.85C9 11.6191 11.6191 9 14.85 9Z',
  d5: 'M8 14.85C8 11.0668 11.0668 8 14.85 8C18.6332 8 21.7 11.0668 21.7 14.85C21.7 16.3809 21.1978 17.7944 20.3492 18.935L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L18.935 20.3492C17.7944 21.1978 16.3809 21.7 14.85 21.7C11.0668 21.7 8 18.6332 8 14.85ZM14.85 10C12.1714 10 10 12.1714 10 14.85C10 17.5286 12.1714 19.7 14.85 19.7C17.5286 19.7 19.7 17.5286 19.7 14.85C19.7 12.1714 17.5286 10 14.85 10Z',
  d6: 'M8 14.85C8 11.0668 11.0668 8 14.85 8C18.6332 8 21.7 11.0668 21.7 14.85C21.7 16.3809 21.1978 17.7944 20.3492 18.935L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L18.935 20.3492C17.7944 21.1978 16.3809 21.7 14.85 21.7C11.0668 21.7 8 18.6332 8 14.85ZM14.85 10C12.1714 10 10 12.1714 10 14.85C10 17.5286 12.1714 19.7 14.85 19.7C17.5286 19.7 19.7 17.5286 19.7 14.85C19.7 12.1714 17.5286 10 14.85 10ZM14.85 11.9C15.4023 11.9 15.85 12.3477 15.85 12.9V13.85H16.8C17.3523 13.85 17.8 14.2977 17.8 14.85C17.8 15.4023 17.3523 15.85 16.8 15.85H15.85V16.8C15.85 17.3523 15.4023 17.8 14.85 17.8C14.2977 17.8 13.85 17.3523 13.85 16.8V15.85H12.9C12.3477 15.85 11.9 15.4023 11.9 14.85C11.9 14.2977 12.3477 13.85 12.9 13.85H13.85V12.9C13.85 12.3477 14.2977 11.9 14.85 11.9Z',
  d7: 'M5.90258 1.00481C6.45224 0.951101 6.94138 1.35315 6.99509 1.90282C7.0488 2.45249 6.64675 2.94162 6.09708 2.99533C4.84871 3.11732 4.23043 3.37619 3.80319 3.80343C3.37594 4.23067 3.11707 4.84895 2.99509 6.09732C2.94138 6.64699 2.45224 7.04904 1.90258 6.99533C1.35291 6.94162 0.950857 6.45249 1.00457 5.90282C1.14358 4.4802 1.47612 3.30207 2.38897 2.38922C3.30183 1.47636 4.47995 1.14382 5.90258 1.00481ZM17.0046 1.90282C17.0583 1.35315 17.5474 0.951101 18.0971 1.00481C19.5197 1.14382 20.6978 1.47636 21.6107 2.38922C22.5235 3.30207 22.8561 4.4802 22.9951 5.90282C23.0488 6.45249 22.6467 6.94162 22.0971 6.99533C21.5474 7.04904 21.0583 6.64699 21.0046 6.09732C20.8826 4.84895 20.6237 4.23067 20.1965 3.80343C19.7692 3.37619 19.1509 3.11732 17.9026 2.99533C17.3529 2.94162 16.9509 2.45249 17.0046 1.90282ZM8.99983 2.00007C8.99983 1.44779 9.44754 1.00007 9.99983 1.00007L13.9998 1.00007C14.5521 1.00007 14.9998 1.44779 14.9998 2.00007C14.9998 2.55236 14.5521 3.00007 13.9998 3.00007L9.99983 3.00007C9.44754 3.00007 8.99983 2.55236 8.99983 2.00007ZM0.999828 10.0001C0.999828 9.44779 1.44754 9.00007 1.99983 9.00007C2.55211 9.00007 2.99983 9.44779 2.99983 10.0001L2.99983 14.0001C2.99983 14.5524 2.55211 15.0001 1.99983 15.0001C1.44754 15.0001 0.999828 14.5524 0.999828 14.0001L0.999828 10.0001ZM1.00457 18.0973C0.950857 17.5477 1.35291 17.0585 1.90258 17.0048C2.45224 16.9511 2.94138 17.3532 2.99509 17.9028C3.11707 19.1512 3.37594 19.7695 3.80319 20.1967C4.23043 20.624 4.84871 20.8828 6.09708 21.0048C6.64675 21.0585 7.0488 21.5477 6.99509 22.0973C6.94138 22.647 6.45224 23.049 5.90258 22.9953C4.47995 22.8563 3.30183 22.5238 2.38897 21.6109C1.47612 20.6981 1.14358 19.5199 1.00457 18.0973Z',
  d8: 'M19.075 19.075L22 22M11.9 14.85H14.85M14.85 14.85H17.8M14.85 14.85V11.9M14.85 14.85V17.8M20.7 14.85C20.7 11.6191 18.0809 9 14.85 9C11.6191 9 9 11.6191 9 14.85C9 18.0809 11.6191 20.7 14.85 20.7C18.0809 20.7 20.7 18.0809 20.7 14.85Z',
  d9: 'M2.00081 7L2 2.00027L7.00081 2M6.00081 22H2.00154L2.00081 17M22.0008 7V2.00015L17.0008 2M2.00081 10L2.00081 14M14.0008 2L10.0008 2',
  d10: 'M13.8822 13.883V11.8999H15.9161V13.883H17.8992V15.9169H15.9161V17.8999H13.8822V15.9169H11.8992V13.883H13.8822Z',
  d11: 'M8 14.85C8 11.0668 11.0668 8 14.85 8C18.6332 8 21.7 11.0668 21.7 14.85C21.7 16.3809 21.1978 17.7944 20.3492 18.935L23 21.5858L21.5858 23L18.935 20.3492C17.7944 21.1978 16.3809 21.7 14.85 21.7C11.0668 21.7 8 18.6332 8 14.85ZM14.85 10C12.1714 10 10 12.1714 10 14.85C10 17.5286 12.1714 19.7 14.85 19.7C17.5286 19.7 19.7 17.5286 19.7 14.85C19.7 12.1714 17.5286 10 14.85 10Z',
  d12: 'M10.0008 1L14.0008 1V3H10.0008V1ZM1.99995 1.00027L7.00075 1L7.00086 3L3.00016 3.00022L3.00081 6.99984L1.00081 7.00016L1 2.00044C0.999957 1.7352 1.10529 1.48081 1.29282 1.29324C1.48035 1.10567 1.73471 1.00029 1.99995 1.00027ZM21.0008 3.00012L17.0008 3L17.0008 1L22.0008 1.00015C22.5531 1.00017 23.0008 1.44788 23.0008 2.00015V7H21.0008V3.00012ZM1.00081 14L1.00081 10H3.00081V14H1.00081ZM1.00154 22.0001L1.00081 17.0001L3.00081 16.9999L3.0014 21H6.00081V23H2.00154C1.44932 23 1.00163 22.5524 1.00154 22.0001Z',
} as const;

export const IconZoomInAreaStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-in-area-stroke-rounded IconZoomInAreaStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconZoomInAreaDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-in-area-duotone-rounded IconZoomInAreaDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconZoomInAreaTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-in-area-twotone-rounded IconZoomInAreaTwotoneRounded"
    >
      <path 
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
      />
    </TheIconWrapper>
  );
};

export const IconZoomInAreaSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-in-area-solid-rounded IconZoomInAreaSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconZoomInAreaBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-in-area-bulk-rounded IconZoomInAreaBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconZoomInAreaStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-in-area-stroke-sharp IconZoomInAreaStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconZoomInAreaSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-in-area-solid-sharp IconZoomInAreaSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfZoomInArea: TheIconSelfPack = {
  name: 'ZoomInArea',
  StrokeRounded: IconZoomInAreaStrokeRounded,
  DuotoneRounded: IconZoomInAreaDuotoneRounded,
  TwotoneRounded: IconZoomInAreaTwotoneRounded,
  SolidRounded: IconZoomInAreaSolidRounded,
  BulkRounded: IconZoomInAreaBulkRounded,
  StrokeSharp: IconZoomInAreaStrokeSharp,
  SolidSharp: IconZoomInAreaSolidSharp,
};