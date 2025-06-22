import { useState } from "react";
import "./FAQs.css";

export const FAQs = () => {
    // FAQ data
    const faqs = [
        {
            question: "How do I apply for admission?",
            answer: "You can apply for admission by filling out the online application form available on our website. After submission, you will receive further instructions via email."
        },
        {
            question: "What are the eligibility criteria for diploma courses?",
            answer: "Candidates must have passed 10th grade or equivalent from a recognized board. Specific requirements may vary by course."
        },
        {
            question: "How can I pay the admission fee?",
            answer: "You can pay the admission fee online via net banking, UPI, or credit/debit card. Cash payment is also accepted at the college accounts office."
        },
        {
            question: "Are scholarships available for students?",
            answer: "Yes, scholarships are available for eligible students. You can find more information on the 'Scholarships' page or contact the scholarship cell."
        },
        {
            question: "What is the duration of the diploma courses?",
            answer: "The diploma courses are typically 3 years in duration."
        },
        {
            question: "How do I contact the college for more information?",
            answer: "You can contact us via email at info@gvtm.edu.in or by phone at +91 XXXXX XXXXX."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faqs-page">
            <div className="faqs-header">
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className="faqs-container">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <h3>{faq.question}</h3>
                            <span>{activeIndex === index ? '−' : '+'}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="faqs-footer">
                <p>Didn’t find your question? <a href="/contact">Contact us</a> for more information.</p>
            </div>
        </div>
    );
};
