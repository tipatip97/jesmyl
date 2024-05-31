import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.9281 7.78146L15.818 8.02144C16.8009 8.28651 17.3843 9.30336 17.1209 10.2926M17.1209 10.2926L16.8824 11.1882M17.1209 10.2926C17.2526 9.798 17.7577 9.50446 18.2492 9.63699C19.2321 9.90207 19.8155 10.9189 19.5521 11.9082M19.5521 11.9082L19.3136 12.8038M19.5521 11.9082C19.6769 11.4394 20.1901 11.1955 20.6291 11.3965L20.9202 11.5298C21.74 11.9052 22.1701 12.8221 21.937 13.6977L21.5855 15.0165C21.0673 16.963 20.8081 17.9362 20.3072 18.6316C20.0167 19.035 19.4132 19.4866 18.9425 19.8036C18.5353 20.0778 18.2232 20.4807 18.0964 20.957L17.8187 22M14.451 9.57264L16.0009 3.75113C16.1985 3.00918 15.761 2.24654 15.0238 2.04774C14.2866 1.84893 13.5288 2.28924 13.3313 3.03119L10.9556 11.9537L9.90131 10.1091C9.43871 9.29977 8.3811 9.07701 7.63441 9.63163C7.06306 10.056 6.84799 10.8163 7.11154 11.48L9.21843 16.4621C9.62153 17.4153 9.6312 18.7195 9.3648 19.7202',
  d2: 'M6.95596 2.49064C6.95596 2.49064 6.70432 4.76405 6.95596 5.01188M6.95596 5.01188C7.28241 5.33331 9.55781 5.06274 9.55781 5.06274M6.95596 5.01188L10 2M5.04404 9.50936C5.04404 9.50936 5.29568 7.23595 5.04404 6.98812M5.04404 6.98812C4.71759 6.66669 2.44219 6.93726 2.44219 6.93726M5.04404 6.98812L2 10',
  d3: 'M15.818 8.02144L14.9295 7.77551L16.0009 3.75113C16.1985 3.00918 15.761 2.24654 15.0238 2.04774C14.2866 1.84893 13.5288 2.28924 13.3313 3.03119L10.9556 11.9537L9.90131 10.1091C9.43871 9.29977 8.3811 9.07701 7.63441 9.63163C7.06306 10.056 6.84799 10.8163 7.11154 11.48L9.21843 16.4621C9.62153 17.4153 9.6312 18.7195 9.3648 19.7202L17.8187 22L18.0964 20.957C18.2232 20.4807 18.5353 20.0778 18.9425 19.8036C19.4132 19.4866 20.0167 19.035 20.3073 18.6316C20.8081 17.9362 21.0673 16.963 21.5855 15.0165L21.5855 15.0165L21.937 13.6977C22.1701 12.8221 21.74 11.9052 20.9202 11.5298L20.6291 11.3965C20.1901 11.1955 19.6769 11.4394 19.5521 11.9082C19.8155 10.9189 19.2321 9.90207 18.2492 9.63699C17.7577 9.50446 17.2526 9.79799 17.1209 10.2926C17.3843 9.30336 16.8009 8.28651 15.818 8.02144Z',
  d4: 'M7.49986 5.56081C7.20697 5.8537 6.73209 5.8537 6.4392 5.56081C6.14631 5.26792 6.14631 4.79304 6.4392 4.50015L7.49986 5.56081ZM5.14141 8.15187L5.88908 8.21094V8.21094L5.14141 8.15187ZM5.77815 9.61488C5.74553 10.0278 5.38434 10.3361 4.97141 10.3035C4.55848 10.2708 4.25019 9.90966 4.28281 9.49673L5.77815 9.61488ZM2.50352 7.71745C2.09059 7.75008 1.7294 7.44178 1.69677 7.02886C1.66415 6.61593 1.97245 6.25474 2.38537 6.22212L2.50352 7.71745ZM3.84839 6.85886L3.78932 6.11119H3.78932L3.84839 6.85886ZM8.15073 5.14168L8.2098 5.88935L8.2098 5.88935L8.15073 5.14168ZM9.4956 4.28308C9.90853 4.25046 10.2697 4.55876 10.3023 4.97168C10.335 5.38461 10.0267 5.7458 9.61375 5.77842L9.4956 4.28308ZM6.22097 2.38566C6.25359 1.97274 6.61478 1.66444 7.02771 1.69707C7.44064 1.72969 7.74893 2.09088 7.71631 2.50381L6.22097 2.38566ZM6.85771 3.84867L6.11004 3.7896V3.7896L6.85771 3.84867ZM6.96864 5.03075L6.43831 5.56109L6.96864 5.03075ZM2.53033 10.5303C2.23744 10.8232 1.76256 10.8232 1.46967 10.5303C1.17678 10.2374 1.17678 9.76256 1.46967 9.46967L2.53033 10.5303ZM9.46967 1.46967C9.76256 1.17678 10.2374 1.17678 10.5303 1.46967C10.8232 1.76256 10.8232 2.23744 10.5303 2.53033L9.46967 1.46967ZM5.88908 8.21094L5.77815 9.61488L4.28281 9.49673L4.39374 8.0928L5.88908 8.21094ZM2.38537 6.22212L3.78932 6.11119L3.90746 7.60653L2.50352 7.71745L2.38537 6.22212ZM4.39374 8.0928C4.40703 7.92457 4.41761 7.78998 4.42385 7.67421C4.43012 7.55773 4.43078 7.47984 4.42774 7.42546C4.42145 7.3132 4.40451 7.4042 4.50016 7.49984L5.56081 6.43918C5.84581 6.72417 5.91048 7.07545 5.92539 7.34157C5.9395 7.59351 5.91348 7.90204 5.88908 8.21094L4.39374 8.0928ZM3.78932 6.11119C4.09804 6.0868 4.40653 6.06071 4.6583 6.07473C4.92437 6.08954 5.27571 6.15408 5.56081 6.43918L4.50015 7.49984C4.5959 7.59558 4.6871 7.57865 4.57492 7.57241C4.52056 7.56938 4.44268 7.57007 4.32617 7.57637C4.21036 7.58263 4.07577 7.59323 3.90746 7.60653L3.78932 6.11119ZM8.09166 4.39401L9.4956 4.28308L9.61375 5.77842L8.2098 5.88935L8.09166 4.39401ZM7.71631 2.50381L7.60538 3.90774L6.11004 3.7896L6.22097 2.38566L7.71631 2.50381ZM8.2098 5.88935C7.90092 5.91375 7.59243 5.93977 7.34055 5.92566C7.07436 5.91074 6.72324 5.84602 6.43831 5.56109L7.49896 4.50042C7.40339 4.40485 7.3124 4.42173 7.42447 4.42801C7.4788 4.43105 7.55665 4.43039 7.6731 4.42412C7.78885 4.41788 7.92342 4.4073 8.09166 4.39401L8.2098 5.88935ZM7.60538 3.90774C7.59209 4.07598 7.58151 4.21055 7.57527 4.3263C7.569 4.44275 7.56834 4.5206 7.57138 4.57493C7.57766 4.68699 7.59454 4.596 7.49896 4.50042L6.43831 5.56109C6.15337 5.27615 6.08865 4.92503 6.07373 4.65884C6.05962 4.40696 6.08564 4.09848 6.11004 3.7896L7.60538 3.90774ZM5.56081 7.49984L2.53033 10.5303L1.46967 9.46967L4.50015 6.43918L5.56081 7.49984ZM10.5303 2.53033L7.49986 5.56081L6.4392 4.50015L9.46967 1.46967L10.5303 2.53033Z',
  d5: 'M6.30921 11.2891C6.2967 11.2842 6.28374 11.2949 6.28612 11.3081C6.31327 11.459 6.35567 11.6089 6.4139 11.7555L6.42018 11.7708L8.52707 16.7529C8.85134 17.5197 8.87324 18.6479 8.63946 19.526C8.53314 19.9253 8.76992 20.3354 9.16894 20.4431L17.6228 22.7229C17.8153 22.7748 18.0205 22.7479 18.1931 22.6482C18.3657 22.5486 18.4916 22.3843 18.5429 22.1917L18.8205 21.1487C18.8951 20.8684 19.0853 20.6099 19.3608 20.4245C19.8229 20.1133 20.536 19.5951 20.9152 19.0687C21.2283 18.6341 21.4471 18.1371 21.6504 17.5302C21.8501 16.9341 22.0495 16.1852 22.303 15.2329L22.6611 13.8896C22.9311 12.8753 22.5803 11.8157 21.7436 11.1635C21.5174 10.9872 21.4044 10.8991 21.2533 10.9476C21.1023 10.996 21.0556 11.1539 20.9623 11.4695L20.4929 13.0562C20.4312 13.2807 20.1933 13.4143 19.9616 13.3545C19.7298 13.2947 19.592 13.0643 19.6537 12.8397L20.2138 10.8271C20.2395 10.735 20.2523 10.6889 20.2487 10.6372C20.245 10.5855 20.2286 10.5481 20.1959 10.4734C19.9544 9.92215 19.4863 9.41588 18.9206 9.11227C18.7049 8.99654 18.5971 8.93867 18.4656 8.99333C18.334 9.048 18.2935 9.18371 18.2124 9.45514L17.6778 11.2438C17.6161 11.4683 17.3782 11.6019 17.1465 11.5421C16.9148 11.4823 16.7769 11.2519 16.8386 11.0273L17.5065 8.74454C17.5433 8.61884 17.5616 8.556 17.5499 8.48758C17.5381 8.41916 17.505 8.37317 17.4386 8.28119C17.1024 7.81515 16.6106 7.45728 16.0127 7.29603C15.7755 7.23273 15.6569 7.20107 15.5505 7.26095C15.549 7.26181 15.5472 7.26282 15.5457 7.2637C15.4404 7.32553 15.4048 7.45561 15.3337 7.71577L15.3026 7.82969L14.8625 9.43134C14.8008 9.65586 14.5629 9.78941 14.3312 9.72964C14.0994 9.66986 13.9616 9.4394 14.0233 9.21487L15.8911 2.82141C16.0693 2.21138 15.7122 1.57385 15.0989 1.40711C14.5017 1.24472 13.8844 1.59053 13.7109 2.18468L10.8151 12.1025C10.7698 12.2674 10.6262 12.3894 10.4516 12.4114C10.277 12.4335 10.1059 12.3511 10.0186 12.203L8.79777 10.1337C8.39079 9.44382 7.46355 9.25584 6.80882 9.72701C6.52384 9.93209 6.33909 10.2298 6.27486 10.5527C6.26056 10.6487 6.25222 10.7458 6.25 10.8433C6.2537 10.9852 6.2805 11.128 6.33199 11.2665C6.33725 11.2807 6.32325 11.2946 6.30921 11.2891Z',
  d6: 'M10.5303 1.46955C10.2374 1.17665 9.76256 1.17665 9.46967 1.46955L8.26195 2.67727L7.49896 1.91428C7.29205 1.70737 6.9837 1.63969 6.70915 1.74093C6.43461 1.84217 6.24401 2.09383 6.22097 2.38554L6.11004 3.78947L6.10721 3.82532C6.08367 4.12259 6.06035 4.41701 6.07423 4.65948C6.08949 4.9261 6.15487 5.27636 6.4392 5.56069C6.72375 5.84524 7.07416 5.91033 7.34067 5.92538C7.58168 5.93899 7.87446 5.91579 8.17 5.89238L8.2098 5.88923L9.61375 5.7783C9.90545 5.75525 10.1571 5.56466 10.2584 5.29011C10.3596 5.01557 10.2919 4.70721 10.085 4.5003L9.32262 3.73792L10.5303 2.53021C10.8232 2.23731 10.8232 1.76244 10.5303 1.46955Z',
  d7: 'M3.83187 6.1077L3.78932 6.11107L2.38537 6.22199C2.09367 6.24504 1.842 6.43564 1.74076 6.71018C1.63952 6.98473 1.7072 7.29309 1.91412 7.5L2.67667 8.26254L1.46967 9.46955C1.17678 9.76244 1.17678 10.2373 1.46967 10.5302C1.76256 10.8231 2.23744 10.8231 2.53033 10.5302L3.73734 9.3232L4.50015 10.086C4.70707 10.2929 5.01542 10.3606 5.28996 10.2594C5.56451 10.1581 5.75511 9.90646 5.77815 9.61475L5.88908 8.21082L5.89231 8.17004C5.9157 7.87486 5.93888 7.5823 5.92539 7.34145C5.91048 7.07533 5.84581 6.72405 5.56081 6.43905C5.27571 6.15396 4.92437 6.08942 4.6583 6.07461C4.4181 6.06123 4.12627 6.08437 3.83187 6.1077Z',
  d8: 'M14.9281 8.22091L15.818 8.46089C16.8009 8.72596 17.3843 9.74281 17.1209 10.7321M17.1209 10.7321L16.8824 11.6277M17.1209 10.7321C17.2526 10.2374 17.7577 9.94391 18.2492 10.0764C19.2321 10.3415 19.8155 11.3584 19.5521 12.3477M19.5521 12.3477L19.3136 13.2433M19.5521 12.3477C19.6769 11.8789 20.1901 11.635 20.6291 11.836L20.9202 11.9693C21.74 12.3447 22.1701 13.2616 21.937 14.1372L21.5855 15.456C21.0673 17.4025 20.8081 18.3757 20.3073 19.0711C20.0167 19.4745 18.5 20.4395 18.5 20.4395L17.8187 22.4395M14.451 10.0121L16.0009 4.19058C16.1985 3.44863 15.761 2.68599 15.0238 2.48719C14.2866 2.28838 13.5288 2.72869 13.3313 3.47064L10.9556 12.3932L9.90131 10.5486C9.43871 9.73922 8.3811 9.51646 7.63441 10.0711C7.06306 10.4955 6.84799 11.2558 7.11154 11.9195L10 17.9395L9.3648 20.1597',
  d9: 'M1.99512 10.4333L5.19293 7.30533M1.99512 7.43057H4.98724V10.4328M10.005 2.43945L7.15855 5.2793M7.00268 2.4412V5.4375H9.98983',
  d10: 'M14.9982 1.28973C14.3655 1.12436 13.7117 1.48996 13.5408 2.11228L10.5466 13.0106L8.84222 10.1206C8.42811 9.41851 7.48436 9.22701 6.81798 9.70671C6.30978 10.0725 6.11496 10.7277 6.3444 11.3031L9.73717 18.156L9.07484 20.3996L18.068 22.75L18.7779 20.7305C18.9451 20.6236 19.5638 20.2309 19.7993 20.0706C20.0357 19.9098 20.2779 19.7381 20.4794 19.5811C20.6924 19.4151 20.824 19.2926 20.872 19.2279C21.1273 18.8845 21.331 18.4596 21.5467 17.8357C21.7635 17.2088 21.984 16.4065 22.2843 15.3134L22.6899 13.8387C22.9086 13.0425 22.5046 12.2108 21.7388 11.871L21.403 11.7219C21.1262 11.5991 20.7989 11.7467 20.7186 12.0389L20.4435 13.0405L19.663 12.8391L19.9381 11.8376C20.1853 10.9377 19.6372 10.0161 18.7199 9.77639C18.3707 9.68512 18.0084 9.88659 17.9134 10.2324L17.6383 11.2339L16.8577 11.0325L17.1329 10.031C17.3801 9.13115 16.8319 8.20953 15.9147 7.9698L15.2788 7.80362L14.8328 9.42723L14.0523 9.22585L15.8406 2.71597C16.0118 2.09271 15.632 1.45536 14.9982 1.28973Z',
  d11: 'M7.53131 2.96967L9.25098 1.25L10.3116 2.31066L8.59197 4.03033H9.78131V5.53033H6.03131V1.78033H7.53131V2.96967ZM2.97065 7.53033H1.78131V6.03033H5.53131V9.78033H4.03131V8.59099L2.31164 10.3107L1.25098 9.25L2.97065 7.53033Z',
} as const;

export const IconMinimize03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-03-stroke-rounded IconMinimize03StrokeRounded"
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

export const IconMinimize03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-03-duotone-rounded IconMinimize03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMinimize03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-03-twotone-rounded IconMinimize03TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconMinimize03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-03-solid-rounded IconMinimize03SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMinimize03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-03-bulk-rounded IconMinimize03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMinimize03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-03-stroke-sharp IconMinimize03StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMinimize03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-03-solid-sharp IconMinimize03SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMinimize03: TheIconSelfPack = {
  name: 'Minimize03',
  StrokeRounded: IconMinimize03StrokeRounded,
  DuotoneRounded: IconMinimize03DuotoneRounded,
  TwotoneRounded: IconMinimize03TwotoneRounded,
  SolidRounded: IconMinimize03SolidRounded,
  BulkRounded: IconMinimize03BulkRounded,
  StrokeSharp: IconMinimize03StrokeSharp,
  SolidSharp: IconMinimize03SolidSharp,
};