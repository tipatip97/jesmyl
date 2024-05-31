import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 16C21.6936 15.3871 21.0672 15 20.382 15H3.61803C2.93283 15 2.30643 15.3871 2 16',
  d2: 'M3 22H21',
  d3: 'M5 15V22M9.5 15V22M14.5 15V22M19 15V22',
  d4: 'M12 7L15 3M12 7H6.5M12 7H17.5M12 7L9 3',
  d5: 'M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V15H6V8Z',
  d6: 'M5 15V22H9.5V15H5Z',
  d7: 'M14.5 15V22H19V15H14.5Z',
  d8: 'M9 2.77881C7.43867 3.65318 6.30807 5.18901 6 6.99989H12H18C17.6919 5.18901 16.5613 3.65318 15 2.77881L12 6.99989L9 2.77881Z',
  d9: 'M9.5 14H4.25V22.75H9.5H14.5H19.75V14H14.5H9.5ZM9.5 14C9.91421 14 10.25 14.3457 10.25 14.7721V21.9779C10.25 22.4043 9.91421 22.75 9.5 22.75C9.08579 22.75 8.75 22.4043 8.75 21.9779V14.7721C8.75 14.3457 9.08579 14 9.5 14ZM14.5 14C14.0858 14 13.75 14.3457 13.75 14.7721V21.9779C13.75 22.4043 14.0858 22.75 14.5 22.75C14.9142 22.75 15.25 22.4043 15.25 21.9779V14.7721C15.25 14.3457 14.9142 14 14.5 14Z',
  d10: 'M2.00024 21.75C2.00024 21.1977 2.44796 20.75 3.00024 20.75H21.0002C21.5525 20.75 22.0002 21.1977 22.0002 21.75C22.0002 22.3023 21.5525 22.75 21.0002 22.75H3.00024C2.44796 22.75 2.00024 22.3023 2.00024 21.75Z',
  d11: 'M1.10579 15.5528C1.58162 14.6011 2.55428 14 3.61825 14H20.3822C21.4462 14 22.4188 14.6011 22.8946 15.5528C23.1416 16.0468 22.9414 16.6474 22.4474 16.8944C21.9535 17.1414 21.3528 16.9412 21.1058 16.4472C20.9688 16.1731 20.6886 16 20.3822 16H3.61825C3.31182 16 3.03169 16.1731 2.89465 16.4472C2.64766 16.9412 2.04698 17.1414 1.55301 16.8944C1.05903 16.6474 0.858803 16.0468 1.10579 15.5528Z',
  d12: 'M5.00024 8.25C5.00024 4.38401 8.13425 1.25 12.0002 1.25C15.8662 1.25 19.0002 4.38401 19.0002 8.25V14.25C19.0002 14.8023 18.5525 15.25 18.0002 15.25C17.448 15.25 17.0002 14.8023 17.0002 14.25V8.25L7.00024 8.25V14.25C7.00024 14.8023 6.55253 15.25 6.00024 15.25C5.44796 15.25 5.00024 14.8023 5.00024 14.25V8.25ZM7.41629 6.25H10.0002L8.68982 4.50277C8.14753 4.98221 7.71009 5.57755 7.41629 6.25ZM10.4371 3.49919L12.0002 5.58333L13.5634 3.49919C13.0716 3.33748 12.5461 3.25 12.0002 3.25C11.4544 3.25 10.9289 3.33748 10.4371 3.49919ZM15.3107 4.50277L14.0002 6.25H16.5842C16.2904 5.57755 15.853 4.98221 15.3107 4.50277Z',
  d13: 'M22 16L20.5 15H3.5L2 16',
  d14: 'M2 22H22',
  d15: 'M12 1.25C8.27208 1.25 5.25 4.27954 5.25 8.01667V14.25H3.68894L2 15.376L2.83205 16.624L4.14311 15.75H19.8569L21.1679 16.624L22 15.376L20.3111 14.25H18.75V8.01667C18.75 4.27954 15.7279 1.25 12 1.25ZM16.8214 14.25V8.01667L7.17857 8.01667V14.25H16.8214ZM8.80781 4.39435C8.28489 4.85781 7.86307 5.4333 7.57976 6.08333H10.0714L8.80781 4.39435ZM16.4202 6.08333H13.9286L15.1922 4.39435C15.7151 4.85781 16.1369 5.4333 16.4202 6.08333ZM12 3.18333C12.5264 3.18333 13.0331 3.2679 13.5073 3.42421L12 5.43889L10.4927 3.42421C10.9669 3.2679 11.4736 3.18333 12 3.18333Z',
  d16: 'M22 22.75H2V21.25H22V22.75Z',
  d17: 'M10.25 22.75H13.75V14.25H10.25V22.75Z',
  d18: 'M8.75 14.25H5C4.58579 14.25 4.25 14.5858 4.25 15V22C4.25 22.4142 4.58579 22.75 5 22.75H8.75V14.25Z',
  d19: 'M15.25 14.25V22.75H19C19.4142 22.75 19.75 22.4142 19.75 22V15C19.75 14.5858 19.4142 14.25 19 14.25H15.25Z',
} as const;

export const IconPatioStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="patio-stroke-rounded IconPatioStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPatioDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="patio-duotone-rounded IconPatioDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPatioTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="patio-twotone-rounded IconPatioTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPatioSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="patio-solid-rounded IconPatioSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconPatioBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="patio-bulk-rounded IconPatioBulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPatioStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="patio-stroke-sharp IconPatioStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPatioSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="patio-solid-sharp IconPatioSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPatio: TheIconSelfPack = {
  name: 'Patio',
  StrokeRounded: IconPatioStrokeRounded,
  DuotoneRounded: IconPatioDuotoneRounded,
  TwotoneRounded: IconPatioTwotoneRounded,
  SolidRounded: IconPatioSolidRounded,
  BulkRounded: IconPatioBulkRounded,
  StrokeSharp: IconPatioStrokeSharp,
  SolidSharp: IconPatioSolidSharp,
};