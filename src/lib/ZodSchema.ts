import { z } from 'zod'


 const getContactSchema = (t:any , local:string)=> z.object({
    name: z.string()
    .min(3,{message:t('validation.nameMin')})
    .max(20,{message:t('validation.nameMax')})
    .refine((value)=>{
        if(local === 'fa'){
             return /^[آ-یپچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژ\s]+$/.test(value);
        }else{
             return /^[a-zA-Z\s]+$/.test(value);
        }
    },{
        message:t('validation.nameRegex')
    }
),
email:
z.string()
.min(1,{message:t('validation.required')})
.regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
     {message:t('validation.emailInvalid')}),

 phone:
  z.string()
  .min(11, { message: t('validation.required') })
  .max(13, { message: t('validation.required') })
  .regex(/^(\+?\d{1,3})?[-.\s]?(0?\d{9,12})$/,
     { message: t('validation.phoneInvalid') }),
  subject: z.string().min(10, { message: t('validation.required') }),
  message: z.string().min(50, { message: t('validation.messageRequired') })
})
export default getContactSchema;