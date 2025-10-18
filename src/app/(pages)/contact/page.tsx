'use client';

import React from "react";
import ContactForm from "@/components/Forms/ContactForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Mail, Phone, MapPin, Clock, Globe, Headphones, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import { usePageReady } from "@/hooks/usePageReady";

export default function ContactPage() {
    const isPageReady = usePageReady();
    const [selectedOffice, setSelectedOffice] = React.useState(0);
    
    const contactMethods = [
        {
            icon: Phone,
            title: "Call Us",
            primary: "+91 8898124167",
            secondary: "+91 8879133093",
            description: "Mon-Sat: 9 AM - 7 PM IST",
            link: "tel:+919876543210",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: Mail,
            title: "Email Us",
            primary: "arkasoftware@zohomail.in",
            secondary: "arka.infotech.solutions@gmail.com",
            description: "24/7 Email Support",
            link: "mailto:arka.infotech.solutions@gmail.com",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            primary: "Ghatkopar, Mumbai - 400077",
            link: "#map",
            color: "from-purple-500 to-pink-500"
        }
    ];

    const officeLocations = [
        {
            city: "Mumbai - Ghatkopar",
            address: "512, Suchita Business Park Patel chowk, opposite Hanuman temple, Shival Nagar, Saibaba Nagar, Pant Nagar, Ghatkopar East, Mumbai, Maharashtra 400077",
            pincode: "400077",
            country: "India",
            phone: "+91 8898124167",
            email: "arkasoftware@zohomail.in",
            mapUrl: "https://maps.google.com/maps?q=19.085116550762237,72.90790578768954&z=15&output=embed",
            directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=19.085116550762237,72.90790578768954",
            color: "from-orange-500 to-red-500"
        },
        {
            city: "Siwan - Bihar",
            address: "Ground Floor 1, Kiran Palace, Sikshak Nagar, Kandwara, Siwan",
            pincode: "841226",
            country: "India",
            phone: "+91 8898124167",
            email: "arkasoftware@zohomail.in",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223.70080530147987!2d84.33643887729365!3d26.222271525167077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992fc0166e38983%3A0x623c6c1cb7d5211f!2sSiwan%2C%20Bihar!5e0!3m2!1sen!2sin!4v1760788811079!5m2!1sen!2sin",
            directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.219,84.356",
            color: "from-blue-500 to-cyan-500"
        },
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section with Contact Form - Black Theme */}
            <section className="bg-black py-16 md:py-24 relative overflow-hidden">
                {/* Background Pattern */}
                <DotPattern opacity={0.4} />

                <MaxWidthWrapper className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isPageReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold mb-4 border border-orange-500/30">
                            Contact Us
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Let&apos;s Build Something
                            <span className="text-orange-500"> Amazing Together</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Have a project in mind? We&apos;re here to turn your ideas into reality.
                            Get in touch with our expert team today.
                        </p>
                    </motion.div>

                    {/* Grid Layout for Hero Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Side - Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isPageReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4">
                                    Why Choose Arka Infotech?
                                </h2>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    We&apos;re not just a software company—we&apos;re your technology partner.
                                    With 6+ years of experience and a proven track record of 100+ successful projects, we deliver solutions
                                    that drive real business results.
                                </p>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-orange-500/30">
                                    <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
                                    <div className="text-gray-300 font-medium">Projects Delivered</div>
                                </div>
                                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-orange-500/30">
                                    <div className="text-3xl font-bold text-orange-500 mb-2">95%</div>
                                    <div className="text-gray-300 font-medium">Client Satisfaction</div>
                                </div>
                                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-orange-500/30">
                                    <div className="text-3xl font-bold text-orange-500 mb-2">20+</div>
                                    <div className="text-gray-300 font-medium">Expert Team Members</div>
                                </div>
                                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-orange-500/30">
                                    <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                                    <div className="text-gray-300 font-medium">Support Available</div>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="space-y-4">
                                {[
                                    { icon: Headphones, text: "Dedicated Support Team" },
                                    { icon: Clock, text: "Quick Response Time" },
                                    { icon: Globe, text: "Global Delivery Centers" },
                                    { icon: Building2, text: "Trusted by 150+ Clients" }
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isPageReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-gray-300 font-medium">{feature.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Side - Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isPageReady ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <ContactForm
                                serviceName="General Inquiry"
                                serviceCategory="Contact Page"
                            />
                        </motion.div>
                    </div>
                </MaxWidthWrapper>
            </section>

            {/* Connect With Us Section - White Theme */}
            <section className="bg-white py-20">
                <MaxWidthWrapper>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
                            Get In Touch
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                            Connect With Us
                        </h2>
                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-2xl mx-auto">
                            Choose your preferred way to reach out. We&apos;re always here to help you succeed.
                        </p>
                    </motion.div>

                    {/* Contact Method Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.link}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative bg-gradient-to-br from-gray-50 to-white p-3 md:p-6 rounded-2xl border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
                            >
                                {/* Gradient Overlay */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-300`}></div>

                                {/* Icon */}
                                <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <method.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                                <p className="text-orange-600 font-semibold mb-1">{method.primary}</p>
                                <p className="text-gray-600 text-sm mb-2">{method.secondary}</p>
                                <p className="text-gray-500 text-xs">{method.description}</p>

                                {/* Hover Arrow */}
                                <div className="absolute bottom-6 right-6 w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Office Locations */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className=" grid grid-cols-1 md:grid-cols-2  gap-8 mx-auto"
                    >
                        {officeLocations.map((office, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-orange-50 to-white p-3 md:p-6 rounded-xl border-2 border-orange-200 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                                        <Building2 className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
                                </div>
                                <div className="space-y-2 text-gray-600">
                                    <p className="text-sm">{office.address}</p>
                                    <p className="text-sm">{office.pincode}</p>
                                    <p className="text-sm font-semibold text-orange-600">{office.country}</p>
                                    <div className="pt-3 mt-3 border-t border-orange-200 space-y-1">
                                        <p className="text-sm flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-orange-500" />
                                            {office.phone}
                                        </p>
                                        <p className="text-sm flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-orange-500" />
                                            {office.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </MaxWidthWrapper>
            </section>

            {/* Map Section - Black Theme */}
            <section id="map" className="bg-black rounded-t-4xl py-20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle, rgb(249 115 22) 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                    }}></div>
                </div>

                <MaxWidthWrapper className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold mb-4 border border-orange-500/30">
                            Find Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Our <span className="text-orange-500">Location</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Visit our office and experience our culture firsthand. We&apos;d love to meet you in person.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-500/20"
                    >
                        {/* Google Maps Embed with Multiple Markers */}
                        <div className="relative w-full h-[500px]">
                            <motion.iframe
                                key={selectedOffice}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                src={officeLocations[selectedOffice].mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale-[20%] contrast-[1.1]"
                                title={`${officeLocations[selectedOffice].city} Location`}
                            ></motion.iframe>

                            {/* Overlay Card - Toggle for All Screens */}
                            <div className="absolute bottom-6 left-6 right-6 md:left-6 md:right-auto md:w-96 bg-white rounded-xl shadow-2xl border border-gray-200">
                                {/* Toggle Buttons */}
                                <div className="flex gap-2 p-2 bg-gray-100 rounded-t-xl">
                                    {officeLocations.map((office, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedOffice(index)}
                                            className={`flex-1 py-2 px-3 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                                                selectedOffice === index
                                                    ? 'bg-orange-500 text-white shadow-md'
                                                    : 'bg-white text-gray-600 hover:bg-gray-50'
                                            }`}
                                        >
                                            {index === 0 ? 'Maharashtra' : 'Bihar'}
                                        </button>
                                    ))}
                                </div>
                                
                                {/* Show only selected office */}
                                <motion.div
                                    key={selectedOffice}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="p-3 md:p-4"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${officeLocations[selectedOffice].color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                                                {selectedOffice === 0 ? 'Head Office' : 'Branch Office'}
                                            </h3>
                                            <p className="text-gray-600 text-xs md:text-sm mb-2">
                                                {officeLocations[selectedOffice].city}
                                            </p>
                                            <a
                                                href={officeLocations[selectedOffice].directionsUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-orange-500 font-semibold text-xs md:text-sm hover:text-orange-600 transition-colors"
                                            >
                                                Get Directions
                                                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Additional Info Below Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                    >
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-orange-500/30">
                            <Clock className="w-8 h-8 text-orange-500 mb-3" />
                            <h3 className="font-bold text-white mb-2">Business Hours</h3>
                            <p className="text-gray-400 text-sm">Monday - Friday: 9:00 AM - 7:00 PM</p>
                            <p className="text-gray-400 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                            <p className="text-gray-400 text-sm">Sunday: Closed</p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-orange-500/30">
                            <Phone className="w-8 h-8 text-orange-500 mb-3" />
                            <h3 className="font-bold text-white mb-2">Emergency Support</h3>
                            <p className="text-gray-400 text-sm mb-1">24/7 Critical Support Available</p>
                            <a href="tel:+918898124167" className="text-orange-500 font-semibold text-sm hover:text-orange-600">
                                +91 8898124167
                            </a>
                        </div>
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-orange-500/30">
                            <Globe className="w-8 h-8 text-orange-500 mb-3" />
                            <h3 className="font-bold text-white mb-2">Office Address</h3>
                            <p className="text-gray-400 text-sm">512, Suchita Business Park Patel chowk, opposite Hanuman temple, Shival Nagar, Saibaba Nagar, Pant Nagar, Ghatkopar East, Mumbai, Maharashtra 400077</p>
                        </div>
                    </motion.div>
                </MaxWidthWrapper>
            </section>
        </main>
    )
}