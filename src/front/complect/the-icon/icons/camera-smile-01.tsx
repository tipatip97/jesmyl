import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 6.00049C5.77936 6.00415 5.10383 6.03335 4.54873 6.26634C3.7712 6.59269 3.13801 7.19552 2.76811 7.96158C2.46618 8.58687 2.41677 9.38799 2.31796 10.9902L2.16312 13.5009C1.91739 17.4853 1.79452 19.4775 2.96369 20.7388C4.13285 22 6.10252 22 10.0419 22H13.9581C17.8975 22 19.8672 22 21.0363 20.7388C22.2055 19.4775 22.0826 17.4853 21.8369 13.5009L21.682 10.9902C21.5832 9.38799 21.5338 8.58687 21.2319 7.96158C20.862 7.19552 20.2288 6.59269 19.4513 6.26634C18.8962 6.03335 18.2206 6.00415 17 6.00049',
  d2: 'M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7',
  d3: 'M9 12H9.00897M14.991 12H15M9.9987 16C9.9987 16 10.7476 17 11.9957 17C13.2438 17 13.9927 16 13.9927 16',
  d4: 'M2.16312 13.5009L2.31796 10.9902C2.41677 9.38799 2.46618 8.58687 2.76811 7.96158C3.13801 7.19552 3.7712 6.59269 4.54873 6.26634C5.10383 6.03335 5.77936 6.00415 7 6.00049H7.38741L7.88558 4.78543C8.26777 3.82996 8.60036 2.7461 9.58311 2.25955C10.1074 2 10.7382 2 11.9998 2C13.2614 2 13.8922 2 14.4164 2.25955C15.3992 2.7461 15.7317 3.82996 16.1139 4.78543L16.6 6.00049H17C18.2206 6.00415 18.8962 6.03335 19.4513 6.26634C20.2288 6.59269 20.862 7.19552 21.2319 7.96158C21.5338 8.58687 21.5832 9.38799 21.682 10.9902L21.8369 13.5009C22.0826 17.4853 22.2055 19.4775 21.0363 20.7388C19.8672 22 17.8975 22 13.9581 22H10.0419C6.10252 22 4.13285 22 2.96369 20.7388C1.79452 19.4775 1.91739 17.4853 2.16312 13.5009Z',
  d5: 'M7 6C5.77936 6.00366 5.10383 6.03286 4.54873 6.26585C3.7712 6.5922 3.13801 7.19503 2.76811 7.9611C2.46618 8.58638 2.41677 9.3875 2.31796 10.9897L2.16312 13.5004C1.91739 17.4849 1.79452 19.4771 2.96369 20.7383C4.13285 21.9995 6.10252 21.9995 10.0419 21.9995H13.9581C17.8975 21.9995 19.8672 21.9995 21.0363 20.7383C22.2055 19.4771 22.0826 17.4849 21.8369 13.5004L21.682 10.9897C21.5832 9.3875 21.5338 8.58638 21.2319 7.9611C20.862 7.19503 20.2288 6.5922 19.4513 6.26585C18.8962 6.03286 18.2206 6.00366 17 6',
  d6: 'M12.0334 1.25H11.9705H11.9705C11.3665 1.24999 10.8664 1.24998 10.4535 1.28515C10.0207 1.32201 9.62971 1.40069 9.25254 1.58742C8.58061 1.92009 8.15583 2.44877 7.85763 2.979C7.62646 3.39004 7.44697 3.85183 7.29486 4.2432L7.29486 4.2432C7.25897 4.33554 7.2246 4.42397 7.19143 4.50689L6.89384 5.25086C5.76651 5.25543 4.95809 5.2819 4.26029 5.57479C3.31248 5.97261 2.54319 6.70632 2.09454 7.63547C1.89437 8.05002 1.79244 8.49536 1.72498 9.01254C1.65922 9.51672 1.62085 10.1388 1.57285 10.9172L1.41281 13.5123C1.29294 15.4557 1.19821 16.9915 1.28665 18.196C1.37747 19.4329 1.66751 20.4418 2.41548 21.2486C3.16493 22.0571 4.14477 22.4154 5.36223 22.5851C6.54496 22.75 8.06507 22.75 9.98469 22.75H14.0189C15.9386 22.75 17.4587 22.75 18.6414 22.5851C19.8589 22.4154 20.8387 22.0571 21.5882 21.2486C22.3361 20.4418 22.6262 19.4329 22.717 18.196C22.8054 16.9915 22.7107 15.4557 22.5908 13.5123L22.4308 10.9174C22.3828 10.1389 22.3444 9.51676 22.2787 9.01254C22.2112 8.49536 22.1093 8.05002 21.9091 7.63547C21.4604 6.70632 20.6912 5.97261 19.7434 5.57479C19.0456 5.28193 18.2373 5.25543 17.1101 5.25086L16.8125 4.50689C16.7793 4.42396 16.7449 4.33553 16.7091 4.24318C16.5569 3.85182 16.3775 3.39004 16.1463 2.979C15.8481 2.44877 15.4233 1.92009 14.7514 1.58742C14.3742 1.40069 13.9832 1.32201 13.5504 1.28515C13.1375 1.24998 12.6375 1.24999 12.0334 1.25H12.0334ZM9 10.5C8.44772 10.5 8 10.9477 8 11.5C8 12.0523 8.44772 12.5 9 12.5H9.00897C9.56125 12.5 10.009 12.0523 10.009 11.5C10.009 10.9477 9.56125 10.5 9.00897 10.5H9ZM14.991 10.5C14.4387 10.5 13.991 10.9477 13.991 11.5C13.991 12.0523 14.4387 12.5 14.991 12.5H15C15.5523 12.5 16 12.0523 16 11.5C16 10.9477 15.5523 10.5 15 10.5H14.991ZM10.288 14.7532C9.87701 14.3871 9.24699 14.422 8.8789 14.8318C8.50989 15.2428 8.54386 15.875 8.95477 16.244L8.95662 16.2457L8.95889 16.2477L8.96471 16.2529L8.98135 16.2674C8.99463 16.2789 9.01231 16.294 9.03413 16.3121C9.07772 16.3483 9.13822 16.397 9.21369 16.4541C9.36378 16.5675 9.57762 16.7172 9.83935 16.8674C10.345 17.1575 11.1165 17.5 11.9951 17.5C12.8736 17.5 13.6451 17.1575 14.1508 16.8674L14.1536 16.8657C14.4151 16.7157 14.7723 16.5107 15.0353 16.244C15.4463 15.875 15.4802 15.2428 15.1112 14.8318C14.7431 14.422 14.1131 14.3871 13.7021 14.7532L13.7005 14.7547C13.6968 14.7578 13.6889 14.7646 13.6778 14.7738C13.6556 14.7923 13.6192 14.8217 13.5706 14.8584C13.4726 14.9325 13.3294 15.0328 13.1554 15.1326C12.7896 15.3425 12.3751 15.5 11.9951 15.5C11.615 15.5 11.2005 15.3425 10.8347 15.1326C10.6607 15.0328 10.5175 14.9325 10.4195 14.8584C10.3709 14.8217 10.3346 14.7923 10.3123 14.7738L10.3016 14.7649L10.2901 14.7551L10.288 14.7532Z',
  d7: 'M11.9705 1.25H12.0334C12.6374 1.24999 13.1375 1.24998 13.5504 1.28515C13.9832 1.32201 14.3742 1.40069 14.7514 1.58742C15.4233 1.92009 15.8481 2.44877 16.1463 2.979C16.3775 3.39004 16.5569 3.85182 16.7091 4.24318C16.7449 4.33553 16.7793 4.42396 16.8125 4.50689L17.1101 5.25086C18.2373 5.25543 19.0456 5.28193 19.7434 5.57479C20.6912 5.97261 21.4604 6.70632 21.9091 7.63547C22.1093 8.05002 22.2112 8.49536 22.2787 9.01254C22.3444 9.51676 22.3828 10.1389 22.4308 10.9174L22.5908 13.5123C22.7107 15.4557 22.8054 16.9915 22.717 18.196C22.6262 19.4329 22.3361 20.4418 21.5882 21.2486C20.8387 22.0571 19.8589 22.4154 18.6414 22.5851C17.4587 22.75 15.9386 22.75 14.0189 22.75H9.98469C8.06507 22.75 6.54496 22.75 5.36223 22.5851C4.14477 22.4154 3.16493 22.0571 2.41548 21.2486C1.66751 20.4418 1.37747 19.4329 1.28665 18.196C1.19821 16.9915 1.29294 15.4557 1.41281 13.5123L1.57285 10.9172C1.62085 10.1388 1.65922 9.51672 1.72498 9.01254C1.79244 8.49536 1.89437 8.05002 2.09454 7.63547C2.54319 6.70632 3.31248 5.97261 4.26029 5.57479C4.95809 5.2819 5.76651 5.25543 6.89384 5.25086L7.19143 4.50689C7.2246 4.42397 7.25897 4.33554 7.29486 4.2432C7.44697 3.85184 7.62646 3.39004 7.85763 2.979C8.15583 2.44877 8.58061 1.92009 9.25254 1.58742C9.62971 1.40069 10.0207 1.32201 10.4535 1.28515C10.8664 1.24998 11.3665 1.24999 11.9705 1.25Z',
  d8: 'M8 11.5C8 10.9477 8.44772 10.5 9 10.5H9.00897C9.56125 10.5 10.009 10.9477 10.009 11.5C10.009 12.0523 9.56125 12.5 9.00897 12.5H9C8.44772 12.5 8 12.0523 8 11.5ZM13.991 11.5C13.991 10.9477 14.4387 10.5 14.991 10.5H15C15.5523 10.5 16 10.9477 16 11.5C16 12.0523 15.5523 12.5 15 12.5H14.991C14.4387 12.5 13.991 12.0523 13.991 11.5Z',
  d9: 'M8.8789 14.8318C9.24699 14.422 9.87701 14.3871 10.288 14.7532L10.2901 14.7551C10.2938 14.7582 10.3013 14.7646 10.3123 14.7738C10.3346 14.7923 10.3709 14.8217 10.4195 14.8584C10.5175 14.9325 10.6607 15.0328 10.8347 15.1326C11.2005 15.3425 11.615 15.5 11.9951 15.5C12.3751 15.5 12.7896 15.3425 13.1554 15.1326C13.3294 15.0328 13.4726 14.9325 13.5706 14.8584C13.6192 14.8217 13.6556 14.7923 13.6778 14.7738C13.6889 14.7646 13.6968 14.7578 13.7005 14.7547L13.7021 14.7532C14.1131 14.3871 14.7431 14.422 15.1112 14.8318C15.4802 15.2428 15.4463 15.875 15.0353 16.244C14.7723 16.5107 14.4151 16.7157 14.1536 16.8657L14.1508 16.8674C13.6451 17.1575 12.8736 17.5 11.9951 17.5C11.1165 17.5 10.345 17.1575 9.83935 16.8674C9.57762 16.7172 9.36378 16.5675 9.21369 16.4541C9.13822 16.397 9.07772 16.3483 9.03413 16.3121C9.01231 16.294 8.99463 16.2789 8.98135 16.2674L8.96471 16.2529L8.95889 16.2477L8.95662 16.2457L8.95477 16.244C8.54386 15.875 8.50989 15.2428 8.8789 14.8318Z',
  d10: 'M9 12H9.00897M14.991 12H15',
  d11: 'M9 15.5C9 15.5 10.125 17 12 17C13.875 17 15 15.5 15 15.5',
  d12: 'M16.5138 6.00899C16.7723 5.95716 20.1128 5.98739 21.4916 6.00899L22.0166 21.9724L12.0723 21.9824H2.01855L2.49337 6.05265C2.49513 5.99941 2.48362 6.01772 2.55837 6.01772C3.96288 5.99627 7.24241 5.95832 7.49518 6.00899M17.0078 7.99395L15.5116 1.98242H12.0981L8.5007 1.98271L6.99821 7.99894',
  d13: 'M1.77301 5.97736C1.78564 5.57246 2.11679 5.25078 2.52099 5.25078H6.92546L7.92344 1.25H16.0766L17.0743 5.25H22.2043L22.75 22.75H1.25L1.77301 5.97736ZM10.009 10H8V12H10.009V10ZM16 10H13.991V12H16V10ZM9.9301 15.0425C10.0325 15.1493 10.1874 15.2953 10.3881 15.4413C10.7933 15.736 11.3411 16 12.003 16C12.665 16 13.2128 15.736 13.618 15.4413C13.8187 15.2953 13.9736 15.1493 14.076 15.0425L15.717 16.2073C15.6698 16.2635 15.6039 16.3387 15.5199 16.4263C15.3528 16.6007 15.1093 16.8297 14.7943 17.0587C14.1683 17.5141 13.2161 18 12.003 18C10.79 18 9.8378 17.5141 9.21174 17.0587C8.89678 16.8297 8.65328 16.6007 8.48612 16.4263C8.40214 16.3387 8.33623 16.2635 8.28906 16.2073L9.9301 15.0425Z',
};

export const IconCameraSmile01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-smile-01-stroke-rounded IconCameraSmile01StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraSmile01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-smile-01-duotone-rounded IconCameraSmile01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraSmile01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-smile-01-twotone-rounded IconCameraSmile01TwotoneRounded"
    >
      <path 
        d={d.d5} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraSmile01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-smile-01-solid-rounded IconCameraSmile01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraSmile01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-smile-01-bulk-rounded IconCameraSmile01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCameraSmile01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-smile-01-stroke-sharp IconCameraSmile01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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
      />
    </TheIconWrapper>
  );
};

export const IconCameraSmile01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-smile-01-solid-sharp IconCameraSmile01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCameraSmile01: TheIconSelfPack = {
  name: 'CameraSmile01',
  StrokeRounded: IconCameraSmile01StrokeRounded,
  DuotoneRounded: IconCameraSmile01DuotoneRounded,
  TwotoneRounded: IconCameraSmile01TwotoneRounded,
  SolidRounded: IconCameraSmile01SolidRounded,
  BulkRounded: IconCameraSmile01BulkRounded,
  StrokeSharp: IconCameraSmile01StrokeSharp,
  SolidSharp: IconCameraSmile01SolidSharp,
};