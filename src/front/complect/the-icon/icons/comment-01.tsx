import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 13.5H16M8 8.5H12',
  d2: 'M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5',
  d3: 'M14 2.5H10C6.22876 2.5 4.34315 2.5 3.17157 3.67157C2 4.84315 2 6.72876 2 10.5V11C2 14.7712 2 16.6569 3.17157 17.8284C3.82475 18.4816 4.7987 18.8721 6.09881 19C5.86573 19.9342 5.7338 20.9317 6.31569 21.3651C6.806 21.7218 7.58729 21.3408 9.14987 20.5789C10.2465 20.0441 11.3562 19.4309 12.5546 19.155C12.9931 19.0551 13.4395 19.0125 14 19C17.7712 19 19.6569 19 20.8284 17.8284C22 16.6569 22 14.7712 22 11V10.5C22 6.72876 22 4.84315 20.8284 3.67157C19.6569 2.5 17.7712 2.5 14 2.5Z',
  d4: 'M14.15 1.75H9.85C5.79592 1.75 3.76888 1.75 2.50944 3.01407C1.25 4.27813 1.25 6.31261 1.25 10.3816V10.9211C1.25 14.99 1.25 17.0245 2.50944 18.2886C3.09038 18.8716 3.90736 19.2607 4.96365 19.4558C5.28808 19.5158 5.45029 19.5457 5.52074 19.6474C5.5912 19.7492 5.56226 19.9112 5.5044 20.2351C5.36431 21.0194 5.38644 21.7285 5.88937 22.1045C6.41645 22.4893 7.25633 22.0782 8.93611 21.2562C9.12216 21.1651 9.30888 21.0718 9.49596 20.9783L9.49881 20.9768C10.4961 20.4783 11.5124 19.9703 12.5962 19.7199C13.0676 19.6121 13.5475 19.5661 14.15 19.5526C18.2041 19.5526 20.2311 19.5526 21.4906 18.2886C22.75 17.0245 22.75 14.99 22.75 10.9211V10.3816C22.75 6.31261 22.75 4.27813 21.4906 3.01407C20.2311 1.75 18.2041 1.75 14.15 1.75ZM16.75 13.5C16.75 13.9142 16.4142 14.25 16 14.25H8C7.58579 14.25 7.25 13.9142 7.25 13.5C7.25 13.0858 7.58579 12.75 8 12.75H16C16.4142 12.75 16.75 13.0858 16.75 13.5ZM12.75 8.5C12.75 8.91421 12.4142 9.25 12 9.25H8C7.58579 9.25 7.25 8.91421 7.25 8.5C7.25 8.08579 7.58579 7.75 8 7.75H12C12.4142 7.75 12.75 8.08579 12.75 8.5Z',
  d5: 'M9.85 1.75H14.15C18.2041 1.75 20.2311 1.75 21.4906 3.01407C22.75 4.27813 22.75 6.31261 22.75 10.3816V10.9211C22.75 14.99 22.75 17.0245 21.4906 18.2886C20.2311 19.5526 18.2041 19.5526 14.15 19.5526C13.5475 19.5661 13.0676 19.6121 12.5962 19.7199C11.5124 19.9703 10.4961 20.4783 9.49881 20.9768L9.4985 20.977C9.31046 21.071 9.12311 21.1646 8.93611 21.2562C7.25633 22.0782 6.41645 22.4893 5.88937 22.1045C5.38644 21.7285 5.36431 21.0194 5.5044 20.2351C5.56226 19.9112 5.5912 19.7492 5.52074 19.6474C5.45029 19.5457 5.28808 19.5158 4.96365 19.4558C3.90736 19.2607 3.09038 18.8716 2.50944 18.2886C1.25 17.0245 1.25 14.99 1.25 10.9211V10.3816C1.25 6.31261 1.25 4.27813 2.50944 3.01407C3.76888 1.75 5.79592 1.75 9.85 1.75Z',
  d6: 'M16 14.25C16.4142 14.25 16.75 13.9142 16.75 13.5C16.75 13.0858 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 13.0858 7.25 13.5C7.25 13.9142 7.58579 14.25 8 14.25H16ZM12 9.25C12.4142 9.25 12.75 8.91421 12.75 8.5C12.75 8.08579 12.4142 7.75 12 7.75H8C7.58579 7.75 7.25 8.08579 7.25 8.5C7.25 8.91421 7.58579 9.25 8 9.25H12Z',
  d7: 'M8.00476 12.5027H16.0113M8.00476 7.50024H12.008',
  d8: 'M21.9991 2.00049H2.00085V17.9587H6.00291V21.9895C6.00291 21.9979 6.01267 22.0026 6.01921 21.9973L11.0143 17.9587H21.9991V2.00049Z',
  d9: 'M5.25 22.75L11.2631 18.75L22.75 18.75V1.25L1.25 1.25V18.75H5.25V22.75ZM8 13.25H16V11.75H8V13.25ZM8 8.25H12V6.75H8V8.25Z',
} as const;

export const IconComment01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-01-stroke-rounded IconComment01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconComment01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-01-duotone-rounded IconComment01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComment01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-01-twotone-rounded IconComment01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconComment01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-01-solid-rounded IconComment01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComment01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-01-bulk-rounded IconComment01BulkRounded"
    >
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

export const IconComment01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-01-stroke-sharp IconComment01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconComment01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-01-solid-sharp IconComment01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfComment01: TheIconSelfPack = {
  name: 'Comment01',
  StrokeRounded: IconComment01StrokeRounded,
  DuotoneRounded: IconComment01DuotoneRounded,
  TwotoneRounded: IconComment01TwotoneRounded,
  SolidRounded: IconComment01SolidRounded,
  BulkRounded: IconComment01BulkRounded,
  StrokeSharp: IconComment01StrokeSharp,
  SolidSharp: IconComment01SolidSharp,
};