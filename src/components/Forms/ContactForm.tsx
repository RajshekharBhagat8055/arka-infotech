'use client'

import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, User, Building2, FileText, CheckCircle, XCircle } from 'lucide-react'
import contactFormSchema, { ContactFormData } from '@/validators/contact.validator'

// Default values for the form
const defaultValues: Partial<ContactFormData> = {
  fullName: '',
  email: '',
  phoneNumber: '',
  companyName: '',
  requirement: '',
}

interface ContactFormProps {
  serviceName?: string;
  serviceCategory?: string;
}

export default function ContactForm({ serviceName, serviceCategory }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  async function onSubmit(data: ContactFormData) {
    try {
      setSubmitStatus('idle')
      setSubmitMessage('')

      // Prepare payload with service information
      const payload = {
        ...data,
        serviceName: serviceName || 'General Inquiry',
        serviceCategory: serviceCategory || 'Contact Form',
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        timestamp: new Date().toISOString(),
      }

      // Call the API route to send email
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your inquiry has been submitted successfully. We\'ll get back to you soon.')
        form.reset()
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
          setSubmitMessage('')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.message || 'Failed to send your inquiry. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setSubmitMessage('An error occurred. Please try again later or contact us directly.')
    }
  }

  return (
    <div className="w-full mx-auto mb-10">
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl py-6 px-2 md:p-8 border-2 overflow-hidden">
        <div className="mb-8 px-2">
          <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
          <p className="text-orange-500">
            {serviceName 
              ? `Interested in ${serviceName}? Fill out the form below and we'll get back to you as soon as possible.`
              : "Fill out the form below and we'll get back to you as soon as possible."
            }
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-2">
            {/* Full Name */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-white">
                      <User className="w-4 h-4 text-orange-500" />
                      Full Name *
                    </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John Doe" 
                      {...field} 
                      className="focus:border-orange-500"
                      />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                  <FormItem>
                  <FormLabel className="flex items-center gap-2 text-white">
                    <Mail className="w-4 h-4 text-orange-500" />
                    Email Address *
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="john.doe@example.com" 
                      {...field}
                      className="focus:border-orange-500"
                      />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                  <FormItem>
                  <FormLabel className="flex items-center gap-2 text-white">
                    <Phone className="w-4 h-4 text-orange-500" />
                    Phone Number *
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="tel"
                      placeholder="+91 98765 43210" 
                      {...field}
                      className="focus:border-orange-500"
                      />
                  </FormControl>
                  <FormDescription className='text-gray-400 hidden md:block'>
                    Include country code for international numbers
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
              />

            {/* Company Name */}
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                  <FormItem>
                  <FormLabel className="flex items-center gap-2 text-white">
                    <Building2 className="w-4 h-4 text-orange-500" />
                    Company Name
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your Company Pvt. Ltd." 
                      {...field}
                      className="focus:border-orange-500"
                      />
                  </FormControl>
                  <FormDescription className='text-gray-400 hidden md:block'>
                    Optional - helps us understand your business better
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
              />
              </div>

            {/* Requirement */}
            <FormField
              control={form.control}
              name="requirement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-white">
                    <FileText className="w-4 h-4 text-orange-500" />
                    Your Requirement *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project requirements, goals, and timeline..."
                      className="resize-none min-h-[120px] focus:border-orange-500"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide as much detail as possible to help us understand your needs
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6 text-lg transition-all hover:scale-[1.02]"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </Button>
            </div>

            {/* Status Message */}
            {submitStatus !== 'idle' && (
              <div
                className={`flex items-center gap-3 p-4 rounded-lg border-2 ${
                  submitStatus === 'success'
                    ? 'bg-green-50 border-green-500 text-green-800'
                    : 'bg-red-50 border-red-500 text-red-800'
                }`}
              >
                {submitStatus === 'success' ? (
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 flex-shrink-0" />
                )}
                <p className="text-sm font-medium">{submitMessage}</p>
              </div>
            )}

            {/* Privacy Note */}
            <p className="text-xs text-gray-500 text-center pt-2">
              By submitting this form, you agree to our privacy policy. 
              We&apos;ll never share your information with third parties.
            </p>
          </form>
        </Form>
      </div>
    </div>
  )
}

