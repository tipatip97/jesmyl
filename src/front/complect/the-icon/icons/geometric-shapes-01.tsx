import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.6171 4.76655C15.6275 3.16588 16.1327 2.36554 16.7947 2.12444C17.2503 1.95852 17.7497 1.95852 18.2053 2.12444C18.8673 2.36554 19.3725 3.16588 20.3829 4.76655C21.5202 6.56824 22.0889 7.46908 21.9887 8.21239C21.92 8.72222 21.6634 9.18799 21.2693 9.51835C20.6947 10 19.6298 10 17.5 10C15.3702 10 14.3053 10 13.7307 9.51835C13.3366 9.18799 13.08 8.72222 13.0113 8.21239C12.9111 7.46908 13.4798 6.56824 14.6171 4.76655Z',
  d2: 'M2 6C2 4.33345 2 3.50018 2.42441 2.91603C2.56147 2.72738 2.72738 2.56147 2.91603 2.42441C3.50018 2 4.33345 2 6 2C7.66655 2 8.49982 2 9.08397 2.42441C9.27262 2.56147 9.43853 2.72738 9.57559 2.91603C10 3.50018 10 4.33345 10 6C10 7.66655 10 8.49982 9.57559 9.08397C9.43853 9.27262 9.27262 9.43853 9.08397 9.57559C8.49982 10 7.66655 10 6 10C4.33345 10 3.50018 10 2.91603 9.57559C2.72738 9.43853 2.56147 9.27262 2.42441 9.08397C2 8.49982 2 7.66655 2 6Z',
  d3: 'M9.49994 14.5L2.5 21.5M2.50006 14.5L9.5 21.5',
  d4: 'M16.538 1.41973C17.1594 1.19342 17.8406 1.19342 18.462 1.41973C18.9923 1.61286 19.3911 2.00766 19.755 2.47463L22.3206 6.55082C22.6105 7.1303 22.8131 7.71082 22.732 8.31255C22.6383 9.00759 22.2885 9.64265 21.7511 10.0931C21.2857 10.4832 20.6867 10.6219 20.0422 10.6861H14.9578C14.3133 10.6219 13.7143 10.4832 13.2489 10.0931C12.7114 9.64265 12.3617 9.00759 12.268 8.31255C12.1869 7.71082 12.3895 7.1303 12.6794 6.55082L15.2449 2.47463C15.6089 2.00766 16.0077 1.61287 16.538 1.41973Z',
  d5: 'M8.02789 1.30859C8.58136 1.36856 9.0828 1.49825 9.52403 1.81882C9.77636 2.00215 9.99826 2.22405 10.1816 2.47637C10.5022 2.91761 10.6318 3.41904 10.6918 3.97251V8.02985C10.6318 8.58332 10.5022 9.08475 10.1816 9.52599C9.99826 9.77831 9.77636 10.0002 9.52403 10.1835C9.0828 10.5041 8.58136 10.6338 8.02789 10.6938H3.97056C3.41709 10.6338 2.91565 10.5041 2.47442 10.1835C2.22209 10.0002 2.0002 9.77831 1.81687 9.52599C1.4963 9.08475 1.36661 8.58332 1.30664 8.02985V3.97251C1.36661 3.41904 1.4963 2.91761 1.81687 2.47637C2.0002 2.22405 2.22209 2.00215 2.47442 1.81882C2.91565 1.49825 3.41709 1.36856 3.97056 1.30859H8.02789Z',
  d6: 'M12.75 18C12.75 15.3766 14.8766 13.25 17.5 13.25C20.1234 13.25 22.25 15.3766 22.25 18C22.25 20.6234 20.1234 22.75 17.5 22.75C14.8766 22.75 12.75 20.6234 12.75 18Z',
  d7: 'M1.79295 13.7929C2.18348 13.4024 2.81664 13.4024 3.20717 13.7929L6 16.5858L8.79283 13.7929C9.18336 13.4024 9.81652 13.4024 10.207 13.7929C10.5976 14.1834 10.5976 14.8166 10.2071 15.2071L7.41421 18L10.2071 20.7929C10.5976 21.1834 10.5976 21.8166 10.2071 22.2071C9.81658 22.5976 9.18341 22.5976 8.79289 22.2071L6 19.4142L3.20711 22.2071C2.81659 22.5976 2.18342 22.5976 1.7929 22.2071C1.40237 21.8166 1.40237 21.1834 1.79289 20.7929L4.58579 18L1.79295 15.2071C1.40242 14.8166 1.40243 14.1834 1.79295 13.7929Z',
  d8: 'M22 10L17.5 2L13 10H22Z',
  d9: 'M10 2H2V10H10V2Z',
  d10: 'M9.99994 14L2 22M2.00007 14L10 22',
  d11: 'M17.5 1.25C17.771 1.25 18.0208 1.39615 18.1537 1.6323L22.6537 9.6323C22.7843 9.86453 22.7819 10.1486 22.6474 10.3786C22.5129 10.6086 22.2664 10.75 22 10.75H13C12.7336 10.75 12.4871 10.6086 12.3526 10.3786C12.2181 10.1486 12.2157 9.86453 12.3463 9.6323L16.8463 1.6323C16.9792 1.39615 17.229 1.25 17.5 1.25Z',
  d12: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H10C10.4142 1.25 10.75 1.58579 10.75 2V10C10.75 10.4142 10.4142 10.75 10 10.75H2C1.58579 10.75 1.25 10.4142 1.25 10V2Z',
  d13: 'M5.95711 16.6287L9.24994 13.3358L10.6642 14.75L7.37132 18.0429L10.6642 21.3358L9.25 22.75L5.95711 19.4571L2.66422 22.75L1.25 21.3358L4.5429 18.0429L1.25007 14.75L2.66428 13.3358L5.95711 16.6287Z',
} as const;

export const IconGeometricShapes01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="geometric-shapes-01-stroke-rounded IconGeometricShapes01StrokeRounded"
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
      <circle 
        cx="17.5" 
        cy="18" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGeometricShapes01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="geometric-shapes-01-duotone-rounded IconGeometricShapes01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="17.5" 
        cy="18" 
        r="4" 
        fill="var(--icon-fill)"></circle>
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
      <circle 
        cx="17.5" 
        cy="18" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGeometricShapes01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="geometric-shapes-01-twotone-rounded IconGeometricShapes01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <circle 
        cx="17.5" 
        cy="18" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGeometricShapes01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="geometric-shapes-01-solid-rounded IconGeometricShapes01SolidRounded"
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

export const IconGeometricShapes01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="geometric-shapes-01-bulk-rounded IconGeometricShapes01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconGeometricShapes01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="geometric-shapes-01-stroke-sharp IconGeometricShapes01StrokeSharp"
    >
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
      <ellipse 
        cx="17.5" 
        cy="18" 
        rx="4" 
        ry="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></ellipse>
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGeometricShapes01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="geometric-shapes-01-solid-sharp IconGeometricShapes01SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGeometricShapes01: TheIconSelfPack = {
  name: 'GeometricShapes01',
  StrokeRounded: IconGeometricShapes01StrokeRounded,
  DuotoneRounded: IconGeometricShapes01DuotoneRounded,
  TwotoneRounded: IconGeometricShapes01TwotoneRounded,
  SolidRounded: IconGeometricShapes01SolidRounded,
  BulkRounded: IconGeometricShapes01BulkRounded,
  StrokeSharp: IconGeometricShapes01StrokeSharp,
  SolidSharp: IconGeometricShapes01SolidSharp,
};