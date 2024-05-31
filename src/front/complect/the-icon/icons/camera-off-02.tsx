import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 21.1212C20.1269 22 18.7217 22 15.9112 22H7.96193C5.15145 22 3.74621 22 2.8731 21.1212C2 20.2424 2 18.8279 2 15.9991V11.4984C2 9.15242 2 7.97945 2.61601 7.1714C2.7746 6.96337 2.95959 6.77716 3.16627 6.61754C3.84131 6.09617 4.42141 6.0132 5.97462 6',
  d2: 'M21.9934 17.5C21.9999 17.0495 21.9999 16.5516 21.9999 16V11.5C21.9999 9.15442 21.9999 7.98164 21.38 7.17372C21.2204 6.96572 21.0342 6.77954 20.8262 6.61994C20.0183 6 19.3455 6 16.9999 6H16.5999M16.9999 7L16.5999 6M8 4.5C8.35233 3.62326 8.6912 2.70121 9.58327 2.25955C10.1075 2 10.7383 2 11.9999 2C13.2615 2 13.8923 2 14.4166 2.25955C15.3993 2.7461 15.7319 3.82996 16.1141 4.78543L16.5999 6',
  d3: 'M11.0604 11C9.84821 11.5202 9 12.7176 9 14.1116C9 15.9829 10.5286 17.5 12.4143 17.5C13.7763 17.5 14.952 16.7085 15.5 15.5638',
  d4: 'M11.9998 6H12.0088',
  d5: 'M2 2L22 22',
  d6: 'M2 15.9997V11.4997C2 9.15417 2 7.98138 2.61994 7.17346C2.77954 6.96546 2.96572 6.77928 3.17372 6.61968C3.85817 6.09448 4.44563 6.01422 6.03536 6.00195L21.1213 21.1211C20.2426 21.9997 18.8284 21.9997 16 21.9997H8C5.17157 21.9997 3.75736 21.9997 2.87868 21.1211C2 20.2424 2 18.8282 2 15.9997Z',
  d7: 'M8 13.999C8 12.3768 8.96564 10.9802 10.3535 10.3525L5.45252 5.45153C5.36056 5.35956 5.31457 5.31358 5.25466 5.29073C5.19474 5.26789 5.13184 5.27147 5.00604 5.27863C4.78816 5.29104 4.5899 5.30868 4.40786 5.33377C3.72467 5.42791 3.23063 5.63017 2.71715 6.02418C2.45715 6.22368 2.22443 6.4564 2.02493 6.7164C1.59808 7.27268 1.41725 7.9212 1.33222 8.67547C1.24998 9.40494 1.24999 10.3196 1.25 11.454V16.0541C1.24998 17.4217 1.24997 18.5241 1.36653 19.391C1.48754 20.2911 1.74644 21.049 2.34835 21.6509C2.95027 22.2528 3.70814 22.5117 4.60825 22.6327C5.47522 22.7493 6.57754 22.7493 7.94513 22.7493H16.0549C17.4225 22.7493 18.5248 22.7493 19.3918 22.6327C20.0743 22.541 20.675 22.3699 21.188 22.0302C21.4011 21.889 21.5077 21.8185 21.5219 21.6769C21.5361 21.5354 21.4332 21.4325 21.2274 21.2266L15.6464 15.6456C15.0188 17.0334 13.6222 17.999 12 17.999C9.79086 17.999 8 16.2081 8 13.999Z',
  d8: 'M12.0326 1.25061C12.6367 1.2506 13.1368 1.25059 13.5497 1.28575C13.9824 1.32259 14.3735 1.40124 14.7506 1.5879C15.4226 1.92045 15.8474 2.44893 16.1456 2.97897C16.3767 3.38985 16.5562 3.85146 16.7083 4.24268C16.7901 4.45307 16.8743 4.66251 16.9581 4.87209C17.1042 5.23701 17.1212 5.24872 17.5153 5.24934C18.3999 5.25072 19.065 5.26083 19.5934 5.33361C20.2766 5.42771 20.7706 5.6299 21.2841 6.02376C21.5441 6.22319 21.7768 6.45583 21.9763 6.71573C22.4032 7.2718 22.584 7.92008 22.669 8.67407C22.7513 9.40329 22.7512 10.3176 22.7512 11.4516V16.05C22.7512 16.7169 22.7512 17.3214 22.7377 17.8656C22.7245 18.3958 22.7179 18.661 22.5343 18.7343C22.3506 18.8077 22.1587 18.6158 21.7748 18.2321C17.0794 13.5384 12.4149 8.87567 7.71176 4.17428C7.57423 4.0368 7.50547 3.96806 7.48841 3.87673C7.47136 3.78539 7.50923 3.69979 7.58497 3.52857C7.66732 3.34241 7.75731 3.15598 7.8569 2.97897C8.15511 2.44893 8.57989 1.92045 9.25182 1.5879C9.62898 1.40124 10.02 1.32259 10.4528 1.28575C10.9775 1.24107 11.5065 1.25061 12.0326 1.25061ZM11.9968 3.99934C11.4469 3.99934 11.0012 4.44689 11.0012 4.99897C11.0012 5.54895 11.4579 5.9986 12.0057 5.9986C12.5555 5.9986 13.0012 5.55105 13.0012 4.99897C13.0012 4.44899 12.5446 3.99934 11.9968 3.99934Z',
  d9: 'M1.29289 1.29265C1.68342 0.902125 2.31658 0.902125 2.70711 1.29265L22.7071 21.2926C23.0976 21.6832 23.0976 22.3163 22.7071 22.7069C22.3166 23.0974 21.6834 23.0974 21.2929 22.7069L1.29289 2.70686C0.902369 2.31634 0.902369 1.68317 1.29289 1.29265Z',
  d10: 'M11.9955 3.99976C11.4457 3.99976 11 4.4473 11 4.99938C11 5.54937 11.4567 5.99901 12.0045 5.99901C12.5543 5.99901 13 5.55146 13 4.99938C13 4.4494 12.5433 3.99976 11.9955 3.99976Z',
  d11: 'M10.0758 10.0758C9.12648 10.7018 8.5 11.7777 8.5 12.9999C8.5 14.9329 10.067 16.4999 12 16.4999C13.2222 16.4999 14.2981 15.8734 14.9241 14.9241',
  d12: 'M2.00049 21.0006H1.25049C1.25049 21.4148 1.58627 21.7506 2.00049 21.7506V21.0006ZM17.0005 6.00024L16.3297 6.33565L16.537 6.75024H17.0005V6.00024ZM22.0014 6.00024H22.7514C22.7514 5.58603 22.4157 5.25024 22.0014 5.25024V6.00024ZM2.00049 6.00108V5.25108H1.25049V6.00108H2.00049ZM15.0005 2.00024L15.6713 1.66483C15.5443 1.41075 15.2846 1.25024 15.0005 1.25024V2.00024ZM9.00049 2.00024V1.25024C8.71639 1.25024 8.45667 1.41077 8.32964 1.66489L9.00049 2.00024ZM2.00049 21.7506H21.0014V20.2506H2.00049V21.7506ZM17.0005 6.75024H22.0014V5.25024H17.0005V6.75024ZM2.75049 21.0006V6.00108H1.25049V21.0006H2.75049ZM2.00049 6.75108H6.00049V5.25108H2.00049V6.75108ZM14.3297 2.33565L16.3297 6.33565L17.6713 5.66483L15.6713 1.66483L14.3297 2.33565ZM15.0005 1.25024H9.00049V2.75024H15.0005V1.25024ZM8.39884 4.88112L9.67134 2.3356L8.32964 1.66489L7.05714 4.21041L8.39884 4.88112ZM21.2514 6.00024V18.8192H22.7514V6.00024H21.2514Z',
  d13: 'M21.3348 22.75L1.24902 2.66421L2.66324 1.25L22.749 21.3358V22.75H21.3348Z',
  d14: 'M8.32915 1.66452C8.45618 1.4104 8.7159 1.24988 9 1.24988H15C15.2841 1.24988 15.5438 1.41038 15.6708 1.66447L17.4635 5.24988H22.0009C22.4152 5.24988 22.7509 5.58566 22.7509 5.99988V19.2153L7.2863 3.75065L8.32915 1.66452Z',
  d15: 'M2 22.7502C1.58579 22.7502 1.25 22.4144 1.25 22.0002V6.00071C1.25 5.5865 1.58579 5.25071 2 5.25071H5.25083L10.3535 10.3534C8.96566 10.981 8 12.3777 8 13.9999C8 16.209 9.79086 17.9999 12 17.9999C13.6222 17.9999 15.0189 17.0342 15.6465 15.6464L22.7503 22.7502H2Z',
} as const;

export const IconCameraOff02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-off-02-stroke-rounded IconCameraOff02StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraOff02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-off-02-duotone-rounded IconCameraOff02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraOff02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-off-02-twotone-rounded IconCameraOff02TwotoneRounded"
    >
      <path 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraOff02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-off-02-solid-rounded IconCameraOff02SolidRounded"
    >
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

export const IconCameraOff02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-off-02-bulk-rounded IconCameraOff02BulkRounded"
    >
      <path 
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
        d={d.d10} 
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

export const IconCameraOff02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-off-02-stroke-sharp IconCameraOff02StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraOff02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-off-02-solid-sharp IconCameraOff02SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCameraOff02: TheIconSelfPack = {
  name: 'CameraOff02',
  StrokeRounded: IconCameraOff02StrokeRounded,
  DuotoneRounded: IconCameraOff02DuotoneRounded,
  TwotoneRounded: IconCameraOff02TwotoneRounded,
  SolidRounded: IconCameraOff02SolidRounded,
  BulkRounded: IconCameraOff02BulkRounded,
  StrokeSharp: IconCameraOff02StrokeSharp,
  SolidSharp: IconCameraOff02SolidSharp,
};