import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.9915 20.5C13.7121 20.5 13.9925 20.4956 13.9925 20.4956C17.4088 20.471 19.2922 20.3099 20.5342 19.2552C22 18.0104 22 16.0069 22 12C22 7.99306 22 5.98959 20.5342 4.7448C19.0683 3.5 16.7091 3.5 11.9906 3.5C7.27213 3.5 4.91289 3.5 3.44705 4.7448C2.32426 5.69827 2.0615 7.09687 2 9.5',
  d2: 'M2.98242 19.5H2.9914',
  d3: 'M2 15.7349C4.49328 15.7349 6.77053 18 6.77053 20.4996M10 20.4996C10 16 5.99511 12.5 2.04522 12.5',
  d4: 'M20.5348 19.2552C22.0006 18.0104 22.0006 16.0069 22.0006 12C22.0006 7.99306 22.0006 5.98959 20.5348 4.7448C19.0689 3.5 16.7097 3.5 11.9912 3.5C7.27276 3.5 4.91352 3.5 3.44768 4.7448C2.32489 5.69827 2.06212 7.09687 2.00062 9.5L1.99833 12.4909C1.99542 16.2661 1.99397 18.1536 3.16625 19.3264C4.33854 20.4991 6.22612 20.4984 10.0013 20.497L13.9931 20.4956C17.4094 20.471 19.2928 20.3099 20.5348 19.2552Z',
  d5: 'M11.9904 4.69737C9.66122 4.69737 7.99799 4.69887 6.73454 4.84259C5.48503 4.98472 4.77578 5.25301 4.27359 5.6779C3.54072 6.29798 3.20423 7.11788 3.20423 9.08601C3.19042 9.62358 2.74183 10.0482 2.20228 10.0345C1.66272 10.0207 1.23652 9.57377 1.25033 9.03619C1.25033 7.20996 1.54676 5.43023 3.00843 4.19354C3.93877 3.4064 5.09859 3.06866 6.51283 2.90779C7.90017 2.74998 9.73836 2.74999 11.9904 2.75C14.2424 2.74999 16.0802 2.74998 17.4676 2.90779C18.8818 3.06866 20.0416 3.4064 20.972 4.19354C21.9254 5.0002 22.3568 6.04006 22.5581 7.30706C22.7493 8.51006 22.7496 10.1193 22.7496 12C22.7496 13.8807 22.7496 15.4899 22.5585 16.6929C22.3571 17.9599 21.9258 18.9998 20.9723 19.8065C20.1841 20.4734 19.2317 20.8173 18.1005 21.0047C16.9868 21.1893 15.6221 21.2336 13.9575 21.2456C13.7985 21.2467 13.759 21.25 13.4049 21.25C12.8652 21.25 12.4276 20.8141 12.4276 20.2763C12.4276 19.7386 12.8652 19.3026 13.4049 19.3026C13.755 19.3026 13.7857 19.2994 13.9397 19.2983C15.6122 19.2863 16.8358 19.2402 17.7798 19.0838C18.7069 18.9301 19.2816 18.6821 19.7072 18.3221C20.1863 17.9167 20.4712 17.3752 20.628 16.3884C20.7922 15.3552 20.795 13.983 20.795 12C20.795 10.017 20.7918 8.64481 20.6276 7.61157C20.4708 6.62482 20.1859 6.08328 19.7068 5.6779C19.2046 5.25301 18.4954 4.98472 17.2459 4.84259C15.9824 4.69887 14.3196 4.69737 11.9904 4.69737Z',
  d6: 'M1.25 20.2991C1.25 19.7744 1.67493 19.3491 2.19912 19.3491H2.20764C2.73182 19.3491 3.15676 19.7744 3.15676 20.2991C3.15676 20.8238 2.73182 21.2491 2.20764 21.2491H2.19912C1.67493 21.2491 1.25 20.8238 1.25 20.2991Z',
  d7: 'M1.30175 12.7C1.30175 12.1753 1.72668 11.75 2.25087 11.75C6.48852 11.75 10.75 15.4657 10.75 20.2999C10.75 20.8246 10.3251 21.2499 9.80088 21.2499C9.2767 21.2499 8.85177 20.8246 8.85177 20.2999C8.85177 16.5846 5.51103 13.6501 2.25087 13.6501C1.72668 13.6501 1.30175 13.2247 1.30175 12.7ZM1.31934 16.1418C1.41978 15.6269 1.91826 15.2909 2.43273 15.3914C4.71641 15.8377 6.6405 17.8429 6.92317 20.186C6.98601 20.7069 6.61509 21.1802 6.09468 21.2431C5.57428 21.306 5.10147 20.9347 5.03863 20.4138C4.85742 18.9117 3.56772 17.5492 2.069 17.2563C1.55453 17.1557 1.2189 16.6568 1.31934 16.1418Z',
  d8: 'M12.5 19H22V4H3V9.5',
  d9: 'M2.98242 19H2.9914',
  d10: 'M2 15.2349C4.49328 15.2349 6.77053 17.5 6.77053 19.9996M10 19.9996C10 15.5 5.99511 12 2.04522 12',
  d11: 'M1.5 4.5C1.5 3.94772 1.94772 3.5 2.5 3.5H21.5C22.0523 3.5 22.5 3.94772 22.5 4.5V19.5C22.5 20.0523 22.0523 20.5 21.5 20.5H12V18.5H20.5V5.5H3.5V10H1.5V4.5Z',
  d12: 'M1.54522 13.5C4.98016 13.5 8.5 16.5889 8.5 20.4996H10.5C10.5 15.4111 6.01006 11.5 1.54522 11.5V13.5Z',
  d13: 'M1.5 16.7349C3.4434 16.7349 5.27053 18.5547 5.27053 20.4996H7.27053C7.27053 17.4453 4.54316 14.7349 1.5 14.7349V16.7349Z',
  d14: 'M2.49553 18.5C1.94571 18.5 1.5 18.9477 1.5 19.5C1.5 20.0523 1.94571 20.5 2.49553 20.5H2.50447C3.05429 20.5 3.5 20.0523 3.5 19.5C3.5 18.9477 3.05429 18.5 2.50447 18.5H2.49553Z',
} as const;

export const IconRssStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-stroke-rounded IconRssStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconRssDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-duotone-rounded IconRssDuotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRssTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-twotone-rounded IconRssTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRssSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-solid-rounded IconRssSolidRounded"
    >
      <path 
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

export const IconRssBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-bulk-rounded IconRssBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
    </TheIconWrapper>
  );
};

export const IconRssStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-stroke-sharp IconRssStrokeSharp"
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
        strokeLinecap="round" 
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

export const IconRssSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-solid-sharp IconRssSolidSharp"
    >
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRss: TheIconSelfPack = {
  name: 'Rss',
  StrokeRounded: IconRssStrokeRounded,
  DuotoneRounded: IconRssDuotoneRounded,
  TwotoneRounded: IconRssTwotoneRounded,
  SolidRounded: IconRssSolidRounded,
  BulkRounded: IconRssBulkRounded,
  StrokeSharp: IconRssStrokeSharp,
  SolidSharp: IconRssSolidSharp,
};