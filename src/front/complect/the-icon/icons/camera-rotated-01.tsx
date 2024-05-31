import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.4868 10L14.9861 12.0844L14.1566 11.5661C13.5657 11.1173 12.8313 10.8512 12.0354 10.8512C10.0828 10.8512 8.5 12.4515 8.5 14.4256C8.5 16.3997 10.0828 18 12.0354 18C13.7457 18 15.1724 16.772 15.5 15.1405',
  d2: 'M7 6.00049C5.77936 6.00415 5.10383 6.03335 4.54873 6.26634C3.7712 6.59269 3.13801 7.19552 2.76811 7.96158C2.46618 8.58687 2.41677 9.38799 2.31796 10.9902L2.16312 13.5009C1.91739 17.4853 1.79452 19.4775 2.96369 20.7388C4.13285 22 6.10252 22 10.0419 22H13.9581C17.8975 22 19.8672 22 21.0363 20.7388C22.2055 19.4775 22.0826 17.4853 21.8369 13.5009L21.682 10.9902C21.5832 9.38799 21.5338 8.58687 21.2319 7.96158C20.862 7.19552 20.2288 6.59269 19.4513 6.26634C18.8962 6.03335 18.2206 6.00415 17 6.00049',
  d3: 'M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7',
  d4: 'M11.9998 6H12.0088',
  d5: 'M2.16312 13.5009L2.31796 10.9902C2.41677 9.38799 2.46618 8.58687 2.76811 7.96158C3.13801 7.19552 3.7712 6.59269 4.54873 6.26634C5.10383 6.03335 5.77936 6.00415 7 6.00049H7.38741L7.88558 4.78543C8.26777 3.82996 8.60036 2.7461 9.58311 2.25955C10.1074 2 10.7382 2 11.9998 2C13.2614 2 13.8922 2 14.4164 2.25955C15.3992 2.7461 15.7317 3.82996 16.1139 4.78543L16.6 6.00049H17C18.2206 6.00415 18.8962 6.03335 19.4513 6.26634C20.2288 6.59269 20.862 7.19552 21.2319 7.96158C21.5338 8.58687 21.5832 9.38799 21.682 10.9902L21.8369 13.5009C22.0826 17.4853 22.2055 19.4775 21.0363 20.7388C19.8672 22 17.8975 22 13.9581 22H10.0419C6.10252 22 4.13285 22 2.96369 20.7388C1.79452 19.4775 1.91739 17.4853 2.16312 13.5009Z',
  d6: 'M7 6C5.77936 6.00366 5.10383 6.03286 4.54873 6.26585C3.7712 6.5922 3.13801 7.19503 2.76811 7.9611C2.46618 8.58638 2.41677 9.3875 2.31796 10.9897L2.16312 13.5004C1.91739 17.4849 1.79452 19.4771 2.96369 20.7383C4.13285 21.9995 6.10252 21.9995 10.0419 21.9995H13.9581C17.8975 21.9995 19.8672 21.9995 21.0363 20.7383C22.2055 19.4771 22.0826 17.4849 21.8369 13.5004L21.682 10.9897C21.5832 9.3875 21.5338 8.58638 21.2319 7.9611C20.862 7.19503 20.2288 6.5922 19.4513 6.26585C18.8962 6.03286 18.2206 6.00366 17 6',
  d7: 'M11.9705 1.25H12.0334H12.0334C12.6375 1.24999 13.1375 1.24998 13.5504 1.28515C13.9832 1.32201 14.3742 1.40069 14.7514 1.58742C15.4233 1.92009 15.8481 2.44877 16.1463 2.979C16.3775 3.39004 16.5569 3.85182 16.7091 4.24318C16.7449 4.33553 16.7793 4.42396 16.8125 4.50689L17.1101 5.25086C18.2373 5.25543 19.0456 5.28193 19.7434 5.57479C20.6912 5.97261 21.4604 6.70632 21.9091 7.63547C22.1093 8.05002 22.2112 8.49536 22.2787 9.01254C22.3444 9.51676 22.3828 10.1389 22.4308 10.9174L22.5908 13.5123C22.7107 15.4557 22.8054 16.9915 22.717 18.196C22.6262 19.4329 22.3361 20.4418 21.5882 21.2486C20.8387 22.0571 19.8589 22.4154 18.6414 22.5851C17.4587 22.75 15.9386 22.75 14.0189 22.75H9.98469C8.06507 22.75 6.54496 22.75 5.36223 22.5851C4.14477 22.4154 3.16493 22.0571 2.41548 21.2486C1.66751 20.4418 1.37747 19.4329 1.28665 18.196C1.19821 16.9915 1.29294 15.4557 1.41281 13.5123L1.57285 10.9172C1.62085 10.1388 1.65922 9.51672 1.72498 9.01254C1.79244 8.49536 1.89437 8.05002 2.09454 7.63547C2.54319 6.70632 3.31248 5.97261 4.26029 5.57479C4.95809 5.2819 5.76651 5.25543 6.89384 5.25086L7.19143 4.50689C7.2246 4.42397 7.25897 4.33554 7.29486 4.2432L7.29486 4.2432L7.29487 4.24317C7.44698 3.85181 7.62646 3.39003 7.85763 2.979C8.15583 2.44877 8.58061 1.92009 9.25254 1.58742C9.62971 1.40069 10.0207 1.32201 10.4535 1.28515C10.8664 1.24998 11.3665 1.24999 11.9705 1.25H11.9705ZM11.0039 6C11.0039 5.44772 11.4516 5 12.0039 5H12.0129C12.5652 5 13.0129 5.44772 13.0129 6C13.0129 6.55228 12.5652 7 12.0129 7H12.0039C11.4516 7 11.0039 6.55228 11.0039 6ZM13.7592 10.1749C13.6627 9.77209 13.911 9.36731 14.3139 9.27081C14.7167 9.17431 15.1214 9.42262 15.2179 9.82544L15.7173 11.9098C15.7882 12.2059 15.6731 12.5155 15.426 12.6933C15.1789 12.8711 14.8487 12.8819 14.5905 12.7206L13.761 12.2023C13.7417 12.1902 13.7229 12.1773 13.7048 12.1635C13.2392 11.8099 12.6629 11.6014 12.0372 11.6014C10.5066 11.6014 9.25181 12.8581 9.25181 14.4258C9.25181 15.9934 10.5066 17.2502 12.0372 17.2502C13.3777 17.2502 14.5067 16.2867 14.7665 14.993C14.848 14.5869 15.2433 14.3238 15.6494 14.4053C16.0556 14.4869 16.3187 14.8822 16.2371 15.2883C15.8417 17.2576 14.1174 18.7502 12.0372 18.7502C9.66268 18.7502 7.75181 16.8063 7.75181 14.4258C7.75181 12.0453 9.66268 10.1014 12.0372 10.1014C12.6799 10.1014 13.29 10.2446 13.8372 10.5006L13.7592 10.1749Z',
  d8: 'M11.9705 1.25H12.0334C12.6374 1.24999 13.1375 1.24998 13.5504 1.28515C13.9832 1.32201 14.3742 1.40069 14.7514 1.58742C15.4233 1.92009 15.8481 2.44877 16.1463 2.979C16.3775 3.39004 16.5569 3.85182 16.7091 4.24318C16.7449 4.33553 16.7793 4.42396 16.8125 4.50689L17.1101 5.25086C18.2373 5.25543 19.0456 5.28193 19.7434 5.57479C20.6912 5.97261 21.4604 6.70632 21.9091 7.63547C22.1093 8.05002 22.2112 8.49536 22.2787 9.01254C22.3444 9.51676 22.3828 10.1389 22.4308 10.9174L22.5908 13.5123C22.7107 15.4557 22.8054 16.9915 22.717 18.196C22.6262 19.4329 22.3361 20.4418 21.5882 21.2486C20.8387 22.0571 19.8589 22.4154 18.6414 22.5851C17.4587 22.75 15.9386 22.75 14.0189 22.75H9.98469C8.06507 22.75 6.54496 22.75 5.36223 22.5851C4.14477 22.4154 3.16493 22.0571 2.41548 21.2486C1.66751 20.4418 1.37747 19.4329 1.28665 18.196C1.19821 16.9915 1.29294 15.4557 1.41281 13.5123L1.57285 10.9172C1.62085 10.1388 1.65922 9.51672 1.72498 9.01254C1.79244 8.49536 1.89437 8.05002 2.09454 7.63547C2.54319 6.70632 3.31248 5.97261 4.26029 5.57479C4.95809 5.2819 5.76651 5.25543 6.89384 5.25086L7.19143 4.50689C7.2246 4.42397 7.25897 4.33554 7.29486 4.2432C7.44697 3.85184 7.62646 3.39004 7.85763 2.979C8.15583 2.44877 8.58061 1.92009 9.25254 1.58742C9.62971 1.40069 10.0207 1.32201 10.4535 1.28515C10.8664 1.24998 11.3665 1.24999 11.9705 1.25Z',
  d9: 'M11.0039 6C11.0039 5.44772 11.4516 5 12.0039 5H12.0129C12.5652 5 13.0129 5.44772 13.0129 6C13.0129 6.55228 12.5652 7 12.0129 7H12.0039C11.4516 7 11.0039 6.55228 11.0039 6Z',
  d10: 'M14.3139 9.27081C13.911 9.36731 13.6627 9.77209 13.7592 10.1749L13.8372 10.5006C13.29 10.2446 12.6799 10.1014 12.0372 10.1014C9.66268 10.1014 7.75181 12.0453 7.75181 14.4258C7.75181 16.8063 9.66268 18.7502 12.0372 18.7502C14.1174 18.7502 15.8417 17.2576 16.2371 15.2883C16.3187 14.8822 16.0556 14.4869 15.6494 14.4053C15.2433 14.3238 14.848 14.5869 14.7665 14.993C14.5067 16.2867 13.3777 17.2502 12.0372 17.2502C10.5066 17.2502 9.25181 15.9934 9.25181 14.4258C9.25181 12.8581 10.5066 11.6014 12.0372 11.6014C12.6629 11.6014 13.2392 11.8099 13.7048 12.1635C13.7229 12.1773 13.7417 12.1902 13.761 12.2023L14.5905 12.7206C14.8487 12.8819 15.1789 12.8711 15.426 12.6933C15.6731 12.5155 15.7882 12.2059 15.7173 11.9098L15.2179 9.82544C15.1214 9.42262 14.7167 9.17431 14.3139 9.27081Z',
  d11: 'M12 6H12.009',
  d12: 'M14.9861 10V12.0844L14.1566 11.5661C13.5657 11.1173 12.8313 10.8512 12.0354 10.8512C10.0828 10.8512 8.5 12.4515 8.5 14.4256C8.5 16.3997 10.0828 18 12.0354 18C13.7457 18 15.1724 16.772 15.5 15.1405',
  d13: 'M16.5138 6.00899C16.7723 5.95716 20.1128 5.98739 21.4916 6.00899L22.0166 21.9724L12.0723 21.9824H2.01855L2.49337 6.05265C2.49513 5.99941 2.48362 6.01772 2.55837 6.01772C3.96288 5.99627 7.24241 5.95832 7.49518 6.00899M17.0078 7.99395L15.5116 1.98242H12.0981L8.5007 1.98271L6.99821 7.99894',
  d14: 'M1.77301 5.97736C1.78564 5.57246 2.11679 5.25078 2.52099 5.25078H6.92546L7.92344 1.25H16.0766L17.0743 5.25H22.2043L22.75 22.75H1.25L1.77301 5.97736ZM13 5H11V7H13V5ZM15.7352 10V12.0844C15.7352 12.357 15.5872 12.6082 15.3488 12.7403C15.1104 12.8725 14.819 12.8649 14.5878 12.7204L13.7582 12.2021C13.7389 12.1901 13.7202 12.1771 13.702 12.1633C13.2364 11.8097 12.6601 11.6012 12.0344 11.6012C10.5038 11.6012 9.24905 12.8579 9.24905 14.4256C9.24905 15.9933 10.5038 17.25 12.0344 17.25C13.3749 17.25 14.504 16.2865 14.7637 14.9928L16.2344 15.2881C15.839 17.2575 14.1147 18.75 12.0344 18.75C9.65992 18.75 7.74905 16.8061 7.74905 14.4256C7.74905 12.0451 9.65992 10.1012 12.0344 10.1012C12.8388 10.1012 13.5922 10.3256 14.2352 10.7146V10H15.7352Z',
} as const;

export const IconCameraRotated01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-rotated-01-stroke-rounded IconCameraRotated01StrokeRounded"
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

export const IconCameraRotated01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-rotated-01-duotone-rounded IconCameraRotated01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraRotated01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-rotated-01-twotone-rounded IconCameraRotated01TwotoneRounded"
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

export const IconCameraRotated01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-rotated-01-solid-rounded IconCameraRotated01SolidRounded"
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

export const IconCameraRotated01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-rotated-01-bulk-rounded IconCameraRotated01BulkRounded"
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

export const IconCameraRotated01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-rotated-01-stroke-sharp IconCameraRotated01StrokeSharp"
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

export const IconCameraRotated01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-rotated-01-solid-sharp IconCameraRotated01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCameraRotated01: TheIconSelfPack = {
  name: 'CameraRotated01',
  StrokeRounded: IconCameraRotated01StrokeRounded,
  DuotoneRounded: IconCameraRotated01DuotoneRounded,
  TwotoneRounded: IconCameraRotated01TwotoneRounded,
  SolidRounded: IconCameraRotated01SolidRounded,
  BulkRounded: IconCameraRotated01BulkRounded,
  StrokeSharp: IconCameraRotated01StrokeSharp,
  SolidSharp: IconCameraRotated01SolidSharp,
};