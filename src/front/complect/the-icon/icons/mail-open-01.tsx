import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 19L8.91302 14.2905C11.4387 12.5698 12.5613 12.5698 15.087 14.2905L22 19',
  d2: 'M2.01592 14.551C2.08186 17.5843 2.11484 19.1009 3.24611 20.2241C4.37738 21.3473 5.95183 21.3862 9.10072 21.4641C11.0393 21.512 12.9607 21.512 14.8993 21.4641C18.0482 21.3862 19.6226 21.3473 20.7539 20.2241C21.8852 19.1009 21.9181 17.5843 21.9841 14.551C22.0164 13.0649 21.9995 11.5934 21.9334 10.0921C21.8924 9.15964 21.8719 8.69341 21.6354 8.27984C21.3989 7.86628 20.9913 7.59935 20.176 7.0655L16.4152 4.60286C14.2742 3.20096 13.2038 2.5 12 2.5C10.7962 2.5 9.72577 3.20095 7.58483 4.60286L3.82397 7.0655C3.00869 7.59935 2.60106 7.86628 2.36459 8.27984C2.12812 8.69341 2.1076 9.15965 2.06656 10.0921C2.00049 11.5934 1.98361 13.0649 2.01592 14.551Z',
  d3: 'M22 9.5L17.7346 12.6072C16.7004 13.3606 15.8504 14 14.5 14M2 9.5L6.26538 12.6072C7.29955 13.3606 8.14961 14 9.5 14',
  d4: 'M14.8993 21.464C12.9607 21.512 11.0393 21.512 9.10072 21.464C5.95183 21.3862 4.37738 21.3473 3.24611 20.2241C2.11484 19.1009 2.08186 17.5843 2.01592 14.551C1.98361 13.0649 2.00049 11.5934 2.06656 10.0921L8.5 14C9.4861 14.2339 10.9931 13.0564 12 13.0564C13.0069 13.0564 14.0139 14.2339 15 14L21.9334 10.0921C21.9995 11.5934 22.0164 13.0649 21.9841 14.551C21.9181 17.5843 21.8852 19.1009 20.7539 20.2241C19.6226 21.3473 18.0482 21.3862 14.8993 21.464Z',
  d5: 'M12.0001 1.75C11.2374 1.75 10.5487 1.97652 9.80257 2.35789C9.08086 2.72677 8.24988 3.27092 7.2095 3.95217L3.29225 6.5171C2.86566 6.79572 2.49214 7.03969 2.19138 7.31887C2.62534 7.33818 3.05242 7.48296 3.4163 7.74804L7.59003 10.7885C7.87498 10.9961 8.10073 11.1599 8.30853 11.2984C8.48404 11.4155 8.6301 11.5661 8.74042 11.7388C9.73854 11.1673 10.8061 10.75 12.0005 10.75C13.1944 10.75 14.2617 11.167 15.2596 11.7383C15.3699 11.5659 15.5158 11.4154 15.6911 11.2985C15.8989 11.1599 16.1247 10.9961 16.4097 10.7885L20.5834 7.74804C20.9474 7.48289 21.3746 7.3381 21.8087 7.31885C21.5079 7.03968 21.1344 6.79572 20.7079 6.5171L16.7906 3.95218L16.7906 3.95217C15.7502 3.27093 14.9192 2.72677 14.1975 2.35789C13.4514 1.97652 12.7627 1.75 12.0001 1.75ZM1.7676 8.89002C1.51889 9.00916 1.35563 9.25518 1.34248 9.53063L1.31725 10.0588C1.25048 11.5762 1.23339 13.0642 1.26606 14.5669L1.26849 14.6791C1.28481 15.4319 1.29957 16.1132 1.33477 16.7304L7.47656 12.5462C7.23815 12.3873 6.9866 12.2044 6.70695 12.0007L2.53323 8.9602C2.31033 8.79783 2.0163 8.77087 1.7676 8.89002ZM22.2324 8.89002C22.4811 9.00916 22.6444 9.25518 22.6575 9.53063L22.6828 10.0588C22.7495 11.5762 22.7666 13.0642 22.7339 14.5669L22.7315 14.6791C22.7152 15.4319 22.7004 16.1133 22.6652 16.7305L16.5233 12.5463C16.7618 12.3873 17.0134 12.2044 17.2931 12.0007L21.4668 8.9602C21.6897 8.79783 21.9837 8.77087 22.2324 8.89002ZM11.9999 12.25C13.1551 12.25 14.2306 12.7996 15.5091 13.6706L22.0431 18.1219C22.3129 18.3057 22.4328 18.6429 22.3397 18.9557C22.1328 19.651 21.8033 20.239 21.2822 20.7563C20.5749 21.4586 19.7385 21.7982 18.7103 21.9752C17.7275 22.1444 16.5008 22.1747 14.9753 22.2124L14.9177 22.2138C12.9668 22.2621 11.033 22.2621 9.08208 22.2138L9.02444 22.2124C7.49896 22.1747 6.27234 22.1444 5.28946 21.9752C4.26129 21.7982 3.42493 21.4586 2.71757 20.7563C2.1965 20.239 1.86703 19.651 1.6601 18.9557C1.56698 18.6429 1.6869 18.3057 1.95667 18.1219L8.49065 13.6706C9.76921 12.7996 10.8446 12.25 11.9999 12.25Z',
  d6: 'M11.9999 12.25C13.1551 12.25 14.2306 12.7996 15.5091 13.6706L22.0431 18.1219C22.3129 18.3057 22.4328 18.6429 22.3397 18.9557C22.1328 19.651 21.8033 20.239 21.2822 20.7563C20.5749 21.4586 19.7385 21.7982 18.7103 21.9752C17.7275 22.1444 16.5008 22.1747 14.9753 22.2124L14.9177 22.2138C12.9668 22.2621 11.033 22.2621 9.08208 22.2138L9.02444 22.2124C7.49896 22.1747 6.27234 22.1444 5.28946 21.9752C4.26129 21.7982 3.42493 21.4586 2.71757 20.7563C2.1965 20.239 1.86703 19.651 1.6601 18.9557C1.56698 18.6429 1.6869 18.3057 1.95667 18.1219L8.49065 13.6706C9.76921 12.7996 10.8446 12.25 11.9999 12.25Z',
  d7: 'M1.7676 8.89002C1.51889 9.00916 1.35563 9.25518 1.34248 9.53063L1.31725 10.0588C1.25048 11.5762 1.23339 13.0642 1.26606 14.5669L1.26849 14.6791C1.28481 15.4319 1.29957 16.1132 1.33477 16.7304L7.47656 12.5462C7.23815 12.3873 6.9866 12.2044 6.70695 12.0007L2.53323 8.9602C2.31033 8.79783 2.0163 8.77088 1.7676 8.89002Z',
  d8: 'M22.2324 8.89002C22.4811 9.00916 22.6444 9.25518 22.6575 9.53063L22.6828 10.0588C22.7495 11.5762 22.7666 13.0642 22.7339 14.5669L22.7315 14.6791C22.7152 15.4319 22.7004 16.1133 22.6652 16.7305L16.5233 12.5463C16.7618 12.3873 17.0134 12.2044 17.2931 12.0007L21.4668 8.9602C21.6897 8.79783 21.9837 8.77088 22.2324 8.89002Z',
  d9: 'M9.80257 2.35789C10.5487 1.97652 11.2374 1.75 12.0001 1.75C12.7627 1.75 13.4514 1.97652 14.1975 2.35789C14.9192 2.72677 15.7502 3.27093 16.7906 3.95217L16.7906 3.95218L20.7079 6.5171C21.1344 6.79572 21.5079 7.03968 21.8087 7.31885C21.3746 7.3381 20.9474 7.48289 20.5834 7.74804L16.4097 10.7885C16.1247 10.9961 15.8989 11.1599 15.6911 11.2985C15.5158 11.4154 15.3699 11.5659 15.2596 11.7383C14.2617 11.167 13.1944 10.75 12.0005 10.75C10.8061 10.75 9.73854 11.1673 8.74042 11.7388C8.6301 11.5661 8.48404 11.4155 8.30853 11.2984C8.10073 11.1599 7.87498 10.9961 7.59003 10.7885L3.4163 7.74804C3.05242 7.48296 2.62534 7.33818 2.19138 7.31887C2.49214 7.03969 2.86566 6.79572 3.29225 6.5171L7.2095 3.95217C8.24988 3.27092 9.08086 2.72677 9.80257 2.35789Z',
  d10: 'M2 8.50763L10 14.5151M22 8.50763L14 14.5151',
  d11: 'M2 21.0231L12 13.5138L22 21.0231',
  d12: 'M2.02148 8.48467L11.9696 2.4985C11.9728 2.4966 11.9767 2.49659 11.9799 2.49849L21.9893 8.50135V21.488C21.9893 21.4936 21.9848 21.498 21.9793 21.498H2.03148C2.02596 21.498 2.02148 21.4936 2.02148 21.488V8.48467Z',
  d13: 'M12.3856 1.85688C12.1481 1.71437 11.8513 1.71438 11.6138 1.85689L1.90305 7.68352L10.3775 13.8468L12.0005 12.5359L13.6236 13.8468L22.0975 7.68389L12.3856 1.85688Z',
  d14: 'M22.75 9.06412L14.8319 14.8228L22.75 21.2182V9.06412Z',
  d15: 'M21.6403 22.25L12.0005 14.4641L2.36082 22.25H21.6403Z',
  d16: 'M1.25 21.219L9.16921 14.8228L1.25 9.06332V21.219Z',
} as const;

export const IconMailOpen01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-open-01-stroke-rounded IconMailOpen01StrokeRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailOpen01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-open-01-duotone-rounded IconMailOpen01DuotoneRounded"
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
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailOpen01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-open-01-twotone-rounded IconMailOpen01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailOpen01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-open-01-solid-rounded IconMailOpen01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailOpen01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-open-01-bulk-rounded IconMailOpen01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailOpen01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-open-01-stroke-sharp IconMailOpen01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailOpen01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-open-01-solid-sharp IconMailOpen01SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfMailOpen01: TheIconSelfPack = {
  name: 'MailOpen01',
  StrokeRounded: IconMailOpen01StrokeRounded,
  DuotoneRounded: IconMailOpen01DuotoneRounded,
  TwotoneRounded: IconMailOpen01TwotoneRounded,
  SolidRounded: IconMailOpen01SolidRounded,
  BulkRounded: IconMailOpen01BulkRounded,
  StrokeSharp: IconMailOpen01StrokeSharp,
  SolidSharp: IconMailOpen01SolidSharp,
};