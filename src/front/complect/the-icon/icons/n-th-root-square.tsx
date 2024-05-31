import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 10.519V8.55357M7 8.55357C7.06134 7.73058 7.67624 7 8.51042 7C9.49429 7 9.93903 7.93135 10.006 8.55357V10.519M7 8.55357V7',
  d2: 'M6.99023 14.5142C7.45398 14.2592 7.86023 14.1672 8.061 14.3402C8.26177 14.5132 8.68914 15.3056 8.86408 15.6118C9.13177 16.0802 9.43963 17.0172 9.97501 17.0172C10.3364 17.0172 10.6267 16.0387 11.0993 14.8756C11.8192 13.1041 12.6244 10.8615 12.7456 10.6595C12.9464 10.3248 13.1472 9.99023 13.6825 9.99023C14.2849 9.99023 17.0287 9.99023 17.0287 9.99023',
  d3: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d4: 'M6.99023 10.5102V8.54478M6.99023 8.54478C7.05157 7.72179 7.66647 6.99121 8.50065 6.99121C9.48452 6.99121 9.92926 7.92256 9.99623 8.54478V10.5102M6.99023 8.54478V6.99121',
  d5: 'M6.98047 14.5054C7.44422 14.2504 7.85047 14.1584 8.05124 14.3314C8.25201 14.5044 8.67938 15.2968 8.85432 15.603C9.12201 16.0714 9.42987 17.0084 9.96525 17.0084C10.3266 17.0084 10.6169 16.0299 11.0895 14.8668C11.8094 13.0953 12.6146 10.8527 12.7358 10.6507C12.9366 10.316 13.1374 9.98145 13.6727 9.98145C14.2751 9.98145 17.0189 9.98145 17.0189 9.98145',
  d6: 'M6.99024 10.5102V8.54478M6.99024 8.54478C7.05158 7.72179 7.66648 6.99121 8.50066 6.99121C9.48453 6.99121 9.92927 7.92256 9.99624 8.54478V10.5102M6.99024 8.54478V6.99121M6.98047 14.5054C7.44422 14.2504 7.85047 14.1584 8.05124 14.3314C8.25201 14.5044 8.67938 15.2968 8.85432 15.603C9.12201 16.0714 9.42987 17.0084 9.96525 17.0084C10.3266 17.0084 10.6169 16.0299 11.0895 14.8668C11.8094 13.0953 12.6146 10.8527 12.7358 10.6507C12.9366 10.316 13.1374 9.98144 13.6727 9.98144C14.2751 9.98144 17.0189 9.98144 17.0189 9.98144',
  d7: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM7.57928 6.18462C7.41587 6.06837 7.21602 6 7.00021 6C6.44793 6 6.00021 6.44772 6.00021 7V10.5C6.00021 11.0523 6.44793 11.5 7.00021 11.5C7.5525 11.5 8.00021 11.0523 8.00021 10.5V8.66061C8.00021 8.38446 8.22407 8.16061 8.50021 8.16061C8.77635 8.16061 9.00021 8.38447 9.00021 8.66061V10.5C9.00021 11.0523 9.44793 11.5 10.0002 11.5C10.5525 11.5 11.0002 11.0523 11.0002 10.5V8.71429C11.0002 7.34483 10.0022 6 8.50021 6C8.16656 6 7.85778 6.06636 7.57928 6.18462ZM18.0002 10C18.0002 9.44772 17.5525 9 17.0002 9L14.3133 8.99999H14.3133C14.0211 8.99993 13.7257 8.99987 13.4733 9.02819C13.1833 9.06072 12.8588 9.13811 12.5478 9.35317C12.2384 9.56714 12.0509 9.84247 11.9166 10.0998C11.7985 10.3261 11.6898 10.6037 11.5809 10.882L11.5809 10.882L9.8403 15.3272L9.32374 14.4037C9.22958 14.2352 9.11739 14.0343 8.99801 13.8739C8.85454 13.681 8.62037 13.4321 8.24113 13.3148C7.94457 13.2231 7.66525 13.2523 7.504 13.279C7.32262 13.3089 7.15418 13.3602 7.02488 13.4057C6.89815 13.4502 6.65124 13.5617 6.5569 13.6043L6.55685 13.6043L6.54374 13.6103C6.05235 13.8624 5.85837 14.4651 6.11047 14.9565C6.36232 15.4474 6.96379 15.6416 7.4549 15.3906L7.55775 15.3436L8.12967 16.3659L8.12969 16.366L8.12969 16.366L8.1297 16.366L8.1297 16.366C8.32654 16.7181 8.52458 17.0724 8.72013 17.3276C8.91463 17.5814 9.33643 18.0455 10.0259 17.9966C10.7135 17.9478 11.0664 17.4311 11.2241 17.1534C11.3829 16.8735 11.531 16.4951 11.6784 16.1183L13.4285 11.6489C13.5582 11.3176 13.6278 11.1437 13.6896 11.0253C13.8167 11.0111 14.0039 11 14.3543 11H17.0002C17.5525 11 18.0002 10.5523 18.0002 10Z',
  d8: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d9: 'M7.00021 6C7.21602 6 7.41587 6.06837 7.57928 6.18462C7.85778 6.06636 8.16656 6 8.50021 6C10.0022 6 11.0002 7.34483 11.0002 8.71429V10.5C11.0002 11.0523 10.5525 11.5 10.0002 11.5C9.44793 11.5 9.00021 11.0523 9.00021 10.5V8.66061C9.00021 8.38446 8.77635 8.16061 8.50021 8.16061C8.22407 8.16061 8.00021 8.38446 8.00021 8.66061V10.5C8.00021 11.0523 7.5525 11.5 7.00021 11.5C6.44793 11.5 6.00021 11.0523 6.00021 10.5V7C6.00021 6.44772 6.44793 6 7.00021 6Z',
  d10: 'M17.0002 9C17.5525 9 18.0002 9.44772 18.0002 10C18.0002 10.5523 17.5525 11 17.0002 11H14.3543C14.0039 11 13.8167 11.0111 13.6896 11.0253C13.6278 11.1437 13.5582 11.3176 13.4285 11.6489L11.6784 16.1183C11.531 16.4951 11.3829 16.8735 11.2241 17.1534C11.0664 17.4311 10.7135 17.9478 10.0259 17.9966C9.33643 18.0455 8.91463 17.5814 8.72013 17.3276C8.52458 17.0724 8.32653 16.7181 8.12969 16.366L8.12967 16.3659L7.55775 15.3436L7.4549 15.3906C6.96379 15.6416 6.36232 15.4474 6.11047 14.9565C5.85837 14.4651 6.05235 13.8624 6.54374 13.6103C6.62584 13.5732 6.89172 13.4525 7.02488 13.4057C7.15418 13.3602 7.32262 13.3089 7.504 13.279C7.66525 13.2523 7.94457 13.2231 8.24113 13.3148C8.62037 13.4321 8.85454 13.681 8.99801 13.8739C9.11739 14.0343 9.22958 14.2352 9.32374 14.4037L9.8403 15.3272L11.5809 10.882C11.6898 10.6038 11.7985 10.3261 11.9166 10.0998C12.0509 9.84247 12.2384 9.56714 12.5478 9.35317C12.8588 9.13811 13.1833 9.06072 13.4733 9.02819C13.7257 8.99987 14.0211 8.99993 14.3133 8.99999L17.0002 9Z',
  d11: 'M3 21H21V3.00046L3 3V21Z',
  d12: 'M17.9996 9.9781H13.0007C12.9969 9.9781 12.9934 9.98024 12.9917 9.98364L9.50273 16.99C9.49904 16.9974 9.48849 16.9974 9.48482 16.99L7.50885 13.0051C7.50581 12.999 7.49766 12.9977 7.49282 13.0025L6.00098 14.4942M10.0029 10.4902V8.64326C10.0029 7.72308 9.31453 6.99195 8.48592 6.99195C7.81602 7.00429 7.15925 7.56551 7.00268 8.45422M7.00268 10.4795V8.45422M7.00268 8.45422V6.25',
  d13: 'M3.00002 2.25C2.8011 2.24999 2.61033 2.32901 2.46968 2.46966C2.32902 2.61032 2.25 2.80108 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3.00046C21.75 2.58626 21.4142 2.25047 21 2.25046L3.00002 2.25ZM8.35359 6V6.05189C8.51301 6.01798 8.67993 6 8.85359 6C10.3556 6 11.3536 7.34483 11.3536 8.71429V10.5H9.35359V8.71429C9.35359 8.47602 9.269 8.28327 9.16167 8.16061C9.05608 8.03992 8.94484 8 8.85359 8C8.76235 8 8.65111 8.03992 8.54551 8.16061C8.43818 8.28327 8.35359 8.47602 8.35359 8.71429V10.5H6.35359V6H8.35359ZM13.3536 9C12.9748 9 12.6286 9.214 12.4592 9.55279L9.85359 14.7639L8.74802 12.5528C8.60426 12.2653 8.33107 12.0644 8.01377 12.0129C7.69648 11.9614 7.37378 12.0656 7.14648 12.2929L5.64648 13.7929L7.0607 15.2071L7.57964 14.6882L8.95916 17.4472C9.12856 17.786 9.47482 18 9.85359 18C10.2324 18 10.5786 17.786 10.748 17.4472L13.9716 11H18.3536V9H13.3536Z',
} as const;

export const IconNThRootSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-square-stroke-rounded IconNThRootSquareStrokeRounded"
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

export const IconNThRootSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-square-duotone-rounded IconNThRootSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconNThRootSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-square-twotone-rounded IconNThRootSquareTwotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconNThRootSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-square-solid-rounded IconNThRootSquareSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNThRootSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-square-bulk-rounded IconNThRootSquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconNThRootSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-square-stroke-sharp IconNThRootSquareStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNThRootSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-square-solid-sharp IconNThRootSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNThRootSquare: TheIconSelfPack = {
  name: 'NThRootSquare',
  StrokeRounded: IconNThRootSquareStrokeRounded,
  DuotoneRounded: IconNThRootSquareDuotoneRounded,
  TwotoneRounded: IconNThRootSquareTwotoneRounded,
  SolidRounded: IconNThRootSquareSolidRounded,
  BulkRounded: IconNThRootSquareBulkRounded,
  StrokeSharp: IconNThRootSquareStrokeSharp,
  SolidSharp: IconNThRootSquareSolidSharp,
};