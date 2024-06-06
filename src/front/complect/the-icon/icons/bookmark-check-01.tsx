import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z',
  d2: 'M10 13.7143C10 13.7143 11 14.2357 11.5 15C11.5 15 13 12 15 11',
  d3: 'M4 7H20',
  d4: 'M4.02775 7H19.9723C20 7.77051 20 8.66411 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C18.0846 22.4624 16.178 21.0527 14.7467 19.9944C14.3032 19.6665 13.9054 19.3723 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C10.0946 19.3723 9.69675 19.6665 9.25325 19.9944C7.82195 21.0527 5.91543 22.4624 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808V9.70753C4 8.66411 4 7.77051 4.02775 7Z',
  d5: 'M12 1.25004C13.8393 1.25002 15.348 1.25001 16.4854 1.39735C17.6528 1.54857 18.5995 1.86676 19.3488 2.58867C20.102 3.31435 20.4375 4.23747 20.5963 5.37528C20.6164 5.51923 20.6339 5.66837 20.649 5.82284C20.6684 6.02008 20.6781 6.1187 20.6186 6.18437C20.559 6.25004 20.458 6.25004 20.2558 6.25004H3.74407C3.54194 6.25004 3.44087 6.25004 3.38134 6.18437C3.3218 6.1187 3.3315 6.02008 3.35088 5.82284C3.36605 5.66837 3.38352 5.51923 3.4036 5.37528C3.56238 4.23747 3.89795 3.31435 4.65117 2.58867C5.40047 1.86676 6.34707 1.54857 7.51453 1.39735C8.65196 1.25001 10.1606 1.25002 12 1.25004ZM20.7457 8.14382V8.14384C20.75 8.61358 20.75 9.1148 20.75 9.64909V9.64922V9.64935V9.64949V18.0459C20.75 19.1434 20.75 20.0553 20.6446 20.7405C20.5356 21.4495 20.2814 22.1396 19.5804 22.5139C18.9552 22.8477 18.2676 22.7799 17.6845 22.6028C17.0948 22.4238 16.4954 22.0989 15.9466 21.7521C15.3926 21.402 14.8493 21.0029 14.377 20.6538C13.9142 20.3117 13.4869 19.9959 13.2031 19.825C12.8035 19.5844 12.5512 19.4335 12.3467 19.3371C12.1579 19.2482 12.0663 19.2341 12 19.2341C11.9337 19.2341 11.842 19.2482 11.6532 19.3371C11.4487 19.4335 11.1964 19.5844 10.7969 19.825C10.513 19.9959 10.0858 20.3117 9.62295 20.6538C9.15061 21.0029 8.60734 21.402 8.05331 21.7521C7.50449 22.0989 6.90509 22.4238 6.31539 22.6028C5.73236 22.7799 5.04471 22.8477 4.41953 22.5139C3.71852 22.1396 3.46433 21.4495 3.35528 20.7405C3.24989 20.0553 3.24992 19.1434 3.24995 18.0459L3.24996 9.64947C3.24995 9.11504 3.24995 8.61369 3.25419 8.14384C3.25587 7.95856 3.2567 7.86592 3.31517 7.80798C3.37364 7.75004 3.46669 7.75004 3.65279 7.75004H3.6528H20.3471C20.5332 7.75004 20.6263 7.75004 20.6847 7.80798C20.7432 7.86592 20.7441 7.95856 20.7457 8.14382ZM15.3356 11.921C15.706 11.7357 15.8562 11.2852 15.671 10.9148C15.4857 10.5443 15.0352 10.3941 14.6647 10.5793C13.4946 11.1644 12.5317 12.2906 11.8899 13.1892C11.6851 13.4758 11.5061 13.7493 11.3566 13.9901C11.232 13.8844 11.1111 13.7917 11.002 13.7129C10.8249 13.5848 10.5462 13.4033 10.3469 13.2994C9.97964 13.1079 9.52665 13.2504 9.33513 13.6177C9.14382 13.9846 9.28581 14.437 9.65224 14.6289L9.65208 14.6288C9.73912 14.6809 9.98792 14.8307 10.1233 14.9285C10.4055 15.1325 10.6957 15.3904 10.8725 15.6608C11.0195 15.8855 11.2754 16.0144 11.5435 15.9989C11.8115 15.9834 12.0509 15.8256 12.171 15.5855C12.2124 15.5081 12.3336 15.282 12.4148 15.1416C12.5778 14.86 12.815 14.4747 13.1105 14.0611C13.7186 13.2097 14.5057 12.3359 15.3356 11.921Z',
  d6: 'M20.7458 8.1438C20.7441 7.95852 20.7433 7.86588 20.6848 7.80794C20.6263 7.75 20.5333 7.75 20.3472 7.75H3.65284C3.46674 7.75 3.37368 7.75 3.31522 7.80794C3.25675 7.86588 3.25591 7.95852 3.25424 8.1438C3.24999 8.61365 3.25 9.115 3.25001 9.64943L3.25 18.0458C3.24996 19.1433 3.24993 20.0553 3.35533 20.7405C3.46438 21.4495 3.71857 22.1395 4.41958 22.5139C5.04476 22.8477 5.7324 22.7798 6.31544 22.6028C6.90514 22.4238 7.50454 22.0989 8.05335 21.7521C8.60739 21.402 9.15065 21.0029 9.623 20.6538C10.0858 20.3117 10.5131 19.9958 10.7969 19.8249C11.1965 19.5843 11.4488 19.4335 11.6533 19.3371C11.842 19.2482 11.9337 19.234 12 19.234C12.0663 19.234 12.158 19.2482 12.3467 19.3371C12.5513 19.4335 12.8035 19.5843 13.2031 19.8249C13.4869 19.9958 13.9142 20.3117 14.377 20.6538C14.8494 21.0029 15.3926 21.402 15.9467 21.7521C16.4955 22.0989 17.0949 22.4238 17.6846 22.6028C18.2676 22.7798 18.9553 22.8477 19.5804 22.5139C20.2814 22.1395 20.5356 21.4495 20.6447 20.7405C20.7501 20.0553 20.75 19.1434 20.75 18.0458V9.64945C20.75 9.11501 20.75 8.61366 20.7458 8.1438Z',
  d7: 'M16.4853 1.39731C15.3479 1.24998 13.8392 1.24999 11.9999 1.25C10.1606 1.24999 8.65191 1.24998 7.51448 1.39731C6.34703 1.54853 5.40042 1.86672 4.65112 2.58863C3.89791 3.31431 3.56234 4.23743 3.40356 5.37525C3.38347 5.51919 3.36601 5.66833 3.35083 5.8228C3.33145 6.02004 3.32176 6.11866 3.38129 6.18433C3.44083 6.25 3.54189 6.25 3.74402 6.25H20.2558C20.4579 6.25 20.559 6.25 20.6185 6.18433C20.6781 6.11866 20.6684 6.02004 20.649 5.8228C20.6338 5.66833 20.6164 5.51919 20.5963 5.37525C20.4375 4.23743 20.1019 3.31431 19.3487 2.58863C18.5994 1.86672 17.6528 1.54853 16.4853 1.39731Z',
  d8: 'M15.671 10.9148C15.8562 11.2852 15.706 11.7357 15.3356 11.921C14.5057 12.3359 13.7186 13.2097 13.1105 14.0611C12.815 14.4747 12.5778 14.86 12.4148 15.1416C12.3336 15.282 12.2124 15.5081 12.171 15.5855C12.0509 15.8256 11.8115 15.9834 11.5435 15.9989C11.2754 16.0144 11.0195 15.8855 10.8725 15.6608C10.6957 15.3904 10.4055 15.1325 10.1233 14.9285C9.98792 14.8307 9.73912 14.6809 9.65208 14.6288L9.65224 14.6289C9.28581 14.437 9.14382 13.9846 9.33513 13.6177C9.52665 13.2504 9.97964 13.1079 10.3469 13.2994C10.5462 13.4033 10.8249 13.5848 11.002 13.7129C11.1111 13.7917 11.232 13.8844 11.3566 13.9901C11.5061 13.7493 11.6851 13.4758 11.8899 13.1892C12.5317 12.2906 13.4946 11.1644 14.6647 10.5793C15.0352 10.3941 15.4857 10.5443 15.671 10.9148Z',
  d9: 'M10 12.7143L11.5 14L15 10',
  d10: 'M4 2.01C4 2.00448 4.00448 2 4.01 2H19.99C19.9955 2 20 2.00448 20 2.01V22L12 18L4 22V2.01Z',
  d11: 'M3.46918 1.46967C3.60983 1.32902 3.8006 1.25 3.99951 1.25H19.9995C20.4137 1.25 20.7495 1.58579 20.7495 2V6.25H3.24951V2C3.24951 1.80109 3.32853 1.61032 3.46918 1.46967Z',
  d12: 'M3.24951 7.75H20.7495V22.75L11.9995 18.375L3.24951 22.75V7.75ZM11.5749 16.0523L15.5638 11.4936L14.4349 10.5059L11.4238 13.9472L10.4874 13.1446L9.51123 14.2835L11.5749 16.0523Z',
};

export const IconBookmarkCheck01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-check-01-stroke-rounded IconBookmarkCheck01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkCheck01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-check-01-duotone-rounded IconBookmarkCheck01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBookmarkCheck01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-check-01-twotone-rounded IconBookmarkCheck01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkCheck01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-check-01-solid-rounded IconBookmarkCheck01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkCheck01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-check-01-bulk-rounded IconBookmarkCheck01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkCheck01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-check-01-stroke-sharp IconBookmarkCheck01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
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

export const IconBookmarkCheck01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-check-01-solid-sharp IconBookmarkCheck01SolidSharp"
    >
      <path 
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

export const iconPackOfBookmarkCheck01: TheIconSelfPack = {
  name: 'BookmarkCheck01',
  StrokeRounded: IconBookmarkCheck01StrokeRounded,
  DuotoneRounded: IconBookmarkCheck01DuotoneRounded,
  TwotoneRounded: IconBookmarkCheck01TwotoneRounded,
  SolidRounded: IconBookmarkCheck01SolidRounded,
  BulkRounded: IconBookmarkCheck01BulkRounded,
  StrokeSharp: IconBookmarkCheck01StrokeSharp,
  SolidSharp: IconBookmarkCheck01SolidSharp,
};