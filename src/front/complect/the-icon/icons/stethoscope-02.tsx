import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.5 3.5H4.5C3.94772 3.5 3.5 3.94772 3.5 4.5V8C3.5 11.0376 5.96243 13.5 9 13.5C12.0376 13.5 14.5 11.0376 14.5 8V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H11.5',
  d2: 'M18.5 15.5V16.75C18.5 19.3734 16.3734 21.5 13.75 21.5C11.1266 21.5 9 19.3734 9 16.75V13.5',
  d3: 'M11.5 2.5V4.5',
  d4: 'M6.5 2.5V4.5',
  d5: 'M20.5 13.5C20.5 14.6046 19.6046 15.5 18.5 15.5C17.3954 15.5 16.5 14.6046 16.5 13.5C16.5 12.3954 17.3954 11.5 18.5 11.5C19.6046 11.5 20.5 12.3954 20.5 13.5Z',
  d6: 'M2.75 4.67894C2.75 3.60067 3.62187 2.72656 4.69737 2.72656H6.64474C7.18249 2.72656 7.61842 3.16362 7.61842 3.70275C7.61842 4.24189 7.18249 4.67894 6.64474 4.67894H4.69737V8.09561C4.69737 10.5217 6.65907 12.4885 9.07895 12.4885C11.4988 12.4885 13.4605 10.5217 13.4605 8.09561V4.67894H11.5132C10.9754 4.67894 10.5395 4.24189 10.5395 3.70275C10.5395 3.16362 10.9754 2.72656 11.5132 2.72656H13.4605C14.536 2.72656 15.4079 3.60067 15.4079 4.67894V8.09561C15.4079 11.268 13.0857 13.8967 10.0526 14.3662V16.6373C10.0526 18.659 11.6874 20.298 13.7039 20.298C15.7205 20.298 17.3553 18.659 17.3553 16.6373V15.417C17.3553 14.8779 17.7912 14.4408 18.3289 14.4408C18.8667 14.4408 19.3026 14.8779 19.3026 15.417V16.6373C19.3026 19.7373 16.796 22.2504 13.7039 22.2504C10.6119 22.2504 8.10526 19.7373 8.10526 16.6373V14.3662C5.07215 13.8967 2.75 11.268 2.75 8.09561V4.67894Z',
  d7: 'M11.5127 1.75C12.0505 1.75 12.4864 2.18706 12.4864 2.72619V4.67857C12.4864 5.21771 12.0505 5.65476 11.5127 5.65476C10.975 5.65476 10.5391 5.21771 10.5391 4.67857V2.72619C10.5391 2.18706 10.975 1.75 11.5127 1.75Z',
  d8: 'M6.64458 1.75C7.18233 1.75 7.61827 2.18706 7.61827 2.72619V4.67857C7.61827 5.21771 7.18233 5.65476 6.64458 5.65476C6.10683 5.65476 5.6709 5.21771 5.6709 4.67857V2.72619C5.6709 2.18706 6.10683 1.75 6.64458 1.75Z',
  d9: 'M15.4082 13.4647C15.4082 11.8473 16.716 10.5361 18.3293 10.5361C19.9425 10.5361 21.2503 11.8473 21.2503 13.4647C21.2503 15.0821 19.9425 16.3933 18.3293 16.3933C16.716 16.3933 15.4082 15.0821 15.4082 13.4647Z',
  d10: 'M6.5 3.5H3.5V8C3.5 11.0376 5.96243 13.5 9 13.5C12.0376 13.5 14.5 11.0376 14.5 8V3.5H11.5',
  d11: 'M2.75 2.72656H7.61842V4.67894H4.69737V8.09561C4.69737 10.5217 6.65907 12.4885 9.07895 12.4885C11.4988 12.4885 13.4605 10.5217 13.4605 8.09561V4.67894H10.5395V2.72656H15.4079V8.09561C15.4079 11.6 12.5743 14.4408 9.07895 14.4408C5.58357 14.4408 2.75 11.6 2.75 8.09561V2.72656Z',
  d12: 'M10.0528 12.4883V16.6371C10.0528 18.6588 11.6876 20.2978 13.7042 20.2978C15.7207 20.2978 17.3555 18.6588 17.3555 16.6371V14.4407H19.3028V16.6371C19.3028 19.7371 16.7962 22.2502 13.7042 22.2502C10.6121 22.2502 8.10547 19.7371 8.10547 16.6371V12.4883H10.0528Z',
  d13: 'M12.4864 1.75V5.65476H10.5391V1.75H12.4864Z',
  d14: 'M7.61827 1.75V5.65476H5.6709V1.75H7.61827Z',
} as const;

export const IconStethoscope02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stethoscope-02-stroke-rounded IconStethoscope02StrokeRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStethoscope02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stethoscope-02-duotone-rounded IconStethoscope02DuotoneRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStethoscope02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stethoscope-02-twotone-rounded IconStethoscope02TwotoneRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStethoscope02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stethoscope-02-solid-rounded IconStethoscope02SolidRounded"
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

export const IconStethoscope02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stethoscope-02-bulk-rounded IconStethoscope02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconStethoscope02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stethoscope-02-stroke-sharp IconStethoscope02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconStethoscope02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stethoscope-02-solid-sharp IconStethoscope02SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStethoscope02: TheIconSelfPack = {
  name: 'Stethoscope02',
  StrokeRounded: IconStethoscope02StrokeRounded,
  DuotoneRounded: IconStethoscope02DuotoneRounded,
  TwotoneRounded: IconStethoscope02TwotoneRounded,
  SolidRounded: IconStethoscope02SolidRounded,
  BulkRounded: IconStethoscope02BulkRounded,
  StrokeSharp: IconStethoscope02StrokeSharp,
  SolidSharp: IconStethoscope02SolidSharp,
};