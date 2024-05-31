import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 5L13.1039 3.45459C13.5149 2.87911 13.7205 2.59137 13.5907 2.32411C13.4609 2.05684 13.1311 2.04153 12.4714 2.01092C12.3152 2.00367 12.158 2 12 2C6.4772 2 2 6.47715 2 12C2 17.5228 6.4772 22 12 22C17.5229 22 22 17.5228 22 12C22 8.72836 20.4289 5.82368 18 3.99927',
  d2: 'M16.5049 12.5939C16.5002 11.2197 16.568 10.845 16.3158 10.4018C16.0636 9.9586 15.4332 9.99693 14.8028 9.99693C14.1724 9.99693 13.7402 9.99693 13.446 10.306C13.1139 10.6988 13.2002 11.0997 13.1858 12.5819C13.2002 14.6397 13.0802 15.3597 13.4402 15.6597C13.8002 16.0797 14.2632 15.9838 14.9174 15.9957C15.5669 15.9875 15.9605 16.0197 16.2814 15.6364C16.6368 15.301 16.4648 13.9714 16.5049 12.5939Z',
  d3: 'M10.7644 10.9921C10.7404 10.2601 10.3475 9.99615 9.19366 9.99615C7.94696 9.9814 7.51235 10.0201 7.50035 11.4001C7.50035 12.6002 7.50035 12.9602 7.50035 14.7602C7.50036 16.2602 8.64036 15.9662 9.24036 16.0022C9.72036 15.9662 10.7481 16.2376 10.8184 14.7002C10.7404 13.2602 10.2004 13.2602 9.24036 13.2602C7.92036 13.2602 7.86036 13.2602 7.50035 14.0691',
  d4: 'M12 5L13.1039 3.45459C13.5149 2.87911 13.7205 2.59137 13.5907 2.32411C13.4609 2.05684 13.1311 2.04153 12.4714 2.01092C12.3152 2.00367 12.158 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 8.72836 20.4289 5.82368 18 3.99927',
  d5: 'M12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927C8.64715 2.01092 10.8689 2.04153 11.5286 2.01092C11.6848 2.00367 11.842 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z',
  d6: 'M7.5 14.3636V12.1818C7.5 11.1533 7.5 10.639 7.74136 10.3195C7.98271 10 8.37117 10 9.14809 10C9.9915 10 10.7632 10.0201 10.7632 11M8.6772 16H9.61897C9.83777 16 9.94716 16 10.0381 15.979C10.4117 15.893 10.7038 15.5547 10.7781 15.1219C10.8284 14.8291 10.8284 14.4436 10.7781 14.1508C10.7038 13.7181 10.4117 13.3798 10.0381 13.2937C9.94716 13.2727 9.83777 13.2727 9.61897 13.2727H8.6772C8.45841 13.2727 8.34901 13.2727 8.25803 13.2937C7.88445 13.3798 7.59241 13.7181 7.5181 14.1508C7.5 14.2562 7.5 14.3829 7.5 14.6364C7.5 14.8898 7.5 15.0165 7.5181 15.1219C7.59241 15.5547 7.88445 15.893 8.25803 15.979C8.34901 16 8.45841 16 8.6772 16ZM14.8421 16C14.1768 16 13.8442 16 13.6052 15.8315C13.5018 15.7585 13.413 15.6648 13.3439 15.5556C13.1842 15.3033 13.1842 14.9522 13.1842 14.25V11.75C13.1842 11.0478 13.1842 10.6967 13.3439 10.4444C13.413 10.3352 13.5018 10.2415 13.6052 10.1685C13.8442 10 14.1768 10 14.8421 10C15.5074 10 15.84 10 16.079 10.1685C16.1824 10.2415 16.2712 10.3352 16.3403 10.4444C16.5 10.6967 16.5 11.0478 16.5 11.75V14.25C16.5 14.9522 16.5 15.3033 16.3403 15.5556C16.2712 15.6648 16.1824 15.7585 16.079 15.8315C15.84 16 15.5074 16 14.8421 16Z',
  d7: 'M10.7582 10.9929C10.7342 10.2609 10.3413 9.99699 9.18745 9.99699C7.94075 9.98224 7.50614 10.0209 7.49414 11.4009C7.49414 12.601 7.49414 12.961 7.49414 14.761C7.49415 16.261 8.63415 15.967 9.23415 16.003C9.71415 15.967 10.7419 16.2384 10.8122 14.701C10.7342 13.261 10.1942 13.261 9.23415 13.261C7.91415 13.261 7.85415 13.261 7.49414 14.0699M16.4987 12.5947C16.494 11.2205 16.5618 10.8458 16.3096 10.4026C16.0574 9.95944 15.427 9.99777 14.7966 9.99777C14.1662 9.99777 13.734 9.99777 13.4398 10.3068C13.1077 10.6996 13.194 11.1005 13.1796 12.5827C13.194 14.6405 13.074 15.3605 13.434 15.6605C13.794 16.0805 14.257 15.9846 14.9112 15.9965C15.5607 15.9883 15.9543 16.0205 16.2752 15.6372C16.6306 15.3018 16.4586 13.9722 16.4987 12.5947Z',
  d8: 'M3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 9.12308 19.4152 6.56881 17.2767 4.9625C16.8452 4.63835 16.7581 4.02573 17.0822 3.59417C17.4064 3.16262 18.019 3.07556 18.4506 3.39971C21.0594 5.3593 22.75 8.48236 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.1696 1.25 12.3925 1.25642 12.5602 1.26421C12.833 1.27664 13.1537 1.29127 13.4179 1.35116C13.7547 1.42751 14.1919 1.61931 14.4336 2.1171C14.6848 2.63443 14.5396 3.11204 14.3931 3.41217C14.2717 3.66078 14.0781 3.93145 13.9062 4.17184L12.7952 5.72712C12.4977 6.14365 11.9334 6.25664 11.5013 5.9996C11.4797 5.98676 11.4689 5.98034 11.4443 5.96122C11.4197 5.94211 11.4043 5.92667 11.3734 5.89581L9.59391 4.11627C9.3756 3.89797 9.26645 3.78881 9.11648 3.75961C8.96651 3.73042 8.83463 3.7863 8.57088 3.89808C5.417 5.23461 3.20455 8.35893 3.20455 12Z',
  d9: 'M9.41668 11.0145C9.27673 11.0019 9.11312 11.0001 8.89819 11.0001C8.69904 11.0001 8.54727 11.0002 8.41796 11.0045C8.36462 11.0063 8.32057 11.0087 8.28411 11.0114C8.28108 11.0328 8.27804 11.0575 8.27515 11.0859C8.25132 11.3206 8.2501 11.6462 8.2501 12.1819V12.273C8.2961 12.2724 8.33952 12.2726 8.37917 12.2727C8.39592 12.2728 8.41199 12.2728 8.42731 12.2728H9.36907C9.38439 12.2728 9.40046 12.2728 9.41721 12.2727C9.57947 12.2721 9.80462 12.2713 10.0128 12.3193C10.847 12.5115 11.3838 13.2251 11.5138 13.9817C11.5833 14.3865 11.5833 14.8864 11.5138 15.2912C11.3838 16.0478 10.847 16.7614 10.0128 16.9536C9.80462 17.0016 9.57947 17.0008 9.41721 17.0002C9.40046 17.0001 9.38439 17.0001 9.36907 17.0001H8.42731C8.41199 17.0001 8.39592 17.0001 8.37917 17.0002C8.21691 17.0008 7.99176 17.0016 7.78361 16.9536C6.94935 16.7614 6.41253 16.0478 6.28262 15.2912C6.24947 15.0982 6.24977 14.8868 6.25005 14.6898C6.25008 14.6719 6.2501 14.6541 6.2501 14.6365C6.2501 14.6188 6.25008 14.601 6.25005 14.5831C6.24997 14.523 6.24988 14.4616 6.25074 14.3998C6.25032 14.3878 6.2501 14.3758 6.2501 14.3637V12.1819C6.2501 12.1664 6.2501 12.151 6.2501 12.1355C6.25006 11.6612 6.25003 11.232 6.28539 10.8838C6.32256 10.5178 6.40974 10.0926 6.69352 9.71687C7.00756 9.30113 7.42308 9.12593 7.81876 9.0555C8.13248 8.99966 8.50346 8.99988 8.83989 9.00007C8.85945 9.00008 8.87889 9.00009 8.89819 9.00009C8.914 9.00009 8.93031 9.00007 8.9471 9.00005C9.31563 8.99957 9.91365 8.9988 10.415 9.21308C10.7175 9.34235 11.019 9.55976 11.2324 9.90826C11.4398 10.247 11.5133 10.6271 11.5133 11.0001C11.5133 11.5524 11.0656 12.0001 10.5133 12.0001C9.96966 12.0001 9.52733 11.5662 9.51365 11.0259C9.48688 11.0219 9.4548 11.0179 9.41668 11.0145ZM8.26709 14.2733C8.26247 14.2843 8.25783 14.2984 8.25449 14.3161C8.25404 14.3212 8.25285 14.3365 8.25193 14.3677C8.2502 14.426 8.2501 14.5039 8.2501 14.6365C8.2501 14.769 8.2502 14.8469 8.25193 14.9052C8.25285 14.9364 8.25404 14.9517 8.25449 14.9568C8.25783 14.9745 8.26246 14.9887 8.26709 14.9996C8.27416 14.9997 8.28179 14.9997 8.29002 14.9998C8.32782 15.0001 8.37149 15.0001 8.42731 15.0001H9.36907C9.42488 15.0001 9.46856 15.0001 9.50636 14.9998C9.51459 14.9997 9.52221 14.9997 9.52929 14.9996C9.53426 14.9878 9.53924 14.9724 9.54261 14.9528C9.57365 14.7719 9.57365 14.501 9.54261 14.3201C9.53924 14.3005 9.53426 14.2851 9.52929 14.2733C9.52221 14.2733 9.51459 14.2732 9.50636 14.2731C9.46856 14.2728 9.42488 14.2728 9.36907 14.2728H8.42731C8.37149 14.2728 8.32782 14.2728 8.29002 14.2731C8.28179 14.2732 8.27417 14.2733 8.26709 14.2733ZM15.0515 9.00008C15.0651 9.00009 15.0786 9.00009 15.0922 9.00009C15.1058 9.00009 15.1193 9.00009 15.1329 9.00008C15.4301 9.00003 15.7268 8.99997 15.9773 9.02687C16.2588 9.0571 16.5915 9.13 16.9054 9.35143C17.1183 9.50158 17.2976 9.69203 17.4354 9.90966C17.6345 10.2241 17.6985 10.5523 17.7255 10.8326C17.7502 11.0884 17.7501 11.3938 17.7501 11.7113C17.7501 11.7242 17.7501 11.7371 17.7501 11.7501V14.2501C17.7501 14.263 17.7501 14.276 17.7501 14.2889C17.7501 14.6064 17.7502 14.9118 17.7255 15.1676C17.6985 15.4479 17.6345 15.776 17.4354 16.0905C17.2976 16.3081 17.1183 16.4986 16.9054 16.6488C16.5915 16.8702 16.2588 16.9431 15.9773 16.9733C15.7268 17.0002 15.4301 17.0001 15.1329 17.0001C15.1193 17.0001 15.1058 17.0001 15.0922 17.0001C15.0786 17.0001 15.0651 17.0001 15.0515 17.0001C14.7543 17.0001 14.4577 17.0002 14.2071 16.9733C13.9256 16.9431 13.5929 16.8702 13.279 16.6488C13.0661 16.4986 12.8868 16.3081 12.749 16.0905C12.55 15.776 12.4859 15.4479 12.4589 15.1676C12.4342 14.9118 12.4343 14.6064 12.4343 14.2889C12.4343 14.276 12.4343 14.263 12.4343 14.2501V11.7501C12.4343 11.7371 12.4343 11.7242 12.4343 11.7113C12.4343 11.3938 12.4342 11.0884 12.4589 10.8326C12.4859 10.5523 12.55 10.2241 12.749 9.90966C12.8868 9.69203 13.0661 9.50158 13.279 9.35143C13.5929 9.13 13.9256 9.0571 14.2071 9.02687C14.4577 8.99997 14.7543 9.00003 15.0515 9.00008ZM14.4509 11.0125C14.4505 11.0163 14.4501 11.0203 14.4497 11.0245C14.4354 11.1724 14.4343 11.3792 14.4343 11.7501V14.2501C14.4343 14.6209 14.4354 14.8277 14.4497 14.9757C14.4501 14.9798 14.4505 14.9838 14.4509 14.9877C14.5799 14.9989 14.7641 15.0001 15.0922 15.0001C15.4203 15.0001 15.6045 14.9989 15.7336 14.9877C15.734 14.9838 15.7344 14.9798 15.7348 14.9757C15.749 14.8277 15.7501 14.6209 15.7501 14.2501V11.7501C15.7501 11.3792 15.749 11.1724 15.7348 11.0245C15.7344 11.0203 15.734 11.0163 15.7336 11.0125C15.6045 11.0012 15.4203 11.0001 15.0922 11.0001C14.7641 11.0001 14.5799 11.0012 14.4509 11.0125Z',
  d10: 'M12 5L14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 8.72836 20.4289 5.82368 18 3.99927',
  d11: 'M10.5107 11.0914V10.0502C10.5107 9.99497 10.466 9.9502 10.4107 9.9502H6.98438V12.9995M6.98438 12.9995H10.4107C10.466 12.9995 10.5107 13.0443 10.5107 13.0995V15.9488C10.5107 16.0041 10.466 16.0488 10.4107 16.0488H6.98438V12.9995ZM13.5517 16.0489H16.8966C16.9518 16.0489 16.9966 16.0042 16.9966 15.9489V10.0503C16.9966 9.99506 16.9518 9.95029 16.8966 9.95029H13.5517C13.4965 9.95029 13.4517 9.99506 13.4517 10.0503V15.9489C13.4517 16.0042 13.4965 16.0489 13.5517 16.0489Z',
  d12: 'M12.1937 3.20663C12.1293 3.20524 12.0647 3.20455 12 3.20455C7.1424 3.20455 3.20454 7.1424 3.20454 12C3.20454 16.8576 7.1424 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 9.12308 19.4152 6.56881 17.2767 4.9625L18.4506 3.39971C21.0594 5.3593 22.75 8.48236 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.735 1.25 13.4538 1.32391 14.149 1.46502C14.4735 1.53089 14.7425 1.7566 14.8639 2.06469C14.9852 2.37278 14.9422 2.72135 14.7498 2.9908L12.7952 5.72712L11.2048 4.59106L12.1937 3.20663Z',
  d13: 'M11.5 9C11.5 8.44772 11.0523 8 10.5 8H6V17H10.5C11.0523 17 11.5 16.5523 11.5 16V12.5C11.5 11.9477 11.0523 11.5 10.5 11.5H8V10H9.5V10.5H11.5V9ZM8 15V13.5H9.5V15H8Z',
  d14: 'M17 8H13.5C12.9477 8 12.5 8.44772 12.5 9V16C12.5 16.5523 12.9477 17 13.5 17H17C17.5523 17 18 16.5523 18 16V9C18 8.73478 17.8946 8.48043 17.7071 8.29289C17.5196 8.10536 17.2652 8 17 8ZM16 15H14.5V10H16V15Z',
} as const;

export const IconGoForward60SecStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-60-sec-stroke-rounded IconGoForward60SecStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoForward60SecDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-60-sec-duotone-rounded IconGoForward60SecDuotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoForward60SecTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-60-sec-twotone-rounded IconGoForward60SecTwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoForward60SecSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-60-sec-solid-rounded IconGoForward60SecSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconGoForward60SecBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-60-sec-bulk-rounded IconGoForward60SecBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconGoForward60SecStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-60-sec-stroke-sharp IconGoForward60SecStrokeSharp"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoForward60SecSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-60-sec-solid-sharp IconGoForward60SecSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGoForward60Sec: TheIconSelfPack = {
  name: 'GoForward60Sec',
  StrokeRounded: IconGoForward60SecStrokeRounded,
  DuotoneRounded: IconGoForward60SecDuotoneRounded,
  TwotoneRounded: IconGoForward60SecTwotoneRounded,
  SolidRounded: IconGoForward60SecSolidRounded,
  BulkRounded: IconGoForward60SecBulkRounded,
  StrokeSharp: IconGoForward60SecStrokeSharp,
  SolidSharp: IconGoForward60SecSolidSharp,
};