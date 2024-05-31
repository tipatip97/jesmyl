import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 11C22 10.5086 21.9947 10.0172 21.9842 9.52439C21.9189 6.45886 21.8862 4.92609 20.7551 3.79066C19.6239 2.65523 18.0497 2.61568 14.9012 2.53657C12.9607 2.48781 11.0393 2.48781 9.09882 2.53656C5.95033 2.61566 4.37608 2.65521 3.24495 3.79065C2.11382 4.92608 2.08114 6.45885 2.01576 9.52438C1.99474 10.5101 1.99475 11.4899 2.01577 12.4756C2.08114 15.5412 2.11383 17.0739 3.24496 18.2094C4.37608 19.3448 5.95033 19.3843 9.09883 19.4634C10.5713 19.5004 12.0328 19.5094 13.5 19.4902',
  d2: 'M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5',
  d3: 'M17 19C17.4915 19.5057 18.7998 21.5 19.5 21.5M22 19C21.5085 19.5057 20.2002 21.5 19.5 21.5M19.5 21.5V13.5',
  d4: 'M2.01577 12.4756C2.08114 15.5412 2.11383 17.0739 3.24496 18.2094C4.37608 19.3448 5.95033 19.3843 9.09883 19.4634C11.0393 19.5122 12.9607 19.5122 14.9012 19.4634C18.0497 19.3843 19.6239 19.3448 20.7551 18.2094C21.8862 17.0739 21.9189 15.5412 21.9842 12.4756C22.0053 11.4899 22.0053 10.5101 21.9842 9.52439C21.9189 6.45886 21.8862 4.92609 20.7551 3.79066C19.6239 2.65523 18.0497 2.61568 14.9012 2.53657C12.9607 2.48781 11.0393 2.48781 9.09882 2.53656C5.95033 2.61566 4.37608 2.65521 3.24495 3.79065C2.11382 4.92608 2.08114 6.45885 2.01576 9.52438C1.99474 10.5101 1.99475 11.4899 2.01577 12.4756Z',
  d5: 'M9.07998 1.6618C11.033 1.61273 12.967 1.61273 14.92 1.66181L14.9782 1.66327C16.503 1.70156 17.73 1.73237 18.7133 1.90362C19.7428 2.08291 20.5795 2.42679 21.2864 3.13634C21.9903 3.84292 22.3324 4.66761 22.5082 5.68042C22.6757 6.64479 22.7012 7.84183 22.7328 9.32467L22.7341 9.3834C22.7553 10.3797 22.7553 11.3703 22.7341 12.3666L22.7328 12.4253C22.7037 13.7918 22.5981 15.3101 22.4506 16.2947C22.4316 16.4214 22.2789 16.4909 22.1541 16.4621C22.0548 16.4391 22.0057 16.3575 22.0057 16.2556L22.0057 13.375C22.0057 11.9943 20.8864 10.875 19.5057 10.875C18.1249 10.875 17.0057 11.9943 17.0057 13.375L17.0057 15.9235C17.0057 16.1528 17.0057 16.2674 16.9509 16.3451C16.8962 16.4228 16.7697 16.4681 16.5168 16.5585C16.036 16.7304 15.4002 17.0994 15.0139 17.8958C14.7768 18.3844 14.7243 18.8476 14.7567 19.2446C14.7926 19.6839 14.8105 19.9036 14.7233 19.9999C14.6361 20.0961 14.4544 20.0994 14.0912 20.1058C12.423 20.1354 10.7433 20.13 9.07999 20.0882L9.02177 20.0867C7.49697 20.0485 6.27001 20.0176 5.2867 19.8464C4.2572 19.6671 3.42048 19.3232 2.71362 18.6137C2.00972 17.9071 1.66764 17.0824 1.49176 16.0696C1.32429 15.1052 1.29878 13.9082 1.26719 12.4254L1.26594 12.3666C1.24469 11.3703 1.24469 10.3797 1.26593 9.38339L1.26719 9.32465C1.29878 7.8418 1.32429 6.64478 1.49176 5.6804C1.66764 4.6676 2.00971 3.8429 2.71362 3.13632C3.42048 2.42677 4.2572 2.08289 5.2867 1.9036C6.27002 1.73235 7.49699 1.70155 9.02182 1.66326L9.07998 1.6618ZM7.38182 6.72939C7.02527 6.51858 6.56533 6.63674 6.35452 6.99329C6.14371 7.34985 6.26186 7.80979 6.61841 8.0206L9.56043 9.76003C10.4313 10.2749 11.1827 10.625 12.0001 10.625C12.8175 10.625 13.569 10.2749 14.4398 9.76003L17.3818 8.0206C17.7384 7.80979 17.8565 7.34985 17.6457 6.99329C17.4349 6.63674 16.975 6.51858 16.6184 6.72939L13.6764 8.46882C12.832 8.96804 12.3831 9.125 12.0001 9.125C11.6171 9.125 11.1682 8.96804 10.3238 8.46882L7.38182 6.72939Z',
  d6: 'M20.5059 13.375C20.5059 12.8227 20.0581 12.375 19.5059 12.375C18.9536 12.375 18.5059 12.8227 18.5059 13.375L18.5059 17.875L17.9116 17.875C17.736 17.8749 17.5203 17.8747 17.3439 17.8968L17.3405 17.8972C17.2141 17.913 16.638 17.9848 16.3637 18.5504C16.0887 19.1173 16.3907 19.6174 16.456 19.7256L16.4584 19.7296C16.5506 19.8826 16.6848 20.0535 16.7951 20.1941L16.8188 20.2243C17.1135 20.6002 17.4954 21.0844 17.8759 21.4754C18.0657 21.6705 18.283 21.8717 18.5139 22.0306C18.7191 22.1718 19.0693 22.375 19.5 22.375C19.9307 22.375 20.2809 22.1718 20.4861 22.0306C20.717 21.8717 20.9343 21.6705 21.1241 21.4754C21.5046 21.0844 21.8865 20.6002 22.1812 20.2243L22.2049 20.1941C22.3152 20.0535 22.4494 19.8827 22.5416 19.7296L22.544 19.7256C22.6093 19.6174 22.9113 19.1172 22.6363 18.5504C22.362 17.9848 21.7859 17.913 21.6595 17.8972L21.6561 17.8968C21.4797 17.8747 21.264 17.8749 21.0884 17.875L20.5059 17.875L20.5059 13.375Z',
  d7: 'M14.92 1.66181C12.967 1.61273 11.033 1.61273 9.07999 1.6618L9.02182 1.66326C7.497 1.70155 6.27002 1.73235 5.2867 1.9036C4.2572 2.08289 3.42048 2.42677 2.71362 3.13632C2.00971 3.8429 1.66764 4.6676 1.49176 5.6804C1.32429 6.64478 1.29878 7.8418 1.26719 9.32465L1.26593 9.38339C1.24469 10.3797 1.24469 11.3703 1.26594 12.3666L1.26719 12.4254C1.29879 13.9082 1.32429 15.1052 1.49176 16.0696C1.66764 17.0824 2.00972 17.9071 2.71362 18.6137C3.42048 19.3232 4.2572 19.6671 5.2867 19.8464C6.27001 20.0176 7.49697 20.0485 9.02177 20.0867L9.07999 20.0882C10.7433 20.13 12.423 20.1354 14.0912 20.1058C14.4545 20.0994 14.6361 20.0961 14.7233 19.9999C14.8105 19.9036 14.7926 19.6839 14.7567 19.2446C14.7243 18.8476 14.7768 18.3844 15.0139 17.8958C15.4002 17.0994 16.036 16.7304 16.5168 16.5585C16.7697 16.4681 16.8962 16.4228 16.9509 16.3451C17.0057 16.2674 17.0057 16.1528 17.0057 15.9235L17.0057 13.375C17.0057 11.9943 18.1249 10.875 19.5057 10.875C20.8864 10.875 22.0057 11.9943 22.0057 13.375L22.0057 16.2556C22.0057 16.3575 22.0548 16.4391 22.1541 16.4621C22.2789 16.4909 22.4317 16.4214 22.4506 16.2947C22.5981 15.3101 22.7037 13.7918 22.7328 12.4253L22.7341 12.3666C22.7553 11.3703 22.7553 10.3797 22.7341 9.3834L22.7328 9.32467C22.7012 7.84183 22.6757 6.64479 22.5082 5.68042C22.3324 4.66761 21.9903 3.84292 21.2864 3.13634C20.5795 2.42679 19.7428 2.08291 18.7133 1.90362C17.73 1.73237 16.503 1.70156 14.9782 1.66327L14.92 1.66181Z',
  d8: 'M6.13935 6.86622C6.42043 6.39081 7.03369 6.23328 7.5091 6.51435L10.4511 8.25378C11.2914 8.75062 11.6898 8.87516 12.0002 8.87516C12.3105 8.87516 12.7089 8.75062 13.5492 8.25378L16.4912 6.51435C16.9666 6.23328 17.5799 6.39081 17.861 6.86622C18.142 7.34163 17.9845 7.95488 17.5091 8.23596L14.5671 9.97539C13.6916 10.493 12.8898 10.8752 12.0002 10.8752C11.1105 10.8752 10.3088 10.493 9.43323 9.97539L6.49122 8.23596C6.01581 7.95488 5.85828 7.34163 6.13935 6.86622Z',
  d9: 'M22 11V2.5H2V19.5H13',
  d10: 'M6 7L12 11L18 7',
  d11: 'M19 13.5L19 21.1045M16 18.5L19 21.5L22 18.5',
  d12: 'M1.25 2.5C1.25 2.08579 1.58579 1.75 2 1.75H22C22.4142 1.75 22.75 2.08579 22.75 2.5V16.7748L21.2932 15.4038V11.5858H16.7932V15.4038L13.5684 18.5429L15.2754 20.25H2C1.58579 20.25 1.25 19.9142 1.25 19.5V2.5ZM6.41603 6.37598L5.58398 7.62405L12 11.9014L18.416 7.62405L17.584 6.37598L12 10.0986L6.41603 6.37598Z',
  d13: 'M20.043 12.8359L20.043 18.4217L21.3359 17.1288L22.7502 18.543L19.043 22.2502L15.3359 18.543L16.7502 17.1288L18.043 18.4217L18.043 12.8359H20.043Z',
} as const;

export const IconMailDownload02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-download-02-stroke-rounded IconMailDownload02StrokeRounded"
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

export const IconMailDownload02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-download-02-duotone-rounded IconMailDownload02DuotoneRounded"
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

export const IconMailDownload02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-download-02-twotone-rounded IconMailDownload02TwotoneRounded"
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

export const IconMailDownload02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-download-02-solid-rounded IconMailDownload02SolidRounded"
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

export const IconMailDownload02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-download-02-bulk-rounded IconMailDownload02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
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

export const IconMailDownload02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-download-02-stroke-sharp IconMailDownload02StrokeSharp"
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
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailDownload02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-download-02-solid-sharp IconMailDownload02SolidSharp"
    >
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

export const iconPackOfMailDownload02: TheIconSelfPack = {
  name: 'MailDownload02',
  StrokeRounded: IconMailDownload02StrokeRounded,
  DuotoneRounded: IconMailDownload02DuotoneRounded,
  TwotoneRounded: IconMailDownload02TwotoneRounded,
  SolidRounded: IconMailDownload02SolidRounded,
  BulkRounded: IconMailDownload02BulkRounded,
  StrokeSharp: IconMailDownload02StrokeSharp,
  SolidSharp: IconMailDownload02SolidSharp,
};