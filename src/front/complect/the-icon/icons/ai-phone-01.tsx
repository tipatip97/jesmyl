import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17 14.9996C17 18.2996 17 19.9496 16.0481 20.9748C15.0962 22 13.5641 22 10.5 22C7.43587 22 5.90381 22 4.9519 20.9748C4 19.9496 4 18.2996 4 14.9996V8.99919C4 5.69916 4 4.04914 4.9519 3.02395C5.80236 2.10801 7.11592 2.0104 9.57143 2',
  d2: 'M16 4H14C13.0572 4 12.5858 4 12.2929 4.29289C12 4.58579 12 5.05719 12 6V8C12 8.94281 12 9.41421 12.2929 9.70711C12.5858 10 13.0572 10 14 10H16C16.9428 10 17.4142 10 17.7071 9.70711C18 9.41421 18 8.94281 18 8V6C18 5.05719 18 4.58579 17.7071 4.29289C17.4142 4 16.9428 4 16 4Z',
  d3: 'M13.5 10V12M16.5 10V12M13.5 2V4M16.5 2V4M12 5.5H10M12 8.5H10M20 5.5H18M20 8.5H18',
  d4: 'M10.49 19H10.499',
  d5: 'M4 14.9996V8.99919C4 5.69916 4 4.04914 4.9519 3.02395C5.80236 2.10801 7.11592 2.0104 9.57143 2H11C13.8284 2 15.2426 2 16.1213 2.87868C16.423 3.18039 16.6211 3.54524 16.7512 4.00879C16.5405 4 16.293 4 16 4H14C13.0572 4 12.5858 4 12.2929 4.29289C12 4.58579 12 5.05719 12 6V8C12 8.94281 12 9.41421 12.2929 9.70711C12.5858 10 13.0572 10 14 10H16C16.4172 10 16.742 10 17 9.97463V14.9996C17 18.2996 17 19.9496 16.0481 20.9748C15.0962 22 13.5641 22 10.5 22C7.43588 22 5.9038 22 4.9519 20.9748C4 19.9496 4 18.2996 4 14.9996Z',
  d6: 'M16.9779 14.9996C16.9779 18.2996 16.9779 19.9496 16.0275 20.9748C15.0772 22 13.5476 22 10.4885 22C7.42931 22 5.89974 22 4.94938 20.9748C3.99902 19.9496 3.99902 18.2996 3.99902 14.9996V8.99919C3.99902 5.69916 3.99902 4.04914 4.94938 3.02395C5.79846 2.10801 7.10988 2.0104 9.5614 2',
  d7: 'M10.4785 19H10.4875',
  d8: 'M13.4358 2.00195V3.98097M9.96094 5.50233H12.0057M17.9559 5.50233H20.0007M17.9559 8.47556H20.0007M9.96094 8.47556H12.0057M13.4358 10.0212V12.0002M16.4506 10.0212V12.0002M16.4399 2.00195V3.98097M13.0022 9.96951H16.9594C17.5098 9.96951 17.9559 9.5218 17.9559 8.96951V4.98097C17.9559 4.42869 17.5098 3.98097 16.9594 3.98097H13.0022C12.4519 3.98097 12.0057 4.42869 12.0057 4.98097V8.96951C12.0057 9.5218 12.4519 9.96951 13.0022 9.96951Z',
  d9: 'M13.5 1.25C13.9142 1.25 14.25 1.58579 14.25 2V3.25H15.75V2C15.75 1.58579 16.0858 1.25 16.5 1.25C16.9142 1.25 17.25 1.58579 17.25 2V3.30087C17.5896 3.35268 17.9437 3.4688 18.2374 3.76256C18.5312 4.05633 18.6473 4.41037 18.6991 4.75H20C20.4142 4.75 20.75 5.08579 20.75 5.5C20.75 5.91421 20.4142 6.25 20 6.25H18.75V7.75H20C20.4142 7.75 20.75 8.08579 20.75 8.5C20.75 8.91421 20.4142 9.25 20 9.25H18.6991C18.6473 9.58963 18.5312 9.94367 18.2374 10.2374C17.9437 10.5312 17.5896 10.6473 17.25 10.6991V12C17.25 12.4142 16.9142 12.75 16.5 12.75C16.0858 12.75 15.75 12.4142 15.75 12V10.75H14.25V12C14.25 12.4142 13.9142 12.75 13.5 12.75C13.0858 12.75 12.75 12.4142 12.75 12V10.6991C12.4104 10.6473 12.0563 10.5312 11.7626 10.2374C11.4688 9.94367 11.3527 9.58963 11.3009 9.25H10C9.58579 9.25 9.25 8.91421 9.25 8.5C9.25 8.08579 9.58579 7.75 10 7.75H11.25V6.25H10C9.58579 6.25 9.25 5.91421 9.25 5.5C9.25 5.08579 9.58579 4.75 10 4.75H11.3009C11.3527 4.41037 11.4688 4.05633 11.7626 3.76256C12.0563 3.4688 12.4104 3.35268 12.75 3.30087V2C12.75 1.58579 13.0858 1.25 13.5 1.25Z',
  d10: 'M11.25 2.26847C11.25 1.92215 11.3282 1.57326 11.468 1.25012L11.0549 1.25H9.9451H9.94508C8.57751 1.24998 7.47521 1.24997 6.60825 1.36653C5.70814 1.48754 4.95027 1.74644 4.34835 2.34835C3.74644 2.95027 3.48754 3.70814 3.36653 4.60825C3.24997 5.47521 3.24998 6.57754 3.25 7.94511V7.94513V16.0549V16.0549C3.24998 17.4225 3.24997 18.5248 3.36653 19.3918C3.48754 20.2919 3.74644 21.0497 4.34835 21.6517C4.95027 22.2536 5.70814 22.5125 6.60825 22.6335C7.47522 22.75 8.57754 22.75 9.94513 22.75H11.0549C12.4225 22.75 13.5248 22.75 14.3918 22.6335C15.2919 22.5125 16.0497 22.2536 16.6517 21.6517C17.2536 21.0497 17.5125 20.2919 17.6335 19.3918C17.75 18.5248 17.75 17.4225 17.75 16.0549V16.0549V13.8711C17.3925 14.1104 16.9625 14.25 16.5 14.25C15.9237 14.25 15.3981 14.0334 15 13.6771C14.6019 14.0334 14.0763 14.25 13.5 14.25C12.2574 14.25 11.25 12.9742 11.25 11.7315C11.0635 11.6168 10.8784 11.4746 10.7019 11.2981C10.5254 11.1216 10.3833 10.9365 10.2685 10.75C9.02583 10.75 7.75 9.74264 7.75 8.5C7.75 7.92374 7.96664 7.39807 8.32292 7C7.96664 6.60193 7.75 6.07627 7.75 5.5C7.75 4.25736 9.02583 3.25 10.2685 3.25C10.3833 3.06351 10.5254 2.87839 10.7019 2.7019C10.8784 2.52542 11.0635 2.38325 11.25 2.26847ZM10.4922 18C9.9399 18 9.49219 18.4477 9.49219 19C9.49219 19.5523 9.9399 20 10.4922 20H10.5012C11.0535 20 11.5012 19.5523 11.5012 19C11.5012 18.4477 11.0535 18 10.5012 18H10.4922Z',
  d11: 'M11.468 1.25012C11.3282 1.57326 11.25 1.92215 11.25 2.26847C11.0635 2.38325 10.8784 2.52542 10.7019 2.7019C10.5254 2.87839 10.3833 3.06351 10.2685 3.25C9.02583 3.25 7.75 4.25736 7.75 5.5C7.75 6.07627 7.96664 6.60193 8.32292 7C7.96664 7.39807 7.75 7.92374 7.75 8.5C7.75 9.74264 9.02583 10.75 10.2685 10.75C10.3833 10.9365 10.5254 11.1216 10.7019 11.2981C10.8784 11.4746 11.0635 11.6168 11.25 11.7315C11.25 12.9742 12.2574 14.25 13.5 14.25C14.0763 14.25 14.6019 14.0334 15 13.6771C15.3981 14.0334 15.9237 14.25 16.5 14.25C16.9625 14.25 17.3925 14.1104 17.75 13.8711V16.0549C17.75 17.4225 17.75 18.5248 17.6335 19.3918C17.5125 20.2919 17.2536 21.0497 16.6517 21.6517C16.0497 22.2536 15.2919 22.5125 14.3918 22.6335C13.5248 22.75 12.4225 22.75 11.0549 22.75H9.94513C8.57754 22.75 7.47522 22.75 6.60825 22.6335C5.70814 22.5125 4.95027 22.2536 4.34835 21.6517C3.74644 21.0497 3.48754 20.2919 3.36653 19.3918C3.24997 18.5248 3.24998 17.4225 3.25 16.0549V7.94513C3.24998 6.57755 3.24997 5.47521 3.36653 4.60825C3.48754 3.70814 3.74644 2.95027 4.34835 2.34835C4.95027 1.74644 5.70814 1.48754 6.60825 1.36653C7.47521 1.24997 8.57752 1.24998 9.9451 1.25H11.0549C11.1954 1.25 11.3331 1.25 11.468 1.25012Z',
  d12: 'M9.49219 19C9.49219 18.4477 9.9399 18 10.4922 18H10.5012C11.0535 18 11.5012 18.4477 11.5012 19C11.5012 19.5523 11.0535 20 10.5012 20H10.4922C9.9399 20 9.49219 19.5523 9.49219 19Z',
  d13: 'M17 14V22H4V2H9',
  d14: 'M18 4H12V10H18V4Z',
  d15: 'M10.5 19H10.509',
  d16: 'M16 3H14.5V1.25H13V3H11.5V4.5H9.75V6H11.5V7.5H9.75V9H11.5V10.5H13V12.25H14.5V10.5H16V12.25H17.5V10.5H19V9H20.75V7.5H19V6H20.75V4.5H19V3H17.5V1.25H16V3Z',
  d17: 'M3.25 1.25H10V3H8.25V10.5H10V12H11.5V13.75H17.75V22.75H3.25V1.25ZM11.509 18H9.5V20H11.509V18Z',
};

export const IconAiPhone01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-phone-01-stroke-rounded IconAiPhone01StrokeRounded"
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

export const IconAiPhone01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-phone-01-duotone-rounded IconAiPhone01DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconAiPhone01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-phone-01-twotone-rounded IconAiPhone01TwotoneRounded"
    >
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiPhone01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-phone-01-solid-rounded IconAiPhone01SolidRounded"
    >
      <path 
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

export const IconAiPhone01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-phone-01-bulk-rounded IconAiPhone01BulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconAiPhone01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-phone-01-stroke-sharp IconAiPhone01StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiPhone01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-phone-01-solid-sharp IconAiPhone01SolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAiPhone01: TheIconSelfPack = {
  name: 'AiPhone01',
  StrokeRounded: IconAiPhone01StrokeRounded,
  DuotoneRounded: IconAiPhone01DuotoneRounded,
  TwotoneRounded: IconAiPhone01TwotoneRounded,
  SolidRounded: IconAiPhone01SolidRounded,
  BulkRounded: IconAiPhone01BulkRounded,
  StrokeSharp: IconAiPhone01StrokeSharp,
  SolidSharp: IconAiPhone01SolidSharp,
};