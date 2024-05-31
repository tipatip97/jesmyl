import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 10H21',
  d2: 'M15 6L17 6',
  d3: 'M21 13V11C21 6.75736 21 4.63604 19.682 3.31802C18.364 2 16.2426 2 12 2C7.75736 2 5.63604 2 4.31802 3.31802C3 4.63604 3 6.75736 3 11V13C3 17.2426 3 19.364 4.31802 20.682C5.63604 22 7.75736 22 12 22C16.2426 22 18.364 22 19.682 20.682C21 19.364 21 17.2426 21 13Z',
  d4: 'M7 14H7.52632M11.7368 14H12.2632M16.4737 14H17',
  d5: 'M7 18H7.52632M11.7368 18H12.2632M16.4737 18H17',
  d6: 'M20.9986 10H3.00072C3 10.3196 3 10.6527 3 11V13C3 17.2426 3 19.364 4.31802 20.682C5.63604 22 7.75736 22 12 22C16.2426 22 18.364 22 19.682 20.682C21 19.364 21 17.2426 21 13V11C21 10.6527 20.9993 10.3196 20.9986 10Z',
  d7: 'M14 6C14 5.44772 14.4477 5 15 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55229 17.5523 7 17 7L15 7C14.4477 7 14 6.55228 14 6Z',
  d8: 'M11.9993 1.00115C13.6841 1.00115 15.3961 0.94976 17.0702 1.17473C18.4065 1.3543 19.5126 1.73591 20.3884 2.61125C21.1913 3.41379 21.5799 4.41096 21.7773 5.60434C21.9698 6.76856 21.9945 8.21809 21.9986 9.99434C21.9989 10.1287 21.9992 10.263 21.9994 10.3973C21.9999 10.6791 22.0001 10.82 21.9122 10.908C21.8243 10.9961 21.6831 10.9961 21.4007 10.9961C15.1335 10.9961 8.86628 10.9961 2.59909 10.9961C2.31713 10.9961 2.17615 10.9961 2.08837 10.9087C2.08804 10.9084 2.0877 10.9081 2.08736 10.9077C2 10.8199 2 10.679 2 10.397V9.99434C2.00402 8.21809 2.02875 6.76856 2.22128 5.60434C2.41862 4.41096 2.80724 3.41379 3.61019 2.61125C4.48597 1.73591 5.592 1.3543 6.9283 1.17473C8.60245 0.94976 10.3145 1.00115 11.9993 1.00115ZM7.1948 3.15589C6.08027 3.30566 5.46664 3.58273 5.0244 4.02474C4.61722 4.43172 4.35125 4.98247 4.1945 5.93032C4.08562 6.58876 4.03701 7.38709 4.01564 8.39065C4.00958 8.67483 4.00656 8.81692 4.0948 8.90701C4.18304 8.9971 4.32627 8.9971 4.61275 8.9971H19.3858C19.6723 8.9971 19.8155 8.9971 19.9038 8.90701C19.992 8.81692 19.989 8.67483 19.9829 8.39066C19.9615 7.38709 19.9129 6.58877 19.804 5.93032C19.6473 4.98247 19.3813 4.43172 18.9741 4.02474C18.5319 3.58273 17.9183 3.30566 16.8038 3.15589C15.6605 3.00226 14.1489 3.00014 11.9993 3.00014C9.84968 3.00014 8.33809 3.00226 7.1948 3.15589Z',
  d9: 'M21.997 9H2.00299L2.00073 9.99738C2 10.318 2 10.6526 2 10.9993V13.0726V13.0726C1.99998 15.1303 1.99996 16.7761 2.17367 18.0677C2.35333 19.4035 2.73514 20.5092 3.61092 21.3846C4.48669 22.2601 5.59273 22.6417 6.92903 22.8213C8.34109 23.0111 9.7801 23.0043 11.207 22.9975H11.207H11.2071C11.4719 22.9962 11.7363 22.9949 12 22.9949C12.2637 22.9949 12.5281 22.9962 12.7929 22.9975H12.793H12.793C14.2199 23.0043 15.6589 23.0111 17.071 22.8213C18.4073 22.6417 19.5133 22.2601 20.3891 21.3846C21.2649 20.5092 21.6467 19.4035 21.8263 18.0677C22 16.7761 22 15.1303 22 13.0726V10.9993C22 10.6523 22 10.3182 21.9993 9.99738L21.997 9ZM6 14C6 13.4477 6.44772 13 7 13H7.52632C8.0786 13 8.52632 13.4477 8.52632 14C8.52632 14.5523 8.0786 15 7.52632 15H7C6.44772 15 6 14.5523 6 14ZM10.7368 14C10.7368 13.4477 11.1846 13 11.7368 13H12.2632C12.8154 13 13.2632 13.4477 13.2632 14C13.2632 14.5523 12.8154 15 12.2632 15H11.7368C11.1846 15 10.7368 14.5523 10.7368 14ZM15.4737 14C15.4737 13.4477 15.9214 13 16.4737 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H16.4737C15.9214 15 15.4737 14.5523 15.4737 14ZM7 17C6.44772 17 6 17.4477 6 18C6 18.5523 6.44772 19 7 19H7.52632C8.0786 19 8.52632 18.5523 8.52632 18C8.52632 17.4477 8.0786 17 7.52632 17H7ZM11.7368 17C11.1846 17 10.7368 17.4477 10.7368 18C10.7368 18.5523 11.1846 19 11.7368 19H12.2632C12.8154 19 13.2632 18.5523 13.2632 18C13.2632 17.4477 12.8154 17 12.2632 17H11.7368ZM16.4737 17C15.9214 17 15.4737 17.4477 15.4737 18C15.4737 18.5523 15.9214 19 16.4737 19H17C17.5523 19 18 18.5523 18 18C18 17.4477 17.5523 17 17 17H16.4737Z',
  d10: 'M12.7963 1.00253C12.5316 1.00379 12.2672 1.00505 12.0036 1.00505C11.74 1.00505 11.4757 1.00379 11.2109 1.00253C9.7846 0.995737 8.34613 0.988883 6.93461 1.17864C5.59883 1.35821 4.49323 1.73982 3.61779 2.61515C2.81516 3.41769 2.42669 4.41487 2.22942 5.60825C1.93598 7.38344 2.00774 9.21006 2.00774 11.0042V13.0775C2.00772 15.1351 2.0077 16.781 2.18135 18.0726C2.36094 19.4084 2.74259 20.514 3.61803 21.3895C4.49347 22.265 5.59907 22.6466 6.93485 22.8262C8.34637 23.016 9.78483 23.0091 11.2112 23.0023H11.2112C11.4759 23.0011 11.7402 22.9998 12.0038 22.9998C12.2675 22.9998 12.5318 23.0011 12.7965 23.0023H12.7965C14.2229 23.0091 15.6613 23.016 17.0728 22.8262C18.4086 22.6466 19.5142 22.265 20.3897 21.3895C21.2651 20.514 21.6468 19.4084 21.8263 18.0726C22 16.781 22 15.1352 21.9999 13.0775V11.0042C21.9999 10.6214 22.0004 10.2574 21.9987 9.88901C21.9939 8.16246 21.9663 6.74851 21.7778 5.60825C21.5805 4.41487 21.1921 3.41769 20.3894 2.61515C19.514 1.73982 18.4084 1.35821 17.0726 1.17864C15.6611 0.988883 14.2226 0.995737 12.7963 1.00253Z',
  d11: 'M7.20008 3.15966C6.08599 3.30943 5.47259 3.5865 5.03052 4.02851C4.6235 4.43549 4.35763 4.98624 4.20095 5.93409C4.09211 6.59253 4.04352 7.39086 4.02215 8.39442C4.0161 8.6786 4.01308 8.82069 4.10128 8.91078C4.18949 9.00087 4.33267 9.00087 4.61903 9.00087H19.3863C19.6727 9.00087 19.8159 9.00087 19.9041 8.91078C19.9923 8.82069 19.9893 8.6786 19.9832 8.39442C19.9618 7.39086 19.9132 6.59253 19.8044 5.93409C19.6477 4.98624 19.3819 4.43549 18.9748 4.02851C18.5328 3.5865 17.9194 3.30943 16.8053 3.15966C15.6624 3.00603 14.1514 3.00391 12.0027 3.00391C9.85393 3.00391 8.34292 3.00603 7.20008 3.15966ZM15 5C14.4477 5 14 5.44772 14 6C14 6.55228 14.4477 7 15 7L17 7C17.5523 7 18 6.55229 18 6C18 5.44772 17.5523 5 17 5L15 5Z',
  d12: 'M6 14C6 13.4477 6.44772 13 7 13H7.52632C8.0786 13 8.52632 13.4477 8.52632 14C8.52632 14.5523 8.0786 15 7.52632 15H7C6.44772 15 6 14.5523 6 14ZM10.7368 14C10.7368 13.4477 11.1846 13 11.7368 13H12.2632C12.8154 13 13.2632 13.4477 13.2632 14C13.2632 14.5523 12.8154 15 12.2632 15H11.7368C11.1846 15 10.7368 14.5523 10.7368 14ZM15.4737 14C15.4737 13.4477 15.9214 13 16.4737 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H16.4737C15.9214 15 15.4737 14.5523 15.4737 14Z',
  d13: 'M6 18C6 17.4477 6.44772 17 7 17H7.52632C8.0786 17 8.52632 17.4477 8.52632 18C8.52632 18.5523 8.0786 19 7.52632 19H7C6.44772 19 6 18.5523 6 18ZM10.7368 18C10.7368 17.4477 11.1846 17 11.7368 17H12.2632C12.8154 17 13.2632 17.4477 13.2632 18C13.2632 18.5523 12.8154 19 12.2632 19H11.7368C11.1846 19 10.7368 18.5523 10.7368 18ZM15.4737 18C15.4737 17.4477 15.9214 17 16.4737 17H17C17.5523 17 18 17.4477 18 18C18 18.5523 17.5523 19 17 19H16.4737C15.9214 19 15.4737 18.5523 15.4737 18Z',
  d14: 'M4 10H20.5',
  d15: 'M20.5 21.5V2.5H3.5V21.5H20.5Z',
  d16: 'M17 7.5L14 7.5L14 5.5L17 5.5L17 7.5Z',
  d17: 'M2.75 2.72619C2.75 2.18706 3.18593 1.75 3.72368 1.75H20.2763C20.8141 1.75 21.25 2.18706 21.25 2.72619V21.2738C21.25 21.8129 20.8141 22.25 20.2763 22.25H3.72368C3.18593 22.25 2.75 21.8129 2.75 21.2738V2.72619ZM19.3025 3.70239V9.25001H4.69727V3.70239H19.3025ZM6.25 13.25H8.27632V14.75H6.25V13.25ZM10.9868 13.25H13.0132V14.75H10.9868V13.25ZM15.7237 13.25H17.75V14.75H15.7237V13.25ZM8.27632 17.25H6.25V18.75H8.27632V17.25ZM13.0132 17.25H10.9868V18.75H13.0132V17.25ZM17.75 17.25H15.7237V18.75H17.75V17.25Z',
} as const;

export const IconCalculator01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calculator-01-stroke-rounded IconCalculator01StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconCalculator01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calculator-01-duotone-rounded IconCalculator01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconCalculator01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calculator-01-twotone-rounded IconCalculator01TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconCalculator01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calculator-01-solid-rounded IconCalculator01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCalculator01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calculator-01-bulk-rounded IconCalculator01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCalculator01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calculator-01-stroke-sharp IconCalculator01StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCalculator01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calculator-01-solid-sharp IconCalculator01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfCalculator01: TheIconSelfPack = {
  name: 'Calculator01',
  StrokeRounded: IconCalculator01StrokeRounded,
  DuotoneRounded: IconCalculator01DuotoneRounded,
  TwotoneRounded: IconCalculator01TwotoneRounded,
  SolidRounded: IconCalculator01SolidRounded,
  BulkRounded: IconCalculator01BulkRounded,
  StrokeSharp: IconCalculator01StrokeSharp,
  SolidSharp: IconCalculator01SolidSharp,
};