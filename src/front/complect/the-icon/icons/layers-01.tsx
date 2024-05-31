import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.64298 3.14559L6.93816 3.93362C4.31272 5.14719 3 5.75397 3 6.75C3 7.74603 4.31272 8.35281 6.93817 9.56638L8.64298 10.3544C10.2952 11.1181 11.1214 11.5 12 11.5C12.8786 11.5 13.7048 11.1181 15.357 10.3544L17.0618 9.56638C19.6873 8.35281 21 7.74603 21 6.75C21 5.75397 19.6873 5.14719 17.0618 3.93362L15.357 3.14559C13.7048 2.38186 12.8786 2 12 2C11.1214 2 10.2952 2.38186 8.64298 3.14559Z',
  d2: 'M20.788 11.0972C20.9293 11.2959 21 11.5031 21 11.7309C21 12.7127 19.6873 13.3109 17.0618 14.5072L15.357 15.284C13.7048 16.0368 12.8786 16.4133 12 16.4133C11.1214 16.4133 10.2952 16.0368 8.64298 15.284L6.93817 14.5072C4.31272 13.3109 3 12.7127 3 11.7309C3 11.5031 3.07067 11.2959 3.212 11.0972',
  d3: 'M20.3767 16.2661C20.7922 16.5971 21 16.927 21 17.3176C21 18.2995 19.6873 18.8976 17.0618 20.0939L15.357 20.8707C13.7048 21.6236 12.8786 22 12 22C11.1214 22 10.2952 21.6236 8.64298 20.8707L6.93817 20.0939C4.31272 18.8976 3 18.2995 3 17.3176C3 16.927 3.20778 16.5971 3.62334 16.2661',
  d4: 'M20.788 11.0977C20.9293 11.2964 21 11.5036 21 11.7314C21 12.7132 19.6873 13.3114 17.0618 14.5077L15.357 15.2845C13.7048 16.0373 12.8786 16.4137 12 16.4137C11.1214 16.4137 10.2952 16.0373 8.64298 15.2845L6.93817 14.5077C4.31272 13.3114 3 12.7132 3 11.7314C3 11.5036 3.07067 11.2964 3.212 11.0977',
  d5: 'M20.3767 16.2656C20.7922 16.5966 21 16.9265 21 17.3171C21 18.299 19.6873 18.8971 17.0618 20.0934L15.357 20.8702C13.7048 21.6231 12.8786 21.9995 12 21.9995C11.1214 21.9995 10.2952 21.6231 8.64298 20.8702L6.93817 20.0934C4.31272 18.8971 3 18.299 3 17.3171C3 16.9265 3.20778 16.5966 3.62334 16.2656',
  d6: 'M20.3767 16.2666C20.7922 16.5976 21 16.9275 21 17.3181C21 18.3 19.6873 18.8981 17.0618 20.0944L15.357 20.8712C13.7048 21.624 12.8786 22.0005 12 22.0005C11.1214 22.0005 10.2952 21.624 8.64298 20.8712L6.93817 20.0944C4.31272 18.8981 3 18.3 3 17.3181C3 16.9275 3.20778 16.5976 3.62334 16.2666',
  d7: 'M8.48709 2.39137C9.98525 1.69829 10.9543 1.25 12 1.25C13.0457 1.25 14.0147 1.69829 15.5129 2.39137L15.6717 2.4648L17.4361 3.28038L17.4362 3.28039C18.6983 3.86376 19.7228 4.33731 20.425 4.7951C21.1276 5.25313 21.75 5.84942 21.75 6.75C21.75 7.65058 21.1276 8.24687 20.425 8.7049C19.7228 9.16269 18.6983 9.63625 17.4361 10.2196L15.6717 11.0352L15.5129 11.1086C14.0147 11.8017 13.0457 12.25 12 12.25C10.9543 12.25 9.98524 11.8017 8.48707 11.1086L8.3283 11.0352L6.56388 10.2196C5.30174 9.63625 4.27718 9.16269 3.57495 8.7049C2.87237 8.24687 2.25 7.65058 2.25 6.75C2.25 5.84942 2.87237 5.25313 3.57495 4.7951C4.27718 4.33731 5.30174 3.86375 6.56388 3.28038L8.3283 2.4648L8.48709 2.39137Z',
  d8: 'M4.59541 15.3926C4.93089 15.8246 4.8614 16.4538 4.4402 16.7979C4.29438 16.917 4.23479 16.9964 4.21238 17.0346C4.19921 17.0571 4.19963 17.0622 4.19992 17.0657C4.19996 17.0662 4.2 17.0667 4.2 17.0672C4.2 17.0742 4.20055 17.0756 4.20099 17.0767C4.20094 17.0766 4.20105 17.0769 4.20099 17.0767C4.20207 17.0798 4.20941 17.0995 4.23715 17.1364C4.29989 17.2199 4.43529 17.3512 4.71204 17.5336C5.27828 17.9069 6.15898 18.3213 7.46898 18.9335L9.13118 19.7103C10.8225 20.5007 11.4045 20.7495 12 20.7495C12.5955 20.7495 13.1775 20.5007 14.8688 19.7103L16.531 18.9335C17.841 18.3213 18.7217 17.9068 19.288 17.5336C19.5647 17.3512 19.7001 17.2199 19.7629 17.1364C19.7906 17.0995 19.7978 17.0802 19.7989 17.0771C19.7988 17.0773 19.7989 17.077 19.7989 17.0771C19.7993 17.076 19.8 17.0742 19.8 17.0672C19.8 17.0667 19.8 17.0662 19.8001 17.0657C19.8004 17.0622 19.8008 17.0571 19.7876 17.0346C19.7652 16.9964 19.7056 16.917 19.5598 16.7979C19.1386 16.4538 19.0691 15.8246 19.4046 15.3926C19.7401 14.9606 20.3535 14.8894 20.7747 15.2335C21.2978 15.6608 21.75 16.2484 21.75 17.0672C21.75 18.1017 21.0384 18.7572 20.3422 19.2162C19.6427 19.6772 18.6305 20.1502 17.4138 20.7188L15.6774 21.5302C15.6143 21.5597 15.5522 21.5888 15.4908 21.6175C14.0619 22.2862 13.0718 22.7495 12 22.7495C10.9282 22.7495 9.93809 22.2862 8.50921 21.6175C8.44785 21.5888 8.38567 21.5597 8.32264 21.5302L6.58625 20.7188C5.3695 20.1502 4.35731 19.6772 3.65782 19.2162C2.96157 18.7572 2.25 18.1017 2.25 17.0672C2.25 16.2484 2.70221 15.6608 3.22531 15.2335C3.64651 14.8894 4.25992 14.9606 4.59541 15.3926Z',
  d9: 'M4.59541 10.2637C4.93089 10.6957 4.8614 11.3249 4.4402 11.669C4.29438 11.7881 4.23479 11.8675 4.21238 11.9057C4.19921 11.9281 4.19963 11.9332 4.19992 11.9368C4.19996 11.9373 4.2 11.9378 4.2 11.9383C4.2 11.9453 4.20055 11.9467 4.20099 11.9478C4.20094 11.9477 4.20105 11.948 4.20099 11.9478C4.20207 11.9509 4.20941 11.9706 4.23715 12.0075C4.29989 12.091 4.43529 12.2223 4.71204 12.4047C5.27828 12.7779 6.15898 13.1923 7.46898 13.8046L9.13118 14.5814C10.8225 15.3718 11.4045 15.6206 12 15.6206C12.5955 15.6206 13.1775 15.3718 14.8688 14.5814L16.531 13.8046C17.841 13.1923 18.7217 12.7779 19.288 12.4047C19.5647 12.2223 19.7001 12.091 19.7629 12.0075C19.7906 11.9706 19.7978 11.9513 19.7989 11.9482C19.7988 11.9484 19.7989 11.9481 19.7989 11.9482C19.7993 11.9471 19.8 11.9453 19.8 11.9383C19.8 11.9378 19.8 11.9373 19.8001 11.9368C19.8004 11.9332 19.8008 11.9281 19.7876 11.9057C19.7652 11.8675 19.7056 11.7881 19.5598 11.669C19.1386 11.3249 19.0691 10.6957 19.4046 10.2637C19.7401 9.83174 20.3535 9.76047 20.7747 10.1045C21.2978 10.5319 21.75 11.1195 21.75 11.9383C21.75 12.9728 21.0384 13.6283 20.3422 14.0872C19.6427 14.5483 18.6305 15.0213 17.4138 15.5899L15.6774 16.4013C15.6143 16.4308 15.5522 16.4599 15.4908 16.4886C14.0619 17.1573 13.0718 17.6206 12 17.6206C10.9282 17.6206 9.93809 17.1573 8.50921 16.4886C8.44785 16.4599 8.38567 16.4308 8.32264 16.4013L6.58625 15.5899C5.3695 15.0213 4.35731 14.5483 3.65782 14.0872C2.96157 13.6283 2.25 12.9728 2.25 11.9383C2.25 11.1195 2.70221 10.5319 3.22531 10.1045C3.64651 9.76047 4.25992 9.83174 4.59541 10.2637Z',
  d10: 'M12 2L3 7L12 12L21 7L12 2Z',
  d11: 'M3 12L12 17L21 12',
  d12: 'M3 17L12 22L21 17',
  d13: 'M11.5156 22.624L2.51562 17.624L3.48691 15.8757L12.0013 20.6059L20.5156 15.8757L21.4869 17.624L12.4869 22.624C12.1849 22.7918 11.8176 22.7918 11.5156 22.624Z',
  d14: 'M11.5156 17.624L2.51562 12.624L3.48691 10.8757L12.0013 15.6059L20.5156 10.8757L21.4869 12.624L12.4869 17.624C12.1849 17.7918 11.8176 17.7918 11.5156 17.624Z',
  d15: 'M11.6358 1.34438C11.8623 1.21854 12.1377 1.21854 12.3642 1.34438L21.3642 6.34438C21.6023 6.47666 21.75 6.72762 21.75 7C21.75 7.27238 21.6023 7.52334 21.3642 7.65562L12.3642 12.6556C12.1377 12.7815 11.8623 12.7815 11.6358 12.6556L2.63577 7.65562C2.39767 7.52334 2.25 7.27238 2.25 7C2.25 6.72762 2.39767 6.47666 2.63577 6.34438L11.6358 1.34438Z',
} as const;

export const IconLayers01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-01-stroke-rounded IconLayers01StrokeRounded"
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

export const IconLayers01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-01-duotone-rounded IconLayers01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconLayers01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-01-twotone-rounded IconLayers01TwotoneRounded"
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
        d={d.d4} 
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

export const IconLayers01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-01-solid-rounded IconLayers01SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayers01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-01-bulk-rounded IconLayers01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayers01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-01-stroke-sharp IconLayers01StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLayers01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-01-solid-sharp IconLayers01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfLayers01: TheIconSelfPack = {
  name: 'Layers01',
  StrokeRounded: IconLayers01StrokeRounded,
  DuotoneRounded: IconLayers01DuotoneRounded,
  TwotoneRounded: IconLayers01TwotoneRounded,
  SolidRounded: IconLayers01SolidRounded,
  BulkRounded: IconLayers01BulkRounded,
  StrokeSharp: IconLayers01StrokeSharp,
  SolidSharp: IconLayers01SolidSharp,
};