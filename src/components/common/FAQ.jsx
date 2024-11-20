/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const FAQ = () => {
    return (
        <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
            {/* FAQ Title */}
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <p className="faq-subtitle">Need help with something? Here are some of the most common questions we get.</p>

            {/* General Section */}
            <div className="faq-section">
                <h2 className="faq-section-title">General</h2>
                <Accordion type="single" collapsible className={"mx-2 border border-gray-400 rounded-md"}>
                    {/* First Accordion Item */}
                    <AccordionItem value="item-1" className={"accordion-item"}>
                        <AccordionTrigger className="accordion-trigger">What kinds of services you have?</AccordionTrigger>
                        <AccordionContent className="accordion-content">
                            We offer a wide range of services, including Vehicle Tracking System, Vehicle Management System, OTT Platform, Inventory Management System, Set-Top Box, and GMS Attendance System.
                        </AccordionContent>
                    </AccordionItem>
                    {/* Other Accordion Items */}
                    <AccordionItem value="item-2" className={"accordion-item"}>
                        <AccordionTrigger className="accordion-trigger">What does "lifetime updates"
                            mean?</AccordionTrigger>
                        <AccordionContent className="accordion-content">
                            You'll receive all future updates and improvements at no additional cost.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className={"accordion-item"}>
                        <AccordionTrigger className="accordion-trigger">How do I get access once I've
                            paid?</AccordionTrigger>
                        <AccordionContent className="accordion-content">
                            Once you complete the purchase, you will receive an email with instructions on how to access
                            the content.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className={"accordion-item"}>
                        <AccordionTrigger className="accordion-trigger">Do you offer refunds?</AccordionTrigger>
                        <AccordionContent className="accordion-content">
                            Yes, we offer a 30-day money-back guarantee if you are not satisfied with the product.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Support Section */}
            <div className="faq-section">
                <h2 className="faq-section-title">Support</h2>
                <Accordion type="single" collapsible className={"mx-2 border border-gray-400 rounded-md"}>
                    <AccordionItem value="item-5" className={"accordion-item"}>
                        <AccordionTrigger className="accordion-trigger">Do you offer technical
                            support?</AccordionTrigger>
                        <AccordionContent className="accordion-content">
                            Yes, we offer 24/7 technical support through our support portal.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;