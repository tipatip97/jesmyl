import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z',
  d2: 'M12 2C8.22876 2 6.34315 2 5.17157 3.12874C4 4.25748 4 6.07416 4 9.70753V17.9808C4 20.2867 4 21.4396 4.77285 21.8523C6.26947 22.6514 9.0768 19.9852 10.41 19.1824C11.1832 18.7168 11.5698 18.484 12 18.484',
  d3: 'M12.0546 1.25C13.8939 1.24999 15.348 1.24997 16.4854 1.39731C17.6529 1.54853 18.5995 1.86672 19.3488 2.58863C20.102 3.31431 20.4376 4.23743 20.5964 5.37525C20.75 6.4765 20.75 7.88207 20.75 9.64945V18.0458C20.75 19.1434 20.7501 20.0553 20.6447 20.7405C20.5356 21.4495 20.2814 22.1395 19.5804 22.5139C18.9553 22.8477 18.2676 22.7798 17.6846 22.6028C17.0949 22.4238 16.4955 22.0989 15.9467 21.7521C15.3926 21.402 14.7938 20.9618 14.3215 20.6127C13.8587 20.2706 13.4869 19.9958 13.2031 19.8249C12.8035 19.5843 12.5513 19.4335 12.3467 19.3371C12.158 19.2482 12.0663 19.234 12 19.234C11.9337 19.234 11.842 19.2482 11.6533 19.3371C11.4488 19.4335 11.1965 19.5843 10.7969 19.8249C10.5131 19.9958 10.1414 20.2706 9.67854 20.6127C9.2062 20.9618 8.60739 21.402 8.05335 21.7521C7.50454 22.0989 6.90514 22.4238 6.31544 22.6028C5.7324 22.7798 5.04476 22.8477 4.41958 22.5139C3.71857 22.1395 3.46438 21.4495 3.35533 20.7405C3.24993 20.0553 3.24996 19.1434 3.25 18.0459L3.25 9.64943C3.24999 7.88206 3.24997 6.4765 3.40365 5.37525C3.56243 4.23743 3.898 3.31431 4.65121 2.58863C5.40051 1.86672 6.34712 1.54853 7.51457 1.39731C8.652 1.24997 10.1061 1.24999 11.9454 1.25H12.0546Z',
  d4: 'M20.6447 20.7406C20.7501 20.0554 20.75 19.1435 20.75 18.0459V12L12 19.2341C12.0663 19.2341 12.158 19.2483 12.3467 19.3372C12.5513 19.4336 12.8035 19.5844 13.2031 19.825C13.4869 19.9959 13.8587 20.2707 14.3215 20.6128C14.7938 20.9619 15.3926 21.4021 15.9467 21.7522C16.4955 22.099 17.0949 22.4239 17.6846 22.6029C18.2676 22.7799 18.9552 22.8478 19.5804 22.514C20.2814 22.1396 20.5356 21.4496 20.6447 20.7406Z',
  d5: 'M4 22V2H20V22L12 18L4 22Z',
  d6: 'M3.46967 1.34467C3.61032 1.20402 3.80109 1.125 4 1.125H20C20.4142 1.125 20.75 1.46079 20.75 1.875V22.625L12 18.25L3.25 22.625V1.875C3.25 1.67609 3.32902 1.48532 3.46967 1.34467Z',
} as const;

export const IconBookmark02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-02-stroke-rounded IconBookmark02StrokeRounded"
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

export const IconBookmark02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-02-duotone-rounded IconBookmark02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconBookmark02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-02-twotone-rounded IconBookmark02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmark02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-02-solid-rounded IconBookmark02SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmark02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-02-bulk-rounded IconBookmark02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmark02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-02-stroke-sharp IconBookmark02StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmark02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-02-solid-sharp IconBookmark02SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBookmark02: TheIconSelfPack = {
  name: 'Bookmark02',
  StrokeRounded: IconBookmark02StrokeRounded,
  DuotoneRounded: IconBookmark02DuotoneRounded,
  TwotoneRounded: IconBookmark02TwotoneRounded,
  SolidRounded: IconBookmark02SolidRounded,
  BulkRounded: IconBookmark02BulkRounded,
  StrokeSharp: IconBookmark02StrokeSharp,
  SolidSharp: IconBookmark02SolidSharp,
};