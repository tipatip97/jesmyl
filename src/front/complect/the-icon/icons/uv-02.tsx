import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 3V4.5',
  d2: 'M17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13',
  d3: 'M5.98828 6.98926L4.92762 5.9286',
  d4: 'M22 13L20.5 13',
  d5: 'M3.5 13L2 13',
  d6: 'M19.0703 5.92871L18.0097 6.98937',
  d7: 'M6.5 16V19C6.5 19.9428 6.5 20.4142 6.79289 20.7071C7.08579 21 7.55719 21 8.5 21V21C9.44281 21 9.91421 21 10.2071 20.7071C10.5 20.4142 10.5 19.9428 10.5 19V16',
  d8: 'M13.5 16L15.5 21L17.5 16',
  d9: 'M12 8C9.23858 8 7 10.2386 7 13H17C17 10.2386 14.7614 8 12 8Z',
  d10: 'M5.98828 6.98828L4.92762 5.92762',
  d11: 'M19.0703 5.92969L18.0097 6.99035',
  d12: 'M6 12.5C6 9.18629 8.68629 6.5 12 6.5C15.3137 6.5 18 9.18629 18 12.5C18 13.0523 17.5523 13.5 17 13.5H7C6.44772 13.5 6 13.0523 6 12.5Z',
  d13: 'M12 1.5C12.5523 1.5 13 1.94772 13 2.5V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V2.5C11 1.94772 11.4477 1.5 12 1.5ZM4.22051 4.72149C4.61104 4.33097 5.2442 4.33097 5.63473 4.72149L6.69539 5.78215C7.08591 6.17268 7.08591 6.80584 6.69539 7.19636C6.30486 7.58689 5.6717 7.58689 5.28117 7.19636L4.22051 6.1357C3.82999 5.74518 3.82999 5.11201 4.22051 4.72149ZM19.7774 4.7216C20.1679 5.11213 20.1679 5.74529 19.7774 6.13582L18.7168 7.19648C18.3262 7.587 17.6931 7.587 17.3025 7.19648C16.912 6.80595 16.912 6.17279 17.3025 5.78226L18.3632 4.7216C18.7537 4.33108 19.3869 4.33108 19.7774 4.7216ZM1 12.5C1 11.9477 1.44772 11.5 2 11.5H3.5C4.05228 11.5 4.5 11.9477 4.5 12.5C4.5 13.0523 4.05228 13.5 3.5 13.5H2C1.44772 13.5 1 13.0523 1 12.5ZM19.5 12.5C19.5 11.9477 19.9477 11.5 20.5 11.5H22C22.5523 11.5 23 11.9477 23 12.5C23 13.0523 22.5523 13.5 22 13.5H20.5C19.9477 13.5 19.5 13.0523 19.5 12.5Z',
  d14: 'M6.50001 15.5C7.0523 15.5 7.50001 15.9477 7.50001 16.5V19.5C7.50001 19.9997 7.50214 20.2738 7.52771 20.464C7.52804 20.4665 7.52837 20.4689 7.52871 20.4713C7.53108 20.4716 7.53351 20.472 7.53599 20.4723C7.72618 20.4979 8.00034 20.5 8.50001 20.5C8.99969 20.5 9.27385 20.4979 9.46404 20.4723C9.46652 20.472 9.46894 20.4716 9.47132 20.4713C9.47165 20.4689 9.47199 20.4665 9.47232 20.464C9.49789 20.2738 9.50001 19.9997 9.50001 19.5V16.5C9.50001 15.9477 9.94773 15.5 10.5 15.5C11.0523 15.5 11.5 15.9477 11.5 16.5V19.5C11.5 19.5182 11.5 19.5363 11.5 19.5544C11.5001 19.9785 11.5002 20.3906 11.4545 20.7305C11.403 21.1137 11.2774 21.551 10.9142 21.9142C10.551 22.2774 10.1137 22.403 9.73053 22.4545C9.39062 22.5002 8.97849 22.5001 8.55442 22.5C8.53631 22.5 8.51817 22.5 8.50001 22.5C8.48186 22.5 8.46372 22.5 8.4456 22.5C8.02153 22.5001 7.60941 22.5002 7.26949 22.4545C6.88629 22.403 6.44902 22.2774 6.0858 21.9142C5.72259 21.551 5.59706 21.1137 5.54554 20.7305C5.49984 20.3906 5.49992 19.9785 5.50001 19.5544C5.50001 19.5363 5.50001 19.5182 5.50001 19.5V16.5C5.50001 15.9477 5.94773 15.5 6.50001 15.5Z',
  d15: 'M13.1289 15.5718C13.6417 15.3667 14.2236 15.6161 14.4287 16.1289L15.5003 18.8077L16.5718 16.1289C16.7769 15.6161 17.3589 15.3667 17.8717 15.5718C18.3844 15.7769 18.6339 16.3589 18.4287 16.8717L16.4287 21.8717C16.2769 22.2513 15.9092 22.5003 15.5003 22.5003C15.0914 22.5003 14.7237 22.2513 14.5718 21.8717L12.5718 16.8717C12.3667 16.3589 12.6161 15.7769 13.1289 15.5718Z',
  d16: 'M19.0705 5.92871L17.3027 7.69648',
  d17: 'M12 3V5.5',
  d18: 'M22 13H19.5',
  d19: 'M4.5 13H2',
  d20: 'M6.69746 7.69648L4.92969 5.92871',
  d21: 'M13 16L15 21H16L18 16',
  d22: 'M10 16V21H6.01C6.00448 21 6 20.9955 6 20.99V16',
  d23: 'M16.5955 6.48945L18.3633 4.72168L19.7775 6.13589L18.0097 7.90366L16.5955 6.48945Z',
  d24: 'M11 5V2.5H13V5H11Z',
  d25: 'M17.75 13.25H6.25V12.5C6.25 9.32436 8.82436 6.75 12 6.75C15.1756 6.75 17.75 9.32436 17.75 12.5V13.25Z',
  d26: 'M19.5 11.5L22 11.5L22 13.5L19.5 13.5L19.5 11.5Z',
  d27: 'M2 11.5L4.5 11.5L4.5 13.5L2 13.5L2 11.5Z',
  d28: 'M5.63653 4.72149L7.4043 6.48926L5.99008 7.90347L4.22232 6.1357L5.63653 4.72149Z',
  d29: 'M7 19.5V15.5H5V20.5C5 21.0523 5.44772 21.5 6 21.5H11V15.5H9V19.5H7Z',
  d30: 'M15.5007 19.0577L17.0723 15.1289L18.9292 15.8717L16.6778 21.5003H14.3237L12.0723 15.8717L13.9292 15.1289L15.5007 19.0577Z',
} as const;

export const IconUv02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="uv-02-stroke-rounded IconUv02StrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUv02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="uv-02-duotone-rounded IconUv02DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUv02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="uv-02-twotone-rounded IconUv02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUv02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="uv-02-solid-rounded IconUv02SolidRounded"
    >
      <path 
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

export const IconUv02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="uv-02-bulk-rounded IconUv02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconUv02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="uv-02-stroke-sharp IconUv02StrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUv02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="uv-02-solid-sharp IconUv02SolidSharp"
    >
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
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUv02: TheIconSelfPack = {
  name: 'Uv02',
  StrokeRounded: IconUv02StrokeRounded,
  DuotoneRounded: IconUv02DuotoneRounded,
  TwotoneRounded: IconUv02TwotoneRounded,
  SolidRounded: IconUv02SolidRounded,
  BulkRounded: IconUv02BulkRounded,
  StrokeSharp: IconUv02StrokeSharp,
  SolidSharp: IconUv02SolidSharp,
};