import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.5 18H18.177C17.8491 18 17.6852 18 17.5582 17.914C17.4312 17.8281 17.3703 17.6758 17.2486 17.3714L16.7514 16.1286C16.6297 15.8242 16.5688 15.6719 16.4418 15.586C16.3148 15.5 16.1509 15.5 15.823 15.5H13.5C13.0286 15.5 12.7929 15.5 12.6464 15.3536C12.5 15.2071 12.5 14.9714 12.5 14.5V10.5M12.5 8V10.5M12.5 10.5H16.3889',
  d2: 'M12.5 6C11.3954 6 10.5 5.10457 10.5 4C10.5 2.89543 11.3954 2 12.5 2C13.6046 2 14.5 2.89543 14.5 4C14.5 5.10457 13.6046 6 12.5 6Z',
  d3: 'M9.55796 10C6.68735 10.4794 4.5 12.9645 4.5 15.9582C4.5 19.295 7.21743 22 10.5696 22C12.6003 22 14.3982 21.0072 15.5 19.4826',
  d4: 'M12.5 7.375C13.0523 7.375 13.5 7.82272 13.5 8.375V9.37488H16.3889C16.9412 9.37488 17.3889 9.82259 17.3889 10.3749C17.3889 10.9272 16.9412 11.3749 16.3889 11.3749H13.5V14.3749L15.8515 14.3749C15.9894 14.3748 16.1628 14.3747 16.3169 14.3916C16.5065 14.4124 16.756 14.4659 17.0025 14.6328C17.249 14.7997 17.3913 15.0115 17.481 15.1797C17.554 15.3166 17.6183 15.4776 17.6694 15.6057L18.1771 16.8749H19.5C20.0523 16.8749 20.5 17.3226 20.5 17.8749C20.5 18.4272 20.0523 18.8749 19.5 18.8749L18.1486 18.8749C18.0107 18.875 17.8373 18.8751 17.6831 18.8582C17.4936 18.8373 17.2441 18.7839 16.9976 18.617C16.7511 18.4501 16.6088 18.2383 16.5191 18.0701C16.4461 17.9332 16.3818 17.7722 16.3307 17.6441L15.823 16.3749L13.4607 16.3749H13.4606C13.2608 16.375 13.0228 16.3752 12.8182 16.3477C12.5711 16.3144 12.2294 16.2255 11.9394 15.9355C11.6494 15.6455 11.5605 15.3038 11.5273 15.0568C11.4997 14.8521 11.4999 14.6141 11.5 14.4143L11.5 8.375C11.5 7.82272 11.9477 7.375 12.5 7.375Z',
  d5: 'M9.75 3.875C9.75 2.35622 10.9812 1.125 12.5 1.125C14.0188 1.125 15.25 2.35622 15.25 3.875C15.25 5.39378 14.0188 6.625 12.5 6.625C10.9812 6.625 9.75 5.39378 9.75 3.875Z',
  d6: 'M10.5443 9.71044C10.6353 10.2552 10.2674 10.7705 9.72268 10.8615C7.32283 11.2623 5.5 13.3398 5.5 15.8334C5.5 18.6136 7.76538 20.8752 10.5696 20.8752C12.2669 20.8752 13.7683 20.0467 14.6895 18.772C15.013 18.3244 15.6381 18.2238 16.0857 18.5473C16.5334 18.8707 16.634 19.4959 16.3105 19.9435C15.0281 21.718 12.9338 22.8752 10.5696 22.8752C6.66948 22.8752 3.5 19.7268 3.5 15.8334C3.5 12.3396 6.05187 9.44683 9.39324 8.88882C9.93798 8.79784 10.4533 9.1657 10.5443 9.71044Z',
  d7: 'M19.5 18H17.5L16 15.5H12.5V10.5M12.5 8V10.5M12.5 10.5H17',
  d8: 'M12 7.5H14V9H17.5V11H14V14H16.5C16.8513 14 17.1768 14.1843 17.3575 14.4855L18.5662 16.5H20V18.5H18C17.6487 18.5 17.3232 18.3157 17.1425 18.0145L15.9338 16H13C12.4477 16 12 15.5523 12 15V7.5Z',
  d9: 'M10.5 4C10.5 2.61929 11.6193 1.5 13 1.5C14.3807 1.5 15.5 2.61929 15.5 4C15.5 5.38071 14.3807 6.5 13 6.5C11.6193 6.5 10.5 5.38071 10.5 4Z',
  d10: 'M4 15.4582C4 11.9645 6.55187 9.07168 9.89324 8.51367L10.2227 10.4864C7.82283 10.8871 6 12.9646 6 15.4582C6 18.2384 8.26538 20.5 11.0696 20.5C12.7669 20.5 14.2683 19.6715 15.1895 18.3969L16.8105 19.5683C15.5281 21.3429 13.4338 22.5 11.0696 22.5C7.16948 22.5 4 19.3516 4 15.4582Z',
} as const;

export const IconDisability01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="disability-01-stroke-rounded IconDisability01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconDisability01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="disability-01-duotone-rounded IconDisability01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconDisability01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="disability-01-twotone-rounded IconDisability01TwotoneRounded"
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

export const IconDisability01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="disability-01-solid-rounded IconDisability01SolidRounded"
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

export const IconDisability01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="disability-01-bulk-rounded IconDisability01BulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDisability01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="disability-01-stroke-sharp IconDisability01StrokeSharp"
    >
      <path 
        d={d.d7} 
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

export const IconDisability01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="disability-01-solid-sharp IconDisability01SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDisability01: TheIconSelfPack = {
  name: 'Disability01',
  StrokeRounded: IconDisability01StrokeRounded,
  DuotoneRounded: IconDisability01DuotoneRounded,
  TwotoneRounded: IconDisability01TwotoneRounded,
  SolidRounded: IconDisability01SolidRounded,
  BulkRounded: IconDisability01BulkRounded,
  StrokeSharp: IconDisability01StrokeSharp,
  SolidSharp: IconDisability01SolidSharp,
};