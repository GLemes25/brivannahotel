"use client";

import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";

import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { whatsappMessage } from "../helpers";

const validateCNPJ = (cnpj: string) => {
  const cleaned = cnpj.replace(/\D/g, "");

  if (cleaned.length !== 14) return false;
  if (/^(\d)\1+$/.test(cleaned)) return false;

  const calcCheck = (base: string, factors: number[]) => {
    const sum = base
      .split("")
      .reduce((acc, num, i) => acc + Number(num) * factors[i], 0);

    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - rest;
  };

  const base = cleaned.slice(0, 12);

  const digit1 = calcCheck(base, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  const digit2 = calcCheck(
    base + digit1,
    [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
  );

  return cleaned === base + digit1.toString() + digit2.toString();
};

const partnershipSchema = z.object({
  company: z.string().min(2, "Nome da empresa obrigatório"),

  cnpj: z.string().refine(validateCNPJ, "CNPJ inválido"),

  corporateEmail: z
    .string()
    .refine((val) => /^\S+@\S+\.\S+$/.test(val), "E-mail inválido"),

  monthlyStays: z.string().min(1, "Selecione o volume"),
});

type PartnershipFormData = z.infer<typeof partnershipSchema>;

type AgreementDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/* ---------------- COMPONENT ---------------- */

const AgreementDialog = ({ open, onOpenChange }: AgreementDialogProps) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipSchema),
    defaultValues: {
      company: "",
      cnpj: "",
      corporateEmail: "",
      monthlyStays: "",
    },
  });

  const onSubmit = async (data: PartnershipFormData) => {
    // const response = await fetch("/api/send-agreement", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });

    // if (!response.ok) return;

    setIsSuccess(true);
  };

  const handleOpenChange = (value: boolean) => {
    if (!value) {
      setIsSuccess(false);
      form.reset();
    }
    onOpenChange(value);
  };

  const shake = {
    initial: { x: 0 },
    animate: { x: 0 },
    error: {
      x: [0, -4, 4, -3, 3, 0],
      transition: { duration: 0.3 },
    },
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md bg-white text-neutral-900 border-neutral-200">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center text-center py-6 gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle size={30} className="text-green-800" />
              </div>

              <h3 className="text-xl font-serif tracking-tight">
                Solicitação recebida!
              </h3>

              <p className="text-neutral-500 text-sm">
                Nossa equipe comercial entrará em contato em breve.
              </p>

              <Button
                asChild
                className="mt-2 w-full rounded-xl font-semibold uppercase bg-green-800 hover:bg-green-600"
              >
                <a
                  href={whatsappMessage(
                    "Olá! Gostaria de falar sobre o convênio empresarial.",
                  )}
                  target="_blank"
                >
                  <Image
                    src="/whatsapp_icon2.svg"
                    alt="WhatsApp"
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                  Atendimento via WhatsApp
                </a>
              </Button>
            </motion.div>
          ) : (
            <motion.div key="form">
              <DialogHeader>
                <DialogTitle className="font-serif tracking-tight">
                  Solicitar Convênio Empresarial
                </DialogTitle>
                <DialogDescription>
                  Preencha os dados e retornaremos em até 24h.
                </DialogDescription>
              </DialogHeader>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="mt-4 space-y-4"
                >
                  {/* COMPANY */}
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field, fieldState }) => (
                      <motion.div
                        variants={shake}
                        animate={fieldState.error ? "error" : "animate"}
                      >
                        <FormItem>
                          <FormLabel
                            className={`font-serif ${fieldState.error ? "text-red-600" : ""}`}
                          >
                            Empresa
                          </FormLabel>

                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Nome da empresa"
                              className={`bg-neutral-50 ${
                                fieldState.error
                                  ? "border-red-500 focus-visible:ring-red-500"
                                  : "border-neutral-200"
                              }`}
                            />
                          </FormControl>

                          <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                      </motion.div>
                    )}
                  />

                  {/* CNPJ */}
                  <FormField
                    control={form.control}
                    name="cnpj"
                    render={({ field, fieldState }) => (
                      <motion.div
                        variants={shake}
                        animate={fieldState.error ? "error" : "animate"}
                      >
                        <FormItem>
                          <FormLabel
                            className={`font-serif ${fieldState.error ? "text-red-600" : ""}`}
                          >
                            CNPJ
                          </FormLabel>

                          <FormControl>
                            <Input
                              {...field}
                              placeholder="00.000.000/0001-00"
                              className={`bg-neutral-50 ${
                                fieldState.error
                                  ? "border-red-500 focus-visible:ring-red-500"
                                  : "border-neutral-200"
                              }`}
                            />
                          </FormControl>

                          <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                      </motion.div>
                    )}
                  />

                  {/* EMAIL */}
                  <FormField
                    control={form.control}
                    name="corporateEmail"
                    render={({ field, fieldState }) => (
                      <motion.div
                        variants={shake}
                        animate={fieldState.error ? "error" : "animate"}
                      >
                        <FormItem>
                          <FormLabel
                            className={`font-serif ${fieldState.error ? "text-red-600" : ""}`}
                          >
                            E-mail Corporativo
                          </FormLabel>

                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="nome@empresa.com.br"
                              className={`bg-neutral-50 ${
                                fieldState.error
                                  ? "border-red-500 focus-visible:ring-red-500"
                                  : "border-neutral-200"
                              }`}
                            />
                          </FormControl>

                          <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                      </motion.div>
                    )}
                  />

                  {/* SELECT */}
                  <FormField
                    control={form.control}
                    name="monthlyStays"
                    render={({ field, fieldState }) => (
                      <motion.div
                        variants={shake}
                        animate={fieldState.error ? "error" : "animate"}
                      >
                        <FormItem>
                          <FormLabel
                            className={`font-serif ${fieldState.error ? "text-red-600" : ""}`}
                          >
                            Volume de Estadias / mês
                          </FormLabel>

                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger
                                className={`bg-neutral-50 ${
                                  fieldState.error
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-neutral-200"
                                }`}
                              >
                                <SelectValue placeholder="Selecione o volume" />
                              </SelectTrigger>
                            </FormControl>

                            <SelectContent className="bg-white text-black border border-gray-500 shadow-lg">
                              <SelectItem value="1-5">1 a 5</SelectItem>
                              <SelectItem value="6-20">6 a 20</SelectItem>
                              <SelectItem value="21-50">21 a 50</SelectItem>
                              <SelectItem value="50+">50+</SelectItem>
                            </SelectContent>
                          </Select>

                          <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                      </motion.div>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full rounded-xl font-semibold uppercase"
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={16} />
                        Enviando...
                      </>
                    ) : (
                      "Solicitar Convênio"
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default AgreementDialog;
