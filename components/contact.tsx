// "use client";

// import React from 'react'
// import SectionHeading from './section-heading'
// import { FaPaperPlane } from 'react-icons/fa'
// import { motion } from 'framer-motion'
// import { useSectionInView } from '@/lib/hooks';
// import { sendEmail } from '@/actions/sendEmail';



// export default function Contact() {
//     const { ref } = useSectionInView("Contact", 0.5);
    

//   return (
//    <motion.section id="contact" ref={ref} className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
//    initial={{
//     opacity: 0,
//    }}
//    whileInView={{
//     opacity: 1,
//     transition: {
//       duration: 1,
//     }
//    }}
//    viewport= {{
//     once: true,
// }}
//    >
//     <SectionHeading>Contact Me</SectionHeading>
//     <p className='text-gray-700 -mt-6'>Please contact me directly at {''}
//     <a className='underline' href='mailto:surjithsenthil@gmail.com'>surjithsenthil@gmail.com</a>{' '}
//     or through the form below and I will get back to you as soon as possible.
//     </p>
//     <form className='mt-10 flex flex-col' action={async(formData)=>{
//         await sendEmail(formData);
//     }}>
//         <input type = 'email' name="senderEmail" placeholder='Your email'  required
//           maxLength={500} className='h-14 px-4 rounded-lg borderBlack'/>
//         <textarea placeholder='Your Message' name='message'  required
//           maxLength={5000} className='h-52 my-3 rounded-lg borderBlack p-4'/>
//         <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full
//         outline-none transition-all  focus:scale-110 hover:scale-950 active:scale-105'>Send <FaPaperPlane className='text-xs 
//         opacity-70 
//         transition-all
//         group-hover:translate-x-1 group-hover:-translate-y-1'
//         />{' '}
//         </button>
//     </form>
//    </motion.section>
//   )
// }

"use client";

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import { useFormStatus } from 'react-dom';

export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5);
    const { pending } = useFormStatus();
    const [formStatus, setFormStatus] = useState("");
    const [senderEmail, setSenderEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = async (formData:FormData) => {
        setFormStatus("Sending...");

        try {
            await sendEmail(formData);
            setFormStatus("Message sent successfully!");
            setSenderEmail("");
            setMessage("");
        } catch (error) {
            setFormStatus("Failed to send message. Please try again.");
        }
    };

    return (
        <motion.section id="contact" ref={ref} className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <SectionHeading>Contact Me</SectionHeading>
            <p className='text-gray-700 -mt-6'>
                Please contact me directly at <a className='underline' href='mailto:surjithsenthil@gmail.com'>surjithsenthil@gmail.com</a>{' '}
                or through the form below and I will get back to you as soon as possible.
            </p>
            <form className='mt-10 flex flex-col' onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData();
                formData.append("senderEmail", senderEmail);
                formData.append("message", message);
                handleSubmit(formData);
            }}>
                <input
                    type='email'
                    name="senderEmail"
                    placeholder='Your email'
                    required
                    maxLength={500}
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className='h-14 px-4 rounded-lg borderBlack'
                />
                <textarea
                    placeholder='Your Message'
                    name='message'
                    required
                    maxLength={5000}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className='h-52 my-3 rounded-lg borderBlack p-4'
                />
                <button
                    type='submit'
                    disabled={pending}
                    className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full
                    outline-none transition-all focus:scale-110 hover:scale-950 active:scale-105'>
                    {pending ? "Sending..." : "Send"} <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
                </button>
            </form>
            {formStatus && <p className='mt-4 text-gray-600'>{formStatus}</p>} {/* Display form status */}
        </motion.section>
    );
}
