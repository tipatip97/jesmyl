import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.75024 7.56659C9.66926 4.5222 10.6288 3 12 3C13.3712 3 14.3307 4.52219 16.2498 7.56658L18.4941 11.1271C21.2362 15.4772 22.6072 17.6522 21.7426 19.3261C20.878 21 18.3834 21 13.3944 21H10.6056C5.61655 21 3.12205 21 2.25742 19.3261C1.3928 17.6522 2.76382 15.4772 5.50587 11.1271L7.75024 7.56659Z',
  d2: 'M3 15H21M6.81818 9H17',
  d3: 'M12 3C10.6288 3 9.66927 4.52219 7.75025 7.56658L6.8467 9L17.1533 9L16.2498 7.56658C14.3307 4.52219 13.3712 3 12 3Z',
  d4: 'M20.8505 15L3.14951 15C2.07374 16.9528 1.69855 18.2441 2.25742 19.3261C3.12205 21 5.61655 21 10.6056 21L13.3944 21C18.3834 21 20.878 21 21.7426 19.3261C22.3015 18.2441 21.9263 16.9528 20.8505 15Z',
  d5: 'M12.0003 2.25C10.985 2.25 10.2122 2.83442 9.51098 3.65408C8.82416 4.45686 8.08085 5.63611 7.15074 7.1117C6.91295 7.48894 6.79405 7.67756 6.86194 7.82528C6.86808 7.83862 6.87518 7.85149 6.8832 7.8638C6.97196 8 7.19492 8 7.64085 8H16.3598C16.8057 8 17.0287 8 17.1175 7.86381C17.1255 7.8515 17.1326 7.83862 17.1387 7.82527C17.2066 7.67755 17.0877 7.48894 16.8499 7.11172L16.8499 7.11171L16.8499 7.11169C15.9198 5.6361 15.1765 4.45686 14.4897 3.65407C13.7884 2.83442 13.0157 2.25 12.0003 2.25ZM18.8471 10.2801C18.7608 10.1431 18.7176 10.0747 18.6499 10.0373C18.5823 10 18.5014 10 18.3395 10H5.66116C5.4993 10 5.41836 10 5.35071 10.0373C5.28305 10.0747 5.23989 10.1431 5.15358 10.2801L4.836 10.7839C4.30478 11.6266 3.81898 12.3973 3.38872 13.1044C3.14957 13.4975 3.03 13.694 3.116 13.847C3.202 14 3.43386 14 3.89759 14H20.1031C20.5668 14 20.7987 14 20.8847 13.847C20.9707 13.694 20.8511 13.4975 20.6119 13.1044C20.1817 12.3973 19.6959 11.6266 19.1646 10.7839L18.8471 10.2801ZM22.3397 16.3628C22.2724 16.1906 22.2388 16.1045 22.1623 16.0523C22.0857 16 21.9894 16 21.7967 16H2.20398C2.01126 16 1.9149 16 1.83837 16.0523C1.76184 16.1045 1.72823 16.1906 1.66099 16.3628C1.19658 17.552 1.06291 18.6472 1.59139 19.6703C2.19038 20.8299 3.33525 21.3104 4.77075 21.532C6.1832 21.75 8.10042 21.75 10.5344 21.75H10.5344H10.5344H13.4662H13.4662H13.4663C15.9002 21.75 17.8175 21.75 19.2299 21.532C20.6654 21.3104 21.8103 20.8299 22.4093 19.6703C22.9377 18.6472 22.8041 17.552 22.3397 16.3628Z',
  d6: 'M12.0003 2.25C10.985 2.25 10.2122 2.83442 9.51098 3.65408C8.82416 4.45686 8.08085 5.63611 7.15074 7.1117C6.91295 7.48894 6.79405 7.67756 6.86194 7.82528C6.86808 7.83862 6.87518 7.85149 6.8832 7.8638C6.97196 8 7.19492 8 7.64085 8H16.3598C16.8057 8 17.0287 8 17.1175 7.86381C17.1255 7.8515 17.1326 7.83862 17.1387 7.82527C17.2066 7.67755 17.0877 7.48894 16.8499 7.11172C15.9198 5.63613 15.1765 4.45686 14.4897 3.65407C13.7884 2.83442 13.0157 2.25 12.0003 2.25Z',
  d7: 'M22.3397 16.3628C22.2724 16.1906 22.2388 16.1045 22.1623 16.0523C22.0858 16 21.9894 16 21.7967 16H2.20398C2.01126 16 1.9149 16 1.83837 16.0523C1.76184 16.1045 1.72823 16.1906 1.66099 16.3628C1.19658 17.552 1.06291 18.6472 1.59139 19.6703C2.19038 20.8299 3.33525 21.3104 4.77075 21.532C6.1832 21.75 8.10042 21.75 10.5344 21.75H13.4662C15.9002 21.75 17.8175 21.75 19.2299 21.532C20.6654 21.3104 21.8103 20.8299 22.4093 19.6703C22.9377 18.6472 22.8041 17.552 22.3397 16.3628Z',
  d8: 'M18.8468 10.2801C18.7605 10.1431 18.7173 10.0747 18.6497 10.0373C18.582 10 18.5011 10 18.3392 10H5.66088C5.49902 10 5.41808 10 5.35043 10.0373C5.28277 10.0747 5.23962 10.1431 5.1533 10.2801L4.83572 10.7839C4.3045 11.6266 3.8187 12.3973 3.38844 13.1044C3.14929 13.4975 3.02972 13.694 3.11572 13.847C3.20172 14 3.43358 14 3.89731 14H20.1028C20.5665 14 20.7984 14 20.8844 13.847C20.9704 13.694 20.8508 13.4975 20.6117 13.1044C20.1814 12.3973 19.6956 11.6266 19.1644 10.7839L18.8468 10.2801Z',
  d9: 'M22 21L12 3L2 21H22Z',
  d10: 'M19 15L5 15M16.1818 10L8 10',
  d11: 'M20.6352 17.8974L23.2741 22.6474H0.724854L3.36374 17.8974L20.6352 17.8974Z',
  d12: 'M19.5241 15.8974L16.7463 10.8974L7.25263 10.8974L4.47485 15.8974L19.5241 15.8974Z',
  d13: 'M8.36374 8.89737L15.6352 8.89737L11.9995 2.35303L8.36374 8.89737Z',
} as const;

export const IconPyramidStructure02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-structure-02-stroke-rounded IconPyramidStructure02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPyramidStructure02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-structure-02-duotone-rounded IconPyramidStructure02DuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      </g>
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
    </TheIconWrapper>
  );
};

export const IconPyramidStructure02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-structure-02-twotone-rounded IconPyramidStructure02TwotoneRounded"
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
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPyramidStructure02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-structure-02-solid-rounded IconPyramidStructure02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPyramidStructure02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-structure-02-bulk-rounded IconPyramidStructure02BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPyramidStructure02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-structure-02-stroke-sharp IconPyramidStructure02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPyramidStructure02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-structure-02-solid-sharp IconPyramidStructure02SolidSharp"
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPyramidStructure02: TheIconSelfPack = {
  name: 'PyramidStructure02',
  StrokeRounded: IconPyramidStructure02StrokeRounded,
  DuotoneRounded: IconPyramidStructure02DuotoneRounded,
  TwotoneRounded: IconPyramidStructure02TwotoneRounded,
  SolidRounded: IconPyramidStructure02SolidRounded,
  BulkRounded: IconPyramidStructure02BulkRounded,
  StrokeSharp: IconPyramidStructure02StrokeSharp,
  SolidSharp: IconPyramidStructure02SolidSharp,
};