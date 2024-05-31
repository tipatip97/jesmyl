import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 5C2 2.518 2.518 2 5 2H7C9.482 2 10 2.518 10 5C10 7.482 9.482 8 7 8H5C2.518 8 2 7.482 2 5Z',
  d2: 'M15 9C15 6.518 15.4532 6 17.625 6H19.375C21.5468 6 22 6.518 22 9C22 11.482 21.5468 12 19.375 12H17.625C15.4532 12 15 11.482 15 9Z',
  d3: 'M13 19C13 16.518 13.518 16 16 16H18C20.482 16 21 16.518 21 19C21 21.482 20.482 22 18 22H16C13.518 22 13 21.482 13 19Z',
  d4: 'M15 7L10 5L13.5714 16',
  d5: 'M9.31685 4.26978C9.60016 4.00473 10.0112 3.92746 10.3714 4.07155L15.3714 6.07155C15.8842 6.27666 16.1336 6.85863 15.9285 7.37141C15.7234 7.8842 15.1414 8.13361 14.6286 7.9285L11.6102 6.72113L14.5226 15.6912C14.6931 16.2165 14.4056 16.7806 13.8803 16.9511C13.355 17.1217 12.7909 16.8341 12.6203 16.3088L9.04891 5.30883C8.9291 4.93983 9.03354 4.53483 9.31685 4.26978Z',
  d6: 'M3.32323 1.38719C3.80098 1.28223 4.36327 1.25 5 1.25H7C7.63673 1.25 8.19902 1.28223 8.67677 1.38719C9.16301 1.49401 9.60828 1.68612 9.96108 2.03892C10.3139 2.39172 10.506 2.83699 10.6128 3.32323C10.7178 3.80098 10.75 4.36327 10.75 5C10.75 5.63673 10.7178 6.19902 10.6128 6.67677C10.506 7.16301 10.3139 7.60828 9.96108 7.96108C9.60828 8.31388 9.16301 8.50599 8.67677 8.61281C8.19902 8.71777 7.63673 8.75 7 8.75H5C4.36327 8.75 3.80098 8.71777 3.32323 8.61281C2.83699 8.50599 2.39172 8.31388 2.03892 7.96108C1.68612 7.60828 1.49401 7.16301 1.38719 6.67677C1.28223 6.19902 1.25 5.63673 1.25 5C1.25 4.36327 1.28223 3.80098 1.38719 3.32323C1.49401 2.83699 1.68612 2.39172 2.03892 2.03892C2.39172 1.68612 2.83699 1.49401 3.32323 1.38719Z',
  d7: 'M14.9337 6.07537C15.5646 5.35433 16.5586 5.25 17.625 5.25H19.375C20.4414 5.25 21.4354 5.35433 22.0663 6.07537C22.3776 6.43114 22.5411 6.87072 22.6318 7.34258C22.7218 7.81105 22.75 8.36549 22.75 9C22.75 9.63451 22.7218 10.1889 22.6318 10.6574C22.5411 11.1293 22.3776 11.5689 22.0663 11.9246C21.4354 12.6457 20.4414 12.75 19.375 12.75H17.625C16.5586 12.75 15.5646 12.6457 14.9337 11.9246C14.6224 11.5689 14.4589 11.1293 14.3682 10.6574C14.2782 10.1889 14.25 9.63451 14.25 9C14.25 8.36549 14.2782 7.81105 14.3682 7.34258C14.4589 6.87072 14.6224 6.43114 14.9337 6.07537Z',
  d8: 'M14.3232 15.3872C14.801 15.2822 15.3633 15.25 16 15.25H18C18.6367 15.25 19.199 15.2822 19.6768 15.3872C20.163 15.494 20.6083 15.6861 20.9611 16.0389C21.3139 16.3917 21.506 16.837 21.6128 17.3232C21.7178 17.801 21.75 18.3633 21.75 19C21.75 19.6367 21.7178 20.199 21.6128 20.6768C21.506 21.163 21.3139 21.6083 20.9611 21.9611C20.6083 22.3139 20.163 22.506 19.6768 22.6128C19.199 22.7178 18.6367 22.75 18 22.75H16C15.3633 22.75 14.801 22.7178 14.3232 22.6128C13.837 22.506 13.3917 22.3139 13.0389 21.9611C12.6861 21.6083 12.494 21.163 12.3872 20.6768C12.2822 20.199 12.25 19.6367 12.25 19C12.25 18.3633 12.2822 17.801 12.3872 17.3232C12.494 16.837 12.6861 16.3917 13.0389 16.0389C13.3917 15.6861 13.837 15.494 14.3232 15.3872Z',
  d9: 'M9.92188 7.99933C9.93492 7.98695 9.94785 7.97435 9.96066 7.96154C10.3135 7.60874 10.5056 7.16348 10.6124 6.67723C10.7173 6.19948 10.7496 5.6372 10.7496 5.00046C10.7496 4.72431 10.7435 4.46217 10.7281 4.21484L15.0571 5.94644C15.0144 5.9872 14.9731 6.03029 14.9332 6.07584C14.6219 6.4316 14.4585 6.87119 14.3678 7.34305C14.3402 7.48675 14.3184 7.63854 14.3014 7.79825L11.6098 6.72159L14.4171 15.3681C14.3853 15.3743 14.3539 15.3808 14.3228 15.3876C13.8366 15.4945 13.3913 15.6866 13.0385 16.0394C12.9021 16.1757 12.7898 16.3259 12.6971 16.4869C12.6662 16.4313 12.6403 16.372 12.6199 16.3093L9.92188 7.99933Z',
  d10: 'M10 8V2H2V8H10Z',
  d11: 'M22 12V6H15V12H22Z',
  d12: 'M21 22V16H13V22H21Z',
  d13: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H10C10.4142 1.25 10.75 1.58579 10.75 2V8C10.75 8.41421 10.4142 8.75 10 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8V2Z',
  d14: 'M14.25 6C14.25 5.58579 14.5858 5.25 15 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6V12C22.75 12.4142 22.4142 12.75 22 12.75H15C14.5858 12.75 14.25 12.4142 14.25 12V6Z',
  d15: 'M12.25 16C12.25 15.5858 12.5858 15.25 13 15.25H21C21.4142 15.25 21.75 15.5858 21.75 16V22C21.75 22.4142 21.4142 22.75 21 22.75H13C12.5858 22.75 12.25 22.4142 12.25 22V16Z',
  d16: 'M9.31685 4.26978C9.60016 4.00473 10.0112 3.92746 10.3714 4.07155L15.3714 6.07155L14.6286 7.9285L11.6102 6.72113L14.5226 15.6912L12.6203 16.3088L9.04891 5.30883C8.9291 4.93983 9.03354 4.53483 9.31685 4.26978Z',
} as const;

export const IconStructure05StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-05-stroke-rounded IconStructure05StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure05DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-05-duotone-rounded IconStructure05DuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure05TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-05-twotone-rounded IconStructure05TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure05SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-05-solid-rounded IconStructure05SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure05BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-05-bulk-rounded IconStructure05BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure05StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-05-stroke-sharp IconStructure05StrokeSharp"
    >
      <path 
        d={d.d10} 
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
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure05SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-05-solid-sharp IconStructure05SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStructure05: TheIconSelfPack = {
  name: 'Structure05',
  StrokeRounded: IconStructure05StrokeRounded,
  DuotoneRounded: IconStructure05DuotoneRounded,
  TwotoneRounded: IconStructure05TwotoneRounded,
  SolidRounded: IconStructure05SolidRounded,
  BulkRounded: IconStructure05BulkRounded,
  StrokeSharp: IconStructure05StrokeSharp,
  SolidSharp: IconStructure05SolidSharp,
};