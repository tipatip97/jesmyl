import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5',
  d2: 'M14 2.5H10C6.22876 2.5 4.34315 2.5 3.17157 3.67157C2 4.84315 2 6.72876 2 10.5V11C2 14.7712 2 16.6569 3.17157 17.8284C3.82475 18.4816 4.7987 18.8721 6.09881 19C5.86573 19.9342 5.7338 20.9317 6.31569 21.3651C6.806 21.7218 7.58729 21.3408 9.14987 20.5789C10.2465 20.0441 11.3562 19.4309 12.5546 19.155C12.9931 19.0551 13.4395 19.0125 14 19C17.7712 19 19.6569 19 20.8284 17.8284C22 16.6569 22 14.7712 22 11V10.5C22 6.72876 22 4.84315 20.8284 3.67157C19.6569 2.5 17.7712 2.5 14 2.5Z',
  d3: 'M14 2.5H10C6.22876 2.5 4.34315 2.5 3.17157 3.67157C2 4.84315 2 6.72876 2 10.5V11C2 14.7712 2 16.6569 3.17157 17.8284C3.82475 18.4816 4.7987 18.8721 6.09881 19M14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5',
  d4: 'M9.85 1.75H14.15C18.2041 1.75 20.2311 1.75 21.4906 3.01407C22.75 4.27813 22.75 6.31261 22.75 10.3816V10.9211C22.75 14.99 22.75 17.0245 21.4906 18.2886C20.2311 19.5526 18.2041 19.5526 14.15 19.5526C13.5475 19.5661 13.0676 19.6121 12.5962 19.7199C11.5124 19.9703 10.4961 20.4783 9.49881 20.9768L9.4985 20.977C9.31046 21.071 9.12311 21.1646 8.93611 21.2562C7.25633 22.0782 6.41645 22.4893 5.88937 22.1045C5.38644 21.7285 5.36431 21.0194 5.5044 20.2351C5.56226 19.9112 5.5912 19.7492 5.52074 19.6474C5.45029 19.5457 5.28808 19.5158 4.96365 19.4558C3.90736 19.2607 3.09038 18.8716 2.50944 18.2886C1.25 17.0245 1.25 14.99 1.25 10.9211V10.3816C1.25 6.31261 1.25 4.27813 2.50944 3.01407C3.76888 1.75 5.79592 1.75 9.85 1.75Z',
  d5: 'M21.9991 2.00049H2.00085V17.9587H6.00291V21.9895C6.00291 21.9979 6.01267 22.0026 6.01921 21.9973L11.0143 17.9587H21.9991V2.00049Z',
  d6: 'M11.2631 18.75L5.25 22.75V18.75H1.25V1.25L22.75 1.25V18.75L11.2631 18.75Z',
} as const;

export const IconComment02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-02-stroke-rounded IconComment02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComment02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-02-duotone-rounded IconComment02DuotoneRounded"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconComment02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-02-twotone-rounded IconComment02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconComment02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-02-solid-rounded IconComment02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComment02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-02-bulk-rounded IconComment02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComment02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-02-stroke-sharp IconComment02StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconComment02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-02-solid-sharp IconComment02SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfComment02: TheIconSelfPack = {
  name: 'Comment02',
  StrokeRounded: IconComment02StrokeRounded,
  DuotoneRounded: IconComment02DuotoneRounded,
  TwotoneRounded: IconComment02TwotoneRounded,
  SolidRounded: IconComment02SolidRounded,
  BulkRounded: IconComment02BulkRounded,
  StrokeSharp: IconComment02StrokeSharp,
  SolidSharp: IconComment02SolidSharp,
};