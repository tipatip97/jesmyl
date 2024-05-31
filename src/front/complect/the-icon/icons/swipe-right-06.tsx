import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21.0005 4.5H15.0005M21.0005 4.5C21.0005 3.79977 19.0062 2.49153 18.5005 2M21.0005 4.5C21.0005 5.20023 19.0062 6.50847 18.5005 7',
  d2: 'M6.51233 13.515V3.48599C6.51233 2.66436 7.17917 1.99829 8.00176 1.99829C8.82435 1.99829 9.49119 2.66436 9.49119 3.48599V8.68808M9.49119 8.68808V11.0117M9.49119 8.68808C10.2961 7.56965 12.0987 7.94217 12.4824 9.68104C12.4887 9.7099 12.4939 9.73898 12.4981 9.76822M12.5132 11.0077V10.0048C12.5132 9.92575 12.5093 9.84644 12.4981 9.76822M12.4981 9.76822C12.9913 8.41786 15.2558 8.93285 15.5024 10.8611M15.5024 10.8611V12.0071M15.5024 10.8611C15.9063 9.37059 18.5581 10.4123 18.5007 12.1547V15.3332C18.4977 17.0592 18.2096 18.3108 17.1835 19.3402C16.2355 20.472 16.4585 21.1056 16.4349 22.0019M6.51233 8.99075C5.1934 10.1846 3.69642 11.8162 3.5053 12.2025C2.61598 13.5547 2.93227 14.6155 4.19609 16.4177C5.13663 17.7589 6.3981 19.2536 6.46418 19.3284C7.13679 20.0898 7.00497 20.696 7.00497 21.9909',
  d3: 'M6.56349 19.4747L4.56826 16.9775C3.55904 15.4911 3.05442 14.7478 3.00616 13.9355C2.991 13.6804 3.0091 13.4245 3.06001 13.1739C3.22215 12.3759 3.82652 11.7083 5.03527 10.373L6.50097 8.99829V3.49829C6.50097 2.66986 7.17254 1.99829 8.00097 1.99829C8.8294 1.99829 9.50097 2.66986 9.50097 3.49829V7.99829H10.501C11.6056 7.99829 12.501 8.89372 12.501 9.99829V8.99829H13.501C14.6056 8.99829 15.501 9.89372 15.501 10.9983V9.99829L16.8298 10.2198C17.7935 10.3804 18.5001 11.2138 18.501 12.1906V13.833C18.501 15.8489 18.501 16.8569 18.2093 17.6663C17.9832 18.2936 17.6352 18.862 17.1926 19.3445C16.7591 19.8171 16.4314 20.4019 16.4314 21.0432V21.9983H7.00097V20.7231C7.00097 20.2694 6.8467 19.8292 6.56349 19.4747Z',
  d4: 'M21.001 4.49829H15.001M21.001 4.49829C21.001 3.79806 19.0067 2.48982 18.501 1.99829M21.001 4.49829C21.001 5.19852 19.0067 6.50676 18.501 6.99829',
  d5: 'M6.51184 13.515V3.48599C6.51184 2.66436 7.17868 1.99829 8.00127 1.99829C8.82386 1.99829 9.4907 2.66436 9.4907 3.48599V8.68808M9.4907 8.68808V11.0117M9.4907 8.68808C10.2956 7.56965 12.0982 7.94217 12.4819 9.68104C12.4882 9.7099 12.4934 9.73898 12.4976 9.76822M12.4976 9.76822C12.5088 9.84644 12.5127 9.92575 12.5127 10.0048V11.0077M12.4976 9.76822C12.9908 8.41786 15.2553 8.93285 15.5019 10.8611M15.5019 10.8611V12.0071M15.5019 10.8611C15.9058 9.37059 18.5576 10.4123 18.5002 12.1547V15.3332C18.4972 17.0592 18.2091 18.3108 17.183 19.3402C16.235 20.472 16.458 21.1056 16.4344 22.0019M6.51184 8.99075C5.19291 10.1846 3.69593 11.8162 3.50481 12.2025C2.61549 13.5547 2.93178 14.6155 4.1956 16.4177C5.13614 17.7589 6.39761 19.2536 6.46369 19.3284C7.1363 20.0898 7.00448 20.696 7.00448 21.9909',
  d6: 'M21.0005 4.49829H15.0005M21.0005 4.49829C21.0005 3.79806 19.0062 2.48982 18.5005 1.99829M21.0005 4.49829C21.0005 5.19852 19.0062 6.50676 18.5005 6.99829',
  d7: 'M14.75 5.50562C14.1977 5.50562 13.75 5.0579 13.75 4.50562C13.75 3.95333 14.1977 3.50562 14.75 3.50562L17.25 3.50562L17.25 2.91136C17.2499 2.73572 17.2497 2.52007 17.2718 2.34363L17.2722 2.34028C17.288 2.21384 17.3598 1.63779 17.9254 1.36343C18.4923 1.08847 18.9924 1.39041 19.1006 1.45573L19.5691 1.79487C19.9449 2.0895 20.4594 2.4952 20.8504 2.87563C21.0455 3.06546 21.2467 3.28273 21.4056 3.51364C21.5468 3.7189 21.75 4.06909 21.75 4.49976C21.75 4.93042 21.5468 5.28062 21.4056 5.48588C21.2467 5.71678 21.0455 5.93405 20.8504 6.12388C20.4594 6.50431 19.9449 6.91 19.5691 7.20464L19.1006 7.54378C18.9924 7.6091 18.4922 7.91104 17.9254 7.63608C17.3598 7.36172 17.288 6.78568 17.2722 6.65923L17.2718 6.65588C17.2497 6.47944 17.2499 6.26379 17.25 6.08815L17.25 5.50562L14.75 5.50562Z',
  d8: 'M9.30926 11.3018C9.54796 11.3018 9.74147 11.1143 9.74147 10.883V7.76536C9.74147 7.58795 9.74147 7.49924 9.809 7.41645C9.87653 7.33366 9.94438 7.31974 10.0801 7.2919C10.2487 7.25731 10.4112 7.24835 10.5 7.24991C11.1087 7.24991 11.6712 7.44768 12.1268 7.78246C12.2223 7.85264 12.27 7.88773 12.3024 7.9516C12.3347 8.01548 12.3347 8.08343 12.3347 8.21933V10.883C12.3347 11.1143 12.5282 11.3018 12.7669 11.3018C13.0056 11.3018 13.1991 11.1143 13.1991 10.883V8.87569C13.1991 8.58563 13.1991 8.4406 13.3006 8.35103C13.4021 8.26146 13.534 8.27801 13.7979 8.3111C14.6863 8.42256 15.277 8.79115 15.6875 9.33252C15.7365 9.39716 15.761 9.42949 15.7767 9.47601C15.7923 9.52254 15.7923 9.56881 15.7923 9.66135V11.9999C15.7923 12.2312 15.9858 12.4187 16.2245 12.4187C16.4632 12.4187 16.6567 12.2312 16.6567 11.9999V10.0816C16.6567 9.79016 16.6567 9.64444 16.7749 9.5544C16.893 9.46435 17.0119 9.49703 17.2496 9.5624C18.385 9.87468 19.2489 11.0423 19.25 12.1922L19.25 14.0118C19.2503 15.8577 19.2505 16.988 18.9139 17.9222C18.6535 18.6448 18.2529 19.2986 17.7442 19.8531C17.3791 20.2511 17.1804 20.6629 17.1804 21.0448C17.1804 21.9865 16.417 22.7499 15.4753 22.7499L8.22222 22.75C8.02199 22.7503 7.81349 22.7506 7.62474 22.7092C6.95791 22.5628 6.4371 22.042 6.29071 21.3752C6.24927 21.1864 6.24967 20.925 6.25 20.7247C6.25 20.4412 6.15358 20.166 5.97657 19.9445L3.92578 17.3694C3.439 16.6525 3.04344 16.0699 2.76761 15.5647C2.48104 15.0399 2.28969 14.5401 2.25651 13.9816C2.23749 13.6615 2.2602 13.3404 2.32406 13.0261C2.43545 12.4779 2.69502 12.0094 3.05239 11.5289C3.38461 11.0822 3.95731 10.4497 4.51704 9.83155C4.85152 9.51298 5.01876 9.35369 5.16385 9.37541C5.21482 9.38304 5.26296 9.40367 5.30364 9.43532C5.41943 9.5254 5.41943 9.75636 5.41943 10.2183V13.6752C5.41943 13.9065 5.61294 14.094 5.85164 14.094C6.09034 14.094 6.28384 13.9065 6.28384 13.6752V2.54637C6.28384 1.83027 6.86435 1.24976 7.58045 1.24976C8.29655 1.24976 8.87706 1.83027 8.87706 2.54637V10.883C8.87706 11.1143 9.07057 11.3018 9.30926 11.3018Z',
  d9: 'M9.70146 8.01263V11.0097M9.70146 8.01263H11.3891M9.70146 8.01263V4.84106C9.70146 4.56912 9.75868 3.44072 9.62221 2.99995C9.19721 2.00139 7.98704 1.69536 7.18591 2.33685C6.84593 2.60907 6.60435 3.13418 6.60435 3.51891V14.1263M11.3891 8.01263C12.1524 8.01263 12.6124 8.59671 12.8601 9.45218L14.4524 9.51118M11.3891 8.01263C12.1716 8.06915 12.7775 8.72067 12.7775 9.50545V12.0186M7.12667 21.9995V19.9957C5.68912 18.225 4.7947 17.3389 3.71728 15.6666C2.14615 13.4601 3.20128 11.666 6.42224 9.17282M14.4524 9.51118C15.1415 9.48236 15.8908 10.3425 16.0033 10.9529L17.716 11.0243C18.7026 11.1102 19.0584 12.1484 18.9935 12.9626L18.9463 16.0777C18.9935 18.119 17.5781 19.0925 16.8527 19.9833V21.9834M14.4524 9.51118L14.6502 9.54715C15.3621 9.67665 15.8796 10.297 15.8796 11.0208V12.9921',
  d10: 'M15.0005 4.50276H20.3656M18.5005 2.00049L21.0005 4.50276L18.5005 7.00502',
  d11: 'M7.75311 1.25C6.98402 1.25 6.38241 1.83514 6.38241 2.53109V13.671H5.58175V9.50164C5.17117 9.84794 4.23115 10.6477 3.85047 11.0219C3.08112 11.7781 2.48974 12.5604 2.31119 13.3896C2.25841 13.6347 2.23967 13.8849 2.25537 14.1342C2.27872 14.505 2.41179 14.8792 2.70125 15.3794C2.99283 15.8832 3.42309 16.4824 4.01853 17.3099L6.97275 20.771V22.75H17.3064V20.7566C17.5671 20.4885 18.1277 19.9082 18.5455 19.423C18.7544 19.1802 18.9515 18.9372 19.1109 18.7156C19.2742 18.4884 19.3822 18.3051 19.4307 18.1781C19.5835 17.7782 19.6658 17.3148 19.7077 16.6588C19.7498 15.9996 19.75 15.1716 19.75 14.0439V12.557C19.75 11.8495 19.1611 11.2759 18.4346 11.2759H17.0086V13.114H16.2079V10.886C16.2079 10.1785 15.619 9.60492 14.8926 9.60492H13.4665V12H12.6659V9.21503C12.6659 8.5075 12.077 7.93394 11.3505 7.93394H9.92447V10.886H9.12382V2.53109C9.12382 1.83514 8.52221 1.25 7.75311 1.25Z',
  d12: 'M18.543 2.25L21.7502 5.45711L18.543 8.66421L17.1288 7.25L17.9217 6.45711H14.3359V4.45711L17.9217 4.45711L17.1288 3.66421L18.543 2.25Z',
} as const;

export const IconSwipeRight06StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-06-stroke-rounded IconSwipeRight06StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSwipeRight06DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-06-duotone-rounded IconSwipeRight06DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSwipeRight06TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-06-twotone-rounded IconSwipeRight06TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconSwipeRight06SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-06-solid-rounded IconSwipeRight06SolidRounded"
    >
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

export const IconSwipeRight06BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-06-bulk-rounded IconSwipeRight06BulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeRight06StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-06-stroke-sharp IconSwipeRight06StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeRight06SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-06-solid-sharp IconSwipeRight06SolidSharp"
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

export const iconPackOfSwipeRight06: TheIconSelfPack = {
  name: 'SwipeRight06',
  StrokeRounded: IconSwipeRight06StrokeRounded,
  DuotoneRounded: IconSwipeRight06DuotoneRounded,
  TwotoneRounded: IconSwipeRight06TwotoneRounded,
  SolidRounded: IconSwipeRight06SolidRounded,
  BulkRounded: IconSwipeRight06BulkRounded,
  StrokeSharp: IconSwipeRight06StrokeSharp,
  SolidSharp: IconSwipeRight06SolidSharp,
};