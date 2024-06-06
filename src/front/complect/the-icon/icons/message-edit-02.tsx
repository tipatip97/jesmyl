import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21.9165 10.5C21.9351 10.6556 21.9495 10.8126 21.9598 10.9707C22.0134 11.8009 22.0134 12.6607 21.9598 13.4909C21.6856 17.7332 18.3536 21.1125 14.1706 21.3905C12.7435 21.4854 11.2536 21.4852 9.8294 21.3905C9.33896 21.3579 8.8044 21.2409 8.34401 21.0513C7.83177 20.8403 7.5756 20.7348 7.44544 20.7508C7.31527 20.7668 7.1264 20.9061 6.74868 21.1846C6.08268 21.6757 5.24367 22.0285 3.99943 21.9982C3.37026 21.9829 3.05568 21.9752 2.91484 21.7351C2.77401 21.495 2.94941 21.1626 3.30021 20.4978C3.78674 19.5758 4.09501 18.5203 3.62791 17.6746C2.82343 16.4666 2.1401 15.036 2.04024 13.4909C1.98659 12.6607 1.98659 11.8009 2.04024 10.9707C2.31441 6.72838 5.64639 3.34913 9.8294 3.07107C11.0318 2.99114 12.2812 2.97856 13.5 3.03368',
  d2: 'M11.9955 12.5H12.0044M8 12.5H8.00897',
  d3: 'M20.8684 2.43934L21.5607 3.13171C22.1465 3.71749 22.1465 4.66724 21.5607 5.25302L17.9333 8.94869C17.648 9.23404 17.283 9.4264 16.8863 9.50048L14.6381 9.98853C14.2832 10.0656 13.9671 9.75042 14.0431 9.39525L14.5217 7.15992C14.5958 6.76324 14.7881 6.39824 15.0735 6.11289L18.747 2.43934C19.3328 1.85355 20.2826 1.85355 20.8684 2.43934Z',
  d4: 'M17.2441 3.77697C16.3045 3.31844 15.2668 3.03261 14.1706 2.95974C12.7435 2.86488 11.2536 2.86508 9.8294 2.95974C5.64639 3.2378 2.31441 6.61705 2.04024 10.8594C1.98659 11.6896 1.98659 12.5494 2.04024 13.3796C2.1401 14.9247 2.82343 16.3553 3.62791 17.5633C4.09501 18.409 3.78674 19.4645 3.30021 20.3865C2.94941 21.0513 2.77401 21.3837 2.91484 21.6238C3.05567 21.8639 3.37025 21.8716 3.99941 21.8869C5.24365 21.9172 6.08268 21.5644 6.74868 21.0733C7.1264 20.7948 7.31527 20.6555 7.44544 20.6395C7.5756 20.6235 7.83174 20.729 8.34392 20.9399C8.80432 21.1296 9.33896 21.2466 9.8294 21.2792C11.2536 21.3739 12.7435 21.3741 14.1706 21.2792C18.3536 21.0012 21.6856 17.6219 21.9598 13.3796C22.0134 12.5494 22.0134 11.6896 21.9598 10.8594C21.8522 9.1945 21.2736 7.66253 20.3575 6.39877L17.8883 8.868C17.3648 9.39148 16.6302 9.51716 15.9088 9.64056C15.7195 9.67295 15.5311 9.70517 15.3477 9.74439C14.6578 9.89187 14.3128 9.96567 14.1179 9.77078C13.923 9.57587 13.9968 9.2309 14.1443 8.54095C14.1835 8.35754 14.2157 8.16916 14.2481 7.97987C14.3715 7.25851 14.4972 6.52387 15.0207 6.00038L17.2441 3.77697Z',
  d5: 'M21.9165 10.3887C21.9351 10.5443 21.9495 10.7013 21.9598 10.8594C22.0134 11.6896 22.0134 12.5494 21.9598 13.3796C21.6856 17.6219 18.3536 21.0012 14.1706 21.2792C12.7435 21.3741 11.2536 21.3739 9.8294 21.2792C9.33896 21.2466 8.8044 21.1296 8.34401 20.94C7.83177 20.729 7.5756 20.6235 7.44544 20.6395C7.31527 20.6555 7.1264 20.7948 6.74868 21.0733C6.08268 21.5644 5.24367 21.9172 3.99943 21.8869C3.37026 21.8716 3.05568 21.8639 2.91484 21.6238C2.77401 21.3837 2.94941 21.0513 3.30021 20.3865C3.78674 19.4645 4.09501 18.409 3.62791 17.5633C2.82343 16.3553 2.1401 14.9247 2.04024 13.3796C1.98659 12.5494 1.98659 11.6896 2.04024 10.8594C2.31441 6.61705 5.64639 3.2378 9.8294 2.95974C11.0318 2.87981 12.2812 2.86723 13.5 2.92235',
  d6: 'M20.8525 2.32801L21.5448 3.02038C22.1306 3.60616 22.1306 4.55591 21.5448 5.14169L17.9174 8.83736C17.6321 9.12271 17.2671 9.31507 16.8704 9.38915L14.6223 9.87716C14.2673 9.95426 13.9512 9.63909 14.0273 9.28392L14.5058 7.04859C14.5799 6.65191 14.7722 6.28691 15.0576 6.00156L18.7312 2.32801C19.3169 1.74222 20.2667 1.74222 20.8525 2.32801Z',
  d7: 'M11.9953 12.3887H12.0042M7.99976 12.3887H8.00873',
  d8: 'M20.8679 2.43934L21.5602 3.13171C22.146 3.71749 22.146 4.66724 21.5602 5.25302L17.9328 8.94869C17.6475 9.23404 17.2825 9.4264 16.8858 9.50048L14.6376 9.98853C14.2827 10.0656 13.9666 9.75042 14.0427 9.39525L14.5212 7.15992C14.5953 6.76324 14.7876 6.39824 15.073 6.11289L18.7465 2.43934C19.3323 1.85355 20.2821 1.85355 20.8679 2.43934Z',
  d9: 'M18.3285 2.42888C18.6619 2.09553 18.8285 1.92885 19.0019 1.82875C19.4725 1.55708 20.0522 1.55708 20.5227 1.82875C20.6961 1.92885 20.8628 2.09553 21.1961 2.42888C21.5295 2.76223 21.6961 2.9289 21.7963 3.10229C22.0679 3.57282 22.0679 4.15254 21.7963 4.62307C21.6961 4.79646 21.5295 4.96314 21.1961 5.29649L17.8883 8.60433C17.2274 9.26518 16.2301 9.29205 15.3477 9.48072C14.6578 9.62825 14.3128 9.70201 14.1179 9.50711C13.923 9.3122 13.9968 8.96723 14.1443 8.27728C14.3329 7.39494 14.3598 6.39756 15.0207 5.73671L18.3285 2.42888Z',
  d10: 'M16.0237 2.38691C16.0766 2.55936 15.9175 2.71839 15.5995 3.03645L13.9599 4.67606C13.3597 5.27626 13.0967 5.98556 12.9519 6.55288C12.8796 6.83583 12.8296 7.11417 12.7896 7.34564L12.7678 7.47263L12.7678 7.47265C12.7356 7.66068 12.7095 7.8131 12.6773 7.96363L12.664 8.02551C12.6024 8.31269 12.5253 8.67128 12.5055 8.98263C12.4826 9.34369 12.507 10.0177 13.0571 10.5678C13.6072 11.1179 14.2812 11.1423 14.6422 11.1193C14.9536 11.0995 15.3122 11.0225 15.5993 10.9608L15.5993 10.9608L15.6612 10.9476C15.8118 10.9154 15.9642 10.8893 16.1522 10.857L16.2792 10.8352C16.5107 10.7952 16.789 10.7452 17.072 10.673C17.6393 10.5281 18.3486 10.2652 18.9488 9.66499L21.125 7.4888C21.3946 7.2192 21.5294 7.0844 21.6873 7.11651C21.8453 7.14863 21.9136 7.31752 22.0501 7.65532C22.4145 8.55665 22.6424 9.52949 22.7082 10.5474C22.7639 11.4098 22.7639 12.3018 22.7082 13.1642C22.4103 17.774 18.787 21.4603 14.2204 21.7639C12.7601 21.8609 11.2369 21.8607 9.77965 21.7639C9.21472 21.7263 8.59978 21.5927 8.05839 21.3698C7.97233 21.3343 7.89626 21.303 7.82861 21.2755C7.69203 21.2198 7.62373 21.192 7.54604 21.2016C7.46835 21.2112 7.40859 21.2552 7.28907 21.3431L7.1938 21.4133C6.40136 21.9976 5.40092 22.4075 3.98117 22.373L3.93544 22.3719C3.66155 22.3653 3.36961 22.3584 3.13152 22.3123C2.84475 22.2568 2.48996 22.1181 2.26791 21.7395C2.02623 21.3275 2.12313 20.9108 2.21688 20.6484C2.30536 20.4007 2.45874 20.1102 2.61542 19.8135L2.6369 19.7728C3.10323 18.8891 3.23314 18.1669 2.98381 17.6854C2.15148 16.429 1.40272 14.8806 1.2918 13.1642C1.23607 12.3018 1.23607 11.4098 1.2918 10.5474C1.58972 5.93758 5.213 2.25129 9.77965 1.94773C11.2369 1.85086 12.7601 1.85066 14.2204 1.94773C14.6002 1.97298 14.9736 2.02164 15.3391 2.0923C15.7603 2.17373 15.9709 2.21445 16.0237 2.38691ZM8 11.125C7.44772 11.125 7 11.5727 7 12.125C7 12.6773 7.44772 13.125 8 13.125H8.00897C8.56126 13.125 9.00897 12.6773 9.00897 12.125C9.00897 11.5727 8.56126 11.125 8.00897 11.125H8ZM11.9955 11.125C11.4432 11.125 10.9955 11.5727 10.9955 12.125C10.9955 12.6773 11.4432 13.125 11.9955 13.125H12.0045C12.5568 13.125 13.0045 12.6773 13.0045 12.125C13.0045 11.5727 12.5568 11.125 12.0045 11.125H11.9955Z',
  d11: 'M15.5995 3.03645C15.9175 2.71839 16.0766 2.55936 16.0237 2.38691C15.9709 2.21445 15.7603 2.17373 15.3391 2.09229C14.9736 2.02164 14.6002 1.97298 14.2204 1.94773C12.7601 1.85066 11.2369 1.85086 9.77965 1.94773C5.213 2.25129 1.58972 5.93758 1.2918 10.5474C1.23607 11.4098 1.23607 12.3018 1.2918 13.1642C1.40272 14.8806 2.15148 16.429 2.98381 17.6854C3.23314 18.1669 3.10323 18.8891 2.6369 19.7728L2.61542 19.8135C2.45874 20.1102 2.30536 20.4007 2.21688 20.6484C2.12313 20.9108 2.02623 21.3275 2.26791 21.7395C2.48996 22.1181 2.84475 22.2568 3.13152 22.3123C3.36961 22.3584 3.66155 22.3653 3.93544 22.3719L3.98117 22.373C5.40092 22.4075 6.40136 21.9976 7.1938 21.4133C7.22778 21.3882 7.25946 21.3649 7.28907 21.3431C7.40859 21.2552 7.46835 21.2112 7.54604 21.2016C7.62373 21.192 7.69203 21.2198 7.82861 21.2755C7.89626 21.303 7.97233 21.3343 8.05839 21.3698C8.59978 21.5927 9.21472 21.7263 9.77965 21.7639C11.2369 21.8607 12.7601 21.8609 14.2204 21.7639C18.787 21.4603 22.4103 17.774 22.7082 13.1642C22.7639 12.3018 22.7639 11.4098 22.7082 10.5474C22.6424 9.52949 22.4145 8.55665 22.0501 7.65531C21.9136 7.31752 21.8453 7.14863 21.6873 7.11651C21.5294 7.0844 21.3946 7.2192 21.125 7.4888L18.9488 9.66499C18.3486 10.2652 17.6393 10.5281 17.072 10.673C16.789 10.7452 16.5107 10.7952 16.2792 10.8352L16.1522 10.857C15.9642 10.8893 15.8118 10.9154 15.6612 10.9476L15.5993 10.9608C15.3122 11.0225 14.9536 11.0995 14.6422 11.1193C14.2812 11.1423 13.6072 11.1179 13.0571 10.5678C12.507 10.0177 12.4826 9.34369 12.5055 8.98263C12.5253 8.67127 12.6024 8.31269 12.664 8.02551L12.6773 7.96363C12.7095 7.81309 12.7356 7.66067 12.7678 7.47263L12.7896 7.34564C12.8296 7.11417 12.8796 6.83583 12.9519 6.55288C13.0967 5.98556 13.3597 5.27626 13.9599 4.67605L15.5995 3.03645Z',
  d12: 'M7 12.125C7 11.5727 7.44772 11.125 8 11.125H8.00897C8.56126 11.125 9.00897 11.5727 9.00897 12.125C9.00897 12.6773 8.56126 13.125 8.00897 13.125H8C7.44772 13.125 7 12.6773 7 12.125ZM10.9955 12.125C10.9955 11.5727 11.4432 11.125 11.9955 11.125H12.0045C12.5568 11.125 13.0045 11.5727 13.0045 12.125C13.0045 12.6773 12.5568 13.125 12.0045 13.125H11.9955C11.4432 13.125 10.9955 12.6773 10.9955 12.125Z',
  d13: 'M9.91142 21.4796L9.96336 20.7314H9.96336L9.91142 21.4796ZM2.0204 13.5886L2.7686 13.5366L2.0204 13.5886ZM21.9796 13.5886L21.2314 13.5366V13.5366L21.9796 13.5886ZM14.0886 21.4796L14.0366 20.7314H14.0366L14.0886 21.4796ZM9.91142 3.0204L9.96336 3.7686L9.91142 3.0204ZM2.0204 10.9114L2.7686 10.9634L2.0204 10.9114ZM3.62564 18L4.32168 18.2793L4.47628 17.8941L4.23193 17.5585L3.62564 18ZM2.0204 22L1.32436 21.7207C1.21546 21.992 1.27419 22.3019 1.47482 22.5146C1.67546 22.7273 1.98141 22.804 2.25865 22.7112L2.0204 22ZM6.49772 20.5L6.85114 19.8385L6.56601 19.6862L6.25947 19.7888L6.49772 20.5ZM11.25 3.75H12.75V2.25H11.25V3.75ZM12.75 20.75H11.25V22.25H12.75V20.75ZM11.25 20.75C10.541 20.75 10.2248 20.7495 9.96336 20.7314L9.85949 22.2278C10.1859 22.2505 10.5662 22.25 11.25 22.25V20.75ZM1.25 12.25C1.25 12.9338 1.24955 13.3141 1.2722 13.6405L2.7686 13.5366C2.75045 13.2752 2.75 12.959 2.75 12.25H1.25ZM21.25 12.25C21.25 12.959 21.2495 13.2752 21.2314 13.5366L22.7278 13.6405C22.7505 13.3141 22.75 12.9338 22.75 12.25H21.25ZM12.75 22.25C13.4338 22.25 13.8141 22.2505 14.1405 22.2278L14.0366 20.7314C13.7752 20.7495 13.459 20.75 12.75 20.75V22.25ZM21.2314 13.5366C20.9637 17.3939 17.8939 20.4637 14.0366 20.7314L14.1405 22.2278C18.7443 21.9082 22.4082 18.2443 22.7278 13.6405L21.2314 13.5366ZM22.75 12.25C22.75 11.5662 22.7505 11.1859 22.7278 10.8595L21.2314 10.9634C21.2495 11.2248 21.25 11.541 21.25 12.25H22.75ZM11.25 2.25C10.5662 2.25 10.1859 2.24955 9.85949 2.2722L9.96336 3.7686C10.2248 3.75045 10.541 3.75 11.25 3.75V2.25ZM2.75 12.25C2.75 11.541 2.75045 11.2248 2.7686 10.9634L1.2722 10.8595C1.24955 11.1859 1.25 11.5662 1.25 12.25H2.75ZM9.85949 2.2722C5.25571 2.59176 1.59176 6.25571 1.2722 10.8595L2.7686 10.9634C3.03634 7.10614 6.10614 4.03634 9.96336 3.7686L9.85949 2.2722ZM4.23193 17.5585C3.39979 16.4157 2.8727 15.0363 2.7686 13.5366L1.2722 13.6405C1.39635 15.4291 2.02589 17.0772 3.01935 18.4415L4.23193 17.5585ZM2.9296 17.7207L1.32436 21.7207L2.71645 22.2793L4.32168 18.2793L2.9296 17.7207ZM9.96336 20.7314C8.84212 20.6536 7.78869 20.3394 6.85114 19.8385L6.1443 21.1615C7.26463 21.7601 8.5231 22.135 9.85949 22.2278L9.96336 20.7314ZM2.25865 22.7112L6.73598 21.2112L6.25947 19.7888L1.78215 21.2888L2.25865 22.7112Z',
  d14: 'M14 10H13.25V10.75H14V10ZM14 7.5L13.4697 6.96967L13.25 7.18934V7.5H14ZM16.5 10V10.75H16.8107L17.0303 10.5303L16.5 10ZM19.5 2L20.0303 1.46967C19.7374 1.17678 19.2626 1.17678 18.9697 1.46967L19.5 2ZM22 4.5L22.5303 5.03033C22.8232 4.73744 22.8232 4.26256 22.5303 3.96967L22 4.5ZM14.75 10V7.5H13.25V10H14.75ZM14 10.75H16.5V9.25H14V10.75ZM14.5303 8.03033L20.0303 2.53033L18.9697 1.46967L13.4697 6.96967L14.5303 8.03033ZM18.9697 2.53033L21.4697 5.03033L22.5303 3.96967L20.0303 1.46967L18.9697 2.53033ZM21.4697 3.96967L15.9697 9.46967L17.0303 10.5303L22.5303 5.03033L21.4697 3.96967Z',
  d15: 'M11.9953 12.5H12.0042M7.99976 12.5H8.00873',
  d16: 'M14.75 6.75V9.25H17.25L22.75 3.75L20.25 1.25L14.75 6.75Z',
  d17: 'M14.1405 2.2722C15.0923 2.33827 16.004 2.5473 16.8542 2.87803L13.5 6.23227V10.5H17.7678L21.468 6.79983C22.179 8.00355 22.6253 9.3832 22.7278 10.8595C22.75 11.1796 22.75 11.5514 22.75 12.2105V12.2895C22.75 12.9486 22.75 13.3204 22.7278 13.6405C22.4082 18.2443 18.7443 21.9082 14.1405 22.2278C13.8204 22.25 13.4486 22.25 12.7895 22.25H11.2105C10.5514 22.25 10.1796 22.25 9.85949 22.2278C8.63831 22.143 7.48219 21.8226 6.43709 21.3113L1.47483 22.75L2.77921 18.0954C1.92471 16.8022 1.38603 15.2804 1.2722 13.6405C1.24999 13.3205 1.24999 12.9486 1.25 12.2895V12.2895V12.2105V12.2104C1.24999 11.5514 1.24999 11.1795 1.2722 10.8595C1.59176 6.25571 5.25571 2.59176 9.85949 2.2722C10.1796 2.24999 10.5514 2.24999 11.2105 2.25H11.2105H12.7895H12.7895C13.4486 2.24999 13.8204 2.24999 14.1405 2.2722ZM9.00897 11.5H7V13.5H9.00897V11.5ZM13.0045 11.5H10.9955V13.5H13.0045V11.5Z',
} as const;

export const IconMessageEdit02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-edit-02-stroke-rounded IconMessageEdit02StrokeRounded"
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

export const IconMessageEdit02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-edit-02-duotone-rounded IconMessageEdit02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageEdit02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-edit-02-twotone-rounded IconMessageEdit02TwotoneRounded"
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageEdit02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-edit-02-solid-rounded IconMessageEdit02SolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconMessageEdit02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-edit-02-bulk-rounded IconMessageEdit02BulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMessageEdit02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-edit-02-stroke-sharp IconMessageEdit02StrokeSharp"
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
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageEdit02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-edit-02-solid-sharp IconMessageEdit02SolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMessageEdit02: TheIconSelfPack = {
  name: 'MessageEdit02',
  StrokeRounded: IconMessageEdit02StrokeRounded,
  DuotoneRounded: IconMessageEdit02DuotoneRounded,
  TwotoneRounded: IconMessageEdit02TwotoneRounded,
  SolidRounded: IconMessageEdit02SolidRounded,
  BulkRounded: IconMessageEdit02BulkRounded,
  StrokeSharp: IconMessageEdit02StrokeSharp,
  SolidSharp: IconMessageEdit02SolidSharp,
};