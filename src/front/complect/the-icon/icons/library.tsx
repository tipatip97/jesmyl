import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 7C2 5.59987 2 4.8998 2.27248 4.36502C2.51217 3.89462 2.89462 3.51217 3.36502 3.27248C3.8998 3 4.59987 3 6 3C7.40013 3 8.1002 3 8.63498 3.27248C9.10538 3.51217 9.48783 3.89462 9.72752 4.36502C10 4.8998 10 5.59987 10 7V17C10 18.4001 10 19.1002 9.72752 19.635C9.48783 20.1054 9.10538 20.4878 8.63498 20.7275C8.1002 21 7.40013 21 6 21C4.59987 21 3.8998 21 3.36502 20.7275C2.89462 20.4878 2.51217 20.1054 2.27248 19.635C2 19.1002 2 18.4001 2 17V7Z',
  d2: 'M6 17H6.00898',
  d3: 'M2 7H10',
  d4: 'M11.4486 8.26843C11.0937 6.93838 10.9163 6.27336 11.0385 5.69599C11.146 5.18812 11.4108 4.72747 11.7951 4.38005C12.2319 3.98508 12.8942 3.80689 14.2187 3.4505C15.5432 3.09412 16.2055 2.91593 16.7804 3.03865C17.2862 3.1466 17.7449 3.41256 18.0909 3.79841C18.4842 4.23706 18.6617 4.90209 19.0166 6.23213L21.5514 15.7316C21.9063 17.0616 22.0837 17.7266 21.9615 18.304C21.854 18.8119 21.5892 19.2725 21.2049 19.62C20.7681 20.0149 20.1058 20.1931 18.7813 20.5495C17.4568 20.9059 16.7945 21.0841 16.2196 20.9614C15.7138 20.8534 15.2551 20.5874 14.9091 20.2016C14.5158 19.7629 14.3383 19.0979 13.9834 17.7679L11.4486 8.26843Z',
  d5: 'M17.7812 16.6953L17.7899 16.693',
  d6: 'M12 8.00019L18.5001 6',
  d7: 'M10 17V7H2V17C2 18.4001 2 19.1002 2.27248 19.635C2.51217 20.1054 2.89462 20.4878 3.36502 20.7275C3.8998 21 4.59987 21 6 21C7.40013 21 8.1002 21 8.63498 20.7275C9.10538 20.4878 9.48783 20.1054 9.72752 19.635C10 19.1002 10 18.4001 10 17Z',
  d8: 'M21.552 15.7316L19.0172 6.23213L18.9552 6L11.4492 8.26843L13.984 17.7679C14.3389 19.0979 14.5164 19.7629 14.9097 20.2016C15.2557 20.5874 15.7144 20.8534 16.2202 20.9614C16.7951 21.0841 17.4574 20.9059 18.7819 20.5495C20.1064 20.1931 20.7687 20.0149 21.2055 19.62C21.5897 19.2725 21.8546 18.8119 21.9621 18.304C22.0843 17.7266 21.9069 17.0616 21.552 15.7316L21.552 15.7316Z',
  d9: 'M6.03143 2.25C6.7048 2.24999 7.25551 2.24998 7.70307 2.28655C8.16633 2.3244 8.58473 2.40514 8.97547 2.60423C9.587 2.91582 10.0842 3.413 10.3958 4.02453C10.5949 4.41527 10.6756 4.83367 10.7134 5.29693C10.75 5.74448 10.75 6.29518 10.75 6.96853V6.96856V17.0314V17.0315C10.75 17.7048 10.75 18.2555 10.7134 18.7031C10.6756 19.1663 10.5949 19.5847 10.3958 19.9755C10.0842 20.587 9.587 21.0842 8.97547 21.3958C8.58473 21.5949 8.16633 21.6756 7.70307 21.7134C7.25551 21.75 6.70481 21.75 6.03144 21.75H5.96856C5.29519 21.75 4.74449 21.75 4.29693 21.7134C3.83367 21.6756 3.41527 21.5949 3.02453 21.3958C2.413 21.0842 1.91582 20.587 1.60423 19.9755C1.40514 19.5847 1.3244 19.1663 1.28655 18.7031C1.24998 18.2555 1.24999 17.7048 1.25 17.0314V17.0314V6.96858V6.96857C1.24999 6.2952 1.24998 5.74449 1.28655 5.29693C1.3244 4.83367 1.40514 4.41527 1.60423 4.02453C1.91582 3.413 2.413 2.91582 3.02453 2.60423C3.41527 2.40514 3.83367 2.3244 4.29693 2.28655C4.74449 2.24998 5.2952 2.24999 5.96857 2.25H5.96858H6.03142H6.03143ZM5 17C5 16.4477 5.44772 16 6 16H6.00898C6.56127 16 7.00898 16.4477 7.00898 17C7.00898 17.5523 6.56127 18 6.00898 18H6C5.44772 18 5 17.5523 5 17ZM8.7525 6.25C9.02683 6.25 9.24967 6.47103 9.24992 6.74535L9.25 7.25C9.25 7.52614 9.02614 7.75 8.75 7.75H3.25C2.97386 7.75 2.75 7.52614 2.75 7.25L2.75008 6.74535C2.75033 6.47103 2.97318 6.25 3.2475 6.25H8.7525Z',
  d10: 'M15.6456 2.32715C16.0946 2.24499 16.5135 2.21478 16.937 2.30516C17.5983 2.44631 18.1976 2.79397 18.6493 3.29771C18.9383 3.61998 19.1213 3.99851 19.2747 4.42946C19.4229 4.8457 19.5626 5.36916 19.7331 6.00851L19.7332 6.00853L19.7332 6.00856L19.7332 6.00857L22.284 15.5683L22.284 15.5683L22.2841 15.5684C22.4547 16.2078 22.5944 16.7312 22.6733 17.1661C22.755 17.6164 22.7849 18.0357 22.6952 18.4593C22.5551 19.1215 22.2097 19.7226 21.7079 20.1763C21.3867 20.4667 21.0091 20.6508 20.5794 20.8051C20.1646 20.954 19.6432 21.0943 19.0068 21.2655L19.0067 21.2655L19.0066 21.2655L19.0065 21.2656L18.9457 21.2819C18.3093 21.4532 17.7877 21.5935 17.3544 21.6728C16.9054 21.755 16.4864 21.7852 16.063 21.6948C15.4017 21.5537 14.8024 21.206 14.3507 20.7023C14.0617 20.38 13.8787 20.0015 13.7253 19.5705C13.5771 19.1543 13.4374 18.6309 13.2669 17.9916L13.2668 17.9915L13.2668 17.9914L13.2668 17.9914L10.7159 8.43159C10.5453 7.79221 10.4056 7.26874 10.3267 6.83388C10.245 6.38359 10.2151 5.96423 10.3047 5.54067C10.4449 4.87851 10.7903 4.27739 11.2921 3.82372C11.6133 3.53327 11.9908 3.34917 12.4206 3.1949C12.8354 3.04599 13.357 2.90566 13.9935 2.73441L14.0542 2.71808C14.6906 2.54682 15.2122 2.40647 15.6456 2.32715ZM16.8156 16.9528C16.6726 16.4193 16.9892 15.871 17.5227 15.7281L17.5314 15.7257C18.0648 15.5828 18.6132 15.8994 18.7561 16.4328C18.899 16.9663 18.5825 17.5146 18.049 17.6576L18.0403 17.6599C17.5069 17.8028 16.9585 17.4863 16.8156 16.9528ZM18.1391 5.85617C18.1859 6.02786 18.2364 6.21694 18.2923 6.4264C18.3506 6.64479 18.2258 6.87017 18.0098 6.93664L12.8318 8.52996C12.5608 8.61335 12.2748 8.45494 12.2017 8.18098L12.1737 8.07597C12.1372 7.93918 12.103 7.81106 12.0712 7.69067C12.0032 7.43347 12.1515 7.16991 12.4057 7.09167L17.5187 5.51833C17.7847 5.43648 18.0659 5.58767 18.1391 5.85617Z',
  d11: 'M15.6456 2.32715C16.0946 2.24499 16.5135 2.21478 16.937 2.30516C17.5983 2.44631 18.1976 2.79397 18.6493 3.29771C18.9383 3.61998 19.1213 3.99851 19.2747 4.42946C19.4229 4.84571 19.5626 5.36919 19.7332 6.00856L19.7332 6.00857L22.284 15.5683L22.284 15.5683C22.4547 16.2077 22.5944 16.7312 22.6733 17.1661C22.755 17.6164 22.7849 18.0357 22.6952 18.4593C22.5551 19.1215 22.2097 19.7226 21.7079 20.1763C21.3867 20.4667 21.0091 20.6508 20.5794 20.8051C20.1646 20.954 19.643 21.0943 19.0066 21.2655L19.0065 21.2656L18.9457 21.2819C18.3093 21.4532 17.7877 21.5935 17.3544 21.6728C16.9054 21.755 16.4864 21.7852 16.063 21.6948C15.4017 21.5537 14.8024 21.206 14.3507 20.7023C14.0617 20.38 13.8787 20.0015 13.7253 19.5705C13.5771 19.1543 13.4374 18.6308 13.2668 17.9914L13.2668 17.9914L10.7159 8.43159C10.5453 7.79221 10.4056 7.26874 10.3267 6.83388C10.245 6.38359 10.2151 5.96423 10.3047 5.54067C10.4449 4.87851 10.7903 4.27739 11.2921 3.82372C11.6133 3.53327 11.9908 3.34917 12.4206 3.1949C12.8354 3.04599 13.357 2.90566 13.9935 2.73441L14.0542 2.71808C14.6906 2.54682 15.2122 2.40647 15.6456 2.32715Z',
  d12: 'M16.8156 16.9528C16.6726 16.4193 16.9892 15.871 17.5227 15.7281L17.5314 15.7257C18.0648 15.5828 18.6132 15.8994 18.7561 16.4328C18.899 16.9663 18.5825 17.5146 18.049 17.6576L18.0403 17.6599C17.5069 17.8028 16.9585 17.4863 16.8156 16.9528Z',
  d13: 'M18.2923 6.4264C18.2364 6.21694 18.1859 6.02786 18.1391 5.85617C18.0659 5.58767 17.7847 5.43648 17.5187 5.51833L12.4057 7.09167C12.1515 7.16991 12.0032 7.43347 12.0712 7.69067C12.103 7.81106 12.1372 7.93918 12.1737 8.07597L12.2017 8.18098C12.2748 8.45494 12.5608 8.61335 12.8318 8.52996L18.0098 6.93664C18.2258 6.87017 18.3506 6.64479 18.2923 6.4264Z',
  d14: 'M10.0001 21V3H2.00008L2 21H10.0001Z',
  d15: 'M21.0003 19.7957L18.2959 2L10.3867 3.20195L13.091 20.9976L21.0003 19.7957Z',
  d16: 'M18.9717 6.44873L11.0625 7.65068',
  d17: 'M16.502 16.5L16.5106 16.4977',
  d18: 'M1.75008 3.5C1.75008 3.08578 2.08587 2.75 2.50008 2.75H10.5001C10.9143 2.75 11.2501 3.08579 11.2501 3.5V6.75H1.75006L1.75008 3.5ZM1.75006 8.25H11.2501V21.5C11.2501 21.9142 10.9143 22.25 10.5001 22.25H2.5C2.30109 22.25 2.11032 22.171 1.96967 22.0303C1.82902 21.8897 1.75 21.6989 1.75 21.5L1.75006 8.25ZM6.5 16.5C5.94772 16.5 5.5 16.9477 5.5 17.5C5.5 18.0523 5.94772 18.5 6.5 18.5H6.50898C7.06127 18.5 7.50898 18.0523 7.50898 17.5C7.50898 16.9477 7.06127 16.5 6.50898 16.5H6.5Z',
  d19: 'M20.1004 6.09176L12.5 7.33534V2.69828L18.6833 1.75862C19.0928 1.69638 19.4752 1.97791 19.5374 2.38742L20.1004 6.09176ZM12.8496 21.6104L12.5 19.3101V8.85528L20.3257 7.57483L22.2418 20.1831C22.304 20.5926 22.0225 20.975 21.613 21.0373L13.7037 22.2392C13.5071 22.2691 13.3066 22.2197 13.1464 22.1017C12.9862 21.9838 12.8794 21.8071 12.8496 21.6104ZM16.7433 16.0342C16.2098 16.1771 15.8932 16.7254 16.0362 17.2589C16.1791 17.7924 16.7274 18.1089 17.2609 17.966L17.2696 17.9637C17.803 17.8207 18.1196 17.2724 17.9767 16.7389C17.8337 16.2055 17.2854 15.8889 16.7519 16.0318L16.7433 16.0342Z',
} as const;

export const IconLibraryStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="library-stroke-rounded IconLibraryStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLibraryDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="library-duotone-rounded IconLibraryDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLibraryTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="library-twotone-rounded IconLibraryTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLibrarySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="library-solid-rounded IconLibrarySolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconLibraryBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="library-bulk-rounded IconLibraryBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d13} 
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

export const IconLibraryStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="library-stroke-sharp IconLibraryStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
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
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLibrarySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="library-solid-sharp IconLibrarySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLibrary: TheIconSelfPack = {
  name: 'Library',
  StrokeRounded: IconLibraryStrokeRounded,
  DuotoneRounded: IconLibraryDuotoneRounded,
  TwotoneRounded: IconLibraryTwotoneRounded,
  SolidRounded: IconLibrarySolidRounded,
  BulkRounded: IconLibraryBulkRounded,
  StrokeSharp: IconLibraryStrokeSharp,
  SolidSharp: IconLibrarySolidSharp,
};