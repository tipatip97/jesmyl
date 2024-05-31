import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 19.4989C10.2011 19.4954 9.90159 19.4836 9.09883 19.4634C5.95033 19.3843 4.37608 19.3448 3.24496 18.2093C2.11383 17.0739 2.08114 15.5411 2.01577 12.4756C1.99475 11.4899 1.99474 10.51 2.01576 9.52435C2.08114 6.45882 2.11382 4.92605 3.24495 3.79062C4.37608 2.65518 5.95033 2.61563 9.09882 2.53653C11.0393 2.48778 12.9607 2.48778 14.9012 2.53654C18.0497 2.61565 19.6239 2.6552 20.7551 3.79063C21.8862 4.92606 21.9189 6.45883 21.9842 9.52436C21.9983 10.1829 22 10.8414 22 11.5',
  d2: 'M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5',
  d3: 'M20.017 19.5233L22 21.5M21.0531 17.0265C21.0531 15.0789 19.4742 13.5 17.5265 13.5C15.5789 13.5 14 15.0789 14 17.0265C14 18.9742 15.5789 20.5531 17.5265 20.5531C19.4742 20.5531 21.0531 18.9742 21.0531 17.0265Z',
  d4: 'M3.24496 18.2094C2.11383 17.0739 2.08114 15.5412 2.01577 12.4756C1.99475 11.4899 1.99474 10.5101 2.01576 9.52438C2.08114 6.45885 2.11382 4.92608 3.24495 3.79065C4.37608 2.65521 5.95033 2.61566 9.09882 2.53656C11.0393 2.48781 12.9607 2.48781 14.9012 2.53657C18.0497 2.61568 19.6239 2.65523 20.7551 3.79066C21.8862 4.92609 21.9189 6.45886 21.9842 9.52439C22.0053 10.5101 22.0053 11.4899 21.9842 12.4756C21.9218 15.4032 21.8892 16.9329 20.9012 18.0536C20.9999 17.7286 21.0531 17.3838 21.0531 17.0265C21.0531 15.0789 19.4742 13.5 17.5265 13.5C15.5789 13.5 14 15.0789 14 17.0265C14 17.9709 14.3712 18.8286 14.9756 19.4616C14.9509 19.4622 14.9261 19.4628 14.9012 19.4634C12.9607 19.5122 11.0393 19.5122 9.09883 19.4634C5.95033 19.3843 4.37608 19.3448 3.24496 18.2094Z',
  d5: 'M12.875 16.9016C12.875 14.4016 14.9016 12.375 17.4015 12.375C19.9015 12.375 21.9281 14.4016 21.9281 16.9016C21.9281 17.7906 21.6718 18.6197 21.229 19.3192L22.581 20.6668C22.9721 21.0567 22.9731 21.6899 22.5832 22.081C22.1933 22.4722 21.5602 22.4732 21.169 22.0833L19.8138 20.7324C19.1155 21.1731 18.2883 21.4281 17.4015 21.4281C14.9016 21.4281 12.875 19.4015 12.875 16.9016ZM17.4015 14.375C16.0062 14.375 14.875 15.5062 14.875 16.9016C14.875 18.2969 16.0062 19.4281 17.4015 19.4281C18.7969 19.4281 19.9281 18.2969 19.9281 16.9016C19.9281 15.5062 18.7969 14.375 17.4015 14.375Z',
  d6: 'M8.95499 1.6618C10.908 1.61273 12.842 1.61273 14.795 1.66181L14.8532 1.66327C16.378 1.70156 17.605 1.73237 18.5883 1.90362C19.6178 2.08291 20.4545 2.42679 21.1614 3.13634C21.8653 3.84292 22.2074 4.66761 22.3832 5.68042C22.5507 6.64479 22.5762 7.84183 22.6078 9.32467L22.6091 9.3834C22.6303 10.3797 22.6303 11.3703 22.6091 12.3666L22.6078 12.4253L22.6073 12.4509C22.5959 12.9827 22.5903 13.2486 22.4658 13.2971C22.3413 13.3456 22.1448 13.1408 21.752 12.7311L21.752 12.731C20.6551 11.5872 19.1115 10.875 17.4015 10.875C14.0732 10.875 11.375 13.5732 11.375 16.9015C11.375 17.7 11.5303 18.4622 11.8123 19.1596L11.8123 19.1596C12.0017 19.628 12.0964 19.8621 12.0065 19.9946C11.9167 20.1271 11.6851 20.1258 11.2221 20.1232H11.2221C10.4678 20.1189 9.71282 20.1072 8.95499 20.0882L8.89677 20.0867C7.37197 20.0485 6.14501 20.0176 5.1617 19.8464C4.1322 19.6671 3.29548 19.3232 2.58862 18.6137C1.88472 17.9071 1.54264 17.0824 1.36676 16.0696C1.19929 15.1052 1.17379 13.9082 1.14219 12.4254L1.14094 12.3666C1.11969 11.3703 1.11969 10.3797 1.14093 9.38339L1.14219 9.32465C1.17378 7.8418 1.19929 6.64478 1.36676 5.6804C1.54264 4.6676 1.88471 3.8429 2.58862 3.13632C3.29548 2.42677 4.1322 2.08289 5.1617 1.9036C6.14502 1.73235 7.372 1.70155 8.89682 1.66326L8.95499 1.6618ZM7.25682 6.72952C6.90027 6.51871 6.44033 6.63686 6.22952 6.99341C6.01871 7.34997 6.13686 7.80991 6.49341 8.02072L9.43543 9.76015C10.3063 10.275 11.0577 10.6251 11.8751 10.6251C12.6925 10.6251 13.444 10.275 14.3148 9.76015L17.2568 8.02072C17.6134 7.80991 17.7315 7.34997 17.5207 6.99341C17.3099 6.63686 16.85 6.51871 16.4934 6.72952L13.5514 8.46895C12.707 8.96816 12.2581 9.12512 11.8751 9.12512C11.4921 9.12512 11.0432 8.96816 10.1988 8.46895L7.25682 6.72952Z',
  d7: 'M14.795 1.66168C12.842 1.61261 10.908 1.61261 8.95499 1.66168L8.89682 1.66314C7.372 1.70142 6.14502 1.73223 5.1617 1.90348C4.1322 2.08277 3.29548 2.42665 2.58862 3.1362C1.88471 3.84278 1.54264 4.66747 1.36676 5.68028C1.19929 6.64465 1.17378 7.84168 1.14219 9.32453L1.14093 9.38327C1.11969 10.3796 1.11969 11.3701 1.14094 12.3665L1.14219 12.4252C1.17379 13.9081 1.19929 15.1051 1.36676 16.0695C1.54264 17.0823 1.88472 17.907 2.58862 18.6136C3.29548 19.3231 4.1322 19.667 5.1617 19.8463C6.14501 20.0175 7.37197 20.0483 8.89677 20.0866L8.95499 20.0881C9.71282 20.1071 10.4678 20.1188 11.2221 20.123C11.6851 20.1257 11.9167 20.127 12.0065 19.9945C12.0964 19.862 12.0017 19.6278 11.8123 19.1595C11.5303 18.4621 11.375 17.6999 11.375 16.9014C11.375 13.573 14.0732 10.8749 17.4015 10.8749C19.1115 10.8749 20.6551 11.587 21.752 12.7309C22.1448 13.1406 22.3413 13.3455 22.4658 13.297C22.5903 13.2485 22.5959 12.9826 22.6073 12.4508C22.6075 12.4423 22.6076 12.4337 22.6078 12.4252L22.6091 12.3665C22.6303 11.3701 22.6303 10.3796 22.6091 9.38328L22.6078 9.32455C22.5762 7.8417 22.5507 6.64467 22.3832 5.6803C22.2074 4.66749 21.8653 3.8428 21.1614 3.13622C20.4545 2.42667 19.6178 2.08279 18.5883 1.90349C17.605 1.73224 16.378 1.70143 14.8532 1.66314L14.795 1.66168Z',
  d8: 'M6.01431 6.86607C6.29539 6.39066 6.90864 6.23312 7.38405 6.5142L10.3261 8.25363C11.1664 8.75047 11.5647 8.875 11.8751 8.875C12.1855 8.875 12.5838 8.75047 13.4242 8.25363L16.3662 6.5142C16.8416 6.23312 17.4548 6.39066 17.7359 6.86607C18.017 7.34147 17.8595 7.95473 17.3841 8.23581L14.442 9.97524C13.5665 10.4929 12.7647 10.875 11.8751 10.875C10.9855 10.875 10.1837 10.4929 9.30819 9.97524L6.36617 8.23581C5.89076 7.95473 5.73323 7.34147 6.01431 6.86607Z',
  d9: 'M22 12V2.5H2V19.5H11',
  d10: 'M6 7L12 11L18 7',
  d11: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V11.5H21.25V2.75H2.75V18.25H11V19.75H2C1.58579 19.75 1.25 19.4142 1.25 19V2Z',
  d12: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V15.6042C21.962 13.4988 19.9316 12 17.5512 12C14.4864 12 12.002 14.4845 12.002 17.5492C12.002 18.3311 12.1637 19.0753 12.4555 19.75H2C1.58579 19.75 1.25 19.4142 1.25 19V2ZM6.41603 5.87598L5.58398 7.12405L12 11.4014L18.416 7.12405L17.584 5.87598L12 9.59863L6.41603 5.87598Z',
  d13: 'M13.252 17.5492C13.252 15.1748 15.1768 13.25 17.5512 13.25C19.9256 13.25 21.8504 15.1748 21.8504 17.5492C21.8504 18.3936 21.607 19.1811 21.1865 19.8455L22.7498 21.4047L21.4088 22.75L19.8424 21.1877C19.1791 21.6063 18.3934 21.8485 17.5512 21.8485C15.1768 21.8485 13.252 19.9236 13.252 17.5492ZM17.5512 15.1496C16.2259 15.1496 15.1515 16.2239 15.1515 17.5492C15.1515 18.8745 16.2259 19.9489 17.5512 19.9489C18.8765 19.9489 19.9508 18.8745 19.9508 17.5492C19.9508 16.2239 18.8765 15.1496 17.5512 15.1496Z',
} as const;

export const IconMailSearch02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-search-02-stroke-rounded IconMailSearch02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailSearch02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-search-02-duotone-rounded IconMailSearch02DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailSearch02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-search-02-twotone-rounded IconMailSearch02TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailSearch02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-search-02-solid-rounded IconMailSearch02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconMailSearch02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-search-02-bulk-rounded IconMailSearch02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMailSearch02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-search-02-stroke-sharp IconMailSearch02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMailSearch02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-search-02-solid-sharp IconMailSearch02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMailSearch02: TheIconSelfPack = {
  name: 'MailSearch02',
  StrokeRounded: IconMailSearch02StrokeRounded,
  DuotoneRounded: IconMailSearch02DuotoneRounded,
  TwotoneRounded: IconMailSearch02TwotoneRounded,
  SolidRounded: IconMailSearch02SolidRounded,
  BulkRounded: IconMailSearch02BulkRounded,
  StrokeSharp: IconMailSearch02StrokeSharp,
  SolidSharp: IconMailSearch02SolidSharp,
};