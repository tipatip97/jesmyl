import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.5 14.5H15.5M12 18L12 11',
  d2: 'M7 6.00049C5.77936 6.00415 5.10383 6.03335 4.54873 6.26634C3.7712 6.59269 3.13801 7.19552 2.76811 7.96158C2.46618 8.58687 2.41677 9.38799 2.31796 10.9902L2.16312 13.5009C1.91739 17.4853 1.79452 19.4775 2.96369 20.7388C4.13285 22 6.10252 22 10.0419 22H13.9581C17.8975 22 19.8672 22 21.0363 20.7388C22.2055 19.4775 22.0826 17.4853 21.8369 13.5009L21.682 10.9902C21.5832 9.38799 21.5338 8.58687 21.2319 7.96158C20.862 7.19552 20.2288 6.59269 19.4513 6.26634C18.8962 6.03335 18.2206 6.00415 17 6.00049',
  d3: 'M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7',
  d4: 'M11.9998 6H12.0088',
  d5: 'M2.16312 13.5009L2.31796 10.9902C2.41677 9.38799 2.46618 8.58687 2.76811 7.96158C3.13801 7.19552 3.7712 6.59269 4.54873 6.26634C5.10383 6.03335 5.77936 6.00415 7 6.00049H7.38741L7.88558 4.78543C8.26777 3.82996 8.60036 2.7461 9.58311 2.25955C10.1074 2 10.7382 2 11.9998 2C13.2614 2 13.8922 2 14.4164 2.25955C15.3992 2.7461 15.7317 3.82996 16.1139 4.78543L16.6 6.00049H17C18.2206 6.00415 18.8962 6.03335 19.4513 6.26634C20.2288 6.59269 20.862 7.19552 21.2319 7.96158C21.5338 8.58687 21.5832 9.38799 21.682 10.9902L21.8369 13.5009C22.0826 17.4853 22.2055 19.4775 21.0363 20.7388C19.8672 22 17.8975 22 13.9581 22H10.0419C6.10252 22 4.13285 22 2.96369 20.7388C1.79452 19.4775 1.91739 17.4853 2.16312 13.5009Z',
  d6: 'M7 6C5.77936 6.00366 5.10383 6.03286 4.54873 6.26585C3.7712 6.5922 3.13801 7.19503 2.76811 7.9611C2.46618 8.58638 2.41677 9.3875 2.31796 10.9897L2.16312 13.5004C1.91739 17.4849 1.79452 19.4771 2.96369 20.7383C4.13285 21.9995 6.10252 21.9995 10.0419 21.9995H13.9581C17.8975 21.9995 19.8672 21.9995 21.0363 20.7383C22.2055 19.4771 22.0826 17.4849 21.8369 13.5004L21.682 10.9897C21.5832 9.3875 21.5338 8.58638 21.2319 7.9611C20.862 7.19503 20.2288 6.5922 19.4513 6.26585C18.8962 6.03286 18.2206 6.00366 17 6',
  d7: 'M11.9705 1.25H12.0334H12.0334C12.6375 1.24999 13.1375 1.24998 13.5504 1.28515C13.9832 1.32201 14.3742 1.40069 14.7514 1.58742C15.4233 1.92009 15.8481 2.44877 16.1463 2.979C16.3775 3.39004 16.5569 3.85182 16.7091 4.24318C16.7449 4.33553 16.7793 4.42396 16.8125 4.50689L17.1101 5.25086C18.2373 5.25543 19.0456 5.28193 19.7434 5.57479C20.6912 5.97261 21.4604 6.70632 21.9091 7.63547C22.1093 8.05002 22.2112 8.49536 22.2787 9.01254C22.3444 9.51676 22.3828 10.1389 22.4308 10.9174L22.5908 13.5123C22.7107 15.4557 22.8054 16.9915 22.717 18.196C22.6262 19.4329 22.3361 20.4418 21.5882 21.2486C20.8387 22.0571 19.8589 22.4154 18.6414 22.5851C17.4587 22.75 15.9386 22.75 14.0189 22.75H9.98469C8.06507 22.75 6.54496 22.75 5.36223 22.5851C4.14477 22.4154 3.16493 22.0571 2.41548 21.2486C1.66751 20.4418 1.37747 19.4329 1.28665 18.196C1.19821 16.9915 1.29294 15.4557 1.41281 13.5123L1.57285 10.9172C1.62085 10.1388 1.65922 9.51672 1.72498 9.01254C1.79244 8.49536 1.89437 8.05002 2.09454 7.63547C2.54319 6.70632 3.31248 5.97261 4.26029 5.57479C4.95809 5.2819 5.76651 5.25543 6.89384 5.25086L7.19143 4.50689C7.2246 4.42397 7.25897 4.33554 7.29486 4.2432L7.29486 4.2432L7.29487 4.24317C7.44698 3.85181 7.62646 3.39003 7.85763 2.979C8.15583 2.44877 8.58061 1.92009 9.25254 1.58742C9.62971 1.40069 10.0207 1.32201 10.4535 1.28515C10.8664 1.24998 11.3665 1.24999 11.9705 1.25H11.9705ZM11.0039 6C11.0039 5.44772 11.4516 5 12.0039 5H12.0129C12.5652 5 13.0129 5.44772 13.0129 6C13.0129 6.55228 12.5652 7 12.0129 7H12.0039C11.4516 7 11.0039 6.55228 11.0039 6ZM13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V13.5H8.5C7.94772 13.5 7.5 13.9477 7.5 14.5C7.5 15.0523 7.94772 15.5 8.5 15.5H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V15.5H15.5C16.0523 15.5 16.5 15.0523 16.5 14.5C16.5 13.9477 16.0523 13.5 15.5 13.5H13V11Z',
  d8: 'M11.9705 1.25H12.0334C12.6374 1.24999 13.1375 1.24998 13.5504 1.28515C13.9832 1.32201 14.3742 1.40069 14.7514 1.58742C15.4233 1.92009 15.8481 2.44877 16.1463 2.979C16.3775 3.39004 16.5569 3.85182 16.7091 4.24318C16.7449 4.33553 16.7793 4.42396 16.8125 4.50689L17.1101 5.25086C18.2373 5.25543 19.0456 5.28193 19.7434 5.57479C20.6912 5.97261 21.4604 6.70632 21.9091 7.63547C22.1093 8.05002 22.2112 8.49536 22.2787 9.01254C22.3444 9.51676 22.3828 10.1389 22.4308 10.9174L22.5908 13.5123C22.7107 15.4557 22.8054 16.9915 22.717 18.196C22.6262 19.4329 22.3361 20.4418 21.5882 21.2486C20.8387 22.0571 19.8589 22.4154 18.6414 22.5851C17.4587 22.75 15.9386 22.75 14.0189 22.75H9.98469C8.06507 22.75 6.54496 22.75 5.36223 22.5851C4.14477 22.4154 3.16493 22.0571 2.41548 21.2486C1.66751 20.4418 1.37747 19.4329 1.28665 18.196C1.19821 16.9915 1.29294 15.4557 1.41281 13.5123L1.57285 10.9172C1.62085 10.1388 1.65922 9.51672 1.72498 9.01254C1.79244 8.49536 1.89437 8.05002 2.09454 7.63547C2.54319 6.70632 3.31248 5.97261 4.26029 5.57479C4.95809 5.2819 5.76651 5.25543 6.89384 5.25086L7.19143 4.50689C7.2246 4.42397 7.25897 4.33554 7.29486 4.2432C7.44697 3.85184 7.62646 3.39004 7.85763 2.979C8.15583 2.44877 8.58061 1.92009 9.25254 1.58742C9.62971 1.40069 10.0207 1.32201 10.4535 1.28515C10.8664 1.24998 11.3665 1.24999 11.9705 1.25Z',
  d9: 'M11.0039 6C11.0039 5.44772 11.4516 5 12.0039 5H12.0129C12.5652 5 13.0129 5.44772 13.0129 6C13.0129 6.55228 12.5652 7 12.0129 7H12.0039C11.4516 7 11.0039 6.55228 11.0039 6Z',
  d10: 'M12 10C12.5523 10 13 10.4477 13 11L13 13.5H15.5C16.0523 13.5 16.5 13.9477 16.5 14.5C16.5 15.0523 16.0523 15.5 15.5 15.5H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V15.5H8.5C7.94772 15.5 7.5 15.0523 7.5 14.5C7.5 13.9477 7.94772 13.5 8.5 13.5H11V11C11 10.4477 11.4477 10 12 10Z',
  d11: 'M12 6H12.009',
  d12: 'M8 14H16M12 18V10',
  d13: 'M16.5148 6.00899C16.7733 5.95716 20.1138 5.98739 21.4925 6.00899L22.0176 21.9724L12.0732 21.9824H2.01953L2.49435 6.05265C2.4961 5.99941 2.48459 6.01772 2.55935 6.01772C3.96386 5.99627 7.24339 5.95832 7.49615 6.00899M17.0088 7.99395L15.5126 1.98242H12.0991L8.50168 1.98271L6.99918 7.99894',
  d14: 'M1.77204 5.97772C1.78466 5.57283 2.11582 5.25115 2.52001 5.25115H6.92448L7.92247 1.25037H16.0756L17.0734 5.25037H22.2034L22.749 22.7504H1.24902L1.77204 5.97772ZM12.999 5.00037H10.999V7.00037H12.999V5.00037ZM12.999 19.0004V16.0004H15.999V14.0004H12.999V11.0004H10.999V14.0004H7.99902V16.0004H10.999V19.0004H12.999Z',
};

export const IconCameraAdd01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-add-01-stroke-rounded IconCameraAdd01StrokeRounded"
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

export const IconCameraAdd01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-add-01-duotone-rounded IconCameraAdd01DuotoneRounded"
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

export const IconCameraAdd01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-add-01-twotone-rounded IconCameraAdd01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconCameraAdd01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-add-01-solid-rounded IconCameraAdd01SolidRounded"
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

export const IconCameraAdd01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-add-01-bulk-rounded IconCameraAdd01BulkRounded"
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

export const IconCameraAdd01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-add-01-stroke-sharp IconCameraAdd01StrokeSharp"
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

export const IconCameraAdd01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-add-01-solid-sharp IconCameraAdd01SolidSharp"
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

export const iconPackOfCameraAdd01: TheIconSelfPack = {
  name: 'CameraAdd01',
  StrokeRounded: IconCameraAdd01StrokeRounded,
  DuotoneRounded: IconCameraAdd01DuotoneRounded,
  TwotoneRounded: IconCameraAdd01TwotoneRounded,
  SolidRounded: IconCameraAdd01SolidRounded,
  BulkRounded: IconCameraAdd01BulkRounded,
  StrokeSharp: IconCameraAdd01StrokeSharp,
  SolidSharp: IconCameraAdd01SolidSharp,
};