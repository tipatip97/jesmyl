import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 6H9.78046C11.7968 6 12.8049 6 13.3136 6.24139C14.5399 6.82331 15.0779 8.27746 14.5255 9.51737C14.2963 10.0317 13.5309 10.6878 12 12C10.4691 13.3122 9.70366 13.9683 9.47452 14.4826C8.92213 15.7225 9.46006 17.1767 10.6864 17.7586C11.1951 18 12.2032 18 14.2195 18H16',
  d2: 'M2 6C2 7.65685 3.34315 9 5 9C6.65685 9 8 7.65685 8 6C8 4.34315 6.65685 3 5 3C3.34315 3 2 4.34315 2 6Z',
  d3: 'M16 18C16 19.6569 17.3431 21 19 21C20.6569 21 22 19.6569 22 18C22 16.3431 20.6569 15 19 15C17.3431 15 16 16.3431 16 18Z',
  d4: 'M12.0593 7.02876C11.5246 7.00034 10.8004 7 9.78046 7H8C7.44772 7 7 6.55228 7 6C7 5.44772 7.44772 5 8 5H9.81186H9.81187C10.7934 5 11.5712 4.99999 12.1655 5.03158C12.7369 5.06195 13.2935 5.12495 13.7423 5.33794C15.4592 6.15263 16.2123 8.18845 15.4389 9.92432C15.2367 10.3782 14.8551 10.7882 14.4411 11.1831C14.0104 11.5939 13.4199 12.1 12.6747 12.7388L12.6746 12.7388L12.6508 12.7593C11.8764 13.423 11.3268 13.8946 10.9393 14.2642C10.5306 14.6539 10.4149 14.8291 10.388 14.8896C10.0565 15.6335 10.3793 16.506 11.1151 16.8552C11.1749 16.8836 11.3767 16.9413 11.9407 16.9712C12.4754 16.9997 13.1996 17 14.2195 17H16C16.5523 17 17 17.4477 17 18C17 18.5523 16.5523 19 16 19H14.1882C13.2066 19 12.4288 19 11.8345 18.9684C11.2631 18.938 10.7065 18.8751 10.2577 18.6621C8.54082 17.8474 7.78772 15.8116 8.56107 14.0757C8.76325 13.6218 9.14486 13.2118 9.55892 12.8169C9.98959 12.4061 10.5801 11.9 11.3253 11.2612L11.3492 11.2407C12.1236 10.577 12.6732 10.1054 13.0607 9.73584C13.4694 9.34608 13.5851 9.17092 13.612 9.11042C13.9435 8.36648 13.6207 7.49398 12.8849 7.14483C12.8251 7.11644 12.6233 7.05874 12.0593 7.02876Z',
  d5: 'M8.75 6C8.75 3.92893 7.07107 2.25 5 2.25C2.92893 2.25 1.25 3.92893 1.25 6C1.25 8.07107 2.92893 9.75 5 9.75C7.07107 9.75 8.75 8.07107 8.75 6Z',
  d6: 'M22.75 18C22.75 15.9289 21.0711 14.25 19 14.25C16.9289 14.25 15.25 15.9289 15.25 18C15.25 20.0711 16.9289 21.75 19 21.75C21.0711 21.75 22.75 20.0711 22.75 18Z',
  d7: 'M8.61564 5C8.70351 5.31836 8.75045 5.6537 8.75045 6C8.75045 6.3463 8.70351 6.68164 8.61564 7H9.78091C10.8008 7 11.5251 7.00034 12.0598 7.02876C12.6237 7.05874 12.8255 7.11644 12.8854 7.14483C13.6212 7.49398 13.9439 8.36648 13.6125 9.11042C13.5855 9.17092 13.4698 9.34608 13.0612 9.73584C12.6737 10.1054 12.124 10.577 11.3497 11.2407L11.3258 11.2612C10.5805 11.9 9.99004 12.4061 9.55938 12.8169C9.14531 13.2118 8.76371 13.6218 8.56152 14.0757C7.78817 15.8116 8.54127 17.8474 10.2581 18.6621C10.707 18.8751 11.2636 18.938 11.835 18.9684C12.4293 19 13.207 19 14.1886 19H15.3853C15.2974 18.6816 15.2505 18.3463 15.2505 18C15.2505 17.6537 15.2974 17.3184 15.3853 17H14.22C13.2001 17 12.4758 16.9997 11.9411 16.9712C11.3772 16.9413 11.1754 16.8836 11.1155 16.8552C10.3797 16.506 10.057 15.6335 10.3884 14.8896C10.4154 14.8291 10.5311 14.6539 10.9397 14.2642C11.3272 13.8946 11.8769 13.423 12.6512 12.7593L12.6751 12.7388C13.4203 12.1 14.0109 11.5939 14.4415 11.1831C14.8556 10.7882 15.2372 10.3782 15.4394 9.92432C16.2127 8.18845 15.4596 6.15263 13.7428 5.33794C13.2939 5.12495 12.7373 5.06196 12.1659 5.03158C11.5716 4.99999 10.7939 5 9.81233 5H8.61564Z',
  d8: 'M12.0593 7.02876C11.5246 7.00034 10.8004 7 9.78046 7H8V5H9.81186H9.81187C10.7934 5 11.5712 4.99999 12.1655 5.03158C12.7369 5.06195 13.2935 5.12495 13.7423 5.33794C15.4592 6.15263 16.2123 8.18845 15.4389 9.92432C15.2367 10.3782 14.8551 10.7882 14.4411 11.1831C14.0104 11.5939 13.4199 12.1 12.6747 12.7388L12.6746 12.7388L12.6508 12.7593C11.8764 13.423 11.3268 13.8946 10.9393 14.2642C10.5306 14.6539 10.4149 14.8291 10.388 14.8896C10.0565 15.6335 10.3793 16.506 11.1151 16.8552C11.1749 16.8836 11.3767 16.9413 11.9407 16.9712C12.4754 16.9997 13.1996 17 14.2195 17H16V19H14.1882C13.2066 19 12.4288 19 11.8345 18.9684C11.2631 18.938 10.7065 18.8751 10.2577 18.6621C8.54082 17.8474 7.78772 15.8116 8.56107 14.0757C8.76325 13.6218 9.14486 13.2118 9.55892 12.8169C9.98959 12.4061 10.5801 11.9 11.3253 11.2612L11.3492 11.2407C12.1236 10.577 12.6732 10.1054 13.0607 9.73584C13.4694 9.34608 13.5851 9.17092 13.612 9.11042C13.9435 8.36648 13.6207 7.49398 12.8849 7.14483C12.8251 7.11644 12.6233 7.05874 12.0593 7.02876Z',
} as const;

export const IconOrthogonalEdgeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="orthogonal-edge-stroke-rounded IconOrthogonalEdgeStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconOrthogonalEdgeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="orthogonal-edge-duotone-rounded IconOrthogonalEdgeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconOrthogonalEdgeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="orthogonal-edge-twotone-rounded IconOrthogonalEdgeTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconOrthogonalEdgeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="orthogonal-edge-solid-rounded IconOrthogonalEdgeSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconOrthogonalEdgeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="orthogonal-edge-bulk-rounded IconOrthogonalEdgeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconOrthogonalEdgeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="orthogonal-edge-stroke-sharp IconOrthogonalEdgeStrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconOrthogonalEdgeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="orthogonal-edge-solid-sharp IconOrthogonalEdgeSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfOrthogonalEdge: TheIconSelfPack = {
  name: 'OrthogonalEdge',
  StrokeRounded: IconOrthogonalEdgeStrokeRounded,
  DuotoneRounded: IconOrthogonalEdgeDuotoneRounded,
  TwotoneRounded: IconOrthogonalEdgeTwotoneRounded,
  SolidRounded: IconOrthogonalEdgeSolidRounded,
  BulkRounded: IconOrthogonalEdgeBulkRounded,
  StrokeSharp: IconOrthogonalEdgeStrokeSharp,
  SolidSharp: IconOrthogonalEdgeSolidSharp,
};