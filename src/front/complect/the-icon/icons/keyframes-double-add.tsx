import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.002 4.5C14.3775 4.16667 14.6982 4 15.068 4C15.7661 4 16.2896 4.59409 17.3365 5.78228L19.9113 8.70448C21.3036 10.2847 21.9998 11.0747 21.9998 12C21.9998 12.9253 21.3036 13.7153 19.9113 15.2955L17.3365 18.2177C16.2896 19.4059 15.7661 20 15.068 20C14.6982 20 14.3775 19.8333 14.002 19.5',
  d2: 'M7 5.4398C7.86196 4.47993 8.35392 4 8.98862 4C9.69478 4 10.2243 4.59409 11.2832 5.78228L13.8875 8.70448C15.2959 10.2847 16 11.0747 16 12C16 12.9253 15.2959 13.7153 13.8876 15.2955L11.2832 18.2177C10.2243 19.4059 9.69478 20 8.98862 20C8.35392 20 7.86196 19.5201 7 18.5602',
  d3: 'M5.5 15.5L5.5 8.5M2 12H9',
  d4: 'M13.8875 8.70448L11.2832 5.78228C10.2243 4.59409 9.69478 4 8.98862 4C8.35392 4 7.86196 4.47993 7 5.4398V18.5602C7.86196 19.5201 8.35392 20 8.98862 20C9.69478 20 10.2243 19.4059 11.2832 18.2177L13.8876 15.2955C15.2959 13.7153 16 12.9253 16 12C16 11.0747 15.2958 10.2847 13.8875 8.70448Z',
  d5: 'M14.9704 5.02627C14.9103 5.05517 14.814 5.1163 14.6658 5.24785C14.2528 5.6145 13.6208 5.57689 13.2541 5.16386C12.8875 4.75083 12.9251 4.11879 13.3381 3.75215C13.7958 3.34589 14.3459 3 15.068 3C15.7485 3 16.2772 3.30746 16.7196 3.68406C17.1241 4.02827 17.5572 4.51995 18.0423 5.07058C18.0571 5.08739 18.0719 5.10426 18.0869 5.12119L20.703 8.09035C21.3639 8.84034 21.9206 9.47217 22.304 10.0346C22.7096 10.6297 22.9998 11.2563 22.9998 12C22.9998 12.7437 22.7096 13.3703 22.304 13.9654C21.9206 14.5278 21.3639 15.1597 20.703 15.9096L18.0423 18.9294C17.5572 19.4801 17.1241 19.9717 16.7196 20.3159C16.2772 20.6925 15.7485 21 15.068 21C14.3459 21 13.7958 20.6541 13.3381 20.2479C12.9251 19.8812 12.8875 19.2492 13.2541 18.8361C13.6208 18.4231 14.2528 18.3855 14.6658 18.7521C14.814 18.8837 14.9103 18.9448 14.9704 18.9737C15.0193 18.9972 15.0446 19 15.068 19C15.0687 19 15.0695 19 15.0703 19C15.0921 19.0005 15.1775 19.0021 15.4233 18.7929C15.7046 18.5535 16.0425 18.1737 16.5863 17.5566L19.161 14.6344C19.8743 13.8249 20.3465 13.2862 20.6514 12.839C20.9419 12.4126 20.9998 12.1815 20.9998 12C20.9998 11.8185 20.9419 11.5874 20.6514 11.161C20.3465 10.7138 19.8743 10.1751 19.161 9.36558L16.5863 6.44338C16.0425 5.82626 15.7046 5.44645 15.4233 5.20708C15.1775 4.99786 15.0921 4.99954 15.0703 4.99997C15.0695 4.99998 15.0687 5 15.068 5C15.0446 5 15.0193 5.00275 14.9704 5.02627Z',
  d6: 'M5.5 7.5C6.05228 7.5 6.5 7.94772 6.5 8.5V11H9C9.55228 11 10 11.4477 10 12C10 12.5523 9.55228 13 9 13H6.5V15.5C6.5 16.0523 6.05228 16.5 5.5 16.5C4.94772 16.5 4.5 16.0523 4.5 15.5L4.5 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H4.5L4.5 8.5C4.5 7.94772 4.94771 7.5 5.5 7.5Z',
  d7: 'M7.34297 3.68091C7.78967 3.30445 8.32014 3 9.00081 3C9.68151 3 10.212 3.30447 10.6586 3.68094C11.0667 4.02487 11.5039 4.51633 11.9939 5.06719L14.6806 8.08672C15.348 8.8367 15.9101 9.46844 16.2972 10.0309C16.7066 10.6256 17.0007 11.2535 17.0007 12C17.0007 12.7465 16.7066 13.3744 16.2972 13.9691C15.9101 14.5316 15.348 15.1633 14.6806 15.9133L11.9939 18.9328C11.5039 19.4837 11.0667 19.9751 10.6586 20.3191C10.212 20.6955 9.68151 21 9.00081 21C8.32014 21 7.78967 20.6956 7.34297 20.3191C6.93477 19.9751 6.49736 19.4834 6.00714 18.9323C5.68056 18.5653 5.51727 18.3817 5.53443 18.2465C5.53693 18.2268 5.53872 18.2182 5.54434 18.1992C5.58297 18.0684 5.85364 17.9442 6.39498 17.6957C7.29152 17.2842 8.00035 16.4611 8.00035 15.5V15.1C8.00035 14.8172 8.00035 14.6757 8.08821 14.5879C8.17608 14.5 8.3175 14.5 8.60035 14.5H9.00035C10.3811 14.5 11.5003 13.3807 11.5003 12C11.5003 10.6193 10.3811 9.5 9.00035 9.5H8.60035C8.3175 9.5 8.17608 9.5 8.08821 9.41213C8.00035 9.32426 8.00035 9.18284 8.00035 8.9V8.5C8.00035 7.53887 7.29151 6.71577 6.39496 6.30427C5.85364 6.05581 5.58298 5.93158 5.54434 5.80081C5.53872 5.78178 5.53692 5.77323 5.53443 5.75354C5.51728 5.61827 5.68056 5.43474 6.00712 5.06769C6.49737 4.51661 6.93475 4.02495 7.34297 3.68091Z',
  d8: 'M7.59961 5.60007L8.9997 4L15.9997 12L8.9997 20L7.68717 18.5',
  d9: 'M13.5 5.71443L15.0002 4L22.0002 12L15.0002 20L13.5 18.2856',
  d10: 'M5.75 13V15.5H3.75L3.75 13H1.25V11H3.75L3.75 8.5H5.75V11H8.25V13H5.75Z',
  d11: 'M12.8086 19.2559L14.4218 20.999L22.7505 11.999L14.4218 2.99902L12.8086 4.74216L14.1106 6.20693L14.4218 5.87072L20.093 11.999L14.4218 18.1273L14.1106 17.7911L12.8086 19.2559Z',
  d12: 'M17.2527 11.999L9.25275 2.99902L5.69629 7H7.24914V9.5H9.74914V14.5H7.24914V17H5.69803L9.25275 20.999L17.2527 11.999Z',
} as const;

export const IconKeyframesDoubleAddStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-add-stroke-rounded IconKeyframesDoubleAddStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconKeyframesDoubleAddDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-add-duotone-rounded IconKeyframesDoubleAddDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconKeyframesDoubleAddTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-add-twotone-rounded IconKeyframesDoubleAddTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesDoubleAddSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-add-solid-rounded IconKeyframesDoubleAddSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesDoubleAddBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-add-bulk-rounded IconKeyframesDoubleAddBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesDoubleAddStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-add-stroke-sharp IconKeyframesDoubleAddStrokeSharp"
    >
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesDoubleAddSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-add-solid-sharp IconKeyframesDoubleAddSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const iconPackOfKeyframesDoubleAdd: TheIconSelfPack = {
  name: 'KeyframesDoubleAdd',
  StrokeRounded: IconKeyframesDoubleAddStrokeRounded,
  DuotoneRounded: IconKeyframesDoubleAddDuotoneRounded,
  TwotoneRounded: IconKeyframesDoubleAddTwotoneRounded,
  SolidRounded: IconKeyframesDoubleAddSolidRounded,
  BulkRounded: IconKeyframesDoubleAddBulkRounded,
  StrokeSharp: IconKeyframesDoubleAddStrokeSharp,
  SolidSharp: IconKeyframesDoubleAddSolidSharp,
};