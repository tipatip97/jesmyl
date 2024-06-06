import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 22H9.5C6.20017 22 4.55025 22 3.52513 20.9209C2.5 19.8418 2.5 18.1051 2.5 14.6316V9.36842C2.5 5.89491 2.5 4.15816 3.52513 3.07908C4.55025 2 6.20017 2 9.5 2H12.5C15.7998 2 17.4497 2 18.4749 3.07908C19.5 4.15816 19.5 5.89491 19.5 9.36842V11',
  d2: 'M18 15L18 22M21.5 18.5L14.5 18.5',
  d3: 'M7 2L7.0822 2.4932C7.28174 3.69044 7.38151 4.28906 7.80113 4.64453C8.22075 5 8.82762 5 10.0414 5H11.9586C13.1724 5 13.7793 5 14.1989 4.64453C14.6185 4.28906 14.7183 3.69044 14.9178 2.4932L15 2',
  d4: 'M7 16H11M7 11H15',
  d5: 'M3.52513 3.07908C2.5 4.15816 2.5 5.89491 2.5 9.36842V14.6316C2.5 18.1051 2.5 19.8418 3.52513 20.9209C4.55025 22 6.20016 22 9.49998 22H12.5C15.7998 22 17.4497 22 18.4749 20.9209C19.5 19.8418 19.5 18.1051 19.5 14.6316V9.36842C19.5 5.89491 19.5 4.15816 18.4749 3.07908C17.6968 2.26008 16.5589 2.06268 14.6128 2.01511C14.816 2.07093 14.9544 2.2737 14.9178 2.4932C14.7183 3.69043 14.6185 4.28906 14.1989 4.64453C13.7793 5 13.1724 5 11.9586 5H10.0414C8.82762 5 8.22075 5 7.80113 4.64453C7.38151 4.28906 7.28174 3.69044 7.0822 2.4932C7.04562 2.27369 7.18405 2.07093 7.38721 2.01511C5.44114 2.06268 4.30318 2.26008 3.52513 3.07908Z',
  d6: 'M7 16H11',
  d7: 'M7 11H15',
  d8: 'M14.0762 1.23058C14.1651 1.33175 14.146 1.48657 14.1077 1.79623L14.0504 2.26047C13.9489 2.86912 13.8822 3.25941 13.7971 3.54546C13.7171 3.81389 13.6457 3.89922 13.5891 3.9472C13.5325 3.99519 13.4366 4.05158 13.1586 4.08628C12.8599 4.12358 12.4598 4.12494 11.8336 4.12494H9.91639C9.29025 4.12494 8.89007 4.12358 8.59138 4.08628C8.31347 4.05158 8.21756 3.99519 8.16092 3.9472C8.10428 3.89922 8.03288 3.81389 7.95297 3.54546C7.86791 3.25977 7.80125 2.87012 7.7 2.2628L7.64493 1.79253C7.60885 1.48437 7.5908 1.33029 7.67969 1.22983C7.76858 1.12938 7.92274 1.12853 8.23107 1.12683C8.57544 1.12493 8.93723 1.12493 9.31697 1.12494H12.4336C12.8143 1.12493 13.177 1.12493 13.5221 1.12684C13.8322 1.12856 13.9872 1.12942 14.0762 1.23058Z',
  d9: 'M5.98444 1.2807C6.08378 1.35784 6.09992 1.49559 6.13218 1.77109L6.21205 2.45322L6.21681 2.48176C6.30874 3.03368 6.40125 3.58898 6.51508 3.97133C6.63984 4.39039 6.82813 4.7821 7.19111 5.08959C7.55409 5.39708 7.97143 5.51841 8.4053 5.57258C8.80798 5.62286 9.30289 5.62283 9.87188 5.6228H11.8776C12.4466 5.62283 12.9415 5.62286 13.3442 5.57258C13.7781 5.51841 14.1954 5.39708 14.5584 5.08959C14.9214 4.7821 15.1097 4.39039 15.2344 3.97133C15.3487 3.58746 15.441 3.03365 15.5333 2.47968L15.5369 2.45792L15.6221 1.76797C15.6559 1.49412 15.6728 1.3572 15.772 1.28071C15.8712 1.20422 16.0026 1.22196 16.2653 1.25745L16.3205 1.26508C17.3641 1.41277 18.2203 1.72657 18.8936 2.43532C19.5618 3.13864 19.8529 4.02397 19.9908 5.10362C20.125 6.15441 20.125 7.49634 20.125 9.18768V12.9123C20.125 13.2396 20.125 13.4033 20.0639 13.4291C20.0028 13.4549 19.8746 13.3302 19.6181 13.0807C19.1678 12.6426 18.5529 12.3727 17.875 12.3727C16.4943 12.3727 15.375 13.492 15.375 14.8727V15.2727C15.375 15.5556 15.375 15.697 15.2871 15.7849C15.1993 15.8727 15.0578 15.8727 14.775 15.8727H14.775H14.375C12.9943 15.8727 11.875 16.992 11.875 18.3727C11.875 19.7535 12.9943 20.8727 14.375 20.8727H14.775C15.0578 20.8727 15.1993 20.8727 15.2871 20.9606C15.375 21.0485 15.375 21.1899 15.375 21.4727V21.8727C15.375 21.9569 15.3792 22.0402 15.3873 22.1222C15.4014 22.2641 15.4084 22.3351 15.3767 22.4071C15.3554 22.4556 15.3057 22.513 15.2607 22.541C15.194 22.5826 15.1444 22.5848 15.0451 22.5892C14.2896 22.6228 13.4224 22.6228 12.4333 22.6228H9.31669C7.71629 22.6228 6.4351 22.6228 5.42946 22.4805C4.38594 22.3328 3.52969 22.019 2.85638 21.3103C2.18822 20.607 1.89708 19.7216 1.75919 18.642C1.62498 17.5912 1.62499 16.2493 1.625 14.5579V14.5579V9.18764V9.18763C1.62499 7.49632 1.62498 6.1544 1.75919 5.10362C1.89708 4.02397 2.18822 3.13864 2.85638 2.43532C3.52969 1.72657 4.38594 1.41277 5.42946 1.26508L5.48883 1.25689C5.753 1.22133 5.88509 1.20356 5.98444 1.2807ZM6.875 10.1249C6.46079 10.1249 6.125 10.4607 6.125 10.8749C6.125 11.2892 6.46079 11.6249 6.875 11.6249H14.875C15.2892 11.6249 15.625 11.2892 15.625 10.8749C15.625 10.4607 15.2892 10.1249 14.875 10.1249H6.875ZM6.875 15.1249C6.46079 15.1249 6.125 15.4607 6.125 15.8749C6.125 16.2892 6.46079 16.6249 6.875 16.6249H10.875C11.2892 16.6249 11.625 16.2892 11.625 15.8749C11.625 15.4607 11.2892 15.1249 10.875 15.1249H6.875Z',
  d10: 'M17.875 13.8749C18.4273 13.8749 18.875 14.3227 18.875 14.8749V17.3749L21.375 17.3749C21.9273 17.3749 22.375 17.8227 22.375 18.3749C22.375 18.9272 21.9273 19.3749 21.375 19.3749L18.875 19.3749V21.8749C18.875 22.4272 18.4273 22.8749 17.875 22.8749C17.3227 22.8749 16.875 22.4272 16.875 21.8749V19.3749L14.375 19.3749C13.8227 19.3749 13.375 18.9272 13.375 18.3749C13.375 17.8227 13.8227 17.3749 14.375 17.3749L16.875 17.3749V14.8749C16.875 14.3227 17.3227 13.8749 17.875 13.8749Z',
  d11: 'M6.13218 1.77109C6.09991 1.49559 6.08378 1.35784 5.98444 1.2807C5.88509 1.20356 5.753 1.22133 5.48883 1.25689L5.42946 1.26508C4.38594 1.41277 3.52968 1.72657 2.85638 2.43532C2.18822 3.13864 1.89708 4.02397 1.75919 5.10362C1.62498 6.1544 1.62499 7.49633 1.625 9.18764V14.5579C1.62499 16.2492 1.62498 17.5912 1.75919 18.642C1.89708 19.7216 2.18822 20.607 2.85638 21.3103C3.52968 22.019 4.38594 22.3328 5.42946 22.4805C6.4351 22.6228 7.71629 22.6228 9.31669 22.6228H12.4333C13.4224 22.6228 14.2896 22.6228 15.0451 22.5892C15.1444 22.5848 15.194 22.5826 15.2607 22.541C15.3057 22.513 15.3554 22.4556 15.3767 22.4071C15.4084 22.3351 15.4014 22.2641 15.3873 22.1222C15.3792 22.0402 15.375 21.9569 15.375 21.8727V21.4727C15.375 21.1899 15.375 21.0485 15.2871 20.9606C15.1993 20.8727 15.0578 20.8727 14.775 20.8727H14.375C12.9943 20.8727 11.875 19.7535 11.875 18.3727C11.875 16.992 12.9943 15.8727 14.375 15.8727H14.775C15.0578 15.8727 15.1993 15.8727 15.2871 15.7849C15.375 15.697 15.375 15.5556 15.375 15.2727V14.8727C15.375 13.492 16.4943 12.3727 17.875 12.3727C18.5529 12.3727 19.1678 12.6426 19.6181 13.0807C19.8746 13.3302 20.0028 13.4549 20.0639 13.4291C20.125 13.4033 20.125 13.2396 20.125 12.9123V9.18768C20.125 7.49634 20.125 6.15441 19.9908 5.10362C19.8529 4.02397 19.5618 3.13864 18.8936 2.43532C18.2203 1.72657 17.3641 1.41277 16.3205 1.26508L16.2653 1.25745C16.0026 1.22196 15.8712 1.20422 15.772 1.28071C15.6728 1.3572 15.6559 1.49412 15.6221 1.76797L15.5369 2.45792L15.5333 2.47968C15.441 3.03365 15.3487 3.58746 15.2344 3.97133C15.1097 4.39039 14.9214 4.7821 14.5584 5.08959C14.1954 5.39708 13.7781 5.51841 13.3442 5.57258C12.9415 5.62286 12.4466 5.62283 11.8776 5.6228H9.87188C9.30288 5.62283 8.80798 5.62286 8.4053 5.57258C7.97143 5.51841 7.55408 5.39708 7.19111 5.08959C6.82813 4.7821 6.63984 4.39039 6.51508 3.97133C6.40125 3.58898 6.30874 3.03368 6.21681 2.48176L6.21205 2.45322L6.13218 1.77109Z',
  d12: 'M6.125 10.8749C6.125 10.4607 6.46079 10.1249 6.875 10.1249H14.875C15.2892 10.1249 15.625 10.4607 15.625 10.8749C15.625 11.2892 15.2892 11.6249 14.875 11.6249H6.875C6.46079 11.6249 6.125 11.2892 6.125 10.8749ZM6.125 15.8749C6.125 15.4607 6.46079 15.1249 6.875 15.1249H10.875C11.2892 15.1249 11.625 15.4607 11.625 15.8749C11.625 16.2892 11.2892 16.6249 10.875 16.6249H6.875C6.46079 16.6249 6.125 16.2892 6.125 15.8749Z',
  d13: 'M19.5 13V2H2.5V22H13',
  d14: 'M15 2H7V5H15V2Z',
  d15: 'M6.5 16H11.5M6.5 11H15.5',
  d16: 'M6.24927 1.25H2.49927C2.08505 1.25 1.74927 1.58579 1.74927 2V22C1.74927 22.4142 2.08505 22.75 2.49927 22.75L16.2493 22.75V21.75L13.7493 21.75V16.75L16.2493 16.75V14.25H20.2493V2C20.2493 1.58579 19.9135 1.25 19.4993 1.25H15.7493V4.75C15.7493 5.16421 15.4135 5.5 14.9993 5.5H6.99927C6.58505 5.5 6.24927 5.16421 6.24927 4.75V1.25ZM6.49927 10.75H15.4993V9.25H6.49927V10.75ZM6.49927 15.75H11.4993V14.25H6.49927V15.75Z',
  d17: 'M14.2493 1.25H7.74927V4H14.2493V1.25Z',
  d18: 'M17.7507 18.2496V15.7496H19.7507V18.2496L22.2507 18.2496V20.2496L19.7507 20.2496V22.7496H17.7507V20.2496L15.2507 20.2496V18.2496L17.7507 18.2496Z',
} as const;

export const IconTaskAdd02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-add-02-stroke-rounded IconTaskAdd02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTaskAdd02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-add-02-duotone-rounded IconTaskAdd02DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconTaskAdd02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-add-02-twotone-rounded IconTaskAdd02TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
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
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTaskAdd02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-add-02-solid-rounded IconTaskAdd02SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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

export const IconTaskAdd02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-add-02-bulk-rounded IconTaskAdd02BulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTaskAdd02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-add-02-stroke-sharp IconTaskAdd02StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
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
    </TheIconWrapper>
  );
};

export const IconTaskAdd02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-add-02-solid-sharp IconTaskAdd02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTaskAdd02: TheIconSelfPack = {
  name: 'TaskAdd02',
  StrokeRounded: IconTaskAdd02StrokeRounded,
  DuotoneRounded: IconTaskAdd02DuotoneRounded,
  TwotoneRounded: IconTaskAdd02TwotoneRounded,
  SolidRounded: IconTaskAdd02SolidRounded,
  BulkRounded: IconTaskAdd02BulkRounded,
  StrokeSharp: IconTaskAdd02StrokeSharp,
  SolidSharp: IconTaskAdd02SolidSharp,
};