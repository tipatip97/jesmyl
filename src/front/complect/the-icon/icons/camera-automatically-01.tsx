import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.5 17L12 11L9.5 17M10.2143 15.2857H13.7857',
  d2: 'M7 6.00049C5.77936 6.00415 5.10383 6.03335 4.54873 6.26634C3.7712 6.59269 3.13801 7.19552 2.76811 7.96158C2.46618 8.58687 2.41677 9.38799 2.31796 10.9902L2.16312 13.5009C1.91739 17.4853 1.79452 19.4775 2.96369 20.7388C4.13285 22 6.10252 22 10.0419 22H13.9581C17.8975 22 19.8672 22 21.0363 20.7388C22.2055 19.4775 22.0826 17.4853 21.8369 13.5009L21.682 10.9902C21.5832 9.38799 21.5338 8.58687 21.2319 7.96158C20.862 7.19552 20.2288 6.59269 19.4513 6.26634C18.8962 6.03335 18.2206 6.00415 17 6.00049',
  d3: 'M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7',
  d4: 'M11.9998 6H12.0088',
  d5: 'M2.16312 13.5009L2.31796 10.9902C2.41677 9.38799 2.46618 8.58687 2.76811 7.96158C3.13801 7.19552 3.7712 6.59269 4.54873 6.26634C5.10383 6.03335 5.77936 6.00415 7 6.00049H7.38741L7.88558 4.78543C8.26777 3.82996 8.60036 2.7461 9.58311 2.25955C10.1074 2 10.7382 2 11.9998 2C13.2614 2 13.8922 2 14.4164 2.25955C15.3992 2.7461 15.7317 3.82996 16.1139 4.78543L16.6 6.00049H17C18.2206 6.00415 18.8962 6.03335 19.4513 6.26634C20.2288 6.59269 20.862 7.19552 21.2319 7.96158C21.5338 8.58687 21.5832 9.38799 21.682 10.9902L21.8369 13.5009C22.0826 17.4853 22.2055 19.4775 21.0363 20.7388C19.8672 22 17.8975 22 13.9581 22H10.0419C6.10252 22 4.13285 22 2.96369 20.7388C1.79452 19.4775 1.91739 17.4853 2.16312 13.5009Z',
  d6: 'M7 6C5.77936 6.00366 5.10383 6.03286 4.54873 6.26585C3.7712 6.5922 3.13801 7.19503 2.76811 7.9611C2.46618 8.58638 2.41677 9.3875 2.31796 10.9897L2.16312 13.5004C1.91739 17.4849 1.79452 19.4771 2.96369 20.7383C4.13285 21.9995 6.10252 21.9995 10.0419 21.9995H13.9581C17.8975 21.9995 19.8672 21.9995 21.0363 20.7383C22.2055 19.4771 22.0826 17.4849 21.8369 13.5004L21.682 10.9897C21.5832 9.3875 21.5338 8.58638 21.2319 7.9611C20.862 7.19503 20.2288 6.5922 19.4513 6.26585C18.8962 6.03286 18.2206 6.00366 17 6',
  d7: 'M11.9686 1.25H12.0314H12.0314C12.6355 1.24999 13.1356 1.24998 13.5485 1.28515C13.9812 1.32201 14.3723 1.40069 14.7494 1.58742C15.4213 1.92009 15.8461 2.44877 16.1443 2.979C16.3755 3.39004 16.555 3.85182 16.7071 4.24318C16.743 4.33553 16.7774 4.42396 16.8105 4.50689L17.1081 5.25086C18.2353 5.25543 19.0437 5.28193 19.7414 5.57479C20.6892 5.97261 21.4585 6.70632 21.9071 7.63547C22.1073 8.05002 22.2092 8.49536 22.2767 9.01254C22.3425 9.51676 22.3808 10.1389 22.4288 10.9174L22.5889 13.5123C22.7087 15.4557 22.8035 16.9915 22.715 18.196C22.6242 19.4329 22.3342 20.4418 21.5862 21.2486C20.8368 22.0571 19.8569 22.4154 18.6395 22.5851C17.4567 22.75 15.9366 22.75 14.017 22.75H9.98273C8.06311 22.75 6.54301 22.75 5.36028 22.5851C4.14282 22.4154 3.16298 22.0571 2.41353 21.2486C1.66555 20.4418 1.37551 19.4329 1.28469 18.196C1.19625 16.9915 1.29098 15.4557 1.41085 13.5123L1.5709 10.9172C1.6189 10.1388 1.65726 9.51672 1.72303 9.01254C1.79049 8.49536 1.89241 8.05002 2.09258 7.63547C2.54124 6.70632 3.31053 5.97261 4.25833 5.57479C4.95614 5.2819 5.76456 5.25543 6.89188 5.25086L7.18947 4.50689C7.22264 4.42397 7.25701 4.33554 7.2929 4.2432L7.2929 4.2432L7.29291 4.24317C7.44503 3.85181 7.62451 3.39003 7.85567 2.979C8.15388 2.44877 8.57866 1.92009 9.25059 1.58742C9.62775 1.40069 10.0188 1.32201 10.4515 1.28515C10.8644 1.24998 11.3645 1.24999 11.9686 1.25H11.9686ZM11.002 6C11.002 5.44772 11.4497 5 12.002 5H12.0109C12.5632 5 13.0109 5.44772 13.0109 6C13.0109 6.55228 12.5632 7 12.0109 7H12.002C11.4497 7 11.002 6.55228 11.002 6ZM12.7475 10.9181C12.6221 10.62 12.328 10.4258 12.002 10.4258C11.6759 10.4258 11.3818 10.62 11.2564 10.9181L9.34042 15.4729C9.33546 15.484 9.33074 15.4952 9.32628 15.5065L8.56429 17.3179C8.39273 17.7257 8.58744 18.1941 8.99918 18.364C9.41091 18.534 9.88377 18.3411 10.0553 17.9333L10.6174 16.597H13.3865L13.9486 17.9333C14.1201 18.3411 14.593 18.534 15.0047 18.364C15.4165 18.1941 15.6112 17.7257 15.4396 17.3179L14.6776 15.5065C14.6732 15.4952 14.6684 15.4839 14.6635 15.4729L12.7475 10.9181ZM12.002 13.3057L12.7134 14.9971H11.2905L12.002 13.3057Z',
  d8: 'M11.9686 1.25H12.0314C12.6355 1.24999 13.1356 1.24998 13.5485 1.28515C13.9812 1.32201 14.3723 1.40069 14.7494 1.58742C15.4213 1.92009 15.8461 2.44877 16.1443 2.979C16.3755 3.39004 16.555 3.85182 16.7071 4.24318C16.743 4.33553 16.7774 4.42396 16.8105 4.50689L17.1081 5.25086C18.2353 5.25543 19.0437 5.28193 19.7414 5.57479C20.6892 5.97261 21.4585 6.70632 21.9071 7.63547C22.1073 8.05002 22.2092 8.49536 22.2767 9.01254C22.3425 9.51676 22.3808 10.1389 22.4288 10.9174L22.5889 13.5123C22.7087 15.4557 22.8035 16.9915 22.715 18.196C22.6242 19.4329 22.3342 20.4418 21.5862 21.2486C20.8368 22.0571 19.8569 22.4154 18.6395 22.5851C17.4567 22.75 15.9366 22.75 14.017 22.75H9.98273C8.06311 22.75 6.54301 22.75 5.36028 22.5851C4.14282 22.4154 3.16298 22.0571 2.41353 21.2486C1.66555 20.4418 1.37551 19.4329 1.28469 18.196C1.19625 16.9915 1.29098 15.4557 1.41085 13.5123L1.5709 10.9172C1.6189 10.1388 1.65726 9.51672 1.72303 9.01254C1.79049 8.49536 1.89241 8.05002 2.09258 7.63547C2.54124 6.70632 3.31053 5.97261 4.25833 5.57479C4.95614 5.2819 5.76456 5.25543 6.89188 5.25086L7.18947 4.50689C7.22264 4.42397 7.25701 4.33554 7.2929 4.2432C7.44502 3.85184 7.62451 3.39004 7.85567 2.979C8.15388 2.44877 8.57866 1.92009 9.25059 1.58742C9.62775 1.40069 10.0188 1.32201 10.4515 1.28515C10.8644 1.24998 11.3645 1.24999 11.9686 1.25Z',
  d9: 'M11.002 6C11.002 5.44772 11.4497 5 12.002 5H12.0109C12.5632 5 13.0109 5.44772 13.0109 6C13.0109 6.55228 12.5632 7 12.0109 7H12.002C11.4497 7 11.002 6.55228 11.002 6Z',
  d10: 'M12.002 10.4258C12.328 10.4258 12.6221 10.62 12.7475 10.9181L14.6635 15.4729C14.6684 15.484 14.6732 15.4952 14.6776 15.5065L15.4396 17.3179C15.6112 17.7257 15.4165 18.1941 15.0047 18.364C14.593 18.534 14.1201 18.3411 13.9486 17.9333L13.3865 16.597H10.6174L10.0553 17.9333C9.88377 18.3411 9.41091 18.534 8.99918 18.364C8.58744 18.1941 8.39273 17.7257 8.56429 17.3179L9.32628 15.5065C9.33074 15.4952 9.33546 15.484 9.34042 15.4729L11.2564 10.9181C11.3818 10.62 11.6759 10.4258 12.002 10.4258ZM11.2905 14.9971H12.7134L12.002 13.3057L11.2905 14.9971Z',
  d11: 'M12 6H12.009',
  d12: 'M15 18L12.5 11H11.5L9 18M9.85714 16H14.1429',
  d13: 'M16.5148 6.00899C16.7733 5.95716 20.1138 5.98739 21.4925 6.00899L22.0176 21.9724L12.0732 21.9824H2.01953L2.49435 6.05265C2.4961 5.99941 2.48459 6.01772 2.55935 6.01772C3.96386 5.99627 7.24339 5.95832 7.49615 6.00899M17.0088 7.99395L15.5126 1.98242H12.0991L8.50168 1.98271L6.99918 7.99894',
  d14: 'M11.9978 11.8297L13.2193 15.2498H10.7764L11.9978 11.8297Z',
  d15: 'M1.77155 5.97711C1.78417 5.57222 2.11533 5.25054 2.51953 5.25054H6.92399L7.92198 1.24976H16.0751L17.0729 5.24976H22.2029L22.7485 22.7498H1.24854L1.77155 5.97711ZM12.9985 4.99976H10.9985V6.99976H12.9985V4.99976ZM13.0264 10.2498H10.9693L8.2915 17.7475L9.70412 18.252L10.2406 16.7498H13.755L14.2915 18.252L15.7041 17.7475L13.0264 10.2498Z',
} as const;

export const IconCameraAutomatically01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-automatically-01-stroke-rounded IconCameraAutomatically01StrokeRounded"
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

export const IconCameraAutomatically01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-automatically-01-duotone-rounded IconCameraAutomatically01DuotoneRounded"
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
        d={d.d6} 
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

export const IconCameraAutomatically01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-automatically-01-twotone-rounded IconCameraAutomatically01TwotoneRounded"
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
        d={d.d6} 
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

export const IconCameraAutomatically01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-automatically-01-solid-rounded IconCameraAutomatically01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraAutomatically01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-automatically-01-bulk-rounded IconCameraAutomatically01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraAutomatically01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-automatically-01-stroke-sharp IconCameraAutomatically01StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraAutomatically01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-automatically-01-solid-sharp IconCameraAutomatically01SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
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

export const iconPackOfCameraAutomatically01: TheIconSelfPack = {
  name: 'CameraAutomatically01',
  StrokeRounded: IconCameraAutomatically01StrokeRounded,
  DuotoneRounded: IconCameraAutomatically01DuotoneRounded,
  TwotoneRounded: IconCameraAutomatically01TwotoneRounded,
  SolidRounded: IconCameraAutomatically01SolidRounded,
  BulkRounded: IconCameraAutomatically01BulkRounded,
  StrokeSharp: IconCameraAutomatically01StrokeSharp,
  SolidSharp: IconCameraAutomatically01SolidSharp,
};