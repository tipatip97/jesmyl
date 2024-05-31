import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.1598 5.98403C18.0713 5.12444 15.9777 3.70911 12.9877 2.72647C12.5283 2.57549 12.2986 2.5 12 2.5C11.7014 2.5 11.4717 2.57549 11.0123 2.72647C8.02225 3.70911 5.92875 5.12444 4.84015 5.98403C4.45813 6.28569 4.26712 6.43652 4.08284 6.76015C3.89856 7.08378 3.86229 7.34868 3.78974 7.87849C3.65684 8.84907 3.5 10.3451 3.5 12C3.5 13.6549 3.65684 15.1509 3.78974 16.1215C3.86229 16.6513 3.89856 16.9162 4.08284 17.2398C4.26712 17.5635 4.45813 17.7143 4.84015 18.016C5.92875 18.8756 8.02225 20.2909 11.0123 21.2735C11.4717 21.4245 11.7014 21.5 12 21.5C12.2986 21.5 12.5283 21.4245 12.9877 21.2735C15.9777 20.2909 18.0713 18.8756 19.1598 18.016C19.5419 17.7143 19.7329 17.5635 19.9172 17.2398C20.1014 16.9162 20.1377 16.6513 20.2103 16.1215C20.3432 15.1509 20.5 13.6549 20.5 12C20.5 10.3451 20.3432 8.84907 20.2103 7.87849C20.1377 7.34868 20.1014 7.08378 19.9172 6.76015C19.7329 6.43652 19.5419 6.28569 19.1598 5.98403Z',
  d2: 'M9.5 8V15',
  d3: 'M9.5 12H14.5',
  d4: 'M15.5 16H13.5L14.5 17L15.5 16Z',
  d5: 'M8.5 8L10.5 8L9.5 7L8.5 8Z',
  d6: 'M14.5 9V16',
  d7: 'M9.5 8V15M9.5 12H14.5M14.5 9V16M13.5 16H15.5L14.5 17L13.5 16ZM10.5 8L8.5 8L9.5 7L10.5 8Z',
  d8: 'M12 1.75C11.5794 1.75 11.2431 1.86079 10.8377 1.99434C7.74456 3.01087 5.47776 4.52491 4.3384 5.42458C3.98211 5.70563 3.68823 5.93744 3.43109 6.38904C3.17435 6.83993 3.12031 7.23646 3.05473 7.71769C2.91888 8.70986 2.75 10.3006 2.75 12C2.75 13.6994 2.91888 15.2901 3.05473 16.2823C3.12031 16.7635 3.17435 17.1601 3.43109 17.611C3.68823 18.0626 3.98211 18.2944 4.3384 18.5754C5.47776 19.4751 7.74456 20.9891 10.8377 22.0057C11.2431 22.1392 11.5794 22.25 12 22.25C12.4206 22.25 12.7569 22.1392 13.1623 22.0057C16.2554 20.9891 18.4853 19.5043 19.6246 18.6046L19.6616 18.5754C20.0179 18.2944 20.3118 18.0626 20.5689 17.611C20.8257 17.1601 20.8797 16.7635 20.9453 16.2823C21.0811 15.2901 21.25 13.6994 21.25 12C21.25 10.3006 21.0811 8.70985 20.9453 7.71768C20.8797 7.23645 20.8257 6.83993 20.5689 6.38904C20.3118 5.93745 20.0179 5.70563 19.6616 5.42459C18.5222 4.52491 16.2554 3.01087 13.1623 1.99435C12.7569 1.86079 12.4206 1.75 12 1.75ZM10.0304 6.46967C9.8897 6.32902 9.69893 6.25 9.50002 6.25C9.30111 6.25 9.11034 6.32902 8.96969 6.46967L7.96969 7.46967C7.75519 7.68417 7.69103 8.00676 7.80711 8.28701C7.9232 8.56727 8.19668 8.75 8.50002 8.75H8.75L8.75 15C8.75 15.4142 9.08579 15.75 9.5 15.75C9.91421 15.75 10.25 15.4142 10.25 15V12.75L13.75 12.75V15.25L13.5 15.25C13.1967 15.25 12.9232 15.4327 12.8071 15.713C12.691 15.9932 12.7552 16.3158 12.9697 16.5303L13.9697 17.5303C14.2626 17.8232 14.7375 17.8232 15.0304 17.5303L16.0304 16.5303C16.2449 16.3158 16.309 15.9932 16.1929 15.713C16.0768 15.4327 15.8034 15.25 15.5 15.25H15.25L15.25 9C15.25 8.58579 14.9142 8.25 14.5 8.25C14.0858 8.25 13.75 8.58579 13.75 9V11.25L10.25 11.25L10.25 8.75H10.5C10.8034 8.75 11.0768 8.56727 11.1929 8.28701C11.309 8.00676 11.2449 7.68417 11.0304 7.46967L10.0304 6.46967Z',
  d9: 'M10.8377 1.99434C11.2431 1.86079 11.5794 1.75 12 1.75C12.4206 1.75 12.7569 1.86079 13.1623 1.99435C16.2554 3.01087 18.5222 4.52491 19.6616 5.42459C20.0179 5.70563 20.3118 5.93745 20.5689 6.38904C20.8257 6.83993 20.8797 7.23645 20.9453 7.71768C21.0811 8.70985 21.25 10.3006 21.25 12C21.25 13.6994 21.0811 15.2901 20.9453 16.2823C20.8797 16.7635 20.8257 17.1601 20.5689 17.611C20.3118 18.0626 20.0179 18.2944 19.6616 18.5754L19.6246 18.6046C18.4853 19.5043 16.2554 20.9891 13.1623 22.0057C12.7569 22.1392 12.4206 22.25 12 22.25C11.5794 22.25 11.2431 22.1392 10.8377 22.0057C7.74456 20.9891 5.47776 19.4751 4.3384 18.5754C3.98211 18.2944 3.68823 18.0626 3.43109 17.611C3.17435 17.1601 3.12031 16.7635 3.05473 16.2823C2.91888 15.2901 2.75 13.6994 2.75 12C2.75 10.3006 2.91888 8.70986 3.05473 7.71769C3.12031 7.23646 3.17435 6.83993 3.43109 6.38904C3.68823 5.93744 3.98211 5.70563 4.3384 5.42458C5.47776 4.52491 7.74456 3.01087 10.8377 1.99434Z',
  d10: 'M9.50002 6.25C9.69893 6.25 9.8897 6.32902 10.0304 6.46967L11.0304 7.46967C11.2449 7.68417 11.309 8.00676 11.1929 8.28701C11.0768 8.56727 10.8034 8.75 10.5 8.75H10.25V11.25H13.75V9C13.75 8.58579 14.0858 8.25 14.5 8.25C14.9142 8.25 15.25 8.58579 15.25 9V15.25H15.5C15.8034 15.25 16.0768 15.4327 16.1929 15.713C16.309 15.9932 16.2449 16.3158 16.0304 16.5303L15.0304 17.5303C14.7375 17.8232 14.2626 17.8232 13.9697 17.5303L12.9697 16.5303C12.7552 16.3158 12.691 15.9932 12.8071 15.713C12.9232 15.4327 13.1967 15.25 13.5 15.25H13.75V12.75H10.25V15C10.25 15.4142 9.91421 15.75 9.5 15.75C9.08579 15.75 8.75 15.4142 8.75 15V8.75H8.50002C8.19668 8.75 7.9232 8.56727 7.80711 8.28701C7.69103 8.00676 7.75519 7.68417 7.96969 7.46967L8.96969 6.46967C9.11034 6.32902 9.30111 6.25 9.50002 6.25Z',
  d11: 'M20.0279 6.775C20.0279 6.775 17.1945 3.925 12.0001 2.5C6.80565 3.925 3.97231 6.775 3.97231 6.775C3.97231 6.775 3.50009 9.15 3.50009 12C3.50009 14.85 3.97231 17.225 3.97231 17.225C3.97231 17.225 6.80565 20.075 12.0001 21.5C17.1945 20.075 20.0279 17.225 20.0279 17.225C20.0279 17.225 20.5001 14.85 20.5001 12C20.5001 9.15 20.0279 6.775 20.0279 6.775Z',
  d12: 'M9.00009 7.99928H10.0001L9.50009 7.3457L9.00009 7.99928Z',
  d13: 'M14 16H15L14.5 16.6536L14 16Z',
  d14: 'M18.3732 4.56487C16.9631 3.6423 14.6865 2.485 12 1.75C9.31351 2.485 7.03694 3.6423 5.62681 4.56487C5.013 4.96645 3.96838 5.84434 3.46609 6.26646C3.39117 6.32942 3.32832 6.38224 3.28076 6.42182C3.27318 6.46747 3.26182 6.53457 3.24788 6.61696C3.17777 7.03119 3.04224 7.83193 2.99184 8.23643C2.87117 9.20482 2.75 10.5396 2.75 12C2.75 13.4604 2.87117 14.7952 2.99184 15.7636C3.05226 16.2485 3.11281 16.6435 3.15853 16.9187C3.17538 17.0201 3.2264 17.29 3.25752 17.4546C3.26861 17.5133 3.27718 17.5587 3.28076 17.5782C3.30309 17.5987 3.3448 17.6378 3.39799 17.6876C3.57375 17.8523 3.87481 18.1343 4.0155 18.2515C4.38193 18.5565 4.92145 18.9737 5.62681 19.4351C7.03694 20.3577 9.11509 21.4607 11.8016 22.1957L12 22.25L12.1984 22.1957C14.8849 21.4607 16.9631 20.3577 18.3732 19.4351C19.0785 18.9737 19.6181 18.5565 19.9845 18.2515C20.1252 18.1344 20.4262 17.8523 20.602 17.6876C20.6552 17.6378 20.6969 17.5987 20.7192 17.5782C20.7268 17.5325 20.7382 17.4654 20.7521 17.383C20.8222 16.9688 20.9578 16.1681 21.0082 15.7636C21.1288 14.7952 21.25 13.4604 21.25 12C21.25 10.5396 21.1288 9.20482 21.0082 8.23643C20.9463 7.76569 20.8019 6.74371 20.7192 6.42182C20.6717 6.38224 20.6088 6.32942 20.5339 6.26646C20.0316 5.84435 18.987 4.96645 18.3732 4.56487ZM9.50049 6.11133L11.5186 8.74926H10.25L10.25 11.25L13.75 11.25V8.25H15.25L15.25 15.25H16.5186L14.5005 17.8879L12.4824 15.25L13.75 15.25V12.75L10.25 12.75V15.75H8.75L8.75 8.74926L7.48242 8.74926L9.50049 6.11133Z',
} as const;

export const IconHackerrankStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hackerrank-stroke-rounded IconHackerrankStrokeRounded"
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

export const IconHackerrankDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hackerrank-duotone-rounded IconHackerrankDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconHackerrankTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hackerrank-twotone-rounded IconHackerrankTwotoneRounded"
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHackerrankSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hackerrank-solid-rounded IconHackerrankSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHackerrankBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hackerrank-bulk-rounded IconHackerrankBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconHackerrankStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hackerrank-stroke-sharp IconHackerrankStrokeSharp"
    >
      <path 
        d={d.d11} 
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
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconHackerrankSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hackerrank-solid-sharp IconHackerrankSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHackerrank: TheIconSelfPack = {
  name: 'Hackerrank',
  StrokeRounded: IconHackerrankStrokeRounded,
  DuotoneRounded: IconHackerrankDuotoneRounded,
  TwotoneRounded: IconHackerrankTwotoneRounded,
  SolidRounded: IconHackerrankSolidRounded,
  BulkRounded: IconHackerrankBulkRounded,
  StrokeSharp: IconHackerrankStrokeSharp,
  SolidSharp: IconHackerrankSolidSharp,
};