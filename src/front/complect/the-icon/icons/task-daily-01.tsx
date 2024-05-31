import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.5 3.5C5.9442 3.54667 5.01661 3.71984 4.37477 4.36227C3.49609 5.24177 3.49609 6.6573 3.49609 9.48836L3.49609 15.9944C3.49609 18.8255 3.49609 20.241 4.37477 21.1205C5.25345 22 6.66767 22 9.49609 22L14.4961 22C17.3245 22 18.7387 22 19.6174 21.1205C20.4961 20.241 20.4961 18.8255 20.4961 15.9944V9.48836C20.4961 6.6573 20.4961 5.24177 19.6174 4.36228C18.9756 3.71984 18.048 3.54667 16.4922 3.5',
  d2: 'M7.49609 3.75C7.49609 2.7835 8.2796 2 9.24609 2H14.7461C15.7126 2 16.4961 2.7835 16.4961 3.75C16.4961 4.7165 15.7126 5.5 14.7461 5.5H9.24609C8.2796 5.5 7.49609 4.7165 7.49609 3.75Z',
  d3: 'M13.5 11H17',
  d4: 'M7 12C7 12 7.5 12 8 13C8 13 9.58824 10.5 11 10',
  d5: 'M13.5 17H17',
  d6: 'M8 17H9',
  d7: 'M7.51382 3.5C7.50214 3.58165 7.49609 3.66512 7.49609 3.75C7.49609 4.7165 8.2796 5.5 9.24609 5.5H14.7461C15.7126 5.5 16.4961 4.7165 16.4961 3.75C16.4961 3.66512 16.4901 3.58165 16.4784 3.5H16.4922C18.048 3.54667 18.9756 3.71984 19.6174 4.36228C20.4961 5.24177 20.4961 6.6573 20.4961 9.48836V15.9944C20.4961 18.8255 20.4961 20.241 19.6174 21.1205C18.7387 22 17.3245 22 14.4961 22L9.49609 22C6.66767 22 5.25345 22 4.37477 21.1205C3.49609 20.241 3.49609 18.8255 3.49609 15.9944V9.48836C3.49609 6.6573 3.49609 5.24177 4.37477 4.36227C5.01661 3.71984 5.9442 3.54667 7.5 3.5H7.51382Z',
  d8: 'M7.49805 3C7.49805 2.0335 8.28155 1.25 9.24805 1.25H14.748C15.7145 1.25 16.498 2.0335 16.498 3C16.498 3.9665 15.7145 4.75 14.748 4.75H9.24805C8.28155 4.75 7.49805 3.9665 7.49805 3Z',
  d9: 'M6.08434 2.8529C6.17214 2.84079 6.24805 2.9125 6.24805 3.00113C6.24805 4.65798 7.59119 6.00113 9.24805 6.00113L14.748 6.00113C16.4049 6.00113 17.748 4.65798 17.748 3.00113C17.748 2.9125 17.824 2.84079 17.9118 2.8529C18.8119 2.97705 19.5595 3.24236 20.1499 3.83332C20.7517 4.43567 21.0105 5.19403 21.1315 6.09477C21.2481 6.96246 21.2481 8.06574 21.2481 9.43469L21.2481 16.0503C21.2481 17.4193 21.2481 18.5226 21.1315 19.3903C21.0105 20.291 20.7517 21.0494 20.1499 21.6517C19.5481 22.2542 18.7901 22.5133 17.8899 22.6345C17.0229 22.7512 15.9205 22.7512 14.553 22.7511L9.44311 22.7511C8.07557 22.7511 6.97322 22.7512 6.10621 22.6345C5.20597 22.5133 4.44804 22.2542 3.84615 21.6517C3.24436 21.0494 2.98555 20.291 2.86456 19.3903C2.74802 18.5226 2.74803 17.4194 2.74805 16.0505V16.0504L2.74805 9.43465V9.43463C2.74803 8.06572 2.74801 6.96243 2.86456 6.09477C2.98555 5.19403 3.24436 4.43567 3.84615 3.83332C4.43657 3.24236 5.18423 2.97705 6.08434 2.8529ZM12.752 11C12.752 10.5858 13.0877 10.25 13.502 10.25H17.002C17.4162 10.25 17.752 10.5858 17.752 11C17.752 11.4142 17.4162 11.75 17.002 11.75L13.502 11.75C13.0877 11.75 12.752 11.4142 12.752 11ZM11.2523 10.7072C11.6428 10.5689 11.8472 10.1403 11.7089 9.74982C11.5706 9.35937 11.142 9.15495 10.7516 9.29323C10.2694 9.46399 9.82187 9.78384 9.4431 10.116C9.05657 10.455 8.69822 10.8457 8.39663 11.2073C8.25048 11.3825 8.11549 11.5534 7.9948 11.7119C7.90659 11.6294 7.81819 11.5596 7.73048 11.5012C7.57155 11.3952 7.42249 11.3314 7.29393 11.2947L7.29076 11.2938C7.22723 11.2756 7.13834 11.2502 7.00195 11.2502C6.58774 11.2502 6.25195 11.586 6.25195 12.0002C6.25195 12.3749 6.52676 12.6855 6.88583 12.7413L6.89162 12.7448L6.89843 12.7492C6.95413 12.7864 7.12562 12.9246 7.33113 13.3356C7.45202 13.5774 7.69365 13.7354 7.9636 13.7492C8.23349 13.763 8.4902 13.6302 8.63517 13.4021C8.67806 13.3377 8.80376 13.1492 8.8849 13.0343C9.04771 12.8036 9.27796 12.4924 9.54846 12.1681C9.8204 11.8422 10.1238 11.5142 10.4321 11.2438C10.7482 10.9666 11.0286 10.7864 11.2523 10.7072ZM12.752 17C12.752 16.5858 13.0877 16.25 13.502 16.25L17.002 16.25C17.4162 16.25 17.752 16.5858 17.752 17C17.752 17.4142 17.4162 17.75 17.002 17.75L13.502 17.75C13.0877 17.75 12.752 17.4142 12.752 17ZM8.00195 16C7.44967 16 7.00195 16.4477 7.00195 17C7.00195 17.5523 7.44967 18 8.00195 18H9.00195C9.55424 18 10.002 17.5523 10.002 17C10.002 16.4477 9.55424 16 9.00195 16H8.00195Z',
  d10: 'M6.08434 2.8529C6.17214 2.84079 6.24805 2.9125 6.24805 3.00113C6.24805 4.65798 7.59119 6.00113 9.24805 6.00113H14.748C16.4049 6.00113 17.748 4.65798 17.748 3.00113C17.748 2.9125 17.824 2.84079 17.9118 2.8529C18.8119 2.97705 19.5595 3.24236 20.1499 3.83332C20.7517 4.43567 21.0105 5.19403 21.1315 6.09477C21.2481 6.96246 21.2481 8.06574 21.2481 9.43469V16.0503C21.2481 17.4193 21.2481 18.5226 21.1315 19.3903C21.0105 20.291 20.7517 21.0494 20.1499 21.6517C19.5481 22.2542 18.7901 22.5133 17.8899 22.6345C17.0229 22.7512 15.9205 22.7512 14.553 22.7511L9.44311 22.7511C8.07557 22.7511 6.97321 22.7512 6.10621 22.6345C5.20597 22.5133 4.44804 22.2542 3.84615 21.6517C3.24436 21.0494 2.98555 20.291 2.86456 19.3903C2.74801 18.5226 2.74803 17.4193 2.74805 16.0504V9.43465C2.74803 8.06574 2.74801 6.96244 2.86456 6.09477C2.98555 5.19403 3.24436 4.43567 3.84615 3.83332C4.43657 3.24236 5.18423 2.97705 6.08434 2.8529Z',
  d11: 'M12.752 11C12.752 10.5858 13.0877 10.25 13.502 10.25L17.002 10.25C17.4162 10.25 17.752 10.5858 17.752 11C17.752 11.4142 17.4162 11.75 17.002 11.75L13.502 11.75C13.0877 11.75 12.752 11.4142 12.752 11Z',
  d12: 'M11.7089 9.74982C11.8472 10.1403 11.6428 10.5689 11.2523 10.7072C11.0286 10.7864 10.7482 10.9666 10.4321 11.2438C10.1238 11.5142 9.8204 11.8422 9.54845 12.1681C9.27796 12.4924 9.04771 12.8036 8.8849 13.0343C8.80376 13.1492 8.67806 13.3377 8.63517 13.4021C8.4902 13.6302 8.23349 13.763 7.9636 13.7492C7.69365 13.7354 7.45202 13.5774 7.33113 13.3356C7.12562 12.9246 6.95413 12.7864 6.89843 12.7492C6.89361 12.746 6.88941 12.7434 6.88583 12.7413C6.52676 12.6855 6.25195 12.3749 6.25195 12.0002C6.25195 11.586 6.58774 11.2502 7.00195 11.2502C7.13834 11.2502 7.22723 11.2756 7.29076 11.2938L7.29393 11.2947C7.42249 11.3314 7.57155 11.3952 7.73048 11.5012C7.81819 11.5596 7.90659 11.6294 7.9948 11.7119C8.11549 11.5534 8.25048 11.3825 8.39663 11.2073C8.69822 10.8457 9.05657 10.455 9.4431 10.116C9.82187 9.78384 10.2694 9.46399 10.7516 9.29323C11.142 9.15495 11.5706 9.35937 11.7089 9.74982Z',
  d13: 'M12.752 17C12.752 16.5858 13.0877 16.25 13.502 16.25H17.002C17.4162 16.25 17.752 16.5858 17.752 17C17.752 17.4142 17.4162 17.75 17.002 17.75H13.502C13.0877 17.75 12.752 17.4142 12.752 17Z',
  d14: 'M7.00195 17C7.00195 16.4477 7.44967 16 8.00195 16H9.00195C9.55424 16 10.002 16.4477 10.002 17C10.002 17.5523 9.55424 18 9.00195 18H8.00195C7.44967 18 7.00195 17.5523 7.00195 17Z',
  d15: 'M15.5 3.5H20V22L3 22V3.5H7.5',
  d16: 'M15.5 2H7.5V5H15.5V2Z',
  d17: 'M13 11L17 11',
  d18: 'M6.5 10.5L8 12L11 9',
  d19: 'M13 17H17',
  d20: 'M7.5 17H9.5',
  d21: 'M15.9994 1.25H7.99936V4.75H15.9994V1.25Z',
  d22: 'M3.5 3H6.75L6.75 6H17.25V3H20.5C20.9142 3 21.25 3.33579 21.25 3.75V22C21.25 22.1989 21.171 22.3897 21.0303 22.5303C20.8897 22.671 20.6989 22.75 20.5 22.75L3.5 22.75C3.08579 22.75 2.75 22.4142 2.75 22V3.75C2.75 3.33579 3.08579 3 3.5 3ZM17.5 12.75H13.5V11.25H17.5V12.75ZM12.0294 10.5304L10.9688 9.46973L8.49908 11.9394L7.52941 10.9697L6.46875 12.0304L8.49908 14.0607L12.0294 10.5304ZM17.5 18.75H13.5V17.25H17.5V18.75ZM8 19H10V17H8V19Z',
} as const;

export const IconTaskDaily01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-daily-01-stroke-rounded IconTaskDaily01StrokeRounded"
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
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconTaskDaily01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-daily-01-duotone-rounded IconTaskDaily01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconTaskDaily01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-daily-01-twotone-rounded IconTaskDaily01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconTaskDaily01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-daily-01-solid-rounded IconTaskDaily01SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconTaskDaily01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-daily-01-bulk-rounded IconTaskDaily01BulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTaskDaily01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-daily-01-stroke-sharp IconTaskDaily01StrokeSharp"
    >
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
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTaskDaily01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-daily-01-solid-sharp IconTaskDaily01SolidSharp"
    >
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTaskDaily01: TheIconSelfPack = {
  name: 'TaskDaily01',
  StrokeRounded: IconTaskDaily01StrokeRounded,
  DuotoneRounded: IconTaskDaily01DuotoneRounded,
  TwotoneRounded: IconTaskDaily01TwotoneRounded,
  SolidRounded: IconTaskDaily01SolidRounded,
  BulkRounded: IconTaskDaily01BulkRounded,
  StrokeSharp: IconTaskDaily01StrokeSharp,
  SolidSharp: IconTaskDaily01SolidSharp,
};