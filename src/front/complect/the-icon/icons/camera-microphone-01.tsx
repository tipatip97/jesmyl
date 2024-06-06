import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 6.00049C5.77936 6.00415 5.10383 6.03335 4.54873 6.26634C3.7712 6.59269 3.13801 7.19552 2.76811 7.96158C2.46618 8.58687 2.41677 9.38799 2.31796 10.9902L2.16312 13.5009C1.91739 17.4853 1.79452 19.4775 2.96369 20.7388C4.13285 22 6.10252 22 10.0419 22H13.9581C17.8975 22 19.8672 22 21.0363 20.7388C22.2055 19.4775 22.0826 17.4853 21.8369 13.5009L21.682 10.9902C21.5832 9.38799 21.5338 8.58687 21.2319 7.96158C20.862 7.19552 20.2288 6.59269 19.4513 6.26634C18.8962 6.03335 18.2206 6.00415 17 6.00049',
  d2: 'M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7',
  d3: 'M16.2079 14.7476C16.3447 14.3566 16.1386 13.9288 15.7476 13.7921C15.3566 13.6553 14.9288 13.8614 14.7921 14.2524L16.2079 14.7476ZM9.20794 14.2524C9.07118 13.8614 8.64335 13.6553 8.25237 13.7921C7.86139 13.9288 7.6553 14.3566 7.79206 14.7476L9.20794 14.2524ZM11.25 18.5C11.25 18.9142 11.5858 19.25 12 19.25C12.4142 19.25 12.75 18.9142 12.75 18.5H11.25ZM13 11.25V13.25H14.5V11.25H13ZM11 13.25V11.25H9.5V13.25H11ZM12 14.25C11.4477 14.25 11 13.8023 11 13.25H9.5C9.5 14.6307 10.6193 15.75 12 15.75V14.25ZM13 13.25C13 13.8023 12.5523 14.25 12 14.25V15.75C13.3807 15.75 14.5 14.6307 14.5 13.25H13ZM12 10.25C12.5523 10.25 13 10.6977 13 11.25H14.5C14.5 9.86929 13.3807 8.75 12 8.75V10.25ZM12 8.75C10.6193 8.75 9.5 9.86929 9.5 11.25H11C11 10.6977 11.4477 10.25 12 10.25V8.75ZM14.7921 14.2524C14.3832 15.4213 13.2832 16.25 12 16.25V17.75C13.9485 17.75 15.5979 16.4917 16.2079 14.7476L14.7921 14.2524ZM12 16.25C10.7168 16.25 9.61682 15.4213 9.20794 14.2524L7.79206 14.7476C8.40211 16.4917 10.0515 17.75 12 17.75V16.25ZM11.25 17V18.5H12.75V17H11.25Z',
  d4: 'M7 6C5.77936 6.00366 5.10383 6.03286 4.54873 6.26585C3.7712 6.5922 3.13801 7.19503 2.76811 7.9611C2.46618 8.58638 2.41677 9.3875 2.31796 10.9897L2.16312 13.5004C1.91739 17.4849 1.79452 19.4771 2.96369 20.7383C4.13285 21.9995 6.10252 21.9995 10.0419 21.9995H13.9581C17.8975 21.9995 19.8672 21.9995 21.0363 20.7383C22.2055 19.4771 22.0826 17.4849 21.8369 13.5004L21.682 10.9897C21.5832 9.3875 21.5338 8.58638 21.2319 7.9611C20.862 7.19503 20.2288 6.5922 19.4513 6.26585C18.8962 6.03286 18.2206 6.00366 17 6',
  d5: 'M2.31796 10.9902L2.16312 13.5009C1.91739 17.4853 1.79452 19.4775 2.96369 20.7388C4.13285 22 6.10252 22 10.0419 22H13.9581C17.8975 22 19.8672 22 21.0363 20.7388C22.2055 19.4775 22.0826 17.4853 21.8369 13.5009L21.682 10.9902C21.5832 9.38799 21.5338 8.58687 21.2319 7.96158C20.862 7.19552 20.2288 6.59269 19.4513 6.26634C18.8962 6.03335 18.2206 6.00415 17 6.00049H16.6L16.1139 4.78543C16.0752 4.68856 16.0369 4.59037 15.9985 4.49162C15.6576 3.61633 15.2995 2.69677 14.4164 2.25955C13.8922 2 13.2614 2 11.9998 2C10.7382 2 10.1074 2 9.58311 2.25955C8.7 2.69677 8.34189 3.61633 8.00103 4.49162C7.96257 4.59037 7.92433 4.68856 7.88558 4.78543L7.38741 6.00049H7C5.77936 6.00415 5.10383 6.03335 4.54873 6.26634C3.7712 6.59269 3.13801 7.19552 2.76811 7.96158C2.46618 8.58687 2.41677 9.38799 2.31796 10.9902ZM12 9.5C11.0335 9.5 10.25 10.2835 10.25 11.25V13.25C10.25 14.2165 11.0335 15 12 15C12.9665 15 13.75 14.2165 13.75 13.25V11.25C13.75 10.2835 12.9665 9.5 12 9.5Z',
  d6: 'M8.48438 14.5029C8.78878 15.3374 9.75994 16.8906 11.973 17.0227M11.973 17.0227C14.4236 16.8626 15.1808 15.2615 15.5224 14.5029M11.973 17.0227V18.4946',
  d7: 'M13.7295 11.2284V12.2674V13.3302C13.7295 14.0783 13.0162 14.9877 11.9539 14.9877C10.8916 14.9877 10.3148 14.1361 10.2598 13.4237V11.0835C10.3503 10.0869 11.1838 9.49805 12.0263 9.49805C13.0591 9.49805 13.7295 10.4221 13.7295 11.2284Z',
  d8: 'M8.49121 14.5151C8.81066 15.3978 9.8259 16.9334 11.9778 17.0123M11.9778 17.0123C12.6837 17.0123 14.599 16.7532 15.5081 14.5151M11.9778 17.0123V18.497',
  d9: 'M10.2529 11.2413C10.2529 10.2812 11.0312 9.50293 11.9913 9.50293C12.9514 9.50293 13.7297 10.2812 13.7297 11.2413V13.2581C13.7297 14.2182 12.9514 14.9965 11.9913 14.9965C11.0312 14.9965 10.2529 14.2182 10.2529 13.2581V11.2413Z',
  d10: 'M12.0314 1.25H11.9686H11.9686C11.3645 1.24999 10.8644 1.24998 10.4515 1.28515C10.0188 1.32201 9.62775 1.40069 9.25059 1.58742C8.57866 1.92009 8.15388 2.44877 7.85567 2.979C7.62451 3.39004 7.44502 3.85183 7.2929 4.2432L7.2929 4.2432C7.25701 4.33554 7.22264 4.42397 7.18947 4.50689L6.89188 5.25086C5.76456 5.25543 4.95614 5.2819 4.25833 5.57479C3.31053 5.97261 2.54124 6.70632 2.09258 7.63547C1.89241 8.05002 1.79049 8.49536 1.72303 9.01254C1.65726 9.51672 1.6189 10.1388 1.5709 10.9172L1.41085 13.5123C1.29098 15.4557 1.19625 16.9915 1.28469 18.196C1.37551 19.4329 1.66555 20.4418 2.41353 21.2486C3.16298 22.0571 4.14282 22.4154 5.36028 22.5851C6.54301 22.75 8.06311 22.75 9.98273 22.75H14.017C15.9366 22.75 17.4567 22.75 18.6395 22.5851C19.8569 22.4154 20.8368 22.0571 21.5862 21.2486C22.3342 20.4418 22.6242 19.4329 22.715 18.196C22.8035 16.9915 22.7087 15.4557 22.5889 13.5123L22.4288 10.9174C22.3808 10.1389 22.3425 9.51676 22.2767 9.01254C22.2092 8.49536 22.1073 8.05002 21.9071 7.63547C21.4585 6.70632 20.6892 5.97261 19.7414 5.57479C19.0437 5.28193 18.2353 5.25543 17.1081 5.25086L16.8105 4.50689C16.7774 4.42396 16.743 4.33553 16.7071 4.24318C16.555 3.85182 16.3755 3.39004 16.1443 2.979C15.8461 2.44877 15.4213 1.92009 14.7494 1.58742C14.3723 1.40069 13.9812 1.32201 13.5485 1.28515C13.1356 1.24998 12.6355 1.24999 12.0314 1.25H12.0314ZM14.5003 12.0001V10C14.5003 8.61929 13.381 7.5 12.0003 7.5C10.6196 7.5 9.50029 8.61929 9.50029 10V12.0001C9.50029 13.3808 10.6196 14.5001 12.0003 14.5001C13.381 14.5001 14.5003 13.3808 14.5003 12.0001ZM9.35552 14.482C9.06943 14.0096 8.45454 13.8585 7.98213 14.1446C7.50973 14.4307 7.35868 15.0456 7.64477 15.518C8.37498 16.7238 9.57861 17.6124 11.0001 17.9002V19C11.0001 19.5523 11.4479 20 12.0001 20C12.5524 20 13.0001 19.5523 13.0001 19V17.9002C14.4217 17.6124 15.6253 16.7238 16.3555 15.518C16.6416 15.0456 16.4906 14.4307 16.0182 14.1446C15.5457 13.8585 14.9309 14.0096 14.6448 14.482C14.0866 15.4037 13.1046 16 12.0001 16C10.8957 16 9.91373 15.4037 9.35552 14.482Z',
  d11: 'M11.9686 1.25H12.0314C12.6355 1.24999 13.1356 1.24998 13.5485 1.28515C13.9812 1.32201 14.3723 1.40069 14.7494 1.58742C15.4213 1.92009 15.8461 2.44877 16.1443 2.979C16.3755 3.39004 16.555 3.85182 16.7071 4.24318C16.743 4.33553 16.7774 4.42396 16.8105 4.50689L17.1081 5.25086C18.2353 5.25543 19.0437 5.28193 19.7414 5.57479C20.6892 5.97261 21.4585 6.70632 21.9071 7.63547C22.1073 8.05002 22.2092 8.49536 22.2767 9.01254C22.3425 9.51676 22.3808 10.1389 22.4288 10.9174L22.5889 13.5123C22.7087 15.4557 22.8035 16.9915 22.715 18.196C22.6242 19.4329 22.3342 20.4418 21.5862 21.2486C20.8368 22.0571 19.8569 22.4154 18.6395 22.5851C17.4567 22.75 15.9366 22.75 14.017 22.75H9.98273C8.06311 22.75 6.54301 22.75 5.36028 22.5851C4.14282 22.4154 3.16298 22.0571 2.41353 21.2486C1.66555 20.4418 1.37551 19.4329 1.28469 18.196C1.19625 16.9915 1.29098 15.4557 1.41085 13.5123L1.5709 10.9172C1.6189 10.1388 1.65726 9.51672 1.72303 9.01254C1.79049 8.49536 1.89241 8.05002 2.09258 7.63547C2.54124 6.70632 3.31053 5.97261 4.25833 5.57479C4.95614 5.2819 5.76456 5.25543 6.89188 5.25086L7.18947 4.50689C7.22264 4.42397 7.25701 4.33554 7.2929 4.2432C7.44502 3.85184 7.62451 3.39004 7.85567 2.979C8.15388 2.44877 8.57866 1.92009 9.25059 1.58742C9.62775 1.40069 10.0188 1.32201 10.4515 1.28515C10.8644 1.24998 11.3645 1.24999 11.9686 1.25Z',
  d12: 'M7.98213 14.1446C8.45454 13.8585 9.06943 14.0096 9.35552 14.482C9.91373 15.4037 10.8957 16 12.0001 16C13.1046 16 14.0866 15.4037 14.6448 14.482C14.9309 14.0096 15.5457 13.8585 16.0182 14.1446C16.4906 14.4307 16.6416 15.0456 16.3555 15.518C15.6253 16.7238 14.4217 17.6124 13.0001 17.9002V19C13.0001 19.5523 12.5524 20 12.0001 20C11.4479 20 11.0001 19.5523 11.0001 19V17.9002C9.57861 17.6124 8.37498 16.7238 7.64477 15.518C7.35868 15.0456 7.50973 14.4307 7.98213 14.1446Z',
  d13: 'M14.5003 10V12.0001C14.5003 13.3808 13.381 14.5001 12.0003 14.5001C10.6196 14.5001 9.50029 13.3808 9.50029 12.0001V10C9.50029 8.61929 10.6196 7.5 12.0003 7.5C13.381 7.5 14.5003 8.61929 14.5003 10Z',
  d14: 'M16.5148 6.00899C16.7733 5.95716 20.1138 5.98739 21.4925 6.00899L22.0176 21.9724L12.0732 21.9824H2.01953L2.49435 6.05265C2.4961 5.99941 2.48459 6.01772 2.55935 6.01772C3.96386 5.99627 7.24339 5.95832 7.49615 6.00899M17.0088 7.99395L15.5126 1.98242H12.0991L8.50168 1.98271L6.99918 7.99894',
  d15: 'M8.51074 14.5088C9.10862 16.2091 10.425 17.0012 11.999 17.0012M11.999 17.0012V19.0183M11.999 17.0012C13.5731 17.0012 14.9339 16.1962 15.5012 14.5088M12.0059 14.4805C11.0388 14.4805 10.2549 13.6965 10.2549 12.7295V10.7588C10.2549 9.79175 11.0388 9.00781 12.0059 9.00781C12.9729 9.00781 13.7568 9.79175 13.7568 10.7588V12.7295C13.7568 13.6965 12.9729 14.4805 12.0059 14.4805Z',
  d16: 'M1.77301 5.97784C1.78564 5.57295 2.11679 5.25127 2.52099 5.25127H6.92546L7.92344 1.25049H16.0766L17.0743 5.25049H22.2043L22.75 22.7505H1.25L1.77301 5.97784ZM12.0009 8.25049C10.6202 8.25049 9.50091 9.36978 9.50091 10.7505V12.7505C9.50091 14.1312 10.6202 15.2505 12.0009 15.2505C13.3816 15.2505 14.5009 14.1312 14.5009 12.7505V10.7505C14.5009 9.36978 13.3816 8.25049 12.0009 8.25049ZM12.0009 16.2505C10.7177 16.2505 9.61773 15.4218 9.20885 14.2529L7.79297 14.7481C8.32296 16.2633 9.63739 17.4119 11.2509 17.6872V19.0005H12.7509V17.6872C14.3644 17.4119 15.6789 16.2633 16.2088 14.7481L14.793 14.2529C14.3841 15.4218 13.2841 16.2505 12.0009 16.2505Z',
};

export const IconCameraMicrophone01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-microphone-01-stroke-rounded IconCameraMicrophone01StrokeRounded"
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
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraMicrophone01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-microphone-01-duotone-rounded IconCameraMicrophone01DuotoneRounded"
    >
      <path 
        d={d.d4} 
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraMicrophone01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-microphone-01-twotone-rounded IconCameraMicrophone01TwotoneRounded"
    >
      <path 
        d={d.d4} 
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
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraMicrophone01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-microphone-01-solid-rounded IconCameraMicrophone01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraMicrophone01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-microphone-01-bulk-rounded IconCameraMicrophone01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraMicrophone01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-microphone-01-stroke-sharp IconCameraMicrophone01StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraMicrophone01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-microphone-01-solid-sharp IconCameraMicrophone01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCameraMicrophone01: TheIconSelfPack = {
  name: 'CameraMicrophone01',
  StrokeRounded: IconCameraMicrophone01StrokeRounded,
  DuotoneRounded: IconCameraMicrophone01DuotoneRounded,
  TwotoneRounded: IconCameraMicrophone01TwotoneRounded,
  SolidRounded: IconCameraMicrophone01SolidRounded,
  BulkRounded: IconCameraMicrophone01BulkRounded,
  StrokeSharp: IconCameraMicrophone01StrokeSharp,
  SolidSharp: IconCameraMicrophone01SolidSharp,
};