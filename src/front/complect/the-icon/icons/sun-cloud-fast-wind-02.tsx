import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.1115 8.39442C2.44484 5.97492 3.92135 3.48798 6.40938 2.83967M3.1115 8.39442L2.24805 8.61941M3.1115 8.39442C3.27728 8.99608 3.55998 9.53692 3.92946 10M6.40938 2.83967L6.17802 2M6.40938 2.83967C8.2481 2.36056 10.1247 3.01972 11.248 4.37299M3.5769 4.95375L2.66601 4.44113M10.4746 2.40645L9.94936 3.29328',
  d2: 'M14.4019 21.9146C14.5462 21.9699 14.7016 22 14.8634 22C15.6281 22 16.248 21.3284 16.248 20.5C16.248 19.6716 15.6281 19 14.8634 19C14.5919 19 14.3387 19.0846 14.125 19.2309C13.0638 20.0225 11.098 21.0378 8.8634 21.301M6.09419 21.1936C5.47597 21.0635 4.85672 20.8541 4.24805 20.5478',
  d3: 'M19.248 21C19.5061 21 20.2037 21 21.248 21',
  d4: 'M17.462 9.81274C17.4694 9.8127 17.4769 9.81269 17.4844 9.81269C19.9697 9.81269 21.7521 11.7 21.7521 13.8C21.7281 16.62 18.9681 17.88 17.4681 17.772M17.462 9.81274C17.4768 9.65635 17.4844 9.49797 17.4844 9.33791C17.462 6.66869 15.1078 4.5 12.3081 4.5C9.50851 4.5 7.26814 6.42 7.06496 8.94M17.462 9.81274C17.2881 10.92 16.9881 11.616 16.2681 12.48M7.06496 8.94C4.52852 9.16919 2.76814 11.1 2.74414 13.38C2.88814 15.84 4.62814 16.8439 5.94814 17.4C9.30814 18.72 12.8001 17.76 14.0001 15.84C14.4681 14.76 13.6881 13.56 12.6081 13.38C11.8881 13.2 10.3941 13.608 10.3521 15.12M7.06496 8.94C7.2228 8.92574 7.41919 8.91844 7.58096 8.91844C8.70814 8.94 9.63214 9.324 10.3521 9.804',
  d5: 'M17.751 8.88626C17.751 6.0512 15.2886 3.75293 12.251 3.75293C9.37422 3.75293 7.01331 5.81431 6.7714 8.44079C4.23496 8.66606 2.25098 10.6599 2.25098 13.0862C2.25098 15.6636 4.48956 17.7529 7.25098 17.7529H17.751C20.2363 17.7529 22.251 15.8725 22.251 13.5529C22.251 11.2333 20.2363 9.35293 17.751 9.35293L17.7286 9.35298C17.7434 9.19926 17.751 9.04359 17.751 8.88626Z',
  d6: 'M3.11443 8.14735C2.44777 5.72785 3.92428 3.24091 6.41231 2.5926M3.11443 8.14735L2.25098 8.37234M3.11443 8.14735C3.28021 8.74901 3.56291 9.28985 3.93239 9.75293M6.41231 2.5926L6.18095 1.75293M6.41231 2.5926C8.25103 2.11349 10.1276 2.77265 11.251 4.12592M3.57983 4.70668L2.66894 4.19406M10.4776 2.15938L9.95229 3.04621',
  d7: 'M14.4049 21.6675C14.5492 21.7228 14.7046 21.7529 14.8664 21.7529C15.6311 21.7529 16.251 21.0813 16.251 20.2529C16.251 19.4245 15.6311 18.7529 14.8664 18.7529C14.5949 18.7529 14.3417 18.8375 14.128 18.9838C13.0668 19.7754 11.101 20.7907 8.86633 21.0539M6.09712 20.9465C5.4789 20.8164 4.85965 20.607 4.25098 20.3007',
  d8: 'M19.251 20.7529C19.5091 20.7529 20.2067 20.7529 21.251 20.7529',
  d9: 'M17.4553 9.56392C17.4623 9.56388 17.4694 9.56387 17.4766 9.56387C19.8366 9.56387 21.6526 11.3265 21.7494 13.3882C21.8235 16.1336 19.3051 17.5811 17.4819 17.5271M17.4553 9.56392C17.4693 9.42313 17.4766 9.28056 17.4766 9.13647C17.4766 6.46547 15.1359 4.25098 12.2515 4.25098C9.45964 4.25098 7.25877 6.30089 7.02906 8.70631M17.4553 9.56392C17.3582 10.5336 17.0375 11.3806 16.274 12.2231M7.02906 8.70631C4.62045 8.91262 2.8675 10.7864 2.75354 12.9608C2.67947 15.0534 4.21784 16.5117 6.09805 17.2138C9.57359 18.4561 12.8782 17.3975 13.9835 15.6151C14.4507 14.6969 13.9038 13.379 12.5934 13.1359C11.7957 12.9469 10.4282 13.433 10.3485 14.8751M7.02906 8.70631C7.17894 8.69347 7.33085 8.6869 7.48447 8.6869C8.55355 8.6869 9.51662 8.95002 10.3598 9.56575',
  d10: 'M2.86345 8.39442C2.19679 5.97492 3.6733 3.48798 6.16133 2.83967M2.86345 8.39442L2 8.61941M2.86345 8.39442C3.02923 8.99608 3.31193 9.53692 3.68141 10M6.16133 2.83967L5.92997 2M6.16133 2.83967C8.00005 2.36056 9.87666 3.01972 11 4.37299M3.32885 4.95375L2.41796 4.44113M10.2266 2.40645L9.70131 3.29328',
  d11: 'M14.1539 21.9146C14.2982 21.9699 14.4536 22 14.6154 22C15.3801 22 16 21.3284 16 20.5C16 19.6716 15.3801 19 14.6154 19C14.3439 19 14.0907 19.0846 13.877 19.2309C12.8158 20.0225 10.85 21.0378 8.61535 21.301M5.84614 21.1936C5.22792 21.0635 4.60867 20.8541 4 20.5478',
  d12: 'M19 21C19.2581 21 19.9557 21 21 21',
  d13: 'M17.214 9.80688C17.2214 9.80684 17.2289 9.80683 17.2364 9.80683C19.7217 9.80683 21.5041 11.6941 21.5041 13.7941C21.4801 16.6141 18.7201 17.8741 17.2201 17.7661M17.214 9.80688C17.2288 9.65049 17.2364 9.49211 17.2364 9.33205C17.214 6.66283 14.8598 4.49414 12.0601 4.49414C9.26046 4.49414 7.02009 6.41414 6.81691 8.93414M17.214 9.80688C17.0401 10.9141 16.7401 11.6101 16.0201 12.4741M6.81691 8.93414C4.28047 9.16333 2.52009 11.0941 2.49609 13.3741C2.64009 15.8341 4.38009 16.838 5.70009 17.3941C9.06009 18.7141 12.5521 17.7541 13.7521 15.8341C14.2201 14.7541 13.4401 13.5541 12.3601 13.3741C11.6401 13.1941 10.1461 13.6021 10.1041 15.1141M6.81691 8.93414C6.97475 8.91988 7.17114 8.91258 7.33291 8.91258C8.46009 8.93414 9.38409 9.31814 10.1041 9.79814',
  d14: 'M7.26055 1.7047C7.1018 1.19053 6.56196 0.89224 6.03957 1.03618C5.52465 1.17806 5.21524 1.69766 5.32814 2.21329C4.58071 2.55707 3.93429 3.05044 3.41917 3.64618L3.28364 3.56991C2.80234 3.29905 2.19259 3.46965 1.92173 3.95095C1.65087 4.43226 1.82146 5.042 2.30277 5.31286L2.40445 5.37009C2.14253 6.0888 2.03039 6.86654 2.09621 7.65938C1.57797 7.80968 1.27065 8.3464 1.40756 8.87182C1.54644 9.40482 2.09003 9.72489 2.62309 9.58846C2.80299 9.96102 3.02249 10.3075 3.27496 10.6239C3.61941 11.0556 4.24861 11.1264 4.68032 10.7819C5.11204 10.4375 5.18278 9.80829 4.83834 9.37658C4.55097 9.01641 4.33165 8.59676 4.20277 8.12904C3.94685 7.20023 4.10003 6.24925 4.56309 5.46598C5.0271 4.68113 5.80224 4.06466 6.78872 3.80761C7.77181 3.55145 8.76556 3.70685 9.57821 4.16052C9.58413 4.16392 9.59007 4.16726 9.59603 4.17053C9.9806 4.38799 10.324 4.67251 10.6058 5.01195C10.9586 5.4369 11.589 5.49543 12.014 5.14268C12.4389 4.78993 12.4974 4.15948 12.1447 3.73452C11.9228 3.46717 11.677 3.2223 11.4114 3.00213L11.4622 2.91632C11.7437 2.44114 11.5866 1.82776 11.1115 1.5463C10.6363 1.26485 10.0229 1.42189 9.74144 1.89708L9.67135 2.01541C8.91416 1.74693 8.09357 1.63415 7.26055 1.7047Z',
  d15: 'M14.8282 20.0488C14.8813 20.0151 14.9356 20 14.9906 20C15.1292 20 15.3752 20.147 15.3752 20.5C15.3752 20.853 15.1292 21 14.9906 21C14.9539 21 14.9196 20.9934 14.8867 20.9808C14.3709 20.7833 13.7927 21.0413 13.5952 21.5571C13.3977 22.0728 13.6557 22.651 14.1715 22.8485C14.4273 22.9465 14.7037 23 14.9906 23C16.3815 23 17.3752 21.8038 17.3752 20.5C17.3752 19.1962 16.3815 18 14.9906 18C14.5066 18 14.0583 18.1519 13.6876 18.4056L13.6707 18.4171L13.6543 18.4293C12.7056 19.137 10.902 20.069 8.87358 20.3079C8.32509 20.3725 7.93282 20.8695 7.99743 21.418C8.06204 21.9665 8.55906 22.3588 9.10755 22.2942C11.5334 22.0084 13.65 20.9215 14.8282 20.0488ZM3.48196 20.0983C3.73024 19.6049 4.33143 19.4063 4.82476 19.6546C5.35271 19.9203 5.88967 20.1019 6.42736 20.2151C6.9678 20.3288 7.31368 20.8592 7.19991 21.3996C7.08614 21.9401 6.55579 22.2859 6.01535 22.1722C5.3166 22.0251 4.61506 21.788 3.92567 21.4411C3.43234 21.1928 3.23368 20.5916 3.48196 20.0983Z',
  d16: 'M18.375 21C18.375 20.4477 18.8227 20 19.375 20H21.375C21.9273 20 22.375 20.4477 22.375 21C22.375 21.5523 21.9273 22 21.375 22H19.375C18.8227 22 18.375 21.5523 18.375 21Z',
  d17: 'M2.125 13.5219C2.125 10.9921 4.0097 8.88266 6.5139 8.39916C7.02337 5.75397 9.45337 3.75 12.375 3.75C15.6033 3.75 18.232 6.19727 18.3314 9.25199C20.7587 9.5816 22.625 11.5712 22.625 13.9764C22.625 16.3436 20.8171 18.3083 18.4458 18.6839C17.833 17.4436 16.6013 16.5 14.9907 16.5C14.957 16.5 14.9235 16.5004 14.89 16.5013C15.4586 15.558 15.3394 14.495 14.8408 13.7058C14.3423 12.9166 13.44 12.3505 12.3752 12.3505C10.8415 12.3505 9.47523 13.5252 9.47523 15.1206C9.47523 15.6728 9.92295 16.1206 10.4752 16.1206C11.0275 16.1206 11.4752 15.6728 11.4752 15.1206C11.4752 14.7608 11.8103 14.3505 12.3752 14.3505C12.711 14.3505 12.9944 14.5277 13.15 14.774C13.2999 15.0113 13.3064 15.2608 13.1715 15.4781C12.7161 16.2115 11.6944 17.1804 10.3556 17.8307C10.2195 17.8968 10.085 17.9656 9.95035 18.0344C9.25394 18.3906 8.55374 18.7487 7.60756 18.7487C4.57963 18.7487 2.125 16.4085 2.125 13.5219Z',
  d18: 'M6.03957 1.03618C6.56196 0.89224 7.1018 1.19053 7.26055 1.7047C8.09357 1.63415 8.91416 1.74693 9.67135 2.01541L9.74144 1.89708C10.0229 1.42189 10.6363 1.26485 11.1115 1.5463C11.5866 1.82776 11.7437 2.44114 11.4622 2.91632L11.4114 3.00213C11.677 3.2223 11.9228 3.46717 12.1447 3.73452C12.15 3.74092 12.1552 3.74737 12.1603 3.75386C11.3213 3.78218 10.5265 3.97581 9.81062 4.30165C9.74067 4.25558 9.66909 4.21184 9.59603 4.17053L9.57821 4.16052C8.76556 3.70685 7.77181 3.55145 6.78872 3.80761C5.80224 4.06466 5.0271 4.68113 4.56309 5.46598C4.10003 6.24925 3.94685 7.20023 4.20277 8.12904C4.30208 8.48945 4.45509 8.82132 4.65156 9.11943C4.06833 9.47602 3.56064 9.93502 3.1564 10.4698C2.9533 10.196 2.77422 9.90144 2.62309 9.58846C2.09003 9.72489 1.54644 9.40482 1.40756 8.87182C1.27065 8.3464 1.57797 7.80968 2.09621 7.65938C2.03039 6.86654 2.14253 6.0888 2.40445 5.37009L2.30277 5.31286C1.82146 5.042 1.65087 4.43226 1.92173 3.95095C2.19259 3.46965 2.80234 3.29905 3.28364 3.56991L3.41917 3.64618C3.93429 3.05044 4.58071 2.55707 5.32814 2.21329C5.21524 1.69766 5.52465 1.17806 6.03957 1.03618Z',
  d19: 'M17.977 18.2757C20.338 18.2757 22.252 16.4926 22.252 14.293C22.252 12.0934 20.338 10.3103 17.977 10.3103L17.9556 10.3103M17.9556 10.3103C17.9697 10.1646 17.977 10.0169 17.977 9.86775C17.977 7.17936 15.6376 5 12.752 5C10.019 5 7.77616 6.95473 7.54636 9.44532M17.9556 10.3103C17.8585 11.3144 17.4341 12.2305 16.7826 12.9654M7.54636 9.44532C5.13673 9.65894 3.25195 11.5496 3.25195 13.8505C3.25195 18.6344 11.6817 20.0845 14.3978 16.5056C15.1233 15.3371 14.1525 13.8505 12.752 13.8505C11.7026 13.8505 10.852 14.6429 10.852 15.6205M7.54636 9.44532C7.6963 9.43202 7.84827 9.42523 8.00195 9.42523C9.07149 9.42523 10.0585 9.75454 10.8524 10.3103',
  d20: 'M7.70538 3.5V1.5M7.70538 3.5C5.51267 3.5 3.73513 5.29086 3.73513 7.5M7.70538 3.5C8.92809 3.5 10.0217 4.05686 10.75 4.93258M1.75 7.5H3.73513M3.73513 7.5C3.73513 8.69469 4.25499 9.76706 5.07923 10.5M3.49459 3.25766L4.89829 4.67188',
  d21: 'M14.9058 22.4146C15.0502 22.4699 15.2055 22.5 15.3673 22.5C16.132 22.5 16.752 21.8284 16.752 21C16.752 20.1716 16.132 19.5 15.3673 19.5C15.0959 19.5 14.8427 19.5846 14.629 19.7309C13.5678 20.5225 11.602 21.5378 9.3673 21.801M6.59809 21.6936C5.97987 21.5635 5.36062 21.3541 4.75195 21.0478',
  d22: 'M19.752 21.5C20.01 21.5 20.7076 21.5 21.752 21.5',
  d23: 'M14.8117 20.3432C14.9051 20.2819 15.0084 20.25 15.1166 20.25C15.4117 20.25 15.7512 20.5281 15.7512 21C15.7512 21.4719 15.4117 21.75 15.1166 21.75C15.0486 21.75 14.9841 21.7375 14.9233 21.7142L14.3869 23.1151C14.6148 23.2023 14.861 23.25 15.1166 23.25C16.3509 23.25 17.2512 22.185 17.2512 21C17.2512 19.815 16.3509 18.75 15.1166 18.75C14.6858 18.75 14.2862 18.8851 13.9547 19.1119C13.9463 19.1176 13.938 19.1236 13.9298 19.1297C12.9529 19.8584 11.1088 20.8112 9.02883 21.0562L9.20431 22.5459C11.5834 22.2657 13.663 21.1959 14.8117 20.3432ZM4.83838 20.3779C5.38651 20.6537 5.94404 20.8423 6.50186 20.9597L6.19286 22.4275C5.51424 22.2847 4.83327 22.0546 4.16406 21.7178L4.83838 20.3779Z',
  d24: 'M19.5 22.25V20.75H21.5V22.25H19.5Z',
  d25: 'M1.75 13.5C1.75 10.717 3.72664 8.39643 6.353 7.86454C6.88731 4.95456 9.43585 2.75 12.5 2.75C15.8858 2.75 18.6428 5.44224 18.7469 8.80273C21.2927 9.16534 23.25 11.3541 23.25 14C23.25 16.7922 21.0703 19.0753 18.3196 19.2404C17.7358 18.1038 16.5938 17.25 15.1152 17.25C14.8493 17.25 14.5906 17.2797 14.3422 17.3353C14.5208 17.1401 14.6876 16.9356 14.8412 16.722C14.8546 16.7034 14.8671 16.6841 14.8787 16.6644C15.9566 14.832 14.514 12.584 12.4998 12.584C10.9929 12.584 9.74981 13.7885 9.74981 15.3007H11.2498C11.2498 14.6405 11.7976 14.084 12.4998 14.084C13.4231 14.084 14.0211 15.115 13.6012 15.8767C12.3387 17.6048 9.82838 18.6842 7.36169 18.6494C5.31846 18.6205 3.45213 17.8372 2.40579 16.1693C1.98696 15.3716 1.75 14.4635 1.75 13.5Z',
  d26: 'M5.70538 1.85111C5.07484 1.98056 4.48827 2.23001 3.96989 2.57449L3.20433 1.8032L1.78485 3.21212L2.55911 3.99218C2.21331 4.51742 1.96355 5.11191 1.83467 5.75H0.75V7.75H1.83468C2.05366 8.83422 2.62153 9.79195 3.41473 10.4973L4.74374 9.00272C4.1249 8.45242 3.73513 7.64859 3.73513 6.75C3.73513 5.0861 5.07198 3.75 6.70538 3.75C7.61697 3.75 8.4337 4.16374 8.98114 4.822L10.5189 3.54315C9.81277 2.69414 8.82841 2.0823 7.70538 1.85134V0.75H5.70538V1.85111Z',
} as const;

export const IconSunCloudFastWind02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-fast-wind-02-stroke-rounded IconSunCloudFastWind02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconSunCloudFastWind02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-fast-wind-02-duotone-rounded IconSunCloudFastWind02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudFastWind02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-fast-wind-02-twotone-rounded IconSunCloudFastWind02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudFastWind02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-fast-wind-02-solid-rounded IconSunCloudFastWind02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSunCloudFastWind02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-fast-wind-02-bulk-rounded IconSunCloudFastWind02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSunCloudFastWind02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-fast-wind-02-stroke-sharp IconSunCloudFastWind02StrokeSharp"
    >
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
    </TheIconWrapper>
  );
};

export const IconSunCloudFastWind02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-fast-wind-02-solid-sharp IconSunCloudFastWind02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSunCloudFastWind02: TheIconSelfPack = {
  name: 'SunCloudFastWind02',
  StrokeRounded: IconSunCloudFastWind02StrokeRounded,
  DuotoneRounded: IconSunCloudFastWind02DuotoneRounded,
  TwotoneRounded: IconSunCloudFastWind02TwotoneRounded,
  SolidRounded: IconSunCloudFastWind02SolidRounded,
  BulkRounded: IconSunCloudFastWind02BulkRounded,
  StrokeSharp: IconSunCloudFastWind02StrokeSharp,
  SolidSharp: IconSunCloudFastWind02SolidSharp,
};