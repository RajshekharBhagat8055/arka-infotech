'use client'

import React from 'react'
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
import { Mail, Phone, User, Building2, FileText } from 'lucide-react'
import contactFormSchema, { ContactFormData } from '@/validators/contact.validator'


// Default values for the form
const defaultValues: Partial<ContactFormData> = {
  fullName: '',
  email: '',
  phoneNumber: '',
  companyName: '',
  requirement: '',
}

export default function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  function onSubmit(data: ContactFormData) {
    console.log('Form Data:', data)
    console.log('---')
    console.log('Full Name:', data.fullName)
    console.log('Email:', data.email)
    console.log('Phone Number:', data.phoneNumber)
    console.log('Company Name:', data.companyName || 'Not provided')
    console.log('Requirement:', data.requirement)
    
    // Show success message
    alert('Form submitted successfully! Check the console for details.')
    
    // Reset form after submission
    form.reset()
  }

  return (
    <div className="w-full mx-auto mb-10">
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 md:p-8 border-2 overflow-hidden">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
          <p className="text-orange-500">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div className='grid grid-cols-2 gap-4'>

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
              <div className='grid grid-cols-2 gap-4'>

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
                {form.formState.isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </Button>
            </div>

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

