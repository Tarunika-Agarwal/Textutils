import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react'
import React from 'react'
const About = () => {
  return (
    <div>
      <Accordion className='w-full' allowMultiple>
        <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10'>
          <h2>
            <AccordionButton className='flex justify-between'>
              <span className='text-left font-bold text-navy-900 dark:text-white' flex='1' textAlign='left'>
                Description
              </span>
              <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
            </AccordionButton>
          </h2>
          <AccordionPanel className='text-left text-medium mt-2 !text-navy-900 dark:!text-white' pb={4}>
            ZOE™ is a simple and understated stackable shell chair with lots
            of personality and character that is as beautiful when seen from
            below as from above. The frame is discretely tucked into the
            chair's molded shell, and the shell's tapering thickness gives it
            a friendly expression.
          </AccordionPanel>
        </AccordionItem>

        {" "}

        <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
          <h2>
            <AccordionButton className="flex justify-between">
              <span
                className="text-left font-bold text-navy-900 dark:text-white"
                flex="1"
                textAlign="left"
              >
                Characteristics
              </span>
              <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
            </AccordionButton>
          </h2>
          <AccordionPanel
            className="text-medium mt-2 text-left !text-navy-900 dark:!text-white"
            pb={4}
          >
            ZOE™ is a simple and understated stackable shell chair with lots of
            personality and character that is as beautiful when seen from below as from
            above. The frame is discretely tucked into the chair's molded shell, and the
            shell's tapering thickness gives it a friendly expression.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10'>
          <h2>
            <AccordionButton className='flex justify-between'>
              <span className='text-left font-bold text-navy-900 dark:text-white' flex='1' textAlign='left'>
                Reviews
              </span>
              <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
            </AccordionButton>
          </h2>
          <AccordionPanel className='text-left text-medium mt-2 !text-navy-900 dark:!text-white' pb={4}>
            ZOE™ is a simple and understated stackable shell chair with lots
            of personality and character that is as beautiful when seen from
            below as from above. The frame is discretely tucked into the
            chair's molded shell, and the shell's tapering thickness gives it
            a friendly expression.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default About
