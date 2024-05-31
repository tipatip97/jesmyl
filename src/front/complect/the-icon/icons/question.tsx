import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 7.28336C22 9.92493 19.7611 12.0667 17 12.0667C16.6753 12.0671 16.3516 12.0371 16.0327 11.9772C15.8031 11.9341 15.6883 11.9126 15.6082 11.9248C15.5281 11.937 15.4145 11.9974 15.1874 12.1182C14.545 12.4598 13.7959 12.5805 13.0755 12.4465C13.3493 12.1097 13.5363 11.7056 13.6188 11.2724C13.6688 11.0074 13.545 10.75 13.3594 10.5616C12.5166 9.70577 12 8.55254 12 7.28336C12 4.64178 14.2388 2.5 17 2.5C19.7611 2.5 22 4.64178 22 7.28336Z',
  d2: 'M15.4922 7.5H15.5003M18.4922 7.5H18.5003',
  d3: 'M7.50189 21.5H4.71817C4.39488 21.5 4.07021 21.4545 3.77327 21.3269C2.80666 20.9116 2.31624 20.3632 2.08769 20.0202C1.95764 19.825 1.97617 19.5763 2.11726 19.3889C3.23716 17.9015 5.83846 17.003 7.50665 17.0029C9.17484 17.003 11.7714 17.9015 12.8913 19.3889C13.0324 19.5763 13.0509 19.825 12.9209 20.0202C12.6923 20.3632 12.2019 20.9116 11.2353 21.3269C10.9383 21.4545 10.6137 21.5 10.2904 21.5H7.50189Z',
  d4: 'M10.2855 11.7888C10.2855 13.3201 9.04142 14.5614 7.50676 14.5614C5.97211 14.5614 4.72803 13.3201 4.72803 11.7888C4.72803 10.2575 5.97211 9.01611 7.50676 9.01611C9.04142 9.01611 10.2855 10.2575 10.2855 11.7888Z',
  d5: 'M4.1863 18.3334C3.32171 18.8072 1.05483 19.7748 2.43552 20.9856C3.10997 21.577 3.86113 22 4.80553 22H7.5H10.1945C11.1389 22 11.89 21.577 12.5645 20.9856C13.9452 19.7748 11.6783 18.8072 10.8137 18.3334C8.78627 17.2222 6.21373 17.2222 4.1863 18.3334Z',
  d6: 'M10.25 12.25C10.25 10.7312 9.01878 9.5 7.5 9.5C5.98122 9.5 4.75 10.7312 4.75 12.25C4.75 13.7688 5.98122 15 7.5 15C9.01878 15 10.25 13.7688 10.25 12.25Z',
  d7: 'M22 6.78336C22 9.42493 19.7611 11.5667 17 11.5667C16.6753 11.5671 16.3516 11.5371 16.0327 11.4772C15.8032 11.4341 15.6884 11.4126 15.6083 11.4248C15.5281 11.437 15.4146 11.4974 15.1875 11.6182C14.5451 11.9598 13.796 12.0805 13.0756 11.9465C13.3494 11.6097 13.5364 11.2056 13.6189 10.7724C13.6689 10.5074 13.545 10.25 13.3594 10.0616C12.5167 9.20577 12 8.05254 12 6.78336C12 4.14178 14.2389 2 17 2C19.7611 2 22 4.14178 22 6.78336Z',
  d8: 'M21.9998 6.78336C21.9998 9.42493 19.7609 11.5667 16.9998 11.5667C16.6751 11.5671 16.3514 11.5371 16.0325 11.4772C15.8029 11.4341 15.6881 11.4126 15.608 11.4248C15.5279 11.437 15.4143 11.4974 15.1872 11.6182C14.5448 11.9598 13.7957 12.0805 13.0753 11.9465C13.3491 11.6097 13.5361 11.2056 13.6186 10.7724C13.6686 10.5074 13.5448 10.25 13.3592 10.0616C12.5164 9.20577 11.9998 8.05254 11.9998 6.78336C11.9998 4.14178 14.2386 2 16.9998 2C19.7609 2 21.9998 4.14178 21.9998 6.78336Z',
  d9: 'M15.4924 7H15.5005M18.4924 7H18.5005',
  d10: 'M7.50189 21.9834H4.71817C4.39488 21.9834 4.07021 21.9379 3.77327 21.8103C2.80666 21.395 2.31624 20.8466 2.08769 20.5036C1.95764 20.3084 1.97617 20.0597 2.11726 19.8723C3.23716 18.3849 5.83846 17.4864 7.50665 17.4863C9.17484 17.4864 11.7714 18.3849 12.8913 19.8723C13.0324 20.0597 13.0509 20.3084 12.9209 20.5036C12.6923 20.8466 12.2019 21.395 11.2353 21.8103C10.9383 21.9379 10.6137 21.9834 10.2904 21.9834H7.50189Z',
  d11: 'M10.286 12.2727C10.286 13.804 9.04191 15.0453 7.50725 15.0453C5.9726 15.0453 4.72852 13.804 4.72852 12.2727C4.72852 10.7414 5.9726 9.5 7.50725 9.5C9.04191 9.5 10.286 10.7414 10.286 12.2727Z',
  d12: 'M22.0003 6.79077C22.0003 9.4367 19.7545 11.582 16.9849 11.582C16.6592 11.5824 16.3345 11.5524 16.0146 11.4924C15.7843 11.4492 15.6691 11.4277 15.5888 11.4399C15.5084 11.4521 15.3945 11.5126 15.1667 11.6336C14.5223 11.9758 13.7709 12.0967 13.0483 11.9624C13.3229 11.6251 13.5105 11.2203 13.5933 10.7864C13.6434 10.521 13.5192 10.2631 13.3331 10.0744C12.4877 9.21718 11.9695 8.06204 11.9695 6.79077C11.9695 4.14483 14.2152 1.99951 16.9849 1.99951C19.7545 1.99951 22.0003 4.14483 22.0003 6.79077Z',
  d13: 'M15.4734 7.00781H15.4815M18.4826 7.00781H18.4908',
  d14: 'M10.2177 12.3253C10.2177 13.8746 8.98202 15.1306 7.45768 15.1306C5.93334 15.1306 4.69762 13.8746 4.69762 12.3253C4.69762 10.776 5.93334 9.52002 7.45768 9.52002C8.98202 9.52002 10.2177 10.776 10.2177 12.3253Z',
  d15: 'M12.613 19.5156C8.75472 16.5124 4.88122 17.305 2.30328 19.554C1.91221 19.8952 1.89835 20.4971 2.26571 20.8636C2.70646 21.3033 3.20283 21.6773 3.99846 21.9523C4.09547 21.9858 4.19807 22.001 4.30073 22.001H10.6165C10.7309 22.001 10.8448 21.982 10.9518 21.9414C11.6355 21.6816 12.1889 21.3523 12.7293 20.7921C13.0859 20.4224 13.0185 19.8312 12.613 19.5156Z',
  d16: 'M17 1.25C13.8563 1.25 11.25 3.6966 11.25 6.78336C11.25 8.26183 11.853 9.60076 12.825 10.5878C12.8505 10.6879 12.8198 11.0052 12.4936 11.4734C12.3267 11.6787 12.2803 11.9568 12.3716 12.2052C12.4628 12.4535 12.6783 12.6355 12.9384 12.6838C13.8291 12.8495 14.9352 12.6029 15.7245 12.1832C16.0889 12.2516 16.6288 12.3171 17 12.3167C20.1437 12.3167 22.75 9.87012 22.75 6.78336C22.75 3.6966 20.1437 1.25 17 1.25ZM15.4922 6.25C15.078 6.25 14.7422 6.58579 14.7422 7C14.7422 7.41421 15.078 7.75 15.4922 7.75H15.5003C15.9145 7.75 16.2503 7.41421 16.2503 7C16.2503 6.58579 15.9145 6.25 15.5003 6.25H15.4922ZM18.4922 6.25C18.078 6.25 17.7422 6.58579 17.7422 7C17.7422 7.41421 18.078 7.75 18.4922 7.75H18.5003C18.9145 7.75 19.2503 7.41421 19.2503 7C19.2503 6.58579 18.9145 6.25 18.5003 6.25H18.4922Z',
  d17: 'M4.00027 12.25C4.00027 10.317 5.56727 8.75 7.50027 8.75C9.43326 8.75 11.0003 10.317 11.0003 12.25C11.0003 14.183 9.43326 15.75 7.50027 15.75C5.56727 15.75 4.00027 14.183 4.00027 12.25Z',
  d18: 'M3.8261 17.6756C6.07808 16.4413 8.92246 16.4413 11.1744 17.6756C11.6058 17.8991 12.5496 18.3899 13.0334 18.8258C13.3317 19.0946 13.676 19.4993 13.74 20.0385C13.8108 20.6346 13.5177 21.1474 13.0592 21.5494C12.311 22.2055 11.3903 22.7499 10.1947 22.7499H4.8058C3.61027 22.7499 2.68958 22.2055 1.94129 21.5494C1.48287 21.1474 1.18972 20.6346 1.26052 20.0385C1.32455 19.4993 1.66888 19.0946 1.96718 18.8258C2.45098 18.3899 3.39471 17.8991 3.8261 17.6756Z',
  d19: 'M10.2419 12.2555C10.2419 10.7377 9.0123 9.50732 7.49538 9.50732C5.97848 9.50732 4.74878 10.7377 4.74878 12.2555C4.74878 13.7732 5.97848 15.0036 7.49538 15.0036C9.0123 15.0036 10.2419 13.7732 10.2419 12.2555Z',
  d20: 'M12.9881 21.9984H2.00171C2.00171 19.7908 4.46111 17.5015 7.49491 17.5015C10.5287 17.5015 12.9881 19.7908 12.9881 21.9984Z',
  d21: 'M15.4944 7.01221H15.5025M18.4944 7.01221H18.5025',
  d22: 'M16.9799 12.0102C19.7514 12.0102 21.9982 9.7697 21.9982 7.00586C21.9982 4.24201 19.7514 2.00146 16.9799 2.00146C14.2084 2.00146 11.9617 4.24201 11.9617 7.00586C11.9617 8.71617 12.9965 10.248 13.9497 10.9756C13.88 11.7125 13.5228 12.4935 13.0049 13.0032C12.9133 13.0933 14.243 12.7049 15.812 11.8587C16.2939 11.9708 16.3293 12.0102 16.9799 12.0102Z',
  d23: 'M4.00024 12.25C4.00024 10.317 5.56725 8.75 7.50024 8.75C9.43324 8.75 11.0002 10.317 11.0002 12.25C11.0002 14.183 9.43324 15.75 7.50024 15.75C5.56725 15.75 4.00024 14.183 4.00024 12.25Z',
  d24: 'M3.12447 18.3509C4.24807 17.3926 5.79353 16.75 7.50024 16.75C9.20696 16.75 10.7524 17.3926 11.876 18.3509C12.9898 19.3008 13.7502 20.6191 13.7502 22C13.7502 22.4142 13.4145 22.75 13.0002 22.75H2.00024C1.58603 22.75 1.25024 22.4142 1.25024 22C1.25024 20.6191 2.01071 19.3008 3.12447 18.3509Z',
  d25: 'M17.0002 1.25C13.8246 1.25 11.2502 3.82436 11.2502 7C11.2502 8.6875 11.9779 10.2054 13.1342 11.2563C13.0329 11.7415 12.8427 12.0969 12.4699 12.4697C12.2554 12.6842 12.1912 13.0068 12.3073 13.287C12.4234 13.5673 12.6969 13.75 13.0002 13.75C13.2723 13.75 13.5466 13.6811 13.785 13.6021C14.0317 13.5203 14.2911 13.4099 14.5458 13.2921C14.8017 13.1738 15.6126 12.7699 15.873 12.6394C16.238 12.712 16.615 12.75 17.0002 12.75C20.1759 12.75 22.7502 10.1756 22.7502 7C22.7502 3.82436 20.1759 1.25 17.0002 1.25ZM16.2505 6.25H14.7424V7.75H16.2505V6.25ZM19.2505 6.25H17.7424V7.75H19.2505V6.25Z',
} as const;

export const IconQuestionStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="question-stroke-rounded IconQuestionStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQuestionDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="question-duotone-rounded IconQuestionDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQuestionTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="question-twotone-rounded IconQuestionTwotoneRounded"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconQuestionSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="question-solid-rounded IconQuestionSolidRounded"
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
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconQuestionBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="question-bulk-rounded IconQuestionBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconQuestionStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="question-stroke-sharp IconQuestionStrokeSharp"
    >
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconQuestionSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="question-solid-sharp IconQuestionSolidSharp"
    >
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfQuestion: TheIconSelfPack = {
  name: 'Question',
  StrokeRounded: IconQuestionStrokeRounded,
  DuotoneRounded: IconQuestionDuotoneRounded,
  TwotoneRounded: IconQuestionTwotoneRounded,
  SolidRounded: IconQuestionSolidRounded,
  BulkRounded: IconQuestionBulkRounded,
  StrokeSharp: IconQuestionStrokeSharp,
  SolidSharp: IconQuestionSolidSharp,
};