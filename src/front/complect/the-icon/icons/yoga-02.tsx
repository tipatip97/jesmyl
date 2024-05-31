import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.88598 10C8.57173 11.3968 9.30442 12.7049 9.1352 14.3142C8.86468 16.8869 5.74512 17.8552 3.75022 19.0404C2.44325 19.8169 2.9319 22 4.53582 22C6.48047 22 8.21607 21.8448 9.9706 21.0201L13.4111 18.9028C13.8887 18.6783 14.4913 18.774 15 19',
  d2: 'M16.0105 10C15.3102 11.3968 14.562 12.7049 14.7348 14.3142C15.0111 16.8869 18.1967 17.8552 20.2339 19.0404C21.5685 19.8169 21.0695 22 19.4316 22C17.4458 22 15.6734 21.8448 13.8817 21.0201L10.3683 18.9028C9.95819 18.714 9.45777 18.7517 9 18.9028',
  d3: 'M10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4Z',
  d4: 'M3 16C5.44586 16 6.54368 13.2949 6.89335 11.4291C6.98463 10.9421 7.13246 10.4565 7.45625 10.0814C8.55651 8.80674 10.184 8 12 8C13.816 8 15.4435 8.80674 16.5437 10.0814C16.8675 10.4565 17.0154 10.9421 17.1067 11.4291C17.4563 13.2949 18.5541 16 21 16',
  d5: 'M7.88598 10C8.57173 11.3968 9.30442 12.7049 9.1352 14.3142C8.86468 16.8869 5.74512 17.8552 3.75022 19.0404C2.44325 19.8169 2.9319 22 4.53582 22C6.48047 22 8.21607 21.8448 9.9706 21.0201L11.9057 19.8293L13.8817 21.0201C15.6734 21.8448 17.4458 22 19.4316 22C21.0695 22 21.5685 19.8169 20.2339 19.0404C18.1967 17.8552 15.0111 16.8869 14.7348 14.3142C14.562 12.7049 15.3102 11.3968 16.0105 10L16.1796 9.69528C15.0992 8.64603 13.625 8 12 8C10.3501 8 8.85575 8.66594 7.77106 9.7437L7.88598 10Z',
  d6: 'M14.75 4C14.75 2.48122 13.5188 1.25 12 1.25C10.4812 1.25 9.25 2.48122 9.25 4C9.25 5.51878 10.4812 6.75 12 6.75C13.5188 6.75 14.75 5.51878 14.75 4Z',
  d7: 'M12 7.25C10.1235 7.25 8.42235 7.94341 7.18957 9.06312C7.0655 9.17581 6.94614 9.29284 6.83178 9.41394C6.34439 9.93008 6.16103 10.5537 6.0627 11.0333C5.90654 11.795 5.58981 12.6817 5.08541 13.3538C4.59326 14.0097 3.99506 14.3801 3.225 14.3801C2.68652 14.3801 2.25 14.7791 2.25 15.2713C2.25 15.7636 2.68652 16.1626 3.225 16.1626C4.83965 16.1626 5.969 15.3275 6.69344 14.3622C7.30685 13.5447 7.68044 12.5781 7.89034 11.7499C8.24924 12.6083 8.47419 13.4288 8.38933 14.2358C8.28871 15.1927 7.66503 15.9096 6.67209 16.5744C6.17894 16.9046 5.62657 17.2006 5.05147 17.4972C4.58022 17.7385 3.79958 18.1387 3.36717 18.3956C2.37708 18.9839 2.1003 20.0911 2.32348 20.9918C2.55038 21.9075 3.32941 22.75 4.53584 22.75C6.51757 22.75 8.38539 22.594 10.2897 21.6988L11.9098 20.7074L13.5681 21.7014C15.5076 22.5941 17.4098 22.75 19.4317 22.75C20.6442 22.75 21.4407 21.9198 21.6746 20.9954C21.9048 20.0856 21.6158 18.9767 20.6111 18.3922C20.1701 18.1356 19.677 17.8883 19.1957 17.6469C18.6083 17.3503 17.7398 16.9013 17.2353 16.5704C16.217 15.9028 15.5827 15.1854 15.4806 14.2342C15.3907 13.3975 15.6628 12.5259 16.0748 11.6074C16.2771 12.4656 16.6576 13.4974 17.3066 14.3622C18.031 15.3275 19.1603 16.1626 20.775 16.1626C21.3135 16.1626 21.75 15.7636 21.75 15.2713C21.75 14.7791 21.3135 14.3801 20.775 14.3801C20.0049 14.3801 19.4067 14.0097 18.9146 13.3538C18.4102 12.6817 18.0935 11.795 17.9373 11.0333C17.839 10.5537 17.6556 9.93008 17.1682 9.41394C17.0367 9.27471 16.8987 9.14087 16.7544 9.01281C15.5264 7.92266 13.8481 7.25 12 7.25Z',
  d8: 'M7.88598 10C8.57173 11.3968 9.30442 12.7049 9.1352 14.3142C8.86467 16.8869 5.74512 17.8552 3.75022 19.0404C2.44325 19.8169 2.9319 22 4.53582 22C6.48047 22 8.21607 21.8448 9.9706 21.0201L14 18.5L15.5 19.5',
  d9: 'M15.9996 9.99988C15.3139 11.3967 14.5812 12.7048 14.7504 14.3141C15.0209 16.8868 18.1405 17.8551 20.1354 19.0403C21.4424 19.8168 20.9537 21.9999 19.3498 21.9999C17.4051 21.9999 15.6695 21.8447 13.915 21.02L9.88562 18.4999L8.38562 19.4999',
  d10: 'M14.8066 4C14.8066 2.48122 13.5754 1.25 12.0566 1.25C10.5378 1.25 9.30658 2.48122 9.30658 4C9.30658 5.51878 10.5378 6.75 12.0566 6.75C13.5754 6.75 14.8066 5.51878 14.8066 4Z',
  d11: 'M12.0584 7.25C14.19 7.25 16.1011 8.19263 17.3909 9.67795C17.8938 10.2571 18.083 10.9568 18.1845 11.4949C18.3456 12.3495 18.6724 13.3444 19.1928 14.0985C19.7006 14.8344 20.3178 15.25 21.1124 15.25V17.25C19.4464 17.25 18.2812 16.313 17.5337 15.2299C16.7988 14.165 16.3976 12.8745 16.2069 11.8633C16.1881 11.7633 16.1679 11.672 16.1461 11.5886C15.7359 12.4877 15.4759 13.2999 15.5749 14.2357C15.6761 15.1927 16.3035 15.9095 17.3024 16.5744C17.7985 16.9046 18.3542 17.2005 18.9327 17.4971C19.0314 17.5477 19.1312 17.5985 19.2315 17.6496C19.7056 17.891 20.1921 18.1387 20.6271 18.3956C21.6231 18.9838 21.9016 20.0911 21.6771 20.9917C21.4488 21.9075 20.6651 22.7499 19.4514 22.7499C17.4578 22.7499 15.5788 22.5939 13.6631 21.6988C13.6359 21.6861 13.6095 21.6718 13.584 21.6559L12 20.6711L10.416 21.6559C10.3905 21.6718 10.3641 21.6861 10.3369 21.6988C8.42118 22.5939 6.54216 22.7499 4.54856 22.7499C3.3349 22.7499 2.5512 21.9075 2.32293 20.9917C2.09842 20.0911 2.37686 18.9838 3.37288 18.3956C3.80788 18.1387 4.29441 17.891 4.76848 17.6496C4.86884 17.5985 4.96864 17.5477 5.06728 17.4971C5.64583 17.2005 6.20151 16.9046 6.69761 16.5744C7.6965 15.9095 8.32392 15.1927 8.42515 14.2357C8.51782 13.3597 8.29586 12.5919 7.9306 11.7598C7.92354 11.7933 7.91666 11.8277 7.90996 11.8633C7.71931 12.8745 7.31803 14.165 6.58319 15.2299C5.83572 16.313 4.67047 17.25 3.0045 17.25V15.25C3.79903 15.25 4.41625 14.8344 4.92405 14.0985C5.44448 13.3444 5.77128 12.3495 5.9324 11.4949C6.03385 10.9568 6.22305 10.2571 6.72593 9.67795C8.01574 8.19263 9.92691 7.25 12.0584 7.25Z',
} as const;

export const IconYoga02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-02-stroke-rounded IconYoga02StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYoga02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-02-duotone-rounded IconYoga02DuotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYoga02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-02-twotone-rounded IconYoga02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYoga02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-02-solid-rounded IconYoga02SolidRounded"
    >
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

export const IconYoga02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-02-bulk-rounded IconYoga02BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconYoga02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-02-stroke-sharp IconYoga02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYoga02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-02-solid-sharp IconYoga02SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfYoga02: TheIconSelfPack = {
  name: 'Yoga02',
  StrokeRounded: IconYoga02StrokeRounded,
  DuotoneRounded: IconYoga02DuotoneRounded,
  TwotoneRounded: IconYoga02TwotoneRounded,
  SolidRounded: IconYoga02SolidRounded,
  BulkRounded: IconYoga02BulkRounded,
  StrokeSharp: IconYoga02StrokeSharp,
  SolidSharp: IconYoga02SolidSharp,
};