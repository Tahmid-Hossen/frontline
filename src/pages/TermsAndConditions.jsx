import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                    Terms and Conditions
                </h1>
                <p className="text-gray-600 mb-4">
                    Welcome to Frontline! These terms and conditions outline the rules
                    and regulations for the use of our services. By accessing or using
                    our services, you agree to abide by these terms.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    1. Services Offered
                </h2>
                <p className="text-gray-600 mb-4">
                    Frontline offers a range of services, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>Digital Marketing</li>
                    <li>Media Buying</li>
                    <li>Outdoor Branding</li>
                    <li>Influencer Marketing</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    2. Use of Services
                </h2>
                <p className="text-gray-600 mb-4">
                    By engaging with our services, you agree to provide accurate
                    information and not misuse our services in any way. Misuse includes,
                    but is not limited to, violating intellectual property rights,
                    engaging in illegal activities, or causing harm to others.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    3. Payment Terms
                </h2>
                <p className="text-gray-600 mb-4">
                    Payment for services is due as agreed upon in your contract or
                    invoice. Late payments may incur additional fees. Frontline reserves
                    the right to suspend services in the event of non-payment.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    4. Confidentiality
                </h2>
                <p className="text-gray-600 mb-4">
                    We respect your privacy and maintain strict confidentiality of your
                    information. Any data shared during our engagement will be used solely
                    for the purpose of delivering services.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    5. Intellectual Property
                </h2>
                <p className="text-gray-600 mb-4">
                    All materials created by Frontline, including but not limited to
                    designs, campaigns, and marketing strategies, remain the intellectual
                    property of Frontline unless otherwise agreed upon in writing.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    6. Termination of Services
                </h2>
                <p className="text-gray-600 mb-4">
                    Either party may terminate the agreement at any time, provided that
                    written notice is given. Upon termination, all outstanding payments
                    become due immediately.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    7. Liability
                </h2>
                <p className="text-gray-600 mb-4">
                    Frontline is not liable for any indirect, incidental, or
                    consequential damages arising from the use of our services. Our total
                    liability is limited to the fees paid for the specific service
                    causing the issue.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    8. Governing Law
                </h2>
                <p className="text-gray-600 mb-4">
                    These terms are governed by the laws of [Your Country/State]. Any
                    disputes will be resolved in the courts of [Your City/Region].
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    9. Changes to Terms
                </h2>
                <p className="text-gray-600 mb-4">
                    Frontline reserves the right to update these terms at any time. We
                    will notify you of significant changes via email or by posting
                    updates on our website.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    10. Contact Us
                </h2>
                <p className="text-gray-600">
                    If you have any questions about these terms, please contact us at
                    <a
                        href="mailto:support@frontline.com"
                        className="text-blue-500 underline"
                    >
                        {" "}
                        support@frontline.com
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
