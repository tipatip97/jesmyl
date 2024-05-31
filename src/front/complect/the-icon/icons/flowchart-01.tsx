import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.0278 13.3749C14.6759 12.7268 15 12.4027 15 12C15 11.5973 14.6759 11.2732 14.0278 10.6251L13.3749 9.9722C12.7268 9.32407 12.4027 9 12 9C11.5973 9 11.2732 9.32407 10.6251 9.9722L9.9722 10.6251C9.32407 11.2732 9 11.5973 9 12C9 12.4027 9.32407 12.7268 9.9722 13.3749L10.6251 14.0278C11.2732 14.6759 11.5973 15 12 15C12.4027 15 12.7268 14.6759 13.3749 14.0278L14.0278 13.3749Z',
  d2: 'M8 4C8 2.34533 8.34533 2 10 2H14C15.6547 2 16 2.34533 16 4C16 5.65467 15.6547 6 14 6H10C8.34533 6 8 5.65467 8 4Z',
  d3: 'M8 20C8 18.3453 8.34533 18 10 18H14C15.6547 18 16 18.3453 16 20C16 21.6547 15.6547 22 14 22H10C8.34533 22 8 21.6547 8 20Z',
  d4: 'M8.5 12H8C6.11438 12 5.17157 12 4.58579 11.4142C4 10.8284 4 9.88562 4 8C4 6.11438 4 5.17157 4.58579 4.58579C5.17157 4 6.11438 4 8 4',
  d5: 'M15.5 12H16C17.8856 12 18.8284 12 19.4142 12.5858C20 13.1716 20 14.1144 20 16C20 17.8856 20 18.8284 19.4142 19.4142C18.8284 20 17.8856 20 16 20',
  d6: 'M12 8.5V6M12 15.5V18',
  d7: 'M10.9497 8.64678C11.2287 8.43385 11.5687 8.25 12 8.25C12.4313 8.25 12.7713 8.43385 13.0503 8.64678C13.3032 8.83973 13.5769 9.11346 13.8738 9.41048L14.5895 10.1262L14.5895 10.1262C14.8866 10.4231 15.1603 10.6968 15.3532 10.9497C15.5662 11.2287 15.75 11.5687 15.75 12C15.75 12.4313 15.5662 12.7713 15.3532 13.0503C15.1603 13.3032 14.8865 13.5769 14.5895 13.8738L14.5895 13.8738L13.8738 14.5895L13.8738 14.5895C13.5769 14.8865 13.3032 15.1603 13.0503 15.3532C12.7713 15.5662 12.4313 15.75 12 15.75C11.5687 15.75 11.2287 15.5662 10.9497 15.3532C10.6968 15.1603 10.4231 14.8865 10.1262 14.5895L10.1262 14.5895L9.41049 13.8739C9.11347 13.5769 8.83974 13.3032 8.64678 13.0503C8.43385 12.7713 8.25 12.4313 8.25 12C8.25 11.5687 8.43385 11.2287 8.64678 10.9497C8.83973 10.6968 9.11346 10.4231 9.41048 10.1262L9.41048 10.1262L10.1262 9.41048L10.1262 9.41048C10.4231 9.11346 10.6968 8.83973 10.9497 8.64678Z',
  d8: 'M8.82851 1.34728C9.17373 1.27144 9.5701 1.25 10 1.25H14C14.4299 1.25 14.8263 1.27144 15.1715 1.34728C15.5252 1.42498 15.8713 1.56966 16.1508 1.84917C16.4303 2.12868 16.575 2.4748 16.6527 2.82851C16.7286 3.17373 16.75 3.5701 16.75 4C16.75 4.4299 16.7286 4.82627 16.6527 5.17149C16.575 5.5252 16.4303 5.87132 16.1508 6.15083C15.8713 6.43034 15.5252 6.57502 15.1715 6.65272C14.8263 6.72856 14.4299 6.75 14 6.75H10C9.5701 6.75 9.17373 6.72856 8.82851 6.65272C8.4748 6.57502 8.12868 6.43034 7.84917 6.15083C7.56966 5.87132 7.42498 5.5252 7.34728 5.17149C7.27144 4.82627 7.25 4.4299 7.25 4C7.25 3.5701 7.27144 3.17373 7.34728 2.82851C7.42498 2.4748 7.56966 2.12868 7.84917 1.84917C8.12868 1.56966 8.4748 1.42498 8.82851 1.34728Z',
  d9: 'M8.82851 17.3473C9.17373 17.2714 9.5701 17.25 10 17.25H14C14.4299 17.25 14.8263 17.2714 15.1715 17.3473C15.5252 17.425 15.8713 17.5697 16.1508 17.8492C16.4303 18.1287 16.575 18.4748 16.6527 18.8285C16.7286 19.1737 16.75 19.5701 16.75 20C16.75 20.4299 16.7286 20.8263 16.6527 21.1715C16.575 21.5252 16.4303 21.8713 16.1508 22.1508C15.8713 22.4303 15.5252 22.575 15.1715 22.6527C14.8263 22.7286 14.4299 22.75 14 22.75H10C9.5701 22.75 9.17373 22.7286 8.82851 22.6527C8.4748 22.575 8.12868 22.4303 7.84917 22.1508C7.56966 21.8713 7.42498 21.5252 7.34728 21.1715C7.27144 20.8263 7.25 20.4299 7.25 20C7.25 19.5701 7.27144 19.1737 7.34728 18.8285C7.42498 18.4748 7.56966 18.1287 7.84917 17.8492C8.12868 17.5697 8.4748 17.425 8.82851 17.3473Z',
  d10: 'M7.93417 3C7.95604 3 7.97799 3 8 3C8.55229 3 9 3.44772 9 4C9 4.55229 8.55229 5 8 5C7.02893 5 6.40122 5.00213 5.93871 5.06431C5.50497 5.12263 5.36902 5.21677 5.2929 5.2929C5.21677 5.36902 5.12263 5.50497 5.06431 5.93871C5.00213 6.40122 5 7.02893 5 8C5 8.97108 5.00213 9.59879 5.06431 10.0613C5.12263 10.495 5.21677 10.631 5.2929 10.7071C5.36902 10.7832 5.50497 10.8774 5.93871 10.9357C6.40122 10.9979 7.02893 11 8 11H8.5C9.05229 11 9.5 11.4477 9.5 12C9.5 12.5523 9.05229 13 8.5 13L7.93417 13C7.04769 13.0001 6.28387 13.0001 5.67221 12.9179C5.0167 12.8297 4.38835 12.631 3.87868 12.1213C3.36902 11.6117 3.17028 10.9833 3.08215 10.3278C2.99991 9.71614 2.99995 8.95232 3 8.06583C3 8.04397 3 8.02202 3 8C3 7.97799 3 7.95604 3 7.93417C2.99995 7.04769 2.99991 6.28387 3.08215 5.67221C3.17028 5.0167 3.36902 4.38835 3.87868 3.87868C4.38835 3.36902 5.0167 3.17028 5.67221 3.08215C6.28387 2.99991 7.04769 2.99995 7.93417 3Z',
  d11: 'M18.0613 13.0643C17.5988 13.0021 16.9711 13 16 13H15.5C14.9477 13 14.5 12.5523 14.5 12C14.5 11.4477 14.9477 11 15.5 11H16C16.022 11 16.044 11 16.0658 11C16.9523 11 17.7161 10.9999 18.3278 11.0821C18.9833 11.1703 19.6117 11.369 20.1213 11.8787C20.631 12.3883 20.8297 13.0167 20.9179 13.6722C21.0001 14.2839 21.0001 15.0477 21 15.9342C21 15.956 21 15.978 21 16C21 16.022 21 16.044 21 16.0658C21.0001 16.9523 21.0001 17.7161 20.9179 18.3278C20.8297 18.9833 20.631 19.6117 20.1213 20.1213C19.6117 20.631 18.9833 20.8297 18.3278 20.9179C17.7161 21.0001 16.9523 21.0001 16.0658 21L16 21C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19C16.9711 19 17.5988 18.9979 18.0613 18.9357C18.495 18.8774 18.631 18.7832 18.7071 18.7071C18.7832 18.631 18.8774 18.495 18.9357 18.0613C18.9979 17.5988 19 16.9711 19 16C19 15.0289 18.9979 14.4012 18.9357 13.9387C18.8774 13.505 18.7832 13.369 18.7071 13.2929C18.631 13.2168 18.495 13.1226 18.0613 13.0643Z',
  d12: 'M12 5C12.5523 5 13 5.44772 13 6V8.5C13 9.05228 12.5523 9.5 12 9.5C11.4477 9.5 11 9.05228 11 8.5V6C11 5.44772 11.4477 5 12 5ZM12 14.5C12.5523 14.5 13 14.9477 13 15.5V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V15.5C11 14.9477 11.4477 14.5 12 14.5Z',
  d13: 'M7.31442 3C7.26503 3.30257 7.25 3.63897 7.25 3.99888C7.25 4.35979 7.26511 4.69707 7.31484 5.0003C6.71648 5.00396 6.28207 5.01702 5.93871 5.06319C5.50497 5.1215 5.36902 5.21565 5.2929 5.29178C5.21677 5.3679 5.12263 5.50385 5.06431 5.93759C5.00213 6.40009 5 7.0278 5 7.99888C5 8.96996 5.00213 9.59767 5.06431 10.0602C5.12263 10.4939 5.21677 10.6299 5.2929 10.706C5.36902 10.7821 5.50497 10.8763 5.93871 10.9346C6.40122 10.9968 7.02893 10.9989 8 10.9989H8.5C8.53554 10.9989 8.57064 11.0007 8.60522 11.0044C8.41048 11.2727 8.25 11.596 8.25 11.9989C8.25 12.4018 8.41048 12.7251 8.60523 12.9934C8.57065 12.997 8.53554 12.9989 8.5 12.9989L7.93417 12.9989C7.04769 12.9989 6.28387 12.999 5.67221 12.9167C5.0167 12.8286 4.38835 12.6299 3.87868 12.1202C3.36902 11.6105 3.17028 10.9822 3.08215 10.3267C2.99991 9.71501 2.99995 8.9512 3 8.06471V7.93305C2.99995 7.04657 2.99991 6.28275 3.08215 5.67109C3.17028 5.01557 3.36902 4.38722 3.87868 3.87756C4.38835 3.3679 5.0167 3.16915 5.67221 3.08102C6.13631 3.01863 6.68801 3.0036 7.31442 3Z',
  d14: 'M15.3948 12.9934C15.4294 12.997 15.4645 12.9989 15.5 12.9989H16C16.9711 12.9989 17.5988 13.001 18.0613 13.0632C18.495 13.1215 18.631 13.2157 18.7071 13.2918C18.7832 13.3679 18.8774 13.5038 18.9357 13.9376C18.9979 14.4001 19 15.0278 19 15.9989C19 16.97 18.9979 17.5977 18.9357 18.0602C18.8774 18.4939 18.7832 18.6299 18.7071 18.706C18.631 18.7821 18.495 18.8763 18.0613 18.9346C17.7179 18.9807 17.2835 18.9938 16.6852 18.9975C16.7349 19.3007 16.75 19.638 16.75 19.9989C16.75 20.3588 16.735 20.6952 16.6856 20.9978C17.312 20.9942 17.8637 20.9791 18.3278 20.9167C18.9833 20.8286 19.6117 20.6299 20.1213 20.1202C20.631 19.6105 20.8297 18.9822 20.9179 18.3267C21.0001 17.715 21.0001 16.9512 21 16.0647V15.933C21.0001 15.0466 21.0001 14.2828 20.9179 13.6711C20.8297 13.0156 20.631 12.3872 20.1213 11.8776C19.6117 11.3679 18.9833 11.1692 18.3278 11.081C17.7161 10.9988 16.9523 10.9988 16.0658 10.9989L15.5 10.9989C15.4645 10.9989 15.4294 11.0007 15.3948 11.0044C15.5895 11.2727 15.75 11.596 15.75 11.9989C15.75 12.4018 15.5895 12.7251 15.3948 12.9934Z',
  d15: 'M11 6.75H13V8.5C13 8.53554 12.9981 8.57064 12.9945 8.60523C12.7262 8.41048 12.4029 8.25 12 8.25C11.5971 8.25 11.2738 8.41048 11.0055 8.60523C11.0019 8.57064 11 8.53554 11 8.5V6.75Z',
  d16: 'M11.0055 15.3948C11.0019 15.4294 11 15.4645 11 15.5V17.25H13V15.5C13 15.4645 12.9981 15.4294 12.9945 15.3948C12.7262 15.5895 12.4029 15.75 12 15.75C11.5971 15.75 11.2738 15.5895 11.0055 15.3948Z',
  d17: 'M10.9497 8.64678C11.2287 8.43385 11.5687 8.25 12 8.25C12.4313 8.25 12.7713 8.43385 13.0503 8.64678C13.3032 8.83973 13.5769 9.11346 13.8738 9.41048L14.5895 10.1262C14.8866 10.4231 15.1603 10.6968 15.3532 10.9497C15.5662 11.2287 15.75 11.5687 15.75 12C15.75 12.4313 15.5662 12.7713 15.3532 13.0503C15.1603 13.3032 14.8865 13.5769 14.5895 13.8738L13.8738 14.5895C13.5769 14.8865 13.3032 15.1603 13.0503 15.3532C12.7713 15.5662 12.4313 15.75 12 15.75C11.5687 15.75 11.2287 15.5662 10.9497 15.3532C10.6968 15.1603 10.4231 14.8865 10.1262 14.5895L9.41049 13.8739C9.11347 13.5769 8.83974 13.3032 8.64678 13.0503C8.43385 12.7713 8.25 12.4313 8.25 12C8.25 11.5687 8.43385 11.2287 8.64678 10.9497C8.83973 10.6968 9.11346 10.4231 9.41048 10.1262L10.1262 9.41048C10.4231 9.11346 10.6968 8.83973 10.9497 8.64678Z',
  d18: 'M16 6V2H8V6H16Z',
  d19: 'M16 22V18H8V22H16Z',
  d20: 'M12 15L15 12L12 9L9 12L12 15Z',
  d21: 'M9.00146 12H4.00146V4L8.00009 4.00001',
  d22: 'M15 12H20V20H16',
  d23: 'M12 9V6M12 15V18',
  d24: 'M7.25 2C7.25 1.58579 7.58579 1.25 8 1.25H16C16.4142 1.25 16.75 1.58579 16.75 2V6C16.75 6.41421 16.4142 6.75 16 6.75H8C7.58579 6.75 7.25 6.41421 7.25 6V2Z',
  d25: 'M7.25 18C7.25 17.5858 7.58579 17.25 8 17.25H16C16.4142 17.25 16.75 17.5858 16.75 18V22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22V18Z',
  d26: 'M11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967L15.5303 11.4697C15.8232 11.7626 15.8232 12.2374 15.5303 12.5303L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L8.46967 12.5303C8.17678 12.2374 8.17678 11.7626 8.46967 11.4697L11.4697 8.46967Z',
  d27: 'M3.29436 3.29289C3.4819 3.10536 3.73625 3 4.00147 3L8.00009 3.00001L8.00008 5.00001L5.00146 5V11H9.00146V13H4.00146C3.44918 13 3.00146 12.5523 3.00146 12V4C3.00146 3.73478 3.10682 3.48043 3.29436 3.29289Z',
  d28: 'M15 11H20C20.5523 11 21 11.4477 21 12V20C21 20.5523 20.5523 21 20 21H16V19H19V13H15V11Z',
  d29: 'M13 6V9H11V6H13ZM11 18V15H13V18H11Z',
} as const;

export const IconFlowchart01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flowchart-01-stroke-rounded IconFlowchart01StrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconFlowchart01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flowchart-01-duotone-rounded IconFlowchart01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconFlowchart01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flowchart-01-twotone-rounded IconFlowchart01TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
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

export const IconFlowchart01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flowchart-01-solid-rounded IconFlowchart01SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowchart01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flowchart-01-bulk-rounded IconFlowchart01BulkRounded"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconFlowchart01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flowchart-01-stroke-sharp IconFlowchart01StrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowchart01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flowchart-01-solid-sharp IconFlowchart01SolidSharp"
    >
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFlowchart01: TheIconSelfPack = {
  name: 'Flowchart01',
  StrokeRounded: IconFlowchart01StrokeRounded,
  DuotoneRounded: IconFlowchart01DuotoneRounded,
  TwotoneRounded: IconFlowchart01TwotoneRounded,
  SolidRounded: IconFlowchart01SolidRounded,
  BulkRounded: IconFlowchart01BulkRounded,
  StrokeSharp: IconFlowchart01StrokeSharp,
  SolidSharp: IconFlowchart01SolidSharp,
};