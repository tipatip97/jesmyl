import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 4.5C12.5 3.32149 12.5 2.73223 12.8661 2.36612C13.2322 2 13.8215 2 15 2C16.1785 2 16.7678 2 17.1339 2.36612C17.5 2.73223 17.5 3.32149 17.5 4.5C17.5 5.67851 17.5 6.26777 17.1339 6.63388C16.7678 7 16.1785 7 15 7C13.8215 7 13.2322 7 12.8661 6.63388C12.5 6.26777 12.5 5.67851 12.5 4.5Z',
  d2: 'M12.5 19.5C12.5 18.3215 12.5 17.7322 12.8661 17.3661C13.2322 17 13.8215 17 15 17C16.1785 17 16.7678 17 17.1339 17.3661C17.5 17.7322 17.5 18.3215 17.5 19.5C17.5 20.6785 17.5 21.2678 17.1339 21.6339C16.7678 22 16.1785 22 15 22C13.8215 22 13.2322 22 12.8661 21.6339C12.5 21.2678 12.5 20.6785 12.5 19.5Z',
  d3: 'M2 12C2 10.5858 2 9.87868 2.51256 9.43934C3.02513 9 3.85008 9 5.5 9C7.14992 9 7.97487 9 8.48744 9.43934C9 9.87868 9 10.5858 9 12C9 13.4142 9 14.1213 8.48744 14.5607C7.97487 15 7.14992 15 5.5 15C3.85008 15 3.02513 15 2.51256 14.5607C2 14.1213 2 13.4142 2 12Z',
  d4: 'M21.9994 4.50009H17.5M5.5 9.00018V8C5.5 6.59554 5.5 5.89331 5.83706 5.38886C5.98298 5.17048 6.17048 4.98298 6.38886 4.83706C6.89331 4.5 7.59554 4.5 9 4.5H12.5M21.9994 19.5004H17.5M5.5 15.0003V16.0005C5.5 17.405 5.5 18.1072 5.83706 18.6116C5.98298 18.83 6.17048 19.0175 6.38886 19.1634C6.89331 19.5005 7.59554 19.5005 9 19.5005H12.5',
  d5: 'M14.8276 1.25L14.875 1.25L14.9224 1.25L14.9224 1.25C15.471 1.24996 15.9558 1.24992 16.3465 1.30246C16.7701 1.3594 17.1936 1.49016 17.5392 1.83579C17.8849 2.18143 18.0156 2.60492 18.0726 3.02848C18.1251 3.41923 18.1251 3.90401 18.125 4.45256V4.45258L18.125 4.50001L18.125 4.54743V4.54745C18.1251 5.096 18.1251 5.58078 18.0726 5.97153C18.0156 6.39509 17.8849 6.81858 17.5392 7.16422C17.1936 7.50985 16.7701 7.64061 16.3465 7.69755C15.9558 7.75009 15.471 7.75005 14.9225 7.75001H14.9224L14.875 7.75L14.8276 7.75001H14.8276C14.279 7.75005 13.7942 7.75009 13.4035 7.69755C12.9799 7.64061 12.5564 7.50985 12.2108 7.16422C11.8652 6.81858 11.7344 6.39509 11.6775 5.97153C11.6249 5.58077 11.625 5.09599 11.625 4.54744L11.625 4.50001L11.625 4.45257L11.625 4.45257C11.625 3.90402 11.6249 3.41924 11.6775 3.02848C11.7344 2.60492 11.8652 2.18143 12.2108 1.83579C12.5564 1.49016 12.9799 1.3594 13.4035 1.30246C13.7942 1.24992 14.279 1.24996 14.8276 1.25Z',
  d6: 'M14.8276 16.25L14.875 16.25L14.9224 16.25L14.9224 16.25C15.471 16.25 15.9558 16.2499 16.3465 16.3025C16.7701 16.3594 17.1936 16.4902 17.5392 16.8358C17.8849 17.1814 18.0156 17.6049 18.0726 18.0285C18.1251 18.4192 18.1251 18.904 18.125 19.4526V19.4526L18.125 19.5L18.125 19.5474V19.5475C18.1251 20.096 18.1251 20.5808 18.0726 20.9715C18.0156 21.3951 17.8849 21.8186 17.5392 22.1642C17.1936 22.5099 16.7701 22.6406 16.3465 22.6976C15.9558 22.7501 15.471 22.7501 14.9225 22.75H14.9224L14.875 22.75L14.8276 22.75H14.8276C14.279 22.7501 13.7942 22.7501 13.4035 22.6976C12.9799 22.6406 12.5564 22.5099 12.2108 22.1642C11.8652 21.8186 11.7344 21.3951 11.6775 20.9715C11.6249 20.5808 11.625 20.096 11.625 19.5474L11.625 19.5L11.625 19.4526L11.625 19.4526C11.625 18.904 11.6249 18.4192 11.6775 18.0285C11.7344 17.6049 11.8652 17.1814 12.2108 16.8358C12.5564 16.4902 12.9799 16.3594 13.4035 16.3025C13.7942 16.2499 14.279 16.25 14.8276 16.25Z',
  d7: 'M5.41994 8.25C6.20663 8.24998 6.86141 8.24996 7.38109 8.30985C7.92186 8.37217 8.4299 8.50935 8.85054 8.8699C9.28785 9.24474 9.47112 9.72301 9.55188 10.2379C9.62512 10.7048 9.62507 11.285 9.62501 11.9446L9.62501 12L9.62501 12.0554C9.62507 12.715 9.62512 13.2952 9.55188 13.7621C9.47112 14.277 9.28785 14.7553 8.85054 15.1301C8.4299 15.4907 7.92186 15.6278 7.38109 15.6902C6.86141 15.75 6.20661 15.75 5.41991 15.75H5.3301C4.5434 15.75 3.88861 15.75 3.36892 15.6902C2.82815 15.6278 2.32011 15.4907 1.89948 15.1301C1.46216 14.7553 1.27889 14.277 1.19814 13.7621C1.1249 13.2952 1.12495 12.715 1.125 12.0554L1.125 12.0554L1.12501 12L1.125 11.9446L1.125 11.9446C1.12495 11.285 1.1249 10.7048 1.19814 10.2379C1.27889 9.72301 1.46216 9.24474 1.89948 8.8699C2.32011 8.50935 2.82815 8.37217 3.36892 8.30985C3.8886 8.24996 4.54338 8.24998 5.33007 8.25H5.3301H5.41991H5.41994Z',
  d8: 'M8.82644 3.49976C8.84258 3.49976 8.85876 3.49976 8.875 3.49976H12.375C12.9273 3.49976 13.375 3.94747 13.375 4.49976C13.375 5.05204 12.9273 5.49976 12.375 5.49976H8.875C8.15196 5.49976 7.68495 5.50097 7.33313 5.53676C6.99803 5.57085 6.87996 5.62785 6.81943 5.66829C6.71024 5.74125 6.61649 5.835 6.54353 5.94419C6.50309 6.00471 6.44609 6.12279 6.412 6.45789C6.37621 6.8097 6.375 7.27672 6.375 7.99976V8.99994C6.375 9.55222 5.92729 9.99994 5.375 9.99994C4.82272 9.99994 4.375 9.55222 4.375 8.99994V7.99976C4.375 7.98352 4.375 7.96733 4.375 7.9512C4.37497 7.29045 4.37495 6.72065 4.42227 6.25548C4.47245 5.76224 4.58398 5.27697 4.88059 4.83305C5.09947 4.50548 5.38072 4.22423 5.70829 4.00535C6.15221 3.70873 6.63748 3.5972 7.13072 3.54703C7.59589 3.49971 8.1657 3.49973 8.82644 3.49976ZM16.375 4.49985C16.375 3.94756 16.8227 3.49985 17.375 3.49985H21.8744C22.4266 3.49985 22.8744 3.94756 22.8744 4.49985C22.8744 5.05213 22.4266 5.49985 21.8744 5.49985H17.375C16.8227 5.49985 16.375 5.05213 16.375 4.49985ZM5.375 14.0001C5.92729 14.0001 6.375 14.4478 6.375 15.0001V16.0002C6.375 16.7233 6.37621 17.1903 6.412 17.5421C6.44609 17.8772 6.50309 17.9953 6.54353 18.0558C6.61649 18.165 6.71024 18.2588 6.81943 18.3317C6.87996 18.3722 6.99803 18.4292 7.33313 18.4632C7.68495 18.499 8.15196 18.5002 8.875 18.5002H12.375C12.9273 18.5002 13.375 18.948 13.375 19.5002C13.375 20.0525 12.9273 20.5002 12.375 20.5002H8.82643C8.16569 20.5003 7.59589 20.5003 7.13072 20.453C6.63748 20.4028 6.15221 20.2913 5.70829 19.9947C5.38072 19.7758 5.09947 19.4945 4.88059 19.167C4.58398 18.723 4.47245 18.2378 4.42227 17.7445C4.37495 17.2794 4.37497 16.7096 4.375 16.0488L4.375 15.0001C4.375 14.4478 4.82272 14.0001 5.375 14.0001ZM16.375 19.5002C16.375 18.9479 16.8227 18.5002 17.375 18.5002H21.8744C22.4266 18.5002 22.8744 18.9479 22.8744 19.5002C22.8744 20.0524 22.4266 20.5002 21.8744 20.5002H17.375C16.8227 20.5002 16.375 20.0524 16.375 19.5002Z',
  d9: 'M18.1122 5.50009C18.1253 5.21292 18.1253 4.89294 18.1253 4.54771V4.45282C18.1253 4.10747 18.1253 3.78735 18.1122 3.50009H21.8746C22.4269 3.50009 22.8746 3.94781 22.8746 4.50009C22.8746 5.05238 22.4269 5.50009 21.8746 5.50009H18.1122Z',
  d10: 'M11.6383 3.5C11.6252 3.78728 11.6252 4.1074 11.6252 4.45279V4.54768C11.6252 4.89288 11.6252 5.21285 11.6383 5.5H8.87525C8.1522 5.5 7.68519 5.50121 7.33338 5.537C6.99827 5.57109 6.8802 5.62809 6.81968 5.66853C6.71049 5.74149 6.61674 5.83524 6.54378 5.94443C6.50334 6.00496 6.44634 6.12303 6.41225 6.45813C6.37646 6.80995 6.37525 7.27696 6.37525 8V8.25521C6.08224 8.25023 5.7638 8.25024 5.4202 8.25025H5.33034C4.98673 8.25024 4.66827 8.25023 4.37525 8.25521L4.37525 7.95145C4.37522 7.29072 4.3752 6.72088 4.42252 6.25572C4.47269 5.76248 4.58422 5.27721 4.88084 4.83329C5.09971 4.50572 5.38097 4.22447 5.70854 4.0056C6.15246 3.70898 6.63773 3.59745 7.13097 3.54727C7.59613 3.49995 8.16592 3.49997 8.82665 3.5L11.6383 3.5Z',
  d11: 'M4.37525 15.7453L4.37525 16.0491C4.37522 16.7098 4.3752 17.2796 4.42252 17.7448C4.47269 18.238 4.58422 18.7233 4.88084 19.1672C5.09971 19.4948 5.38097 19.776 5.70854 19.9949C6.15246 20.2915 6.63773 20.403 7.13097 20.4532C7.59613 20.5005 8.16594 20.5005 8.82668 20.5005H11.6383C11.6252 20.2132 11.6252 19.8931 11.6252 19.5477V19.4528C11.6252 19.1076 11.6252 18.7877 11.6383 18.5005H8.87525C8.1522 18.5005 7.68519 18.4993 7.33338 18.4635C6.99827 18.4294 6.8802 18.3724 6.81968 18.332C6.71049 18.259 6.61674 18.1653 6.54378 18.0561C6.50334 17.9955 6.44634 17.8775 6.41225 17.5424C6.37646 17.1905 6.37525 16.7235 6.37525 16.0005V15.7453C6.08225 15.7503 5.76381 15.7503 5.42022 15.7502H5.33035C4.98675 15.7503 4.66825 15.7503 4.37525 15.7453Z',
  d12: 'M18.1122 20.5004C18.1253 20.2131 18.1253 19.8931 18.1253 19.5477V19.4528C18.1253 19.1076 18.1253 18.7876 18.1122 18.5004H21.8746C22.4269 18.5004 22.8746 18.9481 22.8746 19.5004C22.8746 20.0527 22.4269 20.5004 21.8746 20.5004H18.1122Z',
  d13: 'M14.8281 1.25H14.9229C15.4715 1.24996 15.9563 1.24992 16.347 1.30246C16.7706 1.3594 17.1941 1.49016 17.5397 1.83579C17.8853 2.18143 18.0161 2.60492 18.073 3.02848C18.1256 3.41923 18.1255 3.90403 18.1255 4.45258V4.54743C18.1255 5.09598 18.1256 5.58078 18.073 5.97153C18.0161 6.39509 17.8853 6.81858 17.5397 7.16422C17.1941 7.50985 16.7706 7.64061 16.347 7.69755C15.9563 7.75009 15.4715 7.75005 14.9229 7.75001H14.8281C14.2795 7.75005 13.7947 7.75009 13.404 7.69755C12.9804 7.64061 12.5569 7.50985 12.2113 7.16422C11.8656 6.81858 11.7349 6.39509 11.6779 5.97153C11.6254 5.58077 11.6255 5.09599 11.6255 4.54744V4.45257C11.6255 3.90402 11.6254 3.41924 11.6779 3.02848C11.7349 2.60492 11.8656 2.18143 12.2113 1.83579C12.5569 1.49016 12.9804 1.3594 13.404 1.30246C13.7947 1.24992 14.2795 1.24996 14.8281 1.25Z',
  d14: 'M14.8281 16.25H14.9229C15.4715 16.25 15.9563 16.2499 16.347 16.3025C16.7706 16.3594 17.1941 16.4902 17.5397 16.8358C17.8853 17.1814 18.0161 17.6049 18.073 18.0285C18.1256 18.4192 18.1255 18.904 18.1255 19.4526V19.5474C18.1255 20.096 18.1256 20.5808 18.073 20.9715C18.0161 21.3951 17.8853 21.8186 17.5397 22.1642C17.1941 22.5099 16.7706 22.6406 16.347 22.6976C15.9563 22.7501 15.4715 22.75 14.9229 22.75H14.8281C14.2795 22.75 13.7947 22.7501 13.404 22.6976C12.9804 22.6406 12.5569 22.5099 12.2113 22.1642C11.8656 21.8186 11.7349 21.3951 11.6779 20.9715C11.6254 20.5808 11.6255 20.096 11.6255 19.5474V19.4526C11.6255 18.904 11.6254 18.4192 11.6779 18.0285C11.7349 17.6049 11.8656 17.1814 12.2113 16.8358C12.5569 16.4902 12.9804 16.3594 13.404 16.3025C13.7947 16.2499 14.2795 16.25 14.8281 16.25Z',
  d15: 'M5.42043 8.25C6.20712 8.24998 6.8619 8.24997 7.38158 8.30985C7.92235 8.37217 8.43039 8.50935 8.85103 8.8699C9.28834 9.24474 9.47161 9.72301 9.55237 10.2379C9.6256 10.7048 9.62556 11.285 9.6255 11.9446V12.0554C9.62556 12.715 9.6256 13.2952 9.55237 13.7621C9.47161 14.277 9.28834 14.7553 8.85103 15.1301C8.43039 15.4907 7.92235 15.6278 7.38158 15.6902C6.8619 15.75 6.2071 15.75 5.4204 15.75H5.33059C4.54389 15.75 3.88909 15.75 3.36941 15.6902C2.82864 15.6278 2.3206 15.4907 1.89996 15.1301C1.46265 14.7553 1.27938 14.277 1.19862 13.7621C1.12538 13.2952 1.12543 12.715 1.12549 12.0554V11.9446C1.12543 11.285 1.12538 10.7048 1.19862 10.2379C1.27938 9.72301 1.46265 9.24474 1.89996 8.8699C2.3206 8.50935 2.82864 8.37217 3.36941 8.30985C3.88909 8.24997 4.5439 8.24998 5.33059 8.25H5.42043Z',
  d16: 'M17.5 7V2H12.5V7H17.5Z',
  d17: 'M17.5 22V17H12.5V22H17.5Z',
  d18: 'M9 15V9H2V15H9Z',
  d19: 'M21.9994 4.50009H17.5M5.5 9.00018V4.5H12.5M21.9994 19.5004H17.5M5.5 15.0003V19.5005H12.5',
  d20: 'M11.75 2C11.75 1.58579 12.0858 1.25 12.5 1.25H17.5C17.9142 1.25 18.25 1.58579 18.25 2V7C18.25 7.41421 17.9142 7.75 17.5 7.75H12.5C12.0858 7.75 11.75 7.41421 11.75 7V2Z',
  d21: 'M11.75 17C11.75 16.5858 12.0858 16.25 12.5 16.25H17.5C17.9142 16.25 18.25 16.5858 18.25 17V22C18.25 22.4142 17.9142 22.75 17.5 22.75H12.5C12.0858 22.75 11.75 22.4142 11.75 22V17Z',
  d22: 'M1.25 9C1.25 8.58579 1.58579 8.25 2 8.25H9C9.41421 8.25 9.75 8.58579 9.75 9V15C9.75 15.4142 9.41421 15.75 9 15.75H2C1.58579 15.75 1.25 15.4142 1.25 15V9Z',
  d23: 'M4.5 4.5C4.5 3.94772 4.94772 3.5 5.5 3.5H12.5V5.5H6.5V9.00018H4.5V4.5ZM17.5 3.50009H21.9994V5.50009H17.5V3.50009ZM6.5 18.5005V15.0003H4.5V19.5005C4.5 20.0528 4.94772 20.5005 5.5 20.5005H12.5V18.5005H6.5ZM17.5 18.5004H21.9994V20.5004H17.5V18.5004Z',
} as const;

export const IconFlowSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-square-stroke-rounded IconFlowSquareStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFlowSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-square-duotone-rounded IconFlowSquareDuotoneRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconFlowSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-square-twotone-rounded IconFlowSquareTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconFlowSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-square-solid-rounded IconFlowSquareSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconFlowSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-square-bulk-rounded IconFlowSquareBulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
    </TheIconWrapper>
  );
};

export const IconFlowSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-square-stroke-sharp IconFlowSquareStrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconFlowSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-square-solid-sharp IconFlowSquareSolidSharp"
    >
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFlowSquare: TheIconSelfPack = {
  name: 'FlowSquare',
  StrokeRounded: IconFlowSquareStrokeRounded,
  DuotoneRounded: IconFlowSquareDuotoneRounded,
  TwotoneRounded: IconFlowSquareTwotoneRounded,
  SolidRounded: IconFlowSquareSolidRounded,
  BulkRounded: IconFlowSquareBulkRounded,
  StrokeSharp: IconFlowSquareStrokeSharp,
  SolidSharp: IconFlowSquareSolidSharp,
};