"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"

function Footerdemo() {


  return (
    <footer className="relative border-t border-white/10 bg-[#0A1628] text-white transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_14%_20%,rgba(44,62,107,0.35),transparent_42%)]" />

      <div className="container relative mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight font-altform uppercase text-white">Stay Connected</h2>
            <p className="mb-6 text-white/60">
              Get Gibson updates, booking slots, and practical maintenance tips.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#2C3E6B]"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-[#2C3E6B] text-white transition-transform hover:scale-105 hover:bg-[#3a5090]"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="mt-4">
              <Textarea
                placeholder="Tell us about your project..."
                className="min-h-[92px] resize-none bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#2C3E6B]"
              />
            </div>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-[#2C3E6B]/20 blur-2xl" />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#hero" className="block text-white/60 transition-colors hover:text-white">Home</a>
              <a href="#about" className="block text-white/60 transition-colors hover:text-white">About Us</a>
              <a href="/featured-projects" className="block text-white/60 transition-colors hover:text-white">Our Work</a>
              <a href="#booking" className="block text-white/60 transition-colors hover:text-white">Book</a>
              <a href="#testimonials" className="block text-white/60 transition-colors hover:text-white">Reviews</a>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-white/60">
              <p>17 Preston Road</p>
              <p>Standish, Wigan WN6 0HR</p>
              <p>Phone: 01942 873 026</p>
              <p>Email: info@gphwigan.co.uk</p>
            </address>
          </div>

          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
            <div className="mb-6 flex space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/30">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Follow us on Facebook</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/30">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Follow us on Twitter</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/30">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Follow us on Instagram</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/30">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Connect with us on LinkedIn</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>


          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row">
          <p className="text-sm text-white/40">© {new Date().getFullYear()} Gibson Plumbing &amp; Heating. All rights reserved.</p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="text-white/40 transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="text-white/40 transition-colors hover:text-white">Terms of Service</a>
            <a href="#" className="text-white/40 transition-colors hover:text-white">Cookie Settings</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
