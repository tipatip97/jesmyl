import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.89128 7.55559C9.34109 7.8715 7.89853 8.51654 8.77715 9.32371C9.20634 9.71801 9.68436 10 10.2853 10H13.7147C14.3156 10 14.7937 9.71801 15.2229 9.32371C16.1015 8.51654 14.6589 7.8715 14.1087 7.55559C12.8185 6.8148 11.1815 6.8148 9.89128 7.55559Z',
  d2: 'M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z',
  d3: 'M16.3913 19.5556C15.8411 19.8715 14.3985 20.5165 15.2771 21.3237C15.7063 21.718 16.1844 22 16.7853 22H20.2147C20.8156 22 21.2937 21.718 21.7229 21.3237C22.6015 20.5165 21.1589 19.8715 20.6087 19.5556C19.3185 18.8148 17.6815 18.8148 16.3913 19.5556Z',
  d4: 'M20 15.5C20 16.3284 19.3284 17 18.5 17C17.6716 17 17 16.3284 17 15.5C17 14.6716 17.6716 14 18.5 14C19.3284 14 20 14.6716 20 15.5Z',
  d5: 'M3.39128 19.5556C2.84109 19.8715 1.39853 20.5165 2.27715 21.3237C2.70634 21.718 3.18436 22 3.78534 22H7.21466C7.81564 22 8.29366 21.718 8.72285 21.3237C9.60147 20.5165 8.15891 19.8715 7.60872 19.5556C6.31854 18.8148 4.68146 18.8148 3.39128 19.5556Z',
  d6: 'M7 15.5C7 16.3284 6.32843 17 5.5 17C4.67157 17 4 16.3284 4 15.5C4 14.6716 4.67157 14 5.5 14C6.32843 14 7 14.6716 7 15.5Z',
  d7: 'M12 13V15.5M12 15.5L14.5 17M12 15.5L9.5 17',
  d8: 'M9.5178 6.90518C11.0392 6.03161 12.9607 6.03161 14.4821 6.90518C14.5142 6.92361 14.5585 6.94753 14.6118 6.97636L14.6118 6.97637C14.8801 7.12151 15.3784 7.39106 15.7164 7.71001C15.9256 7.9075 16.1922 8.22751 16.242 8.66687C16.2976 9.15696 16.0641 9.56934 15.7302 9.87602C15.2304 10.3352 14.5788 10.75 13.7146 10.75H10.2853C9.42115 10.75 8.76956 10.3352 8.26972 9.87602C7.9359 9.56934 7.70238 9.15696 7.75794 8.66687C7.80774 8.22751 8.07435 7.9075 8.28359 7.71001C8.62151 7.39106 9.11984 7.12151 9.38817 6.97637C9.44148 6.94753 9.48571 6.92361 9.5178 6.90518Z',
  d9: 'M9.75 3.5C9.75 2.25736 10.7574 1.25 12 1.25C13.2426 1.25 14.25 2.25736 14.25 3.5C14.25 4.74264 13.2426 5.75 12 5.75C10.7574 5.75 9.75 4.74264 9.75 3.5Z',
  d10: 'M21.1118 18.9764L21.1118 18.9764C21.3801 19.1215 21.8784 19.3911 22.2164 19.71C22.4256 19.9075 22.6922 20.2275 22.742 20.6669C22.7976 21.157 22.5641 21.5693 22.2302 21.876C21.7304 22.3352 21.0788 22.75 20.2146 22.75H16.7853C15.9212 22.75 15.2696 22.3352 14.7697 21.876C14.4359 21.5693 14.2024 21.157 14.2579 20.6669C14.3077 20.2275 14.5743 19.9075 14.7836 19.71C15.1215 19.3911 15.6198 19.1215 15.8882 18.9764L15.8882 18.9764C15.9415 18.9475 15.9857 18.9236 16.0178 18.9052C17.5392 18.0316 19.4607 18.0316 20.9821 18.9052C21.0142 18.9236 21.0585 18.9475 21.1118 18.9764Z',
  d11: 'M16.25 15.5C16.25 14.2574 17.2574 13.25 18.5 13.25C19.7426 13.25 20.75 14.2574 20.75 15.5C20.75 16.7426 19.7426 17.75 18.5 17.75C17.2574 17.75 16.25 16.7426 16.25 15.5Z',
  d12: 'M8.11176 18.9764L8.11178 18.9764C8.38011 19.1215 8.87844 19.3911 9.21636 19.71C9.4256 19.9075 9.6922 20.2275 9.74201 20.6669C9.79756 21.157 9.56405 21.5693 9.23023 21.876C8.73039 22.3352 8.0788 22.75 7.21464 22.75H3.78531C2.92115 22.75 2.26956 22.3352 1.76972 21.876C1.4359 21.5693 1.20238 21.157 1.25794 20.6669C1.30774 20.2275 1.57435 19.9075 1.78359 19.71C2.12151 19.3911 2.61984 19.1215 2.88817 18.9764L2.88818 18.9764C2.94149 18.9475 2.98571 18.9236 3.0178 18.9052C4.53925 18.0316 6.4607 18.0316 7.98215 18.9052C8.01423 18.9236 8.05846 18.9475 8.11176 18.9764Z',
  d13: 'M3.25 15.5C3.25 14.2574 4.25736 13.25 5.5 13.25C6.74264 13.25 7.75 14.2574 7.75 15.5C7.75 16.7426 6.74264 17.75 5.5 17.75C4.25736 17.75 3.25 16.7426 3.25 15.5Z',
  d14: 'M11.9999 12C12.5522 12 12.9999 12.4477 12.9999 13V14.9338L15.0144 16.1425C15.488 16.4267 15.6415 17.0409 15.3574 17.5145C15.0733 17.9881 14.459 18.1416 13.9854 17.8575L11.9999 16.6662L10.0144 17.8575C9.54082 18.1416 8.92656 17.9881 8.64241 17.5145C8.35827 17.0409 8.51183 16.4267 8.98541 16.1425L10.9999 14.9338V13C10.9999 12.4477 11.4476 12 11.9999 12Z',
  d15: 'M11.9935 12.9648V15.457M11.9935 15.457L14.4918 16.9522M11.9935 15.457L9.49512 16.9522',
  d16: 'M13.5267 3.50152C13.5267 4.34535 12.845 5.02941 12.0041 5.02941C11.1632 5.02941 10.4816 4.34535 10.4816 3.50152C10.4816 2.65769 11.1632 1.97363 12.0041 1.97363C12.845 1.97363 13.5267 2.65769 13.5267 3.50152Z',
  d17: 'M8.99707 10.5206C9.17625 6.52097 14.7427 6.44982 15.0112 10.5205L8.99707 10.5206Z',
  d18: 'M6.51984 14.9546C6.51984 15.7985 5.83816 16.4825 4.99728 16.4825C4.15639 16.4825 3.47472 15.7985 3.47472 14.9546C3.47472 14.1108 4.15639 13.4268 4.99728 13.4268C5.83816 13.4268 6.51984 14.1108 6.51984 14.9546Z',
  d19: 'M1.99023 21.9737C2.16942 17.9741 7.73586 17.9029 8.00439 21.9736L1.99023 21.9737Z',
  d20: 'M20.511 14.9546C20.511 15.7985 19.8294 16.4825 18.9885 16.4825C18.1476 16.4825 17.4659 15.7985 17.4659 14.9546C17.4659 14.1108 18.1476 13.4268 18.9885 13.4268C19.8294 13.4268 20.511 14.1108 20.511 14.9546Z',
  d21: 'M15.9814 21.9737C16.1606 17.9741 21.7271 17.9029 21.9956 21.9736L15.9814 21.9737Z',
  d22: 'M8.25 10.5C8.25 8.42893 9.92893 6.75 12 6.75C14.0711 6.75 15.75 8.42893 15.75 10.5V11.25H8.25V10.5Z',
  d23: 'M2.75 15C2.75 13.7574 3.75736 12.75 5 12.75C6.24264 12.75 7.25 13.7574 7.25 15C7.25 16.2426 6.24264 17.25 5 17.25C3.75736 17.25 2.75 16.2426 2.75 15Z',
  d24: 'M1.25 22C1.25 19.9289 2.92893 18.25 5 18.25C7.07107 18.25 8.75 19.9289 8.75 22V22.75H1.25V22Z',
  d25: 'M16.75 15C16.75 13.7574 17.7574 12.75 19 12.75C20.2426 12.75 21.25 13.7574 21.25 15C21.25 16.2426 20.2426 17.25 19 17.25C17.7574 17.25 16.75 16.2426 16.75 15Z',
  d26: 'M15.25 22C15.25 19.9289 16.9289 18.25 19 18.25C21.0711 18.25 22.75 19.9289 22.75 22V22.75H15.25V22Z',
  d27: 'M11.0001 14.9338V13H13.0001V14.9338L15.0146 16.1425L13.9856 17.8575L12.0001 16.6662L10.0146 17.8575L8.9856 16.1425L11.0001 14.9338Z',
} as const;

export const IconHierarchyStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-stroke-rounded IconHierarchyStrokeRounded"
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
        strokeLinecap="round" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchyDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-duotone-rounded IconHierarchyDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchyTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-twotone-rounded IconHierarchyTwotoneRounded"
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
        strokeLinecap="round" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-solid-rounded IconHierarchySolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchyBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-bulk-rounded IconHierarchyBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchyStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-stroke-sharp IconHierarchyStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconHierarchySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-solid-sharp IconHierarchySolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHierarchy: TheIconSelfPack = {
  name: 'Hierarchy',
  StrokeRounded: IconHierarchyStrokeRounded,
  DuotoneRounded: IconHierarchyDuotoneRounded,
  TwotoneRounded: IconHierarchyTwotoneRounded,
  SolidRounded: IconHierarchySolidRounded,
  BulkRounded: IconHierarchyBulkRounded,
  StrokeSharp: IconHierarchyStrokeSharp,
  SolidSharp: IconHierarchySolidSharp,
};