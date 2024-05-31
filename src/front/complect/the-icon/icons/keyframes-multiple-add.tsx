import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.5 6.15642C7.16531 5.38547 7.58503 5 8.10017 5C8.73332 5 9.22232 5.58231 10.2003 6.74694L12.4677 9.44699C13.4892 10.6634 14 11.2716 14 12C14 12.7284 13.4892 13.3366 12.4677 14.553L10.2003 17.2531C9.22232 18.4177 8.73332 19 8.10017 19C7.58503 19 7.16531 18.6145 6.5 17.8436',
  d2: 'M5 15L5 9M2 12H8',
  d3: 'M13 19L16.5118 14.6032C17.5039 13.361 18 12.7398 18 12C18 11.2602 17.5039 10.639 16.5118 9.39683L13 5',
  d4: 'M17 19L20.5118 14.6032C21.5039 13.361 22 12.7398 22 12C22 11.2602 21.5039 10.639 20.5118 9.39683L17 5',
  d5: 'M12.4677 14.553L10.2003 17.2531C9.22232 18.4177 8.73332 19 8.10017 19C7.58503 19 7.16531 18.6145 6.5 17.8436V6.15642C7.16531 5.38547 7.58503 5 8.10017 5C8.73332 5 9.22232 5.58231 10.2003 6.74694L12.4677 9.44699L12.4677 9.447C13.4892 10.6634 14 11.2716 14 12C14 12.7284 13.4892 13.3366 12.4677 14.553Z',
  d6: 'M5 8C5.55228 8 6 8.44772 6 9V11H8C8.55229 11 9 11.4477 9 12C9 12.5523 8.55229 13 8 13H6V15C6 15.5523 5.55228 16 5 16C4.44772 16 4 15.5523 4 15L4 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H4V9C4 8.44772 4.44772 8 5 8Z',
  d7: 'M6.40039 4.68773C6.81454 4.32138 7.32843 4 7.99935 4C8.67027 4 9.18416 4.32138 9.59831 4.68773C9.98058 5.02589 10.3923 5.50811 10.8525 6.04706L13.24 8.84265C13.7265 9.41225 14.1509 9.90909 14.4454 10.3573C14.7636 10.8413 14.9994 11.3675 14.9994 12C14.9994 12.6325 14.7636 13.1587 14.4454 13.6427C14.1509 14.0909 13.7265 14.5878 13.24 15.1574L10.8525 17.9529C10.3923 18.4919 9.98059 18.9741 9.59831 19.3123C9.18416 19.6786 8.67027 20 7.99935 20C7.32844 20 6.81455 19.6786 6.40039 19.3123C6.01812 18.9741 5.60638 18.4919 5.14619 17.9529C4.98979 17.7698 5.12077 17.4772 5.35773 17.4344C6.66504 17.1982 7.49935 16.203 7.49935 15C7.49935 14.8131 7.49935 14.7196 7.53955 14.65C7.56588 14.6044 7.60375 14.5665 7.64935 14.5402C7.71897 14.5 7.81243 14.5 7.99935 14.5C9.38007 14.5 10.4994 13.3807 10.4994 12C10.4994 10.6193 9.38007 9.5 7.99935 9.5C7.81243 9.5 7.71897 9.5 7.64935 9.45981C7.60375 9.43348 7.56588 9.39561 7.53955 9.35C7.49935 9.28038 7.49935 9.18692 7.49935 9C7.49935 7.79695 6.66502 6.8018 5.35777 6.56561C5.12082 6.5228 4.98982 6.23018 5.14618 6.04707C5.60637 5.50811 6.01812 5.02589 6.40039 4.68773Z',
  d8: 'M12.376 4.21867C12.8075 3.87401 13.4367 3.94443 13.7814 4.37596L17.2932 8.77279C17.3052 8.78781 17.3171 8.80278 17.329 8.81769C17.7945 9.40036 18.1991 9.90698 18.4796 10.3627C18.7825 10.8549 19 11.3784 19 12C19 12.6216 18.7825 13.1452 18.4796 13.6374C18.1991 14.0931 17.7945 14.5997 17.329 15.1824L13.7814 19.6241C13.4367 20.0556 12.8075 20.1261 12.376 19.7814C11.9444 19.4367 11.874 18.8075 12.2187 18.376L15.7304 13.9791C16.2421 13.3385 16.5679 12.9278 16.7763 12.5891C16.9695 12.2752 17 12.1183 17 12C17 11.8818 16.9695 11.7249 16.7763 11.411C16.5679 11.0723 16.2421 10.6616 15.7304 10.0209L12.2187 5.62411C11.874 5.19258 11.9444 4.56334 12.376 4.21867Z',
  d9: 'M16.376 4.21867C16.8075 3.87401 17.4367 3.94443 17.7814 4.37596L21.2932 8.77279C21.3052 8.78781 21.3171 8.80278 21.329 8.81769C21.7945 9.40036 22.1991 9.90698 22.4796 10.3627C22.7825 10.8549 23 11.3784 23 12C23 12.6216 22.7825 13.1452 22.4796 13.6374C22.1991 14.0931 21.7945 14.5997 21.329 15.1824L17.7814 19.6241C17.4367 20.0556 16.8075 20.1261 16.376 19.7814C15.9444 19.4367 15.874 18.8075 16.2187 18.376L19.7304 13.9791C20.2421 13.3385 20.5679 12.9278 20.7763 12.5891C20.9695 12.2752 21 12.1183 21 12C21 11.8818 20.9695 11.7249 20.7763 11.411C20.5679 11.0723 20.2421 10.6616 19.7304 10.0209L16.2187 5.62411C15.874 5.19258 15.9444 4.56334 16.376 4.21867Z',
  d10: 'M7 6.16667L8 5L14 12L8 19L7 17.8333',
  d11: 'M12 19L18 12L12 5',
  d12: 'M16 19L22 12L16 5',
  d13: 'M12.8622 4.5083L18.5226 11.3612C18.8254 11.7278 18.8254 12.2688 18.5226 12.6354L12.8622 19.4883L11.4297 18.2141L16.5638 11.9983L11.4297 5.78253L12.8622 4.5083Z',
  d14: 'M16.8622 4.5083L22.5226 11.3612C22.8254 11.7278 22.8254 12.2688 22.5226 12.6354L16.8622 19.4883L15.4297 18.2141L20.5638 11.9983L15.4297 5.78253L16.8622 4.5083Z',
  d15: 'M5.25 12.998V14.998L3.25 14.998L3.25 12.998H1.25V10.998H3.25L3.25 8.99805H5.25V10.998H7.25V12.998H5.25Z',
  d16: 'M14.7496 11.998L7.99959 4.24805L5.16895 7.49805H6.75107V9.49805H8.75107V14.498H6.75107V16.498H5.16895L7.99959 19.748L14.7496 11.998Z',
} as const;

export const IconKeyframesMultipleAddStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-add-stroke-rounded IconKeyframesMultipleAddStrokeRounded"
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

export const IconKeyframesMultipleAddDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-add-duotone-rounded IconKeyframesMultipleAddDuotoneRounded"
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

export const IconKeyframesMultipleAddTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-add-twotone-rounded IconKeyframesMultipleAddTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconKeyframesMultipleAddSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-add-solid-rounded IconKeyframesMultipleAddSolidRounded"
    >
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

export const IconKeyframesMultipleAddBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-add-bulk-rounded IconKeyframesMultipleAddBulkRounded"
    >
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
      <path 
        opacity="0.3" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="0.3" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesMultipleAddStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-add-stroke-sharp IconKeyframesMultipleAddStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesMultipleAddSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-add-solid-sharp IconKeyframesMultipleAddSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKeyframesMultipleAdd: TheIconSelfPack = {
  name: 'KeyframesMultipleAdd',
  StrokeRounded: IconKeyframesMultipleAddStrokeRounded,
  DuotoneRounded: IconKeyframesMultipleAddDuotoneRounded,
  TwotoneRounded: IconKeyframesMultipleAddTwotoneRounded,
  SolidRounded: IconKeyframesMultipleAddSolidRounded,
  BulkRounded: IconKeyframesMultipleAddBulkRounded,
  StrokeSharp: IconKeyframesMultipleAddStrokeSharp,
  SolidSharp: IconKeyframesMultipleAddSolidSharp,
};