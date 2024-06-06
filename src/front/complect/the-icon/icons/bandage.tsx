import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.9525 4.84083C15.1797 3.61361 15.7933 3 16.5558 3C17.3183 3 17.9319 3.61361 19.1592 4.84083C20.3864 6.06806 21 6.68167 21 7.44417C21 8.20667 20.3864 8.82028 19.1592 10.0475M10.0475 19.1592C8.82028 20.3864 8.20667 21 7.44417 21C6.68167 21 6.06806 20.3864 4.84084 19.1592C3.61361 17.9319 3 17.3183 3 16.5558C3 15.7933 3.61361 15.1797 4.84084 13.9525',
  d2: 'M6.79333 12L4.84084 10.0475C3.61361 8.82028 3 8.20667 3 7.44417C3 6.68167 3.61361 6.06806 4.84084 4.84083C6.06806 3.61361 6.68167 3 7.44417 3C8.20667 3 8.82028 3.61361 10.0475 4.84083L12 6.79333M6.79333 12L12 6.79333M6.79333 12L12 17.2067M12 6.79333L17.2067 12M17.2067 12L19.1592 13.9525C20.3864 15.1797 21 15.7933 21 16.5558C21 17.3183 20.3864 17.9319 19.1592 19.1592C17.9319 20.3864 17.3183 21 16.5558 21C15.7933 21 15.1797 20.3864 13.9525 19.1592L12 17.2067M17.2067 12L12 17.2067',
  d3: 'M4.84084 19.1592C6.06806 20.3864 6.68167 21 7.44417 21C8.20667 21 8.82028 20.3864 10.0475 19.1592L11.9984 17.2083L6.7937 12.0035L12.0004 6.79688L17.207 12.0035L12.002 17.2086L13.9525 19.1592C15.1797 20.3864 15.7933 21 16.5558 21C17.3183 21 17.9319 20.3864 19.1592 19.1592C20.3864 17.932 21 17.3183 21 16.5558C21 15.7933 20.3864 15.1797 19.1592 13.9525L17.2067 12L19.1592 10.0475C20.3864 8.82028 21 8.20667 21 7.44417C21 6.68167 20.3864 6.06805 19.1592 4.84082C17.9319 3.61361 17.3183 3 16.5558 3C15.7933 3 15.1797 3.61361 13.9525 4.84084L12 6.79333L10.0475 4.84083C8.82028 3.61361 8.20667 3 7.44417 3C6.68167 3 6.06805 3.61362 4.84082 4.84084C3.61361 6.06806 3 6.68167 3 7.44417C3 8.20666 3.61362 8.82028 4.84084 10.0475L6.79333 12L4.84082 13.9525C3.61361 15.1797 3 15.7933 3 16.5558C3 17.3183 3.61363 17.932 4.84084 19.1592Z',
  d4: 'M18.1382 2.86394C17.6693 2.50624 17.167 2.25 16.5558 2.25C15.9447 2.25 15.4423 2.50624 14.9735 2.86394C14.5311 3.20146 14.0411 3.69155 13.4584 4.27423L13.4584 4.27424L13.4222 4.3105C13.1293 4.6034 13.1293 5.07827 13.4222 5.37116L18.6288 10.5778C18.7695 10.7185 18.9603 10.7975 19.1592 10.7975C19.3581 10.7975 19.5488 10.7185 19.6895 10.5778L19.7258 10.5416L19.7258 10.5415C20.3085 9.95891 20.7985 9.46887 21.1361 9.0265C21.4938 8.55767 21.75 8.05533 21.75 7.44417C21.75 6.833 21.4938 6.33067 21.1361 5.86184C20.7985 5.41946 20.3085 4.92941 19.7258 4.34677L19.6895 4.3105L19.6532 4.27423C19.0706 3.69155 18.5805 3.20146 18.1382 2.86394Z',
  d5: 'M4.84084 13.2025C4.64192 13.2025 4.45116 13.2815 4.3105 13.4222L4.27426 13.4584L4.27423 13.4585C3.69155 14.0411 3.20146 14.5311 2.86394 14.9735C2.50624 15.4423 2.25 15.9447 2.25 16.5558C2.25 17.167 2.50624 17.6693 2.86394 18.1382C3.20144 18.5805 3.69149 19.0705 4.27413 19.6531L4.27421 19.6532L4.34683 19.7258L4.34687 19.7259C4.92947 20.3085 5.41949 20.7986 5.86184 21.1361C6.33067 21.4938 6.833 21.75 7.44417 21.75C8.05534 21.75 8.55767 21.4938 9.0265 21.1361C9.46886 20.7985 9.95888 20.3085 10.5415 19.7258L10.5415 19.7258L10.5778 19.6895C10.8707 19.3966 10.8707 18.9217 10.5778 18.6288L5.37116 13.4222C5.23051 13.2815 5.03975 13.2025 4.84084 13.2025Z',
  d6: 'M9.24869 2.89856C8.7699 2.53325 8.22868 2.25 7.55806 2.25C6.88745 2.25 6.34623 2.53325 5.86744 2.89856C5.42291 3.23772 4.93501 3.72568 4.37498 4.28578L4.28573 4.37504C3.72565 4.93504 3.23771 5.42292 2.89856 5.86744C2.53325 6.34623 2.25 6.88745 2.25 7.55806C2.25 8.22868 2.53325 8.7699 2.89856 9.24869C3.23772 9.69322 3.72567 10.1811 4.28576 10.7411L13.2589 19.7142C13.8189 20.2743 14.3068 20.7623 14.7513 21.1014C15.2301 21.4667 15.7713 21.75 16.4419 21.75C17.1125 21.75 17.6538 21.4667 18.1326 21.1014C18.5771 20.7623 19.065 20.2743 19.625 19.7142L19.7142 19.625C20.2743 19.065 20.7623 18.5771 21.1014 18.1326C21.4667 17.6538 21.75 17.1125 21.75 16.4419C21.75 15.7713 21.4667 15.2301 21.1014 14.7513C20.7623 14.3068 20.2743 13.8189 19.7142 13.2588L10.7411 4.28578C10.1811 3.72569 9.69322 3.23772 9.24869 2.89856ZM8.5024 12.2002C8.30239 12.0002 8.20239 11.9002 8.20239 11.7759C8.20239 11.6517 8.3024 11.5517 8.50241 11.3517L11.3516 8.50262C11.5516 8.30262 11.6516 8.20263 11.7758 8.20263C11.9001 8.20263 12.0001 8.30263 12.2001 8.50262L15.4976 11.8001C15.6976 12.0001 15.7976 12.1001 15.7976 12.2244C15.7976 12.3486 15.6976 12.4486 15.4976 12.6486L12.6484 15.4977C12.4484 15.6977 12.3484 15.7977 12.2241 15.7977C12.0999 15.7977 11.9999 15.6977 11.7999 15.4977L8.5024 12.2002Z',
  d7: 'M9.24869 2.89856C8.7699 2.53325 8.22868 2.25 7.55806 2.25C6.88745 2.25 6.34623 2.53325 5.86744 2.89856C5.42291 3.23772 4.93501 3.72568 4.37498 4.28578L4.28573 4.37504C3.72565 4.93504 3.23771 5.42292 2.89856 5.86744C2.53325 6.34623 2.25 6.88745 2.25 7.55806C2.25 8.22868 2.53325 8.7699 2.89856 9.24869C3.23772 9.69322 3.72567 10.1811 4.28576 10.7411L13.2589 19.7142C13.8189 20.2743 14.3068 20.7623 14.7513 21.1014C15.2301 21.4667 15.7713 21.75 16.4419 21.75C17.1125 21.75 17.6538 21.4667 18.1326 21.1014C18.5771 20.7623 19.065 20.2743 19.625 19.7142L19.7142 19.625C20.2743 19.065 20.7623 18.5771 21.1014 18.1326C21.4667 17.6538 21.75 17.1125 21.75 16.4419C21.75 15.7713 21.4667 15.2301 21.1014 14.7513C20.7623 14.3068 20.2743 13.8189 19.7142 13.2588L10.7411 4.28578C10.1811 3.72569 9.69322 3.23772 9.24869 2.89856Z',
  d8: 'M8.50313 12.2007C8.30313 12.0007 8.20312 11.9007 8.20313 11.7764C8.20313 11.6522 8.30313 11.5522 8.50314 11.3522L11.3523 8.50311C11.5523 8.30312 11.6523 8.20312 11.7766 8.20313C11.9008 8.20313 12.0008 8.30312 12.2008 8.50312L15.4983 11.8006C15.6983 12.0006 15.7983 12.1006 15.7983 12.2249C15.7983 12.3491 15.6983 12.4491 15.4983 12.6491L12.6491 15.4982C12.4491 15.6982 12.3491 15.7982 12.2249 15.7982C12.1006 15.7982 12.0006 15.6982 11.8006 15.4982L8.50313 12.2007Z',
  d9: 'M12 6.62824L7.37185 2L2 7.37119L6.62853 11.9998M12 6.62824L17.3715 11.9998M12 6.62824L6.62853 11.9998M17.3715 11.9998L22 16.6284L16.6285 22L12 17.3714M17.3715 11.9998L12 17.3714M12 17.3714L6.62853 11.9998',
  d10: 'M13.591 5.03724L16.6282 2L22 7.37119L18.9624 10.4088M10.409 18.9624L7.37147 22L2 16.6284L5.03755 13.5908',
  d11: 'M8.16808 1.53624C7.78644 1.1546 7.1677 1.15458 6.78604 1.53619L1.53628 6.78532C1.35299 6.96859 1.25001 7.21716 1.25 7.47636C1.24999 7.73556 1.35295 7.98414 1.53623 8.16742L15.8323 22.4638C16.0156 22.647 16.2641 22.75 16.5233 22.75C16.7825 22.75 17.0311 22.647 17.2144 22.4638L22.4638 17.2143C22.8454 16.8326 22.8454 16.2139 22.4638 15.8322L8.16808 1.53624ZM8.13281 12.0002L12.0001 8.13281L15.8675 12.0002L12.0001 15.8676L8.13281 12.0002Z',
  d12: 'M4.40756 13.1602L1.46966 16.0981C1.17678 16.391 1.17678 16.8659 1.46966 17.1588L6.84114 22.5303C6.98179 22.671 7.17256 22.75 7.37147 22.75C7.57039 22.75 7.76115 22.671 7.90181 22.5303L10.8397 19.5924L4.40756 13.1602Z',
  d13: 'M19.5924 10.8395L22.5303 7.90152C22.671 7.76086 22.75 7.57009 22.75 7.37117C22.75 7.17225 22.671 6.98148 22.5303 6.84083L17.1585 1.46964C16.8656 1.17677 16.3907 1.17679 16.0978 1.46967L13.1603 4.40723L19.5924 10.8395Z',
};

export const IconBandageStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bandage-stroke-rounded IconBandageStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBandageDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bandage-duotone-rounded IconBandageDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBandageTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bandage-twotone-rounded IconBandageTwotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBandageSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bandage-solid-rounded IconBandageSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBandageBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bandage-bulk-rounded IconBandageBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconBandageStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bandage-stroke-sharp IconBandageStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBandageSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bandage-solid-sharp IconBandageSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfBandage: TheIconSelfPack = {
  name: 'Bandage',
  StrokeRounded: IconBandageStrokeRounded,
  DuotoneRounded: IconBandageDuotoneRounded,
  TwotoneRounded: IconBandageTwotoneRounded,
  SolidRounded: IconBandageSolidRounded,
  BulkRounded: IconBandageBulkRounded,
  StrokeSharp: IconBandageStrokeSharp,
  SolidSharp: IconBandageSolidSharp,
};