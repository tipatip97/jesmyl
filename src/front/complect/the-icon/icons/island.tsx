import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 21.9684C2.94975 21.9684 3.88858 22.0553 4.67843 21.4396C5.45232 20.8365 6.68304 20.8564 7.42654 21.4842C8.2373 22.1688 9.76776 22.1494 10.5969 21.5032C11.4013 20.8763 12.6209 20.804 13.4265 21.4842C14.3106 22.2306 15.8003 22.1241 16.6784 21.4396C17.4523 20.8365 18.683 20.8564 19.4265 21.4842C20.1427 22.0889 21.1197 21.9684 22 21.9684',
  d2: 'M8 19C9.19765 16.6088 11.4362 15 14 15C16.5638 15 18.8023 16.6088 20 19',
  d3: 'M11 15.1016C8 14.5448 5.39726 16.3366 4 19',
  d4: 'M12 15C12 12 12.8 7.16 16 5',
  d5: 'M15.5004 2C16.3755 2 17.3024 3.0972 16 5M16 5C16.7861 5.23357 19.208 6.31952 18.9828 9M16 5C15.4148 4.29569 13.3126 3.40012 12 4.80011M16 5C16.58 5.70922 17 8 16 9',
  d6: 'M14 15C11.4362 15 9.19765 16.6088 8 19H20C18.8023 16.6088 16.5638 15 14 15Z',
  d7: 'M11 15.1016C8 14.5448 5.39726 16.3366 4 19H8L11 15.1016Z',
  d8: 'M6.78139 22.2483C6.4036 21.9293 5.69865 21.9123 5.29318 22.2284C4.29287 23.008 3.09412 22.9865 2.28531 22.972C2.18366 22.9701 2.08817 22.9684 2 22.9684C1.44772 22.9684 1 22.5207 1 21.9684C1 21.4161 1.44772 20.9684 2 20.9684C2.09851 20.9684 2.19222 20.9687 2.28153 20.969H2.28155C3.19828 20.9718 3.65028 20.9731 4.06369 20.6509C5.20598 19.7606 6.96248 19.7836 8.07169 20.7201C8.24777 20.8688 8.5804 20.9928 9.00475 20.9928C9.4278 20.9927 9.78416 20.8688 9.98214 20.7145C11.101 19.8424 12.851 19.6894 14.0717 20.7201C14.2835 20.899 14.6171 21.0119 15.0228 20.999C15.4296 20.986 15.8109 20.8479 16.0637 20.6509C17.206 19.7606 18.9625 19.7836 20.0717 20.7201C20.22 20.8454 20.422 20.9243 20.7536 20.9583C21.0091 20.9845 21.247 20.9798 21.5391 20.9741C21.6779 20.9714 21.829 20.9684 22 20.9684C22.5523 20.9684 23 21.4161 23 21.9684C23 22.5207 22.5523 22.9684 22 22.9684C21.9135 22.9684 21.8124 22.9704 21.7013 22.9725C21.3635 22.979 20.9342 22.9872 20.5498 22.9479C19.9939 22.8909 19.3492 22.7277 18.7814 22.2483C18.4036 21.9293 17.6986 21.9123 17.2932 22.2284C16.6678 22.7158 15.8652 22.9732 15.0865 22.998C14.3069 23.0228 13.4536 22.8158 12.7814 22.2483C12.3909 21.9185 11.7015 21.9101 11.2116 22.2919C10.5805 22.7838 9.75706 22.9927 9.00491 22.9928C8.25406 22.9928 7.41607 22.7842 6.78139 22.2483Z',
  d9: 'M14 16C11.8818 16 9.95457 17.3305 8.89409 19.4478C8.64677 19.9416 8.04596 20.1414 7.55215 19.8941C7.05834 19.6468 6.85853 19.046 7.10585 18.5522C8.44068 15.8871 10.9904 14 14 14C17.0095 14 19.5593 15.8871 20.8941 18.5522C21.1414 19.046 20.9416 19.6468 20.4478 19.8941C19.954 20.1414 19.3532 19.9416 19.1059 19.4478C18.0454 17.3305 16.1181 16 14 16Z',
  d10: 'M10.8177 16.0862C8.3762 15.633 6.14654 17.0627 4.88574 19.4659C4.62916 19.955 4.0247 20.1435 3.53563 19.8869C3.04656 19.6303 2.85809 19.0259 3.11467 18.5368C4.64839 15.6133 7.62421 13.4593 11.1827 14.1198C11.7257 14.2206 12.0842 14.7425 11.9834 15.2855C11.8826 15.8285 11.3607 16.187 10.8177 16.0862Z',
  d11: 'M14.5004 2C14.5004 1.44772 14.9481 1 15.5004 1C16.3509 1 17.1888 1.5319 17.5111 2.45763C17.7294 3.08438 17.6815 3.78578 17.3936 4.51479C17.7706 4.72261 18.1775 4.99802 18.556 5.35415C19.4081 6.15609 20.1222 7.38226 19.9793 9.08372C19.9331 9.63407 19.4494 10.0427 18.8991 9.99649C18.3487 9.95025 17.9401 9.46662 17.9863 8.91628C18.0434 8.23699 17.8759 7.7127 17.6013 7.2985C17.5842 8.10474 17.3766 9.03758 16.7071 9.70711C16.3166 10.0976 15.6834 10.0976 15.2929 9.70711C14.9024 9.31658 14.9024 8.68342 15.2929 8.29289C15.4868 8.09896 15.6404 7.64131 15.5947 6.95758C15.5886 6.86659 15.5792 6.77634 15.5669 6.68787C14.754 7.56996 14.1627 8.72148 13.7515 9.99275C13.1913 11.7245 13 13.5761 13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15C11 13.4239 11.2087 11.3555 11.8485 9.37725C12.3399 7.85815 13.1063 6.33044 14.2825 5.1364C14.2222 5.12058 14.16 5.10668 14.0961 5.09521C13.5641 4.99971 13.0908 5.09871 12.7295 5.48409C12.3517 5.88698 11.7189 5.90736 11.316 5.5296C10.9131 5.15185 10.8928 4.51901 11.2705 4.11612C12.2218 3.10151 13.4559 2.94831 14.4495 3.12668C14.8575 3.19993 15.2578 3.33404 15.6189 3.50868C15.6656 3.2933 15.6398 3.16536 15.6224 3.11527C15.588 3.0167 15.5249 3 15.5004 3C14.9481 3 14.5004 2.55228 14.5004 2Z',
  d12: 'M12 14.9999C9 14.443 5.39726 16.3365 4 18.9999',
  d13: 'M14.5 2C15.3751 2 17.3024 3.0972 16 5M16 5C16.7861 5.23357 19.208 6.31952 18.9828 9M16 5C15.4148 4.29569 13.3126 3.40012 12 4.80011M16 5C16.58 5.70922 17 8 16 9',
  d14: 'M6.78139 22.2483C6.4036 21.9293 5.69865 21.9123 5.29318 22.2284L4.67843 21.4396L5.29318 22.2284C4.29287 23.008 3.09412 22.9865 2.28531 22.972C2.18366 22.9701 2.08817 22.9684 2 22.9684V20.9684C2.09852 20.9684 2.19224 20.9687 2.28155 20.969C3.19828 20.9718 3.65028 20.9731 4.06369 20.6509C5.20598 19.7606 6.96248 19.7836 8.07169 20.7201C8.24777 20.8688 8.5804 20.9928 9.00475 20.9928C9.4278 20.9927 9.78416 20.8688 9.98214 20.7145C11.101 19.8424 12.851 19.6894 14.0717 20.7201C14.2835 20.899 14.6171 21.0119 15.0228 20.999C15.4296 20.986 15.8109 20.8479 16.0637 20.6509L16.6629 21.4198L16.0637 20.6509C17.206 19.7606 18.9625 19.7836 20.0717 20.7201C20.22 20.8454 20.422 20.9243 20.7536 20.9583C21.0091 20.9845 21.247 20.9798 21.5391 20.9741C21.6779 20.9714 21.829 20.9684 22 20.9684V22.9684C21.9135 22.9684 21.8124 22.9704 21.7013 22.9725C21.3635 22.979 20.9342 22.9872 20.5498 22.9479C19.9939 22.8909 19.3492 22.7277 18.7814 22.2483C18.4036 21.9293 17.6986 21.9123 17.2932 22.2284C16.6678 22.7158 15.8652 22.9732 15.0865 22.998C14.3069 23.0228 13.4536 22.8158 12.7814 22.2483C12.3909 21.9185 11.7015 21.9101 11.2116 22.2919C10.5805 22.7838 9.75706 22.9927 9.00491 22.9928C8.25406 22.9928 7.41607 22.7842 6.78139 22.2483L7.40346 21.5115L6.78139 22.2483Z',
  d15: 'M4.88631 19.4646C5.47171 18.3487 6.55221 17.3445 7.85261 16.684C8.12524 16.5455 8.40343 16.4242 8.68426 16.3211C8.05527 16.9669 7.52139 17.7218 7.10547 18.5522L8.89371 19.4478C9.95419 17.3305 11.8815 16 13.9996 16C16.1177 16 18.045 17.3305 19.1055 19.4478L20.8937 18.5522C19.5589 15.8871 17.0091 14 13.9996 14C13.3564 14 12.7342 14.0862 12.1404 14.2477L12.1833 14.0168C10.4212 13.6897 8.5469 14.0881 6.94687 14.9008C5.34659 15.7137 3.92709 16.9879 3.11523 18.5354L4.88631 19.4646Z',
  d16: 'M14.499 3C14.5357 3 14.6746 3.01927 14.8619 3.10693C14.9944 3.16891 15.114 3.24801 15.2088 3.3348C14.9639 3.24434 14.7078 3.17322 14.4485 3.12668C13.455 2.94831 12.2208 3.10151 11.2695 4.11612L12.7285 5.48409C13.0899 5.09871 13.5631 4.99971 14.0951 5.09521C14.1593 5.10673 14.2218 5.1207 14.2823 5.1366C13.1062 6.33061 12.3399 7.85823 11.8485 9.37724C11.2087 11.3555 11 13.4239 11 15H13C13 13.5761 13.1913 11.7245 13.7515 9.99274C14.1625 8.72191 14.7536 7.57075 15.5661 6.68877C15.5783 6.77696 15.5877 6.86691 15.5937 6.95758C15.6394 7.64131 15.4859 8.09896 15.2919 8.29289L16.7061 9.70711C17.3757 9.03758 17.5832 8.10474 17.6003 7.2985C17.8749 7.7127 18.0424 8.23699 17.9853 8.91628L19.9783 9.08372C20.1213 7.38226 19.4072 6.15609 18.555 5.35415C18.1589 4.98139 17.7315 4.69707 17.34 4.48613C17.4116 4.22438 17.4447 3.96118 17.4367 3.69827C17.4176 3.06699 17.1652 2.54239 16.8326 2.14484C16.5069 1.75544 16.0976 1.47699 15.7095 1.29541C15.3301 1.11789 14.8999 1 14.499 1V3Z',
};

export const IconIslandStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="island-stroke-rounded IconIslandStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconIslandDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="island-duotone-rounded IconIslandDuotoneRounded"
    >
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconIslandTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="island-twotone-rounded IconIslandTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconIslandSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="island-solid-rounded IconIslandSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIslandBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="island-bulk-rounded IconIslandBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconIslandStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="island-stroke-sharp IconIslandStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
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
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIslandSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="island-solid-sharp IconIslandSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const iconPackOfIsland: TheIconSelfPack = {
  name: 'Island',
  StrokeRounded: IconIslandStrokeRounded,
  DuotoneRounded: IconIslandDuotoneRounded,
  TwotoneRounded: IconIslandTwotoneRounded,
  SolidRounded: IconIslandSolidRounded,
  BulkRounded: IconIslandBulkRounded,
  StrokeSharp: IconIslandStrokeSharp,
  SolidSharp: IconIslandSolidSharp,
};