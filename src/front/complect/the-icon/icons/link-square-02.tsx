import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.0988 3.00012C7.4498 3.00669 5.53898 3.09629 4.31783 4.31764C3 5.63568 3 7.75704 3 11.9997C3 16.2424 3 18.3638 4.31783 19.6818C5.63565 20.9999 7.75668 20.9999 11.9987 20.9999C16.2407 20.9999 18.3617 20.9999 19.6796 19.6818C20.9007 18.4605 20.9903 16.5493 20.9969 12.8998',
  d2: 'M20.5561 3.49637L11.0488 13.0589M20.5561 3.49637C20.0622 3.00175 16.7345 3.04785 16.031 3.05786M20.5561 3.49637C21.0501 3.99098 21.0041 7.32297 20.9941 8.02738',
  d3: 'M3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12Z',
  d4: 'M11.1002 3C7.45057 3.00657 5.53942 3.09617 4.31806 4.31754C3 5.63559 3 7.75698 3 11.9997C3 16.2425 3 18.3639 4.31806 19.6819C5.63611 21 7.7575 21 12.0003 21C16.243 21 18.3644 21 19.6825 19.6819C20.9038 18.4606 20.9934 16.5494 21 12.8998',
  d5: 'M20.5327 3.44437L11.0234 13.0096M20.5327 3.44437C20.0386 2.94961 16.7102 2.99573 16.0066 3.00574M20.5327 3.44437C21.0267 3.93913 20.9807 7.27206 20.9707 7.97667',
  d6: 'M20.5317 3.44425L11.0244 13.0068M20.5317 3.44425C20.0378 2.94963 16.7101 2.99573 16.0066 3.00574M20.5317 3.44425C21.0257 3.93886 20.9797 7.27085 20.9697 7.97526',
  d7: 'M12.1002 2.9982C12.1012 3.55048 11.6543 3.999 11.102 4C9.26069 4.00331 7.95244 4.02946 6.95832 4.19037C5.99343 4.34655 5.43598 4.61383 5.02517 5.02464C4.58291 5.4669 4.30569 6.08056 4.15584 7.19512C4.00213 8.33845 4 9.85009 4 11.9997C4 14.1494 4.00212 15.661 4.15584 16.8044C4.30569 17.9189 4.5829 18.5326 5.02516 18.9748C5.46742 19.4171 6.08108 19.6943 7.19564 19.8442C8.33897 19.9979 9.85061 20 12.0003 20C14.1499 20 15.6616 19.9979 16.8049 19.8442C17.9194 19.6943 18.5331 19.4171 18.9754 18.9748C19.3862 18.564 19.6534 18.0066 19.8096 17.0417C19.9705 16.0476 19.9967 14.7393 20 12.898C20.001 12.3457 20.4495 11.8988 21.0018 11.8998C21.5541 11.9008 22.001 12.3493 22 12.9016C21.9967 14.7099 21.9748 16.182 21.7839 17.3613C21.5883 18.5697 21.2001 19.5785 20.3896 20.3891C19.5138 21.2648 18.4077 21.6467 17.0714 21.8263C15.7793 22 14.1328 22 12.0744 22H11.9262C9.86771 22 8.22126 22 6.92915 21.8263C5.59281 21.6467 4.48675 21.2648 3.61095 20.389C2.73515 19.5133 2.35334 18.4072 2.17367 17.0709C1.99996 15.7787 1.99998 14.1323 2 12.0738L2 11.9257C1.99998 9.86718 1.99996 8.22073 2.17368 6.92862C2.35334 5.59229 2.73516 4.48623 3.61095 3.61043C4.4215 2.79988 5.43031 2.41167 6.63875 2.21607C7.81796 2.0252 9.29011 2.00326 11.0984 2C11.6507 1.99901 12.0992 2.44592 12.1002 2.9982Z',
  d8: 'M20.3023 2.11815C19.2561 1.93287 17.5062 2.00814 16.6278 2.05969C15.4682 2.12775 14.9931 3.51657 15.7786 4.3021L17.0302 5.55371L14.3003 8.26282C14.2412 8.32154 14.1907 8.38574 14.149 8.45379L10.2945 12.2913C9.90307 12.681 9.90167 13.3142 10.2913 13.7055C10.681 14.0969 11.3142 14.0983 11.7055 13.7087L15.6707 9.76105C15.6916 9.7434 15.712 9.72476 15.7317 9.70515L18.4671 6.99058L19.698 8.22141C20.4836 9.007 21.8724 8.53179 21.9404 7.37214C21.9919 6.49371 22.067 4.74418 21.882 3.69821C21.8141 3.31484 21.6424 2.97543 21.3948 2.70812L21.3861 2.69873C21.1066 2.40101 20.7322 2.19428 20.3023 2.11815Z',
  d9: 'M12 3H3V21H21V12',
  d10: 'M10.9883 13.0016L20.5838 3.41584M20.9998 8.99185L21.0001 3H15.0108',
  d11: 'M2 3C2 2.44772 2.44772 2 3 2H12V4H4V20H20V12H22V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3Z',
  d12: 'M15.0001 2H22.0001V9H20.0001V5.41421L11.7072 13.7071L10.293 12.2929L18.5859 4H15.0001V2Z',
} as const;

export const IconLinkSquare02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="link-square-02-stroke-rounded IconLinkSquare02StrokeRounded"
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

export const IconLinkSquare02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="link-square-02-duotone-rounded IconLinkSquare02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconLinkSquare02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="link-square-02-twotone-rounded IconLinkSquare02TwotoneRounded"
    >
      <path 
        d={d.d4} 
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

export const IconLinkSquare02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="link-square-02-solid-rounded IconLinkSquare02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconLinkSquare02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="link-square-02-bulk-rounded IconLinkSquare02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconLinkSquare02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="link-square-02-stroke-sharp IconLinkSquare02StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconLinkSquare02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="link-square-02-solid-sharp IconLinkSquare02SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfLinkSquare02: TheIconSelfPack = {
  name: 'LinkSquare02',
  StrokeRounded: IconLinkSquare02StrokeRounded,
  DuotoneRounded: IconLinkSquare02DuotoneRounded,
  TwotoneRounded: IconLinkSquare02TwotoneRounded,
  SolidRounded: IconLinkSquare02SolidRounded,
  BulkRounded: IconLinkSquare02BulkRounded,
  StrokeSharp: IconLinkSquare02StrokeSharp,
  SolidSharp: IconLinkSquare02SolidSharp,
};