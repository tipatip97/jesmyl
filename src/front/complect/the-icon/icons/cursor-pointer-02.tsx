import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.05139 16C4.12629 15.1008 2 12.3774 2 9.15744C2 5.20449 5.20449 2 9.15744 2C12.3774 2 15.1008 4.12629 16 7.05139',
  d2: 'M6.44444 10C6.16405 9.58923 6 9.09211 6 8.55652C6 7.14459 7.14007 6 8.54642 6C9.08678 6 9.58783 6.16898 10 6.45717',
  d3: 'M9.30945 9.37832C10.7997 7.77346 22.0092 11.7048 22 13.1402C21.9895 14.7678 17.6224 15.2685 16.4119 15.6081C15.684 15.8124 15.489 16.0217 15.3212 16.785C14.561 20.2419 14.1794 21.9613 13.3096 21.9997C11.9231 22.061 7.85508 10.9445 9.30945 9.37832Z',
  d4: 'M2 9.15744C2 5.20449 5.20449 2 9.15744 2C12.3774 2 15.1008 4.12629 16 7.05139C16.1823 7.91407 16.2625 8.98764 16.1257 10.0899C13.1651 9.14582 10.047 8.58406 9.30945 9.37832C8.60955 10.132 9.18859 13.0975 10.1322 15.9646C9.23383 16.0854 8.2118 16.105 7.05139 16C4.12629 15.1008 2 12.3774 2 9.15744Z',
  d5: 'M9.15238 3.18747C5.85805 3.18747 3.18747 5.85805 3.18747 9.15238C3.18747 11.8344 4.95831 14.1054 7.39685 14.855C7.90824 15.0123 8.19536 15.5543 8.03815 16.0657C7.88093 16.5771 7.33892 16.8642 6.82752 16.707C3.59878 15.7144 1.25 12.7089 1.25 9.15238C1.25 4.78802 4.78802 1.25 9.15238 1.25C12.7089 1.25 15.7144 3.59878 16.707 6.82752C16.8642 7.33892 16.5771 7.88093 16.0657 8.03815C15.5543 8.19536 15.0123 7.90824 14.855 7.39685C14.1054 4.95831 11.8344 3.18747 9.15238 3.18747Z',
  d6: 'M8.50083 7.0833C7.72137 7.0833 7.0833 7.71867 7.0833 8.51009C7.0833 8.8111 7.17489 9.08758 7.33113 9.31646C7.61655 9.73459 7.50897 10.3049 7.09085 10.5903C6.67272 10.8758 6.10239 10.7682 5.81697 10.3501C5.45916 9.82587 5.25 9.19098 5.25 8.51009C5.25 6.71302 6.70203 5.25 8.50083 5.25C9.19031 5.25 9.83192 5.46628 10.3585 5.83449C10.7734 6.12459 10.8746 6.69609 10.5845 7.11099C10.2944 7.52588 9.72289 7.62705 9.30799 7.33695C9.07897 7.17681 8.802 7.0833 8.50083 7.0833Z',
  d7: 'M22.4713 12.3883C22.5984 12.5548 22.7521 12.8161 22.75 13.145C22.7449 13.9292 22.2098 14.461 21.7032 14.7923C21.182 15.1332 20.5147 15.3837 19.8703 15.5759C19.2158 15.771 18.53 15.9216 17.9464 16.0425C17.5407 16.1252 16.8195 16.2727 16.6145 16.3302C16.2747 16.4256 16.2181 16.4843 16.2064 16.4969C16.1912 16.5133 16.1333 16.5838 16.0537 16.9461L16.0497 16.9642C15.676 18.6634 15.3813 20.004 15.0655 20.919C14.9076 21.3764 14.7229 21.7948 14.4781 22.1126C14.2191 22.4487 13.8464 22.7267 13.3427 22.749C13.0066 22.7639 12.7387 22.6105 12.573 22.4874C12.3957 22.3557 12.2359 22.1846 12.0945 22.0079C11.8097 21.6522 11.5168 21.1684 11.2306 20.6214C10.6541 19.5197 10.0468 18.0491 9.53408 16.5407C9.02168 15.0331 8.5925 13.4546 8.38504 12.1364C8.28169 11.4797 8.22867 10.859 8.25804 10.3312C8.2853 9.84136 8.39015 9.26609 8.75985 8.86796C9.14131 8.45716 9.71815 8.32127 10.211 8.27376C10.7394 8.22283 11.3621 8.25729 12.0199 8.34357C13.3408 8.51682 14.9282 8.9164 16.4468 9.40522C17.9668 9.89449 19.4527 10.4844 20.5704 11.0526C21.1255 11.3347 21.6173 11.6252 21.981 11.9102C22.1618 12.0519 22.3361 12.2115 22.4713 12.3883Z',
  d8: 'M22 13.3333L9 9L13.3333 22L15.5 15.5L22 13.3333Z',
  d9: 'M9.40744 3.25C6.00678 3.25 3.25 6.00678 3.25 9.40744C3.25 12.176 5.078 14.5203 7.59524 15.2941L7.00754 17.2059C3.67459 16.1812 1.25 13.0788 1.25 9.40744C1.25 4.90221 4.90221 1.25 9.40744 1.25C13.0788 1.25 16.1812 3.67459 17.2059 7.00754L15.2941 7.59524C14.5203 5.078 12.176 3.25 9.40744 3.25ZM8.79642 7.25C7.94609 7.25 7.25 7.94314 7.25 8.80652C7.25 9.1349 7.34992 9.43652 7.52036 9.68621L5.86852 10.8138C5.47817 10.2419 5.25 9.54932 5.25 8.80652C5.25 6.84605 6.83406 5.25 8.79642 5.25C9.54859 5.25 10.2485 5.48594 10.823 5.88763L9.67697 7.52671C9.42712 7.35201 9.12497 7.25 8.79642 7.25Z',
  d10: 'M8.46969 8.46969C8.67056 8.26882 8.96769 8.19867 9.23719 8.28851L22.2372 12.6218C22.5434 12.7239 22.75 13.0105 22.75 13.3334C22.75 13.6562 22.5434 13.9428 22.2372 14.0449L16.0929 16.0929L14.0449 22.2372C13.9428 22.5434 13.6562 22.75 13.3334 22.75C13.0105 22.75 12.7239 22.5434 12.6218 22.2372L8.28851 9.23719C8.19867 8.96769 8.26882 8.67056 8.46969 8.46969Z',
} as const;

export const IconCursorPointer02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-pointer-02-stroke-rounded IconCursorPointer02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorPointer02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-pointer-02-duotone-rounded IconCursorPointer02DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorPointer02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-pointer-02-twotone-rounded IconCursorPointer02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorPointer02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-pointer-02-solid-rounded IconCursorPointer02SolidRounded"
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

export const IconCursorPointer02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-pointer-02-bulk-rounded IconCursorPointer02BulkRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorPointer02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-pointer-02-stroke-sharp IconCursorPointer02StrokeSharp"
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorPointer02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-pointer-02-solid-sharp IconCursorPointer02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCursorPointer02: TheIconSelfPack = {
  name: 'CursorPointer02',
  StrokeRounded: IconCursorPointer02StrokeRounded,
  DuotoneRounded: IconCursorPointer02DuotoneRounded,
  TwotoneRounded: IconCursorPointer02TwotoneRounded,
  SolidRounded: IconCursorPointer02SolidRounded,
  BulkRounded: IconCursorPointer02BulkRounded,
  StrokeSharp: IconCursorPointer02StrokeSharp,
  SolidSharp: IconCursorPointer02SolidSharp,
};