import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.5002 4.5C14.5002 5.32843 13.8286 6 13.0002 6C12.1717 6 11.5002 5.32843 11.5002 4.5C11.5002 3.67157 12.1717 3 13.0002 3C13.8286 3 14.5002 3.67157 14.5002 4.5Z',
  d2: 'M19 8.89062L13.9777 8.29142M19 21L18.5438 17.5301C18.2903 15.6021 18.1636 14.6381 17.4915 14.1298C16.8194 13.6215 15.8722 13.7731 13.9777 14.0765L12.1402 14.3707M13.9777 8.29142L12.2231 8.08208C11.4204 7.98631 11.0191 7.93843 10.7146 8.14419C10.41 8.34995 10.299 8.74397 10.077 9.53203L9.4087 11.904C9.02319 13.2724 8.83044 13.9565 9.19196 14.3707C9.55348 14.7849 10.2465 14.674 11.6326 14.452L12.1402 14.3707M13.9777 8.29142L12.1402 14.3707',
  d3: 'M10 17L9.44721 18.1056C9.15692 18.6862 8.68616 19.1569 8.10557 19.4472L5 21',
  d4: 'M9.4087 11.904L10.077 9.53203C10.299 8.74397 10.41 8.34995 10.7146 8.14419C11.0191 7.93843 11.4204 7.98631 12.2231 8.08208L13.9777 8.29142L12.1402 14.3707L11.6326 14.452C10.2465 14.674 9.55348 14.7849 9.19196 14.3707C8.83044 13.9565 9.02319 13.2724 9.4087 11.904Z',
  d5: 'M10.7502 4.375C10.7502 3.13236 11.7576 2.125 13.0002 2.125C14.2429 2.125 15.2502 3.13236 15.2502 4.375C15.2502 5.61764 14.2429 6.625 13.0002 6.625C11.7576 6.625 10.7502 5.61764 10.7502 4.375Z',
  d6: 'M19.1185 7.77266C19.6669 7.83809 20.0584 8.33569 19.993 8.88409C19.9276 9.43248 19.43 9.82401 18.8816 9.75858L14.6923 9.25876L13.5597 13.0057C14.4499 12.8631 15.5442 12.6878 16.171 12.674C16.8437 12.6592 17.5074 12.763 18.0948 13.2072C18.6799 13.6498 18.964 14.26 19.14 14.9117C19.305 15.5223 19.4074 16.3012 19.5267 17.209L19.9915 20.7446C20.0635 21.2922 19.678 21.7945 19.1304 21.8665C18.5828 21.9385 18.0806 21.5529 18.0086 21.0054L17.5524 17.5354C17.4219 16.5434 17.3351 15.8992 17.2093 15.4334C17.0906 14.994 16.9752 14.8681 16.8883 14.8023C16.8036 14.7383 16.6577 14.6638 16.2151 14.6735C15.7423 14.6839 15.1118 14.7826 14.1358 14.9389L11.7213 15.3256C11.0884 15.427 10.5053 15.5204 10.0376 15.5249C9.53351 15.5297 8.90445 15.437 8.43861 14.9033C7.97655 14.3739 7.96373 13.7402 8.02857 13.2413C8.0893 12.7741 8.25082 12.201 8.42744 11.5744L9.12759 9.08932C9.22712 8.73576 9.325 8.38809 9.44291 8.10742C9.57636 7.78977 9.77956 7.44407 10.1548 7.19058C10.5315 6.93602 10.9288 6.87766 11.2746 6.87509C11.5778 6.87283 11.934 6.91541 12.2931 6.95832L19.1185 7.77266Z',
  d7: 'M10.4476 15.9808C10.9416 16.2278 11.1418 16.8285 10.8948 17.3224L10.342 18.428C9.95496 19.2021 9.32727 19.8298 8.55316 20.2169L5.44759 21.7696C4.95361 22.0166 4.35293 21.8164 4.10594 21.3224C3.85896 20.8285 4.05918 20.2278 4.55316 19.9808L7.65873 18.428C8.04579 18.2345 8.35963 17.9206 8.55316 17.5336L9.10594 16.428C9.35293 15.934 9.95361 15.7338 10.4476 15.9808Z',
  d8: 'M14.4998 4.5C14.4998 5.32843 13.8283 6 12.9998 6C12.1714 6 11.4998 5.32843 11.4998 4.5C11.4998 3.67157 12.1714 3 12.9998 3C13.8283 3 14.4998 3.67157 14.4998 4.5Z',
  d9: 'M19 21L18.5438 17.53C18.2903 15.602 18.1636 14.638 17.4915 14.1297C16.8194 13.6214 15.8722 13.7731 13.9777 14.0765L12.5 14.3131M19 9L13.9777 8.40914M13.9777 8.40914L10.5 8L9.4087 11.904C9.02319 13.2723 8.83044 13.9565 9.19196 14.3707C9.55348 14.7849 10.2465 14.6739 11.6326 14.452L12.5 14.3131M13.9777 8.40914L12.5 14.3131',
  d10: 'M10.585 4.5C10.585 3.25736 11.5924 2.25 12.835 2.25C14.0777 2.25 15.085 3.25736 15.085 4.5C15.085 5.74264 14.0777 6.75 12.835 6.75C11.5924 6.75 10.585 5.74264 10.585 4.5Z',
  d11: 'M9.61284 7.79789C9.71228 7.44215 10.0559 7.21178 10.4228 7.25494L18.9228 8.25494L18.7475 9.74466L14.3803 9.23087L13.3386 13.3926L13.7469 13.3273C14.6493 13.1827 15.4022 13.0621 16.0116 13.0487C16.6556 13.0345 17.2546 13.1346 17.7791 13.5314C18.302 13.9268 18.5649 14.4765 18.7338 15.1017C18.8943 15.6959 18.9948 16.4604 19.1157 17.3802L19.4994 20.902L18.0122 21.0975L17.6353 17.6276C17.5058 16.6426 17.4169 15.9787 17.2857 15.4929C17.1599 15.027 17.0234 14.8405 16.8742 14.7277C16.7267 14.6161 16.516 14.5379 16.0447 14.5483C15.5507 14.5592 14.9002 14.6617 13.9314 14.8168L11.5864 15.1923L11.5301 15.2013L11.5301 15.2013C10.8854 15.3046 10.3189 15.3954 9.87034 15.3996C9.39434 15.4042 8.85664 15.3157 8.46207 14.8637C8.07033 14.4149 8.05017 13.8709 8.1116 13.3983C8.16991 12.9496 8.327 12.3922 8.5068 11.7542L8.52175 11.7011L9.61284 7.79789Z',
  d12: 'M8.61155 17.7701L9.16434 16.6646L10.506 17.3354L9.9532 18.4409C9.59033 19.1667 9.00187 19.7551 8.27614 20.118L5.17143 21.75L4.50061 20.4084L7.60532 18.7764C8.04076 18.5586 8.39384 18.2056 8.61155 17.7701Z',
} as const;

export const IconWorkoutWarmUpStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-warm-up-stroke-rounded IconWorkoutWarmUpStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconWorkoutWarmUpDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-warm-up-duotone-rounded IconWorkoutWarmUpDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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

export const IconWorkoutWarmUpTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-warm-up-twotone-rounded IconWorkoutWarmUpTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="0.5" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutWarmUpSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-warm-up-solid-rounded IconWorkoutWarmUpSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutWarmUpBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-warm-up-bulk-rounded IconWorkoutWarmUpBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const IconWorkoutWarmUpStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-warm-up-stroke-sharp IconWorkoutWarmUpStrokeSharp"
    >
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutWarmUpSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-warm-up-solid-sharp IconWorkoutWarmUpSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfWorkoutWarmUp: TheIconSelfPack = {
  name: 'WorkoutWarmUp',
  StrokeRounded: IconWorkoutWarmUpStrokeRounded,
  DuotoneRounded: IconWorkoutWarmUpDuotoneRounded,
  TwotoneRounded: IconWorkoutWarmUpTwotoneRounded,
  SolidRounded: IconWorkoutWarmUpSolidRounded,
  BulkRounded: IconWorkoutWarmUpBulkRounded,
  StrokeSharp: IconWorkoutWarmUpStrokeSharp,
  SolidSharp: IconWorkoutWarmUpSolidSharp,
};