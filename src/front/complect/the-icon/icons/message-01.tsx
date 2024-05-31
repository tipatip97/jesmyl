import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.5 14.5H15.5M8.5 9.5H12',
  d2: 'M14.1706 20.8905C18.3536 20.6125 21.6856 17.2332 21.9598 12.9909C22.0134 12.1607 22.0134 11.3009 21.9598 10.4707C21.6856 6.22838 18.3536 2.84913 14.1706 2.57107C12.7435 2.47621 11.2536 2.47641 9.8294 2.57107C5.64639 2.84913 2.31441 6.22838 2.04024 10.4707C1.98659 11.3009 1.98659 12.1607 2.04024 12.9909C2.1401 14.536 2.82343 15.9666 3.62791 17.1746C4.09501 18.0203 3.78674 19.0758 3.30021 19.9978C2.94941 20.6626 2.77401 20.995 2.91484 21.2351C3.05568 21.4752 3.37026 21.4829 3.99943 21.4982C5.24367 21.5285 6.08268 21.1757 6.74868 20.6846C7.1264 20.4061 7.31527 20.2668 7.44544 20.2508C7.5756 20.2348 7.83177 20.3403 8.34401 20.5513C8.8044 20.7409 9.33896 20.8579 9.8294 20.8905C11.2536 20.9852 12.7435 20.9854 14.1706 20.8905Z',
  d3: 'M9.77965 1.82273C11.2369 1.72586 12.7601 1.72566 14.2204 1.82273C18.787 2.12629 22.4103 5.81258 22.7082 10.4224C22.7639 11.2848 22.7639 12.1768 22.7082 13.0392C22.4103 17.649 18.787 21.3353 14.2204 21.6389C12.7601 21.7359 11.2369 21.7357 9.77965 21.6389C9.21472 21.6013 8.59978 21.4677 8.05839 21.2448C7.8203 21.1467 7.65868 21.0804 7.54041 21.037C7.45909 21.0929 7.35108 21.1723 7.1938 21.2883C6.40136 21.8726 5.40092 22.2825 3.98117 22.248L3.93544 22.2469C3.66155 22.2403 3.36961 22.2334 3.13152 22.1873C2.84475 22.1318 2.48996 21.9931 2.26791 21.6145C2.02623 21.2025 2.12313 20.7858 2.21688 20.5234C2.30536 20.2757 2.45874 19.9852 2.61542 19.6885L2.6369 19.6478C3.10323 18.7641 3.23314 18.0419 2.98381 17.5604C2.15148 16.304 1.40272 14.7556 1.2918 13.0392C1.23607 12.1768 1.23607 11.2848 1.2918 10.4224C1.58972 5.81258 5.213 2.12629 9.77965 1.82273ZM7.75 9.5C7.75 9.91421 8.08579 10.25 8.5 10.25H12C12.4142 10.25 12.75 9.91421 12.75 9.5C12.75 9.08579 12.4142 8.75 12 8.75H8.5C8.08579 8.75 7.75 9.08579 7.75 9.5ZM7.75 14.5C7.75 14.9142 8.08579 15.25 8.5 15.25H15.5C15.9142 15.25 16.25 14.9142 16.25 14.5C16.25 14.0858 15.9142 13.75 15.5 13.75H8.5C8.08579 13.75 7.75 14.0858 7.75 14.5Z',
  d4: 'M14.2204 1.82273C12.7601 1.72566 11.2369 1.72586 9.77965 1.82273C5.213 2.12629 1.58972 5.81258 1.2918 10.4224C1.23607 11.2848 1.23607 12.1768 1.2918 13.0392C1.40272 14.7556 2.15148 16.304 2.98381 17.5604C3.23314 18.0419 3.10323 18.7641 2.6369 19.6478L2.61542 19.6885C2.45874 19.9852 2.30536 20.2757 2.21688 20.5234C2.12313 20.7858 2.02623 21.2025 2.26791 21.6145C2.48996 21.9931 2.84475 22.1318 3.13152 22.1873C3.36961 22.2334 3.66155 22.2403 3.93544 22.2469L3.98117 22.248C5.40092 22.2825 6.40136 21.8726 7.1938 21.2883C7.35108 21.1723 7.45909 21.0929 7.54041 21.037C7.65868 21.0804 7.8203 21.1467 8.05839 21.2448C8.59978 21.4677 9.21472 21.6013 9.77965 21.6389C11.2369 21.7357 12.7601 21.7359 14.2204 21.6389C18.787 21.3353 22.4103 17.649 22.7082 13.0392C22.7639 12.1768 22.7639 11.2848 22.7082 10.4224C22.4103 5.81258 18.787 2.12629 14.2204 1.82273Z',
  d5: 'M8.5 15.25C8.08579 15.25 7.75 14.9142 7.75 14.5C7.75 14.0858 8.08579 13.75 8.5 13.75H15.5C15.9142 13.75 16.25 14.0858 16.25 14.5C16.25 14.9142 15.9142 15.25 15.5 15.25H8.5Z',
  d6: 'M8.5 10.25C8.08579 10.25 7.75 9.91421 7.75 9.5C7.75 9.08579 8.08579 8.75 8.5 8.75H12C12.4142 8.75 12.75 9.08579 12.75 9.5C12.75 9.91421 12.4142 10.25 12 10.25H8.5Z',
  d7: 'M7.5 14.4736H16.5M7.5 9.48438H13',
  d8: 'M2.00989 21.4487L6.58552 19.9807C8.08688 20.8109 9.78899 20.9937 11.6746 20.9937C18.1751 21.4487 21.9977 17.2443 21.9977 12.2602C22.1047 7.30419 19.9149 2.0807 11.5775 2.46969C4.30503 2.59894 2.00391 7.03781 2.00391 12.0219C2.00391 13.7262 2.35123 15.8127 3.60536 17.452L2.00989 21.4487ZM2.00989 21.4487C2.0025 21.4505 2.0079 21.4554 2.00989 21.4487Z',
  d9: 'M14.1403 1.7722C13.8202 1.74999 13.4484 1.74999 12.7893 1.75H12.7893H11.2103H11.2102C10.5512 1.74999 10.1793 1.74999 9.85925 1.7722C5.25547 2.09176 1.59151 5.75571 1.27196 10.3595C1.24974 10.6796 1.24975 11.0514 1.24976 11.7105V11.7105V11.7895V11.7895C1.24975 12.4486 1.24974 12.8204 1.27196 13.1405C1.38579 14.7804 1.92447 16.3022 2.77896 17.5954L1.47458 22.25L6.43684 20.8113C7.48195 21.3226 8.63806 21.643 9.85925 21.7278C10.1793 21.75 10.5512 21.75 11.2102 21.75H12.7893C13.4484 21.75 13.8202 21.75 14.1403 21.7278C18.744 21.4082 22.408 17.7443 22.7276 13.1405C22.7498 12.8204 22.7498 12.4486 22.7498 11.7895V11.7105C22.7498 11.0514 22.7498 10.6796 22.7276 10.3595C22.408 5.75571 18.744 2.09176 14.1403 1.7722ZM7.49976 13.75H16.4998V15.25H7.49976V13.75ZM7.49976 8.75H12.9998V10.25H7.49976V8.75Z',
} as const;

export const IconMessage01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-01-stroke-rounded IconMessage01StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessage01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-01-duotone-rounded IconMessage01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessage01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-01-twotone-rounded IconMessage01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessage01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-01-solid-rounded IconMessage01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessage01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-01-bulk-rounded IconMessage01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessage01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-01-stroke-sharp IconMessage01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessage01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-01-solid-sharp IconMessage01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMessage01: TheIconSelfPack = {
  name: 'Message01',
  StrokeRounded: IconMessage01StrokeRounded,
  DuotoneRounded: IconMessage01DuotoneRounded,
  TwotoneRounded: IconMessage01TwotoneRounded,
  SolidRounded: IconMessage01SolidRounded,
  BulkRounded: IconMessage01BulkRounded,
  StrokeSharp: IconMessage01StrokeSharp,
  SolidSharp: IconMessage01SolidSharp,
};