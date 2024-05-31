import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.1068 20.1089C18.7156 21.5001 16.4764 21.5001 11.998 21.5001C7.5197 21.5001 5.28053 21.5001 3.88929 20.1089C2.49805 18.7176 2.49805 16.4785 2.49805 12.0001C2.49805 7.52178 2.49805 5.28261 3.88929 3.89137C5.28053 2.50012 7.5197 2.50012 11.998 2.50012C16.4764 2.50012 18.7156 2.50012 20.1068 3.89137C21.498 5.28261 21.498 7.52178 21.498 12.0001C21.498 16.4785 21.498 18.7176 20.1068 20.1089Z',
  d2: 'M8.99805 21.5001L8.99805 2.50012',
  d3: 'M21.498 8.00012L2.49805 8.00012',
  d4: 'M21.498 16.0001H2.49805',
  d5: 'M20.1049 20.1128C21.4961 18.7215 21.4961 16.4824 21.4961 12.004C21.4961 7.52568 21.4961 5.28651 20.1048 3.89527C18.7136 2.50403 16.4744 2.50403 11.9961 2.50403L8.99609 2.50403L8.99609 21.4813C9.86701 21.504 10.8594 21.504 11.9961 21.504C16.4744 21.504 18.7136 21.504 20.1049 20.1128Z',
  d6: 'M20.1078 20.1088C18.7165 21.5 16.4774 21.5 11.999 21.5C7.52068 21.5 5.28151 21.5 3.89027 20.1088C2.49902 18.7175 2.49902 16.4783 2.49902 12C2.49902 7.52166 2.49902 5.28249 3.89026 3.89124C5.28151 2.5 7.52068 2.5 11.999 2.5C16.4774 2.5 18.7165 2.5 20.1078 3.89124C21.499 5.28249 21.499 7.52166 21.499 12C21.499 16.4783 21.499 18.7175 20.1078 20.1088Z',
  d7: 'M8.99902 21.5L8.99902 2.5',
  d8: 'M21.499 8L2.49902 8',
  d9: 'M21.499 16H2.49902',
  d10: 'M1.68245 6.65447C1.65767 6.8388 1.80298 7.00025 1.98896 7.00025H6.99767C7.46908 7.00025 7.70478 7.00025 7.85122 6.8538C7.99767 6.70735 7.99767 6.47165 7.99767 6.00025L7.99767 2.61876C7.99767 2.11587 7.99767 1.86442 7.83096 1.71535C7.66425 1.56627 7.42417 1.59317 6.94402 1.64697C6.84563 1.65799 6.74907 1.66984 6.65434 1.68258C5.24996 1.8714 4.09615 2.2715 3.18376 3.18389C2.27137 4.09628 1.87126 5.25009 1.68245 6.65447ZM10.9882 1.50034C10.5226 1.50124 10.2899 1.5017 10.1438 1.64808C9.99767 1.79447 9.99767 2.02831 9.99767 2.49598L9.99767 6.00025C9.99767 6.47165 9.99767 6.70735 10.1441 6.8538C10.2906 7.00025 10.5263 7.00025 10.9977 7.00025H22.0103C22.1963 7.00025 22.3416 6.8388 22.3168 6.65447C22.128 5.25009 21.7279 4.09628 20.8155 3.18389C19.9031 2.2715 18.7493 1.87139 17.3449 1.68258C15.9848 1.49972 14.25 1.49973 12.074 1.49976H11.9252C11.6033 1.49975 11.291 1.49975 10.9882 1.50034ZM22.3168 17.345C22.3415 17.1612 22.1966 17.0002 22.0112 17.0002H10.9977C10.5263 17.0002 10.2906 17.0002 10.1441 17.1467C9.99767 17.2931 9.99767 17.5288 9.99767 18.0002V21.5035C9.99767 21.9712 9.99767 22.205 10.1438 22.3514C10.2899 22.4978 10.5226 22.4983 10.9882 22.4992C11.291 22.4998 11.6033 22.4998 11.9252 22.4998H12.0741C14.2501 22.4998 15.9848 22.4998 17.3449 22.3169C18.7493 22.1281 19.9031 21.728 20.8155 20.8156C21.7279 19.9032 22.128 18.7494 22.3168 17.345ZM6.94402 22.3525C7.42417 22.4063 7.66425 22.4332 7.83096 22.2842C7.99767 22.1351 7.99767 21.8836 7.99767 21.3808L7.99767 18.0002C7.99767 17.5288 7.99767 17.2931 7.85122 17.1467C7.70478 17.0002 7.46908 17.0002 6.99767 17.0002H1.98809C1.80263 17.0002 1.65774 17.1612 1.68245 17.345C1.87126 18.7494 2.27137 19.9032 3.18376 20.8156C4.09615 21.728 5.24996 22.1281 6.65434 22.3169C6.74907 22.3297 6.84563 22.3415 6.94402 22.3525Z',
  d11: 'M1.5 11.9248V12.0737C1.49999 12.7685 1.49999 13.4184 1.50593 14.0254C1.51041 14.482 1.51265 14.7103 1.65879 14.855C1.80493 14.9998 2.03562 14.9998 2.49701 14.9998H6.99805C7.46945 14.9998 7.70515 14.9998 7.8516 14.8533C7.99805 14.7069 7.99805 14.4712 7.99805 13.9998L7.99805 9.99976C7.99805 9.52835 7.99805 9.29265 7.8516 9.1462C7.70515 8.99976 7.46945 8.99976 6.99805 8.99976H2.497C2.03561 8.99976 1.80492 8.99976 1.65877 9.14448C1.51263 9.2892 1.51039 9.51751 1.50592 9.97413C1.49999 10.5809 1.49999 11.2304 1.5 11.9248ZM22.4941 9.97413C22.4896 9.51751 22.4874 9.2892 22.3412 9.14448C22.1951 8.99976 21.9644 8.99976 21.503 8.99976H10.998C10.5266 8.99976 10.2909 8.99976 10.1445 9.1462C9.99805 9.29265 9.99805 9.52835 9.99805 9.99976L9.99805 13.9998C9.99805 14.4712 9.99805 14.7069 10.1445 14.8533C10.2909 14.9998 10.5266 14.9998 10.998 14.9998H21.503C21.9644 14.9998 22.1951 14.9998 22.3412 14.855C22.4874 14.7103 22.4896 14.482 22.4941 14.0254C22.5 13.4184 22.5 12.7685 22.5 12.0737V11.9248C22.5 11.2304 22.5 10.5809 22.4941 9.97413Z',
  d12: 'M2.99805 21.0001H20.998V3.00012H2.99805V21.0001Z',
  d13: 'M8.99805 21.0001L8.99805 3.00012',
  d14: 'M20.998 9.00012L2.99805 9.00012',
  d15: 'M20.998 15.0001L2.99805 15.0001',
  d16: 'M9.99609 21.7502L9.99609 16.0002H21.75V21.0002C21.75 21.4145 21.4142 21.7502 21 21.7502H9.99609Z',
  d17: 'M7.99609 21.7502H3C2.58579 21.7502 2.25 21.4145 2.25 21.0002V16.0002H7.99609L7.99609 21.7502Z',
  d18: 'M2.25 14.0002H7.99609L7.99609 10.0002H2.25V14.0002Z',
  d19: 'M2.25 8.00024H7.99609L7.99609 2.25024H3C2.58579 2.25024 2.25 2.58603 2.25 3.00024V8.00024Z',
  d20: 'M9.99609 2.25024L9.99609 8.00024H21.75V3.00024C21.75 2.58603 21.4142 2.25024 21 2.25024H9.99609Z',
  d21: 'M21.75 10.0002H9.99609L9.99609 14.0002H21.75V10.0002Z',
} as const;

export const IconLayoutTable02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-table-02-stroke-rounded IconLayoutTable02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLayoutTable02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-table-02-duotone-rounded IconLayoutTable02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayoutTable02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-table-02-twotone-rounded IconLayoutTable02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayoutTable02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-table-02-solid-rounded IconLayoutTable02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconLayoutTable02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-table-02-bulk-rounded IconLayoutTable02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayoutTable02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-table-02-stroke-sharp IconLayoutTable02StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconLayoutTable02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-table-02-solid-sharp IconLayoutTable02SolidSharp"
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
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLayoutTable02: TheIconSelfPack = {
  name: 'LayoutTable02',
  StrokeRounded: IconLayoutTable02StrokeRounded,
  DuotoneRounded: IconLayoutTable02DuotoneRounded,
  TwotoneRounded: IconLayoutTable02TwotoneRounded,
  SolidRounded: IconLayoutTable02SolidRounded,
  BulkRounded: IconLayoutTable02BulkRounded,
  StrokeSharp: IconLayoutTable02StrokeSharp,
  SolidSharp: IconLayoutTable02SolidSharp,
};