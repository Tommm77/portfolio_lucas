// components/ContactFormModal.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from 'emailjs-com';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";

const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactFormModal({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const [alert, setAlert] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const onSubmit = (values: ContactFormValues) => {
        const templateParams = {
            to_name: "Lucas",
            from_name: values.name,
            from_email: values.email,
            message: values.message,
        };

        emailjs.send('service_0cznrpe', 'template_hrlp65g', templateParams, 'm3fzk3pP72MQnXCfL')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                form.reset();
                setAlert({ type: 'success', message: 'Your message has been sent successfully!' });
                setTimeout(() => {
                    setAlert(null);
                    onOpenChange(false);
                }, 3000);
            }, (error) => {
                console.log('FAILED...', error);
                setAlert({ type: 'error', message: 'Failed to send your message. Please try again later.' });
            });
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
                    <DialogDescription>
                        Fill out the form below to get in touch with us.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormDescription>Your full name.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="john.doe@example.com" {...field} />
                                    </FormControl>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <FormDescription>We'll never share your email.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Your message..." {...field} />
                                    </FormControl>
                                    <FormDescription>Your message to us.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
                {alert && (
                    <Alert className="mt-4" variant={alert.type === 'success' ? 'default' : 'destructive'}>
                        {alert.type === 'success' ? <RocketIcon className="h-4 w-4" /> : <ExclamationTriangleIcon className="h-4 w-4" />}
                        <AlertTitle>{alert.type === 'success' ? 'Success!' : 'Error'}</AlertTitle>
                        <AlertDescription>{alert.message}</AlertDescription>
                    </Alert>
                )}
            </DialogContent>
        </Dialog>
    );
}
