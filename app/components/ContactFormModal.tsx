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
import { useTranslations } from 'next-intl';

const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactFormModal({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
    const t = useTranslations('ContactFormModal');

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

        emailjs.send('service_5vpijpr', 'template_eud90pv', templateParams, 'j0sJ7KSIFeZO_OM80')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                form.reset();
                setAlert({ type: 'success', message: t('alert.successDescription') });
                setTimeout(() => {
                    setAlert(null);
                    onOpenChange(false);
                }, 3000);
            }, (error) => {
                console.log('FAILED...', error);
                setAlert({ type: 'error', message: t('alert.errorDescription') });
            });
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t('title')}</DialogTitle>
                    <DialogDescription>
                        {t('description')}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('form.name')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('form.namePlaceholder')} {...field} />
                                    </FormControl>
                                    <FormDescription>{t('form.nameDescription')}</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('form.email')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('form.emailPlaceholder')} {...field} />
                                    </FormControl>
                                    <FormDescription>{t('form.emailDescription')}</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('form.message')}</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder={t('form.messagePlaceholder')} {...field} />
                                    </FormControl>
                                    <FormDescription>{t('form.messageDescription')}</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">{t('form.submit')}</Button>
                    </form>
                </Form>
                {alert && (
                    <Alert className="mt-4" variant={alert.type === 'success' ? 'default' : 'destructive'}>
                        {alert.type === 'success' ? <RocketIcon className="h-4 w-4" /> : <ExclamationTriangleIcon className="h-4 w-4" />}
                        <AlertTitle>{alert.type === 'success' ? t('alert.successTitle') : t('alert.errorTitle')}</AlertTitle>
                        <AlertDescription>{alert.message}</AlertDescription>
                    </Alert>
                )}
            </DialogContent>
        </Dialog>
    );
}
