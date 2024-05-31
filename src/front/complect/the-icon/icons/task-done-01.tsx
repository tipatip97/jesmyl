import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.5 20C13.5 20 14.5 20 15.5 22C15.5 22 18.6765 17 21.5 16',
  d2: 'M7 16H11M7 11H15',
  d3: 'M6.5 3.5C4.9442 3.54667 4.01661 3.71984 3.37477 4.36227C2.49609 5.24177 2.49609 6.6573 2.49609 9.48836L2.49609 15.9944C2.49609 18.8255 2.49609 20.241 3.37477 21.1205C4.25345 22 5.66767 22 8.49609 22L10.9961 22M15.4922 3.5C17.048 3.54667 17.9756 3.71984 18.6174 4.36228C19.4961 5.24177 19.4961 6.6573 19.4961 9.48836V13.5',
  d4: 'M6.49609 3.75C6.49609 2.7835 7.2796 2 8.24609 2H13.7461C14.7126 2 15.4961 2.7835 15.4961 3.75C15.4961 4.7165 14.7126 5.5 13.7461 5.5H8.24609C7.2796 5.5 6.49609 4.7165 6.49609 3.75Z',
  d5: 'M6.51382 3.5C6.50214 3.58165 6.49609 3.66512 6.49609 3.75C6.49609 4.7165 7.2796 5.5 8.24609 5.5H13.7461C14.7126 5.5 15.4961 4.7165 15.4961 3.75C15.4961 3.66512 15.4901 3.58165 15.4784 3.5H15.4922C17.048 3.54667 17.9756 3.71984 18.6174 4.36228C19.4961 5.24177 19.4961 6.6573 19.4961 9.48836V15.9944C19.4961 18.8255 19.4961 20.241 18.6174 21.1205C17.7387 22 16.3245 22 13.4961 22L8.49609 22C5.66767 22 4.25345 22 3.37477 21.1205C2.49609 20.241 2.49609 18.8255 2.49609 15.9944V9.48836C2.49609 6.6573 2.49609 5.24177 3.37477 4.36227C4.01661 3.71984 4.9442 3.54667 6.5 3.5H6.51382Z',
  d6: 'M7 16H11',
  d7: 'M7 11H15',
  d8: 'M4.96129 2.7279C5.04909 2.71579 5.125 2.7875 5.125 2.87613C5.125 4.53298 6.46815 5.87613 8.125 5.87613L13.625 5.87613C15.2819 5.87613 16.625 4.53298 16.625 2.87613C16.625 2.7875 16.7009 2.71579 16.7887 2.7279C17.6888 2.85205 18.4365 3.11736 19.0269 3.70832C19.6287 4.31067 19.8875 5.06903 20.0085 5.96977C20.125 6.83746 20.125 7.94074 20.125 9.30969L20.125 13.2906C20.125 13.4784 20.125 13.5722 20.0803 13.6447C20.0355 13.7171 19.9465 13.7617 19.7685 13.8509C18.9472 14.2625 18.2127 14.8185 17.5999 15.356C16.7747 16.0796 16.0214 16.9029 15.3984 17.6497L15.3984 17.6497C15.344 17.715 15.3167 17.7476 15.2906 17.7678C15.2136 17.827 15.132 17.8445 15.0375 17.8218C15.0054 17.8141 14.9629 17.7933 14.8778 17.7517L14.8778 17.7517C14.6547 17.6426 14.4391 17.5617 14.2356 17.5036C14.1112 17.4668 13.8042 17.3762 13.377 17.3762C11.9962 17.3762 10.877 18.4955 10.877 19.8762C10.877 20.9969 11.6135 21.9442 12.6297 22.2623L12.6342 22.2637C12.6684 22.2743 12.6882 22.2805 12.7123 22.3088C12.8169 22.4318 12.7297 22.6261 12.5682 22.6261L8.32006 22.6261C6.95252 22.6261 5.85017 22.6262 4.98316 22.5095C4.08293 22.3883 3.325 22.1292 2.72311 21.5267C2.12131 20.9244 1.8625 20.166 1.74152 19.2653C1.62497 18.3976 1.62498 17.2943 1.625 15.9255V15.9254L1.625 9.30963V9.3096C1.62498 7.94071 1.62497 6.83743 1.74151 5.96977C1.8625 5.06903 2.12131 4.31067 2.72311 3.70832C3.31352 3.11736 4.06119 2.85205 4.96129 2.7279ZM6.87695 10.125C6.46274 10.125 6.12695 10.4608 6.12695 10.875C6.12695 11.2892 6.46274 11.625 6.87695 11.625L14.877 11.625C15.2912 11.625 15.627 11.2892 15.627 10.875C15.627 10.4608 15.2912 10.125 14.877 10.125L6.87695 10.125ZM6.87695 15.125C6.46274 15.125 6.12695 15.4608 6.12695 15.875C6.12695 16.2892 6.46274 16.625 6.87695 16.625H10.877C11.2912 16.625 11.627 16.2892 11.627 15.875C11.627 15.4608 11.2912 15.125 10.877 15.125H6.87695Z',
  d9: 'M22.3176 15.5414C22.502 16.062 22.2294 16.6335 21.7088 16.8179C21.1752 17.0069 20.5587 17.4138 19.9057 17.9865C19.263 18.5501 18.6378 19.2271 18.0841 19.8909C17.5322 20.5524 17.0635 21.1861 16.7324 21.6551C16.5672 21.8891 16.307 22.2794 16.2191 22.4115C16.0258 22.7156 15.6837 22.8924 15.3239 22.874C14.9639 22.8555 14.6418 22.6448 14.4806 22.3225C14.0399 21.4411 13.6446 21.0902 13.4453 20.9573C13.361 20.9011 13.304 20.8786 13.2814 20.8709C12.773 20.8237 12.375 20.396 12.375 19.8753C12.375 19.323 12.8227 18.8753 13.375 18.8753C13.6094 18.8753 13.7184 18.9155 13.8216 18.945C14.0295 19.0044 14.2803 19.1103 14.5547 19.2932C14.829 19.4761 15.1166 19.7288 15.4054 20.0747C15.7206 19.6439 16.109 19.1363 16.5483 18.6097C17.1416 17.8985 17.84 17.1379 18.587 16.4828C19.3236 15.8368 20.163 15.2436 21.0412 14.9326C21.5618 14.7483 22.1332 15.0208 22.3176 15.5414Z',
  d10: 'M6.375 2.875C6.375 1.9085 7.1585 1.125 8.125 1.125H13.625C14.5915 1.125 15.375 1.9085 15.375 2.875C15.375 3.8415 14.5915 4.625 13.625 4.625H8.125C7.1585 4.625 6.375 3.8415 6.375 2.875Z',
  d11: 'M5.125 2.87613C5.125 2.7875 5.04909 2.71579 4.96129 2.7279C4.06119 2.85205 3.31352 3.11736 2.72311 3.70832C2.12131 4.31067 1.8625 5.06903 1.74151 5.96977C1.62497 6.83743 1.62498 7.94072 1.625 9.30963V15.9254C1.62498 17.2943 1.62497 18.3976 1.74151 19.2653C1.8625 20.166 2.12131 20.9244 2.72311 21.5267C3.325 22.1292 4.08293 22.3883 4.98316 22.5095C5.85017 22.6262 6.95252 22.6261 8.32006 22.6261L12.5682 22.6261C12.7297 22.6261 12.8169 22.4318 12.7123 22.3088C12.6872 22.2793 12.6666 22.2738 12.6297 22.2623C11.6135 21.9442 10.877 20.9969 10.877 19.8762C10.877 18.4955 11.9962 17.3762 13.377 17.3762C13.8042 17.3762 14.1112 17.4668 14.2356 17.5036C14.4391 17.5617 14.6547 17.6426 14.8778 17.7517C14.9629 17.7933 15.0054 17.8141 15.0375 17.8218C15.132 17.8445 15.2136 17.827 15.2906 17.7678C15.3167 17.7476 15.344 17.715 15.3984 17.6497C16.0214 16.9029 16.7747 16.0796 17.5999 15.356C18.2127 14.8185 18.9472 14.2625 19.7685 13.8509C19.9465 13.7617 20.0355 13.7171 20.0803 13.6447C20.125 13.5722 20.125 13.4784 20.125 13.2906V9.30969C20.125 7.94074 20.125 6.83746 20.0085 5.96977C19.8875 5.06903 19.6287 4.31067 19.0269 3.70832C18.4365 3.11736 17.6888 2.85205 16.7887 2.7279C16.7009 2.71579 16.625 2.7875 16.625 2.87613C16.625 4.53298 15.2819 5.87613 13.625 5.87613H8.125C6.46815 5.87613 5.125 4.53298 5.125 2.87613Z',
  d12: 'M6.12695 10.875C6.12695 10.4608 6.46274 10.125 6.87695 10.125H14.877C15.2912 10.125 15.627 10.4608 15.627 10.875C15.627 11.2892 15.2912 11.625 14.877 11.625H6.87695C6.46274 11.625 6.12695 11.2892 6.12695 10.875ZM6.12695 15.875C6.12695 15.4608 6.46274 15.125 6.87695 15.125H10.877C11.2912 15.125 11.627 15.4608 11.627 15.875C11.627 16.2892 11.2912 16.625 10.877 16.625H6.87695C6.46274 16.625 6.12695 16.2892 6.12695 15.875Z',
  d13: 'M13.5 20L15.5 22L21.5 16',
  d14: 'M6.5 16H11.5M6.5 11H15.5',
  d15: 'M15 3.5H19.5V13M7 3.5H2.5V22H10.5',
  d16: 'M15 2H7V5H15V2Z',
  d17: 'M22.7501 16.043L16.043 22.7501L13.3359 20.043L14.7501 18.6288L16.043 19.9217L21.3359 14.6288L22.7501 16.043Z',
  d18: 'M6.49988 1.24979H14.4999V4.74979H6.49988V1.24979Z',
  d19: 'M5.24988 2.99979H1.99988C1.58566 2.99979 1.24988 3.33557 1.24988 3.74979V21.9998C1.24988 22.414 1.58566 22.7498 1.99988 22.7498L13.9214 22.7498L11.2147 20.0431L14.7503 16.5076L16.0431 17.8005L19.7499 14.0938V3.74979C19.7499 3.33557 19.4141 2.99979 18.9999 2.99979H15.7499V5.99979H5.24988L5.24988 2.99979ZM5.99988 11.7498H14.9999V10.2498H5.99988V11.7498ZM5.99988 16.7498H10.9999V15.2498H5.99988V16.7498Z',
} as const;

export const IconTaskDone01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-done-01-stroke-rounded IconTaskDone01StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTaskDone01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-done-01-duotone-rounded IconTaskDone01DuotoneRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTaskDone01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-done-01-twotone-rounded IconTaskDone01TwotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTaskDone01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-done-01-solid-rounded IconTaskDone01SolidRounded"
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTaskDone01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-done-01-bulk-rounded IconTaskDone01BulkRounded"
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

export const IconTaskDone01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-done-01-stroke-sharp IconTaskDone01StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTaskDone01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-done-01-solid-sharp IconTaskDone01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfTaskDone01: TheIconSelfPack = {
  name: 'TaskDone01',
  StrokeRounded: IconTaskDone01StrokeRounded,
  DuotoneRounded: IconTaskDone01DuotoneRounded,
  TwotoneRounded: IconTaskDone01TwotoneRounded,
  SolidRounded: IconTaskDone01SolidRounded,
  BulkRounded: IconTaskDone01BulkRounded,
  StrokeSharp: IconTaskDone01StrokeSharp,
  SolidSharp: IconTaskDone01SolidSharp,
};