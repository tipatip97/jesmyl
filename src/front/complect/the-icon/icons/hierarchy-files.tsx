import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.9645 3.96447L17.4853 2.48528C17.2959 2.29589 17.2012 2.20119 17.0891 2.13591C17.0114 2.09062 16.9279 2.05604 16.8409 2.03308C16.7155 2 16.5816 2 16.3137 2C15.0861 2 14.4724 2 14.0134 2.26029C13.6989 2.43864 13.4386 2.6989 13.2603 3.01338C13 3.47235 13 4.08614 13 5.31371V6.5C13 7.90446 13 8.60669 13.3371 9.11114C13.483 9.32952 13.6705 9.51702 13.8889 9.66294C14.3933 10 15.0955 10 16.5 10C17.9045 10 18.6067 10 19.1111 9.66294C19.3295 9.51702 19.517 9.32952 19.6629 9.11114C20 8.60669 20 7.89611 20 6.47495C20 5.8414 20 5.52462 19.9098 5.23452C19.8736 5.11833 19.827 5.00567 19.7704 4.89796C19.629 4.62904 19.4075 4.40751 18.9645 3.96447Z',
  d2: 'M18.9645 15.9645L17.4853 14.4853C17.2959 14.2959 17.2012 14.2012 17.0891 14.1359C17.0114 14.0906 16.9279 14.056 16.8409 14.0331C16.7155 14 16.5816 14 16.3137 14C15.0861 14 14.4724 14 14.0134 14.2603C13.6989 14.4386 13.4386 14.6989 13.2603 15.0134C13 15.4724 13 16.0861 13 17.3137V18.5C13 19.9045 13 20.6067 13.3371 21.1111C13.483 21.3295 13.6705 21.517 13.8889 21.6629C14.3933 22 15.0955 22 16.5 22C17.9045 22 18.6067 22 19.1111 21.6629C19.3295 21.517 19.517 21.3295 19.6629 21.1111C20 20.6067 20 19.8961 20 18.4749C20 17.8414 20 17.5246 19.9098 17.2345C19.8736 17.1183 19.827 17.0057 19.7704 16.898C19.629 16.629 19.4075 16.4075 18.9645 15.9645Z',
  d3: 'M10 6H4M4 6V2M4 6V12C4 14.8284 4 16.2426 4.87868 17.1213C5.75736 18 7.17157 18 10 18',
  d4: 'M16.4914 13.3751C16.7052 13.3747 16.9343 13.3742 17.1572 13.433C17.3094 13.4732 17.4556 13.5337 17.5916 13.613C17.7908 13.729 17.9525 13.8913 18.1034 14.0428L19.6854 15.6248C20.0646 16.0035 20.3637 16.3022 20.5593 16.6742C20.6371 16.8223 20.7013 16.9772 20.751 17.1369C20.8758 17.5383 20.8755 17.9645 20.875 18.5057C20.8751 19.1838 20.875 19.881 20.8291 20.3371C20.7811 20.8134 20.6769 21.2559 20.4115 21.653C20.2109 21.9532 19.9531 22.211 19.6528 22.4117C19.2568 22.6763 18.8175 22.781 18.344 22.8292C17.8917 22.8752 17.3329 22.8752 16.6634 22.8751C15.9938 22.8752 15.3583 22.8752 14.906 22.8292C14.4325 22.781 13.9932 22.6763 13.5972 22.4117C13.2969 22.211 13.0391 21.9532 12.8385 21.653C12.5739 21.257 12.4691 20.8176 12.421 20.3441C12.375 19.8918 12.375 19.3331 12.375 18.6635V18.6635V17.4054V17.4054C12.375 16.8201 12.375 16.3316 12.4105 15.9337C12.4476 15.5183 12.528 15.1298 12.7329 14.7685C12.9781 14.3361 13.336 13.9783 13.7684 13.733C14.1297 13.5281 14.5182 13.4478 14.9336 13.4106C15.3314 13.3751 15.906 13.3751 16.4914 13.3751Z',
  d5: 'M16.4914 1.37495C16.7052 1.37454 16.9343 1.3741 17.1572 1.43291C17.3094 1.47308 17.4556 1.5336 17.5916 1.61285C17.7908 1.72889 17.9525 1.89118 18.1034 2.04268L19.6854 3.62471C20.0646 4.00338 20.3637 4.30203 20.5593 4.67405C20.6371 4.82216 20.7013 4.97705 20.751 5.13682C20.8758 5.53817 20.8755 5.9644 20.875 6.50562C20.8751 7.18368 20.875 7.88085 20.8291 8.33698C20.7811 8.81328 20.6769 9.25575 20.4115 9.65283C20.2109 9.9531 19.9531 10.2109 19.6528 10.4116C19.2568 10.6762 18.8175 10.7809 18.344 10.829C17.8917 10.875 17.3329 10.875 16.6634 10.875C15.9938 10.875 15.3583 10.875 14.906 10.829C14.4325 10.7809 13.9932 10.6762 13.5972 10.4116C13.2969 10.2109 13.0391 9.9531 12.8385 9.65283C12.5739 9.25684 12.4691 8.81747 12.421 8.34399C12.375 7.89167 12.375 7.33295 12.375 6.66338V6.66336V5.40531V5.40528C12.375 4.81995 12.375 4.33143 12.4105 3.93361C12.4476 3.51816 12.528 3.1297 12.7329 2.76841C12.9781 2.336 13.336 1.97815 13.7684 1.73292C14.1297 1.52802 14.5182 1.44763 14.9336 1.41052C15.3314 1.37499 15.906 1.37493 16.4914 1.37495Z',
  d6: 'M4.125 1.125C4.67729 1.125 5.125 1.57272 5.125 2.125V5.125H10.125C10.6773 5.125 11.125 5.57272 11.125 6.125C11.125 6.67728 10.6773 7.125 10.125 7.125H5.125V12.125C5.125 13.5675 5.12713 14.5487 5.22592 15.2836C5.32085 15.9896 5.48822 16.3166 5.71079 16.5392C5.93336 16.7618 6.26038 16.9292 6.96643 17.0241C7.70125 17.1229 8.68252 17.125 10.125 17.125C10.6773 17.125 11.125 17.5727 11.125 18.125C11.125 18.6773 10.6773 19.125 10.125 19.125H10.0545C8.70033 19.125 7.5837 19.1251 6.69994 19.0062C5.77211 18.8815 4.95268 18.6095 4.29658 17.9534C3.64047 17.2973 3.3685 16.4779 3.24375 15.5501C3.12494 14.6663 3.12497 13.5497 3.125 12.1956L3.125 2.125C3.125 1.57272 3.57272 1.125 4.125 1.125Z',
  d7: 'M9.99305 5.99473H4M4 5.99473V2M4 5.99473L4.00117 17.9789H9.99305',
  d8: 'M13.1214 9.98944H19.8964C19.9516 9.98944 19.9963 9.94473 19.9963 9.88958V4.53771L17.4798 1.98535H13.1214C13.0662 1.98535 13.0215 2.03006 13.0215 2.08522V9.88958C13.0215 9.94473 13.0662 9.98944 13.1214 9.98944Z',
  d9: 'M13.1214 21.9807H19.8964C19.9516 21.9807 19.9963 21.9359 19.9963 21.8808V16.5289L17.4798 13.9766H13.1214C13.0662 13.9766 13.0215 14.0213 13.0215 14.0764V21.8808C13.0215 21.9359 13.0662 21.9807 13.1214 21.9807Z',
  d10: 'M12.25 2C12.25 1.58579 12.5858 1.25 13 1.25H17.8107L20.75 4.18934V10C20.75 10.4142 20.4142 10.75 20 10.75H13C12.5858 10.75 12.25 10.4142 12.25 10V2Z',
  d11: 'M12.25 14C12.25 13.5858 12.5858 13.25 13 13.25H17.8107L20.75 16.1893V22C20.75 22.4142 20.4142 22.75 20 22.75H13C12.5858 22.75 12.25 22.4142 12.25 22V14Z',
  d12: 'M5.25 5V2H3.25L3.25117 18.0001C3.25123 18.5523 3.69892 19 4.25117 19H10.25V17H5.25107L5.2501 7H10.25V5H5.25Z',
} as const;

export const IconHierarchyFilesStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-files-stroke-rounded IconHierarchyFilesStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchyFilesDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-files-duotone-rounded IconHierarchyFilesDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchyFilesTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-files-twotone-rounded IconHierarchyFilesTwotoneRounded"
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

export const IconHierarchyFilesSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-files-solid-rounded IconHierarchyFilesSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconHierarchyFilesBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-files-bulk-rounded IconHierarchyFilesBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchyFilesStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-files-stroke-sharp IconHierarchyFilesStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconHierarchyFilesSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-files-solid-sharp IconHierarchyFilesSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfHierarchyFiles: TheIconSelfPack = {
  name: 'HierarchyFiles',
  StrokeRounded: IconHierarchyFilesStrokeRounded,
  DuotoneRounded: IconHierarchyFilesDuotoneRounded,
  TwotoneRounded: IconHierarchyFilesTwotoneRounded,
  SolidRounded: IconHierarchyFilesSolidRounded,
  BulkRounded: IconHierarchyFilesBulkRounded,
  StrokeSharp: IconHierarchyFilesStrokeSharp,
  SolidSharp: IconHierarchyFilesSolidSharp,
};