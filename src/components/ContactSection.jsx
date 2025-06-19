import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter, X } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { cn } from '@/lib/utils';
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser"

export const ContactSection = () => {

    const{ toast } = useToast();
    const[isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendform(
            "service_aok4nwm",
            "template_m5yzsv1",
            form.current,
            "8qZ11-1rRV2tjXkVb"
        )
        .then(
            (result) => {
                toast({
                    title: "Message Sent!",
                    description: "Thank you for your message, I'll get back to you soon.",
                });
                setIsSubmitting(false);
                form.current.reset();
            },
            (error) => {
                toast({
                    title: "Error",
                    description: "Oops! Something went wrong. Please try again.",
                    variant: "destructive",
                });
                setIsSubmitting(false);
            }, 1500);


    }
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a Project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email </h4>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=nalbalwarrudraksh@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    > nalbalwarrudraksh@gmail.com </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone No. </h4>
                                    <a
                                        href="tel:+919529868979"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    > +91 95298 68979 </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location </h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    > Nanded, Maharashtra, India </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect with Me </h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/rudraksh-nalbalwar-b32289226/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://x.com/NalbalwarRudra" target="_blank">
                                    <FaXTwitter />
                                </a>
                                <a href="https://www.instagram.com/nalbalwar_rudraksh/" target="_blank">
                                    <Instagram />
                                </a>                                
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send a message 
                        </h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name </label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="eg: John Devis"/>
                            </div>

                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium mb-2"> Your Email </label>
                                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="eg: john@gmail.com"/>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message </label>
                                <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="eg: Hello, I'd like to talk about..."/>
                            </div>

                            <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                {isSubmitting ? "Sending..." :"Send Message"}
                                <Send size={16} />

                            </button>
                        </form>

                    </div>
                </div>
            </div>

        </section>
    )
}