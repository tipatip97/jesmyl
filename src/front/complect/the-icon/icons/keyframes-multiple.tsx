import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.4417 14.553L10.1358 17.2531C9.14121 18.4177 8.6439 19 8 19C7.3561 19 6.85879 18.4177 5.86418 17.2531L3.55829 14.553C2.51943 13.3366 2 12.7284 2 12C2 11.2716 2.51943 10.6634 3.55829 9.44699L5.86418 6.74694C6.85879 5.58231 7.3561 5 8 5C8.6439 5 9.14121 5.58231 10.1358 6.74694L12.4417 9.44699C13.4806 10.6634 14 11.2716 14 12C14 12.7284 13.4806 13.3366 12.4417 14.553Z',
  d2: 'M13 19L16.5118 14.6032C17.5039 13.361 18 12.7398 18 12C18 11.2602 17.5039 10.639 16.5118 9.39683L13 5',
  d3: 'M17 19L20.5118 14.6032C21.5039 13.361 22 12.7398 22 12C22 11.2602 21.5039 10.639 20.5118 9.39683L17 5',
  d4: 'M6.40104 4.68773C6.81519 4.32138 7.32908 4 8 4C8.67092 4 9.18481 4.32138 9.59896 4.68773C9.98123 5.02589 10.393 5.5081 10.8532 6.04705L10.8532 6.04706L13.2406 8.84265C13.7272 9.41225 14.1515 9.90909 14.4461 10.3573C14.7642 10.8413 15 11.3675 15 12C15 12.6325 14.7642 13.1587 14.4461 13.6427C14.1515 14.0909 13.7272 14.5877 13.2407 15.1573L13.2406 15.1574L10.8532 17.9529C10.393 18.4919 9.98124 18.9741 9.59896 19.3123C9.18481 19.6786 8.67092 20 8 20C7.32908 20 6.81519 19.6786 6.40104 19.3123C6.01877 18.9741 5.60703 18.4919 5.14684 17.9529L2.75937 15.1574L2.75937 15.1574C2.27285 14.5878 1.84849 14.0909 1.55391 13.6427C1.2358 13.1587 1 12.6325 1 12C1 11.3675 1.2358 10.8413 1.55391 10.3573C1.84848 9.90909 2.27285 9.41224 2.75936 8.84264L2.75937 8.84263L5.14683 6.04707C5.60702 5.50811 6.01876 5.02589 6.40104 4.68773Z',
  d5: 'M12.376 4.21867C12.8075 3.87401 13.4367 3.94443 13.7814 4.37596L17.2932 8.77279C17.3052 8.78781 17.3171 8.80278 17.329 8.81769C17.7945 9.40036 18.1991 9.90698 18.4796 10.3627C18.7825 10.8549 19 11.3784 19 12C19 12.6216 18.7825 13.1452 18.4796 13.6374C18.1991 14.0931 17.7945 14.5997 17.329 15.1824L13.7814 19.6241C13.4367 20.0556 12.8075 20.1261 12.376 19.7814C11.9444 19.4367 11.874 18.8075 12.2187 18.376L15.7304 13.9791C16.2421 13.3385 16.5679 12.9278 16.7763 12.5891C16.9695 12.2752 17 12.1183 17 12C17 11.8818 16.9695 11.7249 16.7763 11.411C16.5679 11.0723 16.2421 10.6616 15.7304 10.0209L12.2187 5.62411C11.874 5.19258 11.9444 4.56334 12.376 4.21867Z',
  d6: 'M16.376 4.21867C16.8075 3.87401 17.4367 3.94443 17.7814 4.37596L21.2932 8.77279C21.3052 8.78781 21.3171 8.80278 21.329 8.81769C21.7945 9.40036 22.1991 9.90698 22.4796 10.3627C22.7825 10.8549 23 11.3784 23 12C23 12.6216 22.7825 13.1452 22.4796 13.6374C22.1991 14.0931 21.7945 14.5997 21.329 15.1824L17.7814 19.6241C17.4367 20.0556 16.8075 20.1261 16.376 19.7814C15.9444 19.4367 15.874 18.8075 16.2187 18.376L19.7304 13.9791C20.2421 13.3385 20.5679 12.9278 20.7763 12.5891C20.9695 12.2752 21 12.1183 21 12C21 11.8818 20.9695 11.7249 20.7763 11.411C20.5679 11.0723 20.2421 10.6616 19.7304 10.0209L16.2187 5.62411C15.874 5.19258 15.9444 4.56334 16.376 4.21867Z',
  d7: 'M14 12L8 19L2 12L8 5L14 12Z',
  d8: 'M12 19L18 12L12 5',
  d9: 'M16 19L22 12L16 5',
  d10: 'M7.76172 4.04883L14.5117 11.7988L7.76172 19.5488L1.01172 11.7988L7.76172 4.04883Z',
  d11: 'M12.8622 4.5083L18.5226 11.3612C18.8254 11.7278 18.8254 12.2688 18.5226 12.6354L12.8622 19.4883L11.4297 18.2141L16.5638 11.9983L11.4297 5.78253L12.8622 4.5083Z',
  d12: 'M16.8622 4.5083L22.5226 11.3612C22.8254 11.7278 22.8254 12.2688 22.5226 12.6354L16.8622 19.4883L15.4297 18.2141L20.5638 11.9983L15.4297 5.78253L16.8622 4.5083Z',
} as const;

export const IconKeyframesMultipleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-stroke-rounded IconKeyframesMultipleStrokeRounded"
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

export const IconKeyframesMultipleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-duotone-rounded IconKeyframesMultipleDuotoneRounded"
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

export const IconKeyframesMultipleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-twotone-rounded IconKeyframesMultipleTwotoneRounded"
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

export const IconKeyframesMultipleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-solid-rounded IconKeyframesMultipleSolidRounded"
    >
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesMultipleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-bulk-rounded IconKeyframesMultipleBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconKeyframesMultipleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-stroke-sharp IconKeyframesMultipleStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconKeyframesMultipleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-solid-sharp IconKeyframesMultipleSolidSharp"
    >
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKeyframesMultiple: TheIconSelfPack = {
  name: 'KeyframesMultiple',
  StrokeRounded: IconKeyframesMultipleStrokeRounded,
  DuotoneRounded: IconKeyframesMultipleDuotoneRounded,
  TwotoneRounded: IconKeyframesMultipleTwotoneRounded,
  SolidRounded: IconKeyframesMultipleSolidRounded,
  BulkRounded: IconKeyframesMultipleBulkRounded,
  StrokeSharp: IconKeyframesMultipleStrokeSharp,
  SolidSharp: IconKeyframesMultipleSolidSharp,
};