/* eslint-disable @next/next/no-img-element */

"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { DATA } from "@/data/resume";

import { ChevronDown, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none "
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {DATA.work.map((work, index) => (
        <AccordionItem
          key={`${work.company}-${work.title}-${work.start}-${index}`}
          value={`${work.company}-${work.title}-${work.start}`}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              {/* LEFT SIDE */}
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={work.logoUrl} alt={work.company} />

                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  {/* Company */}
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {work.company}

                    <span
                      className={cn(
                        "inline-flex items-center justify-center",
                        "h-5 w-5 rounded-full border border-border",
                        "text-muted-foreground"
                      )}
                    >
                      <ChevronDown
                        className={cn(
                          "h-3 w-3 stroke-2 transition-transform duration-300",
                          "group-data-[state=open]:rotate-180"
                        )}
                      />
                    </span>
                  </div>

                  {/* Job Title */}
                  <div className="font-sans text-sm text-muted-foreground">
                    {work.title}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col items-end gap-0.5 text-xs tabular-nums text-muted-foreground text-right flex-none">
                {/* Location */}
                {work.location && <span>{work.location}</span>}

                {/* Date */}
                <span>
                  {work.start} – {work.end ?? "Present"}
                </span>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
            {/* Tech Stack */}
            {work.techStack && work.techStack.length > 0 && (
              <div className="mb-2">
                <span className="font-semibold text-foreground">
                  Tech Stack:
                </span>{" "}
                <span>{work.techStack.join(", ")}</span>
              </div>
            )}

            {/* Description */}
            {Array.isArray(work.description) ? (
              <ul className="list-disc ml-5 space-y-1">
                {work.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{work.description}</p>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
