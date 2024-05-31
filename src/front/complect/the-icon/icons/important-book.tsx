import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.5 10C4.5 6.22876 4.5 4.34315 5.67157 3.17157C6.84315 2 8.72876 2 12.5 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H12.5C8.72876 22 6.84315 22 5.67157 20.8284C4.5 19.6569 4.5 17.7712 4.5 14V10Z',
  d2: 'M13.25 14.5H13.259M13.2598 12.292V9.5M18.25 12C18.25 14.7614 16.0114 17 13.25 17C10.4886 17 8.25 14.7614 8.25 12C8.25 9.23858 10.4886 7 13.25 7C16.0114 7 18.25 9.23858 18.25 12Z',
  d3: 'M4.5 6L2 6M4.5 12L2 12M4.5 18H2',
  d4: 'M5.67157 3.17157C4.5 4.34315 4.5 6.22876 4.5 10V14C4.5 17.7712 4.5 19.6569 5.67157 20.8284C6.84315 22 8.72876 22 12.5 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H12.5C8.72876 2 6.84315 2 5.67157 3.17157ZM18.25 12C18.25 14.7614 16.0114 17 13.25 17C10.4886 17 8.25 14.7614 8.25 12C8.25 9.23858 10.4886 7 13.25 7C16.0114 7 18.25 9.23858 18.25 12Z',
  d5: 'M1.25 6C1.25 5.44772 1.69772 5 2.25 5L4.75 5C5.30229 5 5.75 5.44772 5.75 6C5.75 6.55229 5.30228 7 4.75 7L2.25 7C1.69772 7 1.25 6.55228 1.25 6ZM1.25 12C1.25 11.4477 1.69772 11 2.25 11L4.75 11C5.30229 11 5.75 11.4477 5.75 12C5.75 12.5523 5.30228 13 4.75 13H2.25C1.69772 13 1.25 12.5523 1.25 12ZM1.25 18C1.25 17.4477 1.69772 17 2.25 17H4.75C5.30228 17 5.75 17.4477 5.75 18C5.75 18.5523 5.30228 19 4.75 19H2.25C1.69772 19 1.25 18.5523 1.25 18Z',
  d6: 'M13.2598 8.75C13.674 8.75 14.0098 9.08579 14.0098 9.5V12.292C14.0098 12.7062 13.674 13.042 13.2598 13.042C12.8456 13.042 12.5098 12.7062 12.5098 12.292V9.5C12.5098 9.08579 12.8456 8.75 13.2598 8.75ZM12.5 14.5C12.5 14.0858 12.8358 13.75 13.25 13.75H13.259C13.6732 13.75 14.009 14.0858 14.009 14.5C14.009 14.9142 13.6732 15.25 13.259 15.25H13.25C12.8358 15.25 12.5 14.9142 12.5 14.5Z',
  d7: 'M14.0564 1.25H14.0564H14.0564H12.4436H12.4436H12.4436C10.6058 1.24999 9.15019 1.24997 8.01098 1.40314C6.83856 1.56076 5.88961 1.89288 5.14124 2.64124C4.39288 3.38961 4.06076 4.33856 3.90314 5.51098C3.74997 6.65019 3.74999 8.10581 3.75 9.94356V9.94357V9.94358V14.0564V14.0564V14.0564C3.74999 15.8942 3.74997 17.3498 3.90314 18.489C4.06076 19.6614 4.39288 20.6104 5.14124 21.3588C5.88961 22.1071 6.83856 22.4392 8.01098 22.5969C9.15018 22.75 10.6058 22.75 12.4435 22.75H12.4436H14.0564H14.0565C15.8942 22.75 17.3498 22.75 18.489 22.5969C19.6614 22.4392 20.6104 22.1071 21.3588 21.3588C22.1071 20.6104 22.4392 19.6614 22.5969 18.489C22.75 17.3498 22.75 15.8942 22.75 14.0565V14.0564V9.94359V9.94354C22.75 8.10581 22.75 6.65018 22.5969 5.51098C22.4392 4.33856 22.1071 3.38961 21.3588 2.64124C20.6104 1.89288 19.6614 1.56076 18.489 1.40314C17.3498 1.24997 15.8942 1.24999 14.0564 1.25ZM9 12C9 9.65279 10.9028 7.75 13.25 7.75C15.5972 7.75 17.5 9.65279 17.5 12C17.5 14.3472 15.5972 16.25 13.25 16.25C10.9028 16.25 9 14.3472 9 12Z',
  d8: 'M14.0564 1.25C15.8942 1.24998 17.3498 1.24997 18.489 1.40314C19.6614 1.56076 20.6104 1.89288 21.3588 2.64124C22.1071 3.38961 22.4392 4.33856 22.5969 5.51098C22.75 6.65018 22.75 8.1058 22.75 9.94354V9.94359V14.0564V14.0565C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0565 22.75H14.0564H12.4436H12.4435C10.6058 22.75 9.15018 22.75 8.01098 22.5969C6.83856 22.4392 5.88961 22.1071 5.14124 21.3588C4.39288 20.6104 4.06076 19.6614 3.90314 18.489C3.74997 17.3498 3.74998 15.8942 3.75 14.0564V14.0564V9.94358V9.94357C3.74998 8.10582 3.74997 6.65019 3.90314 5.51098C4.06076 4.33856 4.39288 3.38961 5.14124 2.64124C5.88961 1.89288 6.83856 1.56076 8.01098 1.40314C9.15019 1.24997 10.6058 1.24998 12.4436 1.25H12.4436H14.0564H14.0564Z',
  d9: 'M9 12C9 9.65279 10.9028 7.75 13.25 7.75C15.5972 7.75 17.5 9.65279 17.5 12C17.5 14.3472 15.5972 16.25 13.25 16.25C10.9028 16.25 9 14.3472 9 12ZM14.0098 9.5C14.0098 9.08579 13.674 8.75 13.2598 8.75C12.8456 8.75 12.5098 9.08579 12.5098 9.5V12.292C12.5098 12.7062 12.8456 13.042 13.2598 13.042C13.674 13.042 14.0098 12.7062 14.0098 12.292V9.5ZM13.25 13.75C12.8358 13.75 12.5 14.0858 12.5 14.5C12.5 14.9142 12.8358 15.25 13.25 15.25H13.259C13.6732 15.25 14.009 14.9142 14.009 14.5C14.009 14.0858 13.6732 13.75 13.259 13.75H13.25Z',
  d10: 'M22 2H5V22H22V2Z',
  d11: 'M5 6H2M5 12H2M5 18H2',
  d12: 'M13.5 16.9941C16.275 16.9941 18.5245 14.752 18.5245 11.9863C18.5245 9.22058 16.275 6.97852 13.5 6.97852C10.7251 6.97852 8.47559 9.22058 8.47559 11.9863C8.47559 13.6978 9.62669 15.5781 11.1181 16.3937C11.9711 16.8602 12.8486 16.9941 13.5 16.9941Z',
  d13: 'M13.5254 9.02051V12.4879M13.5254 13.7308V15.2222',
  d14: 'M4.25 2C4.25 1.58579 4.58579 1.25 5 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V22C22.75 22.4142 22.4142 22.75 22 22.75H5C4.58579 22.75 4.25 22.4142 4.25 22V19H1.25V17H4.25V13H1.25V11H4.25V7H1.25V5H4.25V2ZM9.25 12C9.25 9.65279 11.1528 7.75 13.5 7.75C15.8472 7.75 17.75 9.65279 17.75 12C17.75 14.3472 15.8472 16.25 13.5 16.25C11.1528 16.25 9.25 14.3472 9.25 12Z',
  d15: 'M14.259 9.0019L14.25 12.5019L12.75 12.498L12.759 8.99805L14.259 9.0019ZM12.75 13.75H14.259V15.25H12.75V13.75Z',
} as const;

export const IconImportantBookStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="important-book-stroke-rounded IconImportantBookStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImportantBookDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="important-book-duotone-rounded IconImportantBookDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImportantBookTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="important-book-twotone-rounded IconImportantBookTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconImportantBookSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="important-book-solid-rounded IconImportantBookSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImportantBookBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="important-book-bulk-rounded IconImportantBookBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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

export const IconImportantBookStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="important-book-stroke-sharp IconImportantBookStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconImportantBookSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="important-book-solid-sharp IconImportantBookSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfImportantBook: TheIconSelfPack = {
  name: 'ImportantBook',
  StrokeRounded: IconImportantBookStrokeRounded,
  DuotoneRounded: IconImportantBookDuotoneRounded,
  TwotoneRounded: IconImportantBookTwotoneRounded,
  SolidRounded: IconImportantBookSolidRounded,
  BulkRounded: IconImportantBookBulkRounded,
  StrokeSharp: IconImportantBookStrokeSharp,
  SolidSharp: IconImportantBookSolidSharp,
};