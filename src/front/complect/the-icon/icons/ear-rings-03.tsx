import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 7H3',
  d2: 'M21 17H11',
  d3: 'M5 4.5C5.27522 2.92833 8 5.42371 8 7C8 8.57629 5.27522 11.0717 5 9.5',
  d4: 'M19 14.5C18.7248 12.9283 16 15.4237 16 17C16 18.5763 18.7248 21.0717 19 19.5',
  d5: 'M11 17C11 19.2091 9.20914 21 7 21C4.79086 21 3 19.2091 3 17C3 14.7909 4.79086 13 7 13C9.20914 13 11 14.7909 11 17ZM11 17H21M19 14.5C18.7248 12.9283 16 15.4237 16 17C16 18.5763 18.7248 21.0717 19 19.5',
  d6: 'M12.3554 7.99977H9.06018C8.95655 8.28561 8.82024 8.55394 8.67646 8.79254C8.36205 9.3143 7.94521 9.80457 7.51068 10.1837C7.11097 10.5325 6.55755 10.9097 5.9615 10.9858C5.63024 11.0281 5.20881 10.9838 4.84075 10.6951C4.48232 10.4139 4.32567 10.0188 4.26499 9.67226C4.16973 9.12825 4.5335 8.61002 5.07751 8.51476C5.43158 8.45275 5.77472 8.5852 5.99744 8.83524C6.05567 8.79322 6.12198 8.74114 6.19573 8.67678C6.41016 8.48967 6.62486 8.25272 6.80568 7.99977H3.25C2.69772 7.99977 2.25 7.55205 2.25 6.99977C2.25 6.44748 2.69772 5.99977 3.25 5.99977H6.80568C6.62486 5.74681 6.41016 5.50987 6.19573 5.32276C6.12198 5.2584 6.05567 5.20632 5.99744 5.1643C5.77472 5.41433 5.43158 5.54678 5.07751 5.48478C4.5335 5.38952 4.16973 4.87129 4.26499 4.32728C4.32567 3.98075 4.48232 3.58562 4.84075 3.30447C5.20881 3.01577 5.63024 2.97144 5.9615 3.01373C6.55755 3.08983 7.11097 3.46702 7.51068 3.81581C7.94521 4.19497 8.36205 4.68524 8.67646 5.207C8.82024 5.4456 8.95655 5.71393 9.06018 5.99977H12.3555C12.8148 3.85672 14.7198 2.25 17 2.25C19.6234 2.25 21.75 4.37665 21.75 7C21.75 9.62335 19.6234 11.75 17 11.75C14.7196 11.75 12.8145 10.1431 12.3554 7.99977Z',
  d7: 'M7 12.25C4.37665 12.25 2.25 14.3766 2.25 17C2.25 19.6234 4.37665 21.75 7 21.75C9.28039 21.75 11.1855 20.1431 11.6446 17.9998H14.9398C15.0434 18.2856 15.1798 18.5539 15.3235 18.7925C15.6379 19.3143 16.0548 19.8046 16.4893 20.1837C16.889 20.5325 17.4424 20.9097 18.0385 20.9858C18.3698 21.0281 18.7912 20.9838 19.1593 20.6951C19.5177 20.4139 19.6743 20.0188 19.735 19.6723C19.8303 19.1283 19.4665 18.61 18.9225 18.5148C18.5684 18.4528 18.2253 18.5852 18.0026 18.8352C17.9443 18.7932 17.878 18.7411 17.8043 18.6768C17.5898 18.4897 17.3751 18.2527 17.1943 17.9998H20.75C21.3023 17.9998 21.75 17.5521 21.75 16.9998C21.75 16.4475 21.3023 15.9998 20.75 15.9998H17.1943C17.3751 15.7468 17.5898 15.5099 17.8043 15.3228C17.878 15.2584 17.9443 15.2063 18.0026 15.1643C18.2253 15.4143 18.5684 15.5468 18.9225 15.4848C19.4665 15.3895 19.8303 14.8713 19.735 14.3273C19.6743 13.9807 19.5177 13.5856 19.1593 13.3045C18.7912 13.0158 18.3698 12.9714 18.0385 13.0137C17.4424 13.0898 16.889 13.467 16.4893 13.8158C16.0548 14.195 15.6379 14.6852 15.3235 15.207C15.1798 15.4456 15.0434 15.7139 14.9398 15.9998H11.6445C11.1852 13.8567 9.28023 12.25 7 12.25Z',
  d8: 'M5.99744 5.1643C5.77472 5.41433 5.43158 5.54678 5.07751 5.48478C4.5335 5.38952 4.16973 4.87129 4.26499 4.32728C4.32567 3.98075 4.48232 3.58562 4.84075 3.30447C5.20881 3.01577 5.63024 2.97144 5.9615 3.01373C6.55755 3.08983 7.11097 3.46702 7.51068 3.81581C7.94521 4.19497 8.36205 4.68524 8.67646 5.207C8.82024 5.4456 8.95655 5.71393 9.06018 5.99977H13.25C13.8023 5.99977 14.25 6.44748 14.25 6.99977C14.25 7.55205 13.8023 7.99977 13.25 7.99977H9.06018C8.95655 8.28561 8.82024 8.55394 8.67646 8.79254C8.36205 9.3143 7.94521 9.80457 7.51068 10.1837C7.11097 10.5325 6.55755 10.9097 5.9615 10.9858C5.63024 11.0281 5.20881 10.9838 4.84075 10.6951C4.48232 10.4139 4.32567 10.0188 4.26499 9.67226C4.16973 9.12825 4.5335 8.61002 5.07751 8.51476C5.43158 8.45275 5.77472 8.5852 5.99744 8.83524C6.05567 8.79322 6.12198 8.74114 6.19573 8.67678C6.41016 8.48967 6.62486 8.25272 6.80568 7.99977H3.25C2.69772 7.99977 2.25 7.55205 2.25 6.99977C2.25 6.44748 2.69772 5.99977 3.25 5.99977H6.80568C6.62486 5.74681 6.41016 5.50987 6.19573 5.32276C6.12198 5.2584 6.05567 5.20632 5.99744 5.1643Z',
  d9: 'M19.1593 13.3045C19.5177 13.5856 19.6743 13.9807 19.735 14.3273C19.8303 14.8713 19.4665 15.3895 18.9225 15.4848C18.5684 15.5468 18.2253 15.4143 18.0026 15.1643C17.9443 15.2063 17.878 15.2584 17.8043 15.3228C17.5898 15.5099 17.3751 15.7468 17.1943 15.9998H20.75C21.3023 15.9998 21.75 16.4475 21.75 16.9998C21.75 17.5521 21.3023 17.9998 20.75 17.9998H17.1943C17.3751 18.2527 17.5898 18.4897 17.8043 18.6768C17.878 18.7411 17.9443 18.7932 18.0026 18.8352C18.2253 18.5852 18.5684 18.4528 18.9225 18.5148C19.4665 18.61 19.8303 19.1283 19.735 19.6723C19.6743 20.0188 19.5177 20.4139 19.1593 20.6951C18.7912 20.9838 18.3698 21.0281 18.0385 20.9858C17.4424 20.9097 16.889 20.5325 16.4893 20.1837C16.0548 19.8046 15.6379 19.3143 15.3235 18.7925C15.1798 18.5539 15.0434 18.2856 14.9398 17.9998H10.75C10.1977 17.9998 9.75 17.5521 9.75 16.9998C9.75 16.4475 10.1977 15.9998 10.75 15.9998H14.9398C15.0434 15.7139 15.1798 15.4456 15.3235 15.207C15.6379 14.6852 16.0548 14.195 16.4893 13.8158C16.889 13.467 17.4424 13.0898 18.0385 13.0137C18.3698 12.9714 18.7912 13.0158 19.1593 13.3045Z',
  d10: 'M12.25 7C12.25 4.37665 14.3766 2.25 17 2.25C19.6234 2.25 21.75 4.37665 21.75 7C21.75 9.62335 19.6234 11.75 17 11.75C14.3766 11.75 12.25 9.62335 12.25 7Z',
  d11: 'M2.25 17C2.25 14.3766 4.37665 12.25 7 12.25C9.62335 12.25 11.75 14.3766 11.75 17C11.75 19.6234 9.62335 21.75 7 21.75C4.37665 21.75 2.25 19.6234 2.25 17Z',
  d12: 'M3 7H13',
  d13: 'M4.5 5L5.5 4L8 6.99999L5.5 10L4.5 9',
  d14: 'M19.5 15L18.5 14L16 17L18.5 20L19.5 19',
  d15: 'M6.07524 3.51986C5.94034 3.35798 5.74357 3.26032 5.53306 3.25077C5.32256 3.24122 5.11775 3.32067 4.96875 3.46967L3.96875 4.46967L5.02941 5.53033L5.44868 5.11106L6.39781 6.25H3V7.75H6.39779L5.44868 8.88894L5.02941 8.46967L3.96875 9.53033L4.96875 10.5303C5.11775 10.6793 5.32256 10.7588 5.53307 10.7492C5.74357 10.7397 5.94035 10.642 6.07525 10.4801L8.35035 7.75H13V6.25H8.35037L6.07524 3.51986Z',
  d16: 'M17.9248 13.5199C18.0597 13.358 18.2564 13.2603 18.4669 13.2508C18.6774 13.2412 18.8822 13.3207 19.0312 13.4697L20.0312 14.4697L18.9706 15.5303L18.5513 15.1111L17.6022 16.25H21V17.75H17.6022L18.5513 18.8889L18.9706 18.4697L20.0312 19.5303L19.0312 20.5303C18.8822 20.6793 18.6774 20.7588 18.4669 20.7492C18.2564 20.7397 18.0597 20.642 17.9248 20.4801L15.6496 17.75H11V16.25H15.6496L17.9248 13.5199Z',
} as const;

export const IconEarRings03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ear-rings-03-stroke-rounded IconEarRings03StrokeRounded"
    >
      <circle 
        cx="17" 
        cy="7" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="17" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconEarRings03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ear-rings-03-duotone-rounded IconEarRings03DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="7" 
        cy="17" 
        r="4" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="17" 
        cy="7" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="17" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconEarRings03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ear-rings-03-twotone-rounded IconEarRings03TwotoneRounded"
    >
      <circle 
        cx="17" 
        cy="7" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEarRings03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ear-rings-03-solid-rounded IconEarRings03SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconEarRings03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ear-rings-03-bulk-rounded IconEarRings03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconEarRings03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ear-rings-03-stroke-sharp IconEarRings03StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <circle 
        cx="17" 
        cy="7" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="17" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEarRings03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ear-rings-03-solid-sharp IconEarRings03SolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEarRings03: TheIconSelfPack = {
  name: 'EarRings03',
  StrokeRounded: IconEarRings03StrokeRounded,
  DuotoneRounded: IconEarRings03DuotoneRounded,
  TwotoneRounded: IconEarRings03TwotoneRounded,
  SolidRounded: IconEarRings03SolidRounded,
  BulkRounded: IconEarRings03BulkRounded,
  StrokeSharp: IconEarRings03StrokeSharp,
  SolidSharp: IconEarRings03SolidSharp,
};