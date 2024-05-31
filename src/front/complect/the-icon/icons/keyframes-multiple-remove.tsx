import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.5 6.15642C7.16531 5.38547 7.58503 5 8.10017 5C8.73332 5 9.22232 5.58231 10.2003 6.74694L12.4677 9.44699C13.4892 10.6634 14 11.2716 14 12C14 12.7284 13.4892 13.3366 12.4677 14.553L10.2003 17.2531C9.22232 18.4177 8.73332 19 8.10017 19C7.58503 19 7.16531 18.6145 6.5 17.8436',
  d2: 'M2 12H8',
  d3: 'M13 19L16.5118 14.6032C17.5039 13.361 18 12.7398 18 12C18 11.2602 17.5039 10.639 16.5118 9.39683L13 5',
  d4: 'M17 19L20.5118 14.6032C21.5039 13.361 22 12.7398 22 12C22 11.2602 21.5039 10.639 20.5118 9.39683L17 5',
  d5: 'M12.4677 14.553L10.2003 17.2531C9.22232 18.4177 8.73332 19 8.10017 19C7.58503 19 7.16531 18.6145 6.5 17.8436V6.15642C7.16531 5.38547 7.58503 5 8.10017 5C8.73332 5 9.22232 5.58231 10.2003 6.74694L12.4677 9.44699L12.4677 9.447C13.4892 10.6634 14 11.2716 14 12C14 12.7284 13.4892 13.3366 12.4677 14.553Z',
  d6: 'M12.376 4.21867C12.8075 3.87401 13.4367 3.94443 13.7814 4.37596L17.2932 8.77279C17.3052 8.78781 17.3171 8.80278 17.329 8.81769C17.7945 9.40036 18.1991 9.90698 18.4796 10.3627C18.7825 10.8549 19 11.3784 19 12C19 12.6216 18.7825 13.1452 18.4796 13.6374C18.1991 14.0931 17.7945 14.5997 17.329 15.1824L13.7814 19.6241C13.4367 20.0556 12.8075 20.1261 12.376 19.7814C11.9444 19.4367 11.874 18.8075 12.2187 18.376L15.7304 13.9791C16.2421 13.3385 16.5679 12.9278 16.7763 12.5891C16.9695 12.2752 17 12.1183 17 12C17 11.8818 16.9695 11.7249 16.7763 11.411C16.5679 11.0723 16.2421 10.6616 15.7304 10.0209L12.2187 5.62411C11.874 5.19258 11.9444 4.56334 12.376 4.21867Z',
  d7: 'M16.376 4.21867C16.8075 3.87401 17.4367 3.94443 17.7814 4.37596L21.2932 8.77279C21.3052 8.78781 21.3171 8.80278 21.329 8.81769C21.7945 9.40036 22.1991 9.90698 22.4796 10.3627C22.7825 10.8549 23 11.3784 23 12C23 12.6216 22.7825 13.1452 22.4796 13.6374C22.1991 14.0931 21.7945 14.5997 21.329 15.1824L17.7814 19.6241C17.4367 20.0556 16.8075 20.1261 16.376 19.7814C15.9444 19.4367 15.874 18.8075 16.2187 18.376L19.7304 13.9791C20.2421 13.3385 20.5679 12.9278 20.7763 12.5891C20.9695 12.2752 21 12.1183 21 12C21 11.8818 20.9695 11.7249 20.7763 11.411C20.5679 11.0723 20.2421 10.6616 19.7304 10.0209L16.2187 5.62411C15.874 5.19258 15.9444 4.56334 16.376 4.21867Z',
  d8: 'M1 12C1 11.4477 1.44772 11 2 11H8C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13H2C1.44772 13 1 12.5523 1 12Z',
  d9: 'M6.401 4.68773C6.81515 4.32138 7.32904 4 7.99996 4C8.67088 4 9.18477 4.32138 9.59892 4.68773C9.98119 5.02589 10.3929 5.50811 10.8531 6.04706L13.2406 8.84265C13.7271 9.41225 14.1515 9.90909 14.4461 10.3573C14.7642 10.8413 15 11.3675 15 12C15 12.6325 14.7642 13.1587 14.4461 13.6427C14.1515 14.0909 13.7271 14.5878 13.2406 15.1574L10.8531 17.9529C10.3929 18.4919 9.9812 18.9741 9.59892 19.3123C9.18477 19.6786 8.67088 20 7.99996 20C7.32904 20 6.81515 19.6786 6.401 19.3123C6.01873 18.9741 5.60699 18.4919 5.1468 17.9529L2.75933 15.1574C2.64044 15.0182 2.581 14.9486 2.56263 14.8906C2.51625 14.7441 2.59028 14.5835 2.73176 14.5237C2.78779 14.5 2.88001 14.5 3.06444 14.5H7.99996C9.38067 14.5 10.5 13.3807 10.5 12C10.5 10.6193 9.38067 9.5 7.99996 9.5H3.06444C2.88001 9.5 2.78779 9.5 2.73176 9.4763C2.59028 9.41646 2.51625 9.25586 2.56263 9.10942C2.581 9.05142 2.64044 8.98182 2.75933 8.84263L5.14679 6.04707C5.60698 5.50811 6.01873 5.02589 6.401 4.68773Z',
  d10: 'M7 6.16667L8 5L14 12L8 19L7 17.8333',
  d11: 'M12 19L18 12L12 5',
  d12: 'M16 19L22 12L16 5',
  d13: 'M12.8622 4.5083L18.5226 11.3612C18.8254 11.7278 18.8254 12.2688 18.5226 12.6354L12.8622 19.4883L11.4297 18.2141L16.5638 11.9983L11.4297 5.78253L12.8622 4.5083Z',
  d14: 'M16.8622 4.5083L22.5226 11.3612C22.8254 11.7278 22.8254 12.2688 22.5226 12.6354L16.8622 19.4883L15.4297 18.2141L20.5638 11.9983L15.4297 5.78253L16.8622 4.5083Z',
  d15: 'M7.25 13H1.25V11H7.25V13Z',
  d16: 'M14.75 11.8691L8.00003 4.11914L3.31348 9.5H8.74928V14.5H3.54143L8.00003 19.6191L14.75 11.8691Z',
} as const;

export const IconKeyframesMultipleRemoveStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-remove-stroke-rounded IconKeyframesMultipleRemoveStrokeRounded"
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

export const IconKeyframesMultipleRemoveDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-remove-duotone-rounded IconKeyframesMultipleRemoveDuotoneRounded"
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

export const IconKeyframesMultipleRemoveTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-remove-twotone-rounded IconKeyframesMultipleRemoveTwotoneRounded"
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

export const IconKeyframesMultipleRemoveSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-remove-solid-rounded IconKeyframesMultipleRemoveSolidRounded"
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesMultipleRemoveBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-remove-bulk-rounded IconKeyframesMultipleRemoveBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesMultipleRemoveStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-remove-stroke-sharp IconKeyframesMultipleRemoveStrokeSharp"
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

export const IconKeyframesMultipleRemoveSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-multiple-remove-solid-sharp IconKeyframesMultipleRemoveSolidSharp"
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

export const iconPackOfKeyframesMultipleRemove: TheIconSelfPack = {
  name: 'KeyframesMultipleRemove',
  StrokeRounded: IconKeyframesMultipleRemoveStrokeRounded,
  DuotoneRounded: IconKeyframesMultipleRemoveDuotoneRounded,
  TwotoneRounded: IconKeyframesMultipleRemoveTwotoneRounded,
  SolidRounded: IconKeyframesMultipleRemoveSolidRounded,
  BulkRounded: IconKeyframesMultipleRemoveBulkRounded,
  StrokeSharp: IconKeyframesMultipleRemoveStrokeSharp,
  SolidSharp: IconKeyframesMultipleRemoveSolidSharp,
};