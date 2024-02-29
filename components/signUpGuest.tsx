// 'use client';

// import allergies from '@/app/data/allergies.json';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';

// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
// } from '@/components/ui/form';
// import { Switch } from '@/components/ui/switch';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const FormSchema = z.object({
//   ...allergies.reduce(
//     (acc, allergy) => ({ ...acc, [allergy]: z.boolean() }),
//     {}
//   ),
// });

// export function SignUpGuest() {
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       ...allergies.reduce((acc, allergy) => ({ ...acc, [allergy]: false }), {}),
//     },
//   });

//   function onSubmit(data: z.infer<typeof FormSchema>) {
//     console.log(data);
//   }

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className='w-[500px] space-y-6'
//       >
//         <div>
//           <div className='space-y-4'>
//             <FormField
//               name='name'
//               render={({ field }) => (
//                 <FormItem className=''>
//                   <div className='grid w-full max-w-sm items-center gap-1.5'>
//                     <Label htmlFor='name'>Navn</Label>
//                     <Input type='name' id='name' placeholder='navn' />
//                   </div>
//                 </FormItem>
//               )}
//             />
//             <div className='space-y-1.5'>
//               <h3>Allergier</h3>
//               {allergies.map((allergy, index) => {
//                 console.log(allergy);
//                 return (
//                   <FormField
//                     control={form.control}
//                     name={allergy as string}
//                     key={index}
//                     render={({ field }) => (
//                       <FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
//                         <FormLabel>{allergy}</FormLabel>
//                         <FormControl>
//                           <Switch
//                             checked={field.value}
//                             onCheckedChange={field.onChange}
//                             aria-readonly
//                           />
//                         </FormControl>
//                       </FormItem>
//                     )}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//         <Button type='submit'>Registrer</Button>
//       </form>
//     </Form>
//   );
// }
