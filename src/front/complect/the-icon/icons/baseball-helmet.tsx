import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.5 8.5C18 5 14.9924 3 11.4046 3C6.21058 3 2 7.24151 2 12.4737C2 15.8912 3.79635 18.886 6.48977 20.5523C7.06928 20.9108 7.54664 21 8.22657 21H14.763C16.1727 21 17.3155 19.8807 17.3155 18.5C17.3155 17.1193 16.1727 16 14.763 16C14.3687 16 13.6311 16.1485 13.3534 15.8267C13.2038 15.6533 13.2359 15.4366 13.3 15.0031C13.7388 12.0363 16.2376 11.5 19.4564 11.5C20.2168 11.5 20.9772 10.655 21.5235 9.86188C21.9052 9.30765 22.096 9.03053 21.952 8.76527C21.808 8.5 21.4444 8.5 20.7171 8.5H19.5ZM19.5 8.5H15.0693',
  d2: 'M15.0078 18.5L14.9988 18.5',
  d3: 'M11.4046 3C6.21058 3 2 7.24151 2 12.4737C2 15.8912 3.79635 18.886 6.48977 20.5523C7.06928 20.9108 7.54664 21 8.22657 21H14.763C16.1727 21 17.3155 19.8807 17.3155 18.5C17.3155 17.1193 16.1727 16 14.763 16C14.3687 16 13.6311 16.1485 13.3534 15.8267C13.2038 15.6533 13.2359 15.4366 13.3 15.0031C13.7388 12.0363 16.2376 11.5 19.4564 11.5C20.2168 11.5 20.9772 10.655 21.5235 9.86188C21.9052 9.30765 22.096 9.03053 21.952 8.76527C21.808 8.5 21.4444 8.5 20.7171 8.5H19.5C18 5 14.9924 3 11.4046 3Z',
  d4: 'M19.8137 7.4127C18.0999 4.13559 15.0234 2.25 11.4046 2.25C5.7912 2.25 1.25 6.83248 1.25 12.4737C1.25 16.16 3.18858 19.3919 6.09518 21.1901C6.82546 21.6419 7.45074 21.75 8.22657 21.75H14.763C16.5721 21.75 18.0655 20.3096 18.0655 18.5C18.0655 16.6904 16.5721 15.25 14.763 15.25C14.4082 15.2298 14.2309 15.2197 14.1473 15.1168C14.1367 15.1037 14.1271 15.0897 14.1188 15.0749C14.0538 14.9595 14.0981 14.8253 14.1868 14.5569C14.4647 13.7159 14.9814 13.132 15.6529 12.8186C16.5747 12.3884 17.8601 12.25 19.4564 12.25C20.1079 12.25 20.6614 11.8965 21.0652 11.5419C21.4843 11.1738 21.8513 10.7082 22.1411 10.2873C22.307 10.0467 22.5127 9.74842 22.6186 9.51349C22.749 9.22423 22.8372 8.82379 22.6111 8.40743C22.3801 7.98194 21.9798 7.84367 21.6761 7.79328C21.4138 7.74975 21.0865 7.74987 20.7664 7.74999L20.3601 7.74999C20.1787 7.75 20.088 7.75 20.0163 7.70662C19.9447 7.66324 19.901 7.57972 19.8137 7.4127ZM15.0123 19.5C15.5621 19.5 16.0078 19.0523 16.0078 18.5C16.0078 17.9477 15.5621 17.5 15.0123 17.5H15.0033C14.4535 17.5 14.0078 17.9477 14.0078 18.5C14.0078 19.0523 14.4535 19.5 15.0033 19.5H15.0123Z',
  d5: 'M11.4045 2.25C15.0233 2.25 18.0998 4.13559 19.8135 7.4127C19.9009 7.57972 19.9446 7.66324 20.0162 7.70662C20.0878 7.75 20.1786 7.75 20.36 7.74999L20.7662 7.74999C21.0864 7.74987 21.4137 7.74975 21.6759 7.79328C21.9796 7.84367 22.38 7.98194 22.611 8.40743C22.8371 8.82379 22.7489 9.22423 22.6185 9.51349C22.5125 9.74842 22.3069 10.0467 22.141 10.2873C21.8512 10.7082 21.4842 11.1738 21.0651 11.5419C20.6613 11.8965 20.1078 12.25 19.4563 12.25C17.8599 12.25 16.5746 12.3884 15.6528 12.8186C14.9812 13.132 14.4645 13.7159 14.1867 14.5569C14.098 14.8253 14.0537 14.9595 14.1187 15.0749C14.127 15.0897 14.1365 15.1037 14.1472 15.1168C14.2308 15.2197 14.4081 15.2298 14.7628 15.25C16.572 15.25 18.0654 16.6904 18.0654 18.5C18.0654 20.3096 16.572 21.75 14.7628 21.75H8.22645C7.45061 21.75 6.82534 21.6419 6.09506 21.1901C3.18846 19.3919 1.24988 16.16 1.24988 12.4737C1.24988 6.83248 5.79108 2.25 11.4045 2.25Z',
  d6: 'M16.0077 18.5C16.0077 19.0523 15.562 19.5 15.0122 19.5L15.0032 19.5C14.4534 19.5 14.0077 19.0523 14.0077 18.5C14.0077 17.9477 14.4534 17.5 15.0032 17.5L15.0122 17.5C15.562 17.5 16.0077 17.9477 16.0077 18.5Z',
  d7: 'M14.4571 18.5254H14.4481',
  d8: 'M19.4392 8.53957C17.9231 4.94754 14.9224 3.04004 11.2871 3.04004C6.36242 3.04004 2.03141 7.18684 2.03141 12.0023C1.76074 15.3667 4.06395 19.331 6.98899 21.0224H13.4648C14.468 21.0224 15.5891 21.166 16.3323 20.4887C17.4094 19.5071 18.0561 17.2459 15.6227 16.2299C15.2079 16.0234 14.7084 16.016 14.2455 16.016H12.949C12.949 11.6639 17.4975 11.6582 19.9712 11.5245L21.9133 8.70948C21.9189 8.70139 21.9259 8.69403 21.9334 8.68775C22.1117 8.53957 21.9192 8.53957 21.8402 8.53957H14.9756',
  d9: 'M19.9829 7.75C18.3074 4.26531 15.1458 2.25 11.4046 2.25C5.7912 2.25 1.25 6.83248 1.25 12.4737C1.25 16.1948 3.73105 19.8596 6.60541 21.6378L6.78676 21.75H14.763C16.5721 21.75 18.0655 20.3096 18.0655 18.5C18.0655 16.6904 16.5721 15.25 14.763 15.25H13.8067C13.8881 14.7456 14.0522 14.346 14.2658 14.0244C14.5777 13.5549 15.0304 13.1985 15.6085 12.9304C16.795 12.3801 18.3995 12.25 20 12.25H20.4014L22.624 8.91603C22.7775 8.68588 22.7918 8.38997 22.6613 8.14611C22.5307 7.90224 22.2766 7.75 22 7.75H19.9829ZM14.5074 19.75C15.1937 19.75 15.75 19.1904 15.75 18.5C15.75 17.8096 15.1937 17.25 14.5074 17.25H14.4926C13.8063 17.25 13.25 17.8096 13.25 18.5C13.25 19.1904 13.8063 19.75 14.4926 19.75H14.5074Z',
} as const;

export const IconBaseballHelmetStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baseball-helmet-stroke-rounded IconBaseballHelmetStrokeRounded"
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

export const IconBaseballHelmetDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baseball-helmet-duotone-rounded IconBaseballHelmetDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconBaseballHelmetTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baseball-helmet-twotone-rounded IconBaseballHelmetTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBaseballHelmetSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baseball-helmet-solid-rounded IconBaseballHelmetSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBaseballHelmetBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baseball-helmet-bulk-rounded IconBaseballHelmetBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBaseballHelmetStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baseball-helmet-stroke-sharp IconBaseballHelmetStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconBaseballHelmetSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baseball-helmet-solid-sharp IconBaseballHelmetSolidSharp"
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

export const iconPackOfBaseballHelmet: TheIconSelfPack = {
  name: 'BaseballHelmet',
  StrokeRounded: IconBaseballHelmetStrokeRounded,
  DuotoneRounded: IconBaseballHelmetDuotoneRounded,
  TwotoneRounded: IconBaseballHelmetTwotoneRounded,
  SolidRounded: IconBaseballHelmetSolidRounded,
  BulkRounded: IconBaseballHelmetBulkRounded,
  StrokeSharp: IconBaseballHelmetStrokeSharp,
  SolidSharp: IconBaseballHelmetSolidSharp,
};