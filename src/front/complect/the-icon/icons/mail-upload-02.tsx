import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.5 19.4902C12.0328 19.5094 10.5713 19.5004 9.09883 19.4634C5.95033 19.3843 4.37608 19.3448 3.24496 18.2094C2.11383 17.0739 2.08114 15.5412 2.01577 12.4756C1.99475 11.4899 1.99474 10.5101 2.01576 9.52438C2.08114 6.45885 2.11382 4.92608 3.24495 3.79065C4.37608 2.65521 5.95033 2.61566 9.09882 2.53656C11.0393 2.48781 12.9607 2.48781 14.9012 2.53657C18.0497 2.61568 19.6239 2.65523 20.7551 3.79066C21.8862 4.92609 21.9189 6.45886 21.9842 9.52439C21.9947 10.0172 22 10.5086 22 11',
  d2: 'M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5',
  d3: 'M16 16C16.4915 15.4943 17.7998 13.5 18.5 13.5M21 16C20.5085 15.4943 19.2002 13.5 18.5 13.5M18.5 13.5V21.5',
  d4: 'M2.01577 12.4756C2.08114 15.5412 2.11383 17.0739 3.24496 18.2094C4.37608 19.3448 5.95033 19.3843 9.09883 19.4634C11.0393 19.5122 12.9607 19.5122 14.9012 19.4634C18.0497 19.3843 19.6239 19.3448 20.7551 18.2094C21.8862 17.0739 21.9189 15.5412 21.9842 12.4756C22.0053 11.4899 22.0053 10.5101 21.9842 9.52439C21.9189 6.45886 21.8862 4.92609 20.7551 3.79066C19.6239 2.65523 18.0497 2.61568 14.9012 2.53657C12.9607 2.48781 11.0393 2.48781 9.09882 2.53656C5.95033 2.61566 4.37608 2.65521 3.24495 3.79065C2.11382 4.92608 2.08114 6.45885 2.01576 9.52438C1.99474 10.5101 1.99475 11.4899 2.01577 12.4756Z',
  d5: 'M9.07998 1.6618C11.033 1.61273 12.967 1.61273 14.92 1.66181L14.9782 1.66327C16.503 1.70156 17.73 1.73237 18.7133 1.90362C19.7428 2.08291 20.5795 2.42679 21.2864 3.13634C21.9903 3.84292 22.3324 4.66761 22.5082 5.68042C22.6757 6.64479 22.7012 7.84183 22.7328 9.32467L22.7341 9.3834C22.7553 10.3797 22.7553 11.3703 22.7341 12.3666C22.7341 12.973 22.7341 13.2762 22.5999 13.3652C22.5621 13.3902 22.5249 13.4046 22.4801 13.4116C22.321 13.4363 22.1026 13.197 21.6658 12.7184C21.5172 12.5556 21.3745 12.4089 21.2302 12.2607L21.199 12.2286C20.9771 12.0005 20.682 11.7216 20.3361 11.4836C20.0532 11.289 19.3916 10.875 18.4998 10.875C17.608 10.875 16.9464 11.289 16.6635 11.4836C16.3176 11.7216 16.0225 12.0005 15.8006 12.2286C15.3555 12.6861 14.9259 13.2332 14.6382 13.6002C14.5383 13.7273 14.3149 14.0114 14.1735 14.2461L14.1714 14.2495L14.1658 14.2588C14.0659 14.4226 13.3799 15.5474 14.0139 16.8542C14.4002 17.6506 15.036 18.0196 15.5168 18.1915C15.7697 18.2819 15.8962 18.3272 15.9509 18.4049C16.0057 18.4826 16.0057 18.5972 16.0057 18.8265L16.0057 19.4773C16.0057 19.7522 16.0057 19.8896 15.9206 19.977C15.8355 20.0644 15.6984 20.068 15.4241 20.0752C15.1697 20.0819 14.9416 20.0877 14.9215 20.0882L14.92 20.0882C12.967 20.1373 11.033 20.1373 9.07999 20.0882L9.02177 20.0867C7.49697 20.0485 6.27001 20.0176 5.2867 19.8464C4.2572 19.6671 3.42048 19.3232 2.71362 18.6137C2.00972 17.9071 1.66764 17.0824 1.49176 16.0696C1.32429 15.1052 1.29878 13.9082 1.26719 12.4254L1.26594 12.3666C1.24469 11.3703 1.24469 10.3797 1.26593 9.38339L1.26719 9.32465C1.29878 7.8418 1.32429 6.64478 1.49176 5.6804C1.66764 4.6676 2.00971 3.8429 2.71362 3.13632C3.42048 2.42677 4.2572 2.08289 5.2867 1.9036C6.27002 1.73235 7.49699 1.70155 9.02182 1.66326L9.07998 1.6618ZM7.38182 6.72939C7.02527 6.51858 6.56533 6.63674 6.35452 6.99329C6.14371 7.34985 6.26186 7.80979 6.61841 8.0206L9.56043 9.76003C10.4313 10.2749 11.1827 10.625 12.0001 10.625C12.8175 10.625 13.569 10.2749 14.4398 9.76003L17.3818 8.0206C17.7384 7.80979 17.8565 7.34985 17.6457 6.99329C17.4349 6.63674 16.975 6.51858 16.6184 6.72939L13.6764 8.46882C12.832 8.96804 12.3831 9.125 12.0001 9.125C11.6171 9.125 11.1682 8.96804 10.3238 8.46882L7.38182 6.72939Z',
  d6: 'M19.5059 21.375C19.5059 21.9273 19.0581 22.375 18.5059 22.375C17.9536 22.375 17.5059 21.9273 17.5059 21.375L17.5059 16.875L16.9116 16.875C16.736 16.8751 16.5203 16.8753 16.3439 16.8532L16.3405 16.8528C16.2141 16.837 15.638 16.7652 15.3637 16.1996C15.0887 15.6327 15.3907 15.1326 15.456 15.0244L15.4584 15.0204C15.5506 14.8674 15.6848 14.6965 15.7951 14.5559L15.8188 14.5257C16.1135 14.1498 16.4954 13.6656 16.8759 13.2746C17.0657 13.0795 17.283 12.8783 17.5139 12.7194C17.7191 12.5782 18.0693 12.375 18.5 12.375C18.9307 12.375 19.2809 12.5782 19.4861 12.7194C19.717 12.8783 19.9343 13.0795 20.1241 13.2746C20.5046 13.6656 20.8865 14.1498 21.1812 14.5257L21.2049 14.5559C21.3152 14.6965 21.4494 14.8673 21.5416 15.0204L21.544 15.0244C21.6093 15.1326 21.9113 15.6328 21.6363 16.1996C21.362 16.7652 20.7859 16.837 20.6595 16.8528L20.6561 16.8532C20.4797 16.8753 20.264 16.8751 20.0884 16.875L19.5059 16.875L19.5059 21.375Z',
  d7: 'M14.92 1.66181C12.967 1.61273 11.033 1.61273 9.07999 1.6618L9.02182 1.66326C7.497 1.70155 6.27002 1.73235 5.2867 1.9036C4.2572 2.08289 3.42048 2.42677 2.71362 3.13632C2.00971 3.8429 1.66764 4.6676 1.49176 5.6804C1.32429 6.64478 1.29878 7.8418 1.26719 9.32465L1.26593 9.38339C1.24469 10.3797 1.24469 11.3703 1.26594 12.3666L1.26719 12.4254C1.29879 13.9082 1.32429 15.1052 1.49176 16.0696C1.66764 17.0824 2.00972 17.9071 2.71362 18.6137C3.42048 19.3232 4.2572 19.6671 5.2867 19.8464C6.27001 20.0176 7.49697 20.0485 9.02177 20.0867L9.07999 20.0882C11.033 20.1373 12.967 20.1373 14.92 20.0882L14.9215 20.0882C14.9416 20.0877 15.1697 20.0819 15.4241 20.0752C15.6984 20.068 15.8355 20.0644 15.9206 19.977C16.0057 19.8896 16.0057 19.7522 16.0057 19.4773L16.0057 18.8265C16.0057 18.5972 16.0057 18.4826 15.9509 18.4049C15.8962 18.3272 15.7697 18.2819 15.5168 18.1915C15.036 18.0196 14.4002 17.6506 14.0139 16.8542C13.3799 15.5474 14.0659 14.4226 14.1658 14.2588L14.1714 14.2495L14.1735 14.2461C14.3149 14.0114 14.5383 13.7273 14.6382 13.6002C14.9259 13.2332 15.3555 12.6861 15.8006 12.2286C16.0225 12.0005 16.3176 11.7216 16.6635 11.4836C16.9464 11.289 17.608 10.875 18.4998 10.875C19.3916 10.875 20.0532 11.289 20.3361 11.4836C20.682 11.7216 20.9771 12.0005 21.199 12.2286L21.2302 12.2607C21.3745 12.4089 21.5172 12.5556 21.6658 12.7184C22.1026 13.197 22.321 13.4363 22.4801 13.4116C22.5249 13.4046 22.5621 13.3902 22.5999 13.3652C22.7341 13.2762 22.7341 12.973 22.7341 12.3666C22.7553 11.3703 22.7553 10.3797 22.7341 9.3834L22.7328 9.32467C22.7012 7.84183 22.6757 6.64479 22.5082 5.68042C22.3324 4.66761 21.9903 3.84292 21.2864 3.13634C20.5795 2.42679 19.7428 2.08291 18.7133 1.90362C17.73 1.73237 16.503 1.70156 14.9782 1.66327L14.92 1.66181Z',
  d8: 'M6.13935 6.86622C6.42043 6.39081 7.03369 6.23328 7.5091 6.51435L10.4511 8.25378C11.2914 8.75062 11.6898 8.87516 12.0002 8.87516C12.3105 8.87516 12.7089 8.75062 13.5492 8.25378L16.4912 6.51435C16.9666 6.23328 17.5799 6.39081 17.861 6.86622C18.142 7.34163 17.9845 7.95488 17.5091 8.23596L14.5671 9.97539C13.6916 10.493 12.8898 10.8752 12.0002 10.8752C11.1105 10.8752 10.3088 10.493 9.43323 9.97539L6.49122 8.23596C6.01581 7.95488 5.85828 7.34163 6.13935 6.86622Z',
  d9: 'M22 10.5V2.5H2V19.5H14',
  d10: 'M6 7L12 11L18 7',
  d11: 'M19 21.5L19 13.9046M16 16.5L19 13.5L22 16.5',
  d12: 'M1.25 2.5C1.25 2.08579 1.58579 1.75 2 1.75H22C22.4142 1.75 22.75 2.08579 22.75 2.5V14.7748L19.0432 11.0681L13.5684 16.5429L16.7503 19.7249L16.7932 20.25H2C1.58579 20.25 1.25 19.9142 1.25 19.5V2.5ZM6.41603 6.37598L5.58398 7.62405L12 11.9014L18.416 7.62405L17.584 6.37598L12 10.0986L6.41603 6.37598Z',
  d13: 'M19.043 12.8359L22.7502 16.543L21.3359 17.9573L20.043 16.6644L20.043 22.2502H18.043L18.043 16.6644L16.7502 17.9573L15.3359 16.543L19.043 12.8359Z',
};

export const IconMailUpload02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-upload-02-stroke-rounded IconMailUpload02StrokeRounded"
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

export const IconMailUpload02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-upload-02-duotone-rounded IconMailUpload02DuotoneRounded"
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

export const IconMailUpload02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-upload-02-twotone-rounded IconMailUpload02TwotoneRounded"
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

export const IconMailUpload02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-upload-02-solid-rounded IconMailUpload02SolidRounded"
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

export const IconMailUpload02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-upload-02-bulk-rounded IconMailUpload02BulkRounded"
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

export const IconMailUpload02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-upload-02-stroke-sharp IconMailUpload02StrokeSharp"
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

export const IconMailUpload02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-upload-02-solid-sharp IconMailUpload02SolidSharp"
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

export const iconPackOfMailUpload02: TheIconSelfPack = {
  name: 'MailUpload02',
  StrokeRounded: IconMailUpload02StrokeRounded,
  DuotoneRounded: IconMailUpload02DuotoneRounded,
  TwotoneRounded: IconMailUpload02TwotoneRounded,
  SolidRounded: IconMailUpload02SolidRounded,
  BulkRounded: IconMailUpload02BulkRounded,
  StrokeSharp: IconMailUpload02StrokeSharp,
  SolidSharp: IconMailUpload02SolidSharp,
};