import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.5 10V8.5C3.5 6.61438 3.5 5.67157 4.08579 5.08579C4.67157 4.5 5.61438 4.5 7.5 4.5M20.5 10V8.5C20.5 6.61438 20.5 5.67157 19.9142 5.08579C19.3284 4.5 18.3856 4.5 16.5 4.5',
  d2: 'M22 10H19',
  d3: 'M5 10H2',
  d4: 'M9.36774 3.50788H14.6323C15.1691 3.50788 15.9008 3.41222 16.2766 3.88743C16.5 4.16989 16.5 4.58782 16.5 5.42367C16.5 5.94012 16.402 6.1124 15.913 6.31305L14.8339 6.75578C14.4233 6.92423 14.218 7.00846 14.004 6.99933C13.2715 6.96808 12.7454 6.19327 12 6.19327C11.2546 6.19327 10.7285 6.96808 9.996 6.99933C9.78196 7.00846 9.57667 6.92423 9.16611 6.75578L8.08704 6.31305C7.59799 6.1124 7.5 5.94012 7.5 5.42367C7.5 4.58782 7.5 4.16989 7.72338 3.88743C8.0992 3.41222 8.83092 3.50788 9.36774 3.50788Z',
  d5: 'M9.36774 14H14.6323C15.1691 14 15.9008 13.9043 16.2766 14.3795C16.5 14.662 16.5 15.0799 16.5 15.9158C16.5 16.4322 16.402 16.6045 15.913 16.8052L14.8339 17.2479C14.4233 17.4164 14.218 17.5006 14.004 17.4914C13.2715 17.4602 12.7454 16.6854 12 16.6854C11.2546 16.6854 10.7285 17.4602 9.996 17.4914C9.78196 17.5006 9.57667 17.4164 9.16611 17.2479L8.08704 16.8052C7.59799 16.6045 7.5 16.4322 7.5 15.9158C7.5 15.0799 7.5 14.662 7.72338 14.3795C8.0992 13.9043 8.83092 14 9.36774 14Z',
  d6: 'M3.41437 20.4142V18.9142C3.41437 17.0286 3.41437 16.0858 4.00015 15.5C4.58594 14.9142 5.52875 14.9142 7.41437 14.9142M20.4144 20.4142V18.9142C20.4144 17.0286 20.4144 16.0858 19.8286 15.5C19.2428 14.9142 18.3 14.9142 16.4144 14.9142',
  d7: 'M22 20.5H19',
  d8: 'M5 20.5H2',
  d9: 'M9.36774 14.0002H14.6323C15.1691 14.0002 15.9008 13.9046 16.2766 14.3798C16.5 14.6623 16.5 15.0802 16.5 15.916C16.5 16.4325 16.402 16.6048 15.913 16.8054L14.8339 17.2481C14.4233 17.4166 14.218 17.5008 14.004 17.4917C13.2715 17.4604 12.7454 16.6856 12 16.6856C11.2546 16.6856 10.7285 17.4604 9.996 17.4917C9.78196 17.5008 9.57667 17.4166 9.16611 17.2481L8.08704 16.8054C7.59799 16.6048 7.5 16.4325 7.5 15.916C7.5 15.0802 7.5 14.6623 7.72338 14.3798C8.0992 13.9046 8.83092 14.0002 9.36774 14.0002Z',
  d10: 'M3.41436 20.4142V18.9142C3.41436 17.0286 3.41436 16.0858 4.00015 15.5C4.58594 14.9142 5.52875 14.9142 7.41436 14.9142M20.4144 20.4142V18.9142C20.4144 17.0286 20.4144 16.0858 19.8286 15.5C19.2428 14.9142 18.3 14.9142 16.4144 14.9142',
  d11: 'M7.43417 3.37525C7.45604 3.37525 7.47799 3.37525 7.5 3.37525C8.05229 3.37525 8.5 3.82296 8.5 4.37525C8.5 4.92753 8.05229 5.37525 7.5 5.37525C6.52893 5.37525 5.90122 5.37737 5.43871 5.43956C5.00497 5.49787 4.86902 5.59202 4.7929 5.66814C4.71677 5.74427 4.62263 5.88021 4.56431 6.31395C4.50213 6.77646 4.5 7.40417 4.5 8.37525V9.87525C4.5 10.4275 4.05229 10.8752 3.5 10.8752C2.94772 10.8752 2.5 10.4275 2.5 9.87525V8.37525C2.5 8.35323 2.5 8.33129 2.5 8.30942C2.49995 7.42293 2.49991 6.65912 2.58215 6.04746C2.67028 5.39194 2.86902 4.76359 3.37868 4.25393C3.88835 3.74427 4.5167 3.54552 5.17221 3.45739C5.78387 3.37515 6.54769 3.3752 7.43417 3.37525ZM18.5613 5.43956C18.0988 5.37737 17.4711 5.37525 16.5 5.37525C15.9477 5.37525 15.5 4.92753 15.5 4.37525C15.5 3.82296 15.9477 3.37525 16.5 3.37525L16.5658 3.37525C17.4523 3.3752 18.2161 3.37515 18.8278 3.45739C19.4833 3.54552 20.1117 3.74427 20.6213 4.25393C21.131 4.76359 21.3297 5.39194 21.4179 6.04746C21.5001 6.65912 21.5001 7.42295 21.5 8.30944L21.5 9.87525C21.5 10.4275 21.0523 10.8752 20.5 10.8752C19.9477 10.8752 19.5 10.4275 19.5 9.87525V8.37525C19.5 7.40417 19.4979 6.77646 19.4357 6.31395C19.3774 5.88021 19.2832 5.74427 19.2071 5.66814C19.131 5.59202 18.995 5.49787 18.5613 5.43956Z',
  d12: 'M23 9.875C23 9.32272 22.5523 8.875 22 8.875H19C18.4477 8.875 18 9.32272 18 9.875C18 10.4273 18.4477 10.875 19 10.875H22C22.5523 10.875 23 10.4273 23 9.875Z',
  d13: 'M6 9.875C6 9.32272 5.55228 8.875 5 8.875H2C1.44772 8.875 1 9.32272 1 9.875C1 10.4273 1.44772 10.875 2 10.875H5C5.55228 10.875 6 10.4273 6 9.875Z',
  d14: 'M9.20461 2.62997H14.796C15.013 2.62473 15.3304 2.61705 15.6041 2.64975C15.9895 2.69579 16.5 2.83546 16.8652 3.2972C17.3068 3.85559 17.2504 4.62876 17.2503 5.29867C17.2503 6.06247 16.908 6.59061 16.198 6.88192L15.0378 7.35812C14.7128 7.49274 14.3571 7.64006 13.9723 7.62365C13.409 7.59962 12.9447 7.30674 12.6637 7.12956C12.3178 6.91343 12.1246 6.81827 12.0003 6.81827C11.876 6.81827 11.6828 6.91343 11.3369 7.12956C11.056 7.30674 10.5916 7.59962 10.0283 7.62365C9.64358 7.64006 9.28785 7.49274 8.9628 7.35812L7.80267 6.88192C7.09267 6.59062 6.75032 6.06247 6.75032 5.29867C6.75032 4.6298 6.69454 3.8547 7.13543 3.2972C7.50059 2.83546 8.01119 2.69579 8.39653 2.64975C8.67021 2.61705 8.9876 2.62473 9.20461 2.62997Z',
  d15: 'M9.2043 13.1222H14.7957C15.0127 13.1169 15.3301 13.1092 15.6038 13.1419C15.9891 13.188 16.4997 13.3276 16.8649 13.7894C17.099 14.0855 17.1816 14.4183 17.2172 14.73C17.2574 15.0815 17.25 15.4378 17.25 15.7909C17.25 16.5547 16.9077 17.0828 16.1977 17.3741L15.0375 17.8503C14.7125 17.9849 14.3567 18.1322 13.972 18.1158C13.4087 18.0918 12.9443 17.7989 12.6634 17.6217C12.3175 17.4056 12.1243 17.3105 12 17.3105C11.8757 17.3105 11.6825 17.4056 11.3366 17.6217C11.0557 17.7989 10.5913 18.0918 10.028 18.1158C9.64326 18.1322 9.28754 17.9849 8.96248 17.8503L7.80236 17.3741C7.09236 17.0828 6.75 16.5547 6.75 15.7909C6.75 15.3907 6.74886 15.0268 6.78278 14.73C6.81841 14.4183 6.90098 14.0855 7.13512 13.7894C7.50028 13.3276 8.01087 13.188 8.39622 13.1419C8.66989 13.1092 8.98729 13.1169 9.2043 13.1222Z',
  d16: 'M7.34824 13.7893L7.41407 13.7893C7.96635 13.7893 8.41407 14.237 8.41407 14.7893C8.41407 15.3416 7.96635 15.7893 7.41407 15.7893C6.44299 15.7893 5.81528 15.7914 5.35277 15.8536C4.91903 15.9119 4.78309 16.0061 4.70696 16.0822C4.63084 16.1583 4.53669 16.2943 4.47837 16.728C4.41619 17.1905 4.41407 17.8182 4.41407 18.7893V20.2893C4.41407 20.8416 3.96635 21.2893 3.41407 21.2893C2.86178 21.2893 2.41407 20.8416 2.41407 20.2893V18.7893L2.41406 18.7235C2.41402 17.837 2.41397 17.0732 2.49621 16.4615C2.58434 15.806 2.78309 15.1777 3.29275 14.668C3.80241 14.1583 4.43076 13.9596 5.08628 13.8715C5.69794 13.7892 6.46175 13.7893 7.34824 13.7893Z',
  d17: 'M18.4754 15.8536C18.0129 15.7914 17.3851 15.7893 16.4141 15.7893C15.8618 15.7893 15.4141 15.3416 15.4141 14.7893C15.4141 14.237 15.8618 13.7893 16.4141 13.7893L16.4799 13.7893C17.3664 13.7893 18.1302 13.7892 18.7419 13.8715C19.3974 13.9596 20.0257 14.1583 20.5354 14.668C21.045 15.1777 21.2438 15.806 21.3319 16.4615C21.4142 17.0732 21.4141 17.837 21.4141 18.7235L21.4141 20.2893C21.4141 20.8416 20.9664 21.2893 20.4141 21.2893C19.8618 21.2893 19.4141 20.8416 19.4141 20.2893V18.7893C19.4141 17.8182 19.4119 17.1905 19.3498 16.728C19.2914 16.2943 19.1973 16.1583 19.1212 16.0822C19.045 16.0061 18.9091 15.9119 18.4754 15.8536Z',
  d18: 'M23 20.3752C23 19.823 22.5523 19.3752 22 19.3752H19C18.4477 19.3752 18 19.823 18 20.3752C18 20.9275 18.4477 21.3752 19 21.3752H22C22.5523 21.3752 23 20.9275 23 20.3752Z',
  d19: 'M6 20.3752C6 19.823 5.55228 19.3752 5 19.3752H2C1.44772 19.3752 1 19.823 1 20.3752C1 20.9275 1.44772 21.3752 2 21.3752H5C5.55228 21.3752 6 20.9275 6 20.3752Z',
  d20: 'M7.07786 3.37549C6.34187 3.37677 5.70033 3.38644 5.17221 3.45744C4.5167 3.54557 3.88835 3.74432 3.37868 4.25398C2.86902 4.76364 2.67028 5.39199 2.58215 6.04751C2.49991 6.65917 2.49995 7.42298 2.5 8.30947L2.5 8.3753V8.8753H2C1.44772 8.8753 1 9.32301 1 9.8753C1 10.4276 1.44772 10.8753 2 10.8753H3.49688L3.5 10.8753L3.50313 10.8753H5C5.55228 10.8753 6 10.4276 6 9.8753C6 9.32301 5.55228 8.8753 5 8.8753H4.5L4.5 8.3753C4.5 7.40422 4.50213 6.77651 4.56431 6.314C4.62263 5.88027 4.71677 5.74432 4.7929 5.66819C4.86902 5.59207 5.00497 5.49792 5.43871 5.43961C5.76984 5.39509 6.18566 5.38135 6.75155 5.37714C6.75073 5.35135 6.75032 5.32527 6.75032 5.29892C6.75032 5.23212 6.74976 5.16426 6.7492 5.09566C6.74439 4.5089 6.73914 3.86821 7.07786 3.37549ZM17.2491 5.37715C17.8147 5.38136 18.2303 5.3951 18.5613 5.43961C18.995 5.49792 19.131 5.59207 19.2071 5.66819C19.2832 5.74432 19.3774 5.88027 19.4357 6.314C19.4979 6.77651 19.5 7.40422 19.5 8.3753V8.8753L19 8.8753C18.4477 8.8753 18 9.32301 18 9.8753C18 10.4276 18.4477 10.8753 19 10.8753L20.4969 10.8753L20.5 10.8753L20.5031 10.8753H22C22.5523 10.8753 23 10.4276 23 9.8753C23 9.32301 22.5523 8.8753 22 8.8753H21.5L21.5 8.30949C21.5001 7.423 21.5001 6.65917 21.4179 6.04751C21.3297 5.39199 21.131 4.76364 20.6213 4.25398C20.1117 3.74432 19.4833 3.54557 18.8278 3.45744C18.2998 3.38646 17.6585 3.37678 16.9228 3.37549C17.2618 3.86832 17.2564 4.507 17.2515 5.09379C17.2509 5.16299 17.2503 5.23148 17.2503 5.29892C17.2503 5.32527 17.2499 5.35135 17.2491 5.37715Z',
  d21: 'M7.13518 13.7893C6.33897 13.7898 5.64838 13.7958 5.08628 13.8714C4.43076 13.9596 3.80241 14.1583 3.29275 14.668C2.78309 15.1776 2.58434 15.806 2.49621 16.4615C2.41397 17.0731 2.41402 17.837 2.41406 18.7234L2.41407 18.7893V19.3752H2C1.44772 19.3752 1 19.8229 1 20.3752C1 20.9275 1.44772 21.3752 2 21.3752H5C5.55228 21.3752 6 20.9275 6 20.3752C6 19.8229 5.55228 19.3752 5 19.3752H4.41407L4.41407 18.7893C4.41407 17.8182 4.41619 17.1905 4.47837 16.728C4.53669 16.2942 4.63084 16.1583 4.70696 16.0822C4.78309 16.006 4.91903 15.9119 5.35277 15.8536C5.70015 15.8069 6.14074 15.7941 6.75 15.7906L6.75 15.7528C6.74997 15.3676 6.74994 15.0174 6.78278 14.73C6.81841 14.4183 6.90098 14.0855 7.13512 13.7894C7.13514 13.7894 7.13516 13.7893 7.13518 13.7893ZM17.25 15.7919C17.7716 15.7968 18.1615 15.8114 18.4754 15.8536C18.9091 15.9119 19.045 16.006 19.1212 16.0822C19.1973 16.1583 19.2914 16.2942 19.3498 16.728C19.4119 17.1905 19.4141 17.8182 19.4141 18.7893V19.3752L19 19.3752C18.4477 19.3752 18 19.8229 18 20.3752C18 20.9275 18.4477 21.3752 19 21.3752L22 21.3752C22.5523 21.3752 23 20.9275 23 20.3752C23 19.8229 22.5523 19.3752 22 19.3752H21.4141L21.4141 18.7235C21.4141 17.837 21.4142 17.0732 21.3319 16.4615C21.2438 15.806 21.045 15.1776 20.5354 14.668C20.0257 14.1583 19.3974 13.9596 18.7419 13.8714C18.2206 13.8013 17.5889 13.791 16.865 13.7895C17.0991 14.0855 17.1816 14.4184 17.2172 14.73C17.252 15.0344 17.2511 15.3424 17.2503 15.6489C17.2501 15.6962 17.25 15.7436 17.25 15.7909C17.25 15.7912 17.25 15.7915 17.25 15.7919Z',
  d22: 'M3.99823 10.501L3.99912 5.00073L7.5 5.00102M20 10.5008V5.00073L16.5 5.00102',
  d23: 'M22 10.501H18',
  d24: 'M6 10.501H2',
  d25: 'M7.5 3.49901H16.5V6.50098L14 7.49903L12 6.50098L10 7.49903L7.5 6.50098V3.49901Z',
  d26: 'M3.99805 20.5008L3.99893 15.0005L7.49982 15.0008M19.9998 20.5006V15.0005L16.4998 15.0008',
  d27: 'M22 20.501H18',
  d28: 'M6 20.501H2',
  d29: 'M7.5 13.499H16.5V16.501L14 17.499L12 16.501L10 17.499L7.5 16.501V13.499Z',
  d30: 'M7.5 2.5C7.08579 2.5 6.75 2.83579 6.75 3.25V3.75169L3.99902 3.75146C3.44676 3.75142 2.99902 4.19905 2.99893 4.7513L2.99821 9.25195H2V11.252H6V9.25195H4.99821L4.99877 5.75155L6.75 5.75169V6.25196C6.75 6.55883 6.93693 6.83473 7.22193 6.94851L9.72193 7.94656C9.92053 8.02585 10.1435 8.01658 10.3349 7.9211L12 7.09016L13.6651 7.9211C13.8565 8.01658 14.0795 8.02585 14.2781 7.94656L16.7781 6.94851C17.0631 6.83473 17.25 6.55883 17.25 6.25196V5.75169L18.9998 5.75155V9.25195H18V11.252H22V9.25195H20.9998V4.75146C20.9998 4.48623 20.8944 4.23187 20.7069 4.04433C20.5193 3.85679 20.265 3.75144 19.9997 3.75146L17.25 3.75169V3.25C17.25 2.83579 16.9142 2.5 16.5 2.5H7.5Z',
  d31: 'M7.5 12.748C7.08579 12.748 6.75 13.0838 6.75 13.498V13.9997L3.99902 13.9995C3.44676 13.9995 2.99902 14.4471 2.99893 14.9994L2.99821 19.5H2V21.5H6V19.5H4.99821L4.99877 15.9996L6.75 15.9997V16.5C6.75 16.8069 6.93693 17.0828 7.22193 17.1966L9.72193 18.1946C9.92053 18.2739 10.1435 18.2646 10.3349 18.1691L12 17.3382L13.6651 18.1691C13.8565 18.2646 14.0795 18.2739 14.2781 18.1946L16.7781 17.1966C17.0631 17.0828 17.25 16.8069 17.25 16.5V15.9997L18.9998 15.9996V19.5H18V21.5H22V19.5H20.9998V14.9995C20.9998 14.7343 20.8944 14.4799 20.7069 14.2924C20.5193 14.1048 20.265 13.9995 19.9997 13.9995L17.25 13.9997V13.498C17.25 13.0838 16.9142 12.748 16.5 12.748H7.5Z',
} as const;

export const IconPushUpBarStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="push-up-bar-stroke-rounded IconPushUpBarStrokeRounded"
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPushUpBarDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="push-up-bar-duotone-rounded IconPushUpBarDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPushUpBarTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="push-up-bar-twotone-rounded IconPushUpBarTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPushUpBarSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="push-up-bar-solid-rounded IconPushUpBarSolidRounded"
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
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPushUpBarBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="push-up-bar-bulk-rounded IconPushUpBarBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPushUpBarStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="push-up-bar-stroke-sharp IconPushUpBarStrokeSharp"
    >
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
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPushUpBarSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="push-up-bar-solid-sharp IconPushUpBarSolidSharp"
    >
      <path 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPushUpBar: TheIconSelfPack = {
  name: 'PushUpBar',
  StrokeRounded: IconPushUpBarStrokeRounded,
  DuotoneRounded: IconPushUpBarDuotoneRounded,
  TwotoneRounded: IconPushUpBarTwotoneRounded,
  SolidRounded: IconPushUpBarSolidRounded,
  BulkRounded: IconPushUpBarBulkRounded,
  StrokeSharp: IconPushUpBarStrokeSharp,
  SolidSharp: IconPushUpBarSolidSharp,
};