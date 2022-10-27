import { Accordion } from "flowbite-react";
import React from "react";

const FAQ = () => {
  return (
    <div className="container mx-auto py-10 w-4/5 ">
      <div>
        <h3 className="text-4xl font-semibold my-8 underline italic dark:text-slate-200">
          FAQ
        </h3>
      </div>
      <Accordion
        className="border-2 border-gray-400 shadow-lg mt-16 dark:bg-slate-700"
        alwaysOpen={true}
      >
        <Accordion.Panel>
          <Accordion.Title>
            Can I just enroll in a single course?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes! To get started, click the course card that interests you and
              enroll. You can enroll and complete the course to earn a shareable
              certificate, or you can audit it to view the course materials for
              free. When you subscribe to a course that is part of a
              Certificate, you’re automatically subscribed to the full
              Certificate. Visit your learner dashboard to track your progress.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Is this course really 100% online? Do I need to attend any classes
            in person?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              This course is completely online, so there’s no need to show up to
              a classroom in person. You can access your lectures, readings and
              assignments anytime and anywhere via the web or your mobile
              device.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What background knowledge is necessary?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              None! Whether you’re completely new to the job field or have had
              some exposure, these career certificate are the right choice for
              you.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is the refund policy?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              If you subscribed, you get a 7-day free trial during which you can
              cancel at no penalty. After that, we don’t give refunds, but you
              can cancel your subscription at any time.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What resources will be available to help with the job search
            process?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              In addition to expert-led training and hands-on projects designed
              to prepare you for a job, you'll get access to an interview
              practice tool, mock interviews and resume building workshops,
              career coaching sessions and more. You'll also be able to connect
              with over 150 employers who are searching for candidates who have
              completed these courses.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default FAQ;
