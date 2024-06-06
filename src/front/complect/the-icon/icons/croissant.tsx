import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.50341 10.4966C3.04778 10.9578 2.72516 11.8278 2.17324 13.8272C2.05648 14.2501 1.97095 14.6874 2.01096 15.1241C2.07035 15.7722 2.29098 16.1732 2.73162 16.5049C3.19908 16.8567 3.80783 16.9443 4.39515 16.9443H5.91432C6.96217 16.9443 8.06107 16.7368 8.76226 15.9663C9.56056 15.0891 9.76762 14.1152 9.51839 13.4725M10.0196 3.55303L13.3694 2.22724C14.3939 1.82173 15.6252 1.93944 16.3719 2.74334C16.7342 3.1334 16.9656 3.53013 17.0371 4.049V6.1118C17.0371 7.31599 16.5164 8.50529 15.4733 9.12554C14.8748 9.48139 14.2961 9.73101 13.5284 10.0007M4.00465 8.01678C5.21107 5.86706 6.08024 4.98634 8.01464 4.049C8.45636 3.81113 8.82491 3.67465 9.17351 3.6508C10.5662 3.55551 11.315 5.197 11.882 6.45929L12.8896 8.70248C12.981 8.906 13.0517 9.11866 13.0862 9.33874C13.2427 10.337 13.0888 10.8375 12.5259 11.4886L11.6088 12.396C11.219 12.7817 10.8028 13.1698 10.2765 13.3319C10.1279 13.3777 9.98568 13.403 9.84441 13.4086C8.90728 13.4453 8.02746 12.9406 7.14287 12.6323C6.01024 12.2375 5.17279 11.6015 4.00465 10.4966C3.38259 9.51219 3.41239 8.9681 4.00465 8.01678Z',
  d2: 'M17.0372 7.5447C18.2145 7.74949 18.8756 7.86774 20.0447 8.04284C20.5026 8.1098 20.8451 8.04812 21.2292 7.79034C21.8241 7.39104 22.1548 6.62976 21.923 5.95452C21.6953 5.29117 21.1421 4.7633 20.0447 4.05776C18.8918 3.25689 18.2334 2.92336 17.0372 2.56335M2.50098 17.0093C2.5948 18.3967 3.0792 19.2816 4.50597 20.9943C5.15186 21.6554 5.62309 21.9275 6.2479 21.9929C6.73799 22.0442 7.21463 21.8062 7.52179 21.4233C7.89935 20.9525 8.05274 20.5663 8.01471 19.9981L7.51346 17.0093',
  d3: 'M11.6047 5.91714L12.6421 8.03575C13.5271 9.84324 13.3514 10.6931 11.9816 12.0741C11.2577 12.8039 10.8957 13.1689 10.4495 13.3194C10.2477 13.3875 10.0363 13.4226 9.82345 13.4234C8.12283 13.4302 4.12001 11.4355 3.63706 9.88698C3.38098 9.06589 3.64879 8.57514 4.1844 7.59364C4.95709 6.17772 6.13297 4.99223 7.53742 4.21323C8.51096 3.67325 8.99773 3.40325 9.81217 3.66142C10.6266 3.91959 10.9526 4.58544 11.6047 5.91714Z',
  d4: 'M21.5029 7.45727C22.1155 6.84673 22.1875 5.86735 21.5749 5.25681C19.9866 3.67375 18 2.50012 16 2.50012C16.5199 2.80329 17.4037 4.22991 16.7798 7.51097C17.5688 7.53163 18.33 7.6691 19.0646 7.93219C19.9218 8.23918 20.851 8.10701 21.5029 7.45727Z',
  d5: 'M7.40861 21.5044C6.79602 22.115 5.81336 22.1867 5.20077 21.5763C3.69436 20.0749 2.614 19.1039 2.50781 16.8751C3.77733 16.9383 6.54445 17.0083 7.45686 16.7823C7.48017 17.5719 7.62233 18.3454 7.88512 19.0743C8.19314 19.9286 8.06054 20.8547 7.40861 21.5044Z',
  d6: 'M3.5011 10.4166C3.04617 10.8734 2.72405 11.7352 2.17298 13.7158C2.0564 14.1347 1.971 14.5679 2.01095 15.0005C2.07024 15.6425 2.29053 16.0398 2.7305 16.3683C3.19724 16.7168 3.80505 16.8036 4.39147 16.8036H5.9083C6.95453 16.8036 8.05174 16.5981 8.75185 15.8348C9.54892 14.9659 9.75566 14.0011 9.50682 13.3645M10.0073 3.5383L13.3519 2.22498C14.3748 1.82329 15.6042 1.93989 16.3498 2.73623C16.7115 3.12262 16.9426 3.51562 17.014 4.02961V6.073C17.014 7.26586 16.4941 8.44398 15.4526 9.05839C14.855 9.4109 14.2772 9.65817 13.5107 9.92532M4.00157 7.96006C5.20613 5.83056 6.07396 4.95813 8.00538 4.02961C8.44642 3.79397 8.81441 3.65878 9.16247 3.63515C10.553 3.54076 11.3007 5.16681 11.8668 6.41722L12.8728 8.63931C12.9641 8.84092 13.0347 9.05158 13.0691 9.26959C13.2254 10.2585 13.0717 10.7542 12.5097 11.3992L11.594 12.2981C11.2048 12.6802 10.7893 13.0646 10.2638 13.2252C10.1154 13.2706 9.97339 13.2956 9.83234 13.3012C8.89665 13.3375 8.01818 12.8376 7.13495 12.5322C6.00407 12.1411 5.16791 11.5111 4.00157 10.4166C3.38046 9.44141 3.41022 8.90243 4.00157 7.96006Z',
  d7: 'M16.499 2.51477C17.7248 2.51477 20.0382 3.48821 21.4967 5.27392C22.6592 6.69732 21.5823 7.49302 20.4819 7.84628C19.9582 8.01439 19.3978 7.98127 18.8572 7.87972L17.0333 7.53706',
  d8: 'M2.5127 16.5441C2.52285 17.7602 3.52317 20.0472 5.33508 21.4793C6.77138 22.6145 7.56363 21.5577 7.91356 20.4694C8.08456 19.9376 8.04515 19.3681 7.93583 18.8202L7.57913 17.0325',
  d9: 'M3.50216 10.5364C3.04691 10.9997 2.72456 11.8736 2.1731 13.8821C2.05644 14.307 1.97097 14.7463 2.01095 15.185C2.07029 15.836 2.29074 16.2389 2.73102 16.572C3.19809 16.9255 3.80633 17.0135 4.39317 17.0135H5.91108C6.95807 17.0135 8.05607 16.805 8.75667 16.031C9.55432 15.1498 9.7612 14.1715 9.51218 13.5258M10.013 3.56109L13.36 2.22925C14.3837 1.82189 15.6139 1.94014 16.36 2.74771C16.722 3.13955 16.9533 3.53809 17.0247 4.05933V6.13154C17.0247 7.34122 16.5044 8.53595 15.4621 9.15903C14.8641 9.51651 14.286 9.76727 13.5189 10.0382M4.003 8.04521C5.20841 5.88568 6.07687 5.00094 8.00967 4.05932C8.45102 3.82037 8.81927 3.68326 9.16759 3.65931C10.5592 3.56359 11.3073 5.21256 11.8738 6.48061L12.8806 8.73404C12.9719 8.93849 13.0426 9.15212 13.0771 9.37321C13.2334 10.376 13.0797 10.8788 12.5172 11.5329L11.6008 12.4445C11.2114 12.8318 10.7955 13.2217 10.2697 13.3846C10.1212 13.4306 9.97908 13.456 9.83793 13.4616C8.90157 13.4985 8.02248 12.9915 7.13862 12.6818C6.00693 12.2852 5.17017 11.6463 4.003 10.5364C3.38145 9.54744 3.41122 9.00087 4.003 8.04521Z',
  d10: 'M17.0435 7.47771C18.2198 7.68344 18.8803 7.80222 20.0485 7.97812C20.506 8.04539 20.8483 7.98342 21.232 7.72447C21.8265 7.32334 22.1568 6.5586 21.9253 5.88027C21.6978 5.21389 21.145 4.68362 20.0485 3.97486C18.8965 3.17033 17.5186 2.47339 16.0186 2.47339M2.51855 16.4734C2.6123 17.8671 3.09703 19.2682 4.52262 20.9887C5.16798 21.6528 5.63882 21.9261 6.26311 21.9919C6.7528 22.0434 7.22904 21.8043 7.53595 21.4196C7.9132 20.9467 8.06646 20.5587 8.02846 19.9879L7.52763 16.9855',
  d11: 'M12.8149 1.47538C12.1976 1.64112 11.5038 1.86535 10.8263 2.13245C10.4833 2.26767 10.3118 2.33527 10.2729 2.48179C10.234 2.62831 10.357 2.78159 10.603 3.08814C11.2712 3.92074 11.8605 4.85743 12.1338 5.41556L13.1712 7.53417C13.46 8.12403 13.737 8.89719 13.9461 9.73198C13.9969 9.93499 14.0223 10.0365 14.0857 10.0966C14.1261 10.135 14.1778 10.1619 14.2325 10.1729C14.318 10.1903 14.44 10.1436 14.6839 10.05C15.9422 9.56773 16.0196 7.28205 16.0885 6.18713C16.1509 5.19451 16.1654 4.0341 15.7415 3.10413C15.3375 2.21811 13.8375 1.20064 12.8149 1.47538Z',
  d12: 'M17.4505 7.5094C17.4032 7.80968 17.3795 7.95982 17.4453 8.0576C17.5111 8.15538 17.6644 8.19124 17.9711 8.26296C18.2076 8.31829 18.4406 8.38698 18.6703 8.46925C19.7524 8.85678 21.0003 8.70719 21.891 7.81946C22.7512 6.96208 22.914 5.50442 21.963 4.55657C20.7194 3.31718 19.187 2.26033 17.5334 1.8115C17.1993 1.72083 17.0323 1.6755 16.9626 1.71223C16.9111 1.73938 16.8846 1.77056 16.8662 1.82576C16.8412 1.90045 16.9296 2.09426 17.1063 2.48188C17.2525 2.80245 17.3614 3.17328 17.4399 3.56653C17.5972 4.35344 17.6471 5.30239 17.5855 6.28128C17.5604 6.68034 17.5161 7.09314 17.4505 7.5094Z',
  d13: 'M2.16686 17.0763C1.98681 16.9433 1.89678 16.8769 1.82281 16.8824C1.76179 16.8869 1.70399 16.9209 1.67042 16.9721C1.62972 17.0341 1.6428 17.1345 1.66895 17.3352C1.78523 18.2277 2.06349 18.9544 2.47716 19.6123C2.96094 20.3818 3.83806 21.2525 4.52963 21.9387C5.47883 22.8847 6.93702 22.7234 7.79634 21.867C8.68776 20.9785 8.83871 19.7322 8.44897 18.6512C8.35618 18.3938 8.28 18.1296 8.2205 17.86C8.15455 17.5611 8.12158 17.4117 8.0261 17.3447C7.93061 17.2777 7.78518 17.2967 7.49431 17.3346C6.87551 17.4154 6.3138 17.4569 5.88832 17.4883C5.21374 17.5381 4.53399 17.6026 3.85692 17.5756C3.2635 17.5519 2.65365 17.4368 2.16686 17.0763Z',
  d14: 'M10.0662 14.5808C10.0794 14.4624 10.0221 14.3485 9.91932 14.2885C9.88938 14.271 9.8489 14.2585 9.76794 14.2336C8.2475 13.7662 6.90688 13.2342 5.64055 12.4994C4.76293 11.9902 3.93015 11.3891 3.10096 10.6561C2.8048 10.3943 2.65671 10.2634 2.50477 10.3C2.35283 10.3367 2.28426 10.5116 2.14714 10.8616C1.8865 11.5267 1.67002 12.203 1.50529 12.8266C1.4394 13.0656 1.40645 13.1851 1.39383 13.3942C1.35908 13.9703 1.60944 14.5652 2.01407 14.9667C3.19076 16.1342 4.20164 16.1089 5.75908 15.9938C6.46353 15.9417 7.43848 15.8692 8.41343 15.6579C9.03617 15.5229 9.97882 15.3652 10.0662 14.5808Z',
  d15: 'M12.7135 11.351C12.2825 8.68041 11.043 5.70231 9.1911 3.71615C8.55227 3.03099 8.07669 2.80717 7.23511 3.27136C7.16632 3.30931 7.09765 3.34748 7.02895 3.3856C5.44715 4.26297 4.1833 5.59252 3.3201 7.17485C3.06444 7.64351 2.9366 7.87784 2.98966 8.21395C3.04272 8.55006 3.24578 8.7424 3.65192 9.12708C4.56896 9.99566 5.46022 10.6606 6.39337 11.202C7.57111 11.8854 10.1049 13.4231 11.5534 13.0521C12.2911 12.8631 12.8337 12.0961 12.7135 11.351Z',
  d16: 'M12.7135 11.351C12.2825 8.68041 11.043 5.70231 9.1911 3.71615C8.55227 3.03099 8.07669 2.80717 7.23511 3.27136C5.57736 4.18575 4.2295 5.50783 3.3201 7.17485C3.06444 7.64351 2.9366 7.87784 2.98966 8.21395C3.04272 8.55006 3.24578 8.7424 3.65192 9.12708C4.56896 9.99566 5.46022 10.6606 6.39337 11.202C7.57111 11.8854 10.1049 13.4231 11.5534 13.0521C12.2911 12.8631 12.8337 12.0961 12.7135 11.351Z',
  d17: 'M17.4506 7.50941C17.4033 7.80969 17.3796 7.95982 17.4454 8.0576C17.5112 8.15538 17.6646 8.19125 17.9712 8.26297C18.2077 8.3183 18.4407 8.38699 18.6704 8.46925C19.7525 8.85678 21.0004 8.7072 21.8911 7.81947C22.7513 6.96209 22.9141 5.50443 21.9631 4.55658C20.7195 3.31719 19.1871 2.26034 17.5335 1.81151C17.1994 1.72084 17.0324 1.67551 16.9627 1.71224C16.9112 1.73938 16.8847 1.77057 16.8663 1.82576C16.8413 1.90046 16.9297 2.09427 17.1064 2.48189C17.2526 2.80246 17.3615 3.17329 17.4401 3.56654C17.5973 4.35344 17.6472 5.3024 17.5856 6.28128C17.5605 6.68035 17.5162 7.09314 17.4506 7.50941Z',
  d18: 'M2.16696 17.0763C1.98691 16.9434 1.89688 16.8769 1.82291 16.8824C1.7619 16.8869 1.70409 16.9209 1.67052 16.9721C1.62982 17.0341 1.6429 17.1345 1.66905 17.3352C1.78533 18.2277 2.06359 18.9544 2.47726 19.6124C2.96104 20.3818 3.83816 21.2525 4.52973 21.9387C5.47893 22.8847 6.93712 22.7234 7.79644 21.867C8.68787 20.9786 8.83882 19.7322 8.44907 18.6512C8.35628 18.3938 8.2801 18.1296 8.2206 17.86C8.15466 17.5611 8.12168 17.4117 8.0262 17.3447C7.93072 17.2777 7.78528 17.2967 7.49441 17.3346C6.87562 17.4154 6.3139 17.4569 5.88842 17.4883C5.21384 17.5381 4.53409 17.6026 3.85702 17.5756C3.2636 17.5519 2.65376 17.4369 2.16696 17.0763Z',
  d19: 'M12.7136 11.351C12.2826 8.68042 11.0431 5.70232 9.19121 3.71616C8.55237 3.03099 8.07679 2.80718 7.23521 3.27137C5.57746 4.18576 4.2296 5.50784 3.32021 7.17486C3.06454 7.64352 2.9367 7.87785 2.98976 8.21396C3.04282 8.55007 3.24589 8.74241 3.65202 9.12709C4.56906 9.99567 5.46033 10.6606 6.39348 11.202C7.57121 11.8854 10.105 13.4231 11.5535 13.0521C12.2912 12.8631 12.8338 12.0961 12.7136 11.351Z',
  d20: 'M9.80673 3.65727C8.99285 3.3991 8.50641 3.66909 7.53353 4.20908C6.13004 4.98808 4.95497 6.17356 4.18281 7.58949C3.64756 8.57099 3.37993 9.06173 3.63584 9.88283M9.80673 3.65727C10.6206 3.91543 10.9464 4.58128 11.598 5.91298L12.6347 8.0316C13.5192 9.83908 13.3435 10.689 11.9746 12.07C11.2512 12.7998 10.8895 13.1648 10.4437 13.3153C10.2419 13.3834 10.0307 13.4185 9.81801 13.4193M9.80673 3.65727C10.817 3.10973 12.0235 2.66904 13.0807 2.38498C14.604 1.97568 15.3656 1.77102 16.1496 2.39209C17.346 3.33999 17.1719 7.36139 16.2271 8.53449C15.6629 9.2351 13.9863 9.75409 13.1767 9.95828M3.63584 9.88283C4.11846 11.4314 8.11855 13.4261 9.81801 13.4193M3.63584 9.88283C3.09311 10.9022 2.65629 12.1193 2.37473 13.1858C2.1023 14.2178 1.65868 15.4509 2.4483 16.3629C3.10401 17.1203 4.05462 17.05 5.95586 16.9094M9.81801 13.4193C9.81801 13.4193 9.34523 15.5927 8.52274 16.3156C8.03224 16.7467 7.3566 16.8058 5.95586 16.9094M5.95586 16.9094C6.8297 16.8448 7.42151 16.8012 7.86203 16.6704',
  d21: 'M17.0051 7.52283C18.0363 7.52283 18.767 7.84222 19.3412 8.02822C19.6134 8.1164 19.9019 8.14543 20.1839 8.09692C20.5456 8.03469 20.9504 7.90398 21.219 7.72358C21.8136 7.32429 22.1571 6.48419 21.9255 5.80895C21.6979 5.14561 21.1136 4.81828 20.0353 3.99103C18.8832 3.19016 17.7671 2.68174 16.5117 2.53088M2.50195 16.6401C2.50195 18.3851 3.03398 19.3513 4.5072 20.9275C5.15434 21.6199 5.51083 21.9305 6.13522 21.9959C6.62497 22.0473 7.27175 21.7273 7.5787 21.3444C7.956 20.8736 8.07172 20.2012 8.03371 19.633C7.75129 18.5418 7.53163 17.9687 7.41396 16.9089',
  d22: 'M13.4186 2.14976C14.2969 1.91391 14.832 1.77465 15.2548 1.75286C15.6049 1.73481 15.8296 1.80024 16.0902 2.00657C16.2097 2.10116 16.386 2.36348 16.5221 2.88769C16.6511 3.38449 16.7146 4.00436 16.7084 4.65677C16.7023 5.30668 16.6272 5.95683 16.4981 6.50754C16.3638 7.08011 16.1909 7.45897 16.045 7.64C15.8771 7.84841 15.4368 8.12107 14.7871 8.38788C14.5297 8.49361 14.2647 8.58852 14.0124 8.67095C13.8932 8.20981 13.6987 7.73664 13.455 7.23876L12.2775 4.834C11.9402 4.14504 11.6421 3.53614 11.3061 3.07276C11.266 3.01746 11.225 2.96371 11.183 2.91155C11.9242 2.60168 12.7014 2.34233 13.4186 2.14976ZM18.2384 6.26417C18.8748 6.34422 19.4987 6.49142 20.1093 6.71009C20.81 6.96103 21.4866 6.83385 21.9444 6.37759C22.3488 5.97457 22.328 5.4193 22.0242 5.11653C20.8439 3.9402 19.509 3.03289 18.1618 2.59424C18.3146 3.23871 18.3773 3.9631 18.3705 4.67255C18.3655 5.2078 18.3207 5.75071 18.2384 6.26417ZM2.42635 18.2917C2.54639 18.8607 2.74921 19.3201 3.01203 19.7381C3.44142 20.4211 4.03874 21.0151 4.84161 21.8135L5.05264 22.0235C5.35846 22.3283 5.92042 22.348 6.32582 21.944C6.78285 21.4885 6.90947 20.817 6.65872 20.1215C6.43565 19.5029 6.28424 18.8603 6.20273 18.2056C5.96822 18.2262 5.72034 18.2444 5.45924 18.2637L5.29097 18.2761C4.29923 18.3495 3.44495 18.4126 2.75162 18.3386C2.64103 18.3268 2.53258 18.3114 2.42635 18.2917ZM7.5281 13.994C7.86552 14.108 8.20502 14.2059 8.53279 14.2775C8.49978 14.3825 8.46359 14.4925 8.42434 14.605C8.30972 14.9334 8.174 15.2686 8.02196 15.5586C7.86421 15.8596 7.71699 16.0571 7.60041 16.1595C7.47378 16.2707 7.30287 16.3613 6.94024 16.4342C6.55277 16.5122 6.03541 16.5544 5.24124 16.6131C4.15581 16.6933 3.45369 16.742 2.92804 16.6858C2.45872 16.6357 2.23166 16.512 2.04118 16.2921C1.80001 16.0138 1.7187 15.6728 1.75878 15.1954C1.79361 14.7806 1.90785 14.3628 2.03782 13.8875C2.06957 13.7713 2.10227 13.6518 2.13497 13.528C2.32313 12.8158 2.57549 12.0448 2.87669 11.3077C2.98779 11.4172 3.1029 11.5223 3.21934 11.6226C3.79683 12.1201 4.51334 12.5892 5.25501 12.9918C5.99883 13.3956 6.79017 13.7445 7.5281 13.994ZM7.45506 4.0952C8.0226 3.78041 8.33898 3.60986 8.61546 3.52758C8.8322 3.46308 9.02252 3.45441 9.32151 3.54919C9.57055 3.62813 9.74928 3.75729 9.96048 4.04854C10.2021 4.38176 10.4388 4.85876 10.8126 5.62204L11.9621 7.96972C12.4321 8.92959 12.5308 9.46738 12.4604 9.87885C12.3896 10.2925 12.1181 10.7564 11.3866 11.494C10.9756 11.9083 10.7033 12.1819 10.474 12.3767C10.2552 12.5628 10.1233 12.6346 10.0133 12.6717C9.87406 12.7186 9.72842 12.7428 9.58183 12.7434C9.24557 12.7447 8.7164 12.6411 8.06039 12.4193C7.41991 12.2028 6.71555 11.8933 6.04801 11.531C5.37832 11.1674 4.7678 10.7626 4.3042 10.3633C3.81731 9.94384 3.58621 9.61001 3.52327 9.40819C3.42822 9.10342 3.43668 8.90742 3.50175 8.68517C3.58394 8.40445 3.754 8.08404 4.06592 7.51245C4.84704 6.08106 6.03715 4.88167 7.45506 4.0952Z',
} as const;

export const IconCroissantStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="croissant-stroke-rounded IconCroissantStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCroissantDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="croissant-duotone-rounded IconCroissantDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconCroissantTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="croissant-twotone-rounded IconCroissantTwotoneRounded"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCroissantSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="croissant-solid-rounded IconCroissantSolidRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconCroissantBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="croissant-bulk-rounded IconCroissantBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCroissantStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="croissant-stroke-sharp IconCroissantStrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconCroissantSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="croissant-solid-sharp IconCroissantSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCroissant: TheIconSelfPack = {
  name: 'Croissant',
  StrokeRounded: IconCroissantStrokeRounded,
  DuotoneRounded: IconCroissantDuotoneRounded,
  TwotoneRounded: IconCroissantTwotoneRounded,
  SolidRounded: IconCroissantSolidRounded,
  BulkRounded: IconCroissantBulkRounded,
  StrokeSharp: IconCroissantStrokeSharp,
  SolidSharp: IconCroissantSolidSharp,
};