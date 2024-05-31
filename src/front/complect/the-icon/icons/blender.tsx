import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.4626 4H8.2133M18.4626 4L17.4377 17H9L8.72577 11M18.4626 4H20M8.2133 4H6.35619C5.09456 4 4.46374 4 4.15636 4.40307C3.84899 4.80614 4.03026 5.39566 4.39278 6.5747L4.66786 7.4693C4.90028 8.22521 5.0165 8.60316 5.26185 8.90436C5.5072 9.20555 5.85836 9.40133 6.56065 9.79288L8.72577 11M8.2133 4L8.72577 11',
  d2: 'M15 2H12',
  d3: 'M17.4668 17H9.05279C8.76014 17.9995 7.45643 20.7076 8.25559 21.634C8.57134 22 9.16523 22 10.353 22H16.5325C17.8279 22 18.4755 22 18.7911 21.5969C19.5834 20.5851 17.8973 17.9653 17.4668 17Z',
  d4: 'M18 8H15.5M17.5 11H15.5M17.5 14H15.5',
  d5: 'M8.21289 4H18.4622L17.4373 17H8.99959L8.72536 11L8.21289 4Z',
  d6: 'M8.21112 3.25001C8.00269 3.25001 7.80367 3.33674 7.66177 3.4894C7.51987 3.64207 7.4479 3.8469 7.46312 4.05477L7.97484 11.0445L8.2486 17.0342C8.2669 17.4347 8.59692 17.75 8.99781 17.75H17.4355C17.8268 17.75 18.1524 17.4491 18.1832 17.059L19.0873 5.59159C19.1156 5.23181 19.1298 5.05192 19.2319 4.92963C19.2595 4.8965 19.2913 4.8671 19.3265 4.84214C19.4565 4.75001 19.6369 4.75001 19.9978 4.75001C20.412 4.75001 20.7478 4.41422 20.7478 4.00001C20.7478 3.58579 20.412 3.25001 19.9978 3.25001L8.21112 3.25001ZM17.2847 8.69688C17.2272 8.75001 17.1395 8.75001 16.9641 8.75001H15.4982C15.084 8.75001 14.7482 8.41422 14.7482 8.00001C14.7482 7.58579 15.084 7.25001 15.4982 7.25001H17.0193C17.2219 7.25001 17.3232 7.25001 17.3826 7.31426C17.442 7.37851 17.434 7.47949 17.4181 7.68145L17.3629 8.38144C17.3491 8.55632 17.3422 8.64375 17.2847 8.69688ZM17.0482 11.6969C16.9907 11.75 16.903 11.75 16.7276 11.75H15.4982C15.084 11.75 14.7482 11.4142 14.7482 11C14.7482 10.5858 15.084 10.25 15.4982 10.25H16.7828C16.9854 10.25 17.0867 10.25 17.1461 10.3143C17.2054 10.3785 17.1975 10.4795 17.1816 10.6814L17.1264 11.3814C17.1126 11.5563 17.1057 11.6438 17.0482 11.6969ZM16.8117 14.6969C16.7542 14.75 16.6665 14.75 16.4911 14.75H15.4982C15.084 14.75 14.7482 14.4142 14.7482 14C14.7482 13.5858 15.084 13.25 15.4982 13.25H16.5463C16.7489 13.25 16.8501 13.25 16.9095 13.3143C16.9689 13.3785 16.961 13.4795 16.945 13.6814L16.8898 14.3814C16.8761 14.5563 16.8692 14.6438 16.8117 14.6969Z',
  d7: 'M15.75 2C15.75 1.58579 15.4142 1.25 15 1.25H12C11.5858 1.25 11.25 1.58579 11.25 2C11.25 2.41421 11.5858 2.75 12 2.75H15C15.4142 2.75 15.75 2.41421 15.75 2Z',
  d8: 'M6.29155 3.25001C6.31296 3.25001 6.33443 3.25001 6.35595 3.25001H8.21307C8.76535 3.25001 9.21307 3.69773 9.21307 4.25001C9.21307 4.8023 8.76535 5.25001 8.21307 5.25001H5.50652C5.27286 5.25001 5.15603 5.25001 5.09598 5.32798C5.03594 5.40594 5.06543 5.51758 5.1244 5.74087C5.18504 5.97046 5.26323 6.25387 5.34838 6.53081L5.62345 7.42541C5.87899 8.25649 5.94322 8.40776 6.03693 8.5228C6.133 8.64074 6.27584 8.73932 7.04737 9.16947L9.21249 10.3766C9.69487 10.6455 9.8679 11.2546 9.59896 11.737C9.33002 12.2194 8.72095 12.3924 8.23857 12.1234C7.47721 11.699 6.71639 11.2735 5.95442 10.8501C5.37039 10.5256 4.856 10.2398 4.4863 9.78594C4.0893 9.29859 3.92109 8.69395 3.71178 8.01321C3.44921 7.15926 3.1358 6.26799 3.03437 5.59748C2.96429 5.13423 2.9696 4.55989 3.36095 4.0467C3.74759 3.53968 4.29561 3.37611 4.75722 3.31038C5.18236 3.24984 5.71648 3.24992 6.29155 3.25001Z',
  d9: 'M8.09307 16.719C8.21785 16.2928 8.60872 16 9.05278 16H17.4668C17.8616 16 18.2193 16.2322 18.3801 16.5927C18.4489 16.747 18.5568 16.9532 18.7005 17.2278C18.7479 17.3183 18.7992 17.4163 18.8542 17.5224C19.063 17.9244 19.3054 18.4046 19.5104 18.896C19.7118 19.3788 19.9 19.9254 19.9703 20.4562C20.0381 20.9684 20.0196 21.65 19.5785 22.2134C19.1849 22.7161 18.6315 22.8757 18.1666 22.9401C17.7338 23.0002 17.1888 23.0001 16.5963 23C16.5751 23 16.5538 23 16.5325 23H10.353C10.3327 23 10.3125 23 10.2924 23C9.75094 23.0001 9.24712 23.0002 8.84252 22.9451C8.40254 22.8853 7.88776 22.7385 7.4984 22.2872C7.0537 21.7717 6.98467 21.1178 7.00249 20.6236C7.02118 20.1054 7.14325 19.5589 7.28333 19.0693C7.42564 18.572 7.60226 18.0811 7.75421 17.6693C7.78264 17.5922 7.80971 17.5192 7.83532 17.4501C7.95504 17.1271 8.04324 16.8892 8.09307 16.719ZM9.76459 18C9.74357 18.0569 9.7223 18.1141 9.70106 18.1713C9.6774 18.2351 9.65376 18.2987 9.63054 18.3616C9.4807 18.7677 9.32647 19.1991 9.20616 19.6195C9.08364 20.0477 9.01133 20.4144 9.00119 20.6957C8.99667 20.8212 9.00543 20.9005 9.0142 20.9468C9.03863 20.952 9.07073 20.9578 9.11204 20.9634C9.36521 20.9978 9.72964 21 10.353 21H16.5325C17.2107 21 17.6135 20.9977 17.8918 20.9591C17.9365 20.9529 17.9715 20.9465 17.9984 20.9407C18.0018 20.8959 18.0017 20.8249 17.9876 20.7188C17.9512 20.4437 17.8394 20.0852 17.6646 19.666C17.4933 19.2553 17.2829 18.8363 17.0793 18.444C17.038 18.3645 16.9957 18.2838 16.9535 18.2032C16.9178 18.135 16.8821 18.067 16.8473 18H9.76459ZM18.0756 20.9185C18.0757 20.9186 18.0744 20.9192 18.0713 20.9205C18.074 20.9191 18.0755 20.9185 18.0756 20.9185ZM8.947 20.9279C8.94707 20.9279 8.94836 20.9284 8.95064 20.9295C8.94807 20.9285 8.94693 20.928 8.947 20.9279Z',
  d10: 'M16.0254 2H10.0117',
  d11: 'M6.00293 22H20.0346L18.0327 17H8.00919L6.00293 22Z',
  d12: 'M18.0316 8H14.0225M17.5305 11H14.0225M17.5305 14H14.0225',
  d13: 'M8.02141 4.48438H18.0316M8.02141 4.48438H4.13346C4.07106 4.48438 4.02383 4.54065 4.03479 4.60194L4.99687 9.98306L8.02141 11.9969M8.02141 4.48438V11.9969M18.0316 4.48438L17.9413 16.7676M18.0316 4.48438H20.0253M8.08715 16.7676L8.02141 11.9969',
  d14: 'M16.002 1.625L10.002 1.625',
  d15: 'M20.6809 21.102L18.75 16.4689V5.27597H20V3.375L4.2352 3.375C3.94307 3.375 3.666 3.50008 3.47882 3.71646C3.29163 3.93285 3.21364 4.21822 3.2659 4.49552L4.32591 10.1202L7.25 12.0009V16.479L5.3194 21.1013C5.19991 21.3874 5.23628 21.7117 5.41649 21.9669C5.5967 22.2221 5.89727 22.375 6.21878 22.375L19.7812 22.375C20.1026 22.375 20.4031 22.2222 20.5833 21.9672C20.7635 21.7121 20.8001 21.388 20.6809 21.102ZM8.81365 17.7321L7.65014 20.5179H18.351L17.1901 17.7321H8.81365ZM7.25 9.71623V5.27597H5.41567L6.11488 8.98614L7.25 9.71623ZM17.0039 6.875H14.0039V8.375H17.0039V6.875ZM17.0039 9.875H14.0039V11.375H17.0039V9.875ZM17.0039 12.875H14.0039V14.375L17.0039 14.375V12.875Z',
} as const;

export const IconBlenderStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blender-stroke-rounded IconBlenderStrokeRounded"
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

export const IconBlenderDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blender-duotone-rounded IconBlenderDuotoneRounded"
    >
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

export const IconBlenderTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blender-twotone-rounded IconBlenderTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBlenderSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blender-solid-rounded IconBlenderSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlenderBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blender-bulk-rounded IconBlenderBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlenderStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blender-stroke-sharp IconBlenderStrokeSharp"
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
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlenderSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blender-solid-sharp IconBlenderSolidSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBlender: TheIconSelfPack = {
  name: 'Blender',
  StrokeRounded: IconBlenderStrokeRounded,
  DuotoneRounded: IconBlenderDuotoneRounded,
  TwotoneRounded: IconBlenderTwotoneRounded,
  SolidRounded: IconBlenderSolidRounded,
  BulkRounded: IconBlenderBulkRounded,
  StrokeSharp: IconBlenderStrokeSharp,
  SolidSharp: IconBlenderSolidSharp,
};