import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 12C2.13134 15.1935 4.1976 21.442 11.2999 21.9778C11.718 22.0094 11.9271 22.0251 11.987 21.8984C12.047 21.7717 11.8959 21.6247 11.5937 21.3308L10.2375 20.0117',
  d2: 'M22 12C21.8687 8.80652 19.8024 2.55801 12.7001 2.02219C12.282 1.99065 12.0729 1.97488 12.013 2.10161C11.953 2.22834 12.1041 2.37529 12.4063 2.6692L13.7625 3.98829',
  d3: 'M8.07586 13.4457C6.71281 12.0827 6.03128 11.4012 6.00104 10.5845C5.97079 9.76786 6.60363 9.13502 7.86933 7.86933C9.13502 6.60363 9.76786 5.97079 10.5845 6.00104C11.4012 6.03128 12.0827 6.71281 13.4457 8.07586L15.9241 10.5543C17.2872 11.9173 17.9687 12.5988 17.999 13.4155C18.0292 14.2321 17.3964 14.865 16.1307 16.1307C14.865 17.3964 14.2321 18.0292 13.4155 17.999C12.5988 17.9687 11.9173 17.2872 10.5543 15.9241L8.07586 13.4457Z',
  d4: 'M1.96919 11.2506C2.38306 11.2336 2.73236 11.5553 2.74938 11.9692C2.8103 13.4505 3.32636 15.6654 4.65014 17.5552C5.80638 19.2059 7.5845 20.6217 10.2762 21.0956L9.71458 20.5494C9.41764 20.2606 9.41105 19.7857 9.69984 19.4888C9.98864 19.1919 10.4635 19.1853 10.7604 19.4741L12.1167 20.7932C12.1253 20.8016 12.1341 20.8102 12.1431 20.8188C12.2699 20.942 12.4198 21.0876 12.5228 21.2228C12.6179 21.3476 12.89 21.7437 12.665 22.2193C12.4475 22.6786 11.9892 22.7343 11.8309 22.7456C11.6621 22.7576 11.4554 22.7418 11.2797 22.7284C11.2675 22.7275 11.2554 22.7266 11.2435 22.7257C7.44722 22.4393 4.95874 20.6103 3.42157 18.4158C1.90381 16.2491 1.32106 13.743 1.25065 12.0308C1.23362 11.617 1.55533 11.2677 1.96919 11.2506Z',
  d5: 'M22.0308 12.7494C21.6169 12.7664 21.2676 12.4447 21.2506 12.0308C21.1897 10.5495 20.6736 8.33458 19.3499 6.44475C18.1936 4.7941 16.4155 3.37835 13.7238 2.90436L14.2854 3.45063C14.5824 3.73942 14.589 4.21425 14.3002 4.51119C14.0114 4.80812 13.5365 4.81472 13.2396 4.52592L11.8833 3.20683C11.8747 3.1984 11.8659 3.18984 11.8569 3.18118C11.7301 3.05802 11.5802 2.91245 11.4772 2.77722C11.3821 2.65239 11.11 2.25633 11.335 1.78075C11.5525 1.32138 12.0108 1.26566 12.1691 1.25442C12.3379 1.24243 12.5446 1.25818 12.7203 1.27155C12.7325 1.27249 12.7446 1.27341 12.7565 1.2743C16.5528 1.5607 19.0413 3.3897 20.5784 5.58416C22.0962 7.75092 22.6789 10.257 22.7494 11.9692C22.7664 12.383 22.4447 12.7323 22.0308 12.7494Z',
  d6: 'M8.83336 5.62052C9.3461 5.23748 9.89417 4.97692 10.5609 5.00162C11.2164 5.0259 11.7609 5.31802 12.2808 5.72252C12.7785 6.10974 13.3371 6.66841 14.0132 7.34453L14.0132 7.34455L16.6554 9.98675L16.6555 9.98676C17.3316 10.6628 17.8903 11.2215 18.2775 11.7192C18.682 12.2391 18.9741 12.7836 18.9984 13.4391C19.0231 14.1058 18.7625 14.6539 18.3795 15.1666C18.0214 15.6459 17.4958 16.1715 16.8738 16.7935L16.8738 16.7935L16.7935 16.8738L16.7935 16.8738C16.1715 17.4958 15.6459 18.0214 15.1666 18.3795C14.6539 18.7625 14.1058 19.0231 13.4391 18.9984C12.7836 18.9741 12.2391 18.682 11.7192 18.2775C11.2215 17.8903 10.6628 17.3316 9.98675 16.6554L7.34454 14.0132C6.66842 13.3371 6.10974 12.7785 5.72252 12.2808C5.31802 11.7609 5.0259 11.2164 5.00162 10.5609C4.97692 9.89417 5.23748 9.3461 5.62052 8.83336C5.97858 8.35407 6.5042 7.82849 7.12627 7.20648L7.16637 7.16637L7.20648 7.12627L7.20648 7.12626C7.82849 6.5042 8.35407 5.97858 8.83336 5.62052Z',
  d7: 'M2.02769 12C2.02769 12 1.03077 22 11 22L10.0031 20',
  d8: 'M21.9723 12C21.9723 12 22.9692 2 13 2L13.9969 4',
  d9: 'M10.6 5L5 10.6L13.4 19L19 13.4L10.6 5Z',
  d10: 'M1.28131 11.9263C1.28135 11.9259 1.28139 11.9255 2.02769 11.9999C2.77399 12.0743 2.77402 12.074 2.77405 12.0737L2.77409 12.0733L2.77387 12.0757L2.77253 12.0911C2.77129 12.1059 2.76942 12.1297 2.76728 12.1619C2.76299 12.2264 2.75763 12.3244 2.75402 12.4509C2.7468 12.7044 2.74669 13.071 2.77604 13.5127C2.83504 14.4004 3.0116 15.5675 3.47204 16.7221C3.93084 17.8726 4.66358 18.9926 5.82913 19.8277C6.77526 20.5056 8.04418 21.0229 9.75894 21.1913L9.33184 20.3345L10.6743 19.6653L11.6712 21.6653C11.7871 21.8978 11.7745 22.1737 11.6377 22.3946C11.501 22.6155 11.2598 22.7499 11 22.7499C8.37711 22.7499 6.41102 22.0899 4.95549 21.0471C3.50411 20.0072 2.61686 18.6272 2.07873 17.2777C1.54224 15.9323 1.34496 14.5994 1.27934 13.6121C1.24639 13.1163 1.24627 12.7016 1.25463 12.4082C1.25881 12.2614 1.26513 12.1445 1.27058 12.0625C1.27331 12.0214 1.27582 11.9891 1.27774 11.9661L1.28015 11.9386L1.28093 11.9302L1.2812 11.9274L1.28131 11.9263ZM2.7741 12.0732C2.77411 12.0731 2.77411 12.0731 2.77409 12.0733L2.7741 12.0732Z',
  d11: 'M12.3623 1.60531C12.499 1.38442 12.7402 1.25 13 1.25C15.6229 1.25 17.589 1.90996 19.0445 2.95284C20.4959 3.99273 21.3831 5.37273 21.9213 6.7222C22.4578 8.06756 22.655 9.40055 22.7207 10.3878C22.7536 10.8836 22.7537 11.2983 22.7454 11.5917C22.7412 11.7385 22.7349 11.8554 22.7294 11.9374C22.7267 11.9785 22.7242 12.0108 22.7223 12.0338L22.7199 12.0613L22.7191 12.0697L22.7188 12.0725L22.7187 12.0736C22.7186 12.074 22.7186 12.0744 21.9723 12C21.226 11.9256 21.226 11.9259 21.2259 11.9262L21.2261 11.9242L21.2275 11.9088C21.2287 11.894 21.2306 11.8702 21.2327 11.838C21.237 11.7735 21.2424 11.6756 21.246 11.549C21.2532 11.2955 21.2533 10.9289 21.224 10.4872C21.165 9.59945 20.9884 8.43244 20.528 7.2778C20.0692 6.12727 19.3364 5.00727 18.1709 4.17216C17.2247 3.49427 15.9558 2.97704 14.2411 2.80859L14.6682 3.66542L13.3257 4.33458L12.3288 2.33458C12.2129 2.1021 12.2256 1.8262 12.3623 1.60531Z',
  d12: 'M10.6 4.25C10.7989 4.25 10.9897 4.32902 11.1303 4.46967L19.5303 12.8697C19.8232 13.1626 19.8232 13.6374 19.5303 13.9303L13.9303 19.5303C13.6374 19.8232 13.1626 19.8232 12.8697 19.5303L4.46967 11.1303C4.32902 10.9897 4.25 10.7989 4.25 10.6C4.25 10.4011 4.32902 10.2103 4.46967 10.0697L10.0697 4.46967C10.2103 4.32902 10.4011 4.25 10.6 4.25Z',
} as const;

export const IconScreenRotationStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="screen-rotation-stroke-rounded IconScreenRotationStrokeRounded"
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

export const IconScreenRotationDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="screen-rotation-duotone-rounded IconScreenRotationDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconScreenRotationTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="screen-rotation-twotone-rounded IconScreenRotationTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconScreenRotationSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="screen-rotation-solid-rounded IconScreenRotationSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconScreenRotationBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="screen-rotation-bulk-rounded IconScreenRotationBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconScreenRotationStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="screen-rotation-stroke-sharp IconScreenRotationStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconScreenRotationSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="screen-rotation-solid-sharp IconScreenRotationSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfScreenRotation: TheIconSelfPack = {
  name: 'ScreenRotation',
  StrokeRounded: IconScreenRotationStrokeRounded,
  DuotoneRounded: IconScreenRotationDuotoneRounded,
  TwotoneRounded: IconScreenRotationTwotoneRounded,
  SolidRounded: IconScreenRotationSolidRounded,
  BulkRounded: IconScreenRotationBulkRounded,
  StrokeSharp: IconScreenRotationStrokeSharp,
  SolidSharp: IconScreenRotationSolidSharp,
};