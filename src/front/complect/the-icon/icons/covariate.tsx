import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3',
  d2: 'M18 11H18.009',
  d3: 'M14 15H14.009',
  d4: 'M12 6H12.009',
  d5: 'M8 10H8.00898',
  d6: 'M4.5 19.5002L21 3.00024',
  d7: 'M17.5 11C17.5 10.1716 18.1716 9.5 19 9.5H19.009C19.8374 9.5 20.509 10.1716 20.509 11C20.509 11.8284 19.8374 12.5 19.009 12.5H19C18.1716 12.5 17.5 11.8284 17.5 11Z',
  d8: 'M13.5 15C13.5 14.1716 14.1716 13.5 15 13.5H15.009C15.8374 13.5 16.509 14.1716 16.509 15C16.509 15.8284 15.8374 16.5 15.009 16.5H15C14.1716 16.5 13.5 15.8284 13.5 15Z',
  d9: 'M10.5 5C10.5 4.17157 11.1716 3.5 12 3.5H12.009C12.8374 3.5 13.509 4.17157 13.509 5C13.509 5.82843 12.8374 6.5 12.009 6.5H12C11.1716 6.5 10.5 5.82843 10.5 5Z',
  d10: 'M6.5 9C6.5 8.17157 7.17157 7.5 8 7.5H8.00898C8.83741 7.5 9.50898 8.17157 9.50898 9C9.50898 9.82843 8.83741 10.5 8.00898 10.5H8C7.17157 10.5 6.5 9.82843 6.5 9Z',
  d11: 'M3 2C3.55229 2 4 2.44772 4 3V14C4 15.6782 4.00213 16.8362 4.11923 17.7072C4.15226 17.9529 4.19301 18.1629 4.24151 18.3444L20.2929 2.29302C20.6834 1.90249 21.3166 1.90249 21.7071 2.29302C22.0976 2.68354 22.0976 3.31671 21.7071 3.70723L5.6558 19.7585C5.83729 19.807 6.0472 19.8478 6.2928 19.8808C7.16378 19.9979 8.32182 20 10 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H9.928C8.33933 22 7.04616 22.0001 6.0263 21.8629C4.96232 21.7199 4.04735 21.4113 3.31802 20.682C2.58869 19.9526 2.28011 19.0377 2.13706 17.9737C1.99994 16.9538 1.99997 15.6607 2 14.072L2 3C2 2.44772 2.44772 2 3 2Z',
  d12: 'M21.7071 2.29314C22.0976 2.68366 22.0976 3.31683 21.7071 3.70735L5.20711 20.2074C4.81658 20.5979 4.18342 20.5979 3.79289 20.2074C3.40237 19.8168 3.40237 19.1837 3.79289 18.7931L20.2929 2.29314C20.6834 1.90261 21.3166 1.90261 21.7071 2.29314Z',
  d13: 'M3 2C3.55229 2 4 2.44772 4 3V14C4 15.6782 4.00213 16.8362 4.11923 17.7072C4.23246 18.5494 4.43644 18.972 4.73223 19.2678C5.02803 19.5636 5.45059 19.7675 6.2928 19.8808C7.16377 19.9979 8.32182 20 10 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H9.92793C8.33929 22 7.04614 22.0001 6.0263 21.8629C4.96232 21.7199 4.04735 21.4113 3.31802 20.682C2.58869 19.9527 2.28011 19.0377 2.13706 17.9737C1.99994 16.9538 1.99997 15.6607 2 14.072L2 3C2 2.44772 2.44772 2 3 2Z',
  d14: 'M16.5 11C16.5 10.1716 17.1716 9.5 18 9.5H18.009C18.8374 9.5 19.509 10.1716 19.509 11C19.509 11.8284 18.8374 12.5 18.009 12.5H18C17.1716 12.5 16.5 11.8284 16.5 11Z',
  d15: 'M12.5 15C12.5 14.1716 13.1716 13.5 14 13.5H14.009C14.8374 13.5 15.509 14.1716 15.509 15C15.509 15.8284 14.8374 16.5 14.009 16.5H14C13.1716 16.5 12.5 15.8284 12.5 15Z',
  d16: 'M10.5 6C10.5 5.17157 11.1716 4.5 12 4.5H12.009C12.8374 4.5 13.509 5.17157 13.509 6C13.509 6.82843 12.8374 7.5 12.009 7.5H12C11.1716 7.5 10.5 6.82843 10.5 6Z',
  d17: 'M6.5 10C6.5 9.17157 7.17157 8.5 8 8.5H8.00898C8.83741 8.5 9.50898 9.17157 9.50898 10C9.50898 10.8284 8.83741 11.5 8.00898 11.5H8C7.17157 11.5 6.5 10.8284 6.5 10Z',
  d18: 'M21 21H3V3',
  d19: 'M3.5 20.4999L21 3',
  d20: 'M17.5 9.5H19.509V11.5H17.5V9.5Z',
  d21: 'M13.5 13.5H15.509V15.5H13.5V13.5Z',
  d22: 'M11.5 4.5H13.509V6.5H11.5V4.5Z',
  d23: 'M7.5 8.5H9.50898V10.5H7.5V8.5Z',
  d24: 'M5.9141 19.5L21.5 3.91423L20.0858 2.50001L4.5 18.0857V2.50001H2.5V20.5C2.5 21.0523 2.94772 21.5 3.5 21.5H21.5V19.5H5.9141Z',
} as const;

export const IconCovariateStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="covariate-stroke-rounded IconCovariateStrokeRounded"
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
      <path 
        d={d.d5} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCovariateDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="covariate-duotone-rounded IconCovariateDuotoneRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconCovariateTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="covariate-twotone-rounded IconCovariateTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCovariateSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="covariate-solid-rounded IconCovariateSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCovariateBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="covariate-bulk-rounded IconCovariateBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCovariateStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="covariate-stroke-sharp IconCovariateStrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCovariateSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="covariate-solid-sharp IconCovariateSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCovariate: TheIconSelfPack = {
  name: 'Covariate',
  StrokeRounded: IconCovariateStrokeRounded,
  DuotoneRounded: IconCovariateDuotoneRounded,
  TwotoneRounded: IconCovariateTwotoneRounded,
  SolidRounded: IconCovariateSolidRounded,
  BulkRounded: IconCovariateBulkRounded,
  StrokeSharp: IconCovariateStrokeSharp,
  SolidSharp: IconCovariateSolidSharp,
};