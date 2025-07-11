import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {
  
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8fcd304f-4c57-4b32-b6e9-0eb5d36c272d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
    return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='contact' className='w-full px-[12%} py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
        
        <motion.h4
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.3, duration: 0.5}}
        className='text-center mb-2 text-lg'>connect with me</motion.h4>
        
        <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}}
        className='text-center mb-10 text-5xl'>let's chat..!</motion.h2>

        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.7, duration: 0.5}}
        className='text-center max-w-2xl mx-10 md:mx-auto mt-5 mb-12'>i'd love to hear from you! if you have any questions, comments, or feedback, use the form below.</motion.p>
        
        <motion.form onSubmit={onSubmit}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.9, duration: 0.5}}
        className='max-w-2xl mx-10 md:mx-auto'>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8'>

                <motion.input
                initial={{y: -50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{delay: 1.1, duration: 0.6}}
                type='text' placeholder='enter your name' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-zinc-500/30 dark:border-white/90' name='name'/>
                
                <motion.input
                initial={{x: 0, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{delay: 1.2, duration: 0.6}}
                type='email' placeholder='enter your email' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-zinc-500/30 dark:border-white/90' name='email'/>
            
            </div>
            <motion.textarea
            initial={{y: 100, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 1.3, duration: 0.6}}
            rows='5' placeholder='enter your message' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-3 dark:bg-zinc-500/30 dark:border-white/90' name='message'></motion.textarea>

            <motion.button
            whileHover={{scale: 1.05}}
            transition={{duration: 0.3}}
            type='submit'
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-zinc-500'>
                submit <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.button>

            <p className='mt-4'>{result}</p>

        </motion.form>
    </motion.div>
  )
}

export default Contact