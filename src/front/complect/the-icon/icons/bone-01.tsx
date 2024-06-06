import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.3997 5.83806C17.8288 5.40901 18.3665 5.15489 18.9243 5.07568M18.9243 5.07568C19.7347 4.96061 20.5874 5.21474 21.2107 5.83806C22.2631 6.89044 22.2631 8.59667 21.2107 9.64905C20.3628 10.497 19.0904 10.6617 18.0775 10.1432C17.6635 9.93132 17.1331 9.91564 16.8043 10.2445L10.2445 16.8043C9.91564 17.1331 9.93132 17.6635 10.1432 18.0775C10.6617 19.0904 10.497 20.3628 9.64904 21.2107C8.59667 22.2631 6.89044 22.2631 5.83806 21.2107C5.21474 20.5874 4.96061 19.7347 5.07568 18.9243M18.9243 5.07568C19.0394 4.26531 18.7853 3.41261 18.1619 2.78928C17.1096 1.73691 15.4033 1.73691 14.351 2.78928C13.503 3.6372 13.3383 4.90961 13.8568 5.92247C14.0687 6.33646 14.0844 6.86686 13.7555 7.19572L7.19572 13.7555C6.86686 14.0844 6.33646 14.0687 5.92247 13.8568C4.90961 13.3383 3.6372 13.503 2.78928 14.351C1.73691 15.4033 1.73691 17.1096 2.78928 18.1619C3.4126 18.7853 4.26532 19.0394 5.07568 18.9243M6.60026 18.1619C6.17121 18.591 5.63348 18.8451 5.07568 18.9243',
  d2: 'M21.2107 5.83806C20.5874 5.21474 19.7347 4.96061 18.9243 5.07568C19.0394 4.26531 18.7853 3.41261 18.1619 2.78928C17.1096 1.73691 15.4033 1.73691 14.351 2.78928C13.503 3.6372 13.3383 4.90961 13.8568 5.92247C14.0687 6.33646 14.0844 6.86686 13.7555 7.19572L7.19572 13.7555C6.86686 14.0844 6.33646 14.0687 5.92247 13.8568C4.90961 13.3383 3.6372 13.503 2.78928 14.351C1.73691 15.4033 1.73691 17.1096 2.78928 18.1619C3.4126 18.7853 4.26532 19.0394 5.07568 18.9243C4.96061 19.7347 5.21474 20.5874 5.83806 21.2107C6.89044 22.2631 8.59667 22.2631 9.64904 21.2107C10.497 20.3628 10.6617 19.0904 10.1432 18.0775C9.93132 17.6635 9.91564 17.1331 10.2445 16.8043L16.8043 10.2445C17.1331 9.91564 17.6635 9.93132 18.0775 10.1432C19.0904 10.6617 20.3628 10.497 21.2107 9.64905C22.2631 8.59667 22.2631 6.89044 21.2107 5.83806Z',
  d3: 'M17.3997 5.83806C17.8288 5.40901 18.3665 5.15489 18.9243 5.07568M18.9243 5.07568C19.7347 4.96061 20.5874 5.21474 21.2107 5.83806C22.2631 6.89044 22.2631 8.59667 21.2107 9.64905C20.3628 10.497 19.0904 10.6617 18.0775 10.1432C17.6635 9.93132 17.1331 9.91564 16.8043 10.2445L13.5 13.5M18.9243 5.07568C19.0394 4.26531 18.7852 3.41261 18.1619 2.78928C17.1095 1.73691 15.4033 1.73691 14.3509 2.78928C13.503 3.6372 13.3383 4.90961 13.8567 5.92247C14.0687 6.33646 14.0843 6.86686 13.7555 7.19572L10.5 10.5',
  d4: 'M13.8206 2.25895C15.1659 0.913683 17.347 0.913684 18.6923 2.25895C19.2694 2.83606 19.5986 3.56729 19.6807 4.31929C20.4327 4.40138 21.1639 4.73063 21.7411 5.30774C23.0863 6.653 23.0863 8.83411 21.7411 10.1794C20.6563 11.2641 19.0298 11.4733 17.7358 10.8109C17.6376 10.7633 17.4199 10.6896 17.3346 10.7748L10.7748 17.3346C10.68 17.4295 10.7593 17.6416 10.8109 17.7358C11.4733 19.0298 11.2641 20.6563 10.1794 21.7411C8.83411 23.0863 6.653 23.0863 5.30773 21.7411C4.73063 21.1639 4.40138 20.4327 4.31929 19.6807C3.56729 19.5986 2.83606 19.2694 2.25895 18.6923C0.913684 17.347 0.913684 15.1659 2.25895 13.8206C3.34367 12.7359 4.97016 12.5267 6.26421 13.1891C6.36382 13.2353 6.5835 13.3071 6.66539 13.2252L13.2252 6.66539C13.3104 6.58011 13.2367 6.3624 13.1891 6.26421C12.5267 4.97016 12.7359 3.34367 13.8206 2.25895Z',
  d5: 'M7.35485 18.0364C6.78882 18.6048 5.99233 18.9588 5.11002 18.9588C3.39241 18.9588 2 17.6175 2 15.963C2 14.3086 3.39241 12.9673 5.11002 12.9673C5.75621 12.9673 6.51775 13.2886 7.06283 13.8126L13.8555 6.9538C13.2874 6.3141 13.0168 5.98332 13.0168 4.96665C13.0168 3.42288 14.3776 2 15.9623 2C17.4404 2 18.9785 3.17826 18.9785 5.04418M18.9785 5.04418C20.6962 5.04418 22 6.32127 22 7.97575C22 9.63023 20.6962 11.0356 18.9785 11.0356C18.3324 11.0356 17.5087 10.7373 16.9636 10.2133L10.233 17.0491C10.8012 17.6888 11.0718 18.0196 11.0718 19.0363C11.0718 20.58 9.71093 22.0029 8.12622 22.0029C6.64819 22.0029 5.11002 21.0462 5.11002 19.0363M18.9785 5.04418C18.0962 5.04418 17.2998 5.39808 16.7337 5.96655',
  d6: 'M16 2C14.3431 2 13 3.34315 13 5C13 5.77167 13.2914 6.47529 13.7701 7.00686L7.00693 13.7701C6.47535 13.2914 5.7717 13 5 13C3.34315 13 2 14.3431 2 16C2 17.6569 3.34315 19 5 19C5 20.6569 6.34315 22 8 22C9.65685 22 11 20.6569 11 19C11 18.2283 10.7086 17.5246 10.2298 16.993L16.993 10.2298C17.5245 10.7086 18.2282 11 19 11C20.6569 11 22 9.65685 22 8C22 6.34315 20.6569 5 19 5C19 3.34315 17.6569 2 16 2Z',
};

export const IconBone01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bone-01-stroke-rounded IconBone01StrokeRounded"
    >
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

export const IconBone01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bone-01-duotone-rounded IconBone01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBone01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bone-01-twotone-rounded IconBone01TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBone01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bone-01-solid-rounded IconBone01SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBone01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bone-01-bulk-rounded IconBone01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBone01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bone-01-stroke-sharp IconBone01StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBone01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bone-01-solid-sharp IconBone01SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBone01: TheIconSelfPack = {
  name: 'Bone01',
  StrokeRounded: IconBone01StrokeRounded,
  DuotoneRounded: IconBone01DuotoneRounded,
  TwotoneRounded: IconBone01TwotoneRounded,
  SolidRounded: IconBone01SolidRounded,
  BulkRounded: IconBone01BulkRounded,
  StrokeSharp: IconBone01StrokeSharp,
  SolidSharp: IconBone01SolidSharp,
};