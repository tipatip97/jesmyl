import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.5005 9.05826L15.921 6.9029C16.4159 4.36646 14.5233 2 12 2C9.47667 2 7.58414 4.36646 8.07901 6.9029L8.49952 9.05826C8.83325 10.7688 10.2983 12 12 12C13.7017 12 15.1668 10.7688 15.5005 9.05826Z',
  d2: 'M10.75 11.5C10.75 11.0858 10.4142 10.75 10 10.75C9.58579 10.75 9.25 11.0858 9.25 11.5H10.75ZM14.75 11.5C14.75 11.0858 14.4142 10.75 14 10.75C13.5858 10.75 13.25 11.0858 13.25 11.5H14.75ZM12.0903 15.9983L12.0612 15.2488H12.0612L12.0903 15.9983ZM11.9097 15.9983L11.9388 15.2488H11.9388L11.9097 15.9983ZM13.162 15.1181L13.7025 15.638L13.162 15.1181ZM9.25 11.5V12.7818H10.75V11.5H9.25ZM13.25 11.5V12.7818H14.75V11.5H13.25ZM12.0612 15.2488C12.0409 15.2496 12.0205 15.25 12 15.25V16.75C12.0399 16.75 12.0797 16.7492 12.1193 16.7477L12.0612 15.2488ZM11.8807 16.7477C11.9203 16.7492 11.9601 16.75 12 16.75V15.25C11.9795 15.25 11.9591 15.2496 11.9388 15.2488L11.8807 16.7477ZM13.25 12.7818C13.25 13.2975 13.2441 13.5475 13.1762 13.7763C13.1172 13.9752 12.9912 14.2139 12.6215 14.5981L13.7025 15.638C14.1709 15.1512 14.4638 14.7101 14.6143 14.2029C14.7559 13.7255 14.75 13.2429 14.75 12.7818H13.25ZM12.1193 16.7477C12.158 16.7462 12.2935 16.7443 12.4524 16.6889C12.6005 16.6373 12.7234 16.5571 12.8273 16.4773C13.0227 16.3272 13.2894 16.0676 13.7025 15.638L12.6215 14.5981C12.1968 15.0397 12.0054 15.2171 11.9135 15.2878C11.8736 15.3184 11.8954 15.2945 11.9589 15.2724C12.0331 15.2466 12.1005 15.2473 12.0612 15.2488L12.1193 16.7477ZM9.25 12.7818C9.25 13.2429 9.24409 13.7255 9.38572 14.2029C9.53619 14.7101 9.82913 15.1512 10.2975 15.638L11.3785 14.5981C11.0088 14.2139 10.8828 13.9752 10.8238 13.7763C10.7559 13.5475 10.75 13.2975 10.75 12.7818H9.25ZM11.9388 15.2488C11.8995 15.2473 11.9669 15.2466 12.0411 15.2724C12.1046 15.2945 12.1264 15.3184 12.0865 15.2878C11.9946 15.2171 11.8032 15.0397 11.3785 14.5981L10.2975 15.638C10.7106 16.0676 10.9773 16.3272 11.1727 16.4773C11.2766 16.5571 11.3995 16.6373 11.5476 16.6889C11.7065 16.7443 11.842 16.7462 11.8807 16.7477L11.9388 15.2488Z',
  d3: 'M10 14C6.75637 14.9265 5.13455 15.3897 4.14608 16.5838C4.0503 16.6995 3.95979 16.8195 3.87481 16.9433C3.11655 18.0485 3.0139 19.4587 3 22M14 14C17.2436 14.9265 18.8654 15.3897 19.8539 16.5838C19.9497 16.6995 20.0402 16.8195 20.1252 16.9433C20.8835 18.0485 20.9861 19.4587 21 22',
  d4: 'M12 16V20',
  d5: 'M8 6H16',
  d6: 'M12.0009 2C9.78242 2 8.05155 3.82914 8.00195 5.9948H15.9998C15.9502 3.82914 14.2193 2 12.0009 2Z',
  d7: 'M12 15.999C12.0302 15.999 12.0603 15.9985 12.0903 15.9973C12.2461 15.9913 12.3241 15.9882 13.162 15.1171C13.5912 14.671 13.8006 14.3253 13.9027 13.9629L14 13.999C17.2436 14.9255 18.8654 15.3887 19.8539 16.5829C19.9497 16.6986 20.0402 16.8185 20.1252 16.9424C20.8835 18.0475 20.9861 19.4577 21 21.999H3C3.0139 19.4577 3.11655 18.0475 3.87481 16.9424C3.95979 16.8185 4.0503 16.6986 4.14608 16.5829C5.13455 15.3887 6.75637 14.9255 10 13.999L10.0986 13.9675C10.2012 14.3282 10.4106 14.6729 10.838 15.1171C11.6759 15.9882 11.7539 15.9913 11.9097 15.9973C11.9397 15.9985 11.9698 15.999 12 15.999Z',
  d8: 'M10.002 11.459V13.0373C10.002 13.8291 10.315 14.5889 10.8729 15.1509L12.0031 16.2893L13.1357 15.1513C13.6953 14.5891 14.0094 13.8282 14.0094 13.035V11.459',
  d9: 'M12 16V20M9.9707 11.3894L10.0665 14.0724L11.911 16.2094L13.9338 14.0724L14.0164 11.5132',
  d10: 'M7.34289 7.04652C7.2761 6.70419 7.24635 6.36394 7.25058 6.02983C7.2502 6.01993 7.25 6.00999 7.25 6C7.25 5.9786 7.2509 5.95741 7.25265 5.93646C7.33289 3.4051 9.36159 1.25 12 1.25C14.6384 1.25 16.6671 3.4051 16.7473 5.93647C16.7491 5.95741 16.75 5.9786 16.75 6C16.75 6.00999 16.7498 6.01993 16.7494 6.02982C16.7537 6.36394 16.7239 6.70419 16.6571 7.04652L16.2366 9.20188C15.8366 11.252 14.0732 12.75 12 12.75C9.92685 12.75 8.16339 11.252 7.7634 9.20188L7.34289 7.04652ZM8.81513 6.75929L8.81333 6.75H15.1867L15.1849 6.75928L14.7644 8.91464C14.4969 10.2855 13.3302 11.25 12 11.25C10.6698 11.25 9.5031 10.2855 9.23564 8.91464L8.81513 6.75929Z',
  d11: 'M18.0546 14.497C19.052 14.9035 19.8282 15.3779 20.4305 16.1056C21.7301 17.6756 21.7393 19.8041 21.7477 21.7533C21.7501 22.3029 21.3059 22.75 20.7563 22.75H3.24139C2.69184 22.75 2.24764 22.3029 2.25001 21.7533C2.25841 19.8041 2.26758 17.6756 3.5672 16.1056C4.1695 15.3779 4.94571 14.9035 5.94313 14.497C6.86743 14.1203 7.8252 13.8207 8.79072 13.5512C9.23512 13.4271 9.24894 13.2793 9.24916 12.8349L9.24918 11.4998C9.24918 11.0855 9.58496 10.7498 9.99918 10.7498C10.4134 10.7498 10.7492 11.0855 10.7492 11.4998V12.7816C10.7492 13.2973 10.7551 13.5473 10.8229 13.776C10.8556 13.8861 10.9087 14.0082 11.0122 14.1604C11.1402 14.3487 11.2043 14.4429 11.2264 14.5147C11.2485 14.5866 11.2485 14.6708 11.2485 14.8392V17.9947C11.2485 18.409 11.5843 18.7447 11.9985 18.7447C12.4127 18.7447 12.7485 18.409 12.7485 17.9947V14.8429C12.7485 14.676 12.7485 14.5926 12.7699 14.5217C12.7914 14.4509 12.8559 14.3541 12.9848 14.1605C13.0725 14.029 13.1439 13.8879 13.1874 13.7329C13.244 13.5151 13.2492 13.2651 13.2492 12.7816V11.4998C13.2492 11.0855 13.585 10.7498 13.9992 10.7498C14.4134 10.7498 14.7492 11.0855 14.7492 11.4998L14.7492 12.8349C14.7494 13.2694 14.7515 13.4284 15.1862 13.5587C15.3344 13.6032 15.4828 13.6471 15.6311 13.691C16.4473 13.9328 17.2636 14.1746 18.0546 14.497Z',
  d12: 'M14 14L21 17V22M10 14L3 17V22',
  d13: 'M12 16V22',
  d14: 'M9.99219 11.4922V14.0039L12 16.0039L13.9995 14.0163V11.4854',
  d15: 'M7.3427 7.04628C6.76187 4.06922 8.982 1.24976 11.9998 1.24976C15.0176 1.24976 17.2378 4.06921 16.6569 7.04628L16.2364 9.20163C15.8364 11.2518 14.073 12.7498 11.9998 12.7498C9.92666 12.7498 8.1632 11.2518 7.76322 9.20163L7.3427 7.04628ZM8.8125 6.74976L8.8143 6.75904L9.23481 8.91439C9.50227 10.2853 10.669 11.2498 11.9992 11.2498C13.3293 11.2498 14.4961 10.2853 14.7635 8.91439L15.184 6.75904L15.1858 6.74976H8.8125Z',
  d16: 'M11.25 22.7498H3C2.58579 22.7498 2.25 22.414 2.25 21.9998V16.9998C2.25 16.7073 2.42009 16.4414 2.68571 16.3188L8.75 13.5199V11.0015H10.25V13.6393L11.25 14.4393V22.7498Z',
  d17: 'M12.75 14.4393V22.7498H21C21.4142 22.7498 21.75 22.414 21.75 21.9998V16.9998C21.75 16.7073 21.5799 16.4414 21.3143 16.3188L15.25 13.5199V11.0015H13.75V13.6393L12.75 14.4393Z',
} as const;

export const IconMuslimStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="muslim-stroke-rounded IconMuslimStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
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

export const IconMuslimDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="muslim-duotone-rounded IconMuslimDuotoneRounded"
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
        d={d.d1} 
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

export const IconMuslimTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="muslim-twotone-rounded IconMuslimTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMuslimSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="muslim-solid-rounded IconMuslimSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMuslimBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="muslim-bulk-rounded IconMuslimBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
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

export const IconMuslimStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="muslim-stroke-sharp IconMuslimStrokeSharp"
    >
      <path 
        d={d.d1} 
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
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMuslimSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="muslim-solid-sharp IconMuslimSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const iconPackOfMuslim: TheIconSelfPack = {
  name: 'Muslim',
  StrokeRounded: IconMuslimStrokeRounded,
  DuotoneRounded: IconMuslimDuotoneRounded,
  TwotoneRounded: IconMuslimTwotoneRounded,
  SolidRounded: IconMuslimSolidRounded,
  BulkRounded: IconMuslimBulkRounded,
  StrokeSharp: IconMuslimStrokeSharp,
  SolidSharp: IconMuslimSolidSharp,
};