import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 22C7.06358 22.0975 4 18.8075 4 15C4 11.134 7.11877 8 10.966 8C13.5444 8 15.7956 9.4077 17 11.5',
  d2: 'M15.5 9.5V6.5C15.5 4.01472 13.4853 2 11 2C8.51472 2 6.5 4.01472 6.5 6.5V9.5',
  d3: 'M12 17H20',
  d4: 'M4 15C4 11.134 7.13401 8 11 8C14.866 8 18 11.134 18 15C18 18.866 14.866 22 11 22C7.13401 22 4 18.866 4 15Z',
  d5: 'M5.375 6.75C5.375 3.71243 7.83743 1.25 10.875 1.25C13.9126 1.25 16.375 3.71243 16.375 6.75V9.75C16.375 10.3023 15.9273 10.75 15.375 10.75C14.8227 10.75 14.375 10.3023 14.375 9.75V6.75C14.375 4.817 12.808 3.25 10.875 3.25C8.942 3.25 7.375 4.817 7.375 6.75V9.75C7.375 10.3023 6.92728 10.75 6.375 10.75C5.82272 10.75 5.375 10.3023 5.375 9.75V6.75Z',
  d6: 'M10.875 17C10.875 16.4477 11.3227 16 11.875 16H19.875C20.4273 16 20.875 16.4477 20.875 17C20.875 17.5523 20.4273 18 19.875 18H11.875C11.3227 18 10.875 17.5523 10.875 17Z',
  d7: 'M10.875 7.25C6.59479 7.25 3.125 10.7198 3.125 15C3.125 19.2802 6.59479 22.75 10.875 22.75C13.0583 22.75 15.0307 21.8472 16.4393 20.3946C16.7809 20.0423 16.9517 19.8661 16.8742 19.6831C16.7967 19.5 16.5376 19.5 16.0195 19.5H11.875C10.4943 19.5 9.375 18.3807 9.375 17C9.375 15.6193 10.4943 14.5 11.875 14.5H17.9697C18.2737 14.5 18.4258 14.5 18.5155 14.3961C18.6052 14.2922 18.5843 14.1494 18.5423 13.8639C17.9927 10.1223 14.7693 7.25 10.875 7.25Z',
  d8: 'M10.875 1.25C7.83743 1.25 5.375 3.71243 5.375 6.75V9.53992C5.95668 8.95401 6.63134 8.46054 7.375 8.08347V6.75C7.375 4.817 8.942 3.25 10.875 3.25C12.808 3.25 14.375 4.817 14.375 6.75V8.08347C15.1187 8.46054 15.7933 8.95401 16.375 9.53992V6.75C16.375 3.71243 13.9126 1.25 10.875 1.25Z',
  d9: 'M5.5 6.75C5.5 3.71243 7.96243 1.25 11 1.25C14.0376 1.25 16.5 3.71243 16.5 6.75V9.75H14.5V6.75C14.5 4.817 12.933 3.25 11 3.25C9.067 3.25 7.5 4.817 7.5 6.75V9.75H5.5V6.75Z',
  d10: 'M20.75 18H12.75V16H20.75V18Z',
  d11: 'M11 7.25C6.71979 7.25 3.25 10.7198 3.25 15C3.25 19.2802 6.71979 22.75 11 22.75C13.6023 22.75 15.9049 21.4675 17.3105 19.5H11.25V14.5H18.7341C18.4764 10.4528 15.1122 7.25 11 7.25Z',
} as const;

export const IconCircleLockMinus01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-minus-01-stroke-rounded IconCircleLockMinus01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCircleLockMinus01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-minus-01-duotone-rounded IconCircleLockMinus01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleLockMinus01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-minus-01-twotone-rounded IconCircleLockMinus01TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleLockMinus01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-minus-01-solid-rounded IconCircleLockMinus01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconCircleLockMinus01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-minus-01-bulk-rounded IconCircleLockMinus01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleLockMinus01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-minus-01-stroke-sharp IconCircleLockMinus01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
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

export const IconCircleLockMinus01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-minus-01-solid-sharp IconCircleLockMinus01SolidSharp"
    >
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCircleLockMinus01: TheIconSelfPack = {
  name: 'CircleLockMinus01',
  StrokeRounded: IconCircleLockMinus01StrokeRounded,
  DuotoneRounded: IconCircleLockMinus01DuotoneRounded,
  TwotoneRounded: IconCircleLockMinus01TwotoneRounded,
  SolidRounded: IconCircleLockMinus01SolidRounded,
  BulkRounded: IconCircleLockMinus01BulkRounded,
  StrokeSharp: IconCircleLockMinus01StrokeSharp,
  SolidSharp: IconCircleLockMinus01SolidSharp,
};